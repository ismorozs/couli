export {
  isFunction,
  isArray,
  isObject,
  isObjectInBrackets,
  isObjectInDoubleBrackets,
  isString,
  isHTMLString,
  isNumber,
  isDOMElement,
  isUndefined,
  isEmpty,
  isLink,
};


function isFunction(obj) {
  return getObjectType(obj) === '[object Function]';
}

function isArray (obj) {
  return getObjectType(obj) === '[object Array]';
}

function isObject (obj) {
  return getObjectType(obj) === '[object Object]';
}

function isObjectInBrackets (obj) {
  return isArray(obj) && obj.length === 1 && isObject(obj[0]);
}

function isObjectInDoubleBrackets (obj) {
  return isArray(obj) && obj.length === 1 && isObjectInBrackets(obj[0]);
}

function isString (obj) {
  return getObjectType(obj) === '[object String]';
}

function isHTMLString (obj) {
  return isString(obj) && obj.indexOf('<') === 0;
}

function isNumber (obj) {
  return getObjectType(obj) === '[object Number]' && obj === obj;
}

function isDOMElement (obj) {
  return obj && typeof obj.tagName !== 'undefined';
}

function isUndefined (obj) {
  return typeof obj === 'undefined';
}

function getObjectType (obj) {
  return Object.prototype.toString.call(obj);
}

function isLink (obj) {
  const slashIdx = obj.indexOf('/');
  return [0, 1, 2].some((idx) => idx === slashIdx);
}

function isEmpty (obj) {
  if (!obj) {
    return true;
  }

  if (isArray(obj) || isString(obj)) {
    return !obj.length;
  }

  return !Object.keys(obj).length;
}
