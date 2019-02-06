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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9EZWZpbml0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9Qcm9kdWN0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUFjY2Vzc0Vycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJ2IiwibGluayIsIm9wdGlvbnNPYmoiLCJwYXJlbnRPYmoiLCJwYXJlbnRLZXkiLCJjbGFzcyIsImxlbmd0aCIsIm9wdGlvbiIsInZhbHVlIiwiZXZlbnRzIiwia2V5IiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJURU1QTEFURV9CSU5ESU5HIiwicmVtb3ZlQXR0cmlidXRlIiwidHJpbSIsIlRFTVBMQVRFX0xJU1RfQklORElORyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9iaiIsImdldENvbXBvbmVudEJ5TmFtZSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXR0cmlidXRlcyIsImF0dHIiLCJTVEFURV9OQU1FIiwiaW5uZXJMaW5rIiwiQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJmb3JjZWQiLCJrZXlzIiwiZm9yY2UiLCJpIiwiYmluZGluZ1ZhbHVlcyIsImdldFZhbHVlc1RyZWUiLCJ2YWx1ZXNUcmVlIiwidmFscyIsIml0ZW1WYWx1ZXMiLCJjb21wb25lbnRWYWx1ZXMiLCJuZXdTdGF0ZVBhdGgiLCJsYXN0SWR4IiwibnVtIiwiZWxzIiwic3RhcnQiLCJzaGlmdCIsIm1hcExpc3QiLCJjYiIsIml0ZXJhdGVMaXN0VmFsdWVzIiwiZmlsdGVyIiwiZmlsdGVyTGlzdCIsIm5ld0xpc3QiLCJzZXRWYWx1ZXMiLCJjcmVhdGVTdGF0ZU5vZGVzIiwibW9kaWZ5TGlzdCIsInNlbmRUb1JlbmRlclF1ZXVlIiwiQ0hBTkdFUyIsImNoYW5nZXMiLCJjb2xsZWN0aW5nIiwiTElGRV9DWUNMRV9IQU5ETEVSUyIsImxpc3QiLCJydW5MaWZlQ3ljbGVIb29rcyIsImxpZmVDeWNsZUhhbmRsZXJzIiwiaCIsImNoYW5nZSIsImlzQ29sbGVjdGluZ0NoYW5nZXMiLCJhZGRMaWZlQ3ljbGVIb29rIiwiaG9va1R5cGUiLCJob29rIiwidmFsdWVzTm9kZSIsImNyZWF0ZVN0YXRlTm9kZSIsInZhbHVlc05vZGVzIiwidmFsdWVOb2RlIiwicmVkdWNlIiwiYSIsImNoYW5nZVZhbHVlcyIsImNhbGxlZERlcGVuZGVuY2VzIiwiRlVMTF9DSEFOR0UiLCJlbmQiLCJzZXRWYWx1ZSIsIkJpbmRpbmdOb3RFeGlzdHNFcnJvciIsInNldFZhbHVlRm9yTGlzdCIsInNldFZhbHVlRm9yQ29tcG9uZW50IiwiZXF1YWwiLCJodG1sIiwiZGVwZW5kYW50IiwiZGVwZW5kYW50S2V5IiwibmV3VmFsdWUiLCJhcnIiLCJpbmRleEVxdWFsaXR5IiwicmVtb3ZlTGlzdEl0ZW0iLCJhY3Rpb24iLCJsaXN0UGF0aCIsIml0ZW1OYW1lIiwiYWRkVG9MaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJzcGxpY2UiLCJsaXN0QmluZGluZyIsInJlbW92ZWRET01Ob2RlIiwicmVtb3ZlZE5vZGUiLCJjcmVhdGVBbmRBcHBlbmRTdHlsZXMiLCJyZW5kZXJDaGFuZ2VzIiwicmVuZGVyIiwiYXBwbHlNYXJrdXAiLCJhcHBseUNsYXNzZXMiLCJzdHlsZSIsImFwcGx5U3R5bGVzIiwiYXR0cnMiLCJhcHBseUF0dHJpYnV0ZXMiLCJjb21wb25lbnRDaGFuZ2VzIiwiZWxlbWVudElkIiwiY29tcG9uZW50SWQiLCJjb21wb25lbnRBY2Nlc3NvciIsInJlbmRlckxpc3QiLCJyZW5kZXJDb21wb25lbnQiLCJ1cGRhdGVDb21wb25lbnQiLCJkcmF3Q29tcG9uZW50IiwiaXRlbVdyYXBwZXIiLCJDT01QT05FTlQiLCJyZW5kZXJGdW5jIiwicmVuZGVyVHlwZSIsImNoaWxkU3RhdGVQYXRoIiwiY2hpbGRNYXJrdXAiLCJpdGVtQWNjZXNzb3IiLCJjb21wb25lbnRNYXJrdXAiLCJjaGFuZ2VUeXBlIiwic3RhdGVQYXRoVG9CaW5kaW5nIiwibGlzdENvbXBvbmVudCIsIml0ZW1zVmFsdWVzIiwidXBkYXRlTGlzdCIsImxpc3RGcmFnbWVudCIsImJ1aWxkTGlzdCIsImxpc3ROb2RlIiwibmV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJMSVNUIiwiQ09NUE9ORU5UX0xJU1QiLCJpbnNlcnRCZWZvcmUiLCJyYW5nZSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJpdGVtVmFsdWUiLCJpdGVtSW5kZXgiLCJuZXdJdGVtSW5kZXgiLCJsaXN0SXRlbU1hcmt1cCIsIml0ZW1zQ2hhbmdlcyIsInJlbW92ZWRDb3VudCIsImZpeEluZGV4ZXMiLCJkaWZmIiwiaXRlbXNOb2RlcyIsInByZXZJZHgiLCJuZXdJZHgiLCJjbGFzc2VzIiwibm9ybWFsaXplU3R5bGVzIiwic3R5bGVPYmoiLCJzdHlsZVN0ciIsInN0eWxlRWwiLCJjcmVhdGVUZXh0Tm9kZSIsImhlYWQiLCJjb21wb25lbnROYW1lIiwibWVzc2FnZSIsIkVycm9yIiwiU3RhdGVBY2Nlc3NFcnJvciIsIlN0YXRlTG9va3VwRXJyb3IiLCJhZGRpdGlvbmFsSW5mbyIsIkxJQl9OQU1FIiwiQVRUUl9QUkVGSVgiLCJTVEFURV9QQVRIIiwiVEVNUExBVEVfUExBQ0VNRU5UIiwiU0NPUEVfUFJFRklYIiwiSVRFTV9TVUZGSVgiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiaXNPYmplY3RJbkJyYWNrZXRzIiwiaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIiwiaXNTdHJpbmciLCJpc0hUTUxTdHJpbmciLCJpc051bWJlciIsImlzRE9NRWxlbWVudCIsImlzVW5kZWZpbmVkIiwiaXNFbXB0eSIsImlzTGluayIsImdldE9iamVjdFR5cGUiLCJzbGFzaElkeCIsInNvbWUiLCJoYXMiLCJnZXRGYWxzZVBhdGhzIiwidG9EYXNoQ2FzZSIsInRvQ2FtZWxDYXNlIiwiZ2V0U2hvcnROYW1lIiwiZ2V0UmVhbE5hbWUiLCJOQU1FUyIsInJlYWwiLCJzaG9ydCIsInNob3J0TmFtZSIsIm9ubHlGYWxzZVBhdGhzIiwiZ2V0RmFsc2VQYXRoIiwic3RyIiwidG9VcHBlckNhc2UiLCJjb3B5IiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvcHlBcnJheSIsInJlcGxhY2VOb2RlcyIsImNsb25lSFRNTE1hcmt1cCIsImNvbGxlY3RIVE1MTm9kZXMiLCJ3YWxrTm9kZXMiLCJyZW1vdmVOb2RlIiwiaW5zZXJ0QmVmb3JlTm9kZSIsInJld3JpdGVUb05vZGUiLCJlbXB0eU5vZGUiLCJvcmlnaW5hbCIsInJlcGxhY2VtZW50IiwicmVwbGFjZUNoaWxkIiwibmV4dEVsIiwibWFya3VwU3RyIiwiY29udmVydFN0cmluZ1RvSFRNTCIsIm1hcmt1cFN0cmluZyIsInBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlZERvY3VtZW50IiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsImZpcnN0RWxlbWVudENoaWxkIiwibm9kZSIsInJvb3QiLCJpc1dhbnRlZCIsIm5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJ0ZXh0Iiwid3JpdGVUb05vZGUiLCJ0ZXh0Tm9kZSIsImhhc0NoaWxkTm9kZXMiLCJmaXJzdENoaWxkIiwiYXJlRXF1YWwiLCJmaXJzdCIsInNlY29uZCIsImNoaWxkTm9kZSIsImNoZWNrS2V5c0VxdWFsaXR5IiwiYWRkQ29uc3RGaWVsZHMiLCJtYXBLZXlzIiwidG9PYmplY3QiLCJmdWxsTWFwIiwic3BsaXRQaWVjZSIsImRlc3QiLCJmaWVsZHMiLCJmaWVsZCIsImRlZmluZVByb3BlcnR5IiwicHJvcCIsIm5ld09iaiIsIm5ld0tleSIsInJlcyIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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RUFBYy9TLEdBQWQsQ0FBWjtBQUNBZ1QsV0FBUUUsSUFBSSxDQUFKLEtBQVVBLElBQUkzVCxHQUFkLElBQXFCMlQsSUFBSXRVLENBQWpDLElBQXVDc1UsSUFBSSxDQUFKLEtBQVVBLElBQUksT0FBSixDQUFWLElBQTBCQSxJQUFJLEdBQUosQ0FBakU7QUFDRDtBQUNELFNBQU9GLE1BQVA7QUFDRDs7QUFFRCxTQUFTek0sTUFBVCxDQUFpQnZHLEdBQWpCLEVBQXNCcUcsRUFBdEIsRUFBMEI7QUFDeEIsTUFBTTJNLFNBQVMsRUFBZjtBQUNBLE9BQUssSUFBSXpULEdBQVQsSUFBZ0JTLEdBQWhCLEVBQXFCO0FBQ25CLFFBQU0rUyxPQUFPL1MsSUFBSVQsR0FBSixDQUFiO0FBQ0EsUUFBSzhHLEdBQUcwTSxJQUFILEVBQVN4VCxHQUFULEVBQWNTLEdBQWQsQ0FBTCxFQUEwQjtBQUN4QmdULGFBQU96VCxHQUFQLElBQWN3VCxJQUFkO0FBQ0Q7QUFDRjtBQUNELFNBQU9DLE1BQVA7QUFDRDs7QUFFRCxTQUFTUixRQUFULENBQW1CMUosR0FBbkIsRUFBd0JxSyxHQUF4QixFQUE2QjtBQUMzQixNQUFNSCxTQUFTLEVBQWY7QUFDQWxLLE1BQUlqTSxPQUFKLENBQVksVUFBQ2dDLENBQUQsRUFBTztBQUNqQm1VLFdBQU9uVSxDQUFQLElBQVksMEJBQVdzVSxHQUFYLElBQWtCQSxJQUFJdFUsQ0FBSixDQUFsQixHQUEyQnNVLEdBQXZDO0FBQ0QsR0FGRDtBQUdBLFNBQU9ILE1BQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ2hKRDs7QUFDQTs7QUFFQUksT0FBT0MsT0FBUCxHQUFpQjtBQUNmbGIsNEJBRGU7QUFFZm1MO0FBRmUsQ0FBakIsQyIsImZpbGUiOiJjb3VsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgUkUgZnJvbSAnLi9nbG9iYWxzL3JlZ2V4cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG4gIHdhbGtOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmltcG9ydCB7IHNldCwgZm9yRWFjaCwgbWFwLCBtYXBLZXlzLCB0b09iamVjdCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IGNvcHkgZnJvbSAnLi9oZWxwZXJzL2NvcHknO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNFbXB0eSxcclxuICBpc0RPTUVsZW1lbnQsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaGFzLFxyXG4gIHRvQ2FtZWxDYXNlLFxyXG4gIGdldFNob3J0TmFtZSxcclxufSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0T25seVZhbHVlcyxcclxufSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG59IGZyb20gJy4vVmlldyc7XHJcblxyXG5pbXBvcnQgQ29tcG9uZW50UmVkZWZpbmVFcnJvciBmcm9tICcuL2Vycm9ycy9Db21wb25lbnRSZWRlZmluZUVycm9yJztcclxuaW1wb3J0IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIGZyb20gJy4vZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yJztcclxuXHJcblxyXG5jb25zdCBWQUxVRV9UWVBFUyA9IFsnc3R5bGUnLCAnY2xhc3MnLCAndmFsdWUnLCAnYXR0cnMnLCAnaHRtbCddO1xyXG5jb25zdCBSRVNFUlZFRF9IT09LU19OQU1FUyA9IFsnbW91bnQnLCAndXBkYXRlJywgJ3JlbW92ZSddO1xyXG5jb25zdCBERUZBVUxUX0hPT0tTID0gdG9PYmplY3QoUkVTRVJWRURfSE9PS1NfTkFNRVMsICgpID0+ICgpID0+IHt9KTtcclxuY29uc3QgUkVTRVJWRURfQklORElOR19OQU1FUyA9IFZBTFVFX1RZUEVTLmNvbmNhdChbJ2V2ZW50cycsICdob29rcycsICdsaXN0SXRlbScsIExJQl9BVFRSLlNFTEZdKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZGVmaW5lLFxyXG4gIGdldENvbXBvbmVudE9wdHMsXHJcbiAgc2hvcnRlbkJpbmRpbmdJZCxcclxuICBpc0NvbXBvbmVudCxcclxuICBWQUxVRV9UWVBFUyxcclxuICBSRVNFUlZFRF9CSU5ESU5HX05BTUVTLFxyXG59O1xyXG5cclxubGV0IENPTVBPTkVOVF9DT1VOVEVSID0gMDtcclxuY29uc3QgQ09NUE9ORU5UUyA9IHt9O1xyXG5cclxuZnVuY3Rpb24gZGVmaW5lIChuYW1lLCBtYXJrdXAsIGJpbmRpbmdzLCBzdHlsZXMpIHtcclxuICBjb25zdCBhcmdzID0gaXNPYmplY3QobmFtZSkgPyBuYW1lIDogeyBuYW1lLCBtYXJrdXAsIGJpbmRpbmdzLCBzdHlsZXMgfTtcclxuXHJcbiAgbmFtZSA9IHRvQ2FtZWxDYXNlKGFyZ3MubmFtZSk7XHJcblxyXG4gIGlmIChDT01QT05FTlRTW25hbWVdKSB7XHJcbiAgICB0aHJvdyBuZXcgQ29tcG9uZW50UmVkZWZpbmVFcnJvcihuYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudEhUTUxNYXJrdXAgPSBjbG9uZUhUTUxNYXJrdXAoYXJncy5tYXJrdXApO1xyXG4gIGNvbXBvbmVudEhUTUxNYXJrdXAuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuXHJcbiAgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHtcclxuICAgIG5hbWUsXHJcbiAgICBzdGF0ZTogeyBbTElCX0FUVFIuU0VMRl06IHt9IH0sXHJcbiAgICBzdGF0ZUlkOiBuYW1lLFxyXG4gICAgc3RhdGVQYXRoOiBbbmFtZV0sXHJcbiAgICBzdGF0ZU5hbWVzOiB7fSxcclxuICAgIG1hcmt1cDogY29tcG9uZW50SFRNTE1hcmt1cCxcclxuICAgIGV2YWx1YXRlOiB7fSxcclxuICAgIGxpbmtzOiB7fSxcclxuICAgIGlzQ29tcG9uZW50OiB0cnVlLFxyXG4gICAgb3V0ZXJOYW1lczoge30sXHJcbiAgICBfbGlua3M6IHt9LFxyXG4gIH07XHJcblxyXG4gIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpO1xyXG5cclxuICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IG5vcm1hbGl6ZVVzZXJPcHRpb25zKGFyZ3MuYmluZGluZ3MsIHsgc3RhdGU6IHt9IH0pO1xyXG4gIGNvcHkoY29tcG9uZW50LCBub3JtYWxpemVkT3B0aW9ucyk7XHJcblxyXG4gIHByZXBhcmVCaW5kaW5ncyAoY29tcG9uZW50LCBjb21wb25lbnQuc3RhdGVJZCwgeyBzdGF0ZVBhdGg6IFtdLCBsaW5rczoge30sIHN0YXRlTmFtZXM6IGNvbXBvbmVudC5zdGF0ZU5hbWVzIH0pO1xyXG5cclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMoIHByZXBhcmVTdHlsZXMoYXJncy5zdHlsZXMsIGNvbXBvbmVudCkgKTtcclxuXHJcbiAgcmV0dXJuIENPTVBPTkVOVFNbbmFtZV0gPSBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCAoY29tcG9uZW50SFRNTE1hcmt1cCwgY29tcG9uZW50KSB7XHJcbiAgd2Fsa05vZGVzKGNvbXBvbmVudEhUTUxNYXJrdXAsIChIVE1MTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgYmluZGluZ09wdHMgPSBhbmFseXplQmluZGluZyhIVE1MTm9kZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nT3B0cykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNyZWF0ZUJpbmRpbmcoYmluZGluZ09wdHMubmFtZSwgY29tcG9uZW50LCBIVE1MTm9kZSk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmdPcHRzLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLCBiaW5kaW5nT3B0cyk7XHJcbiAgICAgIEhUTUxOb2RlLmNsYXNzTGlzdC5hZGQoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50LnN0YXRlW2JpbmRpbmcubmFtZV0gPSBiaW5kaW5nO1xyXG4gICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkLCBjb21wb25lbnQubmFtZSArICctJyArIGJpbmRpbmcubmFtZSk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmdPcHRzLmlzTGlzdCkge1xyXG4gICAgICBjb25zdCBpdGVtTm9kZSA9IEhUTUxOb2RlLmNoaWxkcmVuWzBdO1xyXG4gICAgICBtb2RpZnlUb0xpc3RCaW5kaW5nKGJpbmRpbmcsIGl0ZW1Ob2RlKTtcclxuXHJcbiAgICAgIGlmIChpc0NvbXBvbmVudChpdGVtTm9kZSkpIHtcclxuICAgICAgICBzZXRDb21wb25lbnQoYmluZGluZy5saXN0SXRlbSwgZ2V0Q29tcG9uZW50T3B0cyhpdGVtTm9kZSkpO1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGl0ZW1Ob2RlLCBiaW5kaW5nLmxpc3RJdGVtKTtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDb21wb25lbnQgKGNvbXBvbmVudEJpbmRpbmcsIHN1YkNvbXBvbmVudE9wdHMpIHtcclxuICBjb25zdCBzdGF0ZU5hbWVzID0gT2JqZWN0LmFzc2lnbihjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXMsIHN1YkNvbXBvbmVudE9wdHMuY29tcG9uZW50LnN0YXRlTmFtZXMpO1xyXG4gIGxldCBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQubmFtZSArICd4JyArIENPTVBPTkVOVF9DT1VOVEVSKys7XHJcblxyXG4gIGlmIChzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSkge1xyXG4gICAgaWYgKHN0YXRlTmFtZXNbc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWVdKSB7XHJcbiAgICAgIHRocm93IG5ldyBTY29wZU5hbWVDb2xsaXNpb25FcnJvcihzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGVJZCA9IHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lO1xyXG4gICAgY29tcG9uZW50QmluZGluZy5zdGF0ZU5hbWVzW3N0YXRlSWRdID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvcHkoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQpO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbiggY29tcG9uZW50QmluZGluZywge1xyXG4gICAgaWQ6IHN0YXRlSWQsXHJcbiAgICBzdGF0ZUlkLFxyXG4gICAgbmFtZTogc3RhdGVJZCxcclxuICAgIHN0YXRlTmFtZTogc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudEJpbmRpbmcuc3RhdGVQYXRoLmNvbmNhdChzdGF0ZUlkKSxcclxuICAgIG1hcmt1cDogc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQubWFya3VwLmNsb25lTm9kZSh0cnVlKSxcclxuICAgIGlzQ29tcG9uZW50OiB0cnVlLFxyXG4gICAgc3RhdGVOYW1lcyxcclxuICAgIF9saW5rczogT2JqZWN0LmFzc2lnbih7fSwgc3ViQ29tcG9uZW50T3B0cy5saW5rcyksXHJcbiAgICBvdXRlck5hbWVzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLnJldkxpbmtzKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkLCBwYXJlbnRDb21wb25lbnQpIHtcclxuICBjb25zdCBjb21wb25lbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tcG9uZW50Lm1hcmt1cC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRlbkJpbmRpbmdJZCggY3VycmVudFN0YXRlSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5TRUxGICkpO1xyXG4gIGNvbXBvbmVudFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Lm1hcmt1cCk7XHJcbiAgY29tcG9uZW50LnN0YXRlUGF0aCA9IHBhcmVudENvbXBvbmVudC5zdGF0ZVBhdGguY29uY2F0KGNvbXBvbmVudC5zdGF0ZUlkKTtcclxuICBjb21wb25lbnQuc3RhdGVOYW1lcyA9IHBhcmVudENvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICBjb25zdCBzdWJDb21wb25lbnRzID0gW107XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGNvbnN0IG9sZEJpbmRpbmdJZCA9IGJpbmRpbmcuaWQ7XHJcbiAgICBjb25zdCBuZXdCaW5kaW5nSWQgPSBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIGJpbmRpbmdOYW1lO1xyXG4gICAgY29uc3Qgc2hvcnRJZCA9IHNob3J0ZW5CaW5kaW5nSWQobmV3QmluZGluZ0lkKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5tYXJrdXApIHtcclxuICAgICAgY29uc3QgYmluZGluZ05vZGUgPSBjb21wb25lbnRXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkJJTkRJTkdfSUQsIHNob3J0SWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKExJQl9BVFRSLlBSRUZJWCArIG9sZEJpbmRpbmdJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5hZGQoTElCX0FUVFIuUFJFRklYICsgbmV3QmluZGluZ0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHtcclxuICAgICAgc3RhdGVQYXRoOiBjb21wb25lbnQuc3RhdGVQYXRoLnNsaWNlKCksXHJcbiAgICAgIGhvb2tzOiBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0hPT0tTLCBiaW5kaW5nLmhvb2tzKSxcclxuICAgICAgaWQ6IG5ld0JpbmRpbmdJZCxcclxuICAgICAgc2hvcnRJZCxcclxuICAgIH0pO1xyXG5cclxuICAgIHByZXBhcmVSZWFjdGl2ZUZ1bmNzKGJpbmRpbmcsIGNvbXBvbmVudCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVQYXRoLnB1c2goYmluZGluZ05hbWUpO1xyXG4gICAgICBiaW5kaW5nLnN0YXRlTmFtZXMgPSBjb21wb25lbnQuc3RhdGVOYW1lcztcclxuXHJcbiAgICAgIHByZXBhcmVCaW5kaW5ncyAoYmluZGluZy5saXN0SXRlbSwgbmV3QmluZGluZ0lkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgTElCX0FUVFIuSVRFTSArIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSwgYmluZGluZyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBzdWJDb21wb25lbnRzLnB1c2goYmluZGluZyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNldHVwQ29tcG9uZW50c0xpbmtzKGNvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50KTtcclxuICBjb21wb25lbnQudGVtcGxhdGUgPSBjb21wb25lbnQubWFya3VwLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgc3ViQ29tcG9uZW50cy5mb3JFYWNoKChzdWJDb21wb25lbnQpID0+IHtcclxuICAgIHByZXBhcmVCaW5kaW5ncyAoc3ViQ29tcG9uZW50LCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIHN1YkNvbXBvbmVudC5zdGF0ZUlkLCBjb21wb25lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlUmVhY3RpdmVGdW5jcyAoYmluZGluZywgY29tcG9uZW50RGF0YSkge1xyXG4gIFZBTFVFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcclxuICAgIGNvbnN0IHJlYWN0aXZlRnVuYyA9IGJpbmRpbmdbdHlwZV07XHJcbiAgICBpZiAoIXJlYWN0aXZlRnVuYykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYmluZGluZy5ldmFsdWF0ZVt0eXBlXSA9IHByZXBhcmVSZWFjdGl2ZUZ1bmMoYmluZGluZywgdHlwZSwgcmVhY3RpdmVGdW5jLCBjb21wb25lbnREYXRhKVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlUmVhY3RpdmVGdW5jIChiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpIHtcclxuICBjb25zdCBkZXBlbmRlbmNpZXNOYW1lcyA9IGdldERlcGVuZGVuY2llc05hbWVzKHJlYWN0aXZlRnVuYyk7XHJcblxyXG4gIGRlcGVuZGVuY2llc05hbWVzLmZvckVhY2goKGRlcGVuZGVuY3lOYW1lKSA9PiB7XHJcbiAgICBpZiAoaXNFbXB0eShjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSkpIHtcclxuICAgICAgY29tcG9uZW50RGF0YS5zdGF0ZVtkZXBlbmRlbmN5TmFtZV0gPSBjcmVhdGVCaW5kaW5nKGRlcGVuZGVuY3lOYW1lLCBjb21wb25lbnREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXS5kZXBlbmRhbnRzWyBiaW5kaW5nLm5hbWUgKyAnOicgKyB0eXBlIF0gPSB7IG5hbWU6IGJpbmRpbmcubmFtZSwgdHlwZSB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKHZhbHVlcywgY29tcG9uZW50SW50ZXJmYWNlKSA9PiBjb21wdXRlIChyZWFjdGl2ZUZ1bmMsIHZhbHVlcywgY29tcG9uZW50SW50ZXJmYWNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzTmFtZXMoZnVuYykge1xyXG4gIGNvbnN0IGZ1bmNQYXJhbXMgPSBnZXRQYXJhbU5hbWVzKGZ1bmMpO1xyXG4gIGNvbnN0IHZhbHVlc09ialJlZ0V4cCA9ICBuZXcgUmVnRXhwKCdcXFxcJyArIGZ1bmNQYXJhbXNbMF0gKyAnXFxcXC4oXFxcXERbXlxcXFxzXFxcXFddKyknLCAnZycpO1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gW107XHJcbiAgY29uc3QgZnVuY1N0ciA9IGZ1bmMudG9TdHJpbmcoKTtcclxuICBsZXQgZGVwZW5kZW5jeU5hbWU7XHJcbiAgd2hpbGUgKGRlcGVuZGVuY3lOYW1lID0gdmFsdWVzT2JqUmVnRXhwLmV4ZWMoZnVuY1N0cikpIHtcclxuICAgIGRlcGVuZGVuY2llc05hbWVzLnB1c2goZGVwZW5kZW5jeU5hbWVbMV0pO1xyXG4gIH1cclxuICByZXR1cm4gZGVwZW5kZW5jaWVzTmFtZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoZnVuYykge1xyXG4gIGNvbnN0IGZ1bmNTdHJXaXRob3V0Q29tbWVudHMgPSBmdW5jLnRvU3RyaW5nKCkucmVwbGFjZShSRS5TVFJJUF9DT01NRU5UUywgJycpO1xyXG4gIGNvbnN0IHBhcmFtc1N0ciA9IGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuc2xpY2UoXHJcbiAgICBmdW5jU3RyV2l0aG91dENvbW1lbnRzLmluZGV4T2YoJygnKSArMSxcclxuICAgIGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuaW5kZXhPZignKScpXHJcbiAgKTtcclxuICByZXR1cm4gcGFyYW1zU3RyLm1hdGNoKFJFLkFSR1VNRU5UX05BTUVTKSB8fCBbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZSAoZnVuYywgdmFsdWVzT2JqLCBjb21wb25lbnRJbnRlcmZhY2UpIHtcclxuICByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGdldE9ubHlWYWx1ZXModmFsdWVzT2JqKSwgY29tcG9uZW50SW50ZXJmYWNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBDb21wb25lbnRzTGlua3MgKGNvbXBvbmVudCwgcGFyZW50Q29tcG9uZW50KSB7XHJcbiAgT2JqZWN0LmFzc2lnbihcclxuICAgIHBhcmVudENvbXBvbmVudC5saW5rcyxcclxuICAgIG1hcChjb21wb25lbnQub3V0ZXJOYW1lcywgKGssIHYpID0+ICh7IGxpbms6IGssIGNvbXBvbmVudDogY29tcG9uZW50LnN0YXRlSWQgfSkpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVXNlck9wdGlvbnMgKG9wdGlvbnNPYmosIHBhcmVudE9iaiwgcGFyZW50S2V5KSB7XHJcbiAgaWYgKGlzRnVuY3Rpb24gKG9wdGlvbnNPYmopKSB7XHJcbiAgICByZXR1cm4gc2V0KHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgY2xhc3M6IG9wdGlvbnNPYmogfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheShvcHRpb25zT2JqKSkge1xyXG5cclxuICAgIGlmIChvcHRpb25zT2JqLmxlbmd0aCA+IDEpIHtcclxuICAgICAgb3B0aW9uc09iai5mb3JFYWNoKChvcHRpb24pID0+IG5vcm1hbGl6ZVVzZXJPcHRpb25zIChvcHRpb24sIHBhcmVudE9iaiwgcGFyZW50S2V5KSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zT2JqWzBdKSkge1xyXG4gICAgICByZXR1cm4gc2V0KHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgdmFsdWU6IG9wdGlvbnNPYmpbMF0gfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYmplY3Qob3B0aW9uc09ialswXSkpIHtcclxuICAgICAgcmV0dXJuIHNldChwYXJlbnRPYmosIFtwYXJlbnRLZXldLCB7IGV2ZW50czogb3B0aW9uc09ialswXSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvckVhY2gob3B0aW9uc09iaiwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIGRlbGV0ZSBvcHRpb25zT2JqW2tleV07XHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhrZXkpO1xyXG5cclxuICAgIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgcGFyZW50T2JqWydzdGF0ZSddW2tleV0gPSBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHZhbHVlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmVudE9ialsnc3RhdGUnXVtrZXldID0gYmluZGluZztcclxuICAgIG5vcm1hbGl6ZVVzZXJPcHRpb25zKHZhbHVlLCBwYXJlbnRPYmpbJ3N0YXRlJ10sIGtleSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBwYXJlbnRPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuYWx5emVCaW5kaW5nIChlbCkge1xyXG4gIGlmIChpc0NvbXBvbmVudChlbCkpIHtcclxuICAgIHJldHVybiBnZXRDb21wb25lbnRPcHRzKGVsKTtcclxuICB9XHJcblxyXG4gIGlmICghZWwuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGxldCBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0JJTkRJTkcpO1xyXG4gIGVsLnJlbW92ZUF0dHJpYnV0ZShMSUJfQVRUUi5URU1QTEFURV9CSU5ESU5HKTtcclxuXHJcbiAgaWYgKG5hbWUpIHtcclxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUudHJpbSgpIH07XHJcbiAgfVxyXG5cclxuICBuYW1lID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0xJU1RfQklORElORyk7XHJcbiAgZWwucmVtb3ZlQXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0xJU1RfQklORElORyk7XHJcblxyXG4gIGlmIChuYW1lKSB7XHJcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLnRyaW0oKSwgaXNMaXN0OiB0cnVlIH07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudCAoZWwpIHtcclxuICBjb25zdCB0YWdOYW1lID0gZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgcmV0dXJuIHRhZ05hbWUgJiYgQ09NUE9ORU5UU1sgdG9DYW1lbENhc2UodGFnTmFtZSkgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50T3B0cyAob2JqKSB7XHJcbiAgY29uc3QgbmFtZSA9IHRvQ2FtZWxDYXNlKCBvYmoudGFnTmFtZS50b0xvd2VyQ2FzZSgpICk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50QnlOYW1lKG5hbWUpO1xyXG4gIGNvbnN0IGxpbmtzID0ge307XHJcbiAgY29uc3QgcmV2TGlua3MgPSB7fTtcclxuICBsZXQgc3RhdGVOYW1lID0gbnVsbDtcclxuXHJcbiAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwob2JqLmF0dHJpYnV0ZXMpXHJcbiAgICAuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG5cclxuICAgICAgaWYgKGF0dHIubmFtZSA9PT0gTElCX0FUVFIuU1RBVEVfTkFNRSkge1xyXG4gICAgICAgIHN0YXRlTmFtZSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBpbm5lckxpbmsgPSB0b0NhbWVsQ2FzZShhdHRyLm5hbWUpO1xyXG4gICAgICBsaW5rc1tpbm5lckxpbmtdID0gYXR0ci52YWx1ZTtcclxuICAgICAgcmV2TGlua3NbYXR0ci52YWx1ZV0gPSBpbm5lckxpbms7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIGxpbmtzOiBsaW5rcyxcclxuICAgIHJldkxpbmtzOiByZXZMaW5rcyxcclxuICAgIHN0YXRlTmFtZSxcclxuICAgIG5hbWUsXHJcbiAgICBpc0NvbXBvbmVudDogdHJ1ZSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnRCeU5hbWUgKG5hbWUpIHtcclxuICBjb25zdCBjb21wb25lbnQgPSBDT01QT05FTlRTWyB0b0NhbWVsQ2FzZShuYW1lKSBdO1xyXG5cclxuICBpZiAoIWNvbXBvbmVudCkge1xyXG4gICAgdGhyb3cgbmV3IENvbXBvbmVudE5vdEV4aXN0c0Vycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmluZGluZyAobmFtZSwgY29tcG9uZW50LCBlbCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudE9wdHMgPSAoY29tcG9uZW50KSA/IHtcclxuICAgIGlkOiBjb21wb25lbnQuc3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGgsXHJcbiAgICBzdGF0ZU5hbWVzOiBjb21wb25lbnQuc3RhdGVOYW1lcyxcclxuICAgIGlzTGlzdEl0ZW06IGNvbXBvbmVudC5pc0xpc3QsXHJcbiAgICBzdGF0ZUlkOiBuYW1lLFxyXG4gIH0gOiB7fTtcclxuXHJcbiAgY29uc3QgZWxPcHRzID0gKGVsKSA/IHtcclxuICAgIGluaXRWYWx1ZTogZWwudmFsdWUgfHwgZWwuaW5uZXJIVE1MXHJcbiAgfSA6IHt9O1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XHJcbiAgICBuYW1lLFxyXG4gICAgbGlzdGVuZXJzOiBbXSxcclxuICAgIG1hcmt1cDogZWwsXHJcbiAgICBkZXBlbmRhbnRzOiB7fSxcclxuICAgIGV2ZW50czoge30sXHJcbiAgICBldmFsdWF0ZToge30sXHJcbiAgICBsaW5rczoge30sXHJcbiAgICBzdGF0ZTogeyBbTElCX0FUVFIuU0VMRl06IHt9IH0sXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcblxyXG4gIH0sIGNvbXBvbmVudE9wdHMsIGVsT3B0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRvTGlzdEJpbmRpbmcgKGJpbmRpbmcsIGl0ZW1NYXJrdXApIHtcclxuICBiaW5kaW5nLmlzTGlzdCA9IHRydWU7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGJpbmRpbmcsIHtcclxuICAgIG1hcmt1cDogaXRlbU1hcmt1cCxcclxuICAgIGxpc3RJdGVtOiBjcmVhdGVCaW5kaW5nKGl0ZW1NYXJrdXAudGFnTmFtZSwgYmluZGluZywgaXRlbU1hcmt1cCksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3J0ZW5CaW5kaW5nSWQgKGlkKSB7XHJcbiAgcmV0dXJuIGlkXHJcbiAgICAuc3BsaXQoTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKVxyXG4gICAgLm1hcCgoZWwpID0+IGdldFNob3J0TmFtZShlbCkpXHJcbiAgICAuam9pbihMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlU3R5bGVzIChzdHlsZUFyZywgY29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIG1hcEtleXMoc3R5bGVBcmcsIChrZXkpID0+IGtleVxyXG4gICAgLnNwbGl0KCcsJylcclxuICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBzZWxlY3Rvci50cmltKCkpXHJcbiAgICAubWFwKChzZWxlY3RvcikgPT4ge1xyXG5cclxuICAgICAgbGV0IGNsYXNzTmFtZSA9ICAnLicgKyBjb21wb25lbnQubmFtZTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IGlzQmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVsgc2VsZWN0b3Iuc3BsaXQoJyAnKVswXS5zcGxpdCgnOjonKVswXS5zcGxpdCgnOicpWzBdIF07XHJcbiAgICAgICAgY29uc3QgcHJlZml4ID0gaXNCaW5kaW5nID8gY2xhc3NOYW1lICsgJy0nIDogJyc7XHJcbiAgICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByZWZpeCArIHNlbGVjdG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xyXG4gICAgfSlcclxuICAgIC5qb2luKCcsJylcclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcblxyXG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcbmltcG9ydCB7IGdldFJlYWxOYW1lLCBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgYXBwbHlDaGFuZ2VzXHJcbn0gZnJvbSAnLi9TdGF0ZUNoYW5nZSc7XHJcblxyXG5leHBvcnQge1xyXG4gIHNldHVwRXZlbnRIYW5kbGVyc1xyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFdmVudEhhbmRsZXJzIChlbGVtZW50KSB7XHJcbiAgY29uc3QgZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoZWxlbWVudCwgZXZlbnRIYW5kbGVycyk7XHJcblxyXG4gIGNvbnN0IG1hcmt1cCA9IGVsZW1lbnQuZWw7XHJcbiAgZm9yIChsZXQgZXZlbnROYW1lIGluIGV2ZW50SGFuZGxlcnMpIHtcclxuICAgIG1hcmt1cC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKGUpID0+IGV4ZWN1dGVBbGxDYWxsYmFja3NJbkxpc3QoZSwgZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLCBlbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJBbGxFdmVudEhhbmRsZXJzIChjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpIHtcclxuICBnYXRoZXJFdmVudEhhbmRsZXJzIChjb21wb25lbnQsIGdhdGhlcmVkSGFuZGxlcnMpO1xyXG5cclxuICBpZiAoY29tcG9uZW50LnN0YXRlKSB7XHJcbiAgICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcpID0+IGdhdGhlckFsbEV2ZW50SGFuZGxlcnMoYmluZGluZywgZ2F0aGVyZWRIYW5kbGVycykpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5saXN0SXRlbSkge1xyXG4gICAgZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhjb21wb25lbnQubGlzdEl0ZW0sIGdhdGhlcmVkSGFuZGxlcnMpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyRXZlbnRIYW5kbGVycyAoYmluZGluZywgZ2F0aGVyZWRIYW5kbGVycykge1xyXG4gIGlmICghYmluZGluZy5ldmVudHMpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGV2ZW50TmFtZSBpbiBiaW5kaW5nLmV2ZW50cykge1xyXG4gICAgaWYgKCFnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV0pIHtcclxuICAgICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2F0aGVyZWRIYW5kbGVyc1tldmVudE5hbWVdW2JpbmRpbmcuc2hvcnRJZF0gPSBiaW5kaW5nLmV2ZW50c1tldmVudE5hbWVdO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZXhlY3V0ZUFsbENhbGxiYWNrc0luTGlzdCAoZSwgZXZlbnRIYW5kbGVycywgZWxlbWVudCkge1xyXG4gIGRlY29yYXRlRXZlbnQoZSk7XHJcbiAgc3RhcnRUcmFuc2FjdGlvbigpO1xyXG4gIFxyXG4gIGxldCBjdXJIVE1MTm9kZSA9IGUudGFyZ2V0O1xyXG4gIHdoaWxlIChjdXJIVE1MTm9kZSAhPT0gZWxlbWVudC5lbC5wYXJlbnROb2RlKSB7XHJcbiAgICBjb25zdCBiaW5kaW5nSWQgPSBjdXJIVE1MTm9kZS5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCk7XHJcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBldmVudEhhbmRsZXJzW2JpbmRpbmdJZF07XHJcblxyXG4gICAgaWYgKGV2ZW50SGFuZGxlcikge1xyXG4gICAgICBjb25zdCBpbmRleGxlc3NTdGF0ZVBhdGggPSBiaW5kaW5nSWQuc3BsaXQoTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSKTtcclxuICAgICAgaW5kZXhsZXNzU3RhdGVQYXRoLnBvcCgpO1xyXG4gICAgICBjb25zdCBzdGF0ZVBhdGhUb0l0ZW0gPSBnZXRTdGF0ZVBhdGhUb0l0ZW0oY3VySFRNTE5vZGUsIGluZGV4bGVzc1N0YXRlUGF0aCk7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc29yVG9EYXRhID0gY3JlYXRlQWNjZXNzb3IoW2VsZW1lbnQuaWRdLmNvbmNhdChzdGF0ZVBhdGhUb0l0ZW0pKTtcclxuXHJcbiAgICAgIGV2ZW50SGFuZGxlci5jYWxsKHRoaXMsIGUsIGN1ckhUTUxOb2RlLCBhY2Nlc3NvclRvRGF0YSwgK3N0YXRlUGF0aFRvSXRlbS5zbGljZSgtMilbMF0pO1xyXG5cclxuICAgICAgaWYgKGUucHJvcGFnYXRpb25TdG9wcGVkKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGN1ckhUTUxOb2RlID0gY3VySFRNTE5vZGUucGFyZW50Tm9kZTtcclxuICB9XHJcblxyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNvcmF0ZUV2ZW50IChlKSB7XHJcbiAgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gZS5zdG9wUHJvcGFnYXRpb24uYmluZChlKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGUucHJvcGFnYXRpb25TdG9wcGVkID0gdHJ1ZTtcclxuICAgIHN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGVQYXRoVG9JdGVtIChlbCwgaW5kZXhsZXNzU3RhdGVQYXRoKSB7XHJcbiAgY29uc3Qgc3RhdGVQYXRoID0gW107XHJcblxyXG4gIGxldCBlbGVtZW50TmFtZTtcclxuICB3aGlsZSAoZWxlbWVudE5hbWUgPSBnZXRSZWFsTmFtZSggaW5kZXhsZXNzU3RhdGVQYXRoLnBvcCgpICkpIHtcclxuXHJcbiAgICBpZiAoaGFzKGVsZW1lbnROYW1lLCBMSUJfQVRUUi5JVEVNKSkge1xyXG4gICAgICBlbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnNsaWNlKExJQl9BVFRSLklURU0ubGVuZ3RoKTtcclxuICAgICAgZWwgPSBnZXRUb0l0ZW1Ob2RlKGVsKTtcclxuICAgICAgY29uc3QgaWR4ID0gZWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgIHN0YXRlUGF0aC51bnNoaWZ0KGlkeCwgZWxlbWVudE5hbWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZVBhdGgudW5zaGlmdChlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGVQYXRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb0l0ZW1Ob2RlIChlbCkge1xyXG4gIGxldCBjdXJFbCA9IGVsO1xyXG5cclxuICB3aGlsZSAoY3VyRWwudGFnTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICBpZiAoY3VyRWwuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpKSB7XHJcbiAgICAgIHJldHVybiBjdXJFbDtcclxuICAgIH1cclxuICAgIGN1ckVsID0gY3VyRWwucGFyZW50Tm9kZTtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgcmVwbGFjZU5vZGVzLFxyXG4gIGNvbGxlY3RIVE1MTm9kZXMsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2RvbSdcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBpc0NvbXBvbmVudCxcclxufSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IHsgc2V0dXBFdmVudEhhbmRsZXJzIH0gZnJvbSAnLi9FdmVudEhhbmRsZXInO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuZXhwb3J0IHsgYXBwbHkgfTtcclxuXHJcblxyXG5mdW5jdGlvbiBhcHBseSAocm9vdEVsZW1lbnRTZWxlY3Rvcikge1xyXG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihyb290RWxlbWVudFNlbGVjdG9yKTtcclxuICBjb25zdCBIVE1MTm9kZXMgPSBjb2xsZWN0SFRNTE5vZGVzKHJvb3RFbGVtZW50LCBpc0NvbXBvbmVudCk7XHJcblxyXG4gIEhUTUxOb2Rlcy5mb3JFYWNoKChIVE1MTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50T3B0cyA9IGdldENvbXBvbmVudE9wdHMoSFRNTE5vZGUpO1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHNldHVwRWxlbWVudChjb21wb25lbnRPcHRzKTtcclxuXHJcbiAgICByZXBsYWNlTm9kZXMoSFRNTE5vZGUsIGVsZW1lbnQuZWwpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVsZW1lbnQgKGNvbXBvbmVudE9wdHMpIHtcclxuICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChjb21wb25lbnRPcHRzKTtcclxuICBzZXR1cEV2ZW50SGFuZGxlcnMoZWxlbWVudCk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IGdldCwgc2V0LCBmb3JFYWNoLCBtYXAgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGhhcyB9IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IFN0YXRlQWNjZXNzRXJyb3IgZnJvbSAnLi9lcnJvcnMvU3RhdGVBY2Nlc3NFcnJvcic7XHJcbmltcG9ydCBTdGF0ZUxvb2t1cEVycm9yIGZyb20gJy4vZXJyb3JzL1N0YXRlTG9va3VwRXJyb3InO1xyXG5cclxuaW1wb3J0IHsgUkVTRVJWRURfQklORElOR19OQU1FUyB9IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVN0YXRlTm9kZXMsXHJcbiAgc2V0VmFsdWVzLFxyXG4gIG1vZGlmeUxpc3QsXHJcbiAgc3RhcnRUcmFuc2FjdGlvbixcclxuICBzZW5kVG9SZW5kZXJRdWV1ZSxcclxuICBhcHBseUNoYW5nZXMsXHJcbn0gZnJvbSAnLi9TdGF0ZUNoYW5nZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzRW1wdHksXHJcbiAgaXNBcnJheSxcclxuICBpc1N0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVFbGVtZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIHNldFN0YXRlLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbn07XHJcblxyXG5jb25zdCBFTEVNRU5UUyA9IHt9O1xyXG5jb25zdCBTVEFURSA9IHt9O1xyXG5sZXQgRUxFTUVOVF9DT1VOVEVSID0gMTtcclxuXHJcbmZ1bmN0aW9uIHNldFN0YXRlIChwYXRoLCB2YWx1ZSkge1xyXG4gIHNldChTVEFURSwgcGF0aCwgdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZSAocGF0aCkge1xyXG4gIHJldHVybiBnZXQoU1RBVEUsIHBhdGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChjb21wb25lbnRPcHRzKSB7XHJcbiAgY29uc3QgaWQgPSBFTEVNRU5UX0NPVU5URVIrKztcclxuICBjb25zdCBuYW1lID0gY29tcG9uZW50T3B0cy5uYW1lO1xyXG5cclxuICBjb25zdCBlbGVtZW50ID0gRUxFTUVOVFNbaWRdID0ge1xyXG4gICAgaWQsXHJcbiAgICBzdGF0ZTogeyBbbmFtZV06IGNvbXBvbmVudE9wdHMuY29tcG9uZW50IH0sXHJcbiAgfTtcclxuXHJcbiAgU1RBVEVbaWRdID0ge307XHJcblxyXG4gIGNyZWF0ZVN0YXRlTm9kZXMoW2lkLCBuYW1lXSk7XHJcblxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlKFtpZF0sIHsgW25hbWVdOiBmYWxzZSB9KTtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBlbGVtZW50LmVsID0gU1RBVEVbaWRdW25hbWVdW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG4gIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5CQVNFKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjY2Vzc29yIChwYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0U3RhdGUocGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHBhdGgpO1xyXG5cclxuICBjb25zdCBhY2Nlc3NvciA9IHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIHZhbHVlcyxcclxuICAgIHBhdGgsXHJcbiAgICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gICAgYXBwbHlDaGFuZ2VzLFxyXG4gICAgdXA6IChsZXZlbCkgPT4gbW92ZVVwU3RhdGVQYXRoKGxldmVsLCBwYXRoLnNsaWNlKCkpLFxyXG4gICAgZG93bjogKGFkZGl0aW9uYWxQYXRoKSA9PiBjcmVhdGVBY2Nlc3NvcihwYXRoLmNvbmNhdChhZGRpdGlvbmFsUGF0aCkpLFxyXG4gICAgc2V0OiAoY2hhbmdlT2JqKSA9PiBzZXRWYWx1ZXMoIHByZXBhcmVDaGFuZ2VPYmplY3QoY2hhbmdlT2JqKSwgcGF0aCksXHJcbiAgICBnZXQ6IChrZXkpID0+IGdldFZhbHVlcyhhY2Nlc3Nvciwga2V5LCBwYXRoKSxcclxuICAgIG1hcmt1cDogKGtleSkgPT4ga2V5ID8gYWNjZXNzb3IudmFsdWVzW2tleV0uZWwgOiBhY2Nlc3Nvci52YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwsXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheSh2YWx1ZXMpKSB7XHJcbiAgICBtb2RpZnlUb0FycmF5QWNjZXNzb3IoYWNjZXNzb3IpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFjY2Vzc29yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQ2hhbmdlT2JqZWN0IChjaGFuZ2VPYmopIHtcclxuICByZXR1cm4gbWFwKGNoYW5nZU9iaiwgKHYpID0+IHtcclxuICAgIGNvbnN0IGZvcmNlZCA9IGlzT2JqZWN0KHYpICYmIE9iamVjdC5rZXlzKHYpWzBdID09PSAnZm9yY2UnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBmb3JjZWQgPyB2Wydmb3JjZSddIDogdixcclxuICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgZm9yY2U6IGZvcmNlZCxcclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudCAocGF0aCkge1xyXG4gIGxldCBjb21wb25lbnQgPSBFTEVNRU5UU1sgcGF0aFswXSBdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5zdGF0ZVsgcGF0aFtpXSBdO1xyXG4gICAgXHJcbiAgICBpZiAoY29tcG9uZW50LmlzTGlzdCAmJiBpICE9PSAocGF0aC5sZW5ndGggLTEpKSB7XHJcbiAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5saXN0SXRlbTtcclxuICAgICAgaSs9MjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ubHlWYWx1ZXMgKG9iaikge1xyXG4gIHJldHVybiBtYXAob2JqLCAoYmluZGluZ1ZhbHVlcykgPT4gYmluZGluZ1ZhbHVlc1sndmFsdWUnXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlcyAoYWNjZXNzb3IsIGtleSwgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgdmFsdWVzID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnZXRWYWx1ZXNUcmVlKHZhbHVlcywgY29tcG9uZW50LCB7fSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2tleV07XHJcbiAgaWYgKGJpbmRpbmcuaXNMaXN0IHx8IGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguY29uY2F0KGtleSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlc1trZXldLnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNUcmVlICh2YWx1ZXMsIGNvbXBvbmVudCwgdmFsdWVzVHJlZSkge1xyXG4gIGZvckVhY2godmFsdWVzLCAodmFscywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmIChoYXMoUkVTRVJWRURfQklORElOR19OQU1FUywgYmluZGluZ05hbWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgdmFsdWVzVHJlZVtiaW5kaW5nTmFtZV0gPSBbXTtcclxuICAgICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1WYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXVtpXSA9IHt9O1xyXG4gICAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXVtpXVtiaW5kaW5nLmxpc3RJdGVtLm5hbWVdLCBiaW5kaW5nLmxpc3RJdGVtLCBpdGVtVmFsdWVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjb25zdCBjb21wb25lbnRWYWx1ZXMgPSB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IHt9O1xyXG4gICAgICBnZXRWYWx1ZXNUcmVlKHZhbHVlc1tiaW5kaW5nTmFtZV0sIGJpbmRpbmcsIGNvbXBvbmVudFZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzVHJlZVsgY29tcG9uZW50Ll9saW5rc1tiaW5kaW5nTmFtZV0gfHwgYmluZGluZ05hbWUgXSA9IHZhbHMudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNUcmVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlVXBTdGF0ZVBhdGggKGxldmVsLCBzdGF0ZVBhdGgpIHtcclxuICBsZXQgbmV3U3RhdGVQYXRoO1xyXG4gIGxldCBsYXN0SWR4ID0gc3RhdGVQYXRoLmxlbmd0aDtcclxuXHJcbiAgaWYgKGxldmVsID09PSAnJykge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCAyKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcobGV2ZWwpKSB7XHJcbiAgICB3aGlsZSAobGFzdElkeC0tKSB7XHJcbiAgICAgIGlmIChzdGF0ZVBhdGhbbGFzdElkeF0gPT09IGxldmVsKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIGxhc3RJZHggKyAxKSk7XHJcbiAgfVxyXG5cclxuICBsZXZlbCA9IGxldmVsIHx8IDE7XHJcbiAgd2hpbGUgKGxhc3RJZHgtLSAmJiBsZXZlbC0tKSB7XHJcbiAgICBpZiAoaXNOdW1iZXIoK3N0YXRlUGF0aFtsYXN0SWR4IC0gMV0pKSB7XHJcbiAgICAgIGxhc3RJZHgtLTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgbGFzdElkeCArIDEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VG9BcnJheUFjY2Vzc29yIChhY2Nlc3Nvcikge1xyXG4gIE9iamVjdC5hc3NpZ24oYWNjZXNzb3IsIHtcclxuICAgIGdldDogKG51bSkgPT4gY3JlYXRlQWNjZXNzb3IoYWNjZXNzb3IucGF0aC5jb25jYXQobnVtLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZSkpLFxyXG5cclxuICAgIHB1c2g6IChlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGgsIGVscyB9LCBhY2Nlc3NvciksXHJcbiAgICB1bnNoaWZ0OiAoZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0OiAwLCBlbHMgfSwgYWNjZXNzb3IpLFxyXG4gICAgYWRkOiAoc3RhcnQsIGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuXHJcbiAgICBwb3A6IChudW0pID0+IG1vZGlmeUxpc3QoJ3JlbW92ZScsIHsgc3RhcnQ6IGFjY2Vzc29yLnZhbHVlcy5sZW5ndGggLSAobnVtIHx8IDEpLCBudW0gfSwgYWNjZXNzb3IpLFxyXG4gICAgc2hpZnQ6IChudW0pID0+IG1vZGlmeUxpc3QoJ3JlbW92ZScsIHsgc3RhcnQ6IDAsIG51bSB9LCBhY2Nlc3NvciksXHJcbiAgICByZW1vdmU6IChzdGFydCwgbnVtKSA9PiBtb2RpZnlMaXN0KCdyZW1vdmUnLCB7IHN0YXJ0LCBudW0gfSwgYWNjZXNzb3IpLFxyXG5cclxuICAgIGxlbmd0aDogKCkgPT4gYWNjZXNzb3IudmFsdWVzLmxlbmd0aCxcclxuICAgIHZhbHVlOiAoKSA9PiBtYXBMaXN0KGFjY2Vzc29yKSxcclxuICAgIGZvckVhY2g6IChjYikgPT4gaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIGNiKSxcclxuICAgIGZpbHRlcjogKGNiKSA9PiBmaWx0ZXJMaXN0KGFjY2Vzc29yLCBjYiksXHJcbiAgICBtYXA6IChjYikgPT4gbWFwTGlzdChhY2Nlc3NvciwgY2IpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpdGVyYXRlTGlzdFZhbHVlcyAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgYWNjZXNzb3IudmFsdWVzLmZvckVhY2goKGVsLCBpKSA9PlxyXG4gICAgY2IoXHJcbiAgICAgIGdldFZhbHVlc1RyZWUoZWxbYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdLCBhY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0sIHt9KSxcclxuICAgICAgaVxyXG4gICkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0IChhY2Nlc3NvciwgY2IpIHtcclxuICBjb25zdCBuZXdMaXN0ID0gW107XHJcblxyXG4gIGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCAoZWwsIGkpID0+IHtcclxuICAgIGlmIChjYihlbCwgaSkpIHtcclxuICAgICAgbmV3TGlzdC5wdXNoKGVsKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5ld0xpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcExpc3QgKGFjY2Vzc29yLCBjYikge1xyXG4gIGNvbnN0IG5ld0xpc3QgPSBbXTtcclxuICBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgKGVsLCBpKSA9PiBuZXdMaXN0LnB1c2goIGNiID8gY2IoZWwsIGkpIDogZWwgKSk7XHJcbiAgcmV0dXJuIG5ld0xpc3Q7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IHNldCwgZm9yRWFjaCwgbWFwLCB0b09iamVjdCwgbWFwS2V5cyB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0VtcHR5LFxyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCBhcmVFcXVhbCBmcm9tICcuL2hlbHBlcnMvZXF1YWxpdHknO1xyXG5pbXBvcnQgeyBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0Q29tcG9uZW50LFxyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIHByZXBhcmVDaGFuZ2VPYmplY3QsXHJcbiAgZ2V0T25seVZhbHVlcyxcclxuICBzZXRTdGF0ZSxcclxufSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7IHJlbmRlckNoYW5nZXMgfSBmcm9tICcuL1ZpZXcnO1xyXG5cclxuaW1wb3J0IHsgVkFMVUVfVFlQRVMgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5cclxuaW1wb3J0IEJpbmRpbmdOb3RFeGlzdHNFcnJvciBmcm9tICcuL2Vycm9ycy9CaW5kaW5nTm90RXhpc3RzRXJyb3InO1xyXG5cclxuZXhwb3J0IHtcclxuICBzZXRWYWx1ZXMsXHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBtb2RpZnlMaXN0LFxyXG4gIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgYXBwbHlDaGFuZ2VzLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG59O1xyXG5cclxuY29uc3QgQ0hBTkdFUyA9IHsgY2hhbmdlczoge30sIGNvbGxlY3Rpbmc6IGZhbHNlIH07XHJcbmNvbnN0IExJRkVfQ1lDTEVfSEFORExFUlMgPSB7IGxpc3Q6IFtdIH07XHJcblxyXG5mdW5jdGlvbiBzdGFydFRyYW5zYWN0aW9uICgpIHtcclxuICBhcHBseUNoYW5nZXMoKTtcclxuICBDSEFOR0VTLmNvbGxlY3RpbmcgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUNoYW5nZXMgKCkge1xyXG4gIGNvbnN0IGNoYW5nZXMgPSBDSEFOR0VTLmNoYW5nZXM7XHJcbiAgQ0hBTkdFUy5jaGFuZ2VzID0ge307XHJcbiAgcmVuZGVyQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICBydW5MaWZlQ3ljbGVIb29rcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5MaWZlQ3ljbGVIb29rcyAoKSB7XHJcbiAgY29uc3QgbGlmZUN5Y2xlSGFuZGxlcnMgPSBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3Q7XHJcbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0ID0gW107XHJcbiAgbGlmZUN5Y2xlSGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4gaCgpKTtcclxuXHJcbiAgaWYgKCFpc0VtcHR5KENIQU5HRVMuY2hhbmdlcykpIHtcclxuICAgIGFwcGx5Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgQ0hBTkdFUy5jb2xsZWN0aW5nID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRUb1JlbmRlclF1ZXVlIChwYXRoLCBjaGFuZ2UpIHtcclxuICBzZXQoQ0hBTkdFUy5jaGFuZ2VzLCBwYXRoLCBjaGFuZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbGxlY3RpbmdDaGFuZ2VzICgpIHtcclxuICByZXR1cm4gQ0hBTkdFUy5jb2xsZWN0aW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRMaWZlQ3ljbGVIb29rIChob29rVHlwZSwgYmluZGluZywgdmFsdWVzLCBhY2Nlc3NvciwgaWR4KSB7XHJcbiAgY29uc3QgaG9vayA9IGJpbmRpbmcuaG9va3NbaG9va1R5cGVdO1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0LnB1c2goKCkgPT4ge1xyXG4gICAgY29uc3QgZWwgPSB2YWx1ZXNbYmluZGluZy5uYW1lIHx8IExJQl9BVFRSLlNFTEZdLmVsO1xyXG4gICAgY29uc3QgdmFscyA9ICFiaW5kaW5nLm5hbWUgPyBnZXRPbmx5VmFsdWVzKHZhbHVlcykgOiB2YWx1ZXNbYmluZGluZy5uYW1lXS52YWx1ZTtcclxuICAgIGhvb2soZWwsIHZhbHMsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU5vZGVzIChzdGF0ZVBhdGgpIHtcclxuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQoc3RhdGVQYXRoKTtcclxuICBjb25zdCB2YWx1ZXNOb2RlID0gY3JlYXRlU3RhdGVOb2RlKGNvbXBvbmVudCk7XHJcbiAgc2V0U3RhdGUoc3RhdGVQYXRoLCB2YWx1ZXNOb2RlKTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdtb3VudCcsIGNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgdmFsdWVzTm9kZSwgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG5cclxuICByZXR1cm4gdmFsdWVzTm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVOb2RlIChjb21wb25lbnQpIHtcclxuICBjb25zdCB2YWx1ZXNOb2RlcyA9IG1hcChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWVOb2RlID0gYmluZGluZy5pc0xpc3QgPyBbXSA6IHt9O1xyXG5cclxuICAgIHJldHVybiBWQUxVRV9UWVBFUy5yZWR1Y2UoKGEsIGtleSkgPT4ge1xyXG4gICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICBjYXNlICdodG1sJzpcclxuICAgICAgICAgIHZhbHVlID0gYmluZGluZy5pbml0VmFsdWUgfHwgJydcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYVtrZXldID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sIHZhbHVlTm9kZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHZhbHVlc05vZGVzLCB7IFtMSUJfQVRUUi5TRUxGXTogdG9PYmplY3QoVkFMVUVfVFlQRVMsIHt9KSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWVzIChjaGFuZ2VWYWx1ZXMsIHN0YXRlUGF0aCwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjYWxsZWREZXBlbmRlbmNlcyA9IGNhbGxlZERlcGVuZGVuY2VzIHx8IFtdO1xyXG4gIGNvbnN0IGFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuXHJcbiAgaWYgKCFhY2Nlc3Nvci52YWx1ZXMpIHtcclxuICAgIGFjY2Vzc29yLnZhbHVlcyA9IGNyZWF0ZVN0YXRlTm9kZXMoc3RhdGVQYXRoKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gK3N0YXRlUGF0aC5zbGljZSgtMilbMF07XHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGgsIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyBhZGQ6IHsgc3RhcnQsIGVuZDogc3RhcnQgKyAxIH0gfSB9KVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VWYWx1ZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpKTtcclxuXHJcbiAgYWRkTGlmZUN5Y2xlSG9vaygndXBkYXRlJywgYWNjZXNzb3IuY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCBhY2Nlc3Nvci52YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuXHJcbiAgaWYgKGlzQ29sbGVjdGluZ0NoYW5nZXMoKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlIChiaW5kaW5nTmFtZSwgY2hhbmdlLCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgbGV0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIGJpbmRpbmdOYW1lID0gY29tcG9uZW50Lm91dGVyTmFtZXNbYmluZGluZ05hbWVdO1xyXG4gICAgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgfVxyXG5cclxuICBpZiAoIWJpbmRpbmcpIHtcclxuICAgIHRocm93IG5ldyBCaW5kaW5nTm90RXhpc3RzRXJyb3IoYmluZGluZ05hbWUsIGNvbXBvbmVudC5uYW1lLCBzdGF0ZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNoYW5nZS50eXBlID09PSAndmFsdWUnKSB7XHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yTGlzdChiaW5kaW5nLCBjaGFuZ2UsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3QoY2hhbmdlLnZhbHVlKSAmJiBiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHJldHVybiBzZXRWYWx1ZUZvckNvbXBvbmVudChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGVxdWFsID0gYXJlRXF1YWwodmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0sIGNoYW5nZS52YWx1ZSk7XHJcblxyXG4gIGlmICghZXF1YWwgfHwgIWlzRW1wdHkoZXF1YWwpIHx8IGNoYW5nZS5mb3JjZSkge1xyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2UudHlwZV0gPSBjaGFuZ2UudmFsdWU7XHJcblxyXG4gICAgaWYgKGNoYW5nZS50eXBlICE9PSAndmFsdWUnKSB7XHJcbiAgICAgIHJldHVybiBzZW5kVG9SZW5kZXJRdWV1ZShzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKSwgeyBbY2hhbmdlLnR5cGVdOiBmYWxzZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBzdGF0ZVBhdGguc2xpY2UoLTIpWzBdKTtcclxuICAgIGNhbGxlZERlcGVuZGVuY2VzLnB1c2goYmluZGluZ05hbWUgKyAnOicgKyBjaGFuZ2UudHlwZSk7XHJcblxyXG4gICAgaWYgKCFiaW5kaW5nLmh0bWwpIHtcclxuICAgICAgc2V0VmFsdWUoYmluZGluZ05hbWUsIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ2h0bWwnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGluayA9IGNvbXBvbmVudC5saW5rc1tiaW5kaW5nTmFtZV07XHJcbiAgICBpZiAobGluaykge1xyXG4gICAgICBzZXRWYWx1ZShsaW5rLmxpbmssIHsgdmFsdWU6IGNoYW5nZS52YWx1ZSwgdHlwZTogJ3ZhbHVlJywgZm9yY2U6IGNoYW5nZS5mb3JjZSB9LCBhY2Nlc3Nvci5kb3duKGxpbmsuY29tcG9uZW50KSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goYmluZGluZy5kZXBlbmRhbnRzLCAoZGVwZW5kYW50LCBkZXBlbmRhbnRLZXkpID0+IHtcclxuICAgICAgaWYgKGhhcyhjYWxsZWREZXBlbmRlbmNlcywgZGVwZW5kYW50S2V5KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb21wb25lbnQuc3RhdGVbZGVwZW5kYW50Lm5hbWVdLmV2YWx1YXRlW2RlcGVuZGFudC50eXBlXSh2YWx1ZXMsIGFjY2Vzc29yKTtcclxuICAgICAgc2V0VmFsdWUoZGVwZW5kYW50Lm5hbWUsIHsgdmFsdWU6IG5ld1ZhbHVlLCB0eXBlOiBkZXBlbmRhbnQudHlwZSB9LCBhY2Nlc3NvciwgY2FsbGVkRGVwZW5kZW5jZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckxpc3QgKGJpbmRpbmcsIGNoYW5nZSwgYXJyLCBhY2Nlc3Nvcikge1xyXG4gIE9iamVjdFxyXG4gICAgLmtleXMoY2hhbmdlLnZhbHVlKVxyXG4gICAgLmZvckVhY2goKGkpID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWVbaV0pLCBhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGksIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSkpKTtcclxuXHJcbiAgY29uc3QgaW5kZXhFcXVhbGl0eSA9IGFyZUVxdWFsKGFyciwgY2hhbmdlLnZhbHVlKTtcclxuICBmb3JFYWNoKGluZGV4RXF1YWxpdHksIChjaGFuZ2VPYmosIGlkeCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZU9iai5yZW1vdmUpIHtcclxuICAgICAgY2hhbmdlT2JqLnJlbW92ZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaWR4LCBiaW5kaW5nLCBhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFRvUmVuZGVyUXVldWUoYWNjZXNzb3IucGF0aC5jb25jYXQoYmluZGluZy5uYW1lLCBpZHgsIGJpbmRpbmcubGlzdEl0ZW0ubmFtZSksIHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogY2hhbmdlT2JqIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZUZvckNvbXBvbmVudCAoYmluZGluZywgY2hhbmdlLCBjb21wb25lbnQsIHN0YXRlUGF0aCkge1xyXG4gIHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2UudmFsdWUpLCBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmcubmFtZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChhY3Rpb24sIGFyZ3MsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgYXJyID0gYWNjZXNzb3IudmFsdWVzO1xyXG4gIGNvbnN0IGxpc3RQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IHN0YXJ0ID0gYXJncy5zdGFydDtcclxuICBsZXQgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICBjYXNlICdhZGQnOlxyXG4gICAgICBjaGFuZ2VPYmogPSBhZGRUb0xpc3QoYXJyLCBzdGFydCwgYXJncy5lbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJ3JlbW92ZSc6XHJcbiAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgKGFyZ3MubnVtIHx8IDEpO1xyXG4gICAgICBjaGFuZ2VPYmogPSByZW1vdmVGcm9tTGlzdChhcnIsIHN0YXJ0LCBlbmQsIGFjY2Vzc29yLmNvbXBvbmVudCwgYWNjZXNzb3IpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvckVhY2goY2hhbmdlT2JqLCAoY2hhbmdlLCBpZHgpID0+IHNlbmRUb1JlbmRlclF1ZXVlKGxpc3RQYXRoLmNvbmNhdChpZHgsIGl0ZW1OYW1lLCBMSUJfQVRUUi5GVUxMX0NIQU5HRSksIGNoYW5nZU9ialtpZHhdW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkpO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9MaXN0IChhcnIsIHN0YXJ0LCBlbHMsIGxpc3RQYXRoLCBpdGVtTmFtZSkge1xyXG4gIGVscyA9IGlzQXJyYXkoZWxzKSA/IGVscyA6IFtlbHNdO1xyXG5cclxuICBlbHMuZm9yRWFjaCgoZWwsIGkpID0+IHtcclxuICAgIGFyci5zcGxpY2UoaSArIHN0YXJ0LCAwLCBudWxsKTtcclxuICAgIHNldFZhbHVlcyhwcmVwYXJlQ2hhbmdlT2JqZWN0KGVsKSwgbGlzdFBhdGguY29uY2F0KGkgKyBzdGFydCwgaXRlbU5hbWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHsgW3N0YXJ0XTogeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIGVscy5sZW5ndGggfSB9IH0gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QgKGFyciwgc3RhcnQsIGVuZCwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKSB7XHJcbiAgY29uc3QgY2hhbmdlT2JqID0ge307XHJcblxyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICBjb25zdCByZW1vdmVkRE9NTm9kZSA9IHJlbW92ZUxpc3RJdGVtKGFyciwgaSwgbGlzdEJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIGNoYW5nZU9ialtpXSA9IHsgW0xJQl9BVFRSLkZVTExfQ0hBTkdFXTogeyByZW1vdmU6IHJlbW92ZWRET01Ob2RlIH0gfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoYW5nZU9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTGlzdEl0ZW0gKGFyciwgaWR4LCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCByZW1vdmVkTm9kZSA9IGFyci5zcGxpY2UoaWR4LCAxKVswXVtsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lXTtcclxuICBhZGRMaWZlQ3ljbGVIb29rKCdyZW1vdmUnLCBsaXN0QmluZGluZy5saXN0SXRlbS5zdGF0ZVtMSUJfQVRUUi5TRUxGXSwgcmVtb3ZlZE5vZGUsIGFjY2Vzc29yLCBpZHgpO1xyXG4gIHJldHVybiByZW1vdmVkTm9kZVtMSUJfQVRUUi5TRUxGXS5lbDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgeyB0b0Rhc2hDYXNlLCBoYXMgfSBmcm9tICcuL2hlbHBlcnMvY29tbW9uJztcclxuaW1wb3J0IHsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNwbGl0UGllY2UgfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuXHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUFjY2Vzc29yLFxyXG4gIGFkZE1hcmt1cCxcclxuICBnZXRNYXJrdXAsXHJcbiAgcmVtb3ZlTWFya3VwLFxyXG4gIHJlbW92ZUNvbXBvbmVudCxcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICByZXdyaXRlVG9Ob2RlLFxyXG4gIGVtcHR5Tm9kZSxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQW5kQXBwZW5kU3R5bGVzLFxyXG4gIHJlbmRlckNoYW5nZXNcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlciA9IHtcclxuICBodG1sOiBhcHBseU1hcmt1cCxcclxuICBjbGFzczogYXBwbHlDbGFzc2VzLFxyXG4gIHN0eWxlOiBhcHBseVN0eWxlcyxcclxuICBhdHRyczogYXBwbHlBdHRyaWJ1dGVzLFxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaGFuZ2VzIChjaGFuZ2VzKSB7XHJcbiAgZm9yRWFjaChjaGFuZ2VzLCAoY29tcG9uZW50Q2hhbmdlcywgZWxlbWVudElkKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IE9iamVjdC5rZXlzKGNvbXBvbmVudENoYW5nZXMpWzBdXHJcbiAgICBjb25zdCBjb21wb25lbnRBY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKFtlbGVtZW50SWQsIGNvbXBvbmVudElkXSk7XHJcbiAgICBhcHBseU1hcmt1cChjb21wb25lbnRBY2Nlc3Nvci5jb21wb25lbnQsIGNvbXBvbmVudEFjY2Vzc29yLnZhbHVlcywgW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdLCBjb21wb25lbnRDaGFuZ2VzW2NvbXBvbmVudElkXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5TWFya3VwIChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoIWNvbXBvbmVudC5tYXJrdXApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjb21wb25lbnQuaXNMaXN0KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyTGlzdChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWUgPSBpc1VuZGVmaW5lZCh2YWx1ZSkgPyAnJyA6IHZhbHVlO1xyXG5cclxuICBpZiAoY29tcG9uZW50Lm1hcmt1cC50YWdOYW1lID09PSAnSU5QVVQnKSB7XHJcbiAgICBjb21wb25lbnQubWFya3VwLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZXdyaXRlVG9Ob2RlKGNvbXBvbmVudC5tYXJrdXAsIHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUNvbXBvbmVudChjb21wb25lbnQsIHZhbHVlLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRyYXdDb21wb25lbnQodmFsdWUsIHN0YXRlUGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdDb21wb25lbnQgKHZhbHVlcywgc3RhdGVQYXRoKSB7XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGFjY2Vzc29yLmNvbXBvbmVudDtcclxuXHJcbiAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpdGVtTWFya3VwID0gY29tcG9uZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuICB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWwgPSBpdGVtTWFya3VwO1xyXG4gIGl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1NYXJrdXApO1xyXG5cclxuICBpdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgKGNvbXBvbmVudC5pc0xpc3RJdGVtKSA/IExJQl9BVFRSLklURU0gOiBMSUJfQVRUUi5DT01QT05FTlQpO1xyXG5cclxuICBmb3JFYWNoKHJlbmRlciwgKHJlbmRlckZ1bmMsIHJlbmRlclR5cGUpID0+IHtcclxuICAgIGlmIChjb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pIHtcclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogaXRlbU1hcmt1cCB9LCB2YWx1ZXNbTElCX0FUVFIuU0VMRl1bcmVuZGVyVHlwZV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoIWJpbmRpbmcubWFya3VwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGl0ZW1XcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJy4nICsgTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcbiAgICBiaW5kaW5nTm9kZS5jbGFzc0xpc3QucmVtb3ZlKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkU3RhdGVQYXRoID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGNvbnN0IGNoaWxkTWFya3VwID0gZHJhd0NvbXBvbmVudCh2YWx1ZXNbYmluZGluZ05hbWVdLCBjaGlsZFN0YXRlUGF0aCk7XHJcbiAgICAgIHJlcGxhY2VOb2RlcyhiaW5kaW5nTm9kZSwgY2hpbGRNYXJrdXApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVzW2JpbmRpbmdOYW1lXS5lbCA9IGJpbmRpbmdOb2RlO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZW5kZXJMaXN0KGJpbmRpbmcsIHZhbHVlc1tiaW5kaW5nTmFtZV0sIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgICBpZiAocmVuZGVyVHlwZSA9PT0gJ2h0bWwnICYmIGJpbmRpbmcuaHRtbCA9PT0gbnVsbCB8fCBiaW5kaW5nLm1hcmt1cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVyRnVuYyh7IG1hcmt1cDogYmluZGluZ05vZGUgfSwgdmFsdWVzW2JpbmRpbmdOYW1lXVtyZW5kZXJUeXBlXSwgc3RhdGVQYXRoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gaXRlbVdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbXBvbmVudCAoY29tcG9uZW50LCB2YWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGl0ZW1BY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50TWFya3VwID0gdmFsdWVzW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG5cclxuICBmb3JFYWNoKGNoYW5nZXMsIChjaGFuZ2UsIGJpbmRpbmdOYW1lKSA9PiB7XHJcblxyXG4gICAgaWYgKGJpbmRpbmdOYW1lID09PSBMSUJfQVRUUi5TRUxGKSB7XHJcblxyXG4gICAgICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZSkge1xyXG4gICAgICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogY29tcG9uZW50TWFya3VwIH0sIHZhbHVlc1tMSUJfQVRUUi5TRUxGXVtjaGFuZ2VUeXBlXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG4gICAgY29uc3Qgc3RhdGVQYXRoVG9CaW5kaW5nID0gc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQgfHwgYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYXBwbHlNYXJrdXAoYmluZGluZywgdmFsdWVzW2JpbmRpbmdOYW1lXSwgc3RhdGVQYXRoVG9CaW5kaW5nLCBjaGFuZ2VzW2JpbmRpbmdOYW1lXSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbCA9IHZhbHVlc1tiaW5kaW5nTmFtZV0uZWxcclxuXHJcbiAgICBmb3IgKGxldCBjaGFuZ2VUeXBlIGluIGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlc1tiaW5kaW5nTmFtZV1bY2hhbmdlVHlwZV07XHJcbiAgICAgIHJlbmRlcltjaGFuZ2VUeXBlXSh7IG1hcmt1cDogZWwgfSwgbmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMaXN0IChsaXN0Q29tcG9uZW50LCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgaWYgKGNoYW5nZXMpIHtcclxuICAgIHJldHVybiB1cGRhdGVMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gYnVpbGRMaXN0KGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgpO1xyXG5cclxuICBjb25zdCBsaXN0Tm9kZSA9IGl0ZW1zVmFsdWVzLmVsO1xyXG4gIGNvbnN0IHBhcmVudE5vZGUgPSBsaXN0Tm9kZS5wYXJlbnROb2RlO1xyXG4gIGNvbnN0IG5leHROb2RlID0gbGlzdE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gIHJlbW92ZU5vZGUobGlzdE5vZGUpO1xyXG5cclxuICBjb25zdCBpc0NvbXBvbmVudCA9IGxpc3ROb2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSk7XHJcbiAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5MSVNUKTtcclxuICBpZiAoaXNDb21wb25lbnQpIHtcclxuICAgIGxpc3ROb2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5DT01QT05FTlRfVFlQRSwgTElCX0FUVFIuQ09NUE9ORU5UX0xJU1QpO1xyXG4gIH1cclxuXHJcbiAgZW1wdHlOb2RlKGxpc3ROb2RlKTtcclxuICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xyXG5cclxuICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShsaXN0Tm9kZSwgbmV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZExpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIHJhbmdlKSB7XHJcbiAgY29uc3Qgc3RhcnQgPSByYW5nZSA/IHJhbmdlLnN0YXJ0IDogMDtcclxuICBjb25zdCBlbmQgPSByYW5nZSA/IHJhbmdlLmVuZCA6IChpdGVtc1ZhbHVlcy5sZW5ndGggKyAxKTtcclxuXHJcbiAgY29uc3QgbGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGl0ZW1zVmFsdWVzXHJcbiAgICAuc2xpY2Uoc3RhcnQsIGVuZClcclxuICAgIC5mb3JFYWNoKChpdGVtVmFsdWUsIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdJdGVtSW5kZXggPSArc3RhcnQgKyBpdGVtSW5kZXg7XHJcbiAgICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoW25ld0l0ZW1JbmRleCwgbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSk7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtTWFya3VwID0gZHJhd0NvbXBvbmVudChpdGVtVmFsdWVbbGlzdENvbXBvbmVudC5saXN0SXRlbS5uYW1lXSwgc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtTWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYLCBuZXdJdGVtSW5kZXgpO1xyXG5cclxuICAgICAgbGlzdEZyYWdtZW50LmFwcGVuZENoaWxkKGxpc3RJdGVtTWFya3VwKTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gbGlzdEZyYWdtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaXN0IChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgaXRlbU5hbWUgPSBsaXN0QmluZGluZy5saXN0SXRlbS5uYW1lO1xyXG4gIGNvbnN0IGl0ZW1zQ2hhbmdlcyA9IHNwbGl0UGllY2UoY2hhbmdlcywgKHYsIGspID0+IGlzTnVtYmVyKCtrKSk7XHJcbiAgbGV0IHJlbW92ZWRDb3VudCA9IDA7XHJcbiAgbGV0IGVuZCA9IDA7XHJcblxyXG4gIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlcykge1xyXG4gICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBsaXN0Tm9kZSB9LCBpdGVtc1ZhbHVlc1tjaGFuZ2VUeXBlXSk7XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGl0ZW1zQ2hhbmdlcywgKGNoYW5nZSwgaSkgPT4ge1xyXG4gICAgY2hhbmdlID0gY2hhbmdlW2l0ZW1OYW1lXTtcclxuICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IHN0YXRlUGF0aC5jb25jYXQoaSwgaXRlbU5hbWUpO1xyXG4gICAgY29uc3QgaXRlbUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoVG9JdGVtKTtcclxuXHJcbiAgICBpZiAoIWNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0pIHtcclxuICAgICAgdXBkYXRlQ29tcG9uZW50KGl0ZW1BY2Nlc3Nvci5jb21wb25lbnQsIGl0ZW1zVmFsdWVzW2ldW2l0ZW1OYW1lXSwgc3RhdGVQYXRoVG9JdGVtLCBjaGFuZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkICYmIGkgPj0gZW5kKSB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQuc3RhcnQ7XHJcbiAgICAgIGVuZCA9IGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0uYWRkLmVuZDtcclxuXHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIHN0YXJ0LCBlbmQgLSBzdGFydCk7XHJcbiAgICAgIGNvbnN0IGxpc3RGcmFnbWVudCA9IGJ1aWxkTGlzdChsaXN0QmluZGluZywgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgeyBzdGFydCwgZW5kIH0pO1xyXG5cclxuICAgICAgaWYgKGVuZCA9PT0gaXRlbXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbGlzdE5vZGUuYXBwZW5kQ2hpbGQobGlzdEZyYWdtZW50KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3ROb2RlLmluc2VydEJlZm9yZShsaXN0RnJhZ21lbnQsIGxpc3ROb2RlLmNoaWxkcmVuW3N0YXJ0XSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5yZW1vdmUpIHtcclxuICAgICAgcmVtb3ZlTm9kZShjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLnJlbW92ZSk7XHJcbiAgICAgIGZpeEluZGV4ZXMobGlzdE5vZGUsIGkgLSByZW1vdmVkQ291bnQrKywgLTEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhJbmRleGVzIChsaXN0Tm9kZSwgc3RhcnQsIGRpZmYpIHtcclxuICBjb25zdCBpdGVtc05vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdE5vZGUuY2hpbGRyZW4sIHN0YXJ0KTtcclxuXHJcbiAgaXRlbXNOb2Rlcy5mb3JFYWNoKChpdGVtTm9kZSkgPT4ge1xyXG4gICAgY29uc3QgcHJldklkeCA9IGl0ZW1Ob2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYKTtcclxuICAgIGNvbnN0IG5ld0lkeCA9ICtwcmV2SWR4ICsgZGlmZjtcclxuXHJcbiAgICBpdGVtTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCwgbmV3SWR4KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlBdHRyaWJ1dGVzIChiaW5kaW5nLCBhdHRyaWJ1dGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbihiaW5kaW5nLm1hcmt1cCwgYXR0cmlidXRlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2xhc3NlcyAoYmluZGluZywgY2xhc3Nlcykge1xyXG4gIGZvciAobGV0IGNsYXNzTmFtZSBpbiBjbGFzc2VzKSB7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgIGlmIChjbGFzc2VzW2NsYXNzTmFtZV0pIHtcclxuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmluZGluZy5tYXJrdXAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVN0eWxlcyAoYmluZGluZywgc3R5bGVzKSB7XHJcbiAgT2JqZWN0LmFzc2lnbiggYmluZGluZy5tYXJrdXAuc3R5bGUsIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyAoc3R5bGVPYmopIHtcclxuICBsZXQgc3R5bGVTdHIgPSAnJztcclxuICBmb3IgKGxldCBzZWxlY3RvciBpbiBzdHlsZU9iaikge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVPYmpbc2VsZWN0b3JdO1xyXG4gICAgc3R5bGVTdHIgKz0gc2VsZWN0b3IgKyAneyc7XHJcbiAgICBub3JtYWxpemVTdHlsZXMoc3R5bGVzKVxyXG4gICAgZm9yIChsZXQgYXR0ciBpbiBzdHlsZXMpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZXNbYXR0cl07XHJcbiAgICAgIHN0eWxlU3RyICs9IHRvRGFzaENhc2UoYXR0cikgKyAnOicgKyB2YWx1ZSArICc7JztcclxuICAgIH1cclxuICAgIHN0eWxlU3RyICs9ICd9XFxuJztcclxuICB9XHJcbiAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGVFbC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVTdHIpICk7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVzIChzdHlsZXMpIHtcclxuICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgaWYgKGlzTnVtYmVyKHN0eWxlc1thdHRyXSkpIHtcclxuICAgICAgc3R5bGVzW2F0dHJdID0gc3R5bGVzW2F0dHJdICsgJ3B4JztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHN0eWxlcztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kaW5nTm90RXhpc3RzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKGJpbmRpbmdOYW1lLCBjb21wb25lbnROYW1lLCBwYXRoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gYWNjZXNzICdcIiArIGJpbmRpbmdOYW1lICsgXCInIGJpbmRpbmcgb24gJ1wiICsgY29tcG9uZW50TmFtZSArIFwiJyBjb21wb25lbnQgb24gcGF0aCAoXCIgKyBwYXRoLmpvaW4oJyAtPiAnKSArIFwiKSBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3QuXCJcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZXRyaWV2ZSBjb21wb25lbnQgYnkgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRoYXQgZG9lc24ndCBleGlzdC5cIlxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRSZWRlZmluZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gcmVkZWZpbmUgZXhpc3RpbmcgY29tcG9uZW50OiAnXCIgKyBuYW1lICsgXCInXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJUcnlpbmcgdG8gYXNzaWduIGEgbmFtZSAnXCIgKyBuYW1lICsgXCInIHRvIGEgc3RhdGUgdGhhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgY2hhaW4uXCI7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlQWNjZXNzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKHBhdGgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlVuYWJsZSB0byBhY2Nlc3Mgc3RhdGUgb24gYSBwYXRoICdcIiArIHBhdGguam9pbignIC0+ICcpICsgIFwiJyBiZWNhdXNlIGl0IGRvZXNuJ3QgZXhpc3RcIlxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVMb29rdXBFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobGV2ZWwpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvO1xyXG4gICAgaWYgKGlzTnVtYmVyKGxldmVsKSkge1xyXG4gICAgICBhZGRpdGlvbmFsSW5mbyA9IGxldmVsICsgXCIgZXhjZWVkcyBudW1iZXIgb2Ygc3RhdGVzIGluIHRoZSBjaGFpbi5cIiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZGl0aW9uYWxJbmZvID0gXCInXCIgKyBsZXZlbCArIFwiJyB1c2VyIHN0YXRlbmFtZSBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tZXNzYWdlID0gXCJVbmFibGUgdG8gcmVhY2ggdG8gdGhlICdcIiArIGxldmVsICsgXCInIHN0YXRlIGxldmVsLiBcIiArIGFkZGl0aW9uYWxJbmZvO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBMSUJfTkFNRSA9ICd4JztcclxuY29uc3QgQVRUUl9QUkVGSVggPSAnZGF0YS0nO1xyXG5jb25zdCBQUkVGSVggPSBMSUJfTkFNRSArICctJztcclxuY29uc3QgVEVNUExBVEVfQklORElORyA9IFBSRUZJWCArICdiJztcclxuY29uc3QgVEVNUExBVEVfTElTVF9CSU5ESU5HID0gUFJFRklYICsgJ2xiJztcclxuY29uc3QgQklORElOR19JRCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2lkJztcclxuY29uc3QgU1RBVEVfUEFUSCA9IFBSRUZJWCArICdzcGF0aCc7XHJcbmNvbnN0IFRFTVBMQVRFX1BMQUNFTUVOVCA9IFBSRUZJWCArICdlbCc7XHJcbmNvbnN0IFNUQVRFX05BTUUgPSBQUkVGSVggKyAnc3RhdGUtbmFtZSc7XHJcbmNvbnN0IFNDT1BFX1BSRUZJWCA9ICdzJztcclxuY29uc3QgSVRFTV9JTkRFWCA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ2R4JztcclxuY29uc3QgQ09NUE9ORU5UX1RZUEUgPSBBVFRSX1BSRUZJWCArIFBSRUZJWCArICd0cCc7XHJcbmNvbnN0IElURU1fU1VGRklYID0gJ2knO1xyXG5jb25zdCBTVEFURV9ERUxJTUlURVIgPSAnLSc7XHJcbmNvbnN0IFNFTEYgPSAnJztcclxuY29uc3QgRlVMTF9DSEFOR0UgPSAnIF9mdWxsX2NoYW5nZV8gJztcclxuXHJcbmNvbnN0IEJBU0UgPSAnMSc7XHJcbmNvbnN0IENPTVBPTkVOVCA9ICcyJztcclxuY29uc3QgTElTVCA9ICczJztcclxuY29uc3QgSVRFTSA9ICdfaXRlbV8nO1xyXG5jb25zdCBDT01QT05FTlRfTElTVCA9ICc1JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBQUkVGSVgsXHJcbiAgVEVNUExBVEVfQklORElORyxcclxuICBURU1QTEFURV9MSVNUX0JJTkRJTkcsXHJcbiAgQklORElOR19JRCxcclxuICBTVEFURV9QQVRILFxyXG4gIFRFTVBMQVRFX1BMQUNFTUVOVCxcclxuICBTVEFURV9OQU1FLFxyXG4gIFNDT1BFX1BSRUZJWCxcclxuICBJVEVNX0lOREVYLFxyXG4gIENPTVBPTkVOVF9UWVBFLFxyXG4gIElURU1fU1VGRklYLFxyXG4gIFNUQVRFX0RFTElNSVRFUixcclxuICBCQVNFLFxyXG4gIENPTVBPTkVOVCxcclxuICBMSVNULFxyXG4gIElURU0sXHJcbiAgU0VMRixcclxuICBGVUxMX0NIQU5HRSxcclxuICBDT01QT05FTlRfTElTVFxyXG59O1xyXG4iLCJjb25zdCBTVFJJUF9DT01NRU5UUyA9IC8oXFwvXFwvLiokKXwoXFwvXFwqW1xcc1xcU10qP1xcKlxcLyl8KFxccyo9W14sXFwpXSooKCcoPzpcXFxcJ3xbXidcXHJcXG5dKSonKXwoXCIoPzpcXFxcXCJ8W15cIlxcclxcbl0pKlwiKSl8KFxccyo9W14sXFwpXSopKS9tZztcclxuY29uc3QgQVJHVU1FTlRfTkFNRVMgPSAvKFteXFxzLF0rKS9nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNUUklQX0NPTU1FTlRTLFxyXG4gIEFSR1VNRU5UX05BTUVTLFxyXG59O1xyXG4iLCJleHBvcnQge1xyXG4gIGlzRnVuY3Rpb24sXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxuICBpc09iamVjdEluQnJhY2tldHMsXHJcbiAgaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzLFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc051bWJlcixcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNFbXB0eSxcclxuICBpc0xpbmssXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5CcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0KG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxICYmIGlzT2JqZWN0SW5CcmFja2V0cyhvYmpbMF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSFRNTFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgJiYgb2JqLmluZGV4T2YoJzwnKSA9PT0gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmIG9iaiA9PT0gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQgKG9iaikge1xyXG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iai50YWdOYW1lICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQgKG9iaikge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T2JqZWN0VHlwZSAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0xpbmsgKG9iaikge1xyXG4gIGNvbnN0IHNsYXNoSWR4ID0gb2JqLmluZGV4T2YoJy8nKTtcclxuICByZXR1cm4gWzAsIDEsIDJdLnNvbWUoKGlkeCkgPT4gaWR4ID09PSBzbGFzaElkeCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkgKG9iaikge1xyXG4gIGlmICghb2JqKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9iaikgfHwgaXNTdHJpbmcob2JqKSkge1xyXG4gICAgcmV0dXJuICFvYmoubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmopLmxlbmd0aDtcclxufVxyXG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL29iamVjdCc7XHJcblxyXG5leHBvcnQge1xyXG4gIGhhcyxcclxuICBnZXRGYWxzZVBhdGhzLFxyXG4gIHRvRGFzaENhc2UsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG4gIGdldFJlYWxOYW1lLFxyXG59O1xyXG5cclxuY29uc3QgTkFNRVMgPSB7XHJcbiAgcmVhbDoge30sXHJcbiAgc2hvcnQ6IFtdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydE5hbWUgKG5hbWUpIHtcclxuICBpZiAoTkFNRVMucmVhbFtuYW1lXSkge1xyXG4gICAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG9ydE5hbWUgPSBOQU1FUy5zaG9ydC5wdXNoKG5hbWUpO1xyXG4gIHJldHVybiBOQU1FUy5yZWFsW25hbWVdID0gc2hvcnROYW1lIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhbE5hbWUgKG51bSkge1xyXG4gIHJldHVybiBOQU1FUy5zaG9ydFtudW1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXMgKG9iaiwgZWwpIHtcclxuICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XHJcbiAgICByZXR1cm4gaGFzKGtleXMsIGVsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvYmouaW5kZXhPZihlbCkgPj0gMDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aHMgKG9iaikge1xyXG4gIGNvbnN0IG9ubHlGYWxzZVBhdGhzID0ge307XHJcbiAgZ2V0RmFsc2VQYXRoKG9iaiwgb25seUZhbHNlUGF0aHMsIFtdKTtcclxuICByZXR1cm4gb25seUZhbHNlUGF0aHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhbHNlUGF0aCAob2JqLCBvbmx5RmFsc2VQYXRocywgcGF0aCkge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGlmIChpc09iamVjdChvYmpba2V5XSkpIHtcclxuICAgICAgZ2V0RmFsc2VQYXRoKG9ialtrZXldLCBvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvYmpba2V5XSAhPT0gdHJ1ZSkge1xyXG4gICAgICBzZXQob25seUZhbHNlUGF0aHMsIHBhdGguY29uY2F0KGtleSksIG9ialtrZXldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRGFzaENhc2UgKHN0cikge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFtBLVpdKS9nLCAobWF0Y2gpID0+ICctJyArIG1hdGNoWzBdLnRvTG93ZXJDYXNlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NhbWVsQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC0oLikvZywgKG1hdGNoKSA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzVW5kZWZpbmVkLFxyXG4gIGlzQXJyYXksXHJcbiAgaXNET01FbGVtZW50LFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29weTtcclxuXHJcbmZ1bmN0aW9uIGNvcHkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBpZiAoIWRlc3RpbmF0aW9uKSB7XHJcbiAgICByZXR1cm4gY29weSAoe30sIHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XHJcblxyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGlmICghZGVzdGluYXRpb25ba2V5XSkge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNET01FbGVtZW50KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0aW5hdGlvbltrZXldID0gc291cmNlW2tleV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjb3B5QXJyYXkgKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtpXSkpIHtcclxuICAgICAgZGVzdGluYXRpb25baV0gPSBkZXN0aW5hdGlvbltpXSB8fCB7fTtcclxuICAgICAgY29weShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IFtdO1xyXG4gICAgICBjb3B5QXJyYXkoZGVzdGluYXRpb25baV0sIHNvdXJjZVtpXSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3RpbmF0aW9uW2ldID0gc291cmNlW2ldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xyXG59O1xyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNBcnJheSxcclxuICBpc0hUTUxTdHJpbmcsXHJcbiAgaXNET01FbGVtZW50LFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IENvbXBvbmVudE5vdEV4aXN0c0Vycm9yIGZyb20gJy4uL2Vycm9ycy9Db21wb25lbnROb3RFeGlzdHNFcnJvcic7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5leHBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICBjbG9uZUhUTUxNYXJrdXAsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxuICB3YWxrTm9kZXMsXHJcbiAgcmVtb3ZlTm9kZSxcclxuICBpbnNlcnRCZWZvcmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGVzIChvcmlnaW5hbCwgcmVwbGFjZW1lbnQpIHtcclxuICBvcmlnaW5hbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZXBsYWNlbWVudCwgb3JpZ2luYWwpO1xyXG4gIHJldHVybiByZXBsYWNlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0QmVmb3JlTm9kZSAoZWwsIG5leHRFbCkge1xyXG4gIG5leHRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbmV4dEVsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvbmVIVE1MTWFya3VwIChtYXJrdXApIHtcclxuICBjb25zdCBtYXJrdXBTdHIgPSBpc0hUTUxTdHJpbmcobWFya3VwLnRyaW0oKSkgPyBtYXJrdXAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcmt1cCkuaW5uZXJIVE1MO1xyXG4gIHJldHVybiBjb252ZXJ0U3RyaW5nVG9IVE1MKG1hcmt1cFN0cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRTdHJpbmdUb0hUTUwgKG1hcmt1cFN0cmluZykge1xyXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICBjb25zdCBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcobWFya3VwU3RyaW5nLCAndGV4dC9odG1sJyk7XHJcbiAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhbGtOb2RlcyAobm9kZSwgY2IpIHtcclxuICBpZiAoIGNiKG5vZGUpID09PSAtMSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQXJyYXkucHJvdG90eXBlXHJcbiAgICAuc2xpY2VcclxuICAgIC5jYWxsKG5vZGUuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaCgoZWwpID0+IHdhbGtOb2RlcyhlbCwgY2IpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdEhUTUxOb2RlcyAocm9vdCwgaXNXYW50ZWQpIHtcclxuICBjb25zdCBub2RlcyA9IFtdO1xyXG4gIHdhbGtOb2Rlcyhyb290LCAoZWwpID0+IGlzV2FudGVkKGVsKSA/IG5vZGVzLnB1c2goZWwpIDogJycpO1xyXG4gIHJldHVybiBub2RlcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZSAobm9kZSkge1xyXG4gIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGVtcHR5Tm9kZShub2RlKTtcclxuICB3cml0ZVRvTm9kZShub2RlLCB0ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVUb05vZGUgKG5vZGUsIHRleHQpIHtcclxuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gIG5vZGUuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eU5vZGUgKG5vZGUpIHtcclxuICB3aGlsZSAobm9kZS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzVW5kZWZpbmVkLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJlRXF1YWw7XHJcblxyXG5mdW5jdGlvbiBhcmVFcXVhbCAoZmlyc3QsIHNlY29uZCkge1xyXG4gIGlmIChpc1VuZGVmaW5lZChmaXJzdCkgfHwgaXNVbmRlZmluZWQoc2Vjb25kKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBmaXJzdCAhPT0gdHlwZW9mIHNlY29uZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IHsgY2hpbGROb2RlOiB7fSB9O1xyXG5cclxuICBpZiAoaXNBcnJheShzZWNvbmQpKSB7XHJcbiAgICBjaGVja0tleXNFcXVhbGl0eShcclxuICAgICAgZmlyc3QgPyBmaXJzdC5tYXAoZWwgPT4gZWwpIDogW10sXHJcbiAgICAgIHNlY29uZC5tYXAoZWwgPT4gZWwpLFxyXG4gICAgICBwYXJlbnROb2RlXHJcbiAgICApO1xyXG5cclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KGZpcnN0LCBzZWNvbmQsIHBhcmVudE5vZGUpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZpcnN0ID09PSBzZWNvbmQ7XHJcblxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGUuY2hpbGROb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0tleXNFcXVhbGl0eSAoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzZWNvbmQpIHtcclxuXHJcbiAgICBpZiAoaXNBcnJheShmaXJzdCkpIHtcclxuICAgICAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0W2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgYWRkOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBmaXJzdCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoc2Vjb25kW2tleV0pKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IHsgcmVtb3ZlOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0W2tleV0gIT09IHNlY29uZFtrZXldKSB7XHJcbiAgICAgIHBhcmVudE5vZGUuY2hpbGROb2RlW2tleV0gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBwYXJlbnROb2RlO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNPYmplY3QsXHJcbiAgaXNGdW5jdGlvbixcclxufSBmcm9tICcuL2NoZWNrZXJzJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0LFxyXG4gIHNldCxcclxuICByZW1vdmUsXHJcbiAgYWRkQ29uc3RGaWVsZHMsXHJcbiAgZm9yRWFjaCxcclxuICBtYXAsXHJcbiAgbWFwS2V5cyxcclxuICBmaWx0ZXIsXHJcbiAgdG9PYmplY3QsXHJcbiAgZnVsbE1hcCxcclxuICBzcGxpdFBpZWNlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0IChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0IChvYmosIHBhdGgsIHZhbHVlKSB7XHJcbiAgaWYgKCFwYXRoLmxlbmd0aCkge1xyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihvYmosIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmogPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGxldCBkZXN0ID0gb2JqO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgIGlmICghZGVzdFsgcGF0aFtpXSBdKSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dID0ge307XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZXN0ID0gZGVzdFtwYXRoW2ldXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IGRlc3RbIHBhdGhbaV0gXSB8fCB7fTtcclxuICAgIE9iamVjdC5hc3NpZ24oZGVzdFsgcGF0aFtpXSBdLCB2YWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlc3RbIHBhdGhbaV0gXSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlIChvYmosIHBhdGgpIHtcclxuICBsZXQgdmFsdWUgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgdmFsdWUgPSB2YWx1ZVtwYXRoW2ldXTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZSB2YWx1ZVtwYXRoW2ldXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29uc3RGaWVsZHMgKG9iaiwgZmllbGRzKSB7XHJcbiAgZm9yIChsZXQgZmllbGQgaW4gZmllbGRzKSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZCwge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpZWxkc1tmaWVsZF0gfSxcclxuICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7IHRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byByZWRlZmluZSBjb25zdCBmaWVsZCAnXCIgKyBmaWVsZCArIFwiJ1wiKSB9LFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvckVhY2ggKG9iaiwgY2IpIHtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgbmV3T2JqW2tleV0gPSBjYihwcm9wLCBrZXksIG9iaik7XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcEtleXMgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IG5ld0tleSA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialtuZXdLZXldID0gcHJvcDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BsaXRQaWVjZSAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgaWYgKCBjYihwcm9wLCBrZXksIG9iaikgKSB7XHJcbiAgICAgIG5ld09ialtrZXldID0gcHJvcDtcclxuICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdWxsTWFwIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBjb25zdCByZXMgPSBjYihrZXksIHByb3AsIG9iaik7XHJcbiAgICBuZXdPYmpbIHJlc1swXSB8fCByZXMua2V5IHx8IHJlcy5rIF0gPSByZXNbMV0gfHwgcmVzWyd2YWx1ZSddIHx8IHJlc1sndiddO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyLCB2YWwpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fTtcclxuICBhcnIuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgbmV3T2JqW3ZdID0gaXNGdW5jdGlvbih2YWwpID8gdmFsKHYpIDogdmFsO1xyXG4gIH0pO1xyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuaW1wb3J0IHsgYXBwbHkgfSBmcm9tICcuL1Byb2R1Y3Rpb24nO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgZGVmaW5lLFxyXG4gIGFwcGx5LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9