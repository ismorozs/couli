var Couli =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Definition.js":
/*!***************************!*\
  !*** ./src/Definition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RESERVED_BINDING_NAMES = exports.VALUE_TYPES = exports.isComponent = exports.shortenBindingId = exports.getComponentOpts = exports.define = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _regexp = __webpack_require__(/*! ./globals/regexp */ "./src/globals/regexp.js");

var _regexp2 = _interopRequireDefault(_regexp);

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _copy = __webpack_require__(/*! ./helpers/copy */ "./src/helpers/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _View = __webpack_require__(/*! ./View */ "./src/View.js");

var _ComponentRedefineError = __webpack_require__(/*! ./errors/ComponentRedefineError */ "./src/errors/ComponentRedefineError.js");

var _ComponentRedefineError2 = _interopRequireDefault(_ComponentRedefineError);

var _ScopeNameCollisionError = __webpack_require__(/*! ./errors/ScopeNameCollisionError */ "./src/errors/ScopeNameCollisionError.js");

var _ScopeNameCollisionError2 = _interopRequireDefault(_ScopeNameCollisionError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VALUE_TYPES = ['style', 'class', 'value', 'attrs', 'html'];
var RESERVED_HOOKS_NAMES = ['mount', 'update', 'remove'];
var DEFAULT_HOOKS = (0, _object.toObject)(RESERVED_HOOKS_NAMES, function () {
  return function () {};
});
var RESERVED_BINDING_NAMES = VALUE_TYPES.concat(['events', 'hooks', 'listItem', _attributes2.default.SELF]);

exports.define = define;
exports.getComponentOpts = getComponentOpts;
exports.shortenBindingId = shortenBindingId;
exports.isComponent = isComponent;
exports.VALUE_TYPES = VALUE_TYPES;
exports.RESERVED_BINDING_NAMES = RESERVED_BINDING_NAMES;


var COMPONENT_COUNTER = 0;
var COMPONENTS = {};

function define(name, markup, bindings, styles) {
  var args = (0, _checkers.isObject)(name) ? name : { name: name, markup: markup, bindings: bindings, styles: styles };

  name = (0, _common.toCamelCase)(args.name);

  if (COMPONENTS[name]) {
    throw new _ComponentRedefineError2.default(name);
  }

  var componentHTMLMarkup = (0, _dom.cloneHTMLMarkup)(args.markup);
  componentHTMLMarkup.classList.add(name);

  COMPONENT_COUNTER = 0;
  var component = {
    name: name,
    state: _defineProperty({}, _attributes2.default.SELF, {}),
    stateId: name,
    statePath: [name],
    stateNames: {},
    markup: componentHTMLMarkup,
    evaluate: {},
    links: {},
    isComponent: true,
    outerNames: {},
    _links: {}
  };

  gatherBindingsFromMarkup(componentHTMLMarkup, component);

  var normalizedOptions = normalizeUserOptions(args.bindings, { state: {} });
  (0, _copy2.default)(component, normalizedOptions);

  prepareBindings(component, component.stateId, { statePath: [], links: {}, stateNames: component.stateNames });

  (0, _View.createAndAppendStyles)(prepareStyles(args.styles, component));

  return COMPONENTS[name] = component;
}

function gatherBindingsFromMarkup(componentHTMLMarkup, component) {
  (0, _dom.walkNodes)(componentHTMLMarkup, function (HTMLNode) {
    var bindingOpts = analyzeBinding(HTMLNode);

    if (!bindingOpts) {
      return;
    }

    var binding = createBinding(bindingOpts.name, component, HTMLNode);

    if (bindingOpts.isComponent) {
      setComponent(binding, bindingOpts);
      HTMLNode.classList.add(_attributes2.default.PREFIX + binding.id);
    }

    component.state[binding.name] = binding;
    binding.markup.classList.add(_attributes2.default.PREFIX + binding.id, component.name + '-' + binding.name);

    if (bindingOpts.isList) {
      var itemNode = HTMLNode.children[0];
      modifyToListBinding(binding, itemNode);

      if (isComponent(itemNode)) {
        setComponent(binding.listItem, getComponentOpts(itemNode));
        return -1;
      }

      gatherBindingsFromMarkup(itemNode, binding.listItem);
      return -1;
    }
  });

  return component;
}

function setComponent(componentBinding, subComponentOpts) {
  var stateNames = Object.assign(componentBinding.stateNames, subComponentOpts.component.stateNames);
  var stateId = subComponentOpts.component.name + 'x' + COMPONENT_COUNTER++;

  if (subComponentOpts.stateName) {
    if (stateNames[subComponentOpts.stateName]) {
      throw new _ScopeNameCollisionError2.default(subComponentOpts.stateName);
    }

    stateId = subComponentOpts.stateName;
    componentBinding.stateNames[stateId] = true;
  }

  (0, _copy2.default)(componentBinding, subComponentOpts.component);

  return Object.assign(componentBinding, {
    id: stateId,
    stateId: stateId,
    name: stateId,
    stateName: subComponentOpts.stateName,
    statePath: componentBinding.statePath.concat(stateId),
    markup: subComponentOpts.component.markup.cloneNode(true),
    isComponent: true,
    stateNames: stateNames,
    _links: Object.assign({}, subComponentOpts.links),
    outerNames: Object.assign({}, subComponentOpts.revLinks)
  });
}

function prepareBindings(component, currentStateId, parentComponent) {
  var componentWrapper = document.createElement('div');
  component.markup.setAttribute(_attributes2.default.BINDING_ID, shortenBindingId(currentStateId + _attributes2.default.STATE_DELIMITER + _attributes2.default.SELF));
  componentWrapper.appendChild(component.markup);
  component.statePath = parentComponent.statePath.concat(component.stateId);
  component.stateNames = parentComponent.stateNames;

  var subComponents = [];

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    var oldBindingId = binding.id;
    var newBindingId = currentStateId + _attributes2.default.STATE_DELIMITER + bindingName;
    var shortId = shortenBindingId(newBindingId);

    if (binding.markup) {
      var bindingNode = componentWrapper.querySelector('.' + _attributes2.default.PREFIX + oldBindingId);
      bindingNode.setAttribute(_attributes2.default.BINDING_ID, shortId);
      bindingNode.classList.remove(_attributes2.default.PREFIX + oldBindingId);
      bindingNode.classList.add(_attributes2.default.PREFIX + newBindingId);
    }

    Object.assign(binding, {
      statePath: component.statePath.slice(),
      hooks: Object.assign({}, DEFAULT_HOOKS, binding.hooks),
      id: newBindingId,
      shortId: shortId
    });

    prepareReactiveFuncs(binding, component);

    if (binding.isList) {
      binding.statePath.push(bindingName);
      binding.stateNames = component.stateNames;

      prepareBindings(binding.listItem, newBindingId + _attributes2.default.STATE_DELIMITER + _attributes2.default.ITEM + binding.listItem.name, binding);
      return;
    }

    if (binding.isComponent) {
      subComponents.push(binding);
    }
  });

  setupComponentsLinks(component, parentComponent);
  component.template = component.markup.cloneNode(true);

  subComponents.forEach(function (subComponent) {
    prepareBindings(subComponent, currentStateId + _attributes2.default.STATE_DELIMITER + subComponent.stateId, component);
  });
}

function prepareReactiveFuncs(binding, componentData) {
  VALUE_TYPES.forEach(function (type) {
    var reactiveFunc = binding[type];
    if (!reactiveFunc) {
      return;
    }

    binding.evaluate[type] = prepareReactiveFunc(binding, type, reactiveFunc, componentData);
  });
}

function prepareReactiveFunc(binding, type, reactiveFunc, componentData) {
  var dependenciesNames = getDependenciesNames(reactiveFunc);

  dependenciesNames.forEach(function (dependencyName) {
    if ((0, _checkers.isEmpty)(componentData.state[dependencyName])) {
      componentData.state[dependencyName] = createBinding(dependencyName, componentData);
    }

    componentData.state[dependencyName].dependants[binding.name + ':' + type] = { name: binding.name, type: type };
  });

  return function (values, componentInterface) {
    return compute(reactiveFunc, values, componentInterface);
  };
}

function getDependenciesNames(func) {
  var funcParams = getParamNames(func);
  var valuesObjRegExp = new RegExp('\\' + funcParams[0] + '\\.(\\D[^\\s\\W]+)', 'g');
  var dependenciesNames = [];
  var funcStr = func.toString();
  var dependencyName = void 0;
  while (dependencyName = valuesObjRegExp.exec(funcStr)) {
    dependenciesNames.push(dependencyName[1]);
  }
  return dependenciesNames;
}

function getParamNames(func) {
  var funcStrWithoutComments = func.toString().replace(_regexp2.default.STRIP_COMMENTS, '');
  var paramsStr = funcStrWithoutComments.slice(funcStrWithoutComments.indexOf('(') + 1, funcStrWithoutComments.indexOf(')'));
  return paramsStr.match(_regexp2.default.ARGUMENT_NAMES) || [];
}

function compute(func, valuesObj, componentInterface) {
  return func.call(this, (0, _State.getOnlyValues)(valuesObj), componentInterface);
}

function setupComponentsLinks(component, parentComponent) {
  Object.assign(parentComponent.links, (0, _object.map)(component.outerNames, function (k) {
    return { link: k, component: component.stateId };
  }));
}

function normalizeUserOptions(optionsObj, parentObj, parentKey) {
  if ((0, _checkers.isFunction)(optionsObj)) {
    return (0, _object.set)(parentObj, [parentKey], { class: optionsObj });
  }

  if ((0, _checkers.isArray)(optionsObj)) {

    if (optionsObj.length > 1) {
      optionsObj.forEach(function (option) {
        return normalizeUserOptions(option, parentObj, parentKey);
      });
      return;
    }

    if ((0, _checkers.isFunction)(optionsObj[0])) {
      return (0, _object.set)(parentObj, [parentKey], { value: optionsObj[0] });
    }
    if ((0, _checkers.isObject)(optionsObj[0])) {
      return (0, _object.set)(parentObj, [parentKey], { events: optionsObj[0] });
    }
  }

  (0, _object.forEach)(optionsObj, function (value, key) {
    delete optionsObj[key];
    var binding = createBinding(key);

    if ((0, _checkers.isObject)(value)) {
      parentObj['state'][key] = Object.assign(binding, value);
      return;
    }

    parentObj['state'][key] = binding;
    normalizeUserOptions(value, parentObj['state'], key);
  });

  return parentObj;
}

function analyzeBinding(el) {
  if (isComponent(el)) {
    return getComponentOpts(el);
  }

  if (!el.getAttribute) {
    return null;
  }

  var name = el.getAttribute(_attributes2.default.TEMPLATE_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_BINDING);

  if (name) {
    return { name: name.trim() };
  }

  name = el.getAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);
  el.removeAttribute(_attributes2.default.TEMPLATE_LIST_BINDING);

  if (name) {
    return { name: name.trim(), isList: true };
  }
}

function isComponent(el) {
  var tagName = el.tagName && el.tagName.toLowerCase();
  return tagName && COMPONENTS[(0, _common.toCamelCase)(tagName)];
}

function getComponentOpts(obj) {
  var name = (0, _common.toCamelCase)(obj.tagName.toLowerCase());
  var component = getComponentByName(name);
  var links = {};
  var revLinks = {};
  var stateName = null;

  Array.prototype.slice.call(obj.attributes).forEach(function (attr) {

    if (attr.name === _attributes2.default.STATE_NAME) {
      stateName = attr.value;
      return;
    }

    var innerLink = (0, _common.toCamelCase)(attr.name);
    links[innerLink] = attr.value;
    revLinks[attr.value] = innerLink;
  });

  return {
    component: component,
    links: links,
    revLinks: revLinks,
    stateName: stateName,
    name: name,
    isComponent: true
  };
}

function getComponentByName(name) {
  return COMPONENTS[(0, _common.toCamelCase)(name)];
}

function createBinding(name, component, el) {
  var componentOpts = component ? {
    id: component.stateId + _attributes2.default.STATE_DELIMITER + name,
    statePath: component.statePath,
    stateNames: component.stateNames,
    isListItem: component.isList,
    stateId: name
  } : {};

  var elOpts = el ? {
    initValue: el.value || el.innerHTML
  } : {};

  return Object.assign({
    name: name,
    listeners: [],
    markup: el,
    dependants: {},
    events: {},
    evaluate: {},
    links: {},
    state: _defineProperty({}, _attributes2.default.SELF, {}),
    outerNames: {},
    _links: {}

  }, componentOpts, elOpts);
}

function modifyToListBinding(binding, itemMarkup) {
  binding.isList = true;

  return Object.assign(binding, {
    markup: itemMarkup,
    listItem: createBinding(itemMarkup.tagName, binding, itemMarkup)
  });
}

function shortenBindingId(id) {
  return id.split(_attributes2.default.STATE_DELIMITER).map(function (el) {
    return (0, _common.getShortName)(el);
  }).join(_attributes2.default.STATE_DELIMITER);
}

