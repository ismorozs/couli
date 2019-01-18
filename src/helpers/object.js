import {
  isObject,
  isFunction,
} from './checkers';

export {
  get,
  set,
  remove,
  addConstFields,
  forEach,
  map,
  mapKeys,
  filter,
  toObject,
  fullMap,
  splitPiece,
};

function get (obj, path) {
  let value = obj;
  for (let i = 0; i < path.length; i++) {

    try {
      value = value[path[i]];

    } catch (e) {
      return value;

    }
  }
  return value;
}

function set (obj, path, value) {
  if (!path.length) {
    if (isObject(value)) {
      return Object.assign(obj, value);
    }
    return obj = value;
  }

  let dest = obj;
  for (var i = 0; i < path.length - 1; i++) {
    if (!dest[ path[i] ]) {
      dest = dest[path[i]] = {};
    } else {
      dest = dest[path[i]];
    }
  }

  if (isObject(value)) {
    dest[ path[i] ] = dest[ path[i] ] || {};
    Object.assign(dest[ path[i] ], value);
  } else {
    dest[ path[i] ] = value;
  }

  return obj;
}

function remove (obj, path) {
  let value = obj;
  for (var i = 0; i < path.length - 1; i++) {
    value = value[path[i]];
  }

  delete value[path[i]];
}

function addConstFields (obj, fields) {
  for (let field in fields) {
    Object.defineProperty(obj, field, {
      get: function () { return fields[field] },
      set: function () { throw new Error("Trying to redefine const field '" + field + "'") },
    })
  }
}

function forEach (obj, cb) {
  for (let key in obj) {
    const prop = obj[key];
    cb(prop, key, obj);
  }
}

function map(obj, cb) {
  const newObj = {}
  for (let key in obj) {
    const prop = obj[key];
    newObj[key] = cb(prop, key, obj);
  }
  return newObj;
}

function mapKeys (obj, cb) {
  const newObj = {}
  for (let key in obj) {
    const prop = obj[key];
    const newKey = cb(key, prop, obj);
    newObj[newKey] = prop;
  }
  return newObj;
}

function splitPiece (obj, cb) {
  const newObj = {}
  for (let key in obj) {
    const prop = obj[key];
    if ( cb(prop, key, obj) ) {
      newObj[key] = prop;
      delete obj[key];
    }
  }
  return newObj;
}

function fullMap (obj, cb) {
  const newObj = {}
  for (let key in obj) {
    const prop = obj[key];
    const res = cb(key, prop, obj);
    newObj[ res[0] || res.key || res.k ] = res[1] || res['value'] || res['v'];
  }
  return newObj;
}

function filter (obj, cb) {
  const newObj = {};
  for (let key in obj) {
    const prop = obj[key];
    if ( cb(prop, key, obj) ) {
      newObj[key] = prop;
    }
  }
  return newObj;
}

function toObject (arr, val) {
  const newObj = {};
  arr.forEach((v) => {
    newObj[v] = isFunction(val) ? val(v) : val;
  });
  return newObj;
}
