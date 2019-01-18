import LIB_ATTR from './globals/attributes';

import { set, forEach, map, toObject, mapKeys } from './helpers/object';

import {
  isEmpty,
  isArray,
  isObject,
} from './helpers/checkers';

import areEqual from './helpers/equality';
import { has } from './helpers/common';

import {
  getComponent,
  createAccessor,
  prepareChangeObject,
  getOnlyValues,
  setState,
} from './State';

import { renderChanges } from './View';

import { VALUE_TYPES } from './Definition';

import BindingNotExistsError from './errors/BindingNotExistsError';

export {
  setValues,
  createStateNodes,
  modifyList,
  startTransaction,
  applyChanges,
  sendToRenderQueue,
};

const CHANGES = { changes: {}, collecting: false };
const LIFE_CYCLE_HANDLERS = { list: [] };

function startTransaction () {
  applyChanges();
  CHANGES.collecting = true;
}

function applyChanges () {
  const changes = CHANGES.changes;
  CHANGES.changes = {};
  renderChanges(changes);
  runLifeCycleHooks();
}

function runLifeCycleHooks () {
  const lifeCycleHandlers = LIFE_CYCLE_HANDLERS.list;
  LIFE_CYCLE_HANDLERS.list = [];
  lifeCycleHandlers.forEach((h) => h());

  if (!isEmpty(CHANGES.changes)) {
    applyChanges();
  }

  CHANGES.collecting = false;
}

function sendToRenderQueue (path, change) {
  set(CHANGES.changes, path, change);
}

function isCollectingChanges () {
  return CHANGES.collecting;
}

function addLifeCycleHook (hookType, binding, values, accessor, idx) {
  const hook = binding.hooks[hookType];
  const statePath = accessor.path;
  LIFE_CYCLE_HANDLERS.list.push(() => {
    const el = values[binding.name || LIB_ATTR.SELF].el;
    const vals = !binding.name ? getOnlyValues(values) : values[binding.name].value;
    hook(el, vals, accessor, idx);
  });
}

function createStateNodes (statePath) {
  const component = getComponent(statePath);
  const valuesNode = createStateNode(component);
  setState(statePath, valuesNode);

  forEach(component.state, (binding, bindingName) => {
    if (binding.isComponent) {
      createStateNodes(statePath.concat(bindingName));
    }
  });

  const accessor = createAccessor(statePath);
  addLifeCycleHook('mount', component.state[LIB_ATTR.SELF], valuesNode, accessor, statePath.slice(-2)[0]);

  return valuesNode;
}

function createStateNode (component) {
  const valuesNodes = map(component.state, (binding, bindingName) => {
    const valueNode = binding.isList ? [] : {};

    return VALUE_TYPES.reduce((a, key) => {
      let value;

      switch (key) {
        case 'value':
        case 'html':
          value = binding.initValue || ''
          break;

        default:
          value = {};
      }

      a[key] = value;

      return a;
    }, valueNode);
  });

  return Object.assign(valuesNodes, { [LIB_ATTR.SELF]: toObject(VALUE_TYPES, {}) });
}

function setValues (changeValues, statePath, calledDependences) {
  calledDependences = calledDependences || [];
  const accessor = createAccessor(statePath);

  if (!accessor.values) {
    accessor.values = createStateNodes(statePath);
    const start = +statePath.slice(-2)[0];
    sendToRenderQueue(statePath, { [LIB_ATTR.FULL_CHANGE]: { add: { start, end: start + 1 } } })
  }

  forEach(changeValues, (change, bindingName) => setValue(bindingName, change, accessor, calledDependences));

  addLifeCycleHook('update', accessor.component.state[LIB_ATTR.SELF], accessor.values, accessor, statePath.slice(-2)[0]);

  if (isCollectingChanges()) {
    return;
  }

  applyChanges();
}

