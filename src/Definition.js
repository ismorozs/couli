import LIB_ATTR from './globals/attributes';
import RE from './globals/regexp';

import {
  cloneHTMLMarkup,
  walkNodes,
} from './helpers/dom';

import { set, forEach, map, mapKeys, toObject } from './helpers/object';

import copy from './helpers/copy';

import {
  isArray,
  isFunction,
  isObject,
  isEmpty,
} from './helpers/checkers';

import {
  toCamelCase,
  getShortName,
} from './helpers/common';

import {
  getOnlyValues,
} from './State';

import {
  createAndAppendStyles,
} from './View';

import ComponentRedefineError from './errors/ComponentRedefineError';
import ScopeNameCollisionError from './errors/ScopeNameCollisionError';


const VALUE_TYPES = ['style', 'class', 'value', 'attrs', 'html'];
const RESERVED_HOOKS_NAMES = ['mount', 'update', 'remove'];
const DEFAULT_HOOKS = toObject(RESERVED_HOOKS_NAMES, () => () => {});
const RESERVED_BINDING_NAMES = VALUE_TYPES.concat(['events', 'hooks', 'listItem', LIB_ATTR.SELF]);

export {
  define,
  getComponentOpts,
  shortenBindingId,
  isComponent,
  VALUE_TYPES,
  RESERVED_BINDING_NAMES,
};

let COMPONENT_COUNTER = 0;
const COMPONENTS = {};

function define (name, markup, bindings, styles) {
  const args = isObject(name) ? name : { name, markup, bindings, styles };

  name = toCamelCase(args.name);

  if (COMPONENTS[name]) {
    throw new ComponentRedefineError(name);
  }

  const componentHTMLMarkup = cloneHTMLMarkup(args.markup);
  componentHTMLMarkup.classList.add(name);

  COMPONENT_COUNTER = 0;
  const component = {
    name,
    state: { [LIB_ATTR.SELF]: {} },
    stateId: name,
    statePath: [name],
    stateNames: {},
    markup: componentHTMLMarkup,
    evaluate: {},
    links: {},
    isComponent: true,
    outerNames: {},
    _links: {},
  };

  gatherBindingsFromMarkup(componentHTMLMarkup, component);

  const normalizedOptions = normalizeUserOptions(args.bindings, { state: {} });
  copy(component, normalizedOptions);

  prepareBindings (component, component.stateId, { statePath: [], links: {}, stateNames: component.stateNames });

  createAndAppendStyles( prepareStyles(args.styles, component) );

  return COMPONENTS[name] = component;
}

function gatherBindingsFromMarkup (componentHTMLMarkup, component) {
  walkNodes(componentHTMLMarkup, (HTMLNode) => {
    const bindingOpts = analyzeBinding(HTMLNode);

    if (!bindingOpts) {
      return;
    }

    const binding = createBinding(bindingOpts.name, component, HTMLNode);

    if (bindingOpts.isComponent) {
      setComponent(binding, bindingOpts);
      HTMLNode.classList.add(LIB_ATTR.PREFIX + binding.id);
    }

    component.state[binding.name] = binding;
    binding.markup.classList.add(LIB_ATTR.PREFIX + binding.id, component.name + '-' + binding.name);

    if (bindingOpts.isList) {
      const itemNode = HTMLNode.children[0];
      modifyToListBinding(binding, itemNode);

      if (isComponent(itemNode)) {
        setComponent(binding.listItem, getComponentOpts(itemNode));
        return -1;
      }

      gatherBindingsFromMarkup(itemNode, binding.listItem);
      return -1;
    }
  });

  return component;
}

function setComponent (componentBinding, subComponentOpts) {
  const stateNames = Object.assign(componentBinding.stateNames, subComponentOpts.component.stateNames);
  let stateId = subComponentOpts.component.name + 'x' + COMPONENT_COUNTER++;

  if (subComponentOpts.stateName) {
    if (stateNames[subComponentOpts.stateName]) {
      throw new ScopeNameCollisionError(subComponentOpts.stateName);
    }

    stateId = subComponentOpts.stateName;
    componentBinding.stateNames[stateId] = true;
  }

  copy(componentBinding, subComponentOpts.component);

  return Object.assign( componentBinding, {
    id: stateId,
    stateId,
    name: stateId,
    stateName: subComponentOpts.stateName,
    statePath: componentBinding.statePath.concat(stateId),
    markup: subComponentOpts.component.markup.cloneNode(true),
    isComponent: true,
    stateNames,
    _links: Object.assign({}, subComponentOpts.links),
    outerNames: Object.assign({}, subComponentOpts.revLinks),
  });
}

