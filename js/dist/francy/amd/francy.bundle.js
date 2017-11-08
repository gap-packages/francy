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
        childrenOptions.appendTo = parent.node();
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

var _shape = __webpack_require__(12);

var _shape2 = _interopRequireDefault(_shape);

var _chartBar = __webpack_require__(13);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(14);

var _chartLine2 = _interopRequireDefault(_chartLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
        var shapes = new _shape2.default(this.options);
        //var lineChart = new LineChart(this.options);
        //var barChart = new BarChart(this.options);
        var canvas = new _canvas2.default(this.options);
        canvas.add(shapes);
        //canvas.add(lineChart);
        //canvas.add(barChart);
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
      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = d3.select(this.options.appendTo).append('svg').attr('id', canvasId).attr('class', 'canvas');
      }
      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);

      canvas = canvas.call(d3.zoom().on('zoom', function () {
        canvas.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
      })).append('g').attr('class', 'draw');

      canvas.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
        return d;
      }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');

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

      var window = d3.select(this.options.appendTo);

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = d3.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Menu [' + menuId + ']...');
        menu = window.append('ul').attr('class', 'nav').attr('id', menuId);
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
      return new _modal2.default(this.options).render(config);
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

var _renderer = __webpack_require__(1);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

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

      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var modal = d3.select(this.options.appendTo).append('div').attr('id', json.callback.id).attr('class', 'modal');

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
          content.append('input').attr('id', arg.id).attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
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
          self.options.callbackHandler(json);
          overlay.remove();
          modal.remove();
        }
      });
      footer.append('button').text('Cancel').on('click', function () {
        overlay.remove();
        modal.remove();
      });

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

var Shape = function (_Renderer) {
  _inherits(Shape, _Renderer);

  _createClass(Shape, null, [{
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

  function Shape(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Shape, [{
    key: 'render',
    value: function render(json) {
      var canvas = d3.select(this.options.appendTo);

      var canvasNodes = Object.values(json.canvas.nodes),
          canvasLinks = Object.values(json.canvas.links);

      var svg = canvas,
          width = +svg.attr('width'),
          height = +svg.attr('height');

      //Generic gravity for the X position
      var forceX = d3.forceX(function (d) {
        return 250;
      }).strength(0.1);

      //Strong y positioning based on layer
      var forceY = d3.forceY(function (d) {
        return d.layer * 50;
      }).strength(0.5);

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      })).force('charge', d3.forceManyBody().strength(-400)).force("x", forceX).force("y", forceY).force('center', d3.forceCenter(width / 2, height / 2));

      var link = svg.append('g').attr('class', 'links').selectAll('line').data(canvasLinks).enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).style('marker-end', 'url(#arrow)');

      var node = svg.append('g').attr('class', 'nodes').selectAll('g.nodes').data(canvasNodes, function (d) {
        return d.id;
      }).enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Shape.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 90;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'node' + (d.highlight ? ' highlight' : '');
      }).attr('id', function (d) {
        return d.id;
      }).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);

      node.append('title').text(function (d) {
        return 'ID:\t' + d.id + '\nLayer:\t' + d.layer;
      });

      var label = svg.append('g').attr('class', 'labels').selectAll('text').data(canvasNodes, function (d) {
        return d.id;
      }).enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      });

      var legend = svg.append('g').attr('class', 'legend').selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values(), function (d) {
        return d.id;
      }).enter().append('g').attr('id', function (d) {
        return 'legendLayer' + d.layer;
      }).attr('transform', function (d, i) {
        var x = 0;
        var y = i * 11;
        return 'translate(' + x + ',' + y + ')';
      });

      legend.append('rect').attr('width', 10).attr('height', 8).style('fill', function (d) {
        return Shape.colors(d.layer * 6);
      }).style('stroke', function (d) {
        return Shape.colors(d.layer * 6);
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
          return Shape.colors(d.layer * 6);
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

  return Shape;
}(_renderer2.default);

exports.default = Shape;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BarChart = function BarChart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, BarChart);

  this.width = 500;
  this.height = 300;
  this.barPadding = 1;
  this.fillColor = 'coral';
  this.data = [];
}

/*
  chart(selection) {
    selection.each(function() {

      var barSpacing = height / data.length;
      var barHeight = barSpacing - barPadding;
      var maxValue = d3.max(data);
      var widthScale = width / maxValue;

      var dom = d3.select(this);
      var svg = dom.append('svg')
        .attr('class', 'bar-chart')
        .attr('height', height)
        .attr('width', width)
        .style('fill', fillColor);

      var bars = svg.selectAll('rect.display-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'display-bar')
        .attr('y', function(d, i) { return i * barSpacing; })
        .attr('height', barHeight)
        .attr('x', 0)
        .attr('width', function(d) { return d * widthScale; });


      // update functions
      updateWidth = function() {
        widthScale = width / maxValue;
        bars.transition().duration(1000).attr('width', function(d) { return d * widthScale; });
        svg.transition().duration(1000).attr('width', width);
      };

      updateHeight = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        bars.transition().duration(1000).attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight);
        svg.transition().duration(1000).attr('height', height);

      };

      updateFillColor = function() {
        svg.transition().duration(1000).style('fill', fillColor);
      };

      updateData = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        maxValue = d3.max(data);
        widthScale = width / maxValue;

        var update = svg.selectAll('rect.display-bar')
          .data(data);

        update
          .transition()
          .duration(1000)
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', function(d) { return d * widthScale; });

        update.enter()
          .append('rect')
          .attr('class', 'display-bar')
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', 0)
          .style('opacity', 0)
          .transition()
          .duration(1000)
          .delay(function(d, i) { return (data.length - i) * 40; })
          .attr('width', function(d) { return d * widthScale; })
          .style('opacity', 1);

        update.exit()
          .transition()
          .duration(650)
          .delay(function(d, i) { return (data.length - i) * 20; })
          .style('opacity', 0)
          .attr('height', 0)
          .attr('x', 0)
          .attr('width', 0)
          .remove();
      }

    });
  }

  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    if (typeof updateWidth === 'function') updateWidth();
    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    if (typeof updateHeight === 'function') updateHeight();
    return chart;
  };

  chart.fillColor = function(value) {
    if (!arguments.length) return fillColor;
    fillColor = value;
    if (typeof updateFillColor === 'function') updateFillColor();
    return chart;
  };

  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    if (typeof updateData === 'function') updateData();
    return chart;
  };
  */

// All options that should be accessible to caller
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineChart = function LineChart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, LineChart);

  this.width = 500;
  this.height = 300;
  this.barPadding = 1;
  this.fillColor = 'coral';
  this.data = [];
}

/*
  chart(selection) {
    selection.each(function() {
       var barSpacing = height / data.length;
      var barHeight = barSpacing - barPadding;
      var maxValue = d3.max(data);
      var widthScale = width / maxValue;
       var dom = d3.select(this);
      var svg = dom.append('svg')
        .attr('class', 'bar-chart')
        .attr('height', height)
        .attr('width', width)
        .style('fill', fillColor);
       var bars = svg.selectAll('rect.display-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'display-bar')
        .attr('y', function(d, i) { return i * barSpacing; })
        .attr('height', barHeight)
        .attr('x', 0)
        .attr('width', function(d) { return d * widthScale; });
        // update functions
      updateWidth = function() {
        widthScale = width / maxValue;
        bars.transition().duration(1000).attr('width', function(d) { return d * widthScale; });
        svg.transition().duration(1000).attr('width', width);
      };
       updateHeight = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        bars.transition().duration(1000).attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight);
        svg.transition().duration(1000).attr('height', height);
       };
       updateFillColor = function() {
        svg.transition().duration(1000).style('fill', fillColor);
      };
       updateData = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        maxValue = d3.max(data);
        widthScale = width / maxValue;
         var update = svg.selectAll('rect.display-bar')
          .data(data);
         update
          .transition()
          .duration(1000)
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', function(d) { return d * widthScale; });
         update.enter()
          .append('rect')
          .attr('class', 'display-bar')
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', 0)
          .style('opacity', 0)
          .transition()
          .duration(1000)
          .delay(function(d, i) { return (data.length - i) * 40; })
          .attr('width', function(d) { return d * widthScale; })
          .style('opacity', 1);
         update.exit()
          .transition()
          .duration(650)
          .delay(function(d, i) { return (data.length - i) * 20; })
          .style('opacity', 0)
          .attr('height', 0)
          .attr('x', 0)
          .attr('width', 0)
          .remove();
      }
     });
  }
   chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    if (typeof updateWidth === 'function') updateWidth();
    return chart;
  };
   chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    if (typeof updateHeight === 'function') updateHeight();
    return chart;
  };
   chart.fillColor = function(value) {
    if (!arguments.length) return fillColor;
    fillColor = value;
    if (typeof updateFillColor === 'function') updateFillColor();
    return chart;
  };
   chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    if (typeof updateData === 'function') updateData();
    return chart;
  };
*/


