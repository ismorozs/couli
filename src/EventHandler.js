import LIB_ATTR from './globals/attributes';

import { forEach } from './helpers/object';
import { getRealName, has } from './helpers/common';

import {
  createAccessor,
} from './State';

import {
  startTransaction,
  applyChanges
} from './StateChange';

export {
  setupEventHandlers
};

function setupEventHandlers (element) {
  const eventHandlers = {};
  gatherAllEventHandlers(element, eventHandlers);

  const markup = element.el;
  for (let eventName in eventHandlers) {
    markup.addEventListener(eventName, (e) => executeAllCallbacksInList(e, eventHandlers[eventName], element));
  }
}

function gatherAllEventHandlers (component, gatheredHandlers) {
  gatherEventHandlers (component, gatheredHandlers);

  if (component.state) {
    forEach(component.state, (binding) => gatherAllEventHandlers(binding, gatheredHandlers));
  }

  if (component.listItem) {
    gatherAllEventHandlers(component.listItem, gatheredHandlers);
  }
}

function gatherEventHandlers (binding, gatheredHandlers) {
  if (!binding.events) {
    return;
  }

  for (let eventName in binding.events) {
    if (!gatheredHandlers[eventName]) {
      gatheredHandlers[eventName] = {};
    }

    gatheredHandlers[eventName][binding.shortId] = binding.events[eventName];
  }
}

function executeAllCallbacksInList (e, eventHandlers, element) {
  decorateEvent(e);
  startTransaction();
  
  let curHTMLNode = e.target;
  while (curHTMLNode !== element.el.parentNode) {
    const bindingId = curHTMLNode.getAttribute(LIB_ATTR.BINDING_ID);
    const eventHandler = eventHandlers[bindingId];

    if (eventHandler) {
      const indexlessStatePath = bindingId.split(LIB_ATTR.STATE_DELIMITER);
      indexlessStatePath.pop();
      const statePathToItem = getStatePathToItem(curHTMLNode, indexlessStatePath);
      const accessorToData = createAccessor([element.id].concat(statePathToItem));

      eventHandler.call(this, e, curHTMLNode, accessorToData, +statePathToItem.slice(-2)[0]);

      if (e.propagationStopped) {
        break;
      }
    }
    curHTMLNode = curHTMLNode.parentNode;
  }

  applyChanges();
}

function decorateEvent (e) {
  const stopPropagation = e.stopPropagation.bind(e);
  e.stopPropagation = () => {
    e.propagationStopped = true;
    stopPropagation();
  }
}

function getStatePathToItem (el, indexlessStatePath) {
  const statePath = [];

  let elementName;
  while ((elementName = getRealName( indexlessStatePath.pop() ))) {

    if (has(elementName, LIB_ATTR.ITEM)) {
      elementName = elementName.slice(LIB_ATTR.ITEM.length);
      el = getToItemNode(el);
      const idx = el.getAttribute(LIB_ATTR.ITEM_INDEX);
      el = el.parentNode;
      statePath.unshift(idx, elementName);
      continue;
    }

    statePath.unshift(elementName);
  }

  return statePath;
}

function getToItemNode (el) {
  let curEl = el;

  while (curEl.tagName !== 'BODY') {
    if (curEl.getAttribute(LIB_ATTR.ITEM_INDEX)) {
      return curEl;
    }
    curEl = curEl.parentNode;
  }
}
