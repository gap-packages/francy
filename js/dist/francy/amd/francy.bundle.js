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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var _base = __webpack_require__(11);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

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
    if (_this.unrender === undefined) {
      _this.logger.debug('No [unrender()] method specified...');
    }
    return _this;
  }

  _createClass(Renderer, [{
    key: 'HTMLParent',
    get: function get() {
      return d3.select(this.options.appendTo.node().parentNode);
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.options.appendTo;
    }
  }]);

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
 * The ids naming convention is: 'Francy[Window|Canvas|Object|Menu]-*hex uuid*'
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

/* global d3 */

var Tooltip = function (_Renderer) {
  _inherits(Tooltip, _Renderer);

  function Tooltip(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.tooltip = _this.SVGParent.select('foreignObject.tooltip-holder');
    // check if the window is already present
    if (!_this.tooltip.node()) {
      _this.tooltip = _this.SVGParent.append('foreignObject').classed('tooltip-holder', true).style('display', 'none');
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render(object) {

      // just ignore rendering if no menus are present
      if (!object || !Object.values(object).length) {
        this.logger.debug('Nothing to render here... continuing...');
        return;
      }

      this.tooltip.attr('transform', 'translate(' + (d3.event.offsetX + 5) + ',' + (d3.event.offsetY + 5) + ')');

      // check if it exists already
      if (this.tooltip.selectAll('*').node()) {
        return;
      }

      var table = this.tooltip.append('xhtml:div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
      Object.keys(object).map(function (key) {
        var row = table.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').text(key);
        row.append('div').attr('class', 'francy-table-cell').text(object[key]);
      });

      // show tooltip
      this.tooltip.style('display', 'block');
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.tooltip.selectAll('*').remove();
      this.tooltip.style('display', 'none');
    }
  }]);

  return Tooltip;
}(_renderer2.default);

exports.default = Tooltip;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(16);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(17);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(18);

var _chartScatter2 = _interopRequireDefault(_chartScatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

      if (!json.canvas.chart) {
        return;
      }

      var element = undefined;
      switch (json.canvas.chart.type) {
        case "bar":
          element = new _chartBar2.default(this.options).render(json);
          break;
        case "line":
          element = new _chartLine2.default(this.options).render(json);
          break;
        case "scatter":
          element = new _chartScatter2.default(this.options).render(json);
          break;
        default:
          throw new TypeError('The chart type [' + json.canvas.chart.type + '] is not implemented!');
      }

      this.options.appendTo.zoomToFit();

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }], [{
    key: 'domainRange',
    value: function domainRange(max) {
      return Array.from(new Array(max), function (_, i) {
        return i;
      }).map(function (x) {
        return x;
      });
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Chart;
}(_renderer2.default);

exports.default = Chart;

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(6);

var _callback2 = _interopRequireDefault(_callback);

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
    key: 'traverse',
    value: function traverse(appendTo, menusIterator) {
      var _this2 = this;

      while (menusIterator.hasNext()) {
        var menuItem = menusIterator.next();
        var entry = appendTo.append('li');
        var action = entry.selectAll('a').data([menuItem]).enter().append('a').attr('title', menuItem.title).html(menuItem.title);
        if (menuItem.callback && Object.values(menuItem.callback).length) {
          action.on('click', function (d) {
            return new _callback2.default(_this2.options).execute(d);
          });
        }
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          var content = entry.append('ul');
          var subMenusIterator = this.iterator(Object.values(menuItem.menus));
          this.traverse(content, subMenusIterator);
        }
      }
    }
  }, {
    key: 'iterator',
    value: function iterator(array) {
      var nextIndex = 0;
      return {
        next: function next() {
          return this.hasNext() ? array[nextIndex++] : undefined;
        },
        hasNext: function hasNext() {
          return nextIndex < array.length;
        }
      };
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Menu;
}(_renderer2.default);

exports.default = Menu;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(4);

var _logger2 = _interopRequireDefault(_logger);

var _modal = __webpack_require__(13);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(8);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _canvas = __webpack_require__(9);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(12);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = __webpack_require__(14);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Tracker from './tracker/change';

var ALL_CANVAS = {};

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 * @access public
 * 
 * @version 0.5.0
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
        var canvas = new _canvas2.default(this.options);
        var menu = new _menuMain2.default(this.options);
        var graph = new _graph2.default(this.options);
        var chart = new _chart2.default(this.options);
        canvas.add(menu);
        canvas.add(graph);
        canvas.add(chart);
        var element = canvas.render(json);
        ALL_CANVAS[_idUtils2.default.getCanvasId(json.canvas.id)] = element;
        return element.node();
      }
    }
  }, {
    key: 'unrender',
    value: function unrender(id) {
      delete ALL_CANVAS[id];
    }
  }]);

  return Francy;
}();

exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  window.onresize = function () {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function (canvas) {
      canvas.zoomToFit();
    });
    // adjust top menu on resize
    d3.selectAll('foreignObject.francy-main-menu-holder').attr('width', '100%');
  };
} catch (e) {
  exports.Francy = Francy;
}

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _composite = __webpack_require__(10);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

//FIXME implement propper zoom to fit, see https://bl.ocks.org/iamkevinv/0a24e9126cd2fa6b283c6f2d774b69a2
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
      var parent = d3.select(this.options.appendTo);
      //var active = d3.select(null);
      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = parent.append('svg').attr('id', canvasId).attr('class', 'francy francy-canvas');
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

      var zoom = d3.zoom(); //.scaleExtent([1, 8]);

      var content = canvas.select('g.francy-content');

      if (!content.node()) {
        content = canvas.append('g').attr('class', 'francy-content');
        zoom.on("zoom", zoomed);
        canvas.call(zoom).on("dblclick.zoom", null); //.transform, d3.zoomIdentity);
      }

      canvas.on("click", stopped, true);

      canvas.zoomToFit = function () {
        var bounds = content.node().getBBox();

        var fullWidth = canvas.node().clientWidth,
            fullHeight = canvas.node().clientHeight + 40; //well, the menu is part of the canvas

        var width = bounds.width,
            height = bounds.height;

        if (width == 0 || height == 0) return;

        var midX = bounds.x + width / 2,
            midY = bounds.y + height / 2;

        var scale = 0.75 / Math.max(width / fullWidth, height / fullHeight);
        var translateX = fullWidth / 2 - scale * midX,
            translateY = fullHeight / 2 - scale * midY;

        content.transition().duration(2000).attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ',' + scale + ')').on('end', function () {
          return updateZoom(translateX, translateY, scale);
        });
      };

      function updateZoom(translateX, translateY, scale) {
        canvas.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
      }

      function zoomed() {
        content.attr("transform", d3.event.transform);
      }

      function stopped() {
        if (d3.event.defaultPrevented) {
          d3.event.stopPropagation();
        }
      }

      this.logger.debug('Canvas updated [' + canvasId + ']...');

      this.renderChildren(canvas, json);

      return canvas;
    }
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(4);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 window */

var MainMenu = function (_Menu) {
  _inherits(MainMenu, _Menu);

  function MainMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(MainMenu, [{
    key: 'render',
    value: function render(json) {
      var _this2 = this;

      var parent = this.options.appendTo;

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = d3.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        menu = parent.append('foreignObject').attr('transform', 'translate(0,0)').classed('francy-main-menu-holder', true).attr('width', '100%').attr('id', menuId);
      }

      // force rebuild menu again
      menu.selectAll('*').remove();

      menu = menu.append('xhtml:ul').attr('class', 'francy-main-menu');

      if (json.canvas.title) {
        menu.append('li').attr('class', 'francy-title').append('a').html(json.canvas.title);
      }

      var entry = menu.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').on('click', function () {
        return parent.zoomToFit();
      }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      content.append('li').append('a').on('click', function () {
        return _this2.logger.info('Save to PNG pressed... Not Implemented!');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return _this2.logger.info('About Francy pressed... Not Implemented!');
      }).attr('title', 'About').html('About');

      // Traverse all menus and flatten them!
      var menusIterator = this.iterator(Object.values(json.canvas.menus));
      this.traverse(menu, menusIterator);

      this.logger.debug('Main Menu updated [' + menuId + ']...');

      return menu;
    }
  }]);

  return MainMenu;
}(_menu2.default);

exports.default = MainMenu;

/***/ }),
/* 13 */
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

      // we want to overlay everything, hence 'body' must be used
      var overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      var modal = d3.select('body').append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      header.append('span').html('Required arguments for&nbsp;').append('span').attr('style', 'font-weight: bold;').text(json.title);

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          var row = content.append('div').attr('class', 'francy-table-row');
          row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
          row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            json.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          row.append('span').attr('class', 'validity');
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

      content.selectAll('.francy-arg').node().focus();

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', function () {
        if (form.node().checkValidity()) {
          self.options.callbackHandler(json.callback);
          overlay.remove();
          modal.remove();
          event.preventDefault();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        event.preventDefault();
        overlay.remove();
        modal.remove();
        return false;
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      try {
        Jupyter.keyboard_manager.register_events('.francy-arg');
        Jupyter.keyboard_manager.register_events('.francy-overlay');
        Jupyter.keyboard_manager.register_events('.francy-modal');
      } catch (e) {
        if (e.name == 'ReferenceError') {
          self.logger.debug('It seems we\'re not running on Jupyter...', e);
        }
      }

      this.logger.debug('Callback Modal updated [' + modalId + ']...');

      return modal;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _menuContext = __webpack_require__(15);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(6);

var _callback2 = _interopRequireDefault(_callback);

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

      // just ignore rendering if no graph is present
      if (!json.canvas.graph) {
        this.logger.debug('No Graph to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.francy-content'),
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      //Generic gravity for the X position
      var forceX = d3.forceX(-500).strength(0.35);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      var forceY = d3.forceY(500).strength(0.35);

      if (json.canvas.graph.type === 'hasse') {
        //Strong y positioning based on layer to simulate the hasse diagram
        forceY = d3.forceY(function (d) {
          return d.layer * (d.size * 5);
        }).strength(1);
      }

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      }).strength(0.001)).force('charge', d3.forceManyBody().strength(-250)).force('collide', d3.forceCollide(function (d) {
        return d.size;
      })).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2)).on("end", function () {
        // zoom to fit when simulation is over
        parent.zoomToFit();
      });

      var linkGroup = svg.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'francy-links');
      }

      var link = linkGroup.selectAll('line.francy-link').data(canvasLinks);

      link.exit().remove();

      link = link.enter().append('line').attr('class', 'francy-link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).merge(link);

      if (json.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeGroup = svg.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = svg.append('g').attr('class', 'francy-nodes');
      }

      var node = nodeGroup.selectAll('path.francy-node').data(canvasNodes);

      node.exit().remove();

      node = node.enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Graph.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'francy-node' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : '');
      }).attr('id', function (d) {
        return d.id;
      }).merge(node);

      node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)).on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.render(d);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on("mouseover", function (d) {
        // default, show tooltip
        tooltip.render(d.info);
      }).on("mouseout", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      var labelGroup = svg.selectAll('.francy-labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'francy-labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().remove();

      label = label.enter().append('text').attr('class', 'francy-label').text(function (d) {
        return d.title;
      }).merge(label);

      label.on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.render(d);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on("mouseover", function (d) {
        // default, show tooltip
        tooltip.render(d.info);
      }).on("mouseout", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      var legendGroup = parent.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = parent.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values().sort(function (a, b) {
        return a.layer > b.layer;
      }), function (d) {
        return d.id;
      });

      legend.exit().remove();

      legend = legend.enter().append('g').attr('id', function (d) {
        return 'legendLayer' + d;
      }).attr('transform', function (d, i) {
        return 'translate(' + 10 + ',' + (i + 5) * 12 + ')';
      }).merge(legend);

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

      //force simulation restart
      simulation.alpha(1).restart();

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
          return Graph.colors(d.layer * 5);
        }).attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });

        label.attr('x', function (d) {
          return d.x - d.title.length - Math.sqrt(d.size * d.title.length * 2);
        }).attr('y', function (d) {
          return d.y - Math.sqrt(d.size * 2);
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

      function connectedNodes() {
        //This function looks up whether a pair are neighbours
        function neighboring(a, b) {
          return linkedByIndex[a.index + ',' + b.index];
        }
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
          simulation.alphaTarget(0.01).restart();
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

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute the ones that match the event!
            cb.trigger === event && callback.execute({ callback: cb });
          });
        }
      }

      return svg;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Graph;
}(_renderer2.default);

exports.default = Graph;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var ContextMenu = function (_Menu) {
  _inherits(ContextMenu, _Menu);

  function ContextMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.contextMenu = _this.SVGParent.select('foreignObject.context-menu-holder');
    // check if the window is already present
    if (!_this.contextMenu.node()) {
      _this.contextMenu = _this.SVGParent.append('foreignObject').classed('context-menu-holder', true).style('display', 'none');
    }
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render(object) {
      var _this2 = this;

      // just ignore rendering if no menus are present
      if (!object.menus || !Object.values(object.menus).length) {
        this.logger.debug('No ContextMenu to render here... continuing...');
        return;
      }

      this.contextMenu.attr('transform', 'translate(' + (d3.event.offsetX + 5) + ',' + (d3.event.offsetY + 5) + ')');

      // show the context menu
      this.contextMenu.style('display', 'block');

      // check if it exists already
      if (this.contextMenu.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.francy-context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.contextMenu.append('xhtml:div').append('div').attr('class', 'francy-context-menu').append('ul');
      var menusIterator = this.iterator(Object.values(object.menus));
      this.traverse(menu, menusIterator);

      d3.event.preventDefault();

      return this.contextMenu;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.contextMenu.selectAll('*').remove();
      this.contextMenu.style('display', 'none');
    }
  }]);

  return ContextMenu;
}(_menu2.default);

exports.default = ContextMenu;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var BarChart = function (_Renderer) {
  _inherits(BarChart, _Renderer);

  function BarChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(BarChart, [{
    key: 'render',
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No BarChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand().range([0, width]).padding(0.1).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        axis.x.domain = _chart2.default.domainRange(tmp.length / datasetNames.length);
        x.domain(axis.x.domain);
      }

      var barsGroup = svg.selectAll('g.francy-bars');

      if (!barsGroup.node()) {
        barsGroup = svg.append('g').attr('class', 'francy-bars');
      }

      datasetNames.forEach(function (key, index) {
        var bar = barsGroup.selectAll('.francy-bar' + index).data(datasets[key]);

        bar.exit().remove();

        // append the rectangles for the bar chart
        bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar' + index).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        }).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5);
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1);
          tooltip.unrender();
        });

        bar.merge(bar);
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(datasetNames.slice());

      legend.exit().remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });

      return svg;
    }
  }]);

  return BarChart;
}(_renderer2.default);

exports.default = BarChart;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var LineChart = function (_Renderer) {
  _inherits(LineChart, _Renderer);

  function LineChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(LineChart, [{
    key: 'render',
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No LineChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleLinear().range([0, width]).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        x.domain([0, tmp.length / datasetNames.length]);
      }

      var linesGroup = svg.selectAll('g.francy-lines');

      if (!linesGroup.node()) {
        linesGroup = svg.append('g').attr('class', 'francy-lines');
      }

      datasetNames.forEach(function (key, index) {
        var valueLine = d3.line().x(function (d, i) {
          return x(i);
        }).y(function (d) {
          return y(d);
        });

        var line = linesGroup.selectAll('.line' + index).data([datasets[key]]);

        line.exit().remove();

        // append the rectangles for the bar chart
        line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line' + index).attr('d', valueLine).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("stroke-opacity", 1).style('stroke-width', '5px');
          tooltip.unrender();
        });

        line.merge(line);
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(datasetNames.slice());

      legend.exit().remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });

      return svg;
    }
  }]);

  return LineChart;
}(_renderer2.default);

exports.default = LineChart;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var ScatterChart = function (_Renderer) {
  _inherits(ScatterChart, _Renderer);

  function ScatterChart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ScatterChart);

    return _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ScatterChart, [{
    key: 'render',
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No ScatterChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleLinear().range([0, width]).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        x.domain([0, tmp.length / datasetNames.length]);
      }

      var scatterGroup = svg.selectAll('g.francy-scatters');

      if (!scatterGroup.node()) {
        scatterGroup = svg.append('g').attr('class', 'francy-scatters');
      }

      datasetNames.forEach(function (key, index) {
        var scatter = scatterGroup.selectAll('.scatter' + index).data(datasets[key]);

        scatter.exit().remove();

        // append the rectangles for the bar chart
        scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter' + index).attr("r", 5).attr("cx", function (d, i) {
          return x(i);
        }).attr("cy", function (d) {
          return y(d);
        }).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5).attr('r', 10);
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1).attr('r', 5);
          tooltip.unrender();
        });

        scatter.merge(scatter);
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(datasetNames.slice());

      legend.exit().remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });

      return svg;
    }
  }]);

  return ScatterChart;
}(_renderer2.default);

