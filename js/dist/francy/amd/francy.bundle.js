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
        var action = entry.append('a').attr('title', menuItem.title).html(menuItem.title);
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          var content = entry.append('ul');
          var subMenusIterator = this.iterator(Object.values(menuItem.menus));
          this.traverse(content, subMenusIterator);
        }
        if (menuItem.callback && Object.values(menuItem.callback).length) {
          action.on('click', function () {
            return new _callback2.default(_this2.options).execute(menuItem);
          });
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
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

      var content = canvas.select('g.content');

      if (!content.node()) {
        var contentGroup = canvas.append('g').attr('class', 'content');
        canvas.call(d3.zoom().on('zoom', function () {
          contentGroup.attr('transform', d3.event.transform);
        }));
      }

      this.logger.debug('Canvas updated ' + canvasId + '...');

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

var _tooltip = __webpack_require__(6);

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

var _callback = __webpack_require__(5);

var _callback2 = _interopRequireDefault(_callback);

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
    key: 'traverse',
    value: function traverse(appendTo, menusIterator) {
      while (menusIterator.hasNext()) {
        var menuItem = menusIterator.next();
        if (menuItem.callback && Object.values(menuItem.callback).length) {
          var callback = new _callback2.default(this.options);
          var entry = appendTo.append('li');
          var action = entry.append('a').attr('title', menuItem.title).html(menuItem.title);
          action.on('click', function () {
            return callback.execute(menuItem);
          });
        } else {
          if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
            var content = appendTo.append('ul');
            var subMenusIterator = this.iterator(Object.values(menuItem.menus));
            this.traverse(content, subMenusIterator);
          }
        }
      }
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

      legend.append('text').attr('x', width + 70).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
        return d;
      });
    }
  }]);

  return BarChart;
}(_renderer2.default);

