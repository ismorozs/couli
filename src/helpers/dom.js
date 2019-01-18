import LIB_ATTR from '../globals/attributes';

import {
  isArray,
  isHTMLString,
  isDOMElement,
} from './checkers';

import ComponentNotExistsError from '../errors/ComponentNotExistsError';

const COMPONENTS = {};

export {
  replaceNodes,
  cloneHTMLMarkup,
  collectHTMLNodes,
  walkNodes,
  removeNode,
  insertBeforeNode,
};

function replaceNodes (original, replacement) {
  original.parentNode.replaceChild(replacement, original);
  return replacement;
}

function insertBeforeNode (el, nextEl) {
  nextEl.parentNode.insertBefore(el, nextEl);
}

function cloneHTMLMarkup (markup) {
  const markupStr = isHTMLString(markup.trim()) ? markup : document.querySelector(markup).innerHTML;

  const div = document.createElement('div');
  div.innerHTML = markupStr;
  return div.children[0];
}

function walkNodes (node, cb) {
  if ( cb(node) === -1) {
    return;
  }

  Array.prototype
    .slice
    .call(node.children)
    .forEach((el) => walkNodes(el, cb));
}

function collectHTMLNodes (root, isWanted) {
  const nodes = [];
  walkNodes(root, (el) => isWanted(el) ? nodes.push(el) : '');
  return nodes;
}

function removeNode (node) {
  node.parentNode.removeChild(node);
}