function prepareStyles(styleArg, component) {
  return (0, _object.mapKeys)(styleArg, function (key) {
    return key.split(',').map(function (selector) {
      return selector.trim();
    }).map(function (selector) {

      var className = '.' + component.name;

      if (selector) {
        var isBinding = component.state[selector.split(' ')[0].split('::')[0].split(':')[0]];
        var prefix = isBinding ? className + '-' : '';
        className += ' ' + prefix + selector;
      }

      return className;
    }).join(',');
  });
}

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupEventHandlers = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _StateChange = __webpack_require__(/*! ./StateChange */ "./src/StateChange.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setupEventHandlers = setupEventHandlers;


function setupEventHandlers(element) {
  var eventHandlers = {};
  gatherAllEventHandlers(element, eventHandlers);

  var markup = element.el;

  var _loop = function _loop(eventName) {
    markup.addEventListener(eventName, function (e) {
      return executeAllCallbacksInList(e, eventHandlers[eventName], element);
    });
  };

  for (var eventName in eventHandlers) {
    _loop(eventName);
  }
}

function gatherAllEventHandlers(component, gatheredHandlers) {
  gatherEventHandlers(component, gatheredHandlers);

  if (component.state) {
    (0, _object.forEach)(component.state, function (binding) {
      return gatherAllEventHandlers(binding, gatheredHandlers);
    });
  }

  if (component.listItem) {
    gatherAllEventHandlers(component.listItem, gatheredHandlers);
  }
}

function gatherEventHandlers(binding, gatheredHandlers) {
  if (!binding.events) {
    return;
  }

  for (var eventName in binding.events) {
    if (!gatheredHandlers[eventName]) {
      gatheredHandlers[eventName] = {};
    }

    gatheredHandlers[eventName][binding.shortId] = binding.events[eventName];
  }
}

function executeAllCallbacksInList(e, eventHandlers, element) {
  decorateEvent(e);
  (0, _StateChange.startTransaction)();

  var curHTMLNode = e.target;
  while (curHTMLNode !== element.el.parentNode) {
    var bindingId = curHTMLNode.getAttribute(_attributes2.default.BINDING_ID);
    var eventHandler = eventHandlers[bindingId];

    if (eventHandler) {
      var indexlessStatePath = bindingId.split(_attributes2.default.STATE_DELIMITER);
      indexlessStatePath.pop();
      var statePathToItem = getStatePathToItem(curHTMLNode, indexlessStatePath);
      var accessorToData = (0, _State.createAccessor)([element.id].concat(statePathToItem));

      eventHandler.call(this, e, curHTMLNode, accessorToData, +statePathToItem.slice(-2)[0]);

      if (e.propagationStopped) {
        break;
      }
    }
    curHTMLNode = curHTMLNode.parentNode;
  }

  (0, _StateChange.applyChanges)();
}

function decorateEvent(e) {
  var stopPropagation = e.stopPropagation.bind(e);
  e.stopPropagation = function () {
    e.propagationStopped = true;
    stopPropagation();
  };
}

function getStatePathToItem(el, indexlessStatePath) {
  var statePath = [];

  var elementName = void 0;
  while (elementName = (0, _common.getRealName)(indexlessStatePath.pop())) {

    if ((0, _common.has)(elementName, _attributes2.default.ITEM)) {
      elementName = elementName.slice(_attributes2.default.ITEM.length);
      el = getToItemNode(el);
      var idx = el.getAttribute(_attributes2.default.ITEM_INDEX);
      el = el.parentNode;
      statePath.unshift(idx, elementName);
      continue;
    }

    statePath.unshift(elementName);
  }

  return statePath;
}

function getToItemNode(el) {
  var curEl = el;

  while (curEl.tagName !== 'BODY') {
    if (curEl.getAttribute(_attributes2.default.ITEM_INDEX)) {
      return curEl;
    }
    curEl = curEl.parentNode;
  }
}

/***/ }),

/***/ "./src/Production.js":
/*!***************************!*\
  !*** ./src/Production.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apply = undefined;

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _EventHandler = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

exports.apply = apply;


function apply(rootElementSelector) {
  var rootElement = document.querySelector(rootElementSelector);
  var HTMLNodes = (0, _dom.collectHTMLNodes)(rootElement, _Definition.isComponent);

  HTMLNodes.forEach(function (HTMLNode) {
    var componentOpts = (0, _Definition.getComponentOpts)(HTMLNode);
    var element = setupElement(componentOpts);

    (0, _dom.replaceNodes)(HTMLNode, element.el);
  });
}

function setupElement(componentOpts) {
  var element = (0, _State.createElement)(componentOpts);
  (0, _EventHandler.setupEventHandlers)(element);
  return element;
}

/***/ }),

/***/ "./src/State.js":
/*!**********************!*\
  !*** ./src/State.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareChangeObject = exports.setState = exports.getComponent = exports.getOnlyValues = exports.createAccessor = exports.createElement = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _StateChange = __webpack_require__(/*! ./StateChange */ "./src/StateChange.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.createElement = createElement;
exports.createAccessor = createAccessor;
exports.getOnlyValues = getOnlyValues;
exports.getComponent = getComponent;
exports.setState = setState;
exports.prepareChangeObject = prepareChangeObject;


var ELEMENTS = {};
var STATE = {};
var ELEMENT_COUNTER = 1;

function setState(path, value) {
  (0, _object.set)(STATE, path, value);
}

function getState(path) {
  return (0, _object.get)(STATE, path);
}

function createElement(componentOpts) {
  var id = ELEMENT_COUNTER++;
  var name = componentOpts.name;

  var element = ELEMENTS[id] = {
    id: id,
    state: _defineProperty({}, name, componentOpts.component)
  };

  STATE[id] = {};

  (0, _StateChange.createStateNodes)([id, name]);

  (0, _StateChange.sendToRenderQueue)([id], _defineProperty({}, name, false));
  (0, _StateChange.applyChanges)();
  element.el = STATE[id][name][_attributes2.default.SELF].el;
  element.el.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.BASE);

  return element;
}

function createAccessor(path) {
  var values = getState(path);
  var component = getComponent(path);

  var accessor = {
    component: component,
    values: values,
    path: path,
    startTransaction: _StateChange.startTransaction,
    applyChanges: _StateChange.applyChanges,
    up: function up(level) {
      return moveUpStatePath(level, path.slice());
    },
    down: function down(additionalPath) {
      return createAccessor(path.concat(additionalPath));
    },
    set: function set(changeObj) {
      return (0, _StateChange.setValues)(prepareChangeObject(changeObj), path);
    },
    get: function get(key) {
      return getValues(accessor, key, path);
    },
    markup: function markup(key) {
      return key ? accessor.values[key].el : accessor.values[_attributes2.default.SELF].el;
    }
  };

  if ((0, _checkers.isArray)(values)) {
    modifyToArrayAccessor(accessor);
  }

  return accessor;
}

function prepareChangeObject(changeObj) {
  return (0, _object.map)(changeObj, function (v) {
    var forced = (0, _checkers.isObject)(v) && Object.keys(v)[0] === 'force';

    return {
      value: forced ? v['force'] : v,
      type: 'value',
      force: forced
    };
  });
}

function getComponent(path) {
  var component = ELEMENTS[path[0]];

  for (var i = 1; i < path.length; i++) {
    component = component.state[path[i]];

    if (component.isList && i !== path.length - 1) {
      component = component.listItem;
      i += 2;
    }
  }

  return component;
}

function getOnlyValues(obj) {
  return (0, _object.map)(obj, function (bindingValues) {
    return bindingValues['value'];
  });
}

function getValues(accessor, key, statePath) {
  var values = accessor.values;
  var component = accessor.component;

  if (!key) {
    return getValuesTree(values, component, {});
  }

  var binding = component.state[key];
  if (binding.isList || binding.isComponent) {
    return createAccessor(statePath.concat(key));
  }

  return values[key].value;
}

function getValuesTree(values, component, valuesTree) {
  (0, _object.forEach)(values, function (vals, bindingName) {
    if ((0, _common.has)(_Definition.RESERVED_BINDING_NAMES, bindingName)) {
      return;
    }

    var binding = component.state[bindingName];

    if (binding.isList) {
      valuesTree[bindingName] = [];
      values[bindingName].forEach(function (el, i) {
        var itemValues = valuesTree[bindingName][i] = {};
        getValuesTree(values[bindingName][i][binding.listItem.name], binding.listItem, itemValues);
      });
      return;
    }

    if (binding.isComponent) {
      var componentValues = valuesTree[bindingName] = {};
      getValuesTree(values[bindingName], binding, componentValues);
    }

    valuesTree[component._links[bindingName] || bindingName] = vals.value;
  });

  return valuesTree;
}

function moveUpStatePath(level, statePath) {
  var lastIdx = statePath.length;

  if (level === '') {
    return createAccessor(statePath.slice(0, 2));
  }

  if ((0, _checkers.isString)(level)) {
    while (lastIdx--) {
      if (statePath[lastIdx] === level) {
        break;
      }
    }

    return createAccessor(statePath.slice(0, lastIdx + 1));
  }

  level = level || 1;
  while (lastIdx-- && level--) {
    if ((0, _checkers.isNumber)(+statePath[lastIdx - 1])) {
      lastIdx--;
    }
  }

  return createAccessor(statePath.slice(0, lastIdx + 1));
}

function modifyToArrayAccessor(accessor) {
  Object.assign(accessor, {
    get: function get(num) {
      return createAccessor(accessor.path.concat(num, accessor.component.listItem.name));
    },

    push: function push(els) {
      return (0, _StateChange.modifyList)('add', { start: accessor.values.length, els: els }, accessor);
    },
    unshift: function unshift(els) {
      return (0, _StateChange.modifyList)('add', { start: 0, els: els }, accessor);
    },
    add: function add(start, els) {
      return (0, _StateChange.modifyList)('add', { start: start, els: els }, accessor);
    },

    pop: function pop(num) {
      return (0, _StateChange.modifyList)('remove', { start: accessor.values.length - (num || 1), num: num }, accessor);
    },
    shift: function shift(num) {
      return (0, _StateChange.modifyList)('remove', { start: 0, num: num }, accessor);
    },
    remove: function remove(start, num) {
      return (0, _StateChange.modifyList)('remove', { start: start, num: num }, accessor);
    },

    length: function length() {
      return accessor.values.length;
    },
    value: function value() {
      return mapList(accessor);
    },
    forEach: function forEach(cb) {
      return iterateListValues(accessor, cb);
    },
    filter: function filter(cb) {
      return filterList(accessor, cb);
    },
    map: function map(cb) {
      return mapList(accessor, cb);
    }
  });
}

function iterateListValues(accessor, cb) {
  accessor.values.forEach(function (el, i) {
    return cb(getValuesTree(el[accessor.component.listItem.name], accessor.component.listItem, {}), i);
  });
}

function filterList(accessor, cb) {
  var newList = [];

  iterateListValues(accessor, function (el, i) {
    if (cb(el, i)) {
      newList.push(el);
    }
  });

  return newList;
}

function mapList(accessor, cb) {
  var newList = [];
  iterateListValues(accessor, function (el, i) {
    return newList.push(cb ? cb(el, i) : el);
  });
  return newList;
}

/***/ }),

/***/ "./src/StateChange.js":
/*!****************************!*\
  !*** ./src/StateChange.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendToRenderQueue = exports.applyChanges = exports.startTransaction = exports.modifyList = exports.createStateNodes = exports.setValues = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _equality = __webpack_require__(/*! ./helpers/equality */ "./src/helpers/equality.js");

var _equality2 = _interopRequireDefault(_equality);

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _View = __webpack_require__(/*! ./View */ "./src/View.js");

var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _BindingNotExistsError = __webpack_require__(/*! ./errors/BindingNotExistsError */ "./src/errors/BindingNotExistsError.js");

var _BindingNotExistsError2 = _interopRequireDefault(_BindingNotExistsError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.setValues = setValues;
exports.createStateNodes = createStateNodes;
exports.modifyList = modifyList;
exports.startTransaction = startTransaction;
exports.applyChanges = applyChanges;
exports.sendToRenderQueue = sendToRenderQueue;


var CHANGES = { changes: {}, collecting: false };
var PROMISES_RESOLVES = [];
var LIFE_CYCLE_HANDLERS = { list: [] };

function startTransaction() {
  applyChanges();
  CHANGES.collecting = true;
}

function applyChanges() {
  var changes = CHANGES.changes;
  CHANGES.changes = {};
  (0, _View.renderChanges)(changes);
  return runLifeCycleHooks();
}

function runLifeCycleHooks() {
  var lifeCycleHandlers = LIFE_CYCLE_HANDLERS.list;
  LIFE_CYCLE_HANDLERS.list = [];
  lifeCycleHandlers.forEach(function (h) {
    return h();
  });

  if (!(0, _checkers.isEmpty)(CHANGES.changes)) {
    return applyChanges();
  }

  return finalizeTransaction();
}

function finalizeTransaction() {
  CHANGES.collecting = false;
  var resolvePromise = void 0;

  while (resolvePromise = PROMISES_RESOLVES.pop()) {
    resolvePromise(true);
  }

  return Promise.resolve(true);
}

function sendToRenderQueue(path, change) {
  (0, _object.set)(CHANGES.changes, path, change);
}

function isCollectingChanges() {
  return CHANGES.collecting;
}

function addLifeCycleHook(hookType, binding, values, accessor, idx) {
  var hook = binding.hooks[hookType];

  LIFE_CYCLE_HANDLERS.list.push(function () {
    var el = values[binding.name || _attributes2.default.SELF].el;
    var vals = !binding.name ? (0, _State.getOnlyValues)(values) : values[binding.name].value;
    hook(el, vals, accessor, idx);
  });
}

function createStateNodes(statePath) {
  var component = (0, _State.getComponent)(statePath);
  var valuesNode = createStateNode(component);
  (0, _State.setState)(statePath, valuesNode);

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    if (binding.isComponent) {
      createStateNodes(statePath.concat(bindingName));
    }
  });

  var accessor = (0, _State.createAccessor)(statePath);
  addLifeCycleHook('mount', component.state[_attributes2.default.SELF], valuesNode, accessor, statePath.slice(-2)[0]);

  return valuesNode;
}

function createStateNode(component) {
  var valuesNodes = (0, _object.map)(component.state, function (binding) {
    var valueNode = binding.isList ? [] : {};

    return _Definition.VALUE_TYPES.reduce(function (a, key) {
      var value = void 0;

      switch (key) {
        case 'value':
        case 'html':
          value = binding.initValue || '';
          break;

        default:
          value = {};
      }

      a[key] = value;

      return a;
    }, valueNode);
  });

  return Object.assign(valuesNodes, _defineProperty({}, _attributes2.default.SELF, (0, _object.toObject)(_Definition.VALUE_TYPES, {})));
}

