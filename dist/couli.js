(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Couli"] = factory();
	else
		root["Couli"] = factory();
})(this, function() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQ291bGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvRGVmaW5pdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvUHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9TdGF0ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJsaW5rIiwib3B0aW9uc09iaiIsInBhcmVudE9iaiIsInBhcmVudEtleSIsImNsYXNzIiwibGVuZ3RoIiwib3B0aW9uIiwidmFsdWUiLCJldmVudHMiLCJrZXkiLCJlbCIsImdldEF0dHJpYnV0ZSIsIlRFTVBMQVRFX0JJTkRJTkciLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0cmltIiwiVEVNUExBVEVfTElTVF9CSU5ESU5HIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwib2JqIiwiZ2V0Q29tcG9uZW50QnlOYW1lIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIlNUQVRFX05BTUUiLCJpbm5lckxpbmsiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJ2IiwiZm9yY2VkIiwia2V5cyIsImZvcmNlIiwiaSIsImJpbmRpbmdWYWx1ZXMiLCJnZXRWYWx1ZXNUcmVlIiwidmFsdWVzVHJlZSIsInZhbHMiLCJpdGVtVmFsdWVzIiwiY29tcG9uZW50VmFsdWVzIiwibGFzdElkeCIsIm51bSIsImVscyIsInN0YXJ0Iiwic2hpZnQiLCJtYXBMaXN0IiwiY2IiLCJpdGVyYXRlTGlzdFZhbHVlcyIsImZpbHRlciIsImZpbHRlckxpc3QiLCJuZXdMaXN0Iiwic2V0VmFsdWVzIiwiY3JlYXRlU3RhdGVOb2RlcyIsIm1vZGlmeUxpc3QiLCJzZW5kVG9SZW5kZXJRdWV1ZSIsIkNIQU5HRVMiLCJjaGFuZ2VzIiwiY29sbGVjdGluZyIsIlBST01JU0VTX1JFU09MVkVTIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImZpbmFsaXplVHJhbnNhY3Rpb24iLCJyZXNvbHZlUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2hhbmdlIiwiaXNDb2xsZWN0aW5nQ2hhbmdlcyIsImFkZExpZmVDeWNsZUhvb2siLCJob29rVHlwZSIsImhvb2siLCJ2YWx1ZXNOb2RlIiwiY3JlYXRlU3RhdGVOb2RlIiwidmFsdWVzTm9kZXMiLCJ2YWx1ZU5vZGUiLCJyZWR1Y2UiLCJhIiwiY2hhbmdlVmFsdWVzIiwiY2FsbGVkRGVwZW5kZW5jZXMiLCJGVUxMX0NIQU5HRSIsImVuZCIsInNldFZhbHVlIiwicmVzIiwiQmluZGluZ05vdEV4aXN0c0Vycm9yIiwic2V0VmFsdWVGb3JMaXN0Iiwic2V0VmFsdWVGb3JDb21wb25lbnQiLCJlcXVhbCIsImh0bWwiLCJkZXBlbmRhbnQiLCJkZXBlbmRhbnRLZXkiLCJuZXdWYWx1ZSIsImFyciIsImluZGV4RXF1YWxpdHkiLCJyZW1vdmVMaXN0SXRlbSIsImFjdGlvbiIsImxpc3RQYXRoIiwiaXRlbU5hbWUiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNwbGljZSIsImxpc3RCaW5kaW5nIiwicmVtb3ZlZERPTU5vZGUiLCJyZW1vdmVkTm9kZSIsImNyZWF0ZUFuZEFwcGVuZFN0eWxlcyIsInJlbmRlckNoYW5nZXMiLCJyZW5kZXIiLCJhcHBseU1hcmt1cCIsImFwcGx5Q2xhc3NlcyIsInN0eWxlIiwiYXBwbHlTdHlsZXMiLCJhdHRycyIsImFwcGx5QXR0cmlidXRlcyIsImNvbXBvbmVudENoYW5nZXMiLCJlbGVtZW50SWQiLCJjb21wb25lbnRJZCIsImNvbXBvbmVudEFjY2Vzc29yIiwicmVuZGVyTGlzdCIsInJlbmRlckNvbXBvbmVudCIsInVwZGF0ZUNvbXBvbmVudCIsImRyYXdDb21wb25lbnQiLCJpdGVtV3JhcHBlciIsIkNPTVBPTkVOVCIsInJlbmRlckZ1bmMiLCJyZW5kZXJUeXBlIiwiY2hpbGRTdGF0ZVBhdGgiLCJjaGlsZE1hcmt1cCIsImNvbXBvbmVudE1hcmt1cCIsImNoYW5nZVR5cGUiLCJzdGF0ZVBhdGhUb0JpbmRpbmciLCJsaXN0Q29tcG9uZW50IiwiaXRlbXNWYWx1ZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEZyYWdtZW50IiwiYnVpbGRMaXN0IiwibGlzdE5vZGUiLCJuZXh0Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsIkxJU1QiLCJDT01QT05FTlRfTElTVCIsImluc2VydEJlZm9yZSIsInJhbmdlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIml0ZW1WYWx1ZSIsIml0ZW1JbmRleCIsIm5ld0l0ZW1JbmRleCIsImxpc3RJdGVtTWFya3VwIiwiaXRlbXNDaGFuZ2VzIiwicmVtb3ZlZENvdW50IiwiaXRlbUFjY2Vzc29yIiwiZml4SW5kZXhlcyIsImRpZmYiLCJpdGVtc05vZGVzIiwicHJldklkeCIsIm5ld0lkeCIsImNsYXNzZXMiLCJub3JtYWxpemVTdHlsZXMiLCJzdHlsZU9iaiIsInN0eWxlU3RyIiwic3R5bGVFbCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsImNvbXBvbmVudE5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMSUJfTkFNRSIsIkFUVFJfUFJFRklYIiwiU1RBVEVfUEFUSCIsIlRFTVBMQVRFX1BMQUNFTUVOVCIsIlNDT1BFX1BSRUZJWCIsIklURU1fU1VGRklYIiwiaXNGdW5jdGlvbiIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzT2JqZWN0SW5CcmFja2V0cyIsImlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyIsImlzU3RyaW5nIiwiaXNIVE1MU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0RPTUVsZW1lbnQiLCJpc1VuZGVmaW5lZCIsImlzRW1wdHkiLCJpc0xpbmsiLCJnZXRPYmplY3RUeXBlIiwic2xhc2hJZHgiLCJzb21lIiwiaGFzIiwiZ2V0RmFsc2VQYXRocyIsInRvRGFzaENhc2UiLCJ0b0NhbWVsQ2FzZSIsImdldFNob3J0TmFtZSIsImdldFJlYWxOYW1lIiwiTkFNRVMiLCJyZWFsIiwic2hvcnQiLCJzaG9ydE5hbWUiLCJvbmx5RmFsc2VQYXRocyIsImdldEZhbHNlUGF0aCIsInN0ciIsInRvVXBwZXJDYXNlIiwiY29weSIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJjb3B5QXJyYXkiLCJyZXBsYWNlTm9kZXMiLCJjbG9uZUhUTUxNYXJrdXAiLCJjb2xsZWN0SFRNTE5vZGVzIiwid2Fsa05vZGVzIiwicmVtb3ZlTm9kZSIsImluc2VydEJlZm9yZU5vZGUiLCJyZXdyaXRlVG9Ob2RlIiwiZW1wdHlOb2RlIiwib3JpZ2luYWwiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VDaGlsZCIsIm5leHRFbCIsIm1hcmt1cFN0ciIsImNvbnZlcnRTdHJpbmdUb0hUTUwiLCJtYXJrdXBTdHJpbmciLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5vZGUiLCJyb290IiwiaXNXYW50ZWQiLCJub2RlcyIsInJlbW92ZUNoaWxkIiwidGV4dCIsIndyaXRlVG9Ob2RlIiwidGV4dE5vZGUiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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akIrTixXQUFPL04sQ0FBUCxJQUFZLDBCQUFXaU8sR0FBWCxJQUFrQkEsSUFBSWpPLENBQUosQ0FBbEIsR0FBMkJpTyxHQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFPRixNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmxiLDRCQURlO0FBRWZpTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3VsaVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgUkUgZnJvbSAnLi9nbG9iYWxzL3JlZ2V4cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG59IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbn0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCBDb21wb25lbnRSZWRlZmluZUVycm9yIGZyb20gJy4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3InO1xyXG5pbXBvcnQgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZnJvbSAnLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3InO1xyXG5cclxuXHJcbmNvbnN0IFZBTFVFX1RZUEVTID0gWydzdHlsZScsICdjbGFzcycsICd2YWx1ZScsICdhdHRycycsICdodG1sJ107XHJcbmNvbnN0IFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XHJcbmNvbnN0IERFRkFVTFRfSE9PS1MgPSB0b09iamVjdChSRVNFUlZFRF9IT09LU19OQU1FUywgKCkgPT4gKCkgPT4ge30pO1xyXG5jb25zdCBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgTElCX0FUVFIuU0VMRl0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZWZpbmUsXHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBzaG9ydGVuQmluZGluZ0lkLFxyXG4gIGlzQ29tcG9uZW50LFxyXG4gIFZBTFVFX1RZUEVTLFxyXG4gIFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsXHJcbn07XHJcblxyXG5sZXQgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5mdW5jdGlvbiBkZWZpbmUgKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xyXG4gIGNvbnN0IGFyZ3MgPSBpc09iamVjdChuYW1lKSA/IG5hbWUgOiB7IG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcyB9O1xyXG5cclxuICBuYW1lID0gdG9DYW1lbENhc2UoYXJncy5uYW1lKTtcclxuXHJcbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50SFRNTE1hcmt1cCA9IGNsb25lSFRNTE1hcmt1cChhcmdzLm1hcmt1cCk7XHJcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cclxuICBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbiAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IFtuYW1lXSxcclxuICAgIHN0YXRlTmFtZXM6IHt9LFxyXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcbiAgfTtcclxuXHJcbiAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplVXNlck9wdGlvbnMoYXJncy5iaW5kaW5ncywgeyBzdGF0ZToge30gfSk7XHJcbiAgY29weShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuXHJcbiAgcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyggcHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSApO1xyXG5cclxuICByZXR1cm4gQ09NUE9ORU5UU1tuYW1lXSA9IGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcclxuICB3YWxrTm9kZXMoY29tcG9uZW50SFRNTE1hcmt1cCwgKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBiaW5kaW5nT3B0cyA9IGFuYWx5emVCaW5kaW5nKEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNDb21wb25lbnQpIHtcclxuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcclxuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XHJcbiAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQsIGNvbXBvbmVudC5uYW1lICsgJy0nICsgYmluZGluZy5uYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xyXG5cclxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xyXG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoaXRlbU5vZGUsIGJpbmRpbmcubGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudCAoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IHN0YXRlTmFtZXMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lcywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQuc3RhdGVOYW1lcyk7XHJcbiAgbGV0IHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcclxuXHJcbiAgaWYgKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKSB7XHJcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWU7XHJcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBjb21wb25lbnRCaW5kaW5nLCB7XHJcbiAgICBpZDogc3RhdGVJZCxcclxuICAgIHN0YXRlSWQsXHJcbiAgICBuYW1lOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVOYW1lOiBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxyXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBzdGF0ZU5hbWVzLFxyXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcclxuICAgIG91dGVyTmFtZXM6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMucmV2TGlua3MpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLlNFTEYgKSk7XHJcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcclxuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZU5hbWVzID0gcGFyZW50Q29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkNvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcclxuICAgIGNvbnN0IG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XHJcbiAgICBjb25zdCBzaG9ydElkID0gc2hvcnRlbkJpbmRpbmdJZChuZXdCaW5kaW5nSWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcclxuICAgICAgaG9va3M6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSE9PS1MsIGJpbmRpbmcuaG9va3MpLFxyXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxyXG4gICAgICBzaG9ydElkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICAgICAgcHJlcGFyZUJpbmRpbmdzIChiaW5kaW5nLmxpc3RJdGVtLCBuZXdCaW5kaW5nSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5JVEVNICsgYmluZGluZy5saXN0SXRlbS5uYW1lLCBiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpO1xyXG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBzdWJDb21wb25lbnRzLmZvckVhY2goKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgcHJlcGFyZUJpbmRpbmdzIChzdWJDb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgc3ViQ29tcG9uZW50LnN0YXRlSWQsIGNvbXBvbmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzIChiaW5kaW5nLCBjb21wb25lbnREYXRhKSB7XHJcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVhY3RpdmVGdW5jID0gYmluZGluZ1t0eXBlXTtcclxuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMgKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSkge1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcclxuXHJcbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUpID0+IHtcclxuICAgIGlmIChpc0VtcHR5KGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xyXG4gICAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSA9IGNyZWF0ZUJpbmRpbmcoZGVwZW5kZW5jeU5hbWUsIGNvbXBvbmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdLmRlcGVuZGFudHNbIGJpbmRpbmcubmFtZSArICc6JyArIHR5cGUgXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpID0+IGNvbXB1dGUgKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XHJcbiAgY29uc3QgdmFsdWVzT2JqUmVnRXhwID0gIG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcclxuICBjb25zdCBmdW5jU3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gIGxldCBkZXBlbmRlbmN5TmFtZTtcclxuICB3aGlsZSAoKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrKSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKG5hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKChlbGVtZW50TmFtZSA9IGdldFJlYWxOYW1lKCBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCkgKSkpIHtcclxuXHJcbiAgICBpZiAoaGFzKGVsZW1lbnROYW1lLCBMSUJfQVRUUi5JVEVNKSkge1xyXG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKExJQl9BVFRSLklURU0ubGVuZ3RoKTtcclxuICAgICAgZWwgPSBnZXRUb0l0ZW1Ob2RlKGVsKTtcclxuICAgICAgY29uc3QgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVQYXRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlIChlbCkge1xyXG4gIGxldCBjdXJFbCA9IGVsO1xyXG5cclxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpKSB7XHJcbiAgICAgIHJldHVybiBjdXJFbDtcclxuICAgIH1cclxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIGlzQ29tcG9uZW50LFxyXG59IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZXR1cEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5leHBvcnQgeyBhcHBseSB9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChyb290RWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50U2VsZWN0b3IpO1xyXG4gIGNvbnN0IEhUTUxOb2RlcyA9IGNvbGxlY3RIVE1MTm9kZXMocm9vdEVsZW1lbnQsIGlzQ29tcG9uZW50KTtcclxuXHJcbiAgSFRNTE5vZGVzLmZvckVhY2goKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRPcHRzID0gZ2V0Q29tcG9uZW50T3B0cyhIVE1MTm9kZSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG5cclxuICAgIHJlcGxhY2VOb2RlcyhIVE1MTm9kZSwgZWxlbWVudC5lbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG4gIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBzZXQsIGZvckVhY2gsIG1hcCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBSRVNFUlZFRF9CSU5ESU5HX05BTUVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBzZXRWYWx1ZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc1N0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIHNldFN0YXRlLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbn07XHJcblxyXG5jb25zdCBFTEVNRU5UUyA9IHt9O1xyXG5jb25zdCBTVEFURSA9IHt9O1xyXG5sZXQgRUxFTUVOVF9DT1VOVEVSID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRlIChwYXRoLCB2YWx1ZSkge1xyXG4gIHNldChTVEFURSwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSAocGF0aCkge1xyXG4gIHJldHVybiBnZXQoU1RBVEUsIHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgaWQgPSBFTEVNRU5UX0NPVU5URVIrKztcclxuICBjb25zdCBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xyXG4gICAgaWQsXHJcbiAgICBzdGF0ZTogeyBbbmFtZV06IGNvbXBvbmVudE9wdHMuY29tcG9uZW50IH0sXHJcbiAgfTtcclxuXHJcbiAgU1RBVEVbaWRdID0ge307XHJcblxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMoW2lkLCBuYW1lXSk7XHJcblxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlKFtpZF0sIHsgW25hbWVdOiBmYWxzZSB9KTtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5CQVNFKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yIChwYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhbHVlcyxcclxuICAgIHBhdGgsXHJcbiAgICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gICAgYXBwbHlDaGFuZ2VzLFxyXG4gICAgdXA6IChsZXZlbCkgPT4gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBwYXRoLnNsaWNlKCkpLFxyXG4gICAgZG93bjogKGFkZGl0aW9uYWxQYXRoKSA9PiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpLFxyXG4gICAgc2V0OiAoY2hhbmdlT2JqKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCksXHJcbiAgICBnZXQ6IChrZXkpID0+IGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBwYXRoKSxcclxuICAgIG1hcmt1cDogKGtleSkgPT4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwsXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0IChjaGFuZ2VPYmopIHtcclxuICByZXR1cm4gbWFwKGNoYW5nZU9iaiwgKHYpID0+IHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGlzT2JqZWN0KHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgZm9yY2U6IGZvcmNlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCAocGF0aCkge1xyXG4gIGxldCBjb21wb25lbnQgPSBFTEVNRU5UU1sgcGF0aFswXSBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVsgcGF0aFtpXSBdO1xyXG4gICAgXHJcbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSAocGF0aC5sZW5ndGggLTEpKSB7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcclxuICAgICAgaSs9MjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMgKG9iaikge1xyXG4gIHJldHVybiBtYXAob2JqLCAoYmluZGluZ1ZhbHVlcykgPT4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlcyAoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2tleV07XHJcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlICh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xyXG4gIGZvckVhY2godmFsdWVzLCAodmFscywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChoYXMoUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcclxuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xyXG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRWYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IHt9O1xyXG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzVHJlZVsgY29tcG9uZW50Ll9saW5rc1tiaW5kaW5nTmFtZV0gfHwgYmluZGluZ05hbWUgXSA9IHZhbHMudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGggKGxldmVsLCBzdGF0ZVBhdGgpIHtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBQUk9NSVNFU19SRVNPTFZFUyA9IFtdO1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcmV0dXJuIHJ1bkxpZmVDeWNsZUhvb2tzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1bkxpZmVDeWNsZUhvb2tzICgpIHtcclxuICBjb25zdCBsaWZlQ3ljbGVIYW5kbGVycyA9IExJRkVfQ1lDTEVfSEFORExFUlMubGlzdDtcclxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QgPSBbXTtcclxuICBsaWZlQ3ljbGVIYW5kbGVycy5mb3JFYWNoKChoKSA9PiBoKCkpO1xyXG5cclxuICBpZiAoIWlzRW1wdHkoQ0hBTkdFUy5jaGFuZ2VzKSkge1xyXG4gICAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZpbmFsaXplVHJhbnNhY3Rpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxpemVUcmFuc2FjdGlvbiAoKSB7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XHJcbiAgbGV0IHJlc29sdmVQcm9taXNlO1xyXG5cclxuICB3aGlsZSAoKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpKSB7XHJcbiAgICByZXNvbHZlUHJvbWlzZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlIChwYXRoLCBjaGFuZ2UpIHtcclxuICBzZXQoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzICgpIHtcclxuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rIChob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XHJcbiAgY29uc3QgaG9vayA9IGJpbmRpbmcuaG9va3NbaG9va1R5cGVdO1xyXG4gIFxyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVOb2RlID0gYmluZGluZy5pc0xpc3QgPyBbXSA6IHt9O1xyXG5cclxuICAgIHJldHVybiBWQUxVRV9UWVBFUy5yZWR1Y2UoKGEsIGtleSkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJydcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sIHZhbHVlTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCB7IFtMSUJfQVRUUi5TRUxGXTogdG9PYmplY3QoVkFMVUVfVFlQRVMsIHt9KSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVzIChjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuXHJcbiAgaWYgKCFhY2Nlc3Nvci52YWx1ZXMpIHtcclxuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gK3N0YXRlUGF0aC5zbGljZSgtMilbMF07XHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyAxIH0gfSB9KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VWYWx1ZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpKTtcclxuXHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMpID0+IFBST01JU0VTX1JFU09MVkVTLnB1c2gocmVzKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlIChiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgbGV0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xyXG4gICAgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgfVxyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIHRocm93IG5ldyBCaW5kaW5nTm90RXhpc3RzRXJyb3IoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3QoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVxdWFsID0gYXJlRXF1YWwodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XHJcblxyXG4gIGlmICghZXF1YWwgfHwgIWlzRW1wdHkoZXF1YWwpIHx8IGNoYW5nZS5mb3JjZSkge1xyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlICE9PSAndmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgeyBbY2hhbmdlLnR5cGVdOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcclxuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbXBvbmVudC5saW5rc1tiaW5kaW5nTmFtZV07XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goYmluZGluZy5kZXBlbmRhbnRzLCAoZGVwZW5kYW50LCBkZXBlbmRhbnRLZXkpID0+IHtcclxuICAgICAgaWYgKGhhcyhjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcclxuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QgKGJpbmRpbmcsIGNoYW5nZSwgYXJyLCBhY2Nlc3Nvcikge1xyXG4gIE9iamVjdFxyXG4gICAgLmtleXMoY2hhbmdlLnZhbHVlKVxyXG4gICAgLmZvckVhY2goKGkpID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpKTtcclxuXHJcbiAgY29uc3QgaW5kZXhFcXVhbGl0eSA9IGFyZUVxdWFsKGFyciwgY2hhbmdlLnZhbHVlKTtcclxuICBmb3JFYWNoKGluZGV4RXF1YWxpdHksIChjaGFuZ2VPYmosIGlkeCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZU9iai5yZW1vdmUpIHtcclxuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpZHgsIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSksIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogY2hhbmdlT2JqIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckNvbXBvbmVudCAoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCkge1xyXG4gIHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWUpLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmcubmFtZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChhY3Rpb24sIGFyZ3MsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgYXJyID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGxpc3RQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IHN0YXJ0ID0gYXJncy5zdGFydDtcclxuICBsZXQgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlICdhZGQnOlxyXG4gICAgICBjaGFuZ2VPYmogPSBhZGRUb0xpc3QoYXJyLCBzdGFydCwgYXJncy5lbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgKGFyZ3MubnVtIHx8IDEpO1xyXG4gICAgICBjaGFuZ2VPYmogPSByZW1vdmVGcm9tTGlzdChhcnIsIHN0YXJ0LCBlbmQsIGFjY2Vzc29yLmNvbXBvbmVudCwgYWNjZXNzb3IpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlT2JqLCAoY2hhbmdlLCBpZHgpID0+IHNlbmRUb1JlbmRlclF1ZXVlKGxpc3RQYXRoLmNvbmNhdChpZHgsIGl0ZW1OYW1lLCBMSUJfQVRUUi5GVUxMX0NIQU5HRSksIGNoYW5nZU9ialtpZHhdW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkpO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9MaXN0IChhcnIsIHN0YXJ0LCBlbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSkge1xyXG4gIGVscyA9IGlzQXJyYXkoZWxzKSA/IGVscyA6IFtlbHNdO1xyXG5cclxuICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGFyci5zcGxpY2UoaSArIHN0YXJ0LCAwLCBudWxsKTtcclxuICAgIHNldFZhbHVlcyhwcmVwYXJlQ2hhbmdlT2JqZWN0KGVsKSwgbGlzdFBhdGguY29uY2F0KGkgKyBzdGFydCwgaXRlbU5hbWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgW3N0YXJ0XTogeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIGVscy5sZW5ndGggfSB9IH0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QgKGFyciwgc3RhcnQsIGVuZCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICBjb25zdCByZW1vdmVkRE9NTm9kZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaSwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIGNoYW5nZU9ialtpXSA9IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyByZW1vdmU6IHJlbW92ZWRET01Ob2RlIH0gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoYW5nZU9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTGlzdEl0ZW0gKGFyciwgaWR4LCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCByZW1vdmVkTm9kZSA9IGFyci5zcGxpY2UoaWR4LCAxKVswXVtsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lXTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdyZW1vdmUnLCBsaXN0QmluZGluZy5saXN0SXRlbS5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgcmVtb3ZlZE5vZGUsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIHJldHVybiByZW1vdmVkTm9kZVtMSUJfQVRUUi5TRUxGXS5lbDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgeyB0b0Rhc2hDYXNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcbmltcG9ydCB7IGZvckVhY2gsIHNwbGl0UGllY2UgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBY2Nlc3NvciB9IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG4gIHJlbmRlckNoYW5nZXNcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9IHtcclxuICBodG1sOiBhcHBseU1hcmt1cCxcclxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxyXG4gIHN0eWxlOiBhcHBseVN0eWxlcyxcclxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzIChjaGFuZ2VzKSB7XHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdXHJcbiAgICBjb25zdCBjb21wb25lbnRBY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XHJcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TWFya3VwIChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5tYXJrdXApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xyXG5cclxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBjb21wb25lbnQubWFya3VwLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXdyaXRlVG9Ob2RlKGNvbXBvbmVudC5tYXJrdXAsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRyYXdDb21wb25lbnQodmFsdWUsIHN0YXRlUGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb21wb25lbnQgKHZhbHVlcywgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpdGVtTWFya3VwID0gY29tcG9uZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwgPSBpdGVtTWFya3VwO1xyXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1NYXJrdXApO1xyXG5cclxuICBpdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgKGNvbXBvbmVudC5pc0xpc3RJdGVtKSA/IExJQl9BVFRSLklURU0gOiBMSUJfQVRUUi5DT01QT05FTlQpO1xyXG5cclxuICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgIGlmIChjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pIHtcclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogaXRlbU1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoIWJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGl0ZW1XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcbiAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkU3RhdGVQYXRoID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkTWFya3VwID0gZHJhd0NvbXBvbmVudCh2YWx1ZXNbYmluZGluZ05hbWVdLCBjaGlsZFN0YXRlUGF0aCk7XHJcbiAgICAgIHJlcGxhY2VOb2RlcyhiaW5kaW5nTm9kZSwgY2hpbGRNYXJrdXApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5lbCA9IGJpbmRpbmdOb2RlO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZW5kZXJMaXN0KGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgICBpZiAocmVuZGVyVHlwZSA9PT0gJ2h0bWwnICYmIGJpbmRpbmcuaHRtbCA9PT0gbnVsbCB8fCBiaW5kaW5nLm1hcmt1cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogYmluZGluZ05vZGUgfSwgdmFsdWVzW2JpbmRpbmdOYW1lXVtyZW5kZXJUeXBlXSwgc3RhdGVQYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaXRlbVdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudE1hcmt1cCA9IHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbDtcclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG5cclxuICAgIGlmIChiaW5kaW5nTmFtZSA9PT0gTElCX0FUVFIuU0VMRikge1xyXG5cclxuICAgICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGNvbXBvbmVudE1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bY2hhbmdlVHlwZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvQmluZGluZyA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50IHx8IGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIGFwcGx5TWFya3VwKGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aFRvQmluZGluZywgY2hhbmdlc1tiaW5kaW5nTmFtZV0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZ05hbWVdLmVsXHJcblxyXG4gICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZVR5cGVdO1xyXG4gICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGVsIH0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoKTtcclxuXHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBwYXJlbnROb2RlID0gbGlzdE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zdCBuZXh0Tm9kZSA9IGxpc3ROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICByZW1vdmVOb2RlKGxpc3ROb2RlKTtcclxuXHJcbiAgY29uc3QgaXNDb21wb25lbnQgPSBsaXN0Tm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUpO1xyXG4gIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuTElTVCk7XHJcbiAgaWYgKGlzQ29tcG9uZW50KSB7XHJcbiAgICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkNPTVBPTkVOVF9MSVNUKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Tm9kZShsaXN0Tm9kZSk7XHJcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuXHJcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlzdE5vZGUsIG5leHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCByYW5nZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gcmFuZ2UgPyByYW5nZS5zdGFydCA6IDA7XHJcbiAgY29uc3QgZW5kID0gcmFuZ2UgPyByYW5nZS5lbmQgOiAoaXRlbXNWYWx1ZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBpdGVtc1ZhbHVlc1xyXG4gICAgLnNsaWNlKHN0YXJ0LCBlbmQpXHJcbiAgICAuZm9yRWFjaCgoaXRlbVZhbHVlLCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbUluZGV4ID0gK3N0YXJ0ICsgaXRlbUluZGV4O1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KFtuZXdJdGVtSW5kZXgsIGxpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0pO1xyXG4gICAgICBjb25zdCBsaXN0SXRlbU1hcmt1cCA9IGRyYXdDb21wb25lbnQoaXRlbVZhbHVlW2xpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgICBsaXN0SXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SXRlbUluZGV4KTtcclxuXHJcbiAgICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbU1hcmt1cCk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3RGcmFnbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdCAobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBpdGVtc0NoYW5nZXMgPSBzcGxpdFBpZWNlKGNoYW5nZXMsICh2LCBrKSA9PiBpc051bWJlcigraykpO1xyXG4gIGxldCByZW1vdmVkQ291bnQgPSAwO1xyXG4gIGxldCBlbmQgPSAwO1xyXG5cclxuICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpIHtcclxuICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogbGlzdE5vZGUgfSwgaXRlbXNWYWx1ZXNbY2hhbmdlVHlwZV0pO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChpdGVtc0NoYW5nZXMsIChjaGFuZ2UsIGkpID0+IHtcclxuICAgIGNoYW5nZSA9IGNoYW5nZVtpdGVtTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KGksIGl0ZW1OYW1lKTtcclxuICAgIGNvbnN0IGl0ZW1BY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdKSB7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudChpdGVtQWNjZXNzb3IuY29tcG9uZW50LCBpdGVtc1ZhbHVlc1tpXVtpdGVtTmFtZV0sIHN0YXRlUGF0aFRvSXRlbSwgY2hhbmdlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZCAmJiBpID49IGVuZCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLnN0YXJ0O1xyXG4gICAgICBlbmQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5lbmQ7XHJcblxyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBzdGFydCwgZW5kIC0gc3RhcnQpO1xyXG4gICAgICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcclxuXHJcbiAgICAgIGlmIChlbmQgPT09IGl0ZW1zVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0Tm9kZS5pbnNlcnRCZWZvcmUobGlzdEZyYWdtZW50LCBsaXN0Tm9kZS5jaGlsZHJlbltzdGFydF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKSB7XHJcbiAgICAgIHJlbW92ZU5vZGUoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpO1xyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBpIC0gcmVtb3ZlZENvdW50KyssIC0xKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZml4SW5kZXhlcyAobGlzdE5vZGUsIHN0YXJ0LCBkaWZmKSB7XHJcbiAgY29uc3QgaXRlbXNOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3ROb2RlLmNoaWxkcmVuLCBzdGFydCk7XHJcblxyXG4gIGl0ZW1zTm9kZXMuZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcclxuICAgIGNvbnN0IHByZXZJZHggPSBpdGVtTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICBjb25zdCBuZXdJZHggPSArcHJldklkeCArIGRpZmY7XHJcblxyXG4gICAgaXRlbU5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0lkeCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyAoYmluZGluZywgYXR0cmlidXRlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oYmluZGluZy5tYXJrdXAsIGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsYXNzZXMgKGJpbmRpbmcsIGNsYXNzZXMpIHtcclxuICBmb3IgKGxldCBjbGFzc05hbWUgaW4gY2xhc3Nlcykge1xyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICBpZiAoY2xhc3Nlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTdHlsZXMgKGJpbmRpbmcsIHN0eWxlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oIGJpbmRpbmcubWFya3VwLnN0eWxlLCBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTdHlsZXMgKHN0eWxlT2JqKSB7XHJcbiAgbGV0IHN0eWxlU3RyID0gJyc7XHJcbiAgZm9yIChsZXQgc2VsZWN0b3IgaW4gc3R5bGVPYmopIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlT2JqW3NlbGVjdG9yXTtcclxuICAgIHN0eWxlU3RyICs9IHNlbGVjdG9yICsgJ3snO1xyXG4gICAgbm9ybWFsaXplU3R5bGVzKHN0eWxlcylcclxuICAgIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2F0dHJdO1xyXG4gICAgICBzdHlsZVN0ciArPSB0b0Rhc2hDYXNlKGF0dHIpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICB9XHJcbiAgICBzdHlsZVN0ciArPSAnfVxcbic7XHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlcyAoc3R5bGVzKSB7XHJcbiAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgIGlmIChpc051bWJlcihzdHlsZXNbYXR0cl0pKSB7XHJcbiAgICAgIHN0eWxlc1thdHRyXSA9IHN0eWxlc1thdHRyXSArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHlsZXM7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGluZ05vdEV4aXN0c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChiaW5kaW5nTmFtZSwgY29tcG9uZW50TmFtZSwgcGF0aCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBiaW5kaW5nIG9uICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IG9uIHBhdGggKFwiICsgcGF0aC5qb2luKCcgLT4gJykgKyBcIikgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZWRlZmluZSBleGlzdGluZyBjb21wb25lbnQ6ICdcIiArIG5hbWUgKyBcIidcIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byBhc3NpZ24gYSBuYW1lICdcIiArIG5hbWUgKyBcIicgdG8gYSBzdGF0ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjaGFpbi5cIjtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgTElCX05BTUUgPSAneCc7XHJcbmNvbnN0IEFUVFJfUFJFRklYID0gJ2RhdGEtJztcclxuY29uc3QgUFJFRklYID0gTElCX05BTUUgKyAnLSc7XHJcbmNvbnN0IFRFTVBMQVRFX0JJTkRJTkcgPSBQUkVGSVggKyAnYic7XHJcbmNvbnN0IFRFTVBMQVRFX0xJU1RfQklORElORyA9IFBSRUZJWCArICdsYic7XHJcbmNvbnN0IEJJTkRJTkdfSUQgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdpZCc7XHJcbmNvbnN0IFNUQVRFX1BBVEggPSBQUkVGSVggKyAnc3BhdGgnO1xyXG5jb25zdCBURU1QTEFURV9QTEFDRU1FTlQgPSBQUkVGSVggKyAnZWwnO1xyXG5jb25zdCBTVEFURV9OQU1FID0gUFJFRklYICsgJ3N0YXRlLW5hbWUnO1xyXG5jb25zdCBTQ09QRV9QUkVGSVggPSAncyc7XHJcbmNvbnN0IElURU1fSU5ERVggPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdkeCc7XHJcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAndHAnO1xyXG5jb25zdCBJVEVNX1NVRkZJWCA9ICdpJztcclxuY29uc3QgU1RBVEVfREVMSU1JVEVSID0gJy0nO1xyXG5jb25zdCBTRUxGID0gJyc7XHJcbmNvbnN0IEZVTExfQ0hBTkdFID0gJyBfZnVsbF9jaGFuZ2VfICc7XHJcblxyXG5jb25zdCBCQVNFID0gJzEnO1xyXG5jb25zdCBDT01QT05FTlQgPSAnMic7XHJcbmNvbnN0IExJU1QgPSAnMyc7XHJcbmNvbnN0IElURU0gPSAnX2l0ZW1fJztcclxuY29uc3QgQ09NUE9ORU5UX0xJU1QgPSAnNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUFJFRklYLFxyXG4gIFRFTVBMQVRFX0JJTkRJTkcsXHJcbiAgVEVNUExBVEVfTElTVF9CSU5ESU5HLFxyXG4gIEJJTkRJTkdfSUQsXHJcbiAgU1RBVEVfUEFUSCxcclxuICBURU1QTEFURV9QTEFDRU1FTlQsXHJcbiAgU1RBVEVfTkFNRSxcclxuICBTQ09QRV9QUkVGSVgsXHJcbiAgSVRFTV9JTkRFWCxcclxuICBDT01QT05FTlRfVFlQRSxcclxuICBJVEVNX1NVRkZJWCxcclxuICBTVEFURV9ERUxJTUlURVIsXHJcbiAgQkFTRSxcclxuICBDT01QT05FTlQsXHJcbiAgTElTVCxcclxuICBJVEVNLFxyXG4gIFNFTEYsXHJcbiAgRlVMTF9DSEFOR0UsXHJcbiAgQ09NUE9ORU5UX0xJU1RcclxufTtcclxuIiwiY29uc3QgU1RSSVBfQ09NTUVOVFMgPSAvKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pfChcXHMqPVteLCldKigoJyg/OlxcXFwnfFteJ1xcclxcbl0pKicpfChcIig/OlxcXFxcInxbXlwiXFxyXFxuXSkqXCIpKXwoXFxzKj1bXiwpXSopKS9tZztcclxuY29uc3QgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNUUklQX0NPTU1FTlRTLFxyXG4gIEFSR1VNRU5UX05BTUVTLFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc09iamVjdEluQnJhY2tldHMsXHJcbiAgaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNFbXB0eSxcclxuICBpc0xpbmssXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQgKG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQgKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xpbmsgKG9iaikge1xyXG4gIGNvbnN0IHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcclxuICByZXR1cm4gWzAsIDEsIDJdLnNvbWUoKGlkeCkgPT4gaWR4ID09PSBzbGFzaElkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSkge1xyXG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxufVxyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL29iamVjdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhcyxcclxuICBnZXRGYWxzZVBhdGhzLFxyXG4gIHRvRGFzaENhc2UsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG4gIGdldFJlYWxOYW1lLFxyXG59O1xyXG5cclxuY29uc3QgTkFNRVMgPSB7XHJcbiAgcmVhbDoge30sXHJcbiAgc2hvcnQ6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydE5hbWUgKG5hbWUpIHtcclxuICBpZiAoTkFNRVMucmVhbFtuYW1lXSkge1xyXG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xyXG4gIHJldHVybiBOQU1FUy5yZWFsW25hbWVdID0gc2hvcnROYW1lIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhbE5hbWUgKG51bSkge1xyXG4gIHJldHVybiBOQU1FUy5zaG9ydFtudW1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKG9iaiwgZWwpIHtcclxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gaGFzKGtleXMsIGVsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmouaW5kZXhPZihlbCkgPj0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRocyAob2JqKSB7XHJcbiAgY29uc3Qgb25seUZhbHNlUGF0aHMgPSB7fTtcclxuICBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgW10pO1xyXG4gIHJldHVybiBvbmx5RmFsc2VQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRoIChvYmosIG9ubHlGYWxzZVBhdGhzLCBwYXRoKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xyXG4gICAgICBnZXRGYWxzZVBhdGgob2JqW2tleV0sIG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9ialtrZXldICE9PSB0cnVlKSB7XHJcbiAgICAgIHNldChvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSwgb2JqW2tleV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9EYXNoQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCkgPT4gJy0nICsgbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLy0oLikvZywgKG1hdGNoKSA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29weTtcclxuXHJcbmZ1bmN0aW9uIGNvcHkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29weSAoe30sIHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XHJcblxyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNET01FbGVtZW50KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IHt9O1xyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwgW107XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25baV0gPSBzb3VyY2VbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0hUTUxTdHJpbmcsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICBpbnNlcnRCZWZvcmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzIChvcmlnaW5hbCwgcmVwbGFjZW1lbnQpIHtcclxuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xyXG4gIHJldHVybiByZXBsYWNlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZSAoZWwsIG5leHRFbCkge1xyXG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwIChtYXJrdXApIHtcclxuICBjb25zdCBtYXJrdXBTdHIgPSBpc0hUTUxTdHJpbmcobWFya3VwLnRyaW0oKSkgPyBtYXJrdXAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcmt1cCkuaW5uZXJIVE1MO1xyXG4gIHJldHVybiBjb252ZXJ0U3RyaW5nVG9IVE1MKG1hcmt1cFN0cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdUb0hUTUwgKG1hcmt1cFN0cmluZykge1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICBjb25zdCBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFya3VwU3RyaW5nLCAndGV4dC9odG1sJyk7XHJcbiAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhbGtOb2RlcyAobm9kZSwgY2IpIHtcclxuICBpZiAoIGNiKG5vZGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQXJyYXkucHJvdG90eXBlXHJcbiAgICAuc2xpY2VcclxuICAgIC5jYWxsKG5vZGUuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaCgoZWwpID0+IHdhbGtOb2RlcyhlbCwgY2IpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2RlcyAocm9vdCwgaXNXYW50ZWQpIHtcclxuICBjb25zdCBub2RlcyA9IFtdO1xyXG4gIHdhbGtOb2Rlcyhyb290LCAoZWwpID0+IGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJycpO1xyXG4gIHJldHVybiBub2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGVtcHR5Tm9kZShub2RlKTtcclxuICB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gIG5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eU5vZGUgKG5vZGUpIHtcclxuICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJlRXF1YWw7XHJcblxyXG5mdW5jdGlvbiBhcmVFcXVhbCAoZmlyc3QsIHNlY29uZCkge1xyXG4gIGlmIChpc1VuZGVmaW5lZChmaXJzdCkgfHwgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBmaXJzdCAhPT0gdHlwZW9mIHNlY29uZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IHsgY2hpbGROb2RlOiB7fSB9O1xyXG5cclxuICBpZiAoaXNBcnJheShzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShcclxuICAgICAgZmlyc3QgPyBmaXJzdC5tYXAoZWwgPT4gZWwpIDogW10sXHJcbiAgICAgIHNlY29uZC5tYXAoZWwgPT4gZWwpLFxyXG4gICAgICBwYXJlbnROb2RlXHJcbiAgICApO1xyXG5cclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGUuY2hpbGROb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0tleXNFcXVhbGl0eSAoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzZWNvbmQpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0W2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgYWRkOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBmaXJzdCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoc2Vjb25kW2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgcmVtb3ZlOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbixcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICByZW1vdmUsXHJcbiAgYWRkQ29uc3RGaWVsZHMsXHJcbiAgZm9yRWFjaCxcclxuICBtYXAsXHJcbiAgbWFwS2V5cyxcclxuICBmaWx0ZXIsXHJcbiAgdG9PYmplY3QsXHJcbiAgZnVsbE1hcCxcclxuICBzcGxpdFBpZWNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0IChvYmosIHBhdGgsIHZhbHVlKSB7XHJcbiAgaWYgKCFwYXRoLmxlbmd0aCkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkZXN0ID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGlmICghZGVzdFsgcGF0aFtpXSBdKSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IGRlc3RbIHBhdGhbaV0gXSB8fCB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVzdFsgcGF0aFtpXSBdLCB2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlIChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB2YWx1ZVtwYXRoW2ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29uc3RGaWVsZHMgKG9iaiwgZmllbGRzKSB7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZCwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpZWxkc1tmaWVsZF0gfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byByZWRlZmluZSBjb25zdCBmaWVsZCAnXCIgKyBmaWVsZCArIFwiJ1wiKSB9LFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgY2IpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgbmV3T2JqW2tleV0gPSBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEtleXMgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IG5ld0tleSA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialtuZXdLZXldID0gcHJvcDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRQaWVjZSAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsTWFwIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCByZXMgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbIHJlc1swXSB8fCByZXMua2V5IHx8IHJlcy5rIF0gPSByZXNbMV0gfHwgcmVzWyd2YWx1ZSddIHx8IHJlc1sndiddO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyLCB2YWwpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBhcnIuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgbmV3T2JqW3ZdID0gaXNGdW5jdGlvbih2YWwpID8gdmFsKHYpIDogdmFsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuaW1wb3J0IHsgYXBwbHkgfSBmcm9tICcuL1Byb2R1Y3Rpb24nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGVmaW5lLFxyXG4gIGFwcGx5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9