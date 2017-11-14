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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(1);

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

    _this.renderers = [];

    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
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
exports.Francy = undefined;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Chart from "./render/chart";
//import Tracker from "./tracker/change";

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
var Francy = exports.Francy = function () {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose prints extra log information to console.log, default false
   * @param appendTo where the generated html/svg components will be attached to, default body
   * @param callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  function Francy(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    if (!callbackHandler) {
      throw new Error("A Callback Handler must be provided! This will be used to trigger events from the graphics produced...");
    }
    if (!appendTo) {
      throw new Error("Missing an element or id to append the graphics to...!");
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object render
   */


  _createClass(Francy, [{
    key: "render",
    value: function render(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        var menu = new _menu2.default(this.options);
        var graph = new _graph2.default(this.options);
        //var chart = new Chart(this.options);
        var canvas = new _canvas2.default(this.options);
        canvas.add(graph);
        //canvas.add(chart);
        var window = new _window2.default(this.options);
        window.add(menu);
        window.add(canvas);
        var element = window.render(json);
        return element.node();
      }
    }
  }]);

  return Francy;
}();

exports.Francy = window.Francy = Francy;

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
          console.error(e);
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

var _idUtils = __webpack_require__(0);

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

      this.logger.debug('Window ready: ' + window);

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

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
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

var _idUtils = __webpack_require__(0);

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

        canvas.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);

      var draw = canvas.select('g.graph');

      if (!draw.node()) {
        canvas.append('g').attr('class', 'graph');
      }

      this.logger.debug('Canvas ready: ' + canvas);

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

var _renderer = __webpack_require__(1);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

