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
  Object.assign(parentComponent.links, (0, _object.map)(component.outerNames, function (k, v) {
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
  var component = COMPONENTS[(0, _common.toCamelCase)(name)];

  if (!component) {
    throw new ComponentNotExistsError(name);
  }

  return component;
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
  };
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

var _StateAccessError = __webpack_require__(/*! ./errors/StateAccessError */ "./src/errors/StateAccessError.js");

var _StateAccessError2 = _interopRequireDefault(_StateAccessError);

var _StateLookupError = __webpack_require__(/*! ./errors/StateLookupError */ "./src/errors/StateLookupError.js");

var _StateLookupError2 = _interopRequireDefault(_StateLookupError);

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
  var newStatePath = void 0;
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
var LIFE_CYCLE_HANDLERS = { list: [] };

function startTransaction() {
  applyChanges();
  CHANGES.collecting = true;
}

function applyChanges() {
  var changes = CHANGES.changes;
  CHANGES.changes = {};
  (0, _View.renderChanges)(changes);
  runLifeCycleHooks();
}

function runLifeCycleHooks() {
  var lifeCycleHandlers = LIFE_CYCLE_HANDLERS.list;
  LIFE_CYCLE_HANDLERS.list = [];
  lifeCycleHandlers.forEach(function (h) {
    return h();
  });

  if (!(0, _checkers.isEmpty)(CHANGES.changes)) {
    applyChanges();
  }

  CHANGES.collecting = false;
}

function sendToRenderQueue(path, change) {
  (0, _object.set)(CHANGES.changes, path, change);
}

function isCollectingChanges() {
  return CHANGES.collecting;
}

function addLifeCycleHook(hookType, binding, values, accessor, idx) {
  var hook = binding.hooks[hookType];
  var statePath = accessor.path;
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
  var valuesNodes = (0, _object.map)(component.state, function (binding, bindingName) {
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
    return;
  }

  applyChanges();
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
    return;
  }

  applyChanges();
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

  component.markup.innerHTML = value;

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
  var itemAccessor = (0, _State.createAccessor)(statePath);
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

  listNode.innerHTML = '';
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

/***/ "./src/errors/ComponentNotExistsError.js":
/*!***********************************************!*\
  !*** ./src/errors/ComponentNotExistsError.js ***!
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

var ComponentNotExistsError = function (_Error) {
  _inherits(ComponentNotExistsError, _Error);

  function ComponentNotExistsError(name) {
    _classCallCheck(this, ComponentNotExistsError);

    var _this = _possibleConstructorReturn(this, (ComponentNotExistsError.__proto__ || Object.getPrototypeOf(ComponentNotExistsError)).call(this));

    _this.message = "Trying to retrieve component by name '" + name + "' that doesn't exist.";
    return _this;
  }

  return ComponentNotExistsError;
}(Error);

exports.default = ComponentNotExistsError;

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

/***/ "./src/errors/StateAccessError.js":
/*!****************************************!*\
  !*** ./src/errors/StateAccessError.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateAccessError = function (_Error) {
  _inherits(StateAccessError, _Error);

  function StateAccessError(path) {
    _classCallCheck(this, StateAccessError);

    var _this = _possibleConstructorReturn(this, (StateAccessError.__proto__ || Object.getPrototypeOf(StateAccessError)).call(this));

    _this.message = "Unable to access state on a path '" + path.join(' -> ') + "' because it doesn't exist";
    return _this;
  }

  return StateAccessError;
}(Error);

exports.default = StateAccessError;

/***/ }),

/***/ "./src/errors/StateLookupError.js":
/*!****************************************!*\
  !*** ./src/errors/StateLookupError.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkers = __webpack_require__(/*! ../helpers/checkers */ "./src/helpers/checkers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateLookupError = function (_Error) {
  _inherits(StateLookupError, _Error);

  function StateLookupError(level) {
    _classCallCheck(this, StateLookupError);

    var _this = _possibleConstructorReturn(this, (StateLookupError.__proto__ || Object.getPrototypeOf(StateLookupError)).call(this));

    var additionalInfo = void 0;
    if ((0, _checkers.isNumber)(level)) {
      additionalInfo = level + " exceeds number of states in the chain.";
    } else {
      additionalInfo = "'" + level + "' user statename doesn't exist.";
    }

    _this.message = "Unable to reach to the '" + level + "' state level. " + additionalInfo;
    return _this;
  }

  return StateLookupError;
}(Error);

exports.default = StateLookupError;

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
var STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;
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
};

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
  return str.replace(/\-(.)/g, function (match) {
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
};

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
};

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
exports.insertBeforeNode = exports.removeNode = exports.walkNodes = exports.collectHTMLNodes = exports.cloneHTMLMarkup = exports.replaceNodes = undefined;

var _attributes = __webpack_require__(/*! ../globals/attributes */ "./src/globals/attributes.js");

var _attributes2 = _interopRequireDefault(_attributes);

var _checkers = __webpack_require__(/*! ./checkers */ "./src/helpers/checkers.js");

var _ComponentNotExistsError = __webpack_require__(/*! ../errors/ComponentNotExistsError */ "./src/errors/ComponentNotExistsError.js");

