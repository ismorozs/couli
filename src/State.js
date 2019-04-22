import LIB_ATTR from './globals/attributes';

import { get, set, forEach, map } from './helpers/object';

import { has } from './helpers/common';

import { RESERVED_BINDING_NAMES } from './Definition';

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
  createElement,
  createAccessor,
  getOnlyValues,
  getComponent,
  setState,
  prepareChangeObject,
};

const ELEMENTS = {};
const STATE = {};
let ELEMENT_COUNTER = 1;

function setState (path, value) {
  set(STATE, path, value);
}

function getState (path) {
  return get(STATE, path);
}

function createElement (componentOpts) {
  const id = ELEMENT_COUNTER++;
  const name = componentOpts.name;

  const element = ELEMENTS[id] = {
    id,
    state: { [name]: componentOpts.component },
  };

  STATE[id] = {};

  createStateNodes([id, name]);

  sendToRenderQueue([id], { [name]: false });
  applyChanges();
  element.el = STATE[id][name][LIB_ATTR.SELF].el;
  element.el.setAttribute(LIB_ATTR.COMPONENT_TYPE, LIB_ATTR.BASE);

  return element;
}

function createAccessor (path) {
  const values = getState(path);
  const component = getComponent(path);

  const accessor = {
    component,
    values,
    path,
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
  let component = ELEMENTS[ path[0] ];

  for (let i = 1; i < path.length; i++) {
    component = component.state[ path[i] ];
    
    if (component.isList && i !== (path.length -1)) {
      component = component.listItem;
      i+=2;
    }
  }

  return component;
}

function getOnlyValues (obj) {
  return map(obj, (bindingValues) => bindingValues['value']);
}

function getValues (accessor, key, statePath) {
  const values = accessor.values;
  const component = accessor.component;

  if (!key) {
    return getValuesTree(values, component, {});
  }

  const binding = component.state[key];
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

    const binding = component.state[bindingName];

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

  if (level === '') {
    return createAccessor(statePath.slice(0, 2));
  }

  if (isString(level)) {
    while (lastIdx--) {
      if (statePath[lastIdx] === level) {
        break;
      }
    }

    return createAccessor(statePath.slice(0, lastIdx + 1));
  }

  level = level || 1;
  while (lastIdx-- && level--) {
    if (isNumber(+statePath[lastIdx - 1])) {
      lastIdx--;
    }
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
