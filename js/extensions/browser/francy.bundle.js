(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Renderer);

    var _this = _possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

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
exports.RegisterMathJax = RegisterMathJax;
exports.RegisterJupyterKeyboardEvents = RegisterJupyterKeyboardEvents;

var _logger = __webpack_require__(6);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Jupyter, MathJax, d3 */

function RegisterMathJax(element) {
  if (!element) return;
  setTimeout(function () {
    try {
      MathJax.Hub.Config({
        tex2jax: {
          jax: ['input/TeX', 'output/SVG'],
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true
        }
      });

      MathJax.Hub.Register.StartupHook('End', function () {
        setTimeout(function () {
          element.selectAll('.francy-label').each(function () {
            var self = d3.select(this),
                mathJax = self.select('text>span>svg');
            if (mathJax.node()) {
              setTimeout(function () {
                mathJax.attr('x', self.attr('x'));
                mathJax.attr('y', -15);
                d3.select(self.node().parentNode).append(function () {
                  return mathJax.node();
                });
                self.selectAll('*').remove();
              }, 10);
            }
          });
        }, 250);
      });

      MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.node()]);

      MathJax.Hub.Configured();
    } catch (e) {
      if (e.name === 'ReferenceError') {
        new _logger2.default().info('It seems MathJax is not loaded...', e);
      }
    }
  }, 10);
}

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

var _tooltip = __webpack_require__(10);

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
      // update children rendering with a new parent!
      var options = this.options;
      options.appendTo = this;
      // render other components
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.renderers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var renderer = _step.value;

          renderer.settings(options).load(this.data).render();
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

