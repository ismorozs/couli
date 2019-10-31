import LIB_ATTR from './values/attributes';

import { BEHAVIOUR_TYPES } from './values/index';

import {
  cloneHTMLMarkup,
  walkUpNodes,
} from './helpers/dom';

import { forEach } from './helpers/object';

import copy from './helpers/copy';

import { isObject } from './helpers/checkers';

import { setupEventHandlers } from './EventHandler';

import {
  createElement,
  createAccessor,
  getStatePathFromNode
} from './State';

import {
  gatherBindingsFromMarkup,
  prepareBindings
} from './StateSetup';

import { createAndAppendStyles } from './View';

import {
  prepareBindingSettings,
  prepareBindingsSettings,
  prepareStyles
 } from './prepareSettings';

// eslint-disable-next-line no-undef
module.exports = {
  define: defineComponent,
  change: changeComponent,
  apply: applyComponent,
  extract: extractComponent,
};

const COMPONENT_PREFIX = 'c';
let COMPONENT_COUNTER = 0;

function defineComponent (markup, bindings = {}, styles = {}, subComponents = {}) {

  if (isObject(markup)) {
    return defineComponent(bindings, styles, subComponents, markup);
  }

  const name = COMPONENT_PREFIX + COMPONENT_COUNTER++;
  
  const componentHTMLMarkup = cloneHTMLMarkup(markup);
  componentHTMLMarkup.classList.add(name);

  const component = {
    name,
    bindings: { [LIB_ATTR.SELF]: {} },
    stateId: name,
    statePath: [name],
    stateNames: {},
    markup: componentHTMLMarkup,
    evaluate: {},
    links: {},
    isComponent: true,
    outerNames: {},
    _links: {},
    subComponents,
  };

  gatherBindingsFromMarkup(componentHTMLMarkup, component, true);

  const normalizedOptions = prepareBindingsSettings(bindings);
  copy(component, normalizedOptions);

  component.styles = prepareStyles(styles, component);
  prepareBindings (component, component.stateId, { statePath: [], styles: component.styles, links: {}, stateNames: component.stateNames });
  
  return component;
}

function changeComponent (component, changes) {
  const newComponent = copy({}, component);

  forEach(changes, (bindingChanges, bindingName) => {
    forEach(prepareBindingSettings(bindingChanges), (newFn, type) => {

      if (BEHAVIOUR_TYPES.includes(type)) {
        forEach(newFn, (newEventFn, eventName) => {
          const prevFn = newComponent.bindings[bindingName][type][eventName];
          newComponent.bindings[bindingName][type][eventName] = (e, accessor) => newEventFn.call(null, e, accessor, prevFn); 
        });

        return;
      }

      const prevFn = newComponent.bindings[bindingName][type];
      newComponent.bindings[bindingName][type] = (vals, accessor) => newFn.call(null, vals, accessor, prevFn);
    });
  });

  return newComponent;
}

function applyComponent (containerEl, component) {
  const element = createElement(component);
  createAndAppendStyles(component.styles);
  setupEventHandlers(element);
  containerEl.setAttribute(LIB_ATTR.COMPONENT_TYPE, LIB_ATTR.BASE);
  element.el.setAttribute(LIB_ATTR.COMPONENT_ID, element.id);
  containerEl.appendChild(element.el);
  return element.ci;
}

function extractComponent (node) {
  const componentNode = walkUpNodes(node, (el) => el.getAttribute(LIB_ATTR.COMPONENT_TYPE));
  const rootNode = walkUpNodes(componentNode, (el) => el.getAttribute(LIB_ATTR.COMPONENT_TYPE) == LIB_ATTR.BASE);
  const componentId = rootNode.firstElementChild.getAttribute(LIB_ATTR.COMPONENT_ID);
  const statePath = getStatePathFromNode(componentNode);
  return createAccessor([componentId].concat(statePath));
}
