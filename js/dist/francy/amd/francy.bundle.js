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

      //d3.select(d3.event.srcElement).attr('transform')

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

      // delay the zoom to fit
      setTimeout(this.options.appendTo.zoomToFit, 1000);

      return element;
    }
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
    key: 'zoomToFit',
    value: function zoomToFit(element) {
      var transform = d3.zoomTransform(element.node());
      transform.translate(element.left, element.top);
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
            fullHeight = canvas.node().clientHeight;

        var width = bounds.width,
            height = bounds.height;

        if (width == 0 || height == 0) return;

        var midX = bounds.x + width / 2,
            midY = bounds.y + height / 2;

        var scale = 0.75 / Math.max(width / fullWidth, height / fullHeight);
        var translateX = fullWidth / 2 - scale * midX,
            translateY = fullHeight / 2 - scale * midY;

        content.transition().duration(750).attr('transform', 'translate(' + translateX + ',' + translateY + ') scale(' + scale + ')').on('end', updateZoom([translateX, translateY], scale));
      };

      function zoomed() {
        content.attr("transform", d3.event.transform);
      }

      function updateZoom(translate, scale) {
        canvas.call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
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
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

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

      var footer = form.append('div').attr('class', 'francy-modal-footer');

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

      //var self = this;

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.francy-content'),
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      var t = d3.transition().duration(500);

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

      link.exit().transition(t).remove();

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

      node.exit().transition(t).remove();

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

      label.exit().transition(t).remove();

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

      legend.exit().transition(t).remove();

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
    }
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

      var t = d3.transition().duration(500);

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

        bar.exit().style("fill-opacity", 1).transition(t).style("fill-opacity", 1e-6).remove();

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
        }).style("fill-opacity", 1e-6).transition(t).style("fill-opacity", 1);

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

      legend.exit().transition(t).remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });
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

      var t = d3.transition().duration(500);

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

        line.exit().style("fill-opacity", 1).transition(t).style("fill-opacity", 1e-6).remove();

        // append the rectangles for the bar chart
        line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line' + index).attr('d', valueLine).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("stroke-opacity", 1).style('stroke-width', '5px');
          tooltip.unrender();
        }).style("fill-opacity", 1e-6).transition(t).style("fill-opacity", 1);

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

      legend.exit().transition(t).remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });
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

      var t = d3.transition().duration(500);

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

      var scatterGroup = svg.selectAll('g.francy-scatter');

      if (!scatterGroup.node()) {
        scatterGroup = svg.append('g').attr('class', 'francy-scatter');
      }

      datasetNames.forEach(function (key, index) {
        var scatter = scatterGroup.selectAll('.scatter' + index).data(datasets[key]);

        scatter.exit().style("fill-opacity", 1).transition(t).style("fill-opacity", 1e-6).remove();

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
        }).style("fill-opacity", 1e-6).transition(t).style("fill-opacity", 1);

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

      legend.exit().transition(t).remove();

      legend = legend.enter().append('g').attr('transform', function (d, i) {
        return 'translate(0,' + i * 20 + ')';
      }).merge(legend);

      legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
        return _chart2.default.colors(i * 5);
      });

      legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });
    }
  }]);

  return ScatterChart;
}(_renderer2.default);

