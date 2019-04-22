import {
  isHTMLString,
} from './checkers';

export {
  replaceNodes,
  cloneHTMLMarkup,
  collectHTMLNodes,
  walkNodes,
  removeNode,
  insertBeforeNode,
  rewriteToNode,
  emptyNode,
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
  return convertStringToHTML(markupStr);
}

function convertStringToHTML (markupString) {
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(markupString, 'text/html');
  return parsedDocument.body.firstElementChild;
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

function rewriteToNode (node, text) {
  emptyNode(node);
  writeToNode(node, text);
}

function writeToNode (node, text) {
  const textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function emptyNode (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}
