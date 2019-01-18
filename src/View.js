import LIB_ATTR from './globals/attributes';
import { toDashCase, has } from './helpers/common';
import { forEach, map, filter, splitPiece } from './helpers/object';

import { isNumber, isUndefined } from './helpers/checkers'

import {
  createAccessor,
  addMarkup,
  getMarkup,
  removeMarkup,
  removeComponent,
  getOnlyValues,
} from './State';

import {
  replaceNodes,
  removeNode,
} from './helpers/dom';

export {
  createAndAppendStyles,
  renderChanges
};

const render = {
  html: applyMarkup,
  class: applyClasses,
  style: applyStyles,
  attrs: applyAttributes,
}

function renderChanges (changes) {
  forEach(changes, (componentChanges, elementId) => {
    const componentId = Object.keys(componentChanges)[0]
    const componentAccessor = createAccessor([elementId, componentId]);
    applyMarkup(componentAccessor.component, componentAccessor.values, [elementId, componentId], componentChanges[componentId]);
  });
}

function applyMarkup (component, value, statePath, changes) {
  if (!component.markup) {
    return;
  }

  if (component.isList) {
    return renderList(component, value, statePath, changes);
  }

  if (component.isComponent) {
    return renderComponent(component, value, statePath, changes);
  }

  value = isUndefined(value) ? '' : value;

  if (component.markup.tagName === 'INPUT') {
    component.markup.value = value;
    return;
  }

  component.markup.innerHTML = value;

  return component;
}

function renderComponent (component, value, statePath, changes) {
  if (changes) {
    return updateComponent(component, value, statePath, changes);
  }

  return drawComponent(value, statePath);
}

function drawComponent (values, statePath) {
  const accessor = createAccessor(statePath);
  const component = accessor.component;

  const itemWrapper = document.createElement('div');
  const itemMarkup = component.template.cloneNode(true);
  values[LIB_ATTR.SELF].el = itemMarkup;
  itemWrapper.appendChild(itemMarkup);

  itemMarkup.setAttribute(LIB_ATTR.COMPONENT_TYPE, (component.isListItem) ? LIB_ATTR.ITEM : LIB_ATTR.COMPONENT);

  forEach(render, (renderFunc, renderType) => {
    if (component.state[LIB_ATTR.SELF][renderType]) {
      renderFunc({ markup: itemMarkup }, values[LIB_ATTR.SELF][renderType]);
    }
  });

  forEach(component.state, (binding, bindingName) => {
    if (!binding.markup) {
      return;
    }

    const bindingNode = itemWrapper.querySelector('.' + LIB_ATTR.PREFIX + binding.id);
    bindingNode.classList.remove(LIB_ATTR.PREFIX + binding.id);

    if (binding.isComponent) {
      const childStatePath = statePath.concat(bindingName);
      const childMarkup = drawComponent(values[bindingName], childStatePath);
      replaceNodes(bindingNode, childMarkup);
      return;
    }

    values[bindingName].el = bindingNode;

    if (binding.isList) {
      renderList(binding, values[bindingName], statePath.concat(bindingName));
      return;
    }

    forEach(render, (renderFunc, renderType) => {
      if (renderType === 'html' && binding.html === null || binding.markup.children.length) {
        return;
      }
      renderFunc({ markup: bindingNode }, values[bindingName][renderType], statePath);
    });
  });

  return itemWrapper.children[0];
}

function updateComponent (component, values, statePath, changes) {
  const itemAccessor = createAccessor(statePath);
  const componentMarkup = values[LIB_ATTR.SELF].el;

  forEach(changes, (change, bindingName) => {

    if (bindingName === LIB_ATTR.SELF) {

      for (let changeType in change) {
        render[changeType]({ markup: componentMarkup }, values[LIB_ATTR.SELF][changeType]);
      }
      return;
    }

    const binding = component.state[bindingName];
    const statePathToBinding = statePath.concat(bindingName);

    if (binding.isComponent || binding.isList) {
      applyMarkup(binding, values[bindingName], statePathToBinding, changes[bindingName]);
      return;
    }

    const el = values[bindingName].el

    for (let changeType in change) {
      const newValue = values[bindingName][changeType];
      render[changeType]({ markup: el }, newValue);
    }
  });
}

