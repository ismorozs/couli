(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Couli"] = factory();
	else
		root["Couli"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ291bGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvRGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvUHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJsaW5rIiwib3B0aW9uc09iaiIsInBhcmVudE9iaiIsInBhcmVudEtleSIsImNsYXNzIiwibGVuZ3RoIiwib3B0aW9uIiwidmFsdWUiLCJldmVudHMiLCJrZXkiLCJlbCIsImdldEF0dHJpYnV0ZSIsIlRFTVBMQVRFX0JJTkRJTkciLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0cmltIiwiVEVNUExBVEVfTElTVF9CSU5ESU5HIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwib2JqIiwiZ2V0Q29tcG9uZW50QnlOYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIlNUQVRFX05BTUUiLCJpbm5lckxpbmsiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJ2IiwiZm9yY2VkIiwia2V5cyIsImZvcmNlIiwiaSIsImJpbmRpbmdWYWx1ZXMiLCJnZXRWYWx1ZXNUcmVlIiwidmFsdWVzVHJlZSIsInZhbHMiLCJpdGVtVmFsdWVzIiwiY29tcG9uZW50VmFsdWVzIiwibGFzdElkeCIsIm51bSIsImVscyIsInN0YXJ0Iiwic2hpZnQiLCJtYXBMaXN0IiwiY2IiLCJpdGVyYXRlTGlzdFZhbHVlcyIsImZpbHRlciIsImZpbHRlckxpc3QiLCJuZXdMaXN0Iiwic2V0VmFsdWVzIiwiY3JlYXRlU3RhdGVOb2RlcyIsIm1vZGlmeUxpc3QiLCJzZW5kVG9SZW5kZXJRdWV1ZSIsIkNIQU5HRVMiLCJjaGFuZ2VzIiwiY29sbGVjdGluZyIsIlBST01JU0VTX1JFU09MVkVTIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImZpbmFsaXplVHJhbnNhY3Rpb24iLCJyZXNvbHZlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiaXNDb2xsZWN0aW5nQ2hhbmdlcyIsImFkZExpZmVDeWNsZUhvb2siLCJob29rVHlwZSIsImhvb2siLCJ2YWx1ZXNOb2RlIiwiY3JlYXRlU3RhdGVOb2RlIiwidmFsdWVzTm9kZXMiLCJ2YWx1ZU5vZGUiLCJyZWR1Y2UiLCJhIiwiY2hhbmdlVmFsdWVzIiwiY2FsbGVkRGVwZW5kZW5jZXMiLCJGVUxMX0NIQU5HRSIsImVuZCIsInNldFZhbHVlIiwicmVzIiwiQmluZGluZ05vdEV4aXN0c0Vycm9yIiwic2V0VmFsdWVGb3JMaXN0Iiwic2V0VmFsdWVGb3JDb21wb25lbnQiLCJlcXVhbCIsImh0bWwiLCJkZXBlbmRhbnQiLCJkZXBlbmRhbnRLZXkiLCJuZXdWYWx1ZSIsImFyciIsImluZGV4RXF1YWxpdHkiLCJyZW1vdmVMaXN0SXRlbSIsImFjdGlvbiIsImxpc3RQYXRoIiwiaXRlbU5hbWUiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNwbGljZSIsImxpc3RCaW5kaW5nIiwicmVtb3ZlZERPTU5vZGUiLCJyZW1vdmVkTm9kZSIsImNyZWF0ZUFuZEFwcGVuZFN0eWxlcyIsInJlbmRlckNoYW5nZXMiLCJyZW5kZXIiLCJhcHBseU1hcmt1cCIsImFwcGx5Q2xhc3NlcyIsInN0eWxlIiwiYXBwbHlTdHlsZXMiLCJhdHRycyIsImFwcGx5QXR0cmlidXRlcyIsImNvbXBvbmVudENoYW5nZXMiLCJlbGVtZW50SWQiLCJjb21wb25lbnRJZCIsImNvbXBvbmVudEFjY2Vzc29yIiwicmVuZGVyTGlzdCIsInJlbmRlckNvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudCIsImRyYXdDb21wb25lbnQiLCJpdGVtV3JhcHBlciIsIkNPTVBPTkVOVCIsInJlbmRlckZ1bmMiLCJyZW5kZXJUeXBlIiwiY2hpbGRTdGF0ZVBhdGgiLCJjaGlsZE1hcmt1cCIsImNvbXBvbmVudE1hcmt1cCIsImNoYW5nZVR5cGUiLCJzdGF0ZVBhdGhUb0JpbmRpbmciLCJsaXN0Q29tcG9uZW50IiwiaXRlbXNWYWx1ZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEZyYWdtZW50IiwiYnVpbGRMaXN0IiwibGlzdE5vZGUiLCJuZXh0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsIkxJU1QiLCJDT01QT05FTlRfTElTVCIsImluc2VydEJlZm9yZSIsInJhbmdlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1WYWx1ZSIsIml0ZW1JbmRleCIsIm5ld0l0ZW1JbmRleCIsImxpc3RJdGVtTWFya3VwIiwiaXRlbXNDaGFuZ2VzIiwicmVtb3ZlZENvdW50IiwiaXRlbUFjY2Vzc29yIiwiZml4SW5kZXhlcyIsImRpZmYiLCJpdGVtc05vZGVzIiwicHJldklkeCIsIm5ld0lkeCIsImNsYXNzZXMiLCJub3JtYWxpemVTdHlsZXMiLCJzdHlsZU9iaiIsInN0eWxlU3RyIiwic3R5bGVFbCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsImNvbXBvbmVudE5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMSUJfTkFNRSIsIkFUVFJfUFJFRklYIiwiU1RBVEVfUEFUSCIsIlRFTVBMQVRFX1BMQUNFTUVOVCIsIlNDT1BFX1BSRUZJWCIsIklURU1fU1VGRklYIiwiaXNGdW5jdGlvbiIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzT2JqZWN0SW5CcmFja2V0cyIsImlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyIsImlzU3RyaW5nIiwiaXNIVE1MU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0RPTUVsZW1lbnQiLCJpc1VuZGVmaW5lZCIsImlzRW1wdHkiLCJpc0xpbmsiLCJnZXRPYmplY3RUeXBlIiwic2xhc2hJZHgiLCJzb21lIiwiaGFzIiwiZ2V0RmFsc2VQYXRocyIsInRvRGFzaENhc2UiLCJ0b0NhbWVsQ2FzZSIsImdldFNob3J0TmFtZSIsImdldFJlYWxOYW1lIiwiTkFNRVMiLCJyZWFsIiwic2hvcnQiLCJzaG9ydE5hbWUiLCJvbmx5RmFsc2VQYXRocyIsImdldEZhbHNlUGF0aCIsInN0ciIsInRvVXBwZXJDYXNlIiwiY29weSIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJjb3B5QXJyYXkiLCJyZXBsYWNlTm9kZXMiLCJjbG9uZUhUTUxNYXJrdXAiLCJjb2xsZWN0SFRNTE5vZGVzIiwid2Fsa05vZGVzIiwicmVtb3ZlTm9kZSIsImluc2VydEJlZm9yZU5vZGUiLCJyZXdyaXRlVG9Ob2RlIiwiZW1wdHlOb2RlIiwib3JpZ2luYWwiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VDaGlsZCIsIm5leHRFbCIsIm1hcmt1cFN0ciIsImNvbnZlcnRTdHJpbmdUb0hUTUwiLCJtYXJrdXBTdHJpbmciLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5vZGUiLCJyb290IiwiaXNXYW50ZWQiLCJub2RlcyIsInJlbW92ZUNoaWxkIiwidGV4dCIsIndyaXRlVG9Ob2RlIiwidGV4dE5vZGUiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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akIrTixXQUFPL04sQ0FBUCxJQUFZLDBCQUFXaU8sR0FBWCxJQUFrQkEsSUFBSWpPLENBQUosQ0FBbEIsR0FBMkJpTyxHQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFPRixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmxiLDRCQURlO0FBRWZpTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcbmltcG9ydCBSRSBmcm9tICcuL2dsb2JhbHMvcmVnZXhwJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY2xvbmVIVE1MTWFya3VwLFxyXG4gIHdhbGtOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmltcG9ydCB7IHNldCwgZm9yRWFjaCwgbWFwLCBtYXBLZXlzLCB0b09iamVjdCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IGNvcHkgZnJvbSAnLi9oZWxwZXJzL2NvcHknO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNFbXB0eSxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICB0b0NhbWVsQ2FzZSxcclxuICBnZXRTaG9ydE5hbWUsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyxcclxufSBmcm9tICcuL1ZpZXcnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvcic7XHJcbmltcG9ydCBTY29wZU5hbWVDb2xsaXNpb25FcnJvciBmcm9tICcuL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvcic7XHJcblxyXG5cclxuY29uc3QgVkFMVUVfVFlQRVMgPSBbJ3N0eWxlJywgJ2NsYXNzJywgJ3ZhbHVlJywgJ2F0dHJzJywgJ2h0bWwnXTtcclxuY29uc3QgUkVTRVJWRURfSE9PS1NfTkFNRVMgPSBbJ21vdW50JywgJ3VwZGF0ZScsICdyZW1vdmUnXTtcclxuY29uc3QgREVGQVVMVF9IT09LUyA9IHRvT2JqZWN0KFJFU0VSVkVEX0hPT0tTX05BTUVTLCAoKSA9PiAoKSA9PiB7fSk7XHJcbmNvbnN0IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgPSBWQUxVRV9UWVBFUy5jb25jYXQoWydldmVudHMnLCAnaG9va3MnLCAnbGlzdEl0ZW0nLCBMSUJfQVRUUi5TRUxGXSk7XHJcblxyXG5leHBvcnQge1xyXG4gIGRlZmluZSxcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIHNob3J0ZW5CaW5kaW5nSWQsXHJcbiAgaXNDb21wb25lbnQsXHJcbiAgVkFMVUVfVFlQRVMsXHJcbiAgUkVTRVJWRURfQklORElOR19OQU1FUyxcclxufTtcclxuXHJcbmxldCBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbmNvbnN0IENPTVBPTkVOVFMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGRlZmluZSAobmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzKSB7XHJcbiAgY29uc3QgYXJncyA9IGlzT2JqZWN0KG5hbWUpID8gbmFtZSA6IHsgbmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzIH07XHJcblxyXG4gIG5hbWUgPSB0b0NhbWVsQ2FzZShhcmdzLm5hbWUpO1xyXG5cclxuICBpZiAoQ09NUE9ORU5UU1tuYW1lXSkge1xyXG4gICAgdGhyb3cgbmV3IENvbXBvbmVudFJlZGVmaW5lRXJyb3IobmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnRIVE1MTWFya3VwID0gY2xvbmVIVE1MTWFya3VwKGFyZ3MubWFya3VwKTtcclxuICBjb21wb25lbnRIVE1MTWFya3VwLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblxyXG4gIENPTVBPTkVOVF9DT1VOVEVSID0gMDtcclxuICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICAgIHN0YXRlUGF0aDogW25hbWVdLFxyXG4gICAgc3RhdGVOYW1lczoge30sXHJcbiAgICBtYXJrdXA6IGNvbXBvbmVudEhUTUxNYXJrdXAsXHJcbiAgICBldmFsdWF0ZToge30sXHJcbiAgICBsaW5rczoge30sXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIG91dGVyTmFtZXM6IHt9LFxyXG4gICAgX2xpbmtzOiB7fSxcclxuICB9O1xyXG5cclxuICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBub3JtYWxpemVVc2VyT3B0aW9ucyhhcmdzLmJpbmRpbmdzLCB7IHN0YXRlOiB7fSB9KTtcclxuICBjb3B5KGNvbXBvbmVudCwgbm9ybWFsaXplZE9wdGlvbnMpO1xyXG5cclxuICBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlSWQsIHsgc3RhdGVQYXRoOiBbXSwgbGlua3M6IHt9LCBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyB9KTtcclxuXHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzKCBwcmVwYXJlU3R5bGVzKGFyZ3Muc3R5bGVzLCBjb21wb25lbnQpICk7XHJcblxyXG4gIHJldHVybiBDT01QT05FTlRTW25hbWVdID0gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAgKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCkge1xyXG4gIHdhbGtOb2Rlcyhjb21wb25lbnRIVE1MTWFya3VwLCAoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGJpbmRpbmdPcHRzID0gYW5hbHl6ZUJpbmRpbmcoSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmICghYmluZGluZ09wdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGJpbmRpbmdPcHRzLm5hbWUsIGNvbXBvbmVudCwgSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBzZXRDb21wb25lbnQoYmluZGluZywgYmluZGluZ09wdHMpO1xyXG4gICAgICBIVE1MTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nLm5hbWVdID0gYmluZGluZztcclxuICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCwgY29tcG9uZW50Lm5hbWUgKyAnLScgKyBiaW5kaW5nLm5hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0xpc3QpIHtcclxuICAgICAgY29uc3QgaXRlbU5vZGUgPSBIVE1MTm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgbW9kaWZ5VG9MaXN0QmluZGluZyhiaW5kaW5nLCBpdGVtTm9kZSk7XHJcblxyXG4gICAgICBpZiAoaXNDb21wb25lbnQoaXRlbU5vZGUpKSB7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcubGlzdEl0ZW0sIGdldENvbXBvbmVudE9wdHMoaXRlbU5vZGUpKTtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChpdGVtTm9kZSwgYmluZGluZy5saXN0SXRlbSk7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29tcG9uZW50IChjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3Qgc3RhdGVOYW1lcyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50QmluZGluZy5zdGF0ZU5hbWVzLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5zdGF0ZU5hbWVzKTtcclxuICBsZXQgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm5hbWUgKyAneCcgKyBDT01QT05FTlRfQ09VTlRFUisrO1xyXG5cclxuICBpZiAoc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpIHtcclxuICAgIGlmIChzdGF0ZU5hbWVzW3N1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lXSkge1xyXG4gICAgICB0aHJvdyBuZXcgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3Ioc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZTtcclxuICAgIGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lc1tzdGF0ZUlkXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb3B5KGNvbXBvbmVudEJpbmRpbmcsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGNvbXBvbmVudEJpbmRpbmcsIHtcclxuICAgIGlkOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVJZCxcclxuICAgIG5hbWU6IHN0YXRlSWQsXHJcbiAgICBzdGF0ZU5hbWU6IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnRCaW5kaW5nLnN0YXRlUGF0aC5jb25jYXQoc3RhdGVJZCksXHJcbiAgICBtYXJrdXA6IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIHN0YXRlTmFtZXMsXHJcbiAgICBfbGlua3M6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMubGlua3MpLFxyXG4gICAgb3V0ZXJOYW1lczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5yZXZMaW5rcyksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVCaW5kaW5ncyAoY29tcG9uZW50LCBjdXJyZW50U3RhdGVJZCwgcGFyZW50Q29tcG9uZW50KSB7XHJcbiAgY29uc3QgY29tcG9uZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbXBvbmVudC5tYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQsIHNob3J0ZW5CaW5kaW5nSWQoIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgTElCX0FUVFIuU0VMRiApKTtcclxuICBjb21wb25lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudC5tYXJrdXApO1xyXG4gIGNvbXBvbmVudC5zdGF0ZVBhdGggPSBwYXJlbnRDb21wb25lbnQuc3RhdGVQYXRoLmNvbmNhdChjb21wb25lbnQuc3RhdGVJZCk7XHJcbiAgY29tcG9uZW50LnN0YXRlTmFtZXMgPSBwYXJlbnRDb21wb25lbnQuc3RhdGVOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViQ29tcG9uZW50cyA9IFtdO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBvbGRCaW5kaW5nSWQgPSBiaW5kaW5nLmlkO1xyXG4gICAgY29uc3QgbmV3QmluZGluZ0lkID0gY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBiaW5kaW5nTmFtZTtcclxuICAgIGNvbnN0IHNob3J0SWQgPSBzaG9ydGVuQmluZGluZ0lkKG5ld0JpbmRpbmdJZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gY29tcG9uZW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIExJQl9BVFRSLlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydElkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIG5ld0JpbmRpbmdJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICAgIHN0YXRlUGF0aDogY29tcG9uZW50LnN0YXRlUGF0aC5zbGljZSgpLFxyXG4gICAgICBob29rczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9IT09LUywgYmluZGluZy5ob29rcyksXHJcbiAgICAgIGlkOiBuZXdCaW5kaW5nSWQsXHJcbiAgICAgIHNob3J0SWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVwYXJlUmVhY3RpdmVGdW5jcyhiaW5kaW5nLCBjb21wb25lbnQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBiaW5kaW5nLnN0YXRlUGF0aC5wdXNoKGJpbmRpbmdOYW1lKTtcclxuICAgICAgYmluZGluZy5zdGF0ZU5hbWVzID0gY29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gICAgICBwcmVwYXJlQmluZGluZ3MgKGJpbmRpbmcubGlzdEl0ZW0sIG5ld0JpbmRpbmdJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLklURU0gKyBiaW5kaW5nLmxpc3RJdGVtLm5hbWUsIGJpbmRpbmcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgc3ViQ29tcG9uZW50cy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZXR1cENvbXBvbmVudHNMaW5rcyhjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCk7XHJcbiAgY29tcG9uZW50LnRlbXBsYXRlID0gY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gIHN1YkNvbXBvbmVudHMuZm9yRWFjaCgoc3ViQ29tcG9uZW50KSA9PiB7XHJcbiAgICBwcmVwYXJlQmluZGluZ3MgKHN1YkNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBzdWJDb21wb25lbnQuc3RhdGVJZCwgY29tcG9uZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuY3MgKGJpbmRpbmcsIGNvbXBvbmVudERhdGEpIHtcclxuICBWQUxVRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCByZWFjdGl2ZUZ1bmMgPSBiaW5kaW5nW3R5cGVdO1xyXG4gICAgaWYgKCFyZWFjdGl2ZUZ1bmMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRpbmcuZXZhbHVhdGVbdHlwZV0gPSBwcmVwYXJlUmVhY3RpdmVGdW5jKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSlcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuYyAoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKSB7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBnZXREZXBlbmRlbmNpZXNOYW1lcyhyZWFjdGl2ZUZ1bmMpO1xyXG5cclxuICBkZXBlbmRlbmNpZXNOYW1lcy5mb3JFYWNoKChkZXBlbmRlbmN5TmFtZSkgPT4ge1xyXG4gICAgaWYgKGlzRW1wdHkoY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0pKSB7XHJcbiAgICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdID0gY3JlYXRlQmluZGluZyhkZXBlbmRlbmN5TmFtZSwgY29tcG9uZW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0uZGVwZW5kYW50c1sgYmluZGluZy5uYW1lICsgJzonICsgdHlwZSBdID0geyBuYW1lOiBiaW5kaW5nLm5hbWUsIHR5cGUgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICh2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSkgPT4gY29tcHV0ZSAocmVhY3RpdmVGdW5jLCB2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llc05hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jUGFyYW1zID0gZ2V0UGFyYW1OYW1lcyhmdW5jKTtcclxuICBjb25zdCB2YWx1ZXNPYmpSZWdFeHAgPSAgbmV3IFJlZ0V4cCgnXFxcXCcgKyBmdW5jUGFyYW1zWzBdICsgJ1xcXFwuKFxcXFxEW15cXFxcc1xcXFxXXSspJywgJ2cnKTtcclxuICBjb25zdCBkZXBlbmRlbmNpZXNOYW1lcyA9IFtdO1xyXG4gIGNvbnN0IGZ1bmNTdHIgPSBmdW5jLnRvU3RyaW5nKCk7XHJcbiAgbGV0IGRlcGVuZGVuY3lOYW1lO1xyXG4gIHdoaWxlICgoZGVwZW5kZW5jeU5hbWUgPSB2YWx1ZXNPYmpSZWdFeHAuZXhlYyhmdW5jU3RyKSkpIHtcclxuICAgIGRlcGVuZGVuY2llc05hbWVzLnB1c2goZGVwZW5kZW5jeU5hbWVbMV0pO1xyXG4gIH1cclxuICByZXR1cm4gZGVwZW5kZW5jaWVzTmFtZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoZnVuYykge1xyXG4gIGNvbnN0IGZ1bmNTdHJXaXRob3V0Q29tbWVudHMgPSBmdW5jLnRvU3RyaW5nKCkucmVwbGFjZShSRS5TVFJJUF9DT01NRU5UUywgJycpO1xyXG4gIGNvbnN0IHBhcmFtc1N0ciA9IGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuc2xpY2UoXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJygnKSArMSxcclxuICAgIGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuaW5kZXhPZignKScpXHJcbiAgKTtcclxuICByZXR1cm4gcGFyYW1zU3RyLm1hdGNoKFJFLkFSR1VNRU5UX05BTUVTKSB8fCBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZSAoZnVuYywgdmFsdWVzT2JqLCBjb21wb25lbnRJbnRlcmZhY2UpIHtcclxuICByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGdldE9ubHlWYWx1ZXModmFsdWVzT2JqKSwgY29tcG9uZW50SW50ZXJmYWNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBDb21wb25lbnRzTGlua3MgKGNvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50KSB7XHJcbiAgT2JqZWN0LmFzc2lnbihcclxuICAgIHBhcmVudENvbXBvbmVudC5saW5rcyxcclxuICAgIG1hcChjb21wb25lbnQub3V0ZXJOYW1lcywgKGspID0+ICh7IGxpbms6IGssIGNvbXBvbmVudDogY29tcG9uZW50LnN0YXRlSWQgfSkpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVXNlck9wdGlvbnMgKG9wdGlvbnNPYmosIHBhcmVudE9iaiwgcGFyZW50S2V5KSB7XHJcbiAgaWYgKGlzRnVuY3Rpb24gKG9wdGlvbnNPYmopKSB7XHJcbiAgICByZXR1cm4gc2V0KHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgY2xhc3M6IG9wdGlvbnNPYmogfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvcHRpb25zT2JqKSkge1xyXG5cclxuICAgIGlmIChvcHRpb25zT2JqLmxlbmd0aCA+IDEpIHtcclxuICAgICAgb3B0aW9uc09iai5mb3JFYWNoKChvcHRpb24pID0+IG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb24sIHBhcmVudE9iaiwgcGFyZW50S2V5KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zT2JqWzBdKSkge1xyXG4gICAgICByZXR1cm4gc2V0KHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgdmFsdWU6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYmplY3Qob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGV2ZW50czogb3B0aW9uc09ialswXSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvckVhY2gob3B0aW9uc09iaiwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIGRlbGV0ZSBvcHRpb25zT2JqW2tleV07XHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhrZXkpO1xyXG5cclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcGFyZW50T2JqWydzdGF0ZSddW2tleV0gPSBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gYmluZGluZztcclxuICAgIG5vcm1hbGl6ZVVzZXJPcHRpb25zKHZhbHVlLCBwYXJlbnRPYmpbJ3N0YXRlJ10sIGtleSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwYXJlbnRPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuYWx5emVCaW5kaW5nIChlbCkge1xyXG4gIGlmIChpc0NvbXBvbmVudChlbCkpIHtcclxuICAgIHJldHVybiBnZXRDb21wb25lbnRPcHRzKGVsKTtcclxuICB9XHJcblxyXG4gIGlmICghZWwuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGxldCBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuXHJcbiAgaWYgKG5hbWUpIHtcclxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUudHJpbSgpIH07XHJcbiAgfVxyXG5cclxuICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0xJU1RfQklORElORyk7XHJcbiAgZWwucmVtb3ZlQXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0xJU1RfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSwgaXNMaXN0OiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudCAoZWwpIHtcclxuICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHRhZ05hbWUgJiYgQ09NUE9ORU5UU1sgdG9DYW1lbENhc2UodGFnTmFtZSkgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50T3B0cyAob2JqKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRvQ2FtZWxDYXNlKCBvYmoudGFnTmFtZS50b0xvd2VyQ2FzZSgpICk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWUpO1xyXG4gIGNvbnN0IGxpbmtzID0ge307XHJcbiAgY29uc3QgcmV2TGlua3MgPSB7fTtcclxuICBsZXQgc3RhdGVOYW1lID0gbnVsbDtcclxuXHJcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob2JqLmF0dHJpYnV0ZXMpXHJcbiAgICAuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG5cclxuICAgICAgaWYgKGF0dHIubmFtZSA9PT0gTElCX0FUVFIuU1RBVEVfTkFNRSkge1xyXG4gICAgICAgIHN0YXRlTmFtZSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpbm5lckxpbmsgPSB0b0NhbWVsQ2FzZShhdHRyLm5hbWUpO1xyXG4gICAgICBsaW5rc1tpbm5lckxpbmtdID0gYXR0ci52YWx1ZTtcclxuICAgICAgcmV2TGlua3NbYXR0ci52YWx1ZV0gPSBpbm5lckxpbms7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIGxpbmtzOiBsaW5rcyxcclxuICAgIHJldkxpbmtzOiByZXZMaW5rcyxcclxuICAgIHN0YXRlTmFtZSxcclxuICAgIG5hbWUsXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnRCeU5hbWUgKG5hbWUpIHtcclxuICByZXR1cm4gQ09NUE9ORU5UU1sgdG9DYW1lbENhc2UobmFtZSkgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmluZGluZyAobmFtZSwgY29tcG9uZW50LCBlbCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudE9wdHMgPSAoY29tcG9uZW50KSA/IHtcclxuICAgIGlkOiBjb21wb25lbnQuc3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGgsXHJcbiAgICBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyxcclxuICAgIGlzTGlzdEl0ZW06IGNvbXBvbmVudC5pc0xpc3QsXHJcbiAgICBzdGF0ZUlkOiBuYW1lLFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgY29uc3QgZWxPcHRzID0gKGVsKSA/IHtcclxuICAgIGluaXRWYWx1ZTogZWwudmFsdWUgfHwgZWwuaW5uZXJIVE1MXHJcbiAgfSA6IHt9O1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XHJcbiAgICBuYW1lLFxyXG4gICAgbGlzdGVuZXJzOiBbXSxcclxuICAgIG1hcmt1cDogZWwsXHJcbiAgICBkZXBlbmRhbnRzOiB7fSxcclxuICAgIGV2ZW50czoge30sXHJcbiAgICBldmFsdWF0ZToge30sXHJcbiAgICBsaW5rczoge30sXHJcbiAgICBzdGF0ZTogeyBbTElCX0FUVFIuU0VMRl06IHt9IH0sXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcblxyXG4gIH0sIGNvbXBvbmVudE9wdHMsIGVsT3B0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvTGlzdEJpbmRpbmcgKGJpbmRpbmcsIGl0ZW1NYXJrdXApIHtcclxuICBiaW5kaW5nLmlzTGlzdCA9IHRydWU7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHtcclxuICAgIG1hcmt1cDogaXRlbU1hcmt1cCxcclxuICAgIGxpc3RJdGVtOiBjcmVhdGVCaW5kaW5nKGl0ZW1NYXJrdXAudGFnTmFtZSwgYmluZGluZywgaXRlbU1hcmt1cCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5CaW5kaW5nSWQgKGlkKSB7XHJcbiAgcmV0dXJuIGlkXHJcbiAgICAuc3BsaXQoTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKVxyXG4gICAgLm1hcCgoZWwpID0+IGdldFNob3J0TmFtZShlbCkpXHJcbiAgICAuam9pbihMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlU3R5bGVzIChzdHlsZUFyZywgY29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIG1hcEtleXMoc3R5bGVBcmcsIChrZXkpID0+IGtleVxyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBzZWxlY3Rvci50cmltKCkpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4ge1xyXG5cclxuICAgICAgbGV0IGNsYXNzTmFtZSA9ICAnLicgKyBjb21wb25lbnQubmFtZTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IGlzQmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVsgc2VsZWN0b3Iuc3BsaXQoJyAnKVswXS5zcGxpdCgnOjonKVswXS5zcGxpdCgnOicpWzBdIF07XHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gaXNCaW5kaW5nID8gY2xhc3NOYW1lICsgJy0nIDogJyc7XHJcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByZWZpeCArIHNlbGVjdG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xyXG4gICAgfSlcclxuICAgIC5qb2luKCcsJylcclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcbmltcG9ydCB7IGdldFJlYWxOYW1lLCBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgYXBwbHlDaGFuZ2VzXHJcbn0gZnJvbSAnLi9TdGF0ZUNoYW5nZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIHNldHVwRXZlbnRIYW5kbGVyc1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFdmVudEhhbmRsZXJzIChlbGVtZW50KSB7XHJcbiAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XHJcblxyXG4gIGNvbnN0IG1hcmt1cCA9IGVsZW1lbnQuZWw7XHJcbiAgZm9yIChsZXQgZXZlbnROYW1lIGluIGV2ZW50SGFuZGxlcnMpIHtcclxuICAgIG1hcmt1cC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QoZSwgZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLCBlbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzIChjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBnYXRoZXJFdmVudEhhbmRsZXJzIChjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpO1xyXG5cclxuICBpZiAoY29tcG9uZW50LnN0YXRlKSB7XHJcbiAgICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcpID0+IGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoYmluZGluZywgZ2F0aGVyZWRIYW5kbGVycykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5saXN0SXRlbSkge1xyXG4gICAgZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhjb21wb25lbnQubGlzdEl0ZW0sIGdhdGhlcmVkSGFuZGxlcnMpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyRXZlbnRIYW5kbGVycyAoYmluZGluZywgZ2F0aGVyZWRIYW5kbGVycykge1xyXG4gIGlmICghYmluZGluZy5ldmVudHMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBiaW5kaW5nLmV2ZW50cykge1xyXG4gICAgaWYgKCFnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdW2JpbmRpbmcuc2hvcnRJZF0gPSBiaW5kaW5nLmV2ZW50c1tldmVudE5hbWVdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhlY3V0ZUFsbENhbGxiYWNrc0luTGlzdCAoZSwgZXZlbnRIYW5kbGVycywgZWxlbWVudCkge1xyXG4gIGRlY29yYXRlRXZlbnQoZSk7XHJcbiAgc3RhcnRUcmFuc2FjdGlvbigpO1xyXG4gIFxyXG4gIGxldCBjdXJIVE1MTm9kZSA9IGUudGFyZ2V0O1xyXG4gIHdoaWxlIChjdXJIVE1MTm9kZSAhPT0gZWxlbWVudC5lbC5wYXJlbnROb2RlKSB7XHJcbiAgICBjb25zdCBiaW5kaW5nSWQgPSBjdXJIVE1MTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCk7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXJzW2JpbmRpbmdJZF07XHJcblxyXG4gICAgaWYgKGV2ZW50SGFuZGxlcikge1xyXG4gICAgICBjb25zdCBpbmRleGxlc3NTdGF0ZVBhdGggPSBiaW5kaW5nSWQuc3BsaXQoTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxuICAgICAgaW5kZXhsZXNzU3RhdGVQYXRoLnBvcCgpO1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBnZXRTdGF0ZVBhdGhUb0l0ZW0oY3VySFRNTE5vZGUsIGluZGV4bGVzc1N0YXRlUGF0aCk7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc29yVG9EYXRhID0gY3JlYXRlQWNjZXNzb3IoW2VsZW1lbnQuaWRdLmNvbmNhdChzdGF0ZVBhdGhUb0l0ZW0pKTtcclxuXHJcbiAgICAgIGV2ZW50SGFuZGxlci5jYWxsKHRoaXMsIGUsIGN1ckhUTUxOb2RlLCBhY2Nlc3NvclRvRGF0YSwgK3N0YXRlUGF0aFRvSXRlbS5zbGljZSgtMilbMF0pO1xyXG5cclxuICAgICAgaWYgKGUucHJvcGFnYXRpb25TdG9wcGVkKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGN1ckhUTUxOb2RlID0gY3VySFRNTE5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcblxyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0ZUV2ZW50IChlKSB7XHJcbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gZS5zdG9wUHJvcGFnYXRpb24uYmluZChlKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGUucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcclxuICAgIHN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGVQYXRoVG9JdGVtIChlbCwgaW5kZXhsZXNzU3RhdGVQYXRoKSB7XHJcbiAgY29uc3Qgc3RhdGVQYXRoID0gW107XHJcblxyXG4gIGxldCBlbGVtZW50TmFtZTtcclxuICB3aGlsZSAoKGVsZW1lbnROYW1lID0gZ2V0UmVhbE5hbWUoIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKSApKSkge1xyXG5cclxuICAgIGlmIChoYXMoZWxlbWVudE5hbWUsIExJQl9BVFRSLklURU0pKSB7XHJcbiAgICAgIGVsZW1lbnROYW1lID0gZWxlbWVudE5hbWUuc2xpY2UoTElCX0FUVFIuSVRFTS5sZW5ndGgpO1xyXG4gICAgICBlbCA9IGdldFRvSXRlbU5vZGUoZWwpO1xyXG4gICAgICBjb25zdCBpZHggPSBlbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgc3RhdGVQYXRoLnVuc2hpZnQoaWR4LCBlbGVtZW50TmFtZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlUGF0aC51bnNoaWZ0KGVsZW1lbnROYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZVBhdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvSXRlbU5vZGUgKGVsKSB7XHJcbiAgbGV0IGN1ckVsID0gZWw7XHJcblxyXG4gIHdoaWxlIChjdXJFbC50YWdOYW1lICE9PSAnQk9EWScpIHtcclxuICAgIGlmIChjdXJFbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCkpIHtcclxuICAgICAgcmV0dXJuIGN1ckVsO1xyXG4gICAgfVxyXG4gICAgY3VyRWwgPSBjdXJFbC5wYXJlbnROb2RlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nXHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudE9wdHMsXHJcbiAgaXNDb21wb25lbnQsXHJcbn0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7IHNldHVwRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmV4cG9ydCB7IGFwcGx5IH07XHJcblxyXG5cclxuZnVuY3Rpb24gYXBwbHkgKHJvb3RFbGVtZW50U2VsZWN0b3IpIHtcclxuICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgY29uc3QgSFRNTE5vZGVzID0gY29sbGVjdEhUTUxOb2Rlcyhyb290RWxlbWVudCwgaXNDb21wb25lbnQpO1xyXG5cclxuICBIVE1MTm9kZXMuZm9yRWFjaCgoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudE9wdHMgPSBnZXRDb21wb25lbnRPcHRzKEhUTUxOb2RlKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBzZXR1cEVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcblxyXG4gICAgcmVwbGFjZU5vZGVzKEhUTUxOb2RlLCBlbGVtZW50LmVsKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcbiAgc2V0dXBFdmVudEhhbmRsZXJzKGVsZW1lbnQpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBnZXQsIHNldCwgZm9yRWFjaCwgbWFwIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVTdGF0ZU5vZGVzLFxyXG4gIHNldFZhbHVlcyxcclxuICBtb2RpZnlMaXN0LFxyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUsXHJcbiAgYXBwbHlDaGFuZ2VzLFxyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUVsZW1lbnQsXHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbiAgZ2V0T25seVZhbHVlcyxcclxuICBnZXRDb21wb25lbnQsXHJcbiAgc2V0U3RhdGUsXHJcbiAgcHJlcGFyZUNoYW5nZU9iamVjdCxcclxufTtcclxuXHJcbmNvbnN0IEVMRU1FTlRTID0ge307XHJcbmNvbnN0IFNUQVRFID0ge307XHJcbmxldCBFTEVNRU5UX0NPVU5URVIgPSAxO1xyXG5cclxuZnVuY3Rpb24gc2V0U3RhdGUgKHBhdGgsIHZhbHVlKSB7XHJcbiAgc2V0KFNUQVRFLCBwYXRoLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlIChwYXRoKSB7XHJcbiAgcmV0dXJuIGdldChTVEFURSwgcGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKGNvbXBvbmVudE9wdHMpIHtcclxuICBjb25zdCBpZCA9IEVMRU1FTlRfQ09VTlRFUisrO1xyXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnRPcHRzLm5hbWU7XHJcblxyXG4gIGNvbnN0IGVsZW1lbnQgPSBFTEVNRU5UU1tpZF0gPSB7XHJcbiAgICBpZCxcclxuICAgIHN0YXRlOiB7IFtuYW1lXTogY29tcG9uZW50T3B0cy5jb21wb25lbnQgfSxcclxuICB9O1xyXG5cclxuICBTVEFURVtpZF0gPSB7fTtcclxuXHJcbiAgY3JlYXRlU3RhdGVOb2RlcyhbaWQsIG5hbWVdKTtcclxuXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUoW2lkXSwgeyBbbmFtZV06IGZhbHNlIH0pO1xyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG4gIGVsZW1lbnQuZWwgPSBTVEFURVtpZF1bbmFtZV1bTElCX0FUVFIuU0VMRl0uZWw7XHJcbiAgZWxlbWVudC5lbC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkJBU0UpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWNjZXNzb3IgKHBhdGgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBnZXRTdGF0ZShwYXRoKTtcclxuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQocGF0aCk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc29yID0ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgdmFsdWVzLFxyXG4gICAgcGF0aCxcclxuICAgIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgICBhcHBseUNoYW5nZXMsXHJcbiAgICB1cDogKGxldmVsKSA9PiBtb3ZlVXBTdGF0ZVBhdGgobGV2ZWwsIHBhdGguc2xpY2UoKSksXHJcbiAgICBkb3duOiAoYWRkaXRpb25hbFBhdGgpID0+IGNyZWF0ZUFjY2Vzc29yKHBhdGguY29uY2F0KGFkZGl0aW9uYWxQYXRoKSksXHJcbiAgICBzZXQ6IChjaGFuZ2VPYmopID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2VPYmopLCBwYXRoKSxcclxuICAgIGdldDogKGtleSkgPT4gZ2V0VmFsdWVzKGFjY2Vzc29yLCBrZXksIHBhdGgpLFxyXG4gICAgbWFya3VwOiAoa2V5KSA9PiBrZXkgPyBhY2Nlc3Nvci52YWx1ZXNba2V5XS5lbCA6IGFjY2Vzc29yLnZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbCxcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KHZhbHVlcykpIHtcclxuICAgIG1vZGlmeVRvQXJyYXlBY2Nlc3NvcihhY2Nlc3Nvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYWNjZXNzb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVDaGFuZ2VPYmplY3QgKGNoYW5nZU9iaikge1xyXG4gIHJldHVybiBtYXAoY2hhbmdlT2JqLCAodikgPT4ge1xyXG4gICAgY29uc3QgZm9yY2VkID0gaXNPYmplY3QodikgJiYgT2JqZWN0LmtleXModilbMF0gPT09ICdmb3JjZSc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZvcmNlZCA/IHZbJ2ZvcmNlJ10gOiB2LFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBmb3JjZTogZm9yY2VkLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50IChwYXRoKSB7XHJcbiAgbGV0IGNvbXBvbmVudCA9IEVMRU1FTlRTWyBwYXRoWzBdIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50LnN0YXRlWyBwYXRoW2ldIF07XHJcbiAgICBcclxuICAgIGlmIChjb21wb25lbnQuaXNMaXN0ICYmIGkgIT09IChwYXRoLmxlbmd0aCAtMSkpIHtcclxuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50Lmxpc3RJdGVtO1xyXG4gICAgICBpKz0yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T25seVZhbHVlcyAob2JqKSB7XHJcbiAgcmV0dXJuIG1hcChvYmosIChiaW5kaW5nVmFsdWVzKSA9PiBiaW5kaW5nVmFsdWVzWyd2YWx1ZSddKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzIChhY2Nlc3Nvciwga2V5LCBzdGF0ZVBhdGgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG5cclxuICBpZiAoIWtleSkge1xyXG4gICAgcmV0dXJuIGdldFZhbHVlc1RyZWUodmFsdWVzLCBjb21wb25lbnQsIHt9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVba2V5XTtcclxuICBpZiAoYmluZGluZy5pc0xpc3QgfHwgYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5jb25jYXQoa2V5KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWVzW2tleV0udmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc1RyZWUgKHZhbHVlcywgY29tcG9uZW50LCB2YWx1ZXNUcmVlKSB7XHJcbiAgZm9yRWFjaCh2YWx1ZXMsICh2YWxzLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKGhhcyhSRVNFUlZFRF9CSU5ESU5HX05BTUVTLCBiaW5kaW5nTmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IFtdO1xyXG4gICAgICB2YWx1ZXNbYmluZGluZ05hbWVdLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdW2ldID0ge307XHJcbiAgICAgICAgZ2V0VmFsdWVzVHJlZSh2YWx1ZXNbYmluZGluZ05hbWVdW2ldW2JpbmRpbmcubGlzdEl0ZW0ubmFtZV0sIGJpbmRpbmcubGlzdEl0ZW0sIGl0ZW1WYWx1ZXMpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdID0ge307XHJcbiAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXSwgYmluZGluZywgY29tcG9uZW50VmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNUcmVlWyBjb21wb25lbnQuX2xpbmtzW2JpbmRpbmdOYW1lXSB8fCBiaW5kaW5nTmFtZSBdID0gdmFscy52YWx1ZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc1RyZWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVVcFN0YXRlUGF0aCAobGV2ZWwsIHN0YXRlUGF0aCkge1xyXG4gIGxldCBsYXN0SWR4ID0gc3RhdGVQYXRoLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxldmVsID09PSAnJykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCAyKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcobGV2ZWwpKSB7XHJcbiAgICB3aGlsZSAobGFzdElkeC0tKSB7XHJcbiAgICAgIGlmIChzdGF0ZVBhdGhbbGFzdElkeF0gPT09IGxldmVsKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbiAgfVxyXG5cclxuICBsZXZlbCA9IGxldmVsIHx8IDE7XHJcbiAgd2hpbGUgKGxhc3RJZHgtLSAmJiBsZXZlbC0tKSB7XHJcbiAgICBpZiAoaXNOdW1iZXIoK3N0YXRlUGF0aFtsYXN0SWR4IC0gMV0pKSB7XHJcbiAgICAgIGxhc3RJZHgtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgbGFzdElkeCArIDEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VG9BcnJheUFjY2Vzc29yIChhY2Nlc3Nvcikge1xyXG4gIE9iamVjdC5hc3NpZ24oYWNjZXNzb3IsIHtcclxuICAgIGdldDogKG51bSkgPT4gY3JlYXRlQWNjZXNzb3IoYWNjZXNzb3IucGF0aC5jb25jYXQobnVtLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZSkpLFxyXG5cclxuICAgIHB1c2g6IChlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsIGVscyB9LCBhY2Nlc3NvciksXHJcbiAgICB1bnNoaWZ0OiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiAwLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgYWRkOiAoc3RhcnQsIGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBwb3A6IChudW0pID0+IG1vZGlmeUxpc3QoJ3JlbW92ZScsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGggLSAobnVtIHx8IDEpLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgc2hpZnQ6IChudW0pID0+IG1vZGlmeUxpc3QoJ3JlbW92ZScsIHsgc3RhcnQ6IDAsIG51bSB9LCBhY2Nlc3NvciksXHJcbiAgICByZW1vdmU6IChzdGFydCwgbnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0LCBudW0gfSwgYWNjZXNzb3IpLFxyXG5cclxuICAgIGxlbmd0aDogKCkgPT4gYWNjZXNzb3IudmFsdWVzLmxlbmd0aCxcclxuICAgIHZhbHVlOiAoKSA9PiBtYXBMaXN0KGFjY2Vzc29yKSxcclxuICAgIGZvckVhY2g6IChjYikgPT4gaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIGNiKSxcclxuICAgIGZpbHRlcjogKGNiKSA9PiBmaWx0ZXJMaXN0KGFjY2Vzc29yLCBjYiksXHJcbiAgICBtYXA6IChjYikgPT4gbWFwTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpdGVyYXRlTGlzdFZhbHVlcyAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgYWNjZXNzb3IudmFsdWVzLmZvckVhY2goKGVsLCBpKSA9PlxyXG4gICAgY2IoXHJcbiAgICAgIGdldFZhbHVlc1RyZWUoZWxbYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0sIHt9KSxcclxuICAgICAgaVxyXG4gICkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcblxyXG4gIGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCAoZWwsIGkpID0+IHtcclxuICAgIGlmIChjYihlbCwgaSkpIHtcclxuICAgICAgbmV3TGlzdC5wdXNoKGVsKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ld0xpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcExpc3QgKGFjY2Vzc29yLCBjYikge1xyXG4gIGNvbnN0IG5ld0xpc3QgPSBbXTtcclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiBuZXdMaXN0LnB1c2goIGNiID8gY2IoZWwsIGkpIDogZWwgKSk7XHJcbiAgcmV0dXJuIG5ld0xpc3Q7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IHNldCwgZm9yRWFjaCwgbWFwLCB0b09iamVjdCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0VtcHR5LFxyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCBhcmVFcXVhbCBmcm9tICcuL2hlbHBlcnMvZXF1YWxpdHknO1xyXG5pbXBvcnQgeyBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbiAgZ2V0T25seVZhbHVlcyxcclxuICBzZXRTdGF0ZSxcclxufSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7IHJlbmRlckNoYW5nZXMgfSBmcm9tICcuL1ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgVkFMVUVfVFlQRVMgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IEJpbmRpbmdOb3RFeGlzdHNFcnJvciBmcm9tICcuL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3InO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXRWYWx1ZXMsXHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBtb2RpZnlMaXN0LFxyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgYXBwbHlDaGFuZ2VzLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG59O1xyXG5cclxuY29uc3QgQ0hBTkdFUyA9IHsgY2hhbmdlczoge30sIGNvbGxlY3Rpbmc6IGZhbHNlIH07XHJcbmNvbnN0IFBST01JU0VTX1JFU09MVkVTID0gW107XHJcbmNvbnN0IExJRkVfQ1lDTEVfSEFORExFUlMgPSB7IGxpc3Q6IFtdIH07XHJcblxyXG5mdW5jdGlvbiBzdGFydFRyYW5zYWN0aW9uICgpIHtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBDSEFOR0VTLmNvbGxlY3RpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNoYW5nZXMgKCkge1xyXG4gIGNvbnN0IGNoYW5nZXMgPSBDSEFOR0VTLmNoYW5nZXM7XHJcbiAgQ0hBTkdFUy5jaGFuZ2VzID0ge307XHJcbiAgcmVuZGVyQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICByZXR1cm4gcnVuTGlmZUN5Y2xlSG9va3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuTGlmZUN5Y2xlSG9va3MgKCkge1xyXG4gIGNvbnN0IGxpZmVDeWNsZUhhbmRsZXJzID0gTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0O1xyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdCA9IFtdO1xyXG4gIGxpZmVDeWNsZUhhbmRsZXJzLmZvckVhY2goKGgpID0+IGgoKSk7XHJcblxyXG4gIGlmICghaXNFbXB0eShDSEFOR0VTLmNoYW5nZXMpKSB7XHJcbiAgICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmluYWxpemVUcmFuc2FjdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5hbGl6ZVRyYW5zYWN0aW9uICgpIHtcclxuICBDSEFOR0VTLmNvbGxlY3RpbmcgPSBmYWxzZTtcclxuICBsZXQgcmVzb2x2ZVByb21pc2U7XHJcblxyXG4gIHdoaWxlICgocmVzb2x2ZVByb21pc2UgPSBQUk9NSVNFU19SRVNPTFZFUy5wb3AoKSkpIHtcclxuICAgIHJlc29sdmVQcm9taXNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFRvUmVuZGVyUXVldWUgKHBhdGgsIGNoYW5nZSkge1xyXG4gIHNldChDSEFOR0VTLmNoYW5nZXMsIHBhdGgsIGNoYW5nZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29sbGVjdGluZ0NoYW5nZXMgKCkge1xyXG4gIHJldHVybiBDSEFOR0VTLmNvbGxlY3Rpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpZmVDeWNsZUhvb2sgKGhvb2tUeXBlLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBpZHgpIHtcclxuICBjb25zdCBob29rID0gYmluZGluZy5ob29rc1tob29rVHlwZV07XHJcbiAgXHJcbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0LnB1c2goKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZy5uYW1lIHx8IExJQl9BVFRSLlNFTEZdLmVsO1xyXG4gICAgY29uc3QgdmFscyA9ICFiaW5kaW5nLm5hbWUgPyBnZXRPbmx5VmFsdWVzKHZhbHVlcykgOiB2YWx1ZXNbYmluZGluZy5uYW1lXS52YWx1ZTtcclxuICAgIGhvb2soZWwsIHZhbHMsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU5vZGVzIChzdGF0ZVBhdGgpIHtcclxuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQoc3RhdGVQYXRoKTtcclxuICBjb25zdCB2YWx1ZXNOb2RlID0gY3JlYXRlU3RhdGVOb2RlKGNvbXBvbmVudCk7XHJcbiAgc2V0U3RhdGUoc3RhdGVQYXRoLCB2YWx1ZXNOb2RlKTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdtb3VudCcsIGNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgdmFsdWVzTm9kZSwgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG5cclxuICByZXR1cm4gdmFsdWVzTm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlIChjb21wb25lbnQpIHtcclxuICBjb25zdCB2YWx1ZXNOb2RlcyA9IG1hcChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZU5vZGUgPSBiaW5kaW5nLmlzTGlzdCA/IFtdIDoge307XHJcblxyXG4gICAgcmV0dXJuIFZBTFVFX1RZUEVTLnJlZHVjZSgoYSwga2V5KSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAndmFsdWUnOlxyXG4gICAgICAgIGNhc2UgJ2h0bWwnOlxyXG4gICAgICAgICAgdmFsdWUgPSBiaW5kaW5nLmluaXRWYWx1ZSB8fCAnJ1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB2YWx1ZSA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfSwgdmFsdWVOb2RlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24odmFsdWVzTm9kZXMsIHsgW0xJQl9BVFRSLlNFTEZdOiB0b09iamVjdChWQUxVRV9UWVBFUywge30pIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZXMgKGNoYW5nZVZhbHVlcywgc3RhdGVQYXRoLCBjYWxsZWREZXBlbmRlbmNlcykge1xyXG4gIGNhbGxlZERlcGVuZGVuY2VzID0gY2FsbGVkRGVwZW5kZW5jZXMgfHwgW107XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG5cclxuICBpZiAoIWFjY2Vzc29yLnZhbHVlcykge1xyXG4gICAgYWNjZXNzb3IudmFsdWVzID0gY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGgpO1xyXG4gICAgY29uc3Qgc3RhcnQgPSArc3RhdGVQYXRoLnNsaWNlKC0yKVswXTtcclxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aCwgeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIDEgfSB9IH0pXHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGNoYW5nZVZhbHVlcywgKGNoYW5nZSwgYmluZGluZ05hbWUpID0+IHNldFZhbHVlKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcykpO1xyXG5cclxuICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBhY2Nlc3Nvci5jb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIGFjY2Vzc29yLnZhbHVlcywgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWUgKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcykge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG4gIGNvbnN0IHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBsZXQgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcblxyXG4gIGlmICghYmluZGluZykge1xyXG4gICAgYmluZGluZ05hbWUgPSBjb21wb25lbnQub3V0ZXJOYW1lc1tiaW5kaW5nTmFtZV07XHJcbiAgICBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICB9XHJcblxyXG4gIGlmICghYmluZGluZykge1xyXG4gICAgdGhyb3cgbmV3IEJpbmRpbmdOb3RFeGlzdHNFcnJvcihiaW5kaW5nTmFtZSwgY29tcG9uZW50Lm5hbWUsIHN0YXRlUGF0aCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2hhbmdlLnR5cGUgPT09ICd2YWx1ZScpIHtcclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JMaXN0KGJpbmRpbmcsIGNoYW5nZSwgdmFsdWVzW2JpbmRpbmdOYW1lXSwgYWNjZXNzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChjaGFuZ2UudmFsdWUpICYmIGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yQ29tcG9uZW50KGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXF1YWwgPSBhcmVFcXVhbCh2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSwgY2hhbmdlLnZhbHVlKTtcclxuXHJcbiAgaWYgKCFlcXVhbCB8fCAhaXNFbXB0eShlcXVhbCkgfHwgY2hhbmdlLmZvcmNlKSB7XHJcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSA9IGNoYW5nZS52YWx1ZTtcclxuXHJcbiAgICBpZiAoY2hhbmdlLnR5cGUgIT09ICd2YWx1ZScpIHtcclxuICAgICAgcmV0dXJuIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpLCB7IFtjaGFuZ2UudHlwZV06IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGJpbmRpbmcsIHZhbHVlcywgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG4gICAgY2FsbGVkRGVwZW5kZW5jZXMucHVzaChiaW5kaW5nTmFtZSArICc6JyArIGNoYW5nZS50eXBlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmcuaHRtbCkge1xyXG4gICAgICBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgeyB2YWx1ZTogY2hhbmdlLnZhbHVlLCB0eXBlOiAnaHRtbCcsIGZvcmNlOiBjaGFuZ2UuZm9yY2UgfSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW5rID0gY29tcG9uZW50LmxpbmtzW2JpbmRpbmdOYW1lXTtcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgIHNldFZhbHVlKGxpbmsubGluaywgeyB2YWx1ZTogY2hhbmdlLnZhbHVlLCB0eXBlOiAndmFsdWUnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLmRvd24obGluay5jb21wb25lbnQpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChiaW5kaW5nLmRlcGVuZGFudHMsIChkZXBlbmRhbnQsIGRlcGVuZGFudEtleSkgPT4ge1xyXG4gICAgICBpZiAoaGFzKGNhbGxlZERlcGVuZGVuY2VzLCBkZXBlbmRhbnRLZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGNvbXBvbmVudC5zdGF0ZVtkZXBlbmRhbnQubmFtZV0uZXZhbHVhdGVbZGVwZW5kYW50LnR5cGVdKHZhbHVlcywgYWNjZXNzb3IpO1xyXG4gICAgICBzZXRWYWx1ZShkZXBlbmRhbnQubmFtZSwgeyB2YWx1ZTogbmV3VmFsdWUsIHR5cGU6IGRlcGVuZGFudC50eXBlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlRm9yTGlzdCAoYmluZGluZywgY2hhbmdlLCBhcnIsIGFjY2Vzc29yKSB7XHJcbiAgT2JqZWN0XHJcbiAgICAua2V5cyhjaGFuZ2UudmFsdWUpXHJcbiAgICAuZm9yRWFjaCgoaSkgPT4gc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZS52YWx1ZVtpXSksIGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaSwgYmluZGluZy5saXN0SXRlbS5uYW1lKSkpO1xyXG5cclxuICBjb25zdCBpbmRleEVxdWFsaXR5ID0gYXJlRXF1YWwoYXJyLCBjaGFuZ2UudmFsdWUpO1xyXG4gIGZvckVhY2goaW5kZXhFcXVhbGl0eSwgKGNoYW5nZU9iaiwgaWR4KSA9PiB7XHJcbiAgICBpZiAoY2hhbmdlT2JqLnJlbW92ZSkge1xyXG4gICAgICBjaGFuZ2VPYmoucmVtb3ZlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpZHgsIGJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGlkeCwgYmluZGluZy5saXN0SXRlbS5uYW1lKSwgeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiBjaGFuZ2VPYmogfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlRm9yQ29tcG9uZW50IChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKSB7XHJcbiAgc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZS52YWx1ZSksIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZy5uYW1lKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGFjdGlvbiwgYXJncywgYWNjZXNzb3IpIHtcclxuICBjb25zdCBhcnIgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgY29uc3QgbGlzdFBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWU7XHJcbiAgY29uc3Qgc3RhcnQgPSBhcmdzLnN0YXJ0O1xyXG4gIGxldCBjaGFuZ2VPYmogPSB7fTtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgIGNoYW5nZU9iaiA9IGFkZFRvTGlzdChhcnIsIHN0YXJ0LCBhcmdzLmVscywgbGlzdFBhdGgsIGl0ZW1OYW1lKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyAoYXJncy5udW0gfHwgMSk7XHJcbiAgICAgIGNoYW5nZU9iaiA9IHJlbW92ZUZyb21MaXN0KGFyciwgc3RhcnQsIGVuZCwgYWNjZXNzb3IuY29tcG9uZW50LCBhY2Nlc3Nvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VPYmosIChjaGFuZ2UsIGlkeCkgPT4gc2VuZFRvUmVuZGVyUXVldWUobGlzdFBhdGguY29uY2F0KGlkeCwgaXRlbU5hbWUsIExJQl9BVFRSLkZVTExfQ0hBTkdFKSwgY2hhbmdlT2JqW2lkeF1bTElCX0FUVFIuRlVMTF9DSEFOR0VdKSk7XHJcblxyXG4gIGlmIChpc0NvbGxlY3RpbmdDaGFuZ2VzKCkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBQUk9NSVNFU19SRVNPTFZFUy5wdXNoKHJlcykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xpc3QgKGFyciwgc3RhcnQsIGVscywgbGlzdFBhdGgsIGl0ZW1OYW1lKSB7XHJcbiAgZWxzID0gaXNBcnJheShlbHMpID8gZWxzIDogW2Vsc107XHJcblxyXG4gIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgYXJyLnNwbGljZShpICsgc3RhcnQsIDAsIG51bGwpO1xyXG4gICAgc2V0VmFsdWVzKHByZXBhcmVDaGFuZ2VPYmplY3QoZWwpLCBsaXN0UGF0aC5jb25jYXQoaSArIHN0YXJ0LCBpdGVtTmFtZSkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBbc3RhcnRdOiB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgYWRkOiB7IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgZWxzLmxlbmd0aCB9IH0gfSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tTGlzdCAoYXJyLCBzdGFydCwgZW5kLCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCBjaGFuZ2VPYmogPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgIGNvbnN0IHJlbW92ZWRET01Ob2RlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpLCBsaXN0QmluZGluZywgYWNjZXNzb3IpO1xyXG4gICAgY2hhbmdlT2JqW2ldID0geyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IHJlbW92ZTogcmVtb3ZlZERPTU5vZGUgfSB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hhbmdlT2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVMaXN0SXRlbSAoYXJyLCBpZHgsIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IHJlbW92ZWROb2RlID0gYXJyLnNwbGljZShpZHgsIDEpWzBdW2xpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWVdO1xyXG4gIGFkZExpZmVDeWNsZUhvb2soJ3JlbW92ZScsIGxpc3RCaW5kaW5nLmxpc3RJdGVtLnN0YXRlW0xJQl9BVFRSLlNFTEZdLCByZW1vdmVkTm9kZSwgYWNjZXNzb3IsIGlkeCk7XHJcbiAgcmV0dXJuIHJlbW92ZWROb2RlW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcbmltcG9ydCB7IHRvRGFzaENhc2UgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuaW1wb3J0IHsgZm9yRWFjaCwgc3BsaXRQaWVjZSB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaXNOdW1iZXIsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUFjY2Vzc29yIH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICByZW1vdmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbiAgcmVuZGVyQ2hhbmdlc1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyID0ge1xyXG4gIGh0bWw6IGFwcGx5TWFya3VwLFxyXG4gIGNsYXNzOiBhcHBseUNsYXNzZXMsXHJcbiAgc3R5bGU6IGFwcGx5U3R5bGVzLFxyXG4gIGF0dHJzOiBhcHBseUF0dHJpYnV0ZXMsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNoYW5nZXMgKGNoYW5nZXMpIHtcclxuICBmb3JFYWNoKGNoYW5nZXMsIChjb21wb25lbnRDaGFuZ2VzLCBlbGVtZW50SWQpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gT2JqZWN0LmtleXMoY29tcG9uZW50Q2hhbmdlcylbMF1cclxuICAgIGNvbnN0IGNvbXBvbmVudEFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3IoW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdKTtcclxuICAgIGFwcGx5TWFya3VwKGNvbXBvbmVudEFjY2Vzc29yLmNvbXBvbmVudCwgY29tcG9uZW50QWNjZXNzb3IudmFsdWVzLCBbZWxlbWVudElkLCBjb21wb25lbnRJZF0sIGNvbXBvbmVudENoYW5nZXNbY29tcG9uZW50SWRdKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlNYXJrdXAgKGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmICghY29tcG9uZW50Lm1hcmt1cCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0xpc3QpIHtcclxuICAgIHJldHVybiByZW5kZXJMaXN0KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29tcG9uZW50LmlzQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZSA9IGlzVW5kZWZpbmVkKHZhbHVlKSA/ICcnIDogdmFsdWU7XHJcblxyXG4gIGlmIChjb21wb25lbnQubWFya3VwLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgIGNvbXBvbmVudC5tYXJrdXAudmFsdWUgPSB2YWx1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJld3JpdGVUb05vZGUoY29tcG9uZW50Lm1hcmt1cCwgdmFsdWUpO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQgKGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHJhd0NvbXBvbmVudCh2YWx1ZSwgc3RhdGVQYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NvbXBvbmVudCAodmFsdWVzLCBzdGF0ZVBhdGgpIHtcclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG5cclxuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGl0ZW1NYXJrdXAgPSBjb21wb25lbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbCA9IGl0ZW1NYXJrdXA7XHJcbiAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU1hcmt1cCk7XHJcblxyXG4gIGl0ZW1NYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCAoY29tcG9uZW50LmlzTGlzdEl0ZW0pID8gTElCX0FUVFIuSVRFTSA6IExJQl9BVFRSLkNPTVBPTkVOVCk7XHJcblxyXG4gIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSkge1xyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBpdGVtTWFya3VwIH0sIHZhbHVlc1tMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmICghYmluZGluZy5tYXJrdXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gaXRlbVdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY2hpbGRTdGF0ZVBhdGggPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuICAgICAgY29uc3QgY2hpbGRNYXJrdXAgPSBkcmF3Q29tcG9uZW50KHZhbHVlc1tiaW5kaW5nTmFtZV0sIGNoaWxkU3RhdGVQYXRoKTtcclxuICAgICAgcmVwbGFjZU5vZGVzKGJpbmRpbmdOb2RlLCBjaGlsZE1hcmt1cCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdLmVsID0gYmluZGluZ05vZGU7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHJlbmRlckxpc3QoYmluZGluZywgdmFsdWVzW2JpbmRpbmdOYW1lXSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChyZW5kZXIsIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSA9PiB7XHJcbiAgICAgIGlmIChyZW5kZXJUeXBlID09PSAnaHRtbCcgJiYgYmluZGluZy5odG1sID09PSBudWxsIHx8IGJpbmRpbmcubWFya3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBiaW5kaW5nTm9kZSB9LCB2YWx1ZXNbYmluZGluZ05hbWVdW3JlbmRlclR5cGVdLCBzdGF0ZVBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpdGVtV3JhcHBlci5jaGlsZHJlblswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgY29uc3QgY29tcG9uZW50TWFya3VwID0gdmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG5cclxuICBmb3JFYWNoKGNoYW5nZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiB7XHJcblxyXG4gICAgaWYgKGJpbmRpbmdOYW1lID09PSBMSUJfQVRUUi5TRUxGKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZSkge1xyXG4gICAgICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogY29tcG9uZW50TWFya3VwIH0sIHZhbHVlc1tMSUJfQVRUUi5TRUxGXVtjaGFuZ2VUeXBlXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG4gICAgY29uc3Qgc3RhdGVQYXRoVG9CaW5kaW5nID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQgfHwgYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYXBwbHlNYXJrdXAoYmluZGluZywgdmFsdWVzW2JpbmRpbmdOYW1lXSwgc3RhdGVQYXRoVG9CaW5kaW5nLCBjaGFuZ2VzW2JpbmRpbmdOYW1lXSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbCA9IHZhbHVlc1tiaW5kaW5nTmFtZV0uZWxcclxuXHJcbiAgICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlVHlwZV07XHJcbiAgICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogZWwgfSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKGNoYW5nZXMpIHtcclxuICAgIHJldHVybiB1cGRhdGVMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gYnVpbGRMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgpO1xyXG5cclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IHBhcmVudE5vZGUgPSBsaXN0Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IG5leHROb2RlID0gbGlzdE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gIHJlbW92ZU5vZGUobGlzdE5vZGUpO1xyXG5cclxuICBjb25zdCBpc0NvbXBvbmVudCA9IGxpc3ROb2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSk7XHJcbiAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5MSVNUKTtcclxuICBpZiAoaXNDb21wb25lbnQpIHtcclxuICAgIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuQ09NUE9ORU5UX0xJU1QpO1xyXG4gIH1cclxuXHJcbiAgZW1wdHlOb2RlKGxpc3ROb2RlKTtcclxuICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xyXG5cclxuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShsaXN0Tm9kZSwgbmV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZExpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHJhbmdlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSByYW5nZSA/IHJhbmdlLnN0YXJ0IDogMDtcclxuICBjb25zdCBlbmQgPSByYW5nZSA/IHJhbmdlLmVuZCA6IChpdGVtc1ZhbHVlcy5sZW5ndGggKyAxKTtcclxuXHJcbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGl0ZW1zVmFsdWVzXHJcbiAgICAuc2xpY2Uoc3RhcnQsIGVuZClcclxuICAgIC5mb3JFYWNoKChpdGVtVmFsdWUsIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdJdGVtSW5kZXggPSArc3RhcnQgKyBpdGVtSW5kZXg7XHJcbiAgICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoW25ld0l0ZW1JbmRleCwgbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSk7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtTWFya3VwID0gZHJhd0NvbXBvbmVudChpdGVtVmFsdWVbbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYLCBuZXdJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtTWFya3VwKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gbGlzdEZyYWdtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaXN0IChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IGl0ZW1zQ2hhbmdlcyA9IHNwbGl0UGllY2UoY2hhbmdlcywgKHYsIGspID0+IGlzTnVtYmVyKCtrKSk7XHJcbiAgbGV0IHJlbW92ZWRDb3VudCA9IDA7XHJcbiAgbGV0IGVuZCA9IDA7XHJcblxyXG4gIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlcykge1xyXG4gICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBsaXN0Tm9kZSB9LCBpdGVtc1ZhbHVlc1tjaGFuZ2VUeXBlXSk7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGl0ZW1zQ2hhbmdlcywgKGNoYW5nZSwgaSkgPT4ge1xyXG4gICAgY2hhbmdlID0gY2hhbmdlW2l0ZW1OYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoaSwgaXRlbU5hbWUpO1xyXG4gICAgY29uc3QgaXRlbUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICBpZiAoIWNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pIHtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50KGl0ZW1BY2Nlc3Nvci5jb21wb25lbnQsIGl0ZW1zVmFsdWVzW2ldW2l0ZW1OYW1lXSwgc3RhdGVQYXRoVG9JdGVtLCBjaGFuZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkICYmIGkgPj0gZW5kKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQuc3RhcnQ7XHJcbiAgICAgIGVuZCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLmVuZDtcclxuXHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIHN0YXJ0LCBlbmQgLSBzdGFydCk7XHJcbiAgICAgIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgeyBzdGFydCwgZW5kIH0pO1xyXG5cclxuICAgICAgaWYgKGVuZCA9PT0gaXRlbXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3ROb2RlLmluc2VydEJlZm9yZShsaXN0RnJhZ21lbnQsIGxpc3ROb2RlLmNoaWxkcmVuW3N0YXJ0XSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpIHtcclxuICAgICAgcmVtb3ZlTm9kZShjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLnJlbW92ZSk7XHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIGkgLSByZW1vdmVkQ291bnQrKywgLTEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhJbmRleGVzIChsaXN0Tm9kZSwgc3RhcnQsIGRpZmYpIHtcclxuICBjb25zdCBpdGVtc05vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdE5vZGUuY2hpbGRyZW4sIHN0YXJ0KTtcclxuXHJcbiAgaXRlbXNOb2Rlcy5mb3JFYWNoKChpdGVtTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldklkeCA9IGl0ZW1Ob2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKTtcclxuICAgIGNvbnN0IG5ld0lkeCA9ICtwcmV2SWR4ICsgZGlmZjtcclxuXHJcbiAgICBpdGVtTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzIChiaW5kaW5nLCBhdHRyaWJ1dGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLm1hcmt1cCwgYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2xhc3NlcyAoYmluZGluZywgY2xhc3Nlcykge1xyXG4gIGZvciAobGV0IGNsYXNzTmFtZSBpbiBjbGFzc2VzKSB7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVN0eWxlcyAoYmluZGluZywgc3R5bGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbiggYmluZGluZy5tYXJrdXAuc3R5bGUsIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyAoc3R5bGVPYmopIHtcclxuICBsZXQgc3R5bGVTdHIgPSAnJztcclxuICBmb3IgKGxldCBzZWxlY3RvciBpbiBzdHlsZU9iaikge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVPYmpbc2VsZWN0b3JdO1xyXG4gICAgc3R5bGVTdHIgKz0gc2VsZWN0b3IgKyAneyc7XHJcbiAgICBub3JtYWxpemVTdHlsZXMoc3R5bGVzKVxyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbYXR0cl07XHJcbiAgICAgIHN0eWxlU3RyICs9IHRvRGFzaENhc2UoYXR0cikgKyAnOicgKyB2YWx1ZSArICc7JztcclxuICAgIH1cclxuICAgIHN0eWxlU3RyICs9ICd9XFxuJztcclxuICB9XHJcbiAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGVFbC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVTdHIpICk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVzIChzdHlsZXMpIHtcclxuICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgaWYgKGlzTnVtYmVyKHN0eWxlc1thdHRyXSkpIHtcclxuICAgICAgc3R5bGVzW2F0dHJdID0gc3R5bGVzW2F0dHJdICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN0eWxlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKGJpbmRpbmdOYW1lLCBjb21wb25lbnROYW1lLCBwYXRoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gYWNjZXNzICdcIiArIGJpbmRpbmdOYW1lICsgXCInIGJpbmRpbmcgb24gJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJyBjb21wb25lbnQgb24gcGF0aCAoXCIgKyBwYXRoLmpvaW4oJyAtPiAnKSArIFwiKSBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3QuXCJcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50UmVkZWZpbmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGV4aXN0aW5nIGNvbXBvbmVudDogJ1wiICsgbmFtZSArIFwiJ1wiO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZU5hbWVDb2xsaXNpb25FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIGFzc2lnbiBhIG5hbWUgJ1wiICsgbmFtZSArIFwiJyB0byBhIHN0YXRlIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGNoYWluLlwiO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBMSUJfTkFNRSA9ICd4JztcclxuY29uc3QgQVRUUl9QUkVGSVggPSAnZGF0YS0nO1xyXG5jb25zdCBQUkVGSVggPSBMSUJfTkFNRSArICctJztcclxuY29uc3QgVEVNUExBVEVfQklORElORyA9IFBSRUZJWCArICdiJztcclxuY29uc3QgVEVNUExBVEVfTElTVF9CSU5ESU5HID0gUFJFRklYICsgJ2xiJztcclxuY29uc3QgQklORElOR19JRCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2lkJztcclxuY29uc3QgU1RBVEVfUEFUSCA9IFBSRUZJWCArICdzcGF0aCc7XHJcbmNvbnN0IFRFTVBMQVRFX1BMQUNFTUVOVCA9IFBSRUZJWCArICdlbCc7XHJcbmNvbnN0IFNUQVRFX05BTUUgPSBQUkVGSVggKyAnc3RhdGUtbmFtZSc7XHJcbmNvbnN0IFNDT1BFX1BSRUZJWCA9ICdzJztcclxuY29uc3QgSVRFTV9JTkRFWCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2R4JztcclxuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICd0cCc7XHJcbmNvbnN0IElURU1fU1VGRklYID0gJ2knO1xyXG5jb25zdCBTVEFURV9ERUxJTUlURVIgPSAnLSc7XHJcbmNvbnN0IFNFTEYgPSAnJztcclxuY29uc3QgRlVMTF9DSEFOR0UgPSAnIF9mdWxsX2NoYW5nZV8gJztcclxuXHJcbmNvbnN0IEJBU0UgPSAnMSc7XHJcbmNvbnN0IENPTVBPTkVOVCA9ICcyJztcclxuY29uc3QgTElTVCA9ICczJztcclxuY29uc3QgSVRFTSA9ICdfaXRlbV8nO1xyXG5jb25zdCBDT01QT05FTlRfTElTVCA9ICc1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQUkVGSVgsXHJcbiAgVEVNUExBVEVfQklORElORyxcclxuICBURU1QTEFURV9MSVNUX0JJTkRJTkcsXHJcbiAgQklORElOR19JRCxcclxuICBTVEFURV9QQVRILFxyXG4gIFRFTVBMQVRFX1BMQUNFTUVOVCxcclxuICBTVEFURV9OQU1FLFxyXG4gIFNDT1BFX1BSRUZJWCxcclxuICBJVEVNX0lOREVYLFxyXG4gIENPTVBPTkVOVF9UWVBFLFxyXG4gIElURU1fU1VGRklYLFxyXG4gIFNUQVRFX0RFTElNSVRFUixcclxuICBCQVNFLFxyXG4gIENPTVBPTkVOVCxcclxuICBMSVNULFxyXG4gIElURU0sXHJcbiAgU0VMRixcclxuICBGVUxMX0NIQU5HRSxcclxuICBDT01QT05FTlRfTElTVFxyXG59O1xyXG4iLCJjb25zdCBTVFJJUF9DT01NRU5UUyA9IC8oXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLyl8KFxccyo9W14sKV0qKCgnKD86XFxcXCd8W14nXFxyXFxuXSkqJyl8KFwiKD86XFxcXFwifFteXCJcXHJcXG5dKSpcIikpfChcXHMqPVteLCldKikpL21nO1xyXG5jb25zdCBBUkdVTUVOVF9OQU1FUyA9IC8oW15cXHMsXSspL2c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgU1RSSVBfQ09NTUVOVFMsXHJcbiAgQVJHVU1FTlRfTkFNRVMsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgaXNGdW5jdGlvbixcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzT2JqZWN0SW5CcmFja2V0cyxcclxuICBpc09iamVjdEluRG91YmxlQnJhY2tldHMsXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNIVE1MU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzRE9NRWxlbWVudCxcclxuICBpc1VuZGVmaW5lZCxcclxuICBpc0VtcHR5LFxyXG4gIGlzTGluayxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3RJbkJyYWNrZXRzIChvYmopIHtcclxuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3Qob2JqWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIChvYmopIHtcclxuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3RJbkJyYWNrZXRzKG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNIVE1MU3RyaW5nIChvYmopIHtcclxuICByZXR1cm4gaXNTdHJpbmcob2JqKSAmJiBvYmouaW5kZXhPZignPCcpID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgb2JqID09PSBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRE9NRWxlbWVudCAob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCAob2JqKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmplY3RUeXBlIChvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTGluayAob2JqKSB7XHJcbiAgY29uc3Qgc2xhc2hJZHggPSBvYmouaW5kZXhPZignLycpO1xyXG4gIHJldHVybiBbMCwgMSwgMl0uc29tZSgoaWR4KSA9PiBpZHggPT09IHNsYXNoSWR4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eSAob2JqKSB7XHJcbiAgaWYgKCFvYmopIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqKSB8fCBpc1N0cmluZyhvYmopKSB7XHJcbiAgICByZXR1cm4gIW9iai5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG59XHJcbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9jaGVja2Vycyc7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vb2JqZWN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGFzLFxyXG4gIGdldEZhbHNlUGF0aHMsXHJcbiAgdG9EYXNoQ2FzZSxcclxuICB0b0NhbWVsQ2FzZSxcclxuICBnZXRTaG9ydE5hbWUsXHJcbiAgZ2V0UmVhbE5hbWUsXHJcbn07XHJcblxyXG5jb25zdCBOQU1FUyA9IHtcclxuICByZWFsOiB7fSxcclxuICBzaG9ydDogW11cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFNob3J0TmFtZSAobmFtZSkge1xyXG4gIGlmIChOQU1FUy5yZWFsW25hbWVdKSB7XHJcbiAgICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3J0TmFtZSA9IE5BTUVTLnNob3J0LnB1c2gobmFtZSk7XHJcbiAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV0gPSBzaG9ydE5hbWUgLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFsTmFtZSAobnVtKSB7XHJcbiAgcmV0dXJuIE5BTUVTLnNob3J0W251bV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhcyAob2JqLCBlbCkge1xyXG4gIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgIHJldHVybiBoYXMoa2V5cywgZWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iai5pbmRleE9mKGVsKSA+PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGhzIChvYmopIHtcclxuICBjb25zdCBvbmx5RmFsc2VQYXRocyA9IHt9O1xyXG4gIGdldEZhbHNlUGF0aChvYmosIG9ubHlGYWxzZVBhdGhzLCBbXSk7XHJcbiAgcmV0dXJuIG9ubHlGYWxzZVBhdGhzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGggKG9iaiwgb25seUZhbHNlUGF0aHMsIHBhdGgpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qob2JqW2tleV0pKSB7XHJcbiAgICAgIGdldEZhbHNlUGF0aChvYmpba2V5XSwgb25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSkpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqW2tleV0gIT09IHRydWUpIHtcclxuICAgICAgc2V0KG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpLCBvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Rhc2hDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG1hdGNoKSA9PiAnLScgKyBtYXRjaFswXS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9DYW1lbENhc2UgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvLSguKS9nLCAobWF0Y2gpID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNBcnJheSxcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xyXG5cclxuZnVuY3Rpb24gY29weSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHJldHVybiBjb3B5ICh7fSwgc291cmNlKTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuXHJcbiAgICBpZiAoaXNVbmRlZmluZWQoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvcHkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0RPTUVsZW1lbnQoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weUFycmF5IChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpc09iamVjdChzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwge307XHJcbiAgICAgIGNvcHkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KHNvdXJjZVtpXSkpIHtcclxuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCBbXTtcclxuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltpXSA9IHNvdXJjZVtpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzSFRNTFN0cmluZyxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVwbGFjZU5vZGVzLFxyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG4gIHdhbGtOb2RlcyxcclxuICByZW1vdmVOb2RlLFxyXG4gIGluc2VydEJlZm9yZU5vZGUsXHJcbiAgcmV3cml0ZVRvTm9kZSxcclxuICBlbXB0eU5vZGUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZXMgKG9yaWdpbmFsLCByZXBsYWNlbWVudCkge1xyXG4gIG9yaWdpbmFsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBvcmlnaW5hbCk7XHJcbiAgcmV0dXJuIHJlcGxhY2VtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmVOb2RlIChlbCwgbmV4dEVsKSB7XHJcbiAgbmV4dEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBuZXh0RWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZUhUTUxNYXJrdXAgKG1hcmt1cCkge1xyXG4gIGNvbnN0IG1hcmt1cFN0ciA9IGlzSFRNTFN0cmluZyhtYXJrdXAudHJpbSgpKSA/IG1hcmt1cCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWFya3VwKS5pbm5lckhUTUw7XHJcbiAgcmV0dXJuIGNvbnZlcnRTdHJpbmdUb0hUTUwobWFya3VwU3RyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFN0cmluZ1RvSFRNTCAobWFya3VwU3RyaW5nKSB7XHJcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gIGNvbnN0IHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhtYXJrdXBTdHJpbmcsICd0ZXh0L2h0bWwnKTtcclxuICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2Fsa05vZGVzIChub2RlLCBjYikge1xyXG4gIGlmICggY2Iobm9kZSkgPT09IC0xKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBBcnJheS5wcm90b3R5cGVcclxuICAgIC5zbGljZVxyXG4gICAgLmNhbGwobm9kZS5jaGlsZHJlbilcclxuICAgIC5mb3JFYWNoKChlbCkgPT4gd2Fsa05vZGVzKGVsLCBjYikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0SFRNTE5vZGVzIChyb290LCBpc1dhbnRlZCkge1xyXG4gIGNvbnN0IG5vZGVzID0gW107XHJcbiAgd2Fsa05vZGVzKHJvb3QsIChlbCkgPT4gaXNXYW50ZWQoZWwpID8gbm9kZXMucHVzaChlbCkgOiAnJyk7XHJcbiAgcmV0dXJuIG5vZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlIChub2RlKSB7XHJcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXdyaXRlVG9Ob2RlIChub2RlLCB0ZXh0KSB7XHJcbiAgZW1wdHlOb2RlKG5vZGUpO1xyXG4gIHdyaXRlVG9Ob2RlKG5vZGUsIHRleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcbiAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtcHR5Tm9kZSAobm9kZSkge1xyXG4gIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNVbmRlZmluZWQsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcmVFcXVhbDtcclxuXHJcbmZ1bmN0aW9uIGFyZUVxdWFsIChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0KSB8fCBpc1VuZGVmaW5lZChzZWNvbmQpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGZpcnN0ICE9PSB0eXBlb2Ygc2Vjb25kKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnROb2RlID0geyBjaGlsZE5vZGU6IHt9IH07XHJcblxyXG4gIGlmIChpc0FycmF5KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KFxyXG4gICAgICBmaXJzdCA/IGZpcnN0Lm1hcChlbCA9PiBlbCkgOiBbXSxcclxuICAgICAgc2Vjb25kLm1hcChlbCA9PiBlbCksXHJcbiAgICAgIHBhcmVudE5vZGVcclxuICAgICk7XHJcblxyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qoc2Vjb25kKSkge1xyXG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50Tm9kZS5jaGlsZE5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0VxdWFsaXR5IChmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHNlY29uZCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoZmlyc3Rba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyBhZGQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGZpcnN0KSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChzZWNvbmRba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyByZW1vdmU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXQsXHJcbiAgc2V0LFxyXG4gIHJlbW92ZSxcclxuICBhZGRDb25zdEZpZWxkcyxcclxuICBmb3JFYWNoLFxyXG4gIG1hcCxcclxuICBtYXBLZXlzLFxyXG4gIGZpbHRlcixcclxuICB0b09iamVjdCxcclxuICBmdWxsTWFwLFxyXG4gIHNwbGl0UGllY2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXQgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQgKG9iaiwgcGF0aCwgdmFsdWUpIHtcclxuICBpZiAoIXBhdGgubGVuZ3RoKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iaiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGRlc3QgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgaWYgKCFkZXN0WyBwYXRoW2ldIF0pIHtcclxuICAgICAgZGVzdCA9IGRlc3RbcGF0aFtpXV0gPSB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gZGVzdFsgcGF0aFtpXSBdIHx8IHt9O1xyXG4gICAgT2JqZWN0LmFzc2lnbihkZXN0WyBwYXRoW2ldIF0sIHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlIHZhbHVlW3BhdGhbaV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb25zdEZpZWxkcyAob2JqLCBmaWVsZHMpIHtcclxuICBmb3IgKGxldCBmaWVsZCBpbiBmaWVsZHMpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmllbGRzW2ZpZWxkXSB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGNvbnN0IGZpZWxkICdcIiArIGZpZWxkICsgXCInXCIpIH0sXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaCAob2JqLCBjYikge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBuZXdPYmpba2V5XSA9IGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwS2V5cyAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY29uc3QgbmV3S2V5ID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xyXG4gICAgbmV3T2JqW25ld0tleV0gPSBwcm9wO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFBpZWNlIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgICBkZWxldGUgb2JqW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxNYXAgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IHJlcyA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialsgcmVzWzBdIHx8IHJlcy5rZXkgfHwgcmVzLmsgXSA9IHJlc1sxXSB8fCByZXNbJ3ZhbHVlJ10gfHwgcmVzWyd2J107XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlciAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGlmICggY2IocHJvcCwga2V5LCBvYmopICkge1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHByb3A7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIsIHZhbCkge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICBuZXdPYmpbdl0gPSBpc0Z1bmN0aW9uKHZhbCkgPyB2YWwodikgOiB2YWw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWZpbmUgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBhcHBseSB9IGZyb20gJy4vUHJvZHVjdGlvbic7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZWZpbmUsXHJcbiAgYXBwbHksXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=