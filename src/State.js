import LIB_ATTR from './values/attributes';

import { get, set, forEach, map } from './helpers/object';

import { has, getRealName } from './helpers/common';

import { RESERVED_BINDING_NAMES, VALUE_TYPES } from './values/index';

import { walkUpNodes } from './helpers/dom';

import ComponentLookupError from './errors/ComponentLookupError';
import ForbiddenBindingNameError from './errors/ForbiddenBindingNameError';

import {
  createStateNodes,
  setValues,
  modifyList,
  startTransaction,
  sendToRenderQueue,
  applyChanges,
} from './StateChange';

import {
  isArray,
  isString,
  isNumber,
  isObject,
} from './helpers/checkers';

export {
  createBinding,
  modifyToListBinding,
  createElement,
  createAccessor,
  getComponent,
  setState,
  prepareChangeObject,
  getStatePathFromNode
};

const COMPONENTS = {};
const STATE = {};
let ELEMENT_COUNTER = 1;

function setState (path, value) {
  set(STATE, path, value);
}

function getState (path) {
  return get(STATE, path);
}

function createElement (component) {
  const id = ELEMENT_COUNTER++;
  const name = component.name;

  const element = COMPONENTS[id] = {
    id,
    bindings: { [name]: component },
  };

  STATE[id] = {};

  createStateNodes([id, name]);

  sendToRenderQueue([id], { [name]: false });
  applyChanges();
  element.el = STATE[id][name][LIB_ATTR.SELF].el;
  element.ci = createAccessor([id, name]);

  return element;
}

function createAccessor (path) {
  const values = getState(path);
  const component = getComponent(path);

  const accessor = {
    component,
    values,
    path,
    index: +path[ path.length - 2 ],
    startTransaction,
    applyChanges,
    up: (level) => moveUpStatePath(level, path.slice()),
    down: (additionalPath) => createAccessor(path.concat(additionalPath)),
    set: (changeObj) => setValues( prepareChangeObject(changeObj), path),
    get: (key) => getValues(accessor, key, path),
    markup: (key) => key ? accessor.values[key].el : accessor.values[LIB_ATTR.SELF].el,
  }

  if (isArray(values)) {
    modifyToArrayAccessor(accessor);
  }

  return accessor;
}

function prepareChangeObject (changeObj) {
  return map(changeObj, (v) => {
    const forced = isObject(v) && Object.keys(v)[0] === 'force';

    return {
      value: forced ? v['force'] : v,
      type: 'value',
      force: forced,
    };
  });
}

function getComponent (path) {
  let component = COMPONENTS[ path[0] ];

  for (let i = 1; i < path.length; i++) {
    component = component.bindings[ path[i] ];
    
    if (component.isList && i !== (path.length -1)) {
      component = component.listItem;
      i+=2;
    }
  }

  return component;
}

function getValues (accessor, key, statePath) {
  const values = accessor.values;
  const component = accessor.component;

  if (!key) {
    return getValuesTree(values, component, {});
  }

  const binding = component.bindings[key];
  if (binding.isList || binding.isComponent) {
    return createAccessor(statePath.concat(key));
  }

  return values[key].value;
}

function getValuesTree (values, component, valuesTree) {
  forEach(values, (vals, bindingName) => {
    if (has(RESERVED_BINDING_NAMES, bindingName)) {
      return;
    }

    const binding = component.bindings[bindingName];

    if (binding.isList) {
      valuesTree[bindingName] = [];
      values[bindingName].forEach((el, i) => {
        const itemValues = valuesTree[bindingName][i] = {};
        getValuesTree(values[bindingName][i][binding.listItem.name], binding.listItem, itemValues);
      });
      return;
    }

    if (binding.isComponent) {
      const componentValues = valuesTree[bindingName] = {};
      getValuesTree(values[bindingName], binding, componentValues);
    }

    valuesTree[ component._links[bindingName] || bindingName ] = vals.value;
  });

  return valuesTree;
}

function moveUpStatePath (level, statePath) {
  let lastIdx = statePath.length;

  if (level === '' || level === ' ') {
    return createAccessor(statePath.slice(0, 2));
  }

  if (isString(level)) {
    while (lastIdx--) {
      if (statePath[lastIdx] === level) {
        break;
      }
    }

  } else {
    level = level || 1;
    while (lastIdx-- && level--) {
      if (isNumber(+statePath[lastIdx - 1])) {
        lastIdx--;
      }
    }

  }

  if (lastIdx < 1) {
    throw new ComponentLookupError(level, statePath);
  }

  return createAccessor(statePath.slice(0, lastIdx + 1));
}

function modifyToArrayAccessor (accessor) {
  Object.assign(accessor, {
    get: (num) => createAccessor(accessor.path.concat(num, accessor.component.listItem.name)),

    push: (els) => modifyList('add', { start: accessor.values.length, els }, accessor),
    unshift: (els) => modifyList('add', { start: 0, els }, accessor),
    add: (start, els) => modifyList('add', { start, els }, accessor),

    pop: (num) => modifyList('remove', { start: accessor.values.length - (num || 1), num }, accessor),
    shift: (num) => modifyList('remove', { start: 0, num }, accessor),
    remove: (start, num) => modifyList('remove', { start, num }, accessor),

    length: () => accessor.values.length,
    value: () => mapList(accessor),
    forEach: (cb) => iterateListValues(accessor, cb),
    filter: (cb) => filterList(accessor, cb),
    map: (cb) => mapList(accessor, cb),
  });
}

function iterateListValues (accessor, cb) {
  accessor.values.forEach((el, i) =>
    cb(
      getValuesTree(el[accessor.component.listItem.name], accessor.component.listItem, {}),
      i
  ));
}

function filterList (accessor, cb) {
  const newList = [];

  iterateListValues(accessor, (el, i) => {
    if (cb(el, i)) {
      newList.push(el);
    }
  });

  return newList;
}

function mapList (accessor, cb) {
  const newList = [];
  iterateListValues(accessor, (el, i) => newList.push( cb ? cb(el, i) : el ));
  return newList;
}

function createBinding (name, component, el) {
  if (VALUE_TYPES.includes(name)) {
    throw new ForbiddenBindingNameError(name);
  }

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
    bindings: { [LIB_ATTR.SELF]: {} },
    outerNames: {},
    _links: {},
    styles: {},
  }, componentOpts, elOpts);
}

function modifyToListBinding (binding, itemMarkup) {
  binding.isList = true;

  return Object.assign(binding, {
    markup: itemMarkup,
    listItem: createBinding(itemMarkup.tagName, binding, itemMarkup),
  });
}

function getStatePathFromNode (el) {
  const indexlessStatePath = el.getAttribute(LIB_ATTR.BINDING_ID).split(LIB_ATTR.STATE_DELIMITER);
  indexlessStatePath.pop();

  const statePath = [];

  let elementName;
  while ((elementName = getRealName( indexlessStatePath.pop() ))) {

    if (has(elementName, LIB_ATTR.ITEM)) {
      elementName = elementName.slice(LIB_ATTR.ITEM.length);
      el = walkUpNodes(el, (el) => el.getAttribute(LIB_ATTR.ITEM_INDEX));
      const idx = el.getAttribute(LIB_ATTR.ITEM_INDEX);
      el = el.parentNode;
      statePath.unshift(idx, elementName);
      continue;
    }

    statePath.unshift(elementName);
  }

  return statePath;
}
