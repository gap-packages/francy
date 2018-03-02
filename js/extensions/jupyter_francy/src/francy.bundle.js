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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(5);

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
        callbackHandler = _ref.callbackHandler,
        _ref$options = _ref.options,
        options = _ref$options === undefined ? {} : _ref$options;

    _classCallCheck(this, Renderer);

    var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler, options: options }));

    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (_this.render === undefined || typeof _this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }
    if (_this.unrender === undefined) {
      _this.logger.debug('No [unrender()] method specified...');
    }
    _this.element = undefined;
    _this.transitionDuration = 750; //ms
    return _this;
  }

  _createClass(Renderer, [{
    key: '_initialize',
    value: function _initialize() {}
  }, {
    key: 'HTMLParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toLowerCase() === 'svg' ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element;
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toLowerCase() === 'div' ? this.options.appendTo.element.select('svg') : this.options.appendTo.element;
    }
  }, {
    key: 'parent',
    get: function get() {
      return this.options.appendTo.element;
    }
  }, {
    key: 'margin',
    get: function get() {
      return { top: 50, right: 50, bottom: 50, left: 50 };
    }
  }, {
    key: 'width',
    get: function get() {
      var width = +this.parent.attr('width') || d3.select('body').node().getBoundingClientRect().width;
      return width - this.margin.left - this.margin.right;
    }
  }, {
    key: 'height',
    get: function get() {
      var height = +this.parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
      return height - this.margin.top - this.margin.bottom;
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
exports.requires = requires;
exports.enabled = enabled;
function requires(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
      if (!hasData(getProperty(this.data, props))) {
        this.logger.debug('No data here [' + props + '], nothing to render... continuing...');
        return;
      }
      return oldValue.apply(this, arguments);
    };

    return descriptor;
  };
}

function enabled(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
      if (!getProperty(this.data, props)) {
        this.logger.debug('No data here [' + props + '], nothing to render... continuing...');
        return;
      }
      return oldValue.apply(this, arguments);
    };

    return descriptor;
  };
}

