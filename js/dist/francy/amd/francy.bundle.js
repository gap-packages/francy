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
        window = d3.select(this.options.appendTo).append('div').remove().attr('id', windowId).attr('class', 'window');
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

      var overlay = d3.select('body').append('div').attr('class', 'overlay');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQzMzMwNWE1YzRiODc1M2EzNjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIl0sIm5hbWVzIjpbIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJwYXJlbnQiLCJqc29uIiwiY2hpbGRyZW5PcHRpb25zIiwib3B0aW9ucyIsIm5vZGUiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsImRlYnVnIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiRnJhbmN5IiwiRXJyb3IiLCJkMyIsImlucHV0IiwicGFyc2UiLCJtZW51Iiwic2hhcGVzIiwiY2FudmFzIiwiYWRkIiwid2luZG93IiwiZWxlbWVudCIsImV4cG9ydHMiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiZSIsIldpbmRvdyIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCJpZCIsInNlbGVjdCIsImxvZ2dlciIsImFwcGVuZCIsInJlbW92ZSIsImF0dHIiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiY2FsbCIsInpvb20iLCJvbiIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsIk1lbnUiLCJnZXRNZW51SWQiLCJlbnRyeSIsImh0bWwiLCJjb250ZW50IiwibG9nIiwibWVudUl0ZW0iLCJjYWxsYmFjayIsIm1lbnVzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwidGl0bGUiLCJzdWJtZW51IiwiZXhlY3V0ZSIsIkNhbGxiYWNrSGFuZGxlciIsImNvbmZpZyIsIk1vZGFsIiwic2VsZiIsIm92ZXJsYXkiLCJtb2RhbCIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwicmVxdWlyZWRBcmdzIiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiU2hhcGUiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yY2VYIiwic3RyZW5ndGgiLCJmb3JjZVkiLCJsYXllciIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNlbnRlciIsImxpbmsiLCJzb3VyY2UiLCJzdHlsZSIsInN5bWJvbCIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbCIsImxlZ2VuZCIsIm1hcCIsImkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInJhZGl1cyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0IiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJmeSIsIkJhckNoYXJ0IiwiYmFyUGFkZGluZyIsImZpbGxDb2xvciIsIkxpbmVDaGFydCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFRjs7Ozs7O2tCQXJPa0JuRixLOzs7Ozs7Ozs7OztJQ0xmb0YsUSxHQWNKLG9CQUFzQztBQUFBLGlGQUFKLEVBQUk7QUFBQSwwQkFBeEJoTSxPQUF3QjtBQUFBLE1BQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUFBLE9BWHRDNkgsS0FXc0MsR0FYOUIsR0FXOEI7QUFBQSxPQVZ0Q0MsTUFVc0MsR0FWN0IsR0FVNkI7QUFBQSxPQVR0Q21FLFVBU3NDLEdBVHpCLENBU3lCO0FBQUEsT0FSdENDLFNBUXNDLEdBUjFCLE9BUTBCO0FBQUEsT0FQdEN4SCxJQU9zQyxHQVAvQixFQU8rQjtBQUVyQzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCRTs7Ozs7Ozs7Ozs7O0lDRkl5SCxTLEdBY0oscUJBQXNDO0FBQUEsaUZBQUosRUFBSTtBQUFBLDBCQUF4Qm5NLE9BQXdCO0FBQUEsTUFBeEJBLE9BQXdCLGdDQUFkLEtBQWM7O0FBQUE7O0FBQUEsT0FYdEM2SCxLQVdzQyxHQVg5QixHQVc4QjtBQUFBLE9BVnRDQyxNQVVzQyxHQVY3QixHQVU2QjtBQUFBLE9BVHRDbUUsVUFTc0MsR0FUekIsQ0FTeUI7QUFBQSxPQVJ0Q0MsU0FRc0MsR0FSMUIsT0FRMEI7QUFBQSxPQVB0Q3hILElBT3NDLEdBUC9CLEVBTytCO0FBRXJDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWhCQSIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDQzMzMwNWE1YzRiODc1M2EzNjciLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICByZW5kZXJlcnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudC5ub2RlKCk7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9yZW5kZXIvd2luZG93XCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3JlbmRlci9tZW51XCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vcmVuZGVyL3NoYXBlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4vcmVuZGVyL2NoYXJ0LWJhclwiO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tIFwiLi9yZW5kZXIvY2hhcnQtbGluZVwiO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi5cIik7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIVwiKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIHNoYXBlcyA9IG5ldyBTaGFwZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgbGluZUNoYXJ0ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgYmFyQ2hhcnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKHNoYXBlcyk7XG4gICAgICAvL2NhbnZhcy5hZGQobGluZUNoYXJ0KTtcbiAgICAgIC8vY2FudmFzLmFkZChiYXJDaGFydCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciB3aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciB3aW5kb3cgPSBkMy5zZWxlY3QoYCMke3dpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3dpbmRvd0lkfV0uLi5gKTtcbiAgICAgIHdpbmRvdyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pLmFwcGVuZCgnZGl2JykucmVtb3ZlKClcbiAgICAgICAgLmF0dHIoJ2lkJywgd2luZG93SWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICd3aW5kb3cnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkIFske3dpbmRvd0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYFdpbmRvdyByZWFkeTogJHt3aW5kb3d9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHdpbmRvdywganNvbik7XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvd2luZG93LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIGNhbnZhcyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgY2FudmFzLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMudykuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaCk7XG5cbiAgICBjYW52YXMgPSBjYW52YXMuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbnZhcy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICB9KSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgY2FudmFzLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgcmVhZHk6ICR7Y2FudmFzfWApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMsIGpzb24pO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgdmFyIG1lbnVJZCA9IElEVXRpbHMuZ2V0TWVudUlkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgbWVudSA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFtZW51Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSB3aW5kb3cuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICduYXYnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIlNhdmUgdG8gUE5HIHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIVwiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJBYm91dCBGcmFuY3kgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhXCIpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBGSVhNRSB0aGUgbWVudSBkZXB0aCBpcyAnaW5maW5pdGUnLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbnMgc3VwcG9ydHMgb25seSBkZXB0aCA9IDEhXG4gICAgZm9yIChsZXQgbWVudUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5tZW51cykpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgICBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBlbnRyeSA9IGNvbnRlbnQuYXBwZW5kKCdsaScpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUoc3VibWVudSkpLmF0dHIoJ3RpdGxlJywgc3VibWVudS50aXRsZSkuaHRtbChzdWJtZW51LnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShtZW51SXRlbSkpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNZW51IHJlYWR5OiAke21lbnV9YCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbi8vIEZJWE1FIGh0dHA6Ly9sb3JlZGFuYWNpcnN0ZWEuZ2l0aHViLmlvL2VzNi1kZXNpZ24tcGF0dGVybnMvXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoY29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBNb2RhbCh0aGlzLm9wdGlvbnMpLnJlbmRlcihjb25maWcpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ292ZXJsYXknKTtcbiAgICB2YXIgbW9kYWwgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBqc29uLmNhbGxiYWNrLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ21vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAganNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdicicpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24pO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgY2FudmFzTGlua3MgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmxpbmtzKTtcblxuICAgIHZhciBzdmcgPSBjYW52YXMsXG4gICAgICB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKSxcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShjYW52YXNMaW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBTaGFwZS5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kID0gc3ZnXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBTaGFwZS5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IFNoYXBlLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IFNoYXBlLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9zaGFwZS5qcyIsImNsYXNzIEJhckNoYXJ0IHtcblxuICAvLyBBbGwgb3B0aW9ucyB0aGF0IHNob3VsZCBiZSBhY2Nlc3NpYmxlIHRvIGNhbGxlclxuICB3aWR0aCA9IDUwMDtcbiAgaGVpZ2h0ID0gMzAwO1xuICBiYXJQYWRkaW5nID0gMTtcbiAgZmlsbENvbG9yID0gJ2NvcmFsJztcbiAgZGF0YSA9IFtdO1xuXG4gIHVwZGF0ZVdpZHRoO1xuICB1cGRhdGVIZWlnaHQ7XG4gIHVwZGF0ZUZpbGxDb2xvcjtcbiAgdXBkYXRlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcblxuICB9XG5cbi8qXG4gIGNoYXJ0KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgdmFyIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgdmFyIG1heFZhbHVlID0gZDMubWF4KGRhdGEpO1xuICAgICAgdmFyIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICB2YXIgZG9tID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgdmFyIHN2ZyA9IGRvbS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdiYXItY2hhcnQnKVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcblxuICAgICAgdmFyIGJhcnMgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgLmRhdGEoZGF0YSlcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pO1xuXG5cbiAgICAgIC8vIHVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgIHVwZGF0ZVdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcbiAgICAgICAgc3ZnLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodCk7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgICAgfTtcblxuICAgICAgdXBkYXRlRmlsbENvbG9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuc3R5bGUoJ2ZpbGwnLCBmaWxsQ29sb3IpO1xuICAgICAgfTtcblxuICAgICAgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgICAgd2lkdGhTY2FsZSA9IHdpZHRoIC8gbWF4VmFsdWU7XG5cbiAgICAgICAgdmFyIHVwZGF0ZSA9IHN2Zy5zZWxlY3RBbGwoJ3JlY3QuZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5kYXRhKGRhdGEpO1xuXG4gICAgICAgIHVwZGF0ZVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuICAgICAgICB1cGRhdGUuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiAoZGF0YS5sZW5ndGggLSBpKSAqIDQwOyB9KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG4gICAgICAgIHVwZGF0ZS5leGl0KClcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDY1MClcbiAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiAyMDsgfSlcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgY2hhcnQud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHdpZHRoO1xuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVXaWR0aCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlV2lkdGgoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG5cbiAgY2hhcnQuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBoZWlnaHQ7XG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVIZWlnaHQgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUhlaWdodCgpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcblxuICBjaGFydC5maWxsQ29sb3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGZpbGxDb2xvcjtcbiAgICBmaWxsQ29sb3IgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHVwZGF0ZUZpbGxDb2xvciA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRmlsbENvbG9yKCk7XG4gICAgcmV0dXJuIGNoYXJ0O1xuICB9O1xuXG4gIGNoYXJ0LmRhdGEgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG4gICAgZGF0YSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcbiAgKi9cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJjbGFzcyBMaW5lQ2hhcnQge1xuXG4gIC8vIEFsbCBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGFjY2Vzc2libGUgdG8gY2FsbGVyXG4gIHdpZHRoID0gNTAwO1xuICBoZWlnaHQgPSAzMDA7XG4gIGJhclBhZGRpbmcgPSAxO1xuICBmaWxsQ29sb3IgPSAnY29yYWwnO1xuICBkYXRhID0gW107XG5cbiAgdXBkYXRlV2lkdGg7XG4gIHVwZGF0ZUhlaWdodDtcbiAgdXBkYXRlRmlsbENvbG9yO1xuICB1cGRhdGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuXG4gIH1cblxuICAvKlxuICAgIGNoYXJ0KHNlbGVjdGlvbikge1xuICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgdmFyIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICB2YXIgbWF4VmFsdWUgPSBkMy5tYXgoZGF0YSk7XG4gICAgICAgIHZhciB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcblxuICAgICAgICB2YXIgZG9tID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICB2YXIgc3ZnID0gZG9tLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWNoYXJ0JylcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGZpbGxDb2xvcik7XG5cbiAgICAgICAgdmFyIGJhcnMgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgICAuZGF0YShkYXRhKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Rpc3BsYXktYmFyJylcbiAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuXG4gICAgICAgIC8vIHVwZGF0ZSBmdW5jdGlvbnNcbiAgICAgICAgdXBkYXRlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcbiAgICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgICBiYXJzLnRyYW5zaXRpb24oKS5kdXJhdGlvbigxMDAwKS5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KTtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVGaWxsQ29sb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICB1cGRhdGVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICAgIG1heFZhbHVlID0gZDMubWF4KGRhdGEpO1xuICAgICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICAgICAgdmFyIHVwZGF0ZSA9IHN2Zy5zZWxlY3RBbGwoJ3JlY3QuZGlzcGxheS1iYXInKVxuICAgICAgICAgICAgLmRhdGEoZGF0YSk7XG5cbiAgICAgICAgICB1cGRhdGVcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG5cbiAgICAgICAgICB1cGRhdGUuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIChkYXRhLmxlbmd0aCAtIGkpICogNDA7IH0pXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSlcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG4gICAgICAgICAgdXBkYXRlLmV4aXQoKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDY1MClcbiAgICAgICAgICAgIC5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiAoZGF0YS5sZW5ndGggLSBpKSAqIDIwOyB9KVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB3aWR0aDtcbiAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZVdpZHRoID09PSAnZnVuY3Rpb24nKSB1cGRhdGVXaWR0aCgpO1xuICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgIH07XG5cbiAgICBjaGFydC5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaGVpZ2h0O1xuICAgICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZUhlaWdodCA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlSGVpZ2h0KCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcblxuICAgIGNoYXJ0LmZpbGxDb2xvciA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBmaWxsQ29sb3I7XG4gICAgICBmaWxsQ29sb3IgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlRmlsbENvbG9yID09PSAnZnVuY3Rpb24nKSB1cGRhdGVGaWxsQ29sb3IoKTtcbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9O1xuXG4gICAgY2hhcnQuZGF0YSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgICAgZGF0YSA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVEYXRhID09PSAnZnVuY3Rpb24nKSB1cGRhdGVEYXRhKCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcbiAgKi9cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=