function setValues(changeValues, statePath, calledDependences) {
  calledDependences = calledDependences || [];
  var accessor = (0, _State.createAccessor)(statePath);

  if (!accessor.values) {
    accessor.values = createStateNodes(statePath);
    var start = +statePath.slice(-2)[0];
    sendToRenderQueue(statePath, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + 1 } }));
  }

  (0, _object.forEach)(changeValues, function (change, bindingName) {
    return setValue(bindingName, change, accessor, calledDependences);
  });

  addLifeCycleHook('update', accessor.component.state[_attributes2.default.SELF], accessor.values, accessor, statePath.slice(-2)[0]);

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function setValue(bindingName, change, accessor, calledDependences) {
  var statePath = accessor.path;
  var component = accessor.component;
  var values = accessor.values;
  var binding = component.state[bindingName];

  if (!binding) {
    bindingName = component.outerNames[bindingName];
    binding = component.state[bindingName];
  }

  if (!binding) {
    throw new _BindingNotExistsError2.default(bindingName, component.name, statePath);
  }

  if (change.type === 'value') {
    if (binding.isList) {
      return setValueForList(binding, change, values[bindingName], accessor);
    }

    if ((0, _checkers.isObject)(change.value) && binding.isComponent) {
      return setValueForComponent(binding, change, component, statePath);
    }
  }

  var equal = (0, _equality2.default)(values[bindingName][change.type], change.value);

  if (!equal || !(0, _checkers.isEmpty)(equal) || change.force) {
    values[bindingName][change.type] = change.value;

    if (change.type !== 'value') {
      return sendToRenderQueue(statePath.concat(bindingName), _defineProperty({}, change.type, false));
    }

    addLifeCycleHook('update', binding, values, accessor, statePath.slice(-2)[0]);
    calledDependences.push(bindingName + ':' + change.type);

    if (!binding.html) {
      setValue(bindingName, { value: change.value, type: 'html', force: change.force }, accessor, calledDependences);
    }

    var link = component.links[bindingName];
    if (link) {
      setValue(link.link, { value: change.value, type: 'value', force: change.force }, accessor.down(link.component), []);
    }

    (0, _object.forEach)(binding.dependants, function (dependant, dependantKey) {
      if ((0, _common.has)(calledDependences, dependantKey)) {
        return;
      }

      var newValue = component.state[dependant.name].evaluate[dependant.type](values, accessor);
      setValue(dependant.name, { value: newValue, type: dependant.type }, accessor, calledDependences);
    });
  }
}

function setValueForList(binding, change, arr, accessor) {
  Object.keys(change.value).forEach(function (i) {
    return setValues((0, _State.prepareChangeObject)(change.value[i]), accessor.path.concat(binding.name, i, binding.listItem.name));
  });

  var indexEquality = (0, _equality2.default)(arr, change.value);
  (0, _object.forEach)(indexEquality, function (changeObj, idx) {
    if (changeObj.remove) {
      changeObj.remove = removeListItem(arr, idx, binding, accessor);
    }

    sendToRenderQueue(accessor.path.concat(binding.name, idx, binding.listItem.name), _defineProperty({}, _attributes2.default.FULL_CHANGE, changeObj));
  });
}

function setValueForComponent(binding, change, component, statePath) {
  setValues((0, _State.prepareChangeObject)(change.value), statePath.concat(binding.name));
}

function modifyList(action, args, accessor) {
  var arr = accessor.values;
  var listPath = accessor.path;
  var itemName = accessor.component.listItem.name;
  var start = args.start;
  var changeObj = {};

  switch (action) {
    case 'add':
      changeObj = addToList(arr, start, args.els, listPath, itemName);
      break;

    case 'remove':
      var end = start + (args.num || 1);
      changeObj = removeFromList(arr, start, end, accessor.component, accessor);
      break;
  }

  (0, _object.forEach)(changeObj, function (change, idx) {
    return sendToRenderQueue(listPath.concat(idx, itemName, _attributes2.default.FULL_CHANGE), changeObj[idx][_attributes2.default.FULL_CHANGE]);
  });

  if (isCollectingChanges()) {
    return new Promise(function (res) {
      return PROMISES_RESOLVES.push(res);
    });
  }

  return applyChanges();
}

function addToList(arr, start, els, listPath, itemName) {
  els = (0, _checkers.isArray)(els) ? els : [els];

  els.forEach(function (el, i) {
    arr.splice(i + start, 0, null);
    setValues((0, _State.prepareChangeObject)(el), listPath.concat(i + start, itemName));
  });

  return _defineProperty({}, start, _defineProperty({}, _attributes2.default.FULL_CHANGE, { add: { start: start, end: start + els.length } }));
}

function removeFromList(arr, start, end, listBinding, accessor) {
  var changeObj = {};

  for (var i = start; i < end; i++) {
    var removedDOMNode = removeListItem(arr, i, listBinding, accessor);
    changeObj[i] = _defineProperty({}, _attributes2.default.FULL_CHANGE, { remove: removedDOMNode });
  }

  return changeObj;
}

function removeListItem(arr, idx, listBinding, accessor) {
  var removedNode = arr.splice(idx, 1)[0][listBinding.listItem.name];
  addLifeCycleHook('remove', listBinding.listItem.state[_attributes2.default.SELF], removedNode, accessor, idx);
  return removedNode[_attributes2.default.SELF].el;
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderChanges = exports.createAndAppendStyles = undefined;

var _attributes = __webpack_require__(/*! ./globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _common = __webpack_require__(/*! ./helpers/common */ "./src/helpers/common.js");

var _object = __webpack_require__(/*! ./helpers/object */ "./src/helpers/object.js");

var _checkers = __webpack_require__(/*! ./helpers/checkers */ "./src/helpers/checkers.js");

var _State = __webpack_require__(/*! ./State */ "./src/State.js");

var _dom = __webpack_require__(/*! ./helpers/dom */ "./src/helpers/dom.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createAndAppendStyles = createAndAppendStyles;
exports.renderChanges = renderChanges;


var render = {
  html: applyMarkup,
  class: applyClasses,
  style: applyStyles,
  attrs: applyAttributes
};

function renderChanges(changes) {
  (0, _object.forEach)(changes, function (componentChanges, elementId) {
    var componentId = Object.keys(componentChanges)[0];
    var componentAccessor = (0, _State.createAccessor)([elementId, componentId]);
    applyMarkup(componentAccessor.component, componentAccessor.values, [elementId, componentId], componentChanges[componentId]);
  });
}

function applyMarkup(component, value, statePath, changes) {
  if (!component.markup) {
    return;
  }

  if (component.isList) {
    return renderList(component, value, statePath, changes);
  }

  if (component.isComponent) {
    return renderComponent(component, value, statePath, changes);
  }

  value = (0, _checkers.isUndefined)(value) ? '' : value;

  if (component.markup.tagName === 'INPUT') {
    component.markup.value = value;
    return;
  }

  (0, _dom.rewriteToNode)(component.markup, value);

  return component;
}

function renderComponent(component, value, statePath, changes) {
  if (changes) {
    return updateComponent(component, value, statePath, changes);
  }

  return drawComponent(value, statePath);
}

function drawComponent(values, statePath) {
  var accessor = (0, _State.createAccessor)(statePath);
  var component = accessor.component;

  var itemWrapper = document.createElement('div');
  var itemMarkup = component.template.cloneNode(true);
  values[_attributes2.default.SELF].el = itemMarkup;
  itemWrapper.appendChild(itemMarkup);

  itemMarkup.setAttribute(_attributes2.default.COMPONENT_TYPE, component.isListItem ? _attributes2.default.ITEM : _attributes2.default.COMPONENT);

  (0, _object.forEach)(render, function (renderFunc, renderType) {
    if (component.state[_attributes2.default.SELF][renderType]) {
      renderFunc({ markup: itemMarkup }, values[_attributes2.default.SELF][renderType]);
    }
  });

  (0, _object.forEach)(component.state, function (binding, bindingName) {
    if (!binding.markup) {
      return;
    }

    var bindingNode = itemWrapper.querySelector('.' + _attributes2.default.PREFIX + binding.id);
    bindingNode.classList.remove(_attributes2.default.PREFIX + binding.id);

    if (binding.isComponent) {
      var childStatePath = statePath.concat(bindingName);
      var childMarkup = drawComponent(values[bindingName], childStatePath);
      (0, _dom.replaceNodes)(bindingNode, childMarkup);
      return;
    }

    values[bindingName].el = bindingNode;

    if (binding.isList) {
      renderList(binding, values[bindingName], statePath.concat(bindingName));
      return;
    }

    (0, _object.forEach)(render, function (renderFunc, renderType) {
      if (renderType === 'html' && binding.html === null || binding.markup.children.length) {
        return;
      }
      renderFunc({ markup: bindingNode }, values[bindingName][renderType], statePath);
    });
  });

  return itemWrapper.children[0];
}

function updateComponent(component, values, statePath, changes) {
  var componentMarkup = values[_attributes2.default.SELF].el;

  (0, _object.forEach)(changes, function (change, bindingName) {

    if (bindingName === _attributes2.default.SELF) {

      for (var changeType in change) {
        render[changeType]({ markup: componentMarkup }, values[_attributes2.default.SELF][changeType]);
      }
      return;
    }

    var binding = component.state[bindingName];
    var statePathToBinding = statePath.concat(bindingName);

    if (binding.isComponent || binding.isList) {
      applyMarkup(binding, values[bindingName], statePathToBinding, changes[bindingName]);
      return;
    }

    var el = values[bindingName].el;

    for (var _changeType in change) {
      var newValue = values[bindingName][_changeType];
      render[_changeType]({ markup: el }, newValue);
    }
  });
}

function renderList(listComponent, itemsValues, statePath, changes) {
  if (changes) {
    return updateList(listComponent, itemsValues, statePath, changes);
  }

  var listFragment = buildList(listComponent, itemsValues, statePath);

  var listNode = itemsValues.el;
  var parentNode = listNode.parentNode;
  var nextNode = listNode.nextElementSibling;
  (0, _dom.removeNode)(listNode);

  var isComponent = listNode.getAttribute(_attributes2.default.COMPONENT_TYPE);
  listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.LIST);
  if (isComponent) {
    listNode.setAttribute(_attributes2.default.COMPONENT_TYPE, _attributes2.default.COMPONENT_LIST);
  }

  (0, _dom.emptyNode)(listNode);
  listNode.appendChild(listFragment);

  parentNode.insertBefore(listNode, nextNode);
}

function buildList(listComponent, itemsValues, statePath, range) {
  var start = range ? range.start : 0;
  var end = range ? range.end : itemsValues.length + 1;

  var listFragment = document.createDocumentFragment();
  itemsValues.slice(start, end).forEach(function (itemValue, itemIndex) {
    var newItemIndex = +start + itemIndex;
    var statePathToItem = statePath.concat([newItemIndex, listComponent.listItem.name]);
    var listItemMarkup = drawComponent(itemValue[listComponent.listItem.name], statePathToItem);

    listItemMarkup.setAttribute(_attributes2.default.ITEM_INDEX, newItemIndex);

    listFragment.appendChild(listItemMarkup);
  });

  return listFragment;
}

function updateList(listBinding, itemsValues, statePath, changes) {
  var listNode = itemsValues.el;
  var itemName = listBinding.listItem.name;
  var itemsChanges = (0, _object.splitPiece)(changes, function (v, k) {
    return (0, _checkers.isNumber)(+k);
  });
  var removedCount = 0;
  var end = 0;

  for (var changeType in changes) {
    render[changeType]({ markup: listNode }, itemsValues[changeType]);
  }

  (0, _object.forEach)(itemsChanges, function (change, i) {
    change = change[itemName];
    var statePathToItem = statePath.concat(i, itemName);
    var itemAccessor = (0, _State.createAccessor)(statePathToItem);

    if (!change[_attributes2.default.FULL_CHANGE]) {
      updateComponent(itemAccessor.component, itemsValues[i][itemName], statePathToItem, change);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].add && i >= end) {
      var start = change[_attributes2.default.FULL_CHANGE].add.start;
      end = change[_attributes2.default.FULL_CHANGE].add.end;

      fixIndexes(listNode, start, end - start);
      var listFragment = buildList(listBinding, itemsValues, statePath, { start: start, end: end });

      if (end === itemsValues.length) {
        listNode.appendChild(listFragment);
        return;
      }

      listNode.insertBefore(listFragment, listNode.children[start]);
      return;
    }

    if (change[_attributes2.default.FULL_CHANGE].remove) {
      (0, _dom.removeNode)(change[_attributes2.default.FULL_CHANGE].remove);
      fixIndexes(listNode, i - removedCount++, -1);
    }
  });
}

function fixIndexes(listNode, start, diff) {
  var itemsNodes = Array.prototype.slice.call(listNode.children, start);

  itemsNodes.forEach(function (itemNode) {
    var prevIdx = itemNode.getAttribute(_attributes2.default.ITEM_INDEX);
    var newIdx = +prevIdx + diff;

    itemNode.setAttribute(_attributes2.default.ITEM_INDEX, newIdx);
  });
}

function applyAttributes(binding, attributes) {
  Object.assign(binding.markup, attributes);
}

function applyClasses(binding, classes) {
  for (var className in classes) {
    if (className) {
      if (classes[className]) {
        binding.markup.classList.add(className);
      } else {
        binding.markup.classList.remove(className);
      }
    }
  }
}

function applyStyles(binding, styles) {
  Object.assign(binding.markup.style, normalizeStyles(styles));
}

