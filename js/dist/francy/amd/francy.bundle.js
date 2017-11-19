define(function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(7);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Renderer = function (_Base) {
  _inherits(Renderer, _Base);

  function Renderer(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Renderer);

    var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (_this.render === undefined || typeof _this.render !== 'function') {
      throw new TypeError('Must override [render(json)] method!');
    }
    return _this;
  }

  return Renderer;
}(_base2.default);

exports.default = Renderer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'Francy[Window|Canvas|Object]-*hex uuid*'
 */
var IDUtils = function () {
  function IDUtils() {
    _classCallCheck(this, IDUtils);
  }

  _createClass(IDUtils, null, [{
    key: "getWindowId",


    /**
     * Returns the id for a window based on a canvas id.
     * @param canvasId - the canvas id
     * @returns {string} the window element id.
     */
    value: function getWindowId(canvasId) {
      return "FrancyWindow-" + canvasId;
    }

    /**
     * Returns the id for a canvas based on a canvas id.
     * @param canvasId - the canvas id
     * @returns {string} the canvas element id.
     */

  }, {
    key: "getCanvasId",
    value: function getCanvasId(canvasId) {
      return "FrancyCanvas-" + canvasId;
    }

    /**
     * Returns the id for an object based on a object id.
     * @param objectId - the object id
     * @returns {string} the element object id.
     */

  }, {
    key: "getObjectId",
    value: function getObjectId(objectId) {
      return "FrancyObject-" + objectId;
    }

    /**
     * Returns the id for an object based on a object id.
     * @param menuId - the menu id
     * @returns {string} the element object id.
     */

  }, {
    key: "getMenuId",
    value: function getMenuId(menuId) {
      return "FrancyMenu-" + menuId;
    }
  }]);

  return IDUtils;
}();

exports.default = IDUtils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Composite = function (_Renderer) {
  _inherits(Composite, _Renderer);

  function Composite(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Composite);

    var _this = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
    _this.renderers = [];
    return _this;
  }

  _createClass(Composite, [{
    key: 'add',
    value: function add(renderer) {
      this.renderers.push(renderer);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(parent, json) {
      // update children rendering with a new parent if required!
      var childrenOptions = this.options;
      if (parent) {
        childrenOptions.appendTo = parent;
      }
      // render other components
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.renderers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var renderer = _step.value;

          renderer.update(childrenOptions).render(json);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return Composite;
}(_renderer2.default);

exports.default = Composite;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = null;

/**
 * This class is a singleton that provides a logger for the Francy application.
 */

var Logger = function () {

  /**
   * Singleton: Creates an instance of the logger and will returned that instance,
   * everytime a new instance is requested.
   * @param verbose prints extra log information to console.log, default false
   */
  function Logger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Logger);

    if (!singleton) {
      this.verbose = verbose;
      this.console = console;
      singleton = this;
    } else {
      return singleton;
    }
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */


  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      if (this.verbose) {
        this.console.debug(this._format('DEBUG', message));
      }
    }

    /**
     * Creates a [INFO] entry in the console log
     * @param message the message to print
     */

  }, {
    key: 'info',
    value: function info(message) {
      this.console.info(this._format('INFO', message));
    }

    /**
     * Creates a [ERROR] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'error',
    value: function error(message, _error) {
      this.console.error(this._format('ERROR', message), _error);
    }

    /**
     * Creates a [WARN] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'warn',
    value: function warn(message, error) {
      error = error || {};
      this.console.error(this._format('WARN', message), error);
    }

    /**
     * This is a private method that formats all log messages
     * @param message the message to print
     */

  }, {
    key: '_format',
    value: function _format(level, message) {
      return '[' + level + '] - ' + new Date().toISOString() + ' - ' + message;
    }
  }]);

  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(5);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _window = __webpack_require__(6);

var _window2 = _interopRequireDefault(_window);

var _canvas = __webpack_require__(8);

var _canvas2 = _interopRequireDefault(_canvas);

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _graph = __webpack_require__(12);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(13);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Tracker from './tracker/change';

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 * @access public
 * 
 * @version 0.2.0
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.render(json);
 */