var _ComponentNotExistsError2 = _interopRequireDefault(_ComponentNotExistsError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENTS = {};

exports.replaceNodes = replaceNodes;
exports.cloneHTMLMarkup = cloneHTMLMarkup;
exports.collectHTMLNodes = collectHTMLNodes;
exports.walkNodes = walkNodes;
exports.removeNode = removeNode;
exports.insertBeforeNode = insertBeforeNode;


function replaceNodes(original, replacement) {
  original.parentNode.replaceChild(replacement, original);
  return replacement;
}

function insertBeforeNode(el, nextEl) {
  nextEl.parentNode.insertBefore(el, nextEl);
}

function cloneHTMLMarkup(markup) {
  var markupStr = (0, _checkers.isHTMLString)(markup.trim()) ? markup : document.querySelector(markup).innerHTML;

  var div = document.createElement('div');
  div.innerHTML = markupStr;
  return div.children[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9EZWZpbml0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9Qcm9kdWN0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUFjY2Vzc0Vycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJ2IiwibGluayIsIm9wdGlvbnNPYmoiLCJwYXJlbnRPYmoiLCJwYXJlbnRLZXkiLCJjbGFzcyIsImxlbmd0aCIsIm9wdGlvbiIsInZhbHVlIiwiZXZlbnRzIiwia2V5IiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJURU1QTEFURV9CSU5ESU5HIiwicmVtb3ZlQXR0cmlidXRlIiwidHJpbSIsIlRFTVBMQVRFX0xJU1RfQklORElORyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9iaiIsImdldENvbXBvbmVudEJ5TmFtZSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXR0cmlidXRlcyIsImF0dHIiLCJTVEFURV9OQU1FIiwiaW5uZXJMaW5rIiwiQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJmb3JjZWQiLCJrZXlzIiwiZm9yY2UiLCJpIiwiYmluZGluZ1ZhbHVlcyIsImdldFZhbHVlc1RyZWUiLCJ2YWx1ZXNUcmVlIiwidmFscyIsIml0ZW1WYWx1ZXMiLCJjb21wb25lbnRWYWx1ZXMiLCJuZXdTdGF0ZVBhdGgiLCJsYXN0SWR4IiwibnVtIiwiZWxzIiwic3RhcnQiLCJzaGlmdCIsIm1hcExpc3QiLCJjYiIsIml0ZXJhdGVMaXN0VmFsdWVzIiwiZmlsdGVyIiwiZmlsdGVyTGlzdCIsIm5ld0xpc3QiLCJzZXRWYWx1ZXMiLCJjcmVhdGVTdGF0ZU5vZGVzIiwibW9kaWZ5TGlzdCIsInNlbmRUb1JlbmRlclF1ZXVlIiwiQ0hBTkdFUyIsImNoYW5nZXMiLCJjb2xsZWN0aW5nIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImNoYW5nZSIsImlzQ29sbGVjdGluZ0NoYW5nZXMiLCJhZGRMaWZlQ3ljbGVIb29rIiwiaG9va1R5cGUiLCJob29rIiwidmFsdWVzTm9kZSIsImNyZWF0ZVN0YXRlTm9kZSIsInZhbHVlc05vZGVzIiwidmFsdWVOb2RlIiwicmVkdWNlIiwiYSIsImNoYW5nZVZhbHVlcyIsImNhbGxlZERlcGVuZGVuY2VzIiwiRlVMTF9DSEFOR0UiLCJlbmQiLCJzZXRWYWx1ZSIsIkJpbmRpbmdOb3RFeGlzdHNFcnJvciIsInNldFZhbHVlRm9yTGlzdCIsInNldFZhbHVlRm9yQ29tcG9uZW50IiwiZXF1YWwiLCJodG1sIiwiZGVwZW5kYW50IiwiZGVwZW5kYW50S2V5IiwibmV3VmFsdWUiLCJhcnIiLCJpbmRleEVxdWFsaXR5IiwicmVtb3ZlTGlzdEl0ZW0iLCJhY3Rpb24iLCJsaXN0UGF0aCIsIml0ZW1OYW1lIiwiYWRkVG9MaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJzcGxpY2UiLCJsaXN0QmluZGluZyIsInJlbW92ZWRET01Ob2RlIiwicmVtb3ZlZE5vZGUiLCJjcmVhdGVBbmRBcHBlbmRTdHlsZXMiLCJyZW5kZXJDaGFuZ2VzIiwicmVuZGVyIiwiYXBwbHlNYXJrdXAiLCJhcHBseUNsYXNzZXMiLCJzdHlsZSIsImFwcGx5U3R5bGVzIiwiYXR0cnMiLCJhcHBseUF0dHJpYnV0ZXMiLCJjb21wb25lbnRDaGFuZ2VzIiwiZWxlbWVudElkIiwiY29tcG9uZW50SWQiLCJjb21wb25lbnRBY2Nlc3NvciIsInJlbmRlckxpc3QiLCJyZW5kZXJDb21wb25lbnQiLCJ1cGRhdGVDb21wb25lbnQiLCJkcmF3Q29tcG9uZW50IiwiaXRlbVdyYXBwZXIiLCJDT01QT05FTlQiLCJyZW5kZXJGdW5jIiwicmVuZGVyVHlwZSIsImNoaWxkU3RhdGVQYXRoIiwiY2hpbGRNYXJrdXAiLCJpdGVtQWNjZXNzb3IiLCJjb21wb25lbnRNYXJrdXAiLCJjaGFuZ2VUeXBlIiwic3RhdGVQYXRoVG9CaW5kaW5nIiwibGlzdENvbXBvbmVudCIsIml0ZW1zVmFsdWVzIiwidXBkYXRlTGlzdCIsImxpc3RGcmFnbWVudCIsImJ1aWxkTGlzdCIsImxpc3ROb2RlIiwibmV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJMSVNUIiwiQ09NUE9ORU5UX0xJU1QiLCJpbnNlcnRCZWZvcmUiLCJyYW5nZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtVmFsdWUiLCJpdGVtSW5kZXgiLCJuZXdJdGVtSW5kZXgiLCJsaXN0SXRlbU1hcmt1cCIsIml0ZW1zQ2hhbmdlcyIsInJlbW92ZWRDb3VudCIsImZpeEluZGV4ZXMiLCJkaWZmIiwiaXRlbXNOb2RlcyIsInByZXZJZHgiLCJuZXdJZHgiLCJjbGFzc2VzIiwibm9ybWFsaXplU3R5bGVzIiwic3R5bGVPYmoiLCJzdHlsZVN0ciIsInN0eWxlRWwiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJjb21wb25lbnROYW1lIiwibWVzc2FnZSIsIkVycm9yIiwiU3RhdGVBY2Nlc3NFcnJvciIsIlN0YXRlTG9va3VwRXJyb3IiLCJhZGRpdGlvbmFsSW5mbyIsIkxJQl9OQU1FIiwiQVRUUl9QUkVGSVgiLCJTVEFURV9QQVRIIiwiVEVNUExBVEVfUExBQ0VNRU5UIiwiU0NPUEVfUFJFRklYIiwiSVRFTV9TVUZGSVgiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNPYmplY3RJbkJyYWNrZXRzIiwiaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIiwiaXNTdHJpbmciLCJpc0hUTUxTdHJpbmciLCJpc051bWJlciIsImlzRE9NRWxlbWVudCIsImlzVW5kZWZpbmVkIiwiaXNFbXB0eSIsImlzTGluayIsImdldE9iamVjdFR5cGUiLCJzbGFzaElkeCIsInNvbWUiLCJoYXMiLCJnZXRGYWxzZVBhdGhzIiwidG9EYXNoQ2FzZSIsInRvQ2FtZWxDYXNlIiwiZ2V0U2hvcnROYW1lIiwiZ2V0UmVhbE5hbWUiLCJOQU1FUyIsInJlYWwiLCJzaG9ydCIsInNob3J0TmFtZSIsIm9ubHlGYWxzZVBhdGhzIiwiZ2V0RmFsc2VQYXRoIiwic3RyIiwidG9VcHBlckNhc2UiLCJjb3B5IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvcHlBcnJheSIsInJlcGxhY2VOb2RlcyIsImNsb25lSFRNTE1hcmt1cCIsImNvbGxlY3RIVE1MTm9kZXMiLCJ3YWxrTm9kZXMiLCJyZW1vdmVOb2RlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsIm9yaWdpbmFsIiwicmVwbGFjZW1lbnQiLCJyZXBsYWNlQ2hpbGQiLCJuZXh0RWwiLCJtYXJrdXBTdHIiLCJkaXYiLCJub2RlIiwicm9vdCIsImlzV2FudGVkIiwibm9kZXMiLCJyZW1vdmVDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJyZXMiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7QUFDQTs7OztBQUVBOztBQU1BOztBQUVBOzs7O0FBRUE7O0FBUUE7O0FBTUE7O0FBSUE7O0FBSUE7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFNQSxjQUFjLENBQUMsT0FBRCxF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Qzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnBhLDRCQURlO0FBRWZtTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuaW1wb3J0IFJFIGZyb20gJy4vZ2xvYmFscy9yZWdleHAnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbiAgaXNET01FbGVtZW50LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGhhcyxcclxuICB0b0NhbWVsQ2FzZSxcclxuICBnZXRTaG9ydE5hbWUsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyxcclxufSBmcm9tICcuL1ZpZXcnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvcic7XHJcbmltcG9ydCBTY29wZU5hbWVDb2xsaXNpb25FcnJvciBmcm9tICcuL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvcic7XHJcblxyXG5cclxuY29uc3QgVkFMVUVfVFlQRVMgPSBbJ3N0eWxlJywgJ2NsYXNzJywgJ3ZhbHVlJywgJ2F0dHJzJywgJ2h0bWwnXTtcclxuY29uc3QgUkVTRVJWRURfSE9PS1NfTkFNRVMgPSBbJ21vdW50JywgJ3VwZGF0ZScsICdyZW1vdmUnXTtcclxuY29uc3QgREVGQVVMVF9IT09LUyA9IHRvT2JqZWN0KFJFU0VSVkVEX0hPT0tTX05BTUVTLCAoKSA9PiAoKSA9PiB7fSk7XHJcbmNvbnN0IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgPSBWQUxVRV9UWVBFUy5jb25jYXQoWydldmVudHMnLCAnaG9va3MnLCAnbGlzdEl0ZW0nLCBMSUJfQVRUUi5TRUxGXSk7XHJcblxyXG5leHBvcnQge1xyXG4gIGRlZmluZSxcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIHNob3J0ZW5CaW5kaW5nSWQsXHJcbiAgaXNDb21wb25lbnQsXHJcbiAgVkFMVUVfVFlQRVMsXHJcbiAgUkVTRVJWRURfQklORElOR19OQU1FUyxcclxufTtcclxuXHJcbmxldCBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbmNvbnN0IENPTVBPTkVOVFMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGRlZmluZSAobmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzKSB7XHJcbiAgY29uc3QgYXJncyA9IGlzT2JqZWN0KG5hbWUpID8gbmFtZSA6IHsgbmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzIH07XHJcblxyXG4gIG5hbWUgPSB0b0NhbWVsQ2FzZShhcmdzLm5hbWUpO1xyXG5cclxuICBpZiAoQ09NUE9ORU5UU1tuYW1lXSkge1xyXG4gICAgdGhyb3cgbmV3IENvbXBvbmVudFJlZGVmaW5lRXJyb3IobmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnRIVE1MTWFya3VwID0gY2xvbmVIVE1MTWFya3VwKGFyZ3MubWFya3VwKTtcclxuICBjb21wb25lbnRIVE1MTWFya3VwLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblxyXG4gIENPTVBPTkVOVF9DT1VOVEVSID0gMDtcclxuICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICAgIHN0YXRlUGF0aDogW25hbWVdLFxyXG4gICAgc3RhdGVOYW1lczoge30sXHJcbiAgICBtYXJrdXA6IGNvbXBvbmVudEhUTUxNYXJrdXAsXHJcbiAgICBldmFsdWF0ZToge30sXHJcbiAgICBsaW5rczoge30sXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIG91dGVyTmFtZXM6IHt9LFxyXG4gICAgX2xpbmtzOiB7fSxcclxuICB9O1xyXG5cclxuICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBub3JtYWxpemVVc2VyT3B0aW9ucyhhcmdzLmJpbmRpbmdzLCB7IHN0YXRlOiB7fSB9KTtcclxuICBjb3B5KGNvbXBvbmVudCwgbm9ybWFsaXplZE9wdGlvbnMpO1xyXG5cclxuICBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlSWQsIHsgc3RhdGVQYXRoOiBbXSwgbGlua3M6IHt9LCBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyB9KTtcclxuXHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzKCBwcmVwYXJlU3R5bGVzKGFyZ3Muc3R5bGVzLCBjb21wb25lbnQpICk7XHJcblxyXG4gIHJldHVybiBDT01QT05FTlRTW25hbWVdID0gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAgKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCkge1xyXG4gIHdhbGtOb2Rlcyhjb21wb25lbnRIVE1MTWFya3VwLCAoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGJpbmRpbmdPcHRzID0gYW5hbHl6ZUJpbmRpbmcoSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmICghYmluZGluZ09wdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGJpbmRpbmdPcHRzLm5hbWUsIGNvbXBvbmVudCwgSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBzZXRDb21wb25lbnQoYmluZGluZywgYmluZGluZ09wdHMpO1xyXG4gICAgICBIVE1MTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nLm5hbWVdID0gYmluZGluZztcclxuICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCwgY29tcG9uZW50Lm5hbWUgKyAnLScgKyBiaW5kaW5nLm5hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0xpc3QpIHtcclxuICAgICAgY29uc3QgaXRlbU5vZGUgPSBIVE1MTm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgbW9kaWZ5VG9MaXN0QmluZGluZyhiaW5kaW5nLCBpdGVtTm9kZSk7XHJcblxyXG4gICAgICBpZiAoaXNDb21wb25lbnQoaXRlbU5vZGUpKSB7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcubGlzdEl0ZW0sIGdldENvbXBvbmVudE9wdHMoaXRlbU5vZGUpKTtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChpdGVtTm9kZSwgYmluZGluZy5saXN0SXRlbSk7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29tcG9uZW50IChjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3Qgc3RhdGVOYW1lcyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50QmluZGluZy5zdGF0ZU5hbWVzLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5zdGF0ZU5hbWVzKTtcclxuICBsZXQgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm5hbWUgKyAneCcgKyBDT01QT05FTlRfQ09VTlRFUisrO1xyXG5cclxuICBpZiAoc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpIHtcclxuICAgIGlmIChzdGF0ZU5hbWVzW3N1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lXSkge1xyXG4gICAgICB0aHJvdyBuZXcgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3Ioc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZTtcclxuICAgIGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lc1tzdGF0ZUlkXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb3B5KGNvbXBvbmVudEJpbmRpbmcsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGNvbXBvbmVudEJpbmRpbmcsIHtcclxuICAgIGlkOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVJZCxcclxuICAgIG5hbWU6IHN0YXRlSWQsXHJcbiAgICBzdGF0ZU5hbWU6IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnRCaW5kaW5nLnN0YXRlUGF0aC5jb25jYXQoc3RhdGVJZCksXHJcbiAgICBtYXJrdXA6IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIHN0YXRlTmFtZXMsXHJcbiAgICBfbGlua3M6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMubGlua3MpLFxyXG4gICAgb3V0ZXJOYW1lczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5yZXZMaW5rcyksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVCaW5kaW5ncyAoY29tcG9uZW50LCBjdXJyZW50U3RhdGVJZCwgcGFyZW50Q29tcG9uZW50KSB7XHJcbiAgY29uc3QgY29tcG9uZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbXBvbmVudC5tYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQsIHNob3J0ZW5CaW5kaW5nSWQoIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgTElCX0FUVFIuU0VMRiApKTtcclxuICBjb21wb25lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudC5tYXJrdXApO1xyXG4gIGNvbXBvbmVudC5zdGF0ZVBhdGggPSBwYXJlbnRDb21wb25lbnQuc3RhdGVQYXRoLmNvbmNhdChjb21wb25lbnQuc3RhdGVJZCk7XHJcbiAgY29tcG9uZW50LnN0YXRlTmFtZXMgPSBwYXJlbnRDb21wb25lbnQuc3RhdGVOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViQ29tcG9uZW50cyA9IFtdO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBvbGRCaW5kaW5nSWQgPSBiaW5kaW5nLmlkO1xyXG4gICAgY29uc3QgbmV3QmluZGluZ0lkID0gY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBiaW5kaW5nTmFtZTtcclxuICAgIGNvbnN0IHNob3J0SWQgPSBzaG9ydGVuQmluZGluZ0lkKG5ld0JpbmRpbmdJZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gY29tcG9uZW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIExJQl9BVFRSLlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydElkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIG5ld0JpbmRpbmdJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICAgIHN0YXRlUGF0aDogY29tcG9uZW50LnN0YXRlUGF0aC5zbGljZSgpLFxyXG4gICAgICBob29rczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9IT09LUywgYmluZGluZy5ob29rcyksXHJcbiAgICAgIGlkOiBuZXdCaW5kaW5nSWQsXHJcbiAgICAgIHNob3J0SWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVwYXJlUmVhY3RpdmVGdW5jcyhiaW5kaW5nLCBjb21wb25lbnQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBiaW5kaW5nLnN0YXRlUGF0aC5wdXNoKGJpbmRpbmdOYW1lKTtcclxuICAgICAgYmluZGluZy5zdGF0ZU5hbWVzID0gY29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gICAgICBwcmVwYXJlQmluZGluZ3MgKGJpbmRpbmcubGlzdEl0ZW0sIG5ld0JpbmRpbmdJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLklURU0gKyBiaW5kaW5nLmxpc3RJdGVtLm5hbWUsIGJpbmRpbmcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgc3ViQ29tcG9uZW50cy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZXR1cENvbXBvbmVudHNMaW5rcyhjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCk7XHJcbiAgY29tcG9uZW50LnRlbXBsYXRlID0gY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gIHN1YkNvbXBvbmVudHMuZm9yRWFjaCgoc3ViQ29tcG9uZW50KSA9PiB7XHJcbiAgICBwcmVwYXJlQmluZGluZ3MgKHN1YkNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBzdWJDb21wb25lbnQuc3RhdGVJZCwgY29tcG9uZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuY3MgKGJpbmRpbmcsIGNvbXBvbmVudERhdGEpIHtcclxuICBWQUxVRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCByZWFjdGl2ZUZ1bmMgPSBiaW5kaW5nW3R5cGVdO1xyXG4gICAgaWYgKCFyZWFjdGl2ZUZ1bmMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRpbmcuZXZhbHVhdGVbdHlwZV0gPSBwcmVwYXJlUmVhY3RpdmVGdW5jKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSlcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuYyAoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKSB7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBnZXREZXBlbmRlbmNpZXNOYW1lcyhyZWFjdGl2ZUZ1bmMpO1xyXG5cclxuICBkZXBlbmRlbmNpZXNOYW1lcy5mb3JFYWNoKChkZXBlbmRlbmN5TmFtZSkgPT4ge1xyXG4gICAgaWYgKGlzRW1wdHkoY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0pKSB7XHJcbiAgICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdID0gY3JlYXRlQmluZGluZyhkZXBlbmRlbmN5TmFtZSwgY29tcG9uZW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0uZGVwZW5kYW50c1sgYmluZGluZy5uYW1lICsgJzonICsgdHlwZSBdID0geyBuYW1lOiBiaW5kaW5nLm5hbWUsIHR5cGUgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICh2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSkgPT4gY29tcHV0ZSAocmVhY3RpdmVGdW5jLCB2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llc05hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jUGFyYW1zID0gZ2V0UGFyYW1OYW1lcyhmdW5jKTtcclxuICBjb25zdCB2YWx1ZXNPYmpSZWdFeHAgPSAgbmV3IFJlZ0V4cCgnXFxcXCcgKyBmdW5jUGFyYW1zWzBdICsgJ1xcXFwuKFxcXFxEW15cXFxcc1xcXFxXXSspJywgJ2cnKTtcclxuICBjb25zdCBkZXBlbmRlbmNpZXNOYW1lcyA9IFtdO1xyXG4gIGNvbnN0IGZ1bmNTdHIgPSBmdW5jLnRvU3RyaW5nKCk7XHJcbiAgbGV0IGRlcGVuZGVuY3lOYW1lO1xyXG4gIHdoaWxlIChkZXBlbmRlbmN5TmFtZSA9IHZhbHVlc09ialJlZ0V4cC5leGVjKGZ1bmNTdHIpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrLCB2KSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gQ09NUE9ORU5UU1sgdG9DYW1lbENhc2UobmFtZSkgXTtcclxuXHJcbiAgaWYgKCFjb21wb25lbnQpIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnROb3RFeGlzdHNFcnJvcihuYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKGVsZW1lbnROYW1lID0gZ2V0UmVhbE5hbWUoIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKSApKSB7XHJcblxyXG4gICAgaWYgKGhhcyhlbGVtZW50TmFtZSwgTElCX0FUVFIuSVRFTSkpIHtcclxuICAgICAgZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZS5zbGljZShMSUJfQVRUUi5JVEVNLmxlbmd0aCk7XHJcbiAgICAgIGVsID0gZ2V0VG9JdGVtTm9kZShlbCk7XHJcbiAgICAgIGNvbnN0IGlkeCA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKTtcclxuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBzdGF0ZVBhdGgudW5zaGlmdChpZHgsIGVsZW1lbnROYW1lKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVQYXRoLnVuc2hpZnQoZWxlbWVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlUGF0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9JdGVtTm9kZSAoZWwpIHtcclxuICBsZXQgY3VyRWwgPSBlbDtcclxuXHJcbiAgd2hpbGUgKGN1ckVsLnRhZ05hbWUgIT09ICdCT0RZJykge1xyXG4gICAgaWYgKGN1ckVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKSkge1xyXG4gICAgICByZXR1cm4gY3VyRWw7XHJcbiAgICB9XHJcbiAgICBjdXJFbCA9IGN1ckVsLnBhcmVudE5vZGU7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nXHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudE9wdHMsXHJcbiAgaXNDb21wb25lbnQsXHJcbn0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7IHNldHVwRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmV4cG9ydCB7IGFwcGx5IH07XHJcblxyXG5cclxuZnVuY3Rpb24gYXBwbHkgKHJvb3RFbGVtZW50U2VsZWN0b3IpIHtcclxuICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgY29uc3QgSFRNTE5vZGVzID0gY29sbGVjdEhUTUxOb2Rlcyhyb290RWxlbWVudCwgaXNDb21wb25lbnQpO1xyXG5cclxuICBIVE1MTm9kZXMuZm9yRWFjaCgoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudE9wdHMgPSBnZXRDb21wb25lbnRPcHRzKEhUTUxOb2RlKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBzZXR1cEVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcblxyXG4gICAgcmVwbGFjZU5vZGVzKEhUTUxOb2RlLCBlbGVtZW50LmVsKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcbiAgc2V0dXBFdmVudEhhbmRsZXJzKGVsZW1lbnQpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBnZXQsIHNldCwgZm9yRWFjaCwgbWFwIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCBTdGF0ZUFjY2Vzc0Vycm9yIGZyb20gJy4vZXJyb3JzL1N0YXRlQWNjZXNzRXJyb3InO1xyXG5pbXBvcnQgU3RhdGVMb29rdXBFcnJvciBmcm9tICcuL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yJztcclxuXHJcbmltcG9ydCB7IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVTdGF0ZU5vZGVzLFxyXG4gIHNldFZhbHVlcyxcclxuICBtb2RpZnlMaXN0LFxyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUsXHJcbiAgYXBwbHlDaGFuZ2VzLFxyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0VtcHR5LFxyXG4gIGlzQXJyYXksXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNOdW1iZXIsXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlRWxlbWVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBnZXRPbmx5VmFsdWVzLFxyXG4gIGdldENvbXBvbmVudCxcclxuICBzZXRTdGF0ZSxcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG59O1xyXG5cclxuY29uc3QgRUxFTUVOVFMgPSB7fTtcclxuY29uc3QgU1RBVEUgPSB7fTtcclxubGV0IEVMRU1FTlRfQ09VTlRFUiA9IDE7XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0ZSAocGF0aCwgdmFsdWUpIHtcclxuICBzZXQoU1RBVEUsIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGUgKHBhdGgpIHtcclxuICByZXR1cm4gZ2V0KFNUQVRFLCBwYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGlkID0gRUxFTUVOVF9DT1VOVEVSKys7XHJcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudE9wdHMubmFtZTtcclxuXHJcbiAgY29uc3QgZWxlbWVudCA9IEVMRU1FTlRTW2lkXSA9IHtcclxuICAgIGlkLFxyXG4gICAgc3RhdGU6IHsgW25hbWVdOiBjb21wb25lbnRPcHRzLmNvbXBvbmVudCB9LFxyXG4gIH07XHJcblxyXG4gIFNUQVRFW2lkXSA9IHt9O1xyXG5cclxuICBjcmVhdGVTdGF0ZU5vZGVzKFtpZCwgbmFtZV0pO1xyXG5cclxuICBzZW5kVG9SZW5kZXJRdWV1ZShbaWRdLCB7IFtuYW1lXTogZmFsc2UgfSk7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgZWxlbWVudC5lbCA9IFNUQVRFW2lkXVtuYW1lXVtMSUJfQVRUUi5TRUxGXS5lbDtcclxuICBlbGVtZW50LmVsLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuQkFTRSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvciAocGF0aCkge1xyXG4gIGNvbnN0IHZhbHVlcyA9IGdldFN0YXRlKHBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudChwYXRoKTtcclxuXHJcbiAgY29uc3QgYWNjZXNzb3IgPSB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICB2YWx1ZXMsXHJcbiAgICBwYXRoLFxyXG4gICAgc3RhcnRUcmFuc2FjdGlvbixcclxuICAgIGFwcGx5Q2hhbmdlcyxcclxuICAgIHVwOiAobGV2ZWwpID0+IG1vdmVVcFN0YXRlUGF0aChsZXZlbCwgcGF0aC5zbGljZSgpKSxcclxuICAgIGRvd246IChhZGRpdGlvbmFsUGF0aCkgPT4gY3JlYXRlQWNjZXNzb3IocGF0aC5jb25jYXQoYWRkaXRpb25hbFBhdGgpKSxcclxuICAgIHNldDogKGNoYW5nZU9iaikgPT4gc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZU9iaiksIHBhdGgpLFxyXG4gICAgZ2V0OiAoa2V5KSA9PiBnZXRWYWx1ZXMoYWNjZXNzb3IsIGtleSwgcGF0aCksXHJcbiAgICBtYXJrdXA6IChrZXkpID0+IGtleSA/IGFjY2Vzc29yLnZhbHVlc1trZXldLmVsIDogYWNjZXNzb3IudmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsLFxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgbW9kaWZ5VG9BcnJheUFjY2Vzc29yKGFjY2Vzc29yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhY2Nlc3NvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUNoYW5nZU9iamVjdCAoY2hhbmdlT2JqKSB7XHJcbiAgcmV0dXJuIG1hcChjaGFuZ2VPYmosICh2KSA9PiB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBpc09iamVjdCh2KSAmJiBPYmplY3Qua2V5cyh2KVswXSA9PT0gJ2ZvcmNlJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZm9yY2VkID8gdlsnZm9yY2UnXSA6IHYsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIGZvcmNlOiBmb3JjZWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnQgKHBhdGgpIHtcclxuICBsZXQgY29tcG9uZW50ID0gRUxFTUVOVFNbIHBhdGhbMF0gXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQuc3RhdGVbIHBhdGhbaV0gXTtcclxuICAgIFxyXG4gICAgaWYgKGNvbXBvbmVudC5pc0xpc3QgJiYgaSAhPT0gKHBhdGgubGVuZ3RoIC0xKSkge1xyXG4gICAgICBjb21wb25lbnQgPSBjb21wb25lbnQubGlzdEl0ZW07XHJcbiAgICAgIGkrPTI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPbmx5VmFsdWVzIChvYmopIHtcclxuICByZXR1cm4gbWFwKG9iaiwgKGJpbmRpbmdWYWx1ZXMpID0+IGJpbmRpbmdWYWx1ZXNbJ3ZhbHVlJ10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXMgKGFjY2Vzc29yLCBrZXksIHN0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcblxyXG4gIGlmICgha2V5KSB7XHJcbiAgICByZXR1cm4gZ2V0VmFsdWVzVHJlZSh2YWx1ZXMsIGNvbXBvbmVudCwge30pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtrZXldO1xyXG4gIGlmIChiaW5kaW5nLmlzTGlzdCB8fCBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLmNvbmNhdChrZXkpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWx1ZXNba2V5XS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzVHJlZSAodmFsdWVzLCBjb21wb25lbnQsIHZhbHVlc1RyZWUpIHtcclxuICBmb3JFYWNoKHZhbHVlcywgKHZhbHMsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoaGFzKFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsIGJpbmRpbmdOYW1lKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHZhbHVlc1RyZWVbYmluZGluZ05hbWVdID0gW107XHJcbiAgICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtVmFsdWVzID0gdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV1baV0gPSB7fTtcclxuICAgICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV1baV1bYmluZGluZy5saXN0SXRlbS5uYW1lXSwgYmluZGluZy5saXN0SXRlbSwgaXRlbVZhbHVlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50VmFsdWVzID0gdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSB7fTtcclxuICAgICAgZ2V0VmFsdWVzVHJlZSh2YWx1ZXNbYmluZGluZ05hbWVdLCBiaW5kaW5nLCBjb21wb25lbnRWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc1RyZWVbIGNvbXBvbmVudC5fbGlua3NbYmluZGluZ05hbWVdIHx8IGJpbmRpbmdOYW1lIF0gPSB2YWxzLnZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdmFsdWVzVHJlZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVVwU3RhdGVQYXRoIChsZXZlbCwgc3RhdGVQYXRoKSB7XHJcbiAgbGV0IG5ld1N0YXRlUGF0aDtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QsIG1hcEtleXMgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcnVuTGlmZUN5Y2xlSG9va3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuTGlmZUN5Y2xlSG9va3MgKCkge1xyXG4gIGNvbnN0IGxpZmVDeWNsZUhhbmRsZXJzID0gTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0O1xyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdCA9IFtdO1xyXG4gIGxpZmVDeWNsZUhhbmRsZXJzLmZvckVhY2goKGgpID0+IGgoKSk7XHJcblxyXG4gIGlmICghaXNFbXB0eShDSEFOR0VTLmNoYW5nZXMpKSB7XHJcbiAgICBhcHBseUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIENIQU5HRVMuY29sbGVjdGluZyA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kVG9SZW5kZXJRdWV1ZSAocGF0aCwgY2hhbmdlKSB7XHJcbiAgc2V0KENIQU5HRVMuY2hhbmdlcywgcGF0aCwgY2hhbmdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb2xsZWN0aW5nQ2hhbmdlcyAoKSB7XHJcbiAgcmV0dXJuIENIQU5HRVMuY29sbGVjdGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlmZUN5Y2xlSG9vayAoaG9va1R5cGUsIGJpbmRpbmcsIHZhbHVlcywgYWNjZXNzb3IsIGlkeCkge1xyXG4gIGNvbnN0IGhvb2sgPSBiaW5kaW5nLmhvb2tzW2hvb2tUeXBlXTtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlTm9kZSA9IGJpbmRpbmcuaXNMaXN0ID8gW10gOiB7fTtcclxuXHJcbiAgICByZXR1cm4gVkFMVUVfVFlQRVMucmVkdWNlKChhLCBrZXkpID0+IHtcclxuICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICd2YWx1ZSc6XHJcbiAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICB2YWx1ZSA9IGJpbmRpbmcuaW5pdFZhbHVlIHx8ICcnXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHZhbHVlID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFba2V5XSA9IHZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9LCB2YWx1ZU5vZGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih2YWx1ZXNOb2RlcywgeyBbTElCX0FUVFIuU0VMRl06IHRvT2JqZWN0KFZBTFVFX1RZUEVTLCB7fSkgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlcyAoY2hhbmdlVmFsdWVzLCBzdGF0ZVBhdGgsIGNhbGxlZERlcGVuZGVuY2VzKSB7XHJcbiAgY2FsbGVkRGVwZW5kZW5jZXMgPSBjYWxsZWREZXBlbmRlbmNlcyB8fCBbXTtcclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcblxyXG4gIGlmICghYWNjZXNzb3IudmFsdWVzKSB7XHJcbiAgICBhY2Nlc3Nvci52YWx1ZXMgPSBjcmVhdGVTdGF0ZU5vZGVzKHN0YXRlUGF0aCk7XHJcbiAgICBjb25zdCBzdGFydCA9ICtzdGF0ZVBhdGguc2xpY2UoLTIpWzBdO1xyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoc3RhdGVQYXRoLCB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgYWRkOiB7IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgMSB9IH0gfSlcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlVmFsdWVzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4gc2V0VmFsdWUoYmluZGluZ05hbWUsIGNoYW5nZSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKSk7XHJcblxyXG4gIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGFjY2Vzc29yLmNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgYWNjZXNzb3IudmFsdWVzLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XHJcblxyXG4gIGlmIChpc0NvbGxlY3RpbmdDaGFuZ2VzKCkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZSAoYmluZGluZ05hbWUsIGNoYW5nZSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKSB7XHJcbiAgY29uc3Qgc3RhdGVQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGxldCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgaWYgKCFiaW5kaW5nKSB7XHJcbiAgICBiaW5kaW5nTmFtZSA9IGNvbXBvbmVudC5vdXRlck5hbWVzW2JpbmRpbmdOYW1lXTtcclxuICAgIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFiaW5kaW5nKSB7XHJcbiAgICB0aHJvdyBuZXcgQmluZGluZ05vdEV4aXN0c0Vycm9yKGJpbmRpbmdOYW1lLCBjb21wb25lbnQubmFtZSwgc3RhdGVQYXRoKTtcclxuICB9XHJcblxyXG4gIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckxpc3QoYmluZGluZywgY2hhbmdlLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KGNoYW5nZS52YWx1ZSkgJiYgYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JDb21wb25lbnQoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlcXVhbCA9IGFyZUVxdWFsKHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlLnR5cGVdLCBjaGFuZ2UudmFsdWUpO1xyXG5cclxuICBpZiAoIWVxdWFsIHx8ICFpc0VtcHR5KGVxdWFsKSB8fCBjaGFuZ2UuZm9yY2UpIHtcclxuICAgIHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlLnR5cGVdID0gY2hhbmdlLnZhbHVlO1xyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSAhPT0gJ3ZhbHVlJykge1xyXG4gICAgICByZXR1cm4gc2VuZFRvUmVuZGVyUXVldWUoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSksIHsgW2NoYW5nZS50eXBlXTogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYmluZGluZywgdmFsdWVzLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XHJcbiAgICBjYWxsZWREZXBlbmRlbmNlcy5wdXNoKGJpbmRpbmdOYW1lICsgJzonICsgY2hhbmdlLnR5cGUpO1xyXG5cclxuICAgIGlmICghYmluZGluZy5odG1sKSB7XHJcbiAgICAgIHNldFZhbHVlKGJpbmRpbmdOYW1lLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICdodG1sJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBjb21wb25lbnQubGlua3NbYmluZGluZ05hbWVdO1xyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgc2V0VmFsdWUobGluay5saW5rLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICd2YWx1ZScsIGZvcmNlOiBjaGFuZ2UuZm9yY2UgfSwgYWNjZXNzb3IuZG93bihsaW5rLmNvbXBvbmVudCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKGJpbmRpbmcuZGVwZW5kYW50cywgKGRlcGVuZGFudCwgZGVwZW5kYW50S2V5KSA9PiB7XHJcbiAgICAgIGlmIChoYXMoY2FsbGVkRGVwZW5kZW5jZXMsIGRlcGVuZGFudEtleSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29tcG9uZW50LnN0YXRlW2RlcGVuZGFudC5uYW1lXS5ldmFsdWF0ZVtkZXBlbmRhbnQudHlwZV0odmFsdWVzLCBhY2Nlc3Nvcik7XHJcbiAgICAgIHNldFZhbHVlKGRlcGVuZGFudC5uYW1lLCB7IHZhbHVlOiBuZXdWYWx1ZSwgdHlwZTogZGVwZW5kYW50LnR5cGUgfSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVGb3JMaXN0IChiaW5kaW5nLCBjaGFuZ2UsIGFyciwgYWNjZXNzb3IpIHtcclxuICBPYmplY3RcclxuICAgIC5rZXlzKGNoYW5nZS52YWx1ZSlcclxuICAgIC5mb3JFYWNoKChpKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlLnZhbHVlW2ldKSwgYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpLCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpKSk7XHJcblxyXG4gIGNvbnN0IGluZGV4RXF1YWxpdHkgPSBhcmVFcXVhbChhcnIsIGNoYW5nZS52YWx1ZSk7XHJcbiAgZm9yRWFjaChpbmRleEVxdWFsaXR5LCAoY2hhbmdlT2JqLCBpZHgpID0+IHtcclxuICAgIGlmIChjaGFuZ2VPYmoucmVtb3ZlKSB7XHJcbiAgICAgIGNoYW5nZU9iai5yZW1vdmUgPSByZW1vdmVMaXN0SXRlbShhcnIsIGlkeCwgYmluZGluZywgYWNjZXNzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaWR4LCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpLCB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IGNoYW5nZU9iaiB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVGb3JDb21wb25lbnQgKGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpIHtcclxuICBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlLnZhbHVlKSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoYWN0aW9uLCBhcmdzLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGFyciA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBjb25zdCBsaXN0UGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBzdGFydCA9IGFyZ3Muc3RhcnQ7XHJcbiAgbGV0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgY2FzZSAnYWRkJzpcclxuICAgICAgY2hhbmdlT2JqID0gYWRkVG9MaXN0KGFyciwgc3RhcnQsIGFyZ3MuZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIChhcmdzLm51bSB8fCAxKTtcclxuICAgICAgY2hhbmdlT2JqID0gcmVtb3ZlRnJvbUxpc3QoYXJyLCBzdGFydCwgZW5kLCBhY2Nlc3Nvci5jb21wb25lbnQsIGFjY2Vzc29yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGNoYW5nZU9iaiwgKGNoYW5nZSwgaWR4KSA9PiBzZW5kVG9SZW5kZXJRdWV1ZShsaXN0UGF0aC5jb25jYXQoaWR4LCBpdGVtTmFtZSwgTElCX0FUVFIuRlVMTF9DSEFOR0UpLCBjaGFuZ2VPYmpbaWR4XVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCAoYXJyLCBzdGFydCwgZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpIHtcclxuICBlbHMgPSBpc0FycmF5KGVscykgPyBlbHMgOiBbZWxzXTtcclxuXHJcbiAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICBhcnIuc3BsaWNlKGkgKyBzdGFydCwgMCwgbnVsbCk7XHJcbiAgICBzZXRWYWx1ZXMocHJlcGFyZUNoYW5nZU9iamVjdChlbCksIGxpc3RQYXRoLmNvbmNhdChpICsgc3RhcnQsIGl0ZW1OYW1lKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IFtzdGFydF06IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyBlbHMubGVuZ3RoIH0gfSB9IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0IChhcnIsIHN0YXJ0LCBlbmQsIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgY29uc3QgcmVtb3ZlZERPTU5vZGUgPSByZW1vdmVMaXN0SXRlbShhcnIsIGksIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICBjaGFuZ2VPYmpbaV0gPSB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgcmVtb3ZlOiByZW1vdmVkRE9NTm9kZSB9IH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjaGFuZ2VPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxpc3RJdGVtIChhcnIsIGlkeCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgcmVtb3ZlZE5vZGUgPSBhcnIuc3BsaWNlKGlkeCwgMSlbMF1bbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZV07XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygncmVtb3ZlJywgbGlzdEJpbmRpbmcubGlzdEl0ZW0uc3RhdGVbTElCX0FUVFIuU0VMRl0sIHJlbW92ZWROb2RlLCBhY2Nlc3NvciwgaWR4KTtcclxuICByZXR1cm4gcmVtb3ZlZE5vZGVbTElCX0FUVFIuU0VMRl0uZWw7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuaW1wb3J0IHsgdG9EYXNoQ2FzZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcbmltcG9ydCB7IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzcGxpdFBpZWNlIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBpc051bWJlciwgaXNVbmRlZmluZWQgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnXHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGFkZE1hcmt1cCxcclxuICBnZXRNYXJrdXAsXHJcbiAgcmVtb3ZlTWFya3VwLFxyXG4gIHJlbW92ZUNvbXBvbmVudCxcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG4gIHJlbmRlckNoYW5nZXNcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9IHtcclxuICBodG1sOiBhcHBseU1hcmt1cCxcclxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxyXG4gIHN0eWxlOiBhcHBseVN0eWxlcyxcclxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzIChjaGFuZ2VzKSB7XHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdXHJcbiAgICBjb25zdCBjb21wb25lbnRBY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XHJcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TWFya3VwIChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5tYXJrdXApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xyXG5cclxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBjb21wb25lbnQubWFya3VwLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnQubWFya3VwLmlubmVySFRNTCA9IHZhbHVlO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQgKGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHJhd0NvbXBvbmVudCh2YWx1ZSwgc3RhdGVQYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NvbXBvbmVudCAodmFsdWVzLCBzdGF0ZVBhdGgpIHtcclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG5cclxuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGl0ZW1NYXJrdXAgPSBjb21wb25lbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbCA9IGl0ZW1NYXJrdXA7XHJcbiAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU1hcmt1cCk7XHJcblxyXG4gIGl0ZW1NYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCAoY29tcG9uZW50LmlzTGlzdEl0ZW0pID8gTElCX0FUVFIuSVRFTSA6IExJQl9BVFRSLkNPTVBPTkVOVCk7XHJcblxyXG4gIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSkge1xyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBpdGVtTWFya3VwIH0sIHZhbHVlc1tMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmICghYmluZGluZy5tYXJrdXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gaXRlbVdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY2hpbGRTdGF0ZVBhdGggPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuICAgICAgY29uc3QgY2hpbGRNYXJrdXAgPSBkcmF3Q29tcG9uZW50KHZhbHVlc1tiaW5kaW5nTmFtZV0sIGNoaWxkU3RhdGVQYXRoKTtcclxuICAgICAgcmVwbGFjZU5vZGVzKGJpbmRpbmdOb2RlLCBjaGlsZE1hcmt1cCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdLmVsID0gYmluZGluZ05vZGU7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHJlbmRlckxpc3QoYmluZGluZywgdmFsdWVzW2JpbmRpbmdOYW1lXSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChyZW5kZXIsIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSA9PiB7XHJcbiAgICAgIGlmIChyZW5kZXJUeXBlID09PSAnaHRtbCcgJiYgYmluZGluZy5odG1sID09PSBudWxsIHx8IGJpbmRpbmcubWFya3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBiaW5kaW5nTm9kZSB9LCB2YWx1ZXNbYmluZGluZ05hbWVdW3JlbmRlclR5cGVdLCBzdGF0ZVBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpdGVtV3JhcHBlci5jaGlsZHJlblswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgY29uc3QgaXRlbUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBjb25zdCBjb21wb25lbnRNYXJrdXAgPSB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWw7XHJcblxyXG4gIGZvckVhY2goY2hhbmdlcywgKGNoYW5nZSwgYmluZGluZ05hbWUpID0+IHtcclxuXHJcbiAgICBpZiAoYmluZGluZ05hbWUgPT09IExJQl9BVFRSLlNFTEYpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBjb21wb25lbnRNYXJrdXAgfSwgdmFsdWVzW0xJQl9BVFRSLlNFTEZdW2NoYW5nZVR5cGVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0JpbmRpbmcgPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCB8fCBiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBhcHBseU1hcmt1cChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGhUb0JpbmRpbmcsIGNoYW5nZXNbYmluZGluZ05hbWVdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmdOYW1lXS5lbFxyXG5cclxuICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2VUeXBlXTtcclxuICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBlbCB9LCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUxpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCk7XHJcblxyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGxpc3ROb2RlLnBhcmVudE5vZGU7XHJcbiAgY29uc3QgbmV4dE5vZGUgPSBsaXN0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgcmVtb3ZlTm9kZShsaXN0Tm9kZSk7XHJcblxyXG4gIGNvbnN0IGlzQ29tcG9uZW50ID0gbGlzdE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFKTtcclxuICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkxJU1QpO1xyXG4gIGlmIChpc0NvbXBvbmVudCkge1xyXG4gICAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5DT01QT05FTlRfTElTVCk7XHJcbiAgfVxyXG5cclxuICBsaXN0Tm9kZS5pbm5lckhUTUwgPSAnJztcclxuICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xyXG5cclxuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShsaXN0Tm9kZSwgbmV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZExpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHJhbmdlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSByYW5nZSA/IHJhbmdlLnN0YXJ0IDogMDtcclxuICBjb25zdCBlbmQgPSByYW5nZSA/IHJhbmdlLmVuZCA6IChpdGVtc1ZhbHVlcy5sZW5ndGggKyAxKTtcclxuXHJcbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGl0ZW1zVmFsdWVzXHJcbiAgICAuc2xpY2Uoc3RhcnQsIGVuZClcclxuICAgIC5mb3JFYWNoKChpdGVtVmFsdWUsIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdJdGVtSW5kZXggPSArc3RhcnQgKyBpdGVtSW5kZXg7XHJcbiAgICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoW25ld0l0ZW1JbmRleCwgbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSk7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtTWFya3VwID0gZHJhd0NvbXBvbmVudChpdGVtVmFsdWVbbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYLCBuZXdJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtTWFya3VwKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gbGlzdEZyYWdtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaXN0IChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IGl0ZW1zQ2hhbmdlcyA9IHNwbGl0UGllY2UoY2hhbmdlcywgKHYsIGspID0+IGlzTnVtYmVyKCtrKSk7XHJcbiAgbGV0IHJlbW92ZWRDb3VudCA9IDA7XHJcbiAgbGV0IGVuZCA9IDA7XHJcblxyXG4gIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlcykge1xyXG4gICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBsaXN0Tm9kZSB9LCBpdGVtc1ZhbHVlc1tjaGFuZ2VUeXBlXSk7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGl0ZW1zQ2hhbmdlcywgKGNoYW5nZSwgaSkgPT4ge1xyXG4gICAgY2hhbmdlID0gY2hhbmdlW2l0ZW1OYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoaSwgaXRlbU5hbWUpO1xyXG4gICAgY29uc3QgaXRlbUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICBpZiAoIWNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pIHtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50KGl0ZW1BY2Nlc3Nvci5jb21wb25lbnQsIGl0ZW1zVmFsdWVzW2ldW2l0ZW1OYW1lXSwgc3RhdGVQYXRoVG9JdGVtLCBjaGFuZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkICYmIGkgPj0gZW5kKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQuc3RhcnQ7XHJcbiAgICAgIGVuZCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLmVuZDtcclxuXHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIHN0YXJ0LCBlbmQgLSBzdGFydCk7XHJcbiAgICAgIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgeyBzdGFydCwgZW5kIH0pO1xyXG5cclxuICAgICAgaWYgKGVuZCA9PT0gaXRlbXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3ROb2RlLmluc2VydEJlZm9yZShsaXN0RnJhZ21lbnQsIGxpc3ROb2RlLmNoaWxkcmVuW3N0YXJ0XSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpIHtcclxuICAgICAgcmVtb3ZlTm9kZShjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLnJlbW92ZSk7XHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIGkgLSByZW1vdmVkQ291bnQrKywgLTEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhJbmRleGVzIChsaXN0Tm9kZSwgc3RhcnQsIGRpZmYpIHtcclxuICBjb25zdCBpdGVtc05vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdE5vZGUuY2hpbGRyZW4sIHN0YXJ0KTtcclxuXHJcbiAgaXRlbXNOb2Rlcy5mb3JFYWNoKChpdGVtTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldklkeCA9IGl0ZW1Ob2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKTtcclxuICAgIGNvbnN0IG5ld0lkeCA9ICtwcmV2SWR4ICsgZGlmZjtcclxuXHJcbiAgICBpdGVtTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzIChiaW5kaW5nLCBhdHRyaWJ1dGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLm1hcmt1cCwgYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2xhc3NlcyAoYmluZGluZywgY2xhc3Nlcykge1xyXG4gIGZvciAobGV0IGNsYXNzTmFtZSBpbiBjbGFzc2VzKSB7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVN0eWxlcyAoYmluZGluZywgc3R5bGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbiggYmluZGluZy5tYXJrdXAuc3R5bGUsIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyAoc3R5bGVPYmopIHtcclxuICBsZXQgc3R5bGVTdHIgPSAnJztcclxuICBmb3IgKGxldCBzZWxlY3RvciBpbiBzdHlsZU9iaikge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVPYmpbc2VsZWN0b3JdO1xyXG4gICAgc3R5bGVTdHIgKz0gc2VsZWN0b3IgKyAneyc7XHJcbiAgICBub3JtYWxpemVTdHlsZXMoc3R5bGVzKVxyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbYXR0cl07XHJcbiAgICAgIHN0eWxlU3RyICs9IHRvRGFzaENhc2UoYXR0cikgKyAnOicgKyB2YWx1ZSArICc7JztcclxuICAgIH1cclxuICAgIHN0eWxlU3RyICs9ICd9XFxuJztcclxuICB9XHJcbiAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGVFbC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVTdHIpICk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVzIChzdHlsZXMpIHtcclxuICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgaWYgKGlzTnVtYmVyKHN0eWxlc1thdHRyXSkpIHtcclxuICAgICAgc3R5bGVzW2F0dHJdID0gc3R5bGVzW2F0dHJdICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN0eWxlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKGJpbmRpbmdOYW1lLCBjb21wb25lbnROYW1lLCBwYXRoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gYWNjZXNzICdcIiArIGJpbmRpbmdOYW1lICsgXCInIGJpbmRpbmcgb24gJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJyBjb21wb25lbnQgb24gcGF0aCAoXCIgKyBwYXRoLmpvaW4oJyAtPiAnKSArIFwiKSBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3QuXCJcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZXRyaWV2ZSBjb21wb25lbnQgYnkgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRoYXQgZG9lc24ndCBleGlzdC5cIlxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRSZWRlZmluZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gcmVkZWZpbmUgZXhpc3RpbmcgY29tcG9uZW50OiAnXCIgKyBuYW1lICsgXCInXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gYXNzaWduIGEgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRvIGEgc3RhdGUgdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2hhaW4uXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQWNjZXNzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKHBhdGgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlVuYWJsZSB0byBhY2Nlc3Mgc3RhdGUgb24gYSBwYXRoICdcIiArIHBhdGguam9pbignIC0+ICcpICsgIFwiJyBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3RcIlxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVMb29rdXBFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobGV2ZWwpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvO1xyXG4gICAgaWYgKGlzTnVtYmVyKGxldmVsKSkge1xyXG4gICAgICBhZGRpdGlvbmFsSW5mbyA9IGxldmVsICsgXCIgZXhjZWVkcyBudW1iZXIgb2Ygc3RhdGVzIGluIHRoZSBjaGFpbi5cIiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZGl0aW9uYWxJbmZvID0gXCInXCIgKyBsZXZlbCArIFwiJyB1c2VyIHN0YXRlbmFtZSBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gcmVhY2ggdG8gdGhlICdcIiArIGxldmVsICsgXCInIHN0YXRlIGxldmVsLiBcIiArIGFkZGl0aW9uYWxJbmZvO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBMSUJfTkFNRSA9ICd4JztcclxuY29uc3QgQVRUUl9QUkVGSVggPSAnZGF0YS0nO1xyXG5jb25zdCBQUkVGSVggPSBMSUJfTkFNRSArICctJztcclxuY29uc3QgVEVNUExBVEVfQklORElORyA9IFBSRUZJWCArICdiJztcclxuY29uc3QgVEVNUExBVEVfTElTVF9CSU5ESU5HID0gUFJFRklYICsgJ2xiJztcclxuY29uc3QgQklORElOR19JRCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2lkJztcclxuY29uc3QgU1RBVEVfUEFUSCA9IFBSRUZJWCArICdzcGF0aCc7XHJcbmNvbnN0IFRFTVBMQVRFX1BMQUNFTUVOVCA9IFBSRUZJWCArICdlbCc7XHJcbmNvbnN0IFNUQVRFX05BTUUgPSBQUkVGSVggKyAnc3RhdGUtbmFtZSc7XHJcbmNvbnN0IFNDT1BFX1BSRUZJWCA9ICdzJztcclxuY29uc3QgSVRFTV9JTkRFWCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2R4JztcclxuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICd0cCc7XHJcbmNvbnN0IElURU1fU1VGRklYID0gJ2knO1xyXG5jb25zdCBTVEFURV9ERUxJTUlURVIgPSAnLSc7XHJcbmNvbnN0IFNFTEYgPSAnJztcclxuY29uc3QgRlVMTF9DSEFOR0UgPSAnIF9mdWxsX2NoYW5nZV8gJztcclxuXHJcbmNvbnN0IEJBU0UgPSAnMSc7XHJcbmNvbnN0IENPTVBPTkVOVCA9ICcyJztcclxuY29uc3QgTElTVCA9ICczJztcclxuY29uc3QgSVRFTSA9ICdfaXRlbV8nO1xyXG5jb25zdCBDT01QT05FTlRfTElTVCA9ICc1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQUkVGSVgsXHJcbiAgVEVNUExBVEVfQklORElORyxcclxuICBURU1QTEFURV9MSVNUX0JJTkRJTkcsXHJcbiAgQklORElOR19JRCxcclxuICBTVEFURV9QQVRILFxyXG4gIFRFTVBMQVRFX1BMQUNFTUVOVCxcclxuICBTVEFURV9OQU1FLFxyXG4gIFNDT1BFX1BSRUZJWCxcclxuICBJVEVNX0lOREVYLFxyXG4gIENPTVBPTkVOVF9UWVBFLFxyXG4gIElURU1fU1VGRklYLFxyXG4gIFNUQVRFX0RFTElNSVRFUixcclxuICBCQVNFLFxyXG4gIENPTVBPTkVOVCxcclxuICBMSVNULFxyXG4gIElURU0sXHJcbiAgU0VMRixcclxuICBGVUxMX0NIQU5HRSxcclxuICBDT01QT05FTlRfTElTVFxyXG59O1xyXG4iLCJjb25zdCBTVFJJUF9DT01NRU5UUyA9IC8oXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLyl8KFxccyo9W14sXFwpXSooKCcoPzpcXFxcJ3xbXidcXHJcXG5dKSonKXwoXCIoPzpcXFxcXCJ8W15cIlxcclxcbl0pKlwiKSl8KFxccyo9W14sXFwpXSopKS9tZztcclxuY29uc3QgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNUUklQX0NPTU1FTlRTLFxyXG4gIEFSR1VNRU5UX05BTUVTLFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc09iamVjdEluQnJhY2tldHMsXHJcbiAgaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNFbXB0eSxcclxuICBpc0xpbmssXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQgKG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQgKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xpbmsgKG9iaikge1xyXG4gIGNvbnN0IHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcclxuICByZXR1cm4gWzAsIDEsIDJdLnNvbWUoKGlkeCkgPT4gaWR4ID09PSBzbGFzaElkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSkge1xyXG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxufVxyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL29iamVjdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhcyxcclxuICBnZXRGYWxzZVBhdGhzLFxyXG4gIHRvRGFzaENhc2UsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG4gIGdldFJlYWxOYW1lLFxyXG59O1xyXG5cclxuY29uc3QgTkFNRVMgPSB7XHJcbiAgcmVhbDoge30sXHJcbiAgc2hvcnQ6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydE5hbWUgKG5hbWUpIHtcclxuICBpZiAoTkFNRVMucmVhbFtuYW1lXSkge1xyXG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xyXG4gIHJldHVybiBOQU1FUy5yZWFsW25hbWVdID0gc2hvcnROYW1lIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhbE5hbWUgKG51bSkge1xyXG4gIHJldHVybiBOQU1FUy5zaG9ydFtudW1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKG9iaiwgZWwpIHtcclxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gaGFzKGtleXMsIGVsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmouaW5kZXhPZihlbCkgPj0gMDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aHMgKG9iaikge1xyXG4gIGNvbnN0IG9ubHlGYWxzZVBhdGhzID0ge307XHJcbiAgZ2V0RmFsc2VQYXRoKG9iaiwgb25seUZhbHNlUGF0aHMsIFtdKTtcclxuICByZXR1cm4gb25seUZhbHNlUGF0aHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aCAob2JqLCBvbmx5RmFsc2VQYXRocywgcGF0aCkge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcclxuICAgICAgZ2V0RmFsc2VQYXRoKG9ialtrZXldLCBvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmpba2V5XSAhPT0gdHJ1ZSkge1xyXG4gICAgICBzZXQob25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSksIG9ialtrZXldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRGFzaENhc2UgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gpID0+ICctJyArIG1hdGNoWzBdLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NhbWVsQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC0oLikvZywgKG1hdGNoKSA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29weTtcclxuXHJcbmZ1bmN0aW9uIGNvcHkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29weSAoe30sIHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XHJcblxyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNET01FbGVtZW50KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtpXSkpIHtcclxuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCB7fTtcclxuICAgICAgY29weShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IFtdO1xyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3RpbmF0aW9uW2ldID0gc291cmNlW2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0hUTUxTdHJpbmcsXHJcbiAgaXNET01FbGVtZW50LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudE5vdEV4aXN0c0Vycm9yIGZyb20gJy4uL2Vycm9ycy9Db21wb25lbnROb3RFeGlzdHNFcnJvcic7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5leHBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICBpbnNlcnRCZWZvcmVOb2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzIChvcmlnaW5hbCwgcmVwbGFjZW1lbnQpIHtcclxuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xyXG4gIHJldHVybiByZXBsYWNlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZSAoZWwsIG5leHRFbCkge1xyXG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwIChtYXJrdXApIHtcclxuICBjb25zdCBtYXJrdXBTdHIgPSBpc0hUTUxTdHJpbmcobWFya3VwLnRyaW0oKSkgPyBtYXJrdXAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcmt1cCkuaW5uZXJIVE1MO1xyXG5cclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuaW5uZXJIVE1MID0gbWFya3VwU3RyO1xyXG4gIHJldHVybiBkaXYuY2hpbGRyZW5bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhbGtOb2RlcyAobm9kZSwgY2IpIHtcclxuICBpZiAoIGNiKG5vZGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQXJyYXkucHJvdG90eXBlXHJcbiAgICAuc2xpY2VcclxuICAgIC5jYWxsKG5vZGUuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaCgoZWwpID0+IHdhbGtOb2RlcyhlbCwgY2IpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2RlcyAocm9vdCwgaXNXYW50ZWQpIHtcclxuICBjb25zdCBub2RlcyA9IFtdO1xyXG4gIHdhbGtOb2Rlcyhyb290LCAoZWwpID0+IGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJycpO1xyXG4gIHJldHVybiBub2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNVbmRlZmluZWQsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcmVFcXVhbDtcclxuXHJcbmZ1bmN0aW9uIGFyZUVxdWFsIChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0KSB8fCBpc1VuZGVmaW5lZChzZWNvbmQpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGZpcnN0ICE9PSB0eXBlb2Ygc2Vjb25kKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnROb2RlID0geyBjaGlsZE5vZGU6IHt9IH07XHJcblxyXG4gIGlmIChpc0FycmF5KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KFxyXG4gICAgICBmaXJzdCA/IGZpcnN0Lm1hcChlbCA9PiBlbCkgOiBbXSxcclxuICAgICAgc2Vjb25kLm1hcChlbCA9PiBlbCksXHJcbiAgICAgIHBhcmVudE5vZGVcclxuICAgICk7XHJcblxyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qoc2Vjb25kKSkge1xyXG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50Tm9kZS5jaGlsZE5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0VxdWFsaXR5IChmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHNlY29uZCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoZmlyc3Rba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyBhZGQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGZpcnN0KSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChzZWNvbmRba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyByZW1vdmU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXQsXHJcbiAgc2V0LFxyXG4gIHJlbW92ZSxcclxuICBhZGRDb25zdEZpZWxkcyxcclxuICBmb3JFYWNoLFxyXG4gIG1hcCxcclxuICBtYXBLZXlzLFxyXG4gIGZpbHRlcixcclxuICB0b09iamVjdCxcclxuICBmdWxsTWFwLFxyXG4gIHNwbGl0UGllY2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXQgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQgKG9iaiwgcGF0aCwgdmFsdWUpIHtcclxuICBpZiAoIXBhdGgubGVuZ3RoKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iaiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGRlc3QgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgaWYgKCFkZXN0WyBwYXRoW2ldIF0pIHtcclxuICAgICAgZGVzdCA9IGRlc3RbcGF0aFtpXV0gPSB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gZGVzdFsgcGF0aFtpXSBdIHx8IHt9O1xyXG4gICAgT2JqZWN0LmFzc2lnbihkZXN0WyBwYXRoW2ldIF0sIHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlIHZhbHVlW3BhdGhbaV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb25zdEZpZWxkcyAob2JqLCBmaWVsZHMpIHtcclxuICBmb3IgKGxldCBmaWVsZCBpbiBmaWVsZHMpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmllbGRzW2ZpZWxkXSB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGNvbnN0IGZpZWxkICdcIiArIGZpZWxkICsgXCInXCIpIH0sXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaCAob2JqLCBjYikge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBuZXdPYmpba2V5XSA9IGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwS2V5cyAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY29uc3QgbmV3S2V5ID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xyXG4gICAgbmV3T2JqW25ld0tleV0gPSBwcm9wO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFBpZWNlIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgICBkZWxldGUgb2JqW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxNYXAgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IHJlcyA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialsgcmVzWzBdIHx8IHJlcy5rZXkgfHwgcmVzLmsgXSA9IHJlc1sxXSB8fCByZXNbJ3ZhbHVlJ10gfHwgcmVzWyd2J107XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlciAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGlmICggY2IocHJvcCwga2V5LCBvYmopICkge1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHByb3A7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIsIHZhbCkge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICBuZXdPYmpbdl0gPSBpc0Z1bmN0aW9uKHZhbCkgPyB2YWwodikgOiB2YWw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWZpbmUgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBhcHBseSB9IGZyb20gJy4vUHJvZHVjdGlvbic7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZWZpbmUsXHJcbiAgYXBwbHksXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=