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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

var _base = __webpack_require__(3);

var _base2 = _interopRequireDefault(_base);

var _mathjaxWrapper = __webpack_require__(16);

var _mathjaxWrapper2 = _interopRequireDefault(_mathjaxWrapper);

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
    _this.mathjaxWrapper = new _mathjaxWrapper2.default(_this.options);
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
      return this.parent.node().tagName.toLowerCase() === 'svg' ? d3.select(this.parent.node().parentNode) : this.parent;
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.parent.node().tagName.toLowerCase() === 'div' ? this.parent.select('svg') : this.parent;
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
  }, {
    key: 'mathjax',
    get: function get() {
      return this.mathjaxWrapper.load(this.data);
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
        this.logger.debug('Property disabled [' + props + '], skip execution... continuing...');
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

var _logger = __webpack_require__(6);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(15);

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

    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = undefined;
    this.settings({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * @Type {Object} the internal data model object
     */
    this.data = undefined;
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
    key: 'parent',
    get: function get() {
      return this.options.appendTo.element;
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

var _tooltip = __webpack_require__(12);

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
/* 5 */
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
      if (renderer) {
        this.renderers.push(renderer);
      }
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

var _menuContext = __webpack_require__(20);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(12);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(9);

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

    var _this = _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.tooltip = new _tooltip2.default(_this.options);
    _this.contextMenu = new _menuContext2.default(_this.options);
    _this.callback = new _callback2.default(_this.options);
    return _this;
  }

  _createClass(Graph, [{
    key: '_initialize',
    value: function _initialize() {
      this.element = this.parent.select('g.francy-content');
    }
  }, {
    key: '_applyEvents',
    value: function _applyEvents(element) {
      if (!element) return;

      var self = this;
      element.on('contextmenu', function (d) {
        var data = d.data || d;
        // default, build context menu
        self.contextMenu.load(data, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, data, 'contextmenu');
      }).on('click', function (d) {
        var data = d.data || d;
        // TODO make some sense of selection on nodes
        d.selected = !d.selected;
        // any callbacks will be handled here
        executeCallback.call(this, data, 'click');
      }).on('dblclick', function (d) {
        var data = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, data, 'dblclick');
      }).on('mouseover', function (d) {
        var data = d.data || d;
        if (data.messages) {
          // default, show tooltip
          self.tooltip.load({ messages: data.messages }, true).render();
          // ok, this is almost a hack, because this should be rendered on
          // the tooltip itself.. but because a tooltip gets only the messages 
          // object to render and not the whole this.data object, 
          // we can't check for the property canvas.texTypesetting, 
          // hence this:
          self.mathjax.settings({ appendTo: self.tooltip }).renderHTML();
        }
      }).on('mouseout', function () {
        // default, hide tooltip
        self.tooltip.unrender();
      });

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute only the ones that match the event!
            cb.trigger === event && self.callback.load({ callback: cb }, true).execute();
          });
        }
      }
    }
  }], [{
    key: 'linkXPos',
    value: function linkXPos(s, t) {
      var angle = Math.atan2(t.y - s.y, t.x - s.x);
      return Math.cos(angle) + (s.x + t.x) / 2;
    }
  }, {
    key: 'linkYPos',
    value: function linkYPos(s, t) {
      var angle = Math.atan2(t.y - s.y, t.x - s.x);
      return Math.sin(angle) + (s.y + t.y) / 2;
    }
  }, {
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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _base = __webpack_require__(3);

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
/* 10 */
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
/* 11 */
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
  // disable keyboard shortcuts in Jupyter for specific css classed elements
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
/* 12 */
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

var Tooltip = (_dec = (0, _dataDecorator.requires)('messages'), (_class = function (_Renderer) {
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
      var _this2 = this;

      this.element = this.HTMLParent.select('div.francy-tooltip-holder');
      // check if the window is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-tooltip-holder');
      }

      // check if it exists already
      if (this.element.selectAll('*').node()) return;

      var pos = d3.mouse(this.SVGParent.node());

      // TODO this won't be visible all the times, fine until someone complains about :P
      this.element.style('left', pos[0] + 15 + 'px').style('top', pos[1] - 15 + 'px');

      var table = this.element.append('div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      Object.keys(this.data.messages).map(function (key) {
        var row = table.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').text(_this2.data.messages[key].title);
        row.append('div').attr('class', 'francy-table-cell').text(_this2.data.messages[key].text);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _frame = __webpack_require__(14);

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
      throw new Error('D3 is not imported and Francy won\'t work without it... please import D3 v4+ library.');
    }
    return _this;
  }

  /**
   * Main entry point. Calling render will trigger the drawing of a json object 
   * passed through the load method.
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = __webpack_require__(5);

var _composite2 = _interopRequireDefault(_composite);

var _canvas = __webpack_require__(17);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(27);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(30);

var _message2 = _interopRequireDefault(_message);

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
    _this.add(_this.menu).add(_this.canvas).add(_this.messages);
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
/* 15 */
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
      if (typeof input === 'string') {
        input = input.replace(/[\n\r\b]+|(gap>)/g, '');
        var jsonRegex = /{(?:[^])*}/g;
        var match = jsonRegex.exec(input);
        if (!match) return;
        input = JSON.parse(match[0]);
      }
      return input.mime === JsonUtils.MIME || partial ? input : undefined;
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _desc, _value, _class;

var _base = __webpack_require__(3);

var _base2 = _interopRequireDefault(_base);

var _dataDecorator = __webpack_require__(1);

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

/* global MathJax, d3 */

var initialized = false;

var MathJaxWrapper = (_dec = (0, _initializeDecorator.initialize)(), _dec2 = (0, _dataDecorator.enabled)('canvas.texTypesetting'), _dec3 = (0, _initializeDecorator.initialize)(), _dec4 = (0, _dataDecorator.enabled)('canvas.texTypesetting'), (_class = function (_Base) {
  _inherits(MathJaxWrapper, _Base);

  function MathJaxWrapper(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MathJaxWrapper);

    return _possibleConstructorReturn(this, (MathJaxWrapper.__proto__ || Object.getPrototypeOf(MathJaxWrapper)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(MathJaxWrapper, [{
    key: '_initialize',
    value: function _initialize() {
      if (initialized) return;
      MathJax.Hub.Config({
        showMathMenu: false,
        skipStartupTypeset: true,
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true,
          processEnvironments: true
        },
        MathML: {
          extensions: ['content-mathml.js']
        },
        displayAlign: 'center',
        'HTML-CSS': {
          availableFonts: [],
          imageFont: null,
          preferredFont: null,
          font: 'STIX-Web',
          webFont: 'STIX-Web',
          styles: { '.MathJax_Display': { 'margin': 0 } },
          linebreaks: {
            automatic: true
          }
        },
        'SVG': {
          availableFonts: [],
          imageFont: null,
          preferredFont: null,
          font: 'STIX-Web',
          webFont: 'STIX-Web',
          styles: { '.MathJax_Display': { 'margin': 0 } },
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
                var width = svgMathJaxElement.node().width.baseVal.value;
                svgMathJaxElement.attr('x', -width / 2);
                svgMathJaxElement.attr('y', -15);
              }, 50);
              d3.select(mathJaxElement.node().parentNode.parentNode).append(function () {
                return svgMathJaxElement.node();
              });
            }, 50);
          }
        }
      });

      MathJax.Hub.Configured();

      initialized = true;
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG() {
      // if no element here just return...
      if (!this.parent || !this.parent.node()) return;
      MathJax.Hub.Queue(['setRenderer', MathJax.Hub, 'SVG'], ['Typeset', MathJax.Hub, this.parent.node()]);
    }
  }, {
    key: 'renderHTML',
    value: function renderHTML() {
      // if no element here just return...
      if (!this.parent || !this.parent.node()) return;
      MathJax.Hub.Queue(['setRenderer', MathJax.Hub, 'HTML-CSS'], ['Typeset', MathJax.Hub, this.parent.node()]);
    }
  }]);

  return MathJaxWrapper;
}(_base2.default), (_applyDecoratedDescriptor(_class.prototype, 'renderSVG', [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'renderSVG'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderHTML', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'renderHTML'), _class.prototype)), _class));
exports.default = MathJaxWrapper;

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

var _composite = __webpack_require__(5);

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

    _this.graphFactory = new _graphFactory2.default(_this.options);
    _this.chartFactory = new _chartFactory2.default(_this.options);
    _this.add(_this.graphFactory).add(_this.chartFactory);
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

      function zoomToFit(force) {
        // only execute if enable, of course
        if (self.data.canvas.zoomToFit || force) {
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
          return d.y = d.depth * 150;
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

var _menu = __webpack_require__(8);

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
      // check if the menu holder is already present
      if (!this.element.node()) {
        this.element = this.HTMLParent.append('div').attr('class', 'francy-context-menu-holder');
      }

      var pos = d3.mouse(this.SVGParent.node());

      this.element.style('left', pos[0] + 5 + 'px').style('top', pos[1] + 5 + 'px');

      // show the context menu
      this.element.style('display', 'block');

      // check if it exists already
      if (this.element.selectAll('*').node()) return;

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

var _modal = __webpack_require__(10);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(11);

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
      var radius = 0;

      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
          canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').classed('francy-links', true);
      }

      var links = linkGroup.selectAll('g.francy-link').data();
      var linksToAdd = this._filterNewElements(canvasLinks, links);

      var link = linkGroup.selectAll('g.francy-link').data(linksToAdd, function (d) {
        return d.id;
      });

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').classed('francy-nodes', true);
      }

      var nodes = nodeGroup.selectAll('g.francy-node').data();
      var nodesToAdd = this._filterNewElements(canvasNodes, nodes);

      var node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, function (d) {
        return d.id;
      });

      // this means no changes, so we can safely return
      if (node.exit().data().length === 0 && node.enter().data().length === 0 && link.enter().data().length === 0 && link.exit().data().length === 0) return;

      var linkEnter = link.enter().append('g').classed('francy-link', true);

      linkEnter.append('line').classed('francy-edge', true).style('stroke-width', function (d) {
        if (d.weight >= 3) {
          d.weight = 3;d.pos = 15;
        } else if (d.weight <= 1) {
          d.weight = 1;d.pos = 28;
        } else {
          d.pos = 18;
        }
        return d.weight;
      }).style('stroke', function (d) {
        return d.color || undefined;
      });

      linkEnter.append('text').classed('francy-label', true).classed('francy-size10', true).text(function (d) {
        return d.title;
      }).attr('text-anchor', 'middle');

      link.exit().remove();

      link = linkGroup.selectAll('g.francy-link');

      if (this.data.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        self.parent.append('defs').selectAll('marker').data(linksToAdd).enter().append('marker').classed('francy-arrows', true).attr('id', function (d) {
          return 'arrow-' + d.id;
        }).attr('viewBox', '0 0 12 12').attr('refX', function (d) {
          return d.pos;
        }).attr('refY', 6).attr('markerHeight', 12).attr('markerWidth', 12).attr('markerUnits', 'strokeWidth').attr('orient', 'auto').append('path').attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2').style('fill', function (d) {
          return d.color || undefined;
        });
        // update the style of the link
        link.selectAll('line.francy-edge').style('marker-end', function (d) {
          return 'url(#arrow-' + d.id + ')';
        });
      }

      var nodeEnter = node.enter().append('g').classed('francy-node', true).attr('id', function (d) {
        return d.id;
      });

      nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
        return _graph2.default.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).style('fill', function (d) {
        return d.color || _graph2.default.colors(d.layer * 5);
      }).classed('francy-symbol', true).classed('francy-highlight', function (d) {
        return d.highlight;
      }).classed('francy-context', function (d) {
        return Object.values(d.menus).length && Object.values(d.menus).length > 0;
      });

      nodeEnter.append('text').classed('francy-label', true).text(function (d) {
        return d.title;
      }).attr('x', function () {
        // apply mathjax if this is the case
        var text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          self.mathjax.settings({ appendTo: { element: text } }).renderSVG();
        }
        var bound = this.getBBox();
        // check the widest label so that we use it as default radius for colisions
        if (radius < bound.width) {
          radius = bound.width;
        }
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
        //Canvas Forces
        //let centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-nodesToAdd.length * 75);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(75);
        var collideForce = d3.forceCollide().strength(0.25).radius(radius / 2).iterations(3);

        //Generic gravity for the X position
        var forceX = d3.forceX(this.width).strength(0.05);
        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(this.height).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(this.width).strength(0.1);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(1);
        }

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force('charge', manyForce).force('link', linkForce)
        //.force('center', centerForce)
        .force('x', forceX).force('y', forceY).force('collide', collideForce).on('tick', ticked).on('end', self.parent.zoomToFit);

        //force simulation restart
        simulation.restart();
      } else {
        // well, simulation is off, apply fixed positions and zoom to fit now
        ticked();
        self.parent.zoomToFit();
      }

      function ticked() {
        link.selectAll('line.francy-edge').attr('x1', function (d) {
          return d.source.x;
        }).attr('y1', function (d) {
          return d.source.y;
        }).attr('x2', function (d) {
          return d.target.x;
        }).attr('y2', function (d) {
          return d.target.y;
        });

        link.selectAll('text.francy-label').attr('x', function (d) {
          return _graph2.default.linkXPos(d.target, d.source);
        }).attr('y', function (d) {
          return _graph2.default.linkYPos(d.target, d.source);
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

var _chart = __webpack_require__(4);

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

var _chart = __webpack_require__(4);

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

var _chart = __webpack_require__(4);

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

var _menu = __webpack_require__(8);

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
        return _this2.options.appendTo.canvas.zoomToFit(true);
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

var _modal = __webpack_require__(10);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(11);

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

      // render mathjax
      this.mathjax.settings({ appendTo: this }).renderHTML();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDA5YzlkZDQ3Y2QwZmZjNjlmZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tYXRoamF4LXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm9wdGlvbnMiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwibWF0aGpheFdyYXBwZXIiLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyZW50Iiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsImxvYWQiLCJkYXRhIiwicmVxdWlyZXMiLCJlbmFibGVkIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9iaiIsInByb3BlcnR5UGF0aCIsInRtcCIsInByb3BlcnRpZXMiLCJzcGxpdCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImluaXRpYWxpemUiLCJrZXkiLCJfaW5pdGlhbGl6ZSIsIkJhc2UiLCJzZXR0aW5ncyIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsInNlbGVjdEFsbCIsImFwcGVuZCIsInJlbW92ZSIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsIm1hcCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiR3JhcGgiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwic2VsZiIsIm9uIiwiZXhlY3V0ZUNhbGxiYWNrIiwic2VsZWN0ZWQiLCJtZXNzYWdlcyIsIm1hdGhqYXgiLCJyZW5kZXJIVE1MIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwicyIsInQiLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsImNvcyIsInNpbiIsInR5cGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzeW1ib2xDaXJjbGUiLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiTW9kYWwiLCJvdmVybGF5IiwiaG9sZGVyIiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzeW50YXhIaWdobGlnaHQiLCJjbGFzc2VzIiwiYyIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwiZSIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwianNvblJlZ2V4IiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiaW5pdGlhbGl6ZWQiLCJNYXRoSmF4V3JhcHBlciIsIk1hdGhKYXgiLCJIdWIiLCJDb25maWciLCJzaG93TWF0aE1lbnUiLCJza2lwU3RhcnR1cFR5cGVzZXQiLCJ0ZXgyamF4IiwiaW5saW5lTWF0aCIsImRpc3BsYXlNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJwcm9jZXNzRW52aXJvbm1lbnRzIiwiTWF0aE1MIiwiZXh0ZW5zaW9ucyIsImRpc3BsYXlBbGlnbiIsImF2YWlsYWJsZUZvbnRzIiwiaW1hZ2VGb250IiwicHJlZmVycmVkRm9udCIsImZvbnQiLCJ3ZWJGb250Iiwic3R5bGVzIiwibGluZWJyZWFrcyIsImF1dG9tYXRpYyIsIlJlZ2lzdGVyIiwiTWVzc2FnZUhvb2siLCJtYXRoSmF4RWxlbWVudCIsInN2Z01hdGhKYXhFbGVtZW50Iiwic2V0VGltZW91dCIsImJhc2VWYWwiLCJDb25maWd1cmVkIiwiUXVldWUiLCJDYW52YXMiLCJncmFwaEZhY3RvcnkiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImZvcmNlIiwiYm91bmRzIiwiZ2V0QkJveCIsImNsaWVudEJvdW5kcyIsImZ1bGxXaWR0aCIsImZ1bGxIZWlnaHQiLCJtaWRYIiwibWlkWSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiZ3JhcGgiLCJUcmVlR3JhcGgiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsIm5vZGVHcm91cCIsIm5vZGVFbnRlciIsInN5bWJvbCIsImdldFN5bWJvbCIsImJvdW5kIiwibm9kZVVwZGF0ZSIsImxheWVyIiwiX2FwcGx5RXZlbnRzIiwibm9kZU9uQ2xpY2siLCJjbGljayIsImNhbnZhc05vZGVzIiwiZGF0YU1hcCIsInJlZHVjZSIsIkNvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsInJhZGl1cyIsImNhbnZhc0xpbmtzIiwiY2xhc3NlZCIsImxpbmtzVG9BZGQiLCJfZmlsdGVyTmV3RWxlbWVudHMiLCJub2Rlc1RvQWRkIiwid2VpZ2h0IiwiY29sb3IiLCJoaWdobGlnaHQiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJyZW5kZXJTVkciLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZW1wdHkiLCJzaG93TmVpZ2hib3VycyIsImNvbm5lY3RlZE5vZGVzIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJpdGVyYXRpb25zIiwiZm9yY2VYIiwiZm9yY2VZIiwiZm9yY2VTaW11bGF0aW9uIiwidGlja2VkIiwicmVzdGFydCIsImxpbmtYUG9zIiwibGlua1lQb3MiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJ3YXJuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsImZvcm1hdCIsImdldEZvbnRNaW1lVHlwZUZyb21VcmwiLCJwcm9jZXNzRm9udFF1ZXVlIiwiZm9udFVybCIsInN1cHBvcnRlZEZvcm1hdHMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZUVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInAxIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFBMEU7QUFBQSw0QkFBNURDLE9BQTREO0FBQUEsUUFBNURBLE9BQTRELGdDQUFsRCxLQUFrRDtBQUFBLFFBQTNDQyxRQUEyQyxRQUEzQ0EsUUFBMkM7QUFBQSxRQUFqQ0MsZUFBaUMsUUFBakNBLGVBQWlDO0FBQUEsNEJBQWhCQyxPQUFnQjtBQUFBLFFBQWhCQSxPQUFnQixnQ0FBTixFQUFNOztBQUFBOztBQUFBLG9IQUNsRSxFQUFFSCxTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQUEwRUMsU0FBU0EsT0FBbkYsRUFEa0U7O0FBRXhFLFFBQUlDLElBQUlDLE1BQUosS0FBZU4sUUFBbkIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJTyxTQUFKLENBQWMsaURBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLQyxNQUFMLEtBQWdCQyxTQUFoQixJQUE2QixPQUFPLE1BQUtELE1BQVosS0FBdUIsVUFBeEQsRUFBb0U7QUFDbEUsWUFBTSxJQUFJRCxTQUFKLENBQWMsa0NBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLRyxRQUFMLEtBQWtCRCxTQUF0QixFQUFpQztBQUMvQixZQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IscUNBQWxCO0FBQ0Q7QUFDRCxVQUFLQyxjQUFMLEdBQXNCLDZCQUFtQixNQUFLVCxPQUF4QixDQUF0QjtBQUNBLFVBQUtVLE9BQUwsR0FBZUwsU0FBZjtBQUNBLFVBQUtNLGtCQUFMLEdBQTBCLEdBQTFCLENBYndFLENBYXpDO0FBYnlDO0FBY3pFOzs7O2tDQUVhLENBQUU7Ozt3QkFFQztBQUNmLGFBQU8sS0FBS0MsTUFBTCxDQUFZQyxJQUFaLEdBQW1CQyxPQUFuQixDQUEyQkMsV0FBM0IsT0FBNkMsS0FBN0MsR0FBcURDLEdBQUdDLE1BQUgsQ0FBVSxLQUFLTCxNQUFMLENBQVlDLElBQVosR0FBbUJLLFVBQTdCLENBQXJELEdBQWdHLEtBQUtOLE1BQTVHO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sS0FBS0EsTUFBTCxDQUFZQyxJQUFaLEdBQW1CQyxPQUFuQixDQUEyQkMsV0FBM0IsT0FBNkMsS0FBN0MsR0FBcUQsS0FBS0gsTUFBTCxDQUFZSyxNQUFaLENBQW1CLEtBQW5CLENBQXJELEdBQWlGLEtBQUtMLE1BQTdGO0FBQ0Q7Ozt3QkFFWTtBQUNYLGFBQU8sRUFBRU8sS0FBSyxFQUFQLEVBQVdDLE9BQU8sRUFBbEIsRUFBc0JDLFFBQVEsRUFBOUIsRUFBa0NDLE1BQU0sRUFBeEMsRUFBUDtBQUNEOzs7d0JBRVc7QUFDVixVQUFJQyxRQUFRLENBQUMsS0FBS1gsTUFBTCxDQUFZWSxJQUFaLENBQWlCLE9BQWpCLENBQUQsSUFBOEJSLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCSixJQUFsQixHQUF5QlkscUJBQXpCLEdBQWlERixLQUEzRjtBQUNBLGFBQU9BLFFBQVEsS0FBS0csTUFBTCxDQUFZSixJQUFwQixHQUEyQixLQUFLSSxNQUFMLENBQVlOLEtBQTlDO0FBQ0Q7Ozt3QkFFWTtBQUNYLFVBQUlPLFNBQVMsQ0FBQyxLQUFLZixNQUFMLENBQVlZLElBQVosQ0FBaUIsUUFBakIsQ0FBRCxJQUErQlIsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JKLElBQWxCLEdBQXlCWSxxQkFBekIsR0FBaURFLE1BQTdGO0FBQ0EsYUFBT0EsU0FBUyxLQUFLRCxNQUFMLENBQVlQLEdBQXJCLEdBQTJCLEtBQUtPLE1BQUwsQ0FBWUwsTUFBOUM7QUFDRDs7O3dCQUVhO0FBQ1osYUFBTyxLQUFLWixjQUFMLENBQW9CbUIsSUFBcEIsQ0FBeUIsS0FBS0MsSUFBOUIsQ0FBUDtBQUNEOzs7Ozs7a0JBNUNrQmpDLFE7Ozs7Ozs7Ozs7OztRQ0xMa0MsUSxHQUFBQSxRO1FBZ0JBQyxPLEdBQUFBLE87QUFoQlQsU0FBU0QsUUFBVCxDQUFrQkUsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxTQUFTQyxTQUFULENBQW1CL0IsTUFBbkIsRUFBMkJnQyxJQUEzQixFQUFpQ0MsVUFBakMsRUFBNkM7QUFDbEQsUUFBSUMsV0FBV0QsV0FBV0UsS0FBMUI7O0FBRUFGLGVBQVdFLEtBQVgsR0FBbUIsWUFBVztBQUM1QixVQUFJLENBQUNDLFFBQVFDLFlBQVksS0FBS1YsSUFBakIsRUFBdUJHLEtBQXZCLENBQVIsQ0FBTCxFQUE2QztBQUMzQyxhQUFLekIsTUFBTCxDQUFZQyxLQUFaLG9CQUFtQ3dCLEtBQW5DO0FBQ0E7QUFDRDtBQUNELGFBQU9JLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQixDQUFQO0FBQ0QsS0FORDs7QUFRQSxXQUFPTixVQUFQO0FBQ0QsR0FaRDtBQWFEOztBQUVNLFNBQVNKLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU8sU0FBU0MsU0FBVCxDQUFtQi9CLE1BQW5CLEVBQTJCZ0MsSUFBM0IsRUFBaUNDLFVBQWpDLEVBQTZDO0FBQ2xELFFBQUlDLFdBQVdELFdBQVdFLEtBQTFCOztBQUVBRixlQUFXRSxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsVUFBSSxDQUFDRSxZQUFZLEtBQUtWLElBQWpCLEVBQXVCRyxLQUF2QixDQUFMLEVBQW9DO0FBQ2xDLGFBQUt6QixNQUFMLENBQVlDLEtBQVoseUJBQXdDd0IsS0FBeEM7QUFDQTtBQUNEO0FBQ0QsYUFBT0ksU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCLENBQVA7QUFDRCxLQU5EOztBQVFBLFdBQU9OLFVBQVA7QUFDRCxHQVpEO0FBYUQ7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkcsR0FBckIsRUFBMEJDLFlBQTFCLEVBQXdDOztBQUV0QyxNQUFJQyxNQUFNRixHQUFWOztBQUVBLE1BQUlFLE9BQU9ELFlBQVgsRUFBeUI7QUFDdkIsUUFBSUUsYUFBYUYsYUFBYUcsS0FBYixDQUFtQixHQUFuQixDQUFqQjs7QUFEdUI7QUFBQTtBQUFBOztBQUFBO0FBR3ZCLDJCQUFxQkQsVUFBckIsOEhBQWlDO0FBQUEsWUFBeEJFLFFBQXdCOztBQUMvQixZQUFJLENBQUNILElBQUlJLGNBQUosQ0FBbUJELFFBQW5CLENBQUwsRUFBbUM7QUFDakNILGdCQUFNdkMsU0FBTjtBQUNBO0FBQ0QsU0FIRCxNQUdPO0FBQ0x1QyxnQkFBTUEsSUFBSUcsUUFBSixDQUFOO0FBQ0Q7QUFDRjtBQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3hCOztBQUVELFNBQU9ILEdBQVA7QUFDRDs7QUFFRCxTQUFTTixPQUFULENBQWlCSSxHQUFqQixFQUFzQjtBQUNwQixTQUFPQSxRQUFTQSxlQUFlTyxLQUFmLElBQXdCUCxJQUFJUSxNQUE3QixJQUF5Q1IsZUFBZVMsTUFBZixJQUF5QkEsT0FBT0MsTUFBUCxDQUFjVixHQUFkLEVBQW1CUSxNQUE3RixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O1FDdERlRyxVLEdBQUFBLFU7QUFBVCxTQUFTQSxVQUFULEdBQXNCO0FBQzNCLFNBQU8sVUFBVW5ELE1BQVYsRUFBa0JvRCxHQUFsQixFQUF1Qm5CLFVBQXZCLEVBQW1DO0FBQ3hDLFFBQUlDLFdBQVdELFdBQVdFLEtBQTFCOztBQUVBRixlQUFXRSxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsV0FBS2tCLFdBQUw7QUFDQSxhQUFPbkIsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJDLFNBQXJCLENBQVA7QUFDRCxLQUhEO0FBSUEsV0FBT04sVUFBUDtBQUNELEdBUkQ7QUFTRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7SUFFcUJxQixJO0FBRW5CLHNCQUFxRTtBQUFBLDRCQUF2RDNELE9BQXVEO0FBQUEsUUFBdkRBLE9BQXVELGdDQUE3QyxLQUE2QztBQUFBLDZCQUF0Q0MsUUFBc0M7QUFBQSxRQUF0Q0EsUUFBc0MsaUNBQTNCLE1BQTJCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFDbkU7Ozs7OztBQU1BLFNBQUtDLE9BQUwsR0FBZUssU0FBZjtBQUNBLFNBQUtvRCxRQUFMLENBQWMsRUFBRTVELFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBQWQ7QUFDQTs7O0FBR0EsU0FBSzhCLElBQUwsR0FBWXhCLFNBQVo7QUFDQTs7O0FBR0EsU0FBS3FELEdBQUwsR0FBVyxxQkFBVyxLQUFLMUQsT0FBaEIsQ0FBWDtBQUNEOzs7O29DQUVnRDtBQUFBLFVBQXRDSCxPQUFzQyxTQUF0Q0EsT0FBc0M7QUFBQSxVQUE3QkMsUUFBNkIsU0FBN0JBLFFBQTZCO0FBQUEsVUFBbkJDLGVBQW1CLFNBQW5CQSxlQUFtQjs7QUFDL0MsV0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsSUFBZ0IsRUFBL0I7QUFDQSxVQUFJLENBQUMsS0FBS0EsT0FBTCxDQUFhRCxlQUFkLElBQWlDLENBQUNBLGVBQXRDLEVBQXVEO0FBQ3JELGNBQU0sSUFBSTRELEtBQUosQ0FBVSx3R0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFJLENBQUMsS0FBSzNELE9BQUwsQ0FBYUYsUUFBZCxJQUEwQixDQUFDQSxRQUEvQixFQUF5QztBQUN2QyxjQUFNLElBQUk2RCxLQUFKLENBQVUsd0RBQVYsQ0FBTjtBQUNEO0FBQ0QsVUFBSSxPQUFPN0QsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EsbUJBQVdrQixHQUFHQyxNQUFILENBQVVuQixRQUFWLENBQVg7QUFDRDtBQUNELFdBQUtFLE9BQUwsQ0FBYUgsT0FBYixHQUF1QkEsV0FBVyxLQUFLRyxPQUFMLENBQWFILE9BQS9DO0FBQ0EsV0FBS0csT0FBTCxDQUFhRixRQUFiLEdBQXdCQSxZQUFZLEtBQUtFLE9BQUwsQ0FBYUYsUUFBakQ7QUFDQSxXQUFLRSxPQUFMLENBQWFELGVBQWIsR0FBK0JBLG1CQUFtQixLQUFLQyxPQUFMLENBQWFELGVBQS9EO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozt5QkFFSTZELEksRUFBTUMsTyxFQUFTO0FBQ2xCLFVBQUloQyxPQUFPLG9CQUFVaUMsS0FBVixDQUFnQkYsSUFBaEIsRUFBc0JDLE9BQXRCLENBQVg7QUFDQSxVQUFJaEMsSUFBSixFQUFVO0FBQ1IsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7O3dCQUVZO0FBQ1gsYUFBTyxLQUFLN0IsT0FBTCxDQUFhRixRQUFiLENBQXNCWSxPQUE3QjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtnRCxHQUFaO0FBQ0Q7Ozs7OztrQkFwRGtCRixJOzs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQk8sSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5Q2xFLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBS2lFLElBQUwsR0FBWTNELFNBQVo7QUFDQSxVQUFLNEQsTUFBTCxHQUFjNUQsU0FBZDtBQUNBLFVBQUs2RCxNQUFMLEdBQWM3RCxTQUFkO0FBQ0EsVUFBSzhELFFBQUwsR0FBZ0I5RCxTQUFoQjtBQUNBLFVBQUsrRCxZQUFMLEdBQW9CL0QsU0FBcEI7QUFDQSxVQUFLZ0UsT0FBTCxHQUFlaEUsU0FBZjtBQVAwRDtBQVEzRDs7OztrQ0FFYTtBQUFBOztBQUNaLFdBQUtnRSxPQUFMLEdBQWUsc0JBQVksS0FBS3JFLE9BQWpCLENBQWY7O0FBRUEsV0FBS1UsT0FBTCxHQUFlLEtBQUtFLE1BQUwsQ0FBWUssTUFBWixDQUFtQixrQkFBbkIsQ0FBZjs7QUFFQSxXQUFLK0MsSUFBTCxHQUFZLEtBQUtuQyxJQUFMLENBQVV5QyxNQUFWLENBQWlCQyxLQUFqQixDQUF1QlAsSUFBbkM7QUFDQSxXQUFLRyxRQUFMLEdBQWdCLEtBQUt0QyxJQUFMLENBQVV5QyxNQUFWLENBQWlCQyxLQUFqQixDQUF1QjFDLElBQXZDO0FBQ0EsV0FBS3VDLFlBQUwsR0FBb0JqQixPQUFPcUIsSUFBUCxDQUFZLEtBQUtMLFFBQWpCLENBQXBCOztBQUVBLFdBQUtELE1BQUwsR0FBY2xELEdBQUd5RCxXQUFILEdBQWlCQyxLQUFqQixDQUF1QixDQUFDLENBQUQsRUFBSSxLQUFLbkQsS0FBVCxDQUF2QixFQUF3Q29ELE1BQXhDLENBQStDLEtBQUtYLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUEzRCxDQUFkO0FBQ0EsV0FBS1YsTUFBTCxHQUFjakQsR0FBR3lELFdBQUgsR0FBaUJDLEtBQWpCLENBQXVCLENBQUMsS0FBSy9DLE1BQU4sRUFBYyxDQUFkLENBQXZCLEVBQXlDZ0QsTUFBekMsQ0FBZ0QsS0FBS1gsSUFBTCxDQUFVYSxDQUFWLENBQVlGLE1BQTVELENBQWQ7O0FBRUEsV0FBS0csU0FBTCxHQUFpQixFQUFqQjtBQUNBLFdBQUtWLFlBQUwsQ0FBa0JXLE9BQWxCLENBQTBCO0FBQUEsZUFBTyxPQUFLRCxTQUFMLEdBQWlCLE9BQUtBLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixPQUFLYixRQUFMLENBQWNiLEdBQWQsQ0FBdEIsQ0FBeEI7QUFBQSxPQUExQjs7QUFFQSxVQUFJLENBQUMsS0FBS1UsSUFBTCxDQUFVYSxDQUFWLENBQVlGLE1BQVosQ0FBbUJ6QixNQUF4QixFQUFnQztBQUM5QixhQUFLZSxNQUFMLENBQVlVLE1BQVosQ0FBbUIsQ0FBQyxDQUFELEVBQUkzRCxHQUFHaUUsR0FBSCxDQUFPLEtBQUtILFNBQVosRUFBdUI7QUFBQSxpQkFBS0ksQ0FBTDtBQUFBLFNBQXZCLENBQUosQ0FBbkI7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBS2xCLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUFaLENBQW1CekIsTUFBeEIsRUFBZ0M7QUFDOUIsYUFBS2dCLE1BQUwsQ0FBWVMsTUFBWixDQUFtQixDQUFDLENBQUQsRUFBSSxLQUFLRyxTQUFMLENBQWU1QixNQUFmLEdBQXdCLEtBQUtrQixZQUFMLENBQWtCbEIsTUFBOUMsQ0FBbkI7QUFDRDtBQUNGOzs7a0NBRWE7QUFDWjtBQUNBLFVBQUlpQyxhQUFhLEtBQUt6RSxPQUFMLENBQWEwRSxTQUFiLENBQXVCLGlCQUF2QixDQUFqQjs7QUFFQSxVQUFJLENBQUNELFdBQVd0RSxJQUFYLEVBQUwsRUFBd0I7QUFDdEJzRSxxQkFBYSxLQUFLekUsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWI7QUFDRDs7QUFFRDJELGlCQUFXQyxTQUFYLENBQXFCLEdBQXJCLEVBQTBCRSxNQUExQjs7QUFFQTtBQUNBSCxpQkFDRzNELElBREgsQ0FDUSxXQURSLG1CQUNvQyxLQUFLRyxNQUR6QyxRQUVHNEQsSUFGSCxDQUVRdkUsR0FBR3dFLFVBQUgsQ0FBYyxLQUFLdEIsTUFBbkIsQ0FGUixFQUdHbUIsTUFISCxDQUdVLE1BSFYsRUFJRzdELElBSkgsQ0FJUSxJQUpSLEVBSWMsRUFKZCxFQUtHQSxJQUxILENBS1EsSUFMUixFQUtjLEtBQUtELEtBQUwsR0FBYSxDQUwzQixFQU1HQyxJQU5ILENBTVEsTUFOUixFQU1nQixPQU5oQixFQU9HQSxJQVBILENBT1EsT0FQUixFQU9pQixhQVBqQixFQVFHaUUsS0FSSCxDQVFTLGFBUlQsRUFRd0IsS0FSeEIsRUFTR0MsSUFUSCxDQVNRLEtBQUsxQixJQUFMLENBQVVZLENBQVYsQ0FBWWUsS0FUcEI7O0FBV0E7QUFDQSxVQUFJQyxhQUFhLEtBQUtsRixPQUFMLENBQWEwRSxTQUFiLENBQXVCLGlCQUF2QixDQUFqQjs7QUFFQSxVQUFJLENBQUNRLFdBQVcvRSxJQUFYLEVBQUwsRUFBd0I7QUFDdEIrRSxxQkFBYSxLQUFLbEYsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWI7QUFDRDs7QUFFRG9FLGlCQUFXUixTQUFYLENBQXFCLEdBQXJCLEVBQTBCRSxNQUExQjs7QUFFQTtBQUNBTSxpQkFDR0wsSUFESCxDQUNRdkUsR0FBRzZFLFFBQUgsQ0FBWSxLQUFLNUIsTUFBakIsQ0FEUixFQUVHb0IsTUFGSCxDQUVVLE1BRlYsRUFHRzdELElBSEgsQ0FHUSxJQUhSLEVBR2MsQ0FBQyxFQUhmLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWMsS0FBS0csTUFBTCxHQUFjLENBSjVCLEVBS0dILElBTEgsQ0FLUSxNQUxSLEVBS2dCLE9BTGhCLEVBTUdBLElBTkgsQ0FNUSxPQU5SLEVBTWlCLGFBTmpCLEVBT0dpRSxLQVBILENBT1MsYUFQVCxFQU93QixLQVB4QixFQVFHQyxJQVJILENBUVEsS0FBSzFCLElBQUwsQ0FBVWEsQ0FBVixDQUFZYyxLQVJwQjtBQVNEOzs7b0NBRWU7QUFDZCxVQUFJLEtBQUs5RCxJQUFMLENBQVV5QyxNQUFWLENBQWlCQyxLQUFqQixDQUF1QnVCLFVBQTNCLEVBQXVDOztBQUVyQyxZQUFJQyxjQUFjLEtBQUtyRixPQUFMLENBQWEwRSxTQUFiLENBQXVCLGdCQUF2QixDQUFsQjs7QUFFQSxZQUFJLENBQUNXLFlBQVlsRixJQUFaLEVBQUwsRUFBeUI7QUFDdkJrRix3QkFBYyxLQUFLckYsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWQ7QUFDRDs7QUFFRDtBQUNBdUUsb0JBQVlYLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkJFLE1BQTNCOztBQUVBLFlBQUlVLFNBQVNELFlBQVlYLFNBQVosQ0FBc0IsR0FBdEIsRUFBMkJ2RCxJQUEzQixDQUFnQyxLQUFLdUMsWUFBTCxDQUFrQjZCLEtBQWxCLEVBQWhDLENBQWI7O0FBRUFELGVBQU9FLElBQVAsR0FBY1osTUFBZDs7QUFFQVUsaUJBQVNBLE9BQU9HLEtBQVAsR0FDTmQsTUFETSxDQUNDLEdBREQsRUFFTjdELElBRk0sQ0FFRCxXQUZDLEVBRVksVUFBQzBELENBQUQsRUFBSWtCLENBQUo7QUFBQSxrQ0FBeUJBLElBQUksRUFBN0I7QUFBQSxTQUZaLEVBR05DLEtBSE0sQ0FHQUwsTUFIQSxDQUFUOztBQUtBQSxlQUFPWCxNQUFQLENBQWMsTUFBZCxFQUNHN0QsSUFESCxDQUNRLEdBRFIsRUFDYSxLQUFLRCxLQUFMLEdBQWEsRUFEMUIsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsRUFGakIsRUFHR0EsSUFISCxDQUdRLFFBSFIsRUFHa0IsRUFIbEIsRUFJR2lFLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUNQLENBQUQsRUFBSWtCLENBQUo7QUFBQSxpQkFBVXJDLE1BQU11QyxNQUFOLENBQWFGLElBQUksQ0FBakIsQ0FBVjtBQUFBLFNBSmpCOztBQU1BSixlQUFPWCxNQUFQLENBQWMsTUFBZCxFQUNHN0QsSUFESCxDQUNRLEdBRFIsRUFDYSxLQUFLRCxLQUFMLEdBQWEsRUFEMUIsRUFFR0MsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHaUUsS0FKSCxDQUlTLGFBSlQsRUFJd0IsS0FKeEIsRUFLR0MsSUFMSCxDQUtRO0FBQUEsaUJBQUtSLENBQUw7QUFBQSxTQUxSO0FBTUQ7QUFDRjs7OzRCQUVjcUIsTyxFQUFTbEUsSyxFQUFPO0FBQzdCLGFBQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxTQUFYLEVBQXNCLFFBQVFrRSxPQUE5QixFQUFQLEVBQWdELEtBQUssRUFBRSxTQUFTLE9BQVgsRUFBb0IsUUFBUWxFLEtBQTVCLEVBQXJELEVBQVA7QUFDRDs7O2dDQU1rQjRDLEcsRUFBSztBQUN0QixhQUFPaEMsTUFBTXVELElBQU4sQ0FBVyxJQUFJdkQsS0FBSixDQUFVZ0MsR0FBVixDQUFYLEVBQTJCLFVBQUN3QixDQUFELEVBQUlMLENBQUo7QUFBQSxlQUFVQSxDQUFWO0FBQUEsT0FBM0IsRUFBd0NNLEdBQXhDLENBQTRDO0FBQUEsZUFBSzlCLENBQUw7QUFBQSxPQUE1QyxDQUFQO0FBQ0Q7Ozt3QkFObUI7QUFDbEIsYUFBTzVELEdBQUcyRixlQUFILEdBQXFCaEMsTUFBckIsQ0FBNEIsQ0FBQyxDQUFELEVBQUksR0FBSixDQUE1QixFQUFzQ2lDLFlBQXRDLENBQW1ENUYsR0FBRzZGLGtCQUF0RCxDQUFQO0FBQ0Q7Ozs7OztrQkF6SGtCOUMsSzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7Ozs7Ozs7Ozs7O0lBRXFCK0MsUzs7O0FBRW5CLDJCQUE0RDtBQUFBLDRCQUE5Q2pILE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHNIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSUUsSUFBSUMsTUFBSixLQUFlNEcsU0FBbkIsRUFBOEI7QUFDNUIsWUFBTSxJQUFJM0csU0FBSixDQUFjLGtEQUFkLENBQU47QUFDRDtBQUNELFVBQUs0RyxTQUFMLEdBQWlCLEVBQWpCO0FBTDBEO0FBTTNEOzs7O3dCQUVHQyxRLEVBQVU7QUFDWixVQUFJQSxRQUFKLEVBQWM7QUFDWixhQUFLRCxTQUFMLENBQWVFLElBQWYsQ0FBb0JELFFBQXBCO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7O3FDQUVnQjtBQUNmO0FBRGU7QUFBQTtBQUFBOztBQUFBO0FBRWYsNkJBQXFCLEtBQUtELFNBQTFCLDhIQUFxQztBQUFBLGNBQTVCQyxRQUE0Qjs7QUFDbkNBLG1CQUFTdkQsUUFBVCxDQUFrQixFQUFDM0QsVUFBVSxJQUFYLEVBQWxCLEVBQW9DOEIsSUFBcEMsQ0FBeUMsS0FBS0MsSUFBOUMsRUFBb0R6QixNQUFwRDtBQUNEO0FBSmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtoQjs7Ozs7O2tCQXRCa0IwRyxTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7O0lBR3FCSSxNOztBQUVuQjs7OztBQUlBLG9CQUFzQztBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBeEJySCxPQUF3QjtBQUFBLFFBQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUNwQyxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLc0gsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzBCQUlNQyxPLEVBQVM7QUFDYixVQUFJLEtBQUt2SCxPQUFULEVBQWtCO0FBQ2hCLGFBQUtzSCxPQUFMLENBQWEzRyxLQUFiLENBQW1CMEcsT0FBT0csT0FBUCxDQUFlLE9BQWYsRUFBd0JELE9BQXhCLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozt5QkFJS0EsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhRyxJQUFiLENBQWtCSixPQUFPRyxPQUFQLENBQWUsTUFBZixFQUF1QkQsT0FBdkIsQ0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBS01BLE8sRUFBU0csTSxFQUFPO0FBQ3BCLFdBQUtKLE9BQUwsQ0FBYUksS0FBYixDQUFtQkwsT0FBT0csT0FBUCxDQUFlLE9BQWYsRUFBd0JELE9BQXhCLENBQW5CLEVBQXFERyxNQUFyRDtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS0gsTyxFQUFTRyxLLEVBQU87QUFDbkJBLGNBQVFBLFNBQVMsRUFBakI7QUFDQSxXQUFLSixPQUFMLENBQWFJLEtBQWIsQ0FBbUJMLE9BQU9HLE9BQVAsQ0FBZSxNQUFmLEVBQXVCRCxPQUF2QixDQUFuQixFQUFvREcsS0FBcEQ7QUFDRDs7QUFFRDs7Ozs7Ozs7NEJBS2VDLEssRUFBT0osTyxFQUFTO0FBQzdCLG1CQUFXSSxLQUFYLFlBQXVCLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUF2QixXQUFxRE4sT0FBckQ7QUFDRDs7Ozs7O2tCQXZEa0JGLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQlMsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5QzlILE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBS3NFLE9BQUwsR0FBZSxzQkFBWSxNQUFLckUsT0FBakIsQ0FBZjtBQUNBLFVBQUs0SCxXQUFMLEdBQW1CLDBCQUFnQixNQUFLNUgsT0FBckIsQ0FBbkI7QUFDQSxVQUFLNkgsUUFBTCxHQUFnQix1QkFBYSxNQUFLN0gsT0FBbEIsQ0FBaEI7QUFKMEQ7QUFLM0Q7Ozs7a0NBRWE7QUFDWixXQUFLVSxPQUFMLEdBQWUsS0FBS0UsTUFBTCxDQUFZSyxNQUFaLENBQW1CLGtCQUFuQixDQUFmO0FBQ0Q7OztpQ0FFWVAsTyxFQUFTO0FBQ3BCLFVBQUksQ0FBQ0EsT0FBTCxFQUFjOztBQUVkLFVBQUlvSCxPQUFPLElBQVg7QUFDQXBILGNBQ0dxSCxFQURILENBQ00sYUFETixFQUNxQixVQUFTN0MsQ0FBVCxFQUFZO0FBQzdCLFlBQUlyRCxPQUFPcUQsRUFBRXJELElBQUYsSUFBVXFELENBQXJCO0FBQ0E7QUFDQTRDLGFBQUtGLFdBQUwsQ0FBaUJoRyxJQUFqQixDQUFzQkMsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0N6QixNQUFsQztBQUNBO0FBQ0E0SCx3QkFBZ0J6QyxJQUFoQixDQUFxQixJQUFyQixFQUEyQjFELElBQTNCLEVBQWlDLGFBQWpDO0FBQ0QsT0FQSCxFQVFHa0csRUFSSCxDQVFNLE9BUk4sRUFRZSxVQUFTN0MsQ0FBVCxFQUFZO0FBQ3ZCLFlBQUlyRCxPQUFPcUQsRUFBRXJELElBQUYsSUFBVXFELENBQXJCO0FBQ0E7QUFDQUEsVUFBRStDLFFBQUYsR0FBYSxDQUFDL0MsRUFBRStDLFFBQWhCO0FBQ0E7QUFDQUQsd0JBQWdCekMsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIxRCxJQUEzQixFQUFpQyxPQUFqQztBQUNELE9BZEgsRUFlR2tHLEVBZkgsQ0FlTSxVQWZOLEVBZWtCLFVBQVM3QyxDQUFULEVBQVk7QUFDMUIsWUFBSXJELE9BQU9xRCxFQUFFckQsSUFBRixJQUFVcUQsQ0FBckI7QUFDQTtBQUNBOEMsd0JBQWdCekMsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIxRCxJQUEzQixFQUFpQyxVQUFqQztBQUNELE9BbkJILEVBb0JHa0csRUFwQkgsQ0FvQk0sV0FwQk4sRUFvQm1CLFVBQVM3QyxDQUFULEVBQVk7QUFDM0IsWUFBSXJELE9BQU9xRCxFQUFFckQsSUFBRixJQUFVcUQsQ0FBckI7QUFDQSxZQUFJckQsS0FBS3FHLFFBQVQsRUFBbUI7QUFDakI7QUFDQUosZUFBS3pELE9BQUwsQ0FBYXpDLElBQWIsQ0FBa0IsRUFBQ3NHLFVBQVVyRyxLQUFLcUcsUUFBaEIsRUFBbEIsRUFBNkMsSUFBN0MsRUFBbUQ5SCxNQUFuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTBILGVBQUtLLE9BQUwsQ0FBYTFFLFFBQWIsQ0FBc0IsRUFBQzNELFVBQVVnSSxLQUFLekQsT0FBaEIsRUFBdEIsRUFBZ0QrRCxVQUFoRDtBQUNEO0FBQ0YsT0FoQ0gsRUFpQ0dMLEVBakNILENBaUNNLFVBakNOLEVBaUNrQixZQUFXO0FBQ3pCO0FBQ0FELGFBQUt6RCxPQUFMLENBQWEvRCxRQUFiO0FBQ0QsT0FwQ0g7O0FBc0NBLGVBQVMwSCxlQUFULENBQXlCbkcsSUFBekIsRUFBK0J3RyxLQUEvQixFQUFzQztBQUNwQyxZQUFJeEcsS0FBS3lHLFNBQVQsRUFBb0I7QUFDbEJuRixpQkFBT0MsTUFBUCxDQUFjdkIsS0FBS3lHLFNBQW5CLEVBQThCdkQsT0FBOUIsQ0FBc0MsVUFBQ3dELEVBQUQsRUFBUTtBQUM1QztBQUNBQSxlQUFHQyxPQUFILEtBQWVILEtBQWYsSUFBd0JQLEtBQUtELFFBQUwsQ0FBY2pHLElBQWQsQ0FBbUIsRUFBRWlHLFVBQVVVLEVBQVosRUFBbkIsRUFBcUMsSUFBckMsRUFBMkNFLE9BQTNDLEVBQXhCO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7QUFDRjs7OzZCQUVlQyxDLEVBQUdDLEMsRUFBRztBQUNwQixVQUFJQyxRQUFRQyxLQUFLQyxLQUFMLENBQVdILEVBQUU5RCxDQUFGLEdBQU02RCxFQUFFN0QsQ0FBbkIsRUFBc0I4RCxFQUFFL0QsQ0FBRixHQUFNOEQsRUFBRTlELENBQTlCLENBQVo7QUFDQSxhQUFPaUUsS0FBS0UsR0FBTCxDQUFTSCxLQUFULElBQWtCLENBQUNGLEVBQUU5RCxDQUFGLEdBQU0rRCxFQUFFL0QsQ0FBVCxJQUFZLENBQXJDO0FBQ0Q7Ozs2QkFFZThELEMsRUFBR0MsQyxFQUFHO0FBQ3BCLFVBQUlDLFFBQVFDLEtBQUtDLEtBQUwsQ0FBV0gsRUFBRTlELENBQUYsR0FBTTZELEVBQUU3RCxDQUFuQixFQUFzQjhELEVBQUUvRCxDQUFGLEdBQU04RCxFQUFFOUQsQ0FBOUIsQ0FBWjtBQUNBLGFBQU9pRSxLQUFLRyxHQUFMLENBQVNKLEtBQVQsSUFBa0IsQ0FBQ0YsRUFBRTdELENBQUYsR0FBTThELEVBQUU5RCxDQUFULElBQWMsQ0FBdkM7QUFDRDs7OzhCQU1nQm9FLEksRUFBTTs7QUFFckIsVUFBSXZJLFVBQVVMLFNBQWQ7QUFDQSxjQUFRNEksSUFBUjtBQUNBLGFBQUssT0FBTDtBQUNFdkksb0JBQVVNLEdBQUdrSSxXQUFiO0FBQ0E7QUFDRixhQUFLLFNBQUw7QUFDRXhJLG9CQUFVTSxHQUFHbUksYUFBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0V6SSxvQkFBVU0sR0FBR29JLFlBQWI7QUFDQTtBQUNGLGFBQUssVUFBTDtBQUNFMUksb0JBQVVNLEdBQUdxSSxjQUFiO0FBQ0E7QUFDRixhQUFLLE1BQUw7QUFDRTNJLG9CQUFVTSxHQUFHc0ksVUFBYjtBQUNBO0FBQ0YsYUFBSyxLQUFMO0FBQ0U1SSxvQkFBVU0sR0FBR3VJLFNBQWI7QUFDQTtBQUNGLGFBQUssUUFBTDtBQUNBO0FBQ0U3SSxvQkFBVU0sR0FBR3dJLFlBQWI7QUFyQkY7O0FBd0JBLGFBQU85SSxPQUFQO0FBQ0Q7Ozt3QkFoQ21CO0FBQ2xCLGFBQU9NLEdBQUcyRixlQUFILEdBQXFCaEMsTUFBckIsQ0FBNEIsQ0FBQyxDQUFELEVBQUksR0FBSixDQUE1QixFQUFzQ2lDLFlBQXRDLENBQW1ENUYsR0FBRzZGLGtCQUF0RCxDQUFQO0FBQ0Q7Ozs7OztrQkE3RWtCYyxLOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQjhCLEk7OztBQUVuQixzQkFBNEQ7QUFBQSw0QkFBOUM1SixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx1R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBRVFELFEsRUFBVTRKLGEsRUFBZTtBQUFBOztBQUNoQyxhQUFPQSxjQUFjQyxPQUFkLEVBQVAsRUFBZ0M7QUFDOUIsWUFBSUMsV0FBV0YsY0FBY0csSUFBZCxFQUFmO0FBQ0EsWUFBSUMsUUFBUWhLLFNBQVN1RixNQUFULENBQWdCLElBQWhCLENBQVo7QUFDQSxZQUFJMEUsU0FBU0QsTUFBTTFFLFNBQU4sQ0FBZ0IsR0FBaEIsRUFBcUJ2RCxJQUFyQixDQUEwQixDQUFDK0gsUUFBRCxDQUExQixFQUFzQ3pELEtBQXRDLEdBQThDZCxNQUE5QyxDQUFxRCxHQUFyRCxFQUEwRDdELElBQTFELENBQStELE9BQS9ELEVBQXdFb0ksU0FBU2pFLEtBQWpGLEVBQXdGcUUsSUFBeEYsQ0FBNkZKLFNBQVNqRSxLQUF0RyxDQUFiO0FBQ0EsWUFBSWlFLFNBQVMvQixRQUFULElBQXFCMUUsT0FBT0MsTUFBUCxDQUFjd0csU0FBUy9CLFFBQXZCLEVBQWlDM0UsTUFBMUQsRUFBa0U7QUFDaEU2RyxpQkFBT2hDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQUM3QyxDQUFEO0FBQUEsbUJBQU8sdUJBQWEsT0FBS2xGLE9BQWxCLEVBQTJCNEIsSUFBM0IsQ0FBZ0NzRCxDQUFoQyxFQUFtQyxJQUFuQyxFQUF5Q3VELE9BQXpDLEVBQVA7QUFBQSxXQUFuQjtBQUNEO0FBQ0QsWUFBSW1CLFNBQVNLLEtBQVQsSUFBa0I5RyxPQUFPQyxNQUFQLENBQWN3RyxTQUFTSyxLQUF2QixFQUE4Qi9HLE1BQTlCLEdBQXVDLENBQTdELEVBQWdFO0FBQzlELGNBQUlnSCxVQUFVSixNQUFNekUsTUFBTixDQUFhLElBQWIsQ0FBZDtBQUNBLGNBQUk4RSxtQkFBbUIsS0FBS0MsUUFBTCxDQUFjakgsT0FBT0MsTUFBUCxDQUFjd0csU0FBU0ssS0FBdkIsQ0FBZCxDQUF2QjtBQUNBLGVBQUtJLFFBQUwsQ0FBY0gsT0FBZCxFQUF1QkMsZ0JBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVFHLEssRUFBTztBQUNkLFVBQUlDLFlBQVksQ0FBaEI7QUFDQSxhQUFPO0FBQ0xWLGNBQU0sZ0JBQVc7QUFDZixpQkFBTyxLQUFLRixPQUFMLEtBQWlCVyxNQUFNQyxXQUFOLENBQWpCLEdBQXNDbEssU0FBN0M7QUFDRCxTQUhJO0FBSUxzSixpQkFBUyxtQkFBVztBQUNsQixpQkFBT1ksWUFBWUQsTUFBTXBILE1BQXpCO0FBQ0Q7QUFOSSxPQUFQO0FBUUQ7OzsrQkFFVSxDQUFFOzs7Ozs7a0JBbENNdUcsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCZSxlLFdBT2xCLDZCQUFTLFVBQVQsQzs7O0FBTEQsaUNBQTREO0FBQUEsNEJBQTlDM0ssT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsa0lBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxVQUFLOEgsUUFBTCxHQUFnQjlILGVBQWhCO0FBRjBEO0FBRzNEOzs7OzhCQUdTO0FBQUE7O0FBQ1IsVUFBSW9ELE9BQU9xQixJQUFQLENBQVksS0FBSzNDLElBQUwsQ0FBVWdHLFFBQVYsQ0FBbUI0QyxZQUEvQixFQUE2Q3ZILE1BQWpELEVBQXlEO0FBQ3ZELFlBQUlsRCxVQUFVLEtBQUtBLE9BQW5CO0FBQ0FBLGdCQUFRRCxlQUFSLEdBQTBCLFVBQUMySyxXQUFEO0FBQUEsaUJBQWlCLE9BQUtDLFFBQUwsQ0FBY3BGLElBQWQsU0FBeUJtRixXQUF6QixDQUFqQjtBQUFBLFNBQTFCO0FBQ0EsZUFBTyw0QkFBc0IxSyxPQUF0QixFQUErQjRCLElBQS9CLENBQW9DLEtBQUtDLElBQXpDLEVBQStDLElBQS9DLEVBQXFEekIsTUFBckQsRUFBUDtBQUNEOztBQUVEO0FBQ0EsV0FBS3VLLFFBQUwsQ0FBYyxLQUFLOUksSUFBTCxDQUFVZ0csUUFBeEI7QUFFRDs7OzZCQUVRK0MsVSxFQUFZO0FBQ25CLFdBQUsvQyxRQUFMLGNBQXlCZ0QsS0FBS0MsU0FBTCxDQUFlRCxLQUFLQyxTQUFMLENBQWVGLFVBQWYsQ0FBZixDQUF6QjtBQUNEOzs7OztrQkF0QmtCSixlOzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJPLEs7OztBQUVuQix1QkFBNEQ7QUFBQSw0QkFBOUNsTCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSw4R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUtpTCxPQUFMLEdBQWUzSyxTQUFmO0FBQ0EsVUFBSzRLLE1BQUwsR0FBYzVLLFNBQWQ7QUFIMEQ7QUFJM0Q7Ozs7a0NBRWE7QUFDWjtBQUNBLFdBQUsySyxPQUFMLEdBQWVoSyxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQm9FLE1BQWxCLENBQXlCLEtBQXpCLEVBQWdDN0QsSUFBaEMsQ0FBcUMsT0FBckMsRUFBOEMsZ0JBQTlDLENBQWY7QUFDQSxXQUFLeUosTUFBTCxHQUFjakssR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JvRSxNQUFsQixDQUF5QixLQUF6QixFQUFnQzdELElBQWhDLENBQXFDLE9BQXJDLEVBQThDLFFBQTlDLENBQWQ7QUFDRDs7OytCQUVVO0FBQ1QsV0FBS3dKLE9BQUwsQ0FBYTFGLE1BQWI7QUFDQSxXQUFLNUUsT0FBTCxDQUFhNEUsTUFBYjtBQUNBLFdBQUsyRixNQUFMLENBQVkzRixNQUFaO0FBQ0EsYUFBTyxLQUFQO0FBQ0Q7Ozs7OztrQkFuQmtCeUYsSzs7Ozs7Ozs7Ozs7O1FDQUxHLDZCLEdBQUFBLDZCO1FBZUFDLGUsR0FBQUEsZTs7QUFuQmhCOzs7Ozs7QUFFQTs7QUFFTyxTQUFTRCw2QkFBVCxDQUF1Q0UsT0FBdkMsRUFBZ0Q7QUFDckQ7QUFDQSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNkLE1BQUk7QUFDRkEsWUFBUTFFLEdBQVIsQ0FBWSxVQUFDMkUsQ0FBRCxFQUFPO0FBQ2pCQyxjQUFRQyxnQkFBUixDQUF5QkMsZUFBekIsQ0FBeUNILENBQXpDO0FBQ0QsS0FGRDtBQUdELEdBSkQsQ0FJRSxPQUFPSSxDQUFQLEVBQVU7QUFDVixRQUFJQSxFQUFFdkosSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQy9CLDZCQUFhb0YsSUFBYixDQUFrQiwyQ0FBbEIsRUFBK0RtRSxDQUEvRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNPLFNBQVNOLGVBQVQsQ0FBeUJ2SCxJQUF6QixFQUErQjtBQUNwQ0EsU0FBT0EsS0FBSzhILE9BQUwsQ0FBYSxJQUFiLEVBQW1CLE9BQW5CLEVBQTRCQSxPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxNQUExQyxFQUFrREEsT0FBbEQsQ0FBMEQsSUFBMUQsRUFBZ0UsTUFBaEUsQ0FBUDtBQUNBLFNBQU85SCxLQUFLOEgsT0FBTCxDQUFhLHFHQUFiLEVBQW9ILFVBQUNDLEtBQUQsRUFBVztBQUNwSSxRQUFJQyxNQUFNLFFBQVY7QUFDQSxRQUFJLEtBQUtDLElBQUwsQ0FBVUYsS0FBVixDQUFKLEVBQXNCO0FBQ3BCLFVBQUksS0FBS0UsSUFBTCxDQUFVRixLQUFWLENBQUosRUFBc0I7QUFDcEJDLGNBQU0sS0FBTjtBQUNELE9BRkQsTUFFTztBQUNMQSxjQUFNLFFBQU47QUFDRDtBQUNGLEtBTkQsTUFNTyxJQUFJLGFBQWFDLElBQWIsQ0FBa0JGLEtBQWxCLENBQUosRUFBOEI7QUFDbkNDLFlBQU0sU0FBTjtBQUNELEtBRk0sTUFFQSxJQUFJLE9BQU9DLElBQVAsQ0FBWUYsS0FBWixDQUFKLEVBQXdCO0FBQzdCQyxZQUFNLE1BQU47QUFDRDtBQUNELDZCQUF1QkEsR0FBdkIsVUFBK0JELEtBQS9CO0FBQ0QsR0FkTSxDQUFQO0FBZUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENEOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkcsTyxXQU1sQiw2QkFBUyxVQUFULEM7OztBQUpELHlCQUE0RDtBQUFBLDRCQUE5Q2pNLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFdBQUtXLE9BQUwsR0FBZSxLQUFLcUwsVUFBTCxDQUFnQjlLLE1BQWhCLENBQXVCLDJCQUF2QixDQUFmO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBS1AsT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsYUFBS0gsT0FBTCxHQUFlLEtBQUtxTCxVQUFMLENBQWdCMUcsTUFBaEIsQ0FBdUIsS0FBdkIsRUFDWjdELElBRFksQ0FDUCxPQURPLEVBQ0UsdUJBREYsQ0FBZjtBQUVEOztBQUVEO0FBQ0EsVUFBSSxLQUFLZCxPQUFMLENBQWEwRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCdkUsSUFBNUIsRUFBSixFQUF3Qzs7QUFFeEMsVUFBSW1MLE1BQU1oTCxHQUFHaUwsS0FBSCxDQUFTLEtBQUtDLFNBQUwsQ0FBZXJMLElBQWYsRUFBVCxDQUFWOztBQUVBO0FBQ0EsV0FBS0gsT0FBTCxDQUFhK0UsS0FBYixDQUFtQixNQUFuQixFQUE0QnVHLElBQUksQ0FBSixJQUFTLEVBQVYsR0FBZ0IsSUFBM0MsRUFBaUR2RyxLQUFqRCxDQUF1RCxLQUF2RCxFQUErRHVHLElBQUksQ0FBSixJQUFTLEVBQVYsR0FBZ0IsSUFBOUU7O0FBRUEsVUFBSUcsUUFBUSxLQUFLekwsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixLQUFwQixFQUEyQjdELElBQTNCLENBQWdDLE9BQWhDLEVBQXlDLGdCQUF6QyxFQUNUNkQsTUFEUyxDQUNGLEtBREUsRUFDSzdELElBREwsQ0FDVSxPQURWLEVBQ21CLGNBRG5CLEVBRVQ2RCxNQUZTLENBRUYsS0FGRSxFQUVLN0QsSUFGTCxDQUVVLE9BRlYsRUFFbUIsbUJBRm5CLENBQVo7O0FBSUEyQixhQUFPcUIsSUFBUCxDQUFZLEtBQUszQyxJQUFMLENBQVVxRyxRQUF0QixFQUFnQ3hCLEdBQWhDLENBQW9DLFVBQUNwRCxHQUFELEVBQVM7QUFDM0MsWUFBSThJLE1BQU1ELE1BQU05RyxNQUFOLENBQWEsS0FBYixFQUFvQjdELElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLGtCQUFsQyxDQUFWO0FBQ0E0SyxZQUFJL0csTUFBSixDQUFXLEtBQVgsRUFBa0I3RCxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcURrRSxJQUFyRCxDQUEwRCxPQUFLN0QsSUFBTCxDQUFVcUcsUUFBVixDQUFtQjVFLEdBQW5CLEVBQXdCcUMsS0FBbEY7QUFDQXlHLFlBQUkvRyxNQUFKLENBQVcsS0FBWCxFQUFrQjdELElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLG1CQUFoQyxFQUFxRGtFLElBQXJELENBQTBELE9BQUs3RCxJQUFMLENBQVVxRyxRQUFWLENBQW1CNUUsR0FBbkIsRUFBd0JvQyxJQUFsRjtBQUNELE9BSkQ7O0FBTUE7QUFDQSxXQUFLaEYsT0FBTCxDQUFhK0UsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSSxLQUFLL0UsT0FBVCxFQUFrQjtBQUNoQixhQUFLQSxPQUFMLENBQWEwRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCRSxNQUE1QjtBQUNBLGFBQUs1RSxPQUFMLENBQWErRSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLElBQTlCO0FBQ0Q7QUFDRjs7Ozs7a0JBN0NrQnFHLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBLElBQUlPLGFBQWEsRUFBakI7O0FBRUE7Ozs7Ozs7Ozs7OztJQVlxQkMsTSxXQXFCbEIsNkJBQVMsUUFBVCxDOzs7QUFuQkQ7Ozs7Ozs7QUFPQSx3QkFBNEQ7QUFBQSw0QkFBOUN6TSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxnSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUksQ0FBQ2lCLEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSTJDLEtBQUosQ0FBVSx1RkFBVixDQUFOO0FBQ0Q7QUFKeUQ7QUFLM0Q7O0FBRUQ7Ozs7Ozs7Ozs2QkFNUztBQUNQLFVBQUk0SSxRQUFRLG9CQUFVLEtBQUt2TSxPQUFmLEVBQXdCNEIsSUFBeEIsQ0FBNkIsS0FBS0MsSUFBbEMsRUFBd0N6QixNQUF4QyxFQUFaO0FBQ0FpTSxpQkFBVyxLQUFLeEssSUFBTCxDQUFVeUMsTUFBVixDQUFpQmtJLEVBQTVCLElBQWtDRCxLQUFsQztBQUNBLGFBQU9BLE1BQU03TCxPQUFOLENBQWNHLElBQWQsRUFBUDtBQUNEOzs7NkJBRWUyTCxFLEVBQUk7QUFDbEIsYUFBT0gsV0FBV0csRUFBWCxDQUFQO0FBQ0Q7Ozs7O2tCQTlCa0JGLE07OztBQWlDckIsSUFBSTtBQUNGRyxVQUFRSCxNQUFSLEdBQWlCSSxPQUFPSixNQUFQLEdBQWdCQSxNQUFqQztBQUNBO0FBQ0EsTUFBSUssWUFBWUQsT0FBT0UsUUFBdkI7QUFDQUYsU0FBT0UsUUFBUCxHQUFrQixZQUFNO0FBQ3RCO0FBQ0F6SixXQUFPQyxNQUFQLENBQWNpSixVQUFkLEVBQTBCdEgsT0FBMUIsQ0FBa0MsVUFBQ3dILEtBQUQsRUFBVztBQUMzQ0EsWUFBTWpJLE1BQU4sQ0FBYXVJLFNBQWI7QUFDRCxLQUZEO0FBR0E7QUFDQSxRQUFJLE9BQU9GLFNBQVAsS0FBcUIsVUFBekIsRUFBcUM7QUFDbkNBO0FBQ0Q7QUFDRixHQVREO0FBVUQsQ0FkRCxDQWNFLE9BQU9sQixDQUFQLEVBQVU7QUFDVmdCLFVBQVFILE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQlEsSyxXQVVsQiw2QkFBUyxRQUFULEM7OztBQVJELHVCQUE0RDtBQUFBLDRCQUE5Q2pOLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBS3VFLE1BQUwsR0FBYyxxQkFBVyxNQUFLdEUsT0FBaEIsQ0FBZDtBQUNBLFVBQUsrTSxJQUFMLEdBQVksdUJBQWEsTUFBSy9NLE9BQWxCLENBQVo7QUFDQSxVQUFLa0ksUUFBTCxHQUFnQixzQkFBWSxNQUFLbEksT0FBakIsQ0FBaEI7QUFDQSxVQUFLZ04sR0FBTCxDQUFTLE1BQUtELElBQWQsRUFBb0JDLEdBQXBCLENBQXdCLE1BQUsxSSxNQUE3QixFQUFxQzBJLEdBQXJDLENBQXlDLE1BQUs5RSxRQUE5QztBQUwwRDtBQU0zRDs7Ozs2QkFHUTtBQUNQLFVBQUl0SCxTQUFTLEtBQUtaLE9BQUwsQ0FBYUYsUUFBMUI7O0FBRUEsVUFBTW1OLHFCQUFtQixLQUFLcEwsSUFBTCxDQUFVeUMsTUFBVixDQUFpQmtJLEVBQTFDO0FBQ0EsV0FBSzlMLE9BQUwsR0FBZU0sR0FBR0MsTUFBSCxVQUFpQmdNLE9BQWpCLENBQWY7QUFDQTtBQUNBLFVBQUksQ0FBQyxLQUFLdk0sT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEI7QUFDQSxhQUFLTixNQUFMLENBQVlDLEtBQVosc0JBQXFDeU0sT0FBckM7QUFDQSxhQUFLdk0sT0FBTCxHQUFlRSxPQUFPeUUsTUFBUCxDQUFjLEtBQWQsRUFBcUI3RCxJQUFyQixDQUEwQixPQUExQixFQUFtQyxRQUFuQyxFQUE2Q0EsSUFBN0MsQ0FBa0QsSUFBbEQsRUFBd0R5TCxPQUF4RCxDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJLENBQUMsS0FBS3ZNLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSThDLEtBQUosNENBQW1Ec0osT0FBbkQsMEJBQU47QUFDRDs7QUFFRCxXQUFLMU0sTUFBTCxDQUFZQyxLQUFaLHFCQUFvQ3lNLE9BQXBDOztBQUVBLFdBQUtDLGNBQUw7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkFuQ01KLEs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCOzs7SUFHcUJLLFM7Ozs7Ozs7OztBQUVuQjs7Ozs7OzBCQU1hQyxLLEVBQXdCO0FBQUEsVUFBakJ2SixPQUFpQix1RUFBUCxLQUFPOztBQUNuQyxVQUFJLENBQUN1SixLQUFMLEVBQVk7QUFDWixVQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JBLGdCQUFRQSxNQUFNMUIsT0FBTixDQUFjLG1CQUFkLEVBQW1DLEVBQW5DLENBQVI7QUFDQSxZQUFJMkIsWUFBWSxhQUFoQjtBQUNBLFlBQUkxQixRQUFRMEIsVUFBVUMsSUFBVixDQUFlRixLQUFmLENBQVo7QUFDQSxZQUFJLENBQUN6QixLQUFMLEVBQVk7QUFDWnlCLGdCQUFRdkMsS0FBSy9HLEtBQUwsQ0FBVzZILE1BQU0sQ0FBTixDQUFYLENBQVI7QUFDRDtBQUNELGFBQU95QixNQUFNRyxJQUFOLEtBQWVKLFVBQVVLLElBQXpCLElBQWlDM0osT0FBakMsR0FBMkN1SixLQUEzQyxHQUFtRC9NLFNBQTFEO0FBQ0Q7O0FBRUQ7Ozs7Ozt3QkFHa0I7QUFDaEIsYUFBTyw2QkFBUDtBQUNEOzs7Ozs7a0JBekJrQjhNLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQSxJQUFJTSxjQUFjLEtBQWxCOztJQUVxQkMsYyxXQXFFbEIsc0MsVUFDQSw0QkFBUSx1QkFBUixDLFVBVUEsc0MsVUFDQSw0QkFBUSx1QkFBUixDOzs7QUEvRUQsZ0NBQTREO0FBQUEsNEJBQTlDN04sT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsMkhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7O2tDQUVhO0FBQ1osVUFBSTBOLFdBQUosRUFBaUI7QUFDakJFLGNBQVFDLEdBQVIsQ0FBWUMsTUFBWixDQUFtQjtBQUNqQkMsc0JBQWMsS0FERztBQUVqQkMsNEJBQW9CLElBRkg7QUFHakJDLGlCQUFTO0FBQ1BDLHNCQUFZLENBQUUsQ0FBQyxHQUFELEVBQUssR0FBTCxDQUFGLEVBQWEsQ0FBQyxLQUFELEVBQU8sS0FBUCxDQUFiLENBREw7QUFFUEMsdUJBQWEsQ0FBRSxDQUFDLElBQUQsRUFBTSxJQUFOLENBQUYsRUFBZSxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQWYsQ0FGTjtBQUdQQywwQkFBZ0IsSUFIVDtBQUlQQywrQkFBcUI7QUFKZCxTQUhRO0FBU2pCQyxnQkFBUTtBQUNOQyxzQkFBWSxDQUFDLG1CQUFEO0FBRE4sU0FUUztBQVlqQkMsc0JBQWMsUUFaRztBQWFqQixvQkFBWTtBQUNWQywwQkFBZ0IsRUFETjtBQUVWQyxxQkFBVyxJQUZEO0FBR1ZDLHlCQUFlLElBSEw7QUFJVkMsZ0JBQU0sVUFKSTtBQUtWQyxtQkFBUyxVQUxDO0FBTVZDLGtCQUFRLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxDQUFYLEVBQXJCLEVBTkU7QUFPVkMsc0JBQVk7QUFDVkMsdUJBQVc7QUFERDtBQVBGLFNBYks7QUF3QmpCLGVBQU87QUFDTFAsMEJBQWdCLEVBRFg7QUFFTEMscUJBQVcsSUFGTjtBQUdMQyx5QkFBZSxJQUhWO0FBSUxDLGdCQUFNLFVBSkQ7QUFLTEMsbUJBQVMsVUFMSjtBQU1MQyxrQkFBUSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsQ0FBWCxFQUFyQixFQU5IO0FBT0xDLHNCQUFZO0FBQ1ZDLHVCQUFXO0FBREQ7QUFQUDtBQXhCVSxPQUFuQjs7QUFxQ0FwQixjQUFRQyxHQUFSLENBQVlvQixRQUFaLENBQXFCQyxXQUFyQixDQUFpQyxVQUFqQyxFQUE2QyxVQUFTekMsRUFBVCxFQUFhO0FBQ3hELFlBQUlBLE1BQU1BLEdBQUd0SixNQUFILEdBQVksQ0FBdEIsRUFBeUI7QUFDdkIsY0FBSWdNLGlCQUFpQmxPLEdBQUdDLE1BQUgsT0FBY3VMLEdBQUcsQ0FBSCxDQUFkLFlBQXJCO0FBQ0EsY0FBSTJDLG9CQUFvQkQsZUFBZWpPLE1BQWYsQ0FBc0IsS0FBdEIsQ0FBeEI7QUFDQSxjQUFJa08sa0JBQWtCdE8sSUFBbEIsRUFBSixFQUE4QjtBQUM1QnVPLHVCQUFXLFlBQU07QUFDZkEseUJBQVcsWUFBTTtBQUNmLG9CQUFJN04sUUFBUTROLGtCQUFrQnRPLElBQWxCLEdBQXlCVSxLQUF6QixDQUErQjhOLE9BQS9CLENBQXVDaE4sS0FBbkQ7QUFDQThNLGtDQUFrQjNOLElBQWxCLENBQXVCLEdBQXZCLEVBQTRCLENBQUNELEtBQUQsR0FBUyxDQUFyQztBQUNBNE4sa0NBQWtCM04sSUFBbEIsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBQyxFQUE3QjtBQUNELGVBSkQsRUFJRyxFQUpIO0FBS0FSLGlCQUFHQyxNQUFILENBQVVpTyxlQUFlck8sSUFBZixHQUFzQkssVUFBdEIsQ0FBaUNBLFVBQTNDLEVBQXVEbUUsTUFBdkQsQ0FBOEQsWUFBVztBQUN2RSx1QkFBTzhKLGtCQUFrQnRPLElBQWxCLEVBQVA7QUFDRCxlQUZEO0FBR0QsYUFURCxFQVNHLEVBVEg7QUFVRDtBQUNGO0FBQ0YsT0FqQkQ7O0FBbUJBOE0sY0FBUUMsR0FBUixDQUFZMEIsVUFBWjs7QUFFQTdCLG9CQUFjLElBQWQ7QUFDRDs7O2dDQUlXO0FBQ1Y7QUFDQSxVQUFJLENBQUMsS0FBSzdNLE1BQU4sSUFBZ0IsQ0FBQyxLQUFLQSxNQUFMLENBQVlDLElBQVosRUFBckIsRUFBeUM7QUFDekM4TSxjQUFRQyxHQUFSLENBQVkyQixLQUFaLENBQ0UsQ0FBQyxhQUFELEVBQWdCNUIsUUFBUUMsR0FBeEIsRUFBNkIsS0FBN0IsQ0FERixFQUVFLENBQUMsU0FBRCxFQUFZRCxRQUFRQyxHQUFwQixFQUF5QixLQUFLaE4sTUFBTCxDQUFZQyxJQUFaLEVBQXpCLENBRkY7QUFJRDs7O2lDQUlZO0FBQ1g7QUFDQSxVQUFJLENBQUMsS0FBS0QsTUFBTixJQUFnQixDQUFDLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixFQUFyQixFQUF5QztBQUN6QzhNLGNBQVFDLEdBQVIsQ0FBWTJCLEtBQVosQ0FDRSxDQUFDLGFBQUQsRUFBZ0I1QixRQUFRQyxHQUF4QixFQUE2QixVQUE3QixDQURGLEVBRUUsQ0FBQyxTQUFELEVBQVlELFFBQVFDLEdBQXBCLEVBQXlCLEtBQUtoTixNQUFMLENBQVlDLElBQVosRUFBekIsQ0FGRjtBQUlEOzs7OztrQkF6RmtCNk0sYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUnJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUI4QixNLFdBU2xCLDZCQUFTLFFBQVQsQzs7O0FBUEQsd0JBQTREO0FBQUEsNEJBQTlDM1AsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsZ0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxVQUFLMFAsWUFBTCxHQUFvQiwyQkFBaUIsTUFBS3pQLE9BQXRCLENBQXBCO0FBQ0EsVUFBSzBQLFlBQUwsR0FBb0IsMkJBQWlCLE1BQUsxUCxPQUF0QixDQUFwQjtBQUNBLFVBQUtnTixHQUFMLENBQVMsTUFBS3lDLFlBQWQsRUFBNEJ6QyxHQUE1QixDQUFnQyxNQUFLMEMsWUFBckM7QUFKMEQ7QUFLM0Q7Ozs7NkJBR1E7QUFDUCxVQUFJeEYsZ0JBQUo7QUFDQSxVQUFJeUYsT0FBTzNPLEdBQUcyTyxJQUFILEVBQVg7QUFDQSxVQUFJN0gsT0FBTyxJQUFYOztBQUVBLGVBQVM4SCxVQUFULENBQW9CQyxVQUFwQixFQUFnQ0MsVUFBaEMsRUFBNENDLEtBQTVDLEVBQW1EO0FBQ2pEakksYUFBS3BILE9BQUwsQ0FBYTZFLElBQWIsQ0FBa0JvSyxLQUFLSyxTQUF2QixFQUFrQ2hQLEdBQUdpUCxZQUFILENBQWdCQyxTQUFoQixDQUEwQkwsVUFBMUIsRUFBc0NDLFVBQXRDLEVBQWtEQyxLQUFsRCxDQUF3REEsS0FBeEQsRUFBK0RBLEtBQS9ELENBQWxDO0FBQ0Q7O0FBRUQsZUFBU0ksTUFBVCxHQUFrQjtBQUNoQmpHLGdCQUFRMUksSUFBUixDQUFhLFdBQWIsRUFBMEJSLEdBQUdxSCxLQUFILENBQVMySCxTQUFuQztBQUNEOztBQUVELGVBQVNJLE9BQVQsR0FBbUI7QUFDakIsWUFBSXBQLEdBQUdxSCxLQUFILENBQVNnSSxnQkFBYixFQUErQjtBQUM3QnJQLGFBQUdxSCxLQUFILENBQVNpSSxlQUFUO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTekQsU0FBVCxDQUFtQjBELEtBQW5CLEVBQTBCO0FBQ3hCO0FBQ0EsWUFBSXpJLEtBQUtqRyxJQUFMLENBQVV5QyxNQUFWLENBQWlCdUksU0FBakIsSUFBOEIwRCxLQUFsQyxFQUF5QztBQUN2QyxjQUFJQyxTQUFTdEcsUUFBUXJKLElBQVIsR0FBZTRQLE9BQWYsRUFBYjs7QUFFQSxjQUFJQyxlQUFlNUksS0FBS3BILE9BQUwsQ0FBYUcsSUFBYixHQUFvQlkscUJBQXBCLEVBQW5CO0FBQUEsY0FDRWtQLFlBQVlELGFBQWF0UCxLQUFiLEdBQXFCc1AsYUFBYXBQLElBRGhEO0FBQUEsY0FFRXNQLGFBQWFGLGFBQWFyUCxNQUFiLEdBQXNCcVAsYUFBYXZQLEdBRmxEOztBQUlBLGNBQUlJLFFBQVEsQ0FBQ2lQLE9BQU9qUCxLQUFwQjtBQUFBLGNBQ0VJLFNBQVMsQ0FBQzZPLE9BQU83TyxNQURuQjs7QUFHQSxjQUFJSixVQUFVLENBQVYsSUFBZUksV0FBVyxDQUE5QixFQUFpQzs7QUFFakMsY0FBSWtQLE9BQU9MLE9BQU81TCxDQUFQLEdBQVdyRCxRQUFRLENBQTlCO0FBQUEsY0FDRXVQLE9BQU9OLE9BQU8zTCxDQUFQLEdBQVdsRCxTQUFTLENBRDdCOztBQUdBLGNBQUlvTyxRQUFRLE1BQU1sSCxLQUFLNUQsR0FBTCxDQUFTMUQsUUFBUW9QLFNBQWpCLEVBQTRCaFAsU0FBU2lQLFVBQXJDLENBQWxCO0FBQ0EsY0FBSWYsYUFBYWMsWUFBWSxDQUFaLEdBQWdCWixRQUFRYyxJQUF6QztBQUFBLGNBQ0VmLGFBQWFjLGFBQWEsQ0FBYixHQUFpQmIsUUFBUWUsSUFEeEM7O0FBR0E1RyxrQkFBUTZHLFVBQVIsR0FDR0MsUUFESCxDQUNZbEosS0FBS25ILGtCQURqQixFQUVHYSxJQUZILENBRVEsV0FGUixpQkFFa0NxTyxVQUZsQyxTQUVnREMsVUFGaEQsZUFFb0VDLEtBRnBFLFNBRTZFQSxLQUY3RSxRQUdHaEksRUFISCxDQUdNLEtBSE4sRUFHYTtBQUFBLG1CQUFNNkgsV0FBV0MsVUFBWCxFQUF1QkMsVUFBdkIsRUFBbUNDLEtBQW5DLENBQU47QUFBQSxXQUhiO0FBSUQ7QUFDRjs7QUFFRCxVQUFNa0IsdUJBQXFCLEtBQUtwUCxJQUFMLENBQVV5QyxNQUFWLENBQWlCa0ksRUFBNUM7QUFDQSxXQUFLOUwsT0FBTCxHQUFlTSxHQUFHQyxNQUFILFVBQWlCZ1EsUUFBakIsQ0FBZjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUt2USxPQUFMLENBQWFHLElBQWIsRUFBTCxFQUEwQjtBQUN4QjtBQUNBLGFBQUtOLE1BQUwsQ0FBWUMsS0FBWix1QkFBc0N5USxRQUF0QztBQUNBLGFBQUt2USxPQUFMLEdBQWUsS0FBS0UsTUFBTCxDQUFZeUUsTUFBWixDQUFtQixLQUFuQixFQUNaN0QsSUFEWSxDQUNQLE9BRE8sRUFDRSxlQURGLEVBRVpBLElBRlksQ0FFUCxJQUZPLEVBRUR5UCxRQUZDLENBQWY7QUFHRDs7QUFFRDtBQUNBLFVBQUksQ0FBQyxLQUFLdlEsT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsY0FBTSxJQUFJOEMsS0FBSiw2Q0FBb0RzTixRQUFwRCwwQkFBTjtBQUNEOztBQUVELFdBQUt2USxPQUFMLENBQWFjLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBS0ssSUFBTCxDQUFVeUMsTUFBVixDQUFpQi9DLEtBQTVDLEVBQW1EQyxJQUFuRCxDQUF3RCxRQUF4RCxFQUFrRSxLQUFLSyxJQUFMLENBQVV5QyxNQUFWLENBQWlCM0MsTUFBbkY7O0FBRUF1SSxnQkFBVSxLQUFLeEosT0FBTCxDQUFhTyxNQUFiLENBQW9CLGtCQUFwQixDQUFWOztBQUVBLFVBQUksQ0FBQ2lKLFFBQVFySixJQUFSLEVBQUwsRUFBcUI7QUFDbkJxSixrQkFBVSxLQUFLeEosT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGdCQUF2QyxDQUFWO0FBQ0FtTyxhQUFLNUgsRUFBTCxDQUFRLE1BQVIsRUFBZ0JvSSxNQUFoQjtBQUNBO0FBQ0EsYUFBS3pQLE9BQUwsQ0FBYTZFLElBQWIsQ0FBa0JvSyxJQUFsQixFQUF3QjVILEVBQXhCLENBQTJCLGVBQTNCLEVBQTRDLElBQTVDO0FBQ0Q7O0FBRUQsV0FBS3JILE9BQUwsQ0FBYXFILEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUJxSSxPQUF6QixFQUFrQyxJQUFsQzs7QUFFQSxXQUFLMVAsT0FBTCxDQUFhbU0sU0FBYixHQUF5QixLQUFLQSxTQUFMLEdBQWlCQSxTQUExQzs7QUFFQSxXQUFLdE0sTUFBTCxDQUFZQyxLQUFaLHNCQUFxQ3lRLFFBQXJDOztBQUVBLFdBQUsvRCxjQUFMOztBQUVBa0MsaUJBQVcsWUFBTTtBQUNmdkM7QUFDRCxPQUZELEVBRUcsS0FBS2xNLGtCQUZSOztBQUlBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBbkdNNk8sTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI3SCxLLFdBTWxCLDZCQUFTLGNBQVQsQzs7O0FBSkQsdUJBQTREO0FBQUEsNEJBQTlDOUgsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFVBQUlXLFVBQVVMLFNBQWQ7QUFDQSxjQUFRLEtBQUt3QixJQUFMLENBQVV5QyxNQUFWLENBQWlCNE0sS0FBakIsQ0FBdUJqSSxJQUEvQjtBQUNBLGFBQUssTUFBTDtBQUNFdkksb0JBQVUsd0JBQWMsS0FBS1YsT0FBbkIsRUFBNEI0QixJQUE1QixDQUFpQyxLQUFLQyxJQUF0QyxFQUE0Q3pCLE1BQTVDLEVBQVY7QUFDQTtBQUNGO0FBQ0VNLG9CQUFVLDJCQUFpQixLQUFLVixPQUF0QixFQUErQjRCLElBQS9CLENBQW9DLEtBQUtDLElBQXpDLEVBQStDekIsTUFBL0MsRUFBVjtBQUxGOztBQVFBLGFBQU9NLE9BQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQXJCTWlILEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJ3SixTLFdBTWxCLHNDOzs7QUFKRCwyQkFBNEQ7QUFBQSw0QkFBOUN0UixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSXFHLElBQUksQ0FBUjtBQUFBLFVBQ0VnTCxhQURGOztBQUdBQSxhQUFPcFEsR0FBR3FRLFNBQUgsQ0FBYSxLQUFLQyxRQUFsQixFQUE0QjtBQUFBLGVBQUtwTSxFQUFFcU0sUUFBUDtBQUFBLE9BQTVCLENBQVA7QUFDQUgsV0FBS0ksRUFBTCxHQUFVLEtBQUs3UCxNQUFMLEdBQWMsQ0FBeEI7QUFDQXlQLFdBQUtLLEVBQUwsR0FBVSxDQUFWOztBQUVBO0FBQ0EsVUFBSUMsYUFBYSxDQUFDLENBQUQsQ0FBakI7QUFDQSxVQUFJQyxhQUFhLFNBQWJBLFVBQWEsQ0FBVW5LLEtBQVYsRUFBaUJvSyxDQUFqQixFQUFvQjs7QUFFbkMsWUFBSUEsRUFBRUwsUUFBRixJQUFjSyxFQUFFTCxRQUFGLENBQVdyTyxNQUFYLEdBQW9CLENBQXRDLEVBQXlDO0FBQ3ZDLGNBQUl3TyxXQUFXeE8sTUFBWCxJQUFxQnNFLFFBQVEsQ0FBakMsRUFBb0NrSyxXQUFXekssSUFBWCxDQUFnQixDQUFoQjs7QUFFcEN5SyxxQkFBV2xLLFFBQVEsQ0FBbkIsS0FBeUJvSyxFQUFFTCxRQUFGLENBQVdyTyxNQUFwQztBQUNBME8sWUFBRUwsUUFBRixDQUFXeE0sT0FBWCxDQUFtQixVQUFVRyxDQUFWLEVBQWE7QUFDOUJ5TSx1QkFBV25LLFFBQVEsQ0FBbkIsRUFBc0J0QyxDQUF0QjtBQUNELFdBRkQ7QUFHRDtBQUNGLE9BVkQ7QUFXQXlNLGlCQUFXLENBQVgsRUFBY1AsSUFBZDtBQUNBLFVBQUlTLFlBQVk3USxHQUFHaUUsR0FBSCxDQUFPeU0sVUFBUCxJQUFxQixHQUFyQzs7QUFFQSxVQUFJSSxVQUFVOVEsR0FBRytRLElBQUgsR0FBVUMsSUFBVixDQUFlLENBQUNILFNBQUQsRUFBWSxLQUFLdFEsS0FBakIsQ0FBZixDQUFkOztBQUVBLFVBQUksS0FBS00sSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRNLEtBQWpCLENBQXVCZSxTQUEzQixFQUFzQztBQUNwQ2IsYUFBS0csUUFBTCxDQUFjeE0sT0FBZCxDQUFzQm1OLFFBQXRCO0FBQ0Q7O0FBRURDLGFBQU81TSxJQUFQLENBQVksSUFBWixFQUFrQjZMLElBQWxCOztBQUVBLGVBQVNjLFFBQVQsQ0FBa0JoTixDQUFsQixFQUFxQjtBQUNuQixZQUFJQSxFQUFFcU0sUUFBTixFQUFnQjtBQUNkck0sWUFBRWtOLFNBQUYsR0FBY2xOLEVBQUVxTSxRQUFoQjtBQUNBck0sWUFBRWtOLFNBQUYsQ0FBWXJOLE9BQVosQ0FBb0JtTixRQUFwQjtBQUNBaE4sWUFBRXFNLFFBQUYsR0FBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTWSxNQUFULENBQWdCRSxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixZQUFJZixXQUFXUSxRQUFRVixJQUFSLENBQWY7O0FBRUEsWUFBSWtCLFFBQVFoQixTQUFTaUIsV0FBVCxFQUFaO0FBQUEsWUFDRUMsUUFBUWxCLFNBQVNpQixXQUFULEdBQXVCdE0sS0FBdkIsQ0FBNkIsQ0FBN0IsQ0FEVjs7QUFHQXFNLGNBQU12TixPQUFOLENBQWM7QUFBQSxpQkFBS0csRUFBRUwsQ0FBRixHQUFNSyxFQUFFdU4sS0FBRixHQUFVLEdBQXJCO0FBQUEsU0FBZDs7QUFFQSxZQUFJQyxZQUFZLEtBQUtoUyxPQUFMLENBQWEwRSxTQUFiLENBQXVCLGdCQUF2QixDQUFoQjs7QUFFQSxZQUFJLENBQUNzTixVQUFVN1IsSUFBVixFQUFMLEVBQXVCO0FBQ3JCNlIsc0JBQVksS0FBS2hTLE9BQUwsQ0FBYTJFLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUI3RCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxjQUF2QyxDQUFaO0FBQ0Q7O0FBRUQsWUFBSW1SLE9BQU9ELFVBQVV0TixTQUFWLENBQW9CLGtCQUFwQixFQUNSdkQsSUFEUSxDQUNIMlEsS0FERyxFQUNJO0FBQUEsaUJBQUt0TixFQUFFc0gsRUFBRixLQUFTdEgsRUFBRXNILEVBQUYsR0FBTyxFQUFFcEcsQ0FBbEIsQ0FBTDtBQUFBLFNBREosQ0FBWDs7QUFHQSxZQUFJd00sWUFBWUQsS0FBS3hNLEtBQUwsR0FDYmQsTUFEYSxDQUNOLE1BRE0sRUFDRTdELElBREYsQ0FDTyxPQURQLEVBQ2dCLGFBRGhCLEVBRWJBLElBRmEsQ0FFUixHQUZRLEVBRUgsWUFBTTtBQUNmLGNBQUlxUixJQUFJLEVBQUNqTyxHQUFHeU4sT0FBT2IsRUFBWCxFQUFlM00sR0FBR3dOLE9BQU9aLEVBQXpCLEVBQVI7QUFDQSxpQkFBT3FCLFNBQVNELENBQVQsRUFBWUEsQ0FBWixDQUFQO0FBQ0QsU0FMYSxDQUFoQjs7QUFPQUQsa0JBQVV2TSxLQUFWLENBQWdCc00sSUFBaEIsRUFDRzVCLFVBREgsR0FDZ0JDLFFBRGhCLENBQ3lCLEtBQUtyUSxrQkFEOUIsRUFDa0RhLElBRGxELENBQ3VELEdBRHZELEVBQzREO0FBQUEsaUJBQUtzUixTQUFTNU4sQ0FBVCxFQUFZQSxFQUFFdEUsTUFBZCxDQUFMO0FBQUEsU0FENUQ7O0FBR0ErUixhQUFLek0sSUFBTCxHQUFZNkssVUFBWixHQUF5QkMsUUFBekIsQ0FBa0MsS0FBS3JRLGtCQUF2QyxFQUNHYSxJQURILENBQ1EsR0FEUixFQUNhLFlBQU07QUFDZixjQUFJcVIsSUFBSSxFQUFDak8sR0FBR3lOLE9BQU96TixDQUFYLEVBQWNDLEdBQUd3TixPQUFPeE4sQ0FBeEIsRUFBUjtBQUNBLGlCQUFPaU8sU0FBU0QsQ0FBVCxFQUFZQSxDQUFaLENBQVA7QUFDRCxTQUpILEVBSUt2TixNQUpMOztBQU1Bb04sa0JBQVV0TixTQUFWLENBQW9CLGtCQUFwQixFQUNHSyxLQURILENBQ1MsTUFEVCxFQUNpQixNQURqQixFQUVHQSxLQUZILENBRVMsUUFGVCxFQUVtQixNQUZuQixFQUdHQSxLQUhILENBR1MsY0FIVCxFQUd5QixLQUh6Qjs7QUFLQTZNLGNBQU12TixPQUFOLENBQWMsVUFBQ0csQ0FBRCxFQUFPO0FBQ25CQSxZQUFFc00sRUFBRixHQUFPdE0sRUFBRU4sQ0FBVDtBQUNBTSxZQUFFdU0sRUFBRixHQUFPdk0sRUFBRUwsQ0FBVDtBQUNELFNBSEQ7O0FBS0EsaUJBQVNpTyxRQUFULENBQWtCcEssQ0FBbEIsRUFBcUJ4RCxDQUFyQixFQUF3QjtBQUN0Qix3QkFBWXdELEVBQUU3RCxDQUFkLFNBQW1CNkQsRUFBRTlELENBQXJCLHdCQUNRLENBQUM4RCxFQUFFN0QsQ0FBRixHQUFNSyxFQUFFTCxDQUFULElBQWMsQ0FEdEIsU0FDMkI2RCxFQUFFOUQsQ0FEN0IseUJBRVEsQ0FBQzhELEVBQUU3RCxDQUFGLEdBQU1LLEVBQUVMLENBQVQsSUFBYyxDQUZ0QixTQUUyQkssRUFBRU4sQ0FGN0IseUJBR1FNLEVBQUVMLENBSFYsU0FHZUssRUFBRU4sQ0FIakI7QUFJRDs7QUFFRCxZQUFJbU8sWUFBWSxLQUFLclMsT0FBTCxDQUFhMEUsU0FBYixDQUF1QixnQkFBdkIsQ0FBaEI7O0FBRUEsWUFBSSxDQUFDMk4sVUFBVWxTLElBQVYsRUFBTCxFQUF1QjtBQUNyQmtTLHNCQUFZLEtBQUtyUyxPQUFMLENBQWEyRSxNQUFiLENBQW9CLEdBQXBCLEVBQXlCN0QsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsY0FBdkMsQ0FBWjtBQUNEOztBQUVELFlBQUlYLE9BQU9rUyxVQUFVM04sU0FBVixDQUFvQixlQUFwQixFQUNSdkQsSUFEUSxDQUNIeVEsS0FERyxFQUNJO0FBQUEsaUJBQUtwTixFQUFFc0gsRUFBRixLQUFTdEgsRUFBRXNILEVBQUYsR0FBTyxFQUFFcEcsQ0FBbEIsQ0FBTDtBQUFBLFNBREosQ0FBWDs7QUFHQSxZQUFJNE0sWUFBWW5TLEtBQUtzRixLQUFMLEdBQWFkLE1BQWIsQ0FBb0IsR0FBcEIsRUFDYjdELElBRGEsQ0FDUixPQURRLEVBQ0MsYUFERCxFQUViQSxJQUZhLENBRVIsV0FGUSxFQUVLO0FBQUEsZ0NBQW1CNlEsT0FBT1osRUFBMUIsU0FBZ0NZLE9BQU9iLEVBQXZDO0FBQUEsU0FGTCxDQUFoQjs7QUFJQXdCLGtCQUFVM04sTUFBVixDQUFpQixNQUFqQixFQUNHN0QsSUFESCxDQUNRLEdBRFIsRUFDYVIsR0FBR2lTLE1BQUgsR0FBWWhLLElBQVosQ0FBaUI7QUFBQSxpQkFBSyxnQkFBTWlLLFNBQU4sQ0FBZ0JoTyxFQUFFckQsSUFBRixDQUFPb0gsSUFBdkIsQ0FBTDtBQUFBLFNBQWpCLEVBQW9EK0ksSUFBcEQsQ0FBeUQ7QUFBQSxpQkFBSzlNLEVBQUVyRCxJQUFGLENBQU9tUSxJQUFQLEdBQWMsR0FBbkI7QUFBQSxTQUF6RCxDQURiLEVBRUd4USxJQUZILENBRVEsT0FGUixFQUVpQixlQUZqQjs7QUFJQXdSLGtCQUFVM04sTUFBVixDQUFpQixNQUFqQixFQUNHN0QsSUFESCxDQUNRLE9BRFIsRUFDaUIsY0FEakIsRUFFR2tFLElBRkgsQ0FFUTtBQUFBLGlCQUFLUixFQUFFckQsSUFBRixDQUFPOEQsS0FBWjtBQUFBLFNBRlIsRUFHR25FLElBSEgsQ0FHUSxHQUhSLEVBR2MsWUFBVztBQUNyQixjQUFJMlIsUUFBUSxLQUFLMUMsT0FBTCxFQUFaO0FBQ0EsaUJBQU8sRUFBRTBDLE1BQU01UixLQUFOLEdBQWMsQ0FBaEIsQ0FBUDtBQUNELFNBTkgsRUFPR2tFLEtBUEgsQ0FPUyxRQVBULEVBT21CO0FBQUEsaUJBQUtQLEVBQUVxTSxRQUFGLElBQWNyTSxFQUFFa04sU0FBaEIsR0FBNEIsU0FBNUIsR0FBd0MsU0FBN0M7QUFBQSxTQVBuQjs7QUFTQSxZQUFJZ0IsYUFBYUosVUFBVTNNLEtBQVYsQ0FBZ0J4RixJQUFoQixDQUFqQjs7QUFFQXVTLG1CQUFXckMsVUFBWCxHQUNHQyxRQURILENBQ1ksS0FBS3JRLGtCQURqQixFQUVHYSxJQUZILENBRVEsV0FGUixFQUVxQjtBQUFBLGdDQUFrQjBELEVBQUVMLENBQXBCLFNBQXlCSyxFQUFFTixDQUEzQjtBQUFBLFNBRnJCOztBQUlBL0QsYUFBS3FGLElBQUwsR0FBWTZLLFVBQVosR0FBeUJDLFFBQXpCLENBQWtDLEtBQUtyUSxrQkFBdkMsRUFDR2EsSUFESCxDQUNRLFdBRFIsRUFDcUI7QUFBQSxnQ0FBbUI2USxPQUFPeE4sQ0FBMUIsU0FBK0J3TixPQUFPek4sQ0FBdEM7QUFBQSxTQURyQixFQUVHVSxNQUZIOztBQUlBeU4sa0JBQVUzTixTQUFWLENBQW9CLG9CQUFwQixFQUNHSyxLQURILENBQ1MsTUFEVCxFQUNpQjtBQUFBLGlCQUFLUCxFQUFFcU0sUUFBRixJQUFjck0sRUFBRWtOLFNBQWhCLEdBQTRCLGdCQUE1QixHQUErQyxnQkFBTTlMLE1BQU4sQ0FBYXBCLEVBQUVyRCxJQUFGLENBQU93UixLQUFQLEdBQWUsQ0FBNUIsQ0FBcEQ7QUFBQSxTQURqQixFQUVHNU4sS0FGSCxDQUVTLFFBRlQsRUFFbUI7QUFBQSxpQkFBS1AsRUFBRXFNLFFBQUYsSUFBY3JNLEVBQUVrTixTQUFoQixHQUE0QixTQUE1QixHQUF3QyxTQUE3QztBQUFBLFNBRm5COztBQUlBdlIsZUFBT2tTLFVBQVUzTixTQUFWLENBQW9CLGVBQXBCLENBQVA7O0FBRUEsWUFBSXZFLEtBQUtBLElBQUwsRUFBSixFQUFpQjtBQUNmLGVBQUt5UyxZQUFMLENBQWtCelMsSUFBbEI7O0FBRUEsY0FBSTBTLGNBQWMxUyxLQUFLa0gsRUFBTCxDQUFRLE9BQVIsQ0FBbEI7QUFDQWxILGVBQUtrSCxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFDN0MsQ0FBRCxFQUFPO0FBQ3hCO0FBQ0VxTyx3QkFBWWhPLElBQVosU0FBdUJMLEVBQUVyRCxJQUF6QjtBQUNBO0FBQ0EyUixrQkFBTWpPLElBQU4sU0FBaUJMLENBQWpCO0FBQ0QsV0FMRDtBQU1EOztBQUVEO0FBQ0EsWUFBSTRDLE9BQU8sSUFBWDs7QUFFQSxpQkFBUzBMLEtBQVQsQ0FBZXRPLENBQWYsRUFBa0I7QUFDaEIsY0FBSUEsRUFBRXFNLFFBQU4sRUFBZ0I7QUFDZHJNLGNBQUVrTixTQUFGLEdBQWNsTixFQUFFcU0sUUFBaEI7QUFDQXJNLGNBQUVxTSxRQUFGLEdBQWEsSUFBYjtBQUNELFdBSEQsTUFHTztBQUNMck0sY0FBRXFNLFFBQUYsR0FBYXJNLEVBQUVrTixTQUFmO0FBQ0FsTixjQUFFa04sU0FBRixHQUFjLElBQWQ7QUFDRDtBQUNERCxpQkFBTzVNLElBQVAsQ0FBWXVDLElBQVosRUFBa0I1QyxDQUFsQjtBQUNEOztBQUVEa0ssbUJBQVcsWUFBTTtBQUNmLGlCQUFLeE8sTUFBTCxDQUFZaU0sU0FBWjtBQUNELFNBRkQsRUFFRyxLQUFLbE0sa0JBRlI7QUFHRDs7QUFFRCxhQUFPLElBQVA7QUFFRDs7OytCQUVVLENBQUU7O0FBRWI7Ozs7Ozs7d0JBSWU7QUFDYixVQUFJOFMsY0FBYyxLQUFLNVIsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRNLEtBQWpCLENBQXVCb0IsS0FBdkIsR0FBK0JuUCxPQUFPQyxNQUFQLENBQWMsS0FBS3ZCLElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUI0TSxLQUFqQixDQUF1Qm9CLEtBQXJDLENBQS9CLEdBQTZFLEVBQS9GO0FBQ0EsVUFBSW9CLFVBQVVELFlBQVlFLE1BQVosQ0FBbUIsVUFBVWpOLEdBQVYsRUFBZTdGLElBQWYsRUFBcUI7QUFDcEQ2RixZQUFJN0YsS0FBSzJMLEVBQVQsSUFBZTNMLElBQWY7QUFDQSxlQUFPNkYsR0FBUDtBQUNELE9BSGEsRUFHWCxFQUhXLENBQWQ7QUFJQSxVQUFJNEssV0FBVyxFQUFmO0FBQ0FtQyxrQkFBWTFPLE9BQVosQ0FBb0IsVUFBU2xFLElBQVQsRUFBZTtBQUNqQyxZQUFJRCxTQUFTOFMsUUFBUTdTLEtBQUtELE1BQWIsQ0FBYjtBQUNBLFlBQUlBLE1BQUosRUFBWTtBQUNWLFdBQUNBLE9BQU8yUSxRQUFQLEtBQW9CM1EsT0FBTzJRLFFBQVAsR0FBa0IsRUFBdEMsQ0FBRCxFQUE0Q3RLLElBQTVDLENBQWlEcEcsSUFBakQ7QUFDRCxTQUZELE1BRU87QUFDTHlRLG1CQUFTckssSUFBVCxDQUFjcEcsSUFBZDtBQUNEO0FBQ0YsT0FQRDtBQVFBLGFBQU95USxTQUFTLENBQVQsQ0FBUDtBQUNEOzs7OztrQkFyTWtCSCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCeUMsVyxXQU1sQiw2QkFBUyxPQUFULEM7OztBQUpELDZCQUE0RDtBQUFBLDRCQUE5Qy9ULE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHFIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQaUIsU0FBR3FILEtBQUgsQ0FBU3dMLGNBQVQ7O0FBRUEsV0FBS25ULE9BQUwsR0FBZSxLQUFLcUwsVUFBTCxDQUFnQjlLLE1BQWhCLENBQXVCLGdDQUF2QixDQUFmO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBS1AsT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsYUFBS0gsT0FBTCxHQUFlLEtBQUtxTCxVQUFMLENBQWdCMUcsTUFBaEIsQ0FBdUIsS0FBdkIsRUFDWjdELElBRFksQ0FDUCxPQURPLEVBQ0UsNEJBREYsQ0FBZjtBQUVEOztBQUVELFVBQUl3SyxNQUFNaEwsR0FBR2lMLEtBQUgsQ0FBUyxLQUFLQyxTQUFMLENBQWVyTCxJQUFmLEVBQVQsQ0FBVjs7QUFFQSxXQUFLSCxPQUFMLENBQWErRSxLQUFiLENBQW1CLE1BQW5CLEVBQTJCdUcsSUFBSSxDQUFKLElBQVMsQ0FBVCxHQUFhLElBQXhDLEVBQThDdkcsS0FBOUMsQ0FBb0QsS0FBcEQsRUFBMkR1RyxJQUFJLENBQUosSUFBUyxDQUFULEdBQWEsSUFBeEU7O0FBRUE7QUFDQSxXQUFLdEwsT0FBTCxDQUFhK0UsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQTtBQUNBLFVBQUksS0FBSy9FLE9BQUwsQ0FBYTBFLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJ2RSxJQUE1QixFQUFKLEVBQXdDOztBQUV4QztBQUNBRyxTQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQjhHLEVBQWxCLENBQXFCLDJCQUFyQixFQUFrRDtBQUFBLGVBQU0sT0FBS3pILFFBQUwsRUFBTjtBQUFBLE9BQWxEOztBQUVBO0FBQ0EsVUFBSXlNLE9BQU8sS0FBS3JNLE9BQUwsQ0FBYTJFLE1BQWIsQ0FBb0IsS0FBcEIsRUFBMkI3RCxJQUEzQixDQUFnQyxPQUFoQyxFQUF5QyxxQkFBekMsRUFBZ0U2RCxNQUFoRSxDQUF1RSxJQUF2RSxDQUFYO0FBQ0EsVUFBSXFFLGdCQUFnQixLQUFLVSxRQUFMLENBQWNqSCxPQUFPQyxNQUFQLENBQWMsS0FBS3ZCLElBQUwsQ0FBVW9JLEtBQXhCLENBQWQsQ0FBcEI7QUFDQSxXQUFLSSxRQUFMLENBQWMwQyxJQUFkLEVBQW9CckQsYUFBcEI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUksS0FBS2hKLE9BQVQsRUFBa0I7QUFDaEIsYUFBS0EsT0FBTCxDQUFhMEUsU0FBYixDQUF1QixHQUF2QixFQUE0QkUsTUFBNUI7QUFDQSxhQUFLNUUsT0FBTCxDQUFhK0UsS0FBYixDQUFtQixTQUFuQixFQUE4QixJQUE5QjtBQUNEO0FBQ0Y7Ozs7O2tCQTVDa0JtTyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCRSxpQixXQU1sQixzQzs7O0FBSkQsbUNBQTREO0FBQUEsNEJBQTlDalUsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsaUlBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdRO0FBQUE7O0FBQ1AsVUFBSStILE9BQU8sSUFBWDs7QUFFQSxVQUFJaU0sVUFBVSxLQUFLbFMsSUFBTCxDQUFVZ0csUUFBVixDQUFtQjJFLEVBQWpDOztBQUVBLFdBQUtqTSxNQUFMLENBQVlDLEtBQVosK0JBQThDdVQsT0FBOUM7O0FBRUEsV0FBS3JULE9BQUwsR0FBZSxLQUFLdUssTUFBTCxDQUFZNUYsTUFBWixDQUFtQixLQUFuQixFQUNaN0QsSUFEWSxDQUNQLElBRE8sRUFDRHVTLE9BREMsRUFFWnZTLElBRlksQ0FFUCxPQUZPLEVBRUUsY0FGRixDQUFmOztBQUlBLFVBQUl3UyxPQUFPLEtBQUt0VCxPQUFMLENBQWEyRSxNQUFiLENBQW9CLE1BQXBCLENBQVg7O0FBRUEsVUFBSTRPLFNBQVNELEtBQUszTyxNQUFMLENBQVksS0FBWixFQUFtQjdELElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHFCQUFqQyxDQUFiOztBQUVBLFVBQUkwUyxjQUFjRCxPQUFPNU8sTUFBUCxDQUFjLE1BQWQsRUFBc0IyRSxJQUF0QixDQUEyQiwwQkFBM0IsQ0FBbEI7QUFDQSxVQUFJLEtBQUtuSSxJQUFMLENBQVU4RCxLQUFkLEVBQXFCO0FBQ25CdU8sb0JBQVk3TyxNQUFaLENBQW1CLE1BQW5CLEVBQTJCN0QsSUFBM0IsQ0FBZ0MsT0FBaEMsRUFBeUMsb0JBQXpDLEVBQStEa0UsSUFBL0QsVUFBMkUsS0FBSzdELElBQUwsQ0FBVThELEtBQXJGO0FBQ0Q7O0FBRUQsVUFBSXVFLFVBQVU4SixLQUFLM08sTUFBTCxDQUFZLEtBQVosRUFBbUI3RCxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxzQkFBakMsRUFBeUQ2RCxNQUF6RCxDQUFnRSxLQUFoRSxFQUF1RTdELElBQXZFLENBQTRFLE9BQTVFLEVBQXFGLGNBQXJGLEVBQXFHNkQsTUFBckcsQ0FBNEcsS0FBNUcsRUFBbUg3RCxJQUFuSCxDQUF3SCxPQUF4SCxFQUFpSSxtQkFBakksQ0FBZDs7QUFwQk87QUFBQTtBQUFBOztBQUFBO0FBc0JQLDZCQUFnQjJCLE9BQU9DLE1BQVAsQ0FBYyxLQUFLdkIsSUFBTCxDQUFVZ0csUUFBVixDQUFtQjRDLFlBQWpDLENBQWhCLDhIQUFnRTtBQUFBLGNBQXZEMEosR0FBdUQ7O0FBQzlELGNBQUkvSCxNQUFNbEMsUUFBUTdFLE1BQVIsQ0FBZSxLQUFmLEVBQXNCN0QsSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0Msa0JBQXBDLENBQVY7QUFDQTRLLGNBQUkvRyxNQUFKLENBQVcsS0FBWCxFQUFrQjdELElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLG1CQUFoQyxFQUFxRDZELE1BQXJELENBQTRELE9BQTVELEVBQXFFN0QsSUFBckUsQ0FBMEUsS0FBMUUsRUFBaUYyUyxJQUFJM0gsRUFBckYsRUFBeUY5RyxJQUF6RixDQUE4RnlPLElBQUl4TyxLQUFsRztBQUNBLGNBQUl5SCxRQUFRaEIsSUFBSS9HLE1BQUosQ0FBVyxLQUFYLEVBQWtCN0QsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFENkQsTUFBckQsQ0FBNEQsT0FBNUQsRUFBcUU3RCxJQUFyRSxDQUEwRSxJQUExRSxFQUFnRjJTLElBQUkzSCxFQUFwRixFQUF3RmhMLElBQXhGLENBQTZGLE9BQTdGLEVBQXNHLFlBQXRHLEVBQ1RBLElBRFMsQ0FDSixVQURJLEVBQ1EsRUFEUixFQUVUQSxJQUZTLENBRUosTUFGSSxFQUVJMlMsSUFBSTNILEVBRlIsRUFHVGhMLElBSFMsQ0FHSixNQUhJLEVBR0kyUyxJQUFJbEwsSUFIUixFQUlUekgsSUFKUyxDQUlKLE9BSkksRUFJSzJTLElBQUk5UixLQUpULEVBS1QwRixFQUxTLENBS04sUUFMTSxFQUtJLFlBQVk7QUFDeEJELGlCQUFLakcsSUFBTCxDQUFVZ0csUUFBVixDQUFtQjRDLFlBQW5CLENBQWdDLEtBQUsrQixFQUFyQyxFQUF5Q25LLEtBQXpDLEdBQWlELEtBQUtBLEtBQXREO0FBQ0QsV0FQUyxFQVFUMEYsRUFSUyxDQVFOLE9BUk0sRUFRRyxLQUFLcU0sUUFSUixFQVNUck0sRUFUUyxDQVNOLE9BVE0sRUFTRyxLQUFLcU0sUUFUUixFQVVUck0sRUFWUyxDQVVOLE9BVk0sRUFVRyxLQUFLcU0sUUFWUixDQUFaO0FBV0E7QUFDQSxjQUFJRCxJQUFJbEwsSUFBSixLQUFhLFNBQWpCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBa0wsZ0JBQUk5UixLQUFKLEdBQVk4UixJQUFJOVIsS0FBSixJQUFhLEtBQXpCO0FBQ0ErSyxrQkFBTTVMLElBQU4sQ0FBVyxNQUFYLEVBQW1CLFVBQW5CLEVBQStCQSxJQUEvQixDQUFvQyxVQUFwQyxFQUFnRCxJQUFoRCxFQUNHQSxJQURILENBQ1EsT0FEUixFQUNpQjJTLElBQUk5UixLQURyQixFQUVHMEYsRUFGSCxDQUVNLFFBRk4sRUFFZ0IsWUFBVztBQUN2QkQsbUJBQUtqRyxJQUFMLENBQVVnRyxRQUFWLENBQW1CNEMsWUFBbkIsQ0FBZ0MsS0FBSytCLEVBQXJDLEVBQXlDbkssS0FBekMsR0FBaUQsS0FBS0EsS0FBTCxHQUFhLEtBQUtnUyxPQUFuRTtBQUNELGFBSkg7QUFLRDtBQUNEakksY0FBSS9HLE1BQUosQ0FBVyxNQUFYLEVBQW1CN0QsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakM7QUFDRDtBQWpETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1EUCxVQUFJOFMsU0FBU04sS0FBSzNPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CN0QsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUE4UyxhQUFPalAsTUFBUCxDQUFjLFFBQWQsRUFBd0JLLElBQXhCLENBQTZCLElBQTdCLEVBQW1DcUMsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBTTtBQUNuRCxZQUFJaU0sS0FBS25ULElBQUwsR0FBWTBULGFBQVosRUFBSixFQUFpQztBQUMvQnZULGFBQUdxSCxLQUFILENBQVN3TCxjQUFUO0FBQ0EsaUJBQUs3VCxPQUFMLENBQWFELGVBQWIsQ0FBNkIsT0FBSzhCLElBQUwsQ0FBVWdHLFFBQXZDO0FBQ0EsaUJBQUt2SCxRQUFMLENBQWNpRixJQUFkO0FBQ0Q7QUFDRCxlQUFPLEtBQVA7QUFDRCxPQVBEO0FBUUErTyxhQUFPalAsTUFBUCxDQUFjLFFBQWQsRUFBd0JLLElBQXhCLENBQTZCLFFBQTdCLEVBQXVDcUMsRUFBdkMsQ0FBMEMsT0FBMUMsRUFBbUQsWUFBTTtBQUN2RC9HLFdBQUdxSCxLQUFILENBQVN3TCxjQUFUO0FBQ0EsZUFBS3ZULFFBQUwsQ0FBY2lGLElBQWQ7QUFDRCxPQUhEOztBQUtBO0FBQ0Esb0RBQThCLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsaUJBQTNCLEVBQThDLGVBQTlDLENBQTlCOztBQUVBLFVBQUlpUCxlQUFldEssUUFBUTlFLFNBQVIsQ0FBa0IsYUFBbEIsRUFBaUN2RSxJQUFqQyxFQUFuQjtBQUNBLFVBQUkyVCxZQUFKLEVBQWtCO0FBQ2hCQSxxQkFBYUMsS0FBYjtBQUNEOztBQUVELFdBQUtsVSxNQUFMLENBQVlDLEtBQVosOEJBQTZDdVQsT0FBN0M7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7O2tCQXBGa0JELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCWSxZLFdBTWxCLHNDOzs7QUFKRCw4QkFBNEQ7QUFBQSw0QkFBOUM3VSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx1SEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7QUFDUCxVQUFJK0gsT0FBTyxJQUFYOztBQUVBLFVBQUk2TSxtQkFBbUIsS0FBSzlTLElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUI0TSxLQUFqQixDQUF1QjBELFVBQTlDO0FBQ0EsVUFBSUMsU0FBUyxDQUFiOztBQUVBLFVBQUlwQixjQUFjLEtBQUs1UixJQUFMLENBQVV5QyxNQUFWLENBQWlCNE0sS0FBakIsQ0FBdUJvQixLQUF2QixHQUErQm5QLE9BQU9DLE1BQVAsQ0FBYyxLQUFLdkIsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRNLEtBQWpCLENBQXVCb0IsS0FBckMsQ0FBL0IsR0FBNkUsRUFBL0Y7QUFBQSxVQUNFd0MsY0FBYyxLQUFLalQsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRNLEtBQWpCLENBQXVCc0IsS0FBdkIsR0FBK0JyUCxPQUFPQyxNQUFQLENBQWMsS0FBS3ZCLElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUI0TSxLQUFqQixDQUF1QnNCLEtBQXJDLENBQS9CLEdBQTZFLEVBRDdGOztBQUdBLFVBQUlFLFlBQVksS0FBS2hTLE9BQUwsQ0FBYTBFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFVBQUksQ0FBQ3NOLFVBQVU3UixJQUFWLEVBQUwsRUFBdUI7QUFDckI2UixvQkFBWSxLQUFLaFMsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjBQLE9BQXpCLENBQWlDLGNBQWpDLEVBQWlELElBQWpELENBQVo7QUFDRDs7QUFFRCxVQUFJdkMsUUFBUUUsVUFBVXROLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUN2RCxJQUFyQyxFQUFaO0FBQ0EsVUFBSW1ULGFBQWEsS0FBS0Msa0JBQUwsQ0FBd0JILFdBQXhCLEVBQXFDdEMsS0FBckMsQ0FBakI7O0FBRUEsVUFBSUcsT0FBT0QsVUFBVXROLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUN2RCxJQUFyQyxDQUEwQ21ULFVBQTFDLEVBQXNEO0FBQUEsZUFBSzlQLEVBQUVzSCxFQUFQO0FBQUEsT0FBdEQsQ0FBWDs7QUFFQSxVQUFJdUcsWUFBWSxLQUFLclMsT0FBTCxDQUFhMEUsU0FBYixDQUF1QixnQkFBdkIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDMk4sVUFBVWxTLElBQVYsRUFBTCxFQUF1QjtBQUNyQmtTLG9CQUFZLEtBQUtyUyxPQUFMLENBQWEyRSxNQUFiLENBQW9CLEdBQXBCLEVBQXlCMFAsT0FBekIsQ0FBaUMsY0FBakMsRUFBaUQsSUFBakQsQ0FBWjtBQUNEOztBQUVELFVBQUl6QyxRQUFRUyxVQUFVM04sU0FBVixDQUFvQixlQUFwQixFQUFxQ3ZELElBQXJDLEVBQVo7QUFDQSxVQUFJcVQsYUFBYSxLQUFLRCxrQkFBTCxDQUF3QnhCLFdBQXhCLEVBQXFDbkIsS0FBckMsQ0FBakI7O0FBRUEsVUFBSXpSLE9BQU9rUyxVQUFVM04sU0FBVixDQUFvQixlQUFwQixFQUFxQ3ZELElBQXJDLENBQTBDcVQsVUFBMUMsRUFBc0Q7QUFBQSxlQUFLaFEsRUFBRXNILEVBQVA7QUFBQSxPQUF0RCxDQUFYOztBQUVBO0FBQ0EsVUFBSTNMLEtBQUtxRixJQUFMLEdBQVlyRSxJQUFaLEdBQW1CcUIsTUFBbkIsS0FBOEIsQ0FBOUIsSUFDRnJDLEtBQUtzRixLQUFMLEdBQWF0RSxJQUFiLEdBQW9CcUIsTUFBcEIsS0FBK0IsQ0FEN0IsSUFFRnlQLEtBQUt4TSxLQUFMLEdBQWF0RSxJQUFiLEdBQW9CcUIsTUFBcEIsS0FBK0IsQ0FGN0IsSUFHRnlQLEtBQUt6TSxJQUFMLEdBQVlyRSxJQUFaLEdBQW1CcUIsTUFBbkIsS0FBOEIsQ0FIaEMsRUFHbUM7O0FBRW5DLFVBQUkwUCxZQUFZRCxLQUFLeE0sS0FBTCxHQUFhZCxNQUFiLENBQW9CLEdBQXBCLEVBQ2IwUCxPQURhLENBQ0wsYUFESyxFQUNVLElBRFYsQ0FBaEI7O0FBR0FuQyxnQkFBVXZOLE1BQVYsQ0FBaUIsTUFBakIsRUFDRzBQLE9BREgsQ0FDVyxhQURYLEVBQzBCLElBRDFCLEVBRUd0UCxLQUZILENBRVMsY0FGVCxFQUV5QixhQUFLO0FBQzFCLFlBQUlQLEVBQUVpUSxNQUFGLElBQVksQ0FBaEIsRUFBbUI7QUFDakJqUSxZQUFFaVEsTUFBRixHQUFXLENBQVgsQ0FBY2pRLEVBQUU4RyxHQUFGLEdBQVEsRUFBUjtBQUNmLFNBRkQsTUFFTyxJQUFJOUcsRUFBRWlRLE1BQUYsSUFBWSxDQUFoQixFQUFtQjtBQUN4QmpRLFlBQUVpUSxNQUFGLEdBQVcsQ0FBWCxDQUFjalEsRUFBRThHLEdBQUYsR0FBUSxFQUFSO0FBQ2YsU0FGTSxNQUVBO0FBQ0w5RyxZQUFFOEcsR0FBRixHQUFRLEVBQVI7QUFDRDtBQUNELGVBQU85RyxFQUFFaVEsTUFBVDtBQUNELE9BWEgsRUFZRzFQLEtBWkgsQ0FZUyxRQVpULEVBWW1CO0FBQUEsZUFBS1AsRUFBRWtRLEtBQUYsSUFBVy9VLFNBQWhCO0FBQUEsT0FabkI7O0FBY0F1UyxnQkFBVXZOLE1BQVYsQ0FBaUIsTUFBakIsRUFDRzBQLE9BREgsQ0FDVyxjQURYLEVBQzJCLElBRDNCLEVBRUdBLE9BRkgsQ0FFVyxlQUZYLEVBRTRCLElBRjVCLEVBR0dyUCxJQUhILENBR1E7QUFBQSxlQUFLUixFQUFFUyxLQUFQO0FBQUEsT0FIUixFQUlHbkUsSUFKSCxDQUlRLGFBSlIsRUFJdUIsUUFKdkI7O0FBTUFtUixXQUFLek0sSUFBTCxHQUFZWixNQUFaOztBQUVBcU4sYUFBT0QsVUFBVXROLFNBQVYsQ0FBb0IsZUFBcEIsQ0FBUDs7QUFFQSxVQUFJLEtBQUt2RCxJQUFMLENBQVV5QyxNQUFWLENBQWlCNE0sS0FBakIsQ0FBdUJqSSxJQUF2QixLQUFnQyxVQUFwQyxFQUFnRDtBQUM5QztBQUNBbkIsYUFBS2xILE1BQUwsQ0FBWXlFLE1BQVosQ0FBbUIsTUFBbkIsRUFBMkJELFNBQTNCLENBQXFDLFFBQXJDLEVBQ0d2RCxJQURILENBQ1FtVCxVQURSLEVBRUc3TyxLQUZILEdBRVdkLE1BRlgsQ0FFa0IsUUFGbEIsRUFHRzBQLE9BSEgsQ0FHVyxlQUhYLEVBRzRCLElBSDVCLEVBSUd2VCxJQUpILENBSVEsSUFKUixFQUljO0FBQUEsNEJBQWMwRCxFQUFFc0gsRUFBaEI7QUFBQSxTQUpkLEVBS0doTCxJQUxILENBS1EsU0FMUixFQUttQixXQUxuQixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQjtBQUFBLGlCQUFNMEQsRUFBRThHLEdBQVI7QUFBQSxTQU5oQixFQU9HeEssSUFQSCxDQU9RLE1BUFIsRUFPZ0IsQ0FQaEIsRUFRR0EsSUFSSCxDQVFRLGNBUlIsRUFRd0IsRUFSeEIsRUFTR0EsSUFUSCxDQVNRLGFBVFIsRUFTdUIsRUFUdkIsRUFVR0EsSUFWSCxDQVVRLGFBVlIsRUFVdUIsYUFWdkIsRUFXR0EsSUFYSCxDQVdRLFFBWFIsRUFXa0IsTUFYbEIsRUFZRzZELE1BWkgsQ0FZVSxNQVpWLEVBYUc3RCxJQWJILENBYVEsR0FiUixFQWFhLDRCQWJiLEVBY0dpRSxLQWRILENBY1MsTUFkVCxFQWNpQjtBQUFBLGlCQUFLUCxFQUFFa1EsS0FBRixJQUFXL1UsU0FBaEI7QUFBQSxTQWRqQjtBQWVBO0FBQ0FzUyxhQUFLdk4sU0FBTCxDQUFlLGtCQUFmLEVBQW1DSyxLQUFuQyxDQUF5QyxZQUF6QyxFQUF1RDtBQUFBLGlDQUFtQlAsRUFBRXNILEVBQXJCO0FBQUEsU0FBdkQ7QUFDRDs7QUFFRCxVQUFJd0csWUFBWW5TLEtBQUtzRixLQUFMLEdBQWFkLE1BQWIsQ0FBb0IsR0FBcEIsRUFDYjBQLE9BRGEsQ0FDTCxhQURLLEVBQ1UsSUFEVixFQUVidlQsSUFGYSxDQUVSLElBRlEsRUFFRjtBQUFBLGVBQUswRCxFQUFFc0gsRUFBUDtBQUFBLE9BRkUsQ0FBaEI7O0FBSUF3RyxnQkFBVTNOLE1BQVYsQ0FBaUIsTUFBakIsRUFDRzdELElBREgsQ0FDUSxHQURSLEVBQ2FSLEdBQUdpUyxNQUFILEdBQVloSyxJQUFaLENBQWlCO0FBQUEsZUFBSyxnQkFBTWlLLFNBQU4sQ0FBZ0JoTyxFQUFFK0QsSUFBbEIsQ0FBTDtBQUFBLE9BQWpCLEVBQStDK0ksSUFBL0MsQ0FBb0Q7QUFBQSxlQUFLOU0sRUFBRThNLElBQUYsR0FBUyxHQUFkO0FBQUEsT0FBcEQsQ0FEYixFQUVHdk0sS0FGSCxDQUVTLE1BRlQsRUFFaUI7QUFBQSxlQUFLUCxFQUFFa1EsS0FBRixJQUFXLGdCQUFNOU8sTUFBTixDQUFhcEIsRUFBRW1PLEtBQUYsR0FBVSxDQUF2QixDQUFoQjtBQUFBLE9BRmpCLEVBR0cwQixPQUhILENBR1csZUFIWCxFQUc0QixJQUg1QixFQUlHQSxPQUpILENBSVcsa0JBSlgsRUFJK0I7QUFBQSxlQUFLN1AsRUFBRW1RLFNBQVA7QUFBQSxPQUovQixFQUtHTixPQUxILENBS1csZ0JBTFgsRUFLNkI7QUFBQSxlQUFLNVIsT0FBT0MsTUFBUCxDQUFjOEIsRUFBRStFLEtBQWhCLEVBQXVCL0csTUFBdkIsSUFBaUNDLE9BQU9DLE1BQVAsQ0FBYzhCLEVBQUUrRSxLQUFoQixFQUF1Qi9HLE1BQXZCLEdBQWdDLENBQXRFO0FBQUEsT0FMN0I7O0FBT0E4UCxnQkFBVTNOLE1BQVYsQ0FBaUIsTUFBakIsRUFDRzBQLE9BREgsQ0FDVyxjQURYLEVBQzJCLElBRDNCLEVBRUdyUCxJQUZILENBRVE7QUFBQSxlQUFLUixFQUFFUyxLQUFQO0FBQUEsT0FGUixFQUdHbkUsSUFISCxDQUdRLEdBSFIsRUFHYSxZQUFXO0FBQ3BCO0FBQ0EsWUFBSWtFLE9BQU8xRSxHQUFHQyxNQUFILENBQVUsSUFBVixDQUFYO0FBQ0EsWUFBSXlFLEtBQUtBLElBQUwsR0FBWTRQLFVBQVosQ0FBdUIsR0FBdkIsS0FBK0I1UCxLQUFLQSxJQUFMLEdBQVk2UCxRQUFaLENBQXFCLEdBQXJCLENBQW5DLEVBQThEO0FBQzVEek4sZUFBS0ssT0FBTCxDQUFhMUUsUUFBYixDQUFzQixFQUFDM0QsVUFBVSxFQUFDWSxTQUFTZ0YsSUFBVixFQUFYLEVBQXRCLEVBQW1EOFAsU0FBbkQ7QUFDRDtBQUNELFlBQUlyQyxRQUFRLEtBQUsxQyxPQUFMLEVBQVo7QUFDQTtBQUNBLFlBQUlvRSxTQUFTMUIsTUFBTTVSLEtBQW5CLEVBQTBCO0FBQ3hCc1QsbUJBQVMxQixNQUFNNVIsS0FBZjtBQUNEO0FBQ0QsZUFBTyxFQUFFNFIsTUFBTTVSLEtBQU4sR0FBYyxDQUFoQixDQUFQO0FBQ0QsT0FmSDs7QUFpQkFWLFdBQUtxRixJQUFMLEdBQVlaLE1BQVo7O0FBRUF6RSxhQUFPa1MsVUFBVTNOLFNBQVYsQ0FBb0IsZUFBcEIsQ0FBUDs7QUFFQSxVQUFJLEtBQUt2RCxJQUFMLENBQVV5QyxNQUFWLENBQWlCNE0sS0FBakIsQ0FBdUJ1RSxJQUEzQixFQUFpQztBQUMvQjVVLGFBQUswRSxJQUFMLENBQVV2RSxHQUFHeVUsSUFBSCxHQUNQMU4sRUFETyxDQUNKLE9BREksRUFDSzJOLFdBREwsRUFFUDNOLEVBRk8sQ0FFSixNQUZJLEVBRUk0TixPQUZKLEVBR1A1TixFQUhPLENBR0osS0FISSxFQUdHNk4sU0FISCxDQUFWO0FBSUQ7O0FBRUQsVUFBSS9VLFFBQVEsQ0FBQ0EsS0FBS2dWLEtBQUwsRUFBYixFQUEyQjs7QUFFekIsYUFBS3ZDLFlBQUwsQ0FBa0J6UyxJQUFsQjs7QUFFQSxZQUFJLEtBQUtnQixJQUFMLENBQVV5QyxNQUFWLENBQWlCNE0sS0FBakIsQ0FBdUI0RSxjQUEzQixFQUEyQztBQUN6QyxjQUFJdkMsY0FBYzFTLEtBQUtrSCxFQUFMLENBQVEsT0FBUixDQUFsQjtBQUNBbEgsZUFBS2tILEVBQUwsQ0FBUSxPQUFSLEVBQWlCLFVBQVM3QyxDQUFULEVBQVk7QUFDM0I7QUFDQTZRLDJCQUFleFEsSUFBZixDQUFvQixJQUFwQjtBQUNBO0FBQ0FnTyx3QkFBWWhPLElBQVosQ0FBaUIsSUFBakIsRUFBdUJMLENBQXZCO0FBQ0QsV0FMRDtBQU1EO0FBQ0Y7O0FBRUQsVUFBSXlQLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxZQUFJcUIsWUFBWWhWLEdBQUdpVixhQUFILEdBQW1CQyxRQUFuQixDQUE0QixDQUFDaEIsV0FBV2hTLE1BQVosR0FBcUIsRUFBakQsQ0FBaEI7QUFDQSxZQUFJaVQsWUFBWW5WLEdBQUdvVixTQUFILENBQWF0QixXQUFiLEVBQTBCdEksRUFBMUIsQ0FBNkI7QUFBQSxpQkFBS3RILEVBQUVzSCxFQUFQO0FBQUEsU0FBN0IsRUFBd0M2SixRQUF4QyxDQUFpRCxFQUFqRCxDQUFoQjtBQUNBLFlBQUlDLGVBQWV0VixHQUFHdVYsWUFBSCxHQUFrQkwsUUFBbEIsQ0FBMkIsSUFBM0IsRUFBaUNyQixNQUFqQyxDQUF3Q0EsU0FBTyxDQUEvQyxFQUFrRDJCLFVBQWxELENBQTZELENBQTdELENBQW5COztBQUVBO0FBQ0EsWUFBSUMsU0FBU3pWLEdBQUd5VixNQUFILENBQVUsS0FBS2xWLEtBQWYsRUFBc0IyVSxRQUF0QixDQUErQixJQUEvQixDQUFiO0FBQ0E7QUFDQSxZQUFJUSxTQUFTMVYsR0FBRzBWLE1BQUgsQ0FBVSxLQUFLL1UsTUFBZixFQUF1QnVVLFFBQXZCLENBQWdDLElBQWhDLENBQWI7O0FBRUEsWUFBSSxLQUFLclUsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRNLEtBQWpCLENBQXVCakksSUFBdkIsS0FBZ0MsT0FBcEMsRUFBNkM7QUFDM0M7QUFDQXdOLG1CQUFTelYsR0FBR3lWLE1BQUgsQ0FBVSxLQUFLbFYsS0FBZixFQUFzQjJVLFFBQXRCLENBQStCLEdBQS9CLENBQVQ7QUFDQTtBQUNBUSxtQkFBUzFWLEdBQUcwVixNQUFILENBQVU7QUFBQSxtQkFBS3hSLEVBQUVtTyxLQUFGLEdBQVUsRUFBZjtBQUFBLFdBQVYsRUFBNkI2QyxRQUE3QixDQUFzQyxDQUF0QyxDQUFUO0FBQ0Q7O0FBRUQsWUFBSXRCLGFBQWE1VCxHQUFHMlYsZUFBSCxHQUFxQnJFLEtBQXJCLENBQTJCNEMsVUFBM0IsRUFDZDNFLEtBRGMsQ0FDUixRQURRLEVBQ0V5RixTQURGLEVBRWR6RixLQUZjLENBRVIsTUFGUSxFQUVBNEYsU0FGQTtBQUdmO0FBSGUsU0FJZDVGLEtBSmMsQ0FJUixHQUpRLEVBSUhrRyxNQUpHLEVBS2RsRyxLQUxjLENBS1IsR0FMUSxFQUtIbUcsTUFMRyxFQU1kbkcsS0FOYyxDQU1SLFNBTlEsRUFNRytGLFlBTkgsRUFPZHZPLEVBUGMsQ0FPWCxNQVBXLEVBT0g2TyxNQVBHLEVBUWQ3TyxFQVJjLENBUVgsS0FSVyxFQVFKRCxLQUFLbEgsTUFBTCxDQUFZaU0sU0FSUixDQUFqQjs7QUFVQTtBQUNBK0gsbUJBQVdpQyxPQUFYO0FBQ0QsT0EvQkQsTUErQk87QUFDTDtBQUNBRDtBQUNBOU8sYUFBS2xILE1BQUwsQ0FBWWlNLFNBQVo7QUFDRDs7QUFFRCxlQUFTK0osTUFBVCxHQUFrQjtBQUNoQmpFLGFBQUt2TixTQUFMLENBQWUsa0JBQWYsRUFDRzVELElBREgsQ0FDUSxJQURSLEVBQ2M7QUFBQSxpQkFBSzBELEVBQUVtTixNQUFGLENBQVN6TixDQUFkO0FBQUEsU0FEZCxFQUVHcEQsSUFGSCxDQUVRLElBRlIsRUFFYztBQUFBLGlCQUFLMEQsRUFBRW1OLE1BQUYsQ0FBU3hOLENBQWQ7QUFBQSxTQUZkLEVBR0dyRCxJQUhILENBR1EsSUFIUixFQUdjO0FBQUEsaUJBQUswRCxFQUFFaEYsTUFBRixDQUFTMEUsQ0FBZDtBQUFBLFNBSGQsRUFJR3BELElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBSzBELEVBQUVoRixNQUFGLENBQVMyRSxDQUFkO0FBQUEsU0FKZDs7QUFNQThOLGFBQUt2TixTQUFMLENBQWUsbUJBQWYsRUFDRzVELElBREgsQ0FDUSxHQURSLEVBQ2EsVUFBUzBELENBQVQsRUFBWTtBQUNyQixpQkFBTyxnQkFBTTRSLFFBQU4sQ0FBZTVSLEVBQUVoRixNQUFqQixFQUF5QmdGLEVBQUVtTixNQUEzQixDQUFQO0FBRUQsU0FKSCxFQUtHN1EsSUFMSCxDQUtRLEdBTFIsRUFLYSxVQUFTMEQsQ0FBVCxFQUFZO0FBQ3JCLGlCQUFPLGdCQUFNNlIsUUFBTixDQUFlN1IsRUFBRWhGLE1BQWpCLEVBQXlCZ0YsRUFBRW1OLE1BQTNCLENBQVA7QUFDRCxTQVBIOztBQVNBeFIsYUFBS1csSUFBTCxDQUFVLFdBQVYsRUFBdUI7QUFBQSxnQ0FBa0IwRCxFQUFFTixDQUFwQixTQUF5Qk0sRUFBRUwsQ0FBM0I7QUFBQSxTQUF2QjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxVQUFJbVMsU0FBUyxDQUFiO0FBQ0E7QUFDQSxVQUFJQyxnQkFBZ0IsRUFBcEI7O0FBRUEsV0FBSyxJQUFJN1EsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcU4sWUFBWXZRLE1BQWhDLEVBQXdDa0QsR0FBeEMsRUFBNkM7QUFDM0M2USxzQkFBaUI3USxDQUFqQixTQUFzQkEsQ0FBdEIsSUFBNkIsQ0FBN0I7QUFDRDs7QUFFRDBPLGtCQUFZL1AsT0FBWixDQUFvQixVQUFTRyxDQUFULEVBQVk7QUFDOUIrUixzQkFBaUIvUixFQUFFbU4sTUFBRixDQUFTNkUsS0FBMUIsU0FBbUNoUyxFQUFFaEYsTUFBRixDQUFTZ1gsS0FBNUMsSUFBdUQsQ0FBdkQ7QUFDRCxPQUZEOztBQUlBLGVBQVNuQixjQUFULEdBQTBCO0FBQ3hCO0FBQ0EsaUJBQVNvQixXQUFULENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekIsaUJBQU9KLGNBQWlCRyxFQUFFRixLQUFuQixTQUE0QkcsRUFBRUgsS0FBOUIsQ0FBUDtBQUNEO0FBQ0RsVyxXQUFHcUgsS0FBSCxDQUFTd0wsY0FBVDtBQUNBLFlBQUltRCxXQUFXLENBQWYsRUFBa0I7QUFDaEI7QUFDQSxjQUFJOVIsSUFBSWxFLEdBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCSixJQUFoQixHQUF1QnlXLFFBQS9CO0FBQ0F6VyxlQUFLNEUsS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFBQSxtQkFBSzBSLFlBQVlqUyxDQUFaLEVBQWUyTixDQUFmLEtBQXFCc0UsWUFBWXRFLENBQVosRUFBZTNOLENBQWYsQ0FBckIsR0FBeUMsQ0FBekMsR0FBNkMsR0FBbEQ7QUFBQSxXQUF0QjtBQUNBeU4sZUFBS2xOLEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUtQLEVBQUVnUyxLQUFGLEtBQVlyRSxFQUFFUixNQUFGLENBQVM2RSxLQUFyQixJQUE4QmhTLEVBQUVnUyxLQUFGLEtBQVlyRSxFQUFFM1MsTUFBRixDQUFTZ1gsS0FBbkQsR0FBMkQsQ0FBM0QsR0FBK0QsR0FBcEU7QUFBQSxXQUF0QjtBQUNBO0FBQ0FGLG1CQUFTLENBQVQ7QUFDRCxTQVBELE1BT087QUFDTDtBQUNBblcsZUFBSzRFLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLENBQXRCO0FBQ0FrTixlQUFLbE4sS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQXVSLG1CQUFTLENBQVQ7QUFDRDtBQUNGOztBQUVELGVBQVN0QixXQUFULENBQXFCeFEsQ0FBckIsRUFBd0I7QUFDdEIsWUFBSSxDQUFDbEUsR0FBR3FILEtBQUgsQ0FBU2tQLE1BQVYsSUFBb0I1QyxnQkFBeEIsRUFBMEM7QUFDeENDLHFCQUFXNEMsV0FBWCxDQUF1QixJQUF2QixFQUE2QlgsT0FBN0I7QUFDRDtBQUNEM1IsVUFBRXVTLEVBQUYsR0FBT3ZTLEVBQUVOLENBQVQ7QUFDQU0sVUFBRXdTLEVBQUYsR0FBT3hTLEVBQUVMLENBQVQ7QUFDRDs7QUFFRCxlQUFTOFEsT0FBVCxDQUFpQnpRLENBQWpCLEVBQW9CO0FBQ2xCQSxVQUFFdVMsRUFBRixHQUFPelcsR0FBR3FILEtBQUgsQ0FBU3pELENBQWhCO0FBQ0FNLFVBQUV3UyxFQUFGLEdBQU8xVyxHQUFHcUgsS0FBSCxDQUFTeEQsQ0FBaEI7QUFDRDs7QUFFRCxlQUFTK1EsU0FBVCxDQUFtQjFRLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUksQ0FBQ2xFLEdBQUdxSCxLQUFILENBQVNrUCxNQUFWLElBQW9CNUMsZ0JBQXhCLEVBQTBDO0FBQ3hDQyxxQkFBVzRDLFdBQVgsQ0FBdUIsQ0FBdkI7QUFDRDtBQUNEdFMsVUFBRXVTLEVBQUYsR0FBTyxJQUFQO0FBQ0F2UyxVQUFFd1MsRUFBRixHQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFFRDs7OytCQUVVLENBQUU7Ozt1Q0FFTUMsYSxFQUFlQyxTLEVBQVc7QUFDM0MsVUFBSUMsY0FBYyxFQUFsQjtBQUNBRixvQkFBYzVTLE9BQWQsQ0FBc0IsYUFBSztBQUN6QixZQUFJNE4sT0FBT2lGLFVBQVVFLElBQVYsQ0FBZTtBQUFBLGlCQUFLNVMsRUFBRXNILEVBQUYsS0FBU3FHLEVBQUVyRyxFQUFoQjtBQUFBLFNBQWYsQ0FBWDtBQUNBLFlBQUltRyxJQUFKLEVBQVU7QUFDUmtGLHNCQUFZNVEsSUFBWixDQUFpQjBMLElBQWpCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xrRixzQkFBWTVRLElBQVosQ0FBaUI0TCxDQUFqQjtBQUNEO0FBQ0YsT0FQRDtBQVFBLGFBQU9nRixXQUFQO0FBQ0Q7Ozs7O2tCQW5Sa0JuRCxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCcUQsWSxXQU1sQiw2QkFBUyxjQUFULEM7OztBQUpELDhCQUE0RDtBQUFBLDRCQUE5Q2xZLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxVQUFJVyxVQUFVTCxTQUFkO0FBQ0EsY0FBUSxLQUFLd0IsSUFBTCxDQUFVeUMsTUFBVixDQUFpQkMsS0FBakIsQ0FBdUIwRSxJQUEvQjtBQUNBLGFBQUssS0FBTDtBQUNFdkksb0JBQVUsdUJBQWEsS0FBS1YsT0FBbEIsRUFBMkI0QixJQUEzQixDQUFnQyxLQUFLQyxJQUFyQyxFQUEyQ3pCLE1BQTNDLEVBQVY7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFTSxvQkFBVSx3QkFBYyxLQUFLVixPQUFuQixFQUE0QjRCLElBQTVCLENBQWlDLEtBQUtDLElBQXRDLEVBQTRDekIsTUFBNUMsRUFBVjtBQUNBO0FBQ0YsYUFBSyxTQUFMO0FBQ0VNLG9CQUFVLDJCQUFpQixLQUFLVixPQUF0QixFQUErQjRCLElBQS9CLENBQW9DLEtBQUtDLElBQXpDLEVBQStDekIsTUFBL0MsRUFBVjtBQUNBO0FBVEY7O0FBWUEsYUFBT00sT0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBekJNcVgsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkMsUSxXQU1sQixzQzs7O0FBSkQsMEJBQTREO0FBQUEsNEJBQTlDblksT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsK0dBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFdBQUttRSxNQUFMLEdBQWNsRCxHQUFHaVgsU0FBSCxHQUFldlQsS0FBZixDQUFxQixDQUFDLENBQUQsRUFBSSxLQUFLbkQsS0FBVCxDQUFyQixFQUFzQzJXLE9BQXRDLENBQThDLEdBQTlDLEVBQW1EdlQsTUFBbkQsQ0FBMEQsS0FBS1gsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQXRFLENBQWQ7O0FBRUEsVUFBSSxDQUFDLEtBQUtYLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUFaLENBQW1CekIsTUFBeEIsRUFBZ0M7QUFDOUIsYUFBS2MsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQVosR0FBcUIsZ0JBQU13VCxXQUFOLENBQWtCLEtBQUtyVCxTQUFMLENBQWU1QixNQUFmLEdBQXdCLEtBQUtrQixZQUFMLENBQWtCbEIsTUFBNUQsQ0FBckI7QUFDQSxhQUFLZ0IsTUFBTCxDQUFZUyxNQUFaLENBQW1CLEtBQUtYLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUEvQjtBQUNEOztBQUVELFVBQUl5VCxZQUFZLEtBQUsxWCxPQUFMLENBQWEwRSxTQUFiLENBQXVCLGVBQXZCLENBQWhCOztBQUVBLFVBQUksQ0FBQ2dULFVBQVV2WCxJQUFWLEVBQUwsRUFBdUI7QUFDckJ1WCxvQkFBWSxLQUFLMVgsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGFBQXZDLENBQVo7QUFDRDs7QUFFRCxVQUFJc0csT0FBTyxJQUFYOztBQUVBLFdBQUsxRCxZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTekIsR0FBVCxFQUFjNFQsS0FBZCxFQUFxQjtBQUM3QyxZQUFJbUIsTUFBTUQsVUFBVWhULFNBQVYsa0JBQW1DOFIsS0FBbkMsRUFBNENyVixJQUE1QyxDQUFpRGlHLEtBQUszRCxRQUFMLENBQWNiLEdBQWQsQ0FBakQsQ0FBVjs7QUFFQStVLFlBQUluUyxJQUFKLEdBQVc2SyxVQUFYLEdBQXdCQyxRQUF4QixDQUFpQyxHQUFqQyxFQUNHdkwsS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR0gsTUFGSDs7QUFJQTtBQUNBLFlBQUlnVCxXQUFXRCxJQUFJbFMsS0FBSixHQUNaZCxNQURZLENBQ0wsTUFESyxFQUVaSSxLQUZZLENBRU4sTUFGTSxFQUVFO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYTRRLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBRkYsRUFHWjFWLElBSFksQ0FHUCxPQUhPLGtCQUdnQjBWLEtBSGhCLEVBSVoxVixJQUpZLENBSVAsR0FKTyxFQUlGLFVBQVMwRCxDQUFULEVBQVlrQixDQUFaLEVBQWU7QUFDeEIsaUJBQU8wQixLQUFLNUQsTUFBTCxDQUFZNEQsS0FBSzlELElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUFaLENBQW1CeUIsQ0FBbkIsQ0FBWixJQUFxQzhRLFNBQVNwUCxLQUFLNUQsTUFBTCxDQUFZcVUsU0FBWixLQUEwQnpRLEtBQUsxRCxZQUFMLENBQWtCbEIsTUFBckQsQ0FBNUM7QUFDRCxTQU5ZLEVBT1oxQixJQVBZLENBT1AsT0FQTyxFQU9Hc0csS0FBSzVELE1BQUwsQ0FBWXFVLFNBQVosS0FBMEJ6USxLQUFLMUQsWUFBTCxDQUFrQmxCLE1BQTdDLEdBQXVELENBUHpELEVBUVoxQixJQVJZLENBUVAsR0FSTyxFQVFGLFVBQVMwRCxDQUFULEVBQVk7QUFDckIsaUJBQU80QyxLQUFLN0QsTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQ0QsU0FWWSxFQVdaMUQsSUFYWSxDQVdQLFFBWE8sRUFXRyxVQUFTMEQsQ0FBVCxFQUFZO0FBQzFCLGlCQUFPNEMsS0FBS25HLE1BQUwsR0FBY21HLEtBQUs3RCxNQUFMLENBQVlpQixDQUFaLENBQXJCO0FBQ0QsU0FiWSxFQWNaNkMsRUFkWSxDQWNULFlBZFMsRUFjSyxVQUFTN0MsQ0FBVCxFQUFZO0FBQzVCbEUsYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0I4UCxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUNpQnZMLEtBRGpCLENBQ3VCLGNBRHZCLEVBQ3VDLEdBRHZDO0FBRUFxQyxlQUFLekQsT0FBTCxDQUFhekMsSUFBYixDQUFrQixnQkFBTXlDLE9BQU4sQ0FBY2YsR0FBZCxFQUFtQjRCLENBQW5CLENBQWxCLEVBQXlDLElBQXpDLEVBQStDOUUsTUFBL0M7QUFDRCxTQWxCWSxFQW1CWjJILEVBbkJZLENBbUJULFlBbkJTLEVBbUJLLFlBQVc7QUFDM0IvRyxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjhQLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBQ2lCdkwsS0FEakIsQ0FDdUIsY0FEdkIsRUFDdUMsQ0FEdkM7QUFFQXFDLGVBQUt6RCxPQUFMLENBQWEvRCxRQUFiO0FBQ0QsU0F2QlksQ0FBZjs7QUF5QkFnWSxpQkFBU2pTLEtBQVQsQ0FBZWdTLEdBQWYsRUFDRzdXLElBREgsQ0FDUSxHQURSLEVBQ2EsVUFBUzBELENBQVQsRUFBWWtCLENBQVosRUFBZTtBQUN4QixpQkFBTzBCLEtBQUs1RCxNQUFMLENBQVk0RCxLQUFLOUQsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQVosQ0FBbUJ5QixDQUFuQixDQUFaLElBQXFDOFEsU0FBU3BQLEtBQUs1RCxNQUFMLENBQVlxVSxTQUFaLEtBQTBCelEsS0FBSzFELFlBQUwsQ0FBa0JsQixNQUFyRCxDQUE1QztBQUNELFNBSEgsRUFJRzFCLElBSkgsQ0FJUSxPQUpSLEVBSWtCc0csS0FBSzVELE1BQUwsQ0FBWXFVLFNBQVosS0FBMEJ6USxLQUFLMUQsWUFBTCxDQUFrQmxCLE1BQTdDLEdBQXVELENBSnhFLEVBS0cxQixJQUxILENBS1EsR0FMUixFQUthLFVBQVMwRCxDQUFULEVBQVk7QUFDckIsaUJBQU80QyxLQUFLN0QsTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQ0QsU0FQSCxFQVFHMUQsSUFSSCxDQVFRLFFBUlIsRUFRa0IsVUFBUzBELENBQVQsRUFBWTtBQUMxQixpQkFBTzRDLEtBQUtuRyxNQUFMLEdBQWNtRyxLQUFLN0QsTUFBTCxDQUFZaUIsQ0FBWixDQUFyQjtBQUNELFNBVkg7QUFXRCxPQTVDRDs7QUE4Q0EsV0FBS3NULFdBQUw7QUFDQSxXQUFLQyxhQUFMOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBNUVNVCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCVSxTLFdBTWxCLHNDOzs7QUFKRCwyQkFBNEQ7QUFBQSw0QkFBOUM3WSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSTRZLGFBQWEsS0FBS2pZLE9BQUwsQ0FBYTBFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWpCOztBQUVBLFVBQUksQ0FBQ3VULFdBQVc5WCxJQUFYLEVBQUwsRUFBd0I7QUFDdEI4WCxxQkFBYSxLQUFLalksT0FBTCxDQUFhMkUsTUFBYixDQUFvQixHQUFwQixFQUF5QjdELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQWI7QUFDRDs7QUFFRCxVQUFJc0csT0FBTyxJQUFYOztBQUVBLFdBQUsxRCxZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTekIsR0FBVCxFQUFjNFQsS0FBZCxFQUFxQjtBQUM3QyxZQUFJMEIsWUFBWTVYLEdBQUc2WCxJQUFILEdBQ2JqVSxDQURhLENBQ1gsVUFBU00sQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ2hCLGlCQUFPMEIsS0FBSzVELE1BQUwsQ0FBWWtDLENBQVosQ0FBUDtBQUNELFNBSGEsRUFJYnZCLENBSmEsQ0FJWCxVQUFTSyxDQUFULEVBQVk7QUFDYixpQkFBTzRDLEtBQUs3RCxNQUFMLENBQVlpQixDQUFaLENBQVA7QUFDRCxTQU5hLENBQWhCOztBQVFBLFlBQUkyVCxPQUFPRixXQUFXdlQsU0FBWCxtQkFBcUM4UixLQUFyQyxFQUE4Q3JWLElBQTlDLENBQW1ELENBQUNpRyxLQUFLM0QsUUFBTCxDQUFjYixHQUFkLENBQUQsQ0FBbkQsQ0FBWDs7QUFFQXVWLGFBQUszUyxJQUFMLEdBQVk2SyxVQUFaLEdBQXlCQyxRQUF6QixDQUFrQyxHQUFsQyxFQUNHdkwsS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR0gsTUFGSDs7QUFJQTtBQUNBLFlBQUl3VCxZQUFZRCxLQUFLMVMsS0FBTCxHQUNiZCxNQURhLENBQ04sTUFETSxFQUViSSxLQUZhLENBRVAsUUFGTyxFQUVHO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYTRRLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBRkgsRUFHYnpSLEtBSGEsQ0FHUCxjQUhPLEVBR1MsS0FIVCxFQUliakUsSUFKYSxDQUlSLE9BSlEsbUJBSWdCMFYsS0FKaEIsRUFLYjFWLElBTGEsQ0FLUixHQUxRLEVBS0hvWCxTQUxHLEVBTWI3USxFQU5hLENBTVYsWUFOVSxFQU1JLFVBQVM3QyxDQUFULEVBQVk7QUFDNUJsRSxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjhQLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUd2TCxLQUZILENBRVMsZ0JBRlQsRUFFMkIsR0FGM0IsRUFHR0EsS0FISCxDQUdTLGNBSFQsRUFHeUIsTUFIekI7QUFJQXFDLGVBQUt6RCxPQUFMLENBQWF6QyxJQUFiLENBQWtCLGdCQUFNeUMsT0FBTixDQUFjZixHQUFkLEVBQW1CNEIsQ0FBbkIsQ0FBbEIsRUFBeUMsSUFBekMsRUFBK0M5RSxNQUEvQztBQUNELFNBWmEsRUFhYjJILEVBYmEsQ0FhVixZQWJVLEVBYUksWUFBVztBQUMzQi9HLGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCOFAsVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFFR3ZMLEtBRkgsQ0FFUyxnQkFGVCxFQUUyQixDQUYzQixFQUdHQSxLQUhILENBR1MsY0FIVCxFQUd5QixLQUh6QjtBQUlBcUMsZUFBS3pELE9BQUwsQ0FBYS9ELFFBQWI7QUFDRCxTQW5CYSxDQUFoQjs7QUFxQkF3WSxrQkFBVXpTLEtBQVYsQ0FBZ0J3UyxJQUFoQjtBQUNELE9BdENEOztBQXdDQSxXQUFLTCxXQUFMO0FBQ0EsV0FBS0MsYUFBTDs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQS9ETUMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkssWSxXQU1sQixzQzs7O0FBSkQsOEJBQTREO0FBQUEsNEJBQTlDbFosT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsdUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFVBQUlpWixlQUFlLEtBQUt0WSxPQUFMLENBQWEwRSxTQUFiLENBQXVCLG1CQUF2QixDQUFuQjs7QUFFQSxVQUFJLENBQUM0VCxhQUFhblksSUFBYixFQUFMLEVBQTBCO0FBQ3hCbVksdUJBQWUsS0FBS3RZLE9BQUwsQ0FBYTJFLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUI3RCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxpQkFBdkMsQ0FBZjtBQUNEOztBQUVELFVBQUlzRyxPQUFPLElBQVg7O0FBRUEsV0FBSzFELFlBQUwsQ0FBa0JXLE9BQWxCLENBQTBCLFVBQVN6QixHQUFULEVBQWM0VCxLQUFkLEVBQXFCO0FBQzdDLFlBQUkrQixVQUFVRCxhQUFhNVQsU0FBYixzQkFBMEM4UixLQUExQyxFQUFtRHJWLElBQW5ELENBQXdEaUcsS0FBSzNELFFBQUwsQ0FBY2IsR0FBZCxDQUF4RCxDQUFkOztBQUVBMlYsZ0JBQVEvUyxJQUFSLEdBQWU2SyxVQUFmLEdBQTRCQyxRQUE1QixDQUFxQyxHQUFyQyxFQUNHdkwsS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR0gsTUFGSDs7QUFJQTtBQUNBLFlBQUk0VCxlQUFlRCxRQUNoQjlTLEtBRGdCLEdBRWhCZCxNQUZnQixDQUVULFFBRlMsRUFHaEJJLEtBSGdCLENBR1YsTUFIVSxFQUdGO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYTRRLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBSEUsRUFJaEIxVixJQUpnQixDQUlYLE9BSlcsc0JBSWdCMFYsS0FKaEIsRUFLaEIxVixJQUxnQixDQUtYLEdBTFcsRUFLTixDQUxNLEVBTWhCQSxJQU5nQixDQU1YLElBTlcsRUFNTCxVQUFTMEQsQ0FBVCxFQUFZa0IsQ0FBWixFQUFlO0FBQ3pCLGlCQUFPMEIsS0FBSzVELE1BQUwsQ0FBWWtDLENBQVosQ0FBUDtBQUNELFNBUmdCLEVBU2hCNUUsSUFUZ0IsQ0FTWCxJQVRXLEVBU0wsVUFBUzBELENBQVQsRUFBWTtBQUN0QixpQkFBTzRDLEtBQUs3RCxNQUFMLENBQVlpQixDQUFaLENBQVA7QUFDRCxTQVhnQixFQVloQjZDLEVBWmdCLENBWWIsWUFaYSxFQVlDLFVBQVM3QyxDQUFULEVBQVk7QUFDNUJsRSxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjhQLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUd2TCxLQUZILENBRVMsY0FGVCxFQUV5QixHQUZ6QixFQUdHakUsSUFISCxDQUdRLEdBSFIsRUFHYSxFQUhiO0FBSUFzRyxlQUFLekQsT0FBTCxDQUFhekMsSUFBYixDQUFrQixnQkFBTXlDLE9BQU4sQ0FBY2YsR0FBZCxFQUFtQjRCLENBQW5CLENBQWxCLEVBQXlDLElBQXpDLEVBQStDOUUsTUFBL0M7QUFDRCxTQWxCZ0IsRUFtQmhCMkgsRUFuQmdCLENBbUJiLFlBbkJhLEVBbUJDLFlBQVc7QUFDM0IvRyxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjhQLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUd2TCxLQUZILENBRVMsY0FGVCxFQUV5QixDQUZ6QixFQUdHakUsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiO0FBSUFzRyxlQUFLekQsT0FBTCxDQUFhL0QsUUFBYjtBQUNELFNBekJnQixDQUFuQjs7QUEyQkE0WSxxQkFBYTdTLEtBQWIsQ0FBbUI0UyxPQUFuQjtBQUNELE9BcENEOztBQXNDQSxXQUFLVCxXQUFMOztBQUVBLFdBQUtDLGFBQUw7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkE5RE1NLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7OztBQUNBOztJQUFZSSxROzs7Ozs7Ozs7Ozs7QUFFWjs7SUFFcUJDLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUN2WixPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwrR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJc1osYUFBYSx5QkFBZSxLQUFLclosT0FBcEIsQ0FBakI7O0FBRUE7QUFDQSxVQUFNc1osdUJBQXFCLEtBQUt6WCxJQUFMLENBQVV5QyxNQUFWLENBQWlCa0ksRUFBNUM7QUFDQSxXQUFLOUwsT0FBTCxHQUFlTSxHQUFHQyxNQUFILE9BQWNxWSxNQUFkLENBQWY7O0FBRUE7QUFDQSxVQUFJLENBQUMsS0FBSzVZLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCO0FBQ0EsYUFBS04sTUFBTCxDQUFZQyxLQUFaLDBCQUF5QzhZLE1BQXpDO0FBQ0EsYUFBSzVZLE9BQUwsR0FBZSxLQUFLRSxNQUFMLENBQVl5RSxNQUFaLENBQW1CLEtBQW5CLEVBQTBCN0QsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0MseUJBQXhDLEVBQW1FQSxJQUFuRSxDQUF3RSxJQUF4RSxFQUE4RThYLE1BQTlFLENBQWY7QUFDRDs7QUFFRDtBQUNBLFdBQUs1WSxPQUFMLENBQWEwRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCRSxNQUE1Qjs7QUFFQSxXQUFLNUUsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYTJFLE1BQWIsQ0FBb0IsSUFBcEIsRUFBMEI3RCxJQUExQixDQUErQixPQUEvQixFQUF3QyxrQkFBeEMsQ0FBZjs7QUFFQSxVQUFJLEtBQUtLLElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUJxQixLQUFyQixFQUE0QjtBQUMxQixhQUFLakYsT0FBTCxDQUFhMkUsTUFBYixDQUFvQixJQUFwQixFQUEwQjdELElBQTFCLENBQStCLE9BQS9CLEVBQXdDLGNBQXhDLEVBQXdENkQsTUFBeEQsQ0FBK0QsR0FBL0QsRUFBb0UyRSxJQUFwRSxDQUF5RSxLQUFLbkksSUFBTCxDQUFVeUMsTUFBVixDQUFpQnFCLEtBQTFGO0FBQ0Q7O0FBRUQsVUFBSW1FLFFBQVEsS0FBS3BKLE9BQUwsQ0FBYTJFLE1BQWIsQ0FBb0IsSUFBcEIsQ0FBWjtBQUNBeUUsWUFBTXpFLE1BQU4sQ0FBYSxHQUFiLEVBQWtCMkUsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDQSxVQUFJRSxVQUFVSixNQUFNekUsTUFBTixDQUFhLElBQWIsQ0FBZDtBQUNBNkUsY0FBUTdFLE1BQVIsQ0FBZSxJQUFmLEVBQXFCQSxNQUFyQixDQUE0QixHQUE1QixFQUFpQzBDLEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBTSxPQUFLL0gsT0FBTCxDQUFhRixRQUFiLENBQXNCd0UsTUFBdEIsQ0FBNkJ1SSxTQUE3QixDQUF1QyxJQUF2QyxDQUFOO0FBQUEsT0FBN0MsRUFBaUdyTCxJQUFqRyxDQUFzRyxPQUF0RyxFQUErRyxhQUEvRyxFQUE4SHdJLElBQTlILENBQW1JLGFBQW5JO0FBQ0FFLGNBQVE3RSxNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUMwQyxFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQU1vUixTQUFTSSxZQUFULENBQXNCLE9BQUtyTixTQUFMLENBQWVyTCxJQUFmLEVBQXRCLEVBQTZDLGFBQTdDLENBQU47QUFBQSxPQUE3QyxFQUFnSFcsSUFBaEgsQ0FBcUgsT0FBckgsRUFBOEgsYUFBOUgsRUFBNkl3SSxJQUE3SSxDQUFrSixhQUFsSjtBQUNBRSxjQUFRN0UsTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDMEMsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFNc1IsV0FBV3pYLElBQVgsQ0FBZ0IsT0FBS0MsSUFBckIsRUFBMkJ6QixNQUEzQixFQUFOO0FBQUEsT0FBN0MsRUFBd0ZvQixJQUF4RixDQUE2RixPQUE3RixFQUFzRyxPQUF0RyxFQUErR3dJLElBQS9HLENBQW9ILE9BQXBIOztBQUVBO0FBQ0EsVUFBSU4sZ0JBQWdCLEtBQUtVLFFBQUwsQ0FBY2pILE9BQU9DLE1BQVAsQ0FBYyxLQUFLdkIsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjJGLEtBQS9CLENBQWQsQ0FBcEI7QUFDQSxXQUFLSSxRQUFMLENBQWMsS0FBSzNKLE9BQW5CLEVBQTRCZ0osYUFBNUI7O0FBRUEsV0FBS25KLE1BQUwsQ0FBWUMsS0FBWix5QkFBd0M4WSxNQUF4Qzs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7OztrQkE3Q01GLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJJLFUsV0FNbEIsc0M7OztBQUpELDRCQUE0RDtBQUFBLDRCQUE5QzNaLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG1IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFVBQUlnVSxVQUFVLGtCQUFkOztBQUVBLFdBQUt4VCxNQUFMLENBQVlDLEtBQVosNEJBQTJDdVQsT0FBM0M7O0FBRUEsV0FBS3JULE9BQUwsR0FBZSxLQUFLdUssTUFBTCxDQUFZNUYsTUFBWixDQUFtQixLQUFuQixFQUNaN0QsSUFEWSxDQUNQLElBRE8sRUFDRHVTLE9BREMsRUFFWnZTLElBRlksQ0FFUCxPQUZPLEVBRUUsY0FGRixDQUFmOztBQUlBLFVBQUl3UyxPQUFPLEtBQUt0VCxPQUFMLENBQWEyRSxNQUFiLENBQW9CLE1BQXBCLENBQVg7O0FBRUEsVUFBSTRPLFNBQVNELEtBQUszTyxNQUFMLENBQVksS0FBWixFQUFtQjdELElBQW5CLENBQXdCLE9BQXhCLEVBQWlDLHFCQUFqQyxDQUFiOztBQUVBeVMsYUFBTzVPLE1BQVAsQ0FBYyxNQUFkLEVBQXNCMkUsSUFBdEIscUJBQTRDLEtBQUtuSSxJQUFMLENBQVU0WCxPQUFWLElBQXFCLEtBQWpFOztBQUVBLFVBQUl2UCxVQUFVOEosS0FBSzNPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CN0QsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsc0JBQWpDLEVBQ1g2RCxNQURXLENBQ0osS0FESSxFQUNHN0QsSUFESCxDQUNRLE9BRFIsRUFDaUIsY0FEakIsRUFFWDZELE1BRlcsQ0FFSixLQUZJLEVBRUc3RCxJQUZILENBRVEsT0FGUixFQUVpQixtQkFGakIsQ0FBZDs7QUFJQTBJLGNBQVE3RSxNQUFSLENBQWUsTUFBZixFQUF1QkssSUFBdkIsQ0FBNEIsZ0JBQTVCO0FBQ0F3RSxjQUFRN0UsTUFBUixDQUFlLEtBQWYsRUFBc0I3RCxJQUF0QixDQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4Q3dJLElBQTlDLENBQW1ELGdDQUFnQmEsS0FBS0MsU0FBTCxDQUFlLEtBQUtqSixJQUFMLENBQVV5QyxNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFoQixDQUFuRDtBQUNBNEYsY0FBUTdFLE1BQVIsQ0FBZSxNQUFmLEVBQXVCQSxNQUF2QixDQUE4QixHQUE5QixFQUFtQzdELElBQW5DLENBQXdDLE1BQXhDLEVBQWdELHFDQUFoRCxFQUF1RmtFLElBQXZGLENBQTRGLGtCQUE1Rjs7QUFFQSxVQUFJNE8sU0FBU04sS0FBSzNPLE1BQUwsQ0FBWSxLQUFaLEVBQW1CN0QsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUE4UyxhQUFPalAsTUFBUCxDQUFjLFFBQWQsRUFBd0JLLElBQXhCLENBQTZCLElBQTdCLEVBQW1DcUMsRUFBbkMsQ0FBc0MsT0FBdEMsRUFBK0MsWUFBTTtBQUNuRC9HLFdBQUdxSCxLQUFILENBQVN3TCxjQUFUO0FBQ0EsZUFBS3ZULFFBQUwsQ0FBY2lGLElBQWQ7QUFDRCxPQUhEOztBQUtBO0FBQ0Esb0RBQThCLENBQUMsU0FBRCxFQUFZLGFBQVosRUFBMkIsaUJBQTNCLEVBQThDLGVBQTlDLENBQTlCOztBQUVBLFdBQUtoRixNQUFMLENBQVlDLEtBQVosOEJBQTZDdVQsT0FBN0M7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs7O2tCQTVDa0J5RixVOzs7Ozs7Ozs7QUNOckIsQ0FBQyxZQUFXO0FBQ1YsTUFBSUUsT0FBTyxPQUFPak4sT0FBUCxJQUFrQixXQUFsQixJQUFpQ0EsT0FBakMsSUFBNEMsY0FBaUIsV0FBakIsSUFBZ0MsRUFBNUUsSUFBa0YsSUFBN0Y7O0FBRUEsTUFBSWtOLFVBQVUsbUtBQWQ7O0FBRUEsV0FBU0MsU0FBVCxDQUFtQmxYLEdBQW5CLEVBQXdCO0FBQ3RCLFdBQU9BLGVBQWVtWCxXQUFmLElBQThCblgsZUFBZW9YLFVBQXBEO0FBQ0Q7O0FBRUQsV0FBU0MsY0FBVCxDQUF3QkMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBSSxDQUFDSixVQUFVSSxFQUFWLENBQUwsRUFBb0I7QUFDbEIsWUFBTSxJQUFJclcsS0FBSixDQUFVLG1EQUFtRHFXLEVBQTdELENBQU47QUFDRDtBQUNGOztBQUVELFdBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU9BLE9BQU9BLElBQUlDLFdBQUosQ0FBZ0IsTUFBaEIsRUFBdUIsQ0FBdkIsS0FBNkIsQ0FBcEMsSUFBeUNELElBQUlDLFdBQUosQ0FBZ0J6TixPQUFPME4sUUFBUCxDQUFnQkMsSUFBaEMsS0FBeUMsQ0FBQyxDQUExRjtBQUNEOztBQUVELFdBQVNDLFlBQVQsQ0FBc0JOLEVBQXRCLEVBQTBCblMsUUFBMUIsRUFBb0M7QUFDbENrUyxtQkFBZUMsRUFBZjs7QUFFQSxRQUFJTyxTQUFTUCxHQUFHUSxnQkFBSCxDQUFvQixPQUFwQixDQUFiO0FBQUEsUUFDSWxaLE9BQU9pWixPQUFPclgsTUFEbEI7QUFBQSxRQUVJdVgsWUFBWSxTQUFaQSxTQUFZLEdBQVc7QUFDckIsVUFBSW5aLFNBQVMsQ0FBYixFQUFnQjtBQUNkdUc7QUFDRDtBQUNGLEtBTkw7O0FBUUE0UztBQUNBLFNBQUssSUFBSXJVLElBQUksQ0FBYixFQUFnQkEsSUFBSW1VLE9BQU9yWCxNQUEzQixFQUFtQ2tELEdBQW5DLEVBQXdDO0FBQ3RDLE9BQUMsVUFBU3NVLEtBQVQsRUFBZ0I7QUFDZixZQUFJQyxPQUFPRCxNQUFNRSxjQUFOLENBQXFCLDhCQUFyQixFQUFxRCxNQUFyRCxDQUFYO0FBQ0EsWUFBSUQsSUFBSixFQUFVO0FBQ1IsY0FBSVYsV0FBV1UsS0FBS3RZLEtBQWhCLENBQUosRUFBNEI7QUFDMUI4RSxvQkFBUTBULElBQVIsQ0FBYSw4REFBNERGLEtBQUt0WSxLQUE5RTtBQUNBO0FBQ0Q7QUFDRjtBQUNELFlBQUlpQyxTQUFTd1csU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsWUFBSUMsTUFBTTFXLE9BQU8yVyxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQSxZQUFJQyxNQUFNLElBQUlDLEtBQUosRUFBVjtBQUNBRCxZQUFJRSxXQUFKLEdBQWdCLFdBQWhCO0FBQ0FULGVBQU9BLFFBQVFELE1BQU1XLFlBQU4sQ0FBbUIsTUFBbkIsQ0FBZjtBQUNBLFlBQUlWLElBQUosRUFBVTtBQUNSTyxjQUFJSSxHQUFKLEdBQVVYLElBQVY7QUFDQU8sY0FBSUssTUFBSixHQUFhLFlBQVc7QUFDdEJqWCxtQkFBTy9DLEtBQVAsR0FBZTJaLElBQUkzWixLQUFuQjtBQUNBK0MsbUJBQU8zQyxNQUFQLEdBQWdCdVosSUFBSXZaLE1BQXBCO0FBQ0FxWixnQkFBSVEsU0FBSixDQUFjTixHQUFkLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCO0FBQ0FSLGtCQUFNZSxjQUFOLENBQXFCLDhCQUFyQixFQUFxRCxNQUFyRCxFQUE2RG5YLE9BQU9vWCxTQUFQLENBQWlCLFdBQWpCLENBQTdEO0FBQ0FwYTtBQUNBbVo7QUFDRCxXQVBEO0FBUUFTLGNBQUlTLE9BQUosR0FBYyxZQUFXO0FBQ3ZCeFUsb0JBQVF6RCxHQUFSLENBQVksb0JBQWtCaVgsSUFBOUI7QUFDQXJaO0FBQ0FtWjtBQUNELFdBSkQ7QUFLRCxTQWZELE1BZU87QUFDTG5aO0FBQ0FtWjtBQUNEO0FBQ0YsT0FoQ0QsRUFnQ0dGLE9BQU9uVSxDQUFQLENBaENIO0FBaUNEO0FBQ0Y7O0FBRUQsV0FBU3lJLE1BQVQsQ0FBZ0JtTCxFQUFoQixFQUFvQmhhLE9BQXBCLEVBQTZCNGIsaUJBQTdCLEVBQWdEO0FBQzlDLFFBQUlDLGdCQUFnQjdiLFFBQVE2YixhQUE1QjtBQUNBLFFBQUlDLGNBQWM5YixRQUFROGIsV0FBMUI7QUFDQSxRQUFJQyxNQUFNLEVBQVY7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsYUFBYSxFQUFqQjtBQUNBLFFBQUlDLFNBQVNuQixTQUFTb0IsV0FBdEI7QUFDQSxTQUFLLElBQUk5VixJQUFJLENBQWIsRUFBZ0JBLElBQUk2VixPQUFPL1ksTUFBM0IsRUFBbUNrRCxHQUFuQyxFQUF3QztBQUN0QyxVQUFJO0FBQ0YsWUFBSStWLFFBQVFGLE9BQU83VixDQUFQLEVBQVVnVyxRQUF0QjtBQUNELE9BRkQsQ0FFRSxPQUFPM1EsQ0FBUCxFQUFVO0FBQ1Z0RSxnQkFBUTBULElBQVIsQ0FBYSxxQ0FBbUNvQixPQUFPN1YsQ0FBUCxFQUFVdVUsSUFBMUQ7QUFDQTtBQUNEOztBQUVELFVBQUl3QixTQUFTLElBQWIsRUFBbUI7QUFDakIsYUFBSyxJQUFJRSxJQUFJLENBQVIsRUFBVzFRLEtBQWhCLEVBQXVCMFEsSUFBSUYsTUFBTWpaLE1BQWpDLEVBQXlDbVosS0FBSzFRLFFBQVEsSUFBdEQsRUFBNEQ7QUFDMUQsY0FBSTJRLE9BQU9ILE1BQU1FLENBQU4sQ0FBWDtBQUNBLGNBQUksT0FBT0MsS0FBSzdXLEtBQVosSUFBc0IsV0FBMUIsRUFBdUM7QUFDckMsZ0JBQUk4VyxZQUFKOztBQUVBLGdCQUFJO0FBQ0ZBLDZCQUFlRCxLQUFLQyxZQUFwQjtBQUNELGFBRkQsQ0FFRSxPQUFNQyxHQUFOLEVBQVc7QUFDWHJWLHNCQUFRMFQsSUFBUixDQUFhLHNEQUFzRHlCLElBQXRELEdBQTZELEdBQTFFLEVBQStFRSxHQUEvRTtBQUNEOztBQUVELGdCQUFJO0FBQ0Ysa0JBQUlELFlBQUosRUFBa0I7QUFDaEI1USx3QkFBUXFPLEdBQUd5QyxhQUFILENBQWlCRixZQUFqQixLQUFrQ3ZDLEdBQUc5WSxVQUFILENBQWN1YixhQUFkLENBQTRCRixZQUE1QixDQUExQztBQUNEO0FBQ0YsYUFKRCxDQUlFLE9BQU1DLEdBQU4sRUFBVztBQUNYclYsc0JBQVEwVCxJQUFSLENBQWEsMkJBQTJCMEIsWUFBM0IsR0FBMEMsR0FBdkQsRUFBNERDLEdBQTVEO0FBQ0Q7O0FBRUQsZ0JBQUk3USxLQUFKLEVBQVc7QUFDVCxrQkFBSStRLFdBQVdiLGdCQUFnQkEsY0FBY1MsS0FBS0MsWUFBbkIsQ0FBaEIsR0FBbURELEtBQUtDLFlBQXZFO0FBQ0Esa0JBQUlJLFVBQVViLGNBQWNBLFlBQVlRLEtBQUs3VyxLQUFMLENBQVdrWCxPQUF2QixDQUFkLEdBQWdETCxLQUFLN1csS0FBTCxDQUFXa1gsT0FBekU7QUFDQVoscUJBQU9XLFdBQVcsS0FBWCxHQUFtQkMsT0FBbkIsR0FBNkIsTUFBcEM7QUFDRCxhQUpELE1BSU8sSUFBR0wsS0FBS0ssT0FBTCxDQUFhaFIsS0FBYixDQUFtQixhQUFuQixDQUFILEVBQXNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQUlpUixnQkFBZ0Isd0JBQXBCO0FBQ0E7QUFDQSxrQkFBSUMsZUFBZVAsS0FBS0ssT0FBTCxDQUFhaFIsS0FBYixDQUFtQmlSLGFBQW5CLENBQW5COztBQUVBLGtCQUFJRSxrQkFBbUJELGdCQUFnQkEsYUFBYSxDQUFiLENBQWpCLElBQXFDLEVBQTNEO0FBQ0Esa0JBQUlFLG1CQUFtQkQsZ0JBQWdCblIsS0FBaEIsQ0FBc0IsUUFBdEIsQ0FBdkI7QUFDQSxrQkFBSW9SLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQ0FELGtDQUFrQixFQUFsQjtBQUNEOztBQUVELGtCQUFJQSxlQUFKLEVBQXFCO0FBQ25COztBQUVBO0FBQ0Esb0JBQUlBLGdCQUFnQnhILFVBQWhCLENBQTJCLEtBQTNCLENBQUosRUFBdUM7QUFDckN3SCxvQ0FBa0JiLE9BQU83VixDQUFQLEVBQVV1VSxJQUFWLEdBQWlCLE1BQWpCLEdBQTBCbUMsZUFBNUM7QUFDRCxpQkFGRCxNQUVPLElBQUlBLGdCQUFnQnhILFVBQWhCLENBQTJCLElBQTNCLENBQUosRUFBc0M7QUFDM0N3SCxvQ0FBa0JiLE9BQU83VixDQUFQLEVBQVV1VSxJQUFWLEdBQWlCLElBQWpCLEdBQXdCbUMsZUFBMUM7QUFDRDs7QUFFRGQsMkJBQVcvVSxJQUFYLENBQWdCO0FBQ2R2Qix3QkFBTTRXLEtBQUtLLE9BREc7QUFFZDtBQUNBQyxpQ0FBZUEsYUFIRDtBQUlkSSwwQkFBUUMsdUJBQXVCSCxlQUF2QixDQUpNO0FBS2Q1Qyx1QkFBSzRDO0FBTFMsaUJBQWhCO0FBT0QsZUFqQkQsTUFpQk87QUFDTDtBQUNBZix1QkFBT08sS0FBS0ssT0FBTCxHQUFlLElBQXRCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNGOztBQUVEO0FBQ0FPLHFCQUFpQmxCLFVBQWpCOztBQUVBLGFBQVNpQixzQkFBVCxDQUFnQ0UsT0FBaEMsRUFBeUM7QUFDdkMsVUFBSUMsbUJBQW1CO0FBQ3JCLGlCQUFTLFlBRFk7QUFFckIsZ0JBQVEsV0FGYTtBQUdyQixlQUFPLDZCQUhjO0FBSXJCLGVBQU8sd0JBSmM7QUFLckIsZUFBTywrQkFMYztBQU1yQixnQkFBUSx1QkFOYTtBQU9yQixlQUFPO0FBUGMsT0FBdkI7QUFTQSxVQUFJOU8sYUFBYW5MLE9BQU9xQixJQUFQLENBQVk0WSxnQkFBWixDQUFqQjtBQUNBLFdBQUssSUFBSWhYLElBQUksQ0FBYixFQUFnQkEsSUFBSWtJLFdBQVdwTCxNQUEvQixFQUF1QyxFQUFFa0QsQ0FBekMsRUFBNEM7QUFDMUMsWUFBSWlYLFlBQVkvTyxXQUFXbEksQ0FBWCxDQUFoQjtBQUNBO0FBQ0EsWUFBSStXLFFBQVFHLE9BQVIsQ0FBZ0IsTUFBTUQsU0FBdEIsSUFBbUMsQ0FBdkMsRUFBMEM7QUFDeEMsaUJBQU9ELGlCQUFpQkMsU0FBakIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQWxXLGNBQVFJLEtBQVIsQ0FBYyw2QkFBNkI0VixPQUE3QixHQUFzQyxzQ0FBcEQ7QUFDQSxhQUFPLDBCQUFQO0FBQ0Q7O0FBRUQsYUFBU0QsZ0JBQVQsQ0FBMEJLLEtBQTFCLEVBQWlDO0FBQy9CLFVBQUlBLE1BQU1yYSxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEI7QUFDQSxZQUFJeUwsT0FBTzRPLE1BQU1DLEdBQU4sRUFBWDtBQUNBQyxvQkFBWTlPLElBQVo7QUFDRCxPQUpELE1BSU87QUFDTDtBQUNBaU4sMEJBQWtCRyxHQUFsQjtBQUNEOztBQUVELGVBQVMwQixXQUFULENBQXFCOU8sSUFBckIsRUFBMkI7QUFDekI7QUFDQSxZQUFJK08sT0FBTyxJQUFJQyxjQUFKLEVBQVg7QUFDQUQsYUFBS0UsZ0JBQUwsQ0FBc0IsTUFBdEIsRUFBOEJDLFVBQTlCO0FBQ0FILGFBQUtFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRSxjQUEvQjtBQUNBSixhQUFLRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQkUsY0FBL0I7QUFDQUosYUFBS0ssSUFBTCxDQUFVLEtBQVYsRUFBaUJwUCxLQUFLdUwsR0FBdEI7QUFDQXdELGFBQUtNLFlBQUwsR0FBb0IsYUFBcEI7QUFDQU4sYUFBS08sSUFBTDs7QUFFQSxpQkFBU0osVUFBVCxHQUFzQjtBQUNwQjtBQUNBO0FBQ0EsY0FBSUssV0FBV1IsS0FBS1MsUUFBcEI7QUFDQSxjQUFJQyxlQUFlQyxvQkFBb0JILFFBQXBCLENBQW5CO0FBQ0FJLDBCQUFnQjNQLElBQWhCLEVBQXNCeVAsWUFBdEI7QUFDRDs7QUFFRCxpQkFBU04sY0FBVCxDQUF3QnJTLENBQXhCLEVBQTJCO0FBQ3pCdEUsa0JBQVEwVCxJQUFSLENBQWEsK0JBQStCbE0sS0FBS3VMLEdBQWpEO0FBQ0EvUyxrQkFBUTBULElBQVIsQ0FBYXBQLENBQWI7QUFDQXNRLGlCQUFPcE4sS0FBS2pKLElBQUwsR0FBWSxJQUFuQjtBQUNBd1g7QUFDRDs7QUFFRCxpQkFBU29CLGVBQVQsQ0FBeUIzUCxJQUF6QixFQUErQnlQLFlBQS9CLEVBQTZDO0FBQzNDLGNBQUlHLFVBQVUsZUFBZTVQLEtBQUtxTyxNQUFwQixHQUE2QixVQUE3QixHQUEwQ29CLFlBQTFDLEdBQXlELElBQXZFO0FBQ0FyQyxpQkFBT3BOLEtBQUtqSixJQUFMLENBQVVnRyxPQUFWLENBQWtCaUQsS0FBS2lPLGFBQXZCLEVBQXNDMkIsT0FBdEMsSUFBaUQsSUFBeEQ7O0FBRUE7QUFDQW5QLHFCQUFXLFlBQVc7QUFDcEI4Tiw2QkFBaUJLLEtBQWpCO0FBQ0QsV0FGRCxFQUVHLENBRkg7QUFHRDtBQUVGO0FBQ0Y7O0FBRUQsYUFBU2MsbUJBQVQsQ0FBNkJHLE1BQTdCLEVBQXFDO0FBQ25DLFVBQUlDLFNBQVMsRUFBYjtBQUNBLFVBQUlDLFFBQVEsSUFBSUMsVUFBSixDQUFlSCxNQUFmLENBQVo7QUFDQSxVQUFJSSxNQUFNRixNQUFNRyxVQUFoQjs7QUFFQSxXQUFLLElBQUl6WSxJQUFJLENBQWIsRUFBZ0JBLElBQUl3WSxHQUFwQixFQUF5QnhZLEdBQXpCLEVBQThCO0FBQzFCcVksa0JBQVVLLE9BQU9DLFlBQVAsQ0FBb0JMLE1BQU10WSxDQUFOLENBQXBCLENBQVY7QUFDSDs7QUFFRCxhQUFPc0csT0FBT3NTLElBQVAsQ0FBWVAsTUFBWixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTUSxZQUFULENBQXNCakYsRUFBdEIsRUFBMEJrRixLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcEMsUUFBSUMsSUFBS3BGLEdBQUdxRixPQUFILElBQWNyRixHQUFHcUYsT0FBSCxDQUFXaFEsT0FBekIsSUFBb0MySyxHQUFHcUYsT0FBSCxDQUFXaFEsT0FBWCxDQUFtQjhQLEdBQW5CLENBQXJDLElBQ0xELE1BQU03RCxZQUFOLENBQW1COEQsR0FBbkIsTUFBNEIsSUFBNUIsSUFBb0MsQ0FBQ0QsTUFBTTdELFlBQU4sQ0FBbUI4RCxHQUFuQixFQUF3QnhULEtBQXhCLENBQThCLElBQTlCLENBQXJDLElBQTRFMlQsU0FBU0osTUFBTTdELFlBQU4sQ0FBbUI4RCxHQUFuQixDQUFULENBRHZFLElBRU5uRixHQUFHdlkscUJBQUgsR0FBMkIwZCxHQUEzQixDQUZNLElBR05HLFNBQVNKLE1BQU16WixLQUFOLENBQVkwWixHQUFaLENBQVQsQ0FITSxJQUlORyxTQUFTNVMsT0FBTzZTLGdCQUFQLENBQXdCdkYsRUFBeEIsRUFBNEJ3RixnQkFBNUIsQ0FBNkNMLEdBQTdDLENBQVQsQ0FKRjtBQUtBLFdBQVEsT0FBT0MsQ0FBUCxLQUFhLFdBQWIsSUFBNEJBLE1BQU0sSUFBbEMsSUFBMENLLE1BQU1DLFdBQVdOLENBQVgsQ0FBTixDQUEzQyxHQUFtRSxDQUFuRSxHQUF1RUEsQ0FBOUU7QUFDRDs7QUFFRCxXQUFTTyxRQUFULENBQWtCOWQsSUFBbEIsRUFBd0I7QUFDdEJBLFdBQU8rZCxtQkFBbUIvZCxJQUFuQixDQUFQO0FBQ0FBLFdBQU9BLEtBQUs2SixPQUFMLENBQWEsaUJBQWIsRUFBZ0MsVUFBU0MsS0FBVCxFQUFnQmtVLEVBQWhCLEVBQW9CO0FBQ3pELFVBQUl4VSxJQUFJeVQsT0FBT0MsWUFBUCxDQUFvQixPQUFLYyxFQUF6QixDQUFSO0FBQ0EsYUFBT3hVLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0JBLENBQTNCO0FBQ0QsS0FITSxDQUFQO0FBSUEsV0FBT3lVLG1CQUFtQmplLElBQW5CLENBQVA7QUFDRDs7QUFFRDZYLE9BQUtxRyxVQUFMLEdBQWtCLFVBQVMvRixFQUFULEVBQWFoYSxPQUFiLEVBQXNCdUksRUFBdEIsRUFBMEI7QUFDMUN3UixtQkFBZUMsRUFBZjs7QUFFQWhhLGNBQVVBLFdBQVcsRUFBckI7QUFDQUEsWUFBUStQLEtBQVIsR0FBZ0IvUCxRQUFRK1AsS0FBUixJQUFpQixDQUFqQztBQUNBL1AsWUFBUWdnQixVQUFSLEdBQXFCaGdCLFFBQVFnZ0IsVUFBUixJQUFzQixLQUEzQztBQUNBLFFBQUlDLFFBQVEsK0JBQVo7O0FBRUEzRixpQkFBYU4sRUFBYixFQUFpQixZQUFXO0FBQzFCLFVBQUlrRyxRQUFRcEYsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsVUFBSW1FLFFBQVFsRixHQUFHbUcsU0FBSCxDQUFhLElBQWIsQ0FBWjtBQUNBLFVBQUk1ZSxLQUFKLEVBQVdJLE1BQVg7QUFDQSxVQUFHcVksR0FBR2xaLE9BQUgsSUFBYyxLQUFqQixFQUF3QjtBQUN0QlMsZ0JBQVF2QixRQUFRdUIsS0FBUixJQUFpQjBkLGFBQWFqRixFQUFiLEVBQWlCa0YsS0FBakIsRUFBd0IsT0FBeEIsQ0FBekI7QUFDQXZkLGlCQUFTM0IsUUFBUTJCLE1BQVIsSUFBa0JzZCxhQUFhakYsRUFBYixFQUFpQmtGLEtBQWpCLEVBQXdCLFFBQXhCLENBQTNCO0FBQ0QsT0FIRCxNQUdPLElBQUdsRixHQUFHdkosT0FBTixFQUFlO0FBQ3BCLFlBQUkyUCxNQUFNcEcsR0FBR3ZKLE9BQUgsRUFBVjtBQUNBbFAsZ0JBQVE2ZSxJQUFJeGIsQ0FBSixHQUFRd2IsSUFBSTdlLEtBQXBCO0FBQ0FJLGlCQUFTeWUsSUFBSXZiLENBQUosR0FBUXViLElBQUl6ZSxNQUFyQjtBQUNBdWQsY0FBTW1CLFlBQU4sQ0FBbUIsV0FBbkIsRUFBZ0NuQixNQUFNN0QsWUFBTixDQUFtQixXQUFuQixFQUFnQzNQLE9BQWhDLENBQXdDLGtCQUF4QyxFQUE0RCxFQUE1RCxDQUFoQzs7QUFFQSxZQUFJNFUsTUFBTXhGLFNBQVN5RixlQUFULENBQXlCLDRCQUF6QixFQUFzRCxLQUF0RCxDQUFWO0FBQ0FELFlBQUlFLFdBQUosQ0FBZ0J0QixLQUFoQjtBQUNBQSxnQkFBUW9CLEdBQVI7QUFDRCxPQVRNLE1BU0E7QUFDTG5aLGdCQUFRSSxLQUFSLENBQWMscUNBQWQsRUFBcUR5UyxFQUFyRDtBQUNBO0FBQ0Q7O0FBRURrRixZQUFNbUIsWUFBTixDQUFtQixTQUFuQixFQUE4QixLQUE5QjtBQUNBLFVBQUksQ0FBQ25CLE1BQU03RCxZQUFOLENBQW1CLE9BQW5CLENBQUwsRUFBa0M7QUFDaEM2RCxjQUFNekQsY0FBTixDQUFxQndFLEtBQXJCLEVBQTRCLE9BQTVCLEVBQXFDLDRCQUFyQztBQUNEO0FBQ0QsVUFBSSxDQUFDZixNQUFNN0QsWUFBTixDQUFtQixhQUFuQixDQUFMLEVBQXdDO0FBQ3RDNkQsY0FBTXpELGNBQU4sQ0FBcUJ3RSxLQUFyQixFQUE0QixhQUE1QixFQUEyQyw4QkFBM0M7QUFDRDs7QUFFRCxVQUFJamdCLFFBQVFnZ0IsVUFBWixFQUF3QjtBQUN0QmQsY0FBTXVCLGVBQU4sQ0FBc0IsT0FBdEI7QUFDQXZCLGNBQU11QixlQUFOLENBQXNCLFFBQXRCO0FBQ0F2QixjQUFNbUIsWUFBTixDQUFtQixxQkFBbkIsRUFBMEMsZUFBMUM7QUFDRCxPQUpELE1BSU87QUFDTG5CLGNBQU1tQixZQUFOLENBQW1CLE9BQW5CLEVBQTRCOWUsUUFBUXZCLFFBQVErUCxLQUE1QztBQUNBbVAsY0FBTW1CLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIxZSxTQUFTM0IsUUFBUStQLEtBQTlDO0FBQ0Q7O0FBRURtUCxZQUFNbUIsWUFBTixDQUFtQixTQUFuQixFQUE4QixDQUM1QnJnQixRQUFRc0IsSUFBUixJQUFnQixDQURZLEVBRTVCdEIsUUFBUW1CLEdBQVIsSUFBZSxDQUZhLEVBRzVCSSxLQUg0QixFQUk1QkksTUFKNEIsRUFLNUIrZSxJQUw0QixDQUt2QixHQUx1QixDQUE5Qjs7QUFPQSxVQUFJQyxNQUFNekIsTUFBTTFFLGdCQUFOLENBQXVCLG1CQUF2QixDQUFWO0FBQ0EsV0FBSyxJQUFJcFUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJdWEsSUFBSXpkLE1BQXhCLEVBQWdDa0QsR0FBaEMsRUFBcUM7QUFDbkMsWUFBSSxDQUFDdWEsSUFBSXZhLENBQUosRUFBT2lWLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBTCxFQUFtQztBQUNqQ3NGLGNBQUl2YSxDQUFKLEVBQU9xVixjQUFQLENBQXNCd0UsS0FBdEIsRUFBNkIsT0FBN0IsRUFBc0MsOEJBQXRDO0FBQ0Q7QUFDRjs7QUFFREMsWUFBTU0sV0FBTixDQUFrQnRCLEtBQWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FyUSxhQUFPbUwsRUFBUCxFQUFXaGEsT0FBWCxFQUFvQjRiLGlCQUFwQjs7QUFFQSxlQUFTQSxpQkFBVCxDQUEyQkcsR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQSxZQUFJclQsSUFBSW9TLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBclMsVUFBRTJYLFlBQUYsQ0FBZSxNQUFmLEVBQXVCLFVBQXZCO0FBQ0EzWCxVQUFFa1ksU0FBRixHQUFjLGdCQUFnQjdFLEdBQWhCLEdBQXNCLE9BQXBDO0FBQ0EsWUFBSThFLE9BQU8vRixTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQThGLGFBQUtMLFdBQUwsQ0FBaUI5WCxDQUFqQjtBQUNBd1csY0FBTTRCLFlBQU4sQ0FBbUJELElBQW5CLEVBQXlCM0IsTUFBTTZCLFVBQS9COztBQUVBLFlBQUl4WSxFQUFKLEVBQVE7QUFDTixjQUFJeVksVUFBVWQsTUFBTVUsU0FBcEI7QUFDQUksb0JBQVVBLFFBQVF0VixPQUFSLENBQWdCLGNBQWhCLEVBQWdDLHVEQUFoQyxDQUFWO0FBQ0FuRCxhQUFHeVksT0FBSCxFQUFZemYsS0FBWixFQUFtQkksTUFBbkI7QUFDRDtBQUNGO0FBQ0YsS0EzRUQ7QUE0RUQsR0FwRkQ7O0FBc0ZBK1gsT0FBS3VILFlBQUwsR0FBb0IsVUFBU2pILEVBQVQsRUFBYWhhLE9BQWIsRUFBc0J1SSxFQUF0QixFQUEwQjtBQUM1Q21SLFNBQUtxRyxVQUFMLENBQWdCL0YsRUFBaEIsRUFBb0JoYSxPQUFwQixFQUE2QixVQUFTc2dCLEdBQVQsRUFBYztBQUN6QyxVQUFJWSxNQUFNLCtCQUErQnhVLE9BQU9zUyxJQUFQLENBQVlXLFNBQVNoRyxVQUFVMkcsR0FBbkIsQ0FBWixDQUF6QztBQUNBLFVBQUkvWCxFQUFKLEVBQVE7QUFDTkEsV0FBRzJZLEdBQUg7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVBEOztBQVNBeEgsT0FBS3lILFdBQUwsR0FBbUIsVUFBU25ILEVBQVQsRUFBYWhhLE9BQWIsRUFBc0J1SSxFQUF0QixFQUEwQjtBQUMzQ3dSLG1CQUFlQyxFQUFmOztBQUVBaGEsY0FBVUEsV0FBVyxFQUFyQjtBQUNBQSxZQUFRb2hCLFdBQVIsR0FBc0JwaEIsUUFBUW9oQixXQUFSLElBQXVCLFdBQTdDO0FBQ0FwaEIsWUFBUXFoQixjQUFSLEdBQXlCcmhCLFFBQVFxaEIsY0FBUixJQUEwQixHQUFuRDs7QUFFQSxRQUFJQyxlQUFlLFNBQWZBLFlBQWUsQ0FBU2hHLEdBQVQsRUFBY2lHLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQ3JDLFVBQUlsZCxTQUFTd1csU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsVUFBSTBHLFVBQVVuZCxPQUFPMlcsVUFBUCxDQUFrQixJQUFsQixDQUFkO0FBQ0EzVyxhQUFPL0MsS0FBUCxHQUFlZ2dCLENBQWY7QUFDQWpkLGFBQU8zQyxNQUFQLEdBQWdCNmYsQ0FBaEI7O0FBRUEsVUFBR3hoQixRQUFRMGhCLEtBQVgsRUFBa0I7QUFDaEIxaEIsZ0JBQVEwaEIsS0FBUixDQUFjcGQsTUFBZCxFQUFzQmdYLEdBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xtRyxnQkFBUWpHLFNBQVIsQ0FBa0JGLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCO0FBQ0Q7O0FBRUQsVUFBR3RiLFFBQVEyaEIsZUFBWCxFQUEyQjtBQUN6QkYsZ0JBQVFHLHdCQUFSLEdBQW1DLGtCQUFuQztBQUNBSCxnQkFBUUksU0FBUixHQUFvQjdoQixRQUFRMmhCLGVBQTVCO0FBQ0FGLGdCQUFRSyxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCeGQsT0FBTy9DLEtBQTlCLEVBQXFDK0MsT0FBTzNDLE1BQTVDO0FBQ0Q7O0FBRUQsVUFBSW9nQixHQUFKO0FBQ0EsVUFBSTtBQUNGQSxjQUFNemQsT0FBT29YLFNBQVAsQ0FBaUIxYixRQUFRb2hCLFdBQXpCLEVBQXNDcGhCLFFBQVFxaEIsY0FBOUMsQ0FBTjtBQUNELE9BRkQsQ0FFRSxPQUFPNVYsQ0FBUCxFQUFVO0FBQ1YsWUFBSyxPQUFPdVcsYUFBUCxLQUF5QixXQUF6QixJQUF3Q3ZXLGFBQWF1VyxhQUF0RCxJQUF3RXZXLEVBQUV2SixJQUFGLElBQVUsZUFBdEYsRUFBdUc7QUFDckdpRixrQkFBUUksS0FBUixDQUFjLDJEQUFkO0FBQ0E7QUFDRCxTQUhELE1BR087QUFDTCxnQkFBTWtFLENBQU47QUFDRDtBQUNGO0FBQ0RsRCxTQUFHd1osR0FBSDtBQUNELEtBOUJEOztBQWdDQSxRQUFHL2hCLFFBQVEwaEIsS0FBWCxFQUFrQjtBQUNoQmhJLFdBQUtxRyxVQUFMLENBQWdCL0YsRUFBaEIsRUFBb0JoYSxPQUFwQixFQUE2QnNoQixZQUE3QjtBQUNELEtBRkQsTUFFTztBQUNMNUgsV0FBS3VILFlBQUwsQ0FBa0JqSCxFQUFsQixFQUFzQmhhLE9BQXRCLEVBQStCLFVBQVNraEIsR0FBVCxFQUFjO0FBQzNDLFlBQUl4RyxRQUFRLElBQUlTLEtBQUosRUFBWjs7QUFFQVQsY0FBTWEsTUFBTixHQUFlLFlBQVc7QUFDeEIrRix1QkFBYTVHLEtBQWIsRUFBb0JBLE1BQU1uWixLQUExQixFQUFpQ21aLE1BQU0vWSxNQUF2QztBQUNELFNBRkQ7O0FBSUErWSxjQUFNaUIsT0FBTixHQUFnQixZQUFXO0FBQ3pCeFUsa0JBQVFJLEtBQVIsQ0FDRSw0RUFERixFQUVFbUYsT0FBT3VWLElBQVAsQ0FBWWYsSUFBSWpiLEtBQUosQ0FBVSxFQUFWLENBQVosQ0FGRixFQUU4QixJQUY5QixFQUdFLHNEQUhGLEVBSUVpYixHQUpGO0FBS0QsU0FORDs7QUFRQXhHLGNBQU1ZLEdBQU4sR0FBWTRGLEdBQVo7QUFDRCxPQWhCRDtBQWlCRDtBQUNGLEdBNUREOztBQThEQXhILE9BQUt3SSxRQUFMLEdBQWdCLFVBQVNoZ0IsSUFBVCxFQUFlZ2YsR0FBZixFQUFvQjtBQUNsQyxRQUFJaUIsVUFBVUMsZ0JBQWQsRUFBZ0M7QUFDOUJELGdCQUFVQyxnQkFBVixDQUEyQkMsVUFBVW5CLEdBQVYsQ0FBM0IsRUFBMkNoZixJQUEzQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlvZ0IsV0FBV3hILFNBQVNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBZjtBQUNBLFVBQUl3SCxvQkFBb0IsY0FBY0QsUUFBdEM7QUFDQSxVQUFJQyxpQkFBSixFQUF1QjtBQUNyQkQsaUJBQVNKLFFBQVQsR0FBb0JoZ0IsSUFBcEI7QUFDQW9nQixpQkFBUzdjLEtBQVQsQ0FBZStjLE9BQWYsR0FBeUIsTUFBekI7QUFDQTFILGlCQUFTMkgsSUFBVCxDQUFjakMsV0FBZCxDQUEwQjhCLFFBQTFCO0FBQ0EsWUFBSTtBQUNGLGNBQUlJLE9BQU9MLFVBQVVuQixHQUFWLENBQVg7QUFDQSxjQUFJaEgsTUFBTXlJLElBQUlDLGVBQUosQ0FBb0JGLElBQXBCLENBQVY7QUFDQUosbUJBQVMzSCxJQUFULEdBQWdCVCxHQUFoQjtBQUNBb0ksbUJBQVNPLE9BQVQsR0FBbUIsWUFBVztBQUM1QkMsa0NBQXNCLFlBQVc7QUFDL0JILGtCQUFJSSxlQUFKLENBQW9CN0ksR0FBcEI7QUFDRCxhQUZEO0FBR0QsV0FKRDtBQUtELFNBVEQsQ0FTRSxPQUFPek8sQ0FBUCxFQUFVO0FBQ1Z0RSxrQkFBUTBULElBQVIsQ0FBYSx3RUFBYjtBQUNBeUgsbUJBQVMzSCxJQUFULEdBQWdCdUcsR0FBaEI7QUFDRDtBQUNEb0IsaUJBQVM5TyxLQUFUO0FBQ0FzSCxpQkFBUzJILElBQVQsQ0FBY08sV0FBZCxDQUEwQlYsUUFBMUI7QUFDRCxPQW5CRCxNQW9CSztBQUNINVYsZUFBT3FSLElBQVAsQ0FBWW1ELEdBQVosRUFBaUIsT0FBakIsRUFBMEIsaUNBQTFCO0FBQ0Q7QUFDRjtBQUNGLEdBOUJEOztBQWdDQSxXQUFTbUIsU0FBVCxDQUFtQm5CLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQUkrQixhQUFhdlcsT0FBT3VWLElBQVAsQ0FBWWYsSUFBSXBlLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFaLENBQWpCO0FBQ0EsUUFBSW9nQixhQUFhaEMsSUFBSXBlLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixFQUFrQkEsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsRUFBZ0NBLEtBQWhDLENBQXNDLEdBQXRDLEVBQTJDLENBQTNDLENBQWpCO0FBQ0EsUUFBSTBiLFNBQVMsSUFBSTJFLFdBQUosQ0FBZ0JGLFdBQVcvZixNQUEzQixDQUFiO0FBQ0EsUUFBSWtnQixXQUFXLElBQUl6RSxVQUFKLENBQWVILE1BQWYsQ0FBZjtBQUNBLFNBQUssSUFBSXBZLElBQUksQ0FBYixFQUFnQkEsSUFBSTZjLFdBQVcvZixNQUEvQixFQUF1Q2tELEdBQXZDLEVBQTRDO0FBQzFDZ2QsZUFBU2hkLENBQVQsSUFBYzZjLFdBQVdJLFVBQVgsQ0FBc0JqZCxDQUF0QixDQUFkO0FBQ0Q7QUFDRCxXQUFPLElBQUlrZCxJQUFKLENBQVMsQ0FBQzlFLE1BQUQsQ0FBVCxFQUFtQixFQUFDdlYsTUFBTWlhLFVBQVAsRUFBbkIsQ0FBUDtBQUNEOztBQUVEeEosT0FBSzZKLE9BQUwsR0FBZSxVQUFTdkosRUFBVCxFQUFhOVgsSUFBYixFQUFtQmxDLE9BQW5CLEVBQTRCO0FBQ3pDK1osbUJBQWVDLEVBQWY7O0FBRUFoYSxjQUFVQSxXQUFXLEVBQXJCO0FBQ0EwWixTQUFLdUgsWUFBTCxDQUFrQmpILEVBQWxCLEVBQXNCaGEsT0FBdEIsRUFBK0IsVUFBU2toQixHQUFULEVBQWM7QUFDM0N4SCxXQUFLd0ksUUFBTCxDQUFjaGdCLElBQWQsRUFBb0JnZixHQUFwQjtBQUNELEtBRkQ7QUFHRCxHQVBEOztBQVNBeEgsT0FBS0gsWUFBTCxHQUFvQixVQUFTUyxFQUFULEVBQWE5WCxJQUFiLEVBQW1CbEMsT0FBbkIsRUFBNEI7QUFDOUMrWixtQkFBZUMsRUFBZjs7QUFFQWhhLGNBQVVBLFdBQVcsRUFBckI7QUFDQTBaLFNBQUt5SCxXQUFMLENBQWlCbkgsRUFBakIsRUFBcUJoYSxPQUFyQixFQUE4QixVQUFTa2hCLEdBQVQsRUFBYztBQUMxQ3hILFdBQUt3SSxRQUFMLENBQWNoZ0IsSUFBZCxFQUFvQmdmLEdBQXBCO0FBQ0QsS0FGRDtBQUdELEdBUEQ7O0FBU0E7QUFDQSxNQUFJLElBQUosRUFBbUM7QUFDakNzQyxJQUFBLG1DQUFPLFlBQVc7QUFDaEIsYUFBTzlKLElBQVA7QUFDRCxLQUZEO0FBQUE7QUFHRDtBQUVGLENBcmVELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQitKLE8sV0FNbEIsNkJBQVMsaUJBQVQsQzs7O0FBSkQseUJBQTREO0FBQUEsNEJBQTlDNWpCLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFVBQUltSSxXQUFXL0UsT0FBT3FCLElBQVAsQ0FBWSxLQUFLM0MsSUFBTCxDQUFVeUMsTUFBVixDQUFpQjRELFFBQTdCLEVBQXVDeEIsR0FBdkMsQ0FBMkMsVUFBQ3BELEdBQUQsRUFBUztBQUNqRSxlQUFPO0FBQ0xrSixjQUFJbEosR0FEQztBQUVMMkYsZ0JBQU0sT0FBS3BILElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUI0RCxRQUFqQixDQUEwQjVFLEdBQTFCLEVBQStCMkYsSUFGaEM7QUFHTHRELGlCQUFPLE9BQUs5RCxJQUFMLENBQVV5QyxNQUFWLENBQWlCNEQsUUFBakIsQ0FBMEI1RSxHQUExQixFQUErQnFDLEtBSGpDO0FBSUxELGdCQUFNLE9BQUs3RCxJQUFMLENBQVV5QyxNQUFWLENBQWlCNEQsUUFBakIsQ0FBMEI1RSxHQUExQixFQUErQm9DO0FBSmhDLFNBQVA7QUFNRCxPQVBjLENBQWY7O0FBU0EsVUFBSWdlLHlCQUF1QixLQUFLN2hCLElBQUwsQ0FBVXlDLE1BQVYsQ0FBaUJrSSxFQUE1QztBQUNBLFdBQUs5TCxPQUFMLEdBQWVNLEdBQUdDLE1BQUgsT0FBY3lpQixRQUFkLENBQWY7QUFDQTtBQUNBLFVBQUksQ0FBQyxLQUFLaGpCLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGFBQUtILE9BQUwsR0FBZSxLQUFLRSxNQUFMLENBQVl5RSxNQUFaLENBQW1CLEtBQW5CLEVBQTBCN0QsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0MsdUJBQXhDLEVBQWlFQSxJQUFqRSxDQUFzRSxJQUF0RSxFQUE0RWtpQixRQUE1RSxDQUFmO0FBQ0Q7O0FBRUQsVUFBSXRjLFVBQVUsS0FBSzFHLE9BQUwsQ0FBYTBFLFNBQWIsQ0FBdUIsa0JBQXZCLEVBQTJDdkQsSUFBM0MsQ0FBZ0RxRyxRQUFoRCxFQUEwRDtBQUFBLGVBQUtoRCxFQUFFc0gsRUFBUDtBQUFBLE9BQTFELENBQWQ7QUFDQSxVQUFJbVgsZUFBZXZjLFFBQVFqQixLQUFSLEdBQWdCZCxNQUFoQixDQUF1QixLQUF2QixFQUE4QjdELElBQTlCLENBQW1DLElBQW5DLEVBQXlDO0FBQUEsZUFBSzBELEVBQUVzSCxFQUFQO0FBQUEsT0FBekMsRUFDaEJoTCxJQURnQixDQUNYLE9BRFcsRUFDRjtBQUFBLHVDQUEyQjBELEVBQUUrRCxJQUE3QjtBQUFBLE9BREUsRUFDbUNsQixFQURuQyxDQUNzQyxPQUR0QyxFQUMrQyxZQUFXO0FBQ3pFL0csV0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0J3RSxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELE9BSGdCLENBQW5CO0FBSUFrZSxtQkFBYXRlLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEI3RCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRGtFLElBQXBELENBQXlEO0FBQUEsZUFBS1IsRUFBRVMsS0FBUDtBQUFBLE9BQXpEO0FBQ0FnZSxtQkFBYXRlLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJLLElBQTVCLENBQWlDO0FBQUEsZUFBS1IsRUFBRVEsSUFBUDtBQUFBLE9BQWpDO0FBQ0FpZSxtQkFBYXRlLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEI3RCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxnQkFBMUMsRUFBNERpRSxLQUE1RCxDQUFrRSxTQUFsRSxFQUE2RSxNQUE3RSxFQUFxRkMsSUFBckYsQ0FBMEYsR0FBMUY7O0FBRUFpZSxtQkFBYXRkLEtBQWIsQ0FBbUJlLE9BQW5COztBQUVBQSxjQUFRbEIsSUFBUixHQUFlWixNQUFmOztBQUVBLFdBQUs1RSxPQUFMLENBQWErRSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBO0FBQ0EsV0FBSzBDLE9BQUwsQ0FBYTFFLFFBQWIsQ0FBc0IsRUFBQzNELFVBQVUsSUFBWCxFQUF0QixFQUF3Q3NJLFVBQXhDOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBOUNNcWIsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQwOWM5ZGQ0N2NkMGZmYzY5ZmRlIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBNYXRoSmF4V3JhcHBlciBmcm9tICcuL21hdGhqYXgtd3JhcHBlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyLCBvcHRpb25zID0ge30gfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciwgb3B0aW9uczogb3B0aW9ucyB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMubWF0aGpheFdyYXBwZXIgPSBuZXcgTWF0aEpheFdyYXBwZXIodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7fVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLnBhcmVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5wYXJlbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMucGFyZW50O1xuICB9XG4gIFxuICBnZXQgbWFyZ2luKCkge1xuICAgIHJldHVybiB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcbiAgfVxuICBcbiAgZ2V0IHdpZHRoKCkge1xuICAgIGxldCB3aWR0aCA9ICt0aGlzLnBhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gd2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gIH1cbiAgXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgbGV0IGhlaWdodCA9ICt0aGlzLnBhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIHJldHVybiBoZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gIH1cbiAgXG4gIGdldCBtYXRoamF4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdGhqYXhXcmFwcGVyLmxvYWQodGhpcy5kYXRhKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZWQocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgUHJvcGVydHkgZGlzYWJsZWQgWyR7cHJvcHN9XSwgc2tpcCBleGVjdXRpb24uLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHlQYXRoKSB7XG5cbiAgdmFyIHRtcCA9IG9iajtcblxuICBpZiAodG1wICYmIHByb3BlcnR5UGF0aCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIXRtcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgdG1wID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcCA9IHRtcFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcDtcbn1cblxuZnVuY3Rpb24gaGFzRGF0YShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAoKG9iaiBpbnN0YW5jZW9mIEFycmF5ICYmIG9iai5sZW5ndGgpIHx8IChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgT2JqZWN0LnZhbHVlcyhvYmopLmxlbmd0aCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGF0YS1kZWNvcmF0b3IuanMiLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAVHlwZSB7T2JqZWN0fSB0aGUgaW50ZXJuYWwgZGF0YSBtb2RlbCBvYmplY3RcbiAgICAgKi9cbiAgICB0aGlzLmRhdGEgPSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn0gdGhlIGxvZ2dlciBmb3IgdGhpcyBjbGFzc1xuICAgICAqL1xuICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc2V0dGluZ3MoeyB2ZXJib3NlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyICYmICFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmFwcGVuZFRvICYmICFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBhcHBlbmRUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFwcGVuZFRvID0gZDMuc2VsZWN0KGFwcGVuZFRvKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gY2FsbGJhY2tIYW5kbGVyIHx8IHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2FkKGpzb24sIHBhcnRpYWwpIHtcbiAgICBsZXQgZGF0YSA9IEpzb25VdGlscy5wYXJzZShqc29uLCBwYXJ0aWFsKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuYXhpcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnlTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnhTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgICBcbiAgICB0aGlzLmF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXM7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNldHMpO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pLmRvbWFpbih0aGlzLmF4aXMueS5kb21haW4pO1xuICAgIFxuICAgIHRoaXMuYWxsVmFsdWVzID0gW107XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5hbGxWYWx1ZXMgPSB0aGlzLmFsbFZhbHVlcy5jb25jYXQodGhpcy5kYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueVNjYWxlLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYWxsVmFsdWVzLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4oWzAsIHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cbiAgfVxuICBcbiAgX3JlbmRlckF4aXMoKSB7XG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHt0aGlzLmhlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHRoaXMud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueS50aXRsZSk7XG4gIH1cbiAgXG4gIF9yZW5kZXJMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEodGhpcy5kYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b29sdGlwKGRhdGFzZXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgJ0EnOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sICdCJzogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKHthcHBlbmRUbzogdGhpc30pLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBMb2dnZXIgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcoTG9nZ2VyLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oTG9nZ2VyLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsZXZlbCB0aGUgbG9nIGxldmVsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBzdGF0aWMgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmNvbnRleHRNZW51ID0gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIF9hcHBseUV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGVsZW1lbnRcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBkYXRhID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBzZWxmLmNvbnRleHRNZW51LmxvYWQoZGF0YSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZGF0YSwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gVE9ETyBtYWtlIHNvbWUgc2Vuc2Ugb2Ygc2VsZWN0aW9uIG9uIG5vZGVzXG4gICAgICAgIGQuc2VsZWN0ZWQgPSAhZC5zZWxlY3RlZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkYXRhLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGRhdGEsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlcykge1xuICAgICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKHttZXNzYWdlczogZGF0YS5tZXNzYWdlc30sIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAgIC8vIG9rLCB0aGlzIGlzIGFsbW9zdCBhIGhhY2ssIGJlY2F1c2UgdGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgb25cbiAgICAgICAgICAvLyB0aGUgdG9vbHRpcCBpdHNlbGYuLiBidXQgYmVjYXVzZSBhIHRvb2x0aXAgZ2V0cyBvbmx5IHRoZSBtZXNzYWdlcyBcbiAgICAgICAgICAvLyBvYmplY3QgdG8gcmVuZGVyIGFuZCBub3QgdGhlIHdob2xlIHRoaXMuZGF0YSBvYmplY3QsIFxuICAgICAgICAgIC8vIHdlIGNhbid0IGNoZWNrIGZvciB0aGUgcHJvcGVydHkgY2FudmFzLnRleFR5cGVzZXR0aW5nLCBcbiAgICAgICAgICAvLyBoZW5jZSB0aGlzOlxuICAgICAgICAgIHNlbGYubWF0aGpheC5zZXR0aW5ncyh7YXBwZW5kVG86IHNlbGYudG9vbHRpcH0pLnJlbmRlckhUTUwoKTtcbiAgICAgICAgfSBcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIG9ubHkgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgc2VsZi5jYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBzdGF0aWMgbGlua1hQb3MocywgdCkge1xuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIodC55IC0gcy55LCB0LnggLSBzLngpO1xuICAgIHJldHVybiBNYXRoLmNvcyhhbmdsZSkgKyAocy54ICsgdC54KS8yO1xuICB9XG4gICAgXG4gIHN0YXRpYyBsaW5rWVBvcyhzLCB0KSB7XG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih0LnkgLSBzLnksIHQueCAtIHMueCk7XG4gICAgcmV0dXJuIE1hdGguc2luKGFuZ2xlKSArIChzLnkgKyB0LnkpIC8gMjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY3Jvc3MnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENyb3NzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlhbW9uZCc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3F1YXJlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3Rhcic6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3RhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3d5ZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sV3llO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgbGV0IG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICBsZXQgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICBsZXQgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmxvYWQoZCwgdHJ1ZSkuZXhlY3V0ZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBsZXQgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgbGV0IG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgUmVxdWlyZWRBcmdzTW9kYWwgZnJvbSAnLi9tb2RhbC1yZXF1aXJlZCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGxiYWNrT2JqKSA9PiB0aGlzLl9leGVjdXRlLmNhbGwodGhpcywgY2FsbGJhY2tPYmopO1xuICAgICAgcmV0dXJuIG5ldyBSZXF1aXJlZEFyZ3NNb2RhbChvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICB0aGlzLl9leGVjdXRlKHRoaXMuZGF0YS5jYWxsYmFjayk7XG4gICAgXG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLm92ZXJsYXkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ob2xkZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdGhpcy5vdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHRoaXMuaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgfVxuICBcbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLmhvbGRlci5yZW1vdmUoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoY2xhc3Nlcykge1xuICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBpbiBKdXB5dGVyIGZvciBzcGVjaWZpYyBjc3MgY2xhc3NlZCBlbGVtZW50c1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoYykgPT4ge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cyhjKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4nLCBlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG5leHBvcnQgZnVuY3Rpb24gc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIChtYXRjaCkgPT4ge1xuICAgIGxldCBjbHMgPSAnbnVtYmVyJztcbiAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICB9IGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCI+JHttYXRjaH08L3NwYW4+YDtcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHJldHVybjtcblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyB0aGlzIHdvbid0IGJlIHZpc2libGUgYWxsIHRoZSB0aW1lcywgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyAxNSkgKyAncHgnKS5zdHlsZSgndG9wJywgKHBvc1sxXSAtIDE1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICBsZXQgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQodGhpcy5kYXRhLm1lc3NhZ2VzW2tleV0udGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHRoaXMuZGF0YS5tZXNzYWdlc1trZXldLnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmxvYWR9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiAgXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUueFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkIGFuZCBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsgbGlicmFyeS4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QgXG4gICAqIHBhc3NlZCB0aHJvdWdoIHRoZSBsb2FkIG1ldGhvZC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIGxldCBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59IGNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcykuYWRkKHRoaXMubWVzc2FnZXMpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIGNvbnN0IGZyYW1lSWQgPSBgRnJhbWUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBkaXYjJHtmcmFtZUlkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgRnJhbWUgWyR7ZnJhbWVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5hdHRyKCdpZCcsIGZyYW1lSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBmcmFtZSB3aXRoIGlkIFske2ZyYW1lSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRnJhbWUgdXBkYXRlZCBbJHtmcmFtZUlkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcGFyYW0gcGFydGlhbCAtIGlmIHRoZSBpbnB1dCBpcyBub3QgYSBjb21wbGV0ZSBGcmFuY3kgSlNPTiBPYmplY3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsID0gZmFsc2UpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYl0rfChnYXA+KS9nLCAnJyk7XG4gICAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICAgIGlmICghbWF0Y2gpIHJldHVybjtcbiAgICAgIGlucHV0ID0gSlNPTi5wYXJzZShtYXRjaFswXSk7XG4gICAgfVxuICAgIHJldHVybiBpbnB1dC5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8gaW5wdXQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0YXRpYyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtaW1lIHR5cGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGFja2FnZVxuICAgKi9cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBlbmFibGVkIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBNYXRoSmF4LCBkMyAqL1xuXG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aEpheFdyYXBwZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICBNYXRoSmF4Lkh1Yi5Db25maWcoe1xuICAgICAgc2hvd01hdGhNZW51OiBmYWxzZSxcbiAgICAgIHNraXBTdGFydHVwVHlwZXNldDogdHJ1ZSxcbiAgICAgIHRleDJqYXg6IHtcbiAgICAgICAgaW5saW5lTWF0aDogWyBbJyQnLCckJ10sIFsnXFxcXCgnLCdcXFxcKSddIF0sXG4gICAgICAgIGRpc3BsYXlNYXRoOiBbIFsnJCQnLCckJCddLCBbJ1xcXFxbJywnXFxcXF0nXSBdLFxuICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZSxcbiAgICAgICAgcHJvY2Vzc0Vudmlyb25tZW50czogdHJ1ZVxuICAgICAgfSxcbiAgICAgIE1hdGhNTDoge1xuICAgICAgICBleHRlbnNpb25zOiBbJ2NvbnRlbnQtbWF0aG1sLmpzJ11cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5QWxpZ246ICdjZW50ZXInLFxuICAgICAgJ0hUTUwtQ1NTJzoge1xuICAgICAgICBhdmFpbGFibGVGb250czogW10sXG4gICAgICAgIGltYWdlRm9udDogbnVsbCxcbiAgICAgICAgcHJlZmVycmVkRm9udDogbnVsbCxcbiAgICAgICAgZm9udDogJ1NUSVgtV2ViJywgXG4gICAgICAgIHdlYkZvbnQ6ICdTVElYLVdlYicsXG4gICAgICAgIHN0eWxlczogeycuTWF0aEpheF9EaXNwbGF5JzogeydtYXJnaW4nOiAwfX0sXG4gICAgICAgIGxpbmVicmVha3M6IHsgXG4gICAgICAgICAgYXV0b21hdGljOiB0cnVlIFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ1NWRyc6IHtcbiAgICAgICAgYXZhaWxhYmxlRm9udHM6IFtdLFxuICAgICAgICBpbWFnZUZvbnQ6IG51bGwsXG4gICAgICAgIHByZWZlcnJlZEZvbnQ6IG51bGwsXG4gICAgICAgIGZvbnQ6ICdTVElYLVdlYicsIFxuICAgICAgICB3ZWJGb250OiAnU1RJWC1XZWInLFxuICAgICAgICBzdHlsZXM6IHsnLk1hdGhKYXhfRGlzcGxheSc6IHsnbWFyZ2luJzogMH19LFxuICAgICAgICBsaW5lYnJlYWtzOiB7IFxuICAgICAgICAgIGF1dG9tYXRpYzogdHJ1ZSBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuTWVzc2FnZUhvb2soJ05ldyBNYXRoJywgZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmIChpZCAmJiBpZC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBtYXRoSmF4RWxlbWVudCA9IGQzLnNlbGVjdChgIyR7aWRbMV19LUZyYW1lYCk7XG4gICAgICAgIHZhciBzdmdNYXRoSmF4RWxlbWVudCA9IG1hdGhKYXhFbGVtZW50LnNlbGVjdCgnc3ZnJyk7XG4gICAgICAgIGlmIChzdmdNYXRoSmF4RWxlbWVudC5ub2RlKCkpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgd2lkdGggPSBzdmdNYXRoSmF4RWxlbWVudC5ub2RlKCkud2lkdGguYmFzZVZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgc3ZnTWF0aEpheEVsZW1lbnQuYXR0cigneCcsIC13aWR0aCAvIDIpO1xuICAgICAgICAgICAgICBzdmdNYXRoSmF4RWxlbWVudC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdChtYXRoSmF4RWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZS5wYXJlbnROb2RlKS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdmdNYXRoSmF4RWxlbWVudC5ub2RlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE1hdGhKYXguSHViLkNvbmZpZ3VyZWQoKTtcblxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgQGVuYWJsZWQoJ2NhbnZhcy50ZXhUeXBlc2V0dGluZycpXG4gIHJlbmRlclNWRygpIHtcbiAgICAvLyBpZiBubyBlbGVtZW50IGhlcmUganVzdCByZXR1cm4uLi5cbiAgICBpZiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5ub2RlKCkpIHJldHVybjtcbiAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShcbiAgICAgIFsnc2V0UmVuZGVyZXInLCBNYXRoSmF4Lkh1YiwgJ1NWRyddLFxuICAgICAgWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIHRoaXMucGFyZW50Lm5vZGUoKV1cbiAgICApO1xuICB9XG4gIFxuICBAaW5pdGlhbGl6ZSgpXG4gIEBlbmFibGVkKCdjYW52YXMudGV4VHlwZXNldHRpbmcnKVxuICByZW5kZXJIVE1MKCkge1xuICAgIC8vIGlmIG5vIGVsZW1lbnQgaGVyZSBqdXN0IHJldHVybi4uLlxuICAgIGlmICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50Lm5vZGUoKSkgcmV0dXJuO1xuICAgIE1hdGhKYXguSHViLlF1ZXVlKFxuICAgICAgWydzZXRSZW5kZXJlcicsIE1hdGhKYXguSHViLCAnSFRNTC1DU1MnXSxcbiAgICAgIFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCB0aGlzLnBhcmVudC5ub2RlKCldLFxuICAgICk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tYXRoamF4LXdyYXBwZXIuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaEZhY3RvcnkgZnJvbSAnLi9ncmFwaC1mYWN0b3J5JztcbmltcG9ydCBDaGFydEZhY3RvcnkgZnJvbSAnLi9jaGFydC1mYWN0b3J5JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaEZhY3RvcnkgPSBuZXcgR3JhcGhGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydEZhY3RvcnkgPSBuZXcgQ2hhcnRGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5ncmFwaEZhY3RvcnkpLmFkZCh0aGlzLmNoYXJ0RmFjdG9yeSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoZm9yY2UpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0IHx8IGZvcmNlKSB7XG4gICAgICAgIGxldCBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgbGV0IGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIGxldCB3aWR0aCA9ICtib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gK2JvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzSWQgPSBgQ2FudmFzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbignem9vbScsIHpvb21lZCk7XG4gICAgICAvLyByZW1vdmUgem9vbSBvbiBkb3VibGUgY2xpY2shXG4gICAgICB0aGlzLmVsZW1lbnQuY2FsbCh6b29tKS5vbignZGJsY2xpY2suem9vbScsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHRoaXMuZWxlbWVudC56b29tVG9GaXQgPSB0aGlzLnpvb21Ub0ZpdCA9IHpvb21Ub0ZpdDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvb21Ub0ZpdCgpO1xuICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5ncmFwaCcpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlKSB7XG4gICAgY2FzZSAndHJlZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBpID0gMCxcbiAgICAgIHJvb3Q7XG5cbiAgICByb290ID0gZDMuaGllcmFyY2h5KHRoaXMudHJlZURhdGEsIGQgPT4gZC5jaGlsZHJlbik7XG4gICAgcm9vdC54MCA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIC8vIGNvbXB1dGUgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgZ3JhcGhcbiAgICBsZXQgbGV2ZWxXaWR0aCA9IFsxXTtcbiAgICBsZXQgY2hpbGRDb3VudCA9IGZ1bmN0aW9uIChsZXZlbCwgbikge1xuXG4gICAgICBpZiAobi5jaGlsZHJlbiAmJiBuLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGxldmVsV2lkdGgubGVuZ3RoIDw9IGxldmVsICsgMSkgbGV2ZWxXaWR0aC5wdXNoKDApO1xuXG4gICAgICAgIGxldmVsV2lkdGhbbGV2ZWwgKyAxXSArPSBuLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgY2hpbGRDb3VudChsZXZlbCArIDEsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoaWxkQ291bnQoMCwgcm9vdCk7XG4gICAgbGV0IG5ld0hlaWdodCA9IGQzLm1heChsZXZlbFdpZHRoKSAqIDEwMDtcblxuICAgIGxldCB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW25ld0hlaWdodCwgdGhpcy53aWR0aF0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguY29sbGFwc2VkKSB7XG4gICAgICByb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZS5jYWxsKHRoaXMsIHJvb3QpO1xuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuICAgICAgbGV0IHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgbGV0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4gZC55ID0gZC5kZXB0aCAqIDE1MCk7XG5cbiAgICAgIGxldCBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmtFbnRlci5tZXJnZShsaW5rKVxuICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKS5hdHRyKCdkJywgZCA9PiBkaWFnb25hbChkLCBkLnBhcmVudCkpO1xuXG4gICAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KS5yZW1vdmUoKTtcblxuICAgICAgbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2NjYycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzFweCcpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fVxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpXG4gICAgICAgIC5kYXRhKG5vZGVzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sJHtzb3VyY2UueDB9KWApO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQuZGF0YS50eXBlKSkuc2l6ZShkID0+IGQuZGF0YS5zaXplICogMTAwKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zeW1ib2wnKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgICAudGV4dChkID0+IGQuZGF0YS50aXRsZSlcbiAgICAgICAgLmF0dHIoJ3gnLCAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgICAgcmV0dXJuIC0oYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBsZXQgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sJHtzb3VyY2UueH0pYClcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1zeW1ib2wnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogR3JhcGguY29sb3JzKGQuZGF0YS5sYXllciAqIDUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG4gICAgICBcbiAgICAgIGlmIChub2RlLm5vZGUoKSkge1xuICAgICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgZmxhdCBkYXRhIGludG8gdHJlZSBkYXRhIGJ5IGFuYWx5c2luZyB0aGUgcGFyZW50cyBvZiBlYWNoIG5vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGRhdGEgdHJhbnNmb3JtZWQgaW4gdHJlZSBkYXRhXG4gICAqL1xuICBnZXQgdHJlZURhdGEoKSB7XG4gICAgbGV0IGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXTtcbiAgICBsZXQgZGF0YU1hcCA9IGNhbnZhc05vZGVzLnJlZHVjZShmdW5jdGlvbiAobWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgbGV0IHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICBsZXQgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWVEYXRhLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWVEYXRhWzBdO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBob2xkZXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSByZXR1cm47XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIGxldCBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAobGV0IGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICBsZXQgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgbGV0IGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcih0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKTtcbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG4gICAgbGV0IHJhZGl1cyA9IDA7XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5jbGFzc2VkKCdmcmFuY3ktbGlua3MnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuY2xhc3NlZCgnZnJhbmN5LW5vZGVzJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICAvLyB0aGlzIG1lYW5zIG5vIGNoYW5nZXMsIHNvIHdlIGNhbiBzYWZlbHkgcmV0dXJuXG4gICAgaWYgKG5vZGUuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbGluay5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmNsYXNzZWQoJ2ZyYW5jeS1saW5rJywgdHJ1ZSk7XG5cbiAgICBsaW5rRW50ZXIuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktZWRnZScsIHRydWUpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuICAgICAgICBpZiAoZC53ZWlnaHQgPj0gMykge1xuICAgICAgICAgIGQud2VpZ2h0ID0gMzsgZC5wb3MgPSAxNTtcbiAgICAgICAgfSBlbHNlIGlmIChkLndlaWdodCA8PSAxKSB7XG4gICAgICAgICAgZC53ZWlnaHQgPSAxOyBkLnBvcyA9IDI4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGQucG9zID0gMTg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGQud2VpZ2h0O1xuICAgICAgfSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBkLmNvbG9yIHx8IHVuZGVmaW5lZCk7XG5cbiAgICBsaW5rRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbGFiZWwnLCB0cnVlKVxuICAgICAgLmNsYXNzZWQoJ2ZyYW5jeS1zaXplMTAnLCB0cnVlKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHNlbGYucGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEobGlua3NUb0FkZClcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuY2xhc3NlZCgnZnJhbmN5LWFycm93cycsIHRydWUpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGFycm93LSR7ZC5pZH1gKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIDAgMTIgMTInKVxuICAgICAgICAuYXR0cigncmVmWCcsIGQgID0+IGQucG9zKVxuICAgICAgICAuYXR0cigncmVmWScsIDYpXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMilcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTIpXG4gICAgICAgIC5hdHRyKCdtYXJrZXJVbml0cycsICdzdHJva2VXaWR0aCcpXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMiwyIEwxMCw2IEwyLDEwIEw2LDYgTDIsMicpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jb2xvciB8fCB1bmRlZmluZWQpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zZWxlY3RBbGwoJ2xpbmUuZnJhbmN5LWVkZ2UnKS5zdHlsZSgnbWFya2VyLWVuZCcsIGQgPT4gYHVybCgjYXJyb3ctJHtkLmlkfSlgKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LW5vZGUnLCB0cnVlKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNvbG9yIHx8IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LXN5bWJvbCcsIHRydWUpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LWhpZ2hsaWdodCcsIGQgPT4gZC5oaWdobGlnaHQpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LWNvbnRleHQnLCBkID0+IE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoICYmIE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID4gMCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbGFiZWwnLCB0cnVlKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gYXBwbHkgbWF0aGpheCBpZiB0aGlzIGlzIHRoZSBjYXNlXG4gICAgICAgIGxldCB0ZXh0ID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICBpZiAodGV4dC50ZXh0KCkuc3RhcnRzV2l0aCgnJCcpICYmIHRleHQudGV4dCgpLmVuZHNXaXRoKCckJykpIHtcbiAgICAgICAgICBzZWxmLm1hdGhqYXguc2V0dGluZ3Moe2FwcGVuZFRvOiB7ZWxlbWVudDogdGV4dH19KS5yZW5kZXJTVkcoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgLy8gY2hlY2sgdGhlIHdpZGVzdCBsYWJlbCBzbyB0aGF0IHdlIHVzZSBpdCBhcyBkZWZhdWx0IHJhZGl1cyBmb3IgY29saXNpb25zXG4gICAgICAgIGlmIChyYWRpdXMgPCBib3VuZC53aWR0aCkge1xuICAgICAgICAgIHJhZGl1cyA9IGJvdW5kLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICB9KTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNob3dOZWlnaGJvdXJzKSB7XG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgLy9DYW52YXMgRm9yY2VzXG4gICAgICAvL2xldCBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh0aGlzLndpZHRoIC8gMikueSh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtbm9kZXNUb0FkZC5sZW5ndGggKiA3NSk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDc1KTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoKS5zdHJlbmd0aCgwLjI1KS5yYWRpdXMocmFkaXVzLzIpLml0ZXJhdGlvbnMoMyk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjA1KTtcbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWSh0aGlzLmhlaWdodCkuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjEpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLy8uZm9yY2UoJ2NlbnRlcicsIGNlbnRlckZvcmNlKVxuICAgICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKCdjb2xsaWRlJywgY29sbGlkZUZvcmNlKVxuICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgIC5vbignZW5kJywgc2VsZi5wYXJlbnQuem9vbVRvRml0KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24ucmVzdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGluay5zZWxlY3RBbGwoJ2xpbmUuZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBsaW5rLnNlbGVjdEFsbCgndGV4dC5mcmFuY3ktbGFiZWwnKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgcmV0dXJuIEdyYXBoLmxpbmtYUG9zKGQudGFyZ2V0LCBkLnNvdXJjZSk7IFxuICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgXG4gICAgICAgICAgcmV0dXJuIEdyYXBoLmxpbmtZUG9zKGQudGFyZ2V0LCBkLnNvdXJjZSk7IFxuICAgICAgICB9KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgbGV0IHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgbGV0IGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbiAgXG4gIF9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNPYmplY3RzLCBkM0VsZW1lbnQpIHtcbiAgICBsZXQgbmV3RWxlbWVudHMgPSBbXTtcbiAgICBjYW52YXNPYmplY3RzLmZvckVhY2gobyA9PiB7XG4gICAgICBsZXQgbGluayA9IGQzRWxlbWVudC5maW5kKGQgPT4gZC5pZCA9PT0gby5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKGxpbmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudHM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RmFjdG9yeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuY2hhcnQnKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICBjYXNlICdiYXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgU2NhdHRlckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7IFxuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTsgXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtzZWxmLmRhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuICAgIFxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigncicsIDUpXG4gICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcblxuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG5pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgY29uc3QgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KHRydWUpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSwgJ2RpYWdyYW0ucG5nJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMsIHN5bnRheEhpZ2hsaWdodCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbChzeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCkgfHwgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZSB1cmwgaWYgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLi4vJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYmxvYiA9IHVyaVRvQmxvYih1cmkpO1xuICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgc2F2ZUxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCBVUkxzLiBGYWxsaW5nIGJhY2sgdG8gc3RyaW5nIFVSTC4nKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLm1lc3NhZ2VzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxldCBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgbGV0IG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZyBjbG9zZW1lJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoJ3gnKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgXG4gICAgLy8gcmVuZGVyIG1hdGhqYXhcbiAgICB0aGlzLm1hdGhqYXguc2V0dGluZ3Moe2FwcGVuZFRvOiB0aGlzfSkucmVuZGVySFRNTCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9