var _jsonUtils = __webpack_require__(13);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var _menuContext = __webpack_require__(17);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(10);

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
      if (!element) return;

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      element.on('contextmenu', function (d) {
        d = d.data || d;
        // default, build context menu
        contextMenu.load(d, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on('mouseenter', function (d) {
        d = d.data || d;
        // default, show tooltip
        tooltip.load(d.messages, true).render();
      }).on('mouseleave', function () {
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

var _base = __webpack_require__(5);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(18);

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
      this.element.style('left', pos[0] + 5 + 'px').style('top', pos[1] - 5 + 'px');

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _frame = __webpack_require__(12);

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
 * @version 0.5.0
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
/* 12 */
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

var _canvas = __webpack_require__(14);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(24);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(27);

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
    _this.add(_this.messages).add(_this.menu).add(_this.canvas);
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var parent = d3.select(this.options.appendTo);

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
/* 13 */
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
/* 14 */
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

var _graphFactory = __webpack_require__(15);

var _graphFactory2 = _interopRequireDefault(_graphFactory);

var _chartFactory = __webpack_require__(20);

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
/* 15 */
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

var _graphTree = __webpack_require__(16);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(19);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graph = __webpack_require__(7);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var TreeGraph = function (_Graph) {
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

      this._initialize();

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

        nodeEnter.append('text').attr('class', 'francy-label').attr('x', function (d) {
          return -(d.data.title.length * 2.5);
        }).style('cursor', function (d) {
          return d.children || d._children ? 'pointer' : 'default';
        }).text(function (d) {
          return d.data.title;
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

        (0, _component.RegisterMathJax)(this.SVGParent);

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
}(_graph2.default);

exports.default = TreeGraph;

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var RequiredArgsModal = function (_Renderer) {
  _inherits(RequiredArgsModal, _Renderer);

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
      var self = this;

      var modalId = this.data.callback.id;

      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      // we want to overlay everything, hence 'body' must be used
      var overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      this.element = holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

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
          self.options.callbackHandler(self.data.callback);
          overlay.remove();
          self.element.remove();
          holder.remove();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        overlay.remove();
        self.element.remove();
        holder.remove();
        d3.event.preventDefault();
        return false;
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
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return RequiredArgsModal;
}(_renderer2.default);

exports.default = RequiredArgsModal;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graph = __webpack_require__(7);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var GenericGraph = function (_Graph) {
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
      this._initialize();

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

      nodeEnter.append('text').attr('class', 'francy-label').attr('x', function (d) {
        return -(d.title.length * 2.5);
      }).text(function (d) {
        return d.title;
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
        // Canvas Forces
        var centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide(function (d) {
          return d.size * 2;
        });

        //Generic gravity for the X position
        var forceX = d3.forceX(this.width / 2).strength(0.05);

        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(this.height / 2).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(this.width / 2).strength(0.3);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(0.7);
        }

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force('charge', manyForce).force('link', linkForce).force('center', centerForce).force('x', forceX).force('y', forceY).force('collide', collideForce).on('tick', ticked).on('end', function () {
          // zoom to fit when simulation is over
          self.parent.zoomToFit();
        });

        //force simulation restart
        simulation.alpha(0.5).restart();
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

      (0, _component.RegisterMathJax)(this.SVGParent);

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
}(_graph2.default);

exports.default = GenericGraph;

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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(21);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(22);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(23);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var BarChart = function (_Chart) {
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

      this._initialize();

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
}(_chart2.default);

exports.default = BarChart;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var LineChart = function (_Chart) {
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

      this._initialize();

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
}(_chart2.default);

exports.default = LineChart;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var ScatterChart = function (_Chart) {
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

      this._initialize();

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
}(_chart2.default);

exports.default = ScatterChart;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(8);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(25);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _saveSvgAsPng = __webpack_require__(26);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var AboutModal = function (_Renderer) {
  _inherits(AboutModal, _Renderer);

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
      var self = this;

      var modalId = 'AboutModalWindow';

      this.logger.debug('Creating About Modal [' + modalId + ']...');

      // we want to overlay everything, hence 'body' must be used
      var overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      this.element = holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = this.element.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      header.append('span').html('About Francy v' + (this.data.version || 'N/A'));

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      content.append('span').text('Loaded Object:');
      content.append('pre').attr('class', 'francy').html(AboutModal.syntaxHighlight(JSON.stringify(this.data.canvas, null, 2)));
      content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', function () {
        overlay.remove();
        self.element.remove();
        holder.remove();
        d3.event.preventDefault();
        return false;
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      (0, _component.RegisterJupyterKeyboardEvents)(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

      this.logger.debug('Callback About updated [' + modalId + ']...');

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}

    // credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510

  }], [{
    key: 'syntaxHighlight',
    value: function syntaxHighlight(json) {
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
  }]);

  return AboutModal;
}(_renderer2.default);

exports.default = AboutModal;

/***/ }),
/* 26 */
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
/* 27 */
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
      messageEnter.append('span').attr('class', 'strong').style('display', 'none').text('x');

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
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjYjA4MzcwYTk4ZDA1OGI1MTg5OCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsInBhcmVudCIsImF0dHIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYXJnaW4iLCJoZWlnaHQiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsInRleDJqYXgiLCJqYXgiLCJpbmxpbmVNYXRoIiwiZGlzcGxheU1hdGgiLCJwcm9jZXNzRXNjYXBlcyIsIlJlZ2lzdGVyIiwiU3RhcnR1cEhvb2siLCJzZWxlY3RBbGwiLCJlYWNoIiwic2VsZiIsIm1hdGhKYXgiLCJhcHBlbmQiLCJyZW1vdmUiLCJRdWV1ZSIsIkNvbmZpZ3VyZWQiLCJlIiwiaW5mbyIsImNsYXNzZXMiLCJtYXAiLCJjbCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwiQ2hhcnQiLCJheGlzIiwieVNjYWxlIiwieFNjYWxlIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJ0b29sdGlwIiwiY2FudmFzIiwiY2hhcnQiLCJrZXlzIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsIngiLCJ5IiwiYWxsVmFsdWVzIiwiZm9yRWFjaCIsImNvbmNhdCIsImtleSIsIm1heCIsImQiLCJ4QXhpc0dyb3VwIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzdHlsZSIsInRleHQiLCJ0aXRsZSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNob3dMZWdlbmQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNsaWNlIiwiZXhpdCIsImVudGVyIiwiaSIsIm1lcmdlIiwiY29sb3JzIiwiZGF0YXNldCIsImZyb20iLCJfIiwic2NhbGVTZXF1ZW50aWFsIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwic2V0dGluZ3MiLCJsb2FkIiwiQmFzZSIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJHcmFwaCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxsYmFja09iaiIsIl9leGVjdXRlIiwiY2FsYmFja09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiZ3JhcGgiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJNYXRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FudmFzSWQiLCJUcmVlR3JhcGgiLCJfaW5pdGlhbGl6ZSIsInJvb3QiLCJoaWVyYXJjaHkiLCJ0cmVlRGF0YSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsImxldmVsV2lkdGgiLCJjaGlsZENvdW50IiwibiIsIm5ld0hlaWdodCIsInRyZWVtYXAiLCJ0cmVlIiwic2l6ZSIsImNvbGxhcHNlZCIsImNvbGxhcHNlIiwidXBkYXRlIiwiX2NoaWxkcmVuIiwic291cmNlIiwibm9kZXMiLCJkZXNjZW5kYW50cyIsImxpbmtzIiwiZGVwdGgiLCJsaW5rR3JvdXAiLCJsaW5rIiwibGlua0VudGVyIiwibyIsImRpYWdvbmFsIiwicyIsIm5vZGVHcm91cCIsIm5vZGVFbnRlciIsInN5bWJvbCIsImdldFN5bWJvbCIsIm5vZGVVcGRhdGUiLCJsYXllciIsIl9hcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiUmVxdWlyZWRBcmdzTW9kYWwiLCJtb2RhbElkIiwib3ZlcmxheSIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImFyZyIsIm9uY2hhbmdlIiwiY2hlY2tlZCIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsIkdlbmVyaWNHcmFwaCIsInNpbXVsYXRpb25BY3RpdmUiLCJzaW11bGF0aW9uIiwiY2FudmFzTGlua3MiLCJsaW5rc1RvQWRkIiwiX2ZpbHRlck5ld0VsZW1lbnRzIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJjZW50ZXJGb3JjZSIsImZvcmNlQ2VudGVyIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZVgiLCJmb3JjZVkiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJfX2RhdGFfXyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwiZngiLCJmeSIsImNhbnZhc09iamVjdHMiLCJkM0VsZW1lbnQiLCJuZXdFbGVtZW50cyIsImZpbmQiLCJDaGFydEZhY3RvcnkiLCJCYXJDaGFydCIsInNjYWxlQmFuZCIsInBhZGRpbmciLCJkb21haW5SYW5nZSIsImJhcnNHcm91cCIsImJhciIsImJhckVudGVyIiwiYmFuZHdpZHRoIiwiX3JlbmRlckF4aXMiLCJfcmVuZGVyTGVnZW5kIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJsaW5lRW50ZXIiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIiwic2NhdHRlckVudGVyIiwiU3ZnVG9QbmciLCJNYWluTWVudSIsImFib3V0TW9kYWwiLCJtZW51SWQiLCJzYXZlU3ZnQXNQbmciLCJBYm91dE1vZGFsIiwidmVyc2lvbiIsInN5bnRheEhpZ2hsaWdodCIsImNscyIsInRlc3QiLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJ3YXJuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJzdHlsZXMiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJmb3JtYXQiLCJnZXRGb250TWltZVR5cGVGcm9tVXJsIiwicHJvY2Vzc0ZvbnRRdWV1ZSIsImZvbnRVcmwiLCJzdXBwb3J0ZWRGb3JtYXRzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4T2YiLCJxdWV1ZSIsImZvbnQiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcmVwYXJlU3ZnIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJpbm5lckhUTUwiLCJkZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm91dEh0bWwiLCJzdmdBc0RhdGFVcmkiLCJ1cmkiLCJzdmdBc1BuZ1VyaSIsImVuY29kZXJUeXBlIiwiZW5jb2Rlck9wdGlvbnMiLCJjb252ZXJ0VG9QbmciLCJ3IiwiaCIsImNvbnRleHQiLCJjYW52ZyIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicG5nIiwiU2VjdXJpdHlFcnJvciIsImF0b2IiLCJkb3dubG9hZCIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJ1cmlUb0Jsb2IiLCJzYXZlTGluayIsImRvd25sb2FkU3VwcG9ydGVkIiwiZGlzcGxheSIsImJvZHkiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25jbGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3Zn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QUFBQSxlQUFLTCxFQUFFTSxLQUFQO0FBQUEsT0FBekQ7QUFDQW9iLG1CQUFhMWQsTUFBYixDQUFvQixNQUFwQixFQUE0QnFDLElBQTVCLENBQWlDO0FBQUEsZUFBS0wsRUFBRUssSUFBUDtBQUFBLE9BQWpDO0FBQ0FxYixtQkFBYTFkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEI1QyxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRGdGLEtBQXBELENBQTBELFNBQTFELEVBQXFFLE1BQXJFLEVBQTZFQyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQXFiLG1CQUFhMWEsS0FBYixDQUFtQnNCLE9BQW5COztBQUVBQSxjQUFRekIsSUFBUixHQUFlNUMsTUFBZjs7QUFFQSxXQUFLNUQsT0FBTCxDQUFhK0YsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTNDTW9iLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYjA4MzcwYTk4ZDA1OGI1MTg5OCIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIH1cbiAgXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgd2lkdGggPSArdGhpcy5wYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICB9XG4gIFxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSArdGhpcy5wYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGpheDogWydpbnB1dC9UZVgnLCAnb3V0cHV0L1NWRyddLFxuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgJ1xcXFwpJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpc3BsYXlNYXRoOiBbXG4gICAgICAgICAgICBbJyQkJywgJyQkJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgJ1xcXFxdJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb2Nlc3NFc2NhcGVzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgZWxlbWVudC5ub2RlKCldKTtcblxuICAgICAgTWF0aEpheC5IdWIuQ29uZmlndXJlZCgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgTWF0aEpheCBpcyBub3QgbG9hZGVkLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5heGlzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueVNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b29sdGlwID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICAgIFxuICAgIHRoaXMuYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcztcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5kYXRhc2V0cyk7XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSkuZG9tYWluKHRoaXMuYXhpcy55LmRvbWFpbik7XG4gICAgXG4gICAgdGhpcy5hbGxWYWx1ZXMgPSBbXTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0aGlzLmFsbFZhbHVlcyA9IHRoaXMuYWxsVmFsdWVzLmNvbmNhdCh0aGlzLmRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghdGhpcy5heGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy55U2NhbGUuZG9tYWluKFswLCBkMy5tYXgodGhpcy5hbGxWYWx1ZXMsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbihbMCwgdGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuICB9XG4gIFxuICBfcmVuZGVyQXhpcygpIHtcbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3RoaXMuaGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4JywgdGhpcy53aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueVNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy55LnRpdGxlKTtcbiAgfVxuICBcbiAgX3JlbmRlckxlZ2VuZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIGxldCBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICBsZXQgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YSh0aGlzLmRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyAnQSc6IHsgJ3RpdGxlJzogJ0RhdGFzZXQnLCAndGV4dCc6IGRhdGFzZXQgfSwgJ0InOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCFcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBvcHRpb25zLmFwcGVuZFRvID0gdGhpcztcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAobGV0IHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyhvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IEpzb25VdGlscyBmcm9tICcuLi91dGlsL2pzb24tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyh7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn0gdGhlIGxvZ2dlciBmb3IgdGhpcyBjbGFzc1xuICAgICAqL1xuICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc2V0dGluZ3MoeyB2ZXJib3NlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyICYmICFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmFwcGVuZFRvICYmICFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucy52ZXJib3NlID0gdmVyYm9zZSB8fCB0aGlzLm9wdGlvbnMudmVyYm9zZTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBMb2dnZXIgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcoTG9nZ2VyLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oTG9nZ2VyLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsZXZlbCB0aGUgbG9nIGxldmVsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBzdGF0aWMgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICB9XG5cbiAgX2FwcGx5RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcblxuICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIGVsZW1lbnRcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LmxvYWQoZCwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBkID0+IHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5sb2FkKGQubWVzc2FnZXMsIHRydWUpLnJlbmRlcigpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIGNhbGxiYWNrLmxvYWQoeyBjYWxsYmFjazogY2IgfSwgdHJ1ZSkuZXhlY3V0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDcm9zcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFNxdWFyZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXInOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFN0YXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3eWUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFd5ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgc3RhdGljIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgbGV0IG9sZFJlc2l6ZSA9IHdpbmRvdy5vbnJlc2l6ZTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59XG5jYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIGNvbnN0IGZyYW1lSWQgPSBgRnJhbWUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBkaXYjJHtmcmFtZUlkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgRnJhbWUgWyR7ZnJhbWVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5hdHRyKCdpZCcsIGZyYW1lSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBmcmFtZSB3aXRoIGlkIFske2ZyYW1lSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRnJhbWUgdXBkYXRlZCBbJHtmcmFtZUlkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcGFyYW0gcGFydGlhbCAtIGlmIHRoZSBpbnB1dCBpcyBub3QgYSBjb21wbGV0ZSBGcmFuY3kgSlNPTiBPYmplY3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsID0gZmFsc2UpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0YXRpYyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtaW1lIHR5cGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGFja2FnZVxuICAgKi9cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoRmFjdG9yeSBmcm9tICcuL2dyYXBoLWZhY3RvcnknO1xuaW1wb3J0IENoYXJ0RmFjdG9yeSBmcm9tICcuL2NoYXJ0LWZhY3RvcnknO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoRmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRGYWN0b3J5ID0gbmV3IENoYXJ0RmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0RmFjdG9yeSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICBsZXQgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgbGV0IHdpZHRoID0gK2JvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSArYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKCd6b29tJywgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKCdkYmxjbGljay56b29tJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRyZWVHcmFwaCBmcm9tICcuL2dyYXBoLXRyZWUnO1xuaW1wb3J0IEdlbmVyaWNHcmFwaCBmcm9tICcuL2dyYXBoLWdlbmVyaWMnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICBjYXNlICd0cmVlJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG5cbiAgICBsZXQgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBjb21wdXRlIGhlaWdodCBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIGdyYXBoXG4gICAgbGV0IGxldmVsV2lkdGggPSBbMV07XG4gICAgbGV0IGNoaWxkQ291bnQgPSBmdW5jdGlvbiAobGV2ZWwsIG4pIHtcblxuICAgICAgaWYgKG4uY2hpbGRyZW4gJiYgbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChsZXZlbFdpZHRoLmxlbmd0aCA8PSBsZXZlbCArIDEpIGxldmVsV2lkdGgucHVzaCgwKTtcblxuICAgICAgICBsZXZlbFdpZHRoW2xldmVsICsgMV0gKz0gbi5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHRoaXMud2lkdGhdKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIGxldCB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIGxldCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxODApO1xuXG4gICAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC5kYXRhLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKVxuICAgICAgICAudGV4dChkID0+IGQuZGF0YS50aXRsZSk7XG5cbiAgICAgIGxldCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIFxuICAgICAgaWYgKG5vZGUubm9kZSgpKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBmbGF0IGRhdGEgaW50byB0cmVlIGRhdGEgYnkgYW5hbHlzaW5nIHRoZSBwYXJlbnRzIG9mIGVhY2ggbm9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZGF0YSB0cmFuc2Zvcm1lZCBpbiB0cmVlIGRhdGFcbiAgICovXG4gIGdldCB0cmVlRGF0YSgpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdO1xuICAgIGxldCBkYXRhTWFwID0gY2FudmFzTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICBsZXQgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyZWVEYXRhLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWVEYXRhWzBdO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCBwb3NbMF0gKyA1ICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIHBvc1sxXSArIDUgKyAncHgnKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgbGV0IG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIGxldCBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgbGV0IGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgbGV0IHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGxldCBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuZGF0YS5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpO1xuICAgIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICBcbiAgICBsZXQgc2ltdWxhdGlvbkFjdGl2ZSA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2ltdWxhdGlvbjtcblxuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgbGV0IGxpbmtzVG9BZGQgPSB0aGlzLl9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNMaW5rcywgbGlua3MpO1xuXG4gICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIGxldCBub2Rlc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTm9kZXMsIG5vZGVzKTtcblxuICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGlmIChub2RlLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBub2RlLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbGluay5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rJyk7XG5cbiAgICBsaW5rRW50ZXIuYXBwZW5kKCdsaW5lJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKTtcblxuICAgIGxpbmsuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsgbGluZS5mcmFuY3ktZWRnZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHNlbGYucGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJykuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktc3ltYm9sJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNob3dOZWlnaGJvdXJzKSB7XG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgLy8gQ2FudmFzIEZvcmNlc1xuICAgICAgbGV0IGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHRoaXMud2lkdGggLyAyKS55KHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUgKiAyKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICBsZXQgZm9yY2VYID0gZDMuZm9yY2VYKHRoaXMud2lkdGggLyAyKS5zdHJlbmd0aCgwLjA1KTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgICBsZXQgZm9yY2VZID0gZDMuZm9yY2VZKHRoaXMuaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdjZW50ZXInLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAgIC5mb3JjZSgnY29sbGlkZScsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgICAgc2ltdWxhdGlvbi5hbHBoYSgwLjUpLnJlc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICBsZXQgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICBsZXQgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG4gIFxuICBfZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzT2JqZWN0cywgZDNFbGVtZW50KSB7XG4gICAgbGV0IG5ld0VsZW1lbnRzID0gW107XG4gICAgY2FudmFzT2JqZWN0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgbGV0IGxpbmsgPSBkM0VsZW1lbnQuZmluZChkID0+IGQuaWQgPT09IG8uaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChsaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKG8pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdFbGVtZW50cztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRGYWN0b3J5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQudHlwZSkge1xuICAgIGNhc2UgJ2Jhcic6XG4gICAgICBlbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1mYWN0b3J5LmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICBcbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnlTY2FsZShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICBcbiAgICBsZXQgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW3NlbGYuZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG5cbiAgICBsZXQgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgc2NhdHRlckVudGVyID0gc2NhdHRlclxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3InLCA1KVxuICAgICAgICAuYXR0cignY3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKGkpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyRW50ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG5cbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIGNvbnN0IG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSwgJ2RpYWdyYW0ucG5nJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIGxldCBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgbGV0IGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbChBYm91dE1vZGFsLnN5bnRheEhpZ2hsaWdodChKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FudmFzLCBudWxsLCAyKSkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWNtYXJ0aW5zL2ZyYW5jeScpLnRleHQoJ0ZyYW5jeSBvbiBHaXRodWInKTtcblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbiAgc3RhdGljIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIGxldCBjbHMgPSAnbnVtYmVyJztcbiAgICAgIGlmICgvXlwiLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ2Jvb2xlYW4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdudWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcgJiYge30gfHwgdGhpcztcblxuICB2YXIgZG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiIFs8IUVOVElUWSBuYnNwIFwiJiMxNjA7XCI+XT4nO1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVEb21Ob2RlKGVsKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIEhUTUxFbGVtZW50IG9yIFNWR0VsZW1lbnQgaXMgcmVxdWlyZWQ7IGdvdCAnICsgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLDApID09IDAgJiYgdXJsLmxhc3RJbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ob3N0KSA9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCwgY2FsbGJhY2spIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICB2YXIgaW1hZ2VzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKSxcbiAgICAgICAgbGVmdCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgIGNoZWNrRG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGNoZWNrRG9uZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBpbWFnZS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGlmIChpc0V4dGVybmFsKGhyZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVuZGVyIGVtYmVkZGVkIGltYWdlcyBsaW5raW5nIHRvIGV4dGVybmFsIGhvc3RzOiBcIitocmVmLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI7XG4gICAgICAgIGhyZWYgPSBocmVmIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGltZy5zcmMgPSBocmVmO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGxvYWQgXCIraHJlZik7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KShpbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZWN0b3JSZW1hcCA9IG9wdGlvbnMuc2VsZWN0b3JSZW1hcDtcbiAgICB2YXIgbW9kaWZ5U3R5bGUgPSBvcHRpb25zLm1vZGlmeVN0eWxlO1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIC8vIGVhY2ggZm9udCB0aGF0IGhhcyBleHRyYW5sIGxpbmsgaXMgc2F2ZWQgaW50byBxdWV1ZSwgYW5kIHByb2Nlc3NlZFxuICAgIC8vIGFzeW5jaHJvbm91c2x5XG4gICAgdmFyIGZvbnRzUXVldWUgPSBbXTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVzaGVldCBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIitzaGVldHNbaV0uaHJlZik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbWF0Y2g7IGogPCBydWxlcy5sZW5ndGg7IGorKywgbWF0Y2ggPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tqXTtcbiAgICAgICAgICBpZiAodHlwZW9mKHJ1bGUuc3R5bGUpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZm9sbG93aW5nIENTUyBydWxlIGhhcyBhbiBpbnZhbGlkIHNlbGVjdG9yOiBcIicgKyBydWxlICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yVGV4dCkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpIHx8IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgQ1NTIHNlbGVjdG9yIFwiJyArIHNlbGVjdG9yVGV4dCArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChydWxlLnNlbGVjdG9yVGV4dCkgOiBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBtb2RpZnlTdHlsZSA/IG1vZGlmeVN0eWxlKHJ1bGUuc3R5bGUuY3NzVGV4dCkgOiBydWxlLnN0eWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHsgXCIgKyBjc3NUZXh0ICsgXCIgfVxcblwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHJ1bGUuY3NzVGV4dC5tYXRjaCgvXkBmb250LWZhY2UvKSkge1xuICAgICAgICAgICAgICAvLyBiZWxvdyB3ZSBhcmUgdHJ5aW5nIHRvIGZpbmQgbWF0Y2hlcyB0byBleHRlcm5hbCBsaW5rLiBFLmcuXG4gICAgICAgICAgICAgIC8vIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAvLyAgIC8vIC4uLlxuICAgICAgICAgICAgICAvLyAgIHNyYzogbG9jYWwoJ0FiZWwnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9hYmVsL3Y2L1V6Ti1pZWpSMVZvWFUyT2MtN0xzYnZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZjIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFRoaXMgcmVnZXggd2lsbCBzYXZlIGV4dHJuYWwgbGluayBpbnRvIGZpcnN0IGNhcHR1cmUgZ3JvdXBcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxSZWdleHAgPSAvdXJsXFwoW1wiJ10/KC4rPylbXCInXT9cXCkvO1xuICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gc3VwcG9ydCBtdWx0aXBsZSB1cmwgZGVjbGFyYXRpb25zIHBlciBmb250LlxuICAgICAgICAgICAgICB2YXIgZm9udFVybE1hdGNoID0gcnVsZS5jc3NUZXh0Lm1hdGNoKGZvbnRVcmxSZWdleHApO1xuXG4gICAgICAgICAgICAgIHZhciBleHRlcm5hbEZvbnRVcmwgPSAoZm9udFVybE1hdGNoICYmIGZvbnRVcmxNYXRjaFsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgIHZhciBmb250VXJsSXNEYXRhVVJJID0gZXh0ZXJuYWxGb250VXJsLm1hdGNoKC9eZGF0YTovKTtcbiAgICAgICAgICAgICAgaWYgKGZvbnRVcmxJc0RhdGFVUkkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgaWdub3JlIGRhdGEgdXJpIC0gdGhleSBhcmUgYWxyZWFkeSBlbWJlZGRlZFxuICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9ICcnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybCkge1xuICAgICAgICAgICAgICAgIC8vIG9rYXksIHdlIGFyZSBsdWNreS4gV2UgY2FuIGZldGNoIHRoaXMgZm9udCBsYXRlclxuXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgdXJsIGlmIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4uLycgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLicgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb250c1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gUGFzcyB1cmwgcmVnZXgsIHNvIHRoYXQgb25jZSBmb250IGlzIGRvd25sYWRlZCwgd2UgY2FuIHJ1biBgcmVwbGFjZSgpYCBvbiBpdFxuICAgICAgICAgICAgICAgICAgZm9udFVybFJlZ2V4cDogZm9udFVybFJlZ2V4cCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChleHRlcm5hbEZvbnRVcmwpLFxuICAgICAgICAgICAgICAgICAgdXJsOiBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgIGNzcyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyBhbGwgY3NzIGlzIHByb2Nlc3NlZCwgaXQncyB0aW1lIHRvIGhhbmRsZSBzY2hlZHVsZWQgZm9udHNcbiAgICBwcm9jZXNzRm9udFF1ZXVlKGZvbnRzUXVldWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChmb250VXJsKSB7XG4gICAgICB2YXIgc3VwcG9ydGVkRm9ybWF0cyA9IHtcbiAgICAgICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxuICAgICAgICAnd29mZic6ICdmb250L3dvZmYnLFxuICAgICAgICAnb3RmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC1vcGVudHlwZScsXG4gICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24veC1mb250LXR0ZicsXG4gICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAnc2ZudCc6ICdhcHBsaWNhdGlvbi9mb250LXNmbnQnLFxuICAgICAgICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICB9O1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBPYmplY3Qua2V5cyhzdXBwb3J0ZWRGb3JtYXRzKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXTtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgYnVsbGV0IHByb29mLCBpdCBuZWVkcyB0byBoYW5kbGUgZWRnZSBjYXNlcy4uLlxuICAgICAgICBpZiAoZm9udFVybC5pbmRleE9mKCcuJyArIGV4dGVuc2lvbikgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvcm1hdHNbZXh0ZW5zaW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3Ugc2VlIHRoaXMgZXJyb3IgbWVzc2FnZSwgeW91IHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIGNvZGUgYWJvdmUuXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGZvbnQgZm9ybWF0IGZvciAnICsgZm9udFVybCsgJzsgRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseScpO1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb250UXVldWUocXVldWUpIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxvYWQgZm9udHMgb25lIGJ5IG9uZSB1bnRpbCB3ZSBoYXZlIGFueXRoaW5nIGluIHRoZSBxdWV1ZTpcbiAgICAgICAgdmFyIGZvbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgcHJvY2Vzc05leHQoZm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBtb3JlIGZvbnRzIHRvIGxvYWQuXG4gICAgICAgIGNzc0xvYWRlZENhbGxiYWNrKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0KGZvbnQpIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZW5lZml0IGZyb20gY2FjaGluZy5cbiAgICAgICAgdmFyIG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm9udExvYWRlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEub3BlbignR0VUJywgZm9udC51cmwpO1xuICAgICAgICBvUmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIG9SZXEuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGJlIGFsc28gd29ydGggdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQgKVxuICAgICAgICAgIHZhciBmb250Qml0cyA9IG9SZXEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoZm9udEJpdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXJGYWlsZWQoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tOiAnICsgZm9udC51cmwpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKVxuICAgICAgICAgIGNzcyArPSBmb250LnRleHQgKyAnXFxuJztcbiAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KSB7XG4gICAgICAgICAgdmFyIGRhdGFVcmwgPSAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKSc7XG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dC5yZXBsYWNlKGZvbnQuZm9udFVybFJlZ2V4cCwgZGF0YVVybCkgKyAnXFxuJztcblxuICAgICAgICAgIC8vIHNjaGVkdWxlIG5leHQgZm9udCBkb3dubG9hZCBvbiBuZXh0IHRpY2suXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb2Nlc3NGb250UXVldWUocXVldWUpXG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgdmFyIGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gKGVsLnZpZXdCb3ggJiYgZWwudmlld0JveC5iYXNlVmFsICYmIGVsLnZpZXdCb3guYmFzZVZhbFtkaW1dKSB8fFxuICAgICAgKGNsb25lLmdldEF0dHJpYnV0ZShkaW0pICE9PSBudWxsICYmICFjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKS5tYXRjaCgvJSQvKSAmJiBwYXJzZUludChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSkpIHx8XG4gICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8XG4gICAgICBwYXJzZUludChjbG9uZS5zdHlsZVtkaW1dKSB8fFxuICAgICAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoZGltKSk7XG4gICAgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSkgPyAwIDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcrcDEpO1xuICAgICAgcmV0dXJuIGMgPT09ICclJyA/ICclMjUnIDogYztcbiAgICB9KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICB9XG5cbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgMTtcbiAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgZmFsc2U7XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xuXG4gICAgaW5saW5lSW1hZ2VzKGVsLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICAgIGlmKGVsLnRhZ05hbWUgPT0gJ3N2ZycpIHtcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpO1xuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnaGVpZ2h0Jyk7XG4gICAgICB9IGVsc2UgaWYoZWwuZ2V0QkJveCkge1xuICAgICAgICB2YXIgYm94ID0gZWwuZ2V0QkJveCgpO1xuICAgICAgICB3aWR0aCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBib3gueSArIGJveC5oZWlnaHQ7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKVxuICAgICAgICBjbG9uZSA9IHN2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaW5ZTWluIG1lZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBbXG4gICAgICAgIG9wdGlvbnMubGVmdCB8fCAwLFxuICAgICAgICBvcHRpb25zLnRvcCB8fCAwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICBdLmpvaW4oXCIgXCIpKTtcblxuICAgICAgdmFyIGZvcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvcmVpZ25PYmplY3QgPiAqJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWZvc1tpXS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgICBmb3NbaV0uc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBjdXN0b20gZm9udHMgd2UgbmVlZCB0byBmZXRjaCBmb250IGZpcnN0LCBhbmQgdGhlbiBpbmxpbmVcbiAgICAgIC8vIGl0cyB1cmwgaW50byBkYXRhLXVyaSBmb3JtYXQgKGVuY29kZSBhcyBiYXNlNjQpLiBUaGF0J3Mgd2h5IHN0eWxlXG4gICAgICAvLyBwcm9jZXNzaW5nIGlzIGRvbmUgYXN5bmNob25vdXNseS4gT25jZSBhbGwgaW5saW5pbmcgaXMgZmluc2hlZFxuICAgICAgLy8gY3NzTG9hZGVkQ2FsbGJhY2soKSBpcyBjYWxsZWQuXG4gICAgICBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gY3NzTG9hZGVkQ2FsbGJhY2soY3NzKSB7XG4gICAgICAgIC8vIGhlcmUgYWxsIGZvbnRzIGFyZSBpbmxpbmVkLCBzbyB0aGF0IHdlIGNhbiByZW5kZXIgdGhlbSBwcm9wZXJseS5cbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzLmlubmVySFRNTCA9IFwiPCFbQ0RBVEFbXFxuXCIgKyBjc3MgKyBcIlxcbl1dPlwiO1xuICAgICAgICB2YXIgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGRlZnMsIGNsb25lLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHZhciBvdXRIdG1sID0gb3V0ZXIuaW5uZXJIVE1MO1xuICAgICAgICAgIG91dEh0bWwgPSBvdXRIdG1sLnJlcGxhY2UoL05TXFxkKzpocmVmL2dpLCAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZicpO1xuICAgICAgICAgIGNiKG91dEh0bWwsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzRGF0YVVyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgZnVuY3Rpb24oc3ZnKSB7XG4gICAgICB2YXIgdXJpID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzdmcpKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYih1cmkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc1BuZ1VyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZW5jb2RlclR5cGUgPSBvcHRpb25zLmVuY29kZXJUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICAgIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgPSBvcHRpb25zLmVuY29kZXJPcHRpb25zIHx8IDAuODtcblxuICAgIHZhciBjb252ZXJ0VG9QbmcgPSBmdW5jdGlvbihzcmMsIHcsIGgpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgICAgb3B0aW9ucy5jYW52ZyhjYW52YXMsIHNyYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcil7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbmc7XG4gICAgICB0cnkge1xuICAgICAgICBwbmcgPSBjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMuZW5jb2RlclR5cGUsIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvcikgfHwgZS5uYW1lID09IFwiU2VjdXJpdHlFcnJvclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IocG5nKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGNvbnZlcnRUb1BuZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udmVydFRvUG5nKGltYWdlLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBkYXRhIFVSSSBhcyBhbiBpbWFnZSBvbiB0aGUgZm9sbG93aW5nIFNWR1xcbicsXG4gICAgICAgICAgICB3aW5kb3cuYXRvYih1cmkuc2xpY2UoMjYpKSwgJ1xcbicsXG4gICAgICAgICAgICBcIk9wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyJ3MgZGlhZ25vc2lzXFxuXCIsXG4gICAgICAgICAgICB1cmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3V0JC5kb3dubG9hZCA9IGZ1bmN0aW9uKG5hbWUsIHVyaSkge1xuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodXJpVG9CbG9iKHVyaSksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgZG93bmxvYWRTdXBwb3J0ZWQgPSAnZG93bmxvYWQnIGluIHNhdmVMaW5rO1xuICAgICAgaWYgKGRvd25sb2FkU3VwcG9ydGVkKSB7XG4gICAgICAgIHNhdmVMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICAgICAgc2F2ZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYXZlTGluayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGJsb2IgPSB1cmlUb0Jsb2IodXJpKTtcbiAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJsO1xuICAgICAgICAgIHNhdmVMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBvYmplY3QgVVJMcy4gRmFsbGluZyBiYWNrIHRvIHN0cmluZyBVUkwuJyk7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub3Blbih1cmksICdfdGVtcCcsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8sc3RhdHVzPW5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBtaW1lU3RyaW5nfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2Z0FzUG5nID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzUG5nVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIGRlZmluZSBpcyBkZWZpbmVkIGNyZWF0ZSBhcyBhbiBBTUQgbW9kdWxlXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvdXQkO1xuICAgIH0pO1xuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udHlwZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50aXRsZSxcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgYWxlcnRzSWQgPSBgTWVzc2FnZXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHthbGVydHNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZGl2IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIGxldCBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dCgneCcpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==