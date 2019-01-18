import {
  replaceNodes,
  collectHTMLNodes,
} from './helpers/dom'

import {
  getComponentOpts,
  isComponent,
} from './Definition';

import { setupEventHandlers } from './EventHandler';

import { createElement } from './State';

export { apply };


function apply (rootElementSelector) {
  const rootElement = document.querySelector(rootElementSelector);
  const HTMLNodes = collectHTMLNodes(rootElement, isComponent);

  HTMLNodes.forEach((HTMLNode) => {
    const componentOpts = getComponentOpts(HTMLNode);
    const element = setupElement(componentOpts);

    replaceNodes(HTMLNode, element.el);
  });
}

function setupElement (componentOpts) {
  const element = createElement(componentOpts);
  setupEventHandlers(element);
  return element;
}
