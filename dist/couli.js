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
exports.emptyNode = exports.rewriteToNode = exports.insertBeforeNode = exports.removeNode = exports.walkNodes = exports.collectHTMLNodes = exports.cloneHTMLMarkup = exports.replaceNodes = undefined;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9EZWZpbml0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9Qcm9kdWN0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUFjY2Vzc0Vycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJ2IiwibGluayIsIm9wdGlvbnNPYmoiLCJwYXJlbnRPYmoiLCJwYXJlbnRLZXkiLCJjbGFzcyIsImxlbmd0aCIsIm9wdGlvbiIsInZhbHVlIiwiZXZlbnRzIiwia2V5IiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJURU1QTEFURV9CSU5ESU5HIiwicmVtb3ZlQXR0cmlidXRlIiwidHJpbSIsIlRFTVBMQVRFX0xJU1RfQklORElORyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9iaiIsImdldENvbXBvbmVudEJ5TmFtZSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXR0cmlidXRlcyIsImF0dHIiLCJTVEFURV9OQU1FIiwiaW5uZXJMaW5rIiwiQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJmb3JjZWQiLCJrZXlzIiwiZm9yY2UiLCJpIiwiYmluZGluZ1ZhbHVlcyIsImdldFZhbHVlc1RyZWUiLCJ2YWx1ZXNUcmVlIiwidmFscyIsIml0ZW1WYWx1ZXMiLCJjb21wb25lbnRWYWx1ZXMiLCJuZXdTdGF0ZVBhdGgiLCJsYXN0SWR4IiwibnVtIiwiZWxzIiwic3RhcnQiLCJzaGlmdCIsIm1hcExpc3QiLCJjYiIsIml0ZXJhdGVMaXN0VmFsdWVzIiwiZmlsdGVyIiwiZmlsdGVyTGlzdCIsIm5ld0xpc3QiLCJzZXRWYWx1ZXMiLCJjcmVhdGVTdGF0ZU5vZGVzIiwibW9kaWZ5TGlzdCIsInNlbmRUb1JlbmRlclF1ZXVlIiwiQ0hBTkdFUyIsImNoYW5nZXMiLCJjb2xsZWN0aW5nIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImNoYW5nZSIsImlzQ29sbGVjdGluZ0NoYW5nZXMiLCJhZGRMaWZlQ3ljbGVIb29rIiwiaG9va1R5cGUiLCJob29rIiwidmFsdWVzTm9kZSIsImNyZWF0ZVN0YXRlTm9kZSIsInZhbHVlc05vZGVzIiwidmFsdWVOb2RlIiwicmVkdWNlIiwiYSIsImNoYW5nZVZhbHVlcyIsImNhbGxlZERlcGVuZGVuY2VzIiwiRlVMTF9DSEFOR0UiLCJlbmQiLCJzZXRWYWx1ZSIsIkJpbmRpbmdOb3RFeGlzdHNFcnJvciIsInNldFZhbHVlRm9yTGlzdCIsInNldFZhbHVlRm9yQ29tcG9uZW50IiwiZXF1YWwiLCJodG1sIiwiZGVwZW5kYW50IiwiZGVwZW5kYW50S2V5IiwibmV3VmFsdWUiLCJhcnIiLCJpbmRleEVxdWFsaXR5IiwicmVtb3ZlTGlzdEl0ZW0iLCJhY3Rpb24iLCJsaXN0UGF0aCIsIml0ZW1OYW1lIiwiYWRkVG9MaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJzcGxpY2UiLCJsaXN0QmluZGluZyIsInJlbW92ZWRET01Ob2RlIiwicmVtb3ZlZE5vZGUiLCJjcmVhdGVBbmRBcHBlbmRTdHlsZXMiLCJyZW5kZXJDaGFuZ2VzIiwicmVuZGVyIiwiYXBwbHlNYXJrdXAiLCJhcHBseUNsYXNzZXMiLCJzdHlsZSIsImFwcGx5U3R5bGVzIiwiYXR0cnMiLCJhcHBseUF0dHJpYnV0ZXMiLCJjb21wb25lbnRDaGFuZ2VzIiwiZWxlbWVudElkIiwiY29tcG9uZW50SWQiLCJjb21wb25lbnRBY2Nlc3NvciIsInJlbmRlckxpc3QiLCJyZW5kZXJDb21wb25lbnQiLCJ1cGRhdGVDb21wb25lbnQiLCJkcmF3Q29tcG9uZW50IiwiaXRlbVdyYXBwZXIiLCJDT01QT05FTlQiLCJyZW5kZXJGdW5jIiwicmVuZGVyVHlwZSIsImNoaWxkU3RhdGVQYXRoIiwiY2hpbGRNYXJrdXAiLCJpdGVtQWNjZXNzb3IiLCJjb21wb25lbnRNYXJrdXAiLCJjaGFuZ2VUeXBlIiwic3RhdGVQYXRoVG9CaW5kaW5nIiwibGlzdENvbXBvbmVudCIsIml0ZW1zVmFsdWVzIiwidXBkYXRlTGlzdCIsImxpc3RGcmFnbWVudCIsImJ1aWxkTGlzdCIsImxpc3ROb2RlIiwibmV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJMSVNUIiwiQ09NUE9ORU5UX0xJU1QiLCJpbnNlcnRCZWZvcmUiLCJyYW5nZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtVmFsdWUiLCJpdGVtSW5kZXgiLCJuZXdJdGVtSW5kZXgiLCJsaXN0SXRlbU1hcmt1cCIsIml0ZW1zQ2hhbmdlcyIsInJlbW92ZWRDb3VudCIsImZpeEluZGV4ZXMiLCJkaWZmIiwiaXRlbXNOb2RlcyIsInByZXZJZHgiLCJuZXdJZHgiLCJjbGFzc2VzIiwibm9ybWFsaXplU3R5bGVzIiwic3R5bGVPYmoiLCJzdHlsZVN0ciIsInN0eWxlRWwiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJjb21wb25lbnROYW1lIiwibWVzc2FnZSIsIkVycm9yIiwiU3RhdGVBY2Nlc3NFcnJvciIsIlN0YXRlTG9va3VwRXJyb3IiLCJhZGRpdGlvbmFsSW5mbyIsIkxJQl9OQU1FIiwiQVRUUl9QUkVGSVgiLCJTVEFURV9QQVRIIiwiVEVNUExBVEVfUExBQ0VNRU5UIiwiU0NPUEVfUFJFRklYIiwiSVRFTV9TVUZGSVgiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNPYmplY3RJbkJyYWNrZXRzIiwiaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIiwiaXNTdHJpbmciLCJpc0hUTUxTdHJpbmciLCJpc051bWJlciIsImlzRE9NRWxlbWVudCIsImlzVW5kZWZpbmVkIiwiaXNFbXB0eSIsImlzTGluayIsImdldE9iamVjdFR5cGUiLCJzbGFzaElkeCIsInNvbWUiLCJoYXMiLCJnZXRGYWxzZVBhdGhzIiwidG9EYXNoQ2FzZSIsInRvQ2FtZWxDYXNlIiwiZ2V0U2hvcnROYW1lIiwiZ2V0UmVhbE5hbWUiLCJOQU1FUyIsInJlYWwiLCJzaG9ydCIsInNob3J0TmFtZSIsIm9ubHlGYWxzZVBhdGhzIiwiZ2V0RmFsc2VQYXRoIiwic3RyIiwidG9VcHBlckNhc2UiLCJjb3B5IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvcHlBcnJheSIsInJlcGxhY2VOb2RlcyIsImNsb25lSFRNTE1hcmt1cCIsImNvbGxlY3RIVE1MTm9kZXMiLCJ3YWxrTm9kZXMiLCJyZW1vdmVOb2RlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInJld3JpdGVUb05vZGUiLCJlbXB0eU5vZGUiLCJvcmlnaW5hbCIsInJlcGxhY2VtZW50IiwicmVwbGFjZUNoaWxkIiwibmV4dEVsIiwibWFya3VwU3RyIiwiZGl2Iiwibm9kZSIsInJvb3QiLCJpc1dhbnRlZCIsIm5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0Iiwid3JpdGVUb05vZGUiLCJ0ZXh0Tm9kZSIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiYXJlRXF1YWwiLCJmaXJzdCIsInNlY29uZCIsImNoaWxkTm9kZSIsImNoZWNrS2V5c0VxdWFsaXR5IiwiYWRkQ29uc3RGaWVsZHMiLCJtYXBLZXlzIiwidG9PYmplY3QiLCJmdWxsTWFwIiwic3BsaXRQaWVjZSIsImRlc3QiLCJmaWVsZHMiLCJmaWVsZCIsImRlZmluZVByb3BlcnR5IiwicHJvcCIsIm5ld09iaiIsIm5ld0tleSIsInJlcyIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7OztBQUNBOzs7O0FB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LEVBQXRCLEVBQTBCO0FBQ3hCLE1BQU1vTSxTQUFTLEVBQWY7QUFDQSxPQUFLLElBQUlsVCxHQUFULElBQWdCUyxHQUFoQixFQUFxQjtBQUNuQixRQUFNd1MsT0FBT3hTLElBQUlULEdBQUosQ0FBYjtBQUNBLFFBQUs4RyxHQUFHbU0sSUFBSCxFQUFTalQsR0FBVCxFQUFjUyxHQUFkLENBQUwsRUFBMEI7QUFDeEJ5UyxhQUFPbFQsR0FBUCxJQUFjaVQsSUFBZDtBQUNEO0FBQ0Y7QUFDRCxTQUFPQyxNQUFQO0FBQ0Q7O0FBRUQsU0FBU1IsUUFBVCxDQUFtQm5KLEdBQW5CLEVBQXdCOEosR0FBeEIsRUFBNkI7QUFDM0IsTUFBTUgsU0FBUyxFQUFmO0FBQ0EzSixNQUFJak0sT0FBSixDQUFZLFVBQUNnQyxDQUFELEVBQU87QUFDakI0VCxXQUFPNVQsQ0FBUCxJQUFZLDBCQUFXK1QsR0FBWCxJQUFrQkEsSUFBSS9ULENBQUosQ0FBbEIsR0FBMkIrVCxHQUF2QztBQUNELEdBRkQ7QUFHQSxTQUFPSCxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNoSkQ7O0FBQ0E7O0FBRUFJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZjNhLDRCQURlO0FBRWZtTDtBQUZlLENBQWpCLEMiLCJmaWxlIjoiY291bGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuaW1wb3J0IFJFIGZyb20gJy4vZ2xvYmFscy9yZWdleHAnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgbWFwS2V5cywgdG9PYmplY3QgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCBjb3B5IGZyb20gJy4vaGVscGVycy9jb3B5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRW1wdHksXHJcbiAgaXNET01FbGVtZW50LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGhhcyxcclxuICB0b0NhbWVsQ2FzZSxcclxuICBnZXRTaG9ydE5hbWUsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyxcclxufSBmcm9tICcuL1ZpZXcnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZnJvbSAnLi9lcnJvcnMvQ29tcG9uZW50UmVkZWZpbmVFcnJvcic7XHJcbmltcG9ydCBTY29wZU5hbWVDb2xsaXNpb25FcnJvciBmcm9tICcuL2Vycm9ycy9TY29wZU5hbWVDb2xsaXNpb25FcnJvcic7XHJcblxyXG5cclxuY29uc3QgVkFMVUVfVFlQRVMgPSBbJ3N0eWxlJywgJ2NsYXNzJywgJ3ZhbHVlJywgJ2F0dHJzJywgJ2h0bWwnXTtcclxuY29uc3QgUkVTRVJWRURfSE9PS1NfTkFNRVMgPSBbJ21vdW50JywgJ3VwZGF0ZScsICdyZW1vdmUnXTtcclxuY29uc3QgREVGQVVMVF9IT09LUyA9IHRvT2JqZWN0KFJFU0VSVkVEX0hPT0tTX05BTUVTLCAoKSA9PiAoKSA9PiB7fSk7XHJcbmNvbnN0IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgPSBWQUxVRV9UWVBFUy5jb25jYXQoWydldmVudHMnLCAnaG9va3MnLCAnbGlzdEl0ZW0nLCBMSUJfQVRUUi5TRUxGXSk7XHJcblxyXG5leHBvcnQge1xyXG4gIGRlZmluZSxcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIHNob3J0ZW5CaW5kaW5nSWQsXHJcbiAgaXNDb21wb25lbnQsXHJcbiAgVkFMVUVfVFlQRVMsXHJcbiAgUkVTRVJWRURfQklORElOR19OQU1FUyxcclxufTtcclxuXHJcbmxldCBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbmNvbnN0IENPTVBPTkVOVFMgPSB7fTtcclxuXHJcbmZ1bmN0aW9uIGRlZmluZSAobmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzKSB7XHJcbiAgY29uc3QgYXJncyA9IGlzT2JqZWN0KG5hbWUpID8gbmFtZSA6IHsgbmFtZSwgbWFya3VwLCBiaW5kaW5ncywgc3R5bGVzIH07XHJcblxyXG4gIG5hbWUgPSB0b0NhbWVsQ2FzZShhcmdzLm5hbWUpO1xyXG5cclxuICBpZiAoQ09NUE9ORU5UU1tuYW1lXSkge1xyXG4gICAgdGhyb3cgbmV3IENvbXBvbmVudFJlZGVmaW5lRXJyb3IobmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnRIVE1MTWFya3VwID0gY2xvbmVIVE1MTWFya3VwKGFyZ3MubWFya3VwKTtcclxuICBjb21wb25lbnRIVE1MTWFya3VwLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcblxyXG4gIENPTVBPTkVOVF9DT1VOVEVSID0gMDtcclxuICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICBuYW1lLFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICAgIHN0YXRlUGF0aDogW25hbWVdLFxyXG4gICAgc3RhdGVOYW1lczoge30sXHJcbiAgICBtYXJrdXA6IGNvbXBvbmVudEhUTUxNYXJrdXAsXHJcbiAgICBldmFsdWF0ZToge30sXHJcbiAgICBsaW5rczoge30sXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIG91dGVyTmFtZXM6IHt9LFxyXG4gICAgX2xpbmtzOiB7fSxcclxuICB9O1xyXG5cclxuICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KTtcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplZE9wdGlvbnMgPSBub3JtYWxpemVVc2VyT3B0aW9ucyhhcmdzLmJpbmRpbmdzLCB7IHN0YXRlOiB7fSB9KTtcclxuICBjb3B5KGNvbXBvbmVudCwgbm9ybWFsaXplZE9wdGlvbnMpO1xyXG5cclxuICBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlSWQsIHsgc3RhdGVQYXRoOiBbXSwgbGlua3M6IHt9LCBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyB9KTtcclxuXHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzKCBwcmVwYXJlU3R5bGVzKGFyZ3Muc3R5bGVzLCBjb21wb25lbnQpICk7XHJcblxyXG4gIHJldHVybiBDT01QT05FTlRTW25hbWVdID0gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAgKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCkge1xyXG4gIHdhbGtOb2Rlcyhjb21wb25lbnRIVE1MTWFya3VwLCAoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGJpbmRpbmdPcHRzID0gYW5hbHl6ZUJpbmRpbmcoSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmICghYmluZGluZ09wdHMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGJpbmRpbmdPcHRzLm5hbWUsIGNvbXBvbmVudCwgSFRNTE5vZGUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBzZXRDb21wb25lbnQoYmluZGluZywgYmluZGluZ09wdHMpO1xyXG4gICAgICBIVE1MTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nLm5hbWVdID0gYmluZGluZztcclxuICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCwgY29tcG9uZW50Lm5hbWUgKyAnLScgKyBiaW5kaW5nLm5hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nT3B0cy5pc0xpc3QpIHtcclxuICAgICAgY29uc3QgaXRlbU5vZGUgPSBIVE1MTm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgbW9kaWZ5VG9MaXN0QmluZGluZyhiaW5kaW5nLCBpdGVtTm9kZSk7XHJcblxyXG4gICAgICBpZiAoaXNDb21wb25lbnQoaXRlbU5vZGUpKSB7XHJcbiAgICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcubGlzdEl0ZW0sIGdldENvbXBvbmVudE9wdHMoaXRlbU5vZGUpKTtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChpdGVtTm9kZSwgYmluZGluZy5saXN0SXRlbSk7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q29tcG9uZW50IChjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3Qgc3RhdGVOYW1lcyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50QmluZGluZy5zdGF0ZU5hbWVzLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5zdGF0ZU5hbWVzKTtcclxuICBsZXQgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm5hbWUgKyAneCcgKyBDT01QT05FTlRfQ09VTlRFUisrO1xyXG5cclxuICBpZiAoc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpIHtcclxuICAgIGlmIChzdGF0ZU5hbWVzW3N1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lXSkge1xyXG4gICAgICB0aHJvdyBuZXcgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3Ioc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZTtcclxuICAgIGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lc1tzdGF0ZUlkXSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb3B5KGNvbXBvbmVudEJpbmRpbmcsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIGNvbXBvbmVudEJpbmRpbmcsIHtcclxuICAgIGlkOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVJZCxcclxuICAgIG5hbWU6IHN0YXRlSWQsXHJcbiAgICBzdGF0ZU5hbWU6IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnRCaW5kaW5nLnN0YXRlUGF0aC5jb25jYXQoc3RhdGVJZCksXHJcbiAgICBtYXJrdXA6IHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSksXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICAgIHN0YXRlTmFtZXMsXHJcbiAgICBfbGlua3M6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMubGlua3MpLFxyXG4gICAgb3V0ZXJOYW1lczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5yZXZMaW5rcyksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVCaW5kaW5ncyAoY29tcG9uZW50LCBjdXJyZW50U3RhdGVJZCwgcGFyZW50Q29tcG9uZW50KSB7XHJcbiAgY29uc3QgY29tcG9uZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbXBvbmVudC5tYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQsIHNob3J0ZW5CaW5kaW5nSWQoIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgTElCX0FUVFIuU0VMRiApKTtcclxuICBjb21wb25lbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudC5tYXJrdXApO1xyXG4gIGNvbXBvbmVudC5zdGF0ZVBhdGggPSBwYXJlbnRDb21wb25lbnQuc3RhdGVQYXRoLmNvbmNhdChjb21wb25lbnQuc3RhdGVJZCk7XHJcbiAgY29tcG9uZW50LnN0YXRlTmFtZXMgPSBwYXJlbnRDb21wb25lbnQuc3RhdGVOYW1lcztcclxuXHJcbiAgY29uc3Qgc3ViQ29tcG9uZW50cyA9IFtdO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBvbGRCaW5kaW5nSWQgPSBiaW5kaW5nLmlkO1xyXG4gICAgY29uc3QgbmV3QmluZGluZ0lkID0gY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBiaW5kaW5nTmFtZTtcclxuICAgIGNvbnN0IHNob3J0SWQgPSBzaG9ydGVuQmluZGluZ0lkKG5ld0JpbmRpbmdJZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gY29tcG9uZW50V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIExJQl9BVFRSLlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydElkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIG5ld0JpbmRpbmdJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICAgIHN0YXRlUGF0aDogY29tcG9uZW50LnN0YXRlUGF0aC5zbGljZSgpLFxyXG4gICAgICBob29rczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9IT09LUywgYmluZGluZy5ob29rcyksXHJcbiAgICAgIGlkOiBuZXdCaW5kaW5nSWQsXHJcbiAgICAgIHNob3J0SWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcmVwYXJlUmVhY3RpdmVGdW5jcyhiaW5kaW5nLCBjb21wb25lbnQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBiaW5kaW5nLnN0YXRlUGF0aC5wdXNoKGJpbmRpbmdOYW1lKTtcclxuICAgICAgYmluZGluZy5zdGF0ZU5hbWVzID0gY29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gICAgICBwcmVwYXJlQmluZGluZ3MgKGJpbmRpbmcubGlzdEl0ZW0sIG5ld0JpbmRpbmdJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLklURU0gKyBiaW5kaW5nLmxpc3RJdGVtLm5hbWUsIGJpbmRpbmcpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgc3ViQ29tcG9uZW50cy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzZXR1cENvbXBvbmVudHNMaW5rcyhjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCk7XHJcbiAgY29tcG9uZW50LnRlbXBsYXRlID0gY29tcG9uZW50Lm1hcmt1cC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gIHN1YkNvbXBvbmVudHMuZm9yRWFjaCgoc3ViQ29tcG9uZW50KSA9PiB7XHJcbiAgICBwcmVwYXJlQmluZGluZ3MgKHN1YkNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBzdWJDb21wb25lbnQuc3RhdGVJZCwgY29tcG9uZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuY3MgKGJpbmRpbmcsIGNvbXBvbmVudERhdGEpIHtcclxuICBWQUxVRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XHJcbiAgICBjb25zdCByZWFjdGl2ZUZ1bmMgPSBiaW5kaW5nW3R5cGVdO1xyXG4gICAgaWYgKCFyZWFjdGl2ZUZ1bmMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRpbmcuZXZhbHVhdGVbdHlwZV0gPSBwcmVwYXJlUmVhY3RpdmVGdW5jKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSlcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVJlYWN0aXZlRnVuYyAoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKSB7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBnZXREZXBlbmRlbmNpZXNOYW1lcyhyZWFjdGl2ZUZ1bmMpO1xyXG5cclxuICBkZXBlbmRlbmNpZXNOYW1lcy5mb3JFYWNoKChkZXBlbmRlbmN5TmFtZSkgPT4ge1xyXG4gICAgaWYgKGlzRW1wdHkoY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0pKSB7XHJcbiAgICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdID0gY3JlYXRlQmluZGluZyhkZXBlbmRlbmN5TmFtZSwgY29tcG9uZW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0uZGVwZW5kYW50c1sgYmluZGluZy5uYW1lICsgJzonICsgdHlwZSBdID0geyBuYW1lOiBiaW5kaW5nLm5hbWUsIHR5cGUgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuICh2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSkgPT4gY29tcHV0ZSAocmVhY3RpdmVGdW5jLCB2YWx1ZXMsIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llc05hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jUGFyYW1zID0gZ2V0UGFyYW1OYW1lcyhmdW5jKTtcclxuICBjb25zdCB2YWx1ZXNPYmpSZWdFeHAgPSAgbmV3IFJlZ0V4cCgnXFxcXCcgKyBmdW5jUGFyYW1zWzBdICsgJ1xcXFwuKFxcXFxEW15cXFxcc1xcXFxXXSspJywgJ2cnKTtcclxuICBjb25zdCBkZXBlbmRlbmNpZXNOYW1lcyA9IFtdO1xyXG4gIGNvbnN0IGZ1bmNTdHIgPSBmdW5jLnRvU3RyaW5nKCk7XHJcbiAgbGV0IGRlcGVuZGVuY3lOYW1lO1xyXG4gIHdoaWxlIChkZXBlbmRlbmN5TmFtZSA9IHZhbHVlc09ialJlZ0V4cC5leGVjKGZ1bmNTdHIpKSB7XHJcbiAgICBkZXBlbmRlbmNpZXNOYW1lcy5wdXNoKGRlcGVuZGVuY3lOYW1lWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRlcGVuZGVuY2llc05hbWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKGZ1bmMpIHtcclxuICBjb25zdCBmdW5jU3RyV2l0aG91dENvbW1lbnRzID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoUkUuU1RSSVBfQ09NTUVOVFMsICcnKTtcclxuICBjb25zdCBwYXJhbXNTdHIgPSBmdW5jU3RyV2l0aG91dENvbW1lbnRzLnNsaWNlKFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcoJykgKzEsXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJyknKVxyXG4gICk7XHJcbiAgcmV0dXJuIHBhcmFtc1N0ci5tYXRjaChSRS5BUkdVTUVOVF9OQU1FUykgfHwgW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGUgKGZ1bmMsIHZhbHVlc09iaiwgY29tcG9uZW50SW50ZXJmYWNlKSB7XHJcbiAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBnZXRPbmx5VmFsdWVzKHZhbHVlc09iaiksIGNvbXBvbmVudEludGVyZmFjZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQ29tcG9uZW50c0xpbmtzIChjb21wb25lbnQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIE9iamVjdC5hc3NpZ24oXHJcbiAgICBwYXJlbnRDb21wb25lbnQubGlua3MsXHJcbiAgICBtYXAoY29tcG9uZW50Lm91dGVyTmFtZXMsIChrLCB2KSA9PiAoeyBsaW5rOiBrLCBjb21wb25lbnQ6IGNvbXBvbmVudC5zdGF0ZUlkIH0pKVxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb25zT2JqLCBwYXJlbnRPYmosIHBhcmVudEtleSkge1xyXG4gIGlmIChpc0Z1bmN0aW9uIChvcHRpb25zT2JqKSkge1xyXG4gICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGNsYXNzOiBvcHRpb25zT2JqIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob3B0aW9uc09iaikpIHtcclxuXHJcbiAgICBpZiAob3B0aW9uc09iai5sZW5ndGggPiAxKSB7XHJcbiAgICAgIG9wdGlvbnNPYmouZm9yRWFjaCgob3B0aW9uKSA9PiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uLCBwYXJlbnRPYmosIHBhcmVudEtleSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IHZhbHVlOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzT2JqZWN0KG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBldmVudHM6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKG9wdGlvbnNPYmosICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICBkZWxldGUgb3B0aW9uc09ialtrZXldO1xyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoa2V5KTtcclxuXHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB2YWx1ZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IGJpbmRpbmc7XHJcbiAgICBub3JtYWxpemVVc2VyT3B0aW9ucyh2YWx1ZSwgcGFyZW50T2JqWydzdGF0ZSddLCBrZXkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyZW50T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmFseXplQmluZGluZyAoZWwpIHtcclxuICBpZiAoaXNDb21wb25lbnQoZWwpKSB7XHJcbiAgICByZXR1cm4gZ2V0Q29tcG9uZW50T3B0cyhlbCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWVsLmdldEF0dHJpYnV0ZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBsZXQgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSB9O1xyXG4gIH1cclxuXHJcbiAgbmFtZSA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9MSVNUX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCksIGlzTGlzdDogdHJ1ZSB9O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQgKGVsKSB7XHJcbiAgY29uc3QgdGFnTmFtZSA9IGVsLnRhZ05hbWUgJiYgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIHJldHVybiB0YWdOYW1lICYmIENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKHRhZ05hbWUpIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudE9wdHMgKG9iaikge1xyXG4gIGNvbnN0IG5hbWUgPSB0b0NhbWVsQ2FzZSggb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudEJ5TmFtZShuYW1lKTtcclxuICBjb25zdCBsaW5rcyA9IHt9O1xyXG4gIGNvbnN0IHJldkxpbmtzID0ge307XHJcbiAgbGV0IHN0YXRlTmFtZSA9IG51bGw7XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iai5hdHRyaWJ1dGVzKVxyXG4gICAgLmZvckVhY2goKGF0dHIpID0+IHtcclxuXHJcbiAgICAgIGlmIChhdHRyLm5hbWUgPT09IExJQl9BVFRSLlNUQVRFX05BTUUpIHtcclxuICAgICAgICBzdGF0ZU5hbWUgPSBhdHRyLnZhbHVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5uZXJMaW5rID0gdG9DYW1lbENhc2UoYXR0ci5uYW1lKTtcclxuICAgICAgbGlua3NbaW5uZXJMaW5rXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgIHJldkxpbmtzW2F0dHIudmFsdWVdID0gaW5uZXJMaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICBsaW5rczogbGlua3MsXHJcbiAgICByZXZMaW5rczogcmV2TGlua3MsXHJcbiAgICBzdGF0ZU5hbWUsXHJcbiAgICBuYW1lLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QnlOYW1lIChuYW1lKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gQ09NUE9ORU5UU1sgdG9DYW1lbENhc2UobmFtZSkgXTtcclxuXHJcbiAgaWYgKCFjb21wb25lbnQpIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnROb3RFeGlzdHNFcnJvcihuYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmcgKG5hbWUsIGNvbXBvbmVudCwgZWwpIHtcclxuICBjb25zdCBjb21wb25lbnRPcHRzID0gKGNvbXBvbmVudCkgPyB7XHJcbiAgICBpZDogY29tcG9uZW50LnN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLFxyXG4gICAgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMsXHJcbiAgICBpc0xpc3RJdGVtOiBjb21wb25lbnQuaXNMaXN0LFxyXG4gICAgc3RhdGVJZDogbmFtZSxcclxuICB9IDoge307XHJcblxyXG4gIGNvbnN0IGVsT3B0cyA9IChlbCkgPyB7XHJcbiAgICBpbml0VmFsdWU6IGVsLnZhbHVlIHx8IGVsLmlubmVySFRNTFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgbmFtZSxcclxuICAgIGxpc3RlbmVyczogW10sXHJcbiAgICBtYXJrdXA6IGVsLFxyXG4gICAgZGVwZW5kYW50czoge30sXHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgc3RhdGU6IHsgW0xJQl9BVFRSLlNFTEZdOiB7fSB9LFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG5cclxuICB9LCBjb21wb25lbnRPcHRzLCBlbE9wdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0xpc3RCaW5kaW5nIChiaW5kaW5nLCBpdGVtTWFya3VwKSB7XHJcbiAgYmluZGluZy5pc0xpc3QgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiaW5kaW5nLCB7XHJcbiAgICBtYXJrdXA6IGl0ZW1NYXJrdXAsXHJcbiAgICBsaXN0SXRlbTogY3JlYXRlQmluZGluZyhpdGVtTWFya3VwLnRhZ05hbWUsIGJpbmRpbmcsIGl0ZW1NYXJrdXApLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG9ydGVuQmluZGluZ0lkIChpZCkge1xyXG4gIHJldHVybiBpZFxyXG4gICAgLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUilcclxuICAgIC5tYXAoKGVsKSA9PiBnZXRTaG9ydE5hbWUoZWwpKVxyXG4gICAgLmpvaW4oTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZVN0eWxlcyAoc3R5bGVBcmcsIGNvbXBvbmVudCkge1xyXG4gIHJldHVybiBtYXBLZXlzKHN0eWxlQXJnLCAoa2V5KSA9PiBrZXlcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4gc2VsZWN0b3IudHJpbSgpKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHtcclxuXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAgJy4nICsgY29tcG9uZW50Lm5hbWU7XHJcblxyXG4gICAgICBpZiAoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBpc0JpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbIHNlbGVjdG9yLnNwbGl0KCcgJylbMF0uc3BsaXQoJzo6JylbMF0uc3BsaXQoJzonKVswXSBdO1xyXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IGlzQmluZGluZyA/IGNsYXNzTmFtZSArICctJyA6ICcnO1xyXG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXggKyBzZWxlY3RvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICAgIH0pXHJcbiAgICAuam9pbignLCcpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5pbXBvcnQgeyBnZXRSZWFsTmFtZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlc1xyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnNcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwRXZlbnRIYW5kbGVycyAoZWxlbWVudCkge1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50SGFuZGxlcnMpO1xyXG5cclxuICBjb25zdCBtYXJrdXAgPSBlbGVtZW50LmVsO1xyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBldmVudEhhbmRsZXJzKSB7XHJcbiAgICBtYXJrdXAuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0KGUsIGV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSwgZWxlbWVudCkpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgZ2F0aGVyRXZlbnRIYW5kbGVycyAoY29tcG9uZW50LCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5zdGF0ZSkge1xyXG4gICAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nKSA9PiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQubGlzdEl0ZW0pIHtcclxuICAgIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoY29tcG9uZW50Lmxpc3RJdGVtLCBnYXRoZXJlZEhhbmRsZXJzKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckV2ZW50SGFuZGxlcnMgKGJpbmRpbmcsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBpZiAoIWJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gYmluZGluZy5ldmVudHMpIHtcclxuICAgIGlmICghZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdKSB7XHJcbiAgICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXVtiaW5kaW5nLnNob3J0SWRdID0gYmluZGluZy5ldmVudHNbZXZlbnROYW1lXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QgKGUsIGV2ZW50SGFuZGxlcnMsIGVsZW1lbnQpIHtcclxuICBkZWNvcmF0ZUV2ZW50KGUpO1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuICBcclxuICBsZXQgY3VySFRNTE5vZGUgPSBlLnRhcmdldDtcclxuICB3aGlsZSAoY3VySFRNTE5vZGUgIT09IGVsZW1lbnQuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgY29uc3QgYmluZGluZ0lkID0gY3VySFRNTE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQpO1xyXG4gICAgY29uc3QgZXZlbnRIYW5kbGVyID0gZXZlbnRIYW5kbGVyc1tiaW5kaW5nSWRdO1xyXG5cclxuICAgIGlmIChldmVudEhhbmRsZXIpIHtcclxuICAgICAgY29uc3QgaW5kZXhsZXNzU3RhdGVQYXRoID0gYmluZGluZ0lkLnNwbGl0KExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbiAgICAgIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKTtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gZ2V0U3RhdGVQYXRoVG9JdGVtKGN1ckhUTUxOb2RlLCBpbmRleGxlc3NTdGF0ZVBhdGgpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NvclRvRGF0YSA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50LmlkXS5jb25jYXQoc3RhdGVQYXRoVG9JdGVtKSk7XHJcblxyXG4gICAgICBldmVudEhhbmRsZXIuY2FsbCh0aGlzLCBlLCBjdXJIVE1MTm9kZSwgYWNjZXNzb3JUb0RhdGEsICtzdGF0ZVBhdGhUb0l0ZW0uc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgICAgIGlmIChlLnByb3BhZ2F0aW9uU3RvcHBlZCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjdXJIVE1MTm9kZSA9IGN1ckhUTUxOb2RlLnBhcmVudE5vZGU7XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVFdmVudCAoZSkge1xyXG4gIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uLmJpbmQoZSk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBlLnByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XHJcbiAgICBzdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlUGF0aFRvSXRlbSAoZWwsIGluZGV4bGVzc1N0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IFtdO1xyXG5cclxuICBsZXQgZWxlbWVudE5hbWU7XHJcbiAgd2hpbGUgKGVsZW1lbnROYW1lID0gZ2V0UmVhbE5hbWUoIGluZGV4bGVzc1N0YXRlUGF0aC5wb3AoKSApKSB7XHJcblxyXG4gICAgaWYgKGhhcyhlbGVtZW50TmFtZSwgTElCX0FUVFIuSVRFTSkpIHtcclxuICAgICAgZWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZS5zbGljZShMSUJfQVRUUi5JVEVNLmxlbmd0aCk7XHJcbiAgICAgIGVsID0gZ2V0VG9JdGVtTm9kZShlbCk7XHJcbiAgICAgIGNvbnN0IGlkeCA9IGVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKTtcclxuICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICBzdGF0ZVBhdGgudW5zaGlmdChpZHgsIGVsZW1lbnROYW1lKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVQYXRoLnVuc2hpZnQoZWxlbWVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlUGF0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9JdGVtTm9kZSAoZWwpIHtcclxuICBsZXQgY3VyRWwgPSBlbDtcclxuXHJcbiAgd2hpbGUgKGN1ckVsLnRhZ05hbWUgIT09ICdCT0RZJykge1xyXG4gICAgaWYgKGN1ckVsLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKSkge1xyXG4gICAgICByZXR1cm4gY3VyRWw7XHJcbiAgICB9XHJcbiAgICBjdXJFbCA9IGN1ckVsLnBhcmVudE5vZGU7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nXHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudE9wdHMsXHJcbiAgaXNDb21wb25lbnQsXHJcbn0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7IHNldHVwRXZlbnRIYW5kbGVycyB9IGZyb20gJy4vRXZlbnRIYW5kbGVyJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmV4cG9ydCB7IGFwcGx5IH07XHJcblxyXG5cclxuZnVuY3Rpb24gYXBwbHkgKHJvb3RFbGVtZW50U2VsZWN0b3IpIHtcclxuICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iocm9vdEVsZW1lbnRTZWxlY3Rvcik7XHJcbiAgY29uc3QgSFRNTE5vZGVzID0gY29sbGVjdEhUTUxOb2Rlcyhyb290RWxlbWVudCwgaXNDb21wb25lbnQpO1xyXG5cclxuICBIVE1MTm9kZXMuZm9yRWFjaCgoSFRNTE5vZGUpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudE9wdHMgPSBnZXRDb21wb25lbnRPcHRzKEhUTUxOb2RlKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBzZXR1cEVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcblxyXG4gICAgcmVwbGFjZU5vZGVzKEhUTUxOb2RlLCBlbGVtZW50LmVsKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50T3B0cyk7XHJcbiAgc2V0dXBFdmVudEhhbmRsZXJzKGVsZW1lbnQpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBnZXQsIHNldCwgZm9yRWFjaCwgbWFwIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCBTdGF0ZUFjY2Vzc0Vycm9yIGZyb20gJy4vZXJyb3JzL1N0YXRlQWNjZXNzRXJyb3InO1xyXG5pbXBvcnQgU3RhdGVMb29rdXBFcnJvciBmcm9tICcuL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yJztcclxuXHJcbmltcG9ydCB7IFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVTdGF0ZU5vZGVzLFxyXG4gIHNldFZhbHVlcyxcclxuICBtb2RpZnlMaXN0LFxyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUsXHJcbiAgYXBwbHlDaGFuZ2VzLFxyXG59IGZyb20gJy4vU3RhdGVDaGFuZ2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0VtcHR5LFxyXG4gIGlzQXJyYXksXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNOdW1iZXIsXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlRWxlbWVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBnZXRPbmx5VmFsdWVzLFxyXG4gIGdldENvbXBvbmVudCxcclxuICBzZXRTdGF0ZSxcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG59O1xyXG5cclxuY29uc3QgRUxFTUVOVFMgPSB7fTtcclxuY29uc3QgU1RBVEUgPSB7fTtcclxubGV0IEVMRU1FTlRfQ09VTlRFUiA9IDE7XHJcblxyXG5mdW5jdGlvbiBzZXRTdGF0ZSAocGF0aCwgdmFsdWUpIHtcclxuICBzZXQoU1RBVEUsIHBhdGgsIHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGUgKHBhdGgpIHtcclxuICByZXR1cm4gZ2V0KFNUQVRFLCBwYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGlkID0gRUxFTUVOVF9DT1VOVEVSKys7XHJcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudE9wdHMubmFtZTtcclxuXHJcbiAgY29uc3QgZWxlbWVudCA9IEVMRU1FTlRTW2lkXSA9IHtcclxuICAgIGlkLFxyXG4gICAgc3RhdGU6IHsgW25hbWVdOiBjb21wb25lbnRPcHRzLmNvbXBvbmVudCB9LFxyXG4gIH07XHJcblxyXG4gIFNUQVRFW2lkXSA9IHt9O1xyXG5cclxuICBjcmVhdGVTdGF0ZU5vZGVzKFtpZCwgbmFtZV0pO1xyXG5cclxuICBzZW5kVG9SZW5kZXJRdWV1ZShbaWRdLCB7IFtuYW1lXTogZmFsc2UgfSk7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgZWxlbWVudC5lbCA9IFNUQVRFW2lkXVtuYW1lXVtMSUJfQVRUUi5TRUxGXS5lbDtcclxuICBlbGVtZW50LmVsLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuQkFTRSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBY2Nlc3NvciAocGF0aCkge1xyXG4gIGNvbnN0IHZhbHVlcyA9IGdldFN0YXRlKHBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudChwYXRoKTtcclxuXHJcbiAgY29uc3QgYWNjZXNzb3IgPSB7XHJcbiAgICBjb21wb25lbnQsXHJcbiAgICB2YWx1ZXMsXHJcbiAgICBwYXRoLFxyXG4gICAgc3RhcnRUcmFuc2FjdGlvbixcclxuICAgIGFwcGx5Q2hhbmdlcyxcclxuICAgIHVwOiAobGV2ZWwpID0+IG1vdmVVcFN0YXRlUGF0aChsZXZlbCwgcGF0aC5zbGljZSgpKSxcclxuICAgIGRvd246IChhZGRpdGlvbmFsUGF0aCkgPT4gY3JlYXRlQWNjZXNzb3IocGF0aC5jb25jYXQoYWRkaXRpb25hbFBhdGgpKSxcclxuICAgIHNldDogKGNoYW5nZU9iaikgPT4gc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZU9iaiksIHBhdGgpLFxyXG4gICAgZ2V0OiAoa2V5KSA9PiBnZXRWYWx1ZXMoYWNjZXNzb3IsIGtleSwgcGF0aCksXHJcbiAgICBtYXJrdXA6IChrZXkpID0+IGtleSA/IGFjY2Vzc29yLnZhbHVlc1trZXldLmVsIDogYWNjZXNzb3IudmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsLFxyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkodmFsdWVzKSkge1xyXG4gICAgbW9kaWZ5VG9BcnJheUFjY2Vzc29yKGFjY2Vzc29yKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhY2Nlc3NvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUNoYW5nZU9iamVjdCAoY2hhbmdlT2JqKSB7XHJcbiAgcmV0dXJuIG1hcChjaGFuZ2VPYmosICh2KSA9PiB7XHJcbiAgICBjb25zdCBmb3JjZWQgPSBpc09iamVjdCh2KSAmJiBPYmplY3Qua2V5cyh2KVswXSA9PT0gJ2ZvcmNlJztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogZm9yY2VkID8gdlsnZm9yY2UnXSA6IHYsXHJcbiAgICAgIHR5cGU6ICd2YWx1ZScsXHJcbiAgICAgIGZvcmNlOiBmb3JjZWQsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnQgKHBhdGgpIHtcclxuICBsZXQgY29tcG9uZW50ID0gRUxFTUVOVFNbIHBhdGhbMF0gXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQuc3RhdGVbIHBhdGhbaV0gXTtcclxuICAgIFxyXG4gICAgaWYgKGNvbXBvbmVudC5pc0xpc3QgJiYgaSAhPT0gKHBhdGgubGVuZ3RoIC0xKSkge1xyXG4gICAgICBjb21wb25lbnQgPSBjb21wb25lbnQubGlzdEl0ZW07XHJcbiAgICAgIGkrPTI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPbmx5VmFsdWVzIChvYmopIHtcclxuICByZXR1cm4gbWFwKG9iaiwgKGJpbmRpbmdWYWx1ZXMpID0+IGJpbmRpbmdWYWx1ZXNbJ3ZhbHVlJ10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXMgKGFjY2Vzc29yLCBrZXksIHN0YXRlUGF0aCkge1xyXG4gIGNvbnN0IHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcblxyXG4gIGlmICgha2V5KSB7XHJcbiAgICByZXR1cm4gZ2V0VmFsdWVzVHJlZSh2YWx1ZXMsIGNvbXBvbmVudCwge30pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtrZXldO1xyXG4gIGlmIChiaW5kaW5nLmlzTGlzdCB8fCBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLmNvbmNhdChrZXkpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWx1ZXNba2V5XS52YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzVHJlZSAodmFsdWVzLCBjb21wb25lbnQsIHZhbHVlc1RyZWUpIHtcclxuICBmb3JFYWNoKHZhbHVlcywgKHZhbHMsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoaGFzKFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsIGJpbmRpbmdOYW1lKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHZhbHVlc1RyZWVbYmluZGluZ05hbWVdID0gW107XHJcbiAgICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgICAgICBjb25zdCBpdGVtVmFsdWVzID0gdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV1baV0gPSB7fTtcclxuICAgICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV1baV1bYmluZGluZy5saXN0SXRlbS5uYW1lXSwgYmluZGluZy5saXN0SXRlbSwgaXRlbVZhbHVlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY29tcG9uZW50VmFsdWVzID0gdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSB7fTtcclxuICAgICAgZ2V0VmFsdWVzVHJlZSh2YWx1ZXNbYmluZGluZ05hbWVdLCBiaW5kaW5nLCBjb21wb25lbnRWYWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc1RyZWVbIGNvbXBvbmVudC5fbGlua3NbYmluZGluZ05hbWVdIHx8IGJpbmRpbmdOYW1lIF0gPSB2YWxzLnZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdmFsdWVzVHJlZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVVwU3RhdGVQYXRoIChsZXZlbCwgc3RhdGVQYXRoKSB7XHJcbiAgbGV0IG5ld1N0YXRlUGF0aDtcclxuICBsZXQgbGFzdElkeCA9IHN0YXRlUGF0aC5sZW5ndGg7XHJcblxyXG4gIGlmIChsZXZlbCA9PT0gJycpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgMikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGxldmVsKSkge1xyXG4gICAgd2hpbGUgKGxhc3RJZHgtLSkge1xyXG4gICAgICBpZiAoc3RhdGVQYXRoW2xhc3RJZHhdID09PSBsZXZlbCkge1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWwgPSBsZXZlbCB8fCAxO1xyXG4gIHdoaWxlIChsYXN0SWR4LS0gJiYgbGV2ZWwtLSkge1xyXG4gICAgaWYgKGlzTnVtYmVyKCtzdGF0ZVBhdGhbbGFzdElkeCAtIDFdKSkge1xyXG4gICAgICBsYXN0SWR4LS07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvQXJyYXlBY2Nlc3NvciAoYWNjZXNzb3IpIHtcclxuICBPYmplY3QuYXNzaWduKGFjY2Vzc29yLCB7XHJcbiAgICBnZXQ6IChudW0pID0+IGNyZWF0ZUFjY2Vzc29yKGFjY2Vzc29yLnBhdGguY29uY2F0KG51bSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWUpKSxcclxuXHJcbiAgICBwdXNoOiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgdW5zaGlmdDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogMCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIGFkZDogKHN0YXJ0LCBlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQsIGVscyB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgcG9wOiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoIC0gKG51bSB8fCAxKSwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHNoaWZ0OiAobnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0OiAwLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgcmVtb3ZlOiAoc3RhcnQsIG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBsZW5ndGg6ICgpID0+IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsXHJcbiAgICB2YWx1ZTogKCkgPT4gbWFwTGlzdChhY2Nlc3NvciksXHJcbiAgICBmb3JFYWNoOiAoY2IpID0+IGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCBjYiksXHJcbiAgICBmaWx0ZXI6IChjYikgPT4gZmlsdGVyTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gICAgbWFwOiAoY2IpID0+IG1hcExpc3QoYWNjZXNzb3IsIGNiKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXRlcmF0ZUxpc3RWYWx1ZXMgKGFjY2Vzc29yLCBjYikge1xyXG4gIGFjY2Vzc29yLnZhbHVlcy5mb3JFYWNoKChlbCwgaSkgPT5cclxuICAgIGNiKFxyXG4gICAgICBnZXRWYWx1ZXNUcmVlKGVsW2FjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLCB7fSksXHJcbiAgICAgIGlcclxuICApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG5cclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiB7XHJcbiAgICBpZiAoY2IoZWwsIGkpKSB7XHJcbiAgICAgIG5ld0xpc3QucHVzaChlbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4gbmV3TGlzdC5wdXNoKCBjYiA/IGNiKGVsLCBpKSA6IGVsICkpO1xyXG4gIHJldHVybiBuZXdMaXN0O1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBzZXQsIGZvckVhY2gsIG1hcCwgdG9PYmplY3QsIG1hcEtleXMgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgYXJlRXF1YWwgZnJvbSAnLi9oZWxwZXJzL2VxdWFsaXR5JztcclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldENvbXBvbmVudCxcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBwcmVwYXJlQ2hhbmdlT2JqZWN0LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgc2V0U3RhdGUsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQgeyByZW5kZXJDaGFuZ2VzIH0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCB7IFZBTFVFX1RZUEVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZnJvbSAnLi9lcnJvcnMvQmluZGluZ05vdEV4aXN0c0Vycm9yJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0VmFsdWVzLFxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxufTtcclxuXHJcbmNvbnN0IENIQU5HRVMgPSB7IGNoYW5nZXM6IHt9LCBjb2xsZWN0aW5nOiBmYWxzZSB9O1xyXG5jb25zdCBMSUZFX0NZQ0xFX0hBTkRMRVJTID0geyBsaXN0OiBbXSB9O1xyXG5cclxuZnVuY3Rpb24gc3RhcnRUcmFuc2FjdGlvbiAoKSB7XHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzICgpIHtcclxuICBjb25zdCBjaGFuZ2VzID0gQ0hBTkdFUy5jaGFuZ2VzO1xyXG4gIENIQU5HRVMuY2hhbmdlcyA9IHt9O1xyXG4gIHJlbmRlckNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgcnVuTGlmZUN5Y2xlSG9va3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuTGlmZUN5Y2xlSG9va3MgKCkge1xyXG4gIGNvbnN0IGxpZmVDeWNsZUhhbmRsZXJzID0gTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0O1xyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdCA9IFtdO1xyXG4gIGxpZmVDeWNsZUhhbmRsZXJzLmZvckVhY2goKGgpID0+IGgoKSk7XHJcblxyXG4gIGlmICghaXNFbXB0eShDSEFOR0VTLmNoYW5nZXMpKSB7XHJcbiAgICBhcHBseUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIENIQU5HRVMuY29sbGVjdGluZyA9IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kVG9SZW5kZXJRdWV1ZSAocGF0aCwgY2hhbmdlKSB7XHJcbiAgc2V0KENIQU5HRVMuY2hhbmdlcywgcGF0aCwgY2hhbmdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb2xsZWN0aW5nQ2hhbmdlcyAoKSB7XHJcbiAgcmV0dXJuIENIQU5HRVMuY29sbGVjdGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlmZUN5Y2xlSG9vayAoaG9va1R5cGUsIGJpbmRpbmcsIHZhbHVlcywgYWNjZXNzb3IsIGlkeCkge1xyXG4gIGNvbnN0IGhvb2sgPSBiaW5kaW5nLmhvb2tzW2hvb2tUeXBlXTtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIExJRkVfQ1lDTEVfSEFORExFUlMubGlzdC5wdXNoKCgpID0+IHtcclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmcubmFtZSB8fCBMSUJfQVRUUi5TRUxGXS5lbDtcclxuICAgIGNvbnN0IHZhbHMgPSAhYmluZGluZy5uYW1lID8gZ2V0T25seVZhbHVlcyh2YWx1ZXMpIDogdmFsdWVzW2JpbmRpbmcubmFtZV0udmFsdWU7XHJcbiAgICBob29rKGVsLCB2YWxzLCBhY2Nlc3NvciwgaWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlcyAoc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgdmFsdWVzTm9kZSA9IGNyZWF0ZVN0YXRlTm9kZShjb21wb25lbnQpO1xyXG4gIHNldFN0YXRlKHN0YXRlUGF0aCwgdmFsdWVzTm9kZSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygnbW91bnQnLCBjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIHZhbHVlc05vZGUsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc05vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZSAoY29tcG9uZW50KSB7XHJcbiAgY29uc3QgdmFsdWVzTm9kZXMgPSBtYXAoY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlTm9kZSA9IGJpbmRpbmcuaXNMaXN0ID8gW10gOiB7fTtcclxuXHJcbiAgICByZXR1cm4gVkFMVUVfVFlQRVMucmVkdWNlKChhLCBrZXkpID0+IHtcclxuICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICd2YWx1ZSc6XHJcbiAgICAgICAgY2FzZSAnaHRtbCc6XHJcbiAgICAgICAgICB2YWx1ZSA9IGJpbmRpbmcuaW5pdFZhbHVlIHx8ICcnXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHZhbHVlID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFba2V5XSA9IHZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgICB9LCB2YWx1ZU5vZGUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih2YWx1ZXNOb2RlcywgeyBbTElCX0FUVFIuU0VMRl06IHRvT2JqZWN0KFZBTFVFX1RZUEVTLCB7fSkgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlcyAoY2hhbmdlVmFsdWVzLCBzdGF0ZVBhdGgsIGNhbGxlZERlcGVuZGVuY2VzKSB7XHJcbiAgY2FsbGVkRGVwZW5kZW5jZXMgPSBjYWxsZWREZXBlbmRlbmNlcyB8fCBbXTtcclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcblxyXG4gIGlmICghYWNjZXNzb3IudmFsdWVzKSB7XHJcbiAgICBhY2Nlc3Nvci52YWx1ZXMgPSBjcmVhdGVTdGF0ZU5vZGVzKHN0YXRlUGF0aCk7XHJcbiAgICBjb25zdCBzdGFydCA9ICtzdGF0ZVBhdGguc2xpY2UoLTIpWzBdO1xyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoc3RhdGVQYXRoLCB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgYWRkOiB7IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgMSB9IH0gfSlcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlVmFsdWVzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4gc2V0VmFsdWUoYmluZGluZ05hbWUsIGNoYW5nZSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKSk7XHJcblxyXG4gIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGFjY2Vzc29yLmNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgYWNjZXNzb3IudmFsdWVzLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XHJcblxyXG4gIGlmIChpc0NvbGxlY3RpbmdDaGFuZ2VzKCkpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZSAoYmluZGluZ05hbWUsIGNoYW5nZSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKSB7XHJcbiAgY29uc3Qgc3RhdGVQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGxldCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgaWYgKCFiaW5kaW5nKSB7XHJcbiAgICBiaW5kaW5nTmFtZSA9IGNvbXBvbmVudC5vdXRlck5hbWVzW2JpbmRpbmdOYW1lXTtcclxuICAgIGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFiaW5kaW5nKSB7XHJcbiAgICB0aHJvdyBuZXcgQmluZGluZ05vdEV4aXN0c0Vycm9yKGJpbmRpbmdOYW1lLCBjb21wb25lbnQubmFtZSwgc3RhdGVQYXRoKTtcclxuICB9XHJcblxyXG4gIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3ZhbHVlJykge1xyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckxpc3QoYmluZGluZywgY2hhbmdlLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KGNoYW5nZS52YWx1ZSkgJiYgYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JDb21wb25lbnQoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBlcXVhbCA9IGFyZUVxdWFsKHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlLnR5cGVdLCBjaGFuZ2UudmFsdWUpO1xyXG5cclxuICBpZiAoIWVxdWFsIHx8ICFpc0VtcHR5KGVxdWFsKSB8fCBjaGFuZ2UuZm9yY2UpIHtcclxuICAgIHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlLnR5cGVdID0gY2hhbmdlLnZhbHVlO1xyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSAhPT0gJ3ZhbHVlJykge1xyXG4gICAgICByZXR1cm4gc2VuZFRvUmVuZGVyUXVldWUoc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSksIHsgW2NoYW5nZS50eXBlXTogZmFsc2UgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYmluZGluZywgdmFsdWVzLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XHJcbiAgICBjYWxsZWREZXBlbmRlbmNlcy5wdXNoKGJpbmRpbmdOYW1lICsgJzonICsgY2hhbmdlLnR5cGUpO1xyXG5cclxuICAgIGlmICghYmluZGluZy5odG1sKSB7XHJcbiAgICAgIHNldFZhbHVlKGJpbmRpbmdOYW1lLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICdodG1sJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBjb21wb25lbnQubGlua3NbYmluZGluZ05hbWVdO1xyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgc2V0VmFsdWUobGluay5saW5rLCB7IHZhbHVlOiBjaGFuZ2UudmFsdWUsIHR5cGU6ICd2YWx1ZScsIGZvcmNlOiBjaGFuZ2UuZm9yY2UgfSwgYWNjZXNzb3IuZG93bihsaW5rLmNvbXBvbmVudCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKGJpbmRpbmcuZGVwZW5kYW50cywgKGRlcGVuZGFudCwgZGVwZW5kYW50S2V5KSA9PiB7XHJcbiAgICAgIGlmIChoYXMoY2FsbGVkRGVwZW5kZW5jZXMsIGRlcGVuZGFudEtleSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29tcG9uZW50LnN0YXRlW2RlcGVuZGFudC5uYW1lXS5ldmFsdWF0ZVtkZXBlbmRhbnQudHlwZV0odmFsdWVzLCBhY2Nlc3Nvcik7XHJcbiAgICAgIHNldFZhbHVlKGRlcGVuZGFudC5uYW1lLCB7IHZhbHVlOiBuZXdWYWx1ZSwgdHlwZTogZGVwZW5kYW50LnR5cGUgfSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVGb3JMaXN0IChiaW5kaW5nLCBjaGFuZ2UsIGFyciwgYWNjZXNzb3IpIHtcclxuICBPYmplY3RcclxuICAgIC5rZXlzKGNoYW5nZS52YWx1ZSlcclxuICAgIC5mb3JFYWNoKChpKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlLnZhbHVlW2ldKSwgYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpLCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpKSk7XHJcblxyXG4gIGNvbnN0IGluZGV4RXF1YWxpdHkgPSBhcmVFcXVhbChhcnIsIGNoYW5nZS52YWx1ZSk7XHJcbiAgZm9yRWFjaChpbmRleEVxdWFsaXR5LCAoY2hhbmdlT2JqLCBpZHgpID0+IHtcclxuICAgIGlmIChjaGFuZ2VPYmoucmVtb3ZlKSB7XHJcbiAgICAgIGNoYW5nZU9iai5yZW1vdmUgPSByZW1vdmVMaXN0SXRlbShhcnIsIGlkeCwgYmluZGluZywgYWNjZXNzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaWR4LCBiaW5kaW5nLmxpc3RJdGVtLm5hbWUpLCB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IGNoYW5nZU9iaiB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVGb3JDb21wb25lbnQgKGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpIHtcclxuICBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlLnZhbHVlKSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoYWN0aW9uLCBhcmdzLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGFyciA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBjb25zdCBsaXN0UGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBzdGFydCA9IGFyZ3Muc3RhcnQ7XHJcbiAgbGV0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbikge1xyXG4gICAgY2FzZSAnYWRkJzpcclxuICAgICAgY2hhbmdlT2JqID0gYWRkVG9MaXN0KGFyciwgc3RhcnQsIGFyZ3MuZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIChhcmdzLm51bSB8fCAxKTtcclxuICAgICAgY2hhbmdlT2JqID0gcmVtb3ZlRnJvbUxpc3QoYXJyLCBzdGFydCwgZW5kLCBhY2Nlc3Nvci5jb21wb25lbnQsIGFjY2Vzc29yKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGNoYW5nZU9iaiwgKGNoYW5nZSwgaWR4KSA9PiBzZW5kVG9SZW5kZXJRdWV1ZShsaXN0UGF0aC5jb25jYXQoaWR4LCBpdGVtTmFtZSwgTElCX0FUVFIuRlVMTF9DSEFOR0UpLCBjaGFuZ2VPYmpbaWR4XVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvTGlzdCAoYXJyLCBzdGFydCwgZWxzLCBsaXN0UGF0aCwgaXRlbU5hbWUpIHtcclxuICBlbHMgPSBpc0FycmF5KGVscykgPyBlbHMgOiBbZWxzXTtcclxuXHJcbiAgZWxzLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICBhcnIuc3BsaWNlKGkgKyBzdGFydCwgMCwgbnVsbCk7XHJcbiAgICBzZXRWYWx1ZXMocHJlcGFyZUNoYW5nZU9iamVjdChlbCksIGxpc3RQYXRoLmNvbmNhdChpICsgc3RhcnQsIGl0ZW1OYW1lKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7IFtzdGFydF06IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyBlbHMubGVuZ3RoIH0gfSB9IH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0IChhcnIsIHN0YXJ0LCBlbmQsIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IGNoYW5nZU9iaiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgY29uc3QgcmVtb3ZlZERPTU5vZGUgPSByZW1vdmVMaXN0SXRlbShhcnIsIGksIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICBjaGFuZ2VPYmpbaV0gPSB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgcmVtb3ZlOiByZW1vdmVkRE9NTm9kZSB9IH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjaGFuZ2VPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxpc3RJdGVtIChhcnIsIGlkeCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgcmVtb3ZlZE5vZGUgPSBhcnIuc3BsaWNlKGlkeCwgMSlbMF1bbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZV07XHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygncmVtb3ZlJywgbGlzdEJpbmRpbmcubGlzdEl0ZW0uc3RhdGVbTElCX0FUVFIuU0VMRl0sIHJlbW92ZWROb2RlLCBhY2Nlc3NvciwgaWR4KTtcclxuICByZXR1cm4gcmVtb3ZlZE5vZGVbTElCX0FUVFIuU0VMRl0uZWw7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuaW1wb3J0IHsgdG9EYXNoQ2FzZSwgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcbmltcG9ydCB7IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzcGxpdFBpZWNlIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgeyBpc051bWJlciwgaXNVbmRlZmluZWQgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBY2Nlc3NvcixcclxuICBhZGRNYXJrdXAsXHJcbiAgZ2V0TWFya3VwLFxyXG4gIHJlbW92ZU1hcmt1cCxcclxuICByZW1vdmVDb21wb25lbnQsXHJcbiAgZ2V0T25seVZhbHVlcyxcclxufSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVwbGFjZU5vZGVzLFxyXG4gIHJlbW92ZU5vZGUsXHJcbiAgcmV3cml0ZVRvTm9kZSxcclxuICBlbXB0eU5vZGUsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSc7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyxcclxuICByZW5kZXJDaGFuZ2VzXHJcbn07XHJcblxyXG5jb25zdCByZW5kZXIgPSB7XHJcbiAgaHRtbDogYXBwbHlNYXJrdXAsXHJcbiAgY2xhc3M6IGFwcGx5Q2xhc3NlcyxcclxuICBzdHlsZTogYXBwbHlTdHlsZXMsXHJcbiAgYXR0cnM6IGFwcGx5QXR0cmlidXRlcyxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ2hhbmdlcyAoY2hhbmdlcykge1xyXG4gIGZvckVhY2goY2hhbmdlcywgKGNvbXBvbmVudENoYW5nZXMsIGVsZW1lbnRJZCkgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBPYmplY3Qua2V5cyhjb21wb25lbnRDaGFuZ2VzKVswXVxyXG4gICAgY29uc3QgY29tcG9uZW50QWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihbZWxlbWVudElkLCBjb21wb25lbnRJZF0pO1xyXG4gICAgYXBwbHlNYXJrdXAoY29tcG9uZW50QWNjZXNzb3IuY29tcG9uZW50LCBjb21wb25lbnRBY2Nlc3Nvci52YWx1ZXMsIFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSwgY29tcG9uZW50Q2hhbmdlc1tjb21wb25lbnRJZF0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseU1hcmt1cCAoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKCFjb21wb25lbnQubWFya3VwKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoY29tcG9uZW50LmlzTGlzdCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckxpc3QoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHZhbHVlID0gaXNVbmRlZmluZWQodmFsdWUpID8gJycgOiB2YWx1ZTtcclxuXHJcbiAgaWYgKGNvbXBvbmVudC5tYXJrdXAudGFnTmFtZSA9PT0gJ0lOUFVUJykge1xyXG4gICAgY29tcG9uZW50Lm1hcmt1cC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV3cml0ZVRvTm9kZShjb21wb25lbnQubWFya3VwLCB2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKGNoYW5nZXMpIHtcclxuICAgIHJldHVybiB1cGRhdGVDb21wb25lbnQoY29tcG9uZW50LCB2YWx1ZSwgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkcmF3Q29tcG9uZW50KHZhbHVlLCBzdGF0ZVBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q29tcG9uZW50ICh2YWx1ZXMsIHN0YXRlUGF0aCkge1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBjb25zdCBjb21wb25lbnQgPSBhY2Nlc3Nvci5jb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaXRlbU1hcmt1cCA9IGNvbXBvbmVudC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgdmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsID0gaXRlbU1hcmt1cDtcclxuICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtTWFya3VwKTtcclxuXHJcbiAgaXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIChjb21wb25lbnQuaXNMaXN0SXRlbSkgPyBMSUJfQVRUUi5JVEVNIDogTElCX0FUVFIuQ09NUE9ORU5UKTtcclxuXHJcbiAgZm9yRWFjaChyZW5kZXIsIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSA9PiB7XHJcbiAgICBpZiAoY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdW3JlbmRlclR5cGVdKSB7XHJcbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGl0ZW1NYXJrdXAgfSwgdmFsdWVzW0xJQl9BVFRSLlNFTEZdW3JlbmRlclR5cGVdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKCFiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZ05vZGUgPSBpdGVtV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuJyArIExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG4gICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LnJlbW92ZShMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjaGlsZFN0YXRlUGF0aCA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG4gICAgICBjb25zdCBjaGlsZE1hcmt1cCA9IGRyYXdDb21wb25lbnQodmFsdWVzW2JpbmRpbmdOYW1lXSwgY2hpbGRTdGF0ZVBhdGgpO1xyXG4gICAgICByZXBsYWNlTm9kZXMoYmluZGluZ05vZGUsIGNoaWxkTWFya3VwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlc1tiaW5kaW5nTmFtZV0uZWwgPSBiaW5kaW5nTm9kZTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmVuZGVyTGlzdChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgICAgaWYgKHJlbmRlclR5cGUgPT09ICdodG1sJyAmJiBiaW5kaW5nLmh0bWwgPT09IG51bGwgfHwgYmluZGluZy5tYXJrdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlckZ1bmMoeyBtYXJrdXA6IGJpbmRpbmdOb2RlIH0sIHZhbHVlc1tiaW5kaW5nTmFtZV1bcmVuZGVyVHlwZV0sIHN0YXRlUGF0aCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGl0ZW1XcmFwcGVyLmNoaWxkcmVuWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnQgKGNvbXBvbmVudCwgdmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBpdGVtQWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudE1hcmt1cCA9IHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbDtcclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY2hhbmdlLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG5cclxuICAgIGlmIChiaW5kaW5nTmFtZSA9PT0gTElCX0FUVFIuU0VMRikge1xyXG5cclxuICAgICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGNvbXBvbmVudE1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bY2hhbmdlVHlwZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvQmluZGluZyA9IHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50IHx8IGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIGFwcGx5TWFya3VwKGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aFRvQmluZGluZywgY2hhbmdlc1tiaW5kaW5nTmFtZV0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZ05hbWVdLmVsXHJcblxyXG4gICAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZVR5cGVdO1xyXG4gICAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGVsIH0sIG5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoKTtcclxuXHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBwYXJlbnROb2RlID0gbGlzdE5vZGUucGFyZW50Tm9kZTtcclxuICBjb25zdCBuZXh0Tm9kZSA9IGxpc3ROb2RlLm5leHRFbGVtZW50U2libGluZztcclxuICByZW1vdmVOb2RlKGxpc3ROb2RlKTtcclxuXHJcbiAgY29uc3QgaXNDb21wb25lbnQgPSBsaXN0Tm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUpO1xyXG4gIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuTElTVCk7XHJcbiAgaWYgKGlzQ29tcG9uZW50KSB7XHJcbiAgICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkNPTVBPTkVOVF9MSVNUKTtcclxuICB9XHJcblxyXG4gIGVtcHR5Tm9kZShsaXN0Tm9kZSk7XHJcbiAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuXHJcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlzdE5vZGUsIG5leHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCByYW5nZSkge1xyXG4gIGNvbnN0IHN0YXJ0ID0gcmFuZ2UgPyByYW5nZS5zdGFydCA6IDA7XHJcbiAgY29uc3QgZW5kID0gcmFuZ2UgPyByYW5nZS5lbmQgOiAoaXRlbXNWYWx1ZXMubGVuZ3RoICsgMSk7XHJcblxyXG4gIGNvbnN0IGxpc3RGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBpdGVtc1ZhbHVlc1xyXG4gICAgLnNsaWNlKHN0YXJ0LCBlbmQpXHJcbiAgICAuZm9yRWFjaCgoaXRlbVZhbHVlLCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgbmV3SXRlbUluZGV4ID0gK3N0YXJ0ICsgaXRlbUluZGV4O1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KFtuZXdJdGVtSW5kZXgsIGxpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0pO1xyXG4gICAgICBjb25zdCBsaXN0SXRlbU1hcmt1cCA9IGRyYXdDb21wb25lbnQoaXRlbVZhbHVlW2xpc3RDb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgICBsaXN0SXRlbU1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SXRlbUluZGV4KTtcclxuXHJcbiAgICAgIGxpc3RGcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbU1hcmt1cCk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGxpc3RGcmFnbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdCAobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gbGlzdEJpbmRpbmcubGlzdEl0ZW0ubmFtZTtcclxuICBjb25zdCBpdGVtc0NoYW5nZXMgPSBzcGxpdFBpZWNlKGNoYW5nZXMsICh2LCBrKSA9PiBpc051bWJlcigraykpO1xyXG4gIGxldCByZW1vdmVkQ291bnQgPSAwO1xyXG4gIGxldCBlbmQgPSAwO1xyXG5cclxuICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpIHtcclxuICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogbGlzdE5vZGUgfSwgaXRlbXNWYWx1ZXNbY2hhbmdlVHlwZV0pO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChpdGVtc0NoYW5nZXMsIChjaGFuZ2UsIGkpID0+IHtcclxuICAgIGNoYW5nZSA9IGNoYW5nZVtpdGVtTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBzdGF0ZVBhdGguY29uY2F0KGksIGl0ZW1OYW1lKTtcclxuICAgIGNvbnN0IGl0ZW1BY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aFRvSXRlbSk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdKSB7XHJcbiAgICAgIHVwZGF0ZUNvbXBvbmVudChpdGVtQWNjZXNzb3IuY29tcG9uZW50LCBpdGVtc1ZhbHVlc1tpXVtpdGVtTmFtZV0sIHN0YXRlUGF0aFRvSXRlbSwgY2hhbmdlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZCAmJiBpID49IGVuZCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLnN0YXJ0O1xyXG4gICAgICBlbmQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5lbmQ7XHJcblxyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBzdGFydCwgZW5kIC0gc3RhcnQpO1xyXG4gICAgICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdEJpbmRpbmcsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHsgc3RhcnQsIGVuZCB9KTtcclxuXHJcbiAgICAgIGlmIChlbmQgPT09IGl0ZW1zVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0Tm9kZS5pbnNlcnRCZWZvcmUobGlzdEZyYWdtZW50LCBsaXN0Tm9kZS5jaGlsZHJlbltzdGFydF0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKSB7XHJcbiAgICAgIHJlbW92ZU5vZGUoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpO1xyXG4gICAgICBmaXhJbmRleGVzKGxpc3ROb2RlLCBpIC0gcmVtb3ZlZENvdW50KyssIC0xKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZml4SW5kZXhlcyAobGlzdE5vZGUsIHN0YXJ0LCBkaWZmKSB7XHJcbiAgY29uc3QgaXRlbXNOb2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3ROb2RlLmNoaWxkcmVuLCBzdGFydCk7XHJcblxyXG4gIGl0ZW1zTm9kZXMuZm9yRWFjaCgoaXRlbU5vZGUpID0+IHtcclxuICAgIGNvbnN0IHByZXZJZHggPSBpdGVtTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICBjb25zdCBuZXdJZHggPSArcHJldklkeCArIGRpZmY7XHJcblxyXG4gICAgaXRlbU5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0lkeCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXR0cmlidXRlcyAoYmluZGluZywgYXR0cmlidXRlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oYmluZGluZy5tYXJrdXAsIGF0dHJpYnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNsYXNzZXMgKGJpbmRpbmcsIGNsYXNzZXMpIHtcclxuICBmb3IgKGxldCBjbGFzc05hbWUgaW4gY2xhc3Nlcykge1xyXG4gICAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgICBpZiAoY2xhc3Nlc1tjbGFzc05hbWVdKSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTdHlsZXMgKGJpbmRpbmcsIHN0eWxlcykge1xyXG4gIE9iamVjdC5hc3NpZ24oIGJpbmRpbmcubWFya3VwLnN0eWxlLCBub3JtYWxpemVTdHlsZXMoc3R5bGVzKSApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRTdHlsZXMgKHN0eWxlT2JqKSB7XHJcbiAgbGV0IHN0eWxlU3RyID0gJyc7XHJcbiAgZm9yIChsZXQgc2VsZWN0b3IgaW4gc3R5bGVPYmopIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHN0eWxlT2JqW3NlbGVjdG9yXTtcclxuICAgIHN0eWxlU3RyICs9IHNlbGVjdG9yICsgJ3snO1xyXG4gICAgbm9ybWFsaXplU3R5bGVzKHN0eWxlcylcclxuICAgIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVzW2F0dHJdO1xyXG4gICAgICBzdHlsZVN0ciArPSB0b0Rhc2hDYXNlKGF0dHIpICsgJzonICsgdmFsdWUgKyAnOyc7XHJcbiAgICB9XHJcbiAgICBzdHlsZVN0ciArPSAnfVxcbic7XHJcbiAgfVxyXG4gIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlRWwuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlU3RyKSApO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlcyAoc3R5bGVzKSB7XHJcbiAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgIGlmIChpc051bWJlcihzdHlsZXNbYXR0cl0pKSB7XHJcbiAgICAgIHN0eWxlc1thdHRyXSA9IHN0eWxlc1thdHRyXSArICdweCc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzdHlsZXM7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZGluZ05vdEV4aXN0c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChiaW5kaW5nTmFtZSwgY29tcG9uZW50TmFtZSwgcGF0aCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyAnXCIgKyBiaW5kaW5nTmFtZSArIFwiJyBiaW5kaW5nIG9uICdcIiArIGNvbXBvbmVudE5hbWUgKyBcIicgY29tcG9uZW50IG9uIHBhdGggKFwiICsgcGF0aC5qb2luKCcgLT4gJykgKyBcIikgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE5vdEV4aXN0c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gcmV0cmlldmUgY29tcG9uZW50IGJ5IG5hbWUgJ1wiICsgbmFtZSArIFwiJyB0aGF0IGRvZXNuJ3QgZXhpc3QuXCJcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50UmVkZWZpbmVFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGV4aXN0aW5nIGNvbXBvbmVudDogJ1wiICsgbmFtZSArIFwiJ1wiO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZU5hbWVDb2xsaXNpb25FcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIGFzc2lnbiBhIG5hbWUgJ1wiICsgbmFtZSArIFwiJyB0byBhIHN0YXRlIHRoYXQgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGNoYWluLlwiO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZUFjY2Vzc0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChwYXRoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gYWNjZXNzIHN0YXRlIG9uIGEgcGF0aCAnXCIgKyBwYXRoLmpvaW4oJyAtPiAnKSArICBcIicgYmVjYXVzZSBpdCBkb2Vzbid0IGV4aXN0XCJcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTG9va3VwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKGxldmVsKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGxldCBhZGRpdGlvbmFsSW5mbztcclxuICAgIGlmIChpc051bWJlcihsZXZlbCkpIHtcclxuICAgICAgYWRkaXRpb25hbEluZm8gPSBsZXZlbCArIFwiIGV4Y2VlZHMgbnVtYmVyIG9mIHN0YXRlcyBpbiB0aGUgY2hhaW4uXCIgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRpdGlvbmFsSW5mbyA9IFwiJ1wiICsgbGV2ZWwgKyBcIicgdXNlciBzdGF0ZW5hbWUgZG9lc24ndCBleGlzdC5cIlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIHJlYWNoIHRvIHRoZSAnXCIgKyBsZXZlbCArIFwiJyBzdGF0ZSBsZXZlbC4gXCIgKyBhZGRpdGlvbmFsSW5mbztcclxuICB9XHJcbn1cclxuIiwiY29uc3QgTElCX05BTUUgPSAneCc7XHJcbmNvbnN0IEFUVFJfUFJFRklYID0gJ2RhdGEtJztcclxuY29uc3QgUFJFRklYID0gTElCX05BTUUgKyAnLSc7XHJcbmNvbnN0IFRFTVBMQVRFX0JJTkRJTkcgPSBQUkVGSVggKyAnYic7XHJcbmNvbnN0IFRFTVBMQVRFX0xJU1RfQklORElORyA9IFBSRUZJWCArICdsYic7XHJcbmNvbnN0IEJJTkRJTkdfSUQgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdpZCc7XHJcbmNvbnN0IFNUQVRFX1BBVEggPSBQUkVGSVggKyAnc3BhdGgnO1xyXG5jb25zdCBURU1QTEFURV9QTEFDRU1FTlQgPSBQUkVGSVggKyAnZWwnO1xyXG5jb25zdCBTVEFURV9OQU1FID0gUFJFRklYICsgJ3N0YXRlLW5hbWUnO1xyXG5jb25zdCBTQ09QRV9QUkVGSVggPSAncyc7XHJcbmNvbnN0IElURU1fSU5ERVggPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICdkeCc7XHJcbmNvbnN0IENPTVBPTkVOVF9UWVBFID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAndHAnO1xyXG5jb25zdCBJVEVNX1NVRkZJWCA9ICdpJztcclxuY29uc3QgU1RBVEVfREVMSU1JVEVSID0gJy0nO1xyXG5jb25zdCBTRUxGID0gJyc7XHJcbmNvbnN0IEZVTExfQ0hBTkdFID0gJyBfZnVsbF9jaGFuZ2VfICc7XHJcblxyXG5jb25zdCBCQVNFID0gJzEnO1xyXG5jb25zdCBDT01QT05FTlQgPSAnMic7XHJcbmNvbnN0IExJU1QgPSAnMyc7XHJcbmNvbnN0IElURU0gPSAnX2l0ZW1fJztcclxuY29uc3QgQ09NUE9ORU5UX0xJU1QgPSAnNSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgUFJFRklYLFxyXG4gIFRFTVBMQVRFX0JJTkRJTkcsXHJcbiAgVEVNUExBVEVfTElTVF9CSU5ESU5HLFxyXG4gIEJJTkRJTkdfSUQsXHJcbiAgU1RBVEVfUEFUSCxcclxuICBURU1QTEFURV9QTEFDRU1FTlQsXHJcbiAgU1RBVEVfTkFNRSxcclxuICBTQ09QRV9QUkVGSVgsXHJcbiAgSVRFTV9JTkRFWCxcclxuICBDT01QT05FTlRfVFlQRSxcclxuICBJVEVNX1NVRkZJWCxcclxuICBTVEFURV9ERUxJTUlURVIsXHJcbiAgQkFTRSxcclxuICBDT01QT05FTlQsXHJcbiAgTElTVCxcclxuICBJVEVNLFxyXG4gIFNFTEYsXHJcbiAgRlVMTF9DSEFOR0UsXHJcbiAgQ09NUE9ORU5UX0xJU1RcclxufTtcclxuIiwiY29uc3QgU1RSSVBfQ09NTUVOVFMgPSAvKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pfChcXHMqPVteLFxcKV0qKCgnKD86XFxcXCd8W14nXFxyXFxuXSkqJyl8KFwiKD86XFxcXFwifFteXCJcXHJcXG5dKSpcIikpfChcXHMqPVteLFxcKV0qKSkvbWc7XHJcbmNvbnN0IEFSR1VNRU5UX05BTUVTID0gLyhbXlxccyxdKykvZztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTVFJJUF9DT01NRU5UUyxcclxuICBBUkdVTUVOVF9OQU1FUyxcclxufTtcclxuIiwiZXhwb3J0IHtcclxuICBpc0Z1bmN0aW9uLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNPYmplY3RJbkJyYWNrZXRzLFxyXG4gIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyxcclxuICBpc1N0cmluZyxcclxuICBpc0hUTUxTdHJpbmcsXHJcbiAgaXNOdW1iZXIsXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzRW1wdHksXHJcbiAgaXNMaW5rLFxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdEluQnJhY2tldHMgKG9iaikge1xyXG4gIHJldHVybiBpc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMSAmJiBpc09iamVjdChvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdEluRG91YmxlQnJhY2tldHMgKG9iaikge1xyXG4gIHJldHVybiBpc0FycmF5KG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMSAmJiBpc09iamVjdEluQnJhY2tldHMob2JqWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0hUTUxTdHJpbmcgKG9iaikge1xyXG4gIHJldHVybiBpc1N0cmluZyhvYmopICYmIG9iai5pbmRleE9mKCc8JykgPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyIChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBOdW1iZXJdJyAmJiBvYmogPT09IG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNET01FbGVtZW50IChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmoudGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkIChvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iamVjdFR5cGUgKG9iaikge1xyXG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNMaW5rIChvYmopIHtcclxuICBjb25zdCBzbGFzaElkeCA9IG9iai5pbmRleE9mKCcvJyk7XHJcbiAgcmV0dXJuIFswLCAxLCAyXS5zb21lKChpZHgpID0+IGlkeCA9PT0gc2xhc2hJZHgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5IChvYmopIHtcclxuICBpZiAoIW9iaikge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvYmopIHx8IGlzU3RyaW5nKG9iaikpIHtcclxuICAgIHJldHVybiAhb2JqLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqKS5sZW5ndGg7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2NoZWNrZXJzJztcclxuaW1wb3J0IHsgc2V0IH0gZnJvbSAnLi9vYmplY3QnO1xyXG5cclxuZXhwb3J0IHtcclxuICBoYXMsXHJcbiAgZ2V0RmFsc2VQYXRocyxcclxuICB0b0Rhc2hDYXNlLFxyXG4gIHRvQ2FtZWxDYXNlLFxyXG4gIGdldFNob3J0TmFtZSxcclxuICBnZXRSZWFsTmFtZSxcclxufTtcclxuXHJcbmNvbnN0IE5BTUVTID0ge1xyXG4gIHJlYWw6IHt9LFxyXG4gIHNob3J0OiBbXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U2hvcnROYW1lIChuYW1lKSB7XHJcbiAgaWYgKE5BTUVTLnJlYWxbbmFtZV0pIHtcclxuICAgIHJldHVybiBOQU1FUy5yZWFsW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvcnROYW1lID0gTkFNRVMuc2hvcnQucHVzaChuYW1lKTtcclxuICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXSA9IHNob3J0TmFtZSAtIDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlYWxOYW1lIChudW0pIHtcclxuICByZXR1cm4gTkFNRVMuc2hvcnRbbnVtXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzIChvYmosIGVsKSB7XHJcbiAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gICAgcmV0dXJuIGhhcyhrZXlzLCBlbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqLmluZGV4T2YoZWwpID49IDA7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGhzIChvYmopIHtcclxuICBjb25zdCBvbmx5RmFsc2VQYXRocyA9IHt9O1xyXG4gIGdldEZhbHNlUGF0aChvYmosIG9ubHlGYWxzZVBhdGhzLCBbXSk7XHJcbiAgcmV0dXJuIG9ubHlGYWxzZVBhdGhzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYWxzZVBhdGggKG9iaiwgb25seUZhbHNlUGF0aHMsIHBhdGgpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qob2JqW2tleV0pKSB7XHJcbiAgICAgIGdldEZhbHNlUGF0aChvYmpba2V5XSwgb25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSkpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqW2tleV0gIT09IHRydWUpIHtcclxuICAgICAgc2V0KG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpLCBvYmpba2V5XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b0Rhc2hDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgKG1hdGNoKSA9PiAnLScgKyBtYXRjaFswXS50b0xvd2VyQ2FzZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9DYW1lbENhc2UgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwtKC4pL2csIChtYXRjaCkgPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc1VuZGVmaW5lZCxcclxuICBpc0FycmF5LFxyXG4gIGlzRE9NRWxlbWVudCxcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvcHk7XHJcblxyXG5mdW5jdGlvbiBjb3B5IChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgaWYgKCFkZXN0aW5hdGlvbikge1xyXG4gICAgcmV0dXJuIGNvcHkgKHt9LCBzb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIHNvdXJjZSkge1xyXG5cclxuICAgIGlmIChpc1VuZGVmaW5lZChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0ge307XHJcbiAgICAgIH1cclxuICAgICAgY29weShkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBpZiAoIWRlc3RpbmF0aW9uW2tleV0pIHtcclxuICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gW107XHJcbiAgICAgIH1cclxuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRE9NRWxlbWVudChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY29weUFycmF5IChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChpc09iamVjdChzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwge307XHJcbiAgICAgIGNvcHkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KHNvdXJjZVtpXSkpIHtcclxuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCBbXTtcclxuICAgICAgY29weUFycmF5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltpXSA9IHNvdXJjZVtpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcclxufTtcclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4uL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNIVE1MU3RyaW5nLFxyXG4gIGlzRE9NRWxlbWVudCxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCBDb21wb25lbnROb3RFeGlzdHNFcnJvciBmcm9tICcuLi9lcnJvcnMvQ29tcG9uZW50Tm90RXhpc3RzRXJyb3InO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IHt9O1xyXG5cclxuZXhwb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY2xvbmVIVE1MTWFya3VwLFxyXG4gIGNvbGxlY3RIVE1MTm9kZXMsXHJcbiAgd2Fsa05vZGVzLFxyXG4gIHJlbW92ZU5vZGUsXHJcbiAgaW5zZXJ0QmVmb3JlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlcyAob3JpZ2luYWwsIHJlcGxhY2VtZW50KSB7XHJcbiAgb3JpZ2luYWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVwbGFjZW1lbnQsIG9yaWdpbmFsKTtcclxuICByZXR1cm4gcmVwbGFjZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJlZm9yZU5vZGUgKGVsLCBuZXh0RWwpIHtcclxuICBuZXh0RWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIG5leHRFbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb25lSFRNTE1hcmt1cCAobWFya3VwKSB7XHJcbiAgY29uc3QgbWFya3VwU3RyID0gaXNIVE1MU3RyaW5nKG1hcmt1cC50cmltKCkpID8gbWFya3VwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXJrdXApLmlubmVySFRNTDtcclxuXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFN0cjtcclxuICByZXR1cm4gZGl2LmNoaWxkcmVuWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3YWxrTm9kZXMgKG5vZGUsIGNiKSB7XHJcbiAgaWYgKCBjYihub2RlKSA9PT0gLTEpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEFycmF5LnByb3RvdHlwZVxyXG4gICAgLnNsaWNlXHJcbiAgICAuY2FsbChub2RlLmNoaWxkcmVuKVxyXG4gICAgLmZvckVhY2goKGVsKSA9PiB3YWxrTm9kZXMoZWwsIGNiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RIVE1MTm9kZXMgKHJvb3QsIGlzV2FudGVkKSB7XHJcbiAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICB3YWxrTm9kZXMocm9vdCwgKGVsKSA9PiBpc1dhbnRlZChlbCkgPyBub2Rlcy5wdXNoKGVsKSA6ICcnKTtcclxuICByZXR1cm4gbm9kZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUgKG5vZGUpIHtcclxuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJld3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBlbXB0eU5vZGUobm9kZSk7XHJcbiAgd3JpdGVUb05vZGUobm9kZSwgdGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlVG9Ob2RlIChub2RlLCB0ZXh0KSB7XHJcbiAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcclxuICBub2RlLmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW1wdHlOb2RlIChub2RlKSB7XHJcbiAgd2hpbGUgKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc1VuZGVmaW5lZCxcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFyZUVxdWFsO1xyXG5cclxuZnVuY3Rpb24gYXJlRXF1YWwgKGZpcnN0LCBzZWNvbmQpIHtcclxuICBpZiAoaXNVbmRlZmluZWQoZmlyc3QpIHx8IGlzVW5kZWZpbmVkKHNlY29uZCkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgZmlyc3QgIT09IHR5cGVvZiBzZWNvbmQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmVudE5vZGUgPSB7IGNoaWxkTm9kZToge30gfTtcclxuXHJcbiAgaWYgKGlzQXJyYXkoc2Vjb25kKSkge1xyXG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoXHJcbiAgICAgIGZpcnN0ID8gZmlyc3QubWFwKGVsID0+IGVsKSA6IFtdLFxyXG4gICAgICBzZWNvbmQubWFwKGVsID0+IGVsKSxcclxuICAgICAgcGFyZW50Tm9kZVxyXG4gICAgKTtcclxuXHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlLmNoaWxkTm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tLZXlzRXF1YWxpdHkgKGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gc2Vjb25kKSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChmaXJzdFtrZXldKSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSB7IGFkZDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZmlyc3QpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKHNlY29uZFtrZXldKSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSB7IHJlbW92ZTogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaXJzdFtrZXldICE9PSBzZWNvbmRba2V5XSkge1xyXG4gICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50Tm9kZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb24sXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGdldCxcclxuICBzZXQsXHJcbiAgcmVtb3ZlLFxyXG4gIGFkZENvbnN0RmllbGRzLFxyXG4gIGZvckVhY2gsXHJcbiAgbWFwLFxyXG4gIG1hcEtleXMsXHJcbiAgZmlsdGVyLFxyXG4gIHRvT2JqZWN0LFxyXG4gIGZ1bGxNYXAsXHJcbiAgc3BsaXRQaWVjZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldCAob2JqLCBwYXRoKSB7XHJcbiAgbGV0IHZhbHVlID0gb2JqO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldCAob2JqLCBwYXRoLCB2YWx1ZSkge1xyXG4gIGlmICghcGF0aC5sZW5ndGgpIHtcclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob2JqLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBsZXQgZGVzdCA9IG9iajtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICBpZiAoIWRlc3RbIHBhdGhbaV0gXSkge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXSA9IHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVzdCA9IGRlc3RbcGF0aFtpXV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICBkZXN0WyBwYXRoW2ldIF0gPSBkZXN0WyBwYXRoW2ldIF0gfHwge307XHJcbiAgICBPYmplY3QuYXNzaWduKGRlc3RbIHBhdGhbaV0gXSwgdmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXN0WyBwYXRoW2ldIF0gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZSAob2JqLCBwYXRoKSB7XHJcbiAgbGV0IHZhbHVlID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIHZhbHVlID0gdmFsdWVbcGF0aFtpXV07XHJcbiAgfVxyXG5cclxuICBkZWxldGUgdmFsdWVbcGF0aFtpXV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbnN0RmllbGRzIChvYmosIGZpZWxkcykge1xyXG4gIGZvciAobGV0IGZpZWxkIGluIGZpZWxkcykge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgZmllbGQsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmaWVsZHNbZmllbGRdIH0sXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gcmVkZWZpbmUgY29uc3QgZmllbGQgJ1wiICsgZmllbGQgKyBcIidcIikgfSxcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoIChvYmosIGNiKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY2IocHJvcCwga2V5LCBvYmopO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFwKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIG5ld09ialtrZXldID0gY2IocHJvcCwga2V5LCBvYmopO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBLZXlzIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCBuZXdLZXkgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbbmV3S2V5XSA9IHByb3A7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0UGllY2UgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGlmICggY2IocHJvcCwga2V5LCBvYmopICkge1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHByb3A7XHJcbiAgICAgIGRlbGV0ZSBvYmpba2V5XTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZnVsbE1hcCAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY29uc3QgcmVzID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xyXG4gICAgbmV3T2JqWyByZXNbMF0gfHwgcmVzLmtleSB8fCByZXMuayBdID0gcmVzWzFdIHx8IHJlc1sndmFsdWUnXSB8fCByZXNbJ3YnXTtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge307XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9PYmplY3QgKGFyciwgdmFsKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge307XHJcbiAgYXJyLmZvckVhY2goKHYpID0+IHtcclxuICAgIG5ld09ialt2XSA9IGlzRnVuY3Rpb24odmFsKSA/IHZhbCh2KSA6IHZhbDtcclxuICB9KTtcclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcbiIsImltcG9ydCB7IGRlZmluZSB9IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcbmltcG9ydCB7IGFwcGx5IH0gZnJvbSAnLi9Qcm9kdWN0aW9uJztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRlZmluZSxcclxuICBhcHBseSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==