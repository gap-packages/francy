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
      var t = d3.transition().duration(500);

      //Generic gravity for the X position
      var forceX = d3.forceX(-500).strength(0.35);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      var forceY = d3.forceY(500).strength(0.35);

      if (json.canvas.graph.type === 'hasse') {
        //Strong y positioning based on layer
        forceY = d3.forceY(function (d) {
          return d.layer * (d.size * 5);
        }).strength(1);
      }

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      }).strength(0.001)).force('charge', d3.forceManyBody().strength(-250)).force('collide', d3.forceCollide(function (d) {
        return d.size;
      })).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2));

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

      // TODO this could be a tooltip tag from json
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

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values().sort(function (a, b) {
        return a.layer < b.layer;
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

        node.each(collide(0.9));
      }

      // COLLISION
      var padding = 1; // separation between circles;

      function collide(alpha) {
        var quadTree = d3.quadtree(canvasNodes);
        return function (d) {
          var rb = 2 * d.size + padding,
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
        if (!d3.event.active) {
          simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) {
          simulation.alphaTarget(0);
        }
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

      var t = d3.transition().duration(500);

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
        var bar = svg.selectAll('.bar-' + index).data(chartDatasets[key]);

        bar.exit().transition(t).remove();

        // append the rectangles for the bar chart
        bar.enter().append('rect').style('fill', function () {
          return Chart.colors(index * numberOfDatasets);
        }).attr('class', 'bar-' + index).attr('x', function (d, i) {
          return x(chartAxis.x.domain[i]) + index * (x.bandwidth() / numberOfDatasets);
        }).attr('width', x.bandwidth() / numberOfDatasets - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        });
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(chartAxis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(chartAxis.y.title);

      var options = d3.keys(chartDatasets);

      var legendGroup = svg.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(options.slice());

      legend.exit().transition(t).remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBhOTRkMTJhZjdhMjQ4MTc3NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwicGFyZW50IiwianNvbiIsImNoaWxkcmVuT3B0aW9ucyIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsImRlYnVnIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiRnJhbmN5IiwiRXJyb3IiLCJkMyIsImlucHV0IiwicGFyc2UiLCJ3aW5kb3ciLCJjYW52YXMiLCJtZW51IiwiZ3JhcGgiLCJjaGFydCIsImFkZCIsImVsZW1lbnQiLCJub2RlIiwiZXhwb3J0cyIsImUiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiV2luZG93Iiwid2luZG93SWQiLCJnZXRXaW5kb3dJZCIsImlkIiwic2VsZWN0IiwibG9nZ2VyIiwiYXBwZW5kIiwicmVtb3ZlIiwiYXR0ciIsInJlbmRlckNoaWxkcmVuIiwiQmFzZSIsIkNhbnZhcyIsImdldENhbnZhc0lkIiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiY29udGVudEdyb3VwIiwiY2FsbCIsInpvb20iLCJvbiIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwiTWVudSIsImdldE1lbnVJZCIsInNlbGVjdEFsbCIsImVudHJ5IiwiaHRtbCIsIm1lbnVJdGVtIiwiY2FsbGJhY2siLCJtZW51cyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInRpdGxlIiwic3VibWVudSIsImV4ZWN1dGUiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJrZXlzIiwicmVxdWlyZWRBcmdzIiwibW9kYWwiLCJNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIm5hbWUiLCJHcmFwaCIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwiZCIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJkYXRhIiwiZXhpdCIsImVudGVyIiwic291cmNlIiwic3R5bGUiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsIm1hcCIsInNvcnQiLCJhIiwiYiIsImkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQ2hhcnQiLCJjaGFydEF4aXMiLCJheGlzIiwiY2hhcnREYXRhc2V0cyIsIm51bWJlck9mRGF0YXNldHMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0Iiwia2V5IiwibWF4IiwiX3JhbmdlIiwiYmFyIiwiYmFuZHdpZHRoIiwieEF4aXNHcm91cCIsImF4aXNCb3R0b20iLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzbGljZSIsIkFycmF5IiwiZnJvbSIsIl8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFBS0MsTUFBTCxLQUFnQkMs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QSxlQUFPQSxDQUFQO0FBQUEsT0FMUjtBQU1EOzs7MkJBRU1zRixHLEVBQUs7QUFDVixhQUFPUyxNQUFNQyxJQUFOLENBQVcsSUFBSUQsS0FBSixDQUFVVCxHQUFWLENBQVgsRUFBMkIsVUFBQ1csQ0FBRCxFQUFJL0QsQ0FBSjtBQUFBLGVBQVVBLENBQVY7QUFBQSxPQUEzQixFQUF3Q0osR0FBeEMsQ0FBNEM7QUFBQSxlQUFLL0YsQ0FBTDtBQUFBLE9BQTVDLENBQVA7QUFDRDs7O3dCQTNJbUI7QUFDbEIsYUFBTzNDLEdBQUc0RixlQUFILEdBQXFCQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDQyxZQUF0QyxDQUFtRDlGLEdBQUcrRixrQkFBdEQsQ0FBUDtBQUNEOzs7Ozs7a0JBUmtCbUYsSyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTBhOTRkMTJhZjdhMjQ4MTc3NWYiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbihwYXJlbnQsIGpzb24pIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IGlmIHJlcXVpcmVkIVxuICAgIHZhciBjaGlsZHJlbk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgY2hpbGRyZW5PcHRpb25zLmFwcGVuZFRvID0gcGFyZW50O1xuICAgIH1cbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAodmFyIHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci51cGRhdGUoY2hpbGRyZW5PcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gJy4vdXRpbC9qc29uLXV0aWxzJztcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi9yZW5kZXIvd2luZG93JztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9yZW5kZXIvY2FudmFzJztcbmltcG9ydCBNZW51IGZyb20gJy4vcmVuZGVyL21lbnUnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vcmVuZGVyL2dyYXBoJztcbmltcG9ydCBDaGFydCBmcm9tICcuL3JlbmRlci9jaGFydCc7XG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjIuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5yZW5kZXIoanNvbik7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKGdyYXBoKTtcbiAgICAgIGNhbnZhcy5hZGQoY2hhcnQpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdChgIyR7d2luZG93SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCBbJHt3aW5kb3dJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBXaW5kb3cgdXBkYXRlZCAke3dpbmRvd0lkfS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbih3aW5kb3csIGpzb24pO1xuXG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3dpbmRvdy5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9XG4gICAgICovXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1cGRhdGUoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBwYXJlbnQuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBjYW52YXMuc2VsZWN0KCdnLmNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIHZhciBjb250ZW50R3JvdXAgPSBjYW52YXMuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnY29udGVudCcpO1xuICAgICAgY2FudmFzLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnRlbnRHcm91cC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgJHtjYW52YXNJZH0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gcGFyZW50LnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFtZW51Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSBwYXJlbnQuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICduYXYnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ1NhdmUgdG8gUE5HIHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIScpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dnZXIuaW5mbygnQWJvdXQgRnJhbmN5IHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIScpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBGSVhNRSB0aGUgbWVudSBkZXB0aCBpcyAnaW5maW5pdGUnLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbnMgc3VwcG9ydHMgb25seSBkZXB0aCA9IDEhXG4gICAgZm9yIChsZXQgbWVudUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5tZW51cykpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgICBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBlbnRyeSA9IGNvbnRlbnQuYXBwZW5kKCdsaScpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKHN1Ym1lbnUpKS5hdHRyKCd0aXRsZScsIHN1Ym1lbnUudGl0bGUpLmh0bWwoc3VibWVudS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKG1lbnVJdGVtKSkuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1lbnUgdXBkYXRlZCAke21lbnVJZH0uLi5gKTtcblxuICAgIHJldHVybiBtZW51O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5vcHRpb25zKTtcbiAgICAgIHJldHVybiBtb2RhbC5yZW5kZXIoY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihjb25maWcuY2FsbGJhY2spO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBvdmVybGF5Jyk7XG4gICAgdmFyIGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB2YXIgbW9kYWwgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgbW9kYWwnKTtcblxuICAgIHZhciBmb3JtID0gbW9kYWwuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2hlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyBmb3ImbmJzcDsnKS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGpzb24udGl0bGUpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnY29udGVudCcpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICBjb250ZW50LmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdhcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ2JyJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5hcmcnKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3kgLm92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3kgLm1vZGFsJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkICR7bW9kYWxJZH0uLi5gKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghT2JqZWN0LmtleXMoanNvbi5jYW52YXMuZ3JhcGgpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmNvbnRlbnQnKSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAvL3dpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoLTUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKDUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIChkLnNpemUgKiA1KSkuc3RyZW5ndGgoMSk7XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKS5zdHJlbmd0aCgwLjAwMSkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMjUwKSlcbiAgICAgIC5mb3JjZSgnY29sbGlkZScsIGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSkpXG4gICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGluay5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLm5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlcycpO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcbiAgICAvLy5vbignY2xpY2snLCBmdW5jdGlvbigpIHsgYWxlcnQoJzopJyk7IH0pO1xuXG4gICAgLy8gVE9ETyB0aGlzIGNvdWxkIGJlIGEgdG9vbHRpcCB0YWcgZnJvbSBqc29uXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChkID0+IGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWApO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGFiZWxzJyk7XG5cbiAgICBpZiAoIWxhYmVsR3JvdXAubm9kZSgpKSB7XG4gICAgICBsYWJlbEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLnNvcnQoKGEsIGIpID0+IGEubGF5ZXIgPCBiLmxheWVyKSwgZCA9PiBkLmlkKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDEwO1xuICAgICAgICBsZXQgeSA9IChpICsgMSkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjkpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDE7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIGQuc2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG4vL2ltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghT2JqZWN0LmtleXMoanNvbi5jYW52YXMuY2hhcnQpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2hhcnRBeGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGNoYXJ0RGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgbnVtYmVyT2ZEYXRhc2V0cyA9IE9iamVjdC5rZXlzKGNoYXJ0RGF0YXNldHMpLmxlbmd0aDtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmNvbnRlbnQnKSxcbiAgICAgIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDEwMCwgbGVmdDogMTAwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGNoYXJ0QXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oY2hhcnRBeGlzLnkuZG9tYWluKTtcblxuICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCR7bWFyZ2luLnRvcH0pYCk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgT2JqZWN0LmtleXMoY2hhcnREYXRhc2V0cykuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChjaGFydERhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghY2hhcnRBeGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWNoYXJ0QXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIGNoYXJ0QXhpcy54LmRvbWFpbiA9IHNlbGYuX3JhbmdlKHRtcC5sZW5ndGggLyBudW1iZXJPZkRhdGFzZXRzKTtcbiAgICAgIHguZG9tYWluKGNoYXJ0QXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoY2hhcnREYXRhc2V0cykuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgYmFyID0gc3ZnLnNlbGVjdEFsbCgnLmJhci0nICsgaW5kZXgpLmRhdGEoY2hhcnREYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiBudW1iZXJPZkRhdGFzZXRzKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Jhci0nICsgaW5kZXgpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChjaGFydEF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIG51bWJlck9mRGF0YXNldHMpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIG51bWJlck9mRGF0YXNldHMpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cueC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ3gtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGNoYXJ0QXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy55LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAneS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChjaGFydEF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGQzLmtleXMoY2hhcnREYXRhc2V0cyk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKG9wdGlvbnMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+ICd0cmFuc2xhdGUoMCwnICsgaSAqIDIwICsgJyknKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiBudW1iZXJPZkRhdGFzZXRzKSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA3MClcbiAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCgoZCkgPT4gZCk7XG4gIH1cblxuICBfcmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==