exports.default = ScatterChart;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmFmOTRiY2IwNzNhZGI0YjQxYWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJkMyIsInNlbGVjdCIsIm9wdGlvbnMiLCJub2RlIiwicGFyZW50Tm9kZSIsIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJTVkdQYXJlbnQiLCJhcHBlbmQiLCJjbGFzc2VkIiwic3R5bGUiLCJvYmplY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJhdHRyIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNlbGVjdEFsbCIsInRhYmxlIiwia2V5cyIsIm1hcCIsImtleSIsInJvdyIsInRleHQiLCJyZW1vdmUiLCJDaGFydCIsImpzb24iLCJjYW52YXMiLCJjaGFydCIsImVsZW1lbnQiLCJ0eXBlIiwic2V0VGltZW91dCIsInpvb21Ub0ZpdCIsIm1heCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwieCIsInRyYW5zZm9ybSIsInpvb21UcmFuc2Zvcm0iLCJ0cmFuc2xhdGUiLCJsZWZ0IiwidG9wIiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93Iiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiaW5mbyIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImRhdGEiLCJlbnRlciIsInRpdGxlIiwiaHRtbCIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZSIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJyZXF1aXJlZEFyZ3MiLCJtb2RhbCIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJnZXRDYW52YXNJZCIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9ucmVzaXplIiwiZm9yRWFjaCIsImUiLCJKc29uVXRpbHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsImFnZW50IiwiQ2FudmFzIiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJib3VuZHMiLCJnZXRCQm94IiwiZnVsbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJmdWxsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5Iiwic2NhbGUiLCJNYXRoIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1cGRhdGVab29tIiwiem9vbUlkZW50aXR5IiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwiQmFzZSIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiTW9kYWwiLCJzZWxmIiwibW9kYWxJZCIsImdldFdpbmRvd0lkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJuYW1lIiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJjb250ZXh0TWVudSIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidCIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaXplIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlQ29sbGlkZSIsImZvcmNlQ2VudGVyIiwibGlua0dyb3VwIiwibGluayIsImV4aXQiLCJzb3VyY2UiLCJtZXJnZSIsIm5vZGVHcm91cCIsInN5bWJvbCIsImdldFN5bWJvbCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJleGVjdXRlQ2FsbGJhY2siLCJjb25uZWN0ZWROb2RlcyIsImxhYmVsR3JvdXAiLCJsYWJlbCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwic29ydCIsImEiLCJiIiwiY29sb3JzIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0Iiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJDb250ZXh0TWVudSIsIkJhckNoYXJ0IiwiYXhpcyIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNsaWNlIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFBS0MsTUFBTCxLQUFnQkMsU0FBaEIsSUFBNkIsT0FBTyxNQUFLRCxNQUFaLEtBQXVCLFVBQXhELEVBQW9FO0FBQ2xFLFlBQU0sSUFB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U0FBWixDQUFzQixHQUF0QixFQUEyQk8sTUFBM0I7O0FBRUEsVUFBSXdMLFNBQVNELFlBQVk5TCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCZ0QsSUFBM0IsQ0FBZ0MyTCxhQUFhaUIsS0FBYixFQUFoQyxDQUFiOztBQUVBN0QsYUFBT2hCLElBQVAsR0FBY2hFLFVBQWQsQ0FBeUJpRCxDQUF6QixFQUE0QnpKLE1BQTVCOztBQUVBd0wsZUFBU0EsT0FBTzlJLEtBQVAsR0FDTjVELE1BRE0sQ0FDQyxHQURELEVBRU5PLElBRk0sQ0FFRCxXQUZDLEVBRVksVUFBQzBELENBQUQsRUFBSWxDLENBQUo7QUFBQSxnQ0FBeUJBLElBQUksRUFBN0I7QUFBQSxPQUZaLEVBR042SixLQUhNLENBR0FjLE1BSEEsQ0FBVDs7QUFLQUEsYUFBTzFNLE1BQVAsQ0FBYyxNQUFkLEVBQ0dPLElBREgsQ0FDUSxHQURSLEVBQ2FnRyxRQUFRLEVBRHJCLEVBRUdoRyxJQUZILENBRVEsT0FGUixFQUVpQixFQUZqQixFQUdHQSxJQUhILENBR1EsUUFIUixFQUdrQixFQUhsQixFQUlHTCxLQUpILENBSVMsTUFKVCxFQUlpQixVQUFDK0QsQ0FBRCxFQUFJbEMsQ0FBSjtBQUFBLGVBQVUsZ0JBQU0rSyxNQUFOLENBQWEvSyxJQUFJLENBQWpCLENBQVY7QUFBQSxPQUpqQjs7QUFNQTJLLGFBQU8xTSxNQUFQLENBQWMsTUFBZCxFQUNHTyxJQURILENBQ1EsR0FEUixFQUNhZ0csUUFBUSxFQURyQixFQUVHaEcsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHTCxLQUpILENBSVMsYUFKVCxFQUl3QixLQUp4QixFQUtHZSxJQUxILENBS1E7QUFBQSxlQUFLZ0QsQ0FBTDtBQUFBLE9BTFI7QUFNRDs7Ozs7O2tCQS9Ka0IyTSxZIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YWY5NGJjYjA3M2FkYjRiNDFhZSIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5ub2RlKCkucGFyZW50Tm9kZSk7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpoZXggdXVpZConXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEVXRpbHMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSB3aW5kb3cgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lXaW5kb3ctJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIGNhbnZhcyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY2FudmFzIGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0Q2FudmFzSWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeUNhbnZhcy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU9iamVjdC0ke29iamVjdElkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG1lbnVJZCAtIHRoZSBtZW51IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRNZW51SWQobWVudUlkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lNZW51LSR7bWVudUlkfWA7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuc2VsZWN0KCdmb3JlaWduT2JqZWN0LnRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMudG9vbHRpcC5ub2RlKCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCd0b29sdGlwLWhvbGRlcicsIHRydWUpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gbWVudXMgYXJlIHByZXNlbnRcbiAgICBpZiAoIW9iamVjdCB8fCAhT2JqZWN0LnZhbHVlcyhvYmplY3QpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vdGhpbmcgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9vbHRpcC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQub2Zmc2V0WCArIDV9LCR7ZDMuZXZlbnQub2Zmc2V0WSArIDV9KWApO1xuXG4gICAgLy9kMy5zZWxlY3QoZDMuZXZlbnQuc3JjRWxlbWVudCkuYXR0cigndHJhbnNmb3JtJylcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLnRvb2x0aXAuYXBwZW5kKCd4aHRtbDpkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoa2V5KTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChvYmplY3Rba2V5XSk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNoYXJ0IHR5cGUgWyR7anNvbi5jYW52YXMuY2hhcnQudHlwZX1dIGlzIG5vdCBpbXBsZW1lbnRlZCFgKTtcbiAgICB9XG5cbiAgICAvLyBkZWxheSB0aGUgem9vbSB0byBmaXRcbiAgICBzZXRUaW1lb3V0KHRoaXMub3B0aW9ucy5hcHBlbmRUby56b29tVG9GaXQsIDEwMDApO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbiAgc3RhdGljIHpvb21Ub0ZpdChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oZWxlbWVudC5ub2RlKCkpO1xuICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoZWxlbWVudC5sZWZ0LCBlbGVtZW50LnRvcCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykuZXhlY3V0ZShkKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgdmFyIHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGFsLnJlbmRlcihjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGNvbmZpZy5jYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tICcuL3V0aWwvanNvbi11dGlscyc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL3JlbmRlci9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vcmVuZGVyL21lbnUtbWFpbic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9yZW5kZXIvZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vcmVuZGVyL2NoYXJ0Jztcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuMi4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LnJlbmRlcihqc29uKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgYSBqc29uIHN0cmluZy9vYmplY3QgcmVuZGVyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIHJlbmRlcihpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgbWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIGNhbnZhcy5hZGQobWVudSk7XG4gICAgICBjYW52YXMuYWRkKGdyYXBoKTtcbiAgICAgIGNhbnZhcy5hZGQoY2hhcnQpO1xuICAgICAgdmFyIGVsZW1lbnQgPSBjYW52YXMucmVuZGVyKGpzb24pO1xuICAgICAgQUxMX0NBTlZBU1tJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKV0gPSBlbGVtZW50O1xuICAgICAgcmV0dXJuIGVsZW1lbnQubm9kZSgpO1xuICAgIH1cbiAgfVxuXG4gIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICBjYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gYWRqdXN0IHRvcCBtZW51IG9uIHJlc2l6ZVxuICAgIGQzLnNlbGVjdEFsbCgnZm9yZWlnbk9iamVjdC5mcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKTtcbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vL0ZJWE1FIGltcGxlbWVudCBwcm9wcGVyIHpvb20gdG8gZml0LCBzZWUgaHR0cHM6Ly9ibC5vY2tzLm9yZy9pYW1rZXZpbnYvMGEyNGU5MTI2Y2QyZmE2YjI4M2M2ZjJkNzc0YjY5YTJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICAgIC8vdmFyIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBmcmFuY3ktY2FudmFzJyk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgY2FudmFzLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTsgLy8uc2NhbGVFeHRlbnQoWzEsIDhdKTtcblxuICAgIHZhciBjb250ZW50ID0gY2FudmFzLnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTsgLy8udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGNhbnZhcy5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgY2FudmFzLnpvb21Ub0ZpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgdmFyIGZ1bGxXaWR0aCA9IGNhbnZhcy5ub2RlKCkuY2xpZW50V2lkdGgsXG4gICAgICAgIGZ1bGxIZWlnaHQgPSBjYW52YXMubm9kZSgpLmNsaWVudEhlaWdodDtcblxuICAgICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICB2YXIgc2NhbGUgPSAoMC43NSkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KSBzY2FsZSgke3NjYWxlfSlgKVxuICAgICAgICAub24oJ2VuZCcsIHVwZGF0ZVpvb20oW3RyYW5zbGF0ZVgsIHRyYW5zbGF0ZVldLCBzY2FsZSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZSwgc2NhbGUpIHtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwwKWApXG4gICAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicsIHRydWUpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICBtZW51ID0gbWVudS5hcHBlbmQoJ3hodG1sOnVsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLnRpdGxlKSB7XG4gICAgICBtZW51LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBwYXJlbnQuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyBmb3ImbmJzcDsnKS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGpzb24udGl0bGUpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBncmFwaCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5ncmFwaCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIEdyYXBoIHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL3ZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCgtNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIGlmIChqc29uLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogKGQuc2l6ZSAqIDUpKS5zdHJlbmd0aCgxKTtcbiAgICB9XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpLnN0cmVuZ3RoKDAuMDAxKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC0yNTApKVxuICAgICAgLmZvcmNlKCdjb2xsaWRlJywgZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplKSlcbiAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSlcbiAgICAgIC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSk7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5mcmFuY3ktbGluaycpLmRhdGEoY2FudmFzTGlua3MpO1xuXG4gICAgbGluay5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAubWVyZ2Uobm9kZSk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVscycpO1xuXG4gICAgaWYgKCFsYWJlbEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGFiZWxHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGFiZWwgPSBsYWJlbC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5tZXJnZShsYWJlbCk7XG5cbiAgICBsYWJlbFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gcGFyZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLnNvcnQoKGEsIGIpID0+IGEubGF5ZXIgPiBiLmxheWVyKSwgZCA9PiBkLmlkKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoJHsxMH0sJHsoaSArIDUpICogMTJ9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIGQudGl0bGUubGVuZ3RoICogMikpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplICogMikpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjkpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDE7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIGQuc2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2suZXhlY3V0ZSh7IGNhbGxiYWNrOiBjYiB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jb250ZXh0TWVudSA9IHRoaXMuU1ZHUGFyZW50LnNlbGVjdCgnZm9yZWlnbk9iamVjdC5jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuY29udGV4dE1lbnUubm9kZSgpKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51ID0gdGhpcy5TVkdQYXJlbnQuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgLmNsYXNzZWQoJ2NvbnRleHQtbWVudS1ob2xkZXInLCB0cnVlKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG9iamVjdCkge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIG1lbnVzIGFyZSBwcmVzZW50XG4gICAgaWYgKCFvYmplY3QubWVudXMgfHwgIU9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBDb250ZXh0TWVudSB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0TWVudS5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQub2Zmc2V0WCArIDV9LCR7ZDMuZXZlbnQub2Zmc2V0WSArIDV9KWApO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5jb250ZXh0TWVudS5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIHZhciBtZW51ID0gdGhpcy5jb250ZXh0TWVudS5hcHBlbmQoJ3hodG1sOmRpdicpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhvYmplY3QubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGNoYXJ0IGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQmFyQ2hhcnQgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhciR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAudHJhbnNpdGlvbih0KS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcblxuICAgICAgYmFyLm1lcmdlKGJhcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGNoYXJ0IGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gTGluZUNoYXJ0IHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKSxcbiAgICAgIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCk7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgbGluZXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSk7XG5cbiAgICAgIHZhciBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5saW5lJHtpbmRleH1gKS5kYXRhKFtkYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpLnRyYW5zaXRpb24odCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNikucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGluZVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAucmVuZGVyKHsgJ0RhdGFzZXQnOiBrZXksICdWYWx1ZSc6IGQgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnRyYW5zaXRpb24odCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG5cbiAgICAgIGxpbmUubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFNjYXR0ZXJDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjYXR0ZXJHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXInKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVyJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuc2NhdHRlciR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSkudHJhbnNpdGlvbih0KS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHRvb2x0aXAucmVuZGVyKHsgJ0RhdGFzZXQnOiBrZXksICdWYWx1ZSc6IGQgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnRyYW5zaXRpb24odCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG5cbiAgICAgIHNjYXR0ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=