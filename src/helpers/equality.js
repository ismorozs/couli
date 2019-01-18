import {
  isArray,
  isObject,
  isUndefined,
} from './checkers';

export default areEqual;

function areEqual (first, second) {
  if (isUndefined(first) || isUndefined(second)) {
    return false;
  }

  if (typeof first !== typeof second) {
    return false;
  }

  const parentNode = { childNode: {} };

  if (isArray(second)) {
    checkKeysEquality(
      first ? first.map(el => el) : [],
      second.map(el => el),
      parentNode
    );

  } else if (isObject(second)) {
    checkKeysEquality(first, second, parentNode);

  } else {
    return first === second;

  }

  return parentNode.childNode;
}

function checkKeysEquality (first, second, parentNode) {
  for (let key in second) {

    if (isArray(first)) {
      if (isUndefined(first[key])) {
        parentNode.childNode[key] = { add: true };
      }
      continue;
    }

    if (first[key] !== second[key]) {
      parentNode.childNode[key] = false;
    }
  }

  for (let key in first) {

    if (isArray(first)) {
      if (isUndefined(second[key])) {
        parentNode.childNode[key] = { remove: true };
      }
      continue;
    }

    if (first[key] !== second[key]) {
      parentNode.childNode[key] = false;
    }
  }

  return parentNode;
}