function setValue (bindingName, change, accessor, calledDependences) {
  const statePath = accessor.path;
  const component = accessor.component;
  const values = accessor.values;
  let binding = component.state[bindingName];

  if (!binding) {
    bindingName = component.outerNames[bindingName];
    binding = component.state[bindingName];
  }

  if (!binding) {
    throw new BindingNotExistsError(bindingName, component.name, statePath);
  }

  if (change.type === 'value') {
    if (binding.isList) {
      return setValueForList(binding, change, values[bindingName], accessor);
    }

    if (isObject(change.value) && binding.isComponent) {
      return setValueForComponent(binding, change, component, statePath);
    }
  }

  const equal = areEqual(values[bindingName][change.type], change.value);

  if (!equal || !isEmpty(equal) || change.force) {
    values[bindingName][change.type] = change.value;

    if (change.type !== 'value') {
      return sendToRenderQueue(statePath.concat(bindingName), { [change.type]: false });
    }

    addLifeCycleHook('update', binding, values, accessor, statePath.slice(-2)[0]);
    calledDependences.push(bindingName + ':' + change.type);

    if (!binding.html) {
      setValue(bindingName, { value: change.value, type: 'html' }, accessor, calledDependences);
    }

    const link = component.links[bindingName];
    if (link) {
      setValue(link.link, { value: change.value, type: 'value' }, accessor.down(link.component), [])
    }

    forEach(binding.dependants, (dependant, dependantKey) => {
      if (has(calledDependences, dependantKey)) {
        return;
      }

      const newValue = component.state[dependant.name].evaluate[dependant.type](values, accessor);
      setValue(dependant.name, { value: newValue, type: dependant.type }, accessor, calledDependences);
    });
  }
}

function setValueForList (binding, change, arr, accessor) {
  Object.keys(change.value).forEach((i) => {
    const realChangeValues = mapKeys(change.value[i], (key) => binding.links[key] ? binding.links[key].link : key);
    setValues( prepareChangeObject(realChangeValues), accessor.path.concat(binding.name, i, binding.listItem.name))
  });

  const keysEquality = areEqual(arr, change.value);

  Object.keys(keysEquality).map((idx) => {
    const changeObj = keysEquality[idx];

    if (changeObj.remove) {
      const removedNode = arr.splice(idx, 1)[0][binding.listItem.name];
      changeObj.remove = removedNode[LIB_ATTR.SELF].el;
      addLifeCycleHook('remove', binding.listItem.state[LIB_ATTR.SELF], removedNode, accessor, idx);
    }

    sendToRenderQueue(accessor.path.concat(binding.name, idx, binding.listItem.name), { [LIB_ATTR.FULL_CHANGE]: changeObj });
  });
}

function setValueForComponent (binding, change, component, statePath) {
  const realChangeValues = mapKeys(change.value, (key) => component.links[key] ? component.links[key].link : key);
  setValues( prepareChangeObject(realChangeValues), statePath.concat(binding.name));
}

function modifyList (action, args, accessor) {
  const arr = accessor.values;
  const listPath = accessor.path;
  const itemName = accessor.component.listItem.name;
  const start = args.start;
  let changeObj = {};

  switch (action) {
    case 'add':
      changeObj = addToList(arr, start, args.els, listPath, itemName);
      break;

    case 'remove':
      changeObj = removeFromList(arr, start, args.num || 1, accessor, itemName);
      break;
  }

  forEach(changeObj, (change, idx) => sendToRenderQueue(listPath.concat(idx, itemName, LIB_ATTR.FULL_CHANGE), changeObj[idx][LIB_ATTR.FULL_CHANGE]));

  if (isCollectingChanges()) {
    return;
  }

  applyChanges();
}

function addToList (arr, start, els, listPath, itemName) {
  els = isArray(els) ? els : [els];

  els.forEach((el, i) => {
    arr.splice(i + start, 0, null);
    setValues(prepareChangeObject(el), listPath.concat(i + start, itemName));
  });

  return { [start]: { [LIB_ATTR.FULL_CHANGE]: { add: { start, end: start + els.length } } } };
}

function removeFromList (arr, start, num, accessor, itemName) {
  const removed = arr.splice(start, num);

  return removed.reduce((a, vals, i) => {
    const el = vals[itemName][LIB_ATTR.SELF].el;
    a[start + i] = { [LIB_ATTR.FULL_CHANGE]: { remove: el } };

    addLifeCycleHook('remove', accessor.component.listItem.state[LIB_ATTR.SELF], vals[itemName], accessor, start + i);

    return a;
  }, {});
}
