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

var _base = __webpack_require__(10);

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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(13);

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
/* 5 */
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

    _this.tooltip = d3.selectAll('div.francy.tooltip');
    // check if the window is already present
    if (!_this.tooltip.node()) {
      _this.tooltip = _this.HTMLParent.append('div').attr('class', 'francy tooltip').style('display', 'none');
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render(object) {

      this.tooltip.style('left', d3.event.pageX + 20 + 'px').style('top', d3.event.pageY + 'px');

      // check if it exists already
      if (this.tooltip.selectAll('*').node()) {
        return;
      }

      var table = this.tooltip.append('div').attr('class', 'table').append('div').attr('class', 'francy table-body');
      Object.keys(object).map(function (key) {
        var row = table.append('div').attr('class', 'francy table-row');
        row.append('div').attr('class', 'francy table-cell').text(key);
        row.append('div').attr('class', 'francy table-cell').text(object[key]);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(17);

var _chartBar2 = _interopRequireDefault(_chartBar);

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

      switch (json.canvas.chart.type) {
        case "bar":
          return new _chartBar2.default(this.options).render(json);
        case "line":
          this.logger.info('Not implemented yet!');
          break;
        default:
          throw new TypeError('The chart type [' + json.canvas.chart.type + '] is not implemented!');
      }
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(8);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _window = __webpack_require__(9);

var _window2 = _interopRequireDefault(_window);

var _canvas = __webpack_require__(11);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(12);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = __webpack_require__(15);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(6);

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
        var menu = new _menuMain2.default(this.options);
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
        window = d3.select(this.options.appendTo).append('div') //.remove()
        .attr('id', windowId).attr('class', 'francy window');
      }

      // cannot continue if window is not present
      if (!window.node()) {
        throw new Error('Oops, could not create window with id [' + windowId + ']... Cannot proceed.');
      }

      this.logger.debug('Window updated [' + windowId + ']...');

      this.renderChildren(window, json);

      return window;
    }
  }]);

  return Window;
}(_composite2.default);

exports.default = Window;

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
/* 11 */
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
      var parent = this.options.appendTo;
      //var active = d3.select(null);
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

      var zoom = d3.zoom(); //.scaleExtent([1, 8]);

      var content = canvas.select('g.content');

      if (!content.node()) {
        content = canvas.append('g').attr('class', 'content');
        zoom.on("zoom", zoomed);
        canvas.call(zoom);
      }

      canvas.on("click", stopped, true);

      /*
          this.zoomToFit = clicked;
           function clicked() {
            if (active.node() === this) { return zoomReset(); }
            active.classed("active", false);
            active = d3.select(this).classed("active", true);
             var dx = this.getBBox().width,
              dy = this.getBBox().height,
              scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / json.canvas.width, dy / json.canvas.height))),
              translate = [json.canvas.width / 2 - scale, json.canvas.height / 2 - scale];
             canvas.transition()
              .duration(750)
              .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
          }
           function zoomReset() {
            active.classed("active", false);
            active = d3.select(null);
            canvas.transition()
              .duration(750)
              .call(zoom.transform, d3.zoomIdentity); // updated for d3 v4
          }
      */
      function zoomed() {
        content.style("stroke-width", 1.5 / d3.event.transform.k + "px").attr("transform", d3.event.transform);
      }

      function stopped() {
        if (d3.event.defaultPrevented) {
          d3.event.stopPropagation();
        }
      }

      this.logger.debug('Canvas updated [' + canvasId + ']...');

      //this.canvas = canvas;

      this.renderChildren(canvas, json);

      return canvas;
    }
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(4);

