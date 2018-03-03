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
        // add to do it here because of this.data to check for property canvas.texTypesetting 
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
                }, 50);
                d3.select(mathJaxElement.node().parentNode.parentNode).append(function () {
                  return svgMathJaxElement.node();
                });
              }, 25);
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
    classes.map(function (c) {
      Jupyter.keyboard_manager.register_events(c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzY1NWNiMGNjNDE2ODI4NGUwY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21hdGhqYXgtd3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm9wdGlvbnMiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsInBhcmVudCIsImF0dHIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYXJnaW4iLCJoZWlnaHQiLCJyZXF1aXJlcyIsImVuYWJsZWQiLCJwcm9wcyIsImRlY29yYXRvciIsIm5hbWUiLCJkZXNjcmlwdG9yIiwib2xkVmFsdWUiLCJ2YWx1ZSIsImhhc0RhdGEiLCJnZXRQcm9wZXJ0eSIsImRhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9iaiIsInByb3BlcnR5UGF0aCIsInRtcCIsInByb3BlcnRpZXMiLCJzcGxpdCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImluaXRpYWxpemUiLCJrZXkiLCJfaW5pdGlhbGl6ZSIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsInNlbGVjdEFsbCIsImFwcGVuZCIsInJlbW92ZSIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsIm1hcCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsImpzb24iLCJwYXJ0aWFsIiwicGFyc2UiLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkdyYXBoIiwiY29udGV4dE1lbnUiLCJjYWxsYmFjayIsIm1hdGhqYXgiLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1hdGhKYXhXcmFwcGVyIiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsInNob3dNYXRoTWVudSIsInNraXBTdGFydHVwVHlwZXNldCIsInRleDJqYXgiLCJpbmxpbmVNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJmb250IiwibGluZWJyZWFrcyIsImF1dG9tYXRpYyIsIlJlZ2lzdGVyIiwiTWVzc2FnZUhvb2siLCJpZCIsIm1hdGhKYXhFbGVtZW50Iiwic3ZnTWF0aEpheEVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiYm91bmQiLCJzdmdFbGVtZW50IiwiUXVldWUiLCJDb25maWd1cmVkIiwiZSIsIndhcm4iLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiTW9kYWwiLCJvdmVybGF5IiwiaG9sZGVyIiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzeW50YXhIaWdobGlnaHQiLCJjbGFzc2VzIiwiYyIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwicmVwbGFjZSIsIm1hdGNoIiwiY2xzIiwidGVzdCIsIlRvb2x0aXAiLCJIVE1MUGFyZW50IiwicG9zIiwibW91c2UiLCJTVkdQYXJlbnQiLCJ0YWJsZSIsInNlbGYiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJleHBvcnRzIiwid2luZG93Iiwib2xkUmVzaXplIiwib25yZXNpemUiLCJ6b29tVG9GaXQiLCJGcmFtZSIsIm1lbnUiLCJhZGQiLCJmcmFtZUlkIiwicmVuZGVyQ2hpbGRyZW4iLCJKc29uVXRpbHMiLCJpbnB1dCIsImpzb25SZWdleCIsImV4ZWMiLCJtaW1lIiwiTUlNRSIsIkNhbnZhcyIsImdyYXBoIiwiY2hhcnRGYWN0b3J5Iiwiem9vbSIsInVwZGF0ZVpvb20iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsIm1pZFgiLCJtaWRZIiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJkZXB0aCIsImxpbmtHcm91cCIsImxpbmsiLCJsaW5rRW50ZXIiLCJvIiwiZGlhZ29uYWwiLCJzIiwibm9kZUdyb3VwIiwibm9kZUVudGVyIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwibm9kZVVwZGF0ZSIsImxheWVyIiwiX2FwcGx5RXZlbnRzIiwibm9kZU9uQ2xpY2siLCJjbGljayIsImNhbnZhc05vZGVzIiwiZGF0YU1hcCIsInJlZHVjZSIsIkNvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsIl9maWx0ZXJOZXdFbGVtZW50cyIsIm5vZGVzVG9BZGQiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZW1wdHkiLCJzaG93TmVpZ2hib3VycyIsImNvbm5lY3RlZE5vZGVzIiwicmFkaXVzIiwiZWFjaCIsIm1hbnlGb3JjZSIsImZvcmNlTWFueUJvZHkiLCJzdHJlbmd0aCIsImxpbmtGb3JjZSIsImZvcmNlTGluayIsImRpc3RhbmNlIiwiY29sbGlkZUZvcmNlIiwiZm9yY2VDb2xsaWRlIiwiaXRlcmF0aW9ucyIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwicmVzdGFydCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJfX2RhdGFfXyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwiZngiLCJmeSIsImNhbnZhc09iamVjdHMiLCJkM0VsZW1lbnQiLCJuZXdFbGVtZW50cyIsImZpbmQiLCJDaGFydEZhY3RvcnkiLCJCYXJDaGFydCIsInNjYWxlQmFuZCIsInBhZGRpbmciLCJkb21haW5SYW5nZSIsImJhcnNHcm91cCIsImJhciIsImJhckVudGVyIiwiYmFuZHdpZHRoIiwiX3JlbmRlckF4aXMiLCJfcmVuZGVyTGVnZW5kIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJsaW5lRW50ZXIiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIiwic2NhdHRlckVudGVyIiwiU3ZnVG9QbmciLCJNYWluTWVudSIsImFib3V0TW9kYWwiLCJtZW51SWQiLCJzYXZlU3ZnQXNQbmciLCJBYm91dE1vZGFsIiwidmVyc2lvbiIsIm91dCQiLCJkb2N0eXBlIiwiaXNFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTVkdFbGVtZW50IiwicmVxdWlyZURvbU5vZGUiLCJlbCIsImlzRXh0ZXJuYWwiLCJ1cmwiLCJsYXN0SW5kZXhPZiIsImxvY2F0aW9uIiwiaG9zdCIsImlubGluZUltYWdlcyIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja0RvbmUiLCJpbWFnZSIsImhyZWYiLCJnZXRBdHRyaWJ1dGVOUyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImRlY29kZVVSSUNvbXBvbmVudCIsInByZXBhcmVTdmciLCJyZXNwb25zaXZlIiwieG1sbnMiLCJvdXRlciIsImNsb25lTm9kZSIsImJveCIsInNldEF0dHJpYnV0ZSIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsImFwcGVuZENoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiam9pbiIsImZvcyIsImlubmVySFRNTCIsImRlZnMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwib3V0SHRtbCIsInN2Z0FzRGF0YVVyaSIsInVyaSIsInN2Z0FzUG5nVXJpIiwiZW5jb2RlclR5cGUiLCJlbmNvZGVyT3B0aW9ucyIsImNvbnZlcnRUb1BuZyIsInciLCJoIiwiY29udGV4dCIsImNhbnZnIiwiYmFja2dyb3VuZENvbG9yIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJwbmciLCJTZWN1cml0eUVycm9yIiwiYXRvYiIsImRvd25sb2FkIiwibmF2aWdhdG9yIiwibXNTYXZlT3JPcGVuQmxvYiIsInVyaVRvQmxvYiIsInNhdmVMaW5rIiwiZG93bmxvYWRTdXBwb3J0ZWQiLCJkaXNwbGF5IiwiYm9keSIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmNsaWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmV2b2tlT2JqZWN0VVJMIiwicmVtb3ZlQ2hpbGQiLCJieXRlU3RyaW5nIiwibWltZVN0cmluZyIsIkFycmF5QnVmZmVyIiwiaW50QXJyYXkiLCJjaGFyQ29kZUF0IiwiQmxvYiIsInNhdmVTdmciLCJkZWZpbmUiLCJNZXNzYWdlIiwiYWxlcnRzSWQiLCJtZXNzYWdlRW50ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUEwRTtBQUFBLDRCQUE1REMsT0FBNEQ7QUFBQSxRQUE1REEsT0FBNEQsZ0NBQWxELEtBQWtEO0FBQUEsUUFBM0NDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLFFBQWpDQyxlQUFpQyxRQUFqQ0EsZUFBaUM7QUFBQSw0QkFBaEJDLE9BQWdCO0FBQUEsUUFBaEJBLE9BQWdCLGdDQUFOLEVBQU07O0FBQUE7O0FBQUEsb0hBQ2xFLEVBQUVILFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBQTBFQyxTQUFTQSxPQUFuRixFQURrRTs7QUFFeEUsUUFBSUMsSUFBSUMsTUFBSixLQUFlTixRQUFuQixFQUE2QjtBQUMzQixZQUFNLElBQUlPLFNBQUosQ0FBYyxpREFBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtDLE1BQUwsS0FBZ0JDLFNBQWhCLElBQTZCLE9BQU8sTUFBS0QsTUFBWixLQUF1QixVQUF4RCxFQUFvRTtBQUNsRSxZQUFNLElBQUlELFNBQUosQ0FBYyxrQ0FBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtHLFFBQUwsS0FBa0JELFNBQXRCLEVBQWlDO0FBQy9CLFlBQUtFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixxQ0FBbEI7QUFDRDtBQUNELFVBQUtDLE9BQUwsR0FBZUosU0FBZjtBQUNBLFVBQUtLLGtCQUFMLEdBQTBCLEdBQTFCLENBWndFLENBWXpDO0FBWnlDO0FBYXpFOzs7O2tDQUVhLENBQUU7Ozt3QkFFQztBQUNmLGFBQU8sS0FBS1YsT0FBTCxDQUFhRixRQUFiLENBQXNCVyxPQUF0QixDQUE4QkUsSUFBOUIsR0FBcUNDLE9BQXJDLENBQTZDQyxXQUE3QyxPQUErRCxLQUEvRCxHQUF1RUMsR0FBR0MsTUFBSCxDQUFVLEtBQUtmLE9BQUwsQ0FBYUYsUUFBYixDQUFzQlcsT0FBdEIsQ0FBOEJFLElBQTlCLEdBQXFDSyxVQUEvQyxDQUF2RSxHQUFvSSxLQUFLaEIsT0FBTCxDQUFhRixRQUFiLENBQXNCVyxPQUFqSztBQUNEOzs7d0JBRWU7QUFDZCxhQUFPLEtBQUtULE9BQUwsQ0FBYUYsUUFBYixDQUFzQlcsT0FBdEIsQ0FBOEJFLElBQTlCLEdBQXFDQyxPQUFyQyxDQUE2Q0MsV0FBN0MsT0FBK0QsS0FBL0QsR0FBdUUsS0FBS2IsT0FBTCxDQUFhRixRQUFiLENBQXNCVyxPQUF0QixDQUE4Qk0sTUFBOUIsQ0FBcUMsS0FBckMsQ0FBdkUsR0FBcUgsS0FBS2YsT0FBTCxDQUFhRixRQUFiLENBQXNCVyxPQUFsSjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtULE9BQUwsQ0FBYUYsUUFBYixDQUFzQlcsT0FBN0I7QUFDRDs7O3dCQUVZO0FBQ1gsYUFBTyxFQUFFUSxLQUFLLEVBQVAsRUFBV0MsT0FBTyxFQUFsQixFQUFzQkMsUUFBUSxFQUE5QixFQUFrQ0MsTUFBTSxFQUF4QyxFQUFQO0FBQ0Q7Ozt3QkFFVztBQUNWLFVBQUlDLFFBQVEsQ0FBQyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsT0FBakIsQ0FBRCxJQUE4QlQsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JKLElBQWxCLEdBQXlCYSxxQkFBekIsR0FBaURILEtBQTNGO0FBQ0EsYUFBT0EsUUFBUSxLQUFLSSxNQUFMLENBQVlMLElBQXBCLEdBQTJCLEtBQUtLLE1BQUwsQ0FBWVAsS0FBOUM7QUFDRDs7O3dCQUVZO0FBQ1gsVUFBSVEsU0FBUyxDQUFDLEtBQUtKLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixRQUFqQixDQUFELElBQStCVCxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkosSUFBbEIsR0FBeUJhLHFCQUF6QixHQUFpREUsTUFBN0Y7QUFDQSxhQUFPQSxTQUFTLEtBQUtELE1BQUwsQ0FBWVIsR0FBckIsR0FBMkIsS0FBS1EsTUFBTCxDQUFZTixNQUE5QztBQUNEOzs7Ozs7a0JBM0NrQnZCLFE7Ozs7Ozs7Ozs7OztRQ0pMK0IsUSxHQUFBQSxRO1FBZ0JBQyxPLEdBQUFBLE87QUFoQlQsU0FBU0QsUUFBVCxDQUFrQkUsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxTQUFTQyxTQUFULENBQW1CNUIsTUFBbkIsRUFBMkI2QixJQUEzQixFQUFpQ0MsVUFBakMsRUFBNkM7QUFDbEQsUUFBSUMsV0FBV0QsV0FBV0UsS0FBMUI7O0FBRUFGLGVBQVdFLEtBQVgsR0FBbUIsWUFBVztBQUM1QixVQUFJLENBQUNDLFFBQVFDLFlBQVksS0FBS0MsSUFBakIsRUFBdUJSLEtBQXZCLENBQVIsQ0FBTCxFQUE2QztBQUMzQyxhQUFLdEIsTUFBTCxDQUFZQyxLQUFaLG9CQUFtQ3FCLEtBQW5DO0FBQ0E7QUFDRDtBQUNELGFBQU9JLFNBQVNLLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQixDQUFQO0FBQ0QsS0FORDs7QUFRQSxXQUFPUCxVQUFQO0FBQ0QsR0FaRDtBQWFEOztBQUVNLFNBQVNKLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU8sU0FBU0MsU0FBVCxDQUFtQjVCLE1BQW5CLEVBQTJCNkIsSUFBM0IsRUFBaUNDLFVBQWpDLEVBQTZDO0FBQ2xELFFBQUlDLFdBQVdELFdBQVdFLEtBQTFCOztBQUVBRixlQUFXRSxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsVUFBSSxDQUFDRSxZQUFZLEtBQUtDLElBQWpCLEVBQXVCUixLQUF2QixDQUFMLEVBQW9DO0FBQ2xDLGFBQUt0QixNQUFMLENBQVlDLEtBQVosb0JBQW1DcUIsS0FBbkM7QUFDQTtBQUNEO0FBQ0QsYUFBT0ksU0FBU0ssS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCLENBQVA7QUFDRCxLQU5EOztBQVFBLFdBQU9QLFVBQVA7QUFDRCxHQVpEO0FBYUQ7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkksR0FBckIsRUFBMEJDLFlBQTFCLEVBQXdDOztBQUV0QyxNQUFJQyxNQUFNRixHQUFWOztBQUVBLE1BQUlFLE9BQU9ELFlBQVgsRUFBeUI7QUFDdkIsUUFBSUUsYUFBYUYsYUFBYUcsS0FBYixDQUFtQixHQUFuQixDQUFqQjs7QUFEdUI7QUFBQTtBQUFBOztBQUFBO0FBR3ZCLDJCQUFxQkQsVUFBckIsOEhBQWlDO0FBQUEsWUFBeEJFLFFBQXdCOztBQUMvQixZQUFJLENBQUNILElBQUlJLGNBQUosQ0FBbUJELFFBQW5CLENBQUwsRUFBbUM7QUFDakNILGdCQUFNckMsU0FBTjtBQUNBO0FBQ0QsU0FIRCxNQUdPO0FBQ0xxQyxnQkFBTUEsSUFBSUcsUUFBSixDQUFOO0FBQ0Q7QUFDRjtBQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3hCOztBQUVELFNBQU9ILEdBQVA7QUFDRDs7QUFFRCxTQUFTUCxPQUFULENBQWlCSyxHQUFqQixFQUFzQjtBQUNwQixTQUFPQSxRQUFTQSxlQUFlTyxLQUFmLElBQXdCUCxJQUFJUSxNQUE3QixJQUF5Q1IsZUFBZVMsTUFBZixJQUF5QkEsT0FBT0MsTUFBUCxDQUFjVixHQUFkLEVBQW1CUSxNQUE3RixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O1FDdERlRyxVLEdBQUFBLFU7QUFBVCxTQUFTQSxVQUFULEdBQXNCO0FBQzNCLFNBQU8sVUFBVWpELE1BQVYsRUFBa0JrRCxHQUFsQixFQUF1QnBCLFVBQXZCLEVBQW1DO0FBQ3hDLFFBQUlDLFdBQVdELFdBQVdFLEtBQTFCOztBQUVBRixlQUFXRSxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsV0FBS21CLFdBQUw7QUFDQSxhQUFPcEIsU0FBU0ssS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCLENBQVA7QUFDRCxLQUhEO0FBSUEsV0FBT1AsVUFBUDtBQUNELEdBUkQ7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCc0IsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5Q3pELE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBS3dELElBQUwsR0FBWWxELFNBQVo7QUFDQSxVQUFLbUQsTUFBTCxHQUFjbkQsU0FBZDtBQUNBLFVBQUtvRCxNQUFMLEdBQWNwRCxTQUFkO0FBQ0EsVUFBS3FELFFBQUwsR0FBZ0JyRCxTQUFoQjtBQUNBLFVBQUtzRCxZQUFMLEdBQW9CdEQsU0FBcEI7QUFDQSxVQUFLdUQsT0FBTCxHQUFldkQsU0FBZjtBQVAwRDtBQVEzRDs7OztrQ0FFYTtBQUFBOztBQUNaLFdBQUt1RCxPQUFMLEdBQWUsc0JBQVksS0FBSzVELE9BQWpCLENBQWY7O0FBRUEsV0FBS1MsT0FBTCxHQUFlLEtBQUthLE1BQUwsQ0FBWVAsTUFBWixDQUFtQixrQkFBbkIsQ0FBZjs7QUFFQSxXQUFLd0MsSUFBTCxHQUFZLEtBQUtsQixJQUFMLENBQVV3QixNQUFWLENBQWlCQyxLQUFqQixDQUF1QlAsSUFBbkM7QUFDQSxXQUFLRyxRQUFMLEdBQWdCLEtBQUtyQixJQUFMLENBQVV3QixNQUFWLENBQWlCQyxLQUFqQixDQUF1QnpCLElBQXZDO0FBQ0EsV0FBS3NCLFlBQUwsR0FBb0JWLE9BQU9jLElBQVAsQ0FBWSxLQUFLTCxRQUFqQixDQUFwQjs7QUFFQSxXQUFLRCxNQUFMLEdBQWMzQyxHQUFHa0QsV0FBSCxHQUFpQkMsS0FBakIsQ0FBdUIsQ0FBQyxDQUFELEVBQUksS0FBSzVDLEtBQVQsQ0FBdkIsRUFBd0M2QyxNQUF4QyxDQUErQyxLQUFLWCxJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBM0QsQ0FBZDtBQUNBLFdBQUtWLE1BQUwsR0FBYzFDLEdBQUdrRCxXQUFILEdBQWlCQyxLQUFqQixDQUF1QixDQUFDLEtBQUt2QyxNQUFOLEVBQWMsQ0FBZCxDQUF2QixFQUF5Q3dDLE1BQXpDLENBQWdELEtBQUtYLElBQUwsQ0FBVWEsQ0FBVixDQUFZRixNQUE1RCxDQUFkOztBQUVBLFdBQUtHLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLVixZQUFMLENBQWtCVyxPQUFsQixDQUEwQjtBQUFBLGVBQU8sT0FBS0QsU0FBTCxHQUFpQixPQUFLQSxTQUFMLENBQWVFLE1BQWYsQ0FBc0IsT0FBS2IsUUFBTCxDQUFjTixHQUFkLENBQXRCLENBQXhCO0FBQUEsT0FBMUI7O0FBRUEsVUFBSSxDQUFDLEtBQUtHLElBQUwsQ0FBVWEsQ0FBVixDQUFZRixNQUFaLENBQW1CbEIsTUFBeEIsRUFBZ0M7QUFDOUIsYUFBS1EsTUFBTCxDQUFZVSxNQUFaLENBQW1CLENBQUMsQ0FBRCxFQUFJcEQsR0FBRzBELEdBQUgsQ0FBTyxLQUFLSCxTQUFaLEVBQXVCO0FBQUEsaUJBQUtJLENBQUw7QUFBQSxTQUF2QixDQUFKLENBQW5CO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUtsQixJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBWixDQUFtQmxCLE1BQXhCLEVBQWdDO0FBQzlCLGFBQUtTLE1BQUwsQ0FBWVMsTUFBWixDQUFtQixDQUFDLENBQUQsRUFBSSxLQUFLRyxTQUFMLENBQWVyQixNQUFmLEdBQXdCLEtBQUtXLFlBQUwsQ0FBa0JYLE1BQTlDLENBQW5CO0FBQ0Q7QUFDRjs7O2tDQUVhO0FBQ1o7QUFDQSxVQUFJMEIsYUFBYSxLQUFLakUsT0FBTCxDQUFha0UsU0FBYixDQUF1QixpQkFBdkIsQ0FBakI7O0FBRUEsVUFBSSxDQUFDRCxXQUFXL0QsSUFBWCxFQUFMLEVBQXdCO0FBQ3RCK0QscUJBQWEsS0FBS2pFLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxlQUF2QyxDQUFiO0FBQ0Q7O0FBRURtRCxpQkFBV0MsU0FBWCxDQUFxQixHQUFyQixFQUEwQkUsTUFBMUI7O0FBRUE7QUFDQUgsaUJBQ0duRCxJQURILENBQ1EsV0FEUixtQkFDb0MsS0FBS0csTUFEekMsUUFFR29ELElBRkgsQ0FFUWhFLEdBQUdpRSxVQUFILENBQWMsS0FBS3RCLE1BQW5CLENBRlIsRUFHR21CLE1BSEgsQ0FHVSxNQUhWLEVBSUdyRCxJQUpILENBSVEsSUFKUixFQUljLEVBSmQsRUFLR0EsSUFMSCxDQUtRLElBTFIsRUFLYyxLQUFLRixLQUFMLEdBQWEsQ0FMM0IsRUFNR0UsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsT0FOaEIsRUFPR0EsSUFQSCxDQU9RLE9BUFIsRUFPaUIsYUFQakIsRUFRR3lELEtBUkgsQ0FRUyxhQVJULEVBUXdCLEtBUnhCLEVBU0dDLElBVEgsQ0FTUSxLQUFLMUIsSUFBTCxDQUFVWSxDQUFWLENBQVllLEtBVHBCOztBQVdBO0FBQ0EsVUFBSUMsYUFBYSxLQUFLMUUsT0FBTCxDQUFha0UsU0FBYixDQUF1QixpQkFBdkIsQ0FBakI7O0FBRUEsVUFBSSxDQUFDUSxXQUFXeEUsSUFBWCxFQUFMLEVBQXdCO0FBQ3RCd0UscUJBQWEsS0FBSzFFLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxlQUF2QyxDQUFiO0FBQ0Q7O0FBRUQ0RCxpQkFBV1IsU0FBWCxDQUFxQixHQUFyQixFQUEwQkUsTUFBMUI7O0FBRUE7QUFDQU0saUJBQ0dMLElBREgsQ0FDUWhFLEdBQUdzRSxRQUFILENBQVksS0FBSzVCLE1BQWpCLENBRFIsRUFFR29CLE1BRkgsQ0FFVSxNQUZWLEVBR0dyRCxJQUhILENBR1EsSUFIUixFQUdjLENBQUMsRUFIZixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljLEtBQUtHLE1BQUwsR0FBYyxDQUo1QixFQUtHSCxJQUxILENBS1EsTUFMUixFQUtnQixPQUxoQixFQU1HQSxJQU5ILENBTVEsT0FOUixFQU1pQixhQU5qQixFQU9HeUQsS0FQSCxDQU9TLGFBUFQsRUFPd0IsS0FQeEIsRUFRR0MsSUFSSCxDQVFRLEtBQUsxQixJQUFMLENBQVVhLENBQVYsQ0FBWWMsS0FScEI7QUFTRDs7O29DQUVlO0FBQ2QsVUFBSSxLQUFLN0MsSUFBTCxDQUFVd0IsTUFBVixDQUFpQkMsS0FBakIsQ0FBdUJ1QixVQUEzQixFQUF1Qzs7QUFFckMsWUFBSUMsY0FBYyxLQUFLN0UsT0FBTCxDQUFha0UsU0FBYixDQUF1QixnQkFBdkIsQ0FBbEI7O0FBRUEsWUFBSSxDQUFDVyxZQUFZM0UsSUFBWixFQUFMLEVBQXlCO0FBQ3ZCMkUsd0JBQWMsS0FBSzdFLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxlQUF2QyxDQUFkO0FBQ0Q7O0FBRUQ7QUFDQStELG9CQUFZWCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCRSxNQUEzQjs7QUFFQSxZQUFJVSxTQUFTRCxZQUFZWCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCdEMsSUFBM0IsQ0FBZ0MsS0FBS3NCLFlBQUwsQ0FBa0I2QixLQUFsQixFQUFoQyxDQUFiOztBQUVBRCxlQUFPRSxJQUFQLEdBQWNaLE1BQWQ7O0FBRUFVLGlCQUFTQSxPQUFPRyxLQUFQLEdBQ05kLE1BRE0sQ0FDQyxHQURELEVBRU5yRCxJQUZNLENBRUQsV0FGQyxFQUVZLFVBQUNrRCxDQUFELEVBQUlrQixDQUFKO0FBQUEsa0NBQXlCQSxJQUFJLEVBQTdCO0FBQUEsU0FGWixFQUdOQyxLQUhNLENBR0FMLE1BSEEsQ0FBVDs7QUFLQUEsZUFBT1gsTUFBUCxDQUFjLE1BQWQsRUFDR3JELElBREgsQ0FDUSxHQURSLEVBQ2EsS0FBS0YsS0FBTCxHQUFhLEVBRDFCLEVBRUdFLElBRkgsQ0FFUSxPQUZSLEVBRWlCLEVBRmpCLEVBR0dBLElBSEgsQ0FHUSxRQUhSLEVBR2tCLEVBSGxCLEVBSUd5RCxLQUpILENBSVMsTUFKVCxFQUlpQixVQUFDUCxDQUFELEVBQUlrQixDQUFKO0FBQUEsaUJBQVVyQyxNQUFNdUMsTUFBTixDQUFhRixJQUFJLENBQWpCLENBQVY7QUFBQSxTQUpqQjs7QUFNQUosZUFBT1gsTUFBUCxDQUFjLE1BQWQsRUFDR3JELElBREgsQ0FDUSxHQURSLEVBQ2EsS0FBS0YsS0FBTCxHQUFhLEVBRDFCLEVBRUdFLElBRkgsQ0FFUSxHQUZSLEVBRWEsQ0FGYixFQUdHQSxJQUhILENBR1EsSUFIUixFQUdjLE9BSGQsRUFJR3lELEtBSkgsQ0FJUyxhQUpULEVBSXdCLEtBSnhCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLGlCQUFLUixDQUFMO0FBQUEsU0FMUjtBQU1EO0FBQ0Y7Ozs0QkFFY3FCLE8sRUFBUzVELEssRUFBTztBQUM3QixhQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsU0FBWCxFQUFzQixRQUFRNEQsT0FBOUIsRUFBUCxFQUFnRCxLQUFLLEVBQUUsU0FBUyxPQUFYLEVBQW9CLFFBQVE1RCxLQUE1QixFQUFyRCxFQUFQO0FBQ0Q7OztnQ0FNa0JzQyxHLEVBQUs7QUFDdEIsYUFBT3pCLE1BQU1nRCxJQUFOLENBQVcsSUFBSWhELEtBQUosQ0FBVXlCLEdBQVYsQ0FBWCxFQUEyQixVQUFDd0IsQ0FBRCxFQUFJTCxDQUFKO0FBQUEsZUFBVUEsQ0FBVjtBQUFBLE9BQTNCLEVBQXdDTSxHQUF4QyxDQUE0QztBQUFBLGVBQUs5QixDQUFMO0FBQUEsT0FBNUMsQ0FBUDtBQUNEOzs7d0JBTm1CO0FBQ2xCLGFBQU9yRCxHQUFHb0YsZUFBSCxHQUFxQmhDLE1BQXJCLENBQTRCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBNUIsRUFBc0NpQyxZQUF0QyxDQUFtRHJGLEdBQUdzRixrQkFBdEQsQ0FBUDtBQUNEOzs7Ozs7a0JBekhrQjlDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7Ozs7OztJQUVxQitDLFM7OztBQUVuQiwyQkFBNEQ7QUFBQSw0QkFBOUN4RyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxzSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlFLElBQUlDLE1BQUosS0FBZW1HLFNBQW5CLEVBQThCO0FBQzVCLFlBQU0sSUFBSWxHLFNBQUosQ0FBYyxrREFBZCxDQUFOO0FBQ0Q7QUFDRCxVQUFLbUcsU0FBTCxHQUFpQixFQUFqQjtBQUwwRDtBQU0zRDs7Ozt3QkFFR0MsUSxFQUFVO0FBQ1osV0FBS0QsU0FBTCxDQUFlRSxJQUFmLENBQW9CRCxRQUFwQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2Y7QUFEZTtBQUFBO0FBQUE7O0FBQUE7QUFFZiw2QkFBcUIsS0FBS0QsU0FBMUIsOEhBQXFDO0FBQUEsY0FBNUJDLFFBQTRCOztBQUNuQ0EsbUJBQVNFLFFBQVQsQ0FBa0IsRUFBQzNHLFVBQVUsSUFBWCxFQUFsQixFQUFvQzRHLElBQXBDLENBQXlDLEtBQUtyRSxJQUE5QyxFQUFvRGpDLE1BQXBEO0FBQ0Q7QUFKYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2hCOzs7Ozs7a0JBcEJrQmlHLFM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7SUFFcUJNLEk7QUFFbkIsc0JBQXFFO0FBQUEsNEJBQXZEOUcsT0FBdUQ7QUFBQSxRQUF2REEsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsNkJBQXRDQyxRQUFzQztBQUFBLFFBQXRDQSxRQUFzQyxpQ0FBM0IsTUFBMkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUNuRSxTQUFLMEcsUUFBTCxDQUFjLEVBQUU1RyxTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQUFkO0FBQ0E7OztBQUdBLFNBQUs2RyxHQUFMLEdBQVcscUJBQVcsS0FBSzVHLE9BQWhCLENBQVg7QUFDRDs7OztvQ0FFZ0Q7QUFBQSxVQUF0Q0gsT0FBc0MsU0FBdENBLE9BQXNDO0FBQUEsVUFBN0JDLFFBQTZCLFNBQTdCQSxRQUE2QjtBQUFBLFVBQW5CQyxlQUFtQixTQUFuQkEsZUFBbUI7O0FBQy9DLFdBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLElBQWdCLEVBQS9CO0FBQ0EsVUFBSSxDQUFDLEtBQUtBLE9BQUwsQ0FBYUQsZUFBZCxJQUFpQyxDQUFDQSxlQUF0QyxFQUF1RDtBQUNyRCxjQUFNLElBQUk4RyxLQUFKLENBQVUsd0dBQVYsQ0FBTjtBQUNEO0FBQ0QsVUFBSSxDQUFDLEtBQUs3RyxPQUFMLENBQWFGLFFBQWQsSUFBMEIsQ0FBQ0EsUUFBL0IsRUFBeUM7QUFDdkMsY0FBTSxJQUFJK0csS0FBSixDQUFVLHdEQUFWLENBQU47QUFDRDtBQUNELFVBQUksT0FBTy9HLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaENBLG1CQUFXZ0IsR0FBR0MsTUFBSCxDQUFVakIsUUFBVixDQUFYO0FBQ0Q7QUFDRDs7Ozs7O0FBTUEsV0FBS0UsT0FBTCxDQUFhSCxPQUFiLEdBQXVCQSxXQUFXLEtBQUtHLE9BQUwsQ0FBYUgsT0FBL0M7QUFDQSxXQUFLRyxPQUFMLENBQWFGLFFBQWIsR0FBd0JBLFlBQVksS0FBS0UsT0FBTCxDQUFhRixRQUFqRDtBQUNBLFdBQUtFLE9BQUwsQ0FBYUQsZUFBYixHQUErQkEsbUJBQW1CLEtBQUtDLE9BQUwsQ0FBYUQsZUFBL0Q7QUFDQSxhQUFPLElBQVA7QUFDRDs7O3lCQUVJK0csSSxFQUFNQyxPLEVBQVM7QUFDbEIsVUFBSTFFLE9BQU8sb0JBQVUyRSxLQUFWLENBQWdCRixJQUFoQixFQUFzQkMsT0FBdEIsQ0FBWDtBQUNBLFVBQUkxRSxJQUFKLEVBQVU7QUFDUixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUt1RSxHQUFaO0FBQ0Q7Ozs7OztrQkEzQ2tCRCxJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7O0lBR3FCTSxNOztBQUVuQjs7OztBQUlBLG9CQUFzQztBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBeEJwSCxPQUF3QjtBQUFBLFFBQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUNwQyxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLcUgsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzBCQUlNQyxPLEVBQVM7QUFDYixVQUFJLEtBQUt0SCxPQUFULEVBQWtCO0FBQ2hCLGFBQUtxSCxPQUFMLENBQWExRyxLQUFiLENBQW1CeUcsT0FBT0csT0FBUCxDQUFlLE9BQWYsRUFBd0JELE9BQXhCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt5QkFJS0EsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhRyxJQUFiLENBQWtCSixPQUFPRyxPQUFQLENBQWUsTUFBZixFQUF1QkQsT0FBdkIsQ0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBS01BLE8sRUFBU0csTSxFQUFPO0FBQ3BCLFdBQUtKLE9BQUwsQ0FBYUksS0FBYixDQUFtQkwsT0FBT0csT0FBUCxDQUFlLE9BQWYsRUFBd0JELE9BQXhCLENBQW5CLEVBQXFERyxNQUFyRDtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS0gsTyxFQUFTRyxLLEVBQU87QUFDbkJBLGNBQVFBLFNBQVMsRUFBakI7QUFDQSxXQUFLSixPQUFMLENBQWFJLEtBQWIsQ0FBbUJMLE9BQU9HLE9BQVAsQ0FBZSxNQUFmLEVBQXVCRCxPQUF2QixDQUFuQixFQUFvREcsS0FBcEQ7QUFDRDs7QUFFRDs7Ozs7Ozs7NEJBS2VDLEssRUFBT0osTyxFQUFTO0FBQzdCLG1CQUFXSSxLQUFYLFlBQXVCLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUF2QixXQUFxRE4sT0FBckQ7QUFDRDs7Ozs7O2tCQXZEa0JGLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCUyxLOzs7QUFFbkIsdUJBQTREO0FBQUEsNEJBQTlDN0gsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7O2tDQUVhO0FBQ1osV0FBS1UsT0FBTCxHQUFlLEtBQUthLE1BQUwsQ0FBWVAsTUFBWixDQUFtQixrQkFBbkIsQ0FBZjtBQUNEOzs7aUNBRVlOLE8sRUFBUztBQUFBOztBQUNwQixVQUFJLENBQUNBLE9BQUwsRUFBYzs7QUFFZCxVQUFJbUQsVUFBVSxzQkFBWSxLQUFLNUQsT0FBakIsQ0FBZDtBQUNBLFVBQUkySCxjQUFjLDBCQUFnQixLQUFLM0gsT0FBckIsQ0FBbEI7QUFDQSxVQUFJNEgsV0FBVyx1QkFBYSxLQUFLNUgsT0FBbEIsQ0FBZjtBQUNBLFVBQUk2SCxVQUFVLDZCQUFtQixLQUFLN0gsT0FBeEIsQ0FBZDs7QUFFQVMsY0FDR3FILEVBREgsQ0FDTSxhQUROLEVBQ3FCLFVBQVNyRCxDQUFULEVBQVk7QUFDN0IsWUFBSXBDLE9BQU9vQyxFQUFFcEMsSUFBRixJQUFVb0MsQ0FBckI7QUFDQTtBQUNBa0Qsb0JBQVlqQixJQUFaLENBQWlCckUsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkJqQyxNQUE3QjtBQUNBO0FBQ0EySCx3QkFBZ0JqRCxJQUFoQixDQUFxQixJQUFyQixFQUEyQnpDLElBQTNCLEVBQWlDLGFBQWpDO0FBQ0QsT0FQSCxFQVFHeUYsRUFSSCxDQVFNLE9BUk4sRUFRZSxVQUFTckQsQ0FBVCxFQUFZO0FBQ3ZCLFlBQUlwQyxPQUFPb0MsRUFBRXBDLElBQUYsSUFBVW9DLENBQXJCO0FBQ0E7QUFDQXNELHdCQUFnQmpELElBQWhCLENBQXFCLElBQXJCLEVBQTJCekMsSUFBM0IsRUFBaUMsT0FBakM7QUFDRCxPQVpILEVBYUd5RixFQWJILENBYU0sVUFiTixFQWFrQixVQUFTckQsQ0FBVCxFQUFZO0FBQzFCLFlBQUlwQyxPQUFPb0MsRUFBRXBDLElBQUYsSUFBVW9DLENBQXJCO0FBQ0E7QUFDQXNELHdCQUFnQmpELElBQWhCLENBQXFCLElBQXJCLEVBQTJCekMsSUFBM0IsRUFBaUMsVUFBakM7QUFDRCxPQWpCSCxFQWtCR3lGLEVBbEJILENBa0JNLFdBbEJOLEVBa0JtQixhQUFLO0FBQ3BCLFlBQUl6RixPQUFPb0MsRUFBRXBDLElBQUYsSUFBVW9DLENBQXJCO0FBQ0E7QUFDQWIsZ0JBQVE4QyxJQUFSLENBQWFyRSxLQUFLMkYsUUFBbEIsRUFBNEIsSUFBNUIsRUFBa0M1SCxNQUFsQztBQUNBO0FBQ0F5SCxnQkFBUXBCLFFBQVIsQ0FBaUIsRUFBQzNHLFVBQVU4RCxPQUFYLEVBQWpCLEVBQXNDOEMsSUFBdEMsQ0FBMkMsT0FBS3JFLElBQWhELEVBQXNEakMsTUFBdEQ7QUFDRCxPQXhCSCxFQXlCRzBILEVBekJILENBeUJNLFVBekJOLEVBeUJrQixZQUFNO0FBQ3BCO0FBQ0FsRSxnQkFBUXRELFFBQVI7QUFDRCxPQTVCSDs7QUE4QkEsZUFBU3lILGVBQVQsQ0FBeUIxRixJQUF6QixFQUErQjRGLEtBQS9CLEVBQXNDO0FBQ3BDLFlBQUk1RixLQUFLNkYsU0FBVCxFQUFvQjtBQUNsQmpGLGlCQUFPQyxNQUFQLENBQWNiLEtBQUs2RixTQUFuQixFQUE4QjVELE9BQTlCLENBQXNDLFVBQUM2RCxFQUFELEVBQVE7QUFDNUM7QUFDQUEsZUFBR0MsT0FBSCxLQUFlSCxLQUFmLElBQXdCTCxTQUFTbEIsSUFBVCxDQUFjLEVBQUVrQixVQUFVTyxFQUFaLEVBQWQsRUFBZ0MsSUFBaEMsRUFBc0NFLE9BQXRDLEVBQXhCO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7QUFDRjs7OzhCQU1nQkMsSSxFQUFNOztBQUVyQixVQUFJN0gsVUFBVUosU0FBZDtBQUNBLGNBQVFpSSxJQUFSO0FBQ0EsYUFBSyxPQUFMO0FBQ0U3SCxvQkFBVUssR0FBR3lILFdBQWI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFOUgsb0JBQVVLLEdBQUcwSCxhQUFiO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRS9ILG9CQUFVSyxHQUFHMkgsWUFBYjtBQUNBO0FBQ0YsYUFBSyxVQUFMO0FBQ0VoSSxvQkFBVUssR0FBRzRILGNBQWI7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFakksb0JBQVVLLEdBQUc2SCxVQUFiO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRWxJLG9CQUFVSyxHQUFHOEgsU0FBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0E7QUFDRW5JLG9CQUFVSyxHQUFHK0gsWUFBYjtBQXJCRjs7QUF3QkEsYUFBT3BJLE9BQVA7QUFDRDs7O3dCQWhDbUI7QUFDbEIsYUFBT0ssR0FBR29GLGVBQUgsR0FBcUJoQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDaUMsWUFBdEMsQ0FBbURyRixHQUFHc0Ysa0JBQXRELENBQVA7QUFDRDs7Ozs7O2tCQTVEa0JzQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCb0IsYyxXQU1sQiw0QkFBUSx1QkFBUixDOzs7QUFKRCxnQ0FBNEQ7QUFBQSw0QkFBOUNqSixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwySEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7QUFDUCxXQUFLVSxPQUFMLEdBQWUsS0FBS1QsT0FBTCxDQUFhRixRQUFiLENBQXNCVyxPQUFyQztBQUNBLFVBQUk7QUFDRnNJLGdCQUFRQyxHQUFSLENBQVlDLE1BQVosQ0FBbUI7QUFDakJDLHdCQUFjLEtBREc7QUFFakJDLDhCQUFvQixJQUZIO0FBR2pCQyxtQkFBUztBQUNQQyx3QkFBWSxDQUNWLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FEVSxFQUVWLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FGVSxDQURMO0FBS1BDLDRCQUFnQjtBQUxULFdBSFE7QUFVakIsc0JBQVk7QUFDVkMsa0JBQU0sVUFESTtBQUVWQyx3QkFBWTtBQUNWQyx5QkFBVztBQUREO0FBRkYsV0FWSztBQWdCakIsaUJBQU87QUFDTEYsa0JBQU0sVUFERDtBQUVMQyx3QkFBWTtBQUNWQyx5QkFBVztBQUREO0FBRlA7QUFoQlUsU0FBbkI7O0FBd0JBVixnQkFBUUMsR0FBUixDQUFZVSxRQUFaLENBQXFCQyxXQUFyQixDQUFpQyxVQUFqQyxFQUE2QyxVQUFTQyxFQUFULEVBQWE7QUFDeEQsY0FBSUEsTUFBTUEsR0FBRzVHLE1BQUgsR0FBWSxDQUF0QixFQUF5QjtBQUN2QixnQkFBSTZHLGlCQUFpQi9JLEdBQUdDLE1BQUgsT0FBYzZJLEdBQUcsQ0FBSCxDQUFkLFlBQXJCO0FBQ0EsZ0JBQUlFLG9CQUFvQkQsZUFBZTlJLE1BQWYsQ0FBc0IsS0FBdEIsQ0FBeEI7QUFDQSxnQkFBSStJLGtCQUFrQm5KLElBQWxCLEVBQUosRUFBOEI7QUFDNUJvSix5QkFBVyxZQUFNO0FBQ2ZBLDJCQUFXLFlBQU07QUFDZixzQkFBSUMsUUFBUUYsa0JBQWtCL0ksTUFBbEIsQ0FBeUIsR0FBekIsRUFBOEJKLElBQTlCLEdBQXFDYSxxQkFBckMsRUFBWjtBQUNBc0ksb0NBQWtCdkksSUFBbEIsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBQ3lJLE1BQU0zSSxLQUFQLEdBQWUsQ0FBM0M7QUFDQXlJLG9DQUFrQnZJLElBQWxCLENBQXVCLEdBQXZCLEVBQTRCLENBQUMsRUFBN0I7QUFDRCxpQkFKRCxFQUlHLEVBSkg7QUFLQVQsbUJBQUdDLE1BQUgsQ0FBVThJLGVBQWVsSixJQUFmLEdBQXNCSyxVQUF0QixDQUFpQ0EsVUFBM0MsRUFBdUQ0RCxNQUF2RCxDQUE4RCxZQUFXO0FBQ3ZFLHlCQUFPa0Ysa0JBQWtCbkosSUFBbEIsRUFBUDtBQUNELGlCQUZEO0FBR0QsZUFURCxFQVNHLEVBVEg7QUFVRDtBQUNGO0FBQ0YsU0FqQkQ7O0FBbUJBLFlBQUlzSixhQUFhLEtBQUt4SixPQUFMLENBQWFNLE1BQWIsQ0FBb0IsS0FBcEIsQ0FBakI7QUFDQSxZQUFJa0osV0FBV3RKLElBQVgsRUFBSixFQUF1QjtBQUNyQm9JLGtCQUFRQyxHQUFSLENBQVlrQixLQUFaLENBQ0UsQ0FBQyxhQUFELEVBQWdCbkIsUUFBUUMsR0FBeEIsRUFBNkIsS0FBN0IsQ0FERixFQUVFLENBQUMsU0FBRCxFQUFZRCxRQUFRQyxHQUFwQixFQUF5QmlCLFdBQVd0SixJQUFYLEVBQXpCLENBRkYsRUFHRSxDQUFDLGFBQUQsRUFBZ0JvSSxRQUFRQyxHQUF4QixFQUE2QixVQUE3QixDQUhGLEVBSUUsQ0FBQyxTQUFELEVBQVlELFFBQVFDLEdBQXBCLEVBQXlCLEtBQUt2SSxPQUFMLENBQWFFLElBQWIsRUFBekIsQ0FKRjtBQU1ELFNBUEQsTUFPTztBQUNMb0ksa0JBQVFDLEdBQVIsQ0FBWWtCLEtBQVosQ0FDRSxDQUFDLGFBQUQsRUFBZ0JuQixRQUFRQyxHQUF4QixFQUE2QixVQUE3QixDQURGLEVBRUUsQ0FBQyxTQUFELEVBQVlELFFBQVFDLEdBQXBCLEVBQXlCLEtBQUt2SSxPQUFMLENBQWFFLElBQWIsRUFBekIsQ0FGRjtBQUlEOztBQUVEb0ksZ0JBQVFDLEdBQVIsQ0FBWW1CLFVBQVo7QUFDRCxPQTVERCxDQTRERSxPQUFPQyxDQUFQLEVBQVU7QUFDVixZQUFJQSxFQUFFckksSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQy9CLGVBQUt4QixNQUFMLENBQVk4SixJQUFaLENBQWlCLG1DQUFqQixFQUFzREQsQ0FBdEQ7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLN0osTUFBTCxDQUFZK0csS0FBWixDQUFrQiwyQkFBbEIsRUFBK0M4QyxDQUEvQztBQUNEO0FBQ0Y7QUFFRjs7Ozs7a0JBN0VrQnRCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCd0IsSTs7O0FBRW5CLHNCQUE0RDtBQUFBLDRCQUE5Q3pLLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFFUUQsUSxFQUFVeUssYSxFQUFlO0FBQUE7O0FBQ2hDLGFBQU9BLGNBQWNDLE9BQWQsRUFBUCxFQUFnQztBQUM5QixZQUFJQyxXQUFXRixjQUFjRyxJQUFkLEVBQWY7QUFDQSxZQUFJQyxRQUFRN0ssU0FBUzhFLE1BQVQsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUNBLFlBQUlnRyxTQUFTRCxNQUFNaEcsU0FBTixDQUFnQixHQUFoQixFQUFxQnRDLElBQXJCLENBQTBCLENBQUNvSSxRQUFELENBQTFCLEVBQXNDL0UsS0FBdEMsR0FBOENkLE1BQTlDLENBQXFELEdBQXJELEVBQTBEckQsSUFBMUQsQ0FBK0QsT0FBL0QsRUFBd0VrSixTQUFTdkYsS0FBakYsRUFBd0YyRixJQUF4RixDQUE2RkosU0FBU3ZGLEtBQXRHLENBQWI7QUFDQSxZQUFJdUYsU0FBUzdDLFFBQVQsSUFBcUIzRSxPQUFPQyxNQUFQLENBQWN1SCxTQUFTN0MsUUFBdkIsRUFBaUM1RSxNQUExRCxFQUFrRTtBQUNoRTRILGlCQUFPOUMsRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBQ3JELENBQUQ7QUFBQSxtQkFBTyx1QkFBYSxPQUFLekUsT0FBbEIsRUFBMkIwRyxJQUEzQixDQUFnQ2pDLENBQWhDLEVBQW1DLElBQW5DLEVBQXlDNEQsT0FBekMsRUFBUDtBQUFBLFdBQW5CO0FBQ0Q7QUFDRCxZQUFJb0MsU0FBU0ssS0FBVCxJQUFrQjdILE9BQU9DLE1BQVAsQ0FBY3VILFNBQVNLLEtBQXZCLEVBQThCOUgsTUFBOUIsR0FBdUMsQ0FBN0QsRUFBZ0U7QUFDOUQsY0FBSStILFVBQVVKLE1BQU0vRixNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0EsY0FBSW9HLG1CQUFtQixLQUFLQyxRQUFMLENBQWNoSSxPQUFPQyxNQUFQLENBQWN1SCxTQUFTSyxLQUF2QixDQUFkLENBQXZCO0FBQ0EsZUFBS0ksUUFBTCxDQUFjSCxPQUFkLEVBQXVCQyxnQkFBdkI7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUUcsSyxFQUFPO0FBQ2QsVUFBSUMsWUFBWSxDQUFoQjtBQUNBLGFBQU87QUFDTFYsY0FBTSxnQkFBVztBQUNmLGlCQUFPLEtBQUtGLE9BQUwsS0FBaUJXLE1BQU1DLFdBQU4sQ0FBakIsR0FBc0MvSyxTQUE3QztBQUNELFNBSEk7QUFJTG1LLGlCQUFTLG1CQUFXO0FBQ2xCLGlCQUFPWSxZQUFZRCxNQUFNbkksTUFBekI7QUFDRDtBQU5JLE9BQVA7QUFRRDs7OytCQUVVLENBQUU7Ozs7OztrQkFsQ01zSCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJlLGUsV0FPbEIsNkJBQVMsVUFBVCxDOzs7QUFMRCxpQ0FBNEQ7QUFBQSw0QkFBOUN4TCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxrSUFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUs2SCxRQUFMLEdBQWdCN0gsZUFBaEI7QUFGMEQ7QUFHM0Q7Ozs7OEJBR1M7QUFBQTs7QUFDUixVQUFJa0QsT0FBT2MsSUFBUCxDQUFZLEtBQUsxQixJQUFMLENBQVV1RixRQUFWLENBQW1CMEQsWUFBL0IsRUFBNkN0SSxNQUFqRCxFQUF5RDtBQUN2RCxZQUFJaEQsVUFBVSxLQUFLQSxPQUFuQjtBQUNBQSxnQkFBUUQsZUFBUixHQUEwQixVQUFDd0wsV0FBRDtBQUFBLGlCQUFpQixPQUFLQyxRQUFMLENBQWMxRyxJQUFkLFNBQXlCeUcsV0FBekIsQ0FBakI7QUFBQSxTQUExQjtBQUNBLGVBQU8sNEJBQXNCdkwsT0FBdEIsRUFBK0IwRyxJQUEvQixDQUFvQyxLQUFLckUsSUFBekMsRUFBK0MsSUFBL0MsRUFBcURqQyxNQUFyRCxFQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFLb0wsUUFBTCxDQUFjLEtBQUtuSixJQUFMLENBQVV1RixRQUF4QjtBQUVEOzs7NkJBRVE2RCxVLEVBQVk7QUFDbkIsV0FBSzdELFFBQUwsY0FBeUI4RCxLQUFLQyxTQUFMLENBQWVELEtBQUtDLFNBQUwsQ0FBZUYsVUFBZixDQUFmLENBQXpCO0FBQ0Q7Ozs7O2tCQXRCa0JKLGU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQk8sSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5Qy9MLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBSzhMLE9BQUwsR0FBZXhMLFNBQWY7QUFDQSxVQUFLeUwsTUFBTCxHQUFjekwsU0FBZDtBQUgwRDtBQUkzRDs7OztrQ0FFYTtBQUNaO0FBQ0EsV0FBS3dMLE9BQUwsR0FBZS9LLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCNkQsTUFBbEIsQ0FBeUIsS0FBekIsRUFBZ0NyRCxJQUFoQyxDQUFxQyxPQUFyQyxFQUE4QyxnQkFBOUMsQ0FBZjtBQUNBLFdBQUt1SyxNQUFMLEdBQWNoTCxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQjZELE1BQWxCLENBQXlCLEtBQXpCLEVBQWdDckQsSUFBaEMsQ0FBcUMsT0FBckMsRUFBOEMsUUFBOUMsQ0FBZDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLc0ssT0FBTCxDQUFhaEgsTUFBYjtBQUNBLFdBQUtwRSxPQUFMLENBQWFvRSxNQUFiO0FBQ0EsV0FBS2lILE1BQUwsQ0FBWWpILE1BQVo7QUFDQSxhQUFPLEtBQVA7QUFDRDs7Ozs7O2tCQW5Ca0IrRyxLOzs7Ozs7Ozs7Ozs7UUNBTEcsNkIsR0FBQUEsNkI7UUFlQUMsZSxHQUFBQSxlOztBQW5CaEI7Ozs7OztBQUVBOztBQUVPLFNBQVNELDZCQUFULENBQXVDRSxPQUF2QyxFQUFnRDtBQUNyRDtBQUNBLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ2QsTUFBSTtBQUNGQSxZQUFRaEcsR0FBUixDQUFZLFVBQUNpRyxDQUFELEVBQU87QUFDakJDLGNBQVFDLGdCQUFSLENBQXlCQyxlQUF6QixDQUF5Q0gsQ0FBekM7QUFDRCxLQUZEO0FBR0QsR0FKRCxDQUlFLE9BQU85QixDQUFQLEVBQVU7QUFDVixRQUFJQSxFQUFFckksSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQy9CLDZCQUFhc0YsSUFBYixDQUFrQiwyQ0FBbEIsRUFBK0QrQyxDQUEvRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNPLFNBQVM0QixlQUFULENBQXlCbEYsSUFBekIsRUFBK0I7QUFDcENBLFNBQU9BLEtBQUt3RixPQUFMLENBQWEsSUFBYixFQUFtQixPQUFuQixFQUE0QkEsT0FBNUIsQ0FBb0MsSUFBcEMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELElBQTFELEVBQWdFLE1BQWhFLENBQVA7QUFDQSxTQUFPeEYsS0FBS3dGLE9BQUwsQ0FBYSxxR0FBYixFQUFvSCxVQUFTQyxLQUFULEVBQWdCO0FBQ3pJLFFBQUlDLE1BQU0sUUFBVjtBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVRixLQUFWLENBQUosRUFBc0I7QUFDcEIsVUFBSSxLQUFLRSxJQUFMLENBQVVGLEtBQVYsQ0FBSixFQUFzQjtBQUNwQkMsY0FBTSxLQUFOO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGNBQU0sUUFBTjtBQUNEO0FBQ0YsS0FORCxNQU1PLElBQUksYUFBYUMsSUFBYixDQUFrQkYsS0FBbEIsQ0FBSixFQUE4QjtBQUNuQ0MsWUFBTSxTQUFOO0FBQ0QsS0FGTSxNQUVBLElBQUksT0FBT0MsSUFBUCxDQUFZRixLQUFaLENBQUosRUFBd0I7QUFDN0JDLFlBQU0sTUFBTjtBQUNEO0FBQ0QsV0FBTyxrQkFBa0JBLEdBQWxCLEdBQXdCLElBQXhCLEdBQStCRCxLQUEvQixHQUF1QyxTQUE5QztBQUNELEdBZE0sQ0FBUDtBQWVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRDs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJHLE8sV0FNbEIsOEI7OztBQUpELHlCQUE0RDtBQUFBLDRCQUE5QzdNLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxXQUFLVSxPQUFMLEdBQWUsS0FBS2tNLFVBQUwsQ0FBZ0I1TCxNQUFoQixDQUF1QiwyQkFBdkIsQ0FBZjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtOLE9BQUwsQ0FBYUUsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGFBQUtGLE9BQUwsR0FBZSxLQUFLa00sVUFBTCxDQUFnQi9ILE1BQWhCLENBQXVCLEtBQXZCLEVBQ1pyRCxJQURZLENBQ1AsT0FETyxFQUNFLHVCQURGLENBQWY7QUFFRDs7QUFFRDtBQUNBLFVBQUksS0FBS2QsT0FBTCxDQUFha0UsU0FBYixDQUF1QixHQUF2QixFQUE0QmhFLElBQTVCLEVBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFRCxVQUFJaU0sTUFBTTlMLEdBQUcrTCxLQUFILENBQVMsS0FBS0MsU0FBTCxDQUFlbk0sSUFBZixFQUFULENBQVY7O0FBRUE7QUFDQSxXQUFLRixPQUFMLENBQWF1RSxLQUFiLENBQW1CLE1BQW5CLEVBQTRCNEgsSUFBSSxDQUFKLElBQVMsRUFBVixHQUFnQixJQUEzQyxFQUFpRDVILEtBQWpELENBQXVELEtBQXZELEVBQStENEgsSUFBSSxDQUFKLElBQVMsRUFBVixHQUFnQixJQUE5RTs7QUFFQSxVQUFJRyxRQUFRLEtBQUt0TSxPQUFMLENBQWFtRSxNQUFiLENBQW9CLEtBQXBCLEVBQTJCckQsSUFBM0IsQ0FBZ0MsT0FBaEMsRUFBeUMsZ0JBQXpDLEVBQ1RxRCxNQURTLENBQ0YsS0FERSxFQUNLckQsSUFETCxDQUNVLE9BRFYsRUFDbUIsY0FEbkIsRUFFVHFELE1BRlMsQ0FFRixLQUZFLEVBRUtyRCxJQUZMLENBRVUsT0FGVixFQUVtQixtQkFGbkIsQ0FBWjtBQUdBLFVBQUl5TCxPQUFPLElBQVg7QUFDQS9KLGFBQU9jLElBQVAsQ0FBWSxLQUFLMUIsSUFBakIsRUFBdUI0RCxHQUF2QixDQUEyQixVQUFTN0MsR0FBVCxFQUFjO0FBQ3ZDLFlBQUk2SixNQUFNRixNQUFNbkksTUFBTixDQUFhLEtBQWIsRUFBb0JyRCxJQUFwQixDQUF5QixPQUF6QixFQUFrQyxrQkFBbEMsQ0FBVjtBQUNBMEwsWUFBSXJJLE1BQUosQ0FBVyxLQUFYLEVBQWtCckQsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEMEQsSUFBckQsQ0FBMEQrSCxLQUFLM0ssSUFBTCxDQUFVZSxHQUFWLEVBQWU4QixLQUF6RTtBQUNBK0gsWUFBSXJJLE1BQUosQ0FBVyxLQUFYLEVBQWtCckQsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEMEQsSUFBckQsQ0FBMEQrSCxLQUFLM0ssSUFBTCxDQUFVZSxHQUFWLEVBQWU2QixJQUF6RTtBQUNELE9BSkQ7O0FBTUE7QUFDQSxXQUFLeEUsT0FBTCxDQUFhdUUsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSSxLQUFLdkUsT0FBVCxFQUFrQjtBQUNoQixhQUFLQSxPQUFMLENBQWFrRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCRSxNQUE1QjtBQUNBLGFBQUtwRSxPQUFMLENBQWF1RSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLElBQTlCO0FBQ0Q7QUFDRjs7Ozs7a0JBL0NrQjBILE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBLElBQUlRLGFBQWEsRUFBakI7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlxQkMsTSxXQXFCbEIsNkJBQVMsUUFBVCxDOzs7QUFuQkQ7Ozs7Ozs7QUFPQSx3QkFBNEQ7QUFBQSw0QkFBOUN0TixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxnSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUksQ0FBQ2UsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJK0YsS0FBSixDQUFVLDRFQUFWLENBQU47QUFDRDtBQUp5RDtBQUszRDs7QUFFRDs7Ozs7Ozs7OzZCQU1TO0FBQ1AsVUFBSXVHLFFBQVEsb0JBQVUsS0FBS3BOLE9BQWYsRUFBd0IwRyxJQUF4QixDQUE2QixLQUFLckUsSUFBbEMsRUFBd0NqQyxNQUF4QyxFQUFaO0FBQ0E4TSxpQkFBVyxLQUFLN0ssSUFBTCxDQUFVd0IsTUFBVixDQUFpQitGLEVBQTVCLElBQWtDd0QsS0FBbEM7QUFDQSxhQUFPQSxNQUFNM00sT0FBTixDQUFjRSxJQUFkLEVBQVA7QUFDRDs7OzZCQUVlaUosRSxFQUFJO0FBQ2xCLGFBQU9zRCxXQUFXdEQsRUFBWCxDQUFQO0FBQ0Q7Ozs7O2tCQTlCa0J1RCxNOzs7QUFpQ3JCLElBQUk7QUFDRkUsVUFBUUYsTUFBUixHQUFpQkcsT0FBT0gsTUFBUCxHQUFnQkEsTUFBakM7QUFDQTtBQUNBLE1BQUlJLFlBQVlELE9BQU9FLFFBQXZCO0FBQ0FGLFNBQU9FLFFBQVAsR0FBa0IsWUFBVztBQUMzQjtBQUNBdkssV0FBT0MsTUFBUCxDQUFjZ0ssVUFBZCxFQUEwQjVJLE9BQTFCLENBQWtDLFVBQVM4SSxLQUFULEVBQWdCO0FBQ2hEQSxZQUFNdkosTUFBTixDQUFhNEosU0FBYjtBQUNELEtBRkQ7QUFHQTtBQUNBLFFBQUksT0FBT0YsU0FBUCxLQUFxQixVQUF6QixFQUFxQztBQUNuQ0E7QUFDRDtBQUNGLEdBVEQ7QUFVRCxDQWRELENBY0UsT0FBT25ELENBQVAsRUFBVTtBQUNWaUQsVUFBUUYsTUFBUixHQUFpQkEsTUFBakI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJPLEssV0FXbEIsNkJBQVMsUUFBVCxDOzs7QUFURCx1QkFBNEQ7QUFBQSw0QkFBOUM3TixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSw4R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUs4RCxNQUFMLEdBQWMscUJBQVcsTUFBSzdELE9BQWhCLENBQWQ7QUFDQSxVQUFLMk4sSUFBTCxHQUFZLHVCQUFhLE1BQUszTixPQUFsQixDQUFaO0FBQ0EsVUFBS2dJLFFBQUwsR0FBZ0Isc0JBQVksTUFBS2hJLE9BQWpCLENBQWhCO0FBQ0EsVUFBSzZILE9BQUwsR0FBZSw2QkFBbUIsTUFBSzdILE9BQXhCLENBQWY7QUFDQSxVQUFLNE4sR0FBTCxDQUFTLE1BQUs1RixRQUFkLEVBQXdCNEYsR0FBeEIsQ0FBNEIsTUFBS0QsSUFBakMsRUFBdUNDLEdBQXZDLENBQTJDLE1BQUsvSixNQUFoRCxFQUF3RCtKLEdBQXhELENBQTRELE1BQUsvRixPQUFqRTtBQU4wRDtBQU8zRDs7Ozs2QkFHUTtBQUNQLFVBQUl2RyxTQUFTLEtBQUt0QixPQUFMLENBQWFGLFFBQTFCOztBQUVBLFVBQU0rTixxQkFBbUIsS0FBS3hMLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUIrRixFQUExQztBQUNBLFdBQUtuSixPQUFMLEdBQWVLLEdBQUdDLE1BQUgsVUFBaUI4TSxPQUFqQixDQUFmO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBS3BOLE9BQUwsQ0FBYUUsSUFBYixFQUFMLEVBQTBCO0FBQ3hCO0FBQ0EsYUFBS0osTUFBTCxDQUFZQyxLQUFaLHNCQUFxQ3FOLE9BQXJDO0FBQ0EsYUFBS3BOLE9BQUwsR0FBZWEsT0FBT3NELE1BQVAsQ0FBYyxLQUFkLEVBQXFCckQsSUFBckIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBbkMsRUFBNkNBLElBQTdDLENBQWtELElBQWxELEVBQXdEc00sT0FBeEQsQ0FBZjtBQUNEOztBQUVEO0FBQ0EsVUFBSSxDQUFDLEtBQUtwTixPQUFMLENBQWFFLElBQWIsRUFBTCxFQUEwQjtBQUN4QixjQUFNLElBQUlrRyxLQUFKLDRDQUFtRGdILE9BQW5ELDBCQUFOO0FBQ0Q7O0FBRUQsV0FBS3ROLE1BQUwsQ0FBWUMsS0FBWixxQkFBb0NxTixPQUFwQzs7QUFFQSxXQUFLQyxjQUFMOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBcENNSixLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RyQjs7O0lBR3FCSyxTOzs7Ozs7Ozs7QUFFbkI7Ozs7OzswQkFNYUMsSyxFQUF3QjtBQUFBLFVBQWpCakgsT0FBaUIsdUVBQVAsS0FBTzs7QUFDbkMsVUFBSSxDQUFDaUgsS0FBTCxFQUFZO0FBQ1pBLGNBQVEsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUE0QnRDLEtBQUtDLFNBQUwsQ0FBZXFDLEtBQWYsQ0FBNUIsR0FBb0RBLEtBQTVEO0FBQ0FBLGNBQVFBLE1BQU0xQixPQUFOLENBQWMscUJBQWQsRUFBcUMsRUFBckMsQ0FBUjtBQUNBLFVBQUkyQixZQUFZLGFBQWhCO0FBQ0EsVUFBSTFCLFFBQVEwQixVQUFVQyxJQUFWLENBQWVGLEtBQWYsQ0FBWjtBQUNBLFVBQUl6QixLQUFKLEVBQVc7QUFDVHlCLGdCQUFRekIsTUFBTSxDQUFOLENBQVI7QUFDQSxZQUFJO0FBQ0YsY0FBSXpGLE9BQU80RSxLQUFLMUUsS0FBTCxDQUFXZ0gsS0FBWCxDQUFYO0FBQ0EsaUJBQU9sSCxLQUFLcUgsSUFBTCxLQUFjSixVQUFVSyxJQUF4QixJQUFnQ3JILE9BQWhDLEdBQTBDRCxJQUExQyxHQUFpRHpHLFNBQXhEO0FBQ0QsU0FIRCxDQUdFLE9BQU8rSixDQUFQLEVBQVU7QUFDVjtBQUNBbEQsa0JBQVFJLEtBQVIsQ0FBYzhDLENBQWQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLDZCQUFQO0FBQ0Q7Ozs7OztrQkFoQ2tCMkQsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJNLE0sV0FTbEIsNkJBQVMsUUFBVCxDOzs7QUFQRCx3QkFBNEQ7QUFBQSw0QkFBOUN4TyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxnSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUt1TyxLQUFMLEdBQWEsMkJBQWlCLE1BQUt0TyxPQUF0QixDQUFiO0FBQ0EsVUFBS3VPLFlBQUwsR0FBb0IsMkJBQWlCLE1BQUt2TyxPQUF0QixDQUFwQjtBQUNBLFVBQUs0TixHQUFMLENBQVMsTUFBS1UsS0FBZCxFQUFxQlYsR0FBckIsQ0FBeUIsTUFBS1csWUFBOUI7QUFKMEQ7QUFLM0Q7Ozs7NkJBR1E7QUFDUCxVQUFJeEQsZ0JBQUo7QUFDQSxVQUFJeUQsT0FBTzFOLEdBQUcwTixJQUFILEVBQVg7QUFDQSxVQUFJeEIsT0FBTyxJQUFYOztBQUVBLGVBQVN5QixVQUFULENBQW9CQyxVQUFwQixFQUFnQ0MsVUFBaEMsRUFBNENDLEtBQTVDLEVBQW1EO0FBQ2pENUIsYUFBS3ZNLE9BQUwsQ0FBYXFFLElBQWIsQ0FBa0IwSixLQUFLSyxTQUF2QixFQUFrQy9OLEdBQUdnTyxZQUFILENBQWdCQyxTQUFoQixDQUEwQkwsVUFBMUIsRUFBc0NDLFVBQXRDLEVBQWtEQyxLQUFsRCxDQUF3REEsS0FBeEQsRUFBK0RBLEtBQS9ELENBQWxDO0FBQ0Q7O0FBRUQsZUFBU0ksTUFBVCxHQUFrQjtBQUNoQmpFLGdCQUFReEosSUFBUixDQUFhLFdBQWIsRUFBMEJULEdBQUdtSCxLQUFILENBQVM0RyxTQUFuQztBQUNEOztBQUVELGVBQVNJLE9BQVQsR0FBbUI7QUFDakIsWUFBSW5PLEdBQUdtSCxLQUFILENBQVNpSCxnQkFBYixFQUErQjtBQUM3QnBPLGFBQUdtSCxLQUFILENBQVNrSCxlQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTMUIsU0FBVCxHQUFxQjtBQUNuQjtBQUNBLFlBQUlULEtBQUszSyxJQUFMLENBQVV3QixNQUFWLENBQWlCNEosU0FBckIsRUFBZ0M7QUFDOUIsY0FBSTJCLFNBQVNyRSxRQUFRcEssSUFBUixHQUFlME8sT0FBZixFQUFiOztBQUVBLGNBQUlDLGVBQWV0QyxLQUFLdk0sT0FBTCxDQUFhRSxJQUFiLEdBQW9CYSxxQkFBcEIsRUFBbkI7QUFBQSxjQUNFK04sWUFBWUQsYUFBYXBPLEtBQWIsR0FBcUJvTyxhQUFhbE8sSUFEaEQ7QUFBQSxjQUVFb08sYUFBYUYsYUFBYW5PLE1BQWIsR0FBc0JtTyxhQUFhck8sR0FGbEQ7O0FBSUEsY0FBSUksUUFBUSxDQUFDK04sT0FBTy9OLEtBQXBCO0FBQUEsY0FDRUssU0FBUyxDQUFDME4sT0FBTzFOLE1BRG5COztBQUdBLGNBQUlMLFVBQVUsQ0FBVixJQUFlSyxXQUFXLENBQTlCLEVBQWlDOztBQUVqQyxjQUFJK04sT0FBT0wsT0FBT2pMLENBQVAsR0FBVzlDLFFBQVEsQ0FBOUI7QUFBQSxjQUNFcU8sT0FBT04sT0FBT2hMLENBQVAsR0FBVzFDLFNBQVMsQ0FEN0I7O0FBR0EsY0FBSWtOLFFBQVEsTUFBTWUsS0FBS25MLEdBQUwsQ0FBU25ELFFBQVFrTyxTQUFqQixFQUE0QjdOLFNBQVM4TixVQUFyQyxDQUFsQjtBQUNBLGNBQUlkLGFBQWFhLFlBQVksQ0FBWixHQUFnQlgsUUFBUWEsSUFBekM7QUFBQSxjQUNFZCxhQUFhYSxhQUFhLENBQWIsR0FBaUJaLFFBQVFjLElBRHhDOztBQUdBM0Usa0JBQVE2RSxVQUFSLEdBQ0dDLFFBREgsQ0FDWTdDLEtBQUt0TSxrQkFEakIsRUFFR2EsSUFGSCxDQUVRLFdBRlIsaUJBRWtDbU4sVUFGbEMsU0FFZ0RDLFVBRmhELGVBRW9FQyxLQUZwRSxTQUU2RUEsS0FGN0UsUUFHRzlHLEVBSEgsQ0FHTSxLQUhOLEVBR2E7QUFBQSxtQkFBTTJHLFdBQVdDLFVBQVgsRUFBdUJDLFVBQXZCLEVBQW1DQyxLQUFuQyxDQUFOO0FBQUEsV0FIYjtBQUlEO0FBQ0Y7O0FBRUQsVUFBTWtCLHVCQUFxQixLQUFLek4sSUFBTCxDQUFVd0IsTUFBVixDQUFpQitGLEVBQTVDO0FBQ0EsV0FBS25KLE9BQUwsR0FBZUssR0FBR0MsTUFBSCxVQUFpQitPLFFBQWpCLENBQWY7QUFDQTtBQUNBLFVBQUksQ0FBQyxLQUFLclAsT0FBTCxDQUFhRSxJQUFiLEVBQUwsRUFBMEI7QUFDeEI7QUFDQSxhQUFLSixNQUFMLENBQVlDLEtBQVosdUJBQXNDc1AsUUFBdEM7QUFDQSxhQUFLclAsT0FBTCxHQUFlLEtBQUthLE1BQUwsQ0FBWXNELE1BQVosQ0FBbUIsS0FBbkIsRUFDWnJELElBRFksQ0FDUCxPQURPLEVBQ0UsZUFERixFQUVaQSxJQUZZLENBRVAsSUFGTyxFQUVEdU8sUUFGQyxDQUFmO0FBR0Q7O0FBRUQ7QUFDQSxVQUFJLENBQUMsS0FBS3JQLE9BQUwsQ0FBYUUsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSWtHLEtBQUosNkNBQW9EaUosUUFBcEQsMEJBQU47QUFDRDs7QUFFRCxXQUFLclAsT0FBTCxDQUFhYyxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLEtBQUtjLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ4QyxLQUE1QyxFQUFtREUsSUFBbkQsQ0FBd0QsUUFBeEQsRUFBa0UsS0FBS2MsSUFBTCxDQUFVd0IsTUFBVixDQUFpQm5DLE1BQW5GOztBQUVBcUosZ0JBQVUsS0FBS3RLLE9BQUwsQ0FBYU0sTUFBYixDQUFvQixrQkFBcEIsQ0FBVjs7QUFFQSxVQUFJLENBQUNnSyxRQUFRcEssSUFBUixFQUFMLEVBQXFCO0FBQ25Cb0ssa0JBQVUsS0FBS3RLLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxnQkFBdkMsQ0FBVjtBQUNBaU4sYUFBSzFHLEVBQUwsQ0FBUSxNQUFSLEVBQWdCa0gsTUFBaEI7QUFDQTtBQUNBLGFBQUt2TyxPQUFMLENBQWFxRSxJQUFiLENBQWtCMEosSUFBbEIsRUFBd0IxRyxFQUF4QixDQUEyQixlQUEzQixFQUE0QyxJQUE1QztBQUNEOztBQUVELFdBQUtySCxPQUFMLENBQWFxSCxFQUFiLENBQWdCLE9BQWhCLEVBQXlCbUgsT0FBekIsRUFBa0MsSUFBbEM7O0FBRUEsV0FBS3hPLE9BQUwsQ0FBYWdOLFNBQWIsR0FBeUIsS0FBS0EsU0FBTCxHQUFpQkEsU0FBMUM7O0FBRUEsV0FBS2xOLE1BQUwsQ0FBWUMsS0FBWixzQkFBcUNzUCxRQUFyQzs7QUFFQSxXQUFLaEMsY0FBTDs7QUFFQS9ELGlCQUFXLFlBQU07QUFDZjBEO0FBQ0QsT0FGRCxFQUVHLEtBQUsvTSxrQkFGUjs7QUFJQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQW5HTTJOLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCM0csSyxXQU1sQiw2QkFBUyxjQUFULEM7OztBQUpELHVCQUE0RDtBQUFBLDRCQUE5QzdILE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHlHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxVQUFJVSxVQUFVSixTQUFkO0FBQ0EsY0FBUSxLQUFLZ0MsSUFBTCxDQUFVd0IsTUFBVixDQUFpQnlLLEtBQWpCLENBQXVCaEcsSUFBL0I7QUFDQSxhQUFLLE1BQUw7QUFDRTdILG9CQUFVLHdCQUFjLEtBQUtULE9BQW5CLEVBQTRCMEcsSUFBNUIsQ0FBaUMsS0FBS3JFLElBQXRDLEVBQTRDakMsTUFBNUMsRUFBVjtBQUNBO0FBQ0Y7QUFDRUssb0JBQVUsMkJBQWlCLEtBQUtULE9BQXRCLEVBQStCMEcsSUFBL0IsQ0FBb0MsS0FBS3JFLElBQXpDLEVBQStDakMsTUFBL0MsRUFBVjtBQUxGOztBQVFBLGFBQU9LLE9BQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQXJCTWlILEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJxSSxTLFdBTWxCLHNDOzs7QUFKRCwyQkFBNEQ7QUFBQSw0QkFBOUNsUSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSTRGLElBQUksQ0FBUjtBQUFBLFVBQ0VxSyxhQURGOztBQUdBQSxhQUFPbFAsR0FBR21QLFNBQUgsQ0FBYSxLQUFLQyxRQUFsQixFQUE0QjtBQUFBLGVBQUt6TCxFQUFFMEwsUUFBUDtBQUFBLE9BQTVCLENBQVA7QUFDQUgsV0FBS0ksRUFBTCxHQUFVLEtBQUsxTyxNQUFMLEdBQWMsQ0FBeEI7QUFDQXNPLFdBQUtLLEVBQUwsR0FBVSxDQUFWOztBQUVBO0FBQ0EsVUFBSUMsYUFBYSxDQUFDLENBQUQsQ0FBakI7QUFDQSxVQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBVWhKLEtBQVYsRUFBaUJpSixDQUFqQixFQUFvQjs7QUFFbkMsWUFBSUEsRUFBRUwsUUFBRixJQUFjSyxFQUFFTCxRQUFGLENBQVduTixNQUFYLEdBQW9CLENBQXRDLEVBQXlDO0FBQ3ZDLGNBQUlzTixXQUFXdE4sTUFBWCxJQUFxQnVFLFFBQVEsQ0FBakMsRUFBb0MrSSxXQUFXOUosSUFBWCxDQUFnQixDQUFoQjs7QUFFcEM4SixxQkFBVy9JLFFBQVEsQ0FBbkIsS0FBeUJpSixFQUFFTCxRQUFGLENBQVduTixNQUFwQztBQUNBd04sWUFBRUwsUUFBRixDQUFXN0wsT0FBWCxDQUFtQixVQUFVRyxDQUFWLEVBQWE7QUFDOUI4TCx1QkFBV2hKLFFBQVEsQ0FBbkIsRUFBc0I5QyxDQUF0QjtBQUNELFdBRkQ7QUFHRDtBQUNGLE9BVkQ7QUFXQThMLGlCQUFXLENBQVgsRUFBY1AsSUFBZDtBQUNBLFVBQUlTLFlBQVkzUCxHQUFHMEQsR0FBSCxDQUFPOEwsVUFBUCxJQUFxQixHQUFyQzs7QUFFQSxVQUFJSSxVQUFVNVAsR0FBRzZQLElBQUgsR0FBVUMsSUFBVixDQUFlLENBQUNILFNBQUQsRUFBWSxLQUFLcFAsS0FBakIsQ0FBZixDQUFkOztBQUVBLFVBQUksS0FBS2dCLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QnVDLFNBQTNCLEVBQXNDO0FBQ3BDYixhQUFLRyxRQUFMLENBQWM3TCxPQUFkLENBQXNCd00sUUFBdEI7QUFDRDs7QUFFREMsYUFBT2pNLElBQVAsQ0FBWSxJQUFaLEVBQWtCa0wsSUFBbEI7O0FBRUEsZUFBU2MsUUFBVCxDQUFrQnJNLENBQWxCLEVBQXFCO0FBQ25CLFlBQUlBLEVBQUUwTCxRQUFOLEVBQWdCO0FBQ2QxTCxZQUFFdU0sU0FBRixHQUFjdk0sRUFBRTBMLFFBQWhCO0FBQ0ExTCxZQUFFdU0sU0FBRixDQUFZMU0sT0FBWixDQUFvQndNLFFBQXBCO0FBQ0FyTSxZQUFFMEwsUUFBRixHQUFhLElBQWI7QUFDRDtBQUNGOztBQUVELGVBQVNZLE1BQVQsQ0FBZ0JFLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3RCLFlBQUlmLFdBQVdRLFFBQVFWLElBQVIsQ0FBZjs7QUFFQSxZQUFJa0IsUUFBUWhCLFNBQVNpQixXQUFULEVBQVo7QUFBQSxZQUNFQyxRQUFRbEIsU0FBU2lCLFdBQVQsR0FBdUIzTCxLQUF2QixDQUE2QixDQUE3QixDQURWOztBQUdBMEwsY0FBTTVNLE9BQU4sQ0FBYztBQUFBLGlCQUFLRyxFQUFFTCxDQUFGLEdBQU1LLEVBQUU0TSxLQUFGLEdBQVUsR0FBckI7QUFBQSxTQUFkOztBQUVBLFlBQUlDLFlBQVksS0FBSzdRLE9BQUwsQ0FBYWtFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFlBQUksQ0FBQzJNLFVBQVUzUSxJQUFWLEVBQUwsRUFBdUI7QUFDckIyUSxzQkFBWSxLQUFLN1EsT0FBTCxDQUFhbUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnJELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQVo7QUFDRDs7QUFFRCxZQUFJZ1EsT0FBT0QsVUFBVTNNLFNBQVYsQ0FBb0Isa0JBQXBCLEVBQ1J0QyxJQURRLENBQ0grTyxLQURHLEVBQ0k7QUFBQSxpQkFBSzNNLEVBQUVtRixFQUFGLEtBQVNuRixFQUFFbUYsRUFBRixHQUFPLEVBQUVqRSxDQUFsQixDQUFMO0FBQUEsU0FESixDQUFYOztBQUdBLFlBQUk2TCxZQUFZRCxLQUFLN0wsS0FBTCxHQUNiZCxNQURhLENBQ04sTUFETSxFQUNFckQsSUFERixDQUNPLE9BRFAsRUFDZ0IsYUFEaEIsRUFFYkEsSUFGYSxDQUVSLEdBRlEsRUFFSCxZQUFNO0FBQ2YsY0FBSWtRLElBQUksRUFBQ3ROLEdBQUc4TSxPQUFPYixFQUFYLEVBQWVoTSxHQUFHNk0sT0FBT1osRUFBekIsRUFBUjtBQUNBLGlCQUFPcUIsU0FBU0QsQ0FBVCxFQUFZQSxDQUFaLENBQVA7QUFDRCxTQUxhLENBQWhCOztBQU9BRCxrQkFBVTVMLEtBQVYsQ0FBZ0IyTCxJQUFoQixFQUNHM0IsVUFESCxHQUNnQkMsUUFEaEIsQ0FDeUIsS0FBS25QLGtCQUQ5QixFQUNrRGEsSUFEbEQsQ0FDdUQsR0FEdkQsRUFDNEQ7QUFBQSxpQkFBS21RLFNBQVNqTixDQUFULEVBQVlBLEVBQUVuRCxNQUFkLENBQUw7QUFBQSxTQUQ1RDs7QUFHQWlRLGFBQUs5TCxJQUFMLEdBQVltSyxVQUFaLEdBQXlCQyxRQUF6QixDQUFrQyxLQUFLblAsa0JBQXZDLEVBQ0dhLElBREgsQ0FDUSxHQURSLEVBQ2EsWUFBTTtBQUNmLGNBQUlrUSxJQUFJLEVBQUN0TixHQUFHOE0sT0FBTzlNLENBQVgsRUFBY0MsR0FBRzZNLE9BQU83TSxDQUF4QixFQUFSO0FBQ0EsaUJBQU9zTixTQUFTRCxDQUFULEVBQVlBLENBQVosQ0FBUDtBQUNELFNBSkgsRUFJSzVNLE1BSkw7O0FBTUF5TSxrQkFBVTNNLFNBQVYsQ0FBb0Isa0JBQXBCLEVBQ0dLLEtBREgsQ0FDUyxNQURULEVBQ2lCLE1BRGpCLEVBRUdBLEtBRkgsQ0FFUyxRQUZULEVBRW1CLE1BRm5CLEVBR0dBLEtBSEgsQ0FHUyxjQUhULEVBR3lCLEtBSHpCOztBQUtBa00sY0FBTTVNLE9BQU4sQ0FBYyxVQUFDRyxDQUFELEVBQU87QUFDbkJBLFlBQUUyTCxFQUFGLEdBQU8zTCxFQUFFTixDQUFUO0FBQ0FNLFlBQUU0TCxFQUFGLEdBQU81TCxFQUFFTCxDQUFUO0FBQ0QsU0FIRDs7QUFLQSxpQkFBU3NOLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCbE4sQ0FBckIsRUFBd0I7QUFDdEIsd0JBQVlrTixFQUFFdk4sQ0FBZCxTQUFtQnVOLEVBQUV4TixDQUFyQix3QkFDUSxDQUFDd04sRUFBRXZOLENBQUYsR0FBTUssRUFBRUwsQ0FBVCxJQUFjLENBRHRCLFNBQzJCdU4sRUFBRXhOLENBRDdCLHlCQUVRLENBQUN3TixFQUFFdk4sQ0FBRixHQUFNSyxFQUFFTCxDQUFULElBQWMsQ0FGdEIsU0FFMkJLLEVBQUVOLENBRjdCLHlCQUdRTSxFQUFFTCxDQUhWLFNBR2VLLEVBQUVOLENBSGpCO0FBSUQ7O0FBRUQsWUFBSXlOLFlBQVksS0FBS25SLE9BQUwsQ0FBYWtFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFlBQUksQ0FBQ2lOLFVBQVVqUixJQUFWLEVBQUwsRUFBdUI7QUFDckJpUixzQkFBWSxLQUFLblIsT0FBTCxDQUFhbUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnJELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQVo7QUFDRDs7QUFFRCxZQUFJWixPQUFPaVIsVUFBVWpOLFNBQVYsQ0FBb0IsZUFBcEIsRUFDUnRDLElBRFEsQ0FDSDZPLEtBREcsRUFDSTtBQUFBLGlCQUFLek0sRUFBRW1GLEVBQUYsS0FBU25GLEVBQUVtRixFQUFGLEdBQU8sRUFBRWpFLENBQWxCLENBQUw7QUFBQSxTQURKLENBQVg7O0FBR0EsWUFBSWtNLFlBQVlsUixLQUFLK0UsS0FBTCxHQUFhZCxNQUFiLENBQW9CLEdBQXBCLEVBQ2JyRCxJQURhLENBQ1IsT0FEUSxFQUNDLGFBREQsRUFFYkEsSUFGYSxDQUVSLFdBRlEsRUFFSztBQUFBLGdDQUFtQjBQLE9BQU9aLEVBQTFCLFNBQWdDWSxPQUFPYixFQUF2QztBQUFBLFNBRkwsQ0FBaEI7O0FBSUF5QixrQkFBVWpOLE1BQVYsQ0FBaUIsTUFBakIsRUFDR3JELElBREgsQ0FDUSxHQURSLEVBQ2FULEdBQUdnUixNQUFILEdBQVl4SixJQUFaLENBQWlCO0FBQUEsaUJBQUssZ0JBQU15SixTQUFOLENBQWdCdE4sRUFBRXBDLElBQUYsQ0FBT2lHLElBQXZCLENBQUw7QUFBQSxTQUFqQixFQUFvRHNJLElBQXBELENBQXlEO0FBQUEsaUJBQUtuTSxFQUFFcEMsSUFBRixDQUFPdU8sSUFBUCxHQUFjLEdBQW5CO0FBQUEsU0FBekQsQ0FEYixFQUVHclAsSUFGSCxDQUVRLE9BRlIsRUFFaUIsZUFGakI7O0FBSUFzUSxrQkFBVWpOLE1BQVYsQ0FBaUIsTUFBakIsRUFDR3JELElBREgsQ0FDUSxPQURSLEVBQ2lCLGNBRGpCLEVBRUcwRCxJQUZILENBRVE7QUFBQSxpQkFBS1IsRUFBRXBDLElBQUYsQ0FBTzZDLEtBQVo7QUFBQSxTQUZSLEVBR0czRCxJQUhILENBR1EsR0FIUixFQUdjLFlBQVc7QUFDckIsY0FBSXlJLFFBQVEsS0FBS3FGLE9BQUwsRUFBWjtBQUNBLGlCQUFPLEVBQUVyRixNQUFNM0ksS0FBTixHQUFjLENBQWhCLENBQVA7QUFDRCxTQU5ILEVBT0cyRCxLQVBILENBT1MsUUFQVCxFQU9tQjtBQUFBLGlCQUFLUCxFQUFFMEwsUUFBRixJQUFjMUwsRUFBRXVNLFNBQWhCLEdBQTRCLFNBQTVCLEdBQXdDLFNBQTdDO0FBQUEsU0FQbkI7O0FBU0EsWUFBSWdCLGFBQWFILFVBQVVqTSxLQUFWLENBQWdCakYsSUFBaEIsQ0FBakI7O0FBRUFxUixtQkFBV3BDLFVBQVgsR0FDR0MsUUFESCxDQUNZLEtBQUtuUCxrQkFEakIsRUFFR2EsSUFGSCxDQUVRLFdBRlIsRUFFcUI7QUFBQSxnQ0FBa0JrRCxFQUFFTCxDQUFwQixTQUF5QkssRUFBRU4sQ0FBM0I7QUFBQSxTQUZyQjs7QUFJQXhELGFBQUs4RSxJQUFMLEdBQVltSyxVQUFaLEdBQXlCQyxRQUF6QixDQUFrQyxLQUFLblAsa0JBQXZDLEVBQ0dhLElBREgsQ0FDUSxXQURSLEVBQ3FCO0FBQUEsZ0NBQW1CMFAsT0FBTzdNLENBQTFCLFNBQStCNk0sT0FBTzlNLENBQXRDO0FBQUEsU0FEckIsRUFFR1UsTUFGSDs7QUFJQStNLGtCQUFVak4sU0FBVixDQUFvQixvQkFBcEIsRUFDR0ssS0FESCxDQUNTLE1BRFQsRUFDaUI7QUFBQSxpQkFBS1AsRUFBRTBMLFFBQUYsSUFBYzFMLEVBQUV1TSxTQUFoQixHQUE0QixnQkFBNUIsR0FBK0MsZ0JBQU1uTCxNQUFOLENBQWFwQixFQUFFcEMsSUFBRixDQUFPNFAsS0FBUCxHQUFlLENBQTVCLENBQXBEO0FBQUEsU0FEakIsRUFFR2pOLEtBRkgsQ0FFUyxRQUZULEVBRW1CO0FBQUEsaUJBQUtQLEVBQUUwTCxRQUFGLElBQWMxTCxFQUFFdU0sU0FBaEIsR0FBNEIsU0FBNUIsR0FBd0MsU0FBN0M7QUFBQSxTQUZuQjs7QUFJQXJRLGVBQU9pUixVQUFVak4sU0FBVixDQUFvQixlQUFwQixDQUFQOztBQUVBLFlBQUloRSxLQUFLQSxJQUFMLEVBQUosRUFBaUI7QUFDZixlQUFLdVIsWUFBTCxDQUFrQnZSLElBQWxCOztBQUVBLGNBQUl3UixjQUFjeFIsS0FBS21ILEVBQUwsQ0FBUSxPQUFSLENBQWxCO0FBQ0FuSCxlQUFLbUgsRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBQ3JELENBQUQsRUFBTztBQUN4QjtBQUNFME4sd0JBQVlyTixJQUFaLFNBQXVCTCxFQUFFcEMsSUFBekI7QUFDQTtBQUNBK1Asa0JBQU10TixJQUFOLFNBQWlCTCxDQUFqQjtBQUNELFdBTEQ7QUFNRDs7QUFFRDtBQUNBLFlBQUl1SSxPQUFPLElBQVg7O0FBRUEsaUJBQVNvRixLQUFULENBQWUzTixDQUFmLEVBQWtCO0FBQ2hCLGNBQUlBLEVBQUUwTCxRQUFOLEVBQWdCO0FBQ2QxTCxjQUFFdU0sU0FBRixHQUFjdk0sRUFBRTBMLFFBQWhCO0FBQ0ExTCxjQUFFMEwsUUFBRixHQUFhLElBQWI7QUFDRCxXQUhELE1BR087QUFDTDFMLGNBQUUwTCxRQUFGLEdBQWExTCxFQUFFdU0sU0FBZjtBQUNBdk0sY0FBRXVNLFNBQUYsR0FBYyxJQUFkO0FBQ0Q7QUFDREQsaUJBQU9qTSxJQUFQLENBQVlrSSxJQUFaLEVBQWtCdkksQ0FBbEI7QUFDRDs7QUFFRHNGLG1CQUFXLFlBQU07QUFDZixpQkFBS3pJLE1BQUwsQ0FBWW1NLFNBQVo7QUFDRCxTQUZELEVBRUcsS0FBSy9NLGtCQUZSO0FBR0Q7O0FBRUQsYUFBTyxJQUFQO0FBRUQ7OzsrQkFFVSxDQUFFOztBQUViOzs7Ozs7O3dCQUllO0FBQ2IsVUFBSTJSLGNBQWMsS0FBS2hRLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjRDLEtBQXZCLEdBQStCak8sT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjRDLEtBQXJDLENBQS9CLEdBQTZFLEVBQS9GO0FBQ0EsVUFBSW9CLFVBQVVELFlBQVlFLE1BQVosQ0FBbUIsVUFBVXRNLEdBQVYsRUFBZXRGLElBQWYsRUFBcUI7QUFDcERzRixZQUFJdEYsS0FBS2lKLEVBQVQsSUFBZWpKLElBQWY7QUFDQSxlQUFPc0YsR0FBUDtBQUNELE9BSGEsRUFHWCxFQUhXLENBQWQ7QUFJQSxVQUFJaUssV0FBVyxFQUFmO0FBQ0FtQyxrQkFBWS9OLE9BQVosQ0FBb0IsVUFBUzNELElBQVQsRUFBZTtBQUNqQyxZQUFJVyxTQUFTZ1IsUUFBUTNSLEtBQUtXLE1BQWIsQ0FBYjtBQUNBLFlBQUlBLE1BQUosRUFBWTtBQUNWLFdBQUNBLE9BQU82TyxRQUFQLEtBQW9CN08sT0FBTzZPLFFBQVAsR0FBa0IsRUFBdEMsQ0FBRCxFQUE0QzNKLElBQTVDLENBQWlEN0YsSUFBakQ7QUFDRCxTQUZELE1BRU87QUFDTHVQLG1CQUFTMUosSUFBVCxDQUFjN0YsSUFBZDtBQUNEO0FBQ0YsT0FQRDtBQVFBLGFBQU91UCxTQUFTLENBQVQsQ0FBUDtBQUNEOzs7OztrQkFyTWtCSCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCeUMsVyxXQU1sQiw2QkFBUyxPQUFULEM7OztBQUpELDZCQUE0RDtBQUFBLDRCQUE5QzNTLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHFIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQZSxTQUFHbUgsS0FBSCxDQUFTd0ssY0FBVDs7QUFFQSxXQUFLaFMsT0FBTCxHQUFlLEtBQUtrTSxVQUFMLENBQWdCNUwsTUFBaEIsQ0FBdUIsZ0NBQXZCLENBQWY7QUFDQTtBQUNBLFVBQUksQ0FBQyxLQUFLTixPQUFMLENBQWFFLElBQWIsRUFBTCxFQUEwQjtBQUN4QixhQUFLRixPQUFMLEdBQWUsS0FBS2tNLFVBQUwsQ0FBZ0IvSCxNQUFoQixDQUF1QixLQUF2QixFQUNackQsSUFEWSxDQUNQLE9BRE8sRUFDRSw0QkFERixDQUFmO0FBRUQ7O0FBRUQsVUFBSXFMLE1BQU05TCxHQUFHK0wsS0FBSCxDQUFTLEtBQUtDLFNBQUwsQ0FBZW5NLElBQWYsRUFBVCxDQUFWOztBQUVBLFdBQUtGLE9BQUwsQ0FBYXVFLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMkI0SCxJQUFJLENBQUosSUFBUyxDQUFULEdBQWEsSUFBeEMsRUFBOEM1SCxLQUE5QyxDQUFvRCxLQUFwRCxFQUEyRDRILElBQUksQ0FBSixJQUFTLENBQVQsR0FBYSxJQUF4RTs7QUFFQTtBQUNBLFdBQUtuTSxPQUFMLENBQWF1RSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBO0FBQ0EsVUFBSSxLQUFLdkUsT0FBTCxDQUFha0UsU0FBYixDQUF1QixHQUF2QixFQUE0QmhFLElBQTVCLEVBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFRDtBQUNBRyxTQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQitHLEVBQWxCLENBQXFCLDJCQUFyQixFQUFrRDtBQUFBLGVBQU0sT0FBS3hILFFBQUwsRUFBTjtBQUFBLE9BQWxEOztBQUVBO0FBQ0EsVUFBSXFOLE9BQU8sS0FBS2xOLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkJyRCxJQUEzQixDQUFnQyxPQUFoQyxFQUF5QyxxQkFBekMsRUFBZ0VxRCxNQUFoRSxDQUF1RSxJQUF2RSxDQUFYO0FBQ0EsVUFBSTJGLGdCQUFnQixLQUFLVSxRQUFMLENBQWNoSSxPQUFPQyxNQUFQLENBQWMsS0FBS2IsSUFBTCxDQUFVeUksS0FBeEIsQ0FBZCxDQUFwQjtBQUNBLFdBQUtJLFFBQUwsQ0FBY3lDLElBQWQsRUFBb0JwRCxhQUFwQjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSSxLQUFLOUosT0FBVCxFQUFrQjtBQUNoQixhQUFLQSxPQUFMLENBQWFrRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCRSxNQUE1QjtBQUNBLGFBQUtwRSxPQUFMLENBQWF1RSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLElBQTlCO0FBQ0Q7QUFDRjs7Ozs7a0JBOUNrQndOLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJFLGlCLFdBTWxCLHNDOzs7QUFKRCxtQ0FBNEQ7QUFBQSw0QkFBOUM3UyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSUFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7QUFBQTs7QUFDUCxVQUFJaU4sT0FBTyxJQUFYOztBQUVBLFVBQUkyRixVQUFVLEtBQUt0USxJQUFMLENBQVV1RixRQUFWLENBQW1CZ0MsRUFBakM7O0FBRUEsV0FBS3JKLE1BQUwsQ0FBWUMsS0FBWiwrQkFBOENtUyxPQUE5Qzs7QUFFQSxXQUFLbFMsT0FBTCxHQUFlLEtBQUtxTCxNQUFMLENBQVlsSCxNQUFaLENBQW1CLEtBQW5CLEVBQ1pyRCxJQURZLENBQ1AsSUFETyxFQUNEb1IsT0FEQyxFQUVacFIsSUFGWSxDQUVQLE9BRk8sRUFFRSxjQUZGLENBQWY7O0FBSUEsVUFBSXFSLE9BQU8sS0FBS25TLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBWDs7QUFFQSxVQUFJaU8sU0FBU0QsS0FBS2hPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CckQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUEsVUFBSXVSLGNBQWNELE9BQU9qTyxNQUFQLENBQWMsTUFBZCxFQUFzQmlHLElBQXRCLENBQTJCLDBCQUEzQixDQUFsQjtBQUNBLFVBQUksS0FBS3hJLElBQUwsQ0FBVTZDLEtBQWQsRUFBcUI7QUFDbkI0TixvQkFBWWxPLE1BQVosQ0FBbUIsTUFBbkIsRUFBMkJyRCxJQUEzQixDQUFnQyxPQUFoQyxFQUF5QyxvQkFBekMsRUFBK0QwRCxJQUEvRCxVQUEyRSxLQUFLNUMsSUFBTCxDQUFVNkMsS0FBckY7QUFDRDs7QUFFRCxVQUFJNkYsVUFBVTZILEtBQUtoTyxNQUFMLENBQVksS0FBWixFQUFtQnJELElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHNCQUFqQyxFQUF5RHFELE1BQXpELENBQWdFLEtBQWhFLEVBQXVFckQsSUFBdkUsQ0FBNEUsT0FBNUUsRUFBcUYsY0FBckYsRUFBcUdxRCxNQUFyRyxDQUE0RyxLQUE1RyxFQUFtSHJELElBQW5ILENBQXdILE9BQXhILEVBQWlJLG1CQUFqSSxDQUFkOztBQXBCTztBQUFBO0FBQUE7O0FBQUE7QUFzQlAsNkJBQWdCMEIsT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVXVGLFFBQVYsQ0FBbUIwRCxZQUFqQyxDQUFoQiw4SEFBZ0U7QUFBQSxjQUF2RHlILEdBQXVEOztBQUM5RCxjQUFJOUYsTUFBTWxDLFFBQVFuRyxNQUFSLENBQWUsS0FBZixFQUFzQnJELElBQXRCLENBQTJCLE9BQTNCLEVBQW9DLGtCQUFwQyxDQUFWO0FBQ0EwTCxjQUFJckksTUFBSixDQUFXLEtBQVgsRUFBa0JyRCxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcURxRCxNQUFyRCxDQUE0RCxPQUE1RCxFQUFxRXJELElBQXJFLENBQTBFLEtBQTFFLEVBQWlGd1IsSUFBSW5KLEVBQXJGLEVBQXlGM0UsSUFBekYsQ0FBOEY4TixJQUFJN04sS0FBbEc7QUFDQSxjQUFJOEksUUFBUWYsSUFBSXJJLE1BQUosQ0FBVyxLQUFYLEVBQWtCckQsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEcUQsTUFBckQsQ0FBNEQsT0FBNUQsRUFBcUVyRCxJQUFyRSxDQUEwRSxJQUExRSxFQUFnRndSLElBQUluSixFQUFwRixFQUF3RnJJLElBQXhGLENBQTZGLE9BQTdGLEVBQXNHLFlBQXRHLEVBQ1RBLElBRFMsQ0FDSixVQURJLEVBQ1EsRUFEUixFQUVUQSxJQUZTLENBRUosTUFGSSxFQUVJd1IsSUFBSW5KLEVBRlIsRUFHVHJJLElBSFMsQ0FHSixNQUhJLEVBR0l3UixJQUFJekssSUFIUixFQUlUL0csSUFKUyxDQUlKLE9BSkksRUFJS3dSLElBQUk3USxLQUpULEVBS1Q0RixFQUxTLENBS04sUUFMTSxFQUtJLFlBQVk7QUFDeEJrRixpQkFBSzNLLElBQUwsQ0FBVXVGLFFBQVYsQ0FBbUIwRCxZQUFuQixDQUFnQyxLQUFLMUIsRUFBckMsRUFBeUMxSCxLQUF6QyxHQUFpRCxLQUFLQSxLQUF0RDtBQUNELFdBUFMsRUFRVDRGLEVBUlMsQ0FRTixPQVJNLEVBUUcsS0FBS2tMLFFBUlIsRUFTVGxMLEVBVFMsQ0FTTixPQVRNLEVBU0csS0FBS2tMLFFBVFIsRUFVVGxMLEVBVlMsQ0FVTixPQVZNLEVBVUcsS0FBS2tMLFFBVlIsQ0FBWjtBQVdBO0FBQ0EsY0FBSUQsSUFBSXpLLElBQUosS0FBYSxTQUFqQixFQUE0QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQXlLLGdCQUFJN1EsS0FBSixHQUFZNlEsSUFBSTdRLEtBQUosSUFBYSxLQUF6QjtBQUNBOEwsa0JBQU16TSxJQUFOLENBQVcsTUFBWCxFQUFtQixVQUFuQixFQUErQkEsSUFBL0IsQ0FBb0MsVUFBcEMsRUFBZ0QsSUFBaEQsRUFDR0EsSUFESCxDQUNRLE9BRFIsRUFDaUJ3UixJQUFJN1EsS0FEckIsRUFFRzRGLEVBRkgsQ0FFTSxRQUZOLEVBRWdCLFlBQVc7QUFDdkJrRixtQkFBSzNLLElBQUwsQ0FBVXVGLFFBQVYsQ0FBbUIwRCxZQUFuQixDQUFnQyxLQUFLMUIsRUFBckMsRUFBeUMxSCxLQUF6QyxHQUFpRCxLQUFLQSxLQUFMLEdBQWEsS0FBSytRLE9BQW5FO0FBQ0QsYUFKSDtBQUtEO0FBQ0RoRyxjQUFJckksTUFBSixDQUFXLE1BQVgsRUFBbUJyRCxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxVQUFqQztBQUNEO0FBakRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbURQLFVBQUkyUixTQUFTTixLQUFLaE8sTUFBTCxDQUFZLEtBQVosRUFBbUJyRCxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxxQkFBakMsQ0FBYjs7QUFFQTJSLGFBQU90TyxNQUFQLENBQWMsUUFBZCxFQUF3QkssSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUM2QyxFQUFuQyxDQUFzQyxPQUF0QyxFQUErQyxZQUFNO0FBQ25ELFlBQUk4SyxLQUFLalMsSUFBTCxHQUFZd1MsYUFBWixFQUFKLEVBQWlDO0FBQy9CclMsYUFBR21ILEtBQUgsQ0FBU3dLLGNBQVQ7QUFDQSxpQkFBS3pTLE9BQUwsQ0FBYUQsZUFBYixDQUE2QixPQUFLc0MsSUFBTCxDQUFVdUYsUUFBdkM7QUFDQSxpQkFBS3RILFFBQUwsQ0FBY3dFLElBQWQ7QUFDRDtBQUNELGVBQU8sS0FBUDtBQUNELE9BUEQ7QUFRQW9PLGFBQU90TyxNQUFQLENBQWMsUUFBZCxFQUF3QkssSUFBeEIsQ0FBNkIsUUFBN0IsRUFBdUM2QyxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxZQUFNO0FBQ3ZEaEgsV0FBR21ILEtBQUgsQ0FBU3dLLGNBQVQ7QUFDQSxlQUFLblMsUUFBTCxDQUFjd0UsSUFBZDtBQUNELE9BSEQ7O0FBS0E7QUFDQSxvREFBOEIsQ0FBQyxTQUFELEVBQVksYUFBWixFQUEyQixpQkFBM0IsRUFBOEMsZUFBOUMsQ0FBOUI7O0FBRUEsVUFBSXNPLGVBQWVySSxRQUFRcEcsU0FBUixDQUFrQixhQUFsQixFQUFpQ2hFLElBQWpDLEVBQW5CO0FBQ0EsVUFBSXlTLFlBQUosRUFBa0I7QUFDaEJBLHFCQUFhQyxLQUFiO0FBQ0Q7O0FBRUQsV0FBSzlTLE1BQUwsQ0FBWUMsS0FBWiw4QkFBNkNtUyxPQUE3Qzs7QUFFQSxhQUFPLElBQVA7QUFDRDs7Ozs7a0JBcEZrQkQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJZLFksV0FNbEIsc0M7OztBQUpELDhCQUE0RDtBQUFBLDRCQUE5Q3pULE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUNQLFVBQUlpTixPQUFPLElBQVg7O0FBRUEsVUFBSXVHLG1CQUFtQixLQUFLbFIsSUFBTCxDQUFVd0IsTUFBVixDQUFpQnlLLEtBQWpCLENBQXVCa0YsVUFBOUM7O0FBRUEsVUFBSW5CLGNBQWMsS0FBS2hRLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjRDLEtBQXZCLEdBQStCak8sT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjRDLEtBQXJDLENBQS9CLEdBQTZFLEVBQS9GO0FBQUEsVUFDRXVDLGNBQWMsS0FBS3BSLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjhDLEtBQXZCLEdBQStCbk8sT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjhDLEtBQXJDLENBQS9CLEdBQTZFLEVBRDdGOztBQUdBLFVBQUlFLFlBQVksS0FBSzdRLE9BQUwsQ0FBYWtFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFVBQUksQ0FBQzJNLFVBQVUzUSxJQUFWLEVBQUwsRUFBdUI7QUFDckIyUSxvQkFBWSxLQUFLN1EsT0FBTCxDQUFhbUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnJELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQVo7QUFDRDs7QUFFRCxVQUFJNlAsUUFBUUUsVUFBVTNNLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUN0QyxJQUFyQyxFQUFaO0FBQ0EsVUFBSXFSLGFBQWEsS0FBS0Msa0JBQUwsQ0FBd0JGLFdBQXhCLEVBQXFDckMsS0FBckMsQ0FBakI7O0FBRUEsVUFBSUcsT0FBT0QsVUFBVTNNLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUN0QyxJQUFyQyxDQUEwQ3FSLFVBQTFDLEVBQXNEO0FBQUEsZUFBS2pQLEVBQUVtRixFQUFQO0FBQUEsT0FBdEQsQ0FBWDs7QUFFQSxVQUFJZ0ksWUFBWSxLQUFLblIsT0FBTCxDQUFha0UsU0FBYixDQUF1QixnQkFBdkIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDaU4sVUFBVWpSLElBQVYsRUFBTCxFQUF1QjtBQUNyQmlSLG9CQUFZLEtBQUtuUixPQUFMLENBQWFtRSxNQUFiLENBQW9CLEdBQXBCLEVBQXlCckQsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsY0FBdkMsQ0FBWjtBQUNEOztBQUVELFVBQUkyUCxRQUFRVSxVQUFVak4sU0FBVixDQUFvQixlQUFwQixFQUFxQ3RDLElBQXJDLEVBQVo7QUFDQSxVQUFJdVIsYUFBYSxLQUFLRCxrQkFBTCxDQUF3QnRCLFdBQXhCLEVBQXFDbkIsS0FBckMsQ0FBakI7O0FBRUEsVUFBSXZRLE9BQU9pUixVQUFVak4sU0FBVixDQUFvQixlQUFwQixFQUFxQ3RDLElBQXJDLENBQTBDdVIsVUFBMUMsRUFBc0Q7QUFBQSxlQUFLblAsRUFBRW1GLEVBQVA7QUFBQSxPQUF0RCxDQUFYOztBQUVBLFVBQUlqSixLQUFLOEUsSUFBTCxHQUFZcEQsSUFBWixHQUFtQlcsTUFBbkIsS0FBOEIsQ0FBOUIsSUFDRnJDLEtBQUsrRSxLQUFMLEdBQWFyRCxJQUFiLEdBQW9CVyxNQUFwQixLQUErQixDQUQ3QixJQUVGdU8sS0FBSzdMLEtBQUwsR0FBYXJELElBQWIsR0FBb0JXLE1BQXBCLEtBQStCLENBRjdCLElBR0Z1TyxLQUFLOUwsSUFBTCxHQUFZcEQsSUFBWixHQUFtQlcsTUFBbkIsS0FBOEIsQ0FIaEMsRUFHbUM7QUFDakM7QUFDRDs7QUFFRCxVQUFJd08sWUFBWUQsS0FBSzdMLEtBQUwsR0FBYWQsTUFBYixDQUFvQixHQUFwQixFQUF5QnJELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGFBQXZDLENBQWhCOztBQUVBaVEsZ0JBQVU1TSxNQUFWLENBQWlCLE1BQWpCLEVBQXlCckQsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsYUFBdkM7O0FBRUFnUSxXQUFLOUwsSUFBTCxHQUFZWixNQUFaOztBQUVBME0sYUFBT0QsVUFBVTNNLFNBQVYsQ0FBb0IsZ0NBQXBCLENBQVA7O0FBRUEsVUFBSSxLQUFLdEMsSUFBTCxDQUFVd0IsTUFBVixDQUFpQnlLLEtBQWpCLENBQXVCaEcsSUFBdkIsS0FBZ0MsVUFBcEMsRUFBZ0Q7QUFDOUM7QUFDQTBFLGFBQUsxTCxNQUFMLENBQVlzRCxNQUFaLENBQW1CLE1BQW5CLEVBQTJCRCxTQUEzQixDQUFxQyxRQUFyQyxFQUNHdEMsSUFESCxDQUNRLENBQUMsT0FBRCxDQURSLEVBRUdxRCxLQUZILEdBRVdkLE1BRlgsQ0FFa0IsUUFGbEIsRUFHR3JELElBSEgsQ0FHUSxPQUhSLEVBR2lCLGVBSGpCLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBS2tELENBQUw7QUFBQSxTQUpkLEVBS0dsRCxJQUxILENBS1EsU0FMUixFQUttQixZQUxuQixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixFQU5oQixFQU9HQSxJQVBILENBT1EsTUFQUixFQU9nQixDQVBoQixFQVFHQSxJQVJILENBUVEsYUFSUixFQVF1QixFQVJ2QixFQVNHQSxJQVRILENBU1EsY0FUUixFQVN3QixFQVR4QixFQVVHQSxJQVZILENBVVEsUUFWUixFQVVrQixNQVZsQixFQVdHcUQsTUFYSCxDQVdVLE1BWFYsRUFZR3JELElBWkgsQ0FZUSxHQVpSLEVBWWEsNkJBWmI7QUFhQTtBQUNBZ1EsYUFBS3ZNLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLGFBQXpCO0FBQ0Q7O0FBRUQsVUFBSTZNLFlBQVlsUixLQUFLK0UsS0FBTCxHQUFhZCxNQUFiLENBQW9CLEdBQXBCLEVBQ2JyRCxJQURhLENBQ1IsT0FEUSxFQUNDLGFBREQsRUFDZ0JBLElBRGhCLENBQ3FCLElBRHJCLEVBQzJCO0FBQUEsZUFBS2tELEVBQUVtRixFQUFQO0FBQUEsT0FEM0IsQ0FBaEI7O0FBR0FpSSxnQkFBVWpOLE1BQVYsQ0FBaUIsTUFBakIsRUFDR3JELElBREgsQ0FDUSxHQURSLEVBQ2FULEdBQUdnUixNQUFILEdBQVl4SixJQUFaLENBQWlCO0FBQUEsZUFBSyxnQkFBTXlKLFNBQU4sQ0FBZ0J0TixFQUFFNkQsSUFBbEIsQ0FBTDtBQUFBLE9BQWpCLEVBQStDc0ksSUFBL0MsQ0FBb0Q7QUFBQSxlQUFLbk0sRUFBRW1NLElBQUYsR0FBUyxHQUFkO0FBQUEsT0FBcEQsQ0FEYixFQUVHNUwsS0FGSCxDQUVTLE1BRlQsRUFFaUI7QUFBQSxlQUFLLGdCQUFNYSxNQUFOLENBQWFwQixFQUFFd04sS0FBRixHQUFVLENBQXZCLENBQUw7QUFBQSxPQUZqQixFQUdHMVEsSUFISCxDQUdRLE9BSFIsRUFHaUI7QUFBQSxlQUFLLG1CQUFtQmtELEVBQUVvUCxTQUFGLEdBQWMsbUJBQWQsR0FBb0MsRUFBdkQsS0FBOEQ1USxPQUFPQyxNQUFQLENBQWN1QixFQUFFcUcsS0FBaEIsRUFBdUI5SCxNQUF2QixHQUFnQyxpQkFBaEMsR0FBb0QsRUFBbEgsQ0FBTDtBQUFBLE9BSGpCOztBQUtBNk8sZ0JBQVVqTixNQUFWLENBQWlCLE1BQWpCLEVBQ0dyRCxJQURILENBQ1EsT0FEUixFQUNpQixjQURqQixFQUVHMEQsSUFGSCxDQUVRO0FBQUEsZUFBS1IsRUFBRVMsS0FBUDtBQUFBLE9BRlIsRUFHRzNELElBSEgsQ0FHUSxHQUhSLEVBR2EsWUFBVztBQUNwQixZQUFJeUksUUFBUSxLQUFLcUYsT0FBTCxFQUFaO0FBQ0EsZUFBTyxFQUFFckYsTUFBTTNJLEtBQU4sR0FBYyxDQUFoQixDQUFQO0FBQ0QsT0FOSDs7QUFRQVYsV0FBSzhFLElBQUwsR0FBWVosTUFBWjs7QUFFQWxFLGFBQU9pUixVQUFVak4sU0FBVixDQUFvQixlQUFwQixDQUFQOztBQUVBLFVBQUksS0FBS3RDLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QndGLElBQTNCLEVBQWlDO0FBQy9CblQsYUFBS21FLElBQUwsQ0FBVWhFLEdBQUdnVCxJQUFILEdBQ1BoTSxFQURPLENBQ0osT0FESSxFQUNLaU0sV0FETCxFQUVQak0sRUFGTyxDQUVKLE1BRkksRUFFSWtNLE9BRkosRUFHUGxNLEVBSE8sQ0FHSixLQUhJLEVBR0dtTSxTQUhILENBQVY7QUFJRDs7QUFFRCxVQUFJdFQsUUFBUSxDQUFDQSxLQUFLdVQsS0FBTCxFQUFiLEVBQTJCOztBQUV6QixhQUFLaEMsWUFBTCxDQUFrQnZSLElBQWxCOztBQUVBLFlBQUksS0FBSzBCLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJ5SyxLQUFqQixDQUF1QjZGLGNBQTNCLEVBQTJDO0FBQ3pDLGNBQUloQyxjQUFjeFIsS0FBS21ILEVBQUwsQ0FBUSxPQUFSLENBQWxCO0FBQ0FuSCxlQUFLbUgsRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBU3JELENBQVQsRUFBWTtBQUMzQjtBQUNBMlAsMkJBQWV0UCxJQUFmLENBQW9CLElBQXBCO0FBQ0E7QUFDQXFOLHdCQUFZck4sSUFBWixDQUFpQixJQUFqQixFQUF1QkwsQ0FBdkI7QUFDRCxXQUxEO0FBTUQ7QUFDRjs7QUFFRCxVQUFJOE8sZ0JBQUosRUFBc0I7QUFDcEI7QUFDQSxZQUFJYyxTQUFTLENBQWI7QUFDQTFULGFBQUsyVCxJQUFMLENBQVUsWUFBVTtBQUNsQixjQUFJdEssUUFBUSxLQUFLcUYsT0FBTCxFQUFaO0FBQ0EsY0FBSWdGLFNBQVNySyxNQUFNM0ksS0FBbkIsRUFBMEI7QUFDeEJnVCxxQkFBU3JLLE1BQU0zSSxLQUFmO0FBQ0Q7QUFDRixTQUxEO0FBTUE7QUFDQTtBQUNBLFlBQUlrVCxZQUFZelQsR0FBRzBULGFBQUgsR0FBbUJDLFFBQW5CLENBQTRCLENBQUNwQyxZQUFZclAsTUFBYixHQUFzQixFQUFsRCxDQUFoQjtBQUNBLFlBQUkwUixZQUFZNVQsR0FBRzZULFNBQUgsQ0FBYWxCLFdBQWIsRUFBMEI3SixFQUExQixDQUE2QjtBQUFBLGlCQUFLbkYsRUFBRW1GLEVBQVA7QUFBQSxTQUE3QixFQUF3Q2dMLFFBQXhDLENBQWlELEVBQWpELENBQWhCO0FBQ0EsWUFBSUMsZUFBZS9ULEdBQUdnVSxZQUFILEdBQWtCVCxNQUFsQixDQUF5QkEsU0FBTyxDQUFoQyxFQUFtQ1UsVUFBbkMsQ0FBOEMsQ0FBOUMsQ0FBbkI7O0FBRUE7QUFDQSxZQUFJQyxTQUFTbFUsR0FBR2tVLE1BQUgsQ0FBVSxLQUFLM1QsS0FBZixFQUFzQm9ULFFBQXRCLENBQStCLElBQS9CLENBQWI7QUFDQTtBQUNBLFlBQUlRLFNBQVNuVSxHQUFHbVUsTUFBSCxDQUFVLENBQUMsS0FBS3ZULE1BQWhCLEVBQXdCK1MsUUFBeEIsQ0FBaUMsSUFBakMsQ0FBYjs7QUFFQSxZQUFJLEtBQUtwUyxJQUFMLENBQVV3QixNQUFWLENBQWlCeUssS0FBakIsQ0FBdUJoRyxJQUF2QixLQUFnQyxPQUFwQyxFQUE2QztBQUMzQztBQUNBME0sbUJBQVNsVSxHQUFHa1UsTUFBSCxDQUFVLEtBQUszVCxLQUFmLEVBQXNCb1QsUUFBdEIsQ0FBK0IsR0FBL0IsQ0FBVDtBQUNBO0FBQ0FRLG1CQUFTblUsR0FBR21VLE1BQUgsQ0FBVTtBQUFBLG1CQUFLeFEsRUFBRXdOLEtBQUYsR0FBVSxFQUFmO0FBQUEsV0FBVixFQUE2QndDLFFBQTdCLENBQXNDLEdBQXRDLENBQVQ7QUFDRDs7QUFFRCxZQUFJakIsYUFBYTFTLEdBQUdvVSxlQUFILEdBQXFCaEUsS0FBckIsQ0FBMkIwQyxVQUEzQixFQUNkdUIsS0FEYyxDQUNSLFFBRFEsRUFDRVosU0FERixFQUVkWSxLQUZjLENBRVIsTUFGUSxFQUVBVCxTQUZBO0FBR2Y7QUFIZSxTQUlkUyxLQUpjLENBSVIsR0FKUSxFQUlISCxNQUpHLEVBS2RHLEtBTGMsQ0FLUixHQUxRLEVBS0hGLE1BTEcsRUFNZEUsS0FOYyxDQU1SLFNBTlEsRUFNR04sWUFOSCxFQU9kL00sRUFQYyxDQU9YLE1BUFcsRUFPSHNOLE1BUEcsRUFRZHROLEVBUmMsQ0FRWCxLQVJXLEVBUUosWUFBVztBQUNwQjtBQUNBa0YsZUFBSzFMLE1BQUwsQ0FBWW1NLFNBQVo7QUFDRCxTQVhjLENBQWpCOztBQWFBO0FBQ0ErRixtQkFBVzZCLE9BQVg7QUFDRCxPQTFDRCxNQTBDTztBQUNMO0FBQ0FEO0FBQ0FwSSxhQUFLMUwsTUFBTCxDQUFZbU0sU0FBWjtBQUNEOztBQUVELGVBQVMySCxNQUFULEdBQWtCO0FBQ2hCN0QsYUFDR2hRLElBREgsQ0FDUSxJQURSLEVBQ2M7QUFBQSxpQkFBS2tELEVBQUV3TSxNQUFGLENBQVM5TSxDQUFkO0FBQUEsU0FEZCxFQUVHNUMsSUFGSCxDQUVRLElBRlIsRUFFYztBQUFBLGlCQUFLa0QsRUFBRXdNLE1BQUYsQ0FBUzdNLENBQWQ7QUFBQSxTQUZkLEVBR0c3QyxJQUhILENBR1EsSUFIUixFQUdjO0FBQUEsaUJBQUtrRCxFQUFFdkUsTUFBRixDQUFTaUUsQ0FBZDtBQUFBLFNBSGQsRUFJRzVDLElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBS2tELEVBQUV2RSxNQUFGLENBQVNrRSxDQUFkO0FBQUEsU0FKZDs7QUFNQXpELGFBQUtZLElBQUwsQ0FBVSxXQUFWLEVBQXVCO0FBQUEsZ0NBQWtCa0QsRUFBRU4sQ0FBcEIsU0FBeUJNLEVBQUVMLENBQTNCO0FBQUEsU0FBdkI7QUFDRDs7QUFFRDtBQUNBO0FBQ0EsVUFBSWtSLFNBQVMsQ0FBYjtBQUNBO0FBQ0EsVUFBSUMsZ0JBQWdCLEVBQXBCOztBQUVBLFdBQUssSUFBSTVQLElBQUksQ0FBYixFQUFnQkEsSUFBSTBNLFlBQVlyUCxNQUFoQyxFQUF3QzJDLEdBQXhDLEVBQTZDO0FBQzNDNFAsc0JBQWlCNVAsQ0FBakIsU0FBc0JBLENBQXRCLElBQTZCLENBQTdCO0FBQ0Q7O0FBRUQ4TixrQkFBWW5QLE9BQVosQ0FBb0IsVUFBU0csQ0FBVCxFQUFZO0FBQzlCOFEsc0JBQWlCOVEsRUFBRXdNLE1BQUYsQ0FBU3VFLEtBQTFCLFNBQW1DL1EsRUFBRXZFLE1BQUYsQ0FBU3NWLEtBQTVDLElBQXVELENBQXZEO0FBQ0QsT0FGRDs7QUFJQSxlQUFTcEIsY0FBVCxHQUEwQjtBQUN4QjtBQUNBLGlCQUFTcUIsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLGlCQUFPSixjQUFpQkcsRUFBRUYsS0FBbkIsU0FBNEJHLEVBQUVILEtBQTlCLENBQVA7QUFDRDtBQUNEMVUsV0FBR21ILEtBQUgsQ0FBU3dLLGNBQVQ7QUFDQSxZQUFJNkMsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0EsY0FBSTdRLElBQUkzRCxHQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQkosSUFBaEIsR0FBdUJpVixRQUEvQjtBQUNBalYsZUFBS3FFLEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUt5USxZQUFZaFIsQ0FBWixFQUFlZ04sQ0FBZixLQUFxQmdFLFlBQVloRSxDQUFaLEVBQWVoTixDQUFmLENBQXJCLEdBQXlDLENBQXpDLEdBQTZDLEdBQWxEO0FBQUEsV0FBdEI7QUFDQThNLGVBQUt2TSxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUFBLG1CQUFLUCxFQUFFK1EsS0FBRixLQUFZL0QsRUFBRVIsTUFBRixDQUFTdUUsS0FBckIsSUFBOEIvUSxFQUFFK1EsS0FBRixLQUFZL0QsRUFBRXZSLE1BQUYsQ0FBU3NWLEtBQW5ELEdBQTJELENBQTNELEdBQStELEdBQXBFO0FBQUEsV0FBdEI7QUFDQTtBQUNBRixtQkFBUyxDQUFUO0FBQ0QsU0FQRCxNQU9PO0FBQ0w7QUFDQTNVLGVBQUtxRSxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBdU0sZUFBS3ZNLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLENBQXRCO0FBQ0FzUSxtQkFBUyxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTdkIsV0FBVCxDQUFxQnRQLENBQXJCLEVBQXdCO0FBQ3RCLFlBQUksQ0FBQzNELEdBQUdtSCxLQUFILENBQVM0TixNQUFWLElBQW9CdEMsZ0JBQXhCLEVBQTBDO0FBQ3hDQyxxQkFBV3NDLFdBQVgsQ0FBdUIsSUFBdkIsRUFBNkJULE9BQTdCO0FBQ0Q7QUFDRDVRLFVBQUVzUixFQUFGLEdBQU90UixFQUFFTixDQUFUO0FBQ0FNLFVBQUV1UixFQUFGLEdBQU92UixFQUFFTCxDQUFUO0FBQ0Q7O0FBRUQsZUFBUzRQLE9BQVQsQ0FBaUJ2UCxDQUFqQixFQUFvQjtBQUNsQkEsVUFBRXNSLEVBQUYsR0FBT2pWLEdBQUdtSCxLQUFILENBQVM5RCxDQUFoQjtBQUNBTSxVQUFFdVIsRUFBRixHQUFPbFYsR0FBR21ILEtBQUgsQ0FBUzdELENBQWhCO0FBQ0Q7O0FBRUQsZUFBUzZQLFNBQVQsQ0FBbUJ4UCxDQUFuQixFQUFzQjtBQUNwQixZQUFJLENBQUMzRCxHQUFHbUgsS0FBSCxDQUFTNE4sTUFBVixJQUFvQnRDLGdCQUF4QixFQUEwQztBQUN4Q0MscUJBQVdzQyxXQUFYLENBQXVCLENBQXZCO0FBQ0Q7QUFDRHJSLFVBQUVzUixFQUFGLEdBQU8sSUFBUDtBQUNBdFIsVUFBRXVSLEVBQUYsR0FBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBRUQ7OzsrQkFFVSxDQUFFOzs7dUNBRU1DLGEsRUFBZUMsUyxFQUFXO0FBQzNDLFVBQUlDLGNBQWMsRUFBbEI7QUFDQUYsb0JBQWMzUixPQUFkLENBQXNCLGFBQUs7QUFDekIsWUFBSWlOLE9BQU8yRSxVQUFVRSxJQUFWLENBQWU7QUFBQSxpQkFBSzNSLEVBQUVtRixFQUFGLEtBQVM2SCxFQUFFN0gsRUFBaEI7QUFBQSxTQUFmLENBQVg7QUFDQSxZQUFJMkgsSUFBSixFQUFVO0FBQ1I0RSxzQkFBWTNQLElBQVosQ0FBaUIrSyxJQUFqQjtBQUNELFNBRkQsTUFFTztBQUNMNEUsc0JBQVkzUCxJQUFaLENBQWlCaUwsQ0FBakI7QUFDRDtBQUNGLE9BUEQ7QUFRQSxhQUFPMEUsV0FBUDtBQUNEOzs7OztrQkFwUGtCN0MsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQitDLFksV0FNbEIsNkJBQVMsY0FBVCxDOzs7QUFKRCw4QkFBNEQ7QUFBQSw0QkFBOUN4VyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx1SEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSVUsVUFBVUosU0FBZDtBQUNBLGNBQVEsS0FBS2dDLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCd0UsSUFBL0I7QUFDQSxhQUFLLEtBQUw7QUFDRTdILG9CQUFVLHVCQUFhLEtBQUtULE9BQWxCLEVBQTJCMEcsSUFBM0IsQ0FBZ0MsS0FBS3JFLElBQXJDLEVBQTJDakMsTUFBM0MsRUFBVjtBQUNBO0FBQ0YsYUFBSyxNQUFMO0FBQ0VLLG9CQUFVLHdCQUFjLEtBQUtULE9BQW5CLEVBQTRCMEcsSUFBNUIsQ0FBaUMsS0FBS3JFLElBQXRDLEVBQTRDakMsTUFBNUMsRUFBVjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VLLG9CQUFVLDJCQUFpQixLQUFLVCxPQUF0QixFQUErQjBHLElBQS9CLENBQW9DLEtBQUtyRSxJQUF6QyxFQUErQ2pDLE1BQS9DLEVBQVY7QUFDQTtBQVRGOztBQVlBLGFBQU9LLE9BQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQXpCTTRWLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJDLFEsV0FNbEIsc0M7OztBQUpELDBCQUE0RDtBQUFBLDRCQUE5Q3pXLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLCtHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxXQUFLMEQsTUFBTCxHQUFjM0MsR0FBR3lWLFNBQUgsR0FBZXRTLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUksS0FBSzVDLEtBQVQsQ0FBckIsRUFBc0NtVixPQUF0QyxDQUE4QyxHQUE5QyxFQUFtRHRTLE1BQW5ELENBQTBELEtBQUtYLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUF0RSxDQUFkOztBQUVBLFVBQUksQ0FBQyxLQUFLWCxJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBWixDQUFtQmxCLE1BQXhCLEVBQWdDO0FBQzlCLGFBQUtPLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUFaLEdBQXFCLGdCQUFNdVMsV0FBTixDQUFrQixLQUFLcFMsU0FBTCxDQUFlckIsTUFBZixHQUF3QixLQUFLVyxZQUFMLENBQWtCWCxNQUE1RCxDQUFyQjtBQUNBLGFBQUtTLE1BQUwsQ0FBWVMsTUFBWixDQUFtQixLQUFLWCxJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBL0I7QUFDRDs7QUFFRCxVQUFJd1MsWUFBWSxLQUFLalcsT0FBTCxDQUFha0UsU0FBYixDQUF1QixlQUF2QixDQUFoQjs7QUFFQSxVQUFJLENBQUMrUixVQUFVL1YsSUFBVixFQUFMLEVBQXVCO0FBQ3JCK1Ysb0JBQVksS0FBS2pXLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxhQUF2QyxDQUFaO0FBQ0Q7O0FBRUQsVUFBSXlMLE9BQU8sSUFBWDs7QUFFQSxXQUFLckosWUFBTCxDQUFrQlcsT0FBbEIsQ0FBMEIsVUFBU2xCLEdBQVQsRUFBY29TLEtBQWQsRUFBcUI7QUFDN0MsWUFBSW1CLE1BQU1ELFVBQVUvUixTQUFWLGtCQUFtQzZRLEtBQW5DLEVBQTRDblQsSUFBNUMsQ0FBaUQySyxLQUFLdEosUUFBTCxDQUFjTixHQUFkLENBQWpELENBQVY7O0FBRUF1VCxZQUFJbFIsSUFBSixHQUFXbUssVUFBWCxHQUF3QkMsUUFBeEIsQ0FBaUMsR0FBakMsRUFDRzdLLEtBREgsQ0FDUyxjQURULEVBQ3lCLElBRHpCLEVBRUdILE1BRkg7O0FBSUE7QUFDQSxZQUFJK1IsV0FBV0QsSUFBSWpSLEtBQUosR0FDWmQsTUFEWSxDQUNMLE1BREssRUFFWkksS0FGWSxDQUVOLE1BRk0sRUFFRTtBQUFBLGlCQUFNLGdCQUFNYSxNQUFOLENBQWEyUCxRQUFRLENBQXJCLENBQU47QUFBQSxTQUZGLEVBR1pqVSxJQUhZLENBR1AsT0FITyxrQkFHZ0JpVSxLQUhoQixFQUlaalUsSUFKWSxDQUlQLEdBSk8sRUFJRixVQUFTa0QsQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ3hCLGlCQUFPcUgsS0FBS3ZKLE1BQUwsQ0FBWXVKLEtBQUt6SixJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBWixDQUFtQnlCLENBQW5CLENBQVosSUFBcUM2UCxTQUFTeEksS0FBS3ZKLE1BQUwsQ0FBWW9ULFNBQVosS0FBMEI3SixLQUFLckosWUFBTCxDQUFrQlgsTUFBckQsQ0FBNUM7QUFDRCxTQU5ZLEVBT1p6QixJQVBZLENBT1AsT0FQTyxFQU9HeUwsS0FBS3ZKLE1BQUwsQ0FBWW9ULFNBQVosS0FBMEI3SixLQUFLckosWUFBTCxDQUFrQlgsTUFBN0MsR0FBdUQsQ0FQekQsRUFRWnpCLElBUlksQ0FRUCxHQVJPLEVBUUYsVUFBU2tELENBQVQsRUFBWTtBQUNyQixpQkFBT3VJLEtBQUt4SixNQUFMLENBQVlpQixDQUFaLENBQVA7QUFDRCxTQVZZLEVBV1psRCxJQVhZLENBV1AsUUFYTyxFQVdHLFVBQVNrRCxDQUFULEVBQVk7QUFDMUIsaUJBQU91SSxLQUFLdEwsTUFBTCxHQUFjc0wsS0FBS3hKLE1BQUwsQ0FBWWlCLENBQVosQ0FBckI7QUFDRCxTQWJZLEVBY1pxRCxFQWRZLENBY1QsWUFkUyxFQWNLLFVBQVNyRCxDQUFULEVBQVk7QUFDNUIzRCxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjZPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBQ2lCN0ssS0FEakIsQ0FDdUIsY0FEdkIsRUFDdUMsR0FEdkM7QUFFQWdJLGVBQUtwSixPQUFMLENBQWE4QyxJQUFiLENBQWtCLGdCQUFNOUMsT0FBTixDQUFjUixHQUFkLEVBQW1CcUIsQ0FBbkIsQ0FBbEIsRUFBeUMsSUFBekMsRUFBK0NyRSxNQUEvQztBQUNELFNBbEJZLEVBbUJaMEgsRUFuQlksQ0FtQlQsWUFuQlMsRUFtQkssWUFBVztBQUMzQmhILGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCNk8sVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFDaUI3SyxLQURqQixDQUN1QixjQUR2QixFQUN1QyxDQUR2QztBQUVBZ0ksZUFBS3BKLE9BQUwsQ0FBYXRELFFBQWI7QUFDRCxTQXZCWSxDQUFmOztBQXlCQXNXLGlCQUFTaFIsS0FBVCxDQUFlK1EsR0FBZixFQUNHcFYsSUFESCxDQUNRLEdBRFIsRUFDYSxVQUFTa0QsQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ3hCLGlCQUFPcUgsS0FBS3ZKLE1BQUwsQ0FBWXVKLEtBQUt6SixJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBWixDQUFtQnlCLENBQW5CLENBQVosSUFBcUM2UCxTQUFTeEksS0FBS3ZKLE1BQUwsQ0FBWW9ULFNBQVosS0FBMEI3SixLQUFLckosWUFBTCxDQUFrQlgsTUFBckQsQ0FBNUM7QUFDRCxTQUhILEVBSUd6QixJQUpILENBSVEsT0FKUixFQUlrQnlMLEtBQUt2SixNQUFMLENBQVlvVCxTQUFaLEtBQTBCN0osS0FBS3JKLFlBQUwsQ0FBa0JYLE1BQTdDLEdBQXVELENBSnhFLEVBS0d6QixJQUxILENBS1EsR0FMUixFQUthLFVBQVNrRCxDQUFULEVBQVk7QUFDckIsaUJBQU91SSxLQUFLeEosTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQ0QsU0FQSCxFQVFHbEQsSUFSSCxDQVFRLFFBUlIsRUFRa0IsVUFBU2tELENBQVQsRUFBWTtBQUMxQixpQkFBT3VJLEtBQUt0TCxNQUFMLEdBQWNzTCxLQUFLeEosTUFBTCxDQUFZaUIsQ0FBWixDQUFyQjtBQUNELFNBVkg7QUFXRCxPQTVDRDs7QUE4Q0EsV0FBS3FTLFdBQUw7QUFDQSxXQUFLQyxhQUFMOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBNUVNVCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCVSxTLFdBTWxCLHNDOzs7QUFKRCwyQkFBNEQ7QUFBQSw0QkFBOUNuWCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSWtYLGFBQWEsS0FBS3hXLE9BQUwsQ0FBYWtFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWpCOztBQUVBLFVBQUksQ0FBQ3NTLFdBQVd0VyxJQUFYLEVBQUwsRUFBd0I7QUFDdEJzVyxxQkFBYSxLQUFLeFcsT0FBTCxDQUFhbUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnJELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQWI7QUFDRDs7QUFFRCxVQUFJeUwsT0FBTyxJQUFYOztBQUVBLFdBQUtySixZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTbEIsR0FBVCxFQUFjb1MsS0FBZCxFQUFxQjtBQUM3QyxZQUFJMEIsWUFBWXBXLEdBQUdxVyxJQUFILEdBQ2JoVCxDQURhLENBQ1gsVUFBU00sQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ2hCLGlCQUFPcUgsS0FBS3ZKLE1BQUwsQ0FBWWtDLENBQVosQ0FBUDtBQUNELFNBSGEsRUFJYnZCLENBSmEsQ0FJWCxVQUFTSyxDQUFULEVBQVk7QUFDYixpQkFBT3VJLEtBQUt4SixNQUFMLENBQVlpQixDQUFaLENBQVA7QUFDRCxTQU5hLENBQWhCOztBQVFBLFlBQUkwUyxPQUFPRixXQUFXdFMsU0FBWCxtQkFBcUM2USxLQUFyQyxFQUE4Q25ULElBQTlDLENBQW1ELENBQUMySyxLQUFLdEosUUFBTCxDQUFjTixHQUFkLENBQUQsQ0FBbkQsQ0FBWDs7QUFFQStULGFBQUsxUixJQUFMLEdBQVltSyxVQUFaLEdBQXlCQyxRQUF6QixDQUFrQyxHQUFsQyxFQUNHN0ssS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR0gsTUFGSDs7QUFJQTtBQUNBLFlBQUl1UyxZQUFZRCxLQUFLelIsS0FBTCxHQUNiZCxNQURhLENBQ04sTUFETSxFQUViSSxLQUZhLENBRVAsUUFGTyxFQUVHO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYTJQLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBRkgsRUFHYnhRLEtBSGEsQ0FHUCxjQUhPLEVBR1MsS0FIVCxFQUliekQsSUFKYSxDQUlSLE9BSlEsbUJBSWdCaVUsS0FKaEIsRUFLYmpVLElBTGEsQ0FLUixHQUxRLEVBS0gyVixTQUxHLEVBTWJwUCxFQU5hLENBTVYsWUFOVSxFQU1JLFVBQVNyRCxDQUFULEVBQVk7QUFDNUIzRCxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjZPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUc3SyxLQUZILENBRVMsZ0JBRlQsRUFFMkIsR0FGM0IsRUFHR0EsS0FISCxDQUdTLGNBSFQsRUFHeUIsTUFIekI7QUFJQWdJLGVBQUtwSixPQUFMLENBQWE4QyxJQUFiLENBQWtCLGdCQUFNOUMsT0FBTixDQUFjUixHQUFkLEVBQW1CcUIsQ0FBbkIsQ0FBbEIsRUFBeUMsSUFBekMsRUFBK0NyRSxNQUEvQztBQUNELFNBWmEsRUFhYjBILEVBYmEsQ0FhVixZQWJVLEVBYUksWUFBVztBQUMzQmhILGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCNk8sVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFFRzdLLEtBRkgsQ0FFUyxnQkFGVCxFQUUyQixDQUYzQixFQUdHQSxLQUhILENBR1MsY0FIVCxFQUd5QixLQUh6QjtBQUlBZ0ksZUFBS3BKLE9BQUwsQ0FBYXRELFFBQWI7QUFDRCxTQW5CYSxDQUFoQjs7QUFxQkE4VyxrQkFBVXhSLEtBQVYsQ0FBZ0J1UixJQUFoQjtBQUNELE9BdENEOztBQXdDQSxXQUFLTCxXQUFMO0FBQ0EsV0FBS0MsYUFBTDs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQS9ETUMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkssWSxXQU1sQixzQzs7O0FBSkQsOEJBQTREO0FBQUEsNEJBQTlDeFgsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsdUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFVBQUl1WCxlQUFlLEtBQUs3VyxPQUFMLENBQWFrRSxTQUFiLENBQXVCLG1CQUF2QixDQUFuQjs7QUFFQSxVQUFJLENBQUMyUyxhQUFhM1csSUFBYixFQUFMLEVBQTBCO0FBQ3hCMlcsdUJBQWUsS0FBSzdXLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJyRCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxpQkFBdkMsQ0FBZjtBQUNEOztBQUVELFVBQUl5TCxPQUFPLElBQVg7O0FBRUEsV0FBS3JKLFlBQUwsQ0FBa0JXLE9BQWxCLENBQTBCLFVBQVNsQixHQUFULEVBQWNvUyxLQUFkLEVBQXFCO0FBQzdDLFlBQUkrQixVQUFVRCxhQUFhM1MsU0FBYixzQkFBMEM2USxLQUExQyxFQUFtRG5ULElBQW5ELENBQXdEMkssS0FBS3RKLFFBQUwsQ0FBY04sR0FBZCxDQUF4RCxDQUFkOztBQUVBbVUsZ0JBQVE5UixJQUFSLEdBQWVtSyxVQUFmLEdBQTRCQyxRQUE1QixDQUFxQyxHQUFyQyxFQUNHN0ssS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR0gsTUFGSDs7QUFJQTtBQUNBLFlBQUkyUyxlQUFlRCxRQUNoQjdSLEtBRGdCLEdBRWhCZCxNQUZnQixDQUVULFFBRlMsRUFHaEJJLEtBSGdCLENBR1YsTUFIVSxFQUdGO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYTJQLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBSEUsRUFJaEJqVSxJQUpnQixDQUlYLE9BSlcsc0JBSWdCaVUsS0FKaEIsRUFLaEJqVSxJQUxnQixDQUtYLEdBTFcsRUFLTixDQUxNLEVBTWhCQSxJQU5nQixDQU1YLElBTlcsRUFNTCxVQUFTa0QsQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ3pCLGlCQUFPcUgsS0FBS3ZKLE1BQUwsQ0FBWWtDLENBQVosQ0FBUDtBQUNELFNBUmdCLEVBU2hCcEUsSUFUZ0IsQ0FTWCxJQVRXLEVBU0wsVUFBU2tELENBQVQsRUFBWTtBQUN0QixpQkFBT3VJLEtBQUt4SixNQUFMLENBQVlpQixDQUFaLENBQVA7QUFDRCxTQVhnQixFQVloQnFELEVBWmdCLENBWWIsWUFaYSxFQVlDLFVBQVNyRCxDQUFULEVBQVk7QUFDNUIzRCxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjZPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUc3SyxLQUZILENBRVMsY0FGVCxFQUV5QixHQUZ6QixFQUdHekQsSUFISCxDQUdRLEdBSFIsRUFHYSxFQUhiO0FBSUF5TCxlQUFLcEosT0FBTCxDQUFhOEMsSUFBYixDQUFrQixnQkFBTTlDLE9BQU4sQ0FBY1IsR0FBZCxFQUFtQnFCLENBQW5CLENBQWxCLEVBQXlDLElBQXpDLEVBQStDckUsTUFBL0M7QUFDRCxTQWxCZ0IsRUFtQmhCMEgsRUFuQmdCLENBbUJiLFlBbkJhLEVBbUJDLFlBQVc7QUFDM0JoSCxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjZPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUc3SyxLQUZILENBRVMsY0FGVCxFQUV5QixDQUZ6QixFQUdHekQsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiO0FBSUF5TCxlQUFLcEosT0FBTCxDQUFhdEQsUUFBYjtBQUNELFNBekJnQixDQUFuQjs7QUEyQkFrWCxxQkFBYTVSLEtBQWIsQ0FBbUIyUixPQUFuQjtBQUNELE9BcENEOztBQXNDQSxXQUFLVCxXQUFMOztBQUVBLFdBQUtDLGFBQUw7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkE5RE1NLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7OztBQUNBOztJQUFZSSxROzs7Ozs7Ozs7Ozs7QUFFWjs7SUFFcUJDLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUM3WCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwrR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJNFgsYUFBYSx5QkFBZSxLQUFLM1gsT0FBcEIsQ0FBakI7O0FBRUE7QUFDQSxVQUFNNFgsdUJBQXFCLEtBQUt2VixJQUFMLENBQVV3QixNQUFWLENBQWlCK0YsRUFBNUM7QUFDQSxXQUFLbkosT0FBTCxHQUFlSyxHQUFHQyxNQUFILE9BQWM2VyxNQUFkLENBQWY7O0FBRUE7QUFDQSxVQUFJLENBQUMsS0FBS25YLE9BQUwsQ0FBYUUsSUFBYixFQUFMLEVBQTBCO0FBQ3hCO0FBQ0EsYUFBS0osTUFBTCxDQUFZQyxLQUFaLDBCQUF5Q29YLE1BQXpDO0FBQ0EsYUFBS25YLE9BQUwsR0FBZSxLQUFLYSxNQUFMLENBQVlzRCxNQUFaLENBQW1CLEtBQW5CLEVBQTBCckQsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0MseUJBQXhDLEVBQW1FQSxJQUFuRSxDQUF3RSxJQUF4RSxFQUE4RXFXLE1BQTlFLENBQWY7QUFDRDs7QUFFRDtBQUNBLFdBQUtuWCxPQUFMLENBQWFrRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCRSxNQUE1Qjs7QUFFQSxXQUFLcEUsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEJyRCxJQUExQixDQUErQixPQUEvQixFQUF3QyxrQkFBeEMsQ0FBZjs7QUFFQSxVQUFJLEtBQUtjLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJxQixLQUFyQixFQUE0QjtBQUMxQixhQUFLekUsT0FBTCxDQUFhbUUsTUFBYixDQUFvQixJQUFwQixFQUEwQnJELElBQTFCLENBQStCLE9BQS9CLEVBQXdDLGNBQXhDLEVBQXdEcUQsTUFBeEQsQ0FBK0QsR0FBL0QsRUFBb0VpRyxJQUFwRSxDQUF5RSxLQUFLeEksSUFBTCxDQUFVd0IsTUFBVixDQUFpQnFCLEtBQTFGO0FBQ0Q7O0FBRUQsVUFBSXlGLFFBQVEsS0FBS2xLLE9BQUwsQ0FBYW1FLE1BQWIsQ0FBb0IsSUFBcEIsQ0FBWjtBQUNBK0YsWUFBTS9GLE1BQU4sQ0FBYSxHQUFiLEVBQWtCaUcsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDQSxVQUFJRSxVQUFVSixNQUFNL0YsTUFBTixDQUFhLElBQWIsQ0FBZDtBQUNBbUcsY0FBUW5HLE1BQVIsQ0FBZSxJQUFmLEVBQXFCQSxNQUFyQixDQUE0QixHQUE1QixFQUFpQ2tELEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBTSxPQUFLOUgsT0FBTCxDQUFhRixRQUFiLENBQXNCK0QsTUFBdEIsQ0FBNkI0SixTQUE3QixFQUFOO0FBQUEsT0FBN0MsRUFBNkZsTSxJQUE3RixDQUFrRyxPQUFsRyxFQUEyRyxhQUEzRyxFQUEwSHNKLElBQTFILENBQStILGFBQS9IO0FBQ0FFLGNBQVFuRyxNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUNrRCxFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQU0yUCxTQUFTSSxZQUFULENBQXNCLE9BQUsvSyxTQUFMLENBQWVuTSxJQUFmLEVBQXRCLEVBQTZDLGFBQTdDLENBQU47QUFBQSxPQUE3QyxFQUFnSFksSUFBaEgsQ0FBcUgsT0FBckgsRUFBOEgsYUFBOUgsRUFBNklzSixJQUE3SSxDQUFrSixhQUFsSjtBQUNBRSxjQUFRbkcsTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDa0QsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFNNlAsV0FBV2pSLElBQVgsQ0FBZ0IsT0FBS3JFLElBQXJCLEVBQTJCakMsTUFBM0IsRUFBTjtBQUFBLE9BQTdDLEVBQXdGbUIsSUFBeEYsQ0FBNkYsT0FBN0YsRUFBc0csT0FBdEcsRUFBK0dzSixJQUEvRyxDQUFvSCxPQUFwSDs7QUFFQTtBQUNBLFVBQUlOLGdCQUFnQixLQUFLVSxRQUFMLENBQWNoSSxPQUFPQyxNQUFQLENBQWMsS0FBS2IsSUFBTCxDQUFVd0IsTUFBVixDQUFpQmlILEtBQS9CLENBQWQsQ0FBcEI7QUFDQSxXQUFLSSxRQUFMLENBQWMsS0FBS3pLLE9BQW5CLEVBQTRCOEosYUFBNUI7O0FBRUEsV0FBS2hLLE1BQUwsQ0FBWUMsS0FBWix5QkFBd0NvWCxNQUF4Qzs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7OztrQkE3Q01GLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJJLFUsV0FNbEIsc0M7OztBQUpELDRCQUE0RDtBQUFBLDRCQUE5Q2pZLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG1IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFVBQUk0UyxVQUFVLGtCQUFkOztBQUVBLFdBQUtwUyxNQUFMLENBQVlDLEtBQVosNEJBQTJDbVMsT0FBM0M7O0FBRUEsV0FBS2xTLE9BQUwsR0FBZSxLQUFLcUwsTUFBTCxDQUFZbEgsTUFBWixDQUFtQixLQUFuQixFQUNackQsSUFEWSxDQUNQLElBRE8sRUFDRG9SLE9BREMsRUFFWnBSLElBRlksQ0FFUCxPQUZPLEVBRUUsY0FGRixDQUFmOztBQUlBLFVBQUlxUixPQUFPLEtBQUtuUyxPQUFMLENBQWFtRSxNQUFiLENBQW9CLE1BQXBCLENBQVg7O0FBRUEsVUFBSWlPLFNBQVNELEtBQUtoTyxNQUFMLENBQVksS0FBWixFQUFtQnJELElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHFCQUFqQyxDQUFiOztBQUVBc1IsYUFBT2pPLE1BQVAsQ0FBYyxNQUFkLEVBQXNCaUcsSUFBdEIscUJBQTRDLEtBQUt4SSxJQUFMLENBQVUwVixPQUFWLElBQXFCLEtBQWpFOztBQUVBLFVBQUloTixVQUFVNkgsS0FBS2hPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CckQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsc0JBQWpDLEVBQ1hxRCxNQURXLENBQ0osS0FESSxFQUNHckQsSUFESCxDQUNRLE9BRFIsRUFDaUIsY0FEakIsRUFFWHFELE1BRlcsQ0FFSixLQUZJLEVBRUdyRCxJQUZILENBRVEsT0FGUixFQUVpQixtQkFGakIsQ0FBZDs7QUFJQXdKLGNBQVFuRyxNQUFSLENBQWUsTUFBZixFQUF1QkssSUFBdkIsQ0FBNEIsZ0JBQTVCO0FBQ0E4RixjQUFRbkcsTUFBUixDQUFlLEtBQWYsRUFBc0JyRCxJQUF0QixDQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4Q3NKLElBQTlDLENBQW1ELGdDQUFnQmEsS0FBS0MsU0FBTCxDQUFlLEtBQUt0SixJQUFMLENBQVV3QixNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFoQixDQUFuRDtBQUNBa0gsY0FBUW5HLE1BQVIsQ0FBZSxNQUFmLEVBQXVCQSxNQUF2QixDQUE4QixHQUE5QixFQUFtQ3JELElBQW5DLENBQXdDLE1BQXhDLEVBQWdELHFDQUFoRCxFQUF1RjBELElBQXZGLENBQTRGLGtCQUE1Rjs7QUFFQSxVQUFJaU8sU0FBU04sS0FBS2hPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CckQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUEyUixhQUFPdE8sTUFBUCxDQUFjLFFBQWQsRUFBd0JLLElBQXhCLENBQTZCLElBQTdCLEVBQW1DNkMsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBTTtBQUNuRGhILFdBQUdtSCxLQUFILENBQVN3SyxjQUFUO0FBQ0EsZUFBS25TLFFBQUwsQ0FBY3dFLElBQWQ7QUFDRCxPQUhEOztBQUtBO0FBQ0Esb0RBQThCLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsaUJBQTNCLEVBQThDLGVBQTlDLENBQTlCOztBQUVBLFdBQUt2RSxNQUFMLENBQVlDLEtBQVosOEJBQTZDbVMsT0FBN0M7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7O2tCQTVDa0JtRixVOzs7Ozs7Ozs7QUNOckIsQ0FBQyxZQUFXO0FBQ1YsTUFBSUUsT0FBTyxPQUFPM0ssT0FBUCxJQUFrQixXQUFsQixJQUFpQ0EsT0FBakMsSUFBNEMsY0FBaUIsV0FBakIsSUFBZ0MsRUFBNUUsSUFBa0YsSUFBN0Y7O0FBRUEsTUFBSTRLLFVBQVUsbUtBQWQ7O0FBRUEsV0FBU0MsU0FBVCxDQUFtQjFWLEdBQW5CLEVBQXdCO0FBQ3RCLFdBQU9BLGVBQWUyVixXQUFmLElBQThCM1YsZUFBZTRWLFVBQXBEO0FBQ0Q7O0FBRUQsV0FBU0MsY0FBVCxDQUF3QkMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBSSxDQUFDSixVQUFVSSxFQUFWLENBQUwsRUFBb0I7QUFDbEIsWUFBTSxJQUFJelIsS0FBSixDQUFVLG1EQUFtRHlSLEVBQTdELENBQU47QUFDRDtBQUNGOztBQUVELFdBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU9BLE9BQU9BLElBQUlDLFdBQUosQ0FBZ0IsTUFBaEIsRUFBdUIsQ0FBdkIsS0FBNkIsQ0FBcEMsSUFBeUNELElBQUlDLFdBQUosQ0FBZ0JuTCxPQUFPb0wsUUFBUCxDQUFnQkMsSUFBaEMsS0FBeUMsQ0FBQyxDQUExRjtBQUNEOztBQUVELFdBQVNDLFlBQVQsQ0FBc0JOLEVBQXRCLEVBQTBCMVEsUUFBMUIsRUFBb0M7QUFDbEN5USxtQkFBZUMsRUFBZjs7QUFFQSxRQUFJTyxTQUFTUCxHQUFHUSxnQkFBSCxDQUFvQixPQUFwQixDQUFiO0FBQUEsUUFDSTFYLE9BQU95WCxPQUFPN1YsTUFEbEI7QUFBQSxRQUVJK1YsWUFBWSxTQUFaQSxTQUFZLEdBQVc7QUFDckIsVUFBSTNYLFNBQVMsQ0FBYixFQUFnQjtBQUNkd0c7QUFDRDtBQUNGLEtBTkw7O0FBUUFtUjtBQUNBLFNBQUssSUFBSXBULElBQUksQ0FBYixFQUFnQkEsSUFBSWtULE9BQU83VixNQUEzQixFQUFtQzJDLEdBQW5DLEVBQXdDO0FBQ3RDLE9BQUMsVUFBU3FULEtBQVQsRUFBZ0I7QUFDZixZQUFJQyxPQUFPRCxNQUFNRSxjQUFOLENBQXFCLDhCQUFyQixFQUFxRCxNQUFyRCxDQUFYO0FBQ0EsWUFBSUQsSUFBSixFQUFVO0FBQ1IsY0FBSVYsV0FBV1UsS0FBSy9XLEtBQWhCLENBQUosRUFBNEI7QUFDMUJnRixvQkFBUW1ELElBQVIsQ0FBYSw4REFBNEQ0TyxLQUFLL1csS0FBOUU7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxZQUFJMkIsU0FBU3NWLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFlBQUlDLE1BQU14VixPQUFPeVYsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsWUFBSUMsTUFBTSxJQUFJQyxLQUFKLEVBQVY7QUFDQUQsWUFBSUUsV0FBSixHQUFnQixXQUFoQjtBQUNBUixlQUFPQSxRQUFRRCxNQUFNVSxZQUFOLENBQW1CLE1BQW5CLENBQWY7QUFDQSxZQUFJVCxJQUFKLEVBQVU7QUFDUk0sY0FBSUksR0FBSixHQUFVVixJQUFWO0FBQ0FNLGNBQUlLLE1BQUosR0FBYSxZQUFXO0FBQ3RCL1YsbUJBQU94QyxLQUFQLEdBQWVrWSxJQUFJbFksS0FBbkI7QUFDQXdDLG1CQUFPbkMsTUFBUCxHQUFnQjZYLElBQUk3WCxNQUFwQjtBQUNBMlgsZ0JBQUlRLFNBQUosQ0FBY04sR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBUCxrQkFBTWMsY0FBTixDQUFxQiw4QkFBckIsRUFBcUQsTUFBckQsRUFBNkRqVyxPQUFPa1csU0FBUCxDQUFpQixXQUFqQixDQUE3RDtBQUNBM1k7QUFDQTJYO0FBQ0QsV0FQRDtBQVFBUSxjQUFJUyxPQUFKLEdBQWMsWUFBVztBQUN2QjlTLG9CQUFRTixHQUFSLENBQVksb0JBQWtCcVMsSUFBOUI7QUFDQTdYO0FBQ0EyWDtBQUNELFdBSkQ7QUFLRCxTQWZELE1BZU87QUFDTDNYO0FBQ0EyWDtBQUNEO0FBQ0YsT0FoQ0QsRUFnQ0dGLE9BQU9sVCxDQUFQLENBaENIO0FBaUNEO0FBQ0Y7O0FBRUQsV0FBU3NVLE1BQVQsQ0FBZ0IzQixFQUFoQixFQUFvQnRZLE9BQXBCLEVBQTZCa2EsaUJBQTdCLEVBQWdEO0FBQzlDLFFBQUlDLGdCQUFnQm5hLFFBQVFtYSxhQUE1QjtBQUNBLFFBQUlDLGNBQWNwYSxRQUFRb2EsV0FBMUI7QUFDQSxRQUFJQyxNQUFNLEVBQVY7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsYUFBYSxFQUFqQjtBQUNBLFFBQUlDLFNBQVNwQixTQUFTcUIsV0FBdEI7QUFDQSxTQUFLLElBQUk3VSxJQUFJLENBQWIsRUFBZ0JBLElBQUk0VSxPQUFPdlgsTUFBM0IsRUFBbUMyQyxHQUFuQyxFQUF3QztBQUN0QyxVQUFJO0FBQ0YsWUFBSThVLFFBQVFGLE9BQU81VSxDQUFQLEVBQVUrVSxRQUF0QjtBQUNELE9BRkQsQ0FFRSxPQUFPdFEsQ0FBUCxFQUFVO0FBQ1ZsRCxnQkFBUW1ELElBQVIsQ0FBYSxxQ0FBbUNrUSxPQUFPNVUsQ0FBUCxFQUFVc1QsSUFBMUQ7QUFDQTtBQUNEOztBQUVELFVBQUl3QixTQUFTLElBQWIsRUFBbUI7QUFDakIsYUFBSyxJQUFJRSxJQUFJLENBQVIsRUFBV3BPLEtBQWhCLEVBQXVCb08sSUFBSUYsTUFBTXpYLE1BQWpDLEVBQXlDMlgsS0FBS3BPLFFBQVEsSUFBdEQsRUFBNEQ7QUFDMUQsY0FBSXFPLE9BQU9ILE1BQU1FLENBQU4sQ0FBWDtBQUNBLGNBQUksT0FBT0MsS0FBSzVWLEtBQVosSUFBc0IsV0FBMUIsRUFBdUM7QUFDckMsZ0JBQUk2VixZQUFKOztBQUVBLGdCQUFJO0FBQ0ZBLDZCQUFlRCxLQUFLQyxZQUFwQjtBQUNELGFBRkQsQ0FFRSxPQUFNQyxHQUFOLEVBQVc7QUFDWDVULHNCQUFRbUQsSUFBUixDQUFhLHNEQUFzRHVRLElBQXRELEdBQTZELEdBQTFFLEVBQStFRSxHQUEvRTtBQUNEOztBQUVELGdCQUFJO0FBQ0Ysa0JBQUlELFlBQUosRUFBa0I7QUFDaEJ0Tyx3QkFBUStMLEdBQUd5QyxhQUFILENBQWlCRixZQUFqQixLQUFrQ3ZDLEdBQUd0WCxVQUFILENBQWMrWixhQUFkLENBQTRCRixZQUE1QixDQUExQztBQUNEO0FBQ0YsYUFKRCxDQUlFLE9BQU1DLEdBQU4sRUFBVztBQUNYNVQsc0JBQVFtRCxJQUFSLENBQWEsMkJBQTJCd1EsWUFBM0IsR0FBMEMsR0FBdkQsRUFBNERDLEdBQTVEO0FBQ0Q7O0FBRUQsZ0JBQUl2TyxLQUFKLEVBQVc7QUFDVCxrQkFBSXlPLFdBQVdiLGdCQUFnQkEsY0FBY1MsS0FBS0MsWUFBbkIsQ0FBaEIsR0FBbURELEtBQUtDLFlBQXZFO0FBQ0Esa0JBQUlJLFVBQVViLGNBQWNBLFlBQVlRLEtBQUs1VixLQUFMLENBQVdpVyxPQUF2QixDQUFkLEdBQWdETCxLQUFLNVYsS0FBTCxDQUFXaVcsT0FBekU7QUFDQVoscUJBQU9XLFdBQVcsS0FBWCxHQUFtQkMsT0FBbkIsR0FBNkIsTUFBcEM7QUFDRCxhQUpELE1BSU8sSUFBR0wsS0FBS0ssT0FBTCxDQUFhMU8sS0FBYixDQUFtQixhQUFuQixDQUFILEVBQXNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQUkyTyxnQkFBZ0Isd0JBQXBCO0FBQ0E7QUFDQSxrQkFBSUMsZUFBZVAsS0FBS0ssT0FBTCxDQUFhMU8sS0FBYixDQUFtQjJPLGFBQW5CLENBQW5COztBQUVBLGtCQUFJRSxrQkFBbUJELGdCQUFnQkEsYUFBYSxDQUFiLENBQWpCLElBQXFDLEVBQTNEO0FBQ0Esa0JBQUlFLG1CQUFtQkQsZ0JBQWdCN08sS0FBaEIsQ0FBc0IsUUFBdEIsQ0FBdkI7QUFDQSxrQkFBSThPLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQ0FELGtDQUFrQixFQUFsQjtBQUNEOztBQUVELGtCQUFJQSxlQUFKLEVBQXFCO0FBQ25COztBQUVBO0FBQ0Esb0JBQUlBLGdCQUFnQkUsVUFBaEIsQ0FBMkIsS0FBM0IsQ0FBSixFQUF1QztBQUNyQ0Ysb0NBQWtCYixPQUFPNVUsQ0FBUCxFQUFVc1QsSUFBVixHQUFpQixNQUFqQixHQUEwQm1DLGVBQTVDO0FBQ0QsaUJBRkQsTUFFTyxJQUFJQSxnQkFBZ0JFLFVBQWhCLENBQTJCLElBQTNCLENBQUosRUFBc0M7QUFDM0NGLG9DQUFrQmIsT0FBTzVVLENBQVAsRUFBVXNULElBQVYsR0FBaUIsSUFBakIsR0FBd0JtQyxlQUExQztBQUNEOztBQUVEZCwyQkFBVzlULElBQVgsQ0FBZ0I7QUFDZHZCLHdCQUFNMlYsS0FBS0ssT0FERztBQUVkO0FBQ0FDLGlDQUFlQSxhQUhEO0FBSWRLLDBCQUFRQyx1QkFBdUJKLGVBQXZCLENBSk07QUFLZDVDLHVCQUFLNEM7QUFMUyxpQkFBaEI7QUFPRCxlQWpCRCxNQWlCTztBQUNMO0FBQ0FmLHVCQUFPTyxLQUFLSyxPQUFMLEdBQWUsSUFBdEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQVEscUJBQWlCbkIsVUFBakI7O0FBRUEsYUFBU2tCLHNCQUFULENBQWdDRSxPQUFoQyxFQUF5QztBQUN2QyxVQUFJQyxtQkFBbUI7QUFDckIsaUJBQVMsWUFEWTtBQUVyQixnQkFBUSxXQUZhO0FBR3JCLGVBQU8sNkJBSGM7QUFJckIsZUFBTyx3QkFKYztBQUtyQixlQUFPLCtCQUxjO0FBTXJCLGdCQUFRLHVCQU5hO0FBT3JCLGVBQU87QUFQYyxPQUF2QjtBQVNBLFVBQUlDLGFBQWEzWSxPQUFPYyxJQUFQLENBQVk0WCxnQkFBWixDQUFqQjtBQUNBLFdBQUssSUFBSWhXLElBQUksQ0FBYixFQUFnQkEsSUFBSWlXLFdBQVc1WSxNQUEvQixFQUF1QyxFQUFFMkMsQ0FBekMsRUFBNEM7QUFDMUMsWUFBSWtXLFlBQVlELFdBQVdqVyxDQUFYLENBQWhCO0FBQ0E7QUFDQSxZQUFJK1YsUUFBUUksT0FBUixDQUFnQixNQUFNRCxTQUF0QixJQUFtQyxDQUF2QyxFQUEwQztBQUN4QyxpQkFBT0YsaUJBQWlCRSxTQUFqQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBM1UsY0FBUUksS0FBUixDQUFjLDZCQUE2Qm9VLE9BQTdCLEdBQXNDLHNDQUFwRDtBQUNBLGFBQU8sMEJBQVA7QUFDRDs7QUFFRCxhQUFTRCxnQkFBVCxDQUEwQk0sS0FBMUIsRUFBaUM7QUFDL0IsVUFBSUEsTUFBTS9ZLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQjtBQUNBLFlBQUl1RyxPQUFPd1MsTUFBTUMsR0FBTixFQUFYO0FBQ0FDLG9CQUFZMVMsSUFBWjtBQUNELE9BSkQsTUFJTztBQUNMO0FBQ0EyUSwwQkFBa0JHLEdBQWxCO0FBQ0Q7O0FBRUQsZUFBUzRCLFdBQVQsQ0FBcUIxUyxJQUFyQixFQUEyQjtBQUN6QjtBQUNBLFlBQUkyUyxPQUFPLElBQUlDLGNBQUosRUFBWDtBQUNBRCxhQUFLRSxnQkFBTCxDQUFzQixNQUF0QixFQUE4QkMsVUFBOUI7QUFDQUgsYUFBS0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JFLGNBQS9CO0FBQ0FKLGFBQUtFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRSxjQUEvQjtBQUNBSixhQUFLSyxJQUFMLENBQVUsS0FBVixFQUFpQmhULEtBQUtpUCxHQUF0QjtBQUNBMEQsYUFBS00sWUFBTCxHQUFvQixhQUFwQjtBQUNBTixhQUFLTyxJQUFMOztBQUVBLGlCQUFTSixVQUFULEdBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxjQUFJSyxXQUFXUixLQUFLUyxRQUFwQjtBQUNBLGNBQUlDLGVBQWVDLG9CQUFvQkgsUUFBcEIsQ0FBbkI7QUFDQUksMEJBQWdCdlQsSUFBaEIsRUFBc0JxVCxZQUF0QjtBQUNEOztBQUVELGlCQUFTTixjQUFULENBQXdCbFMsQ0FBeEIsRUFBMkI7QUFDekJsRCxrQkFBUW1ELElBQVIsQ0FBYSwrQkFBK0JkLEtBQUtpUCxHQUFqRDtBQUNBdFIsa0JBQVFtRCxJQUFSLENBQWFELENBQWI7QUFDQWlRLGlCQUFPOVEsS0FBS3RFLElBQUwsR0FBWSxJQUFuQjtBQUNBd1c7QUFDRDs7QUFFRCxpQkFBU3FCLGVBQVQsQ0FBeUJ2VCxJQUF6QixFQUErQnFULFlBQS9CLEVBQTZDO0FBQzNDLGNBQUlHLFVBQVUsZUFBZXhULEtBQUtnUyxNQUFwQixHQUE2QixVQUE3QixHQUEwQ3FCLFlBQTFDLEdBQXlELElBQXZFO0FBQ0F2QyxpQkFBTzlRLEtBQUt0RSxJQUFMLENBQVVxSCxPQUFWLENBQWtCL0MsS0FBSzJSLGFBQXZCLEVBQXNDNkIsT0FBdEMsSUFBaUQsSUFBeEQ7O0FBRUE7QUFDQWhULHFCQUFXLFlBQVc7QUFDcEIwUiw2QkFBaUJNLEtBQWpCO0FBQ0QsV0FGRCxFQUVHLENBRkg7QUFHRDtBQUVGO0FBQ0Y7O0FBRUQsYUFBU2MsbUJBQVQsQ0FBNkJHLE1BQTdCLEVBQXFDO0FBQ25DLFVBQUlDLFNBQVMsRUFBYjtBQUNBLFVBQUlDLFFBQVEsSUFBSUMsVUFBSixDQUFlSCxNQUFmLENBQVo7QUFDQSxVQUFJSSxNQUFNRixNQUFNRyxVQUFoQjs7QUFFQSxXQUFLLElBQUkxWCxJQUFJLENBQWIsRUFBZ0JBLElBQUl5WCxHQUFwQixFQUF5QnpYLEdBQXpCLEVBQThCO0FBQzFCc1gsa0JBQVVLLE9BQU9DLFlBQVAsQ0FBb0JMLE1BQU12WCxDQUFOLENBQXBCLENBQVY7QUFDSDs7QUFFRCxhQUFPMkgsT0FBT2tRLElBQVAsQ0FBWVAsTUFBWixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTUSxZQUFULENBQXNCbkYsRUFBdEIsRUFBMEJvRixLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcEMsUUFBSUMsSUFBS3RGLEdBQUd1RixPQUFILElBQWN2RixHQUFHdUYsT0FBSCxDQUFXQyxPQUF6QixJQUFvQ3hGLEdBQUd1RixPQUFILENBQVdDLE9BQVgsQ0FBbUJILEdBQW5CLENBQXJDLElBQ0xELE1BQU1oRSxZQUFOLENBQW1CaUUsR0FBbkIsTUFBNEIsSUFBNUIsSUFBb0MsQ0FBQ0QsTUFBTWhFLFlBQU4sQ0FBbUJpRSxHQUFuQixFQUF3QnBSLEtBQXhCLENBQThCLElBQTlCLENBQXJDLElBQTRFd1IsU0FBU0wsTUFBTWhFLFlBQU4sQ0FBbUJpRSxHQUFuQixDQUFULENBRHZFLElBRU5yRixHQUFHOVcscUJBQUgsR0FBMkJtYyxHQUEzQixDQUZNLElBR05JLFNBQVNMLE1BQU0xWSxLQUFOLENBQVkyWSxHQUFaLENBQVQsQ0FITSxJQUlOSSxTQUFTelEsT0FBTzBRLGdCQUFQLENBQXdCMUYsRUFBeEIsRUFBNEIyRixnQkFBNUIsQ0FBNkNOLEdBQTdDLENBQVQsQ0FKRjtBQUtBLFdBQVEsT0FBT0MsQ0FBUCxLQUFhLFdBQWIsSUFBNEJBLE1BQU0sSUFBbEMsSUFBMENNLE1BQU1DLFdBQVdQLENBQVgsQ0FBTixDQUEzQyxHQUFtRSxDQUFuRSxHQUF1RUEsQ0FBOUU7QUFDRDs7QUFFRCxXQUFTUSxRQUFULENBQWtCL2IsSUFBbEIsRUFBd0I7QUFDdEJBLFdBQU9nYyxtQkFBbUJoYyxJQUFuQixDQUFQO0FBQ0FBLFdBQU9BLEtBQUtpSyxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsVUFBU0MsS0FBVCxFQUFnQitSLEVBQWhCLEVBQW9CO0FBQ3pELFVBQUlwUyxJQUFJb1IsT0FBT0MsWUFBUCxDQUFvQixPQUFLZSxFQUF6QixDQUFSO0FBQ0EsYUFBT3BTLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0JBLENBQTNCO0FBQ0QsS0FITSxDQUFQO0FBSUEsV0FBT3FTLG1CQUFtQmxjLElBQW5CLENBQVA7QUFDRDs7QUFFRDJWLE9BQUt3RyxVQUFMLEdBQWtCLFVBQVNsRyxFQUFULEVBQWF0WSxPQUFiLEVBQXNCbUksRUFBdEIsRUFBMEI7QUFDMUNrUSxtQkFBZUMsRUFBZjs7QUFFQXRZLGNBQVVBLFdBQVcsRUFBckI7QUFDQUEsWUFBUTRPLEtBQVIsR0FBZ0I1TyxRQUFRNE8sS0FBUixJQUFpQixDQUFqQztBQUNBNU8sWUFBUXllLFVBQVIsR0FBcUJ6ZSxRQUFReWUsVUFBUixJQUFzQixLQUEzQztBQUNBLFFBQUlDLFFBQVEsK0JBQVo7O0FBRUE5RixpQkFBYU4sRUFBYixFQUFpQixZQUFXO0FBQzFCLFVBQUlxRyxRQUFReEYsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsVUFBSXNFLFFBQVFwRixHQUFHc0csU0FBSCxDQUFhLElBQWIsQ0FBWjtBQUNBLFVBQUl2ZCxLQUFKLEVBQVdLLE1BQVg7QUFDQSxVQUFHNFcsR0FBRzFYLE9BQUgsSUFBYyxLQUFqQixFQUF3QjtBQUN0QlMsZ0JBQVFyQixRQUFRcUIsS0FBUixJQUFpQm9jLGFBQWFuRixFQUFiLEVBQWlCb0YsS0FBakIsRUFBd0IsT0FBeEIsQ0FBekI7QUFDQWhjLGlCQUFTMUIsUUFBUTBCLE1BQVIsSUFBa0IrYixhQUFhbkYsRUFBYixFQUFpQm9GLEtBQWpCLEVBQXdCLFFBQXhCLENBQTNCO0FBQ0QsT0FIRCxNQUdPLElBQUdwRixHQUFHakosT0FBTixFQUFlO0FBQ3BCLFlBQUl3UCxNQUFNdkcsR0FBR2pKLE9BQUgsRUFBVjtBQUNBaE8sZ0JBQVF3ZCxJQUFJMWEsQ0FBSixHQUFRMGEsSUFBSXhkLEtBQXBCO0FBQ0FLLGlCQUFTbWQsSUFBSXphLENBQUosR0FBUXlhLElBQUluZCxNQUFyQjtBQUNBZ2MsY0FBTW9CLFlBQU4sQ0FBbUIsV0FBbkIsRUFBZ0NwQixNQUFNaEUsWUFBTixDQUFtQixXQUFuQixFQUFnQ3BOLE9BQWhDLENBQXdDLGtCQUF4QyxFQUE0RCxFQUE1RCxDQUFoQzs7QUFFQSxZQUFJeVMsTUFBTTVGLFNBQVM2RixlQUFULENBQXlCLDRCQUF6QixFQUFzRCxLQUF0RCxDQUFWO0FBQ0FELFlBQUlFLFdBQUosQ0FBZ0J2QixLQUFoQjtBQUNBQSxnQkFBUXFCLEdBQVI7QUFDRCxPQVRNLE1BU0E7QUFDTDdYLGdCQUFRSSxLQUFSLENBQWMscUNBQWQsRUFBcURnUixFQUFyRDtBQUNBO0FBQ0Q7O0FBRURvRixZQUFNb0IsWUFBTixDQUFtQixTQUFuQixFQUE4QixLQUE5QjtBQUNBLFVBQUksQ0FBQ3BCLE1BQU1oRSxZQUFOLENBQW1CLE9BQW5CLENBQUwsRUFBa0M7QUFDaENnRSxjQUFNNUQsY0FBTixDQUFxQjRFLEtBQXJCLEVBQTRCLE9BQTVCLEVBQXFDLDRCQUFyQztBQUNEO0FBQ0QsVUFBSSxDQUFDaEIsTUFBTWhFLFlBQU4sQ0FBbUIsYUFBbkIsQ0FBTCxFQUF3QztBQUN0Q2dFLGNBQU01RCxjQUFOLENBQXFCNEUsS0FBckIsRUFBNEIsYUFBNUIsRUFBMkMsOEJBQTNDO0FBQ0Q7O0FBRUQsVUFBSTFlLFFBQVF5ZSxVQUFaLEVBQXdCO0FBQ3RCZixjQUFNd0IsZUFBTixDQUFzQixPQUF0QjtBQUNBeEIsY0FBTXdCLGVBQU4sQ0FBc0IsUUFBdEI7QUFDQXhCLGNBQU1vQixZQUFOLENBQW1CLHFCQUFuQixFQUEwQyxlQUExQztBQUNELE9BSkQsTUFJTztBQUNMcEIsY0FBTW9CLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEJ6ZCxRQUFRckIsUUFBUTRPLEtBQTVDO0FBQ0E4TyxjQUFNb0IsWUFBTixDQUFtQixRQUFuQixFQUE2QnBkLFNBQVMxQixRQUFRNE8sS0FBOUM7QUFDRDs7QUFFRDhPLFlBQU1vQixZQUFOLENBQW1CLFNBQW5CLEVBQThCLENBQzVCOWUsUUFBUW9CLElBQVIsSUFBZ0IsQ0FEWSxFQUU1QnBCLFFBQVFpQixHQUFSLElBQWUsQ0FGYSxFQUc1QkksS0FINEIsRUFJNUJLLE1BSjRCLEVBSzVCeWQsSUFMNEIsQ0FLdkIsR0FMdUIsQ0FBOUI7O0FBT0EsVUFBSUMsTUFBTTFCLE1BQU01RSxnQkFBTixDQUF1QixtQkFBdkIsQ0FBVjtBQUNBLFdBQUssSUFBSW5ULElBQUksQ0FBYixFQUFnQkEsSUFBSXlaLElBQUlwYyxNQUF4QixFQUFnQzJDLEdBQWhDLEVBQXFDO0FBQ25DLFlBQUksQ0FBQ3laLElBQUl6WixDQUFKLEVBQU8rVCxZQUFQLENBQW9CLE9BQXBCLENBQUwsRUFBbUM7QUFDakMwRixjQUFJelosQ0FBSixFQUFPbVUsY0FBUCxDQUFzQjRFLEtBQXRCLEVBQTZCLE9BQTdCLEVBQXNDLDhCQUF0QztBQUNEO0FBQ0Y7O0FBRURDLFlBQU1NLFdBQU4sQ0FBa0J2QixLQUFsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBekQsYUFBTzNCLEVBQVAsRUFBV3RZLE9BQVgsRUFBb0JrYSxpQkFBcEI7O0FBRUEsZUFBU0EsaUJBQVQsQ0FBMkJHLEdBQTNCLEVBQWdDO0FBQzlCO0FBQ0EsWUFBSTFJLElBQUl3SCxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFDQXpILFVBQUVtTixZQUFGLENBQWUsTUFBZixFQUF1QixVQUF2QjtBQUNBbk4sVUFBRTBOLFNBQUYsR0FBYyxnQkFBZ0JoRixHQUFoQixHQUFzQixPQUFwQztBQUNBLFlBQUlpRixPQUFPbkcsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0FrRyxhQUFLTCxXQUFMLENBQWlCdE4sQ0FBakI7QUFDQStMLGNBQU02QixZQUFOLENBQW1CRCxJQUFuQixFQUF5QjVCLE1BQU04QixVQUEvQjs7QUFFQSxZQUFJclgsRUFBSixFQUFRO0FBQ04sY0FBSXNYLFVBQVVkLE1BQU1VLFNBQXBCO0FBQ0FJLG9CQUFVQSxRQUFRblQsT0FBUixDQUFnQixjQUFoQixFQUFnQyx1REFBaEMsQ0FBVjtBQUNBbkUsYUFBR3NYLE9BQUgsRUFBWXBlLEtBQVosRUFBbUJLLE1BQW5CO0FBQ0Q7QUFDRjtBQUNGLEtBM0VEO0FBNEVELEdBcEZEOztBQXNGQXNXLE9BQUswSCxZQUFMLEdBQW9CLFVBQVNwSCxFQUFULEVBQWF0WSxPQUFiLEVBQXNCbUksRUFBdEIsRUFBMEI7QUFDNUM2UCxTQUFLd0csVUFBTCxDQUFnQmxHLEVBQWhCLEVBQW9CdFksT0FBcEIsRUFBNkIsVUFBUytlLEdBQVQsRUFBYztBQUN6QyxVQUFJWSxNQUFNLCtCQUErQnJTLE9BQU9rUSxJQUFQLENBQVlZLFNBQVNuRyxVQUFVOEcsR0FBbkIsQ0FBWixDQUF6QztBQUNBLFVBQUk1VyxFQUFKLEVBQVE7QUFDTkEsV0FBR3dYLEdBQUg7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVBEOztBQVNBM0gsT0FBSzRILFdBQUwsR0FBbUIsVUFBU3RILEVBQVQsRUFBYXRZLE9BQWIsRUFBc0JtSSxFQUF0QixFQUEwQjtBQUMzQ2tRLG1CQUFlQyxFQUFmOztBQUVBdFksY0FBVUEsV0FBVyxFQUFyQjtBQUNBQSxZQUFRNmYsV0FBUixHQUFzQjdmLFFBQVE2ZixXQUFSLElBQXVCLFdBQTdDO0FBQ0E3ZixZQUFROGYsY0FBUixHQUF5QjlmLFFBQVE4ZixjQUFSLElBQTBCLEdBQW5EOztBQUVBLFFBQUlDLGVBQWUsU0FBZkEsWUFBZSxDQUFTcEcsR0FBVCxFQUFjcUcsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFDckMsVUFBSXBjLFNBQVNzVixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxVQUFJOEcsVUFBVXJjLE9BQU95VixVQUFQLENBQWtCLElBQWxCLENBQWQ7QUFDQXpWLGFBQU94QyxLQUFQLEdBQWUyZSxDQUFmO0FBQ0FuYyxhQUFPbkMsTUFBUCxHQUFnQnVlLENBQWhCOztBQUVBLFVBQUdqZ0IsUUFBUW1nQixLQUFYLEVBQWtCO0FBQ2hCbmdCLGdCQUFRbWdCLEtBQVIsQ0FBY3RjLE1BQWQsRUFBc0I4VixHQUF0QjtBQUNELE9BRkQsTUFFTztBQUNMdUcsZ0JBQVFyRyxTQUFSLENBQWtCRixHQUFsQixFQUF1QixDQUF2QixFQUEwQixDQUExQjtBQUNEOztBQUVELFVBQUczWixRQUFRb2dCLGVBQVgsRUFBMkI7QUFDekJGLGdCQUFRRyx3QkFBUixHQUFtQyxrQkFBbkM7QUFDQUgsZ0JBQVFJLFNBQVIsR0FBb0J0Z0IsUUFBUW9nQixlQUE1QjtBQUNBRixnQkFBUUssUUFBUixDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QjFjLE9BQU94QyxLQUE5QixFQUFxQ3dDLE9BQU9uQyxNQUE1QztBQUNEOztBQUVELFVBQUk4ZSxHQUFKO0FBQ0EsVUFBSTtBQUNGQSxjQUFNM2MsT0FBT2tXLFNBQVAsQ0FBaUIvWixRQUFRNmYsV0FBekIsRUFBc0M3ZixRQUFROGYsY0FBOUMsQ0FBTjtBQUNELE9BRkQsQ0FFRSxPQUFPMVYsQ0FBUCxFQUFVO0FBQ1YsWUFBSyxPQUFPcVcsYUFBUCxLQUF5QixXQUF6QixJQUF3Q3JXLGFBQWFxVyxhQUF0RCxJQUF3RXJXLEVBQUVySSxJQUFGLElBQVUsZUFBdEYsRUFBdUc7QUFDckdtRixrQkFBUUksS0FBUixDQUFjLDJEQUFkO0FBQ0E7QUFDRCxTQUhELE1BR087QUFDTCxnQkFBTThDLENBQU47QUFDRDtBQUNGO0FBQ0RqQyxTQUFHcVksR0FBSDtBQUNELEtBOUJEOztBQWdDQSxRQUFHeGdCLFFBQVFtZ0IsS0FBWCxFQUFrQjtBQUNoQm5JLFdBQUt3RyxVQUFMLENBQWdCbEcsRUFBaEIsRUFBb0J0WSxPQUFwQixFQUE2QitmLFlBQTdCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wvSCxXQUFLMEgsWUFBTCxDQUFrQnBILEVBQWxCLEVBQXNCdFksT0FBdEIsRUFBK0IsVUFBUzJmLEdBQVQsRUFBYztBQUMzQyxZQUFJM0csUUFBUSxJQUFJUSxLQUFKLEVBQVo7O0FBRUFSLGNBQU1ZLE1BQU4sR0FBZSxZQUFXO0FBQ3hCbUcsdUJBQWEvRyxLQUFiLEVBQW9CQSxNQUFNM1gsS0FBMUIsRUFBaUMyWCxNQUFNdFgsTUFBdkM7QUFDRCxTQUZEOztBQUlBc1gsY0FBTWdCLE9BQU4sR0FBZ0IsWUFBVztBQUN6QjlTLGtCQUFRSSxLQUFSLENBQ0UsNEVBREYsRUFFRWdHLE9BQU9vVCxJQUFQLENBQVlmLElBQUluYSxLQUFKLENBQVUsRUFBVixDQUFaLENBRkYsRUFFOEIsSUFGOUIsRUFHRSxzREFIRixFQUlFbWEsR0FKRjtBQUtELFNBTkQ7O0FBUUEzRyxjQUFNVyxHQUFOLEdBQVlnRyxHQUFaO0FBQ0QsT0FoQkQ7QUFpQkQ7QUFDRixHQTVERDs7QUE4REEzSCxPQUFLMkksUUFBTCxHQUFnQixVQUFTNWUsSUFBVCxFQUFlNGQsR0FBZixFQUFvQjtBQUNsQyxRQUFJaUIsVUFBVUMsZ0JBQWQsRUFBZ0M7QUFDOUJELGdCQUFVQyxnQkFBVixDQUEyQkMsVUFBVW5CLEdBQVYsQ0FBM0IsRUFBMkM1ZCxJQUEzQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlnZixXQUFXNUgsU0FBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0EsVUFBSTRILG9CQUFvQixjQUFjRCxRQUF0QztBQUNBLFVBQUlDLGlCQUFKLEVBQXVCO0FBQ3JCRCxpQkFBU0osUUFBVCxHQUFvQjVlLElBQXBCO0FBQ0FnZixpQkFBUy9iLEtBQVQsQ0FBZWljLE9BQWYsR0FBeUIsTUFBekI7QUFDQTlILGlCQUFTK0gsSUFBVCxDQUFjakMsV0FBZCxDQUEwQjhCLFFBQTFCO0FBQ0EsWUFBSTtBQUNGLGNBQUlJLE9BQU9MLFVBQVVuQixHQUFWLENBQVg7QUFDQSxjQUFJbkgsTUFBTTRJLElBQUlDLGVBQUosQ0FBb0JGLElBQXBCLENBQVY7QUFDQUosbUJBQVM5SCxJQUFULEdBQWdCVCxHQUFoQjtBQUNBdUksbUJBQVNPLE9BQVQsR0FBbUIsWUFBVztBQUM1QkMsa0NBQXNCLFlBQVc7QUFDL0JILGtCQUFJSSxlQUFKLENBQW9CaEosR0FBcEI7QUFDRCxhQUZEO0FBR0QsV0FKRDtBQUtELFNBVEQsQ0FTRSxPQUFPcE8sQ0FBUCxFQUFVO0FBQ1ZsRCxrQkFBUW1ELElBQVIsQ0FBYSx3RUFBYjtBQUNBMFcsbUJBQVM5SCxJQUFULEdBQWdCMEcsR0FBaEI7QUFDRDtBQUNEb0IsaUJBQVMzTyxLQUFUO0FBQ0ErRyxpQkFBUytILElBQVQsQ0FBY08sV0FBZCxDQUEwQlYsUUFBMUI7QUFDRCxPQW5CRCxNQW9CSztBQUNIelQsZUFBT2lQLElBQVAsQ0FBWW9ELEdBQVosRUFBaUIsT0FBakIsRUFBMEIsaUNBQTFCO0FBQ0Q7QUFDRjtBQUNGLEdBOUJEOztBQWdDQSxXQUFTbUIsU0FBVCxDQUFtQm5CLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQUkrQixhQUFhcFUsT0FBT29ULElBQVAsQ0FBWWYsSUFBSS9jLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFaLENBQWpCO0FBQ0EsUUFBSStlLGFBQWFoQyxJQUFJL2MsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCQSxLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixFQUFnQ0EsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkMsQ0FBM0MsQ0FBakI7QUFDQSxRQUFJb2EsU0FBUyxJQUFJNEUsV0FBSixDQUFnQkYsV0FBVzFlLE1BQTNCLENBQWI7QUFDQSxRQUFJNmUsV0FBVyxJQUFJMUUsVUFBSixDQUFlSCxNQUFmLENBQWY7QUFDQSxTQUFLLElBQUlyWCxJQUFJLENBQWIsRUFBZ0JBLElBQUkrYixXQUFXMWUsTUFBL0IsRUFBdUMyQyxHQUF2QyxFQUE0QztBQUMxQ2tjLGVBQVNsYyxDQUFULElBQWMrYixXQUFXSSxVQUFYLENBQXNCbmMsQ0FBdEIsQ0FBZDtBQUNEO0FBQ0QsV0FBTyxJQUFJb2MsSUFBSixDQUFTLENBQUMvRSxNQUFELENBQVQsRUFBbUIsRUFBQzFVLE1BQU1xWixVQUFQLEVBQW5CLENBQVA7QUFDRDs7QUFFRDNKLE9BQUtnSyxPQUFMLEdBQWUsVUFBUzFKLEVBQVQsRUFBYXZXLElBQWIsRUFBbUIvQixPQUFuQixFQUE0QjtBQUN6Q3FZLG1CQUFlQyxFQUFmOztBQUVBdFksY0FBVUEsV0FBVyxFQUFyQjtBQUNBZ1ksU0FBSzBILFlBQUwsQ0FBa0JwSCxFQUFsQixFQUFzQnRZLE9BQXRCLEVBQStCLFVBQVMyZixHQUFULEVBQWM7QUFDM0MzSCxXQUFLMkksUUFBTCxDQUFjNWUsSUFBZCxFQUFvQjRkLEdBQXBCO0FBQ0QsS0FGRDtBQUdELEdBUEQ7O0FBU0EzSCxPQUFLSCxZQUFMLEdBQW9CLFVBQVNTLEVBQVQsRUFBYXZXLElBQWIsRUFBbUIvQixPQUFuQixFQUE0QjtBQUM5Q3FZLG1CQUFlQyxFQUFmOztBQUVBdFksY0FBVUEsV0FBVyxFQUFyQjtBQUNBZ1ksU0FBSzRILFdBQUwsQ0FBaUJ0SCxFQUFqQixFQUFxQnRZLE9BQXJCLEVBQThCLFVBQVMyZixHQUFULEVBQWM7QUFDMUMzSCxXQUFLMkksUUFBTCxDQUFjNWUsSUFBZCxFQUFvQjRkLEdBQXBCO0FBQ0QsS0FGRDtBQUdELEdBUEQ7O0FBU0E7QUFDQSxNQUFJLElBQUosRUFBbUM7QUFDakNzQyxJQUFBLG1DQUFPLFlBQVc7QUFDaEIsYUFBT2pLLElBQVA7QUFDRCxLQUZEO0FBQUE7QUFHRDtBQUVGLENBcmVELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQmtLLE8sV0FNbEIsNkJBQVMsaUJBQVQsQzs7O0FBSkQseUJBQTREO0FBQUEsNEJBQTlDcmlCLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFVBQUlpSSxXQUFXL0UsT0FBT2MsSUFBUCxDQUFZLEtBQUsxQixJQUFMLENBQVV3QixNQUFWLENBQWlCbUUsUUFBN0IsRUFBdUMvQixHQUF2QyxDQUEyQyxVQUFDN0MsR0FBRCxFQUFTO0FBQ2pFLGVBQU87QUFDTHdHLGNBQUl4RyxHQURDO0FBRUxrRixnQkFBTSxPQUFLakcsSUFBTCxDQUFVd0IsTUFBVixDQUFpQm1FLFFBQWpCLENBQTBCNUUsR0FBMUIsRUFBK0JrRixJQUZoQztBQUdMcEQsaUJBQU8sT0FBSzdDLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJtRSxRQUFqQixDQUEwQjVFLEdBQTFCLEVBQStCOEIsS0FIakM7QUFJTEQsZ0JBQU0sT0FBSzVDLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJtRSxRQUFqQixDQUEwQjVFLEdBQTFCLEVBQStCNkI7QUFKaEMsU0FBUDtBQU1ELE9BUGMsQ0FBZjs7QUFTQSxVQUFJa2QseUJBQXVCLEtBQUs5ZixJQUFMLENBQVV3QixNQUFWLENBQWlCK0YsRUFBNUM7QUFDQSxXQUFLbkosT0FBTCxHQUFlSyxHQUFHQyxNQUFILE9BQWNvaEIsUUFBZCxDQUFmO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBSzFoQixPQUFMLENBQWFFLElBQWIsRUFBTCxFQUEwQjtBQUN4QixhQUFLRixPQUFMLEdBQWUsS0FBS2EsTUFBTCxDQUFZc0QsTUFBWixDQUFtQixLQUFuQixFQUEwQnJELElBQTFCLENBQStCLE9BQS9CLEVBQXdDLHVCQUF4QyxFQUFpRUEsSUFBakUsQ0FBc0UsSUFBdEUsRUFBNEU0Z0IsUUFBNUUsQ0FBZjtBQUNEOztBQUVELFVBQUloYixVQUFVLEtBQUsxRyxPQUFMLENBQWFrRSxTQUFiLENBQXVCLGtCQUF2QixFQUEyQ3RDLElBQTNDLENBQWdEMkYsUUFBaEQsRUFBMEQ7QUFBQSxlQUFLdkQsRUFBRW1GLEVBQVA7QUFBQSxPQUExRCxDQUFkO0FBQ0EsVUFBSXdZLGVBQWVqYixRQUFRekIsS0FBUixHQUFnQmQsTUFBaEIsQ0FBdUIsS0FBdkIsRUFBOEJyRCxJQUE5QixDQUFtQyxJQUFuQyxFQUF5QztBQUFBLGVBQUtrRCxFQUFFbUYsRUFBUDtBQUFBLE9BQXpDLEVBQ2hCckksSUFEZ0IsQ0FDWCxPQURXLEVBQ0Y7QUFBQSx1Q0FBMkJrRCxFQUFFNkQsSUFBN0I7QUFBQSxPQURFLEVBQ21DUixFQURuQyxDQUNzQyxPQUR0QyxFQUMrQyxZQUFXO0FBQ3pFaEgsV0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JpRSxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELE9BSGdCLENBQW5CO0FBSUFvZCxtQkFBYXhkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJyRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRDBELElBQXBELENBQXlEO0FBQUEsZUFBS1IsRUFBRVMsS0FBUDtBQUFBLE9BQXpEO0FBQ0FrZCxtQkFBYXhkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJLLElBQTVCLENBQWlDO0FBQUEsZUFBS1IsRUFBRVEsSUFBUDtBQUFBLE9BQWpDO0FBQ0FtZCxtQkFBYXhkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJyRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxnQkFBMUMsRUFBNER5RCxLQUE1RCxDQUFrRSxTQUFsRSxFQUE2RSxNQUE3RSxFQUFxRkMsSUFBckYsQ0FBMEYsR0FBMUY7O0FBRUFtZCxtQkFBYXhjLEtBQWIsQ0FBbUJ1QixPQUFuQjs7QUFFQUEsY0FBUTFCLElBQVIsR0FBZVosTUFBZjs7QUFFQSxXQUFLcEUsT0FBTCxDQUFhdUUsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTNDTWtkLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzNjU1Y2IwY2M0MTY4Mjg0ZTBjZiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyLCBvcHRpb25zID0ge30gfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDc1MDsgLy9tc1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHt9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RpdicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cbiAgXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgbWFyZ2luKCkge1xuICAgIHJldHVybiB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcbiAgfVxuICBcbiAgZ2V0IHdpZHRoKCkge1xuICAgIGxldCB3aWR0aCA9ICt0aGlzLnBhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gd2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gIH1cbiAgXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgbGV0IGhlaWdodCA9ICt0aGlzLnBhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIHJldHVybiBoZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVkKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBwcm9wZXJ0eVBhdGgpIHtcblxuICB2YXIgdG1wID0gb2JqO1xuXG4gIGlmICh0bXAgJiYgcHJvcGVydHlQYXRoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICghdG1wLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB0bXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3IuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmF4aXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy55U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy54U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvb2x0aXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gICAgXG4gICAgdGhpcy5heGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzO1xuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGE7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFzZXRzKTtcblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKS5kb21haW4odGhpcy5heGlzLnkuZG9tYWluKTtcbiAgICBcbiAgICB0aGlzLmFsbFZhbHVlcyA9IFtdO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRoaXMuYWxsVmFsdWVzID0gdGhpcy5hbGxWYWx1ZXMuY29uY2F0KHRoaXMuZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmFsbFZhbHVlcywgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKFswLCB0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG4gIH1cbiAgXG4gIF9yZW5kZXJBeGlzKCkge1xuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7dGhpcy5oZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueFNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB0aGlzLndpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLnkudGl0bGUpO1xuICB9XG4gIFxuICBfcmVuZGVyTGVnZW5kKCkge1xuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgbGV0IGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIGxldCBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKHRoaXMuZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7ICdBJzogeyAndGl0bGUnOiAnRGF0YXNldCcsICd0ZXh0JzogZGF0YXNldCB9LCAnQic6IHsgJ3RpdGxlJzogJ1ZhbHVlJywgJ3RleHQnOiB2YWx1ZSB9IH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAobGV0IHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyh7YXBwZW5kVG86IHRoaXN9KS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IEpzb25VdGlscyBmcm9tICcuLi91dGlsL2pzb24tdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciAmJiAhY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hcHBlbmRUbyAmJiAhYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcHBlbmRUbyA9IGQzLnNlbGVjdChhcHBlbmRUbyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9nZ2VyIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKExvZ2dlci5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKExvZ2dlci5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbGV2ZWwgdGhlIGxvZyBsZXZlbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgc3RhdGljIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IE1hdGhKYXhXcmFwcGVyIGZyb20gJy4vbWF0aGpheC13cmFwcGVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gIH1cblxuICBfYXBwbHlFdmVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgbGV0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBtYXRoamF4ID0gbmV3IE1hdGhKYXhXcmFwcGVyKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkYXRhLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGRhdGEsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBkYXRhID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZGF0YSwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCBkID0+IHtcbiAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkYXRhLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYWRkIHRvIGRvIGl0IGhlcmUgYmVjYXVzZSBvZiB0aGlzLmRhdGEgdG8gY2hlY2sgZm9yIHByb3BlcnR5IGNhbnZhcy50ZXhUeXBlc2V0dGluZyBcbiAgICAgICAgbWF0aGpheC5zZXR0aW5ncyh7YXBwZW5kVG86IHRvb2x0aXB9KS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIGNhbGxiYWNrLmxvYWQoeyBjYWxsYmFjazogY2IgfSwgdHJ1ZSkuZXhlY3V0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDcm9zcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFNxdWFyZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXInOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFN0YXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3eWUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFd5ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IGVuYWJsZWQgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIE1hdGhKYXgsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhKYXhXcmFwcGVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAZW5hYmxlZCgnY2FudmFzLnRleFR5cGVzZXR0aW5nJylcbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWcoe1xuICAgICAgICBzaG93TWF0aE1lbnU6IGZhbHNlLFxuICAgICAgICBza2lwU3RhcnR1cFR5cGVzZXQ6IHRydWUsXG4gICAgICAgIHRleDJqYXg6IHtcbiAgICAgICAgICBpbmxpbmVNYXRoOiBbXG4gICAgICAgICAgICBbJyQnLCAnJCddLFxuICAgICAgICAgICAgWydcXFxcKCcsICdcXFxcKSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnSFRNTC1DU1MnOiB7XG4gICAgICAgICAgZm9udDogJ1NUSVgtV2ViJywgXG4gICAgICAgICAgbGluZWJyZWFrczogeyBcbiAgICAgICAgICAgIGF1dG9tYXRpYzogdHJ1ZSBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdTVkcnOiB7XG4gICAgICAgICAgZm9udDogJ1NUSVgtV2ViJywgXG4gICAgICAgICAgbGluZWJyZWFrczogeyBcbiAgICAgICAgICAgIGF1dG9tYXRpYzogdHJ1ZSBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5NZXNzYWdlSG9vaygnTmV3IE1hdGgnLCBmdW5jdGlvbihpZCkge1xuICAgICAgICBpZiAoaWQgJiYgaWQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBtYXRoSmF4RWxlbWVudCA9IGQzLnNlbGVjdChgIyR7aWRbMV19LUZyYW1lYCk7XG4gICAgICAgICAgdmFyIHN2Z01hdGhKYXhFbGVtZW50ID0gbWF0aEpheEVsZW1lbnQuc2VsZWN0KCdzdmcnKTtcbiAgICAgICAgICBpZiAoc3ZnTWF0aEpheEVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJvdW5kID0gc3ZnTWF0aEpheEVsZW1lbnQuc2VsZWN0KCdnJykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHN2Z01hdGhKYXhFbGVtZW50LmF0dHIoJ3gnLCAtYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICBzdmdNYXRoSmF4RWxlbWVudC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICBkMy5zZWxlY3QobWF0aEpheEVsZW1lbnQubm9kZSgpLnBhcmVudE5vZGUucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdmdNYXRoSmF4RWxlbWVudC5ub2RlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHZhciBzdmdFbGVtZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnc3ZnJyk7XG4gICAgICBpZiAoc3ZnRWxlbWVudC5ub2RlKCkpIHtcbiAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoXG4gICAgICAgICAgWydzZXRSZW5kZXJlcicsIE1hdGhKYXguSHViLCAnU1ZHJ10sXG4gICAgICAgICAgWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIHN2Z0VsZW1lbnQubm9kZSgpXSxcbiAgICAgICAgICBbJ3NldFJlbmRlcmVyJywgTWF0aEpheC5IdWIsICdIVE1MLUNTUyddLFxuICAgICAgICAgIFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCB0aGlzLmVsZW1lbnQubm9kZSgpXSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFxuICAgICAgICAgIFsnc2V0UmVuZGVyZXInLCBNYXRoSmF4Lkh1YiwgJ0hUTUwtQ1NTJ10sXG4gICAgICAgICAgWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIHRoaXMuZWxlbWVudC5ub2RlKCldLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWd1cmVkKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICB0aGlzLmxvZ2dlci53YXJuKCdJdCBzZWVtcyBNYXRoSmF4IGlzIG5vdCBsb2FkZWQuLi4nLCBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKCdOb3Qgc3VyZSB3aGF0IGhhcHBlbmVkIDovJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tYXRoamF4LXdyYXBwZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGxldCBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIGxldCBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGxldCBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrSGFuZGxlcjtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FsbGJhY2snKVxuICBleGVjdXRlKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgb3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSAoY2FsbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVHJpZ2dlciBpcyB0aGUgZXhwZWN0ZWQgY29tbWFuZCBvbiBHQVAgZm9yIHRoaXMgZXZlbnRzIVxuICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICBcbiAgfVxuXG4gIF9leGVjdXRlKGNhbGJhY2tPYmopIHtcbiAgICB0aGlzLmNhbGxiYWNrKGBUcmlnZ2VyKCR7SlNPTi5zdHJpbmdpZnkoSlNPTi5zdHJpbmdpZnkoY2FsYmFja09iaikpfSk7YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMub3ZlcmxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvbGRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB0aGlzLm92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdGhpcy5ob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICB9XG4gIFxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbi8qIGdsb2JhbCBKdXB5dGVyICovXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGMpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoYyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIGNyZWRpdHMgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxMDg0MS9ob3ctY2FuLWktcHJldHR5LXByaW50LWpzb24tdXNpbmctamF2YXNjcmlwdCNhbnN3ZXItNzIyMDUxMFxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGxldCBjbHMgPSAnbnVtYmVyJztcbiAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICB9IGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIC8vIFRPRE8gZml4IGFsd2F5cyB2aXNpYmxlIHRvb2x0aXAsIGZpbmUgdW50aWwgc29tZW9uZSBjb21wbGFpbnMgYWJvdXQgOlBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCAocG9zWzBdICsgMTUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSAxNSkgKyAncHgnKTtcblxuICAgIGxldCB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGxldCByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50aXRsZSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgRnJhbWUgZnJvbSAnLi9yZW5kZXIvZnJhbWUnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kubG9hZH0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqICBcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS54XG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIGxldCBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufSBjYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgTWF0aEpheFdyYXBwZXIgZnJvbSAnLi9tYXRoamF4LXdyYXBwZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWF0aGpheCA9IG5ldyBNYXRoSmF4V3JhcHBlcih0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcykuYWRkKHRoaXMubWF0aGpheCk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgY29uc3QgZnJhbWVJZCA9IGBGcmFtZS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSBwYXJ0aWFsIC0gaWYgdGhlIGlucHV0IGlzIG5vdCBhIGNvbXBsZXRlIEZyYW5jeSBKU09OIE9iamVjdCwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwgPSBmYWxzZSkge1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdGF0aWMgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWltZSB0eXBlIHN1cHBvcnRlZCBieSB0aGlzIHBhY2thZ2VcbiAgICovXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaEZhY3RvcnkgZnJvbSAnLi9ncmFwaC1mYWN0b3J5JztcbmltcG9ydCBDaGFydEZhY3RvcnkgZnJvbSAnLi9jaGFydC1mYWN0b3J5JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0RmFjdG9yeSA9IG5ldyBDaGFydEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLmdyYXBoKS5hZGQodGhpcy5jaGFydEZhY3RvcnkpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IHpvb20gPSBkMy56b29tKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICBsZXQgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgbGV0IHdpZHRoID0gK2JvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSArYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKCd6b29tJywgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKCdkYmxjbGljay56b29tJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRyZWVHcmFwaCBmcm9tICcuL2dyYXBoLXRyZWUnO1xuaW1wb3J0IEdlbmVyaWNHcmFwaCBmcm9tICcuL2dyYXBoLWdlbmVyaWMnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICBjYXNlICd0cmVlJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB0aGlzLndpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKVxuICAgICAgICAuYXR0cigneCcsICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIGxldCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIFxuICAgICAgaWYgKG5vZGUubm9kZSgpKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBmbGF0IGRhdGEgaW50byB0cmVlIGRhdGEgYnkgYW5hbHlzaW5nIHRoZSBwYXJlbnRzIG9mIGVhY2ggbm9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZGF0YSB0cmFuc2Zvcm1lZCBpbiB0cmVlIGRhdGFcbiAgICovXG4gIGdldCB0cmVlRGF0YSgpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdO1xuICAgIGxldCBkYXRhTWFwID0gY2FudmFzTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICBsZXQgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICBsZXQgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgbGV0IHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGxldCBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyBcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHsgXG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgIHRoaXMudW5yZW5kZXIuY2FsbCh0aGlzKTsgXG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIGxldCBpbnB1dEVsZW1lbnQgPSBjb250ZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1hcmcnKS5ub2RlKCk7XG4gICAgaWYgKGlucHV0RWxlbWVudCkge1xuICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIGxldCBzaW11bGF0aW9uQWN0aXZlID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uO1xuXG4gICAgbGV0IGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIGxldCBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEoKTtcbiAgICBsZXQgbGlua3NUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc0xpbmtzLCBsaW5rcyk7XG5cbiAgICBsZXQgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKGxpbmtzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgIH1cblxuICAgIGxldCBub2RlcyA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKCk7XG4gICAgbGV0IG5vZGVzVG9BZGQgPSB0aGlzLl9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNOb2Rlcywgbm9kZXMpO1xuXG4gICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YShub2Rlc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgaWYgKG5vZGUuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbGluay5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluayBsaW5lLmZyYW5jeS1lZGdlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgc2VsZi5wYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1zeW1ib2wnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgcmV0dXJuIC0oYm91bmQud2lkdGggLyAyKTtcbiAgICAgIH0pO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgZGF0YSBhbmQgZ2V0IHRoZSB3aWRlc3Qgbm9kZSBncm91cCBpbmNsdWRpbmcgbGFiZWxcbiAgICAgIGxldCByYWRpdXMgPSAwO1xuICAgICAgbm9kZS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICBpZiAocmFkaXVzIDwgYm91bmQud2lkdGgpIHtcbiAgICAgICAgICByYWRpdXMgPSBib3VuZC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvL0NhbnZhcyBGb3JjZXNcbiAgICAgIC8vbGV0IGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHRoaXMud2lkdGggLyAyKS55KHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA3NSk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDc1KTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoKS5yYWRpdXMocmFkaXVzLzIpLml0ZXJhdGlvbnMoMyk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjA1KTtcbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWSgtdGhpcy5oZWlnaHQpLnN0cmVuZ3RoKDAuMjUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgICBmb3JjZVggPSBkMy5mb3JjZVgodGhpcy53aWR0aCkuc3RyZW5ndGgoMC40KTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLy8uZm9yY2UoJ2NlbnRlcicsIGNlbnRlckZvcmNlKVxuICAgICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKCdjb2xsaWRlJywgY29sbGlkZUZvcmNlKVxuICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgICBzZWxmLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgICBzaW11bGF0aW9uLnJlc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgbGV0IHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgbGV0IGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbiAgXG4gIF9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNPYmplY3RzLCBkM0VsZW1lbnQpIHtcbiAgICBsZXQgbmV3RWxlbWVudHMgPSBbXTtcbiAgICBjYW52YXNPYmplY3RzLmZvckVhY2gobyA9PiB7XG4gICAgICBsZXQgbGluayA9IGQzRWxlbWVudC5maW5kKGQgPT4gZC5pZCA9PT0gby5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKGxpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudHM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RmFjdG9yeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuY2hhcnQnKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICBjYXNlICdiYXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgU2NhdHRlckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTsgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtzZWxmLmRhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuICAgIFxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigncicsIDUpXG4gICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcblxuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG5pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgY29uc3QgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBTdmdUb1BuZy5zYXZlU3ZnQXNQbmcodGhpcy5TVkdQYXJlbnQubm9kZSgpLCAnZGlhZ3JhbS5wbmcnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cywgc3ludGF4SGlnaGxpZ2h0IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbW9kYWxJZCA9ICdBYm91dE1vZGFsV2luZG93JztcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBBYm91dCBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS50ZXh0KCdMb2FkZWQgT2JqZWN0OicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdwcmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5odG1sKHN5bnRheEhpZ2hsaWdodChKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FudmFzLCBudWxsLCAyKSkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWNtYXJ0aW5zL2ZyYW5jeScpLnRleHQoJ0ZyYW5jeSBvbiBHaXRodWInKTtcblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7IFxuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgQWJvdXQgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KSB8fCBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcblxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIHVybCBpZiByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uLi8nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0IFVSTHMuIEZhbGxpbmcgYmFjayB0byBzdHJpbmcgVVJMLicpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1lc3NhZ2UtaG9sZGVyJykuYXR0cignaWQnLCBhbGVydHNJZCk7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LWFsZXJ0JykuZGF0YShtZXNzYWdlcywgZCA9PiBkLmlkKTtcbiAgICBsZXQgbWVzc2FnZUVudGVyID0gbWVzc2FnZS5lbnRlcigpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBmcmFuY3ktYWxlcnQgYWxlcnQtJHtkLnR5cGV9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykudGV4dChkID0+IGQudGl0bGUpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS50ZXh0KGQgPT4gZC50ZXh0KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nIGNsb3NlbWUnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dCgneCcpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==