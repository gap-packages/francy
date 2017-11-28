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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var _callback = __webpack_require__(5);

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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(9);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _window = __webpack_require__(10);

var _window2 = _interopRequireDefault(_window);

var _canvas = __webpack_require__(12);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(13);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = __webpack_require__(15);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(7);

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
/* 9 */
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
/* 10 */
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
        .attr('id', windowId).attr('class', 'francy francy-window');
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
/* 11 */
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
/* 12 */
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
        canvas = parent.append('svg').attr('id', canvasId).attr('class', 'francy-canvas');
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
/* 13 */
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
        menu = parent.append('ul').attr('class', 'francy-main-menu').attr('id', menuId);
      }

      // force rebuild menu again
      menu.selectAll('*').remove();

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

var _tooltip = __webpack_require__(6);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(5);

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
      })).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2));

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

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute the ones that match the event!
            cb.trigger === event && callback.execute({ callback: cb });
          });
        }
      }

      var labelGroup = svg.selectAll('.francy-labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'francy-labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().transition(t).remove();

      label = label.enter().append('text').attr('class', 'francy-label').text(function (d) {
        return d.title;
      }).merge(label);

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
        return 'translate(' + 10 + ',' + (i + 1) * 11 + ')';
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(6);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(7);

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
      //var transform = d3.zoomTransform(svg.node());
      //transform.x = margin.left;
      //transform.y = margin.top;

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
        var bar = barsGroup.selectAll('.bar' + index).data(datasets[key]);

        bar.exit().transition(t).remove();

        // append the rectangles for the bar chart
        bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar' + index).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        }).merge(bar).on("mouseover", function (d) {
          return tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          return tooltip.unrender();
        });
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

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjYxNWJiNWVkMmM5Y2MwNGZjNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZDMiLCJzZWxlY3QiLCJvcHRpb25zIiwibm9kZSIsInBhcmVudE5vZGUiLCJIVE1MUGFyZW50IiwiSURVdGlscyIsImNhbnZhc0lkIiwib2JqZWN0SWQiLCJtZW51SWQiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJwYXJlbnQiLCJqc29uIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiaW5mbyIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFwcGVuZCIsImFjdGlvbiIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImF0dHIiLCJ0aXRsZSIsImh0bWwiLCJjYWxsYmFjayIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsIm9uIiwiZCIsImV4ZWN1dGUiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwiY29uZmlnIiwia2V5cyIsInJlcXVpcmVkQXJncyIsIm1vZGFsIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJTVkdQYXJlbnQiLCJjbGFzc2VkIiwic3R5bGUiLCJvYmplY3QiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGFibGUiLCJtYXAiLCJrZXkiLCJyb3ciLCJ0ZXh0IiwicmVtb3ZlIiwiQ2hhcnQiLCJjYW52YXMiLCJjaGFydCIsInR5cGUiLCJtYXgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsIngiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwiem9vbVRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsImxlZnQiLCJ0b3AiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJ3aW5kb3ciLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJleHBvcnRzIiwiZSIsIkpzb25VdGlscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwianNvblJlZ2V4IiwibWF0Y2giLCJleGVjIiwiYWdlbnQiLCJXaW5kb3ciLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiaWQiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsInpvb21lZCIsImNhbGwiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsIk1haW5NZW51IiwiZ2V0TWVudUlkIiwiTW9kYWwiLCJzZWxmIiwibW9kYWxJZCIsIm92ZXJsYXkiLCJob2xkZXIiLCJmb3JtIiwiaGVhZGVyIiwiYXJnIiwidmFsdWUiLCJvbmNoYW5nZSIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwibmFtZSIsIkdyYXBoIiwic3ltYm9sQ2lyY2xlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwiY29udGV4dE1lbnUiLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZXhlY3V0ZUNhbGxiYWNrIiwiY29ubmVjdGVkTm9kZXMiLCJjYWxsYmFja3MiLCJmb3JFYWNoIiwiY2IiLCJ0cmlnZ2VyIiwibGFiZWxHcm91cCIsImxhYmVsIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzb3J0IiwiYSIsImIiLCJjb2xvcnMiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJ5IiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJCYXJDaGFydCIsImF4aXMiLCJkYXRhc2V0cyIsImRhdGFzZXROYW1lcyIsIm1hcmdpbiIsInJpZ2h0IiwiYm90dG9tIiwic2NhbGVCYW5kIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsInRtcCIsImNvbmNhdCIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFuZHdpZHRoIiwieEF4aXNHcm91cCIsImF4aXNCb3R0b20iLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzbGljZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUNDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG9IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSUMsSUFBSUMsTUFBSixLQUFlTCxRQUFuQixFQUE2QjtBQUMzQixZQUFNLElBQUlNLFNBQUosQ0FBYyxpREFBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtDLE1BQUwsS0FBZ0JDLFNBQWhCLElBQTZCLE9BQU8sTUFBS0QsTUFBWixLQUF1QixVQUF4RCxFQUFvRTtBQUNsRSxZQUFNLElBQUlELFNBQUosQ0FBYyxzQ0FBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtHLFFBQUwsS0FBa0JELFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixxQ0FBbEI7QUFDRDtBQVZ5RDtBQVczRDs7Ozt3QkFFZ0I7QUFDZixhQUFPQyxHQUFHQyxNQUFILENBQVUsS0FBS0MsT0FBTCxDQUFhWixRQUFiLENBQXNCYSxJQUF0QixHQUE2QkMsVUFBdkMsQ0FBUDtBQUNEOzs7d0JBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JKLE1BQWhCLENBQXVCLEtBQXZCLENBQVA7QUFDRDs7Ozs7O2tCQXJCa0JiLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0lBSXFCa0IsTzs7Ozs7Ozs7O0FBRW5COzs7OztnQ0FLbUJDLFEsRUFBVTtBQUMzQiwrQkFBdUJBLFFBQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUttQkEsUSxFQUFVO0FBQzNCLCtCQUF1QkEsUUFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozs7Z0NBS21CQyxRLEVBQVU7QUFDM0IsK0JBQXVCQSxRQUF2QjtBQUNEOztBQUVEOzs7Ozs7Ozs4QkFLaUJDLE0sRUFBUTtBQUN2Qiw2QkFBcUJBLE1BQXJCO0FBQ0Q7Ozs7OztrQkFwQ2tCSCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7OztJQUVxQkksUzs7O0FBRW5CLDJCQUE0RDtBQUFBLDRCQUE5Q3JCLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHNIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSUMsSUFBSUMsTUFBSixLQUFlaUIsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTSxJQUFJaEIsU0FBSixDQUFjLGtEQUFkLENBQU47QUFDRDtBQUNELFVBQUtpQixTQUFMLEdBQWlCLEVBQWpCO0FBTDBEO0FBTTNEOzs7O3dCQUVHQyxRLEVBQVU7QUFDWixXQUFLRCxTQUFMLENBQWVFLElBQWYsQ0FBb0JELFFBQXBCO0FBQ0Q7OzttQ0FFY0UsTSxFQUFRQyxJLEVBQU07QUFDM0I7QUFDQSxVQUFJQyxrQkFBa0IsS0FBS2QsT0FBM0I7QUFDQSxVQUFJWSxNQUFKLEVBQVk7QUFDVkUsd0JBQWdCMUIsUUFBaEIsR0FBMkJ3QixNQUEzQjtBQUNEO0FBQ0Q7QUFOMkI7QUFBQTtBQUFBOztBQUFBO0FBTzNCLDZCQUFxQixLQUFLSCxTQUExQiw4SEFBcUM7QUFBQSxjQUE1QkMsUUFBNEI7O0FBQ25DQSxtQkFBU0ssTUFBVCxDQUFnQkQsZUFBaEIsRUFBaUNyQixNQUFqQyxDQUF3Q29CLElBQXhDO0FBQ0Q7QUFUMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVU1Qjs7Ozs7O2tCQXhCa0JMLFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCLElBQUlRLFlBQVksSUFBaEI7O0FBRUE7Ozs7SUFHcUJDLE07O0FBRW5COzs7OztBQUtBLG9CQUFzQztBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBeEI5QixPQUF3QjtBQUFBLFFBQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUNwQyxRQUFJLENBQUM2QixTQUFMLEVBQWdCO0FBQ2QsV0FBSzdCLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUsrQixPQUFMLEdBQWVBLE9BQWY7QUFDQUYsa0JBQVksSUFBWjtBQUNELEtBSkQsTUFLSztBQUNILGFBQU9BLFNBQVA7QUFDRDtBQUNGOztBQUVEOzs7Ozs7OzswQkFJTUcsTyxFQUFTO0FBQ2IsVUFBSSxLQUFLaEMsT0FBVCxFQUFrQjtBQUNoQixhQUFLK0IsT0FBTCxDQUFhckIsS0FBYixDQUFtQixLQUFLdUIsT0FBTCxDQUFhLE9BQWIsRUFBc0JELE9BQXRCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt5QkFJS0EsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhRyxJQUFiLENBQWtCLEtBQUtELE9BQUwsQ0FBYSxNQUFiLEVBQXFCRCxPQUFyQixDQUFsQjtBQUNEOztBQUVEOzs7Ozs7OzswQkFLTUEsTyxFQUFTRyxNLEVBQU87QUFDcEIsV0FBS0osT0FBTCxDQUFhSSxLQUFiLENBQW1CLEtBQUtGLE9BQUwsQ0FBYSxPQUFiLEVBQXNCRCxPQUF0QixDQUFuQixFQUFtREcsTUFBbkQ7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0tILE8sRUFBU0csSyxFQUFPO0FBQ25CQSxjQUFRQSxTQUFTLEVBQWpCO0FBQ0EsV0FBS0osT0FBTCxDQUFhSSxLQUFiLENBQW1CLEtBQUtGLE9BQUwsQ0FBYSxNQUFiLEVBQXFCRCxPQUFyQixDQUFuQixFQUFrREcsS0FBbEQ7QUFDRDs7QUFFRDs7Ozs7Ozs0QkFJUUMsSyxFQUFPSixPLEVBQVM7QUFDdEIsbUJBQVdJLEtBQVgsWUFBdUIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQXZCLFdBQXFETixPQUFyRDtBQUNEOzs7Ozs7a0JBN0RrQkYsTTs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQlMsSTs7O0FBRW5CLHNCQUE0RDtBQUFBLDRCQUE5Q3ZDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFFUUQsUSxFQUFVdUMsYSxFQUFlO0FBQUE7O0FBQ2hDLGFBQU9BLGNBQWNDLE9BQWQsRUFBUCxFQUFnQztBQUM5QixZQUFJQyxXQUFXRixjQUFjRyxJQUFkLEVBQWY7QUFDQSxZQUFJQyxRQUFRM0MsU0FBUzRDLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUNBLFlBQUlDLFNBQVNGLE1BQU1HLFNBQU4sQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCLENBQUNOLFFBQUQsQ0FBMUIsRUFBc0NPLEtBQXRDLEdBQThDSixNQUE5QyxDQUFxRCxHQUFyRCxFQUEwREssSUFBMUQsQ0FBK0QsT0FBL0QsRUFBd0VSLFNBQVNTLEtBQWpGLEVBQXdGQyxJQUF4RixDQUE2RlYsU0FBU1MsS0FBdEcsQ0FBYjtBQUNBLFlBQUlULFNBQVNXLFFBQVQsSUFBcUJDLE9BQU9DLE1BQVAsQ0FBY2IsU0FBU1csUUFBdkIsRUFBaUNHLE1BQTFELEVBQWtFO0FBQ2hFVixpQkFBT1csRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLHVCQUFhLE9BQUs3QyxPQUFsQixFQUEyQjhDLE9BQTNCLENBQW1DRCxDQUFuQyxDQUFQO0FBQUEsV0FBbkI7QUFDRDtBQUNELFlBQUloQixTQUFTa0IsS0FBVCxJQUFrQk4sT0FBT0MsTUFBUCxDQUFjYixTQUFTa0IsS0FBdkIsRUFBOEJKLE1BQTlCLEdBQXVDLENBQTdELEVBQWdFO0FBQzlELGNBQUlLLFVBQVVqQixNQUFNQyxNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0EsY0FBSWlCLG1CQUFtQixLQUFLQyxRQUFMLENBQWNULE9BQU9DLE1BQVAsQ0FBY2IsU0FBU2tCLEtBQXZCLENBQWQsQ0FBdkI7QUFDQSxlQUFLSSxRQUFMLENBQWNILE9BQWQsRUFBdUJDLGdCQUF2QjtBQUNEO0FBQ0Y7QUFDRjs7OzZCQUVRRyxLLEVBQU87QUFDZCxVQUFJQyxZQUFZLENBQWhCO0FBQ0EsYUFBTztBQUNMdkIsY0FBTSxnQkFBVztBQUNmLGlCQUFPLEtBQUtGLE9BQUwsS0FBaUJ3QixNQUFNQyxXQUFOLENBQWpCLEdBQXNDM0QsU0FBN0M7QUFDRCxTQUhJO0FBSUxrQyxpQkFBUyxtQkFBVztBQUNsQixpQkFBT3lCLFlBQVlELE1BQU1ULE1BQXpCO0FBQ0Q7QUFOSSxPQUFQO0FBUUQ7Ozs7OztrQkFoQ2tCakIsSTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCNEIsZTtBQUVuQixpQ0FBNEQ7QUFBQSw0QkFBOUNuRSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFDMUQsU0FBS1csT0FBTCxHQUFlO0FBQ2JiLGVBQVNBLE9BREk7QUFFYkMsZ0JBQVVBLFFBRkc7QUFHYkMsdUJBQWlCQTtBQUhKLEtBQWY7QUFLQSxTQUFLTyxNQUFMLEdBQWMscUJBQVcsRUFBRVQsU0FBU0EsT0FBWCxFQUFYLENBQWQ7QUFDRDs7Ozs0QkFFT29FLE0sRUFBUTtBQUNkLFVBQUlkLE9BQU9lLElBQVAsQ0FBWUQsT0FBT2YsUUFBUCxDQUFnQmlCLFlBQTVCLEVBQTBDZCxNQUE5QyxFQUFzRDtBQUNwRCxZQUFJZSxRQUFRLG9CQUFVLEtBQUsxRCxPQUFmLENBQVo7QUFDQSxlQUFPMEQsTUFBTWpFLE1BQU4sQ0FBYThELE1BQWIsQ0FBUDtBQUNELE9BSEQsTUFJSztBQUNILGVBQU8sS0FBS3ZELE9BQUwsQ0FBYVgsZUFBYixDQUE2QmtFLE9BQU9mLFFBQXBDLENBQVA7QUFDRDtBQUNGOzs7Ozs7a0JBbkJrQmMsZTs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJLLE87OztBQUVuQix5QkFBNEQ7QUFBQSw0QkFBOUN4RSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxrSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUt1RSxPQUFMLEdBQWUsTUFBS0MsU0FBTCxDQUFlOUQsTUFBZixDQUFzQix3QkFBdEIsQ0FBZjtBQUNBO0FBQ0EsUUFBSSxDQUFDLE1BQUs2RCxPQUFMLENBQWEzRCxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsWUFBSzJELE9BQUwsR0FBZSxNQUFLQyxTQUFMLENBQWU3QixNQUFmLENBQXNCLGVBQXRCLEVBQ1o4QixPQURZLENBQ0osZ0JBREksRUFDYyxJQURkLEVBQ29CQyxLQURwQixDQUMwQixTQUQxQixFQUNxQyxNQURyQyxDQUFmO0FBRUQ7QUFQeUQ7QUFRM0Q7Ozs7MkJBRU1DLE0sRUFBUTs7QUFFYjtBQUNBLFVBQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUN2QixPQUFPQyxNQUFQLENBQWNzQixNQUFkLEVBQXNCckIsTUFBdEMsRUFBOEM7QUFDNUMsYUFBSy9DLE1BQUwsQ0FBWUMsS0FBWixDQUFrQix5Q0FBbEI7QUFDQTtBQUNEOztBQUVELFdBQUsrRCxPQUFMLENBQWF2QixJQUFiLENBQWtCLFdBQWxCLGtCQUE0Q3ZDLEdBQUdtRSxLQUFILENBQVNDLE9BQVQsR0FBbUIsQ0FBL0QsV0FBb0VwRSxHQUFHbUUsS0FBSCxDQUFTRSxPQUFULEdBQW1CLENBQXZGOztBQUVBOztBQUVBO0FBQ0EsVUFBSSxLQUFLUCxPQUFMLENBQWExQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCakMsSUFBNUIsRUFBSixFQUF3QztBQUN0QztBQUNEOztBQUVELFVBQUltRSxRQUFRLEtBQUtSLE9BQUwsQ0FBYTVCLE1BQWIsQ0FBb0IsV0FBcEIsRUFBaUNLLElBQWpDLENBQXNDLE9BQXRDLEVBQStDLGdCQUEvQyxFQUNUTCxNQURTLENBQ0YsS0FERSxFQUNLSyxJQURMLENBQ1UsT0FEVixFQUNtQixjQURuQixFQUNtQ0wsTUFEbkMsQ0FDMEMsS0FEMUMsRUFDaURLLElBRGpELENBQ3NELE9BRHRELEVBQytELG1CQUQvRCxDQUFaO0FBRUFJLGFBQU9lLElBQVAsQ0FBWVEsTUFBWixFQUFvQkssR0FBcEIsQ0FBd0IsVUFBU0MsR0FBVCxFQUFjO0FBQ3BDLFlBQUlDLE1BQU1ILE1BQU1wQyxNQUFOLENBQWEsS0FBYixFQUFvQkssSUFBcEIsQ0FBeUIsT0FBekIsRUFBa0Msa0JBQWxDLENBQVY7QUFDQWtDLFlBQUl2QyxNQUFKLENBQVcsS0FBWCxFQUFrQkssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEbUMsSUFBckQsQ0FBMERGLEdBQTFEO0FBQ0FDLFlBQUl2QyxNQUFKLENBQVcsS0FBWCxFQUFrQkssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEbUMsSUFBckQsQ0FBMERSLE9BQU9NLEdBQVAsQ0FBMUQ7QUFDRCxPQUpEOztBQU1BO0FBQ0EsV0FBS1YsT0FBTCxDQUFhRyxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtILE9BQUwsQ0FBYTFCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJ1QyxNQUE1QjtBQUNBLFdBQUtiLE9BQUwsQ0FBYUcsS0FBYixDQUFtQixTQUFuQixFQUE4QixNQUE5QjtBQUNEOzs7Ozs7a0JBNUNrQkosTzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQmUsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5Q3ZGLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHlHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTXdCLEksRUFBTTs7QUFFWCxVQUFJLENBQUNBLEtBQUs4RCxNQUFMLENBQVlDLEtBQWpCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRUQsY0FBUS9ELEtBQUs4RCxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLElBQTFCO0FBQ0UsYUFBSyxLQUFMO0FBQ0UsaUJBQU8sdUJBQWEsS0FBSzdFLE9BQWxCLEVBQTJCUCxNQUEzQixDQUFrQ29CLElBQWxDLENBQVA7QUFDRixhQUFLLE1BQUw7QUFDRSxlQUFLakIsTUFBTCxDQUFZeUIsSUFBWixDQUFpQixzQkFBakI7QUFDQTtBQUNGO0FBQ0UsZ0JBQU0sSUFBSTdCLFNBQUosc0JBQWlDcUIsS0FBSzhELE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsSUFBbkQsMkJBQU47QUFQSjtBQVNEOzs7Z0NBTWtCQyxHLEVBQUs7QUFDdEIsYUFBT0MsTUFBTUMsSUFBTixDQUFXLElBQUlELEtBQUosQ0FBVUQsR0FBVixDQUFYLEVBQTJCLFVBQUNHLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVBLENBQVY7QUFBQSxPQUEzQixFQUF3Q2IsR0FBeEMsQ0FBNEM7QUFBQSxlQUFLYyxDQUFMO0FBQUEsT0FBNUMsQ0FBUDtBQUNEOzs7OEJBRWdCQyxPLEVBQVM7QUFDeEIsVUFBSUMsWUFBWXZGLEdBQUd3RixhQUFILENBQWlCRixRQUFRbkYsSUFBUixFQUFqQixDQUFoQjtBQUNBb0YsZ0JBQVVFLFNBQVYsQ0FBb0JILFFBQVFJLElBQTVCLEVBQWtDSixRQUFRSyxHQUExQztBQUNEOzs7d0JBWG1CO0FBQ2xCLGFBQU8zRixHQUFHNEYsZUFBSCxHQUFxQkMsTUFBckIsQ0FBNEIsQ0FBQyxDQUFELEVBQUksR0FBSixDQUE1QixFQUFzQ0MsWUFBdEMsQ0FBbUQ5RixHQUFHK0Ysa0JBQXRELENBQVA7QUFDRDs7Ozs7O2tCQXpCa0JuQixLOzs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7OztJQVdxQm9CLE07O0FBRW5COzs7Ozs7O0FBT0Esd0JBQTREO0FBQUEsNEJBQTlDM0csT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQzFELFFBQUksQ0FBQ0EsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUkwRyxLQUFKLENBQVUsd0dBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxDQUFDM0csUUFBTCxFQUFlO0FBQ2IsWUFBTSxJQUFJMkcsS0FBSixDQUFVLHdEQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQ2pHLEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSWlHLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRDs7Ozs7O0FBTUEsU0FBSy9GLE9BQUwsR0FBZTtBQUNiYixlQUFTQSxPQURJO0FBRWJDLGdCQUFVQSxRQUZHO0FBR2JDLHVCQUFpQkE7QUFISixLQUFmO0FBS0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFLTzJHLEssRUFBTztBQUNaLFVBQUluRixPQUFPLG9CQUFVb0YsS0FBVixDQUFnQkQsS0FBaEIsQ0FBWDtBQUNBLFVBQUluRixJQUFKLEVBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxZQUFJcUYsU0FBUyxxQkFBVyxLQUFLbEcsT0FBaEIsQ0FBYjtBQUNBLFlBQUkyRSxTQUFTLHFCQUFXLEtBQUszRSxPQUFoQixDQUFiO0FBQ0EsWUFBSW1HLE9BQU8sdUJBQWEsS0FBS25HLE9BQWxCLENBQVg7QUFDQSxZQUFJb0csUUFBUSxvQkFBVSxLQUFLcEcsT0FBZixDQUFaO0FBQ0EsWUFBSTRFLFFBQVEsb0JBQVUsS0FBSzVFLE9BQWYsQ0FBWjtBQUNBMkUsZUFBTzBCLEdBQVAsQ0FBV0QsS0FBWDtBQUNBekIsZUFBTzBCLEdBQVAsQ0FBV3pCLEtBQVg7QUFDQXNCLGVBQU9HLEdBQVAsQ0FBV0YsSUFBWDtBQUNBRCxlQUFPRyxHQUFQLENBQVcxQixNQUFYO0FBQ0EsWUFBSVMsVUFBVWMsT0FBT3pHLE1BQVAsQ0FBY29CLElBQWQsQ0FBZDtBQUNBLGVBQU91RSxRQUFRbkYsSUFBUixFQUFQO0FBQ0Q7QUFDRjs7Ozs7O2tCQXZEa0I2RixNOzs7QUEwRHJCLElBQUk7QUFDRlEsVUFBUVIsTUFBUixHQUFpQkksT0FBT0osTUFBUCxHQUFnQkEsTUFBakM7QUFDRCxDQUZELENBR0EsT0FBT1MsQ0FBUCxFQUFVO0FBQ1JELFVBQVFSLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkQ7OztJQUdxQlUsUzs7Ozs7Ozs7O0FBRW5COzs7OzswQkFLYVIsSyxFQUFPO0FBQ2xCQSxjQUFRLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJTLEtBQUtDLFNBQUwsQ0FBZVYsS0FBZixDQUE1QixHQUFvREEsS0FBNUQ7QUFDQUEsY0FBUUEsTUFBTVcsT0FBTixDQUFjLHFCQUFkLEVBQXFDLEVBQXJDLENBQVI7QUFDQSxVQUFJQyxZQUFZLGFBQWhCO0FBQ0EsVUFBSUMsUUFBUUQsVUFBVUUsSUFBVixDQUFlZCxLQUFmLENBQVo7QUFDQSxVQUFJYSxLQUFKLEVBQVc7QUFDVGIsZ0JBQVFhLE1BQU0sQ0FBTixDQUFSO0FBQ0EsWUFBSTtBQUNGLGNBQUloRyxPQUFPNEYsS0FBS1IsS0FBTCxDQUFXRCxLQUFYLENBQVg7QUFDQSxpQkFBT25GLEtBQUtrRyxLQUFMLEtBQWUsNkJBQWYsR0FBK0NsRyxJQUEvQyxHQUFzRG5CLFNBQTdEO0FBQ0QsU0FIRCxDQUlBLE9BQU82RyxDQUFQLEVBQVU7QUFDUjtBQUNBckYsa0JBQVFJLEtBQVIsQ0FBY2lGLENBQWQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxhQUFPN0csU0FBUDtBQUNEOzs7Ozs7a0JBekJrQjhHLFM7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJRLE07OztBQUVuQix3QkFBNEQ7QUFBQSw0QkFBOUM3SCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwyR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU13QixJLEVBQU07QUFDWCxVQUFJb0csV0FBVyxrQkFBUUMsV0FBUixDQUFvQnJHLEtBQUs4RCxNQUFMLENBQVl3QyxFQUFoQyxDQUFmO0FBQ0EsVUFBSWpCLFNBQVNwRyxHQUFHQyxNQUFILE9BQWNrSCxRQUFkLENBQWI7O0FBRUE7QUFDQSxVQUFJLENBQUNmLE9BQU9qRyxJQUFQLEVBQUwsRUFBb0I7QUFDbEI7QUFDQSxhQUFLTCxNQUFMLENBQVlDLEtBQVosdUJBQXNDb0gsUUFBdEM7QUFDQWYsaUJBQVNwRyxHQUFHQyxNQUFILENBQVUsS0FBS0MsT0FBTCxDQUFhWixRQUF2QixFQUFpQzRDLE1BQWpDLENBQXdDLEtBQXhDLEVBQStDO0FBQS9DLFNBQ05LLElBRE0sQ0FDRCxJQURDLEVBQ0s0RSxRQURMLEVBRU41RSxJQUZNLENBRUQsT0FGQyxFQUVRLHNCQUZSLENBQVQ7QUFHRDs7QUFFRDtBQUNBLFVBQUksQ0FBQzZELE9BQU9qRyxJQUFQLEVBQUwsRUFBb0I7QUFDbEIsY0FBTSxJQUFJOEYsS0FBSiw2Q0FBb0RrQixRQUFwRCwwQkFBTjtBQUNEOztBQUVELFdBQUtySCxNQUFMLENBQVlDLEtBQVosc0JBQXFDb0gsUUFBckM7O0FBRUEsV0FBS0csY0FBTCxDQUFvQmxCLE1BQXBCLEVBQTRCckYsSUFBNUI7O0FBRUEsYUFBT3FGLE1BQVA7QUFDRDs7Ozs7O2tCQTdCa0JjLE07Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7Ozs7Ozs7SUFFcUJLLEk7QUFFbkIsc0JBQTREO0FBQUEsNEJBQTlDbEksT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQzFEOzs7QUFHQSxTQUFLVyxPQUFMLEdBQWU7QUFDYmIsZUFBU0EsT0FESTtBQUViQyxnQkFBVUEsUUFGRztBQUdiQyx1QkFBaUJBO0FBSEosS0FBZjtBQUtBOzs7QUFHQSxTQUFLTyxNQUFMLEdBQWMscUJBQVcsS0FBS0ksT0FBaEIsQ0FBZDtBQUNEOzs7O2tDQUVzRDtBQUFBLGdDQUE5Q2IsT0FBOEM7QUFBQSxVQUE5Q0EsT0FBOEMsaUNBQXBDLEtBQW9DO0FBQUEsVUFBN0JDLFFBQTZCLFNBQTdCQSxRQUE2QjtBQUFBLFVBQW5CQyxlQUFtQixTQUFuQkEsZUFBbUI7O0FBQ3JELFdBQUtXLE9BQUwsR0FBZTtBQUNiYixpQkFBU0EsT0FESTtBQUViQyxrQkFBVUEsUUFGRztBQUdiQyx5QkFBaUJBO0FBSEosT0FBZjtBQUtBLGFBQU8sSUFBUDtBQUNEOzs7Ozs7a0JBeEJrQmdJLEk7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtJQUNxQkMsTTs7O0FBRW5CLHdCQUE0RDtBQUFBLDRCQUE5Q25JLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDJHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTXdCLEksRUFBTTtBQUNYLFVBQUlELFNBQVNkLEdBQUdDLE1BQUgsQ0FBVSxLQUFLQyxPQUFMLENBQWFaLFFBQXZCLEVBQWlDYSxJQUFqQyxFQUFiO0FBQ0E7QUFDQSxVQUFJSSxXQUFXLGtCQUFRa0gsV0FBUixDQUFvQjFHLEtBQUs4RCxNQUFMLENBQVl3QyxFQUFoQyxDQUFmO0FBQ0EsVUFBSXhDLFNBQVMvRCxPQUFPYixNQUFQLFVBQXFCTSxRQUFyQixDQUFiO0FBQ0E7QUFDQSxVQUFJLENBQUNzRSxPQUFPMUUsSUFBUCxFQUFMLEVBQW9CO0FBQ2xCO0FBQ0EsYUFBS0wsTUFBTCxDQUFZQyxLQUFaLHVCQUFzQ1EsUUFBdEM7QUFDQXNFLGlCQUFTL0QsT0FBT29CLE1BQVAsQ0FBYyxLQUFkLEVBQ05LLElBRE0sQ0FDRCxJQURDLEVBQ0toQyxRQURMLEVBRU5nQyxJQUZNLENBRUQsT0FGQyxFQUVRLGVBRlIsQ0FBVDtBQUdEOztBQUVEO0FBQ0EsVUFBSSxDQUFDc0MsT0FBTzFFLElBQVAsRUFBTCxFQUFvQjtBQUNsQixjQUFNLElBQUk4RixLQUFKLDZDQUFvRDFGLFFBQXBELDBCQUFOO0FBQ0Q7O0FBRURzRSxhQUFPdEMsSUFBUCxDQUFZLE9BQVosRUFBcUJ4QixLQUFLOEQsTUFBTCxDQUFZNkMsS0FBakMsRUFBd0NuRixJQUF4QyxDQUE2QyxRQUE3QyxFQUF1RHhCLEtBQUs4RCxNQUFMLENBQVk4QyxNQUFuRTs7QUFFQSxVQUFJQyxPQUFPNUgsR0FBRzRILElBQUgsRUFBWCxDQXJCVyxDQXFCVzs7QUFFdEIsVUFBSTFFLFVBQVUyQixPQUFPNUUsTUFBUCxDQUFjLGtCQUFkLENBQWQ7O0FBRUEsVUFBSSxDQUFDaUQsUUFBUS9DLElBQVIsRUFBTCxFQUFxQjtBQUNuQitDLGtCQUFVMkIsT0FBTzNDLE1BQVAsQ0FBYyxHQUFkLEVBQW1CSyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxnQkFBakMsQ0FBVjtBQUNBcUYsYUFBSzlFLEVBQUwsQ0FBUSxNQUFSLEVBQWdCK0UsTUFBaEI7QUFDQWhELGVBQU9pRCxJQUFQLENBQVlGLElBQVosRUFBa0I5RSxFQUFsQixDQUFxQixlQUFyQixFQUFzQyxJQUF0QyxFQUhtQixDQUcwQjtBQUM5Qzs7QUFFRCtCLGFBQU8vQixFQUFQLENBQVUsT0FBVixFQUFtQmlGLE9BQW5CLEVBQTRCLElBQTVCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLGVBQVNGLE1BQVQsR0FBa0I7QUFDaEIzRSxnQkFBUVgsSUFBUixDQUFhLFdBQWIsRUFBMEJ2QyxHQUFHbUUsS0FBSCxDQUFTb0IsU0FBbkM7QUFDRDs7QUFFRCxlQUFTd0MsT0FBVCxHQUFtQjtBQUNqQixZQUFJL0gsR0FBR21FLEtBQUgsQ0FBUzZELGdCQUFiLEVBQStCO0FBQUVoSSxhQUFHbUUsS0FBSCxDQUFTOEQsZUFBVDtBQUE2QjtBQUMvRDs7QUFFRCxXQUFLbkksTUFBTCxDQUFZQyxLQUFaLHNCQUFxQ1EsUUFBckM7O0FBRUE7O0FBRUEsV0FBSytHLGNBQUwsQ0FBb0J6QyxNQUFwQixFQUE0QjlELElBQTVCOztBQUVBLGFBQU84RCxNQUFQO0FBQ0Q7Ozs7OztrQkFoRmtCMkMsTTs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQlUsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5QzdJLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLCtHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OzsyQkFFTXdCLEksRUFBTTtBQUFBOztBQUNYLFVBQUlELFNBQVMsS0FBS1osT0FBTCxDQUFhWixRQUExQjs7QUFFQSxVQUFJbUIsU0FBUyxrQkFBUTBILFNBQVIsQ0FBa0JwSCxLQUFLOEQsTUFBTCxDQUFZd0MsRUFBOUIsQ0FBYjtBQUNBLFVBQUloQixPQUFPckcsR0FBR0MsTUFBSCxPQUFjUSxNQUFkLENBQVg7O0FBRUE7QUFDQSxVQUFJLENBQUM0RixLQUFLbEcsSUFBTCxFQUFMLEVBQWtCO0FBQ2hCO0FBQ0EsYUFBS0wsTUFBTCxDQUFZQyxLQUFaLDBCQUF5Q1UsTUFBekM7QUFDQTRGLGVBQU92RixPQUFPb0IsTUFBUCxDQUFjLElBQWQsRUFDSkssSUFESSxDQUNDLE9BREQsRUFDVSxrQkFEVixFQUM4QkEsSUFEOUIsQ0FDbUMsSUFEbkMsRUFDeUM5QixNQUR6QyxDQUFQO0FBRUQ7O0FBRUQ7QUFDQTRGLFdBQUtqRSxTQUFMLENBQWUsR0FBZixFQUFvQnVDLE1BQXBCOztBQUVBLFVBQUk1RCxLQUFLOEQsTUFBTCxDQUFZckMsS0FBaEIsRUFBdUI7QUFDckI2RCxhQUFLbkUsTUFBTCxDQUFZLElBQVosRUFBa0JLLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLGNBQWhDLEVBQWdETCxNQUFoRCxDQUF1RCxHQUF2RCxFQUE0RE8sSUFBNUQsQ0FBaUUxQixLQUFLOEQsTUFBTCxDQUFZckMsS0FBN0U7QUFDRDs7QUFFRCxVQUFJUCxRQUFRb0UsS0FBS25FLE1BQUwsQ0FBWSxJQUFaLENBQVo7QUFDQUQsWUFBTUMsTUFBTixDQUFhLEdBQWIsRUFBa0JPLElBQWxCLENBQXVCLFFBQXZCO0FBQ0EsVUFBSVMsVUFBVWpCLE1BQU1DLE1BQU4sQ0FBYSxJQUFiLENBQWQ7QUFDQWdCLGNBQVFoQixNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUNZLEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBTSxPQUFLaEQsTUFBTCxDQUFZeUIsSUFBWixDQUFpQix5Q0FBakIsQ0FBTjtBQUFBLE9BQTdDLEVBQWdIZ0IsSUFBaEgsQ0FBcUgsT0FBckgsRUFBOEgsYUFBOUgsRUFBNklFLElBQTdJLENBQWtKLGFBQWxKO0FBQ0FTLGNBQVFoQixNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUNZLEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBTSxPQUFLaEQsTUFBTCxDQUFZeUIsSUFBWixDQUFpQiwwQ0FBakIsQ0FBTjtBQUFBLE9BQTdDLEVBQWlIZ0IsSUFBakgsQ0FBc0gsT0FBdEgsRUFBK0gsT0FBL0gsRUFBd0lFLElBQXhJLENBQTZJLE9BQTdJOztBQUVBO0FBQ0EsVUFBSVosZ0JBQWdCLEtBQUt1QixRQUFMLENBQWNULE9BQU9DLE1BQVAsQ0FBYzdCLEtBQUs4RCxNQUFMLENBQVk1QixLQUExQixDQUFkLENBQXBCO0FBQ0EsV0FBS0ksUUFBTCxDQUFjZ0QsSUFBZCxFQUFvQnhFLGFBQXBCOztBQUVBLFdBQUsvQixNQUFMLENBQVlDLEtBQVoseUJBQXdDVSxNQUF4Qzs7QUFFQSxhQUFPNEYsSUFBUDtBQUNEOzs7Ozs7a0JBeENrQjZCLFE7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJFLEs7OztBQUVuQix1QkFBNEQ7QUFBQSw0QkFBOUMvSSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx5R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU13QixJLEVBQU07QUFDWCxVQUFJc0gsT0FBTyxJQUFYOztBQUVBLFVBQUlDLFVBQVUsa0JBQVFsQixXQUFSLENBQW9CckcsS0FBSzJCLFFBQUwsQ0FBYzJFLEVBQWxDLENBQWQ7QUFDQSxXQUFLdkgsTUFBTCxDQUFZQyxLQUFaLCtCQUE4Q3VJLE9BQTlDOztBQUVBO0FBQ0EsVUFBSUMsVUFBVXZJLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCaUMsTUFBbEIsQ0FBeUIsS0FBekIsRUFDWEssSUFEVyxDQUNOLE9BRE0sRUFDRyxnQkFESCxDQUFkO0FBRUEsVUFBSWlHLFNBQVN4SSxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQmlDLE1BQWxCLENBQXlCLEtBQXpCLEVBQ1ZLLElBRFUsQ0FDTCxPQURLLEVBQ0ksUUFESixDQUFiO0FBRUEsVUFBSXFCLFFBQVE0RSxPQUFPdEcsTUFBUCxDQUFjLEtBQWQsRUFDVEssSUFEUyxDQUNKLElBREksRUFDRStGLE9BREYsRUFFVC9GLElBRlMsQ0FFSixPQUZJLEVBRUssY0FGTCxDQUFaOztBQUlBLFVBQUlrRyxPQUFPN0UsTUFBTTFCLE1BQU4sQ0FBYSxNQUFiLENBQVg7O0FBRUEsVUFBSXdHLFNBQVNELEtBQUt2RyxNQUFMLENBQVksS0FBWixFQUFtQkssSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUFtRyxhQUFPeEcsTUFBUCxDQUFjLE1BQWQsRUFBc0JPLElBQXRCLENBQTJCLDhCQUEzQixFQUEyRFAsTUFBM0QsQ0FBa0UsTUFBbEUsRUFBMEVLLElBQTFFLENBQStFLE9BQS9FLEVBQXdGLG9CQUF4RixFQUE4R21DLElBQTlHLENBQW1IM0QsS0FBS3lCLEtBQXhIOztBQUVBLFVBQUlVLFVBQVV1RixLQUFLdkcsTUFBTCxDQUFZLEtBQVosRUFBbUJLLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHNCQUFqQyxFQUF5REwsTUFBekQsQ0FBZ0UsS0FBaEUsRUFBdUVLLElBQXZFLENBQTRFLE9BQTVFLEVBQXFGLGNBQXJGLEVBQXFHTCxNQUFyRyxDQUE0RyxLQUE1RyxFQUFtSEssSUFBbkgsQ0FBd0gsT0FBeEgsRUFBaUksbUJBQWpJLENBQWQ7O0FBckJXO0FBQUE7QUFBQTs7QUFBQTtBQXVCWCw2QkFBZ0JJLE9BQU9DLE1BQVAsQ0FBYzdCLEtBQUsyQixRQUFMLENBQWNpQixZQUE1QixDQUFoQiw4SEFBMkQ7QUFBQSxjQUFsRGdGLEdBQWtEOztBQUN6RCxjQUFJbEUsTUFBTXZCLFFBQVFoQixNQUFSLENBQWUsS0FBZixFQUFzQkssSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0Msa0JBQXBDLENBQVY7QUFDQWtDLGNBQUl2QyxNQUFKLENBQVcsS0FBWCxFQUFrQkssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFETCxNQUFyRCxDQUE0RCxPQUE1RCxFQUFxRUssSUFBckUsQ0FBMEUsS0FBMUUsRUFBaUZvRyxJQUFJdEIsRUFBckYsRUFBeUYzQyxJQUF6RixDQUE4RmlFLElBQUluRyxLQUFsRztBQUNBaUMsY0FBSXZDLE1BQUosQ0FBVyxLQUFYLEVBQWtCSyxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcURMLE1BQXJELENBQTRELE9BQTVELEVBQXFFSyxJQUFyRSxDQUEwRSxJQUExRSxFQUFnRm9HLElBQUl0QixFQUFwRixFQUF3RjlFLElBQXhGLENBQTZGLE9BQTdGLEVBQXNHLFlBQXRHLEVBQ0dBLElBREgsQ0FDUSxVQURSLEVBQ29CLEVBRHBCLEVBRUdBLElBRkgsQ0FFUSxNQUZSLEVBRWdCb0csSUFBSXRCLEVBRnBCLEVBR0c5RSxJQUhILENBR1EsTUFIUixFQUdnQm9HLElBQUk1RCxJQUhwQixFQUlHeEMsSUFKSCxDQUlRLE9BSlIsRUFJaUJvRyxJQUFJQyxLQUpyQixFQUtHOUYsRUFMSCxDQUtNLFFBTE4sRUFLZ0IsWUFBVztBQUFFL0IsaUJBQUsyQixRQUFMLENBQWNpQixZQUFkLENBQTJCLEtBQUswRCxFQUFoQyxFQUFvQ3VCLEtBQXBDLEdBQTRDLEtBQUtBLEtBQWpEO0FBQXlELFdBTHRGLEVBTUc5RixFQU5ILENBTU0sT0FOTixFQU1lLEtBQUsrRixRQU5wQixFQU9HL0YsRUFQSCxDQU9NLE9BUE4sRUFPZSxLQUFLK0YsUUFQcEIsRUFRRy9GLEVBUkgsQ0FRTSxPQVJOLEVBUWUsS0FBSytGLFFBUnBCO0FBU0FwRSxjQUFJdkMsTUFBSixDQUFXLE1BQVgsRUFBbUJLLElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLFVBQWpDO0FBQ0Q7QUFwQ1U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQ1gsVUFBSXVHLFNBQVNMLEtBQUt2RyxNQUFMLENBQVksS0FBWixFQUFtQkssSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUF1RyxhQUFPNUcsTUFBUCxDQUFjLFFBQWQsRUFBd0J3QyxJQUF4QixDQUE2QixJQUE3QixFQUFtQzVCLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFlBQVc7QUFDeEQsWUFBSTJGLEtBQUt0SSxJQUFMLEdBQVk0SSxhQUFaLEVBQUosRUFBaUM7QUFDL0JWLGVBQUtuSSxPQUFMLENBQWFYLGVBQWIsQ0FBNkJ3QixLQUFLMkIsUUFBbEM7QUFDQTZGLGtCQUFRNUQsTUFBUjtBQUNBZixnQkFBTWUsTUFBTjtBQUNBNkQsaUJBQU83RCxNQUFQO0FBQ0FSLGdCQUFNNkUsY0FBTjtBQUNEO0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FURDtBQVVBRixhQUFPNUcsTUFBUCxDQUFjLFFBQWQsRUFBd0J3QyxJQUF4QixDQUE2QixRQUE3QixFQUF1QzVCLEVBQXZDLENBQTBDLE9BQTFDLEVBQW1ELFlBQU07QUFDdkRxQixjQUFNNkUsY0FBTjtBQUNBVCxnQkFBUTVELE1BQVI7QUFDQWYsY0FBTWUsTUFBTjtBQUNBNkQsZUFBTzdELE1BQVA7QUFDQSxlQUFPLEtBQVA7QUFDRCxPQU5EOztBQVFBO0FBQ0EsVUFBSTtBQUNGc0UsZ0JBQVFDLGdCQUFSLENBQXlCQyxlQUF6QixDQUF5QyxhQUF6QztBQUNBRixnQkFBUUMsZ0JBQVIsQ0FBeUJDLGVBQXpCLENBQXlDLGlCQUF6QztBQUNBRixnQkFBUUMsZ0JBQVIsQ0FBeUJDLGVBQXpCLENBQXlDLGVBQXpDO0FBQ0QsT0FKRCxDQUtBLE9BQU8xQyxDQUFQLEVBQVU7QUFDUixZQUFJQSxFQUFFMkMsSUFBRixJQUFVLGdCQUFkLEVBQWdDO0FBQzlCZixlQUFLdkksTUFBTCxDQUFZQyxLQUFaLENBQWtCLDJDQUFsQixFQUErRDBHLENBQS9EO0FBQ0Q7QUFDRjs7QUFFRCxXQUFLM0csTUFBTCxDQUFZQyxLQUFaLDhCQUE2Q3VJLE9BQTdDOztBQUVBLGFBQU8xRSxLQUFQO0FBQ0Q7Ozs7OztrQkEvRWtCd0UsSzs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJpQixLOzs7Ozs4QkFPRnRFLEksRUFBTTtBQUNyQixVQUFJQSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsZUFBTy9FLEdBQUdzSixZQUFWO0FBQ0QsT0FGRCxNQUdLLElBQUl2RSxTQUFTLE9BQWIsRUFBc0I7QUFDekIsZUFBTy9FLEdBQUd1SixXQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUl4RSxTQUFTLFNBQWIsRUFBd0I7QUFDM0IsZUFBTy9FLEdBQUd3SixhQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUl6RSxTQUFTLFFBQWIsRUFBdUI7QUFDMUIsZUFBTy9FLEdBQUd5SixZQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUkxRSxTQUFTLFVBQWIsRUFBeUI7QUFDNUIsZUFBTy9FLEdBQUcwSixjQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUkzRSxTQUFTLE1BQWIsRUFBcUI7QUFDeEIsZUFBTy9FLEdBQUcySixVQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUk1RSxTQUFTLEtBQWIsRUFBb0I7QUFDdkIsZUFBTy9FLEdBQUc0SixTQUFWO0FBQ0QsT0FGSSxNQUdBO0FBQ0gsZUFBTzVKLEdBQUdzSixZQUFWO0FBQ0Q7QUFDRjs7O3dCQTdCbUI7QUFDbEIsYUFBT3RKLEdBQUc0RixlQUFILEdBQXFCQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDQyxZQUF0QyxDQUFtRDlGLEdBQUcrRixrQkFBdEQsQ0FBUDtBQUNEOzs7QUE2QkQsdUJBQTREO0FBQUEsNEJBQTlDMUcsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzJCQUVNd0IsSSxFQUFNOztBQUVYO0FBQ0EsVUFBSSxDQUFDQSxLQUFLOEQsTUFBTCxDQUFZeUIsS0FBakIsRUFBd0I7QUFDdEIsYUFBS3hHLE1BQUwsQ0FBWUMsS0FBWixDQUFrQiwwQ0FBbEI7QUFDQTtBQUNEOztBQUVEOztBQUVBLFVBQUkrRCxVQUFVLHNCQUFZLEtBQUs1RCxPQUFqQixDQUFkO0FBQ0EsVUFBSTJKLGNBQWMsMEJBQWdCLEtBQUszSixPQUFyQixDQUFsQjtBQUNBLFVBQUl3QyxXQUFXLHVCQUFhLEtBQUt4QyxPQUFsQixDQUFmOztBQUVBLFVBQUlZLFNBQVMsS0FBS1osT0FBTCxDQUFhWixRQUExQjs7QUFFQSxVQUFJd0ssY0FBYy9JLEtBQUs4RCxNQUFMLENBQVl5QixLQUFaLENBQWtCeUQsS0FBbEIsR0FBMEJwSCxPQUFPQyxNQUFQLENBQWM3QixLQUFLOEQsTUFBTCxDQUFZeUIsS0FBWixDQUFrQnlELEtBQWhDLENBQTFCLEdBQW1FLEVBQXJGO0FBQUEsVUFDRUMsY0FBY2pKLEtBQUs4RCxNQUFMLENBQVl5QixLQUFaLENBQWtCMkQsS0FBbEIsR0FBMEJ0SCxPQUFPQyxNQUFQLENBQWM3QixLQUFLOEQsTUFBTCxDQUFZeUIsS0FBWixDQUFrQjJELEtBQWhDLENBQTFCLEdBQW1FLEVBRG5GOztBQUdBLFVBQUlDLE1BQU1wSixPQUFPYixNQUFQLENBQWMsa0JBQWQsQ0FBVjtBQUFBLFVBQ0V5SCxRQUFRLENBQUM1RyxPQUFPeUIsSUFBUCxDQUFZLE9BQVosQ0FBRCxJQUF5QnZDLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCRSxJQUFsQixHQUF5QmdLLHFCQUF6QixHQUFpRHpDLEtBRHBGO0FBQUEsVUFFRUMsU0FBUyxDQUFDN0csT0FBT3lCLElBQVAsQ0FBWSxRQUFaLENBQUQsSUFBMEJ2QyxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkUsSUFBbEIsR0FBeUJnSyxxQkFBekIsR0FBaUR4QyxNQUZ0Rjs7QUFJQSxVQUFJeUMsSUFBSXBLLEdBQUdxSyxVQUFILEdBQWdCQyxRQUFoQixDQUF5QixHQUF6QixDQUFSOztBQUVBO0FBQ0EsVUFBSUMsU0FBU3ZLLEdBQUd1SyxNQUFILENBQVUsQ0FBQyxHQUFYLEVBQWdCQyxRQUFoQixDQUF5QixJQUF6QixDQUFiOztBQUVBO0FBQ0EsVUFBSUMsU0FBU3pLLEdBQUd5SyxNQUFILENBQVUsR0FBVixFQUFlRCxRQUFmLENBQXdCLElBQXhCLENBQWI7O0FBRUEsVUFBSXpKLEtBQUs4RCxNQUFMLENBQVl5QixLQUFaLENBQWtCdkIsSUFBbEIsS0FBMkIsT0FBL0IsRUFBd0M7QUFDdEM7QUFDQTBGLGlCQUFTekssR0FBR3lLLE1BQUgsQ0FBVTtBQUFBLGlCQUFLMUgsRUFBRTJILEtBQUYsSUFBVzNILEVBQUU0SCxJQUFGLEdBQVMsQ0FBcEIsQ0FBTDtBQUFBLFNBQVYsRUFBdUNILFFBQXZDLENBQWdELENBQWhELENBQVQ7QUFDRDs7QUFFRCxVQUFJSSxhQUFhNUssR0FBRzZLLGVBQUgsR0FDZEMsS0FEYyxDQUNSLE1BRFEsRUFDQTlLLEdBQUcrSyxTQUFILEdBQWUxRCxFQUFmLENBQWtCO0FBQUEsZUFBS3RFLEVBQUVzRSxFQUFQO0FBQUEsT0FBbEIsRUFBNkJtRCxRQUE3QixDQUFzQyxLQUF0QyxDQURBLEVBRWRNLEtBRmMsQ0FFUixRQUZRLEVBRUU5SyxHQUFHZ0wsYUFBSCxHQUFtQlIsUUFBbkIsQ0FBNEIsQ0FBQyxHQUE3QixDQUZGLEVBR2RNLEtBSGMsQ0FHUixTQUhRLEVBR0c5SyxHQUFHaUwsWUFBSCxDQUFnQjtBQUFBLGVBQUtsSSxFQUFFNEgsSUFBUDtBQUFBLE9BQWhCLENBSEgsRUFJZEcsS0FKYyxDQUlSLEdBSlEsRUFJSFAsTUFKRyxFQUtkTyxLQUxjLENBS1IsR0FMUSxFQUtITCxNQUxHLEVBTWRLLEtBTmMsQ0FNUixRQU5RLEVBTUU5SyxHQUFHa0wsV0FBSCxDQUFleEQsUUFBUSxDQUF2QixFQUEwQkMsU0FBUyxDQUFuQyxDQU5GLENBQWpCOztBQVFBLFVBQUl3RCxZQUFZakIsSUFBSTlILFNBQUosQ0FBYyxnQkFBZCxDQUFoQjs7QUFFQSxVQUFJLENBQUMrSSxVQUFVaEwsSUFBVixFQUFMLEVBQXVCO0FBQ3JCZ0wsb0JBQVlqQixJQUFJaEksTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLENBQXFCLE9BQXJCLEVBQThCLGNBQTlCLENBQVo7QUFDRDs7QUFFRCxVQUFJNkksT0FBT0QsVUFBVS9JLFNBQVYsQ0FBb0Isa0JBQXBCLEVBQXdDQyxJQUF4QyxDQUE2QzJILFdBQTdDLENBQVg7O0FBRUFvQixXQUFLQyxJQUFMLEdBQVloQixVQUFaLENBQXVCRCxDQUF2QixFQUEwQnpGLE1BQTFCOztBQUVBeUcsYUFBT0EsS0FBSzlJLEtBQUwsR0FBYUosTUFBYixDQUFvQixNQUFwQixFQUNKSyxJQURJLENBQ0MsT0FERCxFQUNVLGFBRFYsRUFFSkEsSUFGSSxDQUVDLElBRkQsRUFFTztBQUFBLGVBQVFRLEVBQUV1SSxNQUFWLFNBQW9CdkksRUFBRXRELE1BQXRCO0FBQUEsT0FGUCxFQUdKOEwsS0FISSxDQUdFSCxJQUhGLENBQVA7O0FBS0EsVUFBSXJLLEtBQUs4RCxNQUFMLENBQVl5QixLQUFaLENBQWtCdkIsSUFBbEIsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekM7QUFDQWpFLGVBQU9vQixNQUFQLENBQWMsTUFBZCxFQUFzQkUsU0FBdEIsQ0FBZ0MsUUFBaEMsRUFDR0MsSUFESCxDQUNRLENBQUMsT0FBRCxDQURSLEVBRUdDLEtBRkgsR0FFV0osTUFGWCxDQUVrQixRQUZsQixFQUdHSyxJQUhILENBR1EsT0FIUixFQUdpQixlQUhqQixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljO0FBQUEsaUJBQUtRLENBQUw7QUFBQSxTQUpkLEVBS0dSLElBTEgsQ0FLUSxTQUxSLEVBS21CLFlBTG5CLEVBTUdBLElBTkgsQ0FNUSxNQU5SLEVBTWdCLEVBTmhCLEVBT0dBLElBUEgsQ0FPUSxNQVBSLEVBT2dCLENBUGhCLEVBUUdBLElBUkgsQ0FRUSxhQVJSLEVBUXVCLEVBUnZCLEVBU0dBLElBVEgsQ0FTUSxjQVRSLEVBU3dCLEVBVHhCLEVBVUdBLElBVkgsQ0FVUSxRQVZSLEVBVWtCLE1BVmxCLEVBV0dMLE1BWEgsQ0FXVSxNQVhWLEVBWUdLLElBWkgsQ0FZUSxHQVpSLEVBWWEsNkJBWmI7QUFhQTtBQUNBNkksYUFBS25ILEtBQUwsQ0FBVyxZQUFYLEVBQXlCLGFBQXpCO0FBQ0Q7O0FBRUQsVUFBSXVILFlBQVl0QixJQUFJOUgsU0FBSixDQUFjLGdCQUFkLENBQWhCOztBQUVBLFVBQUksQ0FBQ29KLFVBQVVyTCxJQUFWLEVBQUwsRUFBdUI7QUFDckJxTCxvQkFBWXRCLElBQUloSSxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsY0FBOUIsQ0FBWjtBQUNEOztBQUVELFVBQUlwQyxPQUFPcUwsVUFBVXBKLFNBQVYsQ0FBb0Isa0JBQXBCLEVBQXdDQyxJQUF4QyxDQUE2Q3lILFdBQTdDLENBQVg7O0FBRUEzSixXQUFLa0wsSUFBTCxHQUFZaEIsVUFBWixDQUF1QkQsQ0FBdkIsRUFBMEJ6RixNQUExQjs7QUFFQXhFLGFBQU9BLEtBQUttQyxLQUFMLEdBQWFKLE1BQWIsQ0FBb0IsTUFBcEIsRUFDSkssSUFESSxDQUNDLEdBREQsRUFDTXZDLEdBQUd5TCxNQUFILEdBQVkxRyxJQUFaLENBQWlCO0FBQUEsZUFBS3NFLE1BQU1xQyxTQUFOLENBQWdCM0ksRUFBRWdDLElBQWxCLENBQUw7QUFBQSxPQUFqQixFQUErQzRGLElBQS9DLENBQW9EO0FBQUEsZUFBSzVILEVBQUU0SCxJQUFGLEdBQVMsR0FBZDtBQUFBLE9BQXBELENBRE4sRUFFSnBJLElBRkksQ0FFQyxXQUZELEVBRWMsZ0JBRmQsRUFHSkEsSUFISSxDQUdDLE9BSEQsRUFHVTtBQUFBLGVBQUssaUJBQWlCUSxFQUFFNEksU0FBRixHQUFjLG1CQUFkLEdBQW9DLEVBQXJELEtBQTREaEosT0FBT0MsTUFBUCxDQUFjRyxFQUFFRSxLQUFoQixFQUF1QkosTUFBdkIsR0FBZ0MsaUJBQWhDLEdBQW9ELEVBQWhILENBQUw7QUFBQSxPQUhWLEVBSUpOLElBSkksQ0FJQyxJQUpELEVBSU87QUFBQSxlQUFLUSxFQUFFc0UsRUFBUDtBQUFBLE9BSlAsRUFLSmtFLEtBTEksQ0FLRXBMLElBTEYsQ0FBUDs7QUFPQUEsV0FBSzJILElBQUwsQ0FBVTlILEdBQUc0TCxJQUFILEdBQ0w5SSxFQURLLENBQ0YsT0FERSxFQUNPK0ksV0FEUCxFQUVML0ksRUFGSyxDQUVGLE1BRkUsRUFFTWdKLE9BRk4sRUFHTGhKLEVBSEssQ0FHRixLQUhFLEVBR0tpSixTQUhMLENBQVYsRUFJR2pKLEVBSkgsQ0FJTSxhQUpOLEVBSXFCLFVBQVNDLENBQVQsRUFBWTtBQUM3QjtBQUNBOEcsb0JBQVlsSyxNQUFaLENBQW1Cb0QsQ0FBbkI7QUFDQTtBQUNBaUosd0JBQWdCbEUsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIvRSxDQUEzQixFQUE4QixhQUE5QjtBQUNELE9BVEgsRUFVR0QsRUFWSCxDQVVNLE9BVk4sRUFVZSxVQUFTQyxDQUFULEVBQVk7QUFDdkI7QUFDQWtKLHVCQUFlbkUsSUFBZixDQUFvQixJQUFwQjtBQUNBO0FBQ0FrRSx3QkFBZ0JsRSxJQUFoQixDQUFxQixJQUFyQixFQUEyQi9FLENBQTNCLEVBQThCLE9BQTlCO0FBQ0QsT0FmSCxFQWdCR0QsRUFoQkgsQ0FnQk0sVUFoQk4sRUFnQmtCLFVBQVNDLENBQVQsRUFBWTtBQUMxQjtBQUNBaUosd0JBQWdCbEUsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIvRSxDQUEzQixFQUE4QixVQUE5QjtBQUNELE9BbkJILEVBb0JHRCxFQXBCSCxDQW9CTSxXQXBCTixFQW9CbUIsYUFBSztBQUNwQjtBQUNBZ0IsZ0JBQVFuRSxNQUFSLENBQWVvRCxFQUFFeEIsSUFBakI7QUFDRCxPQXZCSCxFQXdCR3VCLEVBeEJILENBd0JNLFVBeEJOLEVBd0JrQixZQUFNO0FBQ3BCO0FBQ0FnQixnQkFBUWpFLFFBQVI7QUFDRCxPQTNCSDs7QUE2QkEsZUFBU21NLGVBQVQsQ0FBeUIzSixJQUF6QixFQUErQjhCLEtBQS9CLEVBQXNDO0FBQ3BDLFlBQUk5QixLQUFLNkosU0FBVCxFQUFvQjtBQUNsQnZKLGlCQUFPQyxNQUFQLENBQWNQLEtBQUs2SixTQUFuQixFQUE4QkMsT0FBOUIsQ0FBc0MsVUFBQ0MsRUFBRCxFQUFRO0FBQzVDO0FBQ0FBLGVBQUdDLE9BQUgsS0FBZWxJLEtBQWYsSUFBd0J6QixTQUFTTSxPQUFULENBQWlCLEVBQUVOLFVBQVUwSixFQUFaLEVBQWpCLENBQXhCO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7O0FBRUQsVUFBSUUsYUFBYXBDLElBQUk5SCxTQUFKLENBQWMsZ0JBQWQsQ0FBakI7O0FBRUEsVUFBSSxDQUFDa0ssV0FBV25NLElBQVgsRUFBTCxFQUF3QjtBQUN0Qm1NLHFCQUFhcEMsSUFBSWhJLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFiO0FBQ0Q7O0FBRUQsVUFBSWdLLFFBQVFELFdBQVdsSyxTQUFYLENBQXFCLE1BQXJCLEVBQTZCQyxJQUE3QixDQUFrQ3lILFdBQWxDLENBQVo7O0FBRUF5QyxZQUFNbEIsSUFBTixHQUFhaEIsVUFBYixDQUF3QkQsQ0FBeEIsRUFBMkJ6RixNQUEzQjs7QUFFQTRILGNBQVFBLE1BQU1qSyxLQUFOLEdBQWNKLE1BQWQsQ0FBcUIsTUFBckIsRUFDTEssSUFESyxDQUNBLE9BREEsRUFDUyxjQURULEVBRUxtQyxJQUZLLENBRUE7QUFBQSxlQUFLM0IsRUFBRVAsS0FBUDtBQUFBLE9BRkEsRUFHTCtJLEtBSEssQ0FHQ2dCLEtBSEQsQ0FBUjs7QUFLQSxVQUFJQyxjQUFjMUwsT0FBT3NCLFNBQVAsQ0FBaUIsU0FBakIsQ0FBbEI7O0FBRUEsVUFBSSxDQUFDb0ssWUFBWXJNLElBQVosRUFBTCxFQUF5QjtBQUN2QnFNLHNCQUFjMUwsT0FBT29CLE1BQVAsQ0FBYyxHQUFkLEVBQW1CSyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxlQUFqQyxDQUFkO0FBQ0Q7O0FBRUQ7QUFDQWlLLGtCQUFZcEssU0FBWixDQUFzQixHQUF0QixFQUEyQnVDLE1BQTNCOztBQUVBLFVBQUk4SCxTQUFTRCxZQUFZcEssU0FBWixDQUFzQixHQUF0QixFQUNWQyxJQURVLENBQ0xyQyxHQUFHdUUsR0FBSCxDQUFPdUYsV0FBUCxFQUFvQjtBQUFBLGVBQUsvRyxFQUFFMkgsS0FBUDtBQUFBLE9BQXBCLEVBQWtDOUgsTUFBbEMsR0FBMkM4SixJQUEzQyxDQUFnRCxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxFQUFFakMsS0FBRixHQUFVa0MsRUFBRWxDLEtBQXRCO0FBQUEsT0FBaEQsQ0FESyxFQUN5RTtBQUFBLGVBQUszSCxFQUFFc0UsRUFBUDtBQUFBLE9BRHpFLENBQWI7O0FBR0FvRixhQUFPcEIsSUFBUCxHQUFjaEIsVUFBZCxDQUF5QkQsQ0FBekIsRUFBNEJ6RixNQUE1Qjs7QUFFQThILGVBQVNBLE9BQU9uSyxLQUFQLEdBQ05KLE1BRE0sQ0FDQyxHQURELEVBRU5LLElBRk0sQ0FFRCxJQUZDLEVBRUs7QUFBQSwrQkFBbUJRLENBQW5CO0FBQUEsT0FGTCxFQUdOUixJQUhNLENBR0QsV0FIQyxFQUdZLFVBQUNRLENBQUQsRUFBSXFDLENBQUo7QUFBQSw4QkFBdUIsRUFBdkIsU0FBNkIsQ0FBQ0EsSUFBSSxDQUFMLElBQVUsRUFBdkM7QUFBQSxPQUhaLEVBSU5tRyxLQUpNLENBSUFrQixNQUpBLENBQVQ7O0FBTUFBLGFBQU92SyxNQUFQLENBQWMsTUFBZCxFQUNHSyxJQURILENBQ1EsT0FEUixFQUNpQixFQURqQixFQUVHQSxJQUZILENBRVEsUUFGUixFQUVrQixDQUZsQixFQUdHMEIsS0FISCxDQUdTLE1BSFQsRUFHaUI7QUFBQSxlQUFLb0YsTUFBTXdELE1BQU4sQ0FBYTlKLEVBQUUySCxLQUFGLEdBQVUsQ0FBdkIsQ0FBTDtBQUFBLE9BSGpCLEVBSUd6RyxLQUpILENBSVMsUUFKVCxFQUltQjtBQUFBLGVBQUtvRixNQUFNd0QsTUFBTixDQUFhOUosRUFBRTJILEtBQUYsR0FBVSxDQUF2QixDQUFMO0FBQUEsT0FKbkI7O0FBTUErQixhQUFPdkssTUFBUCxDQUFjLE1BQWQsRUFDR0ssSUFESCxDQUNRLE9BRFIsRUFDaUIsa0JBRGpCLEVBRUdBLElBRkgsQ0FFUSxHQUZSLEVBRWEsS0FBSyxDQUZsQixFQUdHQSxJQUhILENBR1EsR0FIUixFQUdhLEtBQUssQ0FIbEIsRUFJR21DLElBSkgsQ0FJUTtBQUFBLDBCQUFjM0IsRUFBRTJILEtBQWhCO0FBQUEsT0FKUjs7QUFNQUUsaUJBQVdiLEtBQVgsQ0FBaUJELFdBQWpCLEVBQThCaEgsRUFBOUIsQ0FBaUMsTUFBakMsRUFBeUNnSyxNQUF6QztBQUNBbEMsaUJBQVdFLEtBQVgsQ0FBaUIsTUFBakIsRUFBeUJiLEtBQXpCLENBQStCRCxXQUEvQjs7QUFFQTtBQUNBWSxpQkFBV21DLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0JDLE9BQXBCOztBQUVBLGVBQVNGLE1BQVQsR0FBa0I7QUFDaEIxQixhQUNHN0ksSUFESCxDQUNRLElBRFIsRUFDYztBQUFBLGlCQUFLUSxFQUFFdUksTUFBRixDQUFTakcsQ0FBZDtBQUFBLFNBRGQsRUFFRzlDLElBRkgsQ0FFUSxJQUZSLEVBRWM7QUFBQSxpQkFBS1EsRUFBRXVJLE1BQUYsQ0FBUzJCLENBQWQ7QUFBQSxTQUZkLEVBR0cxSyxJQUhILENBR1EsSUFIUixFQUdjO0FBQUEsaUJBQUtRLEVBQUV0RCxNQUFGLENBQVM0RixDQUFkO0FBQUEsU0FIZCxFQUlHOUMsSUFKSCxDQUlRLElBSlIsRUFJYztBQUFBLGlCQUFLUSxFQUFFdEQsTUFBRixDQUFTd04sQ0FBZDtBQUFBLFNBSmQ7O0FBTUE5TSxhQUNHOEQsS0FESCxDQUNTLE1BRFQsRUFDaUI7QUFBQSxpQkFBS29GLE1BQU13RCxNQUFOLENBQWE5SixFQUFFMkgsS0FBRixHQUFVLENBQXZCLENBQUw7QUFBQSxTQURqQixFQUVHbkksSUFGSCxDQUVRLFdBRlIsRUFFcUI7QUFBQSxnQ0FBa0JRLEVBQUVzQyxDQUFwQixTQUF5QnRDLEVBQUVrSyxDQUEzQjtBQUFBLFNBRnJCOztBQUlBVixjQUNHaEssSUFESCxDQUNRLEdBRFIsRUFDYTtBQUFBLGlCQUFLUSxFQUFFc0MsQ0FBRixHQUFNdEMsRUFBRVAsS0FBRixDQUFRSyxNQUFkLEdBQXVCcUssS0FBS0MsSUFBTCxDQUFVcEssRUFBRTRILElBQUYsR0FBUzVILEVBQUVQLEtBQUYsQ0FBUUssTUFBakIsR0FBMEIsQ0FBcEMsQ0FBNUI7QUFBQSxTQURiLEVBRUdOLElBRkgsQ0FFUSxHQUZSLEVBRWE7QUFBQSxpQkFBS1EsRUFBRWtLLENBQUYsR0FBTUMsS0FBS0MsSUFBTCxDQUFVcEssRUFBRTRILElBQUYsR0FBUyxDQUFuQixDQUFYO0FBQUEsU0FGYjs7QUFJQXhLLGFBQUtpTixJQUFMLENBQVVDLFFBQVEsR0FBUixDQUFWO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJQyxVQUFVLENBQWQsQ0E3TVcsQ0E2TU07O0FBRWpCLGVBQVNELE9BQVQsQ0FBaUJOLEtBQWpCLEVBQXdCO0FBQ3RCLFlBQUlRLFdBQVd2TixHQUFHd04sUUFBSCxDQUFZMUQsV0FBWixDQUFmO0FBQ0EsZUFBTyxVQUFTL0csQ0FBVCxFQUFZO0FBQ2pCLGNBQUkwSyxLQUFLLElBQUkxSyxFQUFFNEgsSUFBTixHQUFhMkMsT0FBdEI7QUFBQSxjQUNFSSxNQUFNM0ssRUFBRXNDLENBQUYsR0FBTW9JLEVBRGQ7QUFBQSxjQUVFRSxNQUFNNUssRUFBRXNDLENBQUYsR0FBTW9JLEVBRmQ7QUFBQSxjQUdFRyxNQUFNN0ssRUFBRWtLLENBQUYsR0FBTVEsRUFIZDtBQUFBLGNBSUVJLE1BQU05SyxFQUFFa0ssQ0FBRixHQUFNUSxFQUpkO0FBS0FGLG1CQUFTTyxLQUFULENBQWUsVUFBU0MsSUFBVCxFQUFlQyxFQUFmLEVBQW1CQyxFQUFuQixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCO0FBQzVDLGdCQUFJSixLQUFLSyxLQUFMLElBQWVMLEtBQUtLLEtBQUwsS0FBZXJMLENBQWxDLEVBQXNDO0FBQ3BDLGtCQUFJc0MsSUFBSXRDLEVBQUVzQyxDQUFGLEdBQU0wSSxLQUFLSyxLQUFMLENBQVcvSSxDQUF6QjtBQUFBLGtCQUNFNEgsSUFBSWxLLEVBQUVrSyxDQUFGLEdBQU1jLEtBQUtLLEtBQUwsQ0FBV25CLENBRHZCO0FBQUEsa0JBRUVvQixJQUFJbkIsS0FBS0MsSUFBTCxDQUFVOUgsSUFBSUEsQ0FBSixHQUFRNEgsSUFBSUEsQ0FBdEIsQ0FGTjtBQUdBLGtCQUFJb0IsSUFBSVosRUFBUixFQUFZO0FBQ1ZZLG9CQUFJLENBQUNBLElBQUlaLEVBQUwsSUFBV1ksQ0FBWCxHQUFldEIsS0FBbkI7QUFDQWhLLGtCQUFFc0MsQ0FBRixJQUFPQSxLQUFLZ0osQ0FBWjtBQUNBdEwsa0JBQUVrSyxDQUFGLElBQU9BLEtBQUtvQixDQUFaO0FBQ0FOLHFCQUFLSyxLQUFMLENBQVcvSSxDQUFYLElBQWdCQSxDQUFoQjtBQUNBMEkscUJBQUtLLEtBQUwsQ0FBV25CLENBQVgsSUFBZ0JBLENBQWhCO0FBQ0Q7QUFDRjtBQUNELG1CQUFPZSxLQUFLTCxHQUFMLElBQVlPLEtBQUtSLEdBQWpCLElBQXdCTyxLQUFLSixHQUE3QixJQUFvQ00sS0FBS1AsR0FBaEQ7QUFDRCxXQWREO0FBZUQsU0FyQkQ7QUFzQkQ7O0FBRUQ7QUFDQTtBQUNBLFVBQUlVLFNBQVMsQ0FBYjtBQUNBO0FBQ0EsVUFBSUMsZ0JBQWdCLEVBQXBCOztBQUVBLFdBQUssSUFBSW5KLElBQUksQ0FBYixFQUFnQkEsSUFBSTBFLFlBQVlqSCxNQUFoQyxFQUF3Q3VDLEdBQXhDLEVBQTZDO0FBQzNDbUosc0JBQWlCbkosQ0FBakIsU0FBc0JBLENBQXRCLElBQTZCLENBQTdCO0FBQ0Q7O0FBRUQ0RSxrQkFBWW1DLE9BQVosQ0FBb0IsVUFBU3BKLENBQVQsRUFBWTtBQUM5QndMLHNCQUFpQnhMLEVBQUV1SSxNQUFGLENBQVNrRCxLQUExQixTQUFtQ3pMLEVBQUV0RCxNQUFGLENBQVMrTyxLQUE1QyxJQUF1RCxDQUF2RDtBQUNELE9BRkQ7O0FBSUEsZUFBU3ZDLGNBQVQsR0FBMEI7QUFDeEI7QUFDQSxpQkFBU3dDLFdBQVQsQ0FBcUI5QixDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekIsaUJBQU8yQixjQUFpQjVCLEVBQUU2QixLQUFuQixTQUE0QjVCLEVBQUU0QixLQUE5QixDQUFQO0FBQ0Q7QUFDRHhPLFdBQUdtRSxLQUFILENBQVM2RSxjQUFUO0FBQ0EsWUFBSXNGLFdBQVcsQ0FBZixFQUFrQjtBQUNoQjtBQUNBLGNBQUl2TCxJQUFJL0MsR0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JFLElBQWhCLEdBQXVCdU8sUUFBL0I7QUFDQXZPLGVBQUs4RCxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUFBLG1CQUFLd0ssWUFBWTFMLENBQVosRUFBZTRMLENBQWYsS0FBcUJGLFlBQVlFLENBQVosRUFBZTVMLENBQWYsQ0FBckIsR0FBeUMsQ0FBekMsR0FBNkMsR0FBbEQ7QUFBQSxXQUF0QjtBQUNBcUksZUFBS25ILEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUtsQixFQUFFeUwsS0FBRixLQUFZRyxFQUFFckQsTUFBRixDQUFTa0QsS0FBckIsSUFBOEJ6TCxFQUFFeUwsS0FBRixLQUFZRyxFQUFFbFAsTUFBRixDQUFTK08sS0FBbkQsR0FBMkQsQ0FBM0QsR0FBK0QsR0FBcEU7QUFBQSxXQUF0QjtBQUNBO0FBQ0FGLG1CQUFTLENBQVQ7QUFDRCxTQVBELE1BUUs7QUFDSDtBQUNBbk8sZUFBSzhELEtBQUwsQ0FBVyxTQUFYLEVBQXNCLENBQXRCO0FBQ0FtSCxlQUFLbkgsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQXFLLG1CQUFTLENBQVQ7QUFDRDtBQUNGOztBQUVELGVBQVN6QyxXQUFULENBQXFCOUksQ0FBckIsRUFBd0I7QUFDdEIsWUFBSSxDQUFDL0MsR0FBR21FLEtBQUgsQ0FBU3lLLE1BQWQsRUFBc0I7QUFDcEJoRSxxQkFBV2lFLFdBQVgsQ0FBdUIsSUFBdkIsRUFBNkI3QixPQUE3QjtBQUNEO0FBQ0RqSyxVQUFFK0wsRUFBRixHQUFPL0wsRUFBRXNDLENBQVQ7QUFDQXRDLFVBQUVnTSxFQUFGLEdBQU9oTSxFQUFFa0ssQ0FBVDtBQUNEOztBQUVELGVBQVNuQixPQUFULENBQWlCL0ksQ0FBakIsRUFBb0I7QUFDbEJBLFVBQUUrTCxFQUFGLEdBQU85TyxHQUFHbUUsS0FBSCxDQUFTa0IsQ0FBaEI7QUFDQXRDLFVBQUVnTSxFQUFGLEdBQU8vTyxHQUFHbUUsS0FBSCxDQUFTOEksQ0FBaEI7QUFDRDs7QUFFRCxlQUFTbEIsU0FBVCxDQUFtQmhKLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUksQ0FBQy9DLEdBQUdtRSxLQUFILENBQVN5SyxNQUFkLEVBQXNCO0FBQ3BCaEUscUJBQVdpRSxXQUFYLENBQXVCLENBQXZCO0FBQ0Q7QUFDRDlMLFVBQUUrTCxFQUFGLEdBQU8sSUFBUDtBQUNBL0wsVUFBRWdNLEVBQUYsR0FBTyxJQUFQO0FBQ0Q7QUFFRjs7Ozs7O2tCQXhVa0IxRixLOzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQjJGLFc7OztBQUVuQiw2QkFBNEQ7QUFBQSw0QkFBOUMzUCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwwSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUtzSyxXQUFMLEdBQW1CLE1BQUs5RixTQUFMLENBQWU5RCxNQUFmLENBQXNCLDZCQUF0QixDQUFuQjtBQUNBO0FBQ0EsUUFBSSxDQUFDLE1BQUs0SixXQUFMLENBQWlCMUosSUFBakIsRUFBTCxFQUE4QjtBQUM1QixZQUFLMEosV0FBTCxHQUFtQixNQUFLOUYsU0FBTCxDQUFlN0IsTUFBZixDQUFzQixlQUF0QixFQUNoQjhCLE9BRGdCLENBQ1IscUJBRFEsRUFDZSxJQURmLEVBQ3FCQyxLQURyQixDQUMyQixTQUQzQixFQUNzQyxNQUR0QyxDQUFuQjtBQUVEO0FBUHlEO0FBUTNEOzs7OzJCQUVNQyxNLEVBQVE7QUFBQTs7QUFFYjtBQUNBLFVBQUksQ0FBQ0EsT0FBT2pCLEtBQVIsSUFBaUIsQ0FBQ04sT0FBT0MsTUFBUCxDQUFjc0IsT0FBT2pCLEtBQXJCLEVBQTRCSixNQUFsRCxFQUEwRDtBQUN4RCxhQUFLL0MsTUFBTCxDQUFZQyxLQUFaLENBQWtCLGdEQUFsQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBSzhKLFdBQUwsQ0FBaUJ0SCxJQUFqQixDQUFzQixXQUF0QixrQkFBZ0R2QyxHQUFHbUUsS0FBSCxDQUFTQyxPQUFULEdBQW1CLENBQW5FLFdBQXdFcEUsR0FBR21FLEtBQUgsQ0FBU0UsT0FBVCxHQUFtQixDQUEzRjs7QUFFQTtBQUNBLFdBQUt3RixXQUFMLENBQWlCNUYsS0FBakIsQ0FBdUIsU0FBdkIsRUFBa0MsT0FBbEM7O0FBRUE7QUFDQSxVQUFJLEtBQUs0RixXQUFMLENBQWlCekgsU0FBakIsQ0FBMkIsR0FBM0IsRUFBZ0NqQyxJQUFoQyxFQUFKLEVBQTRDO0FBQzFDO0FBQ0Q7O0FBRUQ7QUFDQUgsU0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0I2QyxFQUFsQixDQUFxQiwyQkFBckIsRUFBa0Q7QUFBQSxlQUFNLE9BQUtqRCxRQUFMLEVBQU47QUFBQSxPQUFsRDs7QUFFQTtBQUNBLFVBQUl3RyxPQUFPLEtBQUt3RCxXQUFMLENBQWlCM0gsTUFBakIsQ0FBd0IsV0FBeEIsRUFBcUNBLE1BQXJDLENBQTRDLEtBQTVDLEVBQW1ESyxJQUFuRCxDQUF3RCxPQUF4RCxFQUFpRSxxQkFBakUsRUFBd0ZMLE1BQXhGLENBQStGLElBQS9GLENBQVg7QUFDQSxVQUFJTCxnQkFBZ0IsS0FBS3VCLFFBQUwsQ0FBY1QsT0FBT0MsTUFBUCxDQUFjc0IsT0FBT2pCLEtBQXJCLENBQWQsQ0FBcEI7QUFDQSxXQUFLSSxRQUFMLENBQWNnRCxJQUFkLEVBQW9CeEUsYUFBcEI7O0FBRUE3QixTQUFHbUUsS0FBSCxDQUFTNkUsY0FBVDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLYSxXQUFMLENBQWlCekgsU0FBakIsQ0FBMkIsR0FBM0IsRUFBZ0N1QyxNQUFoQztBQUNBLFdBQUtrRixXQUFMLENBQWlCNUYsS0FBakIsQ0FBdUIsU0FBdkIsRUFBa0MsTUFBbEM7QUFDRDs7Ozs7O2tCQTVDa0IrSyxXOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJDLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUM1UCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwrR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7MkJBRU13QixJLEVBQU07O0FBRVg7QUFDQSxVQUFJLENBQUNBLEtBQUs4RCxNQUFMLENBQVlDLEtBQWpCLEVBQXdCO0FBQ3RCLGFBQUtoRixNQUFMLENBQVlDLEtBQVosQ0FBa0IsNkNBQWxCO0FBQ0E7QUFDRDs7QUFFRCxVQUFJK0QsVUFBVSxzQkFBWSxLQUFLNUQsT0FBakIsQ0FBZDs7QUFFQSxVQUFJWSxTQUFTLEtBQUtaLE9BQUwsQ0FBYVosUUFBMUI7O0FBRUEsVUFBSTRQLE9BQU9uTyxLQUFLOEQsTUFBTCxDQUFZQyxLQUFaLENBQWtCb0ssSUFBN0I7QUFBQSxVQUNFQyxXQUFXcE8sS0FBSzhELE1BQUwsQ0FBWUMsS0FBWixDQUFrQnpDLElBRC9CO0FBQUEsVUFFRStNLGVBQWV6TSxPQUFPZSxJQUFQLENBQVl5TCxRQUFaLENBRmpCOztBQUlBLFVBQUlqRixNQUFNcEosT0FBT2IsTUFBUCxDQUFjLFdBQWQsQ0FBVjtBQUFBLFVBQ0VvUCxTQUFTLEVBQUUxSixLQUFLLEVBQVAsRUFBVzJKLE9BQU8sRUFBbEIsRUFBc0JDLFFBQVEsRUFBOUIsRUFBa0M3SixNQUFNLEVBQXhDLEVBRFg7QUFBQSxVQUVFZ0MsUUFBUSxDQUFDNUcsT0FBT3lCLElBQVAsQ0FBWSxPQUFaLENBQUQsSUFBeUJ2QyxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkUsSUFBbEIsR0FBeUJnSyxxQkFBekIsR0FBaUR6QyxLQUZwRjtBQUFBLFVBR0VDLFNBQVMsQ0FBQzdHLE9BQU95QixJQUFQLENBQVksUUFBWixDQUFELElBQTBCdkMsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JFLElBQWxCLEdBQXlCZ0sscUJBQXpCLEdBQWlEeEMsTUFIdEY7O0FBS0E7QUFDQUQsY0FBUUEsUUFBUTJILE9BQU8zSixJQUFmLEdBQXNCMkosT0FBT0MsS0FBckM7QUFDQTNILGVBQVNBLFNBQVMwSCxPQUFPMUosR0FBaEIsR0FBc0IwSixPQUFPRSxNQUF0Qzs7QUFFQSxVQUFJbkYsSUFBSXBLLEdBQUdxSyxVQUFILEdBQWdCQyxRQUFoQixDQUF5QixHQUF6QixDQUFSOztBQUVBO0FBQ0EsVUFBSWpGLElBQUlyRixHQUFHd1AsU0FBSCxHQUFlQyxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJL0gsS0FBSixDQUFyQixFQUFpQzRGLE9BQWpDLENBQXlDLEdBQXpDLEVBQThDekgsTUFBOUMsQ0FBcURxSixLQUFLN0osQ0FBTCxDQUFPUSxNQUE1RCxDQUFSO0FBQ0EsVUFBSW9ILElBQUlqTixHQUFHMFAsV0FBSCxHQUFpQkQsS0FBakIsQ0FBdUIsQ0FBQzlILE1BQUQsRUFBUyxDQUFULENBQXZCLEVBQW9DOUIsTUFBcEMsQ0FBMkNxSixLQUFLakMsQ0FBTCxDQUFPcEgsTUFBbEQsQ0FBUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFJOEosTUFBTSxFQUFWO0FBQ0FQLG1CQUFhakQsT0FBYixDQUFxQjtBQUFBLGVBQU93RCxNQUFNQSxJQUFJQyxNQUFKLENBQVdULFNBQVMzSyxHQUFULENBQVgsQ0FBYjtBQUFBLE9BQXJCOztBQUVBLFVBQUksQ0FBQzBLLEtBQUtqQyxDQUFMLENBQU9wSCxNQUFQLENBQWNoRCxNQUFuQixFQUEyQjtBQUN6Qm9LLFVBQUVwSCxNQUFGLENBQVMsQ0FBQyxDQUFELEVBQUk3RixHQUFHZ0YsR0FBSCxDQUFPMkssR0FBUCxFQUFZO0FBQUEsaUJBQUs1TSxDQUFMO0FBQUEsU0FBWixDQUFKLENBQVQ7QUFDRDs7QUFFRCxVQUFJLENBQUNtTSxLQUFLN0osQ0FBTCxDQUFPUSxNQUFQLENBQWNoRCxNQUFuQixFQUEyQjtBQUN6QnFNLGFBQUs3SixDQUFMLENBQU9RLE1BQVAsR0FBZ0IsZ0JBQU1nSyxXQUFOLENBQWtCRixJQUFJOU0sTUFBSixHQUFhdU0sYUFBYXZNLE1BQTVDLENBQWhCO0FBQ0F3QyxVQUFFUSxNQUFGLENBQVNxSixLQUFLN0osQ0FBTCxDQUFPUSxNQUFoQjtBQUNEOztBQUVELFVBQUlpSyxZQUFZNUYsSUFBSTlILFNBQUosQ0FBYyxlQUFkLENBQWhCOztBQUVBLFVBQUksQ0FBQzBOLFVBQVUzUCxJQUFWLEVBQUwsRUFBdUI7QUFDckIyUCxvQkFBWTVGLElBQUloSSxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUIsQ0FBWjtBQUNEOztBQUVENk0sbUJBQWFqRCxPQUFiLENBQXFCLFVBQVMzSCxHQUFULEVBQWNnSyxLQUFkLEVBQXFCO0FBQ3hDLFlBQUl1QixNQUFNRCxVQUFVMU4sU0FBVixVQUEyQm9NLEtBQTNCLEVBQW9Dbk0sSUFBcEMsQ0FBeUM4TSxTQUFTM0ssR0FBVCxDQUF6QyxDQUFWOztBQUVBdUwsWUFBSTFFLElBQUosR0FBV2hCLFVBQVgsQ0FBc0JELENBQXRCLEVBQXlCekYsTUFBekI7O0FBRUE7QUFDQW9MLFlBQUl6TixLQUFKLEdBQ0dKLE1BREgsQ0FDVSxNQURWLEVBRUcrQixLQUZILENBRVMsTUFGVCxFQUVpQjtBQUFBLGlCQUFNLGdCQUFNNEksTUFBTixDQUFhMkIsUUFBUSxDQUFyQixDQUFOO0FBQUEsU0FGakIsRUFHR2pNLElBSEgsQ0FHUSxPQUhSLGlCQUc4QmlNLEtBSDlCLEVBSUdqTSxJQUpILENBSVEsR0FKUixFQUlhLFVBQVNRLENBQVQsRUFBWXFDLENBQVosRUFBZTtBQUFFLGlCQUFPQyxFQUFFNkosS0FBSzdKLENBQUwsQ0FBT1EsTUFBUCxDQUFjVCxDQUFkLENBQUYsSUFBc0JvSixTQUFTbkosRUFBRTJLLFNBQUYsS0FBZ0JaLGFBQWF2TSxNQUF0QyxDQUE3QjtBQUE2RSxTQUozRyxFQUtHTixJQUxILENBS1EsT0FMUixFQUtrQjhDLEVBQUUySyxTQUFGLEtBQWdCWixhQUFhdk0sTUFBOUIsR0FBd0MsQ0FMekQsRUFNR04sSUFOSCxDQU1RLEdBTlIsRUFNYSxVQUFTUSxDQUFULEVBQVk7QUFBRSxpQkFBT2tLLEVBQUVsSyxDQUFGLENBQVA7QUFBYyxTQU56QyxFQU9HUixJQVBILENBT1EsUUFQUixFQU9rQixVQUFTUSxDQUFULEVBQVk7QUFBRSxpQkFBTzRFLFNBQVNzRixFQUFFbEssQ0FBRixDQUFoQjtBQUF1QixTQVB2RCxFQVFHd0ksS0FSSCxDQVFTd0UsR0FSVCxFQVNHak4sRUFUSCxDQVNNLFdBVE4sRUFTbUI7QUFBQSxpQkFBS2dCLFFBQVFuRSxNQUFSLENBQWUsRUFBRSxXQUFXNkUsR0FBYixFQUFrQixTQUFTekIsQ0FBM0IsRUFBZixDQUFMO0FBQUEsU0FUbkIsRUFVR0QsRUFWSCxDQVVNLFVBVk4sRUFVa0I7QUFBQSxpQkFBTWdCLFFBQVFqRSxRQUFSLEVBQU47QUFBQSxTQVZsQjtBQVdELE9BakJEOztBQW1CQTtBQUNBLFVBQUlvUSxhQUFhL0YsSUFBSTlILFNBQUosQ0FBYyxpQkFBZCxDQUFqQjs7QUFFQSxVQUFJLENBQUM2TixXQUFXOVAsSUFBWCxFQUFMLEVBQXdCO0FBQ3RCOFAscUJBQWEvRixJQUFJaEksTUFBSixDQUFXLEdBQVgsRUFBZ0JLLElBQWhCLENBQXFCLE9BQXJCLEVBQThCLGVBQTlCLENBQWI7QUFDRDs7QUFFRDBOLGlCQUFXN04sU0FBWCxDQUFxQixHQUFyQixFQUEwQnVDLE1BQTFCOztBQUVBO0FBQ0FzTCxpQkFDRzFOLElBREgsQ0FDUSxXQURSLG1CQUNvQ29GLE1BRHBDLFFBRUdHLElBRkgsQ0FFUTlILEdBQUdrUSxVQUFILENBQWM3SyxDQUFkLENBRlIsRUFHR25ELE1BSEgsQ0FHVSxNQUhWLEVBSUdLLElBSkgsQ0FJUSxJQUpSLEVBSWMsRUFKZCxFQUtHQSxJQUxILENBS1EsSUFMUixFQUtjbUYsUUFBUSxDQUx0QixFQU1HbkYsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsT0FOaEIsRUFPR0EsSUFQSCxDQU9RLE9BUFIsRUFPaUIsYUFQakIsRUFRRzBCLEtBUkgsQ0FRUyxhQVJULEVBUXdCLEtBUnhCLEVBU0dTLElBVEgsQ0FTUXdLLEtBQUs3SixDQUFMLENBQU83QyxLQVRmOztBQVdBO0FBQ0EsVUFBSTJOLGFBQWFqRyxJQUFJOUgsU0FBSixDQUFjLGlCQUFkLENBQWpCOztBQUVBLFVBQUksQ0FBQytOLFdBQVdoUSxJQUFYLEVBQUwsRUFBd0I7QUFDdEJnUSxxQkFBYWpHLElBQUloSSxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsZUFBOUIsQ0FBYjtBQUNEOztBQUVENE4saUJBQVcvTixTQUFYLENBQXFCLEdBQXJCLEVBQTBCdUMsTUFBMUI7O0FBRUE7QUFDQXdMLGlCQUNHckksSUFESCxDQUNROUgsR0FBR29RLFFBQUgsQ0FBWW5ELENBQVosQ0FEUixFQUVHL0ssTUFGSCxDQUVVLE1BRlYsRUFHR0ssSUFISCxDQUdRLElBSFIsRUFHYyxDQUFDLEVBSGYsRUFJR0EsSUFKSCxDQUlRLElBSlIsRUFJY29GLFNBQVMsQ0FKdkIsRUFLR3BGLElBTEgsQ0FLUSxNQUxSLEVBS2dCLE9BTGhCLEVBTUdBLElBTkgsQ0FNUSxPQU5SLEVBTWlCLGFBTmpCLEVBT0cwQixLQVBILENBT1MsYUFQVCxFQU93QixLQVB4QixFQVFHUyxJQVJILENBUVF3SyxLQUFLakMsQ0FBTCxDQUFPekssS0FSZjs7QUFVQSxVQUFJZ0ssY0FBY3RDLElBQUk5SCxTQUFKLENBQWMsZ0JBQWQsQ0FBbEI7O0FBRUEsVUFBSSxDQUFDb0ssWUFBWXJNLElBQVosRUFBTCxFQUF5QjtBQUN2QnFNLHNCQUFjdEMsSUFBSWhJLE1BQUosQ0FBVyxHQUFYLEVBQWdCSyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixlQUE5QixDQUFkO0FBQ0Q7O0FBRUQ7QUFDQWlLLGtCQUFZcEssU0FBWixDQUFzQixHQUF0QixFQUEyQnVDLE1BQTNCOztBQUVBLFVBQUk4SCxTQUFTRCxZQUFZcEssU0FBWixDQUFzQixHQUF0QixFQUEyQkMsSUFBM0IsQ0FBZ0MrTSxhQUFhaUIsS0FBYixFQUFoQyxDQUFiOztBQUVBNUQsYUFBT3BCLElBQVAsR0FBY2hCLFVBQWQsQ0FBeUJELENBQXpCLEVBQTRCekYsTUFBNUI7O0FBRUE4SCxlQUFTQSxPQUFPbkssS0FBUCxHQUNOSixNQURNLENBQ0MsR0FERCxFQUVOSyxJQUZNLENBRUQsV0FGQyxFQUVZLFVBQUNRLENBQUQsRUFBSXFDLENBQUo7QUFBQSxnQ0FBeUJBLElBQUksRUFBN0I7QUFBQSxPQUZaLEVBR05tRyxLQUhNLENBR0FrQixNQUhBLENBQVQ7O0FBS0FBLGFBQU92SyxNQUFQLENBQWMsTUFBZCxFQUNHSyxJQURILENBQ1EsR0FEUixFQUNhbUYsUUFBUSxFQURyQixFQUVHbkYsSUFGSCxDQUVRLE9BRlIsRUFFaUIsRUFGakIsRUFHR0EsSUFISCxDQUdRLFFBSFIsRUFHa0IsRUFIbEIsRUFJRzBCLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUNsQixDQUFELEVBQUlxQyxDQUFKO0FBQUEsZUFBVSxnQkFBTXlILE1BQU4sQ0FBYXpILElBQUksQ0FBakIsQ0FBVjtBQUFBLE9BSmpCOztBQU1BcUgsYUFBT3ZLLE1BQVAsQ0FBYyxNQUFkLEVBQ0dLLElBREgsQ0FDUSxHQURSLEVBQ2FtRixRQUFRLEVBRHJCLEVBRUduRixJQUZILENBRVEsR0FGUixFQUVhLENBRmIsRUFHR0EsSUFISCxDQUdRLElBSFIsRUFHYyxPQUhkLEVBSUcwQixLQUpILENBSVMsYUFKVCxFQUl3QixLQUp4QixFQUtHUyxJQUxILENBS1E7QUFBQSxlQUFLM0IsQ0FBTDtBQUFBLE9BTFI7QUFNRDs7Ozs7O2tCQXRKa0JrTSxRIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NjE1YmI1ZWQyYzljYzA0ZmM0YiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5ub2RlKCkucGFyZW50Tm9kZSk7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdzdmcnKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgdmFyIGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgdmFyIGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5leGVjdXRlKGQpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICB2YXIgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZy5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgdmFyIG1vZGFsID0gbmV3IE1vZGFsKHRoaXMub3B0aW9ucyk7XG4gICAgICByZXR1cm4gbW9kYWwucmVuZGVyKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoY29uZmlnLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuc2VsZWN0KCdmb3JlaWduT2JqZWN0LnRvb2x0aXBzJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMudG9vbHRpcC5ub2RlKCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCd0b29sdGlwLWhvbGRlcicsIHRydWUpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICAvLyBqdXN0IGlnbm9yZSByZW5kZXJpbmcgaWYgbm8gbWVudXMgYXJlIHByZXNlbnRcbiAgICBpZiAoIW9iamVjdCB8fCAhT2JqZWN0LnZhbHVlcyhvYmplY3QpLmxlbmd0aCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vdGhpbmcgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9vbHRpcC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQub2Zmc2V0WCArIDV9LCR7ZDMuZXZlbnQub2Zmc2V0WSArIDV9KWApO1xuXG4gICAgLy9kMy5zZWxlY3QoZDMuZXZlbnQuc3JjRWxlbWVudCkuYXR0cigndHJhbnNmb3JtJylcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLnRvb2x0aXAuYXBwZW5kKCd4aHRtbDpkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgT2JqZWN0LmtleXMob2JqZWN0KS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoa2V5KTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChvYmplY3Rba2V5XSk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpdGNoIChqc29uLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIHJldHVybiBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKCdOb3QgaW1wbGVtZW50ZWQgeWV0IScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBjaGFydCB0eXBlIFske2pzb24uY2FudmFzLmNoYXJ0LnR5cGV9XSBpcyBub3QgaW1wbGVtZW50ZWQhYCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHN0YXRpYyB6b29tVG9GaXQoZWxlbWVudCkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBkMy56b29tVHJhbnNmb3JtKGVsZW1lbnQubm9kZSgpKTtcbiAgICB0cmFuc2Zvcm0udHJhbnNsYXRlKGVsZW1lbnQubGVmdCwgZWxlbWVudC50b3ApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gJy4vdXRpbC9qc29uLXV0aWxzJztcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi9yZW5kZXIvd2luZG93JztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9yZW5kZXIvY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL3JlbmRlci9tZW51LW1haW4nO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vcmVuZGVyL2dyYXBoJztcbmltcG9ydCBDaGFydCBmcm9tICcuL3JlbmRlci9jaGFydCc7XG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjIuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5yZW5kZXIoanNvbik7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChncmFwaCk7XG4gICAgICBjYW52YXMuYWRkKGNoYXJ0KTtcbiAgICAgIHdpbmRvdy5hZGQobWVudSk7XG4gICAgICB3aW5kb3cuYWRkKGNhbnZhcyk7XG4gICAgICB2YXIgZWxlbWVudCA9IHdpbmRvdy5yZW5kZXIoanNvbik7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3cgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciB3aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciB3aW5kb3cgPSBkMy5zZWxlY3QoYCMke3dpbmRvd0lkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7d2luZG93SWR9XS4uLmApO1xuICAgICAgd2luZG93ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdkaXYnKSAvLy5yZW1vdmUoKVxuICAgICAgICAuYXR0cignaWQnLCB3aW5kb3dJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBmcmFuY3ktd2luZG93Jyk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkIFske3dpbmRvd0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYFdpbmRvdyB1cGRhdGVkIFske3dpbmRvd0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci93aW5kb3cuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vL0ZJWE1FIGltcGxlbWVudCBwcm9wcGVyIHpvb20gdG8gZml0LCBzZWUgaHR0cHM6Ly9ibC5vY2tzLm9yZy9pYW1rZXZpbnYvMGEyNGU5MTI2Y2QyZmE2YjI4M2M2ZjJkNzc0YjY5YTJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pLm5vZGUoKTtcbiAgICAvL3ZhciBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG4gICAgdmFyIGNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIGNhbnZhcyA9IHBhcmVudC5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIGNhbnZhcyA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIGNhbnZhcy5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdmFyIHpvb20gPSBkMy56b29tKCk7IC8vLnNjYWxlRXh0ZW50KFsxLCA4XSk7XG5cbiAgICB2YXIgY29udGVudCA9IGNhbnZhcy5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSBjYW52YXMuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgICBjYW52YXMuY2FsbCh6b29tKS5vbihcImRibGNsaWNrLnpvb21cIiwgbnVsbCk7IC8vLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTtcbiAgICB9XG5cbiAgICBjYW52YXMub24oXCJjbGlja1wiLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIC8qXG4gICAgICAgICB0aGlzLnpvb21Ub0ZpdCA9IGNsaWNrZWQ7XG5cbiAgICAgICAgIGZ1bmN0aW9uIGNsaWNrZWQoKSB7XG4gICAgICAgICAgIGlmIChhY3RpdmUubm9kZSgpID09PSB0aGlzKSB7IHJldHVybiB6b29tUmVzZXQoKTsgfVxuICAgICAgICAgICBhY3RpdmUuY2xhc3NlZChcImFjdGl2ZVwiLCBmYWxzZSk7XG4gICAgICAgICAgIGFjdGl2ZSA9IGQzLnNlbGVjdCh0aGlzKS5jbGFzc2VkKFwiYWN0aXZlXCIsIHRydWUpO1xuXG4gICAgICAgICAgIHZhciBkeCA9IHRoaXMuZ2V0QkJveCgpLndpZHRoLFxuICAgICAgICAgICAgIGR5ID0gdGhpcy5nZXRCQm94KCkuaGVpZ2h0LFxuICAgICAgICAgICAgIHNjYWxlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oOCwgMC45IC8gTWF0aC5tYXgoZHggLyBqc29uLmNhbnZhcy53aWR0aCwgZHkgLyBqc29uLmNhbnZhcy5oZWlnaHQpKSksXG4gICAgICAgICAgICAgdHJhbnNsYXRlID0gW2pzb24uY2FudmFzLndpZHRoIC8gMiAtIHNjYWxlLCBqc29uLmNhbnZhcy5oZWlnaHQgLyAyIC0gc2NhbGVdO1xuXG4gICAgICAgICAgIGNhbnZhcy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpO1xuICAgICAgICAgfVxuXG4gICAgICAgICBmdW5jdGlvbiB6b29tUmVzZXQoKSB7XG4gICAgICAgICAgIGFjdGl2ZS5jbGFzc2VkKFwiYWN0aXZlXCIsIGZhbHNlKTtcbiAgICAgICAgICAgYWN0aXZlID0gZDMuc2VsZWN0KG51bGwpO1xuICAgICAgICAgICBjYW52YXMudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAgICAgIH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgLy90aGlzLmNhbnZhcyA9IGNhbnZhcztcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgndWwnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICBtZW51LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLnRpdGxlKSB7XG4gICAgICBtZW51LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyBmb3ImbmJzcDsnKS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGpzb24udGl0bGUpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBncmFwaCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5ncmFwaCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIEdyYXBoIHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL3ZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCgtNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoNTAwKS5zdHJlbmd0aCgwLjM1KTtcblxuICAgIGlmIChqc29uLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogKGQuc2l6ZSAqIDUpKS5zdHJlbmd0aCgxKTtcbiAgICB9XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpLnN0cmVuZ3RoKDAuMDAxKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC0yNTApKVxuICAgICAgLmZvcmNlKCdjb2xsaWRlJywgZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplKSlcbiAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnbGluZS5mcmFuY3ktbGluaycpLmRhdGEoY2FudmFzTGlua3MpO1xuXG4gICAgbGluay5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAubWVyZ2Uobm9kZSk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LnJlbmRlcihkKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnJlbmRlcihkLmluZm8pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIGNhbGxiYWNrLmV4ZWN1dGUoeyBjYWxsYmFjazogY2IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsYWJlbEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbHMnKTtcblxuICAgIGlmICghbGFiZWxHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxhYmVsR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAubWVyZ2UobGFiZWwpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gcGFyZW50LnNlbGVjdEFsbCgnLmxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gcGFyZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydCgoYSwgYikgPT4gYS5sYXllciA+IGIubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2R9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgkezEwfSwkeyhpICsgMSkgKiAxMX0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgIHNpbXVsYXRpb24uYWxwaGEoMSkucmVzdGFydCgpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplICogZC50aXRsZS5sZW5ndGggKiAyKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUgKiAyKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuOSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMTsgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXM7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogZC5zaXplICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5zZWxlY3QoJ2ZvcmVpZ25PYmplY3QuY29udGV4dC1tZW51cycpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmNvbnRleHRNZW51Lm5vZGUoKSkge1xuICAgICAgdGhpcy5jb250ZXh0TWVudSA9IHRoaXMuU1ZHUGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpXG4gICAgICAgIC5jbGFzc2VkKCdjb250ZXh0LW1lbnUtaG9sZGVyJywgdHJ1ZSkuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBtZW51cyBhcmUgcHJlc2VudFxuICAgIGlmICghb2JqZWN0Lm1lbnVzIHx8ICFPYmplY3QudmFsdWVzKG9iamVjdC5tZW51cykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQ29udGV4dE1lbnUgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dE1lbnUuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lm9mZnNldFggKyA1fSwke2QzLmV2ZW50Lm9mZnNldFkgKyA1fSlgKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuY29udGV4dE1lbnUuYXBwZW5kKCd4aHRtbDpkaXYnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIEJhckNoYXJ0IHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgLy8gVE9ETyB0aGlzIHNob3VsZCB6b29tIHRvIGZpdFxuICAgIC8vdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oc3ZnLm5vZGUoKSk7XG4gICAgLy90cmFuc2Zvcm0ueCA9IG1hcmdpbi5sZWZ0O1xuICAgIC8vdHJhbnNmb3JtLnkgPSBtYXJnaW4udG9wO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm1lcmdlKGJhcilcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4gdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgKCkgPT4gdG9vbHRpcC51bnJlbmRlcigpKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwic291cmNlUm9vdCI6IiJ9