exports.default = ScatterChart;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTk0Mzc5YTQ5ZTBlMDBjMjUyYjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJkMyIsInNlbGVjdCIsIm9wdGlvbnMiLCJub2RlIiwicGFyZW50Tm9kZSIsIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJTVkdQYXJlbnQiLCJhcHBlbmQiLCJjbGFzc2VkIiwic3R5bGUiLCJvYmplY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJhdHRyIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNlbGVjdEFsbCIsInRhYmxlIiwia2V5cyIsIm1hcCIsImtleSIsInJvdyIsInRleHQiLCJyZW1vdmUiLCJDaGFydCIsImpzb24iLCJjYW52YXMiLCJjaGFydCIsImVsZW1lbnQiLCJ0eXBlIiwiem9vbVRvRml0IiwibWF4IiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJ4Iiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93Iiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiaW5mbyIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImRhdGEiLCJlbnRlciIsInRpdGxlIiwiaHRtbCIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZSIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJyZXF1aXJlZEFyZ3MiLCJtb2RhbCIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJnZXRDYW52YXNJZCIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9ucmVzaXplIiwiZm9yRWFjaCIsImUiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiQ2FudmFzIiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJib3VuZHMiLCJnZXRCQm94IiwiZnVsbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJmdWxsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5Iiwic2NhbGUiLCJNYXRoIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1cGRhdGVab29tIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwiQmFzZSIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiTW9kYWwiLCJzZWxmIiwibW9kYWxJZCIsImdldFdpbmRvd0lkIiwib3ZlcmxheSIsImZvcm0iLCJoZWFkZXIiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiZm9jdXMiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIm5hbWUiLCJHcmFwaCIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsImNvbnRleHRNZW51IiwiY2FudmFzTm9kZXMiLCJub2RlcyIsImNhbnZhc0xpbmtzIiwibGlua3MiLCJzdmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZXhlY3V0ZUNhbGxiYWNrIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNvcnQiLCJhIiwiYiIsImNvbG9ycyIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiY2FsbGJhY2tzIiwiY2IiLCJ0cmlnZ2VyIiwiQ29udGV4dE1lbnUiLCJCYXJDaGFydCIsImF4aXMiLCJkYXRhc2V0cyIsImRhdGFzZXROYW1lcyIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInNjYWxlQmFuZCIsInJhbmdlIiwic2NhbGVMaW5lYXIiLCJ0bXAiLCJjb25jYXQiLCJkb21haW5SYW5nZSIsImJhcnNHcm91cCIsImJhciIsImJhbmR3aWR0aCIsInhBeGlzR3JvdXAiLCJheGlzQm90dG9tIiwieUF4aXNHcm91cCIsImF4aXNMZWZ0Iiwic2xpY2UiLCJMaW5lQ2hhcnQiLCJsaW5lc0dyb3VwIiwidmFsdWVMaW5lIiwibGluZSIsIlNjYXR0ZXJDaGFydCIsInNjYXR0ZXJHcm91cCIsInNjYXR0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDQyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxvSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlDLElBQUlDLE1BQUosS0FBZUwsUUFBbkIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJTSxTQUFKLENBQWMsaURBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLQyxNQUFMLEtBQWdCQyxTQUFoQixJQUE2QixPQUFPLE1BQUtELE1BQVosS0FBdUIsVUFBeEQsRUFBb0U7QUFDbEUsWUFBTSxJQUFJRCxTQUFKLENBQWMsc0NBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLRyxRQUFMLEtBQWtCRCxTQUF0QixFQUFpQztBQUMvQixZQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IscUNBQWxCO0FBQ0Q7QUFWeUQ7QUFXM0Q7Ozs7d0JBRWdCO0FBQ2YsYUFBT0MsR0FBR0MsTUFBSCxDQUFVLEtBQUtDLE9BQUwsQ0FBYVosUUFBYixDQUFzQmEsSUFBdEIsR0FBNkJDLFVBQXZDLENBQVA7QUFDRDs7O3dCQUVlO0FBQ2QsYUFBTyxLQUFLRixPQUFMLENBQWFaLFFBQXBCO0FBQ0Q7Ozs7OztrQkFyQmtCRixROzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztJQUlxQmlCLE87Ozs7Ozs7OztBQUVuQjs7Ozs7Z0NBS21CQyxRLEVBQVU7QUFDM0IsK0JBQXVCQSxRQUF2QjtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLbUJBLFEsRUFBVTtBQUMzQiwrQkFBdUJBLFFBQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUttQkMsUSxFQUFVO0FBQzNCLCtCQUF1QkEsUUFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBS2lCQyxNLEVBQVE7QUFDdkIsNkJBQXFCQSxNQUFyQjtBQUNEOzs7Ozs7a0JBcENrQkgsTzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJJLE87OztBQUVuQix5QkFBNEQ7QUFBQSw0QkFBOUNwQixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxrSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUttQixPQUFMLEdBQWUsTUFBS0MsU0FBTCxDQUFlVixNQUFmLENBQXNCLDhCQUF0QixDQUFmO0FBQ0E7QUFDQSxRQUFJLENBQUMsTUFBS1MsT0FBTCxDQUFhUCxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsWUFBS08sT0FBTCxHQUFlLE1BQUtDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixlQUF0QixFQUNaQyxPQURZLENBQ0osZ0JBREksRUFDYyxJQURkLEVBQ29CQyxLQURwQixDQUMwQixTQUQxQixFQUNxQyxNQURyQyxDQUFmO0FBRUQ7QUFQeUQ7QUFRM0Q7Ozs7MkJBRU1DLE0sRUFBUTs7QUFFYjtBQUNBLFVBQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUNDLE9BQU9DLE1BQVAsQ0FBY0YsTUFBZCxFQUFzQkcsTUFBdEMsRUFBOEM7QUFDNUMsYUFBS3BCLE1BQUwsQ0FBWUMsS0FBWixDQUFrQix5Q0FBbEI7QUFDQTtBQUNEOztBQUVELFdBQUtXLE9BQUwsQ0FBYVMsSUFBYixDQUFrQixXQUFsQixrQkFBNENuQixHQUFHb0IsS0FBSCxDQUFTQyxPQUFULEdBQW1CLENBQS9ELFdBQW9FckIsR0FBR29CLEtBQUgsQ0FBU0UsT0FBVCxHQUFtQixDQUF2Rjs7QUFFQTtBQUNBLFVBQUksS0FBS1osT0FBTCxDQUFhYSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCcEIsSUFBNUIsRUFBSixFQUF3QztBQUN0QztBQUNEOztBQUVELFVBQUlxQixRQUFRLEtBQUtkLE9BQUwsQ0FBYUUsTUFBYixDQUFvQixXQUFwQixFQUFpQ08sSUFBakMsQ0FBc0MsT0FBdEMsRUFBK0MsZ0JBQS9DLEVBQ1RQLE1BRFMsQ0FDRixLQURFLEVBQ0tPLElBREwsQ0FDVSxPQURWLEVBQ21CLGNBRG5CLEVBQ21DUCxNQURuQyxDQUMwQyxLQUQxQyxFQUNpRE8sSUFEakQsQ0FDc0QsT0FEdEQsRUFDK0QsbUJBRC9ELENBQVo7QUFFQUgsYUFBT1MsSUFBUCxDQUFZVixNQUFaLEVBQW9CVyxHQUFwQixDQUF3QixVQUFTQyxHQUFULEVBQWM7QUFDcEMsWUFBSUMsTUFBTUosTUFBTVosTUFBTixDQUFhLEtBQWIsRUFBb0JPLElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLGtCQUFsQyxDQUFWO0FBQ0FTLFlBQUloQixNQUFKLENBQVcsS0FBWCxFQUFrQk8sSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEVSxJQUFyRCxDQUEwREYsR0FBMUQ7QUFDQUMsWUFBSWhCLE1BQUosQ0FBVyxLQUFYLEVBQWtCTyxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcURVLElBQXJELENBQTBEZCxPQUFPWSxHQUFQLENBQTFEO0FBQ0QsT0FKRDs7QUFNQTtBQUNBLFdBQUtqQixPQUFMLENBQWFJLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUI7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS0osT0FBTCxDQUFhYSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCTyxNQUE1QjtBQUNBLFdBQUtwQixPQUFMLENBQWFJLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsTUFBOUI7QUFDRDs7Ozs7O2tCQTFDa0JMLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCc0IsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5QzFDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHlHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTXlDLEksRUFBTTs7QUFFWCxVQUFJLENBQUNBLEtBQUtDLE1BQUwsQ0FBWUMsS0FBakIsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxVQUFJQyxVQUFVdkMsU0FBZDtBQUNBLGNBQVFvQyxLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0JFLElBQTFCO0FBQ0UsYUFBSyxLQUFMO0FBQ0VELG9CQUFVLHVCQUFhLEtBQUtqQyxPQUFsQixFQUEyQlAsTUFBM0IsQ0FBa0NxQyxJQUFsQyxDQUFWO0FBQ0E7QUFDRixhQUFLLE1BQUw7QUFDRUcsb0JBQVUsd0JBQWMsS0FBS2pDLE9BQW5CLEVBQTRCUCxNQUE1QixDQUFtQ3FDLElBQW5DLENBQVY7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFRyxvQkFBVSwyQkFBaUIsS0FBS2pDLE9BQXRCLEVBQStCUCxNQUEvQixDQUFzQ3FDLElBQXRDLENBQVY7QUFDQTtBQUNGO0FBQ0UsZ0JBQU0sSUFBSXRDLFNBQUosc0JBQWlDc0MsS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCRSxJQUFuRCwyQkFBTjtBQVhKOztBQWNBLFdBQUtsQyxPQUFMLENBQWFaLFFBQWIsQ0FBc0IrQyxTQUF0Qjs7QUFFQSxhQUFPRixPQUFQO0FBQ0Q7OzsrQkFVVSxDQUFFOzs7Z0NBSk1HLEcsRUFBSztBQUN0QixhQUFPQyxNQUFNQyxJQUFOLENBQVcsSUFBSUQsS0FBSixDQUFVRCxHQUFWLENBQVgsRUFBMkIsVUFBQ0csQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUEsQ0FBVjtBQUFBLE9BQTNCLEVBQXdDaEIsR0FBeEMsQ0FBNEM7QUFBQSxlQUFLaUIsQ0FBTDtBQUFBLE9BQTVDLENBQVA7QUFDRDs7O3dCQU5tQjtBQUNsQixhQUFPM0MsR0FBRzRDLGVBQUgsR0FBcUJDLE1BQXJCLENBQTRCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBNUIsRUFBc0NDLFlBQXRDLENBQW1EOUMsR0FBRytDLGtCQUF0RCxDQUFQO0FBQ0Q7Ozs7OztrQkFsQ2tCaEIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckIsSUFBSWlCLFlBQVksSUFBaEI7O0FBRUE7Ozs7SUFHcUJDLE07O0FBRW5COzs7OztBQUtBLG9CQUFzQztBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBeEI1RCxPQUF3QjtBQUFBLFFBQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUNwQyxRQUFJLENBQUMyRCxTQUFMLEVBQWdCO0FBQ2QsV0FBSzNELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUs2RCxPQUFMLEdBQWVBLE9BQWY7QUFDQUYsa0JBQVksSUFBWjtBQUNELEtBSkQsTUFLSztBQUNILGFBQU9BLFNBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OzswQkFJTUcsTyxFQUFTO0FBQ2IsVUFBSSxLQUFLOUQsT0FBVCxFQUFrQjtBQUNoQixhQUFLNkQsT0FBTCxDQUFhbkQsS0FBYixDQUFtQixLQUFLcUQsT0FBTCxDQUFhLE9BQWIsRUFBc0JELE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt5QkFJS0EsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhRyxJQUFiLENBQWtCLEtBQUtELE9BQUwsQ0FBYSxNQUFiLEVBQXFCRCxPQUFyQixDQUFsQjtBQUNEOztBQUVEOzs7Ozs7OzswQkFLTUEsTyxFQUFTRyxNLEVBQU87QUFDcEIsV0FBS0osT0FBTCxDQUFhSSxLQUFiLENBQW1CLEtBQUtGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCRCxPQUF0QixDQUFuQixFQUFtREcsTUFBbkQ7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0tILE8sRUFBU0csSyxFQUFPO0FBQ25CQSxjQUFRQSxTQUFTLEVBQWpCO0FBQ0EsV0FBS0osT0FBTCxDQUFhSSxLQUFiLENBQW1CLEtBQUtGLE9BQUwsQ0FBYSxNQUFiLEVBQXFCRCxPQUFyQixDQUFuQixFQUFrREcsS0FBbEQ7QUFDRDs7QUFFRDs7Ozs7Ozs0QkFJUUMsSyxFQUFPSixPLEVBQVM7QUFDdEIsbUJBQVdJLEtBQVgsWUFBdUIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQXZCLFdBQXFETixPQUFyRDtBQUNEOzs7Ozs7a0JBN0RrQkYsTTs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQlMsSTs7O0FBRW5CLHNCQUE0RDtBQUFBLDRCQUE5Q3JFLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFFUUQsUSxFQUFVcUUsYSxFQUFlO0FBQUE7O0FBQ2hDLGFBQU9BLGNBQWNDLE9BQWQsRUFBUCxFQUFnQztBQUM5QixZQUFJQyxXQUFXRixjQUFjRyxJQUFkLEVBQWY7QUFDQSxZQUFJQyxRQUFRekUsU0FBU3NCLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUNBLFlBQUlvRCxTQUFTRCxNQUFNeEMsU0FBTixDQUFnQixHQUFoQixFQUFxQjBDLElBQXJCLENBQTBCLENBQUNKLFFBQUQsQ0FBMUIsRUFBc0NLLEtBQXRDLEdBQThDdEQsTUFBOUMsQ0FBcUQsR0FBckQsRUFBMERPLElBQTFELENBQStELE9BQS9ELEVBQXdFMEMsU0FBU00sS0FBakYsRUFBd0ZDLElBQXhGLENBQTZGUCxTQUFTTSxLQUF0RyxDQUFiO0FBQ0EsWUFBSU4sU0FBU1EsUUFBVCxJQUFxQnJELE9BQU9DLE1BQVAsQ0FBYzRDLFNBQVNRLFFBQXZCLEVBQWlDbkQsTUFBMUQsRUFBa0U7QUFDaEU4QyxpQkFBT00sRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLHVCQUFhLE9BQUtyRSxPQUFsQixFQUEyQnNFLE9BQTNCLENBQW1DRCxDQUFuQyxDQUFQO0FBQUEsV0FBbkI7QUFDRDtBQUNELFlBQUlWLFNBQVNZLEtBQVQsSUFBa0J6RCxPQUFPQyxNQUFQLENBQWM0QyxTQUFTWSxLQUF2QixFQUE4QnZELE1BQTlCLEdBQXVDLENBQTdELEVBQWdFO0FBQzlELGNBQUl3RCxVQUFVWCxNQUFNbkQsTUFBTixDQUFhLElBQWIsQ0FBZDtBQUNBLGNBQUkrRCxtQkFBbUIsS0FBS0MsUUFBTCxDQUFjNUQsT0FBT0MsTUFBUCxDQUFjNEMsU0FBU1ksS0FBdkIsQ0FBZCxDQUF2QjtBQUNBLGVBQUtJLFFBQUwsQ0FBY0gsT0FBZCxFQUF1QkMsZ0JBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVFHLEssRUFBTztBQUNkLFVBQUlDLFlBQVksQ0FBaEI7QUFDQSxhQUFPO0FBQ0xqQixjQUFNLGdCQUFXO0FBQ2YsaUJBQU8sS0FBS0YsT0FBTCxLQUFpQmtCLE1BQU1DLFdBQU4sQ0FBakIsR0FBc0NuRixTQUE3QztBQUNELFNBSEk7QUFJTGdFLGlCQUFTLG1CQUFXO0FBQ2xCLGlCQUFPbUIsWUFBWUQsTUFBTTVELE1BQXpCO0FBQ0Q7QUFOSSxPQUFQO0FBUUQ7OzsrQkFFVSxDQUFFOzs7Ozs7a0JBbENNd0MsSTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCc0IsZTtBQUVuQixpQ0FBNEQ7QUFBQSw0QkFBOUMzRixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFDMUQsU0FBS1csT0FBTCxHQUFlO0FBQ2JiLGVBQVNBLE9BREk7QUFFYkMsZ0JBQVVBLFFBRkc7QUFHYkMsdUJBQWlCQTtBQUhKLEtBQWY7QUFLQSxTQUFLTyxNQUFMLEdBQWMscUJBQVcsRUFBRVQsU0FBU0EsT0FBWCxFQUFYLENBQWQ7QUFDRDs7Ozs0QkFFTzRGLE0sRUFBUTtBQUNkLFVBQUlqRSxPQUFPUyxJQUFQLENBQVl3RCxPQUFPWixRQUFQLENBQWdCYSxZQUE1QixFQUEwQ2hFLE1BQTlDLEVBQXNEO0FBQ3BELFlBQUlpRSxRQUFRLG9CQUFVLEtBQUtqRixPQUFmLENBQVo7QUFDQSxlQUFPaUYsTUFBTXhGLE1BQU4sQ0FBYXNGLE1BQWIsQ0FBUDtBQUNELE9BSEQsTUFJSztBQUNILGVBQU8sS0FBSy9FLE9BQUwsQ0FBYVgsZUFBYixDQUE2QjBGLE9BQU9aLFFBQXBDLENBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBbkJrQlcsZTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFJSSxhQUFhLEVBQWpCOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFXcUJDLE07O0FBRW5COzs7Ozs7O0FBT0Esd0JBQTREO0FBQUEsNEJBQTlDaEcsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQzFELFFBQUksQ0FBQ0EsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUkrRixLQUFKLENBQVUsd0dBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxDQUFDaEcsUUFBTCxFQUFlO0FBQ2IsWUFBTSxJQUFJZ0csS0FBSixDQUFVLHdEQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQ3RGLEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSXNGLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRDs7Ozs7O0FBTUEsU0FBS3BGLE9BQUwsR0FBZTtBQUNiYixlQUFTQSxPQURJO0FBRWJDLGdCQUFVQSxRQUZHO0FBR2JDLHVCQUFpQkE7QUFISixLQUFmO0FBS0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFLT2dHLEssRUFBTztBQUNaLFVBQUl2RCxPQUFPLG9CQUFVd0QsS0FBVixDQUFnQkQsS0FBaEIsQ0FBWDtBQUNBLFVBQUl2RCxJQUFKLEVBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxZQUFJQyxTQUFTLHFCQUFXLEtBQUsvQixPQUFoQixDQUFiO0FBQ0EsWUFBSXVGLE9BQU8sdUJBQWEsS0FBS3ZGLE9BQWxCLENBQVg7QUFDQSxZQUFJd0YsUUFBUSxvQkFBVSxLQUFLeEYsT0FBZixDQUFaO0FBQ0EsWUFBSWdDLFFBQVEsb0JBQVUsS0FBS2hDLE9BQWYsQ0FBWjtBQUNBK0IsZUFBTzBELEdBQVAsQ0FBV0YsSUFBWDtBQUNBeEQsZUFBTzBELEdBQVAsQ0FBV0QsS0FBWDtBQUNBekQsZUFBTzBELEdBQVAsQ0FBV3pELEtBQVg7QUFDQSxZQUFJQyxVQUFVRixPQUFPdEMsTUFBUCxDQUFjcUMsSUFBZCxDQUFkO0FBQ0FvRCxtQkFBVyxrQkFBUVEsV0FBUixDQUFvQjVELEtBQUtDLE1BQUwsQ0FBWTRELEVBQWhDLENBQVgsSUFBa0QxRCxPQUFsRDtBQUNBLGVBQU9BLFFBQVFoQyxJQUFSLEVBQVA7QUFDRDtBQUNGOzs7NkJBRVEwRixFLEVBQUk7QUFDWCxhQUFPVCxXQUFXUyxFQUFYLENBQVA7QUFDRDs7Ozs7O2tCQTFEa0JSLE07OztBQTZEckIsSUFBSTtBQUNGUyxVQUFRVCxNQUFSLEdBQWlCVSxPQUFPVixNQUFQLEdBQWdCQSxNQUFqQztBQUNBO0FBQ0FVLFNBQU9DLFFBQVAsR0FBa0IsWUFBVztBQUMzQjtBQUNBaEYsV0FBT0MsTUFBUCxDQUFjbUUsVUFBZCxFQUEwQmEsT0FBMUIsQ0FBa0MsVUFBU2hFLE1BQVQsRUFBaUI7QUFDakRBLGFBQU9JLFNBQVA7QUFDRCxLQUZEO0FBR0E7QUFDQXJDLE9BQUd1QixTQUFILENBQWEsdUNBQWIsRUFBc0RKLElBQXRELENBQTJELE9BQTNELEVBQW9FLE1BQXBFO0FBQ0QsR0FQRDtBQVFELENBWEQsQ0FZQSxPQUFPK0UsQ0FBUCxFQUFVO0FBQ1JKLFVBQVFULE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0Q7OztJQUdxQmMsUzs7Ozs7Ozs7O0FBRW5COzs7OzswQkFLYVosSyxFQUFPO0FBQ2xCQSxjQUFRLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJhLEtBQUtDLFNBQUwsQ0FBZWQsS0FBZixDQUE1QixHQUFvREEsS0FBNUQ7QUFDQUEsY0FBUUEsTUFBTWUsT0FBTixDQUFjLHFCQUFkLEVBQXFDLEVBQXJDLENBQVI7QUFDQSxVQUFJQyxZQUFZLGFBQWhCO0FBQ0EsVUFBSUMsUUFBUUQsVUFBVUUsSUFBVixDQUFlbEIsS0FBZixDQUFaO0FBQ0EsVUFBSWlCLEtBQUosRUFBVztBQUNUakIsZ0JBQVFpQixNQUFNLENBQU4sQ0FBUjtBQUNBLFlBQUk7QUFDRixjQUFJeEUsT0FBT29FLEtBQUtaLEtBQUwsQ0FBV0QsS0FBWCxDQUFYO0FBQ0EsaUJBQU92RCxLQUFLMEUsS0FBTCxLQUFlLDZCQUFmLEdBQStDMUUsSUFBL0MsR0FBc0RwQyxTQUE3RDtBQUNELFNBSEQsQ0FJQSxPQUFPc0csQ0FBUCxFQUFVO0FBQ1I7QUFDQWhELGtCQUFRSSxLQUFSLENBQWM0QyxDQUFkO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsYUFBT3RHLFNBQVA7QUFDRDs7Ozs7O2tCQXpCa0J1RyxTOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7SUFDcUJRLE07OztBQUVuQix3QkFBNEQ7QUFBQSw0QkFBOUN0SCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwyR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU15QyxJLEVBQU07QUFDWCxVQUFJNEUsU0FBUzVHLEdBQUdDLE1BQUgsQ0FBVSxLQUFLQyxPQUFMLENBQWFaLFFBQXZCLENBQWI7QUFDQTtBQUNBLFVBQUlnQixXQUFXLGtCQUFRc0YsV0FBUixDQUFvQjVELEtBQUtDLE1BQUwsQ0FBWTRELEVBQWhDLENBQWY7QUFDQSxVQUFJNUQsU0FBU2pDLEdBQUdDLE1BQUgsVUFBaUJLLFFBQWpCLENBQWI7QUFDQTtBQUNBLFVBQUksQ0FBQzJCLE9BQU85QixJQUFQLEVBQUwsRUFBb0I7QUFDbEI7QUFDQSxhQUFLTCxNQUFMLENBQVlDLEtBQVosdUJBQXNDTyxRQUF0QztBQUNBMkIsaUJBQVMyRSxPQUFPaEcsTUFBUCxDQUFjLEtBQWQsRUFDTk8sSUFETSxDQUNELElBREMsRUFDS2IsUUFETCxFQUVOYSxJQUZNLENBRUQsT0FGQyxFQUVRLHNCQUZSLENBQVQ7QUFHRDs7QUFFRDtBQUNBLFVBQUksQ0FBQ2MsT0FBTzlCLElBQVAsRUFBTCxFQUFvQjtBQUNsQixjQUFNLElBQUltRixLQUFKLDZDQUFvRGhGLFFBQXBELDBCQUFOO0FBQ0Q7O0FBRUQyQixhQUFPZCxJQUFQLENBQVksT0FBWixFQUFxQmEsS0FBS0MsTUFBTCxDQUFZNEUsS0FBakMsRUFBd0MxRixJQUF4QyxDQUE2QyxRQUE3QyxFQUF1RGEsS0FBS0MsTUFBTCxDQUFZNkUsTUFBbkU7O0FBRUEsVUFBSUMsT0FBTy9HLEdBQUcrRyxJQUFILEVBQVgsQ0FyQlcsQ0FxQlc7O0FBRXRCLFVBQUlyQyxVQUFVekMsT0FBT2hDLE1BQVAsQ0FBYyxrQkFBZCxDQUFkOztBQUVBLFVBQUksQ0FBQ3lFLFFBQVF2RSxJQUFSLEVBQUwsRUFBcUI7QUFDbkJ1RSxrQkFBVXpDLE9BQU9yQixNQUFQLENBQWMsR0FBZCxFQUFtQk8sSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsZ0JBQWpDLENBQVY7QUFDQTRGLGFBQUt6QyxFQUFMLENBQVEsTUFBUixFQUFnQjBDLE1BQWhCO0FBQ0EvRSxlQUFPZ0YsSUFBUCxDQUFZRixJQUFaLEVBQWtCekMsRUFBbEIsQ0FBcUIsZUFBckIsRUFBc0MsSUFBdEMsRUFIbUIsQ0FHMEI7QUFDOUM7O0FBRURyQyxhQUFPcUMsRUFBUCxDQUFVLE9BQVYsRUFBbUI0QyxPQUFuQixFQUE0QixJQUE1Qjs7QUFFQWpGLGFBQU9JLFNBQVAsR0FBbUIsWUFBVztBQUM1QixZQUFJOEUsU0FBU3pDLFFBQVF2RSxJQUFSLEdBQWVpSCxPQUFmLEVBQWI7O0FBRUEsWUFBSUMsWUFBWXBGLE9BQU85QixJQUFQLEdBQWNtSCxXQUE5QjtBQUFBLFlBQ0VDLGFBQWF0RixPQUFPOUIsSUFBUCxHQUFjcUgsWUFBZCxHQUE2QixFQUQ1QyxDQUg0QixDQUlvQjs7QUFFaEQsWUFBSVgsUUFBUU0sT0FBT04sS0FBbkI7QUFBQSxZQUNFQyxTQUFTSyxPQUFPTCxNQURsQjs7QUFHQSxZQUFJRCxTQUFTLENBQVQsSUFBY0MsVUFBVSxDQUE1QixFQUErQjs7QUFFL0IsWUFBSVcsT0FBT04sT0FBT3hFLENBQVAsR0FBV2tFLFFBQVEsQ0FBOUI7QUFBQSxZQUNFYSxPQUFPUCxPQUFPUSxDQUFQLEdBQVdiLFNBQVMsQ0FEN0I7O0FBR0EsWUFBSWMsUUFBUyxJQUFELEdBQVNDLEtBQUt2RixHQUFMLENBQVN1RSxRQUFRUSxTQUFqQixFQUE0QlAsU0FBU1MsVUFBckMsQ0FBckI7QUFDQSxZQUFJTyxhQUFhVCxZQUFZLENBQVosR0FBZ0JPLFFBQVFILElBQXpDO0FBQUEsWUFDRU0sYUFBYVIsYUFBYSxDQUFiLEdBQWlCSyxRQUFRRixJQUR4Qzs7QUFHQWhELGdCQUFRc0QsVUFBUixHQUNHQyxRQURILENBQ1ksSUFEWixFQUVHOUcsSUFGSCxDQUVRLFdBRlIsaUJBRWtDMkcsVUFGbEMsU0FFZ0RDLFVBRmhELGVBRW9FSCxLQUZwRSxTQUU2RUEsS0FGN0UsUUFHR3RELEVBSEgsQ0FHTSxLQUhOLEVBR2E7QUFBQSxpQkFBTTRELFdBQVdKLFVBQVgsRUFBdUJDLFVBQXZCLEVBQW1DSCxLQUFuQyxDQUFOO0FBQUEsU0FIYjtBQUlELE9BdEJEOztBQXdCQSxlQUFTTSxVQUFULENBQW9CSixVQUFwQixFQUFnQ0MsVUFBaEMsRUFBNENILEtBQTVDLEVBQW1EO0FBQ2pEM0YsZUFBT2dGLElBQVAsQ0FBWUYsS0FBS29CLFNBQWpCLEVBQTRCbkksR0FBR29JLFlBQUgsQ0FBZ0JDLFNBQWhCLENBQTBCUCxVQUExQixFQUFzQ0MsVUFBdEMsRUFBa0RILEtBQWxELENBQXdEQSxLQUF4RCxFQUErREEsS0FBL0QsQ0FBNUI7QUFDRDs7QUFFRCxlQUFTWixNQUFULEdBQWtCO0FBQ2hCdEMsZ0JBQVF2RCxJQUFSLENBQWEsV0FBYixFQUEwQm5CLEdBQUdvQixLQUFILENBQVMrRyxTQUFuQztBQUNEOztBQUVELGVBQVNqQixPQUFULEdBQW1CO0FBQ2pCLFlBQUlsSCxHQUFHb0IsS0FBSCxDQUFTa0gsZ0JBQWIsRUFBK0I7QUFBRXRJLGFBQUdvQixLQUFILENBQVNtSCxlQUFUO0FBQTZCO0FBQy9EOztBQUVELFdBQUt6SSxNQUFMLENBQVlDLEtBQVosc0JBQXFDTyxRQUFyQzs7QUFFQSxXQUFLa0ksY0FBTCxDQUFvQnZHLE1BQXBCLEVBQTRCRCxJQUE1Qjs7QUFFQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7OztrQkFoRmtCMEUsTTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7Ozs7Ozs7Ozs7SUFFcUI4QixTOzs7QUFFbkIsMkJBQTREO0FBQUEsNEJBQTlDcEosT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsc0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVnSixTQUFuQixFQUE4QjtBQUM1QixZQUFNLElBQUkvSSxTQUFKLENBQWMsa0RBQWQsQ0FBTjtBQUNEO0FBQ0QsVUFBS2dKLFNBQUwsR0FBaUIsRUFBakI7QUFMMEQ7QUFNM0Q7Ozs7d0JBRUdDLFEsRUFBVTtBQUNaLFdBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDRDs7O21DQUVjL0IsTSxFQUFRNUUsSSxFQUFNO0FBQzNCO0FBQ0EsVUFBSTZHLGtCQUFrQixLQUFLM0ksT0FBM0I7QUFDQSxVQUFJMEcsTUFBSixFQUFZO0FBQ1ZpQyx3QkFBZ0J2SixRQUFoQixHQUEyQnNILE1BQTNCO0FBQ0Q7QUFDRDtBQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFPM0IsNkJBQXFCLEtBQUs4QixTQUExQiw4SEFBcUM7QUFBQSxjQUE1QkMsUUFBNEI7O0FBQ25DQSxtQkFBU0csTUFBVCxDQUFnQkQsZUFBaEIsRUFBaUNsSixNQUFqQyxDQUF3Q3FDLElBQXhDO0FBQ0Q7QUFUMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVU1Qjs7Ozs7O2tCQXhCa0J5RyxTOzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7Ozs7O0lBRXFCTSxJO0FBRW5CLHNCQUE0RDtBQUFBLDRCQUE5QzFKLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUMxRDs7O0FBR0EsU0FBS1csT0FBTCxHQUFlO0FBQ2JiLGVBQVNBLE9BREk7QUFFYkMsZ0JBQVVBLFFBRkc7QUFHYkMsdUJBQWlCQTtBQUhKLEtBQWY7QUFLQTs7O0FBR0EsU0FBS08sTUFBTCxHQUFjLHFCQUFXLEtBQUtJLE9BQWhCLENBQWQ7QUFDRDs7OztrQ0FFc0Q7QUFBQSxnQ0FBOUNiLE9BQThDO0FBQUEsVUFBOUNBLE9BQThDLGlDQUFwQyxLQUFvQztBQUFBLFVBQTdCQyxRQUE2QixTQUE3QkEsUUFBNkI7QUFBQSxVQUFuQkMsZUFBbUIsU0FBbkJBLGVBQW1COztBQUNyRCxXQUFLVyxPQUFMLEdBQWU7QUFDYmIsaUJBQVNBLE9BREk7QUFFYkMsa0JBQVVBLFFBRkc7QUFHYkMseUJBQWlCQTtBQUhKLE9BQWY7QUFLQSxhQUFPLElBQVA7QUFDRDs7Ozs7O2tCQXhCa0J3SixJOzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQyxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDM0osT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsK0dBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNeUMsSSxFQUFNO0FBQUE7O0FBQ1gsVUFBSTRFLFNBQVMsS0FBSzFHLE9BQUwsQ0FBYVosUUFBMUI7O0FBRUEsVUFBSWtCLFNBQVMsa0JBQVF5SSxTQUFSLENBQWtCakgsS0FBS0MsTUFBTCxDQUFZNEQsRUFBOUIsQ0FBYjtBQUNBLFVBQUlKLE9BQU96RixHQUFHQyxNQUFILE9BQWNPLE1BQWQsQ0FBWDs7QUFFQTtBQUNBLFVBQUksQ0FBQ2lGLEtBQUt0RixJQUFMLEVBQUwsRUFBa0I7QUFDaEI7QUFDQSxhQUFLTCxNQUFMLENBQVlDLEtBQVosMEJBQXlDUyxNQUF6QztBQUNBaUYsZUFBT21CLE9BQU9oRyxNQUFQLENBQWMsZUFBZCxFQUErQk8sSUFBL0IsQ0FBb0MsV0FBcEMsb0JBQ0pOLE9BREksQ0FDSSx5QkFESixFQUMrQixJQUQvQixFQUNxQ00sSUFEckMsQ0FDMEMsT0FEMUMsRUFDbUQsTUFEbkQsRUFFSkEsSUFGSSxDQUVDLElBRkQsRUFFT1gsTUFGUCxDQUFQO0FBR0Q7O0FBRUQ7QUFDQWlGLFdBQUtsRSxTQUFMLENBQWUsR0FBZixFQUFvQk8sTUFBcEI7O0FBRUEyRCxhQUFPQSxLQUFLN0UsTUFBTCxDQUFZLFVBQVosRUFBd0JPLElBQXhCLENBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QyxDQUFQOztBQUVBLFVBQUlhLEtBQUtDLE1BQUwsQ0FBWWtDLEtBQWhCLEVBQXVCO0FBQ3JCc0IsYUFBSzdFLE1BQUwsQ0FBWSxJQUFaLEVBQWtCTyxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxjQUFoQyxFQUFnRFAsTUFBaEQsQ0FBdUQsR0FBdkQsRUFBNER3RCxJQUE1RCxDQUFpRXBDLEtBQUtDLE1BQUwsQ0FBWWtDLEtBQTdFO0FBQ0Q7O0FBRUQsVUFBSUosUUFBUTBCLEtBQUs3RSxNQUFMLENBQVksSUFBWixDQUFaO0FBQ0FtRCxZQUFNbkQsTUFBTixDQUFhLEdBQWIsRUFBa0J3RCxJQUFsQixDQUF1QixRQUF2QjtBQUNBLFVBQUlNLFVBQVVYLE1BQU1uRCxNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0E4RCxjQUFROUQsTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDMEQsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFNc0MsT0FBT3ZFLFNBQVAsRUFBTjtBQUFBLE9BQTdDLEVBQXVFbEIsSUFBdkUsQ0FBNEUsT0FBNUUsRUFBcUYsYUFBckYsRUFBb0dpRCxJQUFwRyxDQUF5RyxhQUF6RztBQUNBTSxjQUFROUQsTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDMEQsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFNLE9BQUt4RSxNQUFMLENBQVl1RCxJQUFaLENBQWlCLHlDQUFqQixDQUFOO0FBQUEsT0FBN0MsRUFBZ0hsQyxJQUFoSCxDQUFxSCxPQUFySCxFQUE4SCxhQUE5SCxFQUE2SWlELElBQTdJLENBQWtKLGFBQWxKO0FBQ0FNLGNBQVE5RCxNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUMwRCxFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQU0sT0FBS3hFLE1BQUwsQ0FBWXVELElBQVosQ0FBaUIsMENBQWpCLENBQU47QUFBQSxPQUE3QyxFQUFpSGxDLElBQWpILENBQXNILE9BQXRILEVBQStILE9BQS9ILEVBQXdJaUQsSUFBeEksQ0FBNkksT0FBN0k7O0FBRUE7QUFDQSxVQUFJVCxnQkFBZ0IsS0FBS2lCLFFBQUwsQ0FBYzVELE9BQU9DLE1BQVAsQ0FBY2UsS0FBS0MsTUFBTCxDQUFZd0MsS0FBMUIsQ0FBZCxDQUFwQjtBQUNBLFdBQUtJLFFBQUwsQ0FBY1ksSUFBZCxFQUFvQjlCLGFBQXBCOztBQUVBLFdBQUs3RCxNQUFMLENBQVlDLEtBQVoseUJBQXdDUyxNQUF4Qzs7QUFFQSxhQUFPaUYsSUFBUDtBQUNEOzs7Ozs7a0JBNUNrQnVELFE7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJFLEs7OztBQUVuQix1QkFBNEQ7QUFBQSw0QkFBOUM3SixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx5R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU15QyxJLEVBQU07QUFDWCxVQUFJbUgsT0FBTyxJQUFYOztBQUVBLFVBQUlDLFVBQVUsa0JBQVFDLFdBQVIsQ0FBb0JySCxLQUFLcUMsUUFBTCxDQUFjd0IsRUFBbEMsQ0FBZDtBQUNBLFdBQUsvRixNQUFMLENBQVlDLEtBQVosK0JBQThDcUosT0FBOUM7O0FBRUE7QUFDQSxVQUFJRSxVQUFVdEosR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JXLE1BQWxCLENBQXlCLEtBQXpCLEVBQ1hPLElBRFcsQ0FDTixPQURNLEVBQ0csZ0JBREgsQ0FBZDtBQUVBLFVBQUlnRSxRQUFRbkYsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JXLE1BQWxCLENBQXlCLEtBQXpCLEVBQ1RPLElBRFMsQ0FDSixJQURJLEVBQ0VpSSxPQURGLEVBRVRqSSxJQUZTLENBRUosT0FGSSxFQUVLLGNBRkwsQ0FBWjs7QUFJQSxVQUFJb0ksT0FBT3BFLE1BQU12RSxNQUFOLENBQWEsTUFBYixDQUFYOztBQUVBLFVBQUk0SSxTQUFTRCxLQUFLM0ksTUFBTCxDQUFZLEtBQVosRUFBbUJPLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHFCQUFqQyxDQUFiOztBQUVBcUksYUFBTzVJLE1BQVAsQ0FBYyxNQUFkLEVBQXNCd0QsSUFBdEIsQ0FBMkIsOEJBQTNCLEVBQTJEeEQsTUFBM0QsQ0FBa0UsTUFBbEUsRUFBMEVPLElBQTFFLENBQStFLE9BQS9FLEVBQXdGLG9CQUF4RixFQUE4R1UsSUFBOUcsQ0FBbUhHLEtBQUttQyxLQUF4SDs7QUFFQSxVQUFJTyxVQUFVNkUsS0FBSzNJLE1BQUwsQ0FBWSxLQUFaLEVBQW1CTyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxzQkFBakMsRUFBeURQLE1BQXpELENBQWdFLEtBQWhFLEVBQXVFTyxJQUF2RSxDQUE0RSxPQUE1RSxFQUFxRixjQUFyRixFQUFxR1AsTUFBckcsQ0FBNEcsS0FBNUcsRUFBbUhPLElBQW5ILENBQXdILE9BQXhILEVBQWlJLG1CQUFqSSxDQUFkOztBQW5CVztBQUFBO0FBQUE7O0FBQUE7QUFxQlgsNkJBQWdCSCxPQUFPQyxNQUFQLENBQWNlLEtBQUtxQyxRQUFMLENBQWNhLFlBQTVCLENBQWhCLDhIQUEyRDtBQUFBLGNBQWxEdUUsR0FBa0Q7O0FBQ3pELGNBQUk3SCxNQUFNOEMsUUFBUTlELE1BQVIsQ0FBZSxLQUFmLEVBQXNCTyxJQUF0QixDQUEyQixPQUEzQixFQUFvQyxrQkFBcEMsQ0FBVjtBQUNBUyxjQUFJaEIsTUFBSixDQUFXLEtBQVgsRUFBa0JPLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLG1CQUFoQyxFQUFxRFAsTUFBckQsQ0FBNEQsT0FBNUQsRUFBcUVPLElBQXJFLENBQTBFLEtBQTFFLEVBQWlGc0ksSUFBSTVELEVBQXJGLEVBQXlGaEUsSUFBekYsQ0FBOEY0SCxJQUFJdEYsS0FBbEc7QUFDQXZDLGNBQUloQixNQUFKLENBQVcsS0FBWCxFQUFrQk8sSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEUCxNQUFyRCxDQUE0RCxPQUE1RCxFQUFxRU8sSUFBckUsQ0FBMEUsSUFBMUUsRUFBZ0ZzSSxJQUFJNUQsRUFBcEYsRUFBd0YxRSxJQUF4RixDQUE2RixPQUE3RixFQUFzRyxZQUF0RyxFQUNHQSxJQURILENBQ1EsVUFEUixFQUNvQixFQURwQixFQUVHQSxJQUZILENBRVEsTUFGUixFQUVnQnNJLElBQUk1RCxFQUZwQixFQUdHMUUsSUFISCxDQUdRLE1BSFIsRUFHZ0JzSSxJQUFJckgsSUFIcEIsRUFJR2pCLElBSkgsQ0FJUSxPQUpSLEVBSWlCc0ksSUFBSUMsS0FKckIsRUFLR3BGLEVBTEgsQ0FLTSxRQUxOLEVBS2dCLFlBQVc7QUFBRXRDLGlCQUFLcUMsUUFBTCxDQUFjYSxZQUFkLENBQTJCLEtBQUtXLEVBQWhDLEVBQW9DNkQsS0FBcEMsR0FBNEMsS0FBS0EsS0FBakQ7QUFBeUQsV0FMdEYsRUFNR3BGLEVBTkgsQ0FNTSxPQU5OLEVBTWUsS0FBS3FGLFFBTnBCLEVBT0dyRixFQVBILENBT00sT0FQTixFQU9lLEtBQUtxRixRQVBwQixFQVFHckYsRUFSSCxDQVFNLE9BUk4sRUFRZSxLQUFLcUYsUUFScEI7QUFTQS9ILGNBQUloQixNQUFKLENBQVcsTUFBWCxFQUFtQk8sSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakM7QUFDRDtBQWxDVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9DWHVELGNBQVFuRCxTQUFSLENBQWtCLGFBQWxCLEVBQWlDcEIsSUFBakMsR0FBd0N5SixLQUF4Qzs7QUFFQSxVQUFJQyxTQUFTTixLQUFLM0ksTUFBTCxDQUFZLEtBQVosRUFBbUJPLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHFCQUFqQyxDQUFiOztBQUVBMEksYUFBT2pKLE1BQVAsQ0FBYyxRQUFkLEVBQXdCaUIsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUN5QyxFQUFuQyxDQUFzQyxPQUF0QyxFQUErQyxZQUFXO0FBQ3hELFlBQUlpRixLQUFLcEosSUFBTCxHQUFZMkosYUFBWixFQUFKLEVBQWlDO0FBQy9CWCxlQUFLakosT0FBTCxDQUFhWCxlQUFiLENBQTZCeUMsS0FBS3FDLFFBQWxDO0FBQ0FpRixrQkFBUXhILE1BQVI7QUFDQXFELGdCQUFNckQsTUFBTjtBQUNBVixnQkFBTTJJLGNBQU47QUFDRDtBQUNELGVBQU8sS0FBUDtBQUNELE9BUkQ7QUFTQUYsYUFBT2pKLE1BQVAsQ0FBYyxRQUFkLEVBQXdCaUIsSUFBeEIsQ0FBNkIsUUFBN0IsRUFBdUN5QyxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxZQUFNO0FBQ3ZEbEQsY0FBTTJJLGNBQU47QUFDQVQsZ0JBQVF4SCxNQUFSO0FBQ0FxRCxjQUFNckQsTUFBTjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BTEQ7O0FBT0E7QUFDQSxVQUFJO0FBQ0ZrSSxnQkFBUUMsZ0JBQVIsQ0FBeUJDLGVBQXpCLENBQXlDLGFBQXpDO0FBQ0FGLGdCQUFRQyxnQkFBUixDQUF5QkMsZUFBekIsQ0FBeUMsaUJBQXpDO0FBQ0FGLGdCQUFRQyxnQkFBUixDQUF5QkMsZUFBekIsQ0FBeUMsZUFBekM7QUFDRCxPQUpELENBS0EsT0FBT2hFLENBQVAsRUFBVTtBQUNSLFlBQUlBLEVBQUVpRSxJQUFGLElBQVUsZ0JBQWQsRUFBZ0M7QUFDOUJoQixlQUFLckosTUFBTCxDQUFZQyxLQUFaLENBQWtCLDJDQUFsQixFQUErRG1HLENBQS9EO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLcEcsTUFBTCxDQUFZQyxLQUFaLDhCQUE2Q3FKLE9BQTdDOztBQUVBLGFBQU9qRSxLQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7Ozs7a0JBL0VNK0QsSzs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJrQixLOzs7Ozs4QkFPRmhJLEksRUFBTTtBQUNyQixVQUFJQSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsZUFBT3BDLEdBQUdxSyxZQUFWO0FBQ0QsT0FGRCxNQUdLLElBQUlqSSxTQUFTLE9BQWIsRUFBc0I7QUFDekIsZUFBT3BDLEdBQUdzSyxXQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUlsSSxTQUFTLFNBQWIsRUFBd0I7QUFDM0IsZUFBT3BDLEdBQUd1SyxhQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUluSSxTQUFTLFFBQWIsRUFBdUI7QUFDMUIsZUFBT3BDLEdBQUd3SyxZQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUlwSSxTQUFTLFVBQWIsRUFBeUI7QUFDNUIsZUFBT3BDLEdBQUd5SyxjQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUlySSxTQUFTLE1BQWIsRUFBcUI7QUFDeEIsZUFBT3BDLEdBQUcwSyxVQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUl0SSxTQUFTLEtBQWIsRUFBb0I7QUFDdkIsZUFBT3BDLEdBQUcySyxTQUFWO0FBQ0QsT0FGSSxNQUdBO0FBQ0gsZUFBTzNLLEdBQUdxSyxZQUFWO0FBQ0Q7QUFDRjs7O3dCQTdCbUI7QUFDbEIsYUFBT3JLLEdBQUc0QyxlQUFILEdBQXFCQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDQyxZQUF0QyxDQUFtRDlDLEdBQUcrQyxrQkFBdEQsQ0FBUDtBQUNEOzs7QUE2QkQsdUJBQTREO0FBQUEsNEJBQTlDMUQsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNeUMsSSxFQUFNOztBQUVYO0FBQ0EsVUFBSSxDQUFDQSxLQUFLQyxNQUFMLENBQVl5RCxLQUFqQixFQUF3QjtBQUN0QixhQUFLNUYsTUFBTCxDQUFZQyxLQUFaLENBQWtCLDBDQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSVcsVUFBVSxzQkFBWSxLQUFLUixPQUFqQixDQUFkO0FBQ0EsVUFBSTBLLGNBQWMsMEJBQWdCLEtBQUsxSyxPQUFyQixDQUFsQjtBQUNBLFVBQUltRSxXQUFXLHVCQUFhLEtBQUtuRSxPQUFsQixDQUFmOztBQUVBLFVBQUkwRyxTQUFTLEtBQUsxRyxPQUFMLENBQWFaLFFBQTFCOztBQUVBLFVBQUl1TCxjQUFjN0ksS0FBS0MsTUFBTCxDQUFZeUQsS0FBWixDQUFrQm9GLEtBQWxCLEdBQTBCOUosT0FBT0MsTUFBUCxDQUFjZSxLQUFLQyxNQUFMLENBQVl5RCxLQUFaLENBQWtCb0YsS0FBaEMsQ0FBMUIsR0FBbUUsRUFBckY7QUFBQSxVQUNFQyxjQUFjL0ksS0FBS0MsTUFBTCxDQUFZeUQsS0FBWixDQUFrQnNGLEtBQWxCLEdBQTBCaEssT0FBT0MsTUFBUCxDQUFjZSxLQUFLQyxNQUFMLENBQVl5RCxLQUFaLENBQWtCc0YsS0FBaEMsQ0FBMUIsR0FBbUUsRUFEbkY7O0FBR0EsVUFBSUMsTUFBTXJFLE9BQU8zRyxNQUFQLENBQWMsa0JBQWQsQ0FBVjtBQUFBLFVBQ0U0RyxRQUFRLENBQUNELE9BQU96RixJQUFQLENBQVksT0FBWixDQUFELElBQXlCbkIsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JFLElBQWxCLEdBQXlCK0sscUJBQXpCLEdBQWlEckUsS0FEcEY7QUFBQSxVQUVFQyxTQUFTLENBQUNGLE9BQU96RixJQUFQLENBQVksUUFBWixDQUFELElBQTBCbkIsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JFLElBQWxCLEdBQXlCK0sscUJBQXpCLEdBQWlEcEUsTUFGdEY7O0FBSUE7QUFDQSxVQUFJcUUsU0FBU25MLEdBQUdtTCxNQUFILENBQVUsQ0FBQyxHQUFYLEVBQWdCQyxRQUFoQixDQUF5QixJQUF6QixDQUFiOztBQUVBO0FBQ0EsVUFBSUMsU0FBU3JMLEdBQUdxTCxNQUFILENBQVUsR0FBVixFQUFlRCxRQUFmLENBQXdCLElBQXhCLENBQWI7O0FBRUEsVUFBSXBKLEtBQUtDLE1BQUwsQ0FBWXlELEtBQVosQ0FBa0J0RCxJQUFsQixLQUEyQixPQUEvQixFQUF3QztBQUN0QztBQUNBaUosaUJBQVNyTCxHQUFHcUwsTUFBSCxDQUFVO0FBQUEsaUJBQUs5RyxFQUFFK0csS0FBRixJQUFXL0csRUFBRWdILElBQUYsR0FBUyxDQUFwQixDQUFMO0FBQUEsU0FBVixFQUF1Q0gsUUFBdkMsQ0FBZ0QsQ0FBaEQsQ0FBVDtBQUNEOztBQUVELFVBQUlJLGFBQWF4TCxHQUFHeUwsZUFBSCxHQUNkQyxLQURjLENBQ1IsTUFEUSxFQUNBMUwsR0FBRzJMLFNBQUgsR0FBZTlGLEVBQWYsQ0FBa0I7QUFBQSxlQUFLdEIsRUFBRXNCLEVBQVA7QUFBQSxPQUFsQixFQUE2QnVGLFFBQTdCLENBQXNDLEtBQXRDLENBREEsRUFFZE0sS0FGYyxDQUVSLFFBRlEsRUFFRTFMLEdBQUc0TCxhQUFILEdBQW1CUixRQUFuQixDQUE0QixDQUFDLEdBQTdCLENBRkYsRUFHZE0sS0FIYyxDQUdSLFNBSFEsRUFHRzFMLEdBQUc2TCxZQUFILENBQWdCO0FBQUEsZUFBS3RILEVBQUVnSCxJQUFQO0FBQUEsT0FBaEIsQ0FISCxFQUlkRyxLQUpjLENBSVIsR0FKUSxFQUlIUCxNQUpHLEVBS2RPLEtBTGMsQ0FLUixHQUxRLEVBS0hMLE1BTEcsRUFNZEssS0FOYyxDQU1SLFFBTlEsRUFNRTFMLEdBQUc4TCxXQUFILENBQWVqRixRQUFRLENBQXZCLEVBQTBCQyxTQUFTLENBQW5DLENBTkYsRUFPZHhDLEVBUGMsQ0FPWCxLQVBXLEVBT0osWUFBVztBQUNwQjtBQUNBc0MsZUFBT3ZFLFNBQVA7QUFDRCxPQVZjLENBQWpCOztBQVlBLFVBQUkwSixZQUFZZCxJQUFJMUosU0FBSixDQUFjLGdCQUFkLENBQWhCOztBQUVBLFVBQUksQ0FBQ3dLLFVBQVU1TCxJQUFWLEVBQUwsRUFBdUI7QUFDckI0TCxvQkFBWWQsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixjQUE5QixDQUFaO0FBQ0Q7O0FBRUQsVUFBSTZLLE9BQU9ELFVBQVV4SyxTQUFWLENBQW9CLGtCQUFwQixFQUF3QzBDLElBQXhDLENBQTZDOEcsV0FBN0MsQ0FBWDs7QUFFQWlCLFdBQUtDLElBQUwsR0FBWW5LLE1BQVo7O0FBRUFrSyxhQUFPQSxLQUFLOUgsS0FBTCxHQUFhdEQsTUFBYixDQUFvQixNQUFwQixFQUNKTyxJQURJLENBQ0MsT0FERCxFQUNVLGFBRFYsRUFFSkEsSUFGSSxDQUVDLElBRkQsRUFFTztBQUFBLGVBQVFvRCxFQUFFMkgsTUFBVixTQUFvQjNILEVBQUU5RSxNQUF0QjtBQUFBLE9BRlAsRUFHSjBNLEtBSEksQ0FHRUgsSUFIRixDQUFQOztBQUtBLFVBQUloSyxLQUFLQyxNQUFMLENBQVl5RCxLQUFaLENBQWtCdEQsSUFBbEIsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekM7QUFDQXdFLGVBQU9oRyxNQUFQLENBQWMsTUFBZCxFQUFzQlcsU0FBdEIsQ0FBZ0MsUUFBaEMsRUFDRzBDLElBREgsQ0FDUSxDQUFDLE9BQUQsQ0FEUixFQUVHQyxLQUZILEdBRVd0RCxNQUZYLENBRWtCLFFBRmxCLEVBR0dPLElBSEgsQ0FHUSxPQUhSLEVBR2lCLGVBSGpCLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBS29ELENBQUw7QUFBQSxTQUpkLEVBS0dwRCxJQUxILENBS1EsU0FMUixFQUttQixZQUxuQixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixFQU5oQixFQU9HQSxJQVBILENBT1EsTUFQUixFQU9nQixDQVBoQixFQVFHQSxJQVJILENBUVEsYUFSUixFQVF1QixFQVJ2QixFQVNHQSxJQVRILENBU1EsY0FUUixFQVN3QixFQVR4QixFQVVHQSxJQVZILENBVVEsUUFWUixFQVVrQixNQVZsQixFQVdHUCxNQVhILENBV1UsTUFYVixFQVlHTyxJQVpILENBWVEsR0FaUixFQVlhLDZCQVpiO0FBYUE7QUFDQTZLLGFBQUtsTCxLQUFMLENBQVcsWUFBWCxFQUF5QixhQUF6QjtBQUNEOztBQUVELFVBQUlzTCxZQUFZbkIsSUFBSTFKLFNBQUosQ0FBYyxnQkFBZCxDQUFoQjs7QUFFQSxVQUFJLENBQUM2SyxVQUFVak0sSUFBVixFQUFMLEVBQXVCO0FBQ3JCaU0sb0JBQVluQixJQUFJckssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCLE9BQXJCLEVBQThCLGNBQTlCLENBQVo7QUFDRDs7QUFFRCxVQUFJaEIsT0FBT2lNLFVBQVU3SyxTQUFWLENBQW9CLGtCQUFwQixFQUF3QzBDLElBQXhDLENBQTZDNEcsV0FBN0MsQ0FBWDs7QUFFQTFLLFdBQUs4TCxJQUFMLEdBQVluSyxNQUFaOztBQUVBM0IsYUFBT0EsS0FBSytELEtBQUwsR0FBYXRELE1BQWIsQ0FBb0IsTUFBcEIsRUFDSk8sSUFESSxDQUNDLEdBREQsRUFDTW5CLEdBQUdxTSxNQUFILEdBQVlqSyxJQUFaLENBQWlCO0FBQUEsZUFBS2dJLE1BQU1rQyxTQUFOLENBQWdCL0gsRUFBRW5DLElBQWxCLENBQUw7QUFBQSxPQUFqQixFQUErQ21KLElBQS9DLENBQW9EO0FBQUEsZUFBS2hILEVBQUVnSCxJQUFGLEdBQVMsR0FBZDtBQUFBLE9BQXBELENBRE4sRUFFSnBLLElBRkksQ0FFQyxXQUZELEVBRWMsZ0JBRmQsRUFHSkEsSUFISSxDQUdDLE9BSEQsRUFHVTtBQUFBLGVBQUssaUJBQWlCb0QsRUFBRWdJLFNBQUYsR0FBYyxtQkFBZCxHQUFvQyxFQUFyRCxLQUE0RHZMLE9BQU9DLE1BQVAsQ0FBY3NELEVBQUVFLEtBQWhCLEVBQXVCdkQsTUFBdkIsR0FBZ0MsaUJBQWhDLEdBQW9ELEVBQWhILENBQUw7QUFBQSxPQUhWLEVBSUpDLElBSkksQ0FJQyxJQUpELEVBSU87QUFBQSxlQUFLb0QsRUFBRXNCLEVBQVA7QUFBQSxPQUpQLEVBS0pzRyxLQUxJLENBS0VoTSxJQUxGLENBQVA7O0FBT0FBLFdBQUs4RyxJQUFMLENBQVVqSCxHQUFHd00sSUFBSCxHQUNMbEksRUFESyxDQUNGLE9BREUsRUFDT21JLFdBRFAsRUFFTG5JLEVBRkssQ0FFRixNQUZFLEVBRU1vSSxPQUZOLEVBR0xwSSxFQUhLLENBR0YsS0FIRSxFQUdLcUksU0FITCxDQUFWLEVBSUdySSxFQUpILENBSU0sYUFKTixFQUlxQixVQUFTQyxDQUFULEVBQVk7QUFDN0I7QUFDQXFHLG9CQUFZakwsTUFBWixDQUFtQjRFLENBQW5CO0FBQ0E7QUFDQXFJLHdCQUFnQjNGLElBQWhCLENBQXFCLElBQXJCLEVBQTJCMUMsQ0FBM0IsRUFBOEIsYUFBOUI7QUFDRCxPQVRILEVBVUdELEVBVkgsQ0FVTSxPQVZOLEVBVWUsVUFBU0MsQ0FBVCxFQUFZO0FBQ3ZCO0FBQ0FzSSx1QkFBZTVGLElBQWYsQ0FBb0IsSUFBcEI7QUFDQTtBQUNBMkYsd0JBQWdCM0YsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIxQyxDQUEzQixFQUE4QixPQUE5QjtBQUNELE9BZkgsRUFnQkdELEVBaEJILENBZ0JNLFVBaEJOLEVBZ0JrQixVQUFTQyxDQUFULEVBQVk7QUFDMUI7QUFDQXFJLHdCQUFnQjNGLElBQWhCLENBQXFCLElBQXJCLEVBQTJCMUMsQ0FBM0IsRUFBOEIsVUFBOUI7QUFDRCxPQW5CSCxFQW9CR0QsRUFwQkgsQ0FvQk0sV0FwQk4sRUFvQm1CLGFBQUs7QUFDcEI7QUFDQTVELGdCQUFRZixNQUFSLENBQWU0RSxFQUFFbEIsSUFBakI7QUFDRCxPQXZCSCxFQXdCR2lCLEVBeEJILENBd0JNLFVBeEJOLEVBd0JrQixZQUFNO0FBQ3BCO0FBQ0E1RCxnQkFBUWIsUUFBUjtBQUNELE9BM0JIOztBQTZCQSxVQUFJaU4sYUFBYTdCLElBQUkxSixTQUFKLENBQWMsZ0JBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDdUwsV0FBVzNNLElBQVgsRUFBTCxFQUF3QjtBQUN0QjJNLHFCQUFhN0IsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUQsVUFBSTRMLFFBQVFELFdBQVd2TCxTQUFYLENBQXFCLE1BQXJCLEVBQTZCMEMsSUFBN0IsQ0FBa0M0RyxXQUFsQyxDQUFaOztBQUVBa0MsWUFBTWQsSUFBTixHQUFhbkssTUFBYjs7QUFFQWlMLGNBQVFBLE1BQU03SSxLQUFOLEdBQWN0RCxNQUFkLENBQXFCLE1BQXJCLEVBQ0xPLElBREssQ0FDQSxPQURBLEVBQ1MsY0FEVCxFQUVMVSxJQUZLLENBRUE7QUFBQSxlQUFLMEMsRUFBRUosS0FBUDtBQUFBLE9BRkEsRUFHTGdJLEtBSEssQ0FHQ1ksS0FIRCxDQUFSOztBQUtBQSxZQUNHekksRUFESCxDQUNNLGFBRE4sRUFDcUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzdCO0FBQ0FxRyxvQkFBWWpMLE1BQVosQ0FBbUI0RSxDQUFuQjtBQUNBO0FBQ0FxSSx3QkFBZ0IzRixJQUFoQixDQUFxQixJQUFyQixFQUEyQjFDLENBQTNCLEVBQThCLGFBQTlCO0FBQ0QsT0FOSCxFQU9HRCxFQVBILENBT00sT0FQTixFQU9lLFVBQVNDLENBQVQsRUFBWTtBQUN2QjtBQUNBc0ksdUJBQWU1RixJQUFmLENBQW9CLElBQXBCO0FBQ0E7QUFDQTJGLHdCQUFnQjNGLElBQWhCLENBQXFCLElBQXJCLEVBQTJCMUMsQ0FBM0IsRUFBOEIsT0FBOUI7QUFDRCxPQVpILEVBYUdELEVBYkgsQ0FhTSxVQWJOLEVBYWtCLFVBQVNDLENBQVQsRUFBWTtBQUMxQjtBQUNBcUksd0JBQWdCM0YsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIxQyxDQUEzQixFQUE4QixVQUE5QjtBQUNELE9BaEJILEVBaUJHRCxFQWpCSCxDQWlCTSxXQWpCTixFQWlCbUIsYUFBSztBQUNwQjtBQUNBNUQsZ0JBQVFmLE1BQVIsQ0FBZTRFLEVBQUVsQixJQUFqQjtBQUNELE9BcEJILEVBcUJHaUIsRUFyQkgsQ0FxQk0sVUFyQk4sRUFxQmtCLFlBQU07QUFDcEI7QUFDQTVELGdCQUFRYixRQUFSO0FBQ0QsT0F4Qkg7O0FBMEJBLFVBQUltTixjQUFjcEcsT0FBT3JGLFNBQVAsQ0FBaUIsZ0JBQWpCLENBQWxCOztBQUVBLFVBQUksQ0FBQ3lMLFlBQVk3TSxJQUFaLEVBQUwsRUFBeUI7QUFDdkI2TSxzQkFBY3BHLE9BQU9oRyxNQUFQLENBQWMsR0FBZCxFQUFtQk8sSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsZUFBakMsQ0FBZDtBQUNEOztBQUVEO0FBQ0E2TCxrQkFBWXpMLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkJPLE1BQTNCOztBQUVBLFVBQUltTCxTQUFTRCxZQUFZekwsU0FBWixDQUFzQixHQUF0QixFQUNWMEMsSUFEVSxDQUNMakUsR0FBRzBCLEdBQUgsQ0FBT21KLFdBQVAsRUFBb0I7QUFBQSxlQUFLdEcsRUFBRStHLEtBQVA7QUFBQSxPQUFwQixFQUFrQ3JLLE1BQWxDLEdBQTJDaU0sSUFBM0MsQ0FBZ0QsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRTdCLEtBQUYsR0FBVThCLEVBQUU5QixLQUF0QjtBQUFBLE9BQWhELENBREssRUFDeUU7QUFBQSxlQUFLL0csRUFBRXNCLEVBQVA7QUFBQSxPQUR6RSxDQUFiOztBQUdBb0gsYUFBT2hCLElBQVAsR0FBY25LLE1BQWQ7O0FBRUFtTCxlQUFTQSxPQUFPL0ksS0FBUCxHQUNOdEQsTUFETSxDQUNDLEdBREQsRUFFTk8sSUFGTSxDQUVELElBRkMsRUFFSztBQUFBLCtCQUFtQm9ELENBQW5CO0FBQUEsT0FGTCxFQUdOcEQsSUFITSxDQUdELFdBSEMsRUFHWSxVQUFDb0QsQ0FBRCxFQUFJN0IsQ0FBSjtBQUFBLDhCQUF1QixFQUF2QixTQUE2QixDQUFDQSxJQUFJLENBQUwsSUFBVSxFQUF2QztBQUFBLE9BSFosRUFJTnlKLEtBSk0sQ0FJQWMsTUFKQSxDQUFUOztBQU1BQSxhQUFPck0sTUFBUCxDQUFjLE1BQWQsRUFDR08sSUFESCxDQUNRLE9BRFIsRUFDaUIsRUFEakIsRUFFR0EsSUFGSCxDQUVRLFFBRlIsRUFFa0IsQ0FGbEIsRUFHR0wsS0FISCxDQUdTLE1BSFQsRUFHaUI7QUFBQSxlQUFLc0osTUFBTWlELE1BQU4sQ0FBYTlJLEVBQUUrRyxLQUFGLEdBQVUsQ0FBdkIsQ0FBTDtBQUFBLE9BSGpCLEVBSUd4SyxLQUpILENBSVMsUUFKVCxFQUltQjtBQUFBLGVBQUtzSixNQUFNaUQsTUFBTixDQUFhOUksRUFBRStHLEtBQUYsR0FBVSxDQUF2QixDQUFMO0FBQUEsT0FKbkI7O0FBTUEyQixhQUFPck0sTUFBUCxDQUFjLE1BQWQsRUFDR08sSUFESCxDQUNRLE9BRFIsRUFDaUIsa0JBRGpCLEVBRUdBLElBRkgsQ0FFUSxHQUZSLEVBRWEsS0FBSyxDQUZsQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLEtBQUssQ0FIbEIsRUFJR1UsSUFKSCxDQUlRO0FBQUEsMEJBQWMwQyxFQUFFK0csS0FBaEI7QUFBQSxPQUpSOztBQU1BRSxpQkFBV1YsS0FBWCxDQUFpQkQsV0FBakIsRUFBOEJ2RyxFQUE5QixDQUFpQyxNQUFqQyxFQUF5Q2dKLE1BQXpDO0FBQ0E5QixpQkFBV0UsS0FBWCxDQUFpQixNQUFqQixFQUF5QlYsS0FBekIsQ0FBK0JELFdBQS9COztBQUVBO0FBQ0FTLGlCQUFXK0IsS0FBWCxDQUFpQixDQUFqQixFQUFvQkMsT0FBcEI7O0FBRUEsZUFBU0YsTUFBVCxHQUFrQjtBQUNoQnRCLGFBQ0c3SyxJQURILENBQ1EsSUFEUixFQUNjO0FBQUEsaUJBQUtvRCxFQUFFMkgsTUFBRixDQUFTdkosQ0FBZDtBQUFBLFNBRGQsRUFFR3hCLElBRkgsQ0FFUSxJQUZSLEVBRWM7QUFBQSxpQkFBS29ELEVBQUUySCxNQUFGLENBQVN2RSxDQUFkO0FBQUEsU0FGZCxFQUdHeEcsSUFISCxDQUdRLElBSFIsRUFHYztBQUFBLGlCQUFLb0QsRUFBRTlFLE1BQUYsQ0FBU2tELENBQWQ7QUFBQSxTQUhkLEVBSUd4QixJQUpILENBSVEsSUFKUixFQUljO0FBQUEsaUJBQUtvRCxFQUFFOUUsTUFBRixDQUFTa0ksQ0FBZDtBQUFBLFNBSmQ7O0FBTUF4SCxhQUNHVyxLQURILENBQ1MsTUFEVCxFQUNpQjtBQUFBLGlCQUFLc0osTUFBTWlELE1BQU4sQ0FBYTlJLEVBQUUrRyxLQUFGLEdBQVUsQ0FBdkIsQ0FBTDtBQUFBLFNBRGpCLEVBRUduSyxJQUZILENBRVEsV0FGUixFQUVxQjtBQUFBLGdDQUFrQm9ELEVBQUU1QixDQUFwQixTQUF5QjRCLEVBQUVvRCxDQUEzQjtBQUFBLFNBRnJCOztBQUlBb0YsY0FDRzVMLElBREgsQ0FDUSxHQURSLEVBQ2E7QUFBQSxpQkFBS29ELEVBQUU1QixDQUFGLEdBQU00QixFQUFFSixLQUFGLENBQVFqRCxNQUFkLEdBQXVCMkcsS0FBSzRGLElBQUwsQ0FBVWxKLEVBQUVnSCxJQUFGLEdBQVNoSCxFQUFFSixLQUFGLENBQVFqRCxNQUFqQixHQUEwQixDQUFwQyxDQUE1QjtBQUFBLFNBRGIsRUFFR0MsSUFGSCxDQUVRLEdBRlIsRUFFYTtBQUFBLGlCQUFLb0QsRUFBRW9ELENBQUYsR0FBTUUsS0FBSzRGLElBQUwsQ0FBVWxKLEVBQUVnSCxJQUFGLEdBQVMsQ0FBbkIsQ0FBWDtBQUFBLFNBRmI7O0FBSUFwTCxhQUFLdU4sSUFBTCxDQUFVQyxRQUFRLEdBQVIsQ0FBVjtBQUNEOztBQUVEO0FBQ0EsVUFBSUMsVUFBVSxDQUFkLENBOU5XLENBOE5NOztBQUVqQixlQUFTRCxPQUFULENBQWlCSixLQUFqQixFQUF3QjtBQUN0QixZQUFJTSxXQUFXN04sR0FBRzhOLFFBQUgsQ0FBWWpELFdBQVosQ0FBZjtBQUNBLGVBQU8sVUFBU3RHLENBQVQsRUFBWTtBQUNqQixjQUFJd0osS0FBSyxJQUFJeEosRUFBRWdILElBQU4sR0FBYXFDLE9BQXRCO0FBQUEsY0FDRUksTUFBTXpKLEVBQUU1QixDQUFGLEdBQU1vTCxFQURkO0FBQUEsY0FFRUUsTUFBTTFKLEVBQUU1QixDQUFGLEdBQU1vTCxFQUZkO0FBQUEsY0FHRUcsTUFBTTNKLEVBQUVvRCxDQUFGLEdBQU1vRyxFQUhkO0FBQUEsY0FJRUksTUFBTTVKLEVBQUVvRCxDQUFGLEdBQU1vRyxFQUpkO0FBS0FGLG1CQUFTTyxLQUFULENBQWUsVUFBU0MsSUFBVCxFQUFlQyxFQUFmLEVBQW1CQyxFQUFuQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCO0FBQzVDLGdCQUFJSixLQUFLSyxLQUFMLElBQWVMLEtBQUtLLEtBQUwsS0FBZW5LLENBQWxDLEVBQXNDO0FBQ3BDLGtCQUFJNUIsSUFBSTRCLEVBQUU1QixDQUFGLEdBQU0wTCxLQUFLSyxLQUFMLENBQVcvTCxDQUF6QjtBQUFBLGtCQUNFZ0YsSUFBSXBELEVBQUVvRCxDQUFGLEdBQU0wRyxLQUFLSyxLQUFMLENBQVcvRyxDQUR2QjtBQUFBLGtCQUVFZ0gsSUFBSTlHLEtBQUs0RixJQUFMLENBQVU5SyxJQUFJQSxDQUFKLEdBQVFnRixJQUFJQSxDQUF0QixDQUZOO0FBR0Esa0JBQUlnSCxJQUFJWixFQUFSLEVBQVk7QUFDVlksb0JBQUksQ0FBQ0EsSUFBSVosRUFBTCxJQUFXWSxDQUFYLEdBQWVwQixLQUFuQjtBQUNBaEosa0JBQUU1QixDQUFGLElBQU9BLEtBQUtnTSxDQUFaO0FBQ0FwSyxrQkFBRW9ELENBQUYsSUFBT0EsS0FBS2dILENBQVo7QUFDQU4scUJBQUtLLEtBQUwsQ0FBVy9MLENBQVgsSUFBZ0JBLENBQWhCO0FBQ0EwTCxxQkFBS0ssS0FBTCxDQUFXL0csQ0FBWCxJQUFnQkEsQ0FBaEI7QUFDRDtBQUNGO0FBQ0QsbUJBQU8yRyxLQUFLTCxHQUFMLElBQVlPLEtBQUtSLEdBQWpCLElBQXdCTyxLQUFLSixHQUE3QixJQUFvQ00sS0FBS1AsR0FBaEQ7QUFDRCxXQWREO0FBZUQsU0FyQkQ7QUFzQkQ7O0FBRUQ7QUFDQTtBQUNBLFVBQUlVLFNBQVMsQ0FBYjtBQUNBO0FBQ0EsVUFBSUMsZ0JBQWdCLEVBQXBCOztBQUVBLFdBQUssSUFBSW5NLElBQUksQ0FBYixFQUFnQkEsSUFBSW1JLFlBQVkzSixNQUFoQyxFQUF3Q3dCLEdBQXhDLEVBQTZDO0FBQzNDbU0sc0JBQWlCbk0sQ0FBakIsU0FBc0JBLENBQXRCLElBQTZCLENBQTdCO0FBQ0Q7O0FBRURxSSxrQkFBWTlFLE9BQVosQ0FBb0IsVUFBUzFCLENBQVQsRUFBWTtBQUM5QnNLLHNCQUFpQnRLLEVBQUUySCxNQUFGLENBQVM0QyxLQUExQixTQUFtQ3ZLLEVBQUU5RSxNQUFGLENBQVNxUCxLQUE1QyxJQUF1RCxDQUF2RDtBQUNELE9BRkQ7O0FBSUEsZUFBU2pDLGNBQVQsR0FBMEI7QUFDeEI7QUFDQSxpQkFBU2tDLFdBQVQsQ0FBcUI1QixDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekIsaUJBQU95QixjQUFpQjFCLEVBQUUyQixLQUFuQixTQUE0QjFCLEVBQUUwQixLQUE5QixDQUFQO0FBQ0Q7QUFDRDlPLFdBQUdvQixLQUFILENBQVMySSxjQUFUO0FBQ0EsWUFBSTZFLFdBQVcsQ0FBZixFQUFrQjtBQUNoQjtBQUNBLGNBQUlySyxJQUFJdkUsR0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JFLElBQWhCLEdBQXVCNk8sUUFBL0I7QUFDQTdPLGVBQUtXLEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUtpTyxZQUFZeEssQ0FBWixFQUFlMEssQ0FBZixLQUFxQkYsWUFBWUUsQ0FBWixFQUFlMUssQ0FBZixDQUFyQixHQUF5QyxDQUF6QyxHQUE2QyxHQUFsRDtBQUFBLFdBQXRCO0FBQ0F5SCxlQUFLbEwsS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFBQSxtQkFBS3lELEVBQUV1SyxLQUFGLEtBQVlHLEVBQUUvQyxNQUFGLENBQVM0QyxLQUFyQixJQUE4QnZLLEVBQUV1SyxLQUFGLEtBQVlHLEVBQUV4UCxNQUFGLENBQVNxUCxLQUFuRCxHQUEyRCxDQUEzRCxHQUErRCxHQUFwRTtBQUFBLFdBQXRCO0FBQ0E7QUFDQUYsbUJBQVMsQ0FBVDtBQUNELFNBUEQsTUFRSztBQUNIO0FBQ0F6TyxlQUFLVyxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBa0wsZUFBS2xMLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLENBQXRCO0FBQ0E4TixtQkFBUyxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTbkMsV0FBVCxDQUFxQmxJLENBQXJCLEVBQXdCO0FBQ3RCLFlBQUksQ0FBQ3ZFLEdBQUdvQixLQUFILENBQVM4TixNQUFkLEVBQXNCO0FBQ3BCMUQscUJBQVcyRCxXQUFYLENBQXVCLElBQXZCLEVBQTZCM0IsT0FBN0I7QUFDRDtBQUNEakosVUFBRTZLLEVBQUYsR0FBTzdLLEVBQUU1QixDQUFUO0FBQ0E0QixVQUFFOEssRUFBRixHQUFPOUssRUFBRW9ELENBQVQ7QUFDRDs7QUFFRCxlQUFTK0UsT0FBVCxDQUFpQm5JLENBQWpCLEVBQW9CO0FBQ2xCQSxVQUFFNkssRUFBRixHQUFPcFAsR0FBR29CLEtBQUgsQ0FBU3VCLENBQWhCO0FBQ0E0QixVQUFFOEssRUFBRixHQUFPclAsR0FBR29CLEtBQUgsQ0FBU3VHLENBQWhCO0FBQ0Q7O0FBRUQsZUFBU2dGLFNBQVQsQ0FBbUJwSSxDQUFuQixFQUFzQjtBQUNwQixZQUFJLENBQUN2RSxHQUFHb0IsS0FBSCxDQUFTOE4sTUFBZCxFQUFzQjtBQUNwQjFELHFCQUFXMkQsV0FBWCxDQUF1QixDQUF2QjtBQUNEO0FBQ0Q1SyxVQUFFNkssRUFBRixHQUFPLElBQVA7QUFDQTdLLFVBQUU4SyxFQUFGLEdBQU8sSUFBUDtBQUNEOztBQUVELGVBQVN6QyxlQUFULENBQXlCM0ksSUFBekIsRUFBK0I3QyxLQUEvQixFQUFzQztBQUNwQyxZQUFJNkMsS0FBS3FMLFNBQVQsRUFBb0I7QUFDbEJ0TyxpQkFBT0MsTUFBUCxDQUFjZ0QsS0FBS3FMLFNBQW5CLEVBQThCckosT0FBOUIsQ0FBc0MsVUFBQ3NKLEVBQUQsRUFBUTtBQUM1QztBQUNBQSxlQUFHQyxPQUFILEtBQWVwTyxLQUFmLElBQXdCaUQsU0FBU0csT0FBVCxDQUFpQixFQUFFSCxVQUFVa0wsRUFBWixFQUFqQixDQUF4QjtBQUNELFdBSEQ7QUFJRDtBQUNGOztBQUVELGFBQU90RSxHQUFQO0FBRUQ7OzsrQkFFVSxDQUFFOzs7Ozs7a0JBdFdNYixLOzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQnFGLFc7OztBQUVuQiw2QkFBNEQ7QUFBQSw0QkFBOUNwUSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwwSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUtxTCxXQUFMLEdBQW1CLE1BQUtqSyxTQUFMLENBQWVWLE1BQWYsQ0FBc0IsbUNBQXRCLENBQW5CO0FBQ0E7QUFDQSxRQUFJLENBQUMsTUFBSzJLLFdBQUwsQ0FBaUJ6SyxJQUFqQixFQUFMLEVBQThCO0FBQzVCLFlBQUt5SyxXQUFMLEdBQW1CLE1BQUtqSyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsZUFBdEIsRUFDaEJDLE9BRGdCLENBQ1IscUJBRFEsRUFDZSxJQURmLEVBQ3FCQyxLQURyQixDQUMyQixTQUQzQixFQUNzQyxNQUR0QyxDQUFuQjtBQUVEO0FBUHlEO0FBUTNEOzs7OzJCQUVNQyxNLEVBQVE7QUFBQTs7QUFFYjtBQUNBLFVBQUksQ0FBQ0EsT0FBTzBELEtBQVIsSUFBaUIsQ0FBQ3pELE9BQU9DLE1BQVAsQ0FBY0YsT0FBTzBELEtBQXJCLEVBQTRCdkQsTUFBbEQsRUFBMEQ7QUFDeEQsYUFBS3BCLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixnREFBbEI7QUFDQTtBQUNEOztBQUVELFdBQUs2SyxXQUFMLENBQWlCekosSUFBakIsQ0FBc0IsV0FBdEIsa0JBQWdEbkIsR0FBR29CLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixDQUFuRSxXQUF3RXJCLEdBQUdvQixLQUFILENBQVNFLE9BQVQsR0FBbUIsQ0FBM0Y7O0FBRUE7QUFDQSxXQUFLc0osV0FBTCxDQUFpQjlKLEtBQWpCLENBQXVCLFNBQXZCLEVBQWtDLE9BQWxDOztBQUVBO0FBQ0EsVUFBSSxLQUFLOEosV0FBTCxDQUFpQnJKLFNBQWpCLENBQTJCLEdBQTNCLEVBQWdDcEIsSUFBaEMsRUFBSixFQUE0QztBQUMxQztBQUNEOztBQUVEO0FBQ0FILFNBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCcUUsRUFBbEIsQ0FBcUIsMkJBQXJCLEVBQWtEO0FBQUEsZUFBTSxPQUFLekUsUUFBTCxFQUFOO0FBQUEsT0FBbEQ7O0FBRUE7QUFDQSxVQUFJNEYsT0FBTyxLQUFLbUYsV0FBTCxDQUFpQmhLLE1BQWpCLENBQXdCLFdBQXhCLEVBQXFDQSxNQUFyQyxDQUE0QyxLQUE1QyxFQUFtRE8sSUFBbkQsQ0FBd0QsT0FBeEQsRUFBaUUscUJBQWpFLEVBQXdGUCxNQUF4RixDQUErRixJQUEvRixDQUFYO0FBQ0EsVUFBSStDLGdCQUFnQixLQUFLaUIsUUFBTCxDQUFjNUQsT0FBT0MsTUFBUCxDQUFjRixPQUFPMEQsS0FBckIsQ0FBZCxDQUFwQjtBQUNBLFdBQUtJLFFBQUwsQ0FBY1ksSUFBZCxFQUFvQjlCLGFBQXBCOztBQUVBM0QsU0FBR29CLEtBQUgsQ0FBUzJJLGNBQVQ7O0FBRUEsYUFBTyxLQUFLYSxXQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtBLFdBQUwsQ0FBaUJySixTQUFqQixDQUEyQixHQUEzQixFQUFnQ08sTUFBaEM7QUFDQSxXQUFLOEksV0FBTCxDQUFpQjlKLEtBQWpCLENBQXVCLFNBQXZCLEVBQWtDLE1BQWxDO0FBQ0Q7Ozs7OztrQkE5Q2tCMk8sVzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQyxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDclEsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsK0dBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNeUMsSSxFQUFNOztBQUVYO0FBQ0EsVUFBSSxDQUFDQSxLQUFLQyxNQUFMLENBQVlDLEtBQWpCLEVBQXdCO0FBQ3RCLGFBQUtwQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsNkNBQWxCO0FBQ0E7QUFDRDs7QUFFRCxVQUFJVyxVQUFVLHNCQUFZLEtBQUtSLE9BQWpCLENBQWQ7O0FBRUEsVUFBSTBHLFNBQVMsS0FBSzFHLE9BQUwsQ0FBYVosUUFBMUI7O0FBRUEsVUFBSXFRLE9BQU8zTixLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0J5TixJQUE3QjtBQUFBLFVBQ0VDLFdBQVc1TixLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IrQixJQUQvQjtBQUFBLFVBRUU0TCxlQUFlN08sT0FBT1MsSUFBUCxDQUFZbU8sUUFBWixDQUZqQjs7QUFJQSxVQUFJM0UsTUFBTXJFLE9BQU8zRyxNQUFQLENBQWMsa0JBQWQsQ0FBVjtBQUFBLFVBQ0U2UCxTQUFTLEVBQUVDLEtBQUssRUFBUCxFQUFXQyxPQUFPLEVBQWxCLEVBQXNCQyxRQUFRLEVBQTlCLEVBQWtDQyxNQUFNLEVBQXhDLEVBRFg7QUFBQSxVQUVFckosUUFBUSxDQUFDRCxPQUFPekYsSUFBUCxDQUFZLE9BQVosQ0FBRCxJQUF5Qm5CLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxJQUFsQixHQUF5QitLLHFCQUF6QixHQUFpRHJFLEtBRnBGO0FBQUEsVUFHRUMsU0FBUyxDQUFDRixPQUFPekYsSUFBUCxDQUFZLFFBQVosQ0FBRCxJQUEwQm5CLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxJQUFsQixHQUF5QitLLHFCQUF6QixHQUFpRHBFLE1BSHRGOztBQUtBO0FBQ0FELGNBQVFBLFFBQVFpSixPQUFPSSxJQUFmLEdBQXNCSixPQUFPRSxLQUFyQztBQUNBbEosZUFBU0EsU0FBU2dKLE9BQU9DLEdBQWhCLEdBQXNCRCxPQUFPRyxNQUF0Qzs7QUFFQTtBQUNBLFVBQUl0TixJQUFJM0MsR0FBR21RLFNBQUgsR0FBZUMsS0FBZixDQUFxQixDQUFDLENBQUQsRUFBSXZKLEtBQUosQ0FBckIsRUFBaUMrRyxPQUFqQyxDQUF5QyxHQUF6QyxFQUE4Qy9LLE1BQTlDLENBQXFEOE0sS0FBS2hOLENBQUwsQ0FBT0UsTUFBNUQsQ0FBUjtBQUNBLFVBQUk4RSxJQUFJM0gsR0FBR3FRLFdBQUgsR0FBaUJELEtBQWpCLENBQXVCLENBQUN0SixNQUFELEVBQVMsQ0FBVCxDQUF2QixFQUFvQ2pFLE1BQXBDLENBQTJDOE0sS0FBS2hJLENBQUwsQ0FBTzlFLE1BQWxELENBQVI7O0FBRUEsVUFBSXlOLE1BQU0sRUFBVjtBQUNBVCxtQkFBYTVKLE9BQWIsQ0FBcUI7QUFBQSxlQUFPcUssTUFBTUEsSUFBSUMsTUFBSixDQUFXWCxTQUFTak8sR0FBVCxDQUFYLENBQWI7QUFBQSxPQUFyQjs7QUFFQSxVQUFJLENBQUNnTyxLQUFLaEksQ0FBTCxDQUFPOUUsTUFBUCxDQUFjM0IsTUFBbkIsRUFBMkI7QUFDekJ5RyxVQUFFOUUsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFJN0MsR0FBR3NDLEdBQUgsQ0FBT2dPLEdBQVAsRUFBWTtBQUFBLGlCQUFLL0wsQ0FBTDtBQUFBLFNBQVosQ0FBSixDQUFUO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDb0wsS0FBS2hOLENBQUwsQ0FBT0UsTUFBUCxDQUFjM0IsTUFBbkIsRUFBMkI7QUFDekJ5TyxhQUFLaE4sQ0FBTCxDQUFPRSxNQUFQLEdBQWdCLGdCQUFNMk4sV0FBTixDQUFrQkYsSUFBSXBQLE1BQUosR0FBYTJPLGFBQWEzTyxNQUE1QyxDQUFoQjtBQUNBeUIsVUFBRUUsTUFBRixDQUFTOE0sS0FBS2hOLENBQUwsQ0FBT0UsTUFBaEI7QUFDRDs7QUFFRCxVQUFJNE4sWUFBWXhGLElBQUkxSixTQUFKLENBQWMsZUFBZCxDQUFoQjs7QUFFQSxVQUFJLENBQUNrUCxVQUFVdFEsSUFBVixFQUFMLEVBQXVCO0FBQ3JCc1Esb0JBQVl4RixJQUFJckssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCLE9BQXJCLEVBQThCLGFBQTlCLENBQVo7QUFDRDs7QUFFRDBPLG1CQUFhNUosT0FBYixDQUFxQixVQUFTdEUsR0FBVCxFQUFjbU4sS0FBZCxFQUFxQjtBQUN4QyxZQUFJNEIsTUFBTUQsVUFBVWxQLFNBQVYsaUJBQWtDdU4sS0FBbEMsRUFBMkM3SyxJQUEzQyxDQUFnRDJMLFNBQVNqTyxHQUFULENBQWhELENBQVY7O0FBRUErTyxZQUFJekUsSUFBSixHQUFXbkssTUFBWDs7QUFFQTtBQUNBNE8sWUFBSXhNLEtBQUosR0FDR3RELE1BREgsQ0FDVSxNQURWLEVBRUdFLEtBRkgsQ0FFUyxNQUZULEVBRWlCO0FBQUEsaUJBQU0sZ0JBQU11TSxNQUFOLENBQWF5QixRQUFRLENBQXJCLENBQU47QUFBQSxTQUZqQixFQUdHM04sSUFISCxDQUdRLE9BSFIsaUJBRzhCMk4sS0FIOUIsRUFJRzNOLElBSkgsQ0FJUSxHQUpSLEVBSWEsVUFBU29ELENBQVQsRUFBWTdCLENBQVosRUFBZTtBQUFFLGlCQUFPQyxFQUFFZ04sS0FBS2hOLENBQUwsQ0FBT0UsTUFBUCxDQUFjSCxDQUFkLENBQUYsSUFBc0JvTSxTQUFTbk0sRUFBRWdPLFNBQUYsS0FBZ0JkLGFBQWEzTyxNQUF0QyxDQUE3QjtBQUE2RSxTQUozRyxFQUtHQyxJQUxILENBS1EsT0FMUixFQUtrQndCLEVBQUVnTyxTQUFGLEtBQWdCZCxhQUFhM08sTUFBOUIsR0FBd0MsQ0FMekQsRUFNR0MsSUFOSCxDQU1RLEdBTlIsRUFNYSxVQUFTb0QsQ0FBVCxFQUFZO0FBQUUsaUJBQU9vRCxFQUFFcEQsQ0FBRixDQUFQO0FBQWMsU0FOekMsRUFPR3BELElBUEgsQ0FPUSxRQVBSLEVBT2tCLFVBQVNvRCxDQUFULEVBQVk7QUFBRSxpQkFBT3VDLFNBQVNhLEVBQUVwRCxDQUFGLENBQWhCO0FBQXVCLFNBUHZELEVBUUdELEVBUkgsQ0FRTSxXQVJOLEVBUW1CLFVBQVNDLENBQVQsRUFBWTtBQUMzQnZFLGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCK0gsVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFDaUJuSCxLQURqQixDQUN1QixjQUR2QixFQUN1QyxHQUR2QztBQUVBSixrQkFBUWYsTUFBUixDQUFlLEVBQUUsV0FBV2dDLEdBQWIsRUFBa0IsU0FBUzRDLENBQTNCLEVBQWY7QUFDRCxTQVpILEVBYUdELEVBYkgsQ0FhTSxVQWJOLEVBYWtCLFlBQVc7QUFDekJ0RSxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQitILFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBQ2lCbkgsS0FEakIsQ0FDdUIsY0FEdkIsRUFDdUMsQ0FEdkM7QUFFQUosa0JBQVFiLFFBQVI7QUFDRCxTQWpCSDs7QUFtQkE2USxZQUFJdkUsS0FBSixDQUFVdUUsR0FBVjtBQUNELE9BMUJEOztBQTRCQTtBQUNBLFVBQUlFLGFBQWEzRixJQUFJMUosU0FBSixDQUFjLGlCQUFkLENBQWpCOztBQUVBLFVBQUksQ0FBQ3FQLFdBQVd6USxJQUFYLEVBQUwsRUFBd0I7QUFDdEJ5USxxQkFBYTNGLElBQUlySyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsZUFBOUIsQ0FBYjtBQUNEOztBQUVEeVAsaUJBQVdyUCxTQUFYLENBQXFCLEdBQXJCLEVBQTBCTyxNQUExQjs7QUFFQTtBQUNBOE8saUJBQ0d6UCxJQURILENBQ1EsV0FEUixtQkFDb0MyRixNQURwQyxRQUVHRyxJQUZILENBRVFqSCxHQUFHNlEsVUFBSCxDQUFjbE8sQ0FBZCxDQUZSLEVBR0cvQixNQUhILENBR1UsTUFIVixFQUlHTyxJQUpILENBSVEsSUFKUixFQUljLEVBSmQsRUFLR0EsSUFMSCxDQUtRLElBTFIsRUFLYzBGLFFBQVEsQ0FMdEIsRUFNRzFGLElBTkgsQ0FNUSxNQU5SLEVBTWdCLE9BTmhCLEVBT0dBLElBUEgsQ0FPUSxPQVBSLEVBT2lCLGFBUGpCLEVBUUdMLEtBUkgsQ0FRUyxhQVJULEVBUXdCLEtBUnhCLEVBU0dlLElBVEgsQ0FTUThOLEtBQUtoTixDQUFMLENBQU93QixLQVRmOztBQVdBO0FBQ0EsVUFBSTJNLGFBQWE3RixJQUFJMUosU0FBSixDQUFjLGlCQUFkLENBQWpCOztBQUVBLFVBQUksQ0FBQ3VQLFdBQVczUSxJQUFYLEVBQUwsRUFBd0I7QUFDdEIyUSxxQkFBYTdGLElBQUlySyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsZUFBOUIsQ0FBYjtBQUNEOztBQUVEMlAsaUJBQVd2UCxTQUFYLENBQXFCLEdBQXJCLEVBQTBCTyxNQUExQjs7QUFFQTtBQUNBZ1AsaUJBQ0c3SixJQURILENBQ1FqSCxHQUFHK1EsUUFBSCxDQUFZcEosQ0FBWixDQURSLEVBRUcvRyxNQUZILENBRVUsTUFGVixFQUdHTyxJQUhILENBR1EsSUFIUixFQUdjLENBQUMsRUFIZixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljMkYsU0FBUyxDQUp2QixFQUtHM0YsSUFMSCxDQUtRLE1BTFIsRUFLZ0IsT0FMaEIsRUFNR0EsSUFOSCxDQU1RLE9BTlIsRUFNaUIsYUFOakIsRUFPR0wsS0FQSCxDQU9TLGFBUFQsRUFPd0IsS0FQeEIsRUFRR2UsSUFSSCxDQVFROE4sS0FBS2hJLENBQUwsQ0FBT3hELEtBUmY7O0FBVUEsVUFBSTZJLGNBQWMvQixJQUFJMUosU0FBSixDQUFjLGdCQUFkLENBQWxCOztBQUVBLFVBQUksQ0FBQ3lMLFlBQVk3TSxJQUFaLEVBQUwsRUFBeUI7QUFDdkI2TSxzQkFBYy9CLElBQUlySyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsZUFBOUIsQ0FBZDtBQUNEOztBQUVEO0FBQ0E2TCxrQkFBWXpMLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkJPLE1BQTNCOztBQUVBLFVBQUltTCxTQUFTRCxZQUFZekwsU0FBWixDQUFzQixHQUF0QixFQUEyQjBDLElBQTNCLENBQWdDNEwsYUFBYW1CLEtBQWIsRUFBaEMsQ0FBYjs7QUFFQS9ELGFBQU9oQixJQUFQLEdBQWNuSyxNQUFkOztBQUVBbUwsZUFBU0EsT0FBTy9JLEtBQVAsR0FDTnRELE1BRE0sQ0FDQyxHQURELEVBRU5PLElBRk0sQ0FFRCxXQUZDLEVBRVksVUFBQ29ELENBQUQsRUFBSTdCLENBQUo7QUFBQSxnQ0FBeUJBLElBQUksRUFBN0I7QUFBQSxPQUZaLEVBR055SixLQUhNLENBR0FjLE1BSEEsQ0FBVDs7QUFLQUEsYUFBT3JNLE1BQVAsQ0FBYyxNQUFkLEVBQ0dPLElBREgsQ0FDUSxHQURSLEVBQ2EwRixRQUFRLEVBRHJCLEVBRUcxRixJQUZILENBRVEsT0FGUixFQUVpQixFQUZqQixFQUdHQSxJQUhILENBR1EsUUFIUixFQUdrQixFQUhsQixFQUlHTCxLQUpILENBSVMsTUFKVCxFQUlpQixVQUFDeUQsQ0FBRCxFQUFJN0IsQ0FBSjtBQUFBLGVBQVUsZ0JBQU0ySyxNQUFOLENBQWEzSyxJQUFJLENBQWpCLENBQVY7QUFBQSxPQUpqQjs7QUFNQXVLLGFBQU9yTSxNQUFQLENBQWMsTUFBZCxFQUNHTyxJQURILENBQ1EsR0FEUixFQUNhMEYsUUFBUSxFQURyQixFQUVHMUYsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHTCxLQUpILENBSVMsYUFKVCxFQUl3QixLQUp4QixFQUtHZSxJQUxILENBS1E7QUFBQSxlQUFLMEMsQ0FBTDtBQUFBLE9BTFI7O0FBT0EsYUFBTzBHLEdBQVA7QUFDRDs7Ozs7O2tCQTFKa0J5RSxROzs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJ1QixTOzs7QUFFbkIsMkJBQTREO0FBQUEsNEJBQTlDNVIsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsaUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNeUMsSSxFQUFNOztBQUVYO0FBQ0EsVUFBSSxDQUFDQSxLQUFLQyxNQUFMLENBQVlDLEtBQWpCLEVBQXdCO0FBQ3RCLGFBQUtwQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IsOENBQWxCO0FBQ0E7QUFDRDs7QUFFRCxVQUFJVyxVQUFVLHNCQUFZLEtBQUtSLE9BQWpCLENBQWQ7O0FBRUEsVUFBSTBHLFNBQVMsS0FBSzFHLE9BQUwsQ0FBYVosUUFBMUI7O0FBRUEsVUFBSXFRLE9BQU8zTixLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0J5TixJQUE3QjtBQUFBLFVBQ0VDLFdBQVc1TixLQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0IrQixJQUQvQjtBQUFBLFVBRUU0TCxlQUFlN08sT0FBT1MsSUFBUCxDQUFZbU8sUUFBWixDQUZqQjs7QUFJQSxVQUFJM0UsTUFBTXJFLE9BQU8zRyxNQUFQLENBQWMsa0JBQWQsQ0FBVjtBQUFBLFVBQ0U2UCxTQUFTLEVBQUVDLEtBQUssRUFBUCxFQUFXQyxPQUFPLEVBQWxCLEVBQXNCQyxRQUFRLEVBQTlCLEVBQWtDQyxNQUFNLEVBQXhDLEVBRFg7QUFBQSxVQUVFckosUUFBUSxDQUFDRCxPQUFPekYsSUFBUCxDQUFZLE9BQVosQ0FBRCxJQUF5Qm5CLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxJQUFsQixHQUF5QitLLHFCQUF6QixHQUFpRHJFLEtBRnBGO0FBQUEsVUFHRUMsU0FBUyxDQUFDRixPQUFPekYsSUFBUCxDQUFZLFFBQVosQ0FBRCxJQUEwQm5CLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxJQUFsQixHQUF5QitLLHFCQUF6QixHQUFpRHBFLE1BSHRGOztBQUtBO0FBQ0FELGNBQVFBLFFBQVFpSixPQUFPSSxJQUFmLEdBQXNCSixPQUFPRSxLQUFyQztBQUNBbEosZUFBU0EsU0FBU2dKLE9BQU9DLEdBQWhCLEdBQXNCRCxPQUFPRyxNQUF0Qzs7QUFFQTtBQUNBLFVBQUl0TixJQUFJM0MsR0FBR3FRLFdBQUgsR0FBaUJELEtBQWpCLENBQXVCLENBQUMsQ0FBRCxFQUFJdkosS0FBSixDQUF2QixFQUFtQ2hFLE1BQW5DLENBQTBDOE0sS0FBS2hOLENBQUwsQ0FBT0UsTUFBakQsQ0FBUjtBQUNBLFVBQUk4RSxJQUFJM0gsR0FBR3FRLFdBQUgsR0FBaUJELEtBQWpCLENBQXVCLENBQUN0SixNQUFELEVBQVMsQ0FBVCxDQUF2QixFQUFvQ2pFLE1BQXBDLENBQTJDOE0sS0FBS2hJLENBQUwsQ0FBTzlFLE1BQWxELENBQVI7O0FBRUEsVUFBSXlOLE1BQU0sRUFBVjtBQUNBVCxtQkFBYTVKLE9BQWIsQ0FBcUI7QUFBQSxlQUFPcUssTUFBTUEsSUFBSUMsTUFBSixDQUFXWCxTQUFTak8sR0FBVCxDQUFYLENBQWI7QUFBQSxPQUFyQjs7QUFFQSxVQUFJLENBQUNnTyxLQUFLaEksQ0FBTCxDQUFPOUUsTUFBUCxDQUFjM0IsTUFBbkIsRUFBMkI7QUFDekJ5RyxVQUFFOUUsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFJN0MsR0FBR3NDLEdBQUgsQ0FBT2dPLEdBQVAsRUFBWTtBQUFBLGlCQUFLL0wsQ0FBTDtBQUFBLFNBQVosQ0FBSixDQUFUO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDb0wsS0FBS2hOLENBQUwsQ0FBT0UsTUFBUCxDQUFjM0IsTUFBbkIsRUFBMkI7QUFDekJ5QixVQUFFRSxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUl5TixJQUFJcFAsTUFBSixHQUFhMk8sYUFBYTNPLE1BQTlCLENBQVQ7QUFDRDs7QUFFRCxVQUFJZ1EsYUFBYWpHLElBQUkxSixTQUFKLENBQWMsZ0JBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDMlAsV0FBVy9RLElBQVgsRUFBTCxFQUF3QjtBQUN0QitRLHFCQUFhakcsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixjQUE5QixDQUFiO0FBQ0Q7O0FBRUQwTyxtQkFBYTVKLE9BQWIsQ0FBcUIsVUFBU3RFLEdBQVQsRUFBY21OLEtBQWQsRUFBcUI7QUFDeEMsWUFBSXFDLFlBQVluUixHQUFHb1IsSUFBSCxHQUNiek8sQ0FEYSxDQUNYLFVBQVM0QixDQUFULEVBQVk3QixDQUFaLEVBQWU7QUFBRSxpQkFBT0MsRUFBRUQsQ0FBRixDQUFQO0FBQWMsU0FEcEIsRUFFYmlGLENBRmEsQ0FFWCxVQUFTcEQsQ0FBVCxFQUFZO0FBQUUsaUJBQU9vRCxFQUFFcEQsQ0FBRixDQUFQO0FBQWMsU0FGakIsQ0FBaEI7O0FBSUEsWUFBSTZNLE9BQU9GLFdBQVczUCxTQUFYLFdBQTZCdU4sS0FBN0IsRUFBc0M3SyxJQUF0QyxDQUEyQyxDQUFDMkwsU0FBU2pPLEdBQVQsQ0FBRCxDQUEzQyxDQUFYOztBQUVBeVAsYUFBS25GLElBQUwsR0FBWW5LLE1BQVo7O0FBRUE7QUFDQXNQLGFBQUtsTixLQUFMLEdBQ0d0RCxNQURILENBQ1UsTUFEVixFQUVHRSxLQUZILENBRVMsUUFGVCxFQUVtQjtBQUFBLGlCQUFNLGdCQUFNdU0sTUFBTixDQUFheUIsUUFBUSxDQUFyQixDQUFOO0FBQUEsU0FGbkIsRUFHR2hPLEtBSEgsQ0FHUyxjQUhULEVBR3lCLEtBSHpCLEVBSUdLLElBSkgsQ0FJUSxPQUpSLGtCQUkrQjJOLEtBSi9CLEVBS0czTixJQUxILENBS1EsR0FMUixFQUthZ1EsU0FMYixFQU1HN00sRUFOSCxDQU1NLFdBTk4sRUFNbUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzNCdkUsYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IrSCxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUVHbkgsS0FGSCxDQUVTLGdCQUZULEVBRTJCLEdBRjNCLEVBR0dBLEtBSEgsQ0FHUyxjQUhULEVBR3lCLE1BSHpCO0FBSUFKLGtCQUFRZixNQUFSLENBQWUsRUFBRSxXQUFXZ0MsR0FBYixFQUFrQixTQUFTNEMsQ0FBM0IsRUFBZjtBQUNELFNBWkgsRUFhR0QsRUFiSCxDQWFNLFVBYk4sRUFha0IsWUFBVztBQUN6QnRFLGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCK0gsVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFFR25ILEtBRkgsQ0FFUyxnQkFGVCxFQUUyQixDQUYzQixFQUdHQSxLQUhILENBR1MsY0FIVCxFQUd5QixLQUh6QjtBQUlBSixrQkFBUWIsUUFBUjtBQUNELFNBbkJIOztBQXFCQXVSLGFBQUtqRixLQUFMLENBQVdpRixJQUFYO0FBQ0QsT0FoQ0Q7O0FBa0NBO0FBQ0EsVUFBSVIsYUFBYTNGLElBQUkxSixTQUFKLENBQWMsaUJBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDcVAsV0FBV3pRLElBQVgsRUFBTCxFQUF3QjtBQUN0QnlRLHFCQUFhM0YsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUR5UCxpQkFBV3JQLFNBQVgsQ0FBcUIsR0FBckIsRUFBMEJPLE1BQTFCOztBQUVBO0FBQ0E4TyxpQkFDR3pQLElBREgsQ0FDUSxXQURSLG1CQUNvQzJGLE1BRHBDLFFBRUdHLElBRkgsQ0FFUWpILEdBQUc2USxVQUFILENBQWNsTyxDQUFkLENBRlIsRUFHRy9CLE1BSEgsQ0FHVSxNQUhWLEVBSUdPLElBSkgsQ0FJUSxJQUpSLEVBSWMsRUFKZCxFQUtHQSxJQUxILENBS1EsSUFMUixFQUtjMEYsUUFBUSxDQUx0QixFQU1HMUYsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsT0FOaEIsRUFPR0EsSUFQSCxDQU9RLE9BUFIsRUFPaUIsYUFQakIsRUFRR0wsS0FSSCxDQVFTLGFBUlQsRUFRd0IsS0FSeEIsRUFTR2UsSUFUSCxDQVNROE4sS0FBS2hOLENBQUwsQ0FBT3dCLEtBVGY7O0FBV0E7QUFDQSxVQUFJMk0sYUFBYTdGLElBQUkxSixTQUFKLENBQWMsaUJBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDdVAsV0FBVzNRLElBQVgsRUFBTCxFQUF3QjtBQUN0QjJRLHFCQUFhN0YsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUQyUCxpQkFBV3ZQLFNBQVgsQ0FBcUIsR0FBckIsRUFBMEJPLE1BQTFCOztBQUVBO0FBQ0FnUCxpQkFDRzdKLElBREgsQ0FDUWpILEdBQUcrUSxRQUFILENBQVlwSixDQUFaLENBRFIsRUFFRy9HLE1BRkgsQ0FFVSxNQUZWLEVBR0dPLElBSEgsQ0FHUSxJQUhSLEVBR2MsQ0FBQyxFQUhmLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMyRixTQUFTLENBSnZCLEVBS0czRixJQUxILENBS1EsTUFMUixFQUtnQixPQUxoQixFQU1HQSxJQU5ILENBTVEsT0FOUixFQU1pQixhQU5qQixFQU9HTCxLQVBILENBT1MsYUFQVCxFQU93QixLQVB4QixFQVFHZSxJQVJILENBUVE4TixLQUFLaEksQ0FBTCxDQUFPeEQsS0FSZjs7QUFVQSxVQUFJNkksY0FBYy9CLElBQUkxSixTQUFKLENBQWMsZ0JBQWQsQ0FBbEI7O0FBRUEsVUFBSSxDQUFDeUwsWUFBWTdNLElBQVosRUFBTCxFQUF5QjtBQUN2QjZNLHNCQUFjL0IsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFkO0FBQ0Q7O0FBRUQ7QUFDQTZMLGtCQUFZekwsU0FBWixDQUFzQixHQUF0QixFQUEyQk8sTUFBM0I7O0FBRUEsVUFBSW1MLFNBQVNELFlBQVl6TCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCMEMsSUFBM0IsQ0FBZ0M0TCxhQUFhbUIsS0FBYixFQUFoQyxDQUFiOztBQUVBL0QsYUFBT2hCLElBQVAsR0FBY25LLE1BQWQ7O0FBRUFtTCxlQUFTQSxPQUFPL0ksS0FBUCxHQUNOdEQsTUFETSxDQUNDLEdBREQsRUFFTk8sSUFGTSxDQUVELFdBRkMsRUFFWSxVQUFDb0QsQ0FBRCxFQUFJN0IsQ0FBSjtBQUFBLGdDQUF5QkEsSUFBSSxFQUE3QjtBQUFBLE9BRlosRUFHTnlKLEtBSE0sQ0FHQWMsTUFIQSxDQUFUOztBQUtBQSxhQUFPck0sTUFBUCxDQUFjLE1BQWQsRUFDR08sSUFESCxDQUNRLEdBRFIsRUFDYTBGLFFBQVEsRUFEckIsRUFFRzFGLElBRkgsQ0FFUSxPQUZSLEVBRWlCLEVBRmpCLEVBR0dBLElBSEgsQ0FHUSxRQUhSLEVBR2tCLEVBSGxCLEVBSUdMLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUN5RCxDQUFELEVBQUk3QixDQUFKO0FBQUEsZUFBVSxnQkFBTTJLLE1BQU4sQ0FBYTNLLElBQUksQ0FBakIsQ0FBVjtBQUFBLE9BSmpCOztBQU1BdUssYUFBT3JNLE1BQVAsQ0FBYyxNQUFkLEVBQ0dPLElBREgsQ0FDUSxHQURSLEVBQ2EwRixRQUFRLEVBRHJCLEVBRUcxRixJQUZILENBRVEsR0FGUixFQUVhLENBRmIsRUFHR0EsSUFISCxDQUdRLElBSFIsRUFHYyxPQUhkLEVBSUdMLEtBSkgsQ0FJUyxhQUpULEVBSXdCLEtBSnhCLEVBS0dlLElBTEgsQ0FLUTtBQUFBLGVBQUswQyxDQUFMO0FBQUEsT0FMUjs7QUFPQSxhQUFPMEcsR0FBUDtBQUNEOzs7Ozs7a0JBL0prQmdHLFM7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkksWTs7O0FBRW5CLDhCQUE0RDtBQUFBLDRCQUE5Q2hTLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTXlDLEksRUFBTTs7QUFFWDtBQUNBLFVBQUksQ0FBQ0EsS0FBS0MsTUFBTCxDQUFZQyxLQUFqQixFQUF3QjtBQUN0QixhQUFLcEMsTUFBTCxDQUFZQyxLQUFaLENBQWtCLGlEQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSVcsVUFBVSxzQkFBWSxLQUFLUixPQUFqQixDQUFkOztBQUVBLFVBQUkwRyxTQUFTLEtBQUsxRyxPQUFMLENBQWFaLFFBQTFCOztBQUVBLFVBQUlxUSxPQUFPM04sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCeU4sSUFBN0I7QUFBQSxVQUNFQyxXQUFXNU4sS0FBS0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCK0IsSUFEL0I7QUFBQSxVQUVFNEwsZUFBZTdPLE9BQU9TLElBQVAsQ0FBWW1PLFFBQVosQ0FGakI7O0FBSUEsVUFBSTNFLE1BQU1yRSxPQUFPM0csTUFBUCxDQUFjLGtCQUFkLENBQVY7QUFBQSxVQUNFNlAsU0FBUyxFQUFFQyxLQUFLLEVBQVAsRUFBV0MsT0FBTyxFQUFsQixFQUFzQkMsUUFBUSxFQUE5QixFQUFrQ0MsTUFBTSxFQUF4QyxFQURYO0FBQUEsVUFFRXJKLFFBQVEsQ0FBQ0QsT0FBT3pGLElBQVAsQ0FBWSxPQUFaLENBQUQsSUFBeUJuQixHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkUsSUFBbEIsR0FBeUIrSyxxQkFBekIsR0FBaURyRSxLQUZwRjtBQUFBLFVBR0VDLFNBQVMsQ0FBQ0YsT0FBT3pGLElBQVAsQ0FBWSxRQUFaLENBQUQsSUFBMEJuQixHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkUsSUFBbEIsR0FBeUIrSyxxQkFBekIsR0FBaURwRSxNQUh0Rjs7QUFLQTtBQUNBRCxjQUFRQSxRQUFRaUosT0FBT0ksSUFBZixHQUFzQkosT0FBT0UsS0FBckM7QUFDQWxKLGVBQVNBLFNBQVNnSixPQUFPQyxHQUFoQixHQUFzQkQsT0FBT0csTUFBdEM7O0FBRUE7QUFDQSxVQUFJdE4sSUFBSTNDLEdBQUdxUSxXQUFILEdBQWlCRCxLQUFqQixDQUF1QixDQUFDLENBQUQsRUFBSXZKLEtBQUosQ0FBdkIsRUFBbUNoRSxNQUFuQyxDQUEwQzhNLEtBQUtoTixDQUFMLENBQU9FLE1BQWpELENBQVI7QUFDQSxVQUFJOEUsSUFBSTNILEdBQUdxUSxXQUFILEdBQWlCRCxLQUFqQixDQUF1QixDQUFDdEosTUFBRCxFQUFTLENBQVQsQ0FBdkIsRUFBb0NqRSxNQUFwQyxDQUEyQzhNLEtBQUtoSSxDQUFMLENBQU85RSxNQUFsRCxDQUFSOztBQUVBLFVBQUl5TixNQUFNLEVBQVY7QUFDQVQsbUJBQWE1SixPQUFiLENBQXFCO0FBQUEsZUFBT3FLLE1BQU1BLElBQUlDLE1BQUosQ0FBV1gsU0FBU2pPLEdBQVQsQ0FBWCxDQUFiO0FBQUEsT0FBckI7O0FBRUEsVUFBSSxDQUFDZ08sS0FBS2hJLENBQUwsQ0FBTzlFLE1BQVAsQ0FBYzNCLE1BQW5CLEVBQTJCO0FBQ3pCeUcsVUFBRTlFLE1BQUYsQ0FBUyxDQUFDLENBQUQsRUFBSTdDLEdBQUdzQyxHQUFILENBQU9nTyxHQUFQLEVBQVk7QUFBQSxpQkFBSy9MLENBQUw7QUFBQSxTQUFaLENBQUosQ0FBVDtBQUNEOztBQUVELFVBQUksQ0FBQ29MLEtBQUtoTixDQUFMLENBQU9FLE1BQVAsQ0FBYzNCLE1BQW5CLEVBQTJCO0FBQ3pCeUIsVUFBRUUsTUFBRixDQUFTLENBQUMsQ0FBRCxFQUFJeU4sSUFBSXBQLE1BQUosR0FBYTJPLGFBQWEzTyxNQUE5QixDQUFUO0FBQ0Q7O0FBRUQsVUFBSW9RLGVBQWVyRyxJQUFJMUosU0FBSixDQUFjLG1CQUFkLENBQW5COztBQUVBLFVBQUksQ0FBQytQLGFBQWFuUixJQUFiLEVBQUwsRUFBMEI7QUFDeEJtUix1QkFBZXJHLElBQUlySyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsaUJBQTlCLENBQWY7QUFDRDs7QUFFRDBPLG1CQUFhNUosT0FBYixDQUFxQixVQUFTdEUsR0FBVCxFQUFjbU4sS0FBZCxFQUFxQjtBQUN4QyxZQUFJeUMsVUFBVUQsYUFBYS9QLFNBQWIsY0FBa0N1TixLQUFsQyxFQUEyQzdLLElBQTNDLENBQWdEMkwsU0FBU2pPLEdBQVQsQ0FBaEQsQ0FBZDs7QUFFQTRQLGdCQUFRdEYsSUFBUixHQUFlbkssTUFBZjs7QUFFQTtBQUNBeVAsZ0JBQ0dyTixLQURILEdBRUd0RCxNQUZILENBRVUsUUFGVixFQUdHRSxLQUhILENBR1MsTUFIVCxFQUdpQjtBQUFBLGlCQUFNLGdCQUFNdU0sTUFBTixDQUFheUIsUUFBUSxDQUFyQixDQUFOO0FBQUEsU0FIakIsRUFJRzNOLElBSkgsQ0FJUSxPQUpSLHFCQUlrQzJOLEtBSmxDLEVBS0czTixJQUxILENBS1EsR0FMUixFQUthLENBTGIsRUFNR0EsSUFOSCxDQU1RLElBTlIsRUFNYyxVQUFTb0QsQ0FBVCxFQUFZN0IsQ0FBWixFQUFlO0FBQUUsaUJBQU9DLEVBQUVELENBQUYsQ0FBUDtBQUFjLFNBTjdDLEVBT0d2QixJQVBILENBT1EsSUFQUixFQU9jLFVBQVNvRCxDQUFULEVBQVk7QUFBRSxpQkFBT29ELEVBQUVwRCxDQUFGLENBQVA7QUFBYyxTQVAxQyxFQVFHRCxFQVJILENBUU0sV0FSTixFQVFtQixVQUFTQyxDQUFULEVBQVk7QUFDM0J2RSxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQitILFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUduSCxLQUZILENBRVMsY0FGVCxFQUV5QixHQUZ6QixFQUdHSyxJQUhILENBR1EsR0FIUixFQUdhLEVBSGI7QUFJQVQsa0JBQVFmLE1BQVIsQ0FBZSxFQUFFLFdBQVdnQyxHQUFiLEVBQWtCLFNBQVM0QyxDQUEzQixFQUFmO0FBQ0QsU0FkSCxFQWVHRCxFQWZILENBZU0sVUFmTixFQWVrQixZQUFXO0FBQ3pCdEUsYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IrSCxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUVHbkgsS0FGSCxDQUVTLGNBRlQsRUFFeUIsQ0FGekIsRUFHR0ssSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiO0FBSUFULGtCQUFRYixRQUFSO0FBQ0QsU0FyQkg7O0FBdUJBMFIsZ0JBQVFwRixLQUFSLENBQWNvRixPQUFkO0FBQ0QsT0E5QkQ7O0FBZ0NBO0FBQ0EsVUFBSVgsYUFBYTNGLElBQUkxSixTQUFKLENBQWMsaUJBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDcVAsV0FBV3pRLElBQVgsRUFBTCxFQUF3QjtBQUN0QnlRLHFCQUFhM0YsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUR5UCxpQkFBV3JQLFNBQVgsQ0FBcUIsR0FBckIsRUFBMEJPLE1BQTFCOztBQUVBO0FBQ0E4TyxpQkFDR3pQLElBREgsQ0FDUSxXQURSLG1CQUNvQzJGLE1BRHBDLFFBRUdHLElBRkgsQ0FFUWpILEdBQUc2USxVQUFILENBQWNsTyxDQUFkLENBRlIsRUFHRy9CLE1BSEgsQ0FHVSxNQUhWLEVBSUdPLElBSkgsQ0FJUSxJQUpSLEVBSWMsRUFKZCxFQUtHQSxJQUxILENBS1EsSUFMUixFQUtjMEYsUUFBUSxDQUx0QixFQU1HMUYsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsT0FOaEIsRUFPR0EsSUFQSCxDQU9RLE9BUFIsRUFPaUIsYUFQakIsRUFRR0wsS0FSSCxDQVFTLGFBUlQsRUFRd0IsS0FSeEIsRUFTR2UsSUFUSCxDQVNROE4sS0FBS2hOLENBQUwsQ0FBT3dCLEtBVGY7O0FBV0E7QUFDQSxVQUFJMk0sYUFBYTdGLElBQUkxSixTQUFKLENBQWMsaUJBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDdVAsV0FBVzNRLElBQVgsRUFBTCxFQUF3QjtBQUN0QjJRLHFCQUFhN0YsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUQyUCxpQkFBV3ZQLFNBQVgsQ0FBcUIsR0FBckIsRUFBMEJPLE1BQTFCOztBQUVBO0FBQ0FnUCxpQkFDRzdKLElBREgsQ0FDUWpILEdBQUcrUSxRQUFILENBQVlwSixDQUFaLENBRFIsRUFFRy9HLE1BRkgsQ0FFVSxNQUZWLEVBR0dPLElBSEgsQ0FHUSxJQUhSLEVBR2MsQ0FBQyxFQUhmLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMyRixTQUFTLENBSnZCLEVBS0czRixJQUxILENBS1EsTUFMUixFQUtnQixPQUxoQixFQU1HQSxJQU5ILENBTVEsT0FOUixFQU1pQixhQU5qQixFQU9HTCxLQVBILENBT1MsYUFQVCxFQU93QixLQVB4QixFQVFHZSxJQVJILENBUVE4TixLQUFLaEksQ0FBTCxDQUFPeEQsS0FSZjs7QUFVQSxVQUFJNkksY0FBYy9CLElBQUkxSixTQUFKLENBQWMsZ0JBQWQsQ0FBbEI7O0FBRUEsVUFBSSxDQUFDeUwsWUFBWTdNLElBQVosRUFBTCxFQUF5QjtBQUN2QjZNLHNCQUFjL0IsSUFBSXJLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFkO0FBQ0Q7O0FBRUQ7QUFDQTZMLGtCQUFZekwsU0FBWixDQUFzQixHQUF0QixFQUEyQk8sTUFBM0I7O0FBRUEsVUFBSW1MLFNBQVNELFlBQVl6TCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCMEMsSUFBM0IsQ0FBZ0M0TCxhQUFhbUIsS0FBYixFQUFoQyxDQUFiOztBQUVBL0QsYUFBT2hCLElBQVAsR0FBY25LLE1BQWQ7O0FBRUFtTCxlQUFTQSxPQUFPL0ksS0FBUCxHQUNOdEQsTUFETSxDQUNDLEdBREQsRUFFTk8sSUFGTSxDQUVELFdBRkMsRUFFWSxVQUFDb0QsQ0FBRCxFQUFJN0IsQ0FBSjtBQUFBLGdDQUF5QkEsSUFBSSxFQUE3QjtBQUFBLE9BRlosRUFHTnlKLEtBSE0sQ0FHQWMsTUFIQSxDQUFUOztBQUtBQSxhQUFPck0sTUFBUCxDQUFjLE1BQWQsRUFDR08sSUFESCxDQUNRLEdBRFIsRUFDYTBGLFFBQVEsRUFEckIsRUFFRzFGLElBRkgsQ0FFUSxPQUZSLEVBRWlCLEVBRmpCLEVBR0dBLElBSEgsQ0FHUSxRQUhSLEVBR2tCLEVBSGxCLEVBSUdMLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUN5RCxDQUFELEVBQUk3QixDQUFKO0FBQUEsZUFBVSxnQkFBTTJLLE1BQU4sQ0FBYTNLLElBQUksQ0FBakIsQ0FBVjtBQUFBLE9BSmpCOztBQU1BdUssYUFBT3JNLE1BQVAsQ0FBYyxNQUFkLEVBQ0dPLElBREgsQ0FDUSxHQURSLEVBQ2EwRixRQUFRLEVBRHJCLEVBRUcxRixJQUZILENBRVEsR0FGUixFQUVhLENBRmIsRUFHR0EsSUFISCxDQUdRLElBSFIsRUFHYyxPQUhkLEVBSUdMLEtBSkgsQ0FJUyxhQUpULEVBSXdCLEtBSnhCLEVBS0dlLElBTEgsQ0FLUTtBQUFBLGVBQUswQyxDQUFMO0FBQUEsT0FMUjs7QUFPQSxhQUFPMEcsR0FBUDtBQUNEOzs7Ozs7a0JBN0prQm9HLFkiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE5NDM3OWE0OWUwZTAwYzI1MmI3IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLm5vZGUoKS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdHxNZW51XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LnNlbGVjdCgnZm9yZWlnbk9iamVjdC50b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLnRvb2x0aXAubm9kZSgpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLlNWR1BhcmVudC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKVxuICAgICAgICAuY2xhc3NlZCgndG9vbHRpcC1ob2xkZXInLCB0cnVlKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG9iamVjdCkge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIG1lbnVzIGFyZSBwcmVzZW50XG4gICAgaWYgKCFvYmplY3QgfHwgIU9iamVjdC52YWx1ZXMob2JqZWN0KS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdOb3RoaW5nIHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvb2x0aXAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lm9mZnNldFggKyA1fSwke2QzLmV2ZW50Lm9mZnNldFkgKyA1fSlgKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLnRvb2x0aXAuYXBwZW5kKCd4aHRtbDpkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoa2V5KTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChvYmplY3Rba2V5XSk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNoYXJ0IHR5cGUgWyR7anNvbi5jYW52YXMuY2hhcnQudHlwZX1dIGlzIG5vdCBpbXBsZW1lbnRlZCFgKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uem9vbVRvRml0KCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmV4ZWN1dGUoZCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZy5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgdmFyIG1vZGFsID0gbmV3IE1vZGFsKHRoaXMub3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kYWwucmVuZGVyKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoY29uZmlnLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gJy4vdXRpbC9qc29uLXV0aWxzJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vcmVuZGVyL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9yZW5kZXIvbWVudS1tYWluJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL3JlbmRlci9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9yZW5kZXIvY2hhcnQnO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tICcuL3RyYWNrZXIvY2hhbmdlJztcblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kucmVuZGVyKGpzb24pO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChtZW51KTtcbiAgICAgIGNhbnZhcy5hZGQoZ3JhcGgpO1xuICAgICAgY2FudmFzLmFkZChjaGFydCk7XG4gICAgICB2YXIgZWxlbWVudCA9IGNhbnZhcy5yZW5kZXIoanNvbik7XG4gICAgICBBTExfQ0FOVkFTW0lEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpXSA9IGVsZW1lbnQ7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgIGNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBhZGp1c3QgdG9wIG1lbnUgb24gcmVzaXplXG4gICAgZDMuc2VsZWN0QWxsKCdmb3JlaWduT2JqZWN0LmZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignd2lkdGgnLCAnMTAwJScpO1xuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbi8vRklYTUUgaW1wbGVtZW50IHByb3BwZXIgem9vbSB0byBmaXQsIHNlZSBodHRwczovL2JsLm9ja3Mub3JnL2lhbWtldmludi8wYTI0ZTkxMjZjZDJmYTZiMjgzYzZmMmQ3NzRiNjlhMlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG4gICAgLy92YXIgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIGNhbnZhcyA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IGZyYW5jeS1jYW52YXMnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpOyAvLy5zY2FsZUV4dGVudChbMSwgOF0pO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBjYW52YXMuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gY2FudmFzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgY2FudmFzLmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpOyAvLy50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7XG4gICAgfVxuXG4gICAgY2FudmFzLm9uKFwiY2xpY2tcIiwgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICBjYW52YXMuem9vbVRvRml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICB2YXIgZnVsbFdpZHRoID0gY2FudmFzLm5vZGUoKS5jbGllbnRXaWR0aCxcbiAgICAgICAgZnVsbEhlaWdodCA9IGNhbnZhcy5ub2RlKCkuY2xpZW50SGVpZ2h0ICsgNDA7IC8vd2VsbCwgdGhlIG1lbnUgaXMgcGFydCBvZiB0aGUgY2FudmFzXG5cbiAgICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcblxuICAgICAgaWYgKHdpZHRoID09IDAgfHwgaGVpZ2h0ID09IDApIHJldHVybjtcblxuICAgICAgdmFyIG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgdmFyIHNjYWxlID0gKDAuNzUpIC8gTWF0aC5tYXgod2lkdGggLyBmdWxsV2lkdGgsIGhlaWdodCAvIGZ1bGxIZWlnaHQpO1xuICAgICAgdmFyIHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgIGNvbnRlbnQudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbigyMDAwKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpIHtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpLnNjYWxlKHNjYWxlLCBzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIGNvbnRlbnQuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwwKWApXG4gICAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicsIHRydWUpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICBtZW51ID0gbWVudS5hcHBlbmQoJ3hodG1sOnVsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLnRpdGxlKSB7XG4gICAgICBtZW51LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBwYXJlbnQuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgbW9kYWwgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyBmb3ImbmJzcDsnKS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGpzb24udGl0bGUpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICBjb250ZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1hcmcnKS5ub2RlKCkuZm9jdXMoKTtcblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gZ3JhcGggaXMgcHJlc2VudFxuICAgIGlmICghanNvbi5jYW52YXMuZ3JhcGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBHcmFwaCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIHZhciBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IGpzb24uY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0ganNvbi5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoLTUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKDUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIChkLnNpemUgKiA1KSkuc3RyZW5ndGgoMSk7XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKS5zdHJlbmd0aCgwLjAwMSkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMjUwKSlcbiAgICAgIC5mb3JjZSgnY29sbGlkZScsIGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSkpXG4gICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpXG4gICAgICAub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2xpbmUuZnJhbmN5LWxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGxpbmsuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YClcbiAgICAgIC5tZXJnZShsaW5rKTtcblxuICAgIGlmIChqc29uLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LW5vZGUnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAubWVyZ2Uobm9kZSk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVscycpO1xuXG4gICAgaWYgKCFsYWJlbEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGFiZWxHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAubWVyZ2UobGFiZWwpO1xuXG4gICAgbGFiZWxcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5yZW5kZXIoZCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5yZW5kZXIoZC5pbmZvKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHBhcmVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGQzLm1hcChjYW52YXNOb2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKS5zb3J0KChhLCBiKSA9PiBhLmxheWVyID4gYi5sYXllciksIGQgPT4gZC5pZCk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2R9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgkezEwfSwkeyhpICsgNSkgKiAxMn0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplICogZC50aXRsZS5sZW5ndGggKiAyKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUgKiAyKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuOSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMTsgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXM7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogZC5zaXplICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5leGVjdXRlKHsgY2FsbGJhY2s6IGNiIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3ZnO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5zZWxlY3QoJ2ZvcmVpZ25PYmplY3QuY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmNvbnRleHRNZW51Lm5vZGUoKSkge1xuICAgICAgdGhpcy5jb250ZXh0TWVudSA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdjb250ZXh0LW1lbnUtaG9sZGVyJywgdHJ1ZSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBtZW51cyBhcmUgcHJlc2VudFxuICAgIGlmICghb2JqZWN0Lm1lbnVzIHx8ICFPYmplY3QudmFsdWVzKG9iamVjdC5tZW51cykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQ29udGV4dE1lbnUgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dE1lbnUuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lm9mZnNldFggKyA1fSwke2QzLmV2ZW50Lm9mZnNldFkgKyA1fSlgKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuY29udGV4dE1lbnUuYXBwZW5kKCd4aHRtbDpkaXYnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGNoYXJ0IGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQmFyQ2hhcnQgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXIubWVyZ2UoYmFyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gY2hhcnQgaXMgcHJlc2VudFxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBMaW5lQ2hhcnQgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmVzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xuXG4gICAgICB2YXIgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAubGluZSR7aW5kZXh9YCkuZGF0YShbZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmUubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgcmV0dXJuIHN2ZztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFNjYXR0ZXJDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLnNjYXR0ZXIke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIHJldHVybiBzdmc7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=