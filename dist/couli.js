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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db3VsaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9EZWZpbml0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9Qcm9kdWN0aW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1N0YXRlQ2hhbmdlLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL1ZpZXcuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvci5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9lcnJvcnMvQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3IuanMiLCJ3ZWJwYWNrOi8vQ291bGkvLi9zcmMvZXJyb3JzL1Njb3BlTmFtZUNvbGxpc2lvbkVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUFjY2Vzc0Vycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2Vycm9ycy9TdGF0ZUxvb2t1cEVycm9yLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2dsb2JhbHMvYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9nbG9iYWxzL3JlZ2V4cC5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2NoZWNrZXJzLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29tbW9uLmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvY29weS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2RvbS5qcyIsIndlYnBhY2s6Ly9Db3VsaS8uL3NyYy9oZWxwZXJzL2VxdWFsaXR5LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL2hlbHBlcnMvb2JqZWN0LmpzIiwid2VicGFjazovL0NvdWxpLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiVkFMVUVfVFlQRVMiLCJSRVNFUlZFRF9IT09LU19OQU1FUyIsIkRFRkFVTFRfSE9PS1MiLCJSRVNFUlZFRF9CSU5ESU5HX05BTUVTIiwiY29uY2F0IiwiTElCX0FUVFIiLCJTRUxGIiwiZGVmaW5lIiwiZ2V0Q29tcG9uZW50T3B0cyIsInNob3J0ZW5CaW5kaW5nSWQiLCJpc0NvbXBvbmVudCIsIkNPTVBPTkVOVF9DT1VOVEVSIiwiQ09NUE9ORU5UUyIsIm5hbWUiLCJtYXJrdXAiLCJiaW5kaW5ncyIsInN0eWxlcyIsImFyZ3MiLCJDb21wb25lbnRSZWRlZmluZUVycm9yIiwiY29tcG9uZW50SFRNTE1hcmt1cCIsImNsYXNzTGlzdCIsImFkZCIsImNvbXBvbmVudCIsInN0YXRlIiwic3RhdGVJZCIsInN0YXRlUGF0aCIsInN0YXRlTmFtZXMiLCJldmFsdWF0ZSIsImxpbmtzIiwib3V0ZXJOYW1lcyIsIl9saW5rcyIsImdhdGhlckJpbmRpbmdzRnJvbU1hcmt1cCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwibm9ybWFsaXplVXNlck9wdGlvbnMiLCJwcmVwYXJlQmluZGluZ3MiLCJwcmVwYXJlU3R5bGVzIiwiSFRNTE5vZGUiLCJiaW5kaW5nT3B0cyIsImFuYWx5emVCaW5kaW5nIiwiYmluZGluZyIsImNyZWF0ZUJpbmRpbmciLCJzZXRDb21wb25lbnQiLCJQUkVGSVgiLCJpZCIsImlzTGlzdCIsIml0ZW1Ob2RlIiwiY2hpbGRyZW4iLCJtb2RpZnlUb0xpc3RCaW5kaW5nIiwibGlzdEl0ZW0iLCJjb21wb25lbnRCaW5kaW5nIiwic3ViQ29tcG9uZW50T3B0cyIsIk9iamVjdCIsImFzc2lnbiIsInN0YXRlTmFtZSIsIlNjb3BlTmFtZUNvbGxpc2lvbkVycm9yIiwiY2xvbmVOb2RlIiwicmV2TGlua3MiLCJjdXJyZW50U3RhdGVJZCIsInBhcmVudENvbXBvbmVudCIsImNvbXBvbmVudFdyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJCSU5ESU5HX0lEIiwiU1RBVEVfREVMSU1JVEVSIiwiYXBwZW5kQ2hpbGQiLCJzdWJDb21wb25lbnRzIiwiYmluZGluZ05hbWUiLCJvbGRCaW5kaW5nSWQiLCJuZXdCaW5kaW5nSWQiLCJzaG9ydElkIiwiYmluZGluZ05vZGUiLCJxdWVyeVNlbGVjdG9yIiwicmVtb3ZlIiwic2xpY2UiLCJob29rcyIsInByZXBhcmVSZWFjdGl2ZUZ1bmNzIiwicHVzaCIsIklURU0iLCJzZXR1cENvbXBvbmVudHNMaW5rcyIsInRlbXBsYXRlIiwiZm9yRWFjaCIsInN1YkNvbXBvbmVudCIsImNvbXBvbmVudERhdGEiLCJ0eXBlIiwicmVhY3RpdmVGdW5jIiwicHJlcGFyZVJlYWN0aXZlRnVuYyIsImRlcGVuZGVuY2llc05hbWVzIiwiZ2V0RGVwZW5kZW5jaWVzTmFtZXMiLCJkZXBlbmRlbmN5TmFtZSIsImRlcGVuZGFudHMiLCJ2YWx1ZXMiLCJjb21wb25lbnRJbnRlcmZhY2UiLCJjb21wdXRlIiwiZnVuYyIsImZ1bmNQYXJhbXMiLCJnZXRQYXJhbU5hbWVzIiwidmFsdWVzT2JqUmVnRXhwIiwiUmVnRXhwIiwiZnVuY1N0ciIsInRvU3RyaW5nIiwiZXhlYyIsImZ1bmNTdHJXaXRob3V0Q29tbWVudHMiLCJyZXBsYWNlIiwiUkUiLCJTVFJJUF9DT01NRU5UUyIsInBhcmFtc1N0ciIsImluZGV4T2YiLCJtYXRjaCIsIkFSR1VNRU5UX05BTUVTIiwidmFsdWVzT2JqIiwiY2FsbCIsImsiLCJ2IiwibGluayIsIm9wdGlvbnNPYmoiLCJwYXJlbnRPYmoiLCJwYXJlbnRLZXkiLCJjbGFzcyIsImxlbmd0aCIsIm9wdGlvbiIsInZhbHVlIiwiZXZlbnRzIiwia2V5IiwiZWwiLCJnZXRBdHRyaWJ1dGUiLCJURU1QTEFURV9CSU5ESU5HIiwicmVtb3ZlQXR0cmlidXRlIiwidHJpbSIsIlRFTVBMQVRFX0xJU1RfQklORElORyIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9iaiIsImdldENvbXBvbmVudEJ5TmFtZSIsIkFycmF5IiwicHJvdG90eXBlIiwiYXR0cmlidXRlcyIsImF0dHIiLCJTVEFURV9OQU1FIiwiaW5uZXJMaW5rIiwiQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IiLCJjb21wb25lbnRPcHRzIiwiaXNMaXN0SXRlbSIsImVsT3B0cyIsImluaXRWYWx1ZSIsImlubmVySFRNTCIsImxpc3RlbmVycyIsIml0ZW1NYXJrdXAiLCJzcGxpdCIsIm1hcCIsImpvaW4iLCJzdHlsZUFyZyIsInNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiaXNCaW5kaW5nIiwicHJlZml4Iiwic2V0dXBFdmVudEhhbmRsZXJzIiwiZWxlbWVudCIsImV2ZW50SGFuZGxlcnMiLCJnYXRoZXJBbGxFdmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IiwiZ2F0aGVyZWRIYW5kbGVycyIsImdhdGhlckV2ZW50SGFuZGxlcnMiLCJkZWNvcmF0ZUV2ZW50IiwiY3VySFRNTE5vZGUiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiYmluZGluZ0lkIiwiZXZlbnRIYW5kbGVyIiwiaW5kZXhsZXNzU3RhdGVQYXRoIiwicG9wIiwic3RhdGVQYXRoVG9JdGVtIiwiZ2V0U3RhdGVQYXRoVG9JdGVtIiwiYWNjZXNzb3JUb0RhdGEiLCJwcm9wYWdhdGlvblN0b3BwZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJiaW5kIiwiZWxlbWVudE5hbWUiLCJnZXRUb0l0ZW1Ob2RlIiwiaWR4IiwiSVRFTV9JTkRFWCIsInVuc2hpZnQiLCJjdXJFbCIsImFwcGx5Iiwicm9vdEVsZW1lbnRTZWxlY3RvciIsInJvb3RFbGVtZW50IiwiSFRNTE5vZGVzIiwic2V0dXBFbGVtZW50IiwiY3JlYXRlQWNjZXNzb3IiLCJnZXRPbmx5VmFsdWVzIiwiZ2V0Q29tcG9uZW50Iiwic2V0U3RhdGUiLCJwcmVwYXJlQ2hhbmdlT2JqZWN0IiwiRUxFTUVOVFMiLCJTVEFURSIsIkVMRU1FTlRfQ09VTlRFUiIsInBhdGgiLCJnZXRTdGF0ZSIsIkNPTVBPTkVOVF9UWVBFIiwiQkFTRSIsImFjY2Vzc29yIiwic3RhcnRUcmFuc2FjdGlvbiIsImFwcGx5Q2hhbmdlcyIsInVwIiwibGV2ZWwiLCJtb3ZlVXBTdGF0ZVBhdGgiLCJkb3duIiwiYWRkaXRpb25hbFBhdGgiLCJzZXQiLCJjaGFuZ2VPYmoiLCJnZXQiLCJnZXRWYWx1ZXMiLCJtb2RpZnlUb0FycmF5QWNjZXNzb3IiLCJmb3JjZWQiLCJrZXlzIiwiZm9yY2UiLCJpIiwiYmluZGluZ1ZhbHVlcyIsImdldFZhbHVlc1RyZWUiLCJ2YWx1ZXNUcmVlIiwidmFscyIsIml0ZW1WYWx1ZXMiLCJjb21wb25lbnRWYWx1ZXMiLCJuZXdTdGF0ZVBhdGgiLCJsYXN0SWR4IiwibnVtIiwiZWxzIiwic3RhcnQiLCJzaGlmdCIsIm1hcExpc3QiLCJjYiIsIml0ZXJhdGVMaXN0VmFsdWVzIiwiZmlsdGVyIiwiZmlsdGVyTGlzdCIsIm5ld0xpc3QiLCJzZXRWYWx1ZXMiLCJjcmVhdGVTdGF0ZU5vZGVzIiwibW9kaWZ5TGlzdCIsInNlbmRUb1JlbmRlclF1ZXVlIiwiQ0hBTkdFUyIsImNoYW5nZXMiLCJjb2xsZWN0aW5nIiwiUFJPTUlTRVNfUkVTT0xWRVMiLCJMSUZFX0NZQ0xFX0hBTkRMRVJTIiwibGlzdCIsInJ1bkxpZmVDeWNsZUhvb2tzIiwibGlmZUN5Y2xlSGFuZGxlcnMiLCJoIiwiZmluYWxpemVUcmFuc2FjdGlvbiIsInJlc29sdmVQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjaGFuZ2UiLCJpc0NvbGxlY3RpbmdDaGFuZ2VzIiwiYWRkTGlmZUN5Y2xlSG9vayIsImhvb2tUeXBlIiwiaG9vayIsInZhbHVlc05vZGUiLCJjcmVhdGVTdGF0ZU5vZGUiLCJ2YWx1ZXNOb2RlcyIsInZhbHVlTm9kZSIsInJlZHVjZSIsImEiLCJjaGFuZ2VWYWx1ZXMiLCJjYWxsZWREZXBlbmRlbmNlcyIsIkZVTExfQ0hBTkdFIiwiZW5kIiwic2V0VmFsdWUiLCJyZXMiLCJCaW5kaW5nTm90RXhpc3RzRXJyb3IiLCJzZXRWYWx1ZUZvckxpc3QiLCJzZXRWYWx1ZUZvckNvbXBvbmVudCIsImVxdWFsIiwiaHRtbCIsImRlcGVuZGFudCIsImRlcGVuZGFudEtleSIsIm5ld1ZhbHVlIiwiYXJyIiwiaW5kZXhFcXVhbGl0eSIsInJlbW92ZUxpc3RJdGVtIiwiYWN0aW9uIiwibGlzdFBhdGgiLCJpdGVtTmFtZSIsImFkZFRvTGlzdCIsInJlbW92ZUZyb21MaXN0Iiwic3BsaWNlIiwibGlzdEJpbmRpbmciLCJyZW1vdmVkRE9NTm9kZSIsInJlbW92ZWROb2RlIiwiY3JlYXRlQW5kQXBwZW5kU3R5bGVzIiwicmVuZGVyQ2hhbmdlcyIsInJlbmRlciIsImFwcGx5TWFya3VwIiwiYXBwbHlDbGFzc2VzIiwic3R5bGUiLCJhcHBseVN0eWxlcyIsImF0dHJzIiwiYXBwbHlBdHRyaWJ1dGVzIiwiY29tcG9uZW50Q2hhbmdlcyIsImVsZW1lbnRJZCIsImNvbXBvbmVudElkIiwiY29tcG9uZW50QWNjZXNzb3IiLCJyZW5kZXJMaXN0IiwicmVuZGVyQ29tcG9uZW50IiwidXBkYXRlQ29tcG9uZW50IiwiZHJhd0NvbXBvbmVudCIsIml0ZW1XcmFwcGVyIiwiQ09NUE9ORU5UIiwicmVuZGVyRnVuYyIsInJlbmRlclR5cGUiLCJjaGlsZFN0YXRlUGF0aCIsImNoaWxkTWFya3VwIiwiaXRlbUFjY2Vzc29yIiwiY29tcG9uZW50TWFya3VwIiwiY2hhbmdlVHlwZSIsInN0YXRlUGF0aFRvQmluZGluZyIsImxpc3RDb21wb25lbnQiLCJpdGVtc1ZhbHVlcyIsInVwZGF0ZUxpc3QiLCJsaXN0RnJhZ21lbnQiLCJidWlsZExpc3QiLCJsaXN0Tm9kZSIsIm5leHROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiTElTVCIsIkNPTVBPTkVOVF9MSVNUIiwiaW5zZXJ0QmVmb3JlIiwicmFuZ2UiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaXRlbVZhbHVlIiwiaXRlbUluZGV4IiwibmV3SXRlbUluZGV4IiwibGlzdEl0ZW1NYXJrdXAiLCJpdGVtc0NoYW5nZXMiLCJyZW1vdmVkQ291bnQiLCJmaXhJbmRleGVzIiwiZGlmZiIsIml0ZW1zTm9kZXMiLCJwcmV2SWR4IiwibmV3SWR4IiwiY2xhc3NlcyIsIm5vcm1hbGl6ZVN0eWxlcyIsInN0eWxlT2JqIiwic3R5bGVTdHIiLCJzdHlsZUVsIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiY29tcG9uZW50TmFtZSIsIm1lc3NhZ2UiLCJFcnJvciIsIlN0YXRlQWNjZXNzRXJyb3IiLCJTdGF0ZUxvb2t1cEVycm9yIiwiYWRkaXRpb25hbEluZm8iLCJMSUJfTkFNRSIsIkFUVFJfUFJFRklYIiwiU1RBVEVfUEFUSCIsIlRFTVBMQVRFX1BMQUNFTUVOVCIsIlNDT1BFX1BSRUZJWCIsIklURU1fU1VGRklYIiwiaXNGdW5jdGlvbiIsImlzQXJyYXkiLCJpc09iamVjdCIsImlzT2JqZWN0SW5CcmFja2V0cyIsImlzT2JqZWN0SW5Eb3VibGVCcmFja2V0cyIsImlzU3RyaW5nIiwiaXNIVE1MU3RyaW5nIiwiaXNOdW1iZXIiLCJpc0RPTUVsZW1lbnQiLCJpc1VuZGVmaW5lZCIsImlzRW1wdHkiLCJpc0xpbmsiLCJnZXRPYmplY3RUeXBlIiwic2xhc2hJZHgiLCJzb21lIiwiaGFzIiwiZ2V0RmFsc2VQYXRocyIsInRvRGFzaENhc2UiLCJ0b0NhbWVsQ2FzZSIsImdldFNob3J0TmFtZSIsImdldFJlYWxOYW1lIiwiTkFNRVMiLCJyZWFsIiwic2hvcnQiLCJzaG9ydE5hbWUiLCJvbmx5RmFsc2VQYXRocyIsImdldEZhbHNlUGF0aCIsInN0ciIsInRvVXBwZXJDYXNlIiwiY29weSIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiaGFzT3duUHJvcGVydHkiLCJjb3B5QXJyYXkiLCJyZXBsYWNlTm9kZXMiLCJjbG9uZUhUTUxNYXJrdXAiLCJjb2xsZWN0SFRNTE5vZGVzIiwid2Fsa05vZGVzIiwicmVtb3ZlTm9kZSIsImluc2VydEJlZm9yZU5vZGUiLCJyZXdyaXRlVG9Ob2RlIiwiZW1wdHlOb2RlIiwib3JpZ2luYWwiLCJyZXBsYWNlbWVudCIsInJlcGxhY2VDaGlsZCIsIm5leHRFbCIsIm1hcmt1cFN0ciIsImNvbnZlcnRTdHJpbmdUb0hUTUwiLCJtYXJrdXBTdHJpbmciLCJwYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWREb2N1bWVudCIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm5vZGUiLCJyb290IiwiaXNXYW50ZWQiLCJub2RlcyIsInJlbW92ZUNoaWxkIiwidGV4dCIsIndyaXRlVG9Ob2RlIiwidGV4dE5vZGUiLCJoYXNDaGlsZE5vZGVzIiwiZmlyc3RDaGlsZCIsImFyZUVxdWFsIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZE5vZGUiLCJjaGVja0tleXNFcXVhbGl0eSIsImFkZENvbnN0RmllbGRzIiwibWFwS2V5cyIsInRvT2JqZWN0IiwiZnVsbE1hcCIsInNwbGl0UGllY2UiLCJkZXN0IiwiZmllbGRzIiwiZmllbGQiLCJkZWZpbmVQcm9wZXJ0eSIsInByb3AiLCJuZXdPYmoiLCJuZXdLZXkiLCJ2YWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMx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Ty9ULEdBQVAsSUFBYzhULElBQWQ7QUFDRDtBQUNGO0FBQ0QsU0FBT0MsTUFBUDtBQUNEOztBQUVELFNBQVNSLFFBQVQsQ0FBbUIxSixHQUFuQixFQUF3Qm9LLEdBQXhCLEVBQTZCO0FBQzNCLE1BQU1GLFNBQVMsRUFBZjtBQUNBbEssTUFBSXZNLE9BQUosQ0FBWSxVQUFDZ0MsQ0FBRCxFQUFPO0FBQ2pCeVUsV0FBT3pVLENBQVAsSUFBWSwwQkFBVzJVLEdBQVgsSUFBa0JBLElBQUkzVSxDQUFKLENBQWxCLEdBQTJCMlUsR0FBdkM7QUFDRCxHQUZEO0FBR0EsU0FBT0YsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDaEpEOztBQUNBOztBQUVBRyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2Z2Yiw0QkFEZTtBQUVmbUw7QUFGZSxDQUFqQixDIiwiZmlsZSI6ImNvdWxpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcbmltcG9ydCBSRSBmcm9tICcuL2dsb2JhbHMvcmVnZXhwJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY2xvbmVIVE1MTWFya3VwLFxyXG4gIGNvbGxlY3RIVE1MTm9kZXMsXHJcbiAgd2Fsa05vZGVzLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nO1xyXG5cclxuaW1wb3J0IHsgc2V0LCBmb3JFYWNoLCBtYXAsIG1hcEtleXMsIHRvT2JqZWN0IH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQgY29weSBmcm9tICcuL2hlbHBlcnMvY29weSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNGdW5jdGlvbixcclxuICBpc09iamVjdCxcclxuICBpc0VtcHR5LFxyXG4gIGlzRE9NRWxlbWVudCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBoYXMsXHJcbiAgdG9DYW1lbENhc2UsXHJcbiAgZ2V0U2hvcnROYW1lLFxyXG59IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRPbmx5VmFsdWVzLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbn0gZnJvbSAnLi9WaWV3JztcclxuXHJcbmltcG9ydCBDb21wb25lbnRSZWRlZmluZUVycm9yIGZyb20gJy4vZXJyb3JzL0NvbXBvbmVudFJlZGVmaW5lRXJyb3InO1xyXG5pbXBvcnQgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZnJvbSAnLi9lcnJvcnMvU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3InO1xyXG5cclxuXHJcbmNvbnN0IFZBTFVFX1RZUEVTID0gWydzdHlsZScsICdjbGFzcycsICd2YWx1ZScsICdhdHRycycsICdodG1sJ107XHJcbmNvbnN0IFJFU0VSVkVEX0hPT0tTX05BTUVTID0gWydtb3VudCcsICd1cGRhdGUnLCAncmVtb3ZlJ107XHJcbmNvbnN0IERFRkFVTFRfSE9PS1MgPSB0b09iamVjdChSRVNFUlZFRF9IT09LU19OQU1FUywgKCkgPT4gKCkgPT4ge30pO1xyXG5jb25zdCBSRVNFUlZFRF9CSU5ESU5HX05BTUVTID0gVkFMVUVfVFlQRVMuY29uY2F0KFsnZXZlbnRzJywgJ2hvb2tzJywgJ2xpc3RJdGVtJywgTElCX0FUVFIuU0VMRl0pO1xyXG5cclxuZXhwb3J0IHtcclxuICBkZWZpbmUsXHJcbiAgZ2V0Q29tcG9uZW50T3B0cyxcclxuICBzaG9ydGVuQmluZGluZ0lkLFxyXG4gIGlzQ29tcG9uZW50LFxyXG4gIFZBTFVFX1RZUEVTLFxyXG4gIFJFU0VSVkVEX0JJTkRJTkdfTkFNRVMsXHJcbn07XHJcblxyXG5sZXQgQ09NUE9ORU5UX0NPVU5URVIgPSAwO1xyXG5jb25zdCBDT01QT05FTlRTID0ge307XHJcblxyXG5mdW5jdGlvbiBkZWZpbmUgKG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcykge1xyXG4gIGNvbnN0IGFyZ3MgPSBpc09iamVjdChuYW1lKSA/IG5hbWUgOiB7IG5hbWUsIG1hcmt1cCwgYmluZGluZ3MsIHN0eWxlcyB9O1xyXG5cclxuICBuYW1lID0gdG9DYW1lbENhc2UoYXJncy5uYW1lKTtcclxuXHJcbiAgaWYgKENPTVBPTkVOVFNbbmFtZV0pIHtcclxuICAgIHRocm93IG5ldyBDb21wb25lbnRSZWRlZmluZUVycm9yKG5hbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50SFRNTE1hcmt1cCA9IGNsb25lSFRNTE1hcmt1cChhcmdzLm1hcmt1cCk7XHJcbiAgY29tcG9uZW50SFRNTE1hcmt1cC5jbGFzc0xpc3QuYWRkKG5hbWUpO1xyXG5cclxuICBDT01QT05FTlRfQ09VTlRFUiA9IDA7XHJcbiAgY29uc3QgY29tcG9uZW50ID0ge1xyXG4gICAgbmFtZSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgICBzdGF0ZVBhdGg6IFtuYW1lXSxcclxuICAgIHN0YXRlTmFtZXM6IHt9LFxyXG4gICAgbWFya3VwOiBjb21wb25lbnRIVE1MTWFya3VwLFxyXG4gICAgZXZhbHVhdGU6IHt9LFxyXG4gICAgbGlua3M6IHt9LFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBvdXRlck5hbWVzOiB7fSxcclxuICAgIF9saW5rczoge30sXHJcbiAgfTtcclxuXHJcbiAgZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwKGNvbXBvbmVudEhUTUxNYXJrdXAsIGNvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb25zID0gbm9ybWFsaXplVXNlck9wdGlvbnMoYXJncy5iaW5kaW5ncywgeyBzdGF0ZToge30gfSk7XHJcbiAgY29weShjb21wb25lbnQsIG5vcm1hbGl6ZWRPcHRpb25zKTtcclxuXHJcbiAgcHJlcGFyZUJpbmRpbmdzIChjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZUlkLCB7IHN0YXRlUGF0aDogW10sIGxpbmtzOiB7fSwgc3RhdGVOYW1lczogY29tcG9uZW50LnN0YXRlTmFtZXMgfSk7XHJcblxyXG4gIGNyZWF0ZUFuZEFwcGVuZFN0eWxlcyggcHJlcGFyZVN0eWxlcyhhcmdzLnN0eWxlcywgY29tcG9uZW50KSApO1xyXG5cclxuICByZXR1cm4gQ09NUE9ORU5UU1tuYW1lXSA9IGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2F0aGVyQmluZGluZ3NGcm9tTWFya3VwIChjb21wb25lbnRIVE1MTWFya3VwLCBjb21wb25lbnQpIHtcclxuICB3YWxrTm9kZXMoY29tcG9uZW50SFRNTE1hcmt1cCwgKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBiaW5kaW5nT3B0cyA9IGFuYWx5emVCaW5kaW5nKEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmdPcHRzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiaW5kaW5nID0gY3JlYXRlQmluZGluZyhiaW5kaW5nT3B0cy5uYW1lLCBjb21wb25lbnQsIEhUTUxOb2RlKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNDb21wb25lbnQpIHtcclxuICAgICAgc2V0Q29tcG9uZW50KGJpbmRpbmcsIGJpbmRpbmdPcHRzKTtcclxuICAgICAgSFRNTE5vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnQuc3RhdGVbYmluZGluZy5uYW1lXSA9IGJpbmRpbmc7XHJcbiAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QuYWRkKExJQl9BVFRSLlBSRUZJWCArIGJpbmRpbmcuaWQsIGNvbXBvbmVudC5uYW1lICsgJy0nICsgYmluZGluZy5uYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZ09wdHMuaXNMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1Ob2RlID0gSFRNTE5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgIG1vZGlmeVRvTGlzdEJpbmRpbmcoYmluZGluZywgaXRlbU5vZGUpO1xyXG5cclxuICAgICAgaWYgKGlzQ29tcG9uZW50KGl0ZW1Ob2RlKSkge1xyXG4gICAgICAgIHNldENvbXBvbmVudChiaW5kaW5nLmxpc3RJdGVtLCBnZXRDb21wb25lbnRPcHRzKGl0ZW1Ob2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBnYXRoZXJCaW5kaW5nc0Zyb21NYXJrdXAoaXRlbU5vZGUsIGJpbmRpbmcubGlzdEl0ZW0pO1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENvbXBvbmVudCAoY29tcG9uZW50QmluZGluZywgc3ViQ29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IHN0YXRlTmFtZXMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudEJpbmRpbmcuc3RhdGVOYW1lcywgc3ViQ29tcG9uZW50T3B0cy5jb21wb25lbnQuc3RhdGVOYW1lcyk7XHJcbiAgbGV0IHN0YXRlSWQgPSBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5uYW1lICsgJ3gnICsgQ09NUE9ORU5UX0NPVU5URVIrKztcclxuXHJcbiAgaWYgKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKSB7XHJcbiAgICBpZiAoc3RhdGVOYW1lc1tzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IFNjb3BlTmFtZUNvbGxpc2lvbkVycm9yKHN1YkNvbXBvbmVudE9wdHMuc3RhdGVOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0ZUlkID0gc3ViQ29tcG9uZW50T3B0cy5zdGF0ZU5hbWU7XHJcbiAgICBjb21wb25lbnRCaW5kaW5nLnN0YXRlTmFtZXNbc3RhdGVJZF0gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY29weShjb21wb25lbnRCaW5kaW5nLCBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudCk7XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKCBjb21wb25lbnRCaW5kaW5nLCB7XHJcbiAgICBpZDogc3RhdGVJZCxcclxuICAgIHN0YXRlSWQsXHJcbiAgICBuYW1lOiBzdGF0ZUlkLFxyXG4gICAgc3RhdGVOYW1lOiBzdWJDb21wb25lbnRPcHRzLnN0YXRlTmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50QmluZGluZy5zdGF0ZVBhdGguY29uY2F0KHN0YXRlSWQpLFxyXG4gICAgbWFya3VwOiBzdWJDb21wb25lbnRPcHRzLmNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpLFxyXG4gICAgaXNDb21wb25lbnQ6IHRydWUsXHJcbiAgICBzdGF0ZU5hbWVzLFxyXG4gICAgX2xpbmtzOiBPYmplY3QuYXNzaWduKHt9LCBzdWJDb21wb25lbnRPcHRzLmxpbmtzKSxcclxuICAgIG91dGVyTmFtZXM6IE9iamVjdC5hc3NpZ24oe30sIHN1YkNvbXBvbmVudE9wdHMucmV2TGlua3MpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwYXJlQmluZGluZ3MgKGNvbXBvbmVudCwgY3VycmVudFN0YXRlSWQsIHBhcmVudENvbXBvbmVudCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb21wb25lbnQubWFya3VwLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lELCBzaG9ydGVuQmluZGluZ0lkKCBjdXJyZW50U3RhdGVJZCArIExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUiArIExJQl9BVFRSLlNFTEYgKSk7XHJcbiAgY29tcG9uZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb21wb25lbnQubWFya3VwKTtcclxuICBjb21wb25lbnQuc3RhdGVQYXRoID0gcGFyZW50Q29tcG9uZW50LnN0YXRlUGF0aC5jb25jYXQoY29tcG9uZW50LnN0YXRlSWQpO1xyXG4gIGNvbXBvbmVudC5zdGF0ZU5hbWVzID0gcGFyZW50Q29tcG9uZW50LnN0YXRlTmFtZXM7XHJcblxyXG4gIGNvbnN0IHN1YkNvbXBvbmVudHMgPSBbXTtcclxuXHJcbiAgZm9yRWFjaChjb21wb25lbnQuc3RhdGUsIChiaW5kaW5nLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgb2xkQmluZGluZ0lkID0gYmluZGluZy5pZDtcclxuICAgIGNvbnN0IG5ld0JpbmRpbmdJZCA9IGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgYmluZGluZ05hbWU7XHJcbiAgICBjb25zdCBzaG9ydElkID0gc2hvcnRlbkJpbmRpbmdJZChuZXdCaW5kaW5nSWQpO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLm1hcmt1cCkge1xyXG4gICAgICBjb25zdCBiaW5kaW5nTm9kZSA9IGNvbXBvbmVudFdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBvbGRCaW5kaW5nSWQpO1xyXG4gICAgICBiaW5kaW5nTm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQklORElOR19JRCwgc2hvcnRJZCk7XHJcbiAgICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgb2xkQmluZGluZ0lkKTtcclxuICAgICAgYmluZGluZ05vZGUuY2xhc3NMaXN0LmFkZChMSUJfQVRUUi5QUkVGSVggKyBuZXdCaW5kaW5nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgICBzdGF0ZVBhdGg6IGNvbXBvbmVudC5zdGF0ZVBhdGguc2xpY2UoKSxcclxuICAgICAgaG9va3M6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfSE9PS1MsIGJpbmRpbmcuaG9va3MpLFxyXG4gICAgICBpZDogbmV3QmluZGluZ0lkLFxyXG4gICAgICBzaG9ydElkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJlcGFyZVJlYWN0aXZlRnVuY3MoYmluZGluZywgY29tcG9uZW50KTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0xpc3QpIHtcclxuICAgICAgYmluZGluZy5zdGF0ZVBhdGgucHVzaChiaW5kaW5nTmFtZSk7XHJcbiAgICAgIGJpbmRpbmcuc3RhdGVOYW1lcyA9IGNvbXBvbmVudC5zdGF0ZU5hbWVzO1xyXG5cclxuICAgICAgcHJlcGFyZUJpbmRpbmdzIChiaW5kaW5nLmxpc3RJdGVtLCBuZXdCaW5kaW5nSWQgKyBMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIgKyBMSUJfQVRUUi5JVEVNICsgYmluZGluZy5saXN0SXRlbS5uYW1lLCBiaW5kaW5nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIHN1YkNvbXBvbmVudHMucHVzaChiaW5kaW5nKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2V0dXBDb21wb25lbnRzTGlua3MoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpO1xyXG4gIGNvbXBvbmVudC50ZW1wbGF0ZSA9IGNvbXBvbmVudC5tYXJrdXAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBzdWJDb21wb25lbnRzLmZvckVhY2goKHN1YkNvbXBvbmVudCkgPT4ge1xyXG4gICAgcHJlcGFyZUJpbmRpbmdzIChzdWJDb21wb25lbnQsIGN1cnJlbnRTdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgc3ViQ29tcG9uZW50LnN0YXRlSWQsIGNvbXBvbmVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmNzIChiaW5kaW5nLCBjb21wb25lbnREYXRhKSB7XHJcbiAgVkFMVUVfVFlQRVMuZm9yRWFjaCgodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgcmVhY3RpdmVGdW5jID0gYmluZGluZ1t0eXBlXTtcclxuICAgIGlmICghcmVhY3RpdmVGdW5jKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kaW5nLmV2YWx1YXRlW3R5cGVdID0gcHJlcGFyZVJlYWN0aXZlRnVuYyhiaW5kaW5nLCB0eXBlLCByZWFjdGl2ZUZ1bmMsIGNvbXBvbmVudERhdGEpXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVSZWFjdGl2ZUZ1bmMgKGJpbmRpbmcsIHR5cGUsIHJlYWN0aXZlRnVuYywgY29tcG9uZW50RGF0YSkge1xyXG4gIGNvbnN0IGRlcGVuZGVuY2llc05hbWVzID0gZ2V0RGVwZW5kZW5jaWVzTmFtZXMocmVhY3RpdmVGdW5jKTtcclxuXHJcbiAgZGVwZW5kZW5jaWVzTmFtZXMuZm9yRWFjaCgoZGVwZW5kZW5jeU5hbWUpID0+IHtcclxuICAgIGlmIChpc0VtcHR5KGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdKSkge1xyXG4gICAgICBjb21wb25lbnREYXRhLnN0YXRlW2RlcGVuZGVuY3lOYW1lXSA9IGNyZWF0ZUJpbmRpbmcoZGVwZW5kZW5jeU5hbWUsIGNvbXBvbmVudERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERhdGEuc3RhdGVbZGVwZW5kZW5jeU5hbWVdLmRlcGVuZGFudHNbIGJpbmRpbmcubmFtZSArICc6JyArIHR5cGUgXSA9IHsgbmFtZTogYmluZGluZy5uYW1lLCB0eXBlIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAodmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpID0+IGNvbXB1dGUgKHJlYWN0aXZlRnVuYywgdmFsdWVzLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXNOYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1BhcmFtcyA9IGdldFBhcmFtTmFtZXMoZnVuYyk7XHJcbiAgY29uc3QgdmFsdWVzT2JqUmVnRXhwID0gIG5ldyBSZWdFeHAoJ1xcXFwnICsgZnVuY1BhcmFtc1swXSArICdcXFxcLihcXFxcRFteXFxcXHNcXFxcV10rKScsICdnJyk7XHJcbiAgY29uc3QgZGVwZW5kZW5jaWVzTmFtZXMgPSBbXTtcclxuICBjb25zdCBmdW5jU3RyID0gZnVuYy50b1N0cmluZygpO1xyXG4gIGxldCBkZXBlbmRlbmN5TmFtZTtcclxuICB3aGlsZSAoZGVwZW5kZW5jeU5hbWUgPSB2YWx1ZXNPYmpSZWdFeHAuZXhlYyhmdW5jU3RyKSkge1xyXG4gICAgZGVwZW5kZW5jaWVzTmFtZXMucHVzaChkZXBlbmRlbmN5TmFtZVsxXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkZXBlbmRlbmNpZXNOYW1lcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyYW1OYW1lcyhmdW5jKSB7XHJcbiAgY29uc3QgZnVuY1N0cldpdGhvdXRDb21tZW50cyA9IGZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKFJFLlNUUklQX0NPTU1FTlRTLCAnJyk7XHJcbiAgY29uc3QgcGFyYW1zU3RyID0gZnVuY1N0cldpdGhvdXRDb21tZW50cy5zbGljZShcclxuICAgIGZ1bmNTdHJXaXRob3V0Q29tbWVudHMuaW5kZXhPZignKCcpICsxLFxyXG4gICAgZnVuY1N0cldpdGhvdXRDb21tZW50cy5pbmRleE9mKCcpJylcclxuICApO1xyXG4gIHJldHVybiBwYXJhbXNTdHIubWF0Y2goUkUuQVJHVU1FTlRfTkFNRVMpIHx8IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlIChmdW5jLCB2YWx1ZXNPYmosIGNvbXBvbmVudEludGVyZmFjZSkge1xyXG4gIHJldHVybiBmdW5jLmNhbGwodGhpcywgZ2V0T25seVZhbHVlcyh2YWx1ZXNPYmopLCBjb21wb25lbnRJbnRlcmZhY2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cENvbXBvbmVudHNMaW5rcyAoY29tcG9uZW50LCBwYXJlbnRDb21wb25lbnQpIHtcclxuICBPYmplY3QuYXNzaWduKFxyXG4gICAgcGFyZW50Q29tcG9uZW50LmxpbmtzLFxyXG4gICAgbWFwKGNvbXBvbmVudC5vdXRlck5hbWVzLCAoaywgdikgPT4gKHsgbGluazogaywgY29tcG9uZW50OiBjb21wb25lbnQuc3RhdGVJZCB9KSlcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVVc2VyT3B0aW9ucyAob3B0aW9uc09iaiwgcGFyZW50T2JqLCBwYXJlbnRLZXkpIHtcclxuICBpZiAoaXNGdW5jdGlvbiAob3B0aW9uc09iaikpIHtcclxuICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyBjbGFzczogb3B0aW9uc09iaiB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KG9wdGlvbnNPYmopKSB7XHJcblxyXG4gICAgaWYgKG9wdGlvbnNPYmoubGVuZ3RoID4gMSkge1xyXG4gICAgICBvcHRpb25zT2JqLmZvckVhY2goKG9wdGlvbikgPT4gbm9ybWFsaXplVXNlck9wdGlvbnMgKG9wdGlvbiwgcGFyZW50T2JqLCBwYXJlbnRLZXkpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnNPYmpbMF0pKSB7XHJcbiAgICAgIHJldHVybiBzZXQocGFyZW50T2JqLCBbcGFyZW50S2V5XSwgeyB2YWx1ZTogb3B0aW9uc09ialswXSB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc09iamVjdChvcHRpb25zT2JqWzBdKSkge1xyXG4gICAgICByZXR1cm4gc2V0KHBhcmVudE9iaiwgW3BhcmVudEtleV0sIHsgZXZlbnRzOiBvcHRpb25zT2JqWzBdIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChvcHRpb25zT2JqLCAodmFsdWUsIGtleSkgPT4ge1xyXG4gICAgZGVsZXRlIG9wdGlvbnNPYmpba2V5XTtcclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjcmVhdGVCaW5kaW5nKGtleSk7XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBwYXJlbnRPYmpbJ3N0YXRlJ11ba2V5XSA9IE9iamVjdC5hc3NpZ24oYmluZGluZywgdmFsdWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcGFyZW50T2JqWydzdGF0ZSddW2tleV0gPSBiaW5kaW5nO1xyXG4gICAgbm9ybWFsaXplVXNlck9wdGlvbnModmFsdWUsIHBhcmVudE9ialsnc3RhdGUnXSwga2V5KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHBhcmVudE9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5hbHl6ZUJpbmRpbmcgKGVsKSB7XHJcbiAgaWYgKGlzQ29tcG9uZW50KGVsKSkge1xyXG4gICAgcmV0dXJuIGdldENvbXBvbmVudE9wdHMoZWwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFlbC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgbGV0IG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfQklORElORyk7XHJcbiAgZWwucmVtb3ZlQXR0cmlidXRlKExJQl9BVFRSLlRFTVBMQVRFX0JJTkRJTkcpO1xyXG5cclxuICBpZiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZS50cmltKCkgfTtcclxuICB9XHJcblxyXG4gIG5hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfTElTVF9CSU5ESU5HKTtcclxuICBlbC5yZW1vdmVBdHRyaWJ1dGUoTElCX0FUVFIuVEVNUExBVEVfTElTVF9CSU5ESU5HKTtcclxuXHJcbiAgaWYgKG5hbWUpIHtcclxuICAgIHJldHVybiB7IG5hbWU6IG5hbWUudHJpbSgpLCBpc0xpc3Q6IHRydWUgfTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50IChlbCkge1xyXG4gIGNvbnN0IHRhZ05hbWUgPSBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gdGFnTmFtZSAmJiBDT01QT05FTlRTWyB0b0NhbWVsQ2FzZSh0YWdOYW1lKSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wb25lbnRPcHRzIChvYmopIHtcclxuICBjb25zdCBuYW1lID0gdG9DYW1lbENhc2UoIG9iai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKTtcclxuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnRCeU5hbWUobmFtZSk7XHJcbiAgY29uc3QgbGlua3MgPSB7fTtcclxuICBjb25zdCByZXZMaW5rcyA9IHt9O1xyXG4gIGxldCBzdGF0ZU5hbWUgPSBudWxsO1xyXG5cclxuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChvYmouYXR0cmlidXRlcylcclxuICAgIC5mb3JFYWNoKChhdHRyKSA9PiB7XHJcblxyXG4gICAgICBpZiAoYXR0ci5uYW1lID09PSBMSUJfQVRUUi5TVEFURV9OQU1FKSB7XHJcbiAgICAgICAgc3RhdGVOYW1lID0gYXR0ci52YWx1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlubmVyTGluayA9IHRvQ2FtZWxDYXNlKGF0dHIubmFtZSk7XHJcbiAgICAgIGxpbmtzW2lubmVyTGlua10gPSBhdHRyLnZhbHVlO1xyXG4gICAgICByZXZMaW5rc1thdHRyLnZhbHVlXSA9IGlubmVyTGluaztcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgbGlua3M6IGxpbmtzLFxyXG4gICAgcmV2TGlua3M6IHJldkxpbmtzLFxyXG4gICAgc3RhdGVOYW1lLFxyXG4gICAgbmFtZSxcclxuICAgIGlzQ29tcG9uZW50OiB0cnVlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbXBvbmVudEJ5TmFtZSAobmFtZSkge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IENPTVBPTkVOVFNbIHRvQ2FtZWxDYXNlKG5hbWUpIF07XHJcblxyXG4gIGlmICghY29tcG9uZW50KSB7XHJcbiAgICB0aHJvdyBuZXcgQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IobmFtZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCaW5kaW5nIChuYW1lLCBjb21wb25lbnQsIGVsKSB7XHJcbiAgY29uc3QgY29tcG9uZW50T3B0cyA9IChjb21wb25lbnQpID8ge1xyXG4gICAgaWQ6IGNvbXBvbmVudC5zdGF0ZUlkICsgTElCX0FUVFIuU1RBVEVfREVMSU1JVEVSICsgbmFtZSxcclxuICAgIHN0YXRlUGF0aDogY29tcG9uZW50LnN0YXRlUGF0aCxcclxuICAgIHN0YXRlTmFtZXM6IGNvbXBvbmVudC5zdGF0ZU5hbWVzLFxyXG4gICAgaXNMaXN0SXRlbTogY29tcG9uZW50LmlzTGlzdCxcclxuICAgIHN0YXRlSWQ6IG5hbWUsXHJcbiAgfSA6IHt9O1xyXG5cclxuICBjb25zdCBlbE9wdHMgPSAoZWwpID8ge1xyXG4gICAgaW5pdFZhbHVlOiBlbC52YWx1ZSB8fCBlbC5pbm5lckhUTUxcclxuICB9IDoge307XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcclxuICAgIG5hbWUsXHJcbiAgICBsaXN0ZW5lcnM6IFtdLFxyXG4gICAgbWFya3VwOiBlbCxcclxuICAgIGRlcGVuZGFudHM6IHt9LFxyXG4gICAgZXZlbnRzOiB7fSxcclxuICAgIGV2YWx1YXRlOiB7fSxcclxuICAgIGxpbmtzOiB7fSxcclxuICAgIHN0YXRlOiB7IFtMSUJfQVRUUi5TRUxGXToge30gfSxcclxuICAgIG91dGVyTmFtZXM6IHt9LFxyXG4gICAgX2xpbmtzOiB7fSxcclxuXHJcbiAgfSwgY29tcG9uZW50T3B0cywgZWxPcHRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VG9MaXN0QmluZGluZyAoYmluZGluZywgaXRlbU1hcmt1cCkge1xyXG4gIGJpbmRpbmcuaXNMaXN0ID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmluZGluZywge1xyXG4gICAgbWFya3VwOiBpdGVtTWFya3VwLFxyXG4gICAgbGlzdEl0ZW06IGNyZWF0ZUJpbmRpbmcoaXRlbU1hcmt1cC50YWdOYW1lLCBiaW5kaW5nLCBpdGVtTWFya3VwKSxcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvcnRlbkJpbmRpbmdJZCAoaWQpIHtcclxuICByZXR1cm4gaWRcclxuICAgIC5zcGxpdChMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIpXHJcbiAgICAubWFwKChlbCkgPT4gZ2V0U2hvcnROYW1lKGVsKSlcclxuICAgIC5qb2luKExJQl9BVFRSLlNUQVRFX0RFTElNSVRFUik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVTdHlsZXMgKHN0eWxlQXJnLCBjb21wb25lbnQpIHtcclxuICByZXR1cm4gbWFwS2V5cyhzdHlsZUFyZywgKGtleSkgPT4ga2V5XHJcbiAgICAuc3BsaXQoJywnKVxyXG4gICAgLm1hcCgoc2VsZWN0b3IpID0+IHNlbGVjdG9yLnRyaW0oKSlcclxuICAgIC5tYXAoKHNlbGVjdG9yKSA9PiB7XHJcblxyXG4gICAgICBsZXQgY2xhc3NOYW1lID0gICcuJyArIGNvbXBvbmVudC5uYW1lO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgaXNCaW5kaW5nID0gY29tcG9uZW50LnN0YXRlWyBzZWxlY3Rvci5zcGxpdCgnICcpWzBdLnNwbGl0KCc6OicpWzBdLnNwbGl0KCc6JylbMF0gXTtcclxuICAgICAgICBjb25zdCBwcmVmaXggPSBpc0JpbmRpbmcgPyBjbGFzc05hbWUgKyAnLScgOiAnJztcclxuICAgICAgICBjbGFzc05hbWUgKz0gJyAnICsgcHJlZml4ICsgc2VsZWN0b3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjbGFzc05hbWU7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJywnKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExJQl9BVFRSIGZyb20gJy4vZ2xvYmFscy9hdHRyaWJ1dGVzJztcclxuXHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICcuL2hlbHBlcnMvb2JqZWN0JztcclxuaW1wb3J0IHsgZ2V0UmVhbE5hbWUsIGhhcyB9IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVBY2Nlc3NvcixcclxufSBmcm9tICcuL1N0YXRlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgc3RhcnRUcmFuc2FjdGlvbixcclxuICBhcHBseUNoYW5nZXNcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmV4cG9ydCB7XHJcbiAgc2V0dXBFdmVudEhhbmRsZXJzXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzZXR1cEV2ZW50SGFuZGxlcnMgKGVsZW1lbnQpIHtcclxuICBjb25zdCBldmVudEhhbmRsZXJzID0ge307XHJcbiAgZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhlbGVtZW50LCBldmVudEhhbmRsZXJzKTtcclxuXHJcbiAgY29uc3QgbWFya3VwID0gZWxlbWVudC5lbDtcclxuICBmb3IgKGxldCBldmVudE5hbWUgaW4gZXZlbnRIYW5kbGVycykge1xyXG4gICAgbWFya3VwLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZSkgPT4gZXhlY3V0ZUFsbENhbGxiYWNrc0luTGlzdChlLCBldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0sIGVsZW1lbnQpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhdGhlckFsbEV2ZW50SGFuZGxlcnMgKGNvbXBvbmVudCwgZ2F0aGVyZWRIYW5kbGVycykge1xyXG4gIGdhdGhlckV2ZW50SGFuZGxlcnMgKGNvbXBvbmVudCwgZ2F0aGVyZWRIYW5kbGVycyk7XHJcblxyXG4gIGlmIChjb21wb25lbnQuc3RhdGUpIHtcclxuICAgIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZykgPT4gZ2F0aGVyQWxsRXZlbnRIYW5kbGVycyhiaW5kaW5nLCBnYXRoZXJlZEhhbmRsZXJzKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29tcG9uZW50Lmxpc3RJdGVtKSB7XHJcbiAgICBnYXRoZXJBbGxFdmVudEhhbmRsZXJzKGNvbXBvbmVudC5saXN0SXRlbSwgZ2F0aGVyZWRIYW5kbGVycyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnYXRoZXJFdmVudEhhbmRsZXJzIChiaW5kaW5nLCBnYXRoZXJlZEhhbmRsZXJzKSB7XHJcbiAgaWYgKCFiaW5kaW5nLmV2ZW50cykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgZXZlbnROYW1lIGluIGJpbmRpbmcuZXZlbnRzKSB7XHJcbiAgICBpZiAoIWdhdGhlcmVkSGFuZGxlcnNbZXZlbnROYW1lXSkge1xyXG4gICAgICBnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV0gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnYXRoZXJlZEhhbmRsZXJzW2V2ZW50TmFtZV1bYmluZGluZy5zaG9ydElkXSA9IGJpbmRpbmcuZXZlbnRzW2V2ZW50TmFtZV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjdXRlQWxsQ2FsbGJhY2tzSW5MaXN0IChlLCBldmVudEhhbmRsZXJzLCBlbGVtZW50KSB7XHJcbiAgZGVjb3JhdGVFdmVudChlKTtcclxuICBzdGFydFRyYW5zYWN0aW9uKCk7XHJcbiAgXHJcbiAgbGV0IGN1ckhUTUxOb2RlID0gZS50YXJnZXQ7XHJcbiAgd2hpbGUgKGN1ckhUTUxOb2RlICE9PSBlbGVtZW50LmVsLnBhcmVudE5vZGUpIHtcclxuICAgIGNvbnN0IGJpbmRpbmdJZCA9IGN1ckhUTUxOb2RlLmdldEF0dHJpYnV0ZShMSUJfQVRUUi5CSU5ESU5HX0lEKTtcclxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcnNbYmluZGluZ0lkXTtcclxuXHJcbiAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4bGVzc1N0YXRlUGF0aCA9IGJpbmRpbmdJZC5zcGxpdChMSUJfQVRUUi5TVEFURV9ERUxJTUlURVIpO1xyXG4gICAgICBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCk7XHJcbiAgICAgIGNvbnN0IHN0YXRlUGF0aFRvSXRlbSA9IGdldFN0YXRlUGF0aFRvSXRlbShjdXJIVE1MTm9kZSwgaW5kZXhsZXNzU3RhdGVQYXRoKTtcclxuICAgICAgY29uc3QgYWNjZXNzb3JUb0RhdGEgPSBjcmVhdGVBY2Nlc3NvcihbZWxlbWVudC5pZF0uY29uY2F0KHN0YXRlUGF0aFRvSXRlbSkpO1xyXG5cclxuICAgICAgZXZlbnRIYW5kbGVyLmNhbGwodGhpcywgZSwgY3VySFRNTE5vZGUsIGFjY2Vzc29yVG9EYXRhLCArc3RhdGVQYXRoVG9JdGVtLnNsaWNlKC0yKVswXSk7XHJcblxyXG4gICAgICBpZiAoZS5wcm9wYWdhdGlvblN0b3BwZWQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY3VySFRNTE5vZGUgPSBjdXJIVE1MTm9kZS5wYXJlbnROb2RlO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlDaGFuZ2VzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY29yYXRlRXZlbnQgKGUpIHtcclxuICBjb25zdCBzdG9wUHJvcGFnYXRpb24gPSBlLnN0b3BQcm9wYWdhdGlvbi5iaW5kKGUpO1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgZS5wcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xyXG4gICAgc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZVBhdGhUb0l0ZW0gKGVsLCBpbmRleGxlc3NTdGF0ZVBhdGgpIHtcclxuICBjb25zdCBzdGF0ZVBhdGggPSBbXTtcclxuXHJcbiAgbGV0IGVsZW1lbnROYW1lO1xyXG4gIHdoaWxlIChlbGVtZW50TmFtZSA9IGdldFJlYWxOYW1lKCBpbmRleGxlc3NTdGF0ZVBhdGgucG9wKCkgKSkge1xyXG5cclxuICAgIGlmIChoYXMoZWxlbWVudE5hbWUsIExJQl9BVFRSLklURU0pKSB7XHJcbiAgICAgIGVsZW1lbnROYW1lID0gZWxlbWVudE5hbWUuc2xpY2UoTElCX0FUVFIuSVRFTS5sZW5ndGgpO1xyXG4gICAgICBlbCA9IGdldFRvSXRlbU5vZGUoZWwpO1xyXG4gICAgICBjb25zdCBpZHggPSBlbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCk7XHJcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgc3RhdGVQYXRoLnVuc2hpZnQoaWR4LCBlbGVtZW50TmFtZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRlUGF0aC51bnNoaWZ0KGVsZW1lbnROYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZVBhdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvSXRlbU5vZGUgKGVsKSB7XHJcbiAgbGV0IGN1ckVsID0gZWw7XHJcblxyXG4gIHdoaWxlIChjdXJFbC50YWdOYW1lICE9PSAnQk9EWScpIHtcclxuICAgIGlmIChjdXJFbC5nZXRBdHRyaWJ1dGUoTElCX0FUVFIuSVRFTV9JTkRFWCkpIHtcclxuICAgICAgcmV0dXJuIGN1ckVsO1xyXG4gICAgfVxyXG4gICAgY3VyRWwgPSBjdXJFbC5wYXJlbnROb2RlO1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICByZXBsYWNlTm9kZXMsXHJcbiAgY29sbGVjdEhUTUxOb2RlcyxcclxufSBmcm9tICcuL2hlbHBlcnMvZG9tJ1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnRPcHRzLFxyXG4gIGlzQ29tcG9uZW50LFxyXG59IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgeyBzZXR1cEV2ZW50SGFuZGxlcnMgfSBmcm9tICcuL0V2ZW50SGFuZGxlcic7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5leHBvcnQgeyBhcHBseSB9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFwcGx5IChyb290RWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJvb3RFbGVtZW50U2VsZWN0b3IpO1xyXG4gIGNvbnN0IEhUTUxOb2RlcyA9IGNvbGxlY3RIVE1MTm9kZXMocm9vdEVsZW1lbnQsIGlzQ29tcG9uZW50KTtcclxuXHJcbiAgSFRNTE5vZGVzLmZvckVhY2goKEhUTUxOb2RlKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRPcHRzID0gZ2V0Q29tcG9uZW50T3B0cyhIVE1MTm9kZSk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gc2V0dXBFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG5cclxuICAgIHJlcGxhY2VOb2RlcyhIVE1MTm9kZSwgZWxlbWVudC5lbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRWxlbWVudCAoY29tcG9uZW50T3B0cykge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGNvbXBvbmVudE9wdHMpO1xyXG4gIHNldHVwRXZlbnRIYW5kbGVycyhlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0LCBzZXQsIGZvckVhY2gsIG1hcCB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaGFzIH0gZnJvbSAnLi9oZWxwZXJzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgU3RhdGVBY2Nlc3NFcnJvciBmcm9tICcuL2Vycm9ycy9TdGF0ZUFjY2Vzc0Vycm9yJztcclxuaW1wb3J0IFN0YXRlTG9va3VwRXJyb3IgZnJvbSAnLi9lcnJvcnMvU3RhdGVMb29rdXBFcnJvcic7XHJcblxyXG5pbXBvcnQgeyBSRVNFUlZFRF9CSU5ESU5HX05BTUVTIH0gZnJvbSAnLi9EZWZpbml0aW9uJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlU3RhdGVOb2RlcyxcclxuICBzZXRWYWx1ZXMsXHJcbiAgbW9kaWZ5TGlzdCxcclxuICBzdGFydFRyYW5zYWN0aW9uLFxyXG4gIHNlbmRUb1JlbmRlclF1ZXVlLFxyXG4gIGFwcGx5Q2hhbmdlcyxcclxufSBmcm9tICcuL1N0YXRlQ2hhbmdlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNFbXB0eSxcclxuICBpc0FycmF5LFxyXG4gIGlzU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzT2JqZWN0LFxyXG59IGZyb20gJy4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUVsZW1lbnQsXHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbiAgZ2V0T25seVZhbHVlcyxcclxuICBnZXRDb21wb25lbnQsXHJcbiAgc2V0U3RhdGUsXHJcbiAgcHJlcGFyZUNoYW5nZU9iamVjdCxcclxufTtcclxuXHJcbmNvbnN0IEVMRU1FTlRTID0ge307XHJcbmNvbnN0IFNUQVRFID0ge307XHJcbmxldCBFTEVNRU5UX0NPVU5URVIgPSAxO1xyXG5cclxuZnVuY3Rpb24gc2V0U3RhdGUgKHBhdGgsIHZhbHVlKSB7XHJcbiAgc2V0KFNUQVRFLCBwYXRoLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlIChwYXRoKSB7XHJcbiAgcmV0dXJuIGdldChTVEFURSwgcGF0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKGNvbXBvbmVudE9wdHMpIHtcclxuICBjb25zdCBpZCA9IEVMRU1FTlRfQ09VTlRFUisrO1xyXG4gIGNvbnN0IG5hbWUgPSBjb21wb25lbnRPcHRzLm5hbWU7XHJcblxyXG4gIGNvbnN0IGVsZW1lbnQgPSBFTEVNRU5UU1tpZF0gPSB7XHJcbiAgICBpZCxcclxuICAgIHN0YXRlOiB7IFtuYW1lXTogY29tcG9uZW50T3B0cy5jb21wb25lbnQgfSxcclxuICB9O1xyXG5cclxuICBTVEFURVtpZF0gPSB7fTtcclxuXHJcbiAgY3JlYXRlU3RhdGVOb2RlcyhbaWQsIG5hbWVdKTtcclxuXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUoW2lkXSwgeyBbbmFtZV06IGZhbHNlIH0pO1xyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG4gIGVsZW1lbnQuZWwgPSBTVEFURVtpZF1bbmFtZV1bTElCX0FUVFIuU0VMRl0uZWw7XHJcbiAgZWxlbWVudC5lbC5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkJBU0UpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWNjZXNzb3IgKHBhdGgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBnZXRTdGF0ZShwYXRoKTtcclxuICBjb25zdCBjb21wb25lbnQgPSBnZXRDb21wb25lbnQocGF0aCk7XHJcblxyXG4gIGNvbnN0IGFjY2Vzc29yID0ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgdmFsdWVzLFxyXG4gICAgcGF0aCxcclxuICAgIHN0YXJ0VHJhbnNhY3Rpb24sXHJcbiAgICBhcHBseUNoYW5nZXMsXHJcbiAgICB1cDogKGxldmVsKSA9PiBtb3ZlVXBTdGF0ZVBhdGgobGV2ZWwsIHBhdGguc2xpY2UoKSksXHJcbiAgICBkb3duOiAoYWRkaXRpb25hbFBhdGgpID0+IGNyZWF0ZUFjY2Vzc29yKHBhdGguY29uY2F0KGFkZGl0aW9uYWxQYXRoKSksXHJcbiAgICBzZXQ6IChjaGFuZ2VPYmopID0+IHNldFZhbHVlcyggcHJlcGFyZUNoYW5nZU9iamVjdChjaGFuZ2VPYmopLCBwYXRoKSxcclxuICAgIGdldDogKGtleSkgPT4gZ2V0VmFsdWVzKGFjY2Vzc29yLCBrZXksIHBhdGgpLFxyXG4gICAgbWFya3VwOiAoa2V5KSA9PiBrZXkgPyBhY2Nlc3Nvci52YWx1ZXNba2V5XS5lbCA6IGFjY2Vzc29yLnZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbCxcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5KHZhbHVlcykpIHtcclxuICAgIG1vZGlmeVRvQXJyYXlBY2Nlc3NvcihhY2Nlc3Nvcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYWNjZXNzb3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXBhcmVDaGFuZ2VPYmplY3QgKGNoYW5nZU9iaikge1xyXG4gIHJldHVybiBtYXAoY2hhbmdlT2JqLCAodikgPT4ge1xyXG4gICAgY29uc3QgZm9yY2VkID0gaXNPYmplY3QodikgJiYgT2JqZWN0LmtleXModilbMF0gPT09ICdmb3JjZSc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IGZvcmNlZCA/IHZbJ2ZvcmNlJ10gOiB2LFxyXG4gICAgICB0eXBlOiAndmFsdWUnLFxyXG4gICAgICBmb3JjZTogZm9yY2VkLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50IChwYXRoKSB7XHJcbiAgbGV0IGNvbXBvbmVudCA9IEVMRU1FTlRTWyBwYXRoWzBdIF07XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50LnN0YXRlWyBwYXRoW2ldIF07XHJcbiAgICBcclxuICAgIGlmIChjb21wb25lbnQuaXNMaXN0ICYmIGkgIT09IChwYXRoLmxlbmd0aCAtMSkpIHtcclxuICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50Lmxpc3RJdGVtO1xyXG4gICAgICBpKz0yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T25seVZhbHVlcyAob2JqKSB7XHJcbiAgcmV0dXJuIG1hcChvYmosIChiaW5kaW5nVmFsdWVzKSA9PiBiaW5kaW5nVmFsdWVzWyd2YWx1ZSddKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzIChhY2Nlc3Nvciwga2V5LCBzdGF0ZVBhdGgpIHtcclxuICBjb25zdCB2YWx1ZXMgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG5cclxuICBpZiAoIWtleSkge1xyXG4gICAgcmV0dXJuIGdldFZhbHVlc1RyZWUodmFsdWVzLCBjb21wb25lbnQsIHt9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVba2V5XTtcclxuICBpZiAoYmluZGluZy5pc0xpc3QgfHwgYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5jb25jYXQoa2V5KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWVzW2tleV0udmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc1RyZWUgKHZhbHVlcywgY29tcG9uZW50LCB2YWx1ZXNUcmVlKSB7XHJcbiAgZm9yRWFjaCh2YWx1ZXMsICh2YWxzLCBiaW5kaW5nTmFtZSkgPT4ge1xyXG4gICAgaWYgKGhhcyhSRVNFUlZFRF9CSU5ESU5HX05BTUVTLCBiaW5kaW5nTmFtZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmcgPSBjb21wb25lbnQuc3RhdGVbYmluZGluZ05hbWVdO1xyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICB2YWx1ZXNUcmVlW2JpbmRpbmdOYW1lXSA9IFtdO1xyXG4gICAgICB2YWx1ZXNbYmluZGluZ05hbWVdLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbVZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdW2ldID0ge307XHJcbiAgICAgICAgZ2V0VmFsdWVzVHJlZSh2YWx1ZXNbYmluZGluZ05hbWVdW2ldW2JpbmRpbmcubGlzdEl0ZW0ubmFtZV0sIGJpbmRpbmcubGlzdEl0ZW0sIGl0ZW1WYWx1ZXMpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiaW5kaW5nLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFZhbHVlcyA9IHZhbHVlc1RyZWVbYmluZGluZ05hbWVdID0ge307XHJcbiAgICAgIGdldFZhbHVlc1RyZWUodmFsdWVzW2JpbmRpbmdOYW1lXSwgYmluZGluZywgY29tcG9uZW50VmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNUcmVlWyBjb21wb25lbnQuX2xpbmtzW2JpbmRpbmdOYW1lXSB8fCBiaW5kaW5nTmFtZSBdID0gdmFscy52YWx1ZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZhbHVlc1RyZWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVVcFN0YXRlUGF0aCAobGV2ZWwsIHN0YXRlUGF0aCkge1xyXG4gIGxldCBuZXdTdGF0ZVBhdGg7XHJcbiAgbGV0IGxhc3RJZHggPSBzdGF0ZVBhdGgubGVuZ3RoO1xyXG5cclxuICBpZiAobGV2ZWwgPT09ICcnKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoLnNsaWNlKDAsIDIpKTtcclxuICB9XHJcblxyXG4gIGlmIChpc1N0cmluZyhsZXZlbCkpIHtcclxuICAgIHdoaWxlIChsYXN0SWR4LS0pIHtcclxuICAgICAgaWYgKHN0YXRlUGF0aFtsYXN0SWR4XSA9PT0gbGV2ZWwpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGguc2xpY2UoMCwgbGFzdElkeCArIDEpKTtcclxuICB9XHJcblxyXG4gIGxldmVsID0gbGV2ZWwgfHwgMTtcclxuICB3aGlsZSAobGFzdElkeC0tICYmIGxldmVsLS0pIHtcclxuICAgIGlmIChpc051bWJlcigrc3RhdGVQYXRoW2xhc3RJZHggLSAxXSkpIHtcclxuICAgICAgbGFzdElkeC0tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aC5zbGljZSgwLCBsYXN0SWR4ICsgMSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUb0FycmF5QWNjZXNzb3IgKGFjY2Vzc29yKSB7XHJcbiAgT2JqZWN0LmFzc2lnbihhY2Nlc3Nvciwge1xyXG4gICAgZ2V0OiAobnVtKSA9PiBjcmVhdGVBY2Nlc3NvcihhY2Nlc3Nvci5wYXRoLmNvbmNhdChudW0sIGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbS5uYW1lKSksXHJcblxyXG4gICAgcHVzaDogKGVscykgPT4gbW9kaWZ5TGlzdCgnYWRkJywgeyBzdGFydDogYWNjZXNzb3IudmFsdWVzLmxlbmd0aCwgZWxzIH0sIGFjY2Vzc29yKSxcclxuICAgIHVuc2hpZnQ6IChlbHMpID0+IG1vZGlmeUxpc3QoJ2FkZCcsIHsgc3RhcnQ6IDAsIGVscyB9LCBhY2Nlc3NvciksXHJcbiAgICBhZGQ6IChzdGFydCwgZWxzKSA9PiBtb2RpZnlMaXN0KCdhZGQnLCB7IHN0YXJ0LCBlbHMgfSwgYWNjZXNzb3IpLFxyXG5cclxuICAgIHBvcDogKG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydDogYWNjZXNzb3IudmFsdWVzLmxlbmd0aCAtIChudW0gfHwgMSksIG51bSB9LCBhY2Nlc3NvciksXHJcbiAgICBzaGlmdDogKG51bSkgPT4gbW9kaWZ5TGlzdCgncmVtb3ZlJywgeyBzdGFydDogMCwgbnVtIH0sIGFjY2Vzc29yKSxcclxuICAgIHJlbW92ZTogKHN0YXJ0LCBudW0pID0+IG1vZGlmeUxpc3QoJ3JlbW92ZScsIHsgc3RhcnQsIG51bSB9LCBhY2Nlc3NvciksXHJcblxyXG4gICAgbGVuZ3RoOiAoKSA9PiBhY2Nlc3Nvci52YWx1ZXMubGVuZ3RoLFxyXG4gICAgdmFsdWU6ICgpID0+IG1hcExpc3QoYWNjZXNzb3IpLFxyXG4gICAgZm9yRWFjaDogKGNiKSA9PiBpdGVyYXRlTGlzdFZhbHVlcyhhY2Nlc3NvciwgY2IpLFxyXG4gICAgZmlsdGVyOiAoY2IpID0+IGZpbHRlckxpc3QoYWNjZXNzb3IsIGNiKSxcclxuICAgIG1hcDogKGNiKSA9PiBtYXBMaXN0KGFjY2Vzc29yLCBjYiksXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGl0ZXJhdGVMaXN0VmFsdWVzIChhY2Nlc3NvciwgY2IpIHtcclxuICBhY2Nlc3Nvci52YWx1ZXMuZm9yRWFjaCgoZWwsIGkpID0+XHJcbiAgICBjYihcclxuICAgICAgZ2V0VmFsdWVzVHJlZShlbFthY2Nlc3Nvci5jb21wb25lbnQubGlzdEl0ZW0ubmFtZV0sIGFjY2Vzc29yLmNvbXBvbmVudC5saXN0SXRlbSwge30pLFxyXG4gICAgICBpXHJcbiAgKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3QgKGFjY2Vzc29yLCBjYikge1xyXG4gIGNvbnN0IG5ld0xpc3QgPSBbXTtcclxuXHJcbiAgaXRlcmF0ZUxpc3RWYWx1ZXMoYWNjZXNzb3IsIChlbCwgaSkgPT4ge1xyXG4gICAgaWYgKGNiKGVsLCBpKSkge1xyXG4gICAgICBuZXdMaXN0LnB1c2goZWwpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwTGlzdCAoYWNjZXNzb3IsIGNiKSB7XHJcbiAgY29uc3QgbmV3TGlzdCA9IFtdO1xyXG4gIGl0ZXJhdGVMaXN0VmFsdWVzKGFjY2Vzc29yLCAoZWwsIGkpID0+IG5ld0xpc3QucHVzaCggY2IgPyBjYihlbCwgaSkgOiBlbCApKTtcclxuICByZXR1cm4gbmV3TGlzdDtcclxufVxyXG4iLCJpbXBvcnQgTElCX0FUVFIgZnJvbSAnLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHsgc2V0LCBmb3JFYWNoLCBtYXAsIHRvT2JqZWN0LCBtYXBLZXlzIH0gZnJvbSAnLi9oZWxwZXJzL29iamVjdCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzRW1wdHksXHJcbiAgaXNBcnJheSxcclxuICBpc09iamVjdCxcclxufSBmcm9tICcuL2hlbHBlcnMvY2hlY2tlcnMnO1xyXG5cclxuaW1wb3J0IGFyZUVxdWFsIGZyb20gJy4vaGVscGVycy9lcXVhbGl0eSc7XHJcbmltcG9ydCB7IGhhcyB9IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRDb21wb25lbnQsXHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbiAgcHJlcGFyZUNoYW5nZU9iamVjdCxcclxuICBnZXRPbmx5VmFsdWVzLFxyXG4gIHNldFN0YXRlLFxyXG59IGZyb20gJy4vU3RhdGUnO1xyXG5cclxuaW1wb3J0IHsgcmVuZGVyQ2hhbmdlcyB9IGZyb20gJy4vVmlldyc7XHJcblxyXG5pbXBvcnQgeyBWQUxVRV9UWVBFUyB9IGZyb20gJy4vRGVmaW5pdGlvbic7XHJcblxyXG5pbXBvcnQgQmluZGluZ05vdEV4aXN0c0Vycm9yIGZyb20gJy4vZXJyb3JzL0JpbmRpbmdOb3RFeGlzdHNFcnJvcic7XHJcblxyXG5leHBvcnQge1xyXG4gIHNldFZhbHVlcyxcclxuICBjcmVhdGVTdGF0ZU5vZGVzLFxyXG4gIG1vZGlmeUxpc3QsXHJcbiAgc3RhcnRUcmFuc2FjdGlvbixcclxuICBhcHBseUNoYW5nZXMsXHJcbiAgc2VuZFRvUmVuZGVyUXVldWUsXHJcbn07XHJcblxyXG5jb25zdCBDSEFOR0VTID0geyBjaGFuZ2VzOiB7fSwgY29sbGVjdGluZzogZmFsc2UgfTtcclxuY29uc3QgUFJPTUlTRVNfUkVTT0xWRVMgPSBbXTtcclxuY29uc3QgTElGRV9DWUNMRV9IQU5ETEVSUyA9IHsgbGlzdDogW10gfTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VHJhbnNhY3Rpb24gKCkge1xyXG4gIGFwcGx5Q2hhbmdlcygpO1xyXG4gIENIQU5HRVMuY29sbGVjdGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlcyAoKSB7XHJcbiAgY29uc3QgY2hhbmdlcyA9IENIQU5HRVMuY2hhbmdlcztcclxuICBDSEFOR0VTLmNoYW5nZXMgPSB7fTtcclxuICByZW5kZXJDaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIHJldHVybiBydW5MaWZlQ3ljbGVIb29rcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5MaWZlQ3ljbGVIb29rcyAoKSB7XHJcbiAgY29uc3QgbGlmZUN5Y2xlSGFuZGxlcnMgPSBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3Q7XHJcbiAgTElGRV9DWUNMRV9IQU5ETEVSUy5saXN0ID0gW107XHJcbiAgbGlmZUN5Y2xlSGFuZGxlcnMuZm9yRWFjaCgoaCkgPT4gaCgpKTtcclxuXHJcbiAgaWYgKCFpc0VtcHR5KENIQU5HRVMuY2hhbmdlcykpIHtcclxuICAgIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaW5hbGl6ZVRyYW5zYWN0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmFsaXplVHJhbnNhY3Rpb24gKCkge1xyXG4gIENIQU5HRVMuY29sbGVjdGluZyA9IGZhbHNlO1xyXG4gIGxldCByZXNvbHZlUHJvbWlzZTtcclxuXHJcbiAgd2hpbGUgKHJlc29sdmVQcm9taXNlID0gUFJPTUlTRVNfUkVTT0xWRVMucG9wKCkpIHtcclxuICAgIHJlc29sdmVQcm9taXNlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZFRvUmVuZGVyUXVldWUgKHBhdGgsIGNoYW5nZSkge1xyXG4gIHNldChDSEFOR0VTLmNoYW5nZXMsIHBhdGgsIGNoYW5nZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29sbGVjdGluZ0NoYW5nZXMgKCkge1xyXG4gIHJldHVybiBDSEFOR0VTLmNvbGxlY3Rpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpZmVDeWNsZUhvb2sgKGhvb2tUeXBlLCBiaW5kaW5nLCB2YWx1ZXMsIGFjY2Vzc29yLCBpZHgpIHtcclxuICBjb25zdCBob29rID0gYmluZGluZy5ob29rc1tob29rVHlwZV07XHJcbiAgY29uc3Qgc3RhdGVQYXRoID0gYWNjZXNzb3IucGF0aDtcclxuICBMSUZFX0NZQ0xFX0hBTkRMRVJTLmxpc3QucHVzaCgoKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IHZhbHVlc1tiaW5kaW5nLm5hbWUgfHwgTElCX0FUVFIuU0VMRl0uZWw7XHJcbiAgICBjb25zdCB2YWxzID0gIWJpbmRpbmcubmFtZSA/IGdldE9ubHlWYWx1ZXModmFsdWVzKSA6IHZhbHVlc1tiaW5kaW5nLm5hbWVdLnZhbHVlO1xyXG4gICAgaG9vayhlbCwgdmFscywgYWNjZXNzb3IsIGlkeCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlTm9kZXMgKHN0YXRlUGF0aCkge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGdldENvbXBvbmVudChzdGF0ZVBhdGgpO1xyXG4gIGNvbnN0IHZhbHVlc05vZGUgPSBjcmVhdGVTdGF0ZU5vZGUoY29tcG9uZW50KTtcclxuICBzZXRTdGF0ZShzdGF0ZVBhdGgsIHZhbHVlc05vZGUpO1xyXG5cclxuICBmb3JFYWNoKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCkge1xyXG4gICAgICBjcmVhdGVTdGF0ZU5vZGVzKHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG4gIGFkZExpZmVDeWNsZUhvb2soJ21vdW50JywgY29tcG9uZW50LnN0YXRlW0xJQl9BVFRSLlNFTEZdLCB2YWx1ZXNOb2RlLCBhY2Nlc3Nvciwgc3RhdGVQYXRoLnNsaWNlKC0yKVswXSk7XHJcblxyXG4gIHJldHVybiB2YWx1ZXNOb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU5vZGUgKGNvbXBvbmVudCkge1xyXG4gIGNvbnN0IHZhbHVlc05vZGVzID0gbWFwKGNvbXBvbmVudC5zdGF0ZSwgKGJpbmRpbmcsIGJpbmRpbmdOYW1lKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZU5vZGUgPSBiaW5kaW5nLmlzTGlzdCA/IFtdIDoge307XHJcblxyXG4gICAgcmV0dXJuIFZBTFVFX1RZUEVTLnJlZHVjZSgoYSwga2V5KSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAndmFsdWUnOlxyXG4gICAgICAgIGNhc2UgJ2h0bWwnOlxyXG4gICAgICAgICAgdmFsdWUgPSBiaW5kaW5nLmluaXRWYWx1ZSB8fCAnJ1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB2YWx1ZSA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICAgIHJldHVybiBhO1xyXG4gICAgfSwgdmFsdWVOb2RlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24odmFsdWVzTm9kZXMsIHsgW0xJQl9BVFRSLlNFTEZdOiB0b09iamVjdChWQUxVRV9UWVBFUywge30pIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRWYWx1ZXMgKGNoYW5nZVZhbHVlcywgc3RhdGVQYXRoLCBjYWxsZWREZXBlbmRlbmNlcykge1xyXG4gIGNhbGxlZERlcGVuZGVuY2VzID0gY2FsbGVkRGVwZW5kZW5jZXMgfHwgW107XHJcbiAgY29uc3QgYWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGgpO1xyXG5cclxuICBpZiAoIWFjY2Vzc29yLnZhbHVlcykge1xyXG4gICAgYWNjZXNzb3IudmFsdWVzID0gY3JlYXRlU3RhdGVOb2RlcyhzdGF0ZVBhdGgpO1xyXG4gICAgY29uc3Qgc3RhcnQgPSArc3RhdGVQYXRoLnNsaWNlKC0yKVswXTtcclxuICAgIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aCwgeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IGFkZDogeyBzdGFydCwgZW5kOiBzdGFydCArIDEgfSB9IH0pXHJcbiAgfVxyXG5cclxuICBmb3JFYWNoKGNoYW5nZVZhbHVlcywgKGNoYW5nZSwgYmluZGluZ05hbWUpID0+IHNldFZhbHVlKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcykpO1xyXG5cclxuICBhZGRMaWZlQ3ljbGVIb29rKCd1cGRhdGUnLCBhY2Nlc3Nvci5jb21wb25lbnQuc3RhdGVbTElCX0FUVFIuU0VMRl0sIGFjY2Vzc29yLnZhbHVlcywgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG5cclxuICBpZiAoaXNDb2xsZWN0aW5nQ2hhbmdlcygpKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gUFJPTUlTRVNfUkVTT0xWRVMucHVzaChyZXMpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcHBseUNoYW5nZXMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VmFsdWUgKGJpbmRpbmdOYW1lLCBjaGFuZ2UsIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcykge1xyXG4gIGNvbnN0IHN0YXRlUGF0aCA9IGFjY2Vzc29yLnBhdGg7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG4gIGNvbnN0IHZhbHVlcyA9IGFjY2Vzc29yLnZhbHVlcztcclxuICBsZXQgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcblxyXG4gIGlmICghYmluZGluZykge1xyXG4gICAgYmluZGluZ05hbWUgPSBjb21wb25lbnQub3V0ZXJOYW1lc1tiaW5kaW5nTmFtZV07XHJcbiAgICBiaW5kaW5nID0gY29tcG9uZW50LnN0YXRlW2JpbmRpbmdOYW1lXTtcclxuICB9XHJcblxyXG4gIGlmICghYmluZGluZykge1xyXG4gICAgdGhyb3cgbmV3IEJpbmRpbmdOb3RFeGlzdHNFcnJvcihiaW5kaW5nTmFtZSwgY29tcG9uZW50Lm5hbWUsIHN0YXRlUGF0aCk7XHJcbiAgfVxyXG5cclxuICBpZiAoY2hhbmdlLnR5cGUgPT09ICd2YWx1ZScpIHtcclxuICAgIGlmIChiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICByZXR1cm4gc2V0VmFsdWVGb3JMaXN0KGJpbmRpbmcsIGNoYW5nZSwgdmFsdWVzW2JpbmRpbmdOYW1lXSwgYWNjZXNzb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChjaGFuZ2UudmFsdWUpICYmIGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuIHNldFZhbHVlRm9yQ29tcG9uZW50KGJpbmRpbmcsIGNoYW5nZSwgY29tcG9uZW50LCBzdGF0ZVBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZXF1YWwgPSBhcmVFcXVhbCh2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSwgY2hhbmdlLnZhbHVlKTtcclxuXHJcbiAgaWYgKCFlcXVhbCB8fCAhaXNFbXB0eShlcXVhbCkgfHwgY2hhbmdlLmZvcmNlKSB7XHJcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdW2NoYW5nZS50eXBlXSA9IGNoYW5nZS52YWx1ZTtcclxuXHJcbiAgICBpZiAoY2hhbmdlLnR5cGUgIT09ICd2YWx1ZScpIHtcclxuICAgICAgcmV0dXJuIHNlbmRUb1JlbmRlclF1ZXVlKHN0YXRlUGF0aC5jb25jYXQoYmluZGluZ05hbWUpLCB7IFtjaGFuZ2UudHlwZV06IGZhbHNlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpZmVDeWNsZUhvb2soJ3VwZGF0ZScsIGJpbmRpbmcsIHZhbHVlcywgYWNjZXNzb3IsIHN0YXRlUGF0aC5zbGljZSgtMilbMF0pO1xyXG4gICAgY2FsbGVkRGVwZW5kZW5jZXMucHVzaChiaW5kaW5nTmFtZSArICc6JyArIGNoYW5nZS50eXBlKTtcclxuXHJcbiAgICBpZiAoIWJpbmRpbmcuaHRtbCkge1xyXG4gICAgICBzZXRWYWx1ZShiaW5kaW5nTmFtZSwgeyB2YWx1ZTogY2hhbmdlLnZhbHVlLCB0eXBlOiAnaHRtbCcsIGZvcmNlOiBjaGFuZ2UuZm9yY2UgfSwgYWNjZXNzb3IsIGNhbGxlZERlcGVuZGVuY2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaW5rID0gY29tcG9uZW50LmxpbmtzW2JpbmRpbmdOYW1lXTtcclxuICAgIGlmIChsaW5rKSB7XHJcbiAgICAgIHNldFZhbHVlKGxpbmsubGluaywgeyB2YWx1ZTogY2hhbmdlLnZhbHVlLCB0eXBlOiAndmFsdWUnLCBmb3JjZTogY2hhbmdlLmZvcmNlIH0sIGFjY2Vzc29yLmRvd24obGluay5jb21wb25lbnQpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChiaW5kaW5nLmRlcGVuZGFudHMsIChkZXBlbmRhbnQsIGRlcGVuZGFudEtleSkgPT4ge1xyXG4gICAgICBpZiAoaGFzKGNhbGxlZERlcGVuZGVuY2VzLCBkZXBlbmRhbnRLZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGNvbXBvbmVudC5zdGF0ZVtkZXBlbmRhbnQubmFtZV0uZXZhbHVhdGVbZGVwZW5kYW50LnR5cGVdKHZhbHVlcywgYWNjZXNzb3IpO1xyXG4gICAgICBzZXRWYWx1ZShkZXBlbmRhbnQubmFtZSwgeyB2YWx1ZTogbmV3VmFsdWUsIHR5cGU6IGRlcGVuZGFudC50eXBlIH0sIGFjY2Vzc29yLCBjYWxsZWREZXBlbmRlbmNlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlRm9yTGlzdCAoYmluZGluZywgY2hhbmdlLCBhcnIsIGFjY2Vzc29yKSB7XHJcbiAgT2JqZWN0XHJcbiAgICAua2V5cyhjaGFuZ2UudmFsdWUpXHJcbiAgICAuZm9yRWFjaCgoaSkgPT4gc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZS52YWx1ZVtpXSksIGFjY2Vzc29yLnBhdGguY29uY2F0KGJpbmRpbmcubmFtZSwgaSwgYmluZGluZy5saXN0SXRlbS5uYW1lKSkpO1xyXG5cclxuICBjb25zdCBpbmRleEVxdWFsaXR5ID0gYXJlRXF1YWwoYXJyLCBjaGFuZ2UudmFsdWUpO1xyXG4gIGZvckVhY2goaW5kZXhFcXVhbGl0eSwgKGNoYW5nZU9iaiwgaWR4KSA9PiB7XHJcbiAgICBpZiAoY2hhbmdlT2JqLnJlbW92ZSkge1xyXG4gICAgICBjaGFuZ2VPYmoucmVtb3ZlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpZHgsIGJpbmRpbmcsIGFjY2Vzc29yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kVG9SZW5kZXJRdWV1ZShhY2Nlc3Nvci5wYXRoLmNvbmNhdChiaW5kaW5nLm5hbWUsIGlkeCwgYmluZGluZy5saXN0SXRlbS5uYW1lKSwgeyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiBjaGFuZ2VPYmogfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFZhbHVlRm9yQ29tcG9uZW50IChiaW5kaW5nLCBjaGFuZ2UsIGNvbXBvbmVudCwgc3RhdGVQYXRoKSB7XHJcbiAgc2V0VmFsdWVzKCBwcmVwYXJlQ2hhbmdlT2JqZWN0KGNoYW5nZS52YWx1ZSksIHN0YXRlUGF0aC5jb25jYXQoYmluZGluZy5uYW1lKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGFjdGlvbiwgYXJncywgYWNjZXNzb3IpIHtcclxuICBjb25zdCBhcnIgPSBhY2Nlc3Nvci52YWx1ZXM7XHJcbiAgY29uc3QgbGlzdFBhdGggPSBhY2Nlc3Nvci5wYXRoO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gYWNjZXNzb3IuY29tcG9uZW50Lmxpc3RJdGVtLm5hbWU7XHJcbiAgY29uc3Qgc3RhcnQgPSBhcmdzLnN0YXJ0O1xyXG4gIGxldCBjaGFuZ2VPYmogPSB7fTtcclxuXHJcbiAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgIGNoYW5nZU9iaiA9IGFkZFRvTGlzdChhcnIsIHN0YXJ0LCBhcmdzLmVscywgbGlzdFBhdGgsIGl0ZW1OYW1lKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyAoYXJncy5udW0gfHwgMSk7XHJcbiAgICAgIGNoYW5nZU9iaiA9IHJlbW92ZUZyb21MaXN0KGFyciwgc3RhcnQsIGVuZCwgYWNjZXNzb3IuY29tcG9uZW50LCBhY2Nlc3Nvcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaChjaGFuZ2VPYmosIChjaGFuZ2UsIGlkeCkgPT4gc2VuZFRvUmVuZGVyUXVldWUobGlzdFBhdGguY29uY2F0KGlkeCwgaXRlbU5hbWUsIExJQl9BVFRSLkZVTExfQ0hBTkdFKSwgY2hhbmdlT2JqW2lkeF1bTElCX0FUVFIuRlVMTF9DSEFOR0VdKSk7XHJcblxyXG4gIGlmIChpc0NvbGxlY3RpbmdDaGFuZ2VzKCkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiBQUk9NSVNFU19SRVNPTFZFUy5wdXNoKHJlcykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFwcGx5Q2hhbmdlcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xpc3QgKGFyciwgc3RhcnQsIGVscywgbGlzdFBhdGgsIGl0ZW1OYW1lKSB7XHJcbiAgZWxzID0gaXNBcnJheShlbHMpID8gZWxzIDogW2Vsc107XHJcblxyXG4gIGVscy5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgYXJyLnNwbGljZShpICsgc3RhcnQsIDAsIG51bGwpO1xyXG4gICAgc2V0VmFsdWVzKHByZXBhcmVDaGFuZ2VPYmplY3QoZWwpLCBsaXN0UGF0aC5jb25jYXQoaSArIHN0YXJ0LCBpdGVtTmFtZSkpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBbc3RhcnRdOiB7IFtMSUJfQVRUUi5GVUxMX0NIQU5HRV06IHsgYWRkOiB7IHN0YXJ0LCBlbmQ6IHN0YXJ0ICsgZWxzLmxlbmd0aCB9IH0gfSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGcm9tTGlzdCAoYXJyLCBzdGFydCwgZW5kLCBsaXN0QmluZGluZywgYWNjZXNzb3IpIHtcclxuICBjb25zdCBjaGFuZ2VPYmogPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcclxuICAgIGNvbnN0IHJlbW92ZWRET01Ob2RlID0gcmVtb3ZlTGlzdEl0ZW0oYXJyLCBpLCBsaXN0QmluZGluZywgYWNjZXNzb3IpO1xyXG4gICAgY2hhbmdlT2JqW2ldID0geyBbTElCX0FUVFIuRlVMTF9DSEFOR0VdOiB7IHJlbW92ZTogcmVtb3ZlZERPTU5vZGUgfSB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hhbmdlT2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVMaXN0SXRlbSAoYXJyLCBpZHgsIGxpc3RCaW5kaW5nLCBhY2Nlc3Nvcikge1xyXG4gIGNvbnN0IHJlbW92ZWROb2RlID0gYXJyLnNwbGljZShpZHgsIDEpWzBdW2xpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWVdO1xyXG4gIGFkZExpZmVDeWNsZUhvb2soJ3JlbW92ZScsIGxpc3RCaW5kaW5nLmxpc3RJdGVtLnN0YXRlW0xJQl9BVFRSLlNFTEZdLCByZW1vdmVkTm9kZSwgYWNjZXNzb3IsIGlkeCk7XHJcbiAgcmV0dXJuIHJlbW92ZWROb2RlW0xJQl9BVFRSLlNFTEZdLmVsO1xyXG59XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuL2dsb2JhbHMvYXR0cmlidXRlcyc7XHJcbmltcG9ydCB7IHRvRGFzaENhc2UsIGhhcyB9IGZyb20gJy4vaGVscGVycy9jb21tb24nO1xyXG5pbXBvcnQgeyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc3BsaXRQaWVjZSB9IGZyb20gJy4vaGVscGVycy9vYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgaXNOdW1iZXIsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi9oZWxwZXJzL2NoZWNrZXJzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQWNjZXNzb3IsXHJcbiAgYWRkTWFya3VwLFxyXG4gIGdldE1hcmt1cCxcclxuICByZW1vdmVNYXJrdXAsXHJcbiAgcmVtb3ZlQ29tcG9uZW50LFxyXG4gIGdldE9ubHlWYWx1ZXMsXHJcbn0gZnJvbSAnLi9TdGF0ZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlcGxhY2VOb2RlcyxcclxuICByZW1vdmVOb2RlLFxyXG4gIHJld3JpdGVUb05vZGUsXHJcbiAgZW1wdHlOb2RlLFxyXG59IGZyb20gJy4vaGVscGVycy9kb20nO1xyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVBbmRBcHBlbmRTdHlsZXMsXHJcbiAgcmVuZGVyQ2hhbmdlc1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyID0ge1xyXG4gIGh0bWw6IGFwcGx5TWFya3VwLFxyXG4gIGNsYXNzOiBhcHBseUNsYXNzZXMsXHJcbiAgc3R5bGU6IGFwcGx5U3R5bGVzLFxyXG4gIGF0dHJzOiBhcHBseUF0dHJpYnV0ZXMsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNoYW5nZXMgKGNoYW5nZXMpIHtcclxuICBmb3JFYWNoKGNoYW5nZXMsIChjb21wb25lbnRDaGFuZ2VzLCBlbGVtZW50SWQpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudElkID0gT2JqZWN0LmtleXMoY29tcG9uZW50Q2hhbmdlcylbMF1cclxuICAgIGNvbnN0IGNvbXBvbmVudEFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3IoW2VsZW1lbnRJZCwgY29tcG9uZW50SWRdKTtcclxuICAgIGFwcGx5TWFya3VwKGNvbXBvbmVudEFjY2Vzc29yLmNvbXBvbmVudCwgY29tcG9uZW50QWNjZXNzb3IudmFsdWVzLCBbZWxlbWVudElkLCBjb21wb25lbnRJZF0sIGNvbXBvbmVudENoYW5nZXNbY29tcG9uZW50SWRdKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlNYXJrdXAgKGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmICghY29tcG9uZW50Lm1hcmt1cCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXBvbmVudC5pc0xpc3QpIHtcclxuICAgIHJldHVybiByZW5kZXJMaXN0KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29tcG9uZW50LmlzQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZSA9IGlzVW5kZWZpbmVkKHZhbHVlKSA/ICcnIDogdmFsdWU7XHJcblxyXG4gIGlmIChjb21wb25lbnQubWFya3VwLnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcclxuICAgIGNvbXBvbmVudC5tYXJrdXAudmFsdWUgPSB2YWx1ZTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJld3JpdGVUb05vZGUoY29tcG9uZW50Lm1hcmt1cCwgdmFsdWUpO1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQgKGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcykge1xyXG4gIGlmIChjaGFuZ2VzKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlQ29tcG9uZW50KGNvbXBvbmVudCwgdmFsdWUsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHJhd0NvbXBvbmVudCh2YWx1ZSwgc3RhdGVQYXRoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NvbXBvbmVudCAodmFsdWVzLCBzdGF0ZVBhdGgpIHtcclxuICBjb25zdCBhY2Nlc3NvciA9IGNyZWF0ZUFjY2Vzc29yKHN0YXRlUGF0aCk7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gYWNjZXNzb3IuY29tcG9uZW50O1xyXG5cclxuICBjb25zdCBpdGVtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGl0ZW1NYXJrdXAgPSBjb21wb25lbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIHZhbHVlc1tMSUJfQVRUUi5TRUxGXS5lbCA9IGl0ZW1NYXJrdXA7XHJcbiAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU1hcmt1cCk7XHJcblxyXG4gIGl0ZW1NYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCAoY29tcG9uZW50LmlzTGlzdEl0ZW0pID8gTElCX0FUVFIuSVRFTSA6IExJQl9BVFRSLkNPTVBPTkVOVCk7XHJcblxyXG4gIGZvckVhY2gocmVuZGVyLCAocmVuZGVyRnVuYywgcmVuZGVyVHlwZSkgPT4ge1xyXG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZVtMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSkge1xyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBpdGVtTWFya3VwIH0sIHZhbHVlc1tMSUJfQVRUUi5TRUxGXVtyZW5kZXJUeXBlXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGZvckVhY2goY29tcG9uZW50LnN0YXRlLCAoYmluZGluZywgYmluZGluZ05hbWUpID0+IHtcclxuICAgIGlmICghYmluZGluZy5tYXJrdXApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJpbmRpbmdOb2RlID0gaXRlbVdyYXBwZXIucXVlcnlTZWxlY3RvcignLicgKyBMSUJfQVRUUi5QUkVGSVggKyBiaW5kaW5nLmlkKTtcclxuICAgIGJpbmRpbmdOb2RlLmNsYXNzTGlzdC5yZW1vdmUoTElCX0FUVFIuUFJFRklYICsgYmluZGluZy5pZCk7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNDb21wb25lbnQpIHtcclxuICAgICAgY29uc3QgY2hpbGRTdGF0ZVBhdGggPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuICAgICAgY29uc3QgY2hpbGRNYXJrdXAgPSBkcmF3Q29tcG9uZW50KHZhbHVlc1tiaW5kaW5nTmFtZV0sIGNoaWxkU3RhdGVQYXRoKTtcclxuICAgICAgcmVwbGFjZU5vZGVzKGJpbmRpbmdOb2RlLCBjaGlsZE1hcmt1cCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YWx1ZXNbYmluZGluZ05hbWVdLmVsID0gYmluZGluZ05vZGU7XHJcblxyXG4gICAgaWYgKGJpbmRpbmcuaXNMaXN0KSB7XHJcbiAgICAgIHJlbmRlckxpc3QoYmluZGluZywgdmFsdWVzW2JpbmRpbmdOYW1lXSwgc3RhdGVQYXRoLmNvbmNhdChiaW5kaW5nTmFtZSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yRWFjaChyZW5kZXIsIChyZW5kZXJGdW5jLCByZW5kZXJUeXBlKSA9PiB7XHJcbiAgICAgIGlmIChyZW5kZXJUeXBlID09PSAnaHRtbCcgJiYgYmluZGluZy5odG1sID09PSBudWxsIHx8IGJpbmRpbmcubWFya3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJGdW5jKHsgbWFya3VwOiBiaW5kaW5nTm9kZSB9LCB2YWx1ZXNbYmluZGluZ05hbWVdW3JlbmRlclR5cGVdLCBzdGF0ZVBhdGgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBpdGVtV3JhcHBlci5jaGlsZHJlblswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29tcG9uZW50IChjb21wb25lbnQsIHZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgY29uc3QgaXRlbUFjY2Vzc29yID0gY3JlYXRlQWNjZXNzb3Ioc3RhdGVQYXRoKTtcclxuICBjb25zdCBjb21wb25lbnRNYXJrdXAgPSB2YWx1ZXNbTElCX0FUVFIuU0VMRl0uZWw7XHJcblxyXG4gIGZvckVhY2goY2hhbmdlcywgKGNoYW5nZSwgYmluZGluZ05hbWUpID0+IHtcclxuXHJcbiAgICBpZiAoYmluZGluZ05hbWUgPT09IExJQl9BVFRSLlNFTEYpIHtcclxuXHJcbiAgICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBjb21wb25lbnRNYXJrdXAgfSwgdmFsdWVzW0xJQl9BVFRSLlNFTEZdW2NoYW5nZVR5cGVdKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmluZGluZyA9IGNvbXBvbmVudC5zdGF0ZVtiaW5kaW5nTmFtZV07XHJcbiAgICBjb25zdCBzdGF0ZVBhdGhUb0JpbmRpbmcgPSBzdGF0ZVBhdGguY29uY2F0KGJpbmRpbmdOYW1lKTtcclxuXHJcbiAgICBpZiAoYmluZGluZy5pc0NvbXBvbmVudCB8fCBiaW5kaW5nLmlzTGlzdCkge1xyXG4gICAgICBhcHBseU1hcmt1cChiaW5kaW5nLCB2YWx1ZXNbYmluZGluZ05hbWVdLCBzdGF0ZVBhdGhUb0JpbmRpbmcsIGNoYW5nZXNbYmluZGluZ05hbWVdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsID0gdmFsdWVzW2JpbmRpbmdOYW1lXS5lbFxyXG5cclxuICAgIGZvciAobGV0IGNoYW5nZVR5cGUgaW4gY2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVzW2JpbmRpbmdOYW1lXVtjaGFuZ2VUeXBlXTtcclxuICAgICAgcmVuZGVyW2NoYW5nZVR5cGVdKHsgbWFya3VwOiBlbCB9LCBuZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckxpc3QgKGxpc3RDb21wb25lbnQsIGl0ZW1zVmFsdWVzLCBzdGF0ZVBhdGgsIGNoYW5nZXMpIHtcclxuICBpZiAoY2hhbmdlcykge1xyXG4gICAgcmV0dXJuIHVwZGF0ZUxpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaXN0RnJhZ21lbnQgPSBidWlsZExpc3QobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCk7XHJcblxyXG4gIGNvbnN0IGxpc3ROb2RlID0gaXRlbXNWYWx1ZXMuZWw7XHJcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGxpc3ROb2RlLnBhcmVudE5vZGU7XHJcbiAgY29uc3QgbmV4dE5vZGUgPSBsaXN0Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgcmVtb3ZlTm9kZShsaXN0Tm9kZSk7XHJcblxyXG4gIGNvbnN0IGlzQ29tcG9uZW50ID0gbGlzdE5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFKTtcclxuICBsaXN0Tm9kZS5zZXRBdHRyaWJ1dGUoTElCX0FUVFIuQ09NUE9ORU5UX1RZUEUsIExJQl9BVFRSLkxJU1QpO1xyXG4gIGlmIChpc0NvbXBvbmVudCkge1xyXG4gICAgbGlzdE5vZGUuc2V0QXR0cmlidXRlKExJQl9BVFRSLkNPTVBPTkVOVF9UWVBFLCBMSUJfQVRUUi5DT01QT05FTlRfTElTVCk7XHJcbiAgfVxyXG5cclxuICBlbXB0eU5vZGUobGlzdE5vZGUpO1xyXG4gIGxpc3ROb2RlLmFwcGVuZENoaWxkKGxpc3RGcmFnbWVudCk7XHJcblxyXG4gIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3ROb2RlLCBuZXh0Tm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTGlzdCAobGlzdENvbXBvbmVudCwgaXRlbXNWYWx1ZXMsIHN0YXRlUGF0aCwgcmFuZ2UpIHtcclxuICBjb25zdCBzdGFydCA9IHJhbmdlID8gcmFuZ2Uuc3RhcnQgOiAwO1xyXG4gIGNvbnN0IGVuZCA9IHJhbmdlID8gcmFuZ2UuZW5kIDogKGl0ZW1zVmFsdWVzLmxlbmd0aCArIDEpO1xyXG5cclxuICBjb25zdCBsaXN0RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgaXRlbXNWYWx1ZXNcclxuICAgIC5zbGljZShzdGFydCwgZW5kKVxyXG4gICAgLmZvckVhY2goKGl0ZW1WYWx1ZSwgaXRlbUluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld0l0ZW1JbmRleCA9ICtzdGFydCArIGl0ZW1JbmRleDtcclxuICAgICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gc3RhdGVQYXRoLmNvbmNhdChbbmV3SXRlbUluZGV4LCBsaXN0Q29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdKTtcclxuICAgICAgY29uc3QgbGlzdEl0ZW1NYXJrdXAgPSBkcmF3Q29tcG9uZW50KGl0ZW1WYWx1ZVtsaXN0Q29tcG9uZW50Lmxpc3RJdGVtLm5hbWVdLCBzdGF0ZVBhdGhUb0l0ZW0pO1xyXG5cclxuICAgICAgbGlzdEl0ZW1NYXJrdXAuc2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgsIG5ld0l0ZW1JbmRleCk7XHJcblxyXG4gICAgICBsaXN0RnJhZ21lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1NYXJrdXApO1xyXG4gICAgfSk7XHJcblxyXG4gIHJldHVybiBsaXN0RnJhZ21lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpc3QgKGxpc3RCaW5kaW5nLCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCBjaGFuZ2VzKSB7XHJcbiAgY29uc3QgbGlzdE5vZGUgPSBpdGVtc1ZhbHVlcy5lbDtcclxuICBjb25zdCBpdGVtTmFtZSA9IGxpc3RCaW5kaW5nLmxpc3RJdGVtLm5hbWU7XHJcbiAgY29uc3QgaXRlbXNDaGFuZ2VzID0gc3BsaXRQaWVjZShjaGFuZ2VzLCAodiwgaykgPT4gaXNOdW1iZXIoK2spKTtcclxuICBsZXQgcmVtb3ZlZENvdW50ID0gMDtcclxuICBsZXQgZW5kID0gMDtcclxuXHJcbiAgZm9yIChsZXQgY2hhbmdlVHlwZSBpbiBjaGFuZ2VzKSB7XHJcbiAgICByZW5kZXJbY2hhbmdlVHlwZV0oeyBtYXJrdXA6IGxpc3ROb2RlIH0sIGl0ZW1zVmFsdWVzW2NoYW5nZVR5cGVdKTtcclxuICB9XHJcblxyXG4gIGZvckVhY2goaXRlbXNDaGFuZ2VzLCAoY2hhbmdlLCBpKSA9PiB7XHJcbiAgICBjaGFuZ2UgPSBjaGFuZ2VbaXRlbU5hbWVdO1xyXG4gICAgY29uc3Qgc3RhdGVQYXRoVG9JdGVtID0gc3RhdGVQYXRoLmNvbmNhdChpLCBpdGVtTmFtZSk7XHJcbiAgICBjb25zdCBpdGVtQWNjZXNzb3IgPSBjcmVhdGVBY2Nlc3NvcihzdGF0ZVBhdGhUb0l0ZW0pO1xyXG5cclxuICAgIGlmICghY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXSkge1xyXG4gICAgICB1cGRhdGVDb21wb25lbnQoaXRlbUFjY2Vzc29yLmNvbXBvbmVudCwgaXRlbXNWYWx1ZXNbaV1baXRlbU5hbWVdLCBzdGF0ZVBhdGhUb0l0ZW0sIGNoYW5nZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQgJiYgaSA+PSBlbmQpIHtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLmFkZC5zdGFydDtcclxuICAgICAgZW5kID0gY2hhbmdlW0xJQl9BVFRSLkZVTExfQ0hBTkdFXS5hZGQuZW5kO1xyXG5cclxuICAgICAgZml4SW5kZXhlcyhsaXN0Tm9kZSwgc3RhcnQsIGVuZCAtIHN0YXJ0KTtcclxuICAgICAgY29uc3QgbGlzdEZyYWdtZW50ID0gYnVpbGRMaXN0KGxpc3RCaW5kaW5nLCBpdGVtc1ZhbHVlcywgc3RhdGVQYXRoLCB7IHN0YXJ0LCBlbmQgfSk7XHJcblxyXG4gICAgICBpZiAoZW5kID09PSBpdGVtc1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBsaXN0Tm9kZS5hcHBlbmRDaGlsZChsaXN0RnJhZ21lbnQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdE5vZGUuaW5zZXJ0QmVmb3JlKGxpc3RGcmFnbWVudCwgbGlzdE5vZGUuY2hpbGRyZW5bc3RhcnRdKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VbTElCX0FUVFIuRlVMTF9DSEFOR0VdLnJlbW92ZSkge1xyXG4gICAgICByZW1vdmVOb2RlKGNoYW5nZVtMSUJfQVRUUi5GVUxMX0NIQU5HRV0ucmVtb3ZlKTtcclxuICAgICAgZml4SW5kZXhlcyhsaXN0Tm9kZSwgaSAtIHJlbW92ZWRDb3VudCsrLCAtMSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeEluZGV4ZXMgKGxpc3ROb2RlLCBzdGFydCwgZGlmZikge1xyXG4gIGNvbnN0IGl0ZW1zTm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0Tm9kZS5jaGlsZHJlbiwgc3RhcnQpO1xyXG5cclxuICBpdGVtc05vZGVzLmZvckVhY2goKGl0ZW1Ob2RlKSA9PiB7XHJcbiAgICBjb25zdCBwcmV2SWR4ID0gaXRlbU5vZGUuZ2V0QXR0cmlidXRlKExJQl9BVFRSLklURU1fSU5ERVgpO1xyXG4gICAgY29uc3QgbmV3SWR4ID0gK3ByZXZJZHggKyBkaWZmO1xyXG5cclxuICAgIGl0ZW1Ob2RlLnNldEF0dHJpYnV0ZShMSUJfQVRUUi5JVEVNX0lOREVYLCBuZXdJZHgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUF0dHJpYnV0ZXMgKGJpbmRpbmcsIGF0dHJpYnV0ZXMpIHtcclxuICBPYmplY3QuYXNzaWduKGJpbmRpbmcubWFya3VwLCBhdHRyaWJ1dGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlDbGFzc2VzIChiaW5kaW5nLCBjbGFzc2VzKSB7XHJcbiAgZm9yIChsZXQgY2xhc3NOYW1lIGluIGNsYXNzZXMpIHtcclxuICAgIGlmIChjbGFzc05hbWUpIHtcclxuICAgICAgaWYgKGNsYXNzZXNbY2xhc3NOYW1lXSkge1xyXG4gICAgICAgIGJpbmRpbmcubWFya3VwLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBiaW5kaW5nLm1hcmt1cC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5U3R5bGVzIChiaW5kaW5nLCBzdHlsZXMpIHtcclxuICBPYmplY3QuYXNzaWduKCBiaW5kaW5nLm1hcmt1cC5zdHlsZSwgbm9ybWFsaXplU3R5bGVzKHN0eWxlcykgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kU3R5bGVzIChzdHlsZU9iaikge1xyXG4gIGxldCBzdHlsZVN0ciA9ICcnO1xyXG4gIGZvciAobGV0IHNlbGVjdG9yIGluIHN0eWxlT2JqKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZU9ialtzZWxlY3Rvcl07XHJcbiAgICBzdHlsZVN0ciArPSBzZWxlY3RvciArICd7JztcclxuICAgIG5vcm1hbGl6ZVN0eWxlcyhzdHlsZXMpXHJcbiAgICBmb3IgKGxldCBhdHRyIGluIHN0eWxlcykge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlc1thdHRyXTtcclxuICAgICAgc3R5bGVTdHIgKz0gdG9EYXNoQ2FzZShhdHRyKSArICc6JyArIHZhbHVlICsgJzsnO1xyXG4gICAgfVxyXG4gICAgc3R5bGVTdHIgKz0gJ31cXG4nO1xyXG4gIH1cclxuICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZUVsLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHlsZVN0cikgKTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlRWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZXMgKHN0eWxlcykge1xyXG4gIGZvciAobGV0IGF0dHIgaW4gc3R5bGVzKSB7XHJcbiAgICBpZiAoaXNOdW1iZXIoc3R5bGVzW2F0dHJdKSkge1xyXG4gICAgICBzdHlsZXNbYXR0cl0gPSBzdHlsZXNbYXR0cl0gKyAncHgnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc3R5bGVzO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmRpbmdOb3RFeGlzdHNFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAoYmluZGluZ05hbWUsIGNvbXBvbmVudE5hbWUsIHBhdGgpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlVuYWJsZSB0byBhY2Nlc3MgJ1wiICsgYmluZGluZ05hbWUgKyBcIicgYmluZGluZyBvbiAnXCIgKyBjb21wb25lbnROYW1lICsgXCInIGNvbXBvbmVudCBvbiBwYXRoIChcIiArIHBhdGguam9pbignIC0+ICcpICsgXCIpIGJlY2F1c2UgaXQgZG9lc24ndCBleGlzdC5cIlxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnROb3RFeGlzdHNFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVHJ5aW5nIHRvIHJldHJpZXZlIGNvbXBvbmVudCBieSBuYW1lICdcIiArIG5hbWUgKyBcIicgdGhhdCBkb2Vzbid0IGV4aXN0LlwiXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudFJlZGVmaW5lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byByZWRlZmluZSBleGlzdGluZyBjb21wb25lbnQ6ICdcIiArIG5hbWUgKyBcIidcIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcGVOYW1lQ29sbGlzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlRyeWluZyB0byBhc3NpZ24gYSBuYW1lICdcIiArIG5hbWUgKyBcIicgdG8gYSBzdGF0ZSB0aGF0IGFscmVhZHkgZXhpc3RzIGluIHRoZSBjaGFpbi5cIjtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVBY2Nlc3NFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvciAocGF0aCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IFwiVW5hYmxlIHRvIGFjY2VzcyBzdGF0ZSBvbiBhIHBhdGggJ1wiICsgcGF0aC5qb2luKCcgLT4gJykgKyAgXCInIGJlY2F1c2UgaXQgZG9lc24ndCBleGlzdFwiXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vaGVscGVycy9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZUxvb2t1cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yIChsZXZlbCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICBsZXQgYWRkaXRpb25hbEluZm87XHJcbiAgICBpZiAoaXNOdW1iZXIobGV2ZWwpKSB7XHJcbiAgICAgIGFkZGl0aW9uYWxJbmZvID0gbGV2ZWwgKyBcIiBleGNlZWRzIG51bWJlciBvZiBzdGF0ZXMgaW4gdGhlIGNoYWluLlwiIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkaXRpb25hbEluZm8gPSBcIidcIiArIGxldmVsICsgXCInIHVzZXIgc3RhdGVuYW1lIGRvZXNuJ3QgZXhpc3QuXCJcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBcIlVuYWJsZSB0byByZWFjaCB0byB0aGUgJ1wiICsgbGV2ZWwgKyBcIicgc3RhdGUgbGV2ZWwuIFwiICsgYWRkaXRpb25hbEluZm87XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IExJQl9OQU1FID0gJ3gnO1xyXG5jb25zdCBBVFRSX1BSRUZJWCA9ICdkYXRhLSc7XHJcbmNvbnN0IFBSRUZJWCA9IExJQl9OQU1FICsgJy0nO1xyXG5jb25zdCBURU1QTEFURV9CSU5ESU5HID0gUFJFRklYICsgJ2InO1xyXG5jb25zdCBURU1QTEFURV9MSVNUX0JJTkRJTkcgPSBQUkVGSVggKyAnbGInO1xyXG5jb25zdCBCSU5ESU5HX0lEID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAnaWQnO1xyXG5jb25zdCBTVEFURV9QQVRIID0gUFJFRklYICsgJ3NwYXRoJztcclxuY29uc3QgVEVNUExBVEVfUExBQ0VNRU5UID0gUFJFRklYICsgJ2VsJztcclxuY29uc3QgU1RBVEVfTkFNRSA9IFBSRUZJWCArICdzdGF0ZS1uYW1lJztcclxuY29uc3QgU0NPUEVfUFJFRklYID0gJ3MnO1xyXG5jb25zdCBJVEVNX0lOREVYID0gQVRUUl9QUkVGSVggKyBQUkVGSVggKyAnZHgnO1xyXG5jb25zdCBDT01QT05FTlRfVFlQRSA9IEFUVFJfUFJFRklYICsgUFJFRklYICsgJ3RwJztcclxuY29uc3QgSVRFTV9TVUZGSVggPSAnaSc7XHJcbmNvbnN0IFNUQVRFX0RFTElNSVRFUiA9ICctJztcclxuY29uc3QgU0VMRiA9ICcnO1xyXG5jb25zdCBGVUxMX0NIQU5HRSA9ICcgX2Z1bGxfY2hhbmdlXyAnO1xyXG5cclxuY29uc3QgQkFTRSA9ICcxJztcclxuY29uc3QgQ09NUE9ORU5UID0gJzInO1xyXG5jb25zdCBMSVNUID0gJzMnO1xyXG5jb25zdCBJVEVNID0gJ19pdGVtXyc7XHJcbmNvbnN0IENPTVBPTkVOVF9MSVNUID0gJzUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFBSRUZJWCxcclxuICBURU1QTEFURV9CSU5ESU5HLFxyXG4gIFRFTVBMQVRFX0xJU1RfQklORElORyxcclxuICBCSU5ESU5HX0lELFxyXG4gIFNUQVRFX1BBVEgsXHJcbiAgVEVNUExBVEVfUExBQ0VNRU5ULFxyXG4gIFNUQVRFX05BTUUsXHJcbiAgU0NPUEVfUFJFRklYLFxyXG4gIElURU1fSU5ERVgsXHJcbiAgQ09NUE9ORU5UX1RZUEUsXHJcbiAgSVRFTV9TVUZGSVgsXHJcbiAgU1RBVEVfREVMSU1JVEVSLFxyXG4gIEJBU0UsXHJcbiAgQ09NUE9ORU5ULFxyXG4gIExJU1QsXHJcbiAgSVRFTSxcclxuICBTRUxGLFxyXG4gIEZVTExfQ0hBTkdFLFxyXG4gIENPTVBPTkVOVF9MSVNUXHJcbn07XHJcbiIsImNvbnN0IFNUUklQX0NPTU1FTlRTID0gLyhcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKXwoXFxzKj1bXixcXCldKigoJyg/OlxcXFwnfFteJ1xcclxcbl0pKicpfChcIig/OlxcXFxcInxbXlwiXFxyXFxuXSkqXCIpKXwoXFxzKj1bXixcXCldKikpL21nO1xyXG5jb25zdCBBUkdVTUVOVF9OQU1FUyA9IC8oW15cXHMsXSspL2c7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgU1RSSVBfQ09NTUVOVFMsXHJcbiAgQVJHVU1FTlRfTkFNRVMsXHJcbn07XHJcbiIsImV4cG9ydCB7XHJcbiAgaXNGdW5jdGlvbixcclxuICBpc0FycmF5LFxyXG4gIGlzT2JqZWN0LFxyXG4gIGlzT2JqZWN0SW5CcmFja2V0cyxcclxuICBpc09iamVjdEluRG91YmxlQnJhY2tldHMsXHJcbiAgaXNTdHJpbmcsXHJcbiAgaXNIVE1MU3RyaW5nLFxyXG4gIGlzTnVtYmVyLFxyXG4gIGlzRE9NRWxlbWVudCxcclxuICBpc1VuZGVmaW5lZCxcclxuICBpc0VtcHR5LFxyXG4gIGlzTGluayxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkgKG9iaikge1xyXG4gIHJldHVybiBnZXRPYmplY3RUeXBlKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3RJbkJyYWNrZXRzIChvYmopIHtcclxuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3Qob2JqWzBdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3RJbkRvdWJsZUJyYWNrZXRzIChvYmopIHtcclxuICByZXR1cm4gaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgJiYgaXNPYmplY3RJbkJyYWNrZXRzKG9ialswXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHtcclxuICByZXR1cm4gZ2V0T2JqZWN0VHlwZShvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNIVE1MU3RyaW5nIChvYmopIHtcclxuICByZXR1cm4gaXNTdHJpbmcob2JqKSAmJiBvYmouaW5kZXhPZignPCcpID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7XHJcbiAgcmV0dXJuIGdldE9iamVjdFR5cGUob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgb2JqID09PSBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRE9NRWxlbWVudCAob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCAob2JqKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPYmplY3RUeXBlIChvYmopIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTGluayAob2JqKSB7XHJcbiAgY29uc3Qgc2xhc2hJZHggPSBvYmouaW5kZXhPZignLycpO1xyXG4gIHJldHVybiBbMCwgMSwgMl0uc29tZSgoaWR4KSA9PiBpZHggPT09IHNsYXNoSWR4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eSAob2JqKSB7XHJcbiAgaWYgKCFvYmopIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQXJyYXkob2JqKSB8fCBpc1N0cmluZyhvYmopKSB7XHJcbiAgICByZXR1cm4gIW9iai5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gIU9iamVjdC5rZXlzKG9iaikubGVuZ3RoO1xyXG59XHJcbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi9jaGVja2Vycyc7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vb2JqZWN0JztcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGFzLFxyXG4gIGdldEZhbHNlUGF0aHMsXHJcbiAgdG9EYXNoQ2FzZSxcclxuICB0b0NhbWVsQ2FzZSxcclxuICBnZXRTaG9ydE5hbWUsXHJcbiAgZ2V0UmVhbE5hbWUsXHJcbn07XHJcblxyXG5jb25zdCBOQU1FUyA9IHtcclxuICByZWFsOiB7fSxcclxuICBzaG9ydDogW11cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFNob3J0TmFtZSAobmFtZSkge1xyXG4gIGlmIChOQU1FUy5yZWFsW25hbWVdKSB7XHJcbiAgICByZXR1cm4gTkFNRVMucmVhbFtuYW1lXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3J0TmFtZSA9IE5BTUVTLnNob3J0LnB1c2gobmFtZSk7XHJcbiAgcmV0dXJuIE5BTUVTLnJlYWxbbmFtZV0gPSBzaG9ydE5hbWUgLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFsTmFtZSAobnVtKSB7XHJcbiAgcmV0dXJuIE5BTUVTLnNob3J0W251bV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhcyAob2JqLCBlbCkge1xyXG4gIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcclxuICAgIHJldHVybiBoYXMoa2V5cywgZWwpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iai5pbmRleE9mKGVsKSA+PSAwO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRocyAob2JqKSB7XHJcbiAgY29uc3Qgb25seUZhbHNlUGF0aHMgPSB7fTtcclxuICBnZXRGYWxzZVBhdGgob2JqLCBvbmx5RmFsc2VQYXRocywgW10pO1xyXG4gIHJldHVybiBvbmx5RmFsc2VQYXRocztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmFsc2VQYXRoIChvYmosIG9ubHlGYWxzZVBhdGhzLCBwYXRoKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgaWYgKGlzT2JqZWN0KG9ialtrZXldKSkge1xyXG4gICAgICBnZXRGYWxzZVBhdGgob2JqW2tleV0sIG9ubHlGYWxzZVBhdGhzLCBwYXRoLmNvbmNhdChrZXkpKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9ialtrZXldICE9PSB0cnVlKSB7XHJcbiAgICAgIHNldChvbmx5RmFsc2VQYXRocywgcGF0aC5jb25jYXQoa2V5KSwgb2JqW2tleV0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9EYXNoQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCkgPT4gJy0nICsgbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ2FtZWxDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLSguKS9nLCAobWF0Y2gpID0+IG1hdGNoWzFdLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgaXNVbmRlZmluZWQsXHJcbiAgaXNBcnJheSxcclxuICBpc0RPTUVsZW1lbnQsXHJcbiAgaXNPYmplY3QsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xyXG5cclxuZnVuY3Rpb24gY29weSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGlmICghZGVzdGluYXRpb24pIHtcclxuICAgIHJldHVybiBjb3B5ICh7fSwgc291cmNlKTtcclxuICB9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuXHJcbiAgICBpZiAoaXNVbmRlZmluZWQoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvcHkoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgaWYgKCFkZXN0aW5hdGlvbltrZXldKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltrZXldLCBzb3VyY2Vba2V5XSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0RPTUVsZW1lbnQoc291cmNlW2tleV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3RpbmF0aW9uW2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkZXN0aW5hdGlvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNvcHlBcnJheSAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaXNPYmplY3Qoc291cmNlW2ldKSkge1xyXG4gICAgICBkZXN0aW5hdGlvbltpXSA9IGRlc3RpbmF0aW9uW2ldIHx8IHt9O1xyXG4gICAgICBjb3B5KGRlc3RpbmF0aW9uW2ldLCBzb3VyY2VbaV0pO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShzb3VyY2VbaV0pKSB7XHJcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVzdGluYXRpb25baV0gfHwgW107XHJcbiAgICAgIGNvcHlBcnJheShkZXN0aW5hdGlvbltpXSwgc291cmNlW2ldKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdGluYXRpb25baV0gPSBzb3VyY2VbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGVzdGluYXRpb247XHJcbn07XHJcbiIsImltcG9ydCBMSUJfQVRUUiBmcm9tICcuLi9nbG9iYWxzL2F0dHJpYnV0ZXMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzSFRNTFN0cmluZyxcclxuICBpc0RPTUVsZW1lbnQsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5pbXBvcnQgQ29tcG9uZW50Tm90RXhpc3RzRXJyb3IgZnJvbSAnLi4vZXJyb3JzL0NvbXBvbmVudE5vdEV4aXN0c0Vycm9yJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSB7fTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgcmVwbGFjZU5vZGVzLFxyXG4gIGNsb25lSFRNTE1hcmt1cCxcclxuICBjb2xsZWN0SFRNTE5vZGVzLFxyXG4gIHdhbGtOb2RlcyxcclxuICByZW1vdmVOb2RlLFxyXG4gIGluc2VydEJlZm9yZU5vZGUsXHJcbiAgcmV3cml0ZVRvTm9kZSxcclxuICBlbXB0eU5vZGUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZXMgKG9yaWdpbmFsLCByZXBsYWNlbWVudCkge1xyXG4gIG9yaWdpbmFsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBvcmlnaW5hbCk7XHJcbiAgcmV0dXJuIHJlcGxhY2VtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmVOb2RlIChlbCwgbmV4dEVsKSB7XHJcbiAgbmV4dEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCBuZXh0RWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9uZUhUTUxNYXJrdXAgKG1hcmt1cCkge1xyXG4gIGNvbnN0IG1hcmt1cFN0ciA9IGlzSFRNTFN0cmluZyhtYXJrdXAudHJpbSgpKSA/IG1hcmt1cCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWFya3VwKS5pbm5lckhUTUw7XHJcbiAgcmV0dXJuIGNvbnZlcnRTdHJpbmdUb0hUTUwobWFya3VwU3RyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFN0cmluZ1RvSFRNTCAobWFya3VwU3RyaW5nKSB7XHJcbiAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gIGNvbnN0IHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhtYXJrdXBTdHJpbmcsICd0ZXh0L2h0bWwnKTtcclxuICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcclxufVxyXG5cclxuZnVuY3Rpb24gd2Fsa05vZGVzIChub2RlLCBjYikge1xyXG4gIGlmICggY2Iobm9kZSkgPT09IC0xKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBBcnJheS5wcm90b3R5cGVcclxuICAgIC5zbGljZVxyXG4gICAgLmNhbGwobm9kZS5jaGlsZHJlbilcclxuICAgIC5mb3JFYWNoKChlbCkgPT4gd2Fsa05vZGVzKGVsLCBjYikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0SFRNTE5vZGVzIChyb290LCBpc1dhbnRlZCkge1xyXG4gIGNvbnN0IG5vZGVzID0gW107XHJcbiAgd2Fsa05vZGVzKHJvb3QsIChlbCkgPT4gaXNXYW50ZWQoZWwpID8gbm9kZXMucHVzaChlbCkgOiAnJyk7XHJcbiAgcmV0dXJuIG5vZGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlIChub2RlKSB7XHJcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXdyaXRlVG9Ob2RlIChub2RlLCB0ZXh0KSB7XHJcbiAgZW1wdHlOb2RlKG5vZGUpO1xyXG4gIHdyaXRlVG9Ob2RlKG5vZGUsIHRleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZVRvTm9kZSAobm9kZSwgdGV4dCkge1xyXG4gIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XHJcbiAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVtcHR5Tm9kZSAobm9kZSkge1xyXG4gIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNPYmplY3QsXHJcbiAgaXNVbmRlZmluZWQsXHJcbn0gZnJvbSAnLi9jaGVja2Vycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcmVFcXVhbDtcclxuXHJcbmZ1bmN0aW9uIGFyZUVxdWFsIChmaXJzdCwgc2Vjb25kKSB7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGZpcnN0KSB8fCBpc1VuZGVmaW5lZChzZWNvbmQpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGZpcnN0ICE9PSB0eXBlb2Ygc2Vjb25kKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnROb2RlID0geyBjaGlsZE5vZGU6IHt9IH07XHJcblxyXG4gIGlmIChpc0FycmF5KHNlY29uZCkpIHtcclxuICAgIGNoZWNrS2V5c0VxdWFsaXR5KFxyXG4gICAgICBmaXJzdCA/IGZpcnN0Lm1hcChlbCA9PiBlbCkgOiBbXSxcclxuICAgICAgc2Vjb25kLm1hcChlbCA9PiBlbCksXHJcbiAgICAgIHBhcmVudE5vZGVcclxuICAgICk7XHJcblxyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qoc2Vjb25kKSkge1xyXG4gICAgY2hlY2tLZXlzRXF1YWxpdHkoZmlyc3QsIHNlY29uZCwgcGFyZW50Tm9kZSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyZW50Tm9kZS5jaGlsZE5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0VxdWFsaXR5IChmaXJzdCwgc2Vjb25kLCBwYXJlbnROb2RlKSB7XHJcbiAgZm9yIChsZXQga2V5IGluIHNlY29uZCkge1xyXG5cclxuICAgIGlmIChpc0FycmF5KGZpcnN0KSkge1xyXG4gICAgICBpZiAoaXNVbmRlZmluZWQoZmlyc3Rba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyBhZGQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGZpcnN0KSB7XHJcblxyXG4gICAgaWYgKGlzQXJyYXkoZmlyc3QpKSB7XHJcbiAgICAgIGlmIChpc1VuZGVmaW5lZChzZWNvbmRba2V5XSkpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmNoaWxkTm9kZVtrZXldID0geyByZW1vdmU6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlyc3Rba2V5XSAhPT0gc2Vjb25kW2tleV0pIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZE5vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcmVudE5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBpc09iamVjdCxcclxuICBpc0Z1bmN0aW9uLFxyXG59IGZyb20gJy4vY2hlY2tlcnMnO1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXQsXHJcbiAgc2V0LFxyXG4gIHJlbW92ZSxcclxuICBhZGRDb25zdEZpZWxkcyxcclxuICBmb3JFYWNoLFxyXG4gIG1hcCxcclxuICBtYXBLZXlzLFxyXG4gIGZpbHRlcixcclxuICB0b09iamVjdCxcclxuICBmdWxsTWFwLFxyXG4gIHNwbGl0UGllY2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXQgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQgKG9iaiwgcGF0aCwgdmFsdWUpIHtcclxuICBpZiAoIXBhdGgubGVuZ3RoKSB7XHJcbiAgICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG9iaiwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iaiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbGV0IGRlc3QgPSBvYmo7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgaWYgKCFkZXN0WyBwYXRoW2ldIF0pIHtcclxuICAgICAgZGVzdCA9IGRlc3RbcGF0aFtpXV0gPSB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlc3QgPSBkZXN0W3BhdGhbaV1dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gZGVzdFsgcGF0aFtpXSBdIHx8IHt9O1xyXG4gICAgT2JqZWN0LmFzc2lnbihkZXN0WyBwYXRoW2ldIF0sIHZhbHVlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGVzdFsgcGF0aFtpXSBdID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUgKG9iaiwgcGF0aCkge1xyXG4gIGxldCB2YWx1ZSA9IG9iajtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICB2YWx1ZSA9IHZhbHVlW3BhdGhbaV1dO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlIHZhbHVlW3BhdGhbaV1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb25zdEZpZWxkcyAob2JqLCBmaWVsZHMpIHtcclxuICBmb3IgKGxldCBmaWVsZCBpbiBmaWVsZHMpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkLCB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmllbGRzW2ZpZWxkXSB9LFxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICgpIHsgdGhyb3cgbmV3IEVycm9yKFwiVHJ5aW5nIHRvIHJlZGVmaW5lIGNvbnN0IGZpZWxkICdcIiArIGZpZWxkICsgXCInXCIpIH0sXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9yRWFjaCAob2JqLCBjYikge1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBuZXdPYmpba2V5XSA9IGNiKHByb3AsIGtleSwgb2JqKTtcclxuICB9XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwS2V5cyAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xyXG4gICAgY29uc3QgcHJvcCA9IG9ialtrZXldO1xyXG4gICAgY29uc3QgbmV3S2V5ID0gY2Ioa2V5LCBwcm9wLCBvYmopO1xyXG4gICAgbmV3T2JqW25ld0tleV0gPSBwcm9wO1xyXG4gIH1cclxuICByZXR1cm4gbmV3T2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxpdFBpZWNlIChvYmosIGNiKSB7XHJcbiAgY29uc3QgbmV3T2JqID0ge31cclxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XHJcbiAgICBjb25zdCBwcm9wID0gb2JqW2tleV07XHJcbiAgICBpZiAoIGNiKHByb3AsIGtleSwgb2JqKSApIHtcclxuICAgICAgbmV3T2JqW2tleV0gPSBwcm9wO1xyXG4gICAgICBkZWxldGUgb2JqW2tleV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bGxNYXAgKG9iaiwgY2IpIHtcclxuICBjb25zdCBuZXdPYmogPSB7fVxyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGNvbnN0IHJlcyA9IGNiKGtleSwgcHJvcCwgb2JqKTtcclxuICAgIG5ld09ialsgcmVzWzBdIHx8IHJlcy5rZXkgfHwgcmVzLmsgXSA9IHJlc1sxXSB8fCByZXNbJ3ZhbHVlJ10gfHwgcmVzWyd2J107XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlciAob2JqLCBjYikge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcclxuICAgIGNvbnN0IHByb3AgPSBvYmpba2V5XTtcclxuICAgIGlmICggY2IocHJvcCwga2V5LCBvYmopICkge1xyXG4gICAgICBuZXdPYmpba2V5XSA9IHByb3A7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIsIHZhbCkge1xyXG4gIGNvbnN0IG5ld09iaiA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICBuZXdPYmpbdl0gPSBpc0Z1bmN0aW9uKHZhbCkgPyB2YWwodikgOiB2YWw7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld09iajtcclxufVxyXG4iLCJpbXBvcnQgeyBkZWZpbmUgfSBmcm9tICcuL0RlZmluaXRpb24nO1xyXG5pbXBvcnQgeyBhcHBseSB9IGZyb20gJy4vUHJvZHVjdGlvbic7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZWZpbmUsXHJcbiAgYXBwbHksXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=