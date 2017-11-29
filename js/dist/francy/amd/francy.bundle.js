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
/* 2 */
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
/* 3 */
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

var _canvas = __webpack_require__(9);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(12);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = __webpack_require__(14);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(2);

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
        ALL_CANVAS[json.canvas.id] = element;
        return element.node();
      }
    }
  }]);

  return Francy;
}();

exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
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

var _idUtils = __webpack_require__(3);

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

var _idUtils = __webpack_require__(3);

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
        return _this2.logger.info('Save to PNG pressed... Not Implemented!');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return parent.zoomToFit();
      }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
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

var _idUtils = __webpack_require__(3);

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

var _tooltip = __webpack_require__(1);

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

      var legendGroup = parent.selectAll('.legend');

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

var _tooltip = __webpack_require__(1);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(2);

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

var _tooltip = __webpack_require__(1);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(2);

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

var _tooltip = __webpack_require__(1);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNiMjA2NDEwN2Y1N2UwNGM4OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJkMyIsInNlbGVjdCIsIm9wdGlvbnMiLCJub2RlIiwicGFyZW50Tm9kZSIsIlRvb2x0aXAiLCJ0b29sdGlwIiwiU1ZHUGFyZW50IiwiYXBwZW5kIiwiY2xhc3NlZCIsInN0eWxlIiwib2JqZWN0IiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiYXR0ciIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzZWxlY3RBbGwiLCJ0YWJsZSIsImtleXMiLCJtYXAiLCJrZXkiLCJyb3ciLCJ0ZXh0IiwicmVtb3ZlIiwiQ2hhcnQiLCJqc29uIiwiY2FudmFzIiwiY2hhcnQiLCJlbGVtZW50IiwidHlwZSIsInNldFRpbWVvdXQiLCJ6b29tVG9GaXQiLCJtYXgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsIngiLCJ0cmFuc2Zvcm0iLCJ6b29tVHJhbnNmb3JtIiwidHJhbnNsYXRlIiwibGVmdCIsInRvcCIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIklEVXRpbHMiLCJjYW52YXNJZCIsIm9iamVjdElkIiwibWVudUlkIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiaW5mbyIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImRhdGEiLCJlbnRlciIsInRpdGxlIiwiaHRtbCIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZSIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJyZXF1aXJlZEFyZ3MiLCJtb2RhbCIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvckVhY2giLCJlIiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsIkNhbnZhcyIsInBhcmVudCIsImdldENhbnZhc0lkIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJib3VuZHMiLCJnZXRCQm94IiwiZnVsbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJmdWxsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5Iiwic2NhbGUiLCJNYXRoIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1cGRhdGVab29tIiwiem9vbUlkZW50aXR5IiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwiQmFzZSIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiTW9kYWwiLCJzZWxmIiwibW9kYWxJZCIsImdldFdpbmRvd0lkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJuYW1lIiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJjb250ZXh0TWVudSIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidCIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaXplIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlQ29sbGlkZSIsImZvcmNlQ2VudGVyIiwibGlua0dyb3VwIiwibGluayIsImV4aXQiLCJzb3VyY2UiLCJtZXJnZSIsIm5vZGVHcm91cCIsInN5bWJvbCIsImdldFN5bWJvbCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJleGVjdXRlQ2FsbGJhY2siLCJjb25uZWN0ZWROb2RlcyIsImxhYmVsR3JvdXAiLCJsYWJlbCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwic29ydCIsImEiLCJiIiwiY29sb3JzIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0Iiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJDb250ZXh0TWVudSIsIkJhckNoYXJ0IiwiYXhpcyIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNsaWNlIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFBS0MsTUFBTCxLQUFnQkMsU0FBaEIsSUFBNkIsT0FBTyxNQUFLRCxNQUFaLEtBQXVCLFVBQXhELEVBQW9FO0FBQ2xFLFlBQU0sSUFB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TCxhQUFhaUIsS0FBYixFQUFoQyxDQUFiOztBQUVBN0QsYUFBT2hCLElBQVAsR0FBY2hFLFVBQWQsQ0FBeUJpRCxDQUF6QixFQUE0QjdKLE1BQTVCOztBQUVBNEwsZUFBU0EsT0FBTzlJLEtBQVAsR0FDTmhFLE1BRE0sQ0FDQyxHQURELEVBRU5PLElBRk0sQ0FFRCxXQUZDLEVBRVksVUFBQzhELENBQUQsRUFBSXRDLENBQUo7QUFBQSxnQ0FBeUJBLElBQUksRUFBN0I7QUFBQSxPQUZaLEVBR05pSyxLQUhNLENBR0FjLE1BSEEsQ0FBVDs7QUFLQUEsYUFBTzlNLE1BQVAsQ0FBYyxNQUFkLEVBQ0dPLElBREgsQ0FDUSxHQURSLEVBQ2FvRyxRQUFRLEVBRHJCLEVBRUdwRyxJQUZILENBRVEsT0FGUixFQUVpQixFQUZqQixFQUdHQSxJQUhILENBR1EsUUFIUixFQUdrQixFQUhsQixFQUlHTCxLQUpILENBSVMsTUFKVCxFQUlpQixVQUFDbUUsQ0FBRCxFQUFJdEMsQ0FBSjtBQUFBLGVBQVUsZ0JBQU1tTCxNQUFOLENBQWFuTCxJQUFJLENBQWpCLENBQVY7QUFBQSxPQUpqQjs7QUFNQStLLGFBQU85TSxNQUFQLENBQWMsTUFBZCxFQUNHTyxJQURILENBQ1EsR0FEUixFQUNhb0csUUFBUSxFQURyQixFQUVHcEcsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHTCxLQUpILENBSVMsYUFKVCxFQUl3QixLQUp4QixFQUtHZSxJQUxILENBS1E7QUFBQSxlQUFLb0QsQ0FBTDtBQUFBLE9BTFI7QUFNRDs7Ozs7O2tCQS9Ka0IyTSxZIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlM2IyMDY0MTA3ZjU3ZTA0Yzg5ZSIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5ub2RlKCkucGFyZW50Tm9kZSk7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLlNWR1BhcmVudC5zZWxlY3QoJ2ZvcmVpZ25PYmplY3QudG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy50b29sdGlwLm5vZGUoKSkge1xuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgLmNsYXNzZWQoJ3Rvb2x0aXAtaG9sZGVyJywgdHJ1ZSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBtZW51cyBhcmUgcHJlc2VudFxuICAgIGlmICghb2JqZWN0IHx8ICFPYmplY3QudmFsdWVzKG9iamVjdCkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm90aGluZyB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b29sdGlwLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC5vZmZzZXRYICsgNX0sJHtkMy5ldmVudC5vZmZzZXRZICsgNX0pYCk7XG5cbiAgICAvL2QzLnNlbGVjdChkMy5ldmVudC5zcmNFbGVtZW50KS5hdHRyKCd0cmFuc2Zvcm0nKVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YWJsZSA9IHRoaXMudG9vbHRpcC5hcHBlbmQoJ3hodG1sOmRpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChrZXkpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KG9iamVjdFtrZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vY2hhcnQtbGluZSc7XG5pbXBvcnQgU2NhdHRlckNoYXJ0IGZyb20gJy4vY2hhcnQtc2NhdHRlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKGpzb24uY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2NhdHRlclwiOlxuICAgICAgICBlbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY2hhcnQgdHlwZSBbJHtqc29uLmNhbnZhcy5jaGFydC50eXBlfV0gaXMgbm90IGltcGxlbWVudGVkIWApO1xuICAgIH1cblxuICAgIC8vIGRlbGF5IHRoZSB6b29tIHRvIGZpdFxuICAgIHNldFRpbWVvdXQodGhpcy5vcHRpb25zLmFwcGVuZFRvLnpvb21Ub0ZpdCwgMTAwMCk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICBzdGF0aWMgem9vbVRvRml0KGVsZW1lbnQpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gZDMuem9vbVRyYW5zZm9ybShlbGVtZW50Lm5vZGUoKSk7XG4gICAgdHJhbnNmb3JtLnRyYW5zbGF0ZShlbGVtZW50LmxlZnQsIGVsZW1lbnQudG9wKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykuZXhlY3V0ZShkKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgdmFyIHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGFsLnJlbmRlcihjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGNvbmZpZy5jYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tICcuL3V0aWwvanNvbi11dGlscyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vcmVuZGVyL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9yZW5kZXIvbWVudS1tYWluJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL3JlbmRlci9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9yZW5kZXIvY2hhcnQnO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tICcuL3RyYWNrZXIvY2hhbmdlJztcblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC4yLjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kucmVuZGVyKGpzb24pO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChtZW51KTtcbiAgICAgIGNhbnZhcy5hZGQoZ3JhcGgpO1xuICAgICAgY2FudmFzLmFkZChjaGFydCk7XG4gICAgICB2YXIgZWxlbWVudCA9IGNhbnZhcy5yZW5kZXIoanNvbik7XG4gICAgICBBTExfQ0FOVkFTW2pzb24uY2FudmFzLmlkXSA9IGVsZW1lbnQ7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICBjYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gYWRqdXN0IHRvcCBtZW51IG9uIHJlc2l6ZVxuICAgIGQzLnNlbGVjdEFsbCgnZm9yZWlnbk9iamVjdC5mcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKTtcbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vL0ZJWE1FIGltcGxlbWVudCBwcm9wcGVyIHpvb20gdG8gZml0LCBzZWUgaHR0cHM6Ly9ibC5vY2tzLm9yZy9pYW1rZXZpbnYvMGEyNGU5MTI2Y2QyZmE2YjI4M2M2ZjJkNzc0YjY5YTJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICAgIC8vdmFyIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBmcmFuY3ktY2FudmFzJyk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgY2FudmFzLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTsgLy8uc2NhbGVFeHRlbnQoWzEsIDhdKTtcblxuICAgIHZhciBjb250ZW50ID0gY2FudmFzLnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTsgLy8udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGNhbnZhcy5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgY2FudmFzLnpvb21Ub0ZpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgdmFyIGZ1bGxXaWR0aCA9IGNhbnZhcy5ub2RlKCkuY2xpZW50V2lkdGgsXG4gICAgICAgIGZ1bGxIZWlnaHQgPSBjYW52YXMubm9kZSgpLmNsaWVudEhlaWdodDtcblxuICAgICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICB2YXIgc2NhbGUgPSAoMC43NSkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KSBzY2FsZSgke3NjYWxlfSlgKVxuICAgICAgICAub24oJ2VuZCcsIHVwZGF0ZVpvb20oW3RyYW5zbGF0ZVgsIHRyYW5zbGF0ZVldLCBzY2FsZSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZSwgc2NhbGUpIHtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwwKWApXG4gICAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicsIHRydWUpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgICAgICAuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICBtZW51ID0gbWVudS5hcHBlbmQoJ3hodG1sOnVsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLnRpdGxlKSB7XG4gICAgICBtZW51LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHBhcmVudC56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyBmb3ImbmJzcDsnKS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGpzb24udGl0bGUpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBncmFwaCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5ncmFwaCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIEdyYXBoIHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL3ZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCgtNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIGlmIChqc29uLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogKGQuc2l6ZSAqIDUpKS5zdHJlbmd0aCgxKTtcbiAgICB9XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpLnN0cmVuZ3RoKDAuMDAxKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC0yNTApKVxuICAgICAgLmZvcmNlKCdjb2xsaWRlJywgZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplKSlcbiAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSlcbiAgICAgIC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSk7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5mcmFuY3ktbGluaycpLmRhdGEoY2FudmFzTGlua3MpO1xuXG4gICAgbGluay5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAubWVyZ2Uobm9kZSk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVscycpO1xuXG4gICAgaWYgKCFsYWJlbEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGFiZWxHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGFiZWwgPSBsYWJlbC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5tZXJnZShsYWJlbCk7XG5cbiAgICBsYWJlbFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gcGFyZW50LnNlbGVjdEFsbCgnLmxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gcGFyZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydCgoYSwgYikgPT4gYS5sYXllciA+IGIubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2R9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgkezEwfSwkeyhpICsgNSkgKiAxMn0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplICogZC50aXRsZS5sZW5ndGggKiAyKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUgKiAyKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuOSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMTsgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXM7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogZC5zaXplICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5leGVjdXRlKHsgY2FsbGJhY2s6IGNiIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNvbnRleHRNZW51ID0gdGhpcy5TVkdQYXJlbnQuc2VsZWN0KCdmb3JlaWduT2JqZWN0LmNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5jb250ZXh0TWVudS5ub2RlKCkpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKVxuICAgICAgICAuY2xhc3NlZCgnY29udGV4dC1tZW51LWhvbGRlcicsIHRydWUpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gbWVudXMgYXJlIHByZXNlbnRcbiAgICBpZiAoIW9iamVjdC5tZW51cyB8fCAhT2JqZWN0LnZhbHVlcyhvYmplY3QubWVudXMpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIENvbnRleHRNZW51IHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHRNZW51LmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC5vZmZzZXRYICsgNX0sJHtkMy5ldmVudC5vZmZzZXRZICsgNX0pYCk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmNvbnRleHRNZW51LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmNvbnRleHRNZW51LmFwcGVuZCgneGh0bWw6ZGl2JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG9iamVjdC5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICB0aGlzLmNvbnRleHRNZW51LnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gY2hhcnQgaXMgcHJlc2VudFxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBCYXJDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpLnRyYW5zaXRpb24odCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNikucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpO1xuICAgICAgICAgIHRvb2x0aXAucmVuZGVyKHsgJ0RhdGFzZXQnOiBrZXksICdWYWx1ZSc6IGQgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC50cmFuc2l0aW9uKHQpLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpO1xuXG4gICAgICBiYXIubWVyZ2UoYmFyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gY2hhcnQgaXMgcHJlc2VudFxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBMaW5lQ2hhcnQgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBsaW5lc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KTtcblxuICAgICAgdmFyIGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmxpbmUke2luZGV4fWApLmRhdGEoW2RhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSkudHJhbnNpdGlvbih0KS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsaW5lXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAudHJhbnNpdGlvbih0KS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcblxuICAgICAgbGluZS5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGNoYXJ0IGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gU2NhdHRlckNoYXJ0IHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKSxcbiAgICAgIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCk7XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcicpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXInKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5zY2F0dGVyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKS50cmFuc2l0aW9uKHQpLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAudHJhbnNpdGlvbih0KS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcblxuICAgICAgc2NhdHRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==