var Francy = function () {

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  function Francy(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    if (!callbackHandler) {
      throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
    }
    if (!appendTo) {
      throw new Error('Missing an element or id to append the graphics to...!');
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param {String} input a json string/object render
   * @returns {Object} the element created
   */


  _createClass(Francy, [{
    key: 'render',
    value: function render(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        var window = new _window2.default(this.options);
        var canvas = new _canvas2.default(this.options);
        var menu = new _menu2.default(this.options);
        var graph = new _graph2.default(this.options);
        var chart = new _chart2.default(this.options);
        canvas.add(graph);
        canvas.add(chart);
        window.add(menu);
        window.add(canvas);
        var element = window.render(json);
        return element.node();
      }
    }
  }]);

  return Francy;
}();

exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
} catch (e) {
  exports.Francy = Francy;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class contains methods to deal with JSON.
 */
var JsonUtils = function () {
  function JsonUtils() {
    _classCallCheck(this, JsonUtils);
  }

  _createClass(JsonUtils, null, [{
    key: 'parse',


    /**
     * Parses an input nd checks whether this input is valid and returns a JSON object.
     * @param input - the input to parse
     * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
     */
    value: function parse(input) {
      input = typeof input !== "string" ? JSON.stringify(input) : input;
      input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        try {
          var json = JSON.parse(input);
          return json.agent === 'application/vnd.francy+json' ? json : undefined;
        } catch (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        }
      }
      return undefined;
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _composite = __webpack_require__(2);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Window = function (_Composite) {
  _inherits(Window, _Composite);

  function Window(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Window, [{
    key: 'render',
    value: function render(json) {
      var windowId = _idUtils2.default.getWindowId(json.canvas.id);
      var window = d3.select('#' + windowId);

      // check if the window is already present
      if (!window.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Window [' + windowId + ']...');
        window = d3.select(this.options.appendTo).append('div').remove().attr('id', windowId).attr('class', 'francy window');
      }

      // cannot continue if window is not present
      if (!window.node()) {
        throw new Error('Oops, could not create window with id [' + windowId + ']... Cannot proceed.');
      }

      this.logger.debug('Window updated ' + windowId + '...');

      this.renderChildren(window, json);

      return window;
    }
  }]);

  return Window;
}(_composite2.default);

exports.default = Window;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Base);

    /**
     * @type {Object}
     */
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    /**
     * @type {Logger}
     */
    this.logger = new _logger2.default(this.options);
  }

  _createClass(Base, [{
    key: 'update',
    value: function update(_ref2) {
      var _ref2$verbose = _ref2.verbose,
          verbose = _ref2$verbose === undefined ? false : _ref2$verbose,
          appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler;

      this.options = {
        verbose: verbose,
        appendTo: appendTo,
        callbackHandler: callbackHandler
      };
      return this;
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _composite = __webpack_require__(2);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Canvas = function (_Composite) {
  _inherits(Canvas, _Composite);

  function Canvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render(json) {
      var parent = this.options.appendTo;

      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = parent.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = parent.append('svg').attr('id', canvasId).attr('class', 'canvas');
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

      var content = canvas.select('g.content');

      if (!content.node()) {
        var contentGroup = canvas.append('g').attr('class', 'content');
        canvas.call(d3.zoom().on('zoom', function () {
          contentGroup.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
        }));
      }

      this.logger.debug('Canvas updated ' + canvasId + '...');

      this.renderChildren(canvas, json);

      return canvas;
    }
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Renderer) {
  _inherits(Menu, _Renderer);

  function Menu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render(json) {
      var _this2 = this;

      var parent = this.options.appendTo;

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = parent.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Menu [' + menuId + ']...');
        menu = parent.append('ul').attr('class', 'nav').attr('id', menuId);
      }

      // force rebuild menu again
      menu.selectAll('*').remove();

      var entry = menu.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').on('click', function () {
        return _this2.logger.info('Save to PNG pressed... Not Implemented!');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return _this2.logger.info('About Francy pressed... Not Implemented!');
      }).attr('title', 'About').html('About');

      // FIXME the menu depth is 'infinite', but this implementations supports only depth = 1!

      var _loop = function _loop(menuItem) {
        callback = new _callback2.default(_this2.options);

        entry = menu.append('li');
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          entry.append('a').html(menuItem.title);
          content = entry.append('ul');
          entry = content.append('li');

          var _loop2 = function _loop2(submenu) {
            callback = new _callback2.default(_this2.options);
            entry.append('a').on('click', function () {
              return callback.execute(submenu);
            }).attr('title', submenu.title).html(submenu.title);
          };

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.values(menuItem.menus)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var submenu = _step2.value;

              _loop2(submenu);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          entry.append('a').on('click', function () {
            return callback.execute(menuItem);
          }).attr('title', menuItem.title).html(menuItem.title);
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.canvas.menus)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var menuItem = _step.value;
          var callback;

          _loop(menuItem);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.logger.debug('Menu updated ' + menuId + '...');

      return menu;
    }
  }]);

  return Menu;
}(_renderer2.default);

exports.default = Menu;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _modal = __webpack_require__(11);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CallbackHandler = function () {
  function CallbackHandler(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new _logger2.default({ verbose: verbose });
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute(config) {
      if (Object.keys(config.callback.requiredArgs).length) {
        var modal = new _modal2.default(this.options);
        return modal.render(config);
      } else {
        return this.options.callbackHandler(config.callback);
      }
    }
  }]);

  return CallbackHandler;
}();

