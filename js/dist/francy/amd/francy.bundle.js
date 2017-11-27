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
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.HTMLParent.select('svg');
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

    _this.tooltip = _this.SVGParent.select('foreignObject.tooltips');
    // check if the window is already present
    if (!_this.tooltip.node()) {
      _this.tooltip = _this.SVGParent.append('foreignObject').classed('tooltips', true).style('display', 'none');
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render(object) {

      this.tooltip.attr('transform', 'translate(' + d3.event.x + ',' + d3.event.y + ')');

      //d3.select(d3.event.srcElement).attr('transform')

      // check if it exists already
      if (this.tooltip.selectAll('*').node()) {
        return;
      }

      var table = this.tooltip.append('xhtml:div').attr('class', 'francy tooltip').append('div').attr('class', 'francy tooltip').attr('class', 'table').append('div').attr('class', 'francy table-body');
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
      var parent = d3.select(this.options.appendTo).node();
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
        canvas.call(zoom); //.transform, d3.zoomIdentity);
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
        content.attr("transform", d3.event.transform);
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

    _this.contextMenu = _this.SVGParent.select('foreignObject.context-menus');
    // check if the window is already present
    if (!_this.contextMenu.node()) {
      _this.contextMenu = _this.SVGParent.append('foreignObject').classed('context-menus', true).style('display', 'none');
    }
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render(object) {
      var _this2 = this;

      this.contextMenu.attr('transform', 'translate(' + d3.event.x + ',' + d3.event.y + ')');

      // check if it exists already
      if (this.contextMenu.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.contextMenu.append('xhtml:div').append('div').attr('class', 'francy context-menu').append('ul');
      var menusIterator = this.iterator(Object.values(object.menus));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjM5MjhjYjk5NDBmOWViYjQxZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZDMiLCJzZWxlY3QiLCJvcHRpb25zIiwibm9kZSIsInBhcmVudE5vZGUiLCJIVE1MUGFyZW50IiwiSURVdGlscyIsImNhbnZhc0lkIiwib2JqZWN0SWQiLCJtZW51SWQiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJwYXJlbnQiLCJqc29uIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiaW5mbyIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFwcGVuZCIsImFjdGlvbiIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImF0dHIiLCJ0aXRsZSIsImh0bWwiLCJjYWxsYmFjayIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsIm9uIiwiZCIsImV4ZWN1dGUiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiVG9vbHRpcCIsInRvb2x0aXAiLCJTVkdQYXJlbnQiLCJjbGFzc2VkIiwic3R5bGUiLCJvYmplY3QiLCJldmVudCIsIngiLCJ5IiwidGFibGUiLCJrZXlzIiwibWFwIiwia2V5Iiwicm93IiwidGV4dCIsInJlbW92ZSIsIkNoYXJ0IiwiY2FudmFzIiwiY2hhcnQiLCJ0eXBlIiwibWF4IiwiQXJyYXkiLCJmcm9tIiwiXyIsImkiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwiem9vbVRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsImxlZnQiLCJ0b3AiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJ3aW5kb3ciLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJleHBvcnRzIiwiZSIsIkpzb25VdGlscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwianNvblJlZ2V4IiwibWF0Y2giLCJleGVjIiwiYWdlbnQiLCJXaW5kb3ciLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiaWQiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsInpvb21lZCIsImNhbGwiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiQ2FsbGJhY2tIYW5kbGVyIiwiY29uZmlnIiwicmVxdWlyZWRBcmdzIiwibW9kYWwiLCJNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJuYW1lIiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNvcnQiLCJhIiwiYiIsImNvbG9ycyIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsIk1hdGgiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJDb250ZXh0TWVudSIsImNvbnRleHRNZW51IiwiQmFyQ2hhcnQiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJyaWdodCIsImJvdHRvbSIsInNjYWxlQmFuZCIsInJhbmdlIiwic2NhbGVMaW5lYXIiLCJ0bXAiLCJjb25jYXQiLCJkb21haW5SYW5nZSIsImJhcnNHcm91cCIsImJhciIsImJhbmR3aWR0aCIsInhBeGlzR3JvdXAiLCJheGlzQm90dG9tIiwieUF4aXNHcm91cCIsImF4aXNMZWZ0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtB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akI7O0FBTUFrSCxhQUFPaEssTUFBUCxDQUFjLE1BQWQsRUFDR0ssSUFESCxDQUNRLEdBRFIsRUFDYThFLFFBQVEsRUFEckIsRUFFRzlFLElBRkgsQ0FFUSxHQUZSLEVBRWEsQ0FGYixFQUdHQSxJQUhILENBR1EsSUFIUixFQUdjLE9BSGQsRUFJR3FCLEtBSkgsQ0FJUyxhQUpULEVBSXdCLEtBSnhCLEVBS0dVLElBTEgsQ0FLUTtBQUFBLGVBQUt2QixDQUFMO0FBQUEsT0FMUjtBQU1EOzs7Ozs7a0JBcEprQjRMLFEiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIzOTI4Y2I5OTQwZjllYmI0MWYzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLm5vZGUoKS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ3N2ZycpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmV4ZWN1dGUoZCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuc2VsZWN0KCdmb3JlaWduT2JqZWN0LnRvb2x0aXBzJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMudG9vbHRpcC5ub2RlKCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCd0b29sdGlwcycsIHRydWUpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICB0aGlzLnRvb2x0aXAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lnh9LCR7ZDMuZXZlbnQueX0pYCk7XG5cbiAgICAvL2QzLnNlbGVjdChkMy5ldmVudC5zcmNFbGVtZW50KS5hdHRyKCd0cmFuc2Zvcm0nKVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YWJsZSA9IHRoaXMudG9vbHRpcC5hcHBlbmQoJ3hodG1sOmRpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0b29sdGlwJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICd0YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWJvZHknKTtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1jZWxsJykudGV4dChrZXkpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWNlbGwnKS50ZXh0KG9iamVjdFtrZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGpzb24uY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgcmV0dXJuIG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oJ05vdCBpbXBsZW1lbnRlZCB5ZXQhJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNoYXJ0IHR5cGUgWyR7anNvbi5jYW52YXMuY2hhcnQudHlwZX1dIGlzIG5vdCBpbXBsZW1lbnRlZCFgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbiAgc3RhdGljIHpvb21Ub0ZpdChlbGVtZW50KSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oZWxlbWVudC5ub2RlKCkpO1xuICAgIHRyYW5zZm9ybS50cmFuc2xhdGUoZWxlbWVudC5sZWZ0LCBlbGVtZW50LnRvcCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi91dGlsL2pzb24tdXRpbHMnO1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuL3JlbmRlci93aW5kb3cnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL3JlbmRlci9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vcmVuZGVyL21lbnUtbWFpbic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9yZW5kZXIvZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vcmVuZGVyL2NoYXJ0Jztcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuMi4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LnJlbmRlcihqc29uKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgYSBqc29uIHN0cmluZy9vYmplY3QgcmVuZGVyXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIHJlbmRlcihpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHZhciB3aW5kb3cgPSBuZXcgV2luZG93KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKGdyYXBoKTtcbiAgICAgIGNhbnZhcy5hZGQoY2hhcnQpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdChgIyR7d2luZG93SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpIC8vLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCBbJHt3aW5kb3dJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBXaW5kb3cgdXBkYXRlZCBbJHt3aW5kb3dJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHdpbmRvdywganNvbik7XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvd2luZG93LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZSh7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLy9GSVhNRSBpbXBsZW1lbnQgcHJvcHBlciB6b29tIHRvIGZpdCwgc2VlIGh0dHBzOi8vYmwub2Nrcy5vcmcvaWFta2V2aW52LzBhMjRlOTEyNmNkMmZhNmIyODNjNmYyZDc3NGI2OWEyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5ub2RlKCk7XG4gICAgLy92YXIgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBwYXJlbnQuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdmFyIHpvb20gPSBkMy56b29tKCk7IC8vLnNjYWxlRXh0ZW50KFsxLCA4XSk7XG5cbiAgICB2YXIgY29udGVudCA9IGNhbnZhcy5zZWxlY3QoJ2cuY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgY2FudmFzLmNhbGwoem9vbSk7IC8vLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTtcbiAgICB9XG5cbiAgICBjYW52YXMub24oXCJjbGlja1wiLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIC8qXG4gICAgICAgICB0aGlzLnpvb21Ub0ZpdCA9IGNsaWNrZWQ7XG5cbiAgICAgICAgIGZ1bmN0aW9uIGNsaWNrZWQoKSB7XG4gICAgICAgICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7IHJldHVybiB6b29tUmVzZXQoKTsgfVxuICAgICAgICAgICBhY3RpdmUuY2xhc3NlZChcImFjdGl2ZVwiLCBmYWxzZSk7XG4gICAgICAgICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiYWN0aXZlXCIsIHRydWUpO1xuXG4gICAgICAgICAgIHZhciBkeCA9IHRoaXMuZ2V0QkJveCgpLndpZHRoLFxuICAgICAgICAgICAgIGR5ID0gdGhpcy5nZXRCQm94KCkuaGVpZ2h0LFxuICAgICAgICAgICAgIHNjYWxlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oOCwgMC45IC8gTWF0aC5tYXgoZHggLyBqc29uLmNhbnZhcy53aWR0aCwgZHkgLyBqc29uLmNhbnZhcy5oZWlnaHQpKSksXG4gICAgICAgICAgICAgdHJhbnNsYXRlID0gW2pzb24uY2FudmFzLndpZHRoIC8gMiAtIHNjYWxlLCBqc29uLmNhbnZhcy5oZWlnaHQgLyAyIC0gc2NhbGVdO1xuXG4gICAgICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmdW5jdGlvbiB6b29tUmVzZXQoKSB7XG4gICAgICAgICAgIGFjdGl2ZS5jbGFzc2VkKFwiYWN0aXZlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAgICAgIH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgLy90aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgndWwnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnbWFpbi1tZW51JykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIG1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMudGl0bGUpIHtcbiAgICAgIG1lbnUuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ3RpdGxlJykuYXBwZW5kKCdhJykuaHRtbChqc29uLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dnZXIuaW5mbygnU2F2ZSB0byBQTkcgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdBYm91dCBGcmFuY3kgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhJykpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5vcHRpb25zKTtcbiAgICAgIHJldHVybiBtb2RhbC5yZW5kZXIoY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihjb25maWcuY2FsbGJhY2spO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBtb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzIGZvciZuYnNwOycpLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoanNvbi50aXRsZSk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICd0YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB0YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdhcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5hcmcnKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3kgLm92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3kgLm1vZGFsJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkICR7bW9kYWxJZH0uLi5gKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgaWYgKCFqc29uLmNhbnZhcy5ncmFwaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmNvbnRlbnQnKSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDUwMCk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKC01MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWSg1MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiAoZC5zaXplICogNSkpLnN0cmVuZ3RoKDEpO1xuICAgIH1cblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkuc3RyZW5ndGgoMC4wMDEpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTI1MCkpXG4gICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUpKVxuICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsaW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5saW5rJykuZGF0YShjYW52YXNMaW5rcyk7XG5cbiAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLm1lcmdlKGxpbmspO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLm5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlcycpO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgY29udGV4dCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAubWVyZ2Uobm9kZSk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGQgPT4gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucykucmVuZGVyKGQpKVxuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcbiAgICAvLy5vbignY2xpY2snLCB6b29tVG9GaXQpO1xuICAgIC8vLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkgeyBhbGVydCgnOiknKTsgfSk7XG5cbiAgICAvLyBUT0RPIHRoaXMgY291bGQgYmUgYSB0b29sdGlwIHRhZyBmcm9tIGpzb25cbiAgICBub2RlXG4gICAgICAub24oXCJtb3VzZW1vdmVcIiwgZCA9PiB0b29sdGlwLnJlbmRlcih7ICdJRCc6IGQuaWQsICdWYWx1ZSc6IGQubGF5ZXIgfSkpXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB0b29sdGlwLnVucmVuZGVyKCkpO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGFiZWxzJyk7XG5cbiAgICBpZiAoIWxhYmVsR3JvdXAubm9kZSgpKSB7XG4gICAgICBsYWJlbEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5tZXJnZShsYWJlbCk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLnNvcnQoKGEsIGIpID0+IGEubGF5ZXIgPiBiLmxheWVyKSwgZCA9PiBkLmlkKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDEwO1xuICAgICAgICBsZXQgeSA9IChpICsgMSkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgc2ltdWxhdGlvbi5hbHBoYSgxKS5yZXN0YXJ0KCk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUgKiBkLnRpdGxlLmxlbmd0aCAqIDIpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIDIpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC45KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxOyAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlcztcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiBkLnNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5zZWxlY3QoJ2ZvcmVpZ25PYmplY3QuY29udGV4dC1tZW51cycpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmNvbnRleHRNZW51Lm5vZGUoKSkge1xuICAgICAgdGhpcy5jb250ZXh0TWVudSA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdjb250ZXh0LW1lbnVzJywgdHJ1ZSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIHRoaXMuY29udGV4dE1lbnUuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lnh9LCR7ZDMuZXZlbnQueX0pYCk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuY29udGV4dE1lbnUuYXBwZW5kKCd4aHRtbDpkaXYnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBjb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIGlmICghanNvbi5jYW52YXMuY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgLy8gVE9ETyB0aGlzIHNob3VsZCB6b29tIHRvIGZpdFxuICAgIHZhciB0cmFuc2Zvcm0gPSBkMy56b29tVHJhbnNmb3JtKHN2Zy5ub2RlKCkpO1xuICAgIHRyYW5zZm9ybS54ID0gbWFyZ2luLmxlZnQ7XG4gICAgdHJhbnNmb3JtLnkgPSBtYXJnaW4udG9wO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2JhcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmJhciR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGJhciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm1lcmdlKGJhcilcbiAgICAgICAgLm9uKFwibW91c2Vtb3ZlXCIsIGQgPT4gdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKCkgPT4gdG9vbHRpcC51bnJlbmRlcigpKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy54LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAneC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy55LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAneS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==