var _menu2 = _interopRequireDefault(_menu);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

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
        menu = parent.append('ul').attr('class', 'main-menu').attr('id', menuId);
      }

      // force rebuild menu again
      menu.selectAll('*').remove();

      if (json.canvas.title) {
        menu.append('li').attr('class', 'title').append('a').html(json.canvas.title);
      }

      var entry = menu.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
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

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _modal = __webpack_require__(14);

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
/* 14 */
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
      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', modalId).attr('class', 'francy modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'header');

      header.append('span').html('Required arguments for&nbsp;').append('span').attr('style', 'font-weight: bold;').text(json.title);

      var content = form.append('div').attr('class', 'content').append('div').attr('class', 'table').append('div').attr('class', 'francy table-body');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          var row = content.append('div').attr('class', 'francy table-row');
          row.append('div').attr('class', 'francy table-cell').append('label').attr('for', arg.id).text(arg.title);
          row.append('div').attr('class', 'francy table-cell').append('input').attr('id', arg.id).attr('class', 'arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _menuContext = __webpack_require__(16);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(5);

var _tooltip2 = _interopRequireDefault(_tooltip);

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
      var _this2 = this;

      if (!json.canvas.graph) {
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.content'),
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
      })).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2));

      var linkGroup = svg.selectAll('g.links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'links');
      }

      var link = linkGroup.selectAll('line.link').data(canvasLinks);

      link.exit().transition(t).remove();

      link = link.enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).merge(link);

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
        return 'node' + (d.highlight ? ' highlight' : '') + (Object.values(d.menus).length ? ' context' : '');
      }).attr('id', function (d) {
        return d.id;
      }).merge(node);

      node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)).on('contextmenu', function (d) {
        return new _menuContext2.default(_this2.options).render(d);
      }).on('click', connectedNodes);
      //.on('click', zoomToFit);
      //.on('click', function() { alert(':)'); });

      // TODO this could be a tooltip tag from json
      node.on("mousemove", function (d) {
        return tooltip.render({ 'ID': d.id, 'Value': d.layer });
      }).on("mouseout", function () {
        return tooltip.unrender();
      });

      var labelGroup = svg.selectAll('.labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().transition(t).remove();

      label = label.enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      }).merge(label);

      var legendGroup = parent.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = parent.append('g').attr('class', 'legend');
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
        var x = 10;
        var y = (i + 1) * 11;
        return 'translate(' + x + ',' + y + ')';
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(4);

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

    _this.contextMenu = d3.selectAll('div.francy.context-menu');
    // check if the window is already present
    if (!_this.contextMenu.node()) {
      _this.contextMenu = _this.HTMLParent.append('div').attr('class', 'francy context-menu').style('display', 'none');
    }
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render(json) {
      var _this2 = this;

      this.contextMenu.style('left', d3.event.pageX - 2 + 'px').style('top', d3.event.pageY - 2 + 'px');

      // check if it exists already
      if (this.contextMenu.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.contextMenu.append('ul');
      var menusIterator = this.iterator(Object.values(json.menus));
      this.traverse(menu, menusIterator);

      // show the context menu
      this.contextMenu.style('display', 'block');

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(5);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(6);

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

      if (!json.canvas.chart) {
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.content'),
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

      // TODO this should zoom to fit
      var transform = d3.zoomTransform(svg.node());
      transform.x = margin.left;
      transform.y = margin.top;

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

      var barsGroup = svg.selectAll('g.bars');

      if (!barsGroup.node()) {
        barsGroup = svg.append('g').attr('class', 'bars');
      }

      datasetNames.forEach(function (key, index) {
        var bar = barsGroup.selectAll('.bar' + index).data(datasets[key]);

        bar.exit().transition(t).remove();

        // append the rectangles for the bar chart
        bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'bar' + index).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        }).merge(bar).on("mousemove", function (d) {
          return tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          return tooltip.unrender();
        });
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'legend');
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

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjZhOWNlMmM4N2E5ZDQ4OWZjNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZDMiLCJzZWxlY3QiLCJvcHRpb25zIiwibm9kZSIsInBhcmVudE5vZGUiLCJJRFV0aWxzIiwiY2FudmFzSWQiLCJvYmplY3RJZCIsIm1lbnVJZCIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInBhcmVudCIsImpzb24iLCJjaGlsZHJlbk9wdGlvbnMiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYXBwZW5kIiwiYWN0aW9uIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXR0ciIsInRpdGxlIiwiaHRtbCIsImNhbGxiYWNrIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwib24iLCJkIiwiZXhlY3V0ZSIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJUb29sdGlwIiwidG9vbHRpcCIsIkhUTUxQYXJlbnQiLCJzdHlsZSIsIm9iamVjdCIsImV2ZW50IiwicGFnZVgiLCJwYWdlWSIsInRhYmxlIiwia2V5cyIsIm1hcCIsImtleSIsInJvdyIsInRleHQiLCJyZW1vdmUiLCJDaGFydCIsImNhbnZhcyIsImNoYXJ0IiwidHlwZSIsIm1heCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwieCIsImVsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJ6b29tVHJhbnNmb3JtIiwidHJhbnNsYXRlIiwibGVmdCIsInRvcCIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkZyYW5jeSIsIkVycm9yIiwiaW5wdXQiLCJwYXJzZSIsIndpbmRvdyIsIm1lbnUiLCJncmFwaCIsImFkZCIsImV4cG9ydHMiLCJlIiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsIldpbmRvdyIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCJpZCIsInJlbmRlckNoaWxkcmVuIiwiQmFzZSIsIkNhbnZhcyIsImdldENhbnZhc0lkIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJrIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiQ2FsbGJhY2tIYW5kbGVyIiwiY29uZmlnIiwicmVxdWlyZWRBcmdzIiwibW9kYWwiLCJNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJuYW1lIiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNvcnQiLCJhIiwiYiIsInkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudSIsIkJhckNoYXJ0IiwiYXhpcyIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFD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LEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHb0IsS0FKSCxDQUlTLGFBSlQsRUFJd0IsS0FKeEIsRUFLR1UsSUFMSCxDQUtRO0FBQUEsZUFBS3RCLENBQUw7QUFBQSxPQUxSO0FBTUQ7Ozs7OztrQkFwSmtCOEwsUSIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjZhOWNlMmM4N2E5ZDQ4OWZjNjYiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoanNvbildIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8ubm9kZSgpLnBhcmVudE5vZGUpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmV4ZWN1dGUoZCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy50b29sdGlwID0gZDMuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LnRvb2x0aXAnKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy50b29sdGlwLm5vZGUoKSkge1xuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRvb2x0aXAnKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG9iamVjdCkge1xuXG4gICAgdGhpcy50b29sdGlwXG4gICAgICAuc3R5bGUoJ2xlZnQnLCBkMy5ldmVudC5wYWdlWCArIDIwICsgJ3B4JylcbiAgICAgIC5zdHlsZSgndG9wJywgZDMuZXZlbnQucGFnZVkgKyAncHgnKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLnRvb2x0aXAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICd0YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWJvZHknKTtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1jZWxsJykudGV4dChrZXkpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWNlbGwnKS50ZXh0KG9iamVjdFtrZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGpzb24uY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgcmV0dXJuIG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ05vdCBpbXBsZW1lbnRlZCB5ZXQhJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNoYXJ0IHR5cGUgWyR7anNvbi5jYW52YXMuY2hhcnQudHlwZX1dIGlzIG5vdCBpbXBsZW1lbnRlZCFgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbiAgc3RhdGljIHpvb21Ub0ZpdChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oZWxlbWVudC5ub2RlKCkpO1xuICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoZWxlbWVudC5sZWZ0LCBlbGVtZW50LnRvcCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi91dGlsL2pzb24tdXRpbHMnO1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuL3JlbmRlci93aW5kb3cnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL3JlbmRlci9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vcmVuZGVyL21lbnUtbWFpbic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9yZW5kZXIvZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vcmVuZGVyL2NoYXJ0Jztcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuMi4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LnJlbmRlcihqc29uKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgYSBqc29uIHN0cmluZy9vYmplY3QgcmVuZGVyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIHJlbmRlcihpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHZhciB3aW5kb3cgPSBuZXcgV2luZG93KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKGdyYXBoKTtcbiAgICAgIGNhbnZhcy5hZGQoY2hhcnQpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdChgIyR7d2luZG93SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpIC8vLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCBbJHt3aW5kb3dJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBXaW5kb3cgdXBkYXRlZCBbJHt3aW5kb3dJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHdpbmRvdywganNvbik7XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvd2luZG93LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZSh7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLy9GSVhNRSBpbXBsZW1lbnQgcHJvcHBlciB6b29tIHRvIGZpdCwgc2VlIGh0dHBzOi8vYmwub2Nrcy5vcmcvaWFta2V2aW52LzBhMjRlOTEyNmNkMmZhNmIyODNjNmYyZDc3NGI2OWEyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgLy92YXIgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBwYXJlbnQuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdmFyIHpvb20gPSBkMy56b29tKCk7IC8vLnNjYWxlRXh0ZW50KFsxLCA4XSk7XG5cbiAgICB2YXIgY29udGVudCA9IGNhbnZhcy5zZWxlY3QoJ2cuY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgY2FudmFzLmNhbGwoem9vbSk7XG4gICAgfVxuXG4gICAgY2FudmFzLm9uKFwiY2xpY2tcIiwgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICAvKlxuICAgICAgICB0aGlzLnpvb21Ub0ZpdCA9IGNsaWNrZWQ7XG5cbiAgICAgICAgZnVuY3Rpb24gY2xpY2tlZCgpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykgeyByZXR1cm4gem9vbVJlc2V0KCk7IH1cbiAgICAgICAgICBhY3RpdmUuY2xhc3NlZChcImFjdGl2ZVwiLCBmYWxzZSk7XG4gICAgICAgICAgYWN0aXZlID0gZDMuc2VsZWN0KHRoaXMpLmNsYXNzZWQoXCJhY3RpdmVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB2YXIgZHggPSB0aGlzLmdldEJCb3goKS53aWR0aCxcbiAgICAgICAgICAgIGR5ID0gdGhpcy5nZXRCQm94KCkuaGVpZ2h0LFxuICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIGpzb24uY2FudmFzLndpZHRoLCBkeSAvIGpzb24uY2FudmFzLmhlaWdodCkpKSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZSA9IFtqc29uLmNhbnZhcy53aWR0aCAvIDIgLSBzY2FsZSwganNvbi5jYW52YXMuaGVpZ2h0IC8gMiAtIHNjYWxlXTtcblxuICAgICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVbMF0sIHRyYW5zbGF0ZVsxXSkuc2NhbGUoc2NhbGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHpvb21SZXNldCgpIHtcbiAgICAgICAgICBhY3RpdmUuY2xhc3NlZChcImFjdGl2ZVwiLCBmYWxzZSk7XG4gICAgICAgICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAgICAgfVxuICAgICovXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxLjUgLyBkMy5ldmVudC50cmFuc2Zvcm0uayArIFwicHhcIikuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICAvL3RoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMsIGpzb24pO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBtZW51SWQgPSBJRFV0aWxzLmdldE1lbnVJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIG1lbnUgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghbWVudS5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSBwYXJlbnQuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtYWluLW1lbnUnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIGlmIChqc29uLmNhbnZhcy50aXRsZSkge1xuICAgICAgbWVudS5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAndGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjb25maWcuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBtb2RhbCA9IG5ldyBNb2RhbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgcmV0dXJuIG1vZGFsLnJlbmRlcihjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGNvbmZpZy5jYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMywgSnVweXRlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYWxsYmFjay5pZCk7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdmFyIG1vZGFsID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ3RhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdGFibGUtYm9keScpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICB2YXIgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2FyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICB0cnkge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmFyZycpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeSAub3ZlcmxheScpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeSAubW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgJHttb2RhbElkfS4uLmApO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmdyYXBoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IGpzb24uY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0ganNvbi5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuY29udGVudCcpLFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoLTUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKDUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIChkLnNpemUgKiA1KSkuc3RyZW5ndGgoMSk7XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKS5zdHJlbmd0aCgwLjAwMSkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMjUwKSlcbiAgICAgIC5mb3JjZSgnY29sbGlkZScsIGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSkpXG4gICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGluay5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLm5vZGUnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBjb250ZXh0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5tZXJnZShub2RlKTtcblxuICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZCA9PiBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKS5yZW5kZXIoZCkpXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuICAgIC8vLm9uKCdjbGljaycsIHpvb21Ub0ZpdCk7XG4gICAgLy8ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7IGFsZXJ0KCc6KScpOyB9KTtcblxuICAgIC8vIFRPRE8gdGhpcyBjb3VsZCBiZSBhIHRvb2x0aXAgdGFnIGZyb20ganNvblxuICAgIG5vZGVcbiAgICAgIC5vbihcIm1vdXNlbW92ZVwiLCBkID0+IHRvb2x0aXAucmVuZGVyKHsgJ0lEJzogZC5pZCwgJ1ZhbHVlJzogZC5sYXllciB9KSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHRvb2x0aXAudW5yZW5kZXIoKSk7XG5cbiAgICB2YXIgbGFiZWxHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5sYWJlbHMnKTtcblxuICAgIGlmICghbGFiZWxHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxhYmVsR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGFiZWwgPSBsYWJlbC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLm1lcmdlKGxhYmVsKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHBhcmVudC5zZWxlY3RBbGwoJy5sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHBhcmVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydCgoYSwgYikgPT4gYS5sYXllciA+IGIubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2R9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMTA7XG4gICAgICAgIGxldCB5ID0gKGkgKyAxKSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIGQudGl0bGUubGVuZ3RoICogMikpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplICogMikpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjkpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDE7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIGQuc2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jb250ZXh0TWVudSA9IGQzLnNlbGVjdEFsbCgnZGl2LmZyYW5jeS5jb250ZXh0LW1lbnUnKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5jb250ZXh0TWVudS5ub2RlKCkpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgY29udGV4dC1tZW51Jykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICB0aGlzLmNvbnRleHRNZW51XG4gICAgICAuc3R5bGUoJ2xlZnQnLCAoZDMuZXZlbnQucGFnZVggLSAyKSArICdweCcpXG4gICAgICAuc3R5bGUoJ3RvcCcsIChkMy5ldmVudC5wYWdlWSAtIDIpICsgJ3B4Jyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuY29udGV4dE1lbnUuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKGpzb24ubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICAvLyBUT0RPIHRoaXMgc2hvdWxkIHpvb20gdG8gZml0XG4gICAgdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oc3ZnLm5vZGUoKSk7XG4gICAgdHJhbnNmb3JtLnggPSBtYXJnaW4ubGVmdDtcbiAgICB0cmFuc2Zvcm0ueSA9IG1hcmdpbi50b3A7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgYmFyJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KVxuICAgICAgICAubWVyZ2UoYmFyKVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZCA9PiB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pKVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB0b29sdGlwLnVucmVuZGVyKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLngtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd4LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLnktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd5LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwic291cmNlUm9vdCI6IiJ9