var _idUtils = __webpack_require__(0);

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

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
      menu.selectAll("*").remove();

      var entry = menu.append('li');
      entry.append('a').attr('href', '#').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').attr('href', '#').on("click", function () {
        return console.log("Save to PNG pressed... Not Implemented!");
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').attr('href', '#').on("click", function () {
        return console.log("About Francy pressed... Not Implemented!");
      }).attr('title', 'About').html('About');

      // FIXME the menu depth is 'infinite', but this implementations supports only depth = 1!

      var _loop = function _loop(menuItem) {
        callback = new _callback2.default(_this2.options);

        entry = menu.append('li');
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          entry.append('a').attr('href', '#').html(menuItem.title);
          content = entry.append('ul');
          entry = content.append('li');

          var _loop2 = function _loop2(submenu) {
            callback = new _callback2.default(_this2.options);
            entry.append('a').attr('href', '#').on("click", function () {
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
          entry.append('a').attr('href', '#').on("click", function () {
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

      this.logger.debug('Menu ready: ' + menu);

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

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

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
      if (config.callback.requiredArgs) {
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

var _idUtils = __webpack_require__(0);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _renderer = __webpack_require__(1);

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
        overlay.remove();
        modal.remove();
        holder.remove();
        return false;
      });

      try {
        Jupyter.keyboard_manager.register_events('.arg');
      } catch (e) {
        if (e.name == "ReferenceError") {
          self.logger.debug('It seems we\'re not running on Jupyter... Skipping...', e);
        }
      }

      this.logger.debug('Callback Modal ready: ' + modal);

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

var _renderer = __webpack_require__(1);

var _renderer2 = _interopRequireDefault(_renderer);

var _idUtils = __webpack_require__(0);

var _idUtils2 = _interopRequireDefault(_idUtils);

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
      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.graph'),
          width = +parent.attr('width') || d3.select("body").node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select("body").node().getBoundingClientRect().height;

      var t = d3.transition().duration(250);

      //Generic gravity for the X position
      var forceX = d3.forceX(function (d) {
        return 250;
      }).strength(0.1);

      //Strong y positioning based on layer
      var forceY = d3.forceY(function (d) {
        return d.layer * 100;
      }).strength(0.5);
      //var forceY = d3.forceY(d => 250).strength(0.5);

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      })).force('charge', d3.forceManyBody().strength(-400)).force("x", forceX).force("y", forceY).force('center', d3.forceCenter(width / 2, height / 2));

      parent.call(d3.zoom().on('zoom', function () {
        svg.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
      }));

      var linkGroup = svg.selectAll('g.links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'links');
      }

      var link = linkGroup.selectAll('line.link').data(canvasLinks);

      link.exit().transition(t).remove();

      link = link.enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      });
      //.style('marker-end', 'url(#arrow)');

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

      var legendGroup = svg.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'legend');
      }

      /*var legend = legendGroup.selectAll('g')
        .data(d3.map(canvasNodes, d => d.layer).values(), d => d.id)
        .enter()
        .append('g')
        .attr('id', d => `legendLayer${d.layer}`)
        .attr('transform', function(d, i) {
          let x = 0;
          let y = i * 11;
          return `translate(${x},${y})`;
        });
       legend.append('rect')
        .attr('width', 10)
        .attr('height', 8)
        .style('fill', d => Graph.colors(d.layer * 6))
        .style('stroke', d => Graph.colors(d.layer * 6));
       legend.append('text')
        .attr('style', 'font-size: 10px;')
        .attr('x', 10 + 5)
        .attr('y', 10 - 2)
        .text(d => `Index ${d.layer}`);*/

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

        node.each(collide(0.5));
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

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM0MDg1MDQ4YjUzYThlZTRlNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiXSwibmFtZXMiOlsiSURVdGlscyIsImNhbnZhc0lkIiwib2JqZWN0SWQiLCJtZW51SWQiLCJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInBhcmVudCIsImpzb24iLCJjaGlsZHJlbk9wdGlvbnMiLCJvcHRpb25zIiwidXBkYXRlIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsIkVycm9yIiwiZDMiLCJpbnB1dCIsInBhcnNlIiwibWVudSIsImdyYXBoIiwiY2FudmFzIiwiYWRkIiwid2luZG93IiwiZWxlbWVudCIsIm5vZGUiLCJleHBvcnRzIiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsImUiLCJXaW5kb3ciLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiaWQiLCJzZWxlY3QiLCJsb2dnZXIiLCJhcHBlbmQiLCJyZW1vdmUiLCJhdHRyIiwicmVuZGVyQ2hpbGRyZW4iLCJCYXNlIiwiQ2FudmFzIiwiZ2V0Q2FudmFzSWQiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJkIiwidyIsImgiLCJkcmF3IiwiTWVudSIsImdldE1lbnVJZCIsImVudHJ5IiwiaHRtbCIsImNvbnRlbnQiLCJvbiIsImxvZyIsIm1lbnVJdGVtIiwiY2FsbGJhY2siLCJtZW51cyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInRpdGxlIiwic3VibWVudSIsImV4ZWN1dGUiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJyZXF1aXJlZEFyZ3MiLCJtb2RhbCIsIk1vZGFsIiwic2VsZiIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsInRleHQiLCJhcmciLCJ0eXBlIiwidmFsdWUiLCJvbmNoYW5nZSIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJuYW1lIiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsIndpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwidCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJjYWxsIiwiem9vbSIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibm9kZUdyb3VwIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsImxhYmVsR3JvdXAiLCJsYWJlbCIsImxlZ2VuZEdyb3VwIiwidGlja2VkIiwic3R5bGUiLCJjb2xvcnMiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInJhZGl1cyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaSIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LENBQXZCO0FBQ3RCeEksVUFBRTBJLEVBQUYsR0FBTyxJQUFQO0FBQ0ExSSxVQUFFMkksRUFBRixHQUFPLElBQVA7QUFDRDtBQUVGOzs7Ozs7a0JBalFrQi9GLEsiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjNDA4NTA0OGI1M2E4ZWU0ZTYxIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgcmVuZGVyZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBKc29uVXRpbHMgZnJvbSBcIi4vdXRpbC9qc29uLXV0aWxzXCI7XG5pbXBvcnQgV2luZG93IGZyb20gXCIuL3JlbmRlci93aW5kb3dcIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vcmVuZGVyL2NhbnZhc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vcmVuZGVyL21lbnVcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9yZW5kZXIvZ3JhcGhcIjtcbi8vaW1wb3J0IENoYXJ0IGZyb20gXCIuL3JlbmRlci9jaGFydFwiO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi5cIik7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIVwiKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3ZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIGNhbnZhcy5hZGQoZ3JhcGgpO1xuICAgICAgLy9jYW52YXMuYWRkKGNoYXJ0KTtcbiAgICAgIHZhciB3aW5kb3cgPSBuZXcgV2luZG93KHRoaXMub3B0aW9ucyk7XG4gICAgICB3aW5kb3cuYWRkKG1lbnUpO1xuICAgICAgd2luZG93LmFkZChjYW52YXMpO1xuICAgICAgdmFyIGVsZW1lbnQgPSB3aW5kb3cucmVuZGVyKGpzb24pO1xuICAgICAgcmV0dXJuIGVsZW1lbnQubm9kZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdChgIyR7d2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7d2luZG93SWR9XS4uLmApO1xuICAgICAgd2luZG93ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdkaXYnKS5yZW1vdmUoKVxuICAgICAgICAuYXR0cignaWQnLCB3aW5kb3dJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB3aW5kb3cnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkIFske3dpbmRvd0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYFdpbmRvdyByZWFkeTogJHt3aW5kb3d9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHdpbmRvdywganNvbik7XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvd2luZG93LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gcGFyZW50LnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgY2FudmFzID0gcGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcblxuICAgICAgY2FudmFzLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcblxuICAgIHZhciBkcmF3ID0gY2FudmFzLnNlbGVjdCgnZy5ncmFwaCcpO1xuXG4gICAgaWYgKCFkcmF3Lm5vZGUoKSkge1xuICAgICAgY2FudmFzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2dyYXBoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyByZWFkeTogJHtjYW52YXN9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBtZW51SWQgPSBJRFV0aWxzLmdldE1lbnVJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIG1lbnUgPSBwYXJlbnQuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgbWVudSA9IHBhcmVudC5hcHBlbmQoJ3VsJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ25hdicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICBtZW51LnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwiU2F2ZSB0byBQTkcgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhXCIpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIkFib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCFcIikpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIEZJWE1FIHRoZSBtZW51IGRlcHRoIGlzICdpbmZpbml0ZScsIGJ1dCB0aGlzIGltcGxlbWVudGF0aW9ucyBzdXBwb3J0cyBvbmx5IGRlcHRoID0gMSFcbiAgICBmb3IgKGxldCBtZW51SXRlbSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgICBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICAgIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGVudHJ5ID0gY29udGVudC5hcHBlbmQoJ2xpJyk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShzdWJtZW51KSkuYXR0cigndGl0bGUnLCBzdWJtZW51LnRpdGxlKS5odG1sKHN1Ym1lbnUudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKG1lbnVJdGVtKSkuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1lbnUgcmVhZHk6ICR7bWVudX1gKTtcblxuICAgIHJldHVybiBtZW51O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcblxuLy8gRklYTUUgaHR0cDovL2xvcmVkYW5hY2lyc3RlYS5naXRodWIuaW8vZXM2LWRlc2lnbi1wYXR0ZXJucy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmNhbGxiYWNrLnJlcXVpcmVkQXJncykge1xuICAgICAgdmFyIG1vZGFsID0gbmV3IE1vZGFsKHRoaXMub3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kYWwucmVuZGVyKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoY29uZmlnLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzLCBKdXB5dGVyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbGxiYWNrLmlkKTtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdmFyIG1vZGFsID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAganNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdicicpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24uY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuYXJnJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09IFwiUmVmZXJlbmNlRXJyb3JcIikge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uIFNraXBwaW5nLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHJlYWR5OiAke21vZGFsfWApO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IGpzb24uY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0ganNvbi5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuZ3JhcGgnKSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdChcImJvZHlcIikubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoXCJib2R5XCIpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigyNTApO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDEwMCkuc3RyZW5ndGgoMC41KTtcbiAgICAvL3ZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiAyNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHBhcmVudC5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH0pKTtcblxuICAgIHZhciBsaW5rR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsaW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5saW5rJykuZGF0YShjYW52YXNMaW5rcyk7XG5cbiAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKTtcbiAgICAvLy5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuXG4gICAgdmFyIG5vZGVHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLm5vZGUnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChkID0+IGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWApO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGFiZWxzJyk7XG5cbiAgICBpZiAoIWxhYmVsR3JvdXAubm9kZSgpKSB7XG4gICAgICBsYWJlbEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLyp2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGQzLm1hcChjYW52YXNOb2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKSwgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2QubGF5ZXJ9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xuICAgICAgfSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7Ki9cblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiXSwic291cmNlUm9vdCI6IiJ9