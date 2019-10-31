import LIB_ATTR from './values/attributes';
import RE from './values/regexp';
import { VALUE_TYPES } from './values/index';

import { walkNodes } from './helpers/dom';

import { forEach, map, fullMap, toObject } from './helpers/object';

import copy from './helpers/copy';

import { isEmpty } from './helpers/checkers';

import {
  toCamelCase,
  getShortName,
} from './helpers/common';

import {
  createBinding,
  modifyToListBinding,
} from './State';

export {
  gatherBindingsFromMarkup,
  prepareBindings,
}

const SUB_COMPONENT_PREFIX = 'x';
let SUB_COMPONENT_COUNTER = 0;
const DEFAULT_HOOKS = toObject(['mount', 'update', 'remove'], () => () => {});

function gatherBindingsFromMarkup (componentHTMLMarkup, component, firstTime) {
  if (firstTime) {
    SUB_COMPONENT_COUNTER = 0;
  }

  walkNodes(componentHTMLMarkup, (HTMLNode) => {
    const bindingOpts = inspectNode(HTMLNode, component.subComponents);

    if (!bindingOpts) {
      return;
    }

    const binding = createBinding(bindingOpts.name, component, HTMLNode);

    if (bindingOpts.isComponent) {
      setSubComponent(binding, bindingOpts);
      HTMLNode.classList.add(LIB_ATTR.PREFIX + binding.id);
    }

    component.bindings[binding.name] = binding;
    binding.markup.classList.add(LIB_ATTR.PREFIX + binding.id, component.name + '-' + binding.name);

    if (bindingOpts.isList) {
      const itemNode = HTMLNode.children[0];
      modifyToListBinding(binding, itemNode);
      const tagName = getTagName(itemNode);

      if (component.subComponents[tagName]) {
        setSubComponent(binding.listItem, prepareComponentOpts(tagName, component.subComponents[tagName]));
        return -1;
      }

      gatherBindingsFromMarkup(itemNode, binding.listItem);
      return -1;
    }
  });

  return component;
}

function setSubComponent (componentBinding, subComponentOpts) {
  const stateNames = Object.assign(componentBinding.stateNames, subComponentOpts.component.stateNames);
  let stateId = subComponentOpts.stateName + SUB_COMPONENT_PREFIX + SUB_COMPONENT_COUNTER++;

  if (!stateNames[subComponentOpts.stateName]) {
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

  forEach(component.bindings, (binding, bindingName) => {
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
      binding.styles = parentComponent.styles;

      prepareBindings (binding.listItem, newBindingId + LIB_ATTR.STATE_DELIMITER + LIB_ATTR.ITEM + binding.listItem.name, binding);
      return;
    }

    if (binding.isComponent) {
      subComponents.push(binding);
    }
  });

  setupComponentsLinks(component, parentComponent);
  component.template = component.markup.cloneNode(true);

  Object.assign(parentComponent.styles, component.styles);

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
    if (isEmpty(componentData.bindings[dependencyName])) {
      componentData.bindings[dependencyName] = createBinding(dependencyName, componentData);
    }

    componentData.bindings[dependencyName].dependants[ binding.name + ':' + type ] = { name: binding.name, type };
  });

  return (values, componentInterface) => reactiveFunc.call(null, values, componentInterface);
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

function setupComponentsLinks (component, parentComponent) {
  Object.assign(
    parentComponent.links,
    map(component.outerNames, (k) => ({ link: k, component: component.stateId }))
  );
}

function inspectNode (el, subComponents = {}) {
  const tagName = getTagName(el);

  if (!tagName) {
    return null;
  }

  const subComponentOpts = subComponents[tagName];

  if (subComponentOpts) {
    return prepareComponentOpts(tagName, subComponentOpts);
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

function getTagName (el) {
  return el.tagName && toCamelCase( el.tagName.toLowerCase() );
}

function prepareComponentOpts (name, obj) {
  return {
    component: obj[0],
    links: obj[1],
    revLinks: obj[1] ? fullMap(obj[1], (k, v) => [v, k]) : {},
    stateName: name,
    name,
    isComponent: true,
  };
}

function shortenBindingId (id) {
  return id
    .split(LIB_ATTR.STATE_DELIMITER)
    .map((el) => getShortName(el))
    .join(LIB_ATTR.STATE_DELIMITER);
}