function prepareBindings (component, currentStateId, parentComponent) {
  const componentWrapper = document.createElement('div');
  component.markup.setAttribute(LIB_ATTR.BINDING_ID, shortenBindingId( currentStateId + LIB_ATTR.STATE_DELIMITER + LIB_ATTR.SELF ));
  componentWrapper.appendChild(component.markup);
  component.statePath = parentComponent.statePath.concat(component.stateId);
  component.stateNames = parentComponent.stateNames;

  const subComponents = [];

  forEach(component.state, (binding, bindingName) => {
    const oldBindingId = binding.id;
    const newBindingId = currentStateId + LIB_ATTR.STATE_DELIMITER + bindingName;
    const shortId = shortenBindingId(newBindingId);

    if (binding.markup) {
      const bindingNode = componentWrapper.querySelector('.' + LIB_ATTR.PREFIX + oldBindingId);
      bindingNode.setAttribute(LIB_ATTR.BINDING_ID, shortId);
      bindingNode.classList.remove(LIB_ATTR.PREFIX + oldBindingId);
      bindingNode.classList.add(LIB_ATTR.PREFIX + newBindingId);
    }

    Object.assign(binding, {
      statePath: component.statePath.slice(),
      hooks: Object.assign({}, DEFAULT_HOOKS, binding.hooks),
      id: newBindingId,
      shortId,
    });

    prepareReactiveFuncs(binding, component);

    if (binding.isList) {
      binding.statePath.push(bindingName);
      binding.stateNames = component.stateNames;

      prepareBindings (binding.listItem, newBindingId + LIB_ATTR.STATE_DELIMITER + LIB_ATTR.ITEM + binding.listItem.name, binding);
      return;
    }

    if (binding.isComponent) {
      subComponents.push(binding);
    }
  });

  setupComponentsLinks(component, parentComponent);
  component.template = component.markup.cloneNode(true);

  subComponents.forEach((subComponent) => {
    prepareBindings (subComponent, currentStateId + LIB_ATTR.STATE_DELIMITER + subComponent.stateId, component);
  });
}

function prepareReactiveFuncs (binding, componentData) {
  VALUE_TYPES.forEach((type) => {
    const reactiveFunc = binding[type];
    if (!reactiveFunc) {
      return;
    }

    binding.evaluate[type] = prepareReactiveFunc(binding, type, reactiveFunc, componentData)
  });
}

function prepareReactiveFunc (binding, type, reactiveFunc, componentData) {
  const dependenciesNames = getDependenciesNames(reactiveFunc);

  dependenciesNames.forEach((dependencyName) => {
    if (isEmpty(componentData.state[dependencyName])) {
      componentData.state[dependencyName] = createBinding(dependencyName, componentData);
    }

    componentData.state[dependencyName].dependants[ binding.name + ':' + type ] = { name: binding.name, type };
  });

  return (values, componentInterface) => compute (reactiveFunc, values, componentInterface);
}

function getDependenciesNames(func) {
  const funcParams = getParamNames(func);
  const valuesObjRegExp =  new RegExp('\\' + funcParams[0] + '\\.(\\D[^\\s\\W]+)', 'g');
  const dependenciesNames = [];
  const funcStr = func.toString();
  let dependencyName;
  while ((dependencyName = valuesObjRegExp.exec(funcStr))) {
    dependenciesNames.push(dependencyName[1]);
  }
  return dependenciesNames;
}

function getParamNames(func) {
  const funcStrWithoutComments = func.toString().replace(RE.STRIP_COMMENTS, '');
  const paramsStr = funcStrWithoutComments.slice(
    funcStrWithoutComments.indexOf('(') +1,
    funcStrWithoutComments.indexOf(')')
  );
  return paramsStr.match(RE.ARGUMENT_NAMES) || [];
}

function compute (func, valuesObj, componentInterface) {
  return func.call(this, getOnlyValues(valuesObj), componentInterface);
}