function createAndAppendStyles(styleObj) {
  var styleStr = '';
  for (var selector in styleObj) {
    var styles = styleObj[selector];
    styleStr += selector + '{';
    normalizeStyles(styles);
    for (var attr in styles) {
      var value = styles[attr];
      styleStr += (0, _common.toDashCase)(attr) + ':' + value + ';';
    }
    styleStr += '}\n';
  }
  var styleEl = document.createElement('style');
  styleEl.appendChild(document.createTextNode(styleStr));
  document.head.appendChild(styleEl);
}

function normalizeStyles(styles) {
  for (var attr in styles) {
    if ((0, _checkers.isNumber)(styles[attr])) {
      styles[attr] = styles[attr] + 'px';
    }
  }
  return styles;
}

/***/ }),

/***/ "./src/errors/BindingNotExistsError.js":
/*!*********************************************!*\
  !*** ./src/errors/BindingNotExistsError.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BindingNotExistsError = function (_Error) {
  _inherits(BindingNotExistsError, _Error);

  function BindingNotExistsError(bindingName, componentName, path) {
    _classCallCheck(this, BindingNotExistsError);

    var _this = _possibleConstructorReturn(this, (BindingNotExistsError.__proto__ || Object.getPrototypeOf(BindingNotExistsError)).call(this));

    _this.message = "Unable to access '" + bindingName + "' binding on '" + componentName + "' component on path (" + path.join(' -> ') + ") because it doesn't exist.";
    return _this;
  }

  return BindingNotExistsError;
}(Error);

exports.default = BindingNotExistsError;

/***/ }),

/***/ "./src/errors/ComponentRedefineError.js":
/*!**********************************************!*\
  !*** ./src/errors/ComponentRedefineError.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentRedefineError = function (_Error) {
  _inherits(ComponentRedefineError, _Error);

  function ComponentRedefineError(name) {
    _classCallCheck(this, ComponentRedefineError);

    var _this = _possibleConstructorReturn(this, (ComponentRedefineError.__proto__ || Object.getPrototypeOf(ComponentRedefineError)).call(this));

    _this.message = "Trying to redefine existing component: '" + name + "'";
    return _this;
  }

  return ComponentRedefineError;
}(Error);

exports.default = ComponentRedefineError;

/***/ }),

/***/ "./src/errors/ScopeNameCollisionError.js":
/*!***********************************************!*\
  !*** ./src/errors/ScopeNameCollisionError.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopeNameCollisionError = function (_Error) {
  _inherits(ScopeNameCollisionError, _Error);

  function ScopeNameCollisionError(name) {
    _classCallCheck(this, ScopeNameCollisionError);

    var _this = _possibleConstructorReturn(this, (ScopeNameCollisionError.__proto__ || Object.getPrototypeOf(ScopeNameCollisionError)).call(this));

    _this.message = "Trying to assign a name '" + name + "' to a state that already exists in the chain.";
    return _this;
  }

  return ScopeNameCollisionError;
}(Error);

exports.default = ScopeNameCollisionError;

/***/ }),

/***/ "./src/globals/attributes.js":
/*!***********************************!*\
  !*** ./src/globals/attributes.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LIB_NAME = 'x';
var ATTR_PREFIX = 'data-';
var PREFIX = LIB_NAME + '-';
var TEMPLATE_BINDING = PREFIX + 'b';
var TEMPLATE_LIST_BINDING = PREFIX + 'lb';
var BINDING_ID = ATTR_PREFIX + PREFIX + 'id';
var STATE_PATH = PREFIX + 'spath';
var TEMPLATE_PLACEMENT = PREFIX + 'el';
var STATE_NAME = PREFIX + 'state-name';
var SCOPE_PREFIX = 's';
var ITEM_INDEX = ATTR_PREFIX + PREFIX + 'dx';
var COMPONENT_TYPE = ATTR_PREFIX + PREFIX + 'tp';
var ITEM_SUFFIX = 'i';
var STATE_DELIMITER = '-';
var SELF = '';
var FULL_CHANGE = ' _full_change_ ';

var BASE = '1';
var COMPONENT = '2';
var LIST = '3';
var ITEM = '_item_';
var COMPONENT_LIST = '5';

exports.default = {
  PREFIX: PREFIX,
  TEMPLATE_BINDING: TEMPLATE_BINDING,
  TEMPLATE_LIST_BINDING: TEMPLATE_LIST_BINDING,
  BINDING_ID: BINDING_ID,
  STATE_PATH: STATE_PATH,
  TEMPLATE_PLACEMENT: TEMPLATE_PLACEMENT,
  STATE_NAME: STATE_NAME,
  SCOPE_PREFIX: SCOPE_PREFIX,
  ITEM_INDEX: ITEM_INDEX,
  COMPONENT_TYPE: COMPONENT_TYPE,
  ITEM_SUFFIX: ITEM_SUFFIX,
  STATE_DELIMITER: STATE_DELIMITER,
  BASE: BASE,
  COMPONENT: COMPONENT,
  LIST: LIST,
  ITEM: ITEM,
  SELF: SELF,
  FULL_CHANGE: FULL_CHANGE,
  COMPONENT_LIST: COMPONENT_LIST
};

/***/ }),

/***/ "./src/globals/regexp.js":
/*!*******************************!*\
  !*** ./src/globals/regexp.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,)]*))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

exports.default = {
  STRIP_COMMENTS: STRIP_COMMENTS,
  ARGUMENT_NAMES: ARGUMENT_NAMES
};

/***/ }),

/***/ "./src/helpers/checkers.js":
/*!*********************************!*\
  !*** ./src/helpers/checkers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isObjectInBrackets = isObjectInBrackets;
exports.isObjectInDoubleBrackets = isObjectInDoubleBrackets;
exports.isString = isString;
exports.isHTMLString = isHTMLString;
exports.isNumber = isNumber;
exports.isDOMElement = isDOMElement;
exports.isUndefined = isUndefined;
exports.isEmpty = isEmpty;
exports.isLink = isLink;


function isFunction(obj) {
  return getObjectType(obj) === '[object Function]';
}

function isArray(obj) {
  return getObjectType(obj) === '[object Array]';
}

function isObject(obj) {
  return getObjectType(obj) === '[object Object]';
}

function isObjectInBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObject(obj[0]);
}

function isObjectInDoubleBrackets(obj) {
  return isArray(obj) && obj.length === 1 && isObjectInBrackets(obj[0]);
}

function isString(obj) {
  return getObjectType(obj) === '[object String]';
}

function isHTMLString(obj) {
  return isString(obj) && obj.indexOf('<') === 0;
}

function isNumber(obj) {
  return getObjectType(obj) === '[object Number]' && obj === obj;
}

function isDOMElement(obj) {
  return obj && typeof obj.tagName !== 'undefined';
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

function isLink(obj) {
  var slashIdx = obj.indexOf('/');
  return [0, 1, 2].some(function (idx) {
    return idx === slashIdx;
  });
}

function isEmpty(obj) {
  if (!obj) {
    return true;
  }

  if (isArray(obj) || isString(obj)) {
    return !obj.length;
  }

  return !Object.keys(obj).length;
}

/***/ }),

/***/ "./src/helpers/common.js":
/*!*******************************!*\
  !*** ./src/helpers/common.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRealName = exports.getShortName = exports.toCamelCase = exports.toDashCase = exports.getFalsePaths = exports.has = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

var _object = __webpack_require__(/*! ./object */ "./src/helpers/object.js");

exports.has = has;
exports.getFalsePaths = getFalsePaths;
exports.toDashCase = toDashCase;
exports.toCamelCase = toCamelCase;
exports.getShortName = getShortName;
exports.getRealName = getRealName;


var NAMES = {
  real: {},
  short: []
};

function getShortName(name) {
  if (NAMES.real[name]) {
    return NAMES.real[name];
  }

  var shortName = NAMES.short.push(name);
  return NAMES.real[name] = shortName - 1;
}

function getRealName(num) {
  return NAMES.short[num];
}

function has(obj, el) {
  if ((0, _checkers.isObject)(obj)) {
    var keys = Object.keys(obj);
    return has(keys, el);
  }

  return obj.indexOf(el) >= 0;
}

function getFalsePaths(obj) {
  var onlyFalsePaths = {};
  getFalsePath(obj, onlyFalsePaths, []);
  return onlyFalsePaths;
}

function getFalsePath(obj, onlyFalsePaths, path) {
  for (var key in obj) {
    if ((0, _checkers.isObject)(obj[key])) {
      getFalsePath(obj[key], onlyFalsePaths, path.concat(key));
      continue;
    }

    if (obj[key] !== true) {
      (0, _object.set)(onlyFalsePaths, path.concat(key), obj[key]);
    }
  }
}

function toDashCase(str) {
  return str.replace(/([A-Z])/g, function (match) {
    return '-' + match[0].toLowerCase();
  });
}

function toCamelCase(str) {
  return str.replace(/-(.)/g, function (match) {
    return match[1].toUpperCase();
  });
}

/***/ }),

/***/ "./src/helpers/copy.js":
/*!*****************************!*\
  !*** ./src/helpers/copy.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = copy;


function copy(destination, source) {
  if (!destination) {
    return copy({}, source);
  }

  for (var key in source) {

    if ((0, _checkers.isUndefined)(source[key])) {
      continue;
    }

    if (source.hasOwnProperty(key) && (0, _checkers.isObject)(source[key])) {
      if (!destination[key]) {
        destination[key] = {};
      }
      copy(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isArray)(source[key])) {
      if (!destination[key]) {
        destination[key] = [];
      }
      copyArray(destination[key], source[key]);
      continue;
    }

    if ((0, _checkers.isDOMElement)(source[key])) {
      destination[key] = source[key].cloneNode(true);
      continue;
    }

    destination[key] = source[key];
  }

  return destination;
}

function copyArray(destination, source) {
  for (var i = 0; i < source.length; i++) {
    if ((0, _checkers.isObject)(source[i])) {
      destination[i] = destination[i] || {};
      copy(destination[i], source[i]);
      continue;
    }

    if ((0, _checkers.isArray)(source[i])) {
      destination[i] = destination[i] || [];
      copyArray(destination[i], source[i]);
      continue;
    }

    destination[i] = source[i];
  }

  return destination;
}

/***/ }),

/***/ "./src/helpers/dom.js":
/*!****************************!*\
  !*** ./src/helpers/dom.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyNode = exports.rewriteToNode = exports.insertBeforeNode = exports.removeNode = exports.walkNodes = exports.collectHTMLNodes = exports.cloneHTMLMarkup = exports.replaceNodes = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.replaceNodes = replaceNodes;
exports.cloneHTMLMarkup = cloneHTMLMarkup;
exports.collectHTMLNodes = collectHTMLNodes;
exports.walkNodes = walkNodes;
exports.removeNode = removeNode;
exports.insertBeforeNode = insertBeforeNode;
exports.rewriteToNode = rewriteToNode;
exports.emptyNode = emptyNode;


function replaceNodes(original, replacement) {
  original.parentNode.replaceChild(replacement, original);
  return replacement;
}

function insertBeforeNode(el, nextEl) {
  nextEl.parentNode.insertBefore(el, nextEl);
}

function cloneHTMLMarkup(markup) {
  var markupStr = (0, _checkers.isHTMLString)(markup.trim()) ? markup : document.querySelector(markup).innerHTML;
  return convertStringToHTML(markupStr);
}

function convertStringToHTML(markupString) {
  var parser = new DOMParser();
  var parsedDocument = parser.parseFromString(markupString, 'text/html');
  return parsedDocument.body.firstElementChild;
}

function walkNodes(node, cb) {
  if (cb(node) === -1) {
    return;
  }

  Array.prototype.slice.call(node.children).forEach(function (el) {
    return walkNodes(el, cb);
  });
}

function collectHTMLNodes(root, isWanted) {
  var nodes = [];
  walkNodes(root, function (el) {
    return isWanted(el) ? nodes.push(el) : '';
  });
  return nodes;
}

function removeNode(node) {
  node.parentNode.removeChild(node);
}

function rewriteToNode(node, text) {
  emptyNode(node);
  writeToNode(node, text);
}

function writeToNode(node, text) {
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
}

function emptyNode(node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
}

/***/ }),

/***/ "./src/helpers/equality.js":
/*!*********************************!*\
  !*** ./src/helpers/equality.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.default = areEqual;


function areEqual(first, second) {
  if ((0, _checkers.isUndefined)(first) || (0, _checkers.isUndefined)(second)) {
    return false;
  }

  if ((typeof first === 'undefined' ? 'undefined' : _typeof(first)) !== (typeof second === 'undefined' ? 'undefined' : _typeof(second))) {
    return false;
  }

  var parentNode = { childNode: {} };

  if ((0, _checkers.isArray)(second)) {
    checkKeysEquality(first ? first.map(function (el) {
      return el;
    }) : [], second.map(function (el) {
      return el;
    }), parentNode);
  } else if ((0, _checkers.isObject)(second)) {
    checkKeysEquality(first, second, parentNode);
  } else {
    return first === second;
  }

  return parentNode.childNode;
}

function checkKeysEquality(first, second, parentNode) {
  for (var key in second) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(first[key])) {
        parentNode.childNode[key] = { add: true };
      }
      continue;
    }

    if (first[key] !== second[key]) {
      parentNode.childNode[key] = false;
    }
  }

  for (var _key in first) {

    if ((0, _checkers.isArray)(first)) {
      if ((0, _checkers.isUndefined)(second[_key])) {
        parentNode.childNode[_key] = { remove: true };
      }
      continue;
    }

    if (first[_key] !== second[_key]) {
      parentNode.childNode[_key] = false;
    }
  }

  return parentNode;
}

/***/ }),