function getProperty(obj, propertyPath) {

  var tmp = obj;

  if (tmp && propertyPath) {
    var properties = propertyPath.split('.');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var property = _step.value;

        if (!tmp.hasOwnProperty(property)) {
          tmp = undefined;
          break;
        } else {
          tmp = tmp[property];
        }
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

  return tmp;
}

function hasData(obj) {
  return obj && (obj instanceof Array && obj.length || obj instanceof Object && Object.values(obj).length);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
function initialize() {
  return function (target, key, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function () {
      this._initialize();
      return oldValue.apply(this, arguments);
    };
    return descriptor;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(13);

var _tooltip2 = _interopRequireDefault(_tooltip);

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

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.axis = undefined;
    _this.yScale = undefined;
    _this.xScale = undefined;
    _this.datasets = undefined;
    _this.datasetNames = undefined;
    _this.tooltip = undefined;
    return _this;
  }

  _createClass(Chart, [{
    key: '_initialize',
    value: function _initialize() {
      var _this2 = this;

      this.tooltip = new _tooltip2.default(this.options);

      this.element = this.parent.select('g.francy-content');

      this.axis = this.data.canvas.chart.axis;
      this.datasets = this.data.canvas.chart.data;
      this.datasetNames = Object.keys(this.datasets);

      this.xScale = d3.scaleLinear().range([0, this.width]).domain(this.axis.x.domain);
      this.yScale = d3.scaleLinear().range([this.height, 0]).domain(this.axis.y.domain);

      this.allValues = [];
      this.datasetNames.forEach(function (key) {
        return _this2.allValues = _this2.allValues.concat(_this2.datasets[key]);
      });

      if (!this.axis.y.domain.length) {
        this.yScale.domain([0, d3.max(this.allValues, function (d) {
          return d;
        })]);
      }

      if (!this.axis.x.domain.length) {
        this.xScale.domain([0, this.allValues.length / this.datasetNames.length]);
      }
    }
  }, {
    key: '_renderAxis',
    value: function _renderAxis() {
      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + this.height + ')').call(d3.axisBottom(this.xScale)).append('text').attr('dy', 50).attr('dx', this.width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.x.title);

      // force rebuild axis again
      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(this.yScale)).append('text').attr('dx', -50).attr('dy', this.height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.y.title);
    }
  }, {
    key: '_renderLegend',
    value: function _renderLegend() {
      if (this.data.canvas.chart.showLegend) {

        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        }

        // force rebuild legend again
        legendGroup.selectAll('*').remove();

        var legend = legendGroup.selectAll('g').data(this.datasetNames.slice());

        legend.exit().remove();

        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')';
        }).merge(legend);

        legend.append('rect').attr('x', this.width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return Chart.colors(i * 5);
        });

        legend.append('text').attr('x', this.width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }
    }
  }], [{
    key: 'tooltip',
    value: function tooltip(dataset, value) {
      return { 'A': { 'title': 'Dataset', 'text': dataset }, 'B': { 'title': 'Value', 'text': value } };
    }
  }, {
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
exports.default = undefined;

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
      return this;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      // render other components
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.renderers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var renderer = _step.value;

          renderer.settings({ appendTo: this }).load(this.data).render();
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(6);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(16);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global d3 */

var Base = function () {
  function Base(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === undefined ? 'body' : _ref$appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Base);

    this.settings({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * @type {Logger} the logger for this class
     */
    this.log = new _logger2.default(this.options);
  }

  _createClass(Base, [{
    key: 'settings',
    value: function settings(_ref2) {
      var verbose = _ref2.verbose,
          appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler;

      this.options = this.options || {};
      if (!this.options.callbackHandler && !callbackHandler) {
        throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
      }
      if (!this.options.appendTo && !appendTo) {
        throw new Error('Missing an element or id to append the graphics to...!');
      }
      if (typeof appendTo === 'string') {
        appendTo = d3.select(appendTo);
      }
      /**
       * @typedef {Object} Options
       * @property {Boolean} verbose prints extra log information to console.log, default false
       * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
       * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
       */
      this.options.verbose = verbose || this.options.verbose;
      this.options.appendTo = appendTo || this.options.appendTo;
      this.options.callbackHandler = callbackHandler || this.options.callbackHandler;
      return this;
    }
  }, {
    key: 'load',
    value: function load(json, partial) {
      var data = _jsonUtils2.default.parse(json, partial);
      if (data) {
        this.data = data;
      }
      return this;
    }
  }, {
    key: 'logger',
    get: function get() {
      return this.log;
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class provides a logger for the Francy application.
 */
var Logger = function () {

  /**
   * Logger constructor
   * @param verbose prints extra log information to console.log, defaults to false
   */
  function Logger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Logger);

    this.verbose = verbose;
    this.console = console;
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */


  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      if (this.verbose) {
        this.console.debug(Logger._format('DEBUG', message));
      }
    }

    /**
     * Creates a [INFO] entry in the console log
     * @param message the message to print
     */

  }, {
    key: 'info',
    value: function info(message) {
      this.console.info(Logger._format('INFO', message));
    }

    /**
     * Creates a [ERROR] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'error',
    value: function error(message, _error) {
      this.console.error(Logger._format('ERROR', message), _error);
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
      this.console.error(Logger._format('WARN', message), error);
    }

    /**
     * This is a private method that formats all log messages
     * @param level the log level
     * @param message the message to print
     */

  }], [{
    key: '_format',
    value: function _format(level, message) {
      return '[' + level + '] - ' + new Date().toISOString() + ' - ' + message;
    }
  }]);

  return Logger;
}();

exports.default = Logger;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _mathjaxWrapper = __webpack_require__(8);

var _mathjaxWrapper2 = _interopRequireDefault(_mathjaxWrapper);

var _menuContext = __webpack_require__(20);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(13);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Graph = function (_Renderer) {
  _inherits(Graph, _Renderer);

  function Graph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Graph, [{
    key: '_initialize',
    value: function _initialize() {
      this.element = this.parent.select('g.francy-content');
    }
  }, {
    key: '_applyEvents',
    value: function _applyEvents(element) {
      var _this2 = this;

      if (!element) return;

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);
      var mathjax = new _mathjaxWrapper2.default(this.options);

      element.on('contextmenu', function (d) {
        var data = d.data || d;
        // default, build context menu
        contextMenu.load(data, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, data, 'contextmenu');
      }).on('click', function (d) {
        var data = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, data, 'click');
      }).on('dblclick', function (d) {
        var data = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, data, 'dblclick');
      }).on('mouseover', function (d) {
        var data = d.data || d;
        // default, show tooltip
        tooltip.load(data.messages, true).render();
        mathjax.settings({ appendTo: tooltip }).load(_this2.data).render();
      }).on('mouseout', function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute the ones that match the event!
            cb.trigger === event && callback.load({ callback: cb }, true).execute();
          });
        }
      }
    }
  }], [{
    key: 'getSymbol',
    value: function getSymbol(type) {

      var element = undefined;
      switch (type) {
        case 'cross':
          element = d3.symbolCross;
          break;
        case 'diamond':
          element = d3.symbolDiamond;
          break;
        case 'square':
          element = d3.symbolSquare;
          break;
        case 'triangle':
          element = d3.symbolTriangle;
          break;
        case 'star':
          element = d3.symbolStar;
          break;
        case 'wye':
          element = d3.symbolWye;
          break;
        case 'circle':
        default:
          element = d3.symbolCircle;
      }

      return element;
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Graph;
}(_renderer2.default);

exports.default = Graph;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global MathJax, d3 */

var MathJaxWrapper = (_dec = (0, _dataDecorator.enabled)('canvas.texTypesetting'), (_class = function (_Renderer) {
  _inherits(MathJaxWrapper, _Renderer);

  function MathJaxWrapper(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MathJaxWrapper);

    return _possibleConstructorReturn(this, (MathJaxWrapper.__proto__ || Object.getPrototypeOf(MathJaxWrapper)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(MathJaxWrapper, [{
    key: 'render',
    value: function render() {
      this.element = this.options.appendTo.element;
      try {
        MathJax.Hub.Config({
          showMathMenu: false,
          skipStartupTypeset: true,
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            processEscapes: true
          },
          'HTML-CSS': {
            font: 'STIX-Web',
            linebreaks: {
              automatic: true
            }
          },
          'SVG': {
            font: 'STIX-Web',
            linebreaks: {
              automatic: true
            }
          }
        });

        MathJax.Hub.Register.MessageHook('New Math', function (id) {
          if (id && id.length > 1) {
            var mathJaxElement = d3.select('#' + id[1] + '-Frame');
            var svgMathJaxElement = mathJaxElement.select('svg');
            if (svgMathJaxElement.node()) {
              setTimeout(function () {
                setTimeout(function () {
                  var bound = svgMathJaxElement.select('g').node().getBoundingClientRect();
                  svgMathJaxElement.attr('x', -bound.width / 2);
                  svgMathJaxElement.attr('y', -15);
                }, 10);
                d3.select(mathJaxElement.node().parentNode.parentNode).append(function () {
                  return svgMathJaxElement.node();
                });
              }, 10);
            }
          }
        });

        var svgElement = this.element.select('svg');
        if (svgElement.node()) {
          MathJax.Hub.Queue(['setRenderer', MathJax.Hub, 'SVG'], ['Typeset', MathJax.Hub, svgElement.node()], ['setRenderer', MathJax.Hub, 'HTML-CSS'], ['Typeset', MathJax.Hub, this.element.node()]);
        } else {
          MathJax.Hub.Queue(['setRenderer', MathJax.Hub, 'HTML-CSS'], ['Typeset', MathJax.Hub, this.element.node()]);
        }

        MathJax.Hub.Configured();
      } catch (e) {
        if (e.name === 'ReferenceError') {
          this.logger.warn('It seems MathJax is not loaded...', e);
        } else {
          this.logger.error('Not sure what happened :/', e);
        }
      }
    }
  }]);

  return MathJaxWrapper;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = MathJaxWrapper;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(10);

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
            return new _callback2.default(_this2.options).load(d, true).execute();
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _base = __webpack_require__(5);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(21);

var _modalRequired2 = _interopRequireDefault(_modalRequired);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var CallbackHandler = (_dec = (0, _dataDecorator.requires)('callback'), (_class = function (_Base) {
  _inherits(CallbackHandler, _Base);

  function CallbackHandler(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    var _this = _possibleConstructorReturn(this, (CallbackHandler.__proto__ || Object.getPrototypeOf(CallbackHandler)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.callback = callbackHandler;
    return _this;
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute() {
      var _this2 = this;

      if (Object.keys(this.data.callback.requiredArgs).length) {
        var options = this.options;
        options.callbackHandler = function (callbackObj) {
          return _this2._execute.call(_this2, callbackObj);
        };
        return new _modalRequired2.default(options).load(this.data, true).render();
      }

      // Trigger is the expected command on GAP for this events!
      this._execute(this.data.callback);
    }
  }, {
    key: '_execute',
    value: function _execute(calbackObj) {
      this.callback('Trigger(' + JSON.stringify(JSON.stringify(calbackObj)) + ');');
    }
  }]);

  return CallbackHandler;
}(_base2.default), (_applyDecoratedDescriptor(_class.prototype, 'execute', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'execute'), _class.prototype)), _class));
exports.default = CallbackHandler;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

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

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.overlay = undefined;
    _this.holder = undefined;
    return _this;
  }

  _createClass(Modal, [{
    key: '_initialize',
    value: function _initialize() {
      // we want to overlay everything, hence 'body' must be used
      this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      this.holder = d3.select('body').append('div').attr('class', 'francy');
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.overlay.remove();
      this.element.remove();
      this.holder.remove();
      return false;
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
exports.RegisterJupyterKeyboardEvents = RegisterJupyterKeyboardEvents;
exports.syntaxHighlight = syntaxHighlight;

var _logger = __webpack_require__(6);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Jupyter */

function RegisterJupyterKeyboardEvents(classes) {
  // disable keyboard shortcuts in Jupyter for classes
  if (!classes) return;
  try {
    classes.map(function (cl) {
      Jupyter.keyboard_manager.register_events(cl);
    });
  } catch (e) {
    if (e.name === 'ReferenceError') {
      new _logger2.default().info('It seems we\'re not running on Jupyter...', e);
    }
  }
}

// credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Tooltip = (_dec = (0, _dataDecorator.requires)(), (_class = function (_Renderer) {
  _inherits(Tooltip, _Renderer);

  function Tooltip(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {

      this.element = this.HTMLParent.select('div.francy-tooltip-holder');
      // check if the window is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-tooltip-holder');
      }

      // check if it exists already
      if (this.element.selectAll('*').node()) {
        return;
      }

      var pos = d3.mouse(this.SVGParent.node());

      // TODO fix always visible tooltip, fine until someone complains about :P
      this.element.style('left', pos[0] + 15 + 'px').style('top', pos[1] - 15 + 'px');

      var table = this.element.append('div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
      var self = this;
      Object.keys(this.data).map(function (key) {
        var row = table.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').text(self.data[key].title);
        row.append('div').attr('class', 'francy-table-cell').text(self.data[key].text);
      });

      // show tooltip
      this.element.style('display', 'block');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return Tooltip;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Tooltip;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _frame = __webpack_require__(15);

var _frame2 = _interopRequireDefault(_frame);

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ALL_CANVAS = {};

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *  
 * @access public
 * 
 * @version 0.5.x
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.load(json).render();
 */
var Francy = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Renderer) {
  _inherits(Francy, _Renderer);

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

    var _this = _possibleConstructorReturn(this, (Francy.__proto__ || Object.getPrototypeOf(Francy)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    return _this;
  }

  /**
   * Main entry point. Calling render passing a json representation string will 
   * trigger the drawing of a json object.
   * @returns {Object} the html element created
   */


  _createClass(Francy, [{
    key: 'render',
    value: function render() {
      var frame = new _frame2.default(this.options).load(this.data).render();
      ALL_CANVAS[this.data.canvas.id] = frame;
      return frame.element.node();
    }
  }], [{
    key: 'unrender',
    value: function unrender(id) {
      delete ALL_CANVAS[id];
    }
  }]);

  return Francy;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  var oldResize = window.onresize;
  window.onresize = function () {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function (frame) {
      frame.canvas.zoomToFit();
    });
    // call old resize function if any!
    if (typeof oldResize === 'function') {
      oldResize();
    }
  };
} catch (e) {
  exports.Francy = Francy;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = __webpack_require__(4);

var _composite2 = _interopRequireDefault(_composite);

var _canvas = __webpack_require__(17);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(27);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(30);

var _message2 = _interopRequireDefault(_message);

var _mathjaxWrapper = __webpack_require__(8);

var _mathjaxWrapper2 = _interopRequireDefault(_mathjaxWrapper);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Frame = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Composite) {
  _inherits(Frame, _Composite);

  function Frame(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.canvas = new _canvas2.default(_this.options);
    _this.menu = new _menuMain2.default(_this.options);
    _this.messages = new _message2.default(_this.options);
    _this.mathjax = new _mathjaxWrapper2.default(_this.options);
    _this.add(_this.messages).add(_this.menu).add(_this.canvas).add(_this.mathjax);
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var parent = this.options.appendTo;

      var frameId = 'Frame-' + this.data.canvas.id;
      this.element = d3.select('div#' + frameId);
      // check if the canvas is already present
      if (!this.element.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Frame [' + frameId + ']...');
        this.element = parent.append('div').attr('class', 'francy').attr('id', frameId);
      }

      // cannot continue if canvas is not present
      if (!this.element.node()) {
        throw new Error('Oops, could not create frame with id [' + frameId + ']... Cannot proceed.');
      }

      this.logger.debug('Frame updated [' + frameId + ']...');

      this.renderChildren();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Frame;
}(_composite2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Frame;

/***/ }),
/* 16 */
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
     * @param partial - if the input is not a complete Francy JSON Object, defaults to false
     * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
     */
    value: function parse(input) {
      var partial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!input) return;
      input = typeof input !== 'string' ? JSON.stringify(input) : input;
      input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        try {
          var json = JSON.parse(input);
          return json.mime === JsonUtils.MIME || partial ? json : undefined;
        } catch (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        }
      }
    }

    /**
     * Returns a static string representing the mime type supported by this package
     */

  }, {
    key: 'MIME',
    get: function get() {
      return 'application/vnd.francy+json';
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = __webpack_require__(4);

var _composite2 = _interopRequireDefault(_composite);

var _graphFactory = __webpack_require__(18);

var _graphFactory2 = _interopRequireDefault(_graphFactory);

var _chartFactory = __webpack_require__(23);

var _chartFactory2 = _interopRequireDefault(_chartFactory);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Canvas = (_dec = (0, _dataDecorator.requires)('canvas'), (_class = function (_Composite) {
  _inherits(Canvas, _Composite);

  function Canvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.graph = new _graphFactory2.default(_this.options);
    _this.chartFactory = new _chartFactory2.default(_this.options);
    _this.add(_this.graph).add(_this.chartFactory);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var content = void 0;
      var zoom = d3.zoom();
      var self = this;

      function updateZoom(translateX, translateY, scale) {
        self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
      }

      function zoomed() {
        content.attr('transform', d3.event.transform);
      }

      function stopped() {
        if (d3.event.defaultPrevented) {
          d3.event.stopPropagation();
        }
      }

      function zoomToFit() {
        // only execute if enable, of course
        if (self.data.canvas.zoomToFit) {
          var bounds = content.node().getBBox();

          var clientBounds = self.element.node().getBoundingClientRect(),
              fullWidth = clientBounds.right - clientBounds.left,
              fullHeight = clientBounds.bottom - clientBounds.top;

          var width = +bounds.width,
              height = +bounds.height;

          if (width === 0 || height === 0) return;

          var midX = bounds.x + width / 2,
              midY = bounds.y + height / 2;

          var scale = 0.9 / Math.max(width / fullWidth, height / fullHeight);
          var translateX = fullWidth / 2 - scale * midX,
              translateY = fullHeight / 2 - scale * midY;

          content.transition().duration(self.transitionDuration).attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ',' + scale + ')').on('end', function () {
            return updateZoom(translateX, translateY, scale);
          });
        }
      }

      var canvasId = 'Canvas-' + this.data.canvas.id;
      this.element = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!this.element.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        this.element = this.parent.append('svg').attr('class', 'francy-canvas').attr('id', canvasId);
      }

      // cannot continue if canvas is not present
      if (!this.element.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

      content = this.element.select('g.francy-content');

      if (!content.node()) {
        content = this.element.append('g').attr('class', 'francy-content');
        zoom.on('zoom', zoomed);
        // remove zoom on double click!
        this.element.call(zoom).on('dblclick.zoom', null);
      }

      this.element.on('click', stopped, true);

      this.element.zoomToFit = this.zoomToFit = zoomToFit;

      this.logger.debug('Canvas updated [' + canvasId + ']...');

      this.renderChildren();

      setTimeout(function () {
        zoomToFit();
      }, this.transitionDuration);

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Canvas;
}(_composite2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Canvas;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _graphTree = __webpack_require__(19);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(22);

var _graphGeneric2 = _interopRequireDefault(_graphGeneric);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Graph = (_dec = (0, _dataDecorator.requires)('canvas.graph'), (_class = function (_Renderer) {
  _inherits(Graph, _Renderer);

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
    value: function render() {

      var element = undefined;
      switch (this.data.canvas.graph.type) {
        case 'tree':
          element = new _graphTree2.default(this.options).load(this.data).render();
          break;
        default:
          element = new _graphGeneric2.default(this.options).load(this.data).render();
      }

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Graph;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Graph;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _graph = __webpack_require__(7);

var _graph2 = _interopRequireDefault(_graph);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var TreeGraph = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Graph) {
  _inherits(TreeGraph, _Graph);

  function TreeGraph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, TreeGraph);

    return _possibleConstructorReturn(this, (TreeGraph.__proto__ || Object.getPrototypeOf(TreeGraph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(TreeGraph, [{
    key: 'render',
    value: function render() {

      var i = 0,
          root = void 0;

      root = d3.hierarchy(this.treeData, function (d) {
        return d.children;
      });
      root.x0 = this.height / 2;
      root.y0 = 0;

      // compute height based on the depth of the graph
      var levelWidth = [1];
      var childCount = function childCount(level, n) {

        if (n.children && n.children.length > 0) {
          if (levelWidth.length <= level + 1) levelWidth.push(0);

          levelWidth[level + 1] += n.children.length;
          n.children.forEach(function (d) {
            childCount(level + 1, d);
          });
        }
      };
      childCount(0, root);
      var newHeight = d3.max(levelWidth) * 100;

      var treemap = d3.tree().size([newHeight, this.width]);

      if (this.data.canvas.graph.collapsed) {
        root.children.forEach(collapse);
      }

      update.call(this, root);

      function collapse(d) {
        if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

      function update(source) {
        var _this2 = this;

        var treeData = treemap(root);

        var nodes = treeData.descendants(),
            links = treeData.descendants().slice(1);

        nodes.forEach(function (d) {
          return d.y = d.depth * 180;
        });

        var linkGroup = this.element.selectAll('g.francy-links');

        if (!linkGroup.node()) {
          linkGroup = this.element.append('g').attr('class', 'francy-links');
        }

        var link = linkGroup.selectAll('path.francy-edge').data(links, function (d) {
          return d.id || (d.id = ++i);
        });

        var linkEnter = link.enter().append('path').attr('class', 'francy-edge').attr('d', function () {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

        linkEnter.merge(link).transition().duration(this.transitionDuration).attr('d', function (d) {
          return diagonal(d, d.parent);
        });

        link.exit().transition().duration(this.transitionDuration).attr('d', function () {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        }).remove();

        linkGroup.selectAll('path.francy-edge').style('fill', 'none').style('stroke', '#ccc').style('stroke-width', '1px');

        nodes.forEach(function (d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });

        function diagonal(s, d) {
          return 'M ' + s.y + ' ' + s.x + '\n            C ' + (s.y + d.y) / 2 + ' ' + s.x + ',\n              ' + (s.y + d.y) / 2 + ' ' + d.x + ',\n              ' + d.y + ' ' + d.x;
        }

        var nodeGroup = this.element.selectAll('g.francy-nodes');

        if (!nodeGroup.node()) {
          nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
        }

        var node = nodeGroup.selectAll('g.francy-node').data(nodes, function (d) {
          return d.id || (d.id = ++i);
        });

        var nodeEnter = node.enter().append('g').attr('class', 'francy-node').attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        });

        nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
          return _graph2.default.getSymbol(d.data.type);
        }).size(function (d) {
          return d.data.size * 100;
        })).attr('class', 'francy-symbol');

        nodeEnter.append('text').attr('class', 'francy-label').text(function (d) {
          return d.data.title;
        }).attr('x', function () {
          var bound = this.getBBox();
          return -(bound.width / 2);
        }).style('cursor', function (d) {
          return d.children || d._children ? 'pointer' : 'default';
        });

        var nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition().duration(this.transitionDuration).attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });

        node.exit().transition().duration(this.transitionDuration).attr('transform', function () {
          return 'translate(' + source.y + ',' + source.x + ')';
        }).remove();

        nodeGroup.selectAll('path.francy-symbol').style('fill', function (d) {
          return d.children || d._children ? 'lightsteelblue' : _graph2.default.colors(d.data.layer * 5);
        }).style('cursor', function (d) {
          return d.children || d._children ? 'pointer' : 'default';
        });

        node = nodeGroup.selectAll('g.francy-node');

        if (node.node()) {
          this._applyEvents(node);

          var nodeOnClick = node.on('click');
          node.on('click', function (d) {
            // any callbacks will be handled here
            nodeOnClick.call(_this2, d.data);
            // default, highlight connected nodes
            click.call(_this2, d);
          });
        }

        // Toggle children on click.
        var self = this;

        function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update.call(self, d);
        }

        setTimeout(function () {
          _this2.parent.zoomToFit();
        }, this.transitionDuration);
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}

    /**
     * Transforms flat data into tree data by analysing the parents of each node
     * @returns {Object} the data transformed in tree data
     */

  }, {
    key: 'treeData',
    get: function get() {
      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [];
      var dataMap = canvasNodes.reduce(function (map, node) {
        map[node.id] = node;
        return map;
      }, {});
      var treeData = [];
      canvasNodes.forEach(function (node) {
        var parent = dataMap[node.parent];
        if (parent) {
          (parent.children || (parent.children = [])).push(node);
        } else {
          treeData.push(node);
        }
      });
      return treeData[0];
    }
  }]);

  return TreeGraph;
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = TreeGraph;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ContextMenu = (_dec = (0, _dataDecorator.requires)('menus'), (_class = function (_Menu) {
  _inherits(ContextMenu, _Menu);

  function ContextMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ContextMenu);

    return _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      d3.event.preventDefault();

      this.element = this.HTMLParent.select('div.francy-context-menu-holder');
      // check if the window is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-context-menu-holder');
      }

      var pos = d3.mouse(this.SVGParent.node());

      this.element.style('left', pos[0] + 5 + 'px').style('top', pos[1] + 5 + 'px');

      // show the context menu
      this.element.style('display', 'block');

      // check if it exists already
      if (this.element.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.francy-context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.element.append('div').attr('class', 'francy-context-menu').append('ul');
      var menusIterator = this.iterator(Object.values(this.data.menus));
      this.traverse(menu, menusIterator);

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return ContextMenu;
}(_menu2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ContextMenu;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _modal = __webpack_require__(11);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(12);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var RequiredArgsModal = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Modal) {
  _inherits(RequiredArgsModal, _Modal);

  function RequiredArgsModal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, RequiredArgsModal);

    return _possibleConstructorReturn(this, (RequiredArgsModal.__proto__ || Object.getPrototypeOf(RequiredArgsModal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(RequiredArgsModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var self = this;

      var modalId = this.data.callback.id;

      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = this.element.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      var headerTitle = header.append('span').html('Required arguments&nbsp;');
      if (this.data.title) {
        headerTitle.append('span').attr('style', 'font-weight: bold;').text('for ' + this.data.title);
      }

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(this.data.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          var row = content.append('div').attr('class', 'francy-table-row');
          row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
          var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            self.data.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          // wait, if it is boolean we create a checkbox
          if (arg.type === 'boolean') {
            // well, a checkbox works this way so we need to initialize 
            // the value to false and update the value based on the checked 
            // property that triggers the onchange event
            arg.value = arg.value || false;
            input.attr('type', 'checkbox').attr('required', null).attr('value', arg.value).on('change', function () {
              self.data.callback.requiredArgs[this.id].value = this.value = this.checked;
            });
          }
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
          d3.event.preventDefault();
          _this2.options.callbackHandler(_this2.data.callback);
          _this2.unrender.call(_this2);
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        d3.event.preventDefault();
        _this2.unrender.call(_this2);
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      (0, _component.RegisterJupyterKeyboardEvents)(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

      var inputElement = content.selectAll('.francy-arg').node();
      if (inputElement) {
        inputElement.focus();
      }

      this.logger.debug('Callback Modal updated [' + modalId + ']...');

      return this;
    }
  }]);

  return RequiredArgsModal;
}(_modal2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = RequiredArgsModal;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _graph = __webpack_require__(7);

var _graph2 = _interopRequireDefault(_graph);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var GenericGraph = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Graph) {
  _inherits(GenericGraph, _Graph);

  function GenericGraph(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, GenericGraph);

    return _possibleConstructorReturn(this, (GenericGraph.__proto__ || Object.getPrototypeOf(GenericGraph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(GenericGraph, [{
    key: 'render',
    value: function render() {
      var self = this;

      var simulationActive = this.data.canvas.graph.simulation;

      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
          canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      var links = linkGroup.selectAll('g.francy-link').data();
      var linksToAdd = this._filterNewElements(canvasLinks, links);

      var link = linkGroup.selectAll('g.francy-link').data(linksToAdd, function (d) {
        return d.id;
      });

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      var nodes = nodeGroup.selectAll('g.francy-node').data();
      var nodesToAdd = this._filterNewElements(canvasNodes, nodes);

      var node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, function (d) {
        return d.id;
      });

      if (node.exit().data().length === 0 && node.enter().data().length === 0 && link.enter().data().length === 0 && link.exit().data().length === 0) {
        return;
      }

      var linkEnter = link.enter().append('g').attr('class', 'francy-link');

      linkEnter.append('line').attr('class', 'francy-edge');

      link.exit().remove();

      link = linkGroup.selectAll('g.francy-link line.francy-edge');

      if (this.data.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        self.parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeEnter = node.enter().append('g').attr('class', 'francy-node').attr('id', function (d) {
        return d.id;
      });

      nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
        return _graph2.default.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).style('fill', function (d) {
        return _graph2.default.colors(d.layer * 5);
      }).attr('class', function (d) {
        return 'francy-symbol' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : '');
      });

      nodeEnter.append('text').attr('class', 'francy-label').text(function (d) {
        return d.title;
      }).attr('x', function () {
        var bound = this.getBBox();
        return -(bound.width / 2);
      });

      node.exit().remove();

      node = nodeGroup.selectAll('g.francy-node');

      if (this.data.canvas.graph.drag) {
        node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
      }

      if (node && !node.empty()) {

        this._applyEvents(node);

        if (this.data.canvas.graph.showNeighbours) {
          var nodeOnClick = node.on('click');
          node.on('click', function (d) {
            // default, highlight connected nodes
            connectedNodes.call(this);
            // any callbacks will be handled here
            nodeOnClick.call(this, d);
          });
        }
      }

      if (simulationActive) {
        //iterate through the data and get the widest node group including label
        var radius = 0;
        node.each(function () {
          var bound = this.getBBox();
          if (radius < bound.width) {
            radius = bound.width;
          }
        });
        //Canvas Forces
        //let centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 75);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(75);
        var collideForce = d3.forceCollide().radius(radius / 2).iterations(3);

        //Generic gravity for the X position
        var forceX = d3.forceX(this.width).strength(0.05);
        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(-this.height).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(this.width).strength(0.4);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(0.7);
        }

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force('charge', manyForce).force('link', linkForce)
        //.force('center', centerForce)
        .force('x', forceX).force('y', forceY).force('collide', collideForce).on('tick', ticked).on('end', function () {
          // zoom to fit when simulation is over
          self.parent.zoomToFit();
        });

        //force simulation restart
        simulation.restart();
      } else {
        // well, simulation is off, apply fixed positions and zoom to fit now
        ticked();
        self.parent.zoomToFit();
      }

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

        node.attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });
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
        if (!d3.event.active && simulationActive) {
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
        if (!d3.event.active && simulationActive) {
          simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }, {
    key: '_filterNewElements',
    value: function _filterNewElements(canvasObjects, d3Element) {
      var newElements = [];
      canvasObjects.forEach(function (o) {
        var link = d3Element.find(function (d) {
          return d.id === o.id;
        });
        if (link) {
          newElements.push(link);
        } else {
          newElements.push(o);
        }
      });
      return newElements;
    }
  }]);

  return GenericGraph;
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = GenericGraph;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(24);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(25);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(26);

var _chartScatter2 = _interopRequireDefault(_chartScatter);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ChartFactory = (_dec = (0, _dataDecorator.requires)('canvas.chart'), (_class = function (_Renderer) {
  _inherits(ChartFactory, _Renderer);

  function ChartFactory(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ChartFactory);

    return _possibleConstructorReturn(this, (ChartFactory.__proto__ || Object.getPrototypeOf(ChartFactory)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(ChartFactory, [{
    key: 'render',
    value: function render() {

      var element = undefined;
      switch (this.data.canvas.chart.type) {
        case 'bar':
          element = new _chartBar2.default(this.options).load(this.data).render();
          break;
        case 'line':
          element = new _chartLine2.default(this.options).load(this.data).render();
          break;
        case 'scatter':
          element = new _chartScatter2.default(this.options).load(this.data).render();
          break;
      }

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ChartFactory;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ChartFactory;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var BarChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(BarChart, _Chart);

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
    value: function render() {

      this.xScale = d3.scaleBand().range([0, this.width]).padding(0.1).domain(this.axis.x.domain);

      if (!this.axis.x.domain.length) {
        this.axis.x.domain = _chart2.default.domainRange(this.allValues.length / this.datasetNames.length);
        this.xScale.domain(this.axis.x.domain);
      }

      var barsGroup = this.element.selectAll('g.francy-bars');

      if (!barsGroup.node()) {
        barsGroup = this.element.append('g').attr('class', 'francy-bars');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var bar = barsGroup.selectAll('.francy-bar-' + index).data(self.datasets[key]);

        bar.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var barEnter = bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar-' + index).attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
          return self.yScale(d);
        }).attr('height', function (d) {
          return self.height - self.yScale(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5);
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1);
          self.tooltip.unrender();
        });

        barEnter.merge(bar).attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
          return self.yScale(d);
        }).attr('height', function (d) {
          return self.height - self.yScale(d);
        });
      });

      this._renderAxis();
      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return BarChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = BarChart;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var LineChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(LineChart, _Chart);

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
    value: function render() {

      var linesGroup = this.element.selectAll('g.francy-lines');

      if (!linesGroup.node()) {
        linesGroup = this.element.append('g').attr('class', 'francy-lines');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var valueLine = d3.line().x(function (d, i) {
          return self.xScale(i);
        }).y(function (d) {
          return self.yScale(d);
        });

        var line = linesGroup.selectAll('.francy-line-' + index).data([self.datasets[key]]);

        line.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var lineEnter = line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line-' + index).attr('d', valueLine).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('stroke-opacity', 0.5).style('stroke-width', '10px');
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('stroke-opacity', 1).style('stroke-width', '5px');
          self.tooltip.unrender();
        });

        lineEnter.merge(line);
      });

      this._renderAxis();
      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return LineChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = LineChart;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var ScatterChart = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Chart) {
  _inherits(ScatterChart, _Chart);

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
    value: function render() {

      var scatterGroup = this.element.selectAll('g.francy-scatters');

      if (!scatterGroup.node()) {
        scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
      }

      var self = this;

      this.datasetNames.forEach(function (key, index) {
        var scatter = scatterGroup.selectAll('.francy-scatter-' + index).data(self.datasets[key]);

        scatter.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var scatterEnter = scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter-' + index).attr('r', 5).attr('cx', function (d, i) {
          return self.xScale(i);
        }).attr('cy', function (d) {
          return self.yScale(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5).attr('r', 10);
          self.tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1).attr('r', 5);
          self.tooltip.unrender();
        });

        scatterEnter.merge(scatter);
      });

      this._renderAxis();

      this._renderLegend();

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ScatterChart;
}(_chart2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = ScatterChart;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(28);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _saveSvgAsPng = __webpack_require__(29);

var SvgToPng = _interopRequireWildcard(_saveSvgAsPng);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    value: function render() {
      var _this2 = this;

      var aboutModal = new _modalAbout2.default(this.options);

      // Otherwise clashes with the canvas itself!
      var menuId = 'MainMenu-' + this.data.canvas.id;
      this.element = d3.select('#' + menuId);

      // Check if the menu is already present
      if (!this.element.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        this.element = this.parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
      }

      // Force rebuild menu again
      this.element.selectAll('*').remove();

      this.element = this.element.append('ul').attr('class', 'francy-main-menu');

      if (this.data.canvas.title) {
        this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
      }

      var entry = this.element.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').on('click', function () {
        return _this2.options.appendTo.canvas.zoomToFit();
      }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      content.append('li').append('a').on('click', function () {
        return SvgToPng.saveSvgAsPng(_this2.SVGParent.node(), 'diagram.png');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return aboutModal.load(_this2.data).render();
      }).attr('title', 'About').html('About');

      // Traverse all menus and flatten them!
      var menusIterator = this.iterator(Object.values(this.data.canvas.menus));
      this.traverse(this.element, menusIterator);

      this.logger.debug('Main Menu updated [' + menuId + ']...');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return MainMenu;
}(_menu2.default);

exports.default = MainMenu;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _modal = __webpack_require__(11);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(12);

var _initializeDecorator = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var AboutModal = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Modal) {
  _inherits(AboutModal, _Modal);

  function AboutModal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, AboutModal);

    return _possibleConstructorReturn(this, (AboutModal.__proto__ || Object.getPrototypeOf(AboutModal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(AboutModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var modalId = 'AboutModalWindow';

      this.logger.debug('Creating About Modal [' + modalId + ']...');

      this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = this.element.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      header.append('span').html('About Francy v' + (this.data.version || 'N/A'));

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      content.append('span').text('Loaded Object:');
      content.append('pre').attr('class', 'francy').html((0, _component.syntaxHighlight)(JSON.stringify(this.data.canvas, null, 2)));
      content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', function () {
        d3.event.preventDefault();
        _this2.unrender.call(_this2);
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      (0, _component.RegisterJupyterKeyboardEvents)(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

      this.logger.debug('Callback About updated [' + modalId + ']...');

      return this;
    }
  }]);

  return AboutModal;
}(_modal2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = AboutModal;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var out$ = typeof exports != 'undefined' && exports || "function" != 'undefined' && {} || this;

  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';

  function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  }

  function requireDomNode(el) {
    if (!isElement(el)) {
      throw new Error('an HTMLElement or SVGElement is required; got ' + el);
    }
  }

  function isExternal(url) {
    return url && url.lastIndexOf('http', 0) == 0 && url.lastIndexOf(window.location.host) == -1;
  }

  function inlineImages(el, callback) {
    requireDomNode(el);

    var images = el.querySelectorAll('image'),
        left = images.length,
        checkDone = function checkDone() {
      if (left === 0) {
        callback();
      }
    };

    checkDone();
    for (var i = 0; i < images.length; i++) {
      (function (image) {
        var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        if (href) {
          if (isExternal(href.value)) {
            console.warn("Cannot render embedded images linking to external hosts: " + href.value);
            return;
          }
        }
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin = "anonymous";
        href = href || image.getAttribute('href');
        if (href) {
          img.src = href;
          img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
            left--;
            checkDone();
          };
          img.onerror = function () {
            console.log("Could not load " + href);
            left--;
            checkDone();
          };
        } else {
          left--;
          checkDone();
        }
      })(images[i]);
    }
  }

  function styles(el, options, cssLoadedCallback) {
    var selectorRemap = options.selectorRemap;
    var modifyStyle = options.modifyStyle;
    var css = "";
    // each font that has extranl link is saved into queue, and processed
    // asynchronously
    var fontsQueue = [];
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try {
        var rules = sheets[i].cssRules;
      } catch (e) {
        console.warn("Stylesheet could not be loaded: " + sheets[i].href);
        continue;
      }

      if (rules != null) {
        for (var j = 0, match; j < rules.length; j++, match = null) {
          var rule = rules[j];
          if (typeof rule.style != "undefined") {
            var selectorText;

            try {
              selectorText = rule.selectorText;
            } catch (err) {
              console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
            }

            try {
              if (selectorText) {
                match = el.querySelector(selectorText) || el.parentNode.querySelector(selectorText);
              }
            } catch (err) {
              console.warn('Invalid CSS selector "' + selectorText + '"', err);
            }

            if (match) {
              var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
              var cssText = modifyStyle ? modifyStyle(rule.style.cssText) : rule.style.cssText;
              css += selector + " { " + cssText + " }\n";
            } else if (rule.cssText.match(/^@font-face/)) {
              // below we are trying to find matches to external link. E.g.
              // @font-face {
              //   // ...
              //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
              // }
              //
              // This regex will save extrnal link into first capture group
              var fontUrlRegexp = /url\(["']?(.+?)["']?\)/;
              // TODO: This needs to be changed to support multiple url declarations per font.
              var fontUrlMatch = rule.cssText.match(fontUrlRegexp);

              var externalFontUrl = fontUrlMatch && fontUrlMatch[1] || '';
              var fontUrlIsDataURI = externalFontUrl.match(/^data:/);
              if (fontUrlIsDataURI) {
                // We should ignore data uri - they are already embedded
                externalFontUrl = '';
              }

              if (externalFontUrl) {
                // okay, we are lucky. We can fetch this font later

                //handle url if relative
                if (externalFontUrl.startsWith('../')) {
                  externalFontUrl = sheets[i].href + '/../' + externalFontUrl;
                } else if (externalFontUrl.startsWith('./')) {
                  externalFontUrl = sheets[i].href + '/.' + externalFontUrl;
                }

                fontsQueue.push({
                  text: rule.cssText,
                  // Pass url regex, so that once font is downladed, we can run `replace()` on it
                  fontUrlRegexp: fontUrlRegexp,
                  format: getFontMimeTypeFromUrl(externalFontUrl),
                  url: externalFontUrl
                });
              } else {
                // otherwise, use previous logic
                css += rule.cssText + '\n';
              }
            }
          }
        }
      }
    }

    // Now all css is processed, it's time to handle scheduled fonts
    processFontQueue(fontsQueue);

    function getFontMimeTypeFromUrl(fontUrl) {
      var supportedFormats = {
        'woff2': 'font/woff2',
        'woff': 'font/woff',
        'otf': 'application/x-font-opentype',
        'ttf': 'application/x-font-ttf',
        'eot': 'application/vnd.ms-fontobject',
        'sfnt': 'application/font-sfnt',
        'svg': 'image/svg+xml'
      };
      var extensions = Object.keys(supportedFormats);
      for (var i = 0; i < extensions.length; ++i) {
        var extension = extensions[i];
        // TODO: This is not bullet proof, it needs to handle edge cases...
        if (fontUrl.indexOf('.' + extension) > 0) {
          return supportedFormats[extension];
        }
      }

      // If you see this error message, you probably need to update code above.
      console.error('Unknown font format for ' + fontUrl + '; Fonts may not be working correctly');
      return 'application/octet-stream';
    }

    function processFontQueue(queue) {
      if (queue.length > 0) {
        // load fonts one by one until we have anything in the queue:
        var font = queue.pop();
        processNext(font);
      } else {
        // no more fonts to load.
        cssLoadedCallback(css);
      }

      function processNext(font) {
        // TODO: This could benefit from caching.
        var oReq = new XMLHttpRequest();
        oReq.addEventListener('load', fontLoaded);
        oReq.addEventListener('error', transferFailed);
        oReq.addEventListener('abort', transferFailed);
        oReq.open('GET', font.url);
        oReq.responseType = 'arraybuffer';
        oReq.send();

        function fontLoaded() {
          // TODO: it may be also worth to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet )
          var fontBits = oReq.response;
          var fontInBase64 = arrayBufferToBase64(fontBits);
          updateFontStyle(font, fontInBase64);
        }

        function transferFailed(e) {
          console.warn('Failed to load font from: ' + font.url);
          console.warn(e);
          css += font.text + '\n';
          processFontQueue();
        }

        function updateFontStyle(font, fontInBase64) {
          var dataUrl = 'url("data:' + font.format + ';base64,' + fontInBase64 + '")';
          css += font.text.replace(font.fontUrlRegexp, dataUrl) + '\n';

          // schedule next font download on next tick.
          setTimeout(function () {
            processFontQueue(queue);
          }, 0);
        }
      }
    }

    function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;

      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      return window.btoa(binary);
    }
  }

  function getDimension(el, clone, dim) {
    var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return typeof v === 'undefined' || v === null || isNaN(parseFloat(v)) ? 0 : v;
  }

  function reEncode(data) {
    data = encodeURIComponent(data);
    data = data.replace(/%([0-9A-F]{2})/g, function (match, p1) {
      var c = String.fromCharCode('0x' + p1);
      return c === '%' ? '%25' : c;
    });
    return decodeURIComponent(data);
  }

  out$.prepareSvg = function (el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.scale = options.scale || 1;
    options.responsive = options.responsive || false;
    var xmlns = "http://www.w3.org/2000/xmlns/";

    inlineImages(el, function () {
      var outer = document.createElement("div");
      var clone = el.cloneNode(true);
      var width, height;
      if (el.tagName == 'svg') {
        width = options.width || getDimension(el, clone, 'width');
        height = options.height || getDimension(el, clone, 'height');
      } else if (el.getBBox) {
        var box = el.getBBox();
        width = box.x + box.width;
        height = box.y + box.height;
        clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.appendChild(clone);
        clone = svg;
      } else {
        console.error('Attempted to render non-SVG element', el);
        return;
      }

      clone.setAttribute("version", "1.1");
      if (!clone.getAttribute('xmlns')) {
        clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
      }
      if (!clone.getAttribute('xmlns:xlink')) {
        clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
      }

      if (options.responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute("width", width * options.scale);
        clone.setAttribute("height", height * options.scale);
      }

      clone.setAttribute("viewBox", [options.left || 0, options.top || 0, width, height].join(" "));

      var fos = clone.querySelectorAll('foreignObject > *');
      for (var i = 0; i < fos.length; i++) {
        if (!fos[i].getAttribute('xmlns')) {
          fos[i].setAttributeNS(xmlns, "xmlns", "http://www.w3.org/1999/xhtml");
        }
      }

      outer.appendChild(clone);

      // In case of custom fonts we need to fetch font first, and then inline
      // its url into data-uri format (encode as base64). That's why style
      // processing is done asynchonously. Once all inlining is finshed
      // cssLoadedCallback() is called.
      styles(el, options, cssLoadedCallback);

      function cssLoadedCallback(css) {
        // here all fonts are inlined, so that we can render them properly.
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
        var defs = document.createElement('defs');
        defs.appendChild(s);
        clone.insertBefore(defs, clone.firstChild);

        if (cb) {
          var outHtml = outer.innerHTML;
          outHtml = outHtml.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
          cb(outHtml, width, height);
        }
      }
    });
  };

  out$.svgAsDataUri = function (el, options, cb) {
    out$.prepareSvg(el, options, function (svg) {
      var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + svg));
      if (cb) {
        cb(uri);
      }
    });
  };

  out$.svgAsPngUri = function (el, options, cb) {
    requireDomNode(el);

    options = options || {};
    options.encoderType = options.encoderType || 'image/png';
    options.encoderOptions = options.encoderOptions || 0.8;

    var convertToPng = function convertToPng(src, w, h) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = w;
      canvas.height = h;

      if (options.canvg) {
        options.canvg(canvas, src);
      } else {
        context.drawImage(src, 0, 0);
      }

      if (options.backgroundColor) {
        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }

      var png;
      try {
        png = canvas.toDataURL(options.encoderType, options.encoderOptions);
      } catch (e) {
        if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name == "SecurityError") {
          console.error("Rendered SVG images cannot be downloaded in this browser.");
          return;
        } else {
          throw e;
        }
      }
      cb(png);
    };

    if (options.canvg) {
      out$.prepareSvg(el, options, convertToPng);
    } else {
      out$.svgAsDataUri(el, options, function (uri) {
        var image = new Image();

        image.onload = function () {
          convertToPng(image, image.width, image.height);
        };

        image.onerror = function () {
          console.error('There was an error loading the data URI as an image on the following SVG\n', window.atob(uri.slice(26)), '\n', "Open the following link to see browser's diagnosis\n", uri);
        };

        image.src = uri;
      });
    }
  };

  out$.download = function (name, uri) {
    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
    } else {
      var saveLink = document.createElement('a');
      var downloadSupported = 'download' in saveLink;
      if (downloadSupported) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);
        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;
          saveLink.onclick = function () {
            requestAnimationFrame(function () {
              URL.revokeObjectURL(url);
            });
          };
        } catch (e) {
          console.warn('This browser does not support object URLs. Falling back to string URL.');
          saveLink.href = uri;
        }
        saveLink.click();
        document.body.removeChild(saveLink);
      } else {
        window.open(uri, '_temp', 'menubar=no,toolbar=no,status=no');
      }
    }
  };

  function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);
    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([buffer], { type: mimeString });
  }

  out$.saveSvg = function (el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsDataUri(el, options, function (uri) {
      out$.download(name, uri);
    });
  };

  out$.saveSvgAsPng = function (el, name, options) {
    requireDomNode(el);

    options = options || {};
    out$.svgAsPngUri(el, options, function (uri) {
      out$.download(name, uri);
    });
  };

  // if define is defined create as an AMD module
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return out$;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _dataDecorator = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/* global d3 */

var Message = (_dec = (0, _dataDecorator.requires)('canvas.messages'), (_class = function (_Renderer) {
  _inherits(Message, _Renderer);

  function Message(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = Object.keys(this.data.canvas.messages).map(function (key) {
        return {
          id: key,
          type: _this2.data.canvas.messages[key].type,
          title: _this2.data.canvas.messages[key].title,
          text: _this2.data.canvas.messages[key].text
        };
      });

      var alertsId = 'Messages-' + this.data.canvas.id;
      this.element = d3.select('#' + alertsId);
      // check if the div is already present
      if (!this.element.node()) {
        this.element = this.parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
      }

      var message = this.element.selectAll('div.francy-alert').data(messages, function (d) {
        return d.id;
      });
      var messageEnter = message.enter().append('div').attr('id', function (d) {
        return d.id;
      }).attr('class', function (d) {
        return 'francy-alert alert-' + d.type;
      }).on('click', function () {
        d3.select(this).style('display', 'none');
      });
      messageEnter.append('span').attr('class', 'strong').text(function (d) {
        return d.title;
      });
      messageEnter.append('span').text(function (d) {
        return d.text;
      });
      messageEnter.append('span').attr('class', 'strong closeme').style('display', 'none').text('x');

      messageEnter.merge(message);

      message.exit().remove();

      this.element.style('display', 'block');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Message;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Message;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWY5ZDY5NjBmNWI2NGQyM2JlNWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21hdGhqYXgtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm9wdGlvbnMiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsInBhcmVudCIsImF0dHIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYXJnaW4iLCJoZWlnaHQiLCJyZXF1aXJlcyIsImVuYWJsZWQiLCJwcm9wcyIsImRlY29yYXRvciIsIm5hbWUiLCJkZXNjcmlwdG9yIiwib2xkVmFsdWUiLCJ2YWx1ZSIsImhhc0RhdGEiLCJnZXRQcm9wZXJ0eSIsImRhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9iaiIsInByb3BlcnR5UGF0aCIsInRtcCIsInByb3BlcnRpZXMiLCJzcGxpdCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImluaXRpYWxpemUiLCJrZXkiLCJfaW5pdGlhbGl6ZSIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsInNlbGVjdEFsbCIsImFwcGVuZCIsInJlbW92ZSIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsIm1hcCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsImpzb24iLCJwYXJ0aWFsIiwicGFyc2UiLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkdyYXBoIiwiY29udGV4dE1lbnUiLCJjYWxsYmFjayIsIm1hdGhqYXgiLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1hdGhKYXhXcmFwcGVyIiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsInNob3dNYXRoTWVudSIsInNraXBTdGFydHVwVHlwZXNldCIsInRleDJqYXgiLCJpbmxpbmVNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJmb250IiwibGluZWJyZWFrcyIsImF1dG9tYXRpYyIsIlJlZ2lzdGVyIiwiTWVzc2FnZUhvb2siLCJpZCIsIm1hdGhKYXhFbGVtZW50Iiwic3ZnTWF0aEpheEVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiYm91bmQiLCJzdmdFbGVtZW50IiwiUXVldWUiLCJDb25maWd1cmVkIiwiZSIsIndhcm4iLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiTW9kYWwiLCJvdmVybGF5IiwiaG9sZGVyIiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzeW50YXhIaWdobGlnaHQiLCJjbGFzc2VzIiwiY2wiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJzZWxmIiwicm93IiwiQUxMX0NBTlZBUyIsIkZyYW5jeSIsImZyYW1lIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsIm9ucmVzaXplIiwiem9vbVRvRml0IiwiRnJhbWUiLCJtZW51IiwiYWRkIiwiZnJhbWVJZCIsInJlbmRlckNoaWxkcmVuIiwiSnNvblV0aWxzIiwiaW5wdXQiLCJqc29uUmVnZXgiLCJleGVjIiwibWltZSIsIk1JTUUiLCJDYW52YXMiLCJncmFwaCIsImNoYXJ0RmFjdG9yeSIsInpvb20iLCJ1cGRhdGVab29tIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzY2FsZSIsInRyYW5zZm9ybSIsInpvb21JZGVudGl0eSIsInRyYW5zbGF0ZSIsInpvb21lZCIsInN0b3BwZWQiLCJkZWZhdWx0UHJldmVudGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiYm91bmRzIiwiZ2V0QkJveCIsImNsaWVudEJvdW5kcyIsImZ1bGxXaWR0aCIsImZ1bGxIZWlnaHQiLCJtaWRYIiwibWlkWSIsIk1hdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYW52YXNJZCIsIlRyZWVHcmFwaCIsInJvb3QiLCJoaWVyYXJjaHkiLCJ0cmVlRGF0YSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsImxldmVsV2lkdGgiLCJjaGlsZENvdW50IiwibiIsIm5ld0hlaWdodCIsInRyZWVtYXAiLCJ0cmVlIiwic2l6ZSIsImNvbGxhcHNlZCIsImNvbGxhcHNlIiwidXBkYXRlIiwiX2NoaWxkcmVuIiwic291cmNlIiwibm9kZXMiLCJkZXNjZW5kYW50cyIsImxpbmtzIiwiZGVwdGgiLCJsaW5rR3JvdXAiLCJsaW5rIiwibGlua0VudGVyIiwibyIsImRpYWdvbmFsIiwicyIsIm5vZGVHcm91cCIsIm5vZGVFbnRlciIsInN5bWJvbCIsImdldFN5bWJvbCIsIm5vZGVVcGRhdGUiLCJsYXllciIsIl9hcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiUmVxdWlyZWRBcmdzTW9kYWwiLCJtb2RhbElkIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImlucHV0RWxlbWVudCIsImZvY3VzIiwiR2VuZXJpY0dyYXBoIiwic2ltdWxhdGlvbkFjdGl2ZSIsInNpbXVsYXRpb24iLCJjYW52YXNMaW5rcyIsImxpbmtzVG9BZGQiLCJfZmlsdGVyTmV3RWxlbWVudHMiLCJub2Rlc1RvQWRkIiwiaGlnaGxpZ2h0IiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVtcHR5Iiwic2hvd05laWdoYm91cnMiLCJjb25uZWN0ZWROb2RlcyIsInJhZGl1cyIsImVhY2giLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsIml0ZXJhdGlvbnMiLCJmb3JjZVgiLCJmb3JjZVkiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsInRpY2tlZCIsInJlc3RhcnQiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsImdldEF0dHJpYnV0ZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNldEF0dHJpYnV0ZU5TIiwidG9EYXRhVVJMIiwib25lcnJvciIsInN0eWxlcyIsImNzc0xvYWRlZENhbGxiYWNrIiwic2VsZWN0b3JSZW1hcCIsIm1vZGlmeVN0eWxlIiwiY3NzIiwiZm9udHNRdWV1ZSIsInNoZWV0cyIsInN0eWxlU2hlZXRzIiwicnVsZXMiLCJjc3NSdWxlcyIsImoiLCJydWxlIiwic2VsZWN0b3JUZXh0IiwiZXJyIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiY3NzVGV4dCIsImZvbnRVcmxSZWdleHAiLCJmb250VXJsTWF0Y2giLCJleHRlcm5hbEZvbnRVcmwiLCJmb250VXJsSXNEYXRhVVJJIiwic3RhcnRzV2l0aCIsImZvcm1hdCIsImdldEZvbnRNaW1lVHlwZUZyb21VcmwiLCJwcm9jZXNzRm9udFF1ZXVlIiwiZm9udFVybCIsInN1cHBvcnRlZEZvcm1hdHMiLCJleHRlbnNpb25zIiwiZXh0ZW5zaW9uIiwiaW5kZXhPZiIsInF1ZXVlIiwicG9wIiwicHJvY2Vzc05leHQiLCJvUmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9udExvYWRlZCIsInRyYW5zZmVyRmFpbGVkIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJmb250Qml0cyIsInJlc3BvbnNlIiwiZm9udEluQmFzZTY0IiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInVwZGF0ZUZvbnRTdHlsZSIsImRhdGFVcmwiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7QUFFbkIsMEJBQTBFO0FBQUEsNEJBQTVEQyxPQUE0RDtBQUFBLFFBQTVEQSxPQUE0RCxnQ0FBbEQsS0FBa0Q7QUFBQSxRQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsUUFBakNDLGVBQWlDLFFBQWpDQSxlQUFpQztBQUFBLDRCQUFoQkMsT0FBZ0I7QUFBQSxRQUFoQkEsT0FBZ0IsZ0NBQU4sRUFBTTs7QUFBQTs7QUFBQSxvSEFDbEUsRUFBRUgsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFBMEVDLFNBQVNBLE9BQW5GLEVBRGtFOztBQUV4RSxR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LE9BQW5COztBQUVBQSxjQUFRMUIsSUFBUixHQUFlWixNQUFmOztBQUVBLFdBQUtwRSxPQUFMLENBQWF1RSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBM0NNbWQsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFmOWQ2OTYwZjViNjRkMjNiZTViIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIsIG9wdGlvbnMgPSB7fSB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNzUwOyAvL21zXG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge31cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgPyBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnBhcmVudE5vZGUpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGl2JyA/IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50LnNlbGVjdCgnc3ZnJykgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cbiAgXG4gIGdldCBtYXJnaW4oKSB7XG4gICAgcmV0dXJuIHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9O1xuICB9XG4gIFxuICBnZXQgd2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoID0gK3RoaXMucGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHJldHVybiB3aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgfVxuICBcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gK3RoaXMucGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgcmV0dXJuIGhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZWQocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuYXhpcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnlTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnhTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgICBcbiAgICB0aGlzLmF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXM7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNldHMpO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pLmRvbWFpbih0aGlzLmF4aXMueS5kb21haW4pO1xuICAgIFxuICAgIHRoaXMuYWxsVmFsdWVzID0gW107XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5hbGxWYWx1ZXMgPSB0aGlzLmFsbFZhbHVlcy5jb25jYXQodGhpcy5kYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueVNjYWxlLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYWxsVmFsdWVzLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4oWzAsIHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cbiAgfVxuICBcbiAgX3JlbmRlckF4aXMoKSB7XG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHt0aGlzLmhlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHRoaXMud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueS50aXRsZSk7XG4gIH1cbiAgXG4gIF9yZW5kZXJMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEodGhpcy5kYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b29sdGlwKGRhdGFzZXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgJ0EnOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sICdCJzogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKHthcHBlbmRUbzogdGhpc30pLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyh7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn0gdGhlIGxvZ2dlciBmb3IgdGhpcyBjbGFzc1xuICAgICAqL1xuICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc2V0dGluZ3MoeyB2ZXJib3NlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyICYmICFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmFwcGVuZFRvICYmICFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcHBlbmRUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFwcGVuZFRvID0gZDMuc2VsZWN0KGFwcGVuZFRvKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucy52ZXJib3NlID0gdmVyYm9zZSB8fCB0aGlzLm9wdGlvbnMudmVyYm9zZTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBMb2dnZXIgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcoTG9nZ2VyLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oTG9nZ2VyLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsZXZlbCB0aGUgbG9nIGxldmVsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBzdGF0aWMgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgTWF0aEpheFdyYXBwZXIgZnJvbSAnLi9tYXRoamF4LXdyYXBwZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIF9hcHBseUV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNvbnRleHRNZW51ID0gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IG1hdGhqYXggPSBuZXcgTWF0aEpheFdyYXBwZXIodGhpcy5vcHRpb25zKTtcblxuICAgIGVsZW1lbnRcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBkYXRhID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGRhdGEsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBkYXRhID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZGF0YSwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkYXRhLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIGQgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5sb2FkKGRhdGEubWVzc2FnZXMsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICBtYXRoamF4LnNldHRpbmdzKHthcHBlbmRUbzogdG9vbHRpcH0pLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY3Jvc3MnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENyb3NzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlhbW9uZCc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3F1YXJlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3Rhcic6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3RhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3d5ZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sV3llO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgZW5hYmxlZCB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aEpheFdyYXBwZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBlbmFibGVkKCdjYW52YXMudGV4VHlwZXNldHRpbmcnKVxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZyh7XG4gICAgICAgIHNob3dNYXRoTWVudTogZmFsc2UsXG4gICAgICAgIHNraXBTdGFydHVwVHlwZXNldDogdHJ1ZSxcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgJ1xcXFwpJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb2Nlc3NFc2NhcGVzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdIVE1MLUNTUyc6IHtcbiAgICAgICAgICBmb250OiAnU1RJWC1XZWInLCBcbiAgICAgICAgICBsaW5lYnJlYWtzOiB7IFxuICAgICAgICAgICAgYXV0b21hdGljOiB0cnVlIFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ1NWRyc6IHtcbiAgICAgICAgICBmb250OiAnU1RJWC1XZWInLCBcbiAgICAgICAgICBsaW5lYnJlYWtzOiB7IFxuICAgICAgICAgICAgYXV0b21hdGljOiB0cnVlIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlJlZ2lzdGVyLk1lc3NhZ2VIb29rKCdOZXcgTWF0aCcsIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIGlmIChpZCAmJiBpZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIG1hdGhKYXhFbGVtZW50ID0gZDMuc2VsZWN0KGAjJHtpZFsxXX0tRnJhbWVgKTtcbiAgICAgICAgICB2YXIgc3ZnTWF0aEpheEVsZW1lbnQgPSBtYXRoSmF4RWxlbWVudC5zZWxlY3QoJ3N2ZycpO1xuICAgICAgICAgIGlmIChzdmdNYXRoSmF4RWxlbWVudC5ub2RlKCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYm91bmQgPSBzdmdNYXRoSmF4RWxlbWVudC5zZWxlY3QoJ2cnKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgc3ZnTWF0aEpheEVsZW1lbnQuYXR0cigneCcsIC1ib3VuZC53aWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgIHN2Z01hdGhKYXhFbGVtZW50LmF0dHIoJ3knLCAtMTUpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdChtYXRoSmF4RWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZS5wYXJlbnROb2RlKS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN2Z01hdGhKYXhFbGVtZW50Lm5vZGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgICAgdmFyIHN2Z0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdzdmcnKTtcbiAgICAgIGlmIChzdmdFbGVtZW50Lm5vZGUoKSkge1xuICAgICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShcbiAgICAgICAgICBbJ3NldFJlbmRlcmVyJywgTWF0aEpheC5IdWIsICdTVkcnXSxcbiAgICAgICAgICBbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1Yiwgc3ZnRWxlbWVudC5ub2RlKCldLFxuICAgICAgICAgIFsnc2V0UmVuZGVyZXInLCBNYXRoSmF4Lkh1YiwgJ0hUTUwtQ1NTJ10sXG4gICAgICAgICAgWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIHRoaXMuZWxlbWVudC5ub2RlKCldLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoXG4gICAgICAgICAgWydzZXRSZW5kZXJlcicsIE1hdGhKYXguSHViLCAnSFRNTC1DU1MnXSxcbiAgICAgICAgICBbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgdGhpcy5lbGVtZW50Lm5vZGUoKV0sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZ3VyZWQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm4oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoJ05vdCBzdXJlIHdoYXQgaGFwcGVuZWQgOi8nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21hdGhqYXgtd3JhcHBlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG9sZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHRoaXMub3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB0aGlzLmhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gIH1cbiAgXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5ob2xkZXIucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbmV4cG9ydCBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfSBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKClcbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyAxNSkgKyAncHgnKS5zdHlsZSgndG9wJywgKHBvc1sxXSAtIDE1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LnhcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgc3RhdGljIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgbGV0IG9sZFJlc2l6ZSA9IHdpbmRvdy5vbnJlc2l6ZTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59IGNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCBNYXRoSmF4V3JhcHBlciBmcm9tICcuL21hdGhqYXgtd3JhcHBlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tYXRoamF4ID0gbmV3IE1hdGhKYXhXcmFwcGVyKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKS5hZGQodGhpcy5tYXRoamF4KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICBjb25zdCBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHBhcnRpYWwgLSBpZiB0aGUgaW5wdXQgaXMgbm90IGEgY29tcGxldGUgRnJhbmN5IEpTT04gT2JqZWN0LCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0YXRpYyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtaW1lIHR5cGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGFja2FnZVxuICAgKi9cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoRmFjdG9yeSBmcm9tICcuL2dyYXBoLWZhY3RvcnknO1xuaW1wb3J0IENoYXJ0RmFjdG9yeSBmcm9tICcuL2NoYXJ0LWZhY3RvcnknO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoRmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRGYWN0b3J5ID0gbmV3IENoYXJ0RmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0RmFjdG9yeSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICBsZXQgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIGxldCBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICBsZXQgd2lkdGggPSArYm91bmRzLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9ICtib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICAgIG1pZFkgPSBib3VuZHMueSArIGhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IHNjYWxlID0gMC45IC8gTWF0aC5tYXgod2lkdGggLyBmdWxsV2lkdGgsIGhlaWdodCAvIGZ1bGxIZWlnaHQpO1xuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IGZ1bGxIZWlnaHQgLyAyIC0gc2NhbGUgKiBtaWRZO1xuXG4gICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHNlbGYudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jYW52YXMnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oJ3pvb20nLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oJ2RibGNsaWNrLnpvb20nLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSB6b29tVG9GaXQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b29tVG9GaXQoKTtcbiAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVHJlZUdyYXBoIGZyb20gJy4vZ3JhcGgtdHJlZSc7XG5pbXBvcnQgR2VuZXJpY0dyYXBoIGZyb20gJy4vZ3JhcGgtZ2VuZXJpYyc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgIGNhc2UgJ3RyZWUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBUcmVlR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IG5ldyBHZW5lcmljR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZmFjdG9yeS5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBjb21wdXRlIGhlaWdodCBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIGdyYXBoXG4gICAgbGV0IGxldmVsV2lkdGggPSBbMV07XG4gICAgbGV0IGNoaWxkQ291bnQgPSBmdW5jdGlvbiAobGV2ZWwsIG4pIHtcblxuICAgICAgaWYgKG4uY2hpbGRyZW4gJiYgbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChsZXZlbFdpZHRoLmxlbmd0aCA8PSBsZXZlbCArIDEpIGxldmVsV2lkdGgucHVzaCgwKTtcblxuICAgICAgICBsZXZlbFdpZHRoW2xldmVsICsgMV0gKz0gbi5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHRoaXMud2lkdGhdKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIGxldCB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIGxldCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxODApO1xuXG4gICAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpXG4gICAgICAgIC5hdHRyKCd4JywgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICAgIHJldHVybiAtKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbGV0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgXG4gICAgICBpZiAobm9kZS5ub2RlKCkpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgbGV0IGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIGxldCB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgbGV0IHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVudXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIGxldCBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAobGV0IGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICBsZXQgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgbGV0IGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcih0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKTtcbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBzZWxmLnBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgfSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSBkYXRhIGFuZCBnZXQgdGhlIHdpZGVzdCBub2RlIGdyb3VwIGluY2x1ZGluZyBsYWJlbFxuICAgICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgICBub2RlLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgIGlmIChyYWRpdXMgPCBib3VuZC53aWR0aCkge1xuICAgICAgICAgIHJhZGl1cyA9IGJvdW5kLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vQ2FudmFzIEZvcmNlc1xuICAgICAgLy9sZXQgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngodGhpcy53aWR0aCAvIDIpLnkodGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgIGxldCBtYW55Rm9yY2UgPSBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLWNhbnZhc05vZGVzLmxlbmd0aCAqIDc1KTtcbiAgICAgIGxldCBsaW5rRm9yY2UgPSBkMy5mb3JjZUxpbmsoY2FudmFzTGlua3MpLmlkKGQgPT4gZC5pZCkuZGlzdGFuY2UoNzUpO1xuICAgICAgbGV0IGNvbGxpZGVGb3JjZSA9IGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cyhyYWRpdXMvMikuaXRlcmF0aW9ucygzKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICBsZXQgZm9yY2VYID0gZDMuZm9yY2VYKHRoaXMud2lkdGgpLnN0cmVuZ3RoKDAuMDUpO1xuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgICBsZXQgZm9yY2VZID0gZDMuZm9yY2VZKC10aGlzLmhlaWdodCkuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjQpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMC43KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKS5ub2Rlcyhub2Rlc1RvQWRkKVxuICAgICAgICAuZm9yY2UoJ2NoYXJnZScsIG1hbnlGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdsaW5rJywgbGlua0ZvcmNlKVxuICAgICAgICAvLy5mb3JjZSgnY2VudGVyJywgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24ucmVzdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICBsZXQgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICBsZXQgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuICBcbiAgX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc09iamVjdHMsIGQzRWxlbWVudCkge1xuICAgIGxldCBuZXdFbGVtZW50cyA9IFtdO1xuICAgIGNhbnZhc09iamVjdHMuZm9yRWFjaChvID0+IHtcbiAgICAgIGxldCBsaW5rID0gZDNFbGVtZW50LmZpbmQoZCA9PiBkLmlkID09PSBvLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobGluayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKG8pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdFbGVtZW50cztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRGYWN0b3J5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQudHlwZSkge1xuICAgIGNhc2UgJ2Jhcic6XG4gICAgICBlbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1mYWN0b3J5LmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB9XG5cbiAgICBsZXQgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWJhcnMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1iYXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGJhckVudGVyID0gYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpOyBcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW3NlbGYuZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdyJywgNSlcbiAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuXG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0JztcbmltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICBjb25zdCBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyh0aGlzLlNWR1BhcmVudC5ub2RlKCksICdkaWFncmFtLnBuZycpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzLCBzeW50YXhIaWdobGlnaHQgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwoc3ludGF4SGlnaGxpZ2h0KEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHsgXG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgIHRoaXMudW5yZW5kZXIuY2FsbCh0aGlzKTsgXG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcgJiYge30gfHwgdGhpcztcblxuICB2YXIgZG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiIFs8IUVOVElUWSBuYnNwIFwiJiMxNjA7XCI+XT4nO1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVEb21Ob2RlKGVsKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIEhUTUxFbGVtZW50IG9yIFNWR0VsZW1lbnQgaXMgcmVxdWlyZWQ7IGdvdCAnICsgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLDApID09IDAgJiYgdXJsLmxhc3RJbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ob3N0KSA9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCwgY2FsbGJhY2spIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICB2YXIgaW1hZ2VzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKSxcbiAgICAgICAgbGVmdCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgIGNoZWNrRG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGNoZWNrRG9uZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBpbWFnZS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGlmIChpc0V4dGVybmFsKGhyZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVuZGVyIGVtYmVkZGVkIGltYWdlcyBsaW5raW5nIHRvIGV4dGVybmFsIGhvc3RzOiBcIitocmVmLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI7XG4gICAgICAgIGhyZWYgPSBocmVmIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGltZy5zcmMgPSBocmVmO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGxvYWQgXCIraHJlZik7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KShpbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZWN0b3JSZW1hcCA9IG9wdGlvbnMuc2VsZWN0b3JSZW1hcDtcbiAgICB2YXIgbW9kaWZ5U3R5bGUgPSBvcHRpb25zLm1vZGlmeVN0eWxlO1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIC8vIGVhY2ggZm9udCB0aGF0IGhhcyBleHRyYW5sIGxpbmsgaXMgc2F2ZWQgaW50byBxdWV1ZSwgYW5kIHByb2Nlc3NlZFxuICAgIC8vIGFzeW5jaHJvbm91c2x5XG4gICAgdmFyIGZvbnRzUXVldWUgPSBbXTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVzaGVldCBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIitzaGVldHNbaV0uaHJlZik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbWF0Y2g7IGogPCBydWxlcy5sZW5ndGg7IGorKywgbWF0Y2ggPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tqXTtcbiAgICAgICAgICBpZiAodHlwZW9mKHJ1bGUuc3R5bGUpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZm9sbG93aW5nIENTUyBydWxlIGhhcyBhbiBpbnZhbGlkIHNlbGVjdG9yOiBcIicgKyBydWxlICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yVGV4dCkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpIHx8IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgQ1NTIHNlbGVjdG9yIFwiJyArIHNlbGVjdG9yVGV4dCArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChydWxlLnNlbGVjdG9yVGV4dCkgOiBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBtb2RpZnlTdHlsZSA/IG1vZGlmeVN0eWxlKHJ1bGUuc3R5bGUuY3NzVGV4dCkgOiBydWxlLnN0eWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHsgXCIgKyBjc3NUZXh0ICsgXCIgfVxcblwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHJ1bGUuY3NzVGV4dC5tYXRjaCgvXkBmb250LWZhY2UvKSkge1xuICAgICAgICAgICAgICAvLyBiZWxvdyB3ZSBhcmUgdHJ5aW5nIHRvIGZpbmQgbWF0Y2hlcyB0byBleHRlcm5hbCBsaW5rLiBFLmcuXG4gICAgICAgICAgICAgIC8vIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAvLyAgIC8vIC4uLlxuICAgICAgICAgICAgICAvLyAgIHNyYzogbG9jYWwoJ0FiZWwnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9hYmVsL3Y2L1V6Ti1pZWpSMVZvWFUyT2MtN0xzYnZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZjIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFRoaXMgcmVnZXggd2lsbCBzYXZlIGV4dHJuYWwgbGluayBpbnRvIGZpcnN0IGNhcHR1cmUgZ3JvdXBcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxSZWdleHAgPSAvdXJsXFwoW1wiJ10/KC4rPylbXCInXT9cXCkvO1xuICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gc3VwcG9ydCBtdWx0aXBsZSB1cmwgZGVjbGFyYXRpb25zIHBlciBmb250LlxuICAgICAgICAgICAgICB2YXIgZm9udFVybE1hdGNoID0gcnVsZS5jc3NUZXh0Lm1hdGNoKGZvbnRVcmxSZWdleHApO1xuXG4gICAgICAgICAgICAgIHZhciBleHRlcm5hbEZvbnRVcmwgPSAoZm9udFVybE1hdGNoICYmIGZvbnRVcmxNYXRjaFsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgIHZhciBmb250VXJsSXNEYXRhVVJJID0gZXh0ZXJuYWxGb250VXJsLm1hdGNoKC9eZGF0YTovKTtcbiAgICAgICAgICAgICAgaWYgKGZvbnRVcmxJc0RhdGFVUkkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgaWdub3JlIGRhdGEgdXJpIC0gdGhleSBhcmUgYWxyZWFkeSBlbWJlZGRlZFxuICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9ICcnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybCkge1xuICAgICAgICAgICAgICAgIC8vIG9rYXksIHdlIGFyZSBsdWNreS4gV2UgY2FuIGZldGNoIHRoaXMgZm9udCBsYXRlclxuXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgdXJsIGlmIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4uLycgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLicgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb250c1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gUGFzcyB1cmwgcmVnZXgsIHNvIHRoYXQgb25jZSBmb250IGlzIGRvd25sYWRlZCwgd2UgY2FuIHJ1biBgcmVwbGFjZSgpYCBvbiBpdFxuICAgICAgICAgICAgICAgICAgZm9udFVybFJlZ2V4cDogZm9udFVybFJlZ2V4cCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChleHRlcm5hbEZvbnRVcmwpLFxuICAgICAgICAgICAgICAgICAgdXJsOiBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgIGNzcyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyBhbGwgY3NzIGlzIHByb2Nlc3NlZCwgaXQncyB0aW1lIHRvIGhhbmRsZSBzY2hlZHVsZWQgZm9udHNcbiAgICBwcm9jZXNzRm9udFF1ZXVlKGZvbnRzUXVldWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChmb250VXJsKSB7XG4gICAgICB2YXIgc3VwcG9ydGVkRm9ybWF0cyA9IHtcbiAgICAgICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxuICAgICAgICAnd29mZic6ICdmb250L3dvZmYnLFxuICAgICAgICAnb3RmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC1vcGVudHlwZScsXG4gICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24veC1mb250LXR0ZicsXG4gICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAnc2ZudCc6ICdhcHBsaWNhdGlvbi9mb250LXNmbnQnLFxuICAgICAgICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICB9O1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBPYmplY3Qua2V5cyhzdXBwb3J0ZWRGb3JtYXRzKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXTtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgYnVsbGV0IHByb29mLCBpdCBuZWVkcyB0byBoYW5kbGUgZWRnZSBjYXNlcy4uLlxuICAgICAgICBpZiAoZm9udFVybC5pbmRleE9mKCcuJyArIGV4dGVuc2lvbikgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvcm1hdHNbZXh0ZW5zaW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3Ugc2VlIHRoaXMgZXJyb3IgbWVzc2FnZSwgeW91IHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIGNvZGUgYWJvdmUuXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGZvbnQgZm9ybWF0IGZvciAnICsgZm9udFVybCsgJzsgRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseScpO1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb250UXVldWUocXVldWUpIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxvYWQgZm9udHMgb25lIGJ5IG9uZSB1bnRpbCB3ZSBoYXZlIGFueXRoaW5nIGluIHRoZSBxdWV1ZTpcbiAgICAgICAgdmFyIGZvbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgcHJvY2Vzc05leHQoZm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBtb3JlIGZvbnRzIHRvIGxvYWQuXG4gICAgICAgIGNzc0xvYWRlZENhbGxiYWNrKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0KGZvbnQpIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZW5lZml0IGZyb20gY2FjaGluZy5cbiAgICAgICAgdmFyIG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm9udExvYWRlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEub3BlbignR0VUJywgZm9udC51cmwpO1xuICAgICAgICBvUmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIG9SZXEuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGJlIGFsc28gd29ydGggdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQgKVxuICAgICAgICAgIHZhciBmb250Qml0cyA9IG9SZXEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoZm9udEJpdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXJGYWlsZWQoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tOiAnICsgZm9udC51cmwpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKVxuICAgICAgICAgIGNzcyArPSBmb250LnRleHQgKyAnXFxuJztcbiAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KSB7XG4gICAgICAgICAgdmFyIGRhdGFVcmwgPSAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKSc7XG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dC5yZXBsYWNlKGZvbnQuZm9udFVybFJlZ2V4cCwgZGF0YVVybCkgKyAnXFxuJztcblxuICAgICAgICAgIC8vIHNjaGVkdWxlIG5leHQgZm9udCBkb3dubG9hZCBvbiBuZXh0IHRpY2suXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb2Nlc3NGb250UXVldWUocXVldWUpXG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgdmFyIGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gKGVsLnZpZXdCb3ggJiYgZWwudmlld0JveC5iYXNlVmFsICYmIGVsLnZpZXdCb3guYmFzZVZhbFtkaW1dKSB8fFxuICAgICAgKGNsb25lLmdldEF0dHJpYnV0ZShkaW0pICE9PSBudWxsICYmICFjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKS5tYXRjaCgvJSQvKSAmJiBwYXJzZUludChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSkpIHx8XG4gICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8XG4gICAgICBwYXJzZUludChjbG9uZS5zdHlsZVtkaW1dKSB8fFxuICAgICAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoZGltKSk7XG4gICAgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSkgPyAwIDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcrcDEpO1xuICAgICAgcmV0dXJuIGMgPT09ICclJyA/ICclMjUnIDogYztcbiAgICB9KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICB9XG5cbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgMTtcbiAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgZmFsc2U7XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xuXG4gICAgaW5saW5lSW1hZ2VzKGVsLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICAgIGlmKGVsLnRhZ05hbWUgPT0gJ3N2ZycpIHtcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpO1xuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnaGVpZ2h0Jyk7XG4gICAgICB9IGVsc2UgaWYoZWwuZ2V0QkJveCkge1xuICAgICAgICB2YXIgYm94ID0gZWwuZ2V0QkJveCgpO1xuICAgICAgICB3aWR0aCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBib3gueSArIGJveC5oZWlnaHQ7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKVxuICAgICAgICBjbG9uZSA9IHN2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaW5ZTWluIG1lZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBbXG4gICAgICAgIG9wdGlvbnMubGVmdCB8fCAwLFxuICAgICAgICBvcHRpb25zLnRvcCB8fCAwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICBdLmpvaW4oXCIgXCIpKTtcblxuICAgICAgdmFyIGZvcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvcmVpZ25PYmplY3QgPiAqJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWZvc1tpXS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgICBmb3NbaV0uc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBjdXN0b20gZm9udHMgd2UgbmVlZCB0byBmZXRjaCBmb250IGZpcnN0LCBhbmQgdGhlbiBpbmxpbmVcbiAgICAgIC8vIGl0cyB1cmwgaW50byBkYXRhLXVyaSBmb3JtYXQgKGVuY29kZSBhcyBiYXNlNjQpLiBUaGF0J3Mgd2h5IHN0eWxlXG4gICAgICAvLyBwcm9jZXNzaW5nIGlzIGRvbmUgYXN5bmNob25vdXNseS4gT25jZSBhbGwgaW5saW5pbmcgaXMgZmluc2hlZFxuICAgICAgLy8gY3NzTG9hZGVkQ2FsbGJhY2soKSBpcyBjYWxsZWQuXG4gICAgICBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gY3NzTG9hZGVkQ2FsbGJhY2soY3NzKSB7XG4gICAgICAgIC8vIGhlcmUgYWxsIGZvbnRzIGFyZSBpbmxpbmVkLCBzbyB0aGF0IHdlIGNhbiByZW5kZXIgdGhlbSBwcm9wZXJseS5cbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzLmlubmVySFRNTCA9IFwiPCFbQ0RBVEFbXFxuXCIgKyBjc3MgKyBcIlxcbl1dPlwiO1xuICAgICAgICB2YXIgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGRlZnMsIGNsb25lLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHZhciBvdXRIdG1sID0gb3V0ZXIuaW5uZXJIVE1MO1xuICAgICAgICAgIG91dEh0bWwgPSBvdXRIdG1sLnJlcGxhY2UoL05TXFxkKzpocmVmL2dpLCAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZicpO1xuICAgICAgICAgIGNiKG91dEh0bWwsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzRGF0YVVyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgZnVuY3Rpb24oc3ZnKSB7XG4gICAgICB2YXIgdXJpID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzdmcpKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYih1cmkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc1BuZ1VyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZW5jb2RlclR5cGUgPSBvcHRpb25zLmVuY29kZXJUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICAgIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgPSBvcHRpb25zLmVuY29kZXJPcHRpb25zIHx8IDAuODtcblxuICAgIHZhciBjb252ZXJ0VG9QbmcgPSBmdW5jdGlvbihzcmMsIHcsIGgpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgICAgb3B0aW9ucy5jYW52ZyhjYW52YXMsIHNyYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcil7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbmc7XG4gICAgICB0cnkge1xuICAgICAgICBwbmcgPSBjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMuZW5jb2RlclR5cGUsIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvcikgfHwgZS5uYW1lID09IFwiU2VjdXJpdHlFcnJvclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IocG5nKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGNvbnZlcnRUb1BuZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udmVydFRvUG5nKGltYWdlLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBkYXRhIFVSSSBhcyBhbiBpbWFnZSBvbiB0aGUgZm9sbG93aW5nIFNWR1xcbicsXG4gICAgICAgICAgICB3aW5kb3cuYXRvYih1cmkuc2xpY2UoMjYpKSwgJ1xcbicsXG4gICAgICAgICAgICBcIk9wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyJ3MgZGlhZ25vc2lzXFxuXCIsXG4gICAgICAgICAgICB1cmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3V0JC5kb3dubG9hZCA9IGZ1bmN0aW9uKG5hbWUsIHVyaSkge1xuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodXJpVG9CbG9iKHVyaSksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgZG93bmxvYWRTdXBwb3J0ZWQgPSAnZG93bmxvYWQnIGluIHNhdmVMaW5rO1xuICAgICAgaWYgKGRvd25sb2FkU3VwcG9ydGVkKSB7XG4gICAgICAgIHNhdmVMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICAgICAgc2F2ZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYXZlTGluayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGJsb2IgPSB1cmlUb0Jsb2IodXJpKTtcbiAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJsO1xuICAgICAgICAgIHNhdmVMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBvYmplY3QgVVJMcy4gRmFsbGluZyBiYWNrIHRvIHN0cmluZyBVUkwuJyk7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub3Blbih1cmksICdfdGVtcCcsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8sc3RhdHVzPW5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBtaW1lU3RyaW5nfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2Z0FzUG5nID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzUG5nVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIGRlZmluZSBpcyBkZWZpbmVkIGNyZWF0ZSBhcyBhbiBBTUQgbW9kdWxlXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvdXQkO1xuICAgIH0pO1xuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udHlwZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50aXRsZSxcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgYWxlcnRzSWQgPSBgTWVzc2FnZXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHthbGVydHNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZGl2IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIGxldCBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcgY2xvc2VtZScpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKS50ZXh0KCd4Jyk7XG5cbiAgICBtZXNzYWdlRW50ZXIubWVyZ2UobWVzc2FnZSk7XG5cbiAgICBtZXNzYWdlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9