// All options that should be accessible to caller
;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDA5ZDBkNjZhOTVjYWEwNDYyYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIl0sIm5hbWVzIjpbIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJwYXJlbnQiLCJqc29uIiwiY2hpbGRyZW5PcHRpb25zIiwib3B0aW9ucyIsIm5vZGUiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsImRlYnVnIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiRnJhbmN5IiwiRXJyb3IiLCJkMyIsImlucHV0IiwicGFyc2UiLCJtZW51Iiwic2hhcGVzIiwiY2FudmFzIiwiYWRkIiwid2luZG93IiwiZWxlbWVudCIsImV4cG9ydHMiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiZSIsIldpbmRvdyIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCJpZCIsInNlbGVjdCIsImxvZ2dlciIsImFwcGVuZCIsInJlbW92ZSIsImF0dHIiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiY2FsbCIsInpvb20iLCJvbiIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsIk1lbnUiLCJnZXRNZW51SWQiLCJlbnRyeSIsImh0bWwiLCJjb250ZW50IiwibG9nIiwibWVudUl0ZW0iLCJjYWxsYmFjayIsIm1lbnVzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwidGl0bGUiLCJzdWJtZW51IiwiZXhlY3V0ZSIsIkNhbGxiYWNrSGFuZGxlciIsImNvbmZpZyIsIk1vZGFsIiwic2VsZiIsIm92ZXJsYXkiLCJtb2RhbCIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwicmVxdWlyZWRBcmdzIiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiU2hhcGUiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yY2VYIiwic3RyZW5ndGgiLCJmb3JjZVkiLCJsYXllciIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNlbnRlciIsImxpbmsiLCJzb3VyY2UiLCJzdHlsZSIsInN5bWJvbCIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbCIsImxlZ2VuZCIsIm1hcCIsImkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInJhZGl1cyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0IiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJmeSIsIkJhckNoYXJ0IiwiYmFyUGFkZGluZyIsImZpbGxDb2xvciIsIkxpbmVDaGFydCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7SUFJcUJBLE87Ozs7Ozs7OztBQUVuQjs7Ozs7Z0NBS21CQyxRLEVBQVU7QUFDM0IsK0JBQXVCQSxRQUF2QjtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLbUJBLFEsRUFBVTtBQUMzQiwrQkFBdUJBLFFBQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUttQkMsUSxFQUFVO0FBQzNCLCtCQUF1QkEsUUFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBS2lCQyxNLEVBQVE7QUFDdkIsNkJBQXFCQSxNQUFyQjtBQUNEOzs7Ozs7a0JBcENrQkgsTzs7Ozs7Ozs7Ozs7OztBQ0pyQjs7Ozs7Ozs7Ozs7O0lBRXFCSSxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDQyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxvSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlDLElBQUlDLE1BQUosS0FBZUwsUUFBbkIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJTSxTQUFKLENBQWMsaURBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLQyxNQUFMLEtBQWdCQyxTQUFoQixJQUE2QixPQUFPLE1BQUtELE1BQVosS0FBdUIsVUFBeEQsRUFBb0U7QUFDbEUsWUFBTSxJQUFJRCxTQUFKLENBQWMsc0NBQWQsQ0FBTjtBQUNEO0FBUHlEO0FBUTNEOzs7OztrQkFWa0JOLFE7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCUyxTOzs7QUFJbkIsMkJBQTREO0FBQUEsNEJBQTlDUixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxzSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBQUEsVUFGNURPLFNBRTRELEdBRmhELEVBRWdEOztBQUUxRCxRQUFJTixJQUFJQyxNQUFKLEtBQWVJLFNBQW5CLEVBQThCO0FBQzVCLFlBQU0sSUFBSUgsU0FBSixDQUFjLGtEQUFkLENBQU47QUFDRDtBQUp5RDtBQUszRDs7Ozt3QkFFR0ssUSxFQUFVO0FBQ1osV0FBS0QsU0FBTCxDQUFlRSxJQUFmLENBQW9CRCxRQUFwQjtBQUNEOzs7bUNBRWNFLE0sRUFBUUMsSSxFQUFNO0FBQzNCO0FBQ0EsVUFBSUMsa0JBQWtCLEtBQUtDLE9BQTNCO0FBQ0EsVUFBSUgsTUFBSixFQUFZO0FBQ1ZFLHdCQUFnQmIsUUFBaEIsR0FBMkJXLE9BQU9JLElBQVAsRUFBM0I7QUFDRDtBQUNEO0FBTjJCO0FBQUE7QUFBQTs7QUFBQTtBQU8zQiw2QkFBcUIsS0FBS1AsU0FBMUIsOEhBQXFDO0FBQUEsY0FBNUJDLFFBQTRCOztBQUNuQ0EsbUJBQVNPLE1BQVQsQ0FBZ0JILGVBQWhCLEVBQWlDUixNQUFqQyxDQUF3Q08sSUFBeEM7QUFDRDtBQVQwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVTVCOzs7Ozs7a0JBekJrQkwsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckIsSUFBSVUsWUFBWSxJQUFoQjs7QUFFQTs7OztJQUdxQkMsTTs7QUFFbkI7Ozs7O0FBS0Esb0JBQXNDO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUF4Qm5CLE9BQXdCO0FBQUEsUUFBeEJBLE9BQXdCLGdDQUFkLEtBQWM7O0FBQUE7O0FBQ3BDLFFBQUksQ0FBQ2tCLFNBQUwsRUFBZ0I7QUFDZCxXQUFLbEIsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS29CLE9BQUwsR0FBZUEsT0FBZjtBQUNBRixrQkFBWSxJQUFaO0FBQ0QsS0FKRCxNQUtLO0FBQ0gsYUFBT0EsU0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzBCQUlNRyxPLEVBQVM7QUFDYixVQUFJLEtBQUtyQixPQUFULEVBQWtCO0FBQ2hCLGFBQUtvQixPQUFMLENBQWFFLEtBQWIsQ0FBbUIsS0FBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0JGLE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt5QkFJS0EsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhSSxJQUFiLENBQWtCLEtBQUtELE9BQUwsQ0FBYSxNQUFiLEVBQXFCRixPQUFyQixDQUFsQjtBQUNEOztBQUVEOzs7Ozs7OzswQkFLTUEsTyxFQUFTSSxNLEVBQU87QUFDcEIsV0FBS0wsT0FBTCxDQUFhSyxLQUFiLENBQW1CLEtBQUtGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCRixPQUF0QixDQUFuQixFQUFtREksTUFBbkQ7QUFDRDs7QUFFRDs7Ozs7Ozs0QkFJUUMsSyxFQUFPTCxPLEVBQVM7QUFDdEIsbUJBQVdLLEtBQVgsWUFBdUIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQXZCLFdBQXFEUCxPQUFyRDtBQUNEOzs7Ozs7a0JBbkRrQkYsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7OztJQUlhVSxNLFdBQUFBLE07O0FBRVg7Ozs7OztBQU1BLHdCQUE0RDtBQUFBLDRCQUE5QzdCLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUMxRCxRQUFJLENBQUNBLGVBQUwsRUFBc0I7QUFDcEIsWUFBTSxJQUFJNEIsS0FBSixDQUFVLHdHQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQzdCLFFBQUwsRUFBZTtBQUNiLFlBQU0sSUFBSTZCLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0Q7QUFDRCxRQUFJLENBQUNDLEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSUQsS0FBSixDQUFVLDRFQUFWLENBQU47QUFDRDtBQUNELFNBQUtmLE9BQUwsR0FBZTtBQUNiZixlQUFTQSxPQURJO0FBRWJDLGdCQUFVQSxRQUZHO0FBR2JDLHVCQUFpQkE7QUFISixLQUFmO0FBS0Q7O0FBRUQ7Ozs7Ozs7OzJCQUlPOEIsSyxFQUFPO0FBQ1osVUFBSW5CLE9BQU8sb0JBQVVvQixLQUFWLENBQWdCRCxLQUFoQixDQUFYO0FBQ0EsVUFBSW5CLElBQUosRUFBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQUlxQixPQUFPLG1CQUFTLEtBQUtuQixPQUFkLENBQVg7QUFDQSxZQUFJb0IsU0FBUyxvQkFBVSxLQUFLcEIsT0FBZixDQUFiO0FBQ0E7QUFDQTtBQUNBLFlBQUlxQixTQUFTLHFCQUFXLEtBQUtyQixPQUFoQixDQUFiO0FBQ0FxQixlQUFPQyxHQUFQLENBQVdGLE1BQVg7QUFDQTtBQUNBO0FBQ0EsWUFBSUcsU0FBUyxxQkFBVyxLQUFLdkIsT0FBaEIsQ0FBYjtBQUNBdUIsZUFBT0QsR0FBUCxDQUFXSCxJQUFYO0FBQ0FJLGVBQU9ELEdBQVAsQ0FBV0QsTUFBWDtBQUNBLFlBQUlHLFVBQVVELE9BQU9oQyxNQUFQLENBQWNPLElBQWQsQ0FBZDtBQUNBLGVBQU8wQixRQUFRdkIsSUFBUixFQUFQO0FBQ0Q7QUFDRjs7Ozs7O0FBR0h3QixRQUFRWCxNQUFSLEdBQWlCUyxPQUFPVCxNQUFQLEdBQWdCQSxNQUFqQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7O0lBR3FCWSxTOzs7Ozs7Ozs7QUFFbkI7Ozs7OzBCQUthVCxLLEVBQU87QUFDbEJBLGNBQVEsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUE0QlUsS0FBS0MsU0FBTCxDQUFlWCxLQUFmLENBQTVCLEdBQW9EQSxLQUE1RDtBQUNBQSxjQUFRQSxNQUFNWSxPQUFOLENBQWMscUJBQWQsRUFBcUMsRUFBckMsQ0FBUjtBQUNBLFVBQUlDLFlBQVksYUFBaEI7QUFDQSxVQUFJQyxRQUFRRCxVQUFVRSxJQUFWLENBQWVmLEtBQWYsQ0FBWjtBQUNBLFVBQUljLEtBQUosRUFBVztBQUNUZCxnQkFBUWMsTUFBTSxDQUFOLENBQVI7QUFDQSxZQUFJO0FBQ0YsY0FBSWpDLE9BQU82QixLQUFLVCxLQUFMLENBQVdELEtBQVgsQ0FBWDtBQUNBLGlCQUFPbkIsS0FBS21DLEtBQUwsS0FBZSw2QkFBZixHQUErQ25DLElBQS9DLEdBQXNETixTQUE3RDtBQUNELFNBSEQsQ0FJQSxPQUFPMEMsQ0FBUCxFQUFVO0FBQ1I3QixrQkFBUUssS0FBUixDQUFjd0IsQ0FBZDtBQUNEO0FBQ0Y7QUFDRCxhQUFPMUMsU0FBUDtBQUNEOzs7Ozs7a0JBdkJrQmtDLFM7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJTLE07OztBQUVuQix3QkFBNEQ7QUFBQSw0QkFBOUNsRCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwyR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU1XLEksRUFBTTtBQUNYLFVBQUlzQyxXQUFXLGtCQUFRQyxXQUFSLENBQW9CdkMsS0FBS3VCLE1BQUwsQ0FBWWlCLEVBQWhDLENBQWY7QUFDQSxVQUFJZixTQUFTUCxHQUFHdUIsTUFBSCxPQUFjSCxRQUFkLENBQWI7QUFDQTtBQUNBLFVBQUksQ0FBQ2IsT0FBT3RCLElBQVAsRUFBTCxFQUFvQjtBQUNsQjtBQUNBLGFBQUt1QyxNQUFMLENBQVlqQyxLQUFaLHVCQUFzQzZCLFFBQXRDO0FBQ0FiLGlCQUFTUCxHQUFHdUIsTUFBSCxDQUFVLEtBQUt2QyxPQUFMLENBQWFkLFFBQXZCLEVBQWlDdUQsTUFBakMsQ0FBd0MsS0FBeEMsRUFBK0NDLE1BQS9DLEdBQ05DLElBRE0sQ0FDRCxJQURDLEVBQ0tQLFFBREwsRUFFTk8sSUFGTSxDQUVELE9BRkMsRUFFUSxlQUZSLENBQVQ7QUFHRDtBQUNEO0FBQ0EsVUFBSSxDQUFDcEIsT0FBT3RCLElBQVAsRUFBTCxFQUFvQjtBQUNsQixjQUFNLElBQUljLEtBQUosNkNBQW9EcUIsUUFBcEQsMEJBQU47QUFDRDs7QUFFRCxXQUFLSSxNQUFMLENBQVlqQyxLQUFaLG9CQUFtQ2dCLE1BQW5DOztBQUVBLFdBQUtxQixjQUFMLENBQW9CckIsTUFBcEIsRUFBNEJ6QixJQUE1Qjs7QUFFQSxhQUFPeUIsTUFBUDtBQUNEOzs7Ozs7a0JBM0JrQlksTTs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7Ozs7OztJQUVxQlUsSTtBQUVuQixzQkFBNEQ7QUFBQSw0QkFBOUM1RCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFDMUQsU0FBS2EsT0FBTCxHQUFlO0FBQ2JmLGVBQVNBLE9BREk7QUFFYkMsZ0JBQVVBLFFBRkc7QUFHYkMsdUJBQWlCQTtBQUhKLEtBQWY7QUFLQSxTQUFLcUQsTUFBTCxHQUFjLHFCQUFXLEtBQUt4QyxPQUFoQixDQUFkO0FBQ0Q7Ozs7a0NBRXNEO0FBQUEsZ0NBQTlDZixPQUE4QztBQUFBLFVBQTlDQSxPQUE4QyxpQ0FBcEMsS0FBb0M7QUFBQSxVQUE3QkMsUUFBNkIsU0FBN0JBLFFBQTZCO0FBQUEsVUFBbkJDLGVBQW1CLFNBQW5CQSxlQUFtQjs7QUFDckQsV0FBS2EsT0FBTCxHQUFlO0FBQ2JmLGlCQUFTQSxPQURJO0FBRWJDLGtCQUFVQSxRQUZHO0FBR2JDLHlCQUFpQkE7QUFISixPQUFmO0FBS0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFsQmtCMEQsSTs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkMsTTs7O0FBRW5CLHdCQUE0RDtBQUFBLDRCQUE5QzdELE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDJHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTVcsSSxFQUFNO0FBQ1gsVUFBSWpCLFdBQVcsa0JBQVFrRSxXQUFSLENBQW9CakQsS0FBS3VCLE1BQUwsQ0FBWWlCLEVBQWhDLENBQWY7QUFDQSxVQUFJakIsU0FBU0wsR0FBR3VCLE1BQUgsVUFBaUIxRCxRQUFqQixDQUFiO0FBQ0E7QUFDQSxVQUFJLENBQUN3QyxPQUFPcEIsSUFBUCxFQUFMLEVBQW9CO0FBQ2xCO0FBQ0EsYUFBS3VDLE1BQUwsQ0FBWWpDLEtBQVosdUJBQXNDMUIsUUFBdEM7QUFDQXdDLGlCQUFTTCxHQUFHdUIsTUFBSCxDQUFVLEtBQUt2QyxPQUFMLENBQWFkLFFBQXZCLEVBQWlDdUQsTUFBakMsQ0FBd0MsS0FBeEMsRUFDTkUsSUFETSxDQUNELElBREMsRUFDSzlELFFBREwsRUFFTjhELElBRk0sQ0FFRCxPQUZDLEVBRVEsUUFGUixDQUFUO0FBR0Q7QUFDRDtBQUNBLFVBQUksQ0FBQ3RCLE9BQU9wQixJQUFQLEVBQUwsRUFBb0I7QUFDbEIsY0FBTSxJQUFJYyxLQUFKLDZDQUFvRGxDLFFBQXBELDBCQUFOO0FBQ0Q7O0FBRUR3QyxhQUFPc0IsSUFBUCxDQUFZLE9BQVosRUFBcUI3QyxLQUFLdUIsTUFBTCxDQUFZMkIsQ0FBakMsRUFBb0NMLElBQXBDLENBQXlDLFFBQXpDLEVBQW1EN0MsS0FBS3VCLE1BQUwsQ0FBWTRCLENBQS9EOztBQUVBNUIsZUFBU0EsT0FBTzZCLElBQVAsQ0FBWWxDLEdBQUdtQyxJQUFILEdBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVc7QUFDbkQvQixlQUFPc0IsSUFBUCxDQUFZLFdBQVosaUJBQXNDM0IsR0FBR3FDLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQkMsQ0FBekQsU0FBOER2QyxHQUFHcUMsS0FBSCxDQUFTQyxTQUFULENBQW1CRSxDQUFqRixnQkFBNkZ4QyxHQUFHcUMsS0FBSCxDQUFTQyxTQUFULENBQW1CRyxDQUFoSDtBQUNELE9BRm9CLENBQVosRUFFTGhCLE1BRkssQ0FFRSxHQUZGLEVBRU9FLElBRlAsQ0FFWSxPQUZaLEVBRXFCLE1BRnJCLENBQVQ7O0FBSUF0QixhQUFPb0IsTUFBUCxDQUFjLE1BQWQsRUFBc0JpQixTQUF0QixDQUFnQyxRQUFoQyxFQUNHQyxJQURILENBQ1EsQ0FBQyxPQUFELENBRFIsRUFFR0MsS0FGSCxHQUVXbkIsTUFGWCxDQUVrQixRQUZsQixFQUdHRSxJQUhILENBR1EsT0FIUixFQUdpQixRQUhqQixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljO0FBQUEsZUFBS2tCLENBQUw7QUFBQSxPQUpkLEVBS0dsQixJQUxILENBS1EsU0FMUixFQUttQixZQUxuQixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixFQU5oQixFQU9HQSxJQVBILENBT1EsTUFQUixFQU9nQixDQVBoQixFQVFHQSxJQVJILENBUVEsYUFSUixFQVF1QixFQVJ2QixFQVNHQSxJQVRILENBU1EsY0FUUixFQVN3QixFQVR4QixFQVVHQSxJQVZILENBVVEsUUFWUixFQVVrQixNQVZsQixFQVdHRixNQVhILENBV1UsTUFYVixFQVlHRSxJQVpILENBWVEsR0FaUixFQVlhLDZCQVpiOztBQWNBLFdBQUtILE1BQUwsQ0FBWWpDLEtBQVosb0JBQW1DYyxNQUFuQzs7QUFFQSxXQUFLdUIsY0FBTCxDQUFvQnZCLE1BQXBCLEVBQTRCdkIsSUFBNUI7O0FBRUEsYUFBT3VCLE1BQVA7QUFDRDs7Ozs7O2tCQS9Da0J5QixNOzs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJnQixJOzs7QUFFbkIsc0JBQTREO0FBQUEsNEJBQTlDN0UsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsdUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNVyxJLEVBQU07QUFBQTs7QUFDWCxVQUFJeUIsU0FBU1AsR0FBR3VCLE1BQUgsQ0FBVSxLQUFLdkMsT0FBTCxDQUFhZCxRQUF2QixDQUFiOztBQUVBLFVBQUlILFNBQVMsa0JBQVFnRixTQUFSLENBQWtCakUsS0FBS3VCLE1BQUwsQ0FBWWlCLEVBQTlCLENBQWI7QUFDQSxVQUFJbkIsT0FBT0gsR0FBR3VCLE1BQUgsT0FBY3hELE1BQWQsQ0FBWDs7QUFFQTtBQUNBLFVBQUksQ0FBQ29DLEtBQUtsQixJQUFMLEVBQUwsRUFBa0I7QUFDaEI7QUFDQSxhQUFLdUMsTUFBTCxDQUFZakMsS0FBWixxQkFBb0N4QixNQUFwQztBQUNBb0MsZUFBT0ksT0FBT2tCLE1BQVAsQ0FBYyxJQUFkLEVBQ0pFLElBREksQ0FDQyxPQURELEVBQ1UsS0FEVixFQUNpQkEsSUFEakIsQ0FDc0IsSUFEdEIsRUFDNEI1RCxNQUQ1QixDQUFQO0FBRUQ7O0FBRUQ7QUFDQW9DLFdBQUt1QyxTQUFMLENBQWUsR0FBZixFQUFvQmhCLE1BQXBCOztBQUVBLFVBQUlzQixRQUFRN0MsS0FBS3NCLE1BQUwsQ0FBWSxJQUFaLENBQVo7QUFDQXVCLFlBQU12QixNQUFOLENBQWEsR0FBYixFQUFrQkUsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0IsR0FBL0IsRUFBb0NzQixJQUFwQyxDQUF5QyxRQUF6QztBQUNBLFVBQUlDLFVBQVVGLE1BQU12QixNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0F5QixjQUFRekIsTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDRSxJQUFqQyxDQUFzQyxNQUF0QyxFQUE4QyxHQUE5QyxFQUFtRFMsRUFBbkQsQ0FBc0QsT0FBdEQsRUFBK0Q7QUFBQSxlQUFNL0MsUUFBUThELEdBQVIsQ0FBWSx5Q0FBWixDQUFOO0FBQUEsT0FBL0QsRUFBNkh4QixJQUE3SCxDQUFrSSxPQUFsSSxFQUEySSxhQUEzSSxFQUEwSnNCLElBQTFKLENBQStKLGFBQS9KO0FBQ0FDLGNBQVF6QixNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUNFLElBQWpDLENBQXNDLE1BQXRDLEVBQThDLEdBQTlDLEVBQW1EUyxFQUFuRCxDQUFzRCxPQUF0RCxFQUErRDtBQUFBLGVBQU0vQyxRQUFROEQsR0FBUixDQUFZLDBDQUFaLENBQU47QUFBQSxPQUEvRCxFQUE4SHhCLElBQTlILENBQW1JLE9BQW5JLEVBQTRJLE9BQTVJLEVBQXFKc0IsSUFBckosQ0FBMEosT0FBMUo7O0FBRUE7O0FBdkJXLGlDQXdCRkcsUUF4QkU7QUF5QkxDLG1CQUFXLHVCQUFhLE9BQUtyRSxPQUFsQixDQXpCTjs7QUEwQlRnRSxnQkFBUTdDLEtBQUtzQixNQUFMLENBQVksSUFBWixDQUFSO0FBQ0EsWUFBSTJCLFNBQVNFLEtBQVQsSUFBa0JDLE9BQU9DLE1BQVAsQ0FBY0osU0FBU0UsS0FBdkIsRUFBOEJHLE1BQTlCLEdBQXVDLENBQTdELEVBQWdFO0FBQzlEVCxnQkFBTXZCLE1BQU4sQ0FBYSxHQUFiLEVBQWtCRSxJQUFsQixDQUF1QixNQUF2QixFQUErQixHQUEvQixFQUFvQ3NCLElBQXBDLENBQXlDRyxTQUFTTSxLQUFsRDtBQUNBUixvQkFBVUYsTUFBTXZCLE1BQU4sQ0FBYSxJQUFiLENBQVY7QUFDQXVCLGtCQUFRRSxRQUFRekIsTUFBUixDQUFlLElBQWYsQ0FBUjs7QUFIOEQsdUNBSXJEa0MsT0FKcUQ7QUFLNUROLHVCQUFXLHVCQUFhLE9BQUtyRSxPQUFsQixDQUFYO0FBQ0FnRSxrQkFBTXZCLE1BQU4sQ0FBYSxHQUFiLEVBQWtCRSxJQUFsQixDQUF1QixNQUF2QixFQUErQixHQUEvQixFQUFvQ1MsRUFBcEMsQ0FBdUMsT0FBdkMsRUFBZ0Q7QUFBQSxxQkFBTWlCLFNBQVNPLE9BQVQsQ0FBaUJELE9BQWpCLENBQU47QUFBQSxhQUFoRCxFQUFpRmhDLElBQWpGLENBQXNGLE9BQXRGLEVBQStGZ0MsUUFBUUQsS0FBdkcsRUFBOEdULElBQTlHLENBQW1IVSxRQUFRRCxLQUEzSDtBQU40RDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJOUQsa0NBQW9CSCxPQUFPQyxNQUFQLENBQWNKLFNBQVNFLEtBQXZCLENBQXBCLG1JQUFtRDtBQUFBLGtCQUExQ0ssT0FBMEM7O0FBQUEscUJBQTFDQSxPQUEwQztBQUdsRDtBQVA2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUS9ELFNBUkQsTUFTSztBQUNIWCxnQkFBTXZCLE1BQU4sQ0FBYSxHQUFiLEVBQWtCRSxJQUFsQixDQUF1QixNQUF2QixFQUErQixHQUEvQixFQUFvQ1MsRUFBcEMsQ0FBdUMsT0FBdkMsRUFBZ0Q7QUFBQSxtQkFBTWlCLFNBQVNPLE9BQVQsQ0FBaUJSLFFBQWpCLENBQU47QUFBQSxXQUFoRCxFQUFrRnpCLElBQWxGLENBQXVGLE9BQXZGLEVBQWdHeUIsU0FBU00sS0FBekcsRUFBZ0hULElBQWhILENBQXFIRyxTQUFTTSxLQUE5SDtBQUNEO0FBdENROztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXdCWCw2QkFBcUJILE9BQU9DLE1BQVAsQ0FBYzFFLEtBQUt1QixNQUFMLENBQVlpRCxLQUExQixDQUFyQiw4SEFBdUQ7QUFBQSxjQUE5Q0YsUUFBOEM7QUFBQSxjQUNqREMsUUFEaUQ7O0FBQUEsZ0JBQTlDRCxRQUE4QztBQWV0RDtBQXZDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXlDWCxXQUFLNUIsTUFBTCxDQUFZakMsS0FBWixrQkFBaUNZLElBQWpDOztBQUVBLGFBQU9BLElBQVA7QUFDRDs7Ozs7O2tCQWxEa0IyQyxJOzs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7SUFFcUJlLGU7QUFFbkIsaUNBQTREO0FBQUEsNEJBQTlDNUYsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQzFELFNBQUthLE9BQUwsR0FBZTtBQUNiZixlQUFTQSxPQURJO0FBRWJDLGdCQUFVQSxRQUZHO0FBR2JDLHVCQUFpQkE7QUFISixLQUFmO0FBS0EsU0FBS3FELE1BQUwsR0FBYyxxQkFBVyxFQUFFdkQsU0FBU0EsT0FBWCxFQUFYLENBQWQ7QUFDRDs7Ozs0QkFFTzZGLE0sRUFBUTtBQUNkLGFBQU8sb0JBQVUsS0FBSzlFLE9BQWYsRUFBd0JULE1BQXhCLENBQStCdUYsTUFBL0IsQ0FBUDtBQUNEOzs7Ozs7a0JBYmtCRCxlOzs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkUsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5QzlGLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHlHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTVcsSSxFQUFNO0FBQ1gsVUFBSWtGLE9BQU8sSUFBWDs7QUFFQSxVQUFJQyxVQUFVakUsR0FBR3VCLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxNQUFsQixDQUF5QixLQUF6QixFQUFnQ0UsSUFBaEMsQ0FBcUMsT0FBckMsRUFBOEMsZ0JBQTlDLENBQWQ7QUFDQSxVQUFJdUMsUUFBUWxFLEdBQUd1QixNQUFILENBQVUsS0FBS3ZDLE9BQUwsQ0FBYWQsUUFBdkIsRUFBaUN1RCxNQUFqQyxDQUF3QyxLQUF4QyxFQUNURSxJQURTLENBQ0osSUFESSxFQUNFN0MsS0FBS3VFLFFBQUwsQ0FBYy9CLEVBRGhCLEVBRVRLLElBRlMsQ0FFSixPQUZJLEVBRUssT0FGTCxDQUFaOztBQUlBLFVBQUl3QyxPQUFPRCxNQUFNekMsTUFBTixDQUFhLE1BQWIsQ0FBWDs7QUFFQSxVQUFJMkMsU0FBU0QsS0FBSzFDLE1BQUwsQ0FBWSxLQUFaLEVBQW1CRSxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxRQUFqQyxDQUFiOztBQUVBeUMsYUFBTzNDLE1BQVAsQ0FBYyxNQUFkLEVBQXNCd0IsSUFBdEIsQ0FBMkIsOEJBQTNCLEVBQTJEeEIsTUFBM0QsQ0FBa0UsTUFBbEUsRUFBMEVFLElBQTFFLENBQStFLE9BQS9FLEVBQXdGLG9CQUF4RixFQUE4RzBDLElBQTlHLENBQW1IdkYsS0FBSzRFLEtBQXhIOztBQUVBLFVBQUlSLFVBQVVpQixLQUFLMUMsTUFBTCxDQUFZLEtBQVosRUFBbUJFLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLFNBQWpDLENBQWQ7O0FBZFc7QUFBQTtBQUFBOztBQUFBO0FBZ0JYLDZCQUFnQjRCLE9BQU9DLE1BQVAsQ0FBYzFFLEtBQUt1RSxRQUFMLENBQWNpQixZQUE1QixDQUFoQiw4SEFBMkQ7QUFBQSxjQUFsREMsR0FBa0Q7O0FBQ3pEckIsa0JBQVF6QixNQUFSLENBQWUsT0FBZixFQUF3QkUsSUFBeEIsQ0FBNkIsS0FBN0IsRUFBb0M0QyxJQUFJakQsRUFBeEMsRUFBNEMrQyxJQUE1QyxDQUFpREUsSUFBSWIsS0FBckQ7QUFDQVIsa0JBQVF6QixNQUFSLENBQWUsT0FBZixFQUF3QkUsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUM0QyxJQUFJakQsRUFBdkMsRUFDR0ssSUFESCxDQUNRLFVBRFIsRUFDb0IsRUFEcEIsRUFFR0EsSUFGSCxDQUVRLE1BRlIsRUFFZ0I0QyxJQUFJakQsRUFGcEIsRUFHR0ssSUFISCxDQUdRLE1BSFIsRUFHZ0I0QyxJQUFJQyxJQUhwQixFQUlHN0MsSUFKSCxDQUlRLE9BSlIsRUFJaUI0QyxJQUFJRSxLQUpyQixFQUtHckMsRUFMSCxDQUtNLFFBTE4sRUFLZ0IsWUFBVztBQUN2QnRELGlCQUFLdUUsUUFBTCxDQUFjaUIsWUFBZCxDQUEyQixLQUFLaEQsRUFBaEMsRUFBb0NtRCxLQUFwQyxHQUE0QyxLQUFLQSxLQUFqRDtBQUNELFdBUEgsRUFRR3JDLEVBUkgsQ0FRTSxPQVJOLEVBUWUsS0FBS3NDLFFBUnBCLEVBU0d0QyxFQVRILENBU00sT0FUTixFQVNlLEtBQUtzQyxRQVRwQixFQVVHdEMsRUFWSCxDQVVNLE9BVk4sRUFVZSxLQUFLc0MsUUFWcEI7QUFXQXhCLGtCQUFRekIsTUFBUixDQUFlLE1BQWYsRUFBdUJFLElBQXZCLENBQTRCLE9BQTVCLEVBQXFDLFVBQXJDO0FBQ0F1QixrQkFBUXpCLE1BQVIsQ0FBZSxJQUFmO0FBQ0Q7QUEvQlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQ1gsVUFBSWtELFNBQVNSLEtBQUsxQyxNQUFMLENBQVksS0FBWixFQUFtQkUsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsUUFBakMsQ0FBYjs7QUFFQWdELGFBQU9sRCxNQUFQLENBQWMsUUFBZCxFQUF3QjRDLElBQXhCLENBQTZCLElBQTdCLEVBQW1DakMsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBVztBQUN4RCxZQUFJK0IsS0FBS2xGLElBQUwsR0FBWTJGLGFBQVosRUFBSixFQUFpQztBQUMvQlosZUFBS2hGLE9BQUwsQ0FBYWIsZUFBYixDQUE2QlcsSUFBN0I7QUFDQW1GLGtCQUFRdkMsTUFBUjtBQUNBd0MsZ0JBQU14QyxNQUFOO0FBQ0Q7QUFDRixPQU5EO0FBT0FpRCxhQUFPbEQsTUFBUCxDQUFjLFFBQWQsRUFBd0I0QyxJQUF4QixDQUE2QixRQUE3QixFQUF1Q2pDLEVBQXZDLENBQTBDLE9BQTFDLEVBQW1ELFlBQVc7QUFDNUQ2QixnQkFBUXZDLE1BQVI7QUFDQXdDLGNBQU14QyxNQUFOO0FBQ0QsT0FIRDs7QUFLQSxhQUFPd0MsS0FBUDtBQUNEOzs7Ozs7a0JBdERrQkgsSzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQmMsSzs7Ozs7OEJBT0ZMLEksRUFBTTtBQUNyQixVQUFJQSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsZUFBT3hFLEdBQUc4RSxZQUFWO0FBQ0QsT0FGRCxNQUdLLElBQUlOLFNBQVMsT0FBYixFQUFzQjtBQUN6QixlQUFPeEUsR0FBRytFLFdBQVY7QUFDRCxPQUZJLE1BR0EsSUFBSVAsU0FBUyxTQUFiLEVBQXdCO0FBQzNCLGVBQU94RSxHQUFHZ0YsYUFBVjtBQUNELE9BRkksTUFHQSxJQUFJUixTQUFTLFFBQWIsRUFBdUI7QUFDMUIsZUFBT3hFLEdBQUdpRixZQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUlULFNBQVMsVUFBYixFQUF5QjtBQUM1QixlQUFPeEUsR0FBR2tGLGNBQVY7QUFDRCxPQUZJLE1BR0EsSUFBSVYsU0FBUyxNQUFiLEVBQXFCO0FBQ3hCLGVBQU94RSxHQUFHbUYsVUFBVjtBQUNELE9BRkksTUFHQSxJQUFJWCxTQUFTLEtBQWIsRUFBb0I7QUFDdkIsZUFBT3hFLEdBQUdvRixTQUFWO0FBQ0QsT0FGSSxNQUdBO0FBQ0gsZUFBT3BGLEdBQUc4RSxZQUFWO0FBQ0Q7QUFDRjs7O3dCQTdCbUI7QUFDbEIsYUFBTzlFLEdBQUdxRixlQUFILEdBQXFCQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDQyxZQUF0QyxDQUFtRHZGLEdBQUd3RixrQkFBdEQsQ0FBUDtBQUNEOzs7QUE2QkQsdUJBQTREO0FBQUEsNEJBQTlDdkgsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNVyxJLEVBQU07QUFDWCxVQUFJdUIsU0FBU0wsR0FBR3VCLE1BQUgsQ0FBVSxLQUFLdkMsT0FBTCxDQUFhZCxRQUF2QixDQUFiOztBQUVBLFVBQUl1SCxjQUFjbEMsT0FBT0MsTUFBUCxDQUFjMUUsS0FBS3VCLE1BQUwsQ0FBWXFGLEtBQTFCLENBQWxCO0FBQUEsVUFDRUMsY0FBY3BDLE9BQU9DLE1BQVAsQ0FBYzFFLEtBQUt1QixNQUFMLENBQVl1RixLQUExQixDQURoQjs7QUFHQSxVQUFJQyxNQUFNeEYsTUFBVjtBQUFBLFVBQ0V5RixRQUFRLENBQUNELElBQUlsRSxJQUFKLENBQVMsT0FBVCxDQURYO0FBQUEsVUFFRW9FLFNBQVMsQ0FBQ0YsSUFBSWxFLElBQUosQ0FBUyxRQUFULENBRlo7O0FBSUE7QUFDQSxVQUFJcUUsU0FBU2hHLEdBQUdnRyxNQUFILENBQVU7QUFBQSxlQUFLLEdBQUw7QUFBQSxPQUFWLEVBQW9CQyxRQUFwQixDQUE2QixHQUE3QixDQUFiOztBQUVBO0FBQ0EsVUFBSUMsU0FBU2xHLEdBQUdrRyxNQUFILENBQVU7QUFBQSxlQUFLckQsRUFBRXNELEtBQUYsR0FBVSxFQUFmO0FBQUEsT0FBVixFQUE2QkYsUUFBN0IsQ0FBc0MsR0FBdEMsQ0FBYjs7QUFFQSxVQUFJRyxhQUFhcEcsR0FBR3FHLGVBQUgsR0FDZEMsS0FEYyxDQUNSLE1BRFEsRUFDQXRHLEdBQUd1RyxTQUFILEdBQWVqRixFQUFmLENBQWtCO0FBQUEsZUFBS3VCLEVBQUV2QixFQUFQO0FBQUEsT0FBbEIsQ0FEQSxFQUVkZ0YsS0FGYyxDQUVSLFFBRlEsRUFFRXRHLEdBQUd3RyxhQUFILEdBQW1CUCxRQUFuQixDQUE0QixDQUFDLEdBQTdCLENBRkYsRUFHZEssS0FIYyxDQUdSLEdBSFEsRUFHSE4sTUFIRyxFQUlkTSxLQUpjLENBSVIsR0FKUSxFQUlISixNQUpHLEVBS2RJLEtBTGMsQ0FLUixRQUxRLEVBS0V0RyxHQUFHeUcsV0FBSCxDQUFlWCxRQUFRLENBQXZCLEVBQTBCQyxTQUFTLENBQW5DLENBTEYsQ0FBakI7O0FBT0EsVUFBSVcsT0FBT2IsSUFBSXBFLE1BQUosQ0FBVyxHQUFYLEVBQ1JFLElBRFEsQ0FDSCxPQURHLEVBQ00sT0FETixFQUVSZSxTQUZRLENBRUUsTUFGRixFQUdSQyxJQUhRLENBR0hnRCxXQUhHLEVBSVIvQyxLQUpRLEdBSUFuQixNQUpBLENBSU8sTUFKUCxFQUtSRSxJQUxRLENBS0gsT0FMRyxFQUtNLE1BTE4sRUFNUkEsSUFOUSxDQU1ILElBTkcsRUFNRztBQUFBLGVBQVFrQixFQUFFOEQsTUFBVixTQUFvQjlELEVBQUV4RSxNQUF0QjtBQUFBLE9BTkgsRUFPUnVJLEtBUFEsQ0FPRixZQVBFLEVBT1ksYUFQWixDQUFYOztBQVNBLFVBQUkzSCxPQUFPNEcsSUFBSXBFLE1BQUosQ0FBVyxHQUFYLEVBQ1JFLElBRFEsQ0FDSCxPQURHLEVBQ00sT0FETixFQUNlZSxTQURmLENBQ3lCLFNBRHpCLEVBRVJDLElBRlEsQ0FFSDhDLFdBRkcsRUFFVTtBQUFBLGVBQUs1QyxFQUFFdkIsRUFBUDtBQUFBLE9BRlYsRUFHUnNCLEtBSFEsR0FHQW5CLE1BSEEsQ0FHTyxNQUhQLEVBSVJFLElBSlEsQ0FJSCxHQUpHLEVBSUUzQixHQUFHNkcsTUFBSCxHQUFZckMsSUFBWixDQUFpQjtBQUFBLGVBQUtLLE1BQU1pQyxTQUFOLENBQWdCakUsRUFBRTJCLElBQWxCLENBQUw7QUFBQSxPQUFqQixFQUErQ3VDLElBQS9DLENBQW9EO0FBQUEsZUFBS2xFLEVBQUVrRSxJQUFGLEdBQVMsRUFBZDtBQUFBLE9BQXBELENBSkYsRUFLUnBGLElBTFEsQ0FLSCxXQUxHLEVBS1UsZ0JBTFYsRUFNUkEsSUFOUSxDQU1ILE9BTkcsRUFNTTtBQUFBLGVBQUssVUFBVWtCLEVBQUVtRSxTQUFGLEdBQWMsWUFBZCxHQUE2QixFQUF2QyxDQUFMO0FBQUEsT0FOTixFQU9SckYsSUFQUSxDQU9ILElBUEcsRUFPRztBQUFBLGVBQUtrQixFQUFFdkIsRUFBUDtBQUFBLE9BUEgsRUFRUlksSUFSUSxDQVFIbEMsR0FBR2lILElBQUgsR0FDSDdFLEVBREcsQ0FDQSxPQURBLEVBQ1M4RSxXQURULEVBRUg5RSxFQUZHLENBRUEsTUFGQSxFQUVRK0UsT0FGUixFQUdIL0UsRUFIRyxDQUdBLEtBSEEsRUFHT2dGLFNBSFAsQ0FSRztBQVlUO0FBWlMsT0FhUmhGLEVBYlEsQ0FhTCxPQWJLLEVBYUlpRixjQWJKLENBQVg7O0FBZUFwSSxXQUFLd0MsTUFBTCxDQUFZLE9BQVosRUFBcUI0QyxJQUFyQixDQUEwQixVQUFTeEIsQ0FBVCxFQUFZO0FBQ3BDLHlCQUFlQSxFQUFFdkIsRUFBakIsa0JBQWdDdUIsRUFBRXNELEtBQWxDO0FBQ0QsT0FGRDs7QUFJQSxVQUFJbUIsUUFBUXpCLElBQUlwRSxNQUFKLENBQVcsR0FBWCxFQUNURSxJQURTLENBQ0osT0FESSxFQUNLLFFBREwsRUFFVGUsU0FGUyxDQUVDLE1BRkQsRUFHVEMsSUFIUyxDQUdKOEMsV0FISSxFQUdTO0FBQUEsZUFBSzVDLEVBQUV2QixFQUFQO0FBQUEsT0FIVCxFQUlUc0IsS0FKUyxHQUlEbkIsTUFKQyxDQUlNLE1BSk4sRUFLVEUsSUFMUyxDQUtKLE9BTEksRUFLSyxPQUxMLEVBTVQwQyxJQU5TLENBTUo7QUFBQSxlQUFLeEIsRUFBRWEsS0FBUDtBQUFBLE9BTkksQ0FBWjs7QUFRQSxVQUFJNkQsU0FBUzFCLElBQ1ZwRSxNQURVLENBQ0gsR0FERyxFQUVWRSxJQUZVLENBRUwsT0FGSyxFQUVJLFFBRkosRUFHVmUsU0FIVSxDQUdBLEdBSEEsRUFJVkMsSUFKVSxDQUlMM0MsR0FBR3dILEdBQUgsQ0FBTy9CLFdBQVAsRUFBb0I7QUFBQSxlQUFLNUMsRUFBRXNELEtBQVA7QUFBQSxPQUFwQixFQUFrQzNDLE1BQWxDLEVBSkssRUFJdUM7QUFBQSxlQUFLWCxFQUFFdkIsRUFBUDtBQUFBLE9BSnZDLEVBS1ZzQixLQUxVLEdBTVZuQixNQU5VLENBTUgsR0FORyxFQU9WRSxJQVBVLENBT0wsSUFQSyxFQU9DO0FBQUEsK0JBQW1Ca0IsRUFBRXNELEtBQXJCO0FBQUEsT0FQRCxFQVFWeEUsSUFSVSxDQVFMLFdBUkssRUFRUSxVQUFTa0IsQ0FBVCxFQUFZNEUsQ0FBWixFQUFlO0FBQ2hDLFlBQUlsRixJQUFJLENBQVI7QUFDQSxZQUFJQyxJQUFJaUYsSUFBSSxFQUFaO0FBQ0EsOEJBQW9CbEYsQ0FBcEIsU0FBeUJDLENBQXpCO0FBQ0QsT0FaVSxDQUFiOztBQWNBK0UsYUFBTzlGLE1BQVAsQ0FBYyxNQUFkLEVBQ0dFLElBREgsQ0FDUSxPQURSLEVBQ2lCLEVBRGpCLEVBRUdBLElBRkgsQ0FFUSxRQUZSLEVBRWtCLENBRmxCLEVBR0dpRixLQUhILENBR1MsTUFIVCxFQUdpQjtBQUFBLGVBQUsvQixNQUFNNkMsTUFBTixDQUFhN0UsRUFBRXNELEtBQUYsR0FBVSxDQUF2QixDQUFMO0FBQUEsT0FIakIsRUFJR1MsS0FKSCxDQUlTLFFBSlQsRUFJbUI7QUFBQSxlQUFLL0IsTUFBTTZDLE1BQU4sQ0FBYTdFLEVBQUVzRCxLQUFGLEdBQVUsQ0FBdkIsQ0FBTDtBQUFBLE9BSm5COztBQU1Bb0IsYUFBTzlGLE1BQVAsQ0FBYyxNQUFkLEVBQ0dFLElBREgsQ0FDUSxPQURSLEVBQ2lCLGtCQURqQixFQUVHQSxJQUZILENBRVEsR0FGUixFQUVhLEtBQUssQ0FGbEIsRUFHR0EsSUFISCxDQUdRLEdBSFIsRUFHYSxLQUFLLENBSGxCLEVBSUcwQyxJQUpILENBSVE7QUFBQSwwQkFBY3hCLEVBQUVzRCxLQUFoQjtBQUFBLE9BSlI7O0FBTUFDLGlCQUFXVixLQUFYLENBQWlCRCxXQUFqQixFQUE4QnJELEVBQTlCLENBQWlDLE1BQWpDLEVBQXlDdUYsTUFBekM7O0FBRUF2QixpQkFBV0UsS0FBWCxDQUFpQixNQUFqQixFQUF5QlYsS0FBekIsQ0FBK0JELFdBQS9COztBQUVBLGVBQVNnQyxNQUFULEdBQWtCO0FBQ2hCakIsYUFDRy9FLElBREgsQ0FDUSxJQURSLEVBQ2M7QUFBQSxpQkFBS2tCLEVBQUU4RCxNQUFGLENBQVNwRSxDQUFkO0FBQUEsU0FEZCxFQUVHWixJQUZILENBRVEsSUFGUixFQUVjO0FBQUEsaUJBQUtrQixFQUFFOEQsTUFBRixDQUFTbkUsQ0FBZDtBQUFBLFNBRmQsRUFHR2IsSUFISCxDQUdRLElBSFIsRUFHYztBQUFBLGlCQUFLa0IsRUFBRXhFLE1BQUYsQ0FBU2tFLENBQWQ7QUFBQSxTQUhkLEVBSUdaLElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBS2tCLEVBQUV4RSxNQUFGLENBQVNtRSxDQUFkO0FBQUEsU0FKZDs7QUFNQXZELGFBQ0cySCxLQURILENBQ1MsTUFEVCxFQUNpQjtBQUFBLGlCQUFLL0IsTUFBTTZDLE1BQU4sQ0FBYTdFLEVBQUVzRCxLQUFGLEdBQVUsQ0FBdkIsQ0FBTDtBQUFBLFNBRGpCLEVBRUd4RSxJQUZILENBRVEsV0FGUixFQUVxQjtBQUFBLGdDQUFrQmtCLEVBQUVOLENBQXBCLFNBQXlCTSxFQUFFTCxDQUEzQjtBQUFBLFNBRnJCOztBQUlBOEUsY0FDRzNGLElBREgsQ0FDUSxHQURSLEVBQ2E7QUFBQSxpQkFBS2tCLEVBQUVOLENBQUYsR0FBTU0sRUFBRWEsS0FBRixDQUFRRCxNQUFkLEdBQXVCbUUsS0FBS0MsSUFBTCxDQUFVaEYsRUFBRWtFLElBQVosQ0FBNUI7QUFBQSxTQURiLEVBRUdwRixJQUZILENBRVEsR0FGUixFQUVhO0FBQUEsaUJBQUtrQixFQUFFTCxDQUFGLEdBQU1vRixLQUFLQyxJQUFMLENBQVVoRixFQUFFa0UsSUFBWixDQUFYO0FBQUEsU0FGYjs7QUFJQTlILGFBQUs2SSxJQUFMLENBQVVDLFFBQVEsR0FBUixDQUFWO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJQyxVQUFVLENBQWQ7QUFBQSxVQUFpQjtBQUNmQyxlQUFTLEVBRFg7O0FBR0EsZUFBU0YsT0FBVCxDQUFpQkcsS0FBakIsRUFBd0I7QUFDdEIsWUFBSUMsV0FBV25JLEdBQUdvSSxRQUFILENBQVkzQyxXQUFaLENBQWY7QUFDQSxlQUFPLFVBQVM1QyxDQUFULEVBQVk7QUFDakIsY0FBSXdGLEtBQUssSUFBSUosTUFBSixHQUFhRCxPQUF0QjtBQUFBLGNBQ0VNLE1BQU16RixFQUFFTixDQUFGLEdBQU04RixFQURkO0FBQUEsY0FFRUUsTUFBTTFGLEVBQUVOLENBQUYsR0FBTThGLEVBRmQ7QUFBQSxjQUdFRyxNQUFNM0YsRUFBRUwsQ0FBRixHQUFNNkYsRUFIZDtBQUFBLGNBSUVJLE1BQU01RixFQUFFTCxDQUFGLEdBQU02RixFQUpkO0FBS0FGLG1CQUFTTyxLQUFULENBQWUsVUFBU0MsSUFBVCxFQUFlQyxFQUFmLEVBQW1CQyxFQUFuQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCO0FBQzVDLGdCQUFJSixLQUFLSyxLQUFMLElBQWVMLEtBQUtLLEtBQUwsS0FBZW5HLENBQWxDLEVBQXNDO0FBQ3BDLGtCQUFJTixJQUFJTSxFQUFFTixDQUFGLEdBQU1vRyxLQUFLSyxLQUFMLENBQVd6RyxDQUF6QjtBQUFBLGtCQUNFQyxJQUFJSyxFQUFFTCxDQUFGLEdBQU1tRyxLQUFLSyxLQUFMLENBQVd4RyxDQUR2QjtBQUFBLGtCQUVFeUcsSUFBSXJCLEtBQUtDLElBQUwsQ0FBVXRGLElBQUlBLENBQUosR0FBUUMsSUFBSUEsQ0FBdEIsQ0FGTjtBQUdBLGtCQUFJeUcsSUFBSVosRUFBUixFQUFZO0FBQ1ZZLG9CQUFJLENBQUNBLElBQUlaLEVBQUwsSUFBV1ksQ0FBWCxHQUFlZixLQUFuQjtBQUNBckYsa0JBQUVOLENBQUYsSUFBT0EsS0FBSzBHLENBQVo7QUFDQXBHLGtCQUFFTCxDQUFGLElBQU9BLEtBQUt5RyxDQUFaO0FBQ0FOLHFCQUFLSyxLQUFMLENBQVd6RyxDQUFYLElBQWdCQSxDQUFoQjtBQUNBb0cscUJBQUtLLEtBQUwsQ0FBV3hHLENBQVgsSUFBZ0JBLENBQWhCO0FBQ0Q7QUFDRjtBQUNELG1CQUFPb0csS0FBS0wsR0FBTCxJQUFZTyxLQUFLUixHQUFqQixJQUF3Qk8sS0FBS0osR0FBN0IsSUFBb0NNLEtBQUtQLEdBQWhEO0FBQ0QsV0FkRDtBQWVELFNBckJEO0FBc0JEOztBQUVEO0FBQ0E7QUFDQSxVQUFJVSxTQUFTLENBQWI7QUFDQTtBQUNBLFVBQUlDLGdCQUFnQixFQUFwQjs7QUFFQSxXQUFLLElBQUkxQixJQUFJLENBQWIsRUFBZ0JBLElBQUloQyxZQUFZaEMsTUFBaEMsRUFBd0NnRSxHQUF4QyxFQUE2QztBQUMzQzBCLHNCQUFpQjFCLENBQWpCLFNBQXNCQSxDQUF0QixJQUE2QixDQUE3QjtBQUNEOztBQUVEOUIsa0JBQVl5RCxPQUFaLENBQW9CLFVBQVN2RyxDQUFULEVBQVk7QUFDOUJzRyxzQkFBaUJ0RyxFQUFFOEQsTUFBRixDQUFTMEMsS0FBMUIsU0FBbUN4RyxFQUFFeEUsTUFBRixDQUFTZ0wsS0FBNUMsSUFBdUQsQ0FBdkQ7QUFDRCxPQUZEOztBQUlBO0FBQ0EsZUFBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLGVBQU9MLGNBQWlCSSxFQUFFRixLQUFuQixTQUE0QkcsRUFBRUgsS0FBOUIsQ0FBUDtBQUNEOztBQUVELGVBQVNoQyxjQUFULEdBQTBCO0FBQ3hCckgsV0FBR3FDLEtBQUgsQ0FBU29ILGNBQVQ7QUFDQSxZQUFJUCxXQUFXLENBQWYsRUFBa0I7QUFDaEI7QUFDQSxjQUFJckcsSUFBSTdDLEdBQUd1QixNQUFILENBQVUsSUFBVixFQUFnQnRDLElBQWhCLEdBQXVCeUssUUFBL0I7QUFDQXpLLGVBQUsySCxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUFBLG1CQUFLMEMsWUFBWXpHLENBQVosRUFBZThHLENBQWYsS0FBcUJMLFlBQVlLLENBQVosRUFBZTlHLENBQWYsQ0FBckIsR0FBeUMsQ0FBekMsR0FBNkMsR0FBbEQ7QUFBQSxXQUF0QjtBQUNBNkQsZUFBS0UsS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFBQSxtQkFBSy9ELEVBQUV3RyxLQUFGLEtBQVlNLEVBQUVoRCxNQUFGLENBQVMwQyxLQUFyQixJQUE4QnhHLEVBQUV3RyxLQUFGLEtBQVlNLEVBQUV0TCxNQUFGLENBQVNnTCxLQUFuRCxHQUEyRCxDQUEzRCxHQUErRCxHQUFwRTtBQUFBLFdBQXRCO0FBQ0E7QUFDQUgsbUJBQVMsQ0FBVDtBQUNELFNBUEQsTUFRSztBQUNIO0FBQ0FqSyxlQUFLMkgsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQUYsZUFBS0UsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQXNDLG1CQUFTLENBQVQ7QUFDRDtBQUNGOztBQUVELGVBQVNoQyxXQUFULENBQXFCckUsQ0FBckIsRUFBd0I7QUFDdEIsWUFBSSxDQUFDN0MsR0FBR3FDLEtBQUgsQ0FBU3VILE1BQWQsRUFBc0J4RCxXQUFXeUQsV0FBWCxDQUF1QixHQUF2QixFQUE0QkMsT0FBNUI7QUFDdEJqSCxVQUFFa0gsRUFBRixHQUFPbEgsRUFBRU4sQ0FBVDtBQUNBTSxVQUFFbUgsRUFBRixHQUFPbkgsRUFBRUwsQ0FBVDtBQUNEOztBQUVELGVBQVMyRSxPQUFULENBQWlCdEUsQ0FBakIsRUFBb0I7QUFDbEJBLFVBQUVrSCxFQUFGLEdBQU8vSixHQUFHcUMsS0FBSCxDQUFTRSxDQUFoQjtBQUNBTSxVQUFFbUgsRUFBRixHQUFPaEssR0FBR3FDLEtBQUgsQ0FBU0csQ0FBaEI7QUFDRDs7QUFFRCxlQUFTNEUsU0FBVCxDQUFtQnZFLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUksQ0FBQzdDLEdBQUdxQyxLQUFILENBQVN1SCxNQUFkLEVBQXNCeEQsV0FBV3lELFdBQVgsQ0FBdUIsQ0FBdkI7QUFDdEJoSCxVQUFFa0gsRUFBRixHQUFPLElBQVA7QUFDQWxILFVBQUVtSCxFQUFGLEdBQU8sSUFBUDtBQUNEO0FBRUY7Ozs7OztrQkFyT2tCbkYsSzs7Ozs7Ozs7Ozs7SUNMZm9GLFEsR0FjSixvQkFBc0M7QUFBQSxpRkFBSixFQUFJO0FBQUEsMEJBQXhCaE0sT0FBd0I7QUFBQSxNQUF4QkEsT0FBd0IsZ0NBQWQsS0FBYzs7QUFBQTs7QUFBQSxPQVh0QzZILEtBV3NDLEdBWDlCLEdBVzhCO0FBQUEsT0FWdENDLE1BVXNDLEdBVjdCLEdBVTZCO0FBQUEsT0FUdENtRSxVQVNzQyxHQVR6QixDQVN5QjtBQUFBLE9BUnRDQyxTQVFzQyxHQVIxQixPQVEwQjtBQUFBLE9BUHRDeEgsSUFPc0MsR0FQL0IsRUFPK0I7QUFFckM7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQkU7Ozs7Ozs7Ozs7OztJQ0ZJeUgsUyxHQWNKLHFCQUFzQztBQUFBLGlGQUFKLEVBQUk7QUFBQSwwQkFBeEJuTSxPQUF3QjtBQUFBLE1BQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUFBLE9BWHRDNkgsS0FXc0MsR0FYOUIsR0FXOEI7QUFBQSxPQVZ0Q0MsTUFVc0MsR0FWN0IsR0FVNkI7QUFBQSxPQVR0Q21FLFVBU3NDLEdBVHpCLENBU3lCO0FBQUEsT0FSdENDLFNBUXNDLEdBUjFCLE9BUTBCO0FBQUEsT0FQdEN4SCxJQU9zQyxHQVAvQixFQU8rQjtBQUVyQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQkEiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwOWQwZDY2YTk1Y2FhMDQ2MmE4IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgcmVuZGVyZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQubm9kZSgpO1xuICAgIH1cbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAodmFyIHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci51cGRhdGUoY2hpbGRyZW5PcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4vcmVuZGVyL3dpbmRvd1wiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9yZW5kZXIvY2FudmFzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9yZW5kZXIvbWVudVwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL3JlbmRlci9zaGFwZVwiO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gXCIuL3JlbmRlci9jaGFydC1iYXJcIjtcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSBcIi4vcmVuZGVyL2NoYXJ0LWxpbmVcIjtcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSBcIi4vdHJhY2tlci9jaGFuZ2VcIjtcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uXCIpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiFcIik7XG4gICAgfVxuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICovXG4gIHJlbmRlcihpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBzaGFwZXMgPSBuZXcgU2hhcGUodGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdmFyIGxpbmVDaGFydCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdmFyIGJhckNoYXJ0ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChzaGFwZXMpO1xuICAgICAgLy9jYW52YXMuYWRkKGxpbmVDaGFydCk7XG4gICAgICAvL2NhbnZhcy5hZGQoYmFyQ2hhcnQpO1xuICAgICAgdmFyIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcy5vcHRpb25zKTtcbiAgICAgIHdpbmRvdy5hZGQobWVudSk7XG4gICAgICB3aW5kb3cuYWRkKGNhbnZhcyk7XG4gICAgICB2YXIgZWxlbWVudCA9IHdpbmRvdy5yZW5kZXIoanNvbik7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgd2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgd2luZG93ID0gZDMuc2VsZWN0KGAjJHt3aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgWyR7d2luZG93SWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgV2luZG93IHJlYWR5OiAke3dpbmRvd31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci93aW5kb3cuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1cGRhdGUoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIGNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIGNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgY2FudmFzID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcblxuICAgIGNhbnZhcyA9IGNhbnZhcy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgY2FudmFzLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH0pKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG5cbiAgICBjYW52YXMuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyByZWFkeTogJHtjYW52YXN9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgd2luZG93ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgbWVudSA9IHdpbmRvdy5hcHBlbmQoJ3VsJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ25hdicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICBtZW51LnNlbGVjdEFsbChcIipcIikucmVtb3ZlKCk7XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwiU2F2ZSB0byBQTkcgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhXCIpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIkFib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCFcIikpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIEZJWE1FIHRoZSBtZW51IGRlcHRoIGlzICdpbmZpbml0ZScsIGJ1dCB0aGlzIGltcGxlbWVudGF0aW9ucyBzdXBwb3J0cyBvbmx5IGRlcHRoID0gMSFcbiAgICBmb3IgKGxldCBtZW51SXRlbSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgICBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICAgIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGVudHJ5ID0gY29udGVudC5hcHBlbmQoJ2xpJyk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShzdWJtZW51KSkuYXR0cigndGl0bGUnLCBzdWJtZW51LnRpdGxlKS5odG1sKHN1Ym1lbnUudGl0bGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKG1lbnVJdGVtKSkuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1lbnUgcmVhZHk6ICR7bWVudX1gKTtcblxuICAgIHJldHVybiBtZW51O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcblxuLy8gRklYTUUgaHR0cDovL2xvcmVkYW5hY2lyc3RlYS5naXRodWIuaW8vZXM2LWRlc2lnbi1wYXR0ZXJucy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IE1vZGFsKHRoaXMub3B0aW9ucykucmVuZGVyKGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IG92ZXJsYXknKTtcbiAgICB2YXIgbW9kYWwgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBqc29uLmNhbGxiYWNrLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ21vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAganNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdicicpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24pO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgY2FudmFzTGlua3MgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmxpbmtzKTtcblxuICAgIHZhciBzdmcgPSBjYW52YXMsXG4gICAgICB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKSxcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShjYW52YXNMaW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBTaGFwZS5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBTaGFwZS5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IFNoYXBlLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IFNoYXBlLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9zaGFwZS5qcyIsImNsYXNzIEJhckNoYXJ0IHtcblxuICAvLyBBbGwgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBhY2Nlc3NpYmxlIHRvIGNhbGxlclxuICB3aWR0aCA9IDUwMDtcbiAgaGVpZ2h0ID0gMzAwO1xuICBiYXJQYWRkaW5nID0gMTtcbiAgZmlsbENvbG9yID0gJ2NvcmFsJztcbiAgZGF0YSA9IFtdO1xuXG4gIHVwZGF0ZVdpZHRoO1xuICB1cGRhdGVIZWlnaHQ7XG4gIHVwZGF0ZUZpbGxDb2xvcjtcbiAgdXBkYXRlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcblxuICB9XG5cbi8qXG4gIGNoYXJ0KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgdmFyIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgdmFyIG1heFZhbHVlID0gZDMubWF4KGRhdGEpO1xuICAgICAgdmFyIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICB2YXIgZG9tID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgdmFyIHN2ZyA9IGRvbS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdiYXItY2hhcnQnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcblxuICAgICAgdmFyIGJhcnMgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pO1xuXG5cbiAgICAgIC8vIHVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgIHVwZGF0ZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodCk7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgICAgfTtcblxuICAgICAgdXBkYXRlRmlsbENvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuc3R5bGUoJ2ZpbGwnLCBmaWxsQ29sb3IpO1xuICAgICAgfTtcblxuICAgICAgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgICAgd2lkdGhTY2FsZSA9IHdpZHRoIC8gbWF4VmFsdWU7XG5cbiAgICAgICAgdmFyIHVwZGF0ZSA9IHN2Zy5zZWxlY3RBbGwoJ3JlY3QuZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5kYXRhKGRhdGEpO1xuXG4gICAgICAgIHVwZGF0ZVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuICAgICAgICB1cGRhdGUuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiAoZGF0YS5sZW5ndGggLSBpKSAqIDQwOyB9KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG4gICAgICAgIHVwZGF0ZS5leGl0KClcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDY1MClcbiAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiAyMDsgfSlcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgY2hhcnQud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHdpZHRoO1xuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVXaWR0aCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlV2lkdGgoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG5cbiAgY2hhcnQuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBoZWlnaHQ7XG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVIZWlnaHQgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUhlaWdodCgpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcblxuICBjaGFydC5maWxsQ29sb3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGZpbGxDb2xvcjtcbiAgICBmaWxsQ29sb3IgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHVwZGF0ZUZpbGxDb2xvciA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRmlsbENvbG9yKCk7XG4gICAgcmV0dXJuIGNoYXJ0O1xuICB9O1xuXG4gIGNoYXJ0LmRhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG4gICAgZGF0YSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcbiAgKi9cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJjbGFzcyBMaW5lQ2hhcnQge1xuXG4gIC8vIEFsbCBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGFjY2Vzc2libGUgdG8gY2FsbGVyXG4gIHdpZHRoID0gNTAwO1xuICBoZWlnaHQgPSAzMDA7XG4gIGJhclBhZGRpbmcgPSAxO1xuICBmaWxsQ29sb3IgPSAnY29yYWwnO1xuICBkYXRhID0gW107XG5cbiAgdXBkYXRlV2lkdGg7XG4gIHVwZGF0ZUhlaWdodDtcbiAgdXBkYXRlRmlsbENvbG9yO1xuICB1cGRhdGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuXG4gIH1cblxuICAvKlxuICAgIGNoYXJ0KHNlbGVjdGlvbikge1xuICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgdmFyIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICB2YXIgbWF4VmFsdWUgPSBkMy5tYXgoZGF0YSk7XG4gICAgICAgIHZhciB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcblxuICAgICAgICB2YXIgZG9tID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICB2YXIgc3ZnID0gZG9tLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWNoYXJ0JylcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGZpbGxDb2xvcik7XG5cbiAgICAgICAgdmFyIGJhcnMgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Rpc3BsYXktYmFyJylcbiAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuXG4gICAgICAgIC8vIHVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgdXBkYXRlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcbiAgICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KTtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVGaWxsQ29sb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICAgIG1heFZhbHVlID0gZDMubWF4KGRhdGEpO1xuICAgICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICAgICAgdmFyIHVwZGF0ZSA9IHN2Zy5zZWxlY3RBbGwoJ3JlY3QuZGlzcGxheS1iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSk7XG5cbiAgICAgICAgICB1cGRhdGVcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG5cbiAgICAgICAgICB1cGRhdGUuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIChkYXRhLmxlbmd0aCAtIGkpICogNDA7IH0pXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG4gICAgICAgICAgdXBkYXRlLmV4aXQoKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDY1MClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiAoZGF0YS5sZW5ndGggLSBpKSAqIDIwOyB9KVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB3aWR0aDtcbiAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZVdpZHRoID09PSAnZnVuY3Rpb24nKSB1cGRhdGVXaWR0aCgpO1xuICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgIH07XG5cbiAgICBjaGFydC5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaGVpZ2h0O1xuICAgICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZUhlaWdodCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlSGVpZ2h0KCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcblxuICAgIGNoYXJ0LmZpbGxDb2xvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBmaWxsQ29sb3I7XG4gICAgICBmaWxsQ29sb3IgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlRmlsbENvbG9yID09PSAnZnVuY3Rpb24nKSB1cGRhdGVGaWxsQ29sb3IoKTtcbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9O1xuXG4gICAgY2hhcnQuZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgICAgZGF0YSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcbiAgKi9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=