/***/ "./src/helpers/object.js":
/*!*******************************!*\
  !*** ./src/helpers/object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitPiece = exports.fullMap = exports.toObject = exports.filter = exports.mapKeys = exports.map = exports.forEach = exports.addConstFields = exports.remove = exports.set = exports.get = undefined;

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

exports.get = get;
exports.set = set;
exports.remove = remove;
exports.addConstFields = addConstFields;
exports.forEach = forEach;
exports.map = map;
exports.mapKeys = mapKeys;
exports.filter = filter;
exports.toObject = toObject;
exports.fullMap = fullMap;
exports.splitPiece = splitPiece;


function get(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length; i++) {

    try {
      value = value[path[i]];
    } catch (e) {
      return value;
    }
  }
  return value;
}

function set(obj, path, value) {
  if (!path.length) {
    if ((0, _checkers.isObject)(value)) {
      return Object.assign(obj, value);
    }
    return obj = value;
  }

  var dest = obj;
  for (var i = 0; i < path.length - 1; i++) {
    if (!dest[path[i]]) {
      dest = dest[path[i]] = {};
    } else {
      dest = dest[path[i]];
    }
  }

  if ((0, _checkers.isObject)(value)) {
    dest[path[i]] = dest[path[i]] || {};
    Object.assign(dest[path[i]], value);
  } else {
    dest[path[i]] = value;
  }

  return obj;
}

function remove(obj, path) {
  var value = obj;
  for (var i = 0; i < path.length - 1; i++) {
    value = value[path[i]];
  }

  delete value[path[i]];
}

function addConstFields(obj, fields) {
  var _loop = function _loop(field) {
    Object.defineProperty(obj, field, {
      get: function get() {
        return fields[field];
      },
      set: function set() {
        throw new Error("Trying to redefine const field '" + field + "'");
      }
    });
  };

  for (var field in fields) {
    _loop(field);
  }
}

function forEach(obj, cb) {
  for (var key in obj) {
    var prop = obj[key];
    cb(prop, key, obj);
  }
}

function map(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    newObj[key] = cb(prop, key, obj);
  }
  return newObj;
}

function mapKeys(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var newKey = cb(key, prop, obj);
    newObj[newKey] = prop;
  }
  return newObj;
}

function splitPiece(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
      delete obj[key];
    }
  }
  return newObj;
}

function fullMap(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    var res = cb(key, prop, obj);
    newObj[res[0] || res.key || res.k] = res[1] || res['value'] || res['v'];
  }
  return newObj;
}

function filter(obj, cb) {
  var newObj = {};
  for (var key in obj) {
    var prop = obj[key];
    if (cb(prop, key, obj)) {
      newObj[key] = prop;
    }
  }
  return newObj;
}

function toObject(arr, val) {
  var newObj = {};
  arr.forEach(function (v) {
    newObj[v] = (0, _checkers.isFunction)(val) ? val(v) : val;
  });
  return newObj;
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Definition = __webpack_require__(/*! ./Definition */ "./src/Definition.js");

var _Production = __webpack_require__(/*! ./Production */ "./src/Production.js");

