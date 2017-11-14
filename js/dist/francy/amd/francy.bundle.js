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
        event.preventDefault();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWVhN2M5NjNhYTJjMTA0Y2JiZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiXSwibmFtZXMiOlsiSURVdGlscyIsImNhbnZhc0lkIiwib2JqZWN0SWQiLCJtZW51SWQiLCJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInBhcmVudCIsImpzb24iLCJjaGlsZHJlbk9wdGlvbnMiLCJvcHRpb25zIiwidXBkYXRlIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsIkVycm9yIiwiZDMiLCJpbnB1dCIsInBhcnNlIiwibWVudSIsImdyYXBoIiwiY2FudmFzIiwiYWRkIiwid2luZG93IiwiZWxlbWVudCIsIm5vZGUiLCJleHBvcnRzIiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsImUiLCJXaW5kb3ciLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiaWQiLCJzZWxlY3QiLCJsb2dnZXIiLCJhcHBlbmQiLCJyZW1vdmUiLCJhdHRyIiwicmVuZGVyQ2hpbGRyZW4iLCJCYXNlIiwiQ2FudmFzIiwiZ2V0Q2FudmFzSWQiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJkIiwidyIsImgiLCJkcmF3IiwiTWVudSIsImdldE1lbnVJZCIsImVudHJ5IiwiaHRtbCIsImNvbnRlbnQiLCJvbiIsImxvZyIsIm1lbnVJdGVtIiwiY2FsbGJhY2siLCJtZW51cyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInRpdGxlIiwic3VibWVudSIsImV4ZWN1dGUiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJrZXlzIiwicmVxdWlyZWRBcmdzIiwibW9kYWwiLCJNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJ0ZXh0IiwiYXJnIiwidHlwZSIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwibmFtZSIsIkdyYXBoIiwic3ltYm9sQ2lyY2xlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiY2FudmFzTm9kZXMiLCJub2RlcyIsImNhbnZhc0xpbmtzIiwibGlua3MiLCJzdmciLCJ3aWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlQ2VudGVyIiwiY2FsbCIsInpvb20iLCJ0cmFuc2Zvcm0iLCJ4IiwieSIsImsiLCJsaW5rR3JvdXAiLCJsaW5rIiwiZXhpdCIsInNvdXJjZSIsIm5vZGVHcm91cCIsInN5bWJvbCIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsInRpY2tlZCIsInN0eWxlIiwiY29sb3JzIiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJyYWRpdXMiLCJhbHBoYSIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImkiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJmeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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Q0FBQ3BDLEdBQUcyRSxLQUFILENBQVNpRyxNQUFkLEVBQXNCaEUsV0FBV2lFLFdBQVgsQ0FBdUIsQ0FBdkI7QUFDdEJ6SSxVQUFFMkksRUFBRixHQUFPLElBQVA7QUFDQTNJLFVBQUU0SSxFQUFGLEdBQU8sSUFBUDtBQUNEO0FBRUY7Ozs7OztrQkFqUWtCL0YsSyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWVhN2M5NjNhYTJjMTA0Y2JiZjEiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICByZW5kZXJlcnMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4vcmVuZGVyL3dpbmRvd1wiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9yZW5kZXIvY2FudmFzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9yZW5kZXIvbWVudVwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL3JlbmRlci9ncmFwaFwiO1xuLy9pbXBvcnQgQ2hhcnQgZnJvbSBcIi4vcmVuZGVyL2NoYXJ0XCI7XG4vL2ltcG9ydCBUcmFja2VyIGZyb20gXCIuL3RyYWNrZXIvY2hhbmdlXCI7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLlwiKTtcbiAgICB9XG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hXCIpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgcmVuZGVyXG4gICAqL1xuICByZW5kZXIoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICB2YXIgbWVudSA9IG5ldyBNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChncmFwaCk7XG4gICAgICAvL2NhbnZhcy5hZGQoY2hhcnQpO1xuICAgICAgdmFyIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcy5vcHRpb25zKTtcbiAgICAgIHdpbmRvdy5hZGQobWVudSk7XG4gICAgICB3aW5kb3cuYWRkKGNhbnZhcyk7XG4gICAgICB2YXIgZWxlbWVudCA9IHdpbmRvdy5yZW5kZXIoanNvbik7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgd2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgd2luZG93ID0gZDMuc2VsZWN0KGAjJHt3aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgWyR7d2luZG93SWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgV2luZG93IHJlYWR5OiAke3dpbmRvd31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci93aW5kb3cuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1cGRhdGUoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBwYXJlbnQuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuXG4gICAgICBjYW52YXMuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpO1xuXG4gICAgdmFyIGRyYXcgPSBjYW52YXMuc2VsZWN0KCdnLmdyYXBoJyk7XG5cbiAgICBpZiAoIWRyYXcubm9kZSgpKSB7XG4gICAgICBjYW52YXMuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZ3JhcGgnKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHJlYWR5OiAke2NhbnZhc31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIG1lbnVJZCA9IElEVXRpbHMuZ2V0TWVudUlkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgbWVudSA9IHBhcmVudC5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghbWVudS5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgndWwnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbmF2JykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKFwiKlwiKS5yZW1vdmUoKTtcblxuICAgIHZhciBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCFcIikpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKFwiQWJvdXQgRnJhbmN5IHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIVwiKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gRklYTUUgdGhlIG1lbnUgZGVwdGggaXMgJ2luZmluaXRlJywgYnV0IHRoaXMgaW1wbGVtZW50YXRpb25zIHN1cHBvcnRzIG9ubHkgZGVwdGggPSAxIVxuICAgIGZvciAobGV0IG1lbnVJdGVtIG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgICAgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgZW50cnkgPSBjb250ZW50LmFwcGVuZCgnbGknKTtcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFjay5leGVjdXRlKHN1Ym1lbnUpKS5hdHRyKCd0aXRsZScsIHN1Ym1lbnUudGl0bGUpLmh0bWwoc3VibWVudS50aXRsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUobWVudUl0ZW0pKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWVudSByZWFkeTogJHttZW51fWApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGFsLnJlbmRlcihjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGNvbmZpZy5jYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMywgSnVweXRlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYWxsYmFjay5pZCk7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBtb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzIGZvciZuYnNwOycpLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoanNvbi50aXRsZSk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2FyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnYnInKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5hcmcnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gXCJSZWZlcmVuY2VFcnJvclwiKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4gU2tpcHBpbmcuLi4nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgcmVhZHk6ICR7bW9kYWx9YCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0ganNvbi5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSBqc29uLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5ncmFwaCcpLFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KFwiYm9keVwiKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdChcImJvZHlcIikubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MCk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogMTAwKS5zdHJlbmd0aCgwLjUpO1xuICAgIC8vdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IDI1MCkuc3RyZW5ndGgoMC41KTtcblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgcGFyZW50LmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgZnVuY3Rpb24oKSB7XG4gICAgICBzdmcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgfSkpO1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGluay5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApO1xuICAgIC8vLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cbiAgICB2YXIgbm9kZUdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGgubm9kZScpLmRhdGEoY2FudmFzTm9kZXMpO1xuXG4gICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGQgPT4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YCk7XG5cbiAgICB2YXIgbGFiZWxHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5sYWJlbHMnKTtcblxuICAgIGlmICghbGFiZWxHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxhYmVsR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGFiZWwgPSBsYWJlbC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvKnZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTsqL1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyJdLCJzb3VyY2VSb290IjoiIn0=