function renderList (listComponent, itemsValues, statePath, changes) {
  if (changes) {
    return updateList(listComponent, itemsValues, statePath, changes);
  }

  const listFragment = buildList(listComponent, itemsValues, statePath);

  const listNode = itemsValues.el;
  const parentNode = listNode.parentNode;
  const nextNode = listNode.nextElementSibling;
  removeNode(listNode);

  const isComponent = listNode.getAttribute(LIB_ATTR.COMPONENT_TYPE);
  listNode.setAttribute(LIB_ATTR.COMPONENT_TYPE, LIB_ATTR.LIST);
  if (isComponent) {
    listNode.setAttribute(LIB_ATTR.COMPONENT_TYPE, LIB_ATTR.COMPONENT_LIST);
  }

  listNode.innerHTML = '';
  listNode.appendChild(listFragment);

  parentNode.insertBefore(listNode, nextNode);
}

function buildList (listComponent, itemsValues, statePath, range) {
  const start = range ? range.start : 0;
  const end = range ? range.end : (itemsValues.length + 1);

  const listFragment = document.createDocumentFragment();
  itemsValues
    .slice(start, end)
    .forEach((itemValue, itemIndex) => {
      const newItemIndex = +start + itemIndex;
      const statePathToItem = statePath.concat([newItemIndex, listComponent.listItem.name]);
      const listItemMarkup = drawComponent(itemValue[listComponent.listItem.name], statePathToItem);

      listItemMarkup.setAttribute(LIB_ATTR.ITEM_INDEX, newItemIndex);

      listFragment.appendChild(listItemMarkup);
    });

  return listFragment;
}

function updateList (listBinding, itemsValues, statePath, changes) {
  const listNode = itemsValues.el;
  const itemName = listBinding.listItem.name;
  const itemsChanges = splitPiece(changes, (v, k) => isNumber(+k));
  let removedCount = 0;
  let end = 0;

  for (let changeType in changes) {
    render[changeType]({ markup: listNode }, itemsValues[changeType]);
  }

  forEach(itemsChanges, (change, i) => {
    change = change[itemName];
    const statePathToItem = statePath.concat(i, itemName);
    const itemAccessor = createAccessor(statePathToItem);

    if (!change[LIB_ATTR.FULL_CHANGE]) {
      updateComponent(itemAccessor.component, itemsValues[i][itemName], statePathToItem, change);
      return;
    }

    if (change[LIB_ATTR.FULL_CHANGE].add && i >= end) {
      const start = change[LIB_ATTR.FULL_CHANGE].add.start;
      end = change[LIB_ATTR.FULL_CHANGE].add.end;

      fixIndexes(listNode, start, end - start);
      const listFragment = buildList(listBinding, itemsValues, statePath, { start, end });

      if (end === itemsValues.length) {
        listNode.appendChild(listFragment);
        return;
      }

      listNode.insertBefore(listFragment, listNode.children[start]);
      return;
    }

    if (change[LIB_ATTR.FULL_CHANGE].remove) {
      removeNode(change[LIB_ATTR.FULL_CHANGE].remove);
      fixIndexes(listNode, i - removedCount++, -1);
    }
  });
}

function fixIndexes (listNode, start, diff) {
  const itemsNodes = Array.prototype.slice.call(listNode.children, start);

  itemsNodes.forEach((itemNode) => {
    const prevIdx = itemNode.getAttribute(LIB_ATTR.ITEM_INDEX);
    const newIdx = +prevIdx + diff;

    itemNode.setAttribute(LIB_ATTR.ITEM_INDEX, newIdx);
  });
}

function applyAttributes (binding, attributes) {
  Object.assign(binding.markup, attributes);
}

function applyClasses (binding, classes) {
  for (let className in classes) {
    if (className) {
      if (classes[className]) {
        binding.markup.classList.add(className);
      } else {
        binding.markup.classList.remove(className);
      }
    }
  }
}

function applyStyles (binding, styles) {
  Object.assign( binding.markup.style, normalizeStyles(styles) );
}

function createAndAppendStyles (styleObj) {
  let styleStr = '';
  for (let selector in styleObj) {
    const styles = styleObj[selector];
    styleStr += selector + '{';
    normalizeStyles(styles)
    for (let attr in styles) {
      const value = styles[attr];
      styleStr += toDashCase(attr) + ':' + value + ';';
    }
    styleStr += '}\n';
  }
  const styleEl = document.createElement('style');
  styleEl.appendChild( document.createTextNode(styleStr) );
  document.head.appendChild(styleEl);
}

function normalizeStyles (styles) {
  for (let attr in styles) {
    if (isNumber(styles[attr])) {
      styles[attr] = styles[attr] + 'px';
    }
  }
  return styles;
}
