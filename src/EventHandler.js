import LIB_ATTR from './values/attributes';

import { forEach } from './helpers/object';
import { walkUpNodes } from './helpers/dom';

import {
  createAccessor,
  getStatePathFromNode
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
    markup.addEventListener(eventName, (e) => executeAllCallbacksInList(e, eventHandlers[eventName]));
  }
}

function gatherAllEventHandlers (component, gatheredHandlers) {
  gatherEventHandlers (component, gatheredHandlers);

  if (component.bindings) {
    forEach(component.bindings, (binding) => gatherAllEventHandlers(binding, gatheredHandlers));
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

function executeAllCallbacksInList (e, eventHandlers) {
  decorateEvent(e);
  startTransaction();
  
  const handlers = [];
  const rootNode = walkUpNodes(
    e.target,
    (el) => el.getAttribute(LIB_ATTR.COMPONENT_TYPE) == LIB_ATTR.BASE,
    (el) => {
      const bindingId = el.getAttribute(LIB_ATTR.BINDING_ID);
      const eventHandler = eventHandlers[bindingId];

      if (eventHandler) {
        handlers.push({ fn: eventHandler, path: getStatePathFromNode(el) });
      }
    });

  const componentId = rootNode.firstElementChild.getAttribute(LIB_ATTR.COMPONENT_ID);

  for (let i = 0; i < handlers.length; i++) {
    const { fn, path } = handlers[i];
    fn.call(this, e, createAccessor([componentId].concat(path)));

    if (e.propagationStopped) {
      break;
    }
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
