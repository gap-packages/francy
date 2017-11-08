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

      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var modal = d3.select('body').append('div').attr('class', 'francy').append('div').attr('id', json.callback.id).attr('class', 'francy modal');

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
        }
      });
      footer.append('button').text('Cancel').on('click', function () {
        overlay.remove();
        modal.remove();
      });

      if (Jupyter) {
        // oh well, jupyter needs to register input fields not to enable keyboard shortcuts
        Jupyter.keyboard_manager.register_events('.arg');
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWE5YTdiMWQ3YjhjYjY1YjZkNzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIl0sIm5hbWVzIjpbIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJwYXJlbnQiLCJqc29uIiwiY2hpbGRyZW5PcHRpb25zIiwib3B0aW9ucyIsIm5vZGUiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsImRlYnVnIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiRnJhbmN5IiwiRXJyb3IiLCJkMyIsImlucHV0IiwicGFyc2UiLCJtZW51Iiwic2hhcGVzIiwiY2FudmFzIiwiYWRkIiwid2luZG93IiwiZWxlbWVudCIsImV4cG9ydHMiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiZSIsIldpbmRvdyIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCJpZCIsInNlbGVjdCIsImxvZ2dlciIsImFwcGVuZCIsInJlbW92ZSIsImF0dHIiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiY2FsbCIsInpvb20iLCJvbiIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsIk1lbnUiLCJnZXRNZW51SWQiLCJlbnRyeSIsImh0bWwiLCJjb250ZW50IiwibG9nIiwibWVudUl0ZW0iLCJjYWxsYmFjayIsIm1lbnVzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwidGl0bGUiLCJzdWJtZW51IiwiZXhlY3V0ZSIsIkNhbGxiYWNrSGFuZGxlciIsImNvbmZpZyIsIk1vZGFsIiwic2VsZiIsIm92ZXJsYXkiLCJtb2RhbCIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwicmVxdWlyZWRBcmdzIiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJTaGFwZSIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlQ2VudGVyIiwibGluayIsInNvdXJjZSIsInN0eWxlIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsImxhYmVsIiwibGVnZW5kIiwibWFwIiwiaSIsImNvbG9ycyIsInRpY2tlZCIsIk1hdGgiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicmFkaXVzIiwiYWxwaGEiLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwicHJldmVudERlZmF1bHQiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQmFyQ2hhcnQiLCJiYXJQYWRkaW5nIiwiZmlsbENvbG9yIiwiTGluZUNoYXJ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCQSIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE5YTdiMWQ3YjhjYjY1YjZkNzciLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICByZW5kZXJlcnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudC5ub2RlKCk7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9yZW5kZXIvd2luZG93XCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3JlbmRlci9tZW51XCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vcmVuZGVyL3NoYXBlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4vcmVuZGVyL2NoYXJ0LWJhclwiO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tIFwiLi9yZW5kZXIvY2hhcnQtbGluZVwiO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi5cIik7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIVwiKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIHNoYXBlcyA9IG5ldyBTaGFwZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgbGluZUNoYXJ0ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgYmFyQ2hhcnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKHNoYXBlcyk7XG4gICAgICAvL2NhbnZhcy5hZGQobGluZUNoYXJ0KTtcbiAgICAgIC8vY2FudmFzLmFkZChiYXJDaGFydCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciB3aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciB3aW5kb3cgPSBkMy5zZWxlY3QoYCMke3dpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3dpbmRvd0lkfV0uLi5gKTtcbiAgICAgIHdpbmRvdyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pLmFwcGVuZCgnZGl2JykucmVtb3ZlKClcbiAgICAgICAgLmF0dHIoJ2lkJywgd2luZG93SWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgd2luZG93Jyk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCBbJHt3aW5kb3dJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBXaW5kb3cgcmVhZHk6ICR7d2luZG93fWApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbih3aW5kb3csIGpzb24pO1xuXG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3dpbmRvdy5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZSh7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnY2FudmFzJyk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpO1xuXG4gICAgY2FudmFzID0gY2FudmFzLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgfSkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcblxuICAgIGNhbnZhcy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHJlYWR5OiAke2NhbnZhc31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBtZW51SWQgPSBJRFV0aWxzLmdldE1lbnVJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIG1lbnUgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghbWVudS5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gd2luZG93LmFwcGVuZCgndWwnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbmF2JykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblxuICAgIHZhciBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCFcIikpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwiQWJvdXQgRnJhbmN5IHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIVwiKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gRklYTUUgdGhlIG1lbnUgZGVwdGggaXMgJ2luZmluaXRlJywgYnV0IHRoaXMgaW1wbGVtZW50YXRpb25zIHN1cHBvcnRzIG9ubHkgZGVwdGggPSAxIVxuICAgIGZvciAobGV0IG1lbnVJdGVtIG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgICAgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgZW50cnkgPSBjb250ZW50LmFwcGVuZCgnbGknKTtcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKHN1Ym1lbnUpKS5hdHRyKCd0aXRsZScsIHN1Ym1lbnUudGl0bGUpLmh0bWwoc3VibWVudS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUobWVudUl0ZW0pKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWVudSByZWFkeTogJHttZW51fWApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgTW9kYWwodGhpcy5vcHRpb25zKS5yZW5kZXIoY29uZmlnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzLCBKdXB5dGVyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgb3ZlcmxheScpO1xuICAgIHZhciBtb2RhbCA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBqc29uLmNhbGxiYWNrLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBtb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzIGZvciZuYnNwOycpLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoanNvbi50aXRsZSk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2FyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnYnInKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoSnVweXRlcikge1xuICAgICAgLy8gb2ggd2VsbCwganVweXRlciBuZWVkcyB0byByZWdpc3RlciBpbnB1dCBmaWVsZHMgbm90IHRvIGVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHNcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5hcmcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXBlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm5vZGVzKSxcbiAgICAgIGNhbnZhc0xpbmtzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5saW5rcyk7XG5cbiAgICB2YXIgc3ZnID0gY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEoY2FudmFzTGlua3MpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cbiAgICB2YXIgbm9kZSA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGVzJykuc2VsZWN0QWxsKCdnLm5vZGVzJylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gU2hhcGUuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHN2Z1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gU2hhcGUuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBTaGFwZS5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBTaGFwZS5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvc2hhcGUuanMiLCJjbGFzcyBCYXJDaGFydCB7XG5cbiAgLy8gQWxsIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgYWNjZXNzaWJsZSB0byBjYWxsZXJcbiAgd2lkdGggPSA1MDA7XG4gIGhlaWdodCA9IDMwMDtcbiAgYmFyUGFkZGluZyA9IDE7XG4gIGZpbGxDb2xvciA9ICdjb3JhbCc7XG4gIGRhdGEgPSBbXTtcblxuICB1cGRhdGVXaWR0aDtcbiAgdXBkYXRlSGVpZ2h0O1xuICB1cGRhdGVGaWxsQ29sb3I7XG4gIHVwZGF0ZURhdGE7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG5cbiAgfVxuXG4vKlxuICBjaGFydChzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgIHZhciBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgIHZhciB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcblxuICAgICAgdmFyIGRvbSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgIHZhciBzdmcgPSBkb20uYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWNoYXJ0JylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGZpbGxDb2xvcik7XG5cbiAgICAgIHZhciBiYXJzID0gc3ZnLnNlbGVjdEFsbCgncmVjdC5kaXNwbGF5LWJhcicpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuXG4gICAgICAvLyB1cGRhdGUgZnVuY3Rpb25zXG4gICAgICB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcbiAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gICAgICB9O1xuXG4gICAgICB1cGRhdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpO1xuICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZUZpbGxDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgbWF4VmFsdWUgPSBkMy5tYXgoZGF0YSk7XG4gICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICAgIHZhciB1cGRhdGUgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgICAuZGF0YShkYXRhKTtcblxuICAgICAgICB1cGRhdGVcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG5cbiAgICAgICAgdXBkYXRlLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiA0MDsgfSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSlcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuICAgICAgICB1cGRhdGUuZXhpdCgpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbig2NTApXG4gICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIChkYXRhLmxlbmd0aCAtIGkpICogMjA7IH0pXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNoYXJ0LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB3aWR0aDtcbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlV2lkdGggPT09ICdmdW5jdGlvbicpIHVwZGF0ZVdpZHRoKCk7XG4gICAgcmV0dXJuIGNoYXJ0O1xuICB9O1xuXG4gIGNoYXJ0LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaGVpZ2h0O1xuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlSGVpZ2h0ID09PSAnZnVuY3Rpb24nKSB1cGRhdGVIZWlnaHQoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG5cbiAgY2hhcnQuZmlsbENvbG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBmaWxsQ29sb3I7XG4gICAgZmlsbENvbG9yID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVGaWxsQ29sb3IgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUZpbGxDb2xvcigpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcblxuICBjaGFydC5kYXRhID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgIGRhdGEgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG4gICovXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiY2xhc3MgTGluZUNoYXJ0IHtcblxuICAvLyBBbGwgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBhY2Nlc3NpYmxlIHRvIGNhbGxlclxuICB3aWR0aCA9IDUwMDtcbiAgaGVpZ2h0ID0gMzAwO1xuICBiYXJQYWRkaW5nID0gMTtcbiAgZmlsbENvbG9yID0gJ2NvcmFsJztcbiAgZGF0YSA9IFtdO1xuXG4gIHVwZGF0ZVdpZHRoO1xuICB1cGRhdGVIZWlnaHQ7XG4gIHVwZGF0ZUZpbGxDb2xvcjtcbiAgdXBkYXRlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcblxuICB9XG5cbiAgLypcbiAgICBjaGFydChzZWxlY3Rpb24pIHtcbiAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgIHZhciBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgdmFyIG1heFZhbHVlID0gZDMubWF4KGRhdGEpO1xuICAgICAgICB2YXIgd2lkdGhTY2FsZSA9IHdpZHRoIC8gbWF4VmFsdWU7XG5cbiAgICAgICAgdmFyIGRvbSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgICAgdmFyIHN2ZyA9IGRvbS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Jhci1jaGFydCcpXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBmaWxsQ29sb3IpO1xuXG4gICAgICAgIHZhciBiYXJzID0gc3ZnLnNlbGVjdEFsbCgncmVjdC5kaXNwbGF5LWJhcicpXG4gICAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG5cblxuICAgICAgICAvLyB1cGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIHVwZGF0ZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgd2lkdGhTY2FsZSA9IHdpZHRoIC8gbWF4VmFsdWU7XG4gICAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG4gICAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgYmFySGVpZ2h0ID0gYmFyU3BhY2luZyAtIGJhclBhZGRpbmc7XG4gICAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodCk7XG4gICAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdXBkYXRlRmlsbENvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5zdHlsZSgnZmlsbCcsIGZpbGxDb2xvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgICBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgICAgICB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcblxuICAgICAgICAgIHZhciB1cGRhdGUgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpO1xuXG4gICAgICAgICAgdXBkYXRlXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pO1xuXG4gICAgICAgICAgdXBkYXRlLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Rpc3BsYXktYmFyJylcbiAgICAgICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiAoZGF0YS5sZW5ndGggLSBpKSAqIDQwOyB9KVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pXG4gICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuICAgICAgICAgIHVwZGF0ZS5leGl0KClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig2NTApXG4gICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiAyMDsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDApXG4gICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gd2lkdGg7XG4gICAgICB3aWR0aCA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVXaWR0aCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlV2lkdGgoKTtcbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9O1xuXG4gICAgY2hhcnQuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGhlaWdodDtcbiAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVIZWlnaHQgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUhlaWdodCgpO1xuICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgIH07XG5cbiAgICBjaGFydC5maWxsQ29sb3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZmlsbENvbG9yO1xuICAgICAgZmlsbENvbG9yID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZUZpbGxDb2xvciA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRmlsbENvbG9yKCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcblxuICAgIGNoYXJ0LmRhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZGF0YTtcbiAgICAgIGRhdGEgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgIH07XG4gICovXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9