exports.default = CallbackHandler;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3, Jupyter */

var Modal = function (_Renderer) {
  _inherits(Modal, _Renderer);

  function Modal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render(json) {
      var self = this;

      var modalId = _idUtils2.default.getWindowId(json.callback.id);
      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', modalId).attr('class', 'francy modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'header');

      header.append('span').html('Required arguments for&nbsp;').append('span').attr('style', 'font-weight: bold;').text(json.title);

      var content = form.append('div').attr('class', 'content');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          content.append('label').attr('for', arg.id).text(arg.title);
          content.append('input').attr('id', arg.id).attr('class', 'arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            json.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          content.append('span').attr('class', 'validity');
          content.append('br');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var footer = form.append('div').attr('class', 'footer');

      footer.append('button').text('Ok').on('click', function () {
        if (form.node().checkValidity()) {
          self.options.callbackHandler(json.callback);
          overlay.remove();
          modal.remove();
          holder.remove();
          event.preventDefault();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        event.preventDefault();
        overlay.remove();
        modal.remove();
        holder.remove();
        return false;
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      try {
        Jupyter.keyboard_manager.register_events('.arg');
        Jupyter.keyboard_manager.register_events('.francy .overlay');
        Jupyter.keyboard_manager.register_events('.francy .modal');
      } catch (e) {
        if (e.name == 'ReferenceError') {
          self.logger.debug('It seems we\'re not running on Jupyter...', e);
        }
      }

      this.logger.debug('Callback Modal updated ' + modalId + '...');

      return modal;
    }
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Graph = function (_Renderer) {
  _inherits(Graph, _Renderer);

  _createClass(Graph, null, [{
    key: 'getSymbol',
    value: function getSymbol(type) {
      if (type === 'circle') {
        return d3.symbolCircle;
      } else if (type === 'cross') {
        return d3.symbolCross;
      } else if (type === 'diamond') {
        return d3.symbolDiamond;
      } else if (type === 'square') {
        return d3.symbolSquare;
      } else if (type === 'triangle') {
        return d3.symbolTriangle;
      } else if (type === 'star') {
        return d3.symbolStar;
      } else if (type === 'wye') {
        return d3.symbolWye;
      } else {
        return d3.symbolCircle;
      }
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  function Graph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Graph, [{
    key: 'render',
    value: function render(json) {

      if (!Object.keys(json.canvas.graph).length) {
        return;
      }

      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.content'),
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
      //window.innerWidth ||
      var t = d3.transition().duration(250);

      //Generic gravity for the X position
      var forceX = d3.forceX(250).strength(0.1);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      var forceY = d3.forceY(250).strength(0.5);

      if (json.canvas.graph.type === 'hasse') {
        //Strong y positioning based on layer
        forceY = d3.forceY(function (d) {
          return d.layer * 100;
        }).strength(0.5);
      }

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      })).force('charge', d3.forceManyBody().strength(-400)).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2));

      var linkGroup = svg.selectAll('g.links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'links');
      }

      var link = linkGroup.selectAll('line.link').data(canvasLinks);

      link.exit().transition(t).remove();

      link = link.enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      });

      if (json.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeGroup = svg.selectAll('g.nodes');

      if (!nodeGroup.node()) {
        nodeGroup = svg.append('g').attr('class', 'nodes');
      }

      var node = nodeGroup.selectAll('path.node').data(canvasNodes);

      node.exit().transition(t).remove();

      node = node.enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Graph.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'node' + (d.highlight ? ' highlight' : '');
      }).attr('id', function (d) {
        return d.id;
      });

      node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);
      //.on('click', function() { alert(':)'); });


      node.append('title').text(function (d) {
        return 'ID:\t' + d.id + '\nLayer:\t' + d.layer;
      });

      var labelGroup = svg.selectAll('.labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().transition(t).remove();

      label = label.enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      });

      var legendGroup = parent.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = parent.append('g').attr('class', 'legend');
      }

      var legend = legendGroup.selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values().sort(function (d) {
        return d.layer;
      }), function (d) {
        return d.id;
      });

      legend.exit().transition(t).remove();

      legend = legend.enter().append('g').attr('id', function (d) {
        return 'legendLayer' + d;
      }).attr('transform', function (d, i) {
        var x = 10;
        var y = (i + 1) * 11;
        return 'translate(' + x + ',' + y + ')';
      });

      legend.append('rect').attr('width', 10).attr('height', 8).style('fill', function (d) {
        return Graph.colors(d.layer * 6);
      }).style('stroke', function (d) {
        return Graph.colors(d.layer * 6);
      });

      legend.append('text').attr('style', 'font-size: 10px;').attr('x', 10 + 5).attr('y', 10 - 2).text(function (d) {
        return 'Index ' + d.layer;
      });

      simulation.nodes(canvasNodes).on('tick', ticked);

      simulation.force('link').links(canvasLinks);

      function ticked() {
        link.attr('x1', function (d) {
          return d.source.x;
        }).attr('y1', function (d) {
          return d.source.y;
        }).attr('x2', function (d) {
          return d.target.x;
        }).attr('y2', function (d) {
          return d.target.y;
        });

        node.style('fill', function (d) {
          return Graph.colors(d.layer * 6);
        }).attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });

        label.attr('x', function (d) {
          return d.x - d.title.length - Math.sqrt(d.size);
        }).attr('y', function (d) {
          return d.y - Math.sqrt(d.size);
        });

        node.each(collide(0.8));
      }

      // COLLISION
      var padding = 1,
          // separation between circles
      radius = 20;

      function collide(alpha) {
        var quadTree = d3.quadtree(canvasNodes);
        return function (d) {
          var rb = 2 * radius + padding,
              nx1 = d.x - rb,
              nx2 = d.x + rb,
              ny1 = d.y - rb,
              ny2 = d.y + rb;
          quadTree.visit(function (quad, x1, y1, x2, y2) {
            if (quad.point && quad.point !== d) {
              var x = d.x - quad.point.x,
                  y = d.y - quad.point.y,
                  l = Math.sqrt(x * x + y * y);
              if (l < rb) {
                l = (l - rb) / l * alpha;
                d.x -= x *= l;
                d.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
        };
      }

      // HIGHLIGHT
      //Toggle stores whether the highlighting is on
      var toggle = 0;
      //Create an array logging what is connected to what
      var linkedByIndex = {};

      for (var i = 0; i < canvasNodes.length; i++) {
        linkedByIndex[i + ',' + i] = 1;
      }

      canvasLinks.forEach(function (d) {
        linkedByIndex[d.source.index + ',' + d.target.index] = 1;
      });

      //This function looks up whether a pair are neighbours
      function neighboring(a, b) {
        return linkedByIndex[a.index + ',' + b.index];
      }

      function connectedNodes() {
        d3.event.preventDefault();
        if (toggle === 0) {
          //Reduce the opacity of all but the neighbouring nodes
          var d = d3.select(this).node().__data__;
          node.style('opacity', function (o) {
            return neighboring(d, o) || neighboring(o, d) ? 1 : 0.1;
          });
          link.style('opacity', function (o) {
            return d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
          });
          //Reduce the op
          toggle = 1;
        } else {
          //Put them back to opacity=1
          node.style('opacity', 1);
          link.style('opacity', 1);
          toggle = 0;
        }
      }

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }
  }]);

  return Graph;
}(_renderer2.default);

