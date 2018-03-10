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
          //forceX = d3.forceX(this.width).strength(0.4);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDIzYTEzM2M3ODJkZDMxY2QyMDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tYXRoamF4LXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm9wdGlvbnMiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwibWF0aGpheFdyYXBwZXIiLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyZW50Iiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsImxvYWQiLCJkYXRhIiwicmVxdWlyZXMiLCJlbmFibGVkIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9iaiIsInByb3BlcnR5UGF0aCIsInRtcCIsInByb3BlcnRpZXMiLCJzcGxpdCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImluaXRpYWxpemUiLCJrZXkiLCJfaW5pdGlhbGl6ZSIsIkJhc2UiLCJzZXR0aW5ncyIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsInNlbGVjdEFsbCIsImFwcGVuZCIsInJlbW92ZSIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsIm1hcCIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiR3JhcGgiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwic2VsZiIsIm9uIiwiZXhlY3V0ZUNhbGxiYWNrIiwic2VsZWN0ZWQiLCJtZXNzYWdlcyIsIm1hdGhqYXgiLCJyZW5kZXJIVE1MIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwicyIsInQiLCJhbmdsZSIsIk1hdGgiLCJhdGFuMiIsImNvcyIsInNpbiIsInR5cGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzeW1ib2xDaXJjbGUiLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiTW9kYWwiLCJvdmVybGF5IiwiaG9sZGVyIiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzeW50YXhIaWdobGlnaHQiLCJjbGFzc2VzIiwiYyIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwiZSIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwianNvblJlZ2V4IiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiaW5pdGlhbGl6ZWQiLCJNYXRoSmF4V3JhcHBlciIsIk1hdGhKYXgiLCJIdWIiLCJDb25maWciLCJzaG93TWF0aE1lbnUiLCJza2lwU3RhcnR1cFR5cGVzZXQiLCJ0ZXgyamF4IiwiaW5saW5lTWF0aCIsImRpc3BsYXlNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJwcm9jZXNzRW52aXJvbm1lbnRzIiwiTWF0aE1MIiwiZXh0ZW5zaW9ucyIsImRpc3BsYXlBbGlnbiIsImF2YWlsYWJsZUZvbnRzIiwiaW1hZ2VGb250IiwicHJlZmVycmVkRm9udCIsImZvbnQiLCJ3ZWJGb250Iiwic3R5bGVzIiwibGluZWJyZWFrcyIsImF1dG9tYXRpYyIsIlJlZ2lzdGVyIiwiTWVzc2FnZUhvb2siLCJtYXRoSmF4RWxlbWVudCIsInN2Z01hdGhKYXhFbGVtZW50Iiwic2V0VGltZW91dCIsImJhc2VWYWwiLCJDb25maWd1cmVkIiwiUXVldWUiLCJDYW52YXMiLCJncmFwaEZhY3RvcnkiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYW52YXNJZCIsImdyYXBoIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJkZXB0aCIsImxpbmtHcm91cCIsImxpbmsiLCJsaW5rRW50ZXIiLCJvIiwiZGlhZ29uYWwiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJib3VuZCIsIm5vZGVVcGRhdGUiLCJsYXllciIsIl9hcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiUmVxdWlyZWRBcmdzTW9kYWwiLCJtb2RhbElkIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImlucHV0RWxlbWVudCIsImZvY3VzIiwiR2VuZXJpY0dyYXBoIiwic2ltdWxhdGlvbkFjdGl2ZSIsInNpbXVsYXRpb24iLCJyYWRpdXMiLCJjYW52YXNMaW5rcyIsImNsYXNzZWQiLCJsaW5rc1RvQWRkIiwiX2ZpbHRlck5ld0VsZW1lbnRzIiwibm9kZXNUb0FkZCIsIndlaWdodCIsImNvbG9yIiwiaGlnaGxpZ2h0Iiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwicmVuZGVyU1ZHIiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVtcHR5Iiwic2hvd05laWdoYm91cnMiLCJjb25uZWN0ZWROb2RlcyIsIm1hbnlGb3JjZSIsImZvcmNlTWFueUJvZHkiLCJzdHJlbmd0aCIsImxpbmtGb3JjZSIsImZvcmNlTGluayIsImRpc3RhbmNlIiwiY29sbGlkZUZvcmNlIiwiZm9yY2VDb2xsaWRlIiwiaXRlcmF0aW9ucyIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwicmVzdGFydCIsImxpbmtYUG9zIiwibGlua1lQb3MiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJ3YXJuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsImZvcm1hdCIsImdldEZvbnRNaW1lVHlwZUZyb21VcmwiLCJwcm9jZXNzRm9udFF1ZXVlIiwiZm9udFVybCIsInN1cHBvcnRlZEZvcm1hdHMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZUVuY29kZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInAxIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFB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TUFBakM7QUFDRCxPQUhnQixDQUFuQjtBQUlBa2UsbUJBQWF0ZSxNQUFiLENBQW9CLE1BQXBCLEVBQTRCN0QsSUFBNUIsQ0FBaUMsT0FBakMsRUFBMEMsUUFBMUMsRUFBb0RrRSxJQUFwRCxDQUF5RDtBQUFBLGVBQUtSLEVBQUVTLEtBQVA7QUFBQSxPQUF6RDtBQUNBZ2UsbUJBQWF0ZSxNQUFiLENBQW9CLE1BQXBCLEVBQTRCSyxJQUE1QixDQUFpQztBQUFBLGVBQUtSLEVBQUVRLElBQVA7QUFBQSxPQUFqQztBQUNBaWUsbUJBQWF0ZSxNQUFiLENBQW9CLE1BQXBCLEVBQTRCN0QsSUFBNUIsQ0FBaUMsT0FBakMsRUFBMEMsZ0JBQTFDLEVBQTREaUUsS0FBNUQsQ0FBa0UsU0FBbEUsRUFBNkUsTUFBN0UsRUFBcUZDLElBQXJGLENBQTBGLEdBQTFGOztBQUVBaWUsbUJBQWF0ZCxLQUFiLENBQW1CZSxPQUFuQjs7QUFFQUEsY0FBUWxCLElBQVIsR0FBZVosTUFBZjs7QUFFQSxXQUFLNUUsT0FBTCxDQUFhK0UsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQTtBQUNBLFdBQUswQyxPQUFMLENBQWExRSxRQUFiLENBQXNCLEVBQUMzRCxVQUFVLElBQVgsRUFBdEIsRUFBd0NzSSxVQUF4Qzs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTlDTXFiLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMjNhMTMzYzc4MmRkMzFjZDIwOCIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgTWF0aEpheFdyYXBwZXIgZnJvbSAnLi9tYXRoamF4LXdyYXBwZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciwgb3B0aW9ucyA9IHt9IH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLm1hdGhqYXhXcmFwcGVyID0gbmV3IE1hdGhKYXhXcmFwcGVyKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNzUwOyAvL21zXG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge31cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgPyBkMy5zZWxlY3QodGhpcy5wYXJlbnQubm9kZSgpLnBhcmVudE5vZGUpIDogdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGl2JyA/IHRoaXMucGFyZW50LnNlbGVjdCgnc3ZnJykgOiB0aGlzLnBhcmVudDtcbiAgfVxuICBcbiAgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIH1cbiAgXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgd2lkdGggPSArdGhpcy5wYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICB9XG4gIFxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSArdGhpcy5wYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICB9XG4gIFxuICBnZXQgbWF0aGpheCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRoamF4V3JhcHBlci5sb2FkKHRoaXMuZGF0YSk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVkKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFByb3BlcnR5IGRpc2FibGVkIFske3Byb3BzfV0sIHNraXAgZXhlY3V0aW9uLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IEpzb25VdGlscyBmcm9tICcuLi91dGlsL2pzb24tdXRpbHMnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZXR0aW5ncyh7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgLyoqXG4gICAgICogQFR5cGUge09iamVjdH0gdGhlIGludGVybmFsIGRhdGEgbW9kZWwgb2JqZWN0XG4gICAgICovXG4gICAgdGhpcy5kYXRhID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciAmJiAhY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hcHBlbmRUbyAmJiAhYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgYXBwZW5kVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICBhcHBlbmRUbyA9IGQzLnNlbGVjdChhcHBlbmRUbyk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy52ZXJib3NlID0gdmVyYm9zZSB8fCB0aGlzLm9wdGlvbnMudmVyYm9zZTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxuICBnZXQgbG9nZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmF4aXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy55U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy54U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvb2x0aXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gICAgXG4gICAgdGhpcy5heGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzO1xuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGE7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFzZXRzKTtcblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKS5kb21haW4odGhpcy5heGlzLnkuZG9tYWluKTtcbiAgICBcbiAgICB0aGlzLmFsbFZhbHVlcyA9IFtdO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRoaXMuYWxsVmFsdWVzID0gdGhpcy5hbGxWYWx1ZXMuY29uY2F0KHRoaXMuZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmFsbFZhbHVlcywgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKFswLCB0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG4gIH1cbiAgXG4gIF9yZW5kZXJBeGlzKCkge1xuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7dGhpcy5oZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueFNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB0aGlzLndpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLnkudGl0bGUpO1xuICB9XG4gIFxuICBfcmVuZGVyTGVnZW5kKCkge1xuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgbGV0IGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIGxldCBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKHRoaXMuZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7ICdBJzogeyAndGl0bGUnOiAnRGF0YXNldCcsICd0ZXh0JzogZGF0YXNldCB9LCAnQic6IHsgJ3RpdGxlJzogJ1ZhbHVlJywgJ3RleHQnOiB2YWx1ZSB9IH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAobGV0IHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyh7YXBwZW5kVG86IHRoaXN9KS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9nZ2VyIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKExvZ2dlci5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKExvZ2dlci5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbGV2ZWwgdGhlIGxvZyBsZXZlbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgc3RhdGljIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gIH1cblxuICBfYXBwbHlFdmVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICAgIFxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgc2VsZi5jb250ZXh0TWVudS5sb2FkKGRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGRhdGEsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBkYXRhID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIFRPRE8gbWFrZSBzb21lIHNlbnNlIG9mIHNlbGVjdGlvbiBvbiBub2Rlc1xuICAgICAgICBkLnNlbGVjdGVkID0gIWQuc2VsZWN0ZWQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZGF0YSwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkYXRhLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IGRhdGEgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZXMpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZCh7bWVzc2FnZXM6IGRhdGEubWVzc2FnZXN9LCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgICAvLyBvaywgdGhpcyBpcyBhbG1vc3QgYSBoYWNrLCBiZWNhdXNlIHRoaXMgc2hvdWxkIGJlIHJlbmRlcmVkIG9uXG4gICAgICAgICAgLy8gdGhlIHRvb2x0aXAgaXRzZWxmLi4gYnV0IGJlY2F1c2UgYSB0b29sdGlwIGdldHMgb25seSB0aGUgbWVzc2FnZXMgXG4gICAgICAgICAgLy8gb2JqZWN0IHRvIHJlbmRlciBhbmQgbm90IHRoZSB3aG9sZSB0aGlzLmRhdGEgb2JqZWN0LCBcbiAgICAgICAgICAvLyB3ZSBjYW4ndCBjaGVjayBmb3IgdGhlIHByb3BlcnR5IGNhbnZhcy50ZXhUeXBlc2V0dGluZywgXG4gICAgICAgICAgLy8gaGVuY2UgdGhpczpcbiAgICAgICAgICBzZWxmLm1hdGhqYXguc2V0dGluZ3Moe2FwcGVuZFRvOiBzZWxmLnRvb2x0aXB9KS5yZW5kZXJIVE1MKCk7XG4gICAgICAgIH0gXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSBvbmx5IHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIHNlbGYuY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgc3RhdGljIGxpbmtYUG9zKHMsIHQpIHtcbiAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKHQueSAtIHMueSwgdC54IC0gcy54KTtcbiAgICByZXR1cm4gTWF0aC5jb3MoYW5nbGUpICsgKHMueCArIHQueCkvMjtcbiAgfVxuICAgIFxuICBzdGF0aWMgbGlua1lQb3MocywgdCkge1xuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIodC55IC0gcy55LCB0LnggLSBzLngpO1xuICAgIHJldHVybiBNYXRoLnNpbihhbmdsZSkgKyAocy55ICsgdC55KSAvIDI7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDcm9zcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFNxdWFyZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXInOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFN0YXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3eWUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFd5ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG9sZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHRoaXMub3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB0aGlzLmhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gIH1cbiAgXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5ob2xkZXIucmVtb3ZlKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3Igc3BlY2lmaWMgY3NzIGNsYXNzZWQgZWxlbWVudHNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGMpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoYyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIGNyZWRpdHMgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxMDg0MS9ob3ctY2FuLWktcHJldHR5LXByaW50LWpzb24tdXNpbmctamF2YXNjcmlwdCNhbnN3ZXItNzIyMDUxMFxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCAobWF0Y2gpID0+IHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfSBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xzfVwiPiR7bWF0Y2h9PC9zcGFuPmA7XG4gIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSByZXR1cm47XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIC8vIFRPRE8gdGhpcyB3b24ndCBiZSB2aXNpYmxlIGFsbCB0aGUgdGltZXMsIGZpbmUgdW50aWwgc29tZW9uZSBjb21wbGFpbnMgYWJvdXQgOlBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCAocG9zWzBdICsgMTUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSAxNSkgKyAncHgnKTtcblxuICAgIGxldCB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHRoaXMuZGF0YS5tZXNzYWdlc1trZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dCh0aGlzLmRhdGEubWVzc2FnZXNba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LnhcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCBhbmQgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrIGxpYnJhcnkuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0IFxuICAgKiBwYXNzZWQgdGhyb3VnaCB0aGUgbG9hZCBtZXRob2QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGZyYW1lID0gbmV3IEZyYW1lKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIEFMTF9DQU5WQVNbdGhpcy5kYXRhLmNhbnZhcy5pZF0gPSBmcmFtZTtcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICBzdGF0aWMgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICBsZXQgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufSBjYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpLmFkZCh0aGlzLm1lc3NhZ2VzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICBjb25zdCBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHBhcnRpYWwgLSBpZiB0aGUgaW5wdXQgaXMgbm90IGEgY29tcGxldGUgRnJhbmN5IEpTT04gT2JqZWN0LCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJdK3woZ2FwPikvZywgJycpO1xuICAgICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgICBpZiAoIW1hdGNoKSByZXR1cm47XG4gICAgICBpbnB1dCA9IEpTT04ucGFyc2UobWF0Y2hbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gaW5wdXQubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGlucHV0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdGF0aWMgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWltZSB0eXBlIHN1cHBvcnRlZCBieSB0aGlzIHBhY2thZ2VcbiAgICovXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgZW5hYmxlZCB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgTWF0aEpheCwgZDMgKi9cblxubGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhKYXhXcmFwcGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgaWYgKGluaXRpYWxpemVkKSByZXR1cm47XG4gICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgIHNob3dNYXRoTWVudTogZmFsc2UsXG4gICAgICBza2lwU3RhcnR1cFR5cGVzZXQ6IHRydWUsXG4gICAgICB0ZXgyamF4OiB7XG4gICAgICAgIGlubGluZU1hdGg6IFsgWyckJywnJCddLCBbJ1xcXFwoJywnXFxcXCknXSBdLFxuICAgICAgICBkaXNwbGF5TWF0aDogWyBbJyQkJywnJCQnXSwgWydcXFxcWycsJ1xcXFxdJ10gXSxcbiAgICAgICAgcHJvY2Vzc0VzY2FwZXM6IHRydWUsXG4gICAgICAgIHByb2Nlc3NFbnZpcm9ubWVudHM6IHRydWVcbiAgICAgIH0sXG4gICAgICBNYXRoTUw6IHtcbiAgICAgICAgZXh0ZW5zaW9uczogWydjb250ZW50LW1hdGhtbC5qcyddXG4gICAgICB9LFxuICAgICAgZGlzcGxheUFsaWduOiAnY2VudGVyJyxcbiAgICAgICdIVE1MLUNTUyc6IHtcbiAgICAgICAgYXZhaWxhYmxlRm9udHM6IFtdLFxuICAgICAgICBpbWFnZUZvbnQ6IG51bGwsXG4gICAgICAgIHByZWZlcnJlZEZvbnQ6IG51bGwsXG4gICAgICAgIGZvbnQ6ICdTVElYLVdlYicsIFxuICAgICAgICB3ZWJGb250OiAnU1RJWC1XZWInLFxuICAgICAgICBzdHlsZXM6IHsnLk1hdGhKYXhfRGlzcGxheSc6IHsnbWFyZ2luJzogMH19LFxuICAgICAgICBsaW5lYnJlYWtzOiB7IFxuICAgICAgICAgIGF1dG9tYXRpYzogdHJ1ZSBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdTVkcnOiB7XG4gICAgICAgIGF2YWlsYWJsZUZvbnRzOiBbXSxcbiAgICAgICAgaW1hZ2VGb250OiBudWxsLFxuICAgICAgICBwcmVmZXJyZWRGb250OiBudWxsLFxuICAgICAgICBmb250OiAnU1RJWC1XZWInLCBcbiAgICAgICAgd2ViRm9udDogJ1NUSVgtV2ViJyxcbiAgICAgICAgc3R5bGVzOiB7Jy5NYXRoSmF4X0Rpc3BsYXknOiB7J21hcmdpbic6IDB9fSxcbiAgICAgICAgbGluZWJyZWFrczogeyBcbiAgICAgICAgICBhdXRvbWF0aWM6IHRydWUgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE1hdGhKYXguSHViLlJlZ2lzdGVyLk1lc3NhZ2VIb29rKCdOZXcgTWF0aCcsIGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoaWQgJiYgaWQubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgbWF0aEpheEVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2lkWzFdfS1GcmFtZWApO1xuICAgICAgICB2YXIgc3ZnTWF0aEpheEVsZW1lbnQgPSBtYXRoSmF4RWxlbWVudC5zZWxlY3QoJ3N2ZycpO1xuICAgICAgICBpZiAoc3ZnTWF0aEpheEVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHdpZHRoID0gc3ZnTWF0aEpheEVsZW1lbnQubm9kZSgpLndpZHRoLmJhc2VWYWwudmFsdWU7XG4gICAgICAgICAgICAgIHN2Z01hdGhKYXhFbGVtZW50LmF0dHIoJ3gnLCAtd2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgc3ZnTWF0aEpheEVsZW1lbnQuYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICBkMy5zZWxlY3QobWF0aEpheEVsZW1lbnQubm9kZSgpLnBhcmVudE5vZGUucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gc3ZnTWF0aEpheEVsZW1lbnQubm9kZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBNYXRoSmF4Lkh1Yi5Db25maWd1cmVkKCk7XG5cbiAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIEBlbmFibGVkKCdjYW52YXMudGV4VHlwZXNldHRpbmcnKVxuICByZW5kZXJTVkcoKSB7XG4gICAgLy8gaWYgbm8gZWxlbWVudCBoZXJlIGp1c3QgcmV0dXJuLi4uXG4gICAgaWYgKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQubm9kZSgpKSByZXR1cm47XG4gICAgTWF0aEpheC5IdWIuUXVldWUoXG4gICAgICBbJ3NldFJlbmRlcmVyJywgTWF0aEpheC5IdWIsICdTVkcnXSxcbiAgICAgIFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCB0aGlzLnBhcmVudC5ub2RlKCldXG4gICAgKTtcbiAgfVxuICBcbiAgQGluaXRpYWxpemUoKVxuICBAZW5hYmxlZCgnY2FudmFzLnRleFR5cGVzZXR0aW5nJylcbiAgcmVuZGVySFRNTCgpIHtcbiAgICAvLyBpZiBubyBlbGVtZW50IGhlcmUganVzdCByZXR1cm4uLi5cbiAgICBpZiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5ub2RlKCkpIHJldHVybjtcbiAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShcbiAgICAgIFsnc2V0UmVuZGVyZXInLCBNYXRoSmF4Lkh1YiwgJ0hUTUwtQ1NTJ10sXG4gICAgICBbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgdGhpcy5wYXJlbnQubm9kZSgpXSxcbiAgICApO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWF0aGpheC13cmFwcGVyLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGhGYWN0b3J5IGZyb20gJy4vZ3JhcGgtZmFjdG9yeSc7XG5pbXBvcnQgQ2hhcnRGYWN0b3J5IGZyb20gJy4vY2hhcnQtZmFjdG9yeSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuZ3JhcGhGYWN0b3J5ID0gbmV3IEdyYXBoRmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRGYWN0b3J5ID0gbmV3IENoYXJ0RmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGhGYWN0b3J5KS5hZGQodGhpcy5jaGFydEZhY3RvcnkpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IHpvb20gPSBkMy56b29tKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICBsZXQgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgbGV0IHdpZHRoID0gK2JvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSArYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKCd6b29tJywgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKCdkYmxjbGljay56b29tJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRyZWVHcmFwaCBmcm9tICcuL2dyYXBoLXRyZWUnO1xuaW1wb3J0IEdlbmVyaWNHcmFwaCBmcm9tICcuL2dyYXBoLWdlbmVyaWMnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICBjYXNlICd0cmVlJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB0aGlzLndpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTUwKTtcblxuICAgICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKVxuICAgICAgICAuYXR0cigneCcsICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIGxldCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIFxuICAgICAgaWYgKG5vZGUubm9kZSgpKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBmbGF0IGRhdGEgaW50byB0cmVlIGRhdGEgYnkgYW5hbHlzaW5nIHRoZSBwYXJlbnRzIG9mIGVhY2ggbm9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZGF0YSB0cmFuc2Zvcm1lZCBpbiB0cmVlIGRhdGFcbiAgICovXG4gIGdldCB0cmVlRGF0YSgpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdO1xuICAgIGxldCBkYXRhTWFwID0gY2FudmFzTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICBsZXQgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBtZW51IGhvbGRlciBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHJldHVybjtcblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgbGV0IG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgbGV0IGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yIChsZXQgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGxldCByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBsZXQgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHRoaXMuZGF0YS5jYWxsYmFjayk7XG4gICAgICAgIHRoaXMudW5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7IFxuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpO1xuICAgIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICBsZXQgc2ltdWxhdGlvbkFjdGl2ZSA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2ltdWxhdGlvbjtcbiAgICBsZXQgcmFkaXVzID0gMDtcblxuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmNsYXNzZWQoJ2ZyYW5jeS1saW5rcycsIHRydWUpO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgbGV0IGxpbmtzVG9BZGQgPSB0aGlzLl9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNMaW5rcywgbGlua3MpO1xuXG4gICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5jbGFzc2VkKCdmcmFuY3ktbm9kZXMnLCB0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIGxldCBub2Rlc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTm9kZXMsIG5vZGVzKTtcblxuICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIC8vIHRoaXMgbWVhbnMgbm8gY2hhbmdlcywgc28gd2UgY2FuIHNhZmVseSByZXR1cm5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LWxpbmsnLCB0cnVlKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmNsYXNzZWQoJ2ZyYW5jeS1lZGdlJywgdHJ1ZSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG4gICAgICAgIGlmIChkLndlaWdodCA+PSAzKSB7XG4gICAgICAgICAgZC53ZWlnaHQgPSAzOyBkLnBvcyA9IDE1O1xuICAgICAgICB9IGVsc2UgaWYgKGQud2VpZ2h0IDw9IDEpIHtcbiAgICAgICAgICBkLndlaWdodCA9IDE7IGQucG9zID0gMjg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZC5wb3MgPSAxODtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZC53ZWlnaHQ7XG4gICAgICB9KVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IGQuY29sb3IgfHwgdW5kZWZpbmVkKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmNsYXNzZWQoJ2ZyYW5jeS1sYWJlbCcsIHRydWUpXG4gICAgICAuY2xhc3NlZCgnZnJhbmN5LXNpemUxMCcsIHRydWUpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgc2VsZi5wYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShsaW5rc1RvQWRkKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5jbGFzc2VkKCdmcmFuY3ktYXJyb3dzJywgdHJ1ZSlcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgYXJyb3ctJHtkLmlkfWApXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgMCAxMiAxMicpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgZCAgPT4gZC5wb3MpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgNilcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEyKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMilcbiAgICAgICAgLmF0dHIoJ21hcmtlclVuaXRzJywgJ3N0cm9rZVdpZHRoJylcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00yLDIgTDEwLDYgTDIsMTAgTDYsNiBMMiwyJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNvbG9yIHx8IHVuZGVmaW5lZCk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnNlbGVjdEFsbCgnbGluZS5mcmFuY3ktZWRnZScpLnN0eWxlKCdtYXJrZXItZW5kJywgZCA9PiBgdXJsKCNhcnJvdy0ke2QuaWR9KWApO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktbm9kZScsIHRydWUpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY29sb3IgfHwgR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktc3ltYm9sJywgdHJ1ZSlcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktaGlnaGxpZ2h0JywgZCA9PiBkLmhpZ2hsaWdodClcbiAgICAgIC5jbGFzc2VkKCdmcmFuY3ktY29udGV4dCcsIGQgPT4gT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggJiYgT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPiAwKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmNsYXNzZWQoJ2ZyYW5jeS1sYWJlbCcsIHRydWUpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBhcHBseSBtYXRoamF4IGlmIHRoaXMgaXMgdGhlIGNhc2VcbiAgICAgICAgbGV0IHRleHQgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgIGlmICh0ZXh0LnRleHQoKS5zdGFydHNXaXRoKCckJykgJiYgdGV4dC50ZXh0KCkuZW5kc1dpdGgoJyQnKSkge1xuICAgICAgICAgIHNlbGYubWF0aGpheC5zZXR0aW5ncyh7YXBwZW5kVG86IHtlbGVtZW50OiB0ZXh0fX0pLnJlbmRlclNWRygpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICAvLyBjaGVjayB0aGUgd2lkZXN0IGxhYmVsIHNvIHRoYXQgd2UgdXNlIGl0IGFzIGRlZmF1bHQgcmFkaXVzIGZvciBjb2xpc2lvbnNcbiAgICAgICAgaWYgKHJhZGl1cyA8IGJvdW5kLndpZHRoKSB7XG4gICAgICAgICAgcmFkaXVzID0gYm91bmQud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0oYm91bmQud2lkdGggLyAyKTtcbiAgICAgIH0pO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvL0NhbnZhcyBGb3JjZXNcbiAgICAgIC8vbGV0IGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHRoaXMud2lkdGggLyAyKS55KHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA3NSk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDc1KTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoKS5yYWRpdXMocmFkaXVzLzIpLml0ZXJhdGlvbnMoMyk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjA1KTtcbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWSgtdGhpcy5oZWlnaHQpLnN0cmVuZ3RoKDAuMjUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgICAvL2ZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjQpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLy8uZm9yY2UoJ2NlbnRlcicsIGNlbnRlckZvcmNlKVxuICAgICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKCdjb2xsaWRlJywgY29sbGlkZUZvcmNlKVxuICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgICBzZWxmLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgICBzaW11bGF0aW9uLnJlc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmsuc2VsZWN0QWxsKCdsaW5lLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbGluay5zZWxlY3RBbGwoJ3RleHQuZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkKSB7IFxuICAgICAgICAgIHJldHVybiBHcmFwaC5saW5rWFBvcyhkLnRhcmdldCwgZC5zb3VyY2UpOyBcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IFxuICAgICAgICAgIHJldHVybiBHcmFwaC5saW5rWVBvcyhkLnRhcmdldCwgZC5zb3VyY2UpOyBcbiAgICAgICAgfSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIGxldCB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIGxldCBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG4gIFxuICBfZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzT2JqZWN0cywgZDNFbGVtZW50KSB7XG4gICAgbGV0IG5ld0VsZW1lbnRzID0gW107XG4gICAgY2FudmFzT2JqZWN0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgbGV0IGxpbmsgPSBkM0VsZW1lbnQuZmluZChkID0+IGQuaWQgPT09IG8uaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChsaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnRzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vY2hhcnQtbGluZSc7XG5pbXBvcnQgU2NhdHRlckNoYXJ0IGZyb20gJy4vY2hhcnQtc2NhdHRlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEZhY3RvcnkgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgY2FzZSAnYmFyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgTGluZUNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2NhdHRlcic6XG4gICAgICBlbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy5heGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIGxldCBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpOyBcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTsgXG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7IFxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGxldCBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKGkpO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgbGV0IGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1saW5lLSR7aW5kZXh9YCkuZGF0YShbc2VsZi5kYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBsaW5lRW50ZXIgPSBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZS0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5lRW50ZXIubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgc2NhdHRlckVudGVyID0gc2NhdHRlclxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3InLCA1KVxuICAgICAgICAuYXR0cignY3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKGkpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyRW50ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG5cbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIGNvbnN0IG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSwgJ2RpYWdyYW0ucG5nJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMsIHN5bnRheEhpZ2hsaWdodCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbChzeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCkgfHwgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZSB1cmwgaWYgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLi4vJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYmxvYiA9IHVyaVRvQmxvYih1cmkpO1xuICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgc2F2ZUxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCBVUkxzLiBGYWxsaW5nIGJhY2sgdG8gc3RyaW5nIFVSTC4nKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLm1lc3NhZ2VzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxldCBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgbGV0IG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZyBjbG9zZW1lJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoJ3gnKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgXG4gICAgLy8gcmVuZGVyIG1hdGhqYXhcbiAgICB0aGlzLm1hdGhqYXguc2V0dGluZ3Moe2FwcGVuZFRvOiB0aGlzfSkucmVuZGVySFRNTCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9