function setupComponentsLinks (component, parentComponent) {
  Object.assign(
    parentComponent.links,
    map(component.outerNames, (k) => ({ link: k, component: component.stateId }))
  );
}

function normalizeUserOptions (optionsObj, parentObj, parentKey) {
  if (isFunction (optionsObj)) {
    return set(parentObj, [parentKey], { class: optionsObj });
  }

  if (isArray(optionsObj)) {

    if (optionsObj.length > 1) {
      optionsObj.forEach((option) => normalizeUserOptions (option, parentObj, parentKey));
      return;
    }

    if (isFunction(optionsObj[0])) {
      return set(parentObj, [parentKey], { value: optionsObj[0] });
    }
    if (isObject(optionsObj[0])) {
      return set(parentObj, [parentKey], { events: optionsObj[0] });
    }
  }

  forEach(optionsObj, (value, key) => {
    delete optionsObj[key];
    const binding = createBinding(key);

    if (isObject(value)) {
      parentObj['state'][key] = Object.assign(binding, value);
      return;
    }

    parentObj['state'][key] = binding;
    normalizeUserOptions(value, parentObj['state'], key);
  });

  return parentObj;
}

function analyzeBinding (el) {
  if (isComponent(el)) {
    return getComponentOpts(el);
  }

  if (!el.getAttribute) {
    return null;
  }

  let name = el.getAttribute(LIB_ATTR.TEMPLATE_BINDING);
  el.removeAttribute(LIB_ATTR.TEMPLATE_BINDING);

  if (name) {
    return { name: name.trim() };
  }

  name = el.getAttribute(LIB_ATTR.TEMPLATE_LIST_BINDING);
  el.removeAttribute(LIB_ATTR.TEMPLATE_LIST_BINDING);

  if (name) {
    return { name: name.trim(), isList: true };
  }
}

function isComponent (el) {
  const tagName = el.tagName && el.tagName.toLowerCase();
  return tagName && COMPONENTS[ toCamelCase(tagName) ];
}

function getComponentOpts (obj) {
  const name = toCamelCase( obj.tagName.toLowerCase() );
  const component = getComponentByName(name);
  const links = {};
  const revLinks = {};
  let stateName = null;

  Array.prototype.slice.call(obj.attributes)
    .forEach((attr) => {

      if (attr.name === LIB_ATTR.STATE_NAME) {
        stateName = attr.value;
        return;
      }

      const innerLink = toCamelCase(attr.name);
      links[innerLink] = attr.value;
      revLinks[attr.value] = innerLink;
    });

  return {
    component,
    links: links,
    revLinks: revLinks,
    stateName,
    name,
    isComponent: true,
  };
}

function getComponentByName (name) {
  return COMPONENTS[ toCamelCase(name) ];
}

function createBinding (name, component, el) {
  const componentOpts = (component) ? {
    id: component.stateId + LIB_ATTR.STATE_DELIMITER + name,
    statePath: component.statePath,
    stateNames: component.stateNames,
    isListItem: component.isList,
    stateId: name,
  } : {};

  const elOpts = (el) ? {
    initValue: el.value || el.innerHTML
  } : {};

  return Object.assign({
    name,
    listeners: [],
    markup: el,
    dependants: {},
    events: {},
    evaluate: {},
    links: {},
    state: { [LIB_ATTR.SELF]: {} },
    outerNames: {},
    _links: {},

  }, componentOpts, elOpts);
}

function modifyToListBinding (binding, itemMarkup) {
  binding.isList = true;

  return Object.assign(binding, {
    markup: itemMarkup,
    listItem: createBinding(itemMarkup.tagName, binding, itemMarkup),
  });
}

function shortenBindingId (id) {
  return id
    .split(LIB_ATTR.STATE_DELIMITER)
    .map((el) => getShortName(el))
    .join(LIB_ATTR.STATE_DELIMITER);
}

function prepareStyles (styleArg, component) {
  return mapKeys(styleArg, (key) => key
    .split(',')
    .map((selector) => selector.trim())
    .map((selector) => {

      let className =  '.' + component.name;

      if (selector) {
        const isBinding = component.state[ selector.split(' ')[0].split('::')[0].split(':')[0] ];
        const prefix = isBinding ? className + '-' : '';
        className += ' ' + prefix + selector;
      }

      return className;
    })
    .join(',')
  );
}