exports.default = Graph;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import IDUtils from '../util/id-utils';

/* global d3 */

var Chart = function (_Renderer) {
  _inherits(Chart, _Renderer);

  function Chart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render(json) {

      if (!Object.keys(json.canvas.chart).length) {
        return;
      }

      var parent = this.options.appendTo;

      var chartAxis = json.canvas.chart.axis,
          chartDatasets = json.canvas.chart.data,
          numberOfDatasets = Object.keys(chartDatasets).length;

      var svg = parent.select('g.content'),
          margin = { top: 50, right: 50, bottom: 100, left: 100 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand().range([0, width]).padding(0.1).domain(chartAxis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(chartAxis.y.domain);

      svg.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      var self = this;

      var tmp = [];
      Object.keys(chartDatasets).forEach(function (key) {
        return tmp = tmp.concat(chartDatasets[key]);
      });

      if (!chartAxis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!chartAxis.x.domain.length) {
        chartAxis.x.domain = self._range(tmp.length / numberOfDatasets);
        x.domain(chartAxis.x.domain);
      }

      Object.keys(chartDatasets).forEach(function (key, index) {
        // append the rectangles for the bar chart
        svg.selectAll('.bar-' + index).data(chartDatasets[key]).enter().append('rect').style('fill', function () {
          return Chart.colors(index * numberOfDatasets);
        }).attr('class', 'bar').attr('x', function (d, i) {
          return x(chartAxis.x.domain[i]) + index * (x.bandwidth() / numberOfDatasets);
        }).attr('width', x.bandwidth() / numberOfDatasets - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        });
      });

      // add the x Axis
      svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(chartAxis.x.title);

      // add the y Axis
      svg.append('g').call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(chartAxis.y.title);

      var options = d3.keys(chartDatasets);

      var legend = svg.selectAll('.legend').data(options.slice()).enter().append('g').attr('class', 'legend').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      });

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return Chart.colors(i * numberOfDatasets);
      });

      legend.append('text').attr('x', width + 70).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });
    }
  }, {
    key: '_range',
    value: function _range(max) {
      return Array.from(new Array(max), function (_, i) {
        return i;
      }).map(function (x) {
        return x;
      });
    }
  }], [{
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Chart;
}(_renderer2.default);

exports.default = Chart;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2IzMTJjNDllM2Q5NjAxNDRhMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwicGFyZW50IiwianNvbiIsImNoaWxkcmVuT3B0aW9ucyIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsImRlYnVnIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiRnJhbmN5IiwiRXJyb3IiLCJkMyIsImlucHV0IiwicGFyc2UiLCJ3aW5kb3ciLCJjYW52YXMiLCJtZW51IiwiZ3JhcGgiLCJjaGFydCIsImFkZCIsImVsZW1lbnQiLCJub2RlIiwiZXhwb3J0cyIsImUiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiV2luZG93Iiwid2luZG93SWQiLCJnZXRXaW5kb3dJZCIsImlkIiwic2VsZWN0IiwibG9nZ2VyIiwiYXBwZW5kIiwicmVtb3ZlIiwiYXR0ciIsInJlbmRlckNoaWxkcmVuIiwiQmFzZSIsIkNhbnZhcyIsImdldENhbnZhc0lkIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiY29udGVudEdyb3VwIiwiY2FsbCIsInpvb20iLCJvbiIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwiTWVudSIsImdldE1lbnVJZCIsInNlbGVjdEFsbCIsImVudHJ5IiwiaHRtbCIsIm1lbnVJdGVtIiwiY2FsbGJhY2siLCJtZW51cyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInRpdGxlIiwic3VibWVudSIsImV4ZWN1dGUiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJrZXlzIiwicmVxdWlyZWRBcmdzIiwibW9kYWwiLCJNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIm5hbWUiLCJHcmFwaCIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwiZCIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlQ2VudGVyIiwibGlua0dyb3VwIiwibGluayIsImRhdGEiLCJleGl0IiwiZW50ZXIiLCJzb3VyY2UiLCJzdHlsZSIsIm5vZGVHcm91cCIsInN5bWJvbCIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsIm1hcCIsInNvcnQiLCJpIiwiY29sb3JzIiwidGlja2VkIiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJyYWRpdXMiLCJhbHBoYSIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQ2hhcnQiLCJjaGFydEF4aXMiLCJheGlzIiwiY2hhcnREYXRhc2V0cyIsIm51bWJlck9mRGF0YXNldHMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0Iiwia2V5IiwibWF4IiwiX3JhbmdlIiwiYmFuZHdpZHRoIiwiYXhpc0JvdHRvbSIsImF4aXNMZWZ0Iiwic2xpY2UiLCJBcnJheSIsImZyb20iLCJfIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUNDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG9IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSUMsSUFBSUMsTUFBSixLQUFlTCxRQUFuQixFQUE2QjtBQUMzQixZQUFNLElBQUlNLFNBQUosQ0FBYyxpREFBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtDLE1BQUwsS0FBZ0JDLFNBQWhCLElBQTZCLE9BQU8sTUFBS0QsTUFBWixLQUF1QixVQUF4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QUFHNEYsZUFBSCxHQUFxQkMsTUFBckIsQ0FBNEIsQ0FBQyxDQUFELEVBQUksR0FBSixDQUE1QixFQUFzQ0MsWUFBdEMsQ0FBbUQ5RixHQUFHK0Ysa0JBQXRELENBQVA7QUFDRDs7Ozs7O2tCQVJrQm1GLEsiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNiMzEyYzQ5ZTNkOTYwMTQ0YTFmIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoanNvbildIG1ldGhvZCEnKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpoZXggdXVpZConXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEVXRpbHMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSB3aW5kb3cgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lXaW5kb3ctJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIGNhbnZhcyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY2FudmFzIGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0Q2FudmFzSWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeUNhbnZhcy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU9iamVjdC0ke29iamVjdElkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG1lbnVJZCAtIHRoZSBtZW51IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRNZW51SWQobWVudUlkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lNZW51LSR7bWVudUlkfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tICcuL3V0aWwvanNvbi11dGlscyc7XG5pbXBvcnQgV2luZG93IGZyb20gJy4vcmVuZGVyL3dpbmRvdyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vcmVuZGVyL2NhbnZhcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL3JlbmRlci9tZW51JztcbmltcG9ydCBHcmFwaCBmcm9tICcuL3JlbmRlci9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9yZW5kZXIvY2hhcnQnO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tICcuL3RyYWNrZXIvY2hhbmdlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC4yLjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kucmVuZGVyKGpzb24pO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgbWVudSA9IG5ldyBNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChncmFwaCk7XG4gICAgICBjYW52YXMuYWRkKGNoYXJ0KTtcbiAgICAgIHdpbmRvdy5hZGQobWVudSk7XG4gICAgICB3aW5kb3cuYWRkKGNhbnZhcyk7XG4gICAgICB2YXIgZWxlbWVudCA9IHdpbmRvdy5yZW5kZXIoanNvbik7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciB3aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciB3aW5kb3cgPSBkMy5zZWxlY3QoYCMke3dpbmRvd0lkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7d2luZG93SWR9XS4uLmApO1xuICAgICAgd2luZG93ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdkaXYnKS5yZW1vdmUoKVxuICAgICAgICAuYXR0cignaWQnLCB3aW5kb3dJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB3aW5kb3cnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgWyR7d2luZG93SWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgV2luZG93IHVwZGF0ZWQgJHt3aW5kb3dJZH0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci93aW5kb3cuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gcGFyZW50LnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgY2FudmFzID0gcGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciBjb250ZW50ID0gY2FudmFzLnNlbGVjdCgnZy5jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICB2YXIgY29udGVudEdyb3VwID0gY2FudmFzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgICAgIGNhbnZhcy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50R3JvdXAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkICR7Y2FudmFzSWR9Li4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIG1lbnVJZCA9IElEVXRpbHMuZ2V0TWVudUlkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgbWVudSA9IHBhcmVudC5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghbWVudS5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgndWwnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbmF2JykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gRklYTUUgdGhlIG1lbnUgZGVwdGggaXMgJ2luZmluaXRlJywgYnV0IHRoaXMgaW1wbGVtZW50YXRpb25zIHN1cHBvcnRzIG9ubHkgZGVwdGggPSAxIVxuICAgIGZvciAobGV0IG1lbnVJdGVtIG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgICAgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgZW50cnkgPSBjb250ZW50LmFwcGVuZCgnbGknKTtcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgZW50cnkuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShzdWJtZW51KSkuYXR0cigndGl0bGUnLCBzdWJtZW51LnRpdGxlKS5odG1sKHN1Ym1lbnUudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZW50cnkuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShtZW51SXRlbSkpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNZW51IHVwZGF0ZWQgJHttZW51SWR9Li4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZy5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgdmFyIG1vZGFsID0gbmV3IE1vZGFsKHRoaXMub3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kYWwucmVuZGVyKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoY29uZmlnLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzLCBKdXB5dGVyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbGxiYWNrLmlkKTtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdmFyIG1vZGFsID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAganNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdicicpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24uY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIHRyeSB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5IC5vdmVybGF5Jyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5IC5tb2RhbCcpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCAke21vZGFsSWR9Li4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGpzb24uY2FudmFzLmdyYXBoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0ganNvbi5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSBqc29uLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgLy93aW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MCk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoMjUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiAxMDApLnN0cmVuZ3RoKDAuNSk7XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsaW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5saW5rJykuZGF0YShjYW52YXNMaW5rcyk7XG5cbiAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKTtcblxuICAgIGlmIChqc29uLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZUdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGgubm9kZScpLmRhdGEoY2FudmFzTm9kZXMpO1xuXG4gICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG4gICAgLy8ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCc6KScpOyB9KTtcblxuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChkID0+IGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWApO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGFiZWxzJyk7XG5cbiAgICBpZiAoIWxhYmVsR3JvdXAubm9kZSgpKSB7XG4gICAgICBsYWJlbEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydChkID0+IGQubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2R9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMTA7XG4gICAgICAgIGxldCB5ID0gKGkgKyAxKSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuOCkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbi8vaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhqc29uLmNhbnZhcy5jaGFydCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjaGFydEF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgY2hhcnREYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBudW1iZXJPZkRhdGFzZXRzID0gT2JqZWN0LmtleXMoY2hhcnREYXRhc2V0cykubGVuZ3RoO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogMTAwLCBsZWZ0OiAxMDAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbihjaGFydEF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGNoYXJ0QXhpcy55LmRvbWFpbik7XG5cbiAgICBzdmcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwke21hcmdpbi50b3B9KWApO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGNoYXJ0RGF0YXNldHMpLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoY2hhcnREYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWNoYXJ0QXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFjaGFydEF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBjaGFydEF4aXMueC5kb21haW4gPSBzZWxmLl9yYW5nZSh0bXAubGVuZ3RoIC8gbnVtYmVyT2ZEYXRhc2V0cyk7XG4gICAgICB4LmRvbWFpbihjaGFydEF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKGNoYXJ0RGF0YXNldHMpLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBzdmcuc2VsZWN0QWxsKCcuYmFyLScgKyBpbmRleClcbiAgICAgICAgLmRhdGEoY2hhcnREYXRhc2V0c1trZXldKS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiBudW1iZXJPZkRhdGFzZXRzKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2JhcicpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChjaGFydEF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIG51bWJlck9mRGF0YXNldHMpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIG51bWJlck9mRGF0YXNldHMpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGNoYXJ0QXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGNoYXJ0QXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBvcHRpb25zID0gZDMua2V5cyhjaGFydERhdGFzZXRzKTtcblxuICAgIHZhciBsZWdlbmQgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJylcbiAgICAgIC5kYXRhKG9wdGlvbnMuc2xpY2UoKSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gJ3RyYW5zbGF0ZSgwLCcgKyBpICogMjAgKyAnKScpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIG51bWJlck9mRGF0YXNldHMpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDcwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KChkKSA9PiBkKTtcbiAgfVxuXG4gIF9yYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiXSwic291cmNlUm9vdCI6IiJ9