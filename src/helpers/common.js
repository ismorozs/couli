import { isObject } from './checkers';
import { set } from './object';

export {
  has,
  getFalsePaths,
  toDashCase,
  toCamelCase,
  getShortName,
  getRealName,
};

const NAMES = {
  real: {},
  short: []
};

function getShortName (name) {
  if (NAMES.real[name]) {
    return NAMES.real[name];
  }

  const shortName = NAMES.short.push(name);
  return NAMES.real[name] = shortName - 1;
}

function getRealName (num) {
  return NAMES.short[num];
}

function has (obj, el) {
  if (isObject(obj)) {
    const keys = Object.keys(obj);
    return has(keys, el);
  }

  return obj.indexOf(el) >= 0;
};

function getFalsePaths (obj) {
  const onlyFalsePaths = {};
  getFalsePath(obj, onlyFalsePaths, []);
  return onlyFalsePaths;
}

function getFalsePath (obj, onlyFalsePaths, path) {
  for (let key in obj) {
    if (isObject(obj[key])) {
      getFalsePath(obj[key], onlyFalsePaths, path.concat(key));
      continue;
    }

    if (obj[key] !== true) {
      set(onlyFalsePaths, path.concat(key), obj[key]);
    }
  }
}

function toDashCase (str) {
  return str.replace(/([A-Z])/g, (match) => '-' + match[0].toLowerCase());
}

function toCamelCase (str) {
  return str.replace(/\-(.)/g, (match) => match[1].toUpperCase());
}