exports.default = BarChart;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzM2NWIyNTdjMzJhMGI3ZTU2NDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvd2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZDMiLCJzZWxlY3QiLCJvcHRpb25zIiwibm9kZSIsInBhcmVudE5vZGUiLCJJRFV0aWxzIiwiY2FudmFzSWQiLCJvYmplY3RJZCIsIm1lbnVJZCIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInBhcmVudCIsImpzb24iLCJjaGlsZHJlbk9wdGlvbnMiLCJ1cGRhdGUiLCJzaW5nbGV0b24iLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYXBwZW5kIiwiYWN0aW9uIiwiYXR0ciIsInRpdGxlIiwiaHRtbCIsIm1lbnVzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiY2FsbGJhY2siLCJvbiIsImV4ZWN1dGUiLCJhcnJheSIsIm5leHRJbmRleCIsIkNhbGxiYWNrSGFuZGxlciIsImNvbmZpZyIsImtleXMiLCJyZXF1aXJlZEFyZ3MiLCJtb2RhbCIsIlRvb2x0aXAiLCJ0b29sdGlwIiwic2VsZWN0QWxsIiwiSFRNTFBhcmVudCIsInN0eWxlIiwib2JqZWN0IiwiZXZlbnQiLCJwYWdlWCIsInBhZ2VZIiwidGFibGUiLCJtYXAiLCJrZXkiLCJyb3ciLCJ0ZXh0IiwicmVtb3ZlIiwiQ2hhcnQiLCJjYW52YXMiLCJjaGFydCIsInR5cGUiLCJtYXgiLCJBcnJheSIsImZyb20iLCJfIiwiaSIsIngiLCJlbGVtZW50IiwidHJhbnNmb3JtIiwiem9vbVRyYW5zZm9ybSIsInRyYW5zbGF0ZSIsImxlZnQiLCJ0b3AiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJGcmFuY3kiLCJFcnJvciIsImlucHV0IiwicGFyc2UiLCJ3aW5kb3ciLCJtZW51IiwiZ3JhcGgiLCJhZGQiLCJleHBvcnRzIiwiZSIsIkpzb25VdGlscyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlIiwianNvblJlZ2V4IiwibWF0Y2giLCJleGVjIiwiYWdlbnQiLCJXaW5kb3ciLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiaWQiLCJyZW5kZXJDaGlsZHJlbiIsIkJhc2UiLCJDYW52YXMiLCJnZXRDYW52YXNJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGVudEdyb3VwIiwiY2FsbCIsInpvb20iLCJNYWluTWVudSIsImdldE1lbnVJZCIsIk1vZGFsIiwic2VsZiIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsImFyZyIsInZhbHVlIiwib25jaGFuZ2UiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwicHJldmVudERlZmF1bHQiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIm5hbWUiLCJHcmFwaCIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwiZCIsImxheWVyIiwic2l6ZSIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTGluayIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZUNlbnRlciIsImxpbmtHcm91cCIsImxpbmsiLCJkYXRhIiwiZXhpdCIsImVudGVyIiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNvcnQiLCJhIiwiYiIsInkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudSIsIkJhckNoYXJ0IiwiYXhpcyIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwibWFyZ2luIiwicmlnaHQiLCJib3R0b20iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNsaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtB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QUpULEVBSXdCLEtBSnhCLEVBS0dTLElBTEgsQ0FLUTtBQUFBLGVBQUs0RixDQUFMO0FBQUEsT0FMUjtBQU1EOzs7Ozs7a0JBcEprQnVFLFEiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMzNjViMjU3YzMyYTBiN2U1NjQzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLm5vZGUoKS5wYXJlbnROb2RlKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgdmFyIGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgdmFyIGFjdGlvbiA9IGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5leGVjdXRlKG1lbnVJdGVtKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgbW9kYWwgPSBuZXcgTW9kYWwodGhpcy5vcHRpb25zKTtcbiAgICAgIHJldHVybiBtb2RhbC5yZW5kZXIoY29uZmlnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihjb25maWcuY2FsbGJhY2spO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLnRvb2x0aXAgPSBkMy5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3kudG9vbHRpcCcpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLnRvb2x0aXAubm9kZSgpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdG9vbHRpcCcpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICB0aGlzLnRvb2x0aXBcbiAgICAgIC5zdHlsZSgnbGVmdCcsIGQzLmV2ZW50LnBhZ2VYICsgMjAgKyAncHgnKVxuICAgICAgLnN0eWxlKCd0b3AnLCBkMy5ldmVudC5wYWdlWSArICdweCcpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YWJsZSA9IHRoaXMudG9vbHRpcC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ3RhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdGFibGUtYm9keScpO1xuICAgIE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IHRhYmxlLWNlbGwnKS50ZXh0KGtleSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kgdGFibGUtY2VsbCcpLnRleHQob2JqZWN0W2tleV0pO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy50b29sdGlwLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLnRvb2x0aXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy50b29sdGlwLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoanNvbi5jYW52YXMuY2hhcnQudHlwZSkge1xuICAgICAgY2FzZSBcImJhclwiOlxuICAgICAgICByZXR1cm4gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbygnTm90IGltcGxlbWVudGVkIHlldCEnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY2hhcnQgdHlwZSBbJHtqc29uLmNhbnZhcy5jaGFydC50eXBlfV0gaXMgbm90IGltcGxlbWVudGVkIWApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICBzdGF0aWMgem9vbVRvRml0KGVsZW1lbnQpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gZDMuem9vbVRyYW5zZm9ybShlbGVtZW50Lm5vZGUoKSk7XG4gICAgdHJhbnNmb3JtLnRyYW5zbGF0ZShlbGVtZW50LmxlZnQsIGVsZW1lbnQudG9wKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tICcuL3V0aWwvanNvbi11dGlscyc7XG5pbXBvcnQgV2luZG93IGZyb20gJy4vcmVuZGVyL3dpbmRvdyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vcmVuZGVyL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9yZW5kZXIvbWVudS1tYWluJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL3JlbmRlci9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9yZW5kZXIvY2hhcnQnO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tICcuL3RyYWNrZXIvY2hhbmdlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC4yLjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kucmVuZGVyKGpzb24pO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIHdpbmRvdyA9IG5ldyBXaW5kb3codGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgbWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIGNhbnZhcy5hZGQoZ3JhcGgpO1xuICAgICAgY2FudmFzLmFkZChjaGFydCk7XG4gICAgICB3aW5kb3cuYWRkKG1lbnUpO1xuICAgICAgd2luZG93LmFkZChjYW52YXMpO1xuICAgICAgdmFyIGVsZW1lbnQgPSB3aW5kb3cucmVuZGVyKGpzb24pO1xuICAgICAgcmV0dXJuIGVsZW1lbnQubm9kZSgpO1xuICAgIH1cbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG59XG5jYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgd2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgd2luZG93ID0gZDMuc2VsZWN0KGAjJHt3aW5kb3dJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3dpbmRvd0lkfV0uLi5gKTtcbiAgICAgIHdpbmRvdyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pLmFwcGVuZCgnZGl2JykgLy8ucmVtb3ZlKClcbiAgICAgICAgLmF0dHIoJ2lkJywgd2luZG93SWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3kgd2luZG93Jyk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkIFske3dpbmRvd0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYFdpbmRvdyB1cGRhdGVkIFske3dpbmRvd0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci93aW5kb3cuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfVxuICAgICAqL1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gcGFyZW50LnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgY2FudmFzID0gcGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciBjb250ZW50ID0gY2FudmFzLnNlbGVjdCgnZy5jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICB2YXIgY29udGVudEdyb3VwID0gY2FudmFzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgICAgIGNhbnZhcy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50R3JvdXAuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgJHtjYW52YXNJZH0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBtZW51SWQgPSBJRFV0aWxzLmdldE1lbnVJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIG1lbnUgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghbWVudS5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSBwYXJlbnQuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtYWluLW1lbnUnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIGlmIChqc29uLmNhbnZhcy50aXRsZSkge1xuICAgICAgbWVudS5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAndGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKGpzb24uY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdTYXZlIHRvIFBORyBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ0Fib3V0IEZyYW5jeSBwcmVzc2VkLi4uIE5vdCBJbXBsZW1lbnRlZCEnKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBtb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzIGZvciZuYnNwOycpLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoanNvbi50aXRsZSk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2FyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnYnInKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICB0cnkge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmFyZycpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeSAub3ZlcmxheScpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeSAubW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgJHttb2RhbElkfS4uLmApO1xuXG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmdyYXBoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IGpzb24uY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0ganNvbi5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuY29udGVudCcpLFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIHQgPSBkMy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNTAwKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoLTUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKDUwMCkuc3RyZW5ndGgoMC4zNSk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIChkLnNpemUgKiA1KSkuc3RyZW5ndGgoMSk7XG4gICAgfVxuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKS5zdHJlbmd0aCgwLjAwMSkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMjUwKSlcbiAgICAgIC5mb3JjZSgnY29sbGlkZScsIGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSkpXG4gICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGluay5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cubm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ25vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLm5vZGUnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBjb250ZXh0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5tZXJnZShub2RlKTtcblxuICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZCA9PiBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKS5yZW5kZXIoZCkpXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuICAgIC8vLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkgeyBhbGVydCgnOiknKTsgfSk7XG5cbiAgICAvLyBUT0RPIHRoaXMgY291bGQgYmUgYSB0b29sdGlwIHRhZyBmcm9tIGpzb25cbiAgICBub2RlXG4gICAgICAub24oXCJtb3VzZW1vdmVcIiwgZCA9PiB0b29sdGlwLnJlbmRlcih7ICdJRCc6IGQuaWQsICdWYWx1ZSc6IGQubGF5ZXIgfSkpXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB0b29sdGlwLnVucmVuZGVyKCkpO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGFiZWxzJyk7XG5cbiAgICBpZiAoIWxhYmVsR3JvdXAubm9kZSgpKSB7XG4gICAgICBsYWJlbEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5tZXJnZShsYWJlbCk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBwYXJlbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLnNvcnQoKGEsIGIpID0+IGEubGF5ZXIgPiBiLmxheWVyKSwgZCA9PiBkLmlkKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDEwO1xuICAgICAgICBsZXQgeSA9IChpICsgMSkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgc2ltdWxhdGlvbi5hbHBoYSgxKS5yZXN0YXJ0KCk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUgKiBkLnRpdGxlLmxlbmd0aCAqIDIpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIDIpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC45KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxOyAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlcztcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiBkLnNpemUgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY29udGV4dE1lbnUgPSBkMy5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3kuY29udGV4dC1tZW51Jyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuY29udGV4dE1lbnUubm9kZSgpKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5IGNvbnRleHQtbWVudScpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgdGhpcy5jb250ZXh0TWVudVxuICAgICAgLnN0eWxlKCdsZWZ0JywgKGQzLmV2ZW50LnBhZ2VYIC0gMikgKyAncHgnKVxuICAgICAgLnN0eWxlKCd0b3AnLCAoZDMuZXZlbnQucGFnZVkgLSAyKSArICdweCcpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5jb250ZXh0TWVudS5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmNvbnRleHRNZW51LmFwcGVuZCgndWwnKTtcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhqc29uLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUobWVudUl0ZW0pKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gYXBwZW5kVG8uYXBwZW5kKCd1bCcpO1xuICAgICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICB2YXIgdCA9IGQzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig1MDApO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICAvLyBUT0RPIHRoaXMgc2hvdWxkIHpvb20gdG8gZml0XG4gICAgdmFyIHRyYW5zZm9ybSA9IGQzLnpvb21UcmFuc2Zvcm0oc3ZnLm5vZGUoKSk7XG4gICAgdHJhbnNmb3JtLnggPSBtYXJnaW4ubGVmdDtcbiAgICB0cmFuc2Zvcm0ueSA9IG1hcmdpbi50b3A7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24odCkucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgYmFyJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KVxuICAgICAgICAubWVyZ2UoYmFyKVxuICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgZCA9PiB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pKVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB0b29sdGlwLnVucmVuZGVyKCkpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLngtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd4LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLnktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICd5LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcubGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgNzApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiXSwic291cmNlUm9vdCI6IiJ9