module.exports = {
  define: _Definition.define,
  apply: _Production.apply
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9EZWZpbml0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9Qcm9kdWN0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZ2xvYmFscy9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvcmVnZXhwLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvaGVscGVycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvaGVscGVycy9jb3B5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvZG9tLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvZXF1YWxpdHkuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvaGVscGVycy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJWQUxVRV9UWVBFUyIsIlJFU0VSVkVEX0hPT0tTX05BTUVTIiwiREVGQVVMVF9IT09LUyIsIlJFU0VSVkVEX0JJTkRJTkdfTkFNRVMiLCJjb25jYXQiLCJMSUJfQVRUUiIsIlNFTEYiLCJkZWZpbmUiLCJnZXRDb21wb25lbnRPcHRzIiwic2hvcnRlbkJpbmRpbmdJZCIsImlzQ29tcG9uZW50IiwiQ09NUE9ORU5UX0NPVU5URVIiLCJDT01QT05FTlRTIiwibmFtZSIsIm1hcmt1cCIsImJpbmRpbmdzIiwic3R5bGVzIiwiYXJncyIsIkNvbXBvbmVudFJlZGVmaW5lRXJyb3IiLCJjb21wb25lbnRIVE1MTWFya3VwIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcG9uZW50Iiwic3RhdGUiLCJzdGF0ZUlkIiwic3RhdGVQYXRoIiwic3RhdGVOYW1lcyIsImV2YWx1YXRlIiwibGlua3MiLCJvdXRlck5hbWVzIiwiX2xpbmtzIiwiZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIiwibm9ybWFsaXplZE9wdGlvbnMiLCJub3JtYWxpemVVc2VyT3B0aW9ucyIsInByZXBhcmVCaW5kaW5ncyIsInByZXBhcmVTdHlsZXMiLCJIVE1MTm9kZSIsImJpbmRpbmdPcHRzIiwiYW5hbHl6ZUJpbmRpbmciLCJiaW5kaW5nIiwiY3JlYXRlQmluZGluZyIsInNldENvbXBvbmVudCIsIlBSRUZJWCIsImlkIiwiaXNMaXN0IiwiaXRlbU5vZGUiLCJjaGlsZHJlbiIsIm1vZGlmeVRvTGlzdEJpbmRpbmciLCJsaXN0SXRlbSIsImNvbXBvbmVudEJpbmRpbmciLCJzdWJDb21wb25lbnRPcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwic3RhdGVOYW1lIiwiU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IiLCJjbG9uZU5vZGUiLCJyZXZMaW5rcyIsImN1cnJlbnRTdGF0ZUlkIiwicGFyZW50Q29tcG9uZW50IiwiY29tcG9uZW50V3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIkJJTkRJTkdfSUQiLCJTVEFURV9ERUxJTUlURVIiLCJhcHBlbmRDaGlsZCIsInN1YkNvbXBvbmVudHMiLCJiaW5kaW5nTmFtZSIsIm9sZEJpbmRpbmdJZCIsIm5ld0JpbmRpbmdJZCIsInNob3J0SWQiLCJiaW5kaW5nTm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmUiLCJzbGljZSIsImhvb2tzIiwicHJlcGFyZVJlYWN0aXZlRnVuY3MiLCJwdXNoIiwiSVRFTSIsInNldHVwQ29tcG9uZW50c0xpbmtzIiwidGVtcGxhdGUiLCJmb3JFYWNoIiwic3ViQ29tcG9uZW50IiwiY29tcG9uZW50RGF0YSIsInR5cGUiLCJyZWFjdGl2ZUZ1bmMiLCJwcmVwYXJlUmVhY3RpdmVGdW5jIiwiZGVwZW5kZW5jaWVzTmFtZXMiLCJnZXREZXBlbmRlbmNpZXNOYW1lcyIsImRlcGVuZGVuY3lOYW1lIiwiZGVwZW5kYW50cyIsInZhbHVlcyIsImNvbXBvbmVudEludGVyZmFjZSIsImNvbXB1dGUiLCJmdW5jIiwiZnVuY1BhcmFtcyIsImdldFBhcmFtTmFtZXMiLCJ2YWx1ZXNPYmpSZWdFeHAiLCJSZWdFeHAiLCJmdW5jU3RyIiwidG9TdHJpbmciLCJleGVjIiwiZnVuY1N0cldpdGhvdXRDb21tZW50cyIsInJlcGxhY2UiLCJSRSIsIlNUUklQX0NPTU1FTlRTIiwicGFyYW1zU3RyIiwiaW5kZXhPZiIsIm1hdGNoIiwiQVJHVU1FTlRfTkFNRVMiLCJ2YWx1ZXNPYmoiLCJjYWxsIiwiayIsImxpbmsiLCJvcHRpb25zT2JqIiwicGFyZW50T2JqIiwicGFyZW50S2V5IiwiY2xhc3MiLCJsZW5ndGgiLCJvcHRpb24iLCJ2YWx1ZSIsImV2ZW50cyIsImtleSIsImVsIiwiZ2V0QXR0cmlidXRlIiwiVEVNUExBVEVfQklORElORyIsInJlbW92ZUF0dHJpYnV0ZSIsInRyaW0iLCJURU1QTEFURV9MSVNUX0JJTkRJTkciLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJvYmoiLCJnZXRDb21wb25lbnRCeU5hbWUiLCJBcnJheSIsInByb3RvdHlwZSIsImF0dHJpYnV0ZXMiLCJhdHRyIiwiU1RBVEVfTkFNRSIsImlubmVyTGluayIsImNvbXBvbmVudE9wdHMiLCJpc0xpc3RJdGVtIiwiZWxPcHRzIiwiaW5pdFZhbHVlIiwiaW5uZXJIVE1MIiwibGlzdGVuZXJzIiwiaXRlbU1hcmt1cCIsInNwbGl0IiwibWFwIiwiam9pbiIsInN0eWxlQXJnIiwic2VsZWN0b3IiLCJjbGFzc05hbWUiLCJpc0JpbmRpbmciLCJwcmVmaXgiLCJzZXR1cEV2ZW50SGFuZGxlcnMiLCJlbGVtZW50IiwiZXZlbnRIYW5kbGVycyIsImdhdGhlckFsbEV2ZW50SGFuZGxlcnMiLCJldmVudE5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QiLCJnYXRoZXJlZEhhbmRsZXJzIiwiZ2F0aGVyRXZlbnRIYW5kbGVycyIsImRlY29yYXRlRXZlbnQiLCJjdXJIVE1MTm9kZSIsInRhcmdldCIsInBhcmVudE5vZGUiLCJiaW5kaW5nSWQiLCJldmVudEhhbmRsZXIiLCJpbmRleGxlc3NTdGF0ZVBhdGgiLCJwb3AiLCJzdGF0ZVBhdGhUb0l0ZW0iLCJnZXRTdGF0ZVBhdGhUb0l0ZW0iLCJhY2Nlc3NvclRvRGF0YSIsInByb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJpbmQiLCJlbGVtZW50TmFtZSIsImdldFRvSXRlbU5vZGUiLCJpZHgiLCJJVEVNX0lOREVYIiwidW5zaGlmdCIsImN1ckVsIiwiYXBwbHkiLCJyb290RWxlbWVudFNlbGVjdG9yIiwicm9vdEVsZW1lbnQiLCJIVE1MTm9kZXMiLCJzZXR1cEVsZW1lbnQiLCJjcmVhdGVBY2Nlc3NvciIsImdldE9ubHlWYWx1ZXMiLCJnZXRDb21wb25lbnQiLCJzZXRTdGF0ZSIsInByZXBhcmVDaGFuZ2VPYmplY3QiLCJFTEVNRU5UUyIsIlNUQVRFIiwiRUxFTUVOVF9DT1VOVEVSIiwicGF0aCIsImdldFN0YXRlIiwiQ09NUE9ORU5UX1RZUEUiLCJCQVNFIiwiYWNjZXNzb3IiLCJzdGFydFRyYW5zYWN0aW9uIiwiYXBwbHlDaGFuZ2VzIiwidXAiLCJsZXZlbCIsIm1vdmVVcFN0YXRlUGF0aCIsImRvd24iLCJhZGRpdGlvbmFsUGF0aCIsInNldCIsImNoYW5nZU9iaiIsImdldCIsImdldFZhbHVlcyIsIm1vZGlmeVRvQXJyYXlBY2Nlc3NvciIsInYiLCJmb3JjZWQiLCJrZXlzIiwiZm9yY2UiLCJpIiwiYmluZGluZ1ZhbHVlcyIsImdldFZhbHVlc1RyZWUiLCJ2YWx1ZXNUcmVlIiwidmFscyIsIml0ZW1WYWx1ZXMiLCJjb21wb25lbnRWYWx1ZXMiLCJsYXN0SWR4IiwibnVtIiwiZWxzIiwic3RhcnQiLCJzaGlmdCIsIm1hcExpc3QiLCJjYiIsIml0ZXJhdGVMaXN0VmFsdWVzIiwiZmlsdGVyIiwiZmlsdGVyTGlzdCIsIm5ld0xpc3QiLCJzZXRWYWx1ZXMiLCJjcmVhdGVTdGF0ZU5vZGVzIiwibW9kaWZ5TGlzdCIsInNlbmRUb1JlbmRlclF1ZXVlIiwiQ0hBTkdFUyIsImNoYW5nZXMiLCJjb2xsZWN0aW5nIiwiUFJPTUlTRVNfUkVTT0xWRVMiLCJMSUZFX0NZQ0xFX0hBTkRMRVJTIiwibGlzdCIsInJ1bkxpZmVDeWNsZUhvb2tzIiwibGlmZUN5Y2xlSGFuZGxlcnMiLCJoIiwiZmluYWxpemVUcmFuc2FjdGlvbiIsInJlc29sdmVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGFuZ2UiLCJpc0NvbGxlY3RpbmdDaGFuZ2VzIiwiYWRkTGlmZUN5Y2xlSG9vayIsImhvb2tUeXBlIiwiaG9vayIsInZhbHVlc05vZGUiLCJjcmVhdGVTdGF0ZU5vZGUiLCJ2YWx1ZXNOb2RlcyIsInZhbHVlTm9kZSIsInJlZHVjZSIsImEiLCJjaGFuZ2VWYWx1ZXMiLCJjYWxsZWREZXBlbmRlbmNlcyIsIkZVTExfQ0hBTkdFIiwiZW5kIiwic2V0VmFsdWUiLCJyZXMiLCJCaW5kaW5nTm90RXhpc3RzRXJyb3IiLCJzZXRWYWx1ZUZvckxpc3QiLCJzZXRWYWx1ZUZvckNvbXBvbmVudCIsImVxdWFsIiwiaHRtbCIsImRlcGVuZGFudCIsImRlcGVuZGFudEtleSIsIm5ld1ZhbHVlIiwiYXJyIiwiaW5kZXhFcXVhbGl0eSIsInJlbW92ZUxpc3RJdGVtIiwiYWN0aW9uIiwibGlzdFBhdGgiLCJpdGVtTmFtZSIsImFkZFRvTGlzdCIsInJlbW92ZUZyb21MaXN0Iiwic3BsaWNlIiwibGlzdEJpbmRpbmciLCJyZW1vdmVkRE9NTm9kZSIsInJlbW92ZWROb2RlIiwiY3JlYXRlQW5kQXBwZW5kU3R5bGVzIiwicmVuZGVyQ2hhbmdlcyIsInJlbmRlciIsImFwcGx5TWFya3VwIiwiYXBwbHlDbGFzc2VzIiwic3R5bGUiLCJhcHBseVN0eWxlcyIsImF0dHJzIiwiYXBwbHlBdHRyaWJ1dGVzIiwiY29tcG9uZW50Q2hhbmdlcyIsImVsZW1lbnRJZCIsImNvbXBvbmVudElkIiwiY29tcG9uZW50QWNjZXNzb3IiLCJyZW5kZXJMaXN0IiwicmVuZGVyQ29tcG9uZW50IiwidXBkYXRlQ29tcG9uZW50IiwiZHJhd0NvbXBvbmVudCIsIml0ZW1XcmFwcGVyIiwiQ09NUE9ORU5UIiwicmVuZGVyRnVuYyIsInJlbmRlclR5cGUiLCJjaGlsZFN0YXRlUGF0aCIsImNoaWxkTWFya3VwIiwiY29tcG9uZW50TWFya3VwIiwiY2hhbmdlVHlwZSIsInN0YXRlUGF0aFRvQmluZGluZyIsImxpc3RDb21wb25lbnQiLCJpdGVtc1ZhbHVlcyIsInVwZGF0ZUxpc3QiLCJsaXN0RnJhZ21lbnQiLCJidWlsZExpc3QiLCJsaXN0Tm9kZSIsIm5leHROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiTElTVCIsIkNPTVBPTkVOVF9MSVNUIiwiaW5zZXJ0QmVmb3JlIiwicmFuZ2UiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaXRlbVZhbHVlIiwiaXRlbUluZGV4IiwibmV3SXRlbUluZGV4IiwibGlzdEl0ZW1NYXJrdXAiLCJpdGVtc0NoYW5nZXMiLCJyZW1vdmVkQ291bnQiLCJpdGVtQWNjZXNzb3IiLCJmaXhJbmRleGVzIiwiZGlmZiIsIml0ZW1zTm9kZXMiLCJwcmV2SWR4IiwibmV3SWR4IiwiY2xhc3NlcyIsIm5vcm1hbGl6ZVN0eWxlcyIsInN0eWxlT2JqIiwic3R5bGVTdHIiLCJzdHlsZUVsIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiY29tcG9uZW50TmFtZSIsIm1lc3NhZ2UiLCJFcnJvciIsIkxJQl9OQU1FIiwiQVRUUl9QUkVGSVgiLCJTVEFURV9QQVRIIiwiVEVNUExBVEVfUExBQ0VNRU5UIiwiU0NPUEVfUFJFRklYIiwiSVRFTV9TVUZGSVgiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNPYmplY3RJbkJyYWNrZXRzIiwiaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIiwiaXNTdHJpbmciLCJpc0hUTUxTdHJpbmciLCJpc051bWJlciIsImlzRE9NRWxlbWVudCIsImlzVW5kZWZpbmVkIiwiaXNFbXB0eSIsImlzTGluayIsImdldE9iamVjdFR5cGUiLCJzbGFzaElkeCIsInNvbWUiLCJoYXMiLCJnZXRGYWxzZVBhdGhzIiwidG9EYXNoQ2FzZSIsInRvQ2FtZWxDYXNlIiwiZ2V0U2hvcnROYW1lIiwiZ2V0UmVhbE5hbWUiLCJOQU1FUyIsInJlYWwiLCJzaG9ydCIsInNob3J0TmFtZSIsIm9ubHlGYWxzZVBhdGhzIiwiZ2V0RmFsc2VQYXRoIiwic3RyIiwidG9VcHBlckNhc2UiLCJjb3B5IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvcHlBcnJheSIsInJlcGxhY2VOb2RlcyIsImNsb25lSFRNTE1hcmt1cCIsImNvbGxlY3RIVE1MTm9kZXMiLCJ3YWxrTm9kZXMiLCJyZW1vdmVOb2RlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInJld3JpdGVUb05vZGUiLCJlbXB0eU5vZGUiLCJvcmlnaW5hbCIsInJlcGxhY2VtZW50IiwicmVwbGFjZUNoaWxkIiwibmV4dEVsIiwibWFya3VwU3RyIiwiY29udmVydFN0cmluZ1RvSFRNTCIsIm1hcmt1cFN0cmluZyIsInBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwibm9kZSIsInJvb3QiLCJpc1dhbnRlZCIsIm5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0Iiwid3JpdGVUb05vZGUiLCJ0ZXh0Tm9kZSIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiYXJlRXF1YWwiLCJmaXJzdCIsInNlY29uZCIsImNoaWxkTm9kZSIsImNoZWNrS2V5c0VxdWFsaXR5IiwiYWRkQ29uc3RGaWVsZHMiLCJtYXBLZXlzIiwidG9PYmplY3QiLCJmdWxsTWFwIiwic3BsaXRQaWVjZSIsImRlc3QiLCJmaWVsZHMiLCJmaWVsZCIsImRlZmluZVByb3BlcnR5IiwicHJvcCIsIm5ld09iaiIsIm5ld0tleSIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FBRUE7O0FBS0E7O0FBRUE7Ozs7QUFFQTs7QUFPQTs7QUFLQTs7QUFJQTs7QUFJQTs7OztBQUNBOzs7Ozs7OztB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Ozs7Ozs7OztBQ2hKRDs7QUFDQTs7QUFFQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUNmbGIsNEJBRGU7QUFFZmlMO0FBRmUsQ0FBakIsQyIsImZpbGUiOiJjb3VsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgUkUgZnJvbSAnLi9nbG9iYWxzL3JlZ2V4cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG59IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbn0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCBDb21wb25lbnRSZWRlZmluZUVycm9yIGZyb20gJy4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3InO1xyXG5pbXBvcnQgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZnJvbSAnLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3InO1xyXG5cclxuXHJcbmNvbnN0IFZBTFVFX1RZUEVTID0gWydzdHlsZScsICdjbGFzcycsICd2YWx1ZScsICdhdHRycycsICdodG1sJ107XHJcbmNvbnN0IFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XHJcbmNvbnN0IERFRkFVTFRfSE9PS1MgPSB0b09iamVjdChSRVNFUlZFRF9IT09LU19OQU1FUywgKCkgPT4gKCkgPT4ge30pO1xyXG5jb25zdCBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgTElCX0FUVFIuU0VMRl0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZWZpbmUsXHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBzaG9ydGVuQmluZGluZ0lkLFxyXG4gIGlzQ29tcG9uZW50LFxyXG4gIFZBTFVFX1RZUEVTLFxyXG4gIFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsXHJcbn07XHJcblxyXG5sZXQgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5mdW5jdGlvbiBkZWZpbmUgKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xyXG4gIGNvbnN0IGFyZ3MgPSBpc09iamVjdChuYW1lKSA/IG5hbWUgOiB7IG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcyB9O1xyXG5cclxuICBuYW1lID0gdG9DYW1lbENhc2UoYXJncy5uYW1lKTtcclxuXHJcbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50SFRNTE1hcmt1cCA9IGNsb25lSFRNTE1hcmt1cChhcmdzLm1hcmt1cCk7XHJcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cclxuICBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbiAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IFtuYW1lXSxcclxuICAgIHN0YXRlTmFtZXM6IHt9LFxyXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcbiAgfTtcclxuXHJcbiAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplVXNlck9wdGlvbnMoYXJncy5iaW5kaW5ncywgeyBzdGF0ZToge30gfSk7XHJcbiAgY29weShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuXHJcbiAgcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyggcHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSApO1xyXG5cclxuICByZXR1cm4gQ09NUE9ORU5UU1tuYW1lXSA9IGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcclxuICB3YWxrTm9kZXMoY29tcG9uZW50SFRNTE1hcmt1cCwgKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBiaW5kaW5nT3B0cyA9IGFuYWx5emVCaW5kaW5nKEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNDb21wb25lbnQpIHtcclxuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcclxuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XHJcbiAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQsIGNvbXBvbmVudC5uYW1lICsgJy0nICsgYmluZGluZy5uYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xyXG5cclxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xyXG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoaXRlbU5vZGUsIGJpbmRpbmcubGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudCAoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IHN0YXRlTmFtZXMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lcywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQuc3RhdGVOYW1lcyk7XHJcbiAgbGV0IHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcclxuXHJcbiAgaWYgKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKSB7XHJcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWU7XHJcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBjb21wb25lbnRCaW5kaW5nLCB7XHJcbiAgICBpZDogc3RhdGVJZCxcclxuICAgIHN0YXRlSWQsXHJcbiAgICBuYW1lOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVOYW1lOiBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxyXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBzdGF0ZU5hbWVzLFxyXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcclxuICAgIG91dGVyTmFtZXM6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMucmV2TGlua3MpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLlNFTEYgKSk7XHJcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcclxuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZU5hbWVzID0gcGFyZW50Q29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkNvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcclxuICAgIGNvbnN0IG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XHJcbiAgICBjb25zdCBzaG9ydElkID0gc2hvcnRlbkJpbmRpbmdJZChuZXdCaW5kaW5nSWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcclxuICAgICAgaG9va3M6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSE9PS1MsIGJpbmRpbmcuaG9va3MpLFxyXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxyXG4gICAgICBzaG9ydElkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICAgICAgcHJlcGFyZUJpbmRpbmdzIChiaW5kaW5nLmxpc3RJdGVtLCBuZXdCaW5kaW5nSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5JVEVNICsgYmluZGluZy5saXN0SXRlbS5uYW1lLCBiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpO1xyXG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBzdWJDb21wb25lbnRzLmZvckVhY2goKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgcHJlcGFyZUJpbmRpbmdzIChzdWJDb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgc3ViQ29tcG9uZW50LnN0YXRlSWQsIGNvbXBvbmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzIChiaW5kaW5nLCBjb21wb25lbnREYXRhKSB7XHJcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVhY3RpdmVGdW5jID0gYmluZGluZ1t0eXBlXTtcclxuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMgKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSkge1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcclxuXHJcbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUpID0+IHtcclxuICAgIGlmIChpc0VtcHR5KGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xyXG4gICAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSA9IGNyZWF0ZUJpbmRpbmcoZGVwZW5kZW5jeU5hbWUsIGNvbXBvbmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdLmRlcGVuZGFudHNbIGJpbmRpbmcubmFtZSArICc6JyArIHR5cGUgXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpID0+IGNvbXB1dGUgKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XHJcbiAgY29uc3QgdmFsdWVzT2JqUmVnRXhwID0gIG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcclxuICBjb25zdCBmdW5jU3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gIGxldCBkZXBlbmRlbmN5TmFtZTtcclxuICB3aGlsZSAoKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrKSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKG5hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKChlbGVtZW50TmFtZSA9IGdldFJlYWxOYW1lKCBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCkgKSkpIHtcclxuXHJcbiAgICBpZiAoaGFzKGVsZW1lbnROYW1lLCBMSUJfQVRUUi5JVEVNKSkge1xyXG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKExJQl9BVFRSLklURU0ubGVuZ3RoKTtcclxuICAgICAgZWwgPSBnZXRUb0l0ZW1Ob2RlKGVsKTtcclxuICAgICAgY29uc3QgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVQYXRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlIChlbCkge1xyXG4gIGxldCBjdXJFbCA9IGVsO1xyXG5cclxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpKSB7XHJcbiAgICAgIHJldHVybiBjdXJFbDtcclxuICAgIH1cclxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIGlzQ29tcG9uZW50LFxyXG59IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZXR1cEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5leHBvcnQgeyBhcHBseSB9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChyb290RWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50U2VsZWN0b3IpO1xyXG4gIGNvbnN0IEhUTUxOb2RlcyA9IGNvbGxlY3RIVE1MTm9kZXMocm9vdEVsZW1lbnQsIGlzQ29tcG9uZW50KTtcclxuXHJcbiAgSFRNTE5vZGVzLmZvckVhY2goKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRPcHRzID0gZ2V0Q29tcG9uZW50T3B0cyhIVE1MTm9kZSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG5cclxuICAgIHJlcGxhY2VOb2RlcyhIVE1MTm9kZSwgZWxlbWVudC5lbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG4gIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBzZXQsIGZvckVhY2gsIG1hcCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSRVNFUlZFRF9CSU5ESU5HX05BTUVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBzZXRWYWx1ZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc1N0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIHNldFN0YXRlLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbn07XHJcblxyXG5jb25zdCBFTEVNRU5UUyA9IHt9O1xyXG5jb25zdCBTVEFURSA9IHt9O1xyXG5sZXQgRUxFTUVOVF9DT1VOVEVSID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRlIChwYXRoLCB2YWx1ZSkge1xyXG4gIHNldChTVEFURSwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSAocGF0aCkge1xyXG4gIHJldHVybiBnZXQoU1RBVEUsIHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgaWQgPSBFTEVNRU5UX0NPVU5URVIrKztcclxuICBjb25zdCBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xyXG4gICAgaWQsXHJcbiAgICBzdGF0ZTogeyBbbmFtZV06IGNvbXBvbmVudE9wdHMuY29tcG9uZW50IH0sXHJcbiAgfTtcclxuXHJcbiAgU1RBVEVbaWRdID0ge307XHJcblxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMoW2lkLCBuYW1lXSk7XHJcblxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlKFtpZF0sIHsgW25hbWVdOiBmYWxzZSB9KTtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5CQVNFKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yIChwYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhbHVlcyxcclxuICAgIHBhdGgsXHJcbiAgICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gICAgYXBwbHlDaGFuZ2VzLFxyXG4gICAgdXA6IChsZXZlbCkgPT4gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBwYXRoLnNsaWNlKCkpLFxyXG4gICAgZG93bjogKGFkZGl0aW9uYWxQYXRoKSA9PiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpLFxyXG4gICAgc2V0OiAoY2hhbmdlT2JqKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCksXHJcbiAgICBnZXQ6IChrZXkpID0+IGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBwYXRoKSxcclxuICAgIG1hcmt1cDogKGtleSkgPT4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwsXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0IChjaGFuZ2VPYmopIHtcclxuICByZXR1cm4gbWFwKGNoYW5nZU9iaiwgKHYpID0+IHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGlzT2JqZWN0KHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgZm9yY2U6IGZvcmNlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCAocGF0aCkge1xyXG4gIGxldCBjb21wb25lbnQgPSBFTEVNRU5UU1sgcGF0aFswXSBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVsgcGF0aFtpXSBdO1xyXG4gICAgXHJcbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSAocGF0aC5sZW5ndGggLTEpKSB7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcclxuICAgICAgaSs9MjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMgKG9iaikge1xyXG4gIHJldHVybiBtYXAob2JqLCAoYmluZGluZ1ZhbHVlcykgPT4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlcyAoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2tleV07XHJcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlICh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xyXG4gIGZvckVhY2godmFsdWVzLCAodmFscywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChoYXMoUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcclxuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xyXG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRWYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IHt9O1xyXG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzVHJlZVsgY29tcG9uZW50Ll9saW5rc1tiaW5kaW5nTmFtZV0gfHwgYmluZGluZ05hbWUgXSA9IHZhbHMudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGggKGxldmVsLCBzdGF0ZVBhdGgpIHtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBQUk9NSVNFU19SRVNPTFZFUyA9IFtdO1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcmV0dXJuIHJ1bkxpZmVDeWNsZUhvb2tzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkxpZmVDeWNsZUhvb2tzICgpIHtcclxuICBjb25zdCBsaWZlQ3ljbGVIYW5kbGVycyA9IExJRkVfQ1lDTEVfSEFORExFUlMubGlzdDtcclxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QgPSBbXTtcclxuICBsaWZlQ3ljbGVIYW5kbGVycy5mb3JFYWNoKChoKSA9PiBoKCkpO1xyXG5cclxuICBpZiAoIWlzRW1wdHkoQ0hBTkdFUy5jaGFuZ2VzKSkge1xyXG4gICAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmFsaXplVHJhbnNhY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxpemVUcmFuc2FjdGlvbiAoKSB7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XHJcbiAgbGV0IHJlc29sdmVQcm9taXNlO1xyXG5cclxuICB3aGlsZSAoKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpKSB7XHJcbiAgICByZXNvbHZlUHJvbWlzZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlIChwYXRoLCBjaGFuZ2UpIHtcclxuICBzZXQoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzICgpIHtcclxuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rIChob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XHJcbiAgY29uc3QgaG9vayA9IGJpbmRpbmcuaG9va3NbaG9va1R5cGVdO1xyXG4gIFxyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVOb2RlID0gYmluZGluZy5pc0xpc3QgPyBbXSA6IHt9O1xyXG5cclxuICAgIHJldHVybiBWQUxVRV9UWVBFUy5yZWR1Y2UoKGEsIGtleSkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJydcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sIHZhbHVlTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCB7IFtMSUJfQVRUUi5TRUxGXTogdG9PYmplY3QoVkFMVUVfVFlQRVMsIHt9KSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVzIChjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuXHJcbiAgaWYgKCFhY2Nlc3Nvci52YWx1ZXMpIHtcclxuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gK3N0YXRlUGF0aC5zbGljZSgtMilbMF07XHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyAxIH0gfSB9KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VWYWx1ZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpKTtcclxuXHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IFBST01JU0VTX1JFU09MVkVTLnB1c2gocmVzKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlIChiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgbGV0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xyXG4gICAgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgfVxyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIHRocm93IG5ldyBCaW5kaW5nTm90RXhpc3RzRXJyb3IoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3QoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVxdWFsID0gYXJlRXF1YWwodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XHJcblxyXG4gIGlmICghZXF1YWwgfHwgIWlzRW1wdHkoZXF1YWwpIHx8IGNoYW5nZS5mb3JjZSkge1xyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlICE9PSAndmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgeyBbY2hhbmdlLnR5cGVdOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcclxuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbXBvbmVudC5saW5rc1tiaW5kaW5nTmFtZV07XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goYmluZGluZy5kZXBlbmRhbnRzLCAoZGVwZW5kYW50LCBkZXBlbmRhbnRLZXkpID0+IHtcclxuICAgICAgaWYgKGhhcyhjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcclxuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QgKGJpbmRpbmcsIGNoYW5nZSwgYXJyLCBhY2Nlc3Nvcikge1xyXG4gIE9iamVjdFxyXG4gICAgLmtleXMoY2hhbmdlLnZhbHVlKVxyXG4gICAgLmZvckVhY2goKGkpID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpKTtcclxuXHJcbiAgY29uc3QgaW5kZXhFcXVhbGl0eSA9IGFyZUVxdWFsKGFyciwgY2hhbmdlLnZhbHVlKTtcclxuICBmb3JFYWNoKGluZGV4RXF1YWxpdHksIChjaGFuZ2VPYmosIGlkeCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZU9iai5yZW1vdmUpIHtcclxuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpZHgsIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSksIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogY2hhbmdlT2JqIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckNvbXBvbmVudCAoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCkge1xyXG4gIHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWUpLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmcubmFtZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChhY3Rpb24sIGFyZ3MsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgYXJyID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGxpc3RQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IHN0YXJ0ID0gYXJncy5zdGFydDtcclxuICBsZXQgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlICdhZGQnOlxyXG4gICAgICBjaGFuZ2VPYmogPSBhZGRUb0xpc3QoYXJyLCBzdGFydCwgYXJncy5lbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgKGFyZ3MubnVtIHx8IDEpO1xyXG4gICAgICBjaGFuZ2VPYmogPSByZW1vdmVGcm9tTGlzdChhcnIsIHN0YXJ0LCBlbmQsIGFjY2Vzc29yLmNvbXBvbmVudCwgYWNjZXNzb3IpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlT2JqLCAoY2hhbmdlLCBpZHgpID0+IHNlbmRUb1JlbmRlclF1ZXVlKGxpc3RQYXRoLmNvbmNhdChpZHgsIGl0ZW1OYW1lLCBMSUJfQVRUUi5GVUxMX0NIQU5HRSksIGNoYW5nZU9ialtpZHhdW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkpO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9MaXN0IChhcnIsIHN0YXJ0LCBlbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSkge1xyXG4gIGVscyA9IGlzQXJyYXkoZWxzKSA/IGVscyA6IFtlbHNdO1xyXG5cclxuICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGFyci5zcGxpY2UoaSArIHN0YXJ0LCAwLCBudWxsKTtcclxuICAgIHNldFZhbHVlcyhwcmVwYXJlQ2hhbmdlT2JqZWN0KGVsKSwgbGlzdFBhdGguY29uY2F0KGkgKyBzdGFydCwgaXRlbU5hbWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgW3N0YXJ0XTogeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIGVscy5sZW5ndGggfSB9IH0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QgKGFyciwgc3RhcnQsIGVuZCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICBjb25zdCByZW1vdmVkRE9NTm9kZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaSwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIGNoYW5nZU9ialtpXSA9IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyByZW1vdmU6IHJlbW92ZWRET01Ob2RlIH0gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoYW5nZU9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTGlzdEl0ZW0gKGFyciwgaWR4LCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCByZW1vdmVkTm9kZSA9IGFyci5zcGxpY2UoaWR4LCAxKVswXVtsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lXTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdyZW1vdmUnLCBsaXN0QmluZGluZy5saXN0SXRlbS5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgcmVtb3ZlZE5vZGUsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIHJldHVybiByZW1vdmVkTm9kZVtMSUJfQVRUUi5TRUxGXS5lbDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgeyB0b0Rhc2hDYXNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcbmltcG9ydCB7IGZvckVhY2gsIHNwbGl0UGllY2UgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NvciB9IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG4gIHJlbmRlckNoYW5nZXNcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9IHtcclxuICBodG1sOiBhcHBseU1hcmt1cCxcclxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxyXG4gIHN0eWxlOiBhcHBseVN0eWxlcyxcclxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzIChjaGFuZ2VzKSB7XHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdXHJcbiAgICBjb25zdCBjb21wb25lbnRBY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XHJcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TWFya3VwIChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5tYXJrdXApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xyXG5cclxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBjb21wb25lbnQubWFya3VwLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXdyaXRlVG9Ob2RlKGNvbXBvbmVudC5tYXJrdXAsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRyYXdDb21wb25lbnQodmFsdWUsIHN0YXRlUGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb21wb25lbnQgKHZhbHVlcywgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpdGVtTWFya3VwID0gY29tcG9uZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwgPSBpdGVtTWFya3VwO1xyXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1NYXJrdXApO1xyXG5cclxuICBpdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgKGNvbXBvbmVudC5pc0xpc3RJdGVtKSA/IExJQl9BVFRSLklURU0gOiBMSUJfQVRUUi5DT01QT05FTlQpO1xyXG5cclxuICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgIGlmIChjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pIHtcclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogaXRlbU1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoIWJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGl0ZW1XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcbiAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkU3RhdGVQYXRoID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkTWFya3VwID0gZHJhd0NvbXBvbmVudCh2YWx1ZXNbYmluZGluZ05hbWVdLCBjaGlsZFN0YXRlUGF0aCk7XHJcbiAgICAgIHJlcGxhY2VOb2RlcyhiaW5kaW5nTm9kZSwgY2hpbGRNYXJrdXApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5lbCA9IGJpbmRpbmdOb2RlO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZW5kZXJMaXN0KGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgICBpZiAocmVuZGVyVHlwZSA9PT0gJ2h0bWwnICYmIGJpbmRpbmcuaHRtbCA9PT0gbnVsbCB8fCBiaW5kaW5nLm1hcmt1cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogYmluZGluZ05vZGUgfSwgdmFsdWVzW2JpbmRpbmdOYW1lXVtyZW5kZXJUeXBlXSwgc3RhdGVQYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaXRlbVdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudE1hcmt1cCA9IHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbDtcclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG5cclxuICAgIGlmIChiaW5kaW5nTmFtZSA9PT0gTElCX0FUVFIuU0VMRikge1xyXG5cclxuICAgICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGNvbXBvbmVudE1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bY2hhbmdlVHlwZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvQmluZGluZyA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50IHx8IGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIGFwcGx5TWFya3VwKGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aFRvQmluZGluZywgY2hhbmdlc1tiaW5kaW5nTmFtZV0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZ05hbWVdLmVsXHJcblxyXG4gICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZVR5cGVdO1xyXG4gICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGVsIH0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoKTtcclxuXHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBwYXJlbnROb2RlID0gbGlzdE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zdCBuZXh0Tm9kZSA9IGxpc3ROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICByZW1vdmVOb2RlKGxpc3ROb2RlKTtcclxuXHJcbiAgY29uc3QgaXNDb21wb25lbnQgPSBsaXN0Tm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUpO1xyXG4gIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuTElTVCk7XHJcbiAgaWYgKGlzQ29tcG9uZW50KSB7XHJcbiAgICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkNPTVBPTkVOVF9MSVNUKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Tm9kZShsaXN0Tm9kZSk7XHJcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuXHJcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlzdE5vZGUsIG5leHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCByYW5nZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gcmFuZ2UgPyByYW5nZS5zdGFydCA6IDA7XHJcbiAgY29uc3QgZW5kID0gcmFuZ2UgPyByYW5nZS5lbmQgOiAoaXRlbXNWYWx1ZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBpdGVtc1ZhbHVlc1xyXG4gICAgLnNsaWNlKHN0YXJ0LCBlbmQpXHJcbiAgICAuZm9yRWFjaCgoaXRlbVZhbHVlLCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbUluZGV4ID0gK3N0YXJ0ICsgaXRlbUluZGV4O1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KFtuZXdJdGVtSW5kZXgsIGxpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0pO1xyXG4gICAgICBjb25zdCBsaXN0SXRlbU1hcmt1cCA9IGRyYXdDb21wb25lbnQoaXRlbVZhbHVlW2xpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgICBsaXN0SXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SXRlbUluZGV4KTtcclxuXHJcbiAgICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbU1hcmt1cCk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3RGcmFnbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdCAobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBpdGVtc0NoYW5nZXMgPSBzcGxpdFBpZWNlKGNoYW5nZXMsICh2LCBrKSA9PiBpc051bWJlcigraykpO1xyXG4gIGxldCByZW1vdmVkQ291bnQgPSAwO1xyXG4gIGxldCBlbmQgPSAwO1xyXG5cclxuICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpIHtcclxuICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogbGlzdE5vZGUgfSwgaXRlbXNWYWx1ZXNbY2hhbmdlVHlwZV0pO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChpdGVtc0NoYW5nZXMsIChjaGFuZ2UsIGkpID0+IHtcclxuICAgIGNoYW5nZSA9IGNoYW5nZVtpdGVtTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KGksIGl0ZW1OYW1lKTtcclxuICAgIGNvbnN0IGl0ZW1BY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdKSB7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudChpdGVtQWNjZXNzb3IuY29tcG9uZW50LCBpdGVtc1ZhbHVlc1tpXVtpdGVtTmFtZV0sIHN0YXRlUGF0aFRvSXRlbSwgY2hhbmdlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZCAmJiBpID49IGVuZCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLnN0YXJ0O1xyXG4gICAgICBlbmQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5lbmQ7XHJcblxyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBzdGFydCwgZW5kIC0gc3RhcnQpO1xyXG4gICAgICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcclxuXHJcbiAgICAgIGlmIChlbmQgPT09IGl0ZW1zVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0Tm9kZS5pbnNlcnRCZWZvcmUobGlzdEZyYWdtZW50LCBsaXN0Tm9kZS5jaGlsZHJlbltzdGFydF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKSB7XHJcbiAgICAgIHJlbW92ZU5vZGUoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpO1xyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBpIC0gcmVtb3ZlZENvdW50KyssIC0xKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZml4SW5kZXhlcyAobGlzdE5vZGUsIHN0YXJ0LCBkaWZmKSB7XHJcbiAgY29uc3QgaXRlbXNOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3ROb2RlLmNoaWxkcmVuLCBzdGFydCk7XHJcblxyXG4gIGl0ZW1zTm9kZXMuZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcclxuICAgIGNvbnN0IHByZXZJZHggPSBpdGVtTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICBjb25zdCBuZXdJZHggPSArcHJldklkeCArIGRpZmY7XHJcblxyXG4gICAgaXRlbU5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0lkeCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyAoYmluZGluZywgYXR0cmlidXRlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oYmluZGluZy5tYXJrdXAsIGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsYXNzZXMgKGJpbmRpbmcsIGNsYXNzZXMpIHtcclxuICBmb3IgKGxldCBjbGFzc05hbWUgaW4gY2xhc3Nlcykge1xyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICBpZiAoY2xhc3Nlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTdHlsZXMgKGJpbmRpbmcsIHN0eWxlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oIGJpbmRpbmcubWFya3VwLnN0eWxlLCBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTdHlsZXMgKHN0eWxlT2JqKSB7XHJcbiAgbGV0IHN0eWxlU3RyID0gJyc7XHJcbiAgZm9yIChsZXQgc2VsZWN0b3IgaW4gc3R5bGVPYmopIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlT2JqW3NlbGVjdG9yXTtcclxuICAgIHN0eWxlU3RyICs9IHNlbGVjdG9yICsgJ3snO1xyXG4gICAgbm9ybWFsaXplU3R5bGVzKHN0eWxlcylcclxuICAgIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2F0dHJdO1xyXG4gICAgICBzdHlsZVN0ciArPSB0b0Rhc2hDYXNlKGF0dHIpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICB9XHJcbiAgICBzdHlsZVN0ciArPSAnfVxcbic7XHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlcyAoc3R5bGVzKSB7XHJcbiAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgIGlmIChpc051bWJlcihzdHlsZXNbYXR0cl0pKSB7XHJcbiAgICAgIHN0eWxlc1thdHRyXSA9IHN0eWxlc1thdHRyXSArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHlsZXM7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGluZ05vdEV4aXN0c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChiaW5kaW5nTmFtZSwgY29tcG9uZW50TmFtZSwgcGF0aCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBiaW5kaW5nIG9uICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IG9uIHBhdGggKFwiICsgcGF0aC5qb2luKCcgLT4gJykgKyBcIikgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZWRlZmluZSBleGlzdGluZyBjb21wb25lbnQ6ICdcIiArIG5hbWUgKyBcIidcIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byBhc3NpZ24gYSBuYW1lICdcIiArIG5hbWUgKyBcIicgdG8gYSBzdGF0ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjaGFpbi5cIjtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgTElCX05BTUUgPSAneCc7XHJcbmNvbnN0IEFUVFJfUFJFRklYID0gJ2RhdGEtJztcclxuY29uc3QgUFJFRklYID0gTElCX05BTUUgKyAnLSc7XHJcbmNvbnN0IFRFTVBMQVRFX0JJTkRJTkcgPSBQUkVGSVggKyAnYic7XHJcbmNvbnN0IFRFTVBMQVRFX0xJU1RfQklORElORyA9IFBSRUZJWCArICdsYic7XHJcbmNvbnN0IEJJTkRJTkdfSUQgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdpZCc7XHJcbmNvbnN0IFNUQVRFX1BBVEggPSBQUkVGSVggKyAnc3BhdGgnO1xyXG5jb25zdCBURU1QTEFURV9QTEFDRU1FTlQgPSBQUkVGSVggKyAnZWwnO1xyXG5jb25zdCBTVEFURV9OQU1FID0gUFJFRklYICsgJ3N0YXRlLW5hbWUnO1xyXG5jb25zdCBTQ09QRV9QUkVGSVggPSAncyc7XHJcbmNvbnN0IElURU1fSU5ERVggPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdkeCc7XHJcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAndHAnO1xyXG5jb25zdCBJVEVNX1NVRkZJWCA9ICdpJztcclxuY29uc3QgU1RBVEVfREVMSU1JVEVSID0gJy0nO1xyXG5jb25zdCBTRUxGID0gJyc7XHJcbmNvbnN0IEZVTExfQ0hBTkdFID0gJyBfZnVsbF9jaGFuZ2VfICc7XHJcblxyXG5jb25zdCBCQVNFID0gJzEnO1xyXG5jb25zdCBDT01QT05FTlQgPSAnMic7XHJcbmNvbnN0IExJU1QgPSAnMyc7XHJcbmNvbnN0IElURU0gPSAnX2l0ZW1fJztcclxuY29uc3QgQ09NUE9ORU5UX0xJU1QgPSAnNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUFJFRklYLFxyXG4gIFRFTVBMQVRFX0JJTkRJTkcsXHJcbiAgVEVNUExBVEVfTElTVF9CSU5ESU5HLFxyXG4gIEJJTkRJTkdfSUQsXHJcbiAgU1RBVEVfUEFUSCxcclxuICBURU1QTEFURV9QTEFDRU1FTlQsXHJcbiAgU1RBVEVfTkFNRSxcclxuICBTQ09QRV9QUkVGSVgsXHJcbiAgSVRFTV9JTkRFWCxcclxuICBDT01QT05FTlRfVFlQRSxcclxuICBJVEVNX1NVRkZJWCxcclxuICBTVEFURV9ERUxJTUlURVIsXHJcbiAgQkFTRSxcclxuICBDT01QT05FTlQsXHJcbiAgTElTVCxcclxuICBJVEVNLFxyXG4gIFNFTEYsXHJcbiAgRlVMTF9DSEFOR0UsXHJcbiAgQ09NUE9ORU5UX0xJU1RcclxufTtcclxuIiwiY29uc3QgU1RSSVBfQ09NTUVOVFMgPSAvKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pfChcXHMqPVteLCldKigoJyg/OlxcXFwnfFteJ1xcclxcbl0pKicpfChcIig/OlxcXFxcInxbXlwiXFxyXFxuXSkqXCIpKXwoXFxzKj1bXiwpXSopKS9tZztcclxuY29uc3QgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNUUklQX0NPTU1FTlRTLFxyXG4gIEFSR1VNRU5UX05BTUVTLFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc09iamVjdEluQnJhY2tldHMsXHJcbiAgaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNFbXB0eSxcclxuICBpc0xpbmssXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQgKG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQgKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xpbmsgKG9iaikge1xyXG4gIGNvbnN0IHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcclxuICByZXR1cm4gWzAsIDEsIDJdLnNvbWUoKGlkeCkgPT4gaWR4ID09PSBzbGFzaElkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSkge1xyXG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxufVxyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL29iamVjdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhcyxcclxuICBnZXRGYWxzZVBhdGhzLFxyXG4gIHRvRGFzaENhc2UsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG4gIGdldFJlYWxOYW1lLFxyXG59O1xyXG5cclxuY29uc3QgTkFNRVMgPSB7XHJcbiAgcmVhbDoge30sXHJcbiAgc2hvcnQ6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydE5hbWUgKG5hbWUpIHtcclxuICBpZiAoTkFNRVMucmVhbFtuYW1lXSkge1xyXG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xyXG4gIHJldHVybiBOQU1FUy5yZWFsW25hbWVdID0gc2hvcnROYW1lIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhbE5hbWUgKG51bSkge1xyXG4gIHJldHVybiBOQU1FUy5zaG9ydFtudW1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKG9iaiwgZWwpIHtcclxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gaGFzKGtleXMsIGVsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmouaW5kZXhPZihlbCkgPj0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRocyAob2JqKSB7XHJcbiAgY29uc3Qgb25seUZhbHNlUGF0aHMgPSB7fTtcclxuICBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgW10pO1xyXG4gIHJldHVybiBvbmx5RmFsc2VQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRoIChvYmosIG9ubHlGYWxzZVBhdGhzLCBwYXRoKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xyXG4gICAgICBnZXRGYWxzZVBhdGgob2JqW2tleV0sIG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9ialtrZXldICE9PSB0cnVlKSB7XHJcbiAgICAgIHNldChvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSwgb2JqW2tleV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9EYXNoQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCkgPT4gJy0nICsgbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0oLikvZywgKG1hdGNoKSA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29weTtcclxuXHJcbmZ1bmN0aW9uIGNvcHkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29weSAoe30sIHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XHJcblxyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNET01FbGVtZW50KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IHt9O1xyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwgW107XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25baV0gPSBzb3VyY2VbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0hUTUxTdHJpbmcsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICBpbnNlcnRCZWZvcmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzIChvcmlnaW5hbCwgcmVwbGFjZW1lbnQpIHtcclxuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xyXG4gIHJldHVybiByZXBsYWNlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZSAoZWwsIG5leHRFbCkge1xyXG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwIChtYXJrdXApIHtcclxuICBjb25zdCBtYXJrdXBTdHIgPSBpc0hUTUxTdHJpbmcobWFya3VwLnRyaW0oKSkgPyBtYXJrdXAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcmt1cCkuaW5uZXJIVE1MO1xyXG4gIHJldHVybiBjb252ZXJ0U3RyaW5nVG9IVE1MKG1hcmt1cFN0cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdUb0hUTUwgKG1hcmt1cFN0cmluZykge1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICBjb25zdCBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFya3VwU3RyaW5nLCAndGV4dC9odG1sJyk7XHJcbiAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhbGtOb2RlcyAobm9kZSwgY2IpIHtcclxuICBpZiAoIGNiKG5vZGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQXJyYXkucHJvdG90eXBlXHJcbiAgICAuc2xpY2VcclxuICAgIC5jYWxsKG5vZGUuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaCgoZWwpID0+IHdhbGtOb2RlcyhlbCwgY2IpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2RlcyAocm9vdCwgaXNXYW50ZWQpIHtcclxuICBjb25zdCBub2RlcyA9IFtdO1xyXG4gIHdhbGtOb2Rlcyhyb290LCAoZWwpID0+IGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJycpO1xyXG4gIHJldHVybiBub2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGVtcHR5Tm9kZShub2RlKTtcclxuICB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gIG5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eU5vZGUgKG5vZGUpIHtcclxuICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJlRXF1YWw7XHJcblxyXG5mdW5jdGlvbiBhcmVFcXVhbCAoZmlyc3QsIHNlY29uZCkge1xyXG4gIGlmIChpc1VuZGVmaW5lZChmaXJzdCkgfHwgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBmaXJzdCAhPT0gdHlwZW9mIHNlY29uZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IHsgY2hpbGROb2RlOiB7fSB9O1xyXG5cclxuICBpZiAoaXNBcnJheShzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShcclxuICAgICAgZmlyc3QgPyBmaXJzdC5tYXAoZWwgPT4gZWwpIDogW10sXHJcbiAgICAgIHNlY29uZC5tYXAoZWwgPT4gZWwpLFxyXG4gICAgICBwYXJlbnROb2RlXHJcbiAgICApO1xyXG5cclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGUuY2hpbGROb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0tleXNFcXVhbGl0eSAoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzZWNvbmQpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0W2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgYWRkOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBmaXJzdCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoc2Vjb25kW2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgcmVtb3ZlOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbixcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICByZW1vdmUsXHJcbiAgYWRkQ29uc3RGaWVsZHMsXHJcbiAgZm9yRWFjaCxcclxuICBtYXAsXHJcbiAgbWFwS2V5cyxcclxuICBmaWx0ZXIsXHJcbiAgdG9PYmplY3QsXHJcbiAgZnVsbE1hcCxcclxuICBzcGxpdFBpZWNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0IChvYmosIHBhdGgsIHZhbHVlKSB7XHJcbiAgaWYgKCFwYXRoLmxlbmd0aCkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkZXN0ID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGlmICghZGVzdFsgcGF0aFtpXSBdKSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IGRlc3RbIHBhdGhbaV0gXSB8fCB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVzdFsgcGF0aFtpXSBdLCB2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlIChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB2YWx1ZVtwYXRoW2ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29uc3RGaWVsZHMgKG9iaiwgZmllbGRzKSB7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZCwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpZWxkc1tmaWVsZF0gfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byByZWRlZmluZSBjb25zdCBmaWVsZCAnXCIgKyBmaWVsZCArIFwiJ1wiKSB9LFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgY2IpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgbmV3T2JqW2tleV0gPSBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEtleXMgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IG5ld0tleSA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialtuZXdLZXldID0gcHJvcDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRQaWVjZSAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsTWFwIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCByZXMgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbIHJlc1swXSB8fCByZXMua2V5IHx8IHJlcy5rIF0gPSByZXNbMV0gfHwgcmVzWyd2YWx1ZSddIHx8IHJlc1sndiddO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyLCB2YWwpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBhcnIuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgbmV3T2JqW3ZdID0gaXNGdW5jdGlvbih2YWwpID8gdmFsKHYpIDogdmFsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuaW1wb3J0IHsgYXBwbHkgfSBmcm9tICcuL1Byb2R1Y3Rpb24nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGVmaW5lLFxyXG4gIGFwcGx5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9