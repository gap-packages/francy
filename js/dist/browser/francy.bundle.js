/******/ (function(modules) { // webpackBootstrap
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
        this._applyEvents(node);

        var nodeOnClick = node.on('click');
        node.on('click', function (d) {
          // any callbacks will be handled here
          nodeOnClick.call(_this2, d.data);
          // default, highlight connected nodes
          click.call(_this2, d);
        });

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

      content.selectAll('.francy-arg').node().focus();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjA1NTg2OTY4ZmZhZTJkYTg1NWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZWxlbWVudCIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm9wdGlvbnMiLCJub2RlIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiZDMiLCJzZWxlY3QiLCJwYXJlbnROb2RlIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJwYXJlbnQiLCJhdHRyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWFyZ2luIiwiaGVpZ2h0IiwicmVxdWlyZXMiLCJwcm9wcyIsImRlY29yYXRvciIsIm5hbWUiLCJkZXNjcmlwdG9yIiwib2xkVmFsdWUiLCJ2YWx1ZSIsImhhc0RhdGEiLCJnZXRQcm9wZXJ0eSIsImRhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9iaiIsInByb3BlcnR5UGF0aCIsInRtcCIsInByb3BlcnRpZXMiLCJzcGxpdCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiLCJBcnJheSIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsIlJlZ2lzdGVyTWF0aEpheCIsIlJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIiwic2V0VGltZW91dCIsIk1hdGhKYXgiLCJIdWIiLCJDb25maWciLCJ0ZXgyamF4IiwiamF4IiwiaW5saW5lTWF0aCIsImRpc3BsYXlNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJSZWdpc3RlciIsIlN0YXJ0dXBIb29rIiwic2VsZWN0QWxsIiwiZWFjaCIsInNlbGYiLCJtYXRoSmF4IiwiYXBwZW5kIiwicmVtb3ZlIiwiUXVldWUiLCJDb25maWd1cmVkIiwiZSIsImluZm8iLCJjbGFzc2VzIiwibWFwIiwiY2wiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJrZXkiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsImpzb24iLCJwYXJ0aWFsIiwicGFyc2UiLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiR3JhcGgiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwib24iLCJleGVjdXRlQ2FsbGJhY2siLCJtZXNzYWdlcyIsImV2ZW50IiwiY2FsbGJhY2tzIiwiY2IiLCJ0cmlnZ2VyIiwiZXhlY3V0ZSIsInR5cGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzeW1ib2xDaXJjbGUiLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiVG9vbHRpcCIsIkhUTUxQYXJlbnQiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInRhYmxlIiwicm93IiwiQUxMX0NBTlZBUyIsIkZyYW5jeSIsImZyYW1lIiwiaWQiLCJleHBvcnRzIiwid2luZG93Iiwib2xkUmVzaXplIiwib25yZXNpemUiLCJ6b29tVG9GaXQiLCJGcmFtZSIsIm1lbnUiLCJhZGQiLCJmcmFtZUlkIiwicmVuZGVyQ2hpbGRyZW4iLCJKc29uVXRpbHMiLCJpbnB1dCIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJtaW1lIiwiTUlNRSIsIkNhbnZhcyIsImdyYXBoIiwiY2hhcnRGYWN0b3J5Iiwiem9vbSIsInVwZGF0ZVpvb20iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsIm1pZFgiLCJtaWRZIiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwiX2luaXRpYWxpemUiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwibGF5ZXIiLCJfYXBwbHlFdmVudHMiLCJub2RlT25DbGljayIsImNsaWNrIiwiY2FudmFzTm9kZXMiLCJkYXRhTWFwIiwicmVkdWNlIiwiQ29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsIm92ZXJsYXkiLCJob2xkZXIiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiZm9jdXMiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsIl9maWx0ZXJOZXdFbGVtZW50cyIsIm5vZGVzVG9BZGQiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZW1wdHkiLCJzaG93TmVpZ2hib3VycyIsImNvbm5lY3RlZE5vZGVzIiwiY2VudGVyRm9yY2UiLCJmb3JjZUNlbnRlciIsIm1hbnlGb3JjZSIsImZvcmNlTWFueUJvZHkiLCJzdHJlbmd0aCIsImxpbmtGb3JjZSIsImZvcmNlTGluayIsImRpc3RhbmNlIiwiY29sbGlkZUZvcmNlIiwiZm9yY2VDb2xsaWRlIiwiZm9yY2VYIiwiZm9yY2VZIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0Iiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJmb250IiwicG9wIiwicHJvY2Vzc05leHQiLCJvUmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9udExvYWRlZCIsInRyYW5zZmVyRmFpbGVkIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJmb250Qml0cyIsInJlc3BvbnNlIiwiZm9udEluQmFzZTY0IiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInVwZGF0ZUZvbnRTdHlsZSIsImRhdGFVcmwiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtB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LEVBQXFFLE1BQXJFLEVBQTZFQyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQW9iLG1CQUFhemEsS0FBYixDQUFtQnNCLE9BQW5COztBQUVBQSxjQUFRekIsSUFBUixHQUFlNUMsTUFBZjs7QUFFQSxXQUFLNUQsT0FBTCxDQUFhK0YsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTNDTW1iLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMDU1ODY5NjhmZmFlMmRhODU1ZiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIH1cbiAgXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgd2lkdGggPSArdGhpcy5wYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICB9XG4gIFxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSArdGhpcy5wYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGpheDogWydpbnB1dC9UZVgnLCAnb3V0cHV0L1NWRyddLFxuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgJ1xcXFwpJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpc3BsYXlNYXRoOiBbXG4gICAgICAgICAgICBbJyQkJywgJyQkJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgJ1xcXFxdJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb2Nlc3NFc2NhcGVzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgZWxlbWVudC5ub2RlKCldKTtcblxuICAgICAgTWF0aEpheC5IdWIuQ29uZmlndXJlZCgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgTWF0aEpheCBpcyBub3QgbG9hZGVkLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5heGlzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueVNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b29sdGlwID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICAgIFxuICAgIHRoaXMuYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcztcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5kYXRhc2V0cyk7XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSkuZG9tYWluKHRoaXMuYXhpcy55LmRvbWFpbik7XG4gICAgXG4gICAgdGhpcy5hbGxWYWx1ZXMgPSBbXTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0aGlzLmFsbFZhbHVlcyA9IHRoaXMuYWxsVmFsdWVzLmNvbmNhdCh0aGlzLmRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghdGhpcy5heGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy55U2NhbGUuZG9tYWluKFswLCBkMy5tYXgodGhpcy5hbGxWYWx1ZXMsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbihbMCwgdGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuICB9XG4gIFxuICBfcmVuZGVyQXhpcygpIHtcbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3RoaXMuaGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4JywgdGhpcy53aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueVNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy55LnRpdGxlKTtcbiAgfVxuICBcbiAgX3JlbmRlckxlZ2VuZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIGxldCBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICBsZXQgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YSh0aGlzLmRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyAnQSc6IHsgJ3RpdGxlJzogJ0RhdGFzZXQnLCAndGV4dCc6IGRhdGFzZXQgfSwgJ0InOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCFcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBvcHRpb25zLmFwcGVuZFRvID0gdGhpcztcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAobGV0IHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyhvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IEpzb25VdGlscyBmcm9tICcuLi91dGlsL2pzb24tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyh7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn0gdGhlIGxvZ2dlciBmb3IgdGhpcyBjbGFzc1xuICAgICAqL1xuICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc2V0dGluZ3MoeyB2ZXJib3NlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyICYmICFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmFwcGVuZFRvICYmICFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucy52ZXJib3NlID0gdmVyYm9zZSB8fCB0aGlzLm9wdGlvbnMudmVyYm9zZTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBMb2dnZXIgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcoTG9nZ2VyLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oTG9nZ2VyLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsZXZlbCB0aGUgbG9nIGxldmVsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBzdGF0aWMgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICB9XG5cbiAgX2FwcGx5RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcblxuICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIGVsZW1lbnRcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LmxvYWQoZCwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBkID0+IHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5sb2FkKGQubWVzc2FnZXMsIHRydWUpLnJlbmRlcigpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIGNhbGxiYWNrLmxvYWQoeyBjYWxsYmFjazogY2IgfSwgdHJ1ZSkuZXhlY3V0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDcm9zcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFNxdWFyZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXInOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFN0YXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3eWUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFd5ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIGxldCBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnUtbWFpbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICBjb25zdCBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHBhcnRpYWwgLSBpZiB0aGUgaW5wdXQgaXMgbm90IGEgY29tcGxldGUgRnJhbmN5IEpTT04gT2JqZWN0LCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdGF0aWMgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWltZSB0eXBlIHN1cHBvcnRlZCBieSB0aGlzIHBhY2thZ2VcbiAgICovXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaEZhY3RvcnkgZnJvbSAnLi9ncmFwaC1mYWN0b3J5JztcbmltcG9ydCBDaGFydEZhY3RvcnkgZnJvbSAnLi9jaGFydC1mYWN0b3J5JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0RmFjdG9yeSA9IG5ldyBDaGFydEZhY3RvcnkodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLmdyYXBoKS5hZGQodGhpcy5jaGFydEZhY3RvcnkpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IHpvb20gPSBkMy56b29tKCk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21Ub0ZpdCgpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIGxldCBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgbGV0IGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIGxldCB3aWR0aCA9ICtib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gK2JvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzSWQgPSBgQ2FudmFzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbignem9vbScsIHpvb21lZCk7XG4gICAgICAvLyByZW1vdmUgem9vbSBvbiBkb3VibGUgY2xpY2shXG4gICAgICB0aGlzLmVsZW1lbnQuY2FsbCh6b29tKS5vbignZGJsY2xpY2suem9vbScsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbignY2xpY2snLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHRoaXMuZWxlbWVudC56b29tVG9GaXQgPSB0aGlzLnpvb21Ub0ZpdCA9IHpvb21Ub0ZpdDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvb21Ub0ZpdCgpO1xuICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5ncmFwaCcpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlKSB7XG4gICAgY2FzZSAndHJlZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB0aGlzLndpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQuZGF0YS50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpO1xuXG4gICAgICBsZXQgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sJHtzb3VyY2UueH0pYClcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1zeW1ib2wnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogR3JhcGguY29sb3JzKGQuZGF0YS5sYXllciAqIDUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG4gICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgZmxhdCBkYXRhIGludG8gdHJlZSBkYXRhIGJ5IGFuYWx5c2luZyB0aGUgcGFyZW50cyBvZiBlYWNoIG5vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGRhdGEgdHJhbnNmb3JtZWQgaW4gdHJlZSBkYXRhXG4gICAqL1xuICBnZXQgdHJlZURhdGEoKSB7XG4gICAgbGV0IGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXTtcbiAgICBsZXQgZGF0YU1hcCA9IGNhbnZhc05vZGVzLnJlZHVjZShmdW5jdGlvbiAobWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgbGV0IHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICBsZXQgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVudXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIGxldCBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICBsZXQgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIGxldCBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgbGV0IGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yIChsZXQgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGxldCByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBsZXQgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpLmZvY3VzKCk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBzZWxmLnBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIGxldCBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh0aGlzLndpZHRoIC8gMikueSh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgbGV0IGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICBsZXQgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplICogMik7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoIC8gMikuc3RyZW5ndGgoMC4wNSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWSh0aGlzLmhlaWdodCAvIDIpLnN0cmVuZ3RoKDAuMjUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgICBmb3JjZVggPSBkMy5mb3JjZVgodGhpcy53aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMyk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDc1KS5zdHJlbmd0aCgwLjcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpLm5vZGVzKG5vZGVzVG9BZGQpXG4gICAgICAgIC5mb3JjZSgnY2hhcmdlJywgbWFueUZvcmNlKVxuICAgICAgICAuZm9yY2UoJ2xpbmsnLCBsaW5rRm9yY2UpXG4gICAgICAgIC5mb3JjZSgnY2VudGVyJywgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgbGV0IHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgbGV0IGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuICBcbiAgX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc09iamVjdHMsIGQzRWxlbWVudCkge1xuICAgIGxldCBuZXdFbGVtZW50cyA9IFtdO1xuICAgIGNhbnZhc09iamVjdHMuZm9yRWFjaChvID0+IHtcbiAgICAgIGxldCBsaW5rID0gZDNFbGVtZW50LmZpbmQoZCA9PiBkLmlkID09PSBvLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudHM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RmFjdG9yeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuY2hhcnQnKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICBjYXNlICdiYXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgU2NhdHRlckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy5heGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIGxldCBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55U2NhbGUoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpOyB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgXG4gICAgbGV0IGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtzZWxmLmRhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuXG4gICAgbGV0IHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdyJywgNSlcbiAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuXG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0JztcbmltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICBjb25zdCBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyh0aGlzLlNWR1BhcmVudC5ub2RlKCksICdkaWFncmFtLnBuZycpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICBsZXQgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIGxldCBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwoQWJvdXRNb2RhbC5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG4gIHN0YXRpYyBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnbnVsbCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KSB8fCBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcblxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIHVybCBpZiByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uLi8nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0IFVSTHMuIEZhbGxpbmcgYmFjayB0byBzdHJpbmcgVVJMLicpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1lc3NhZ2UtaG9sZGVyJykuYXR0cignaWQnLCBhbGVydHNJZCk7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LWFsZXJ0JykuZGF0YShtZXNzYWdlcywgZCA9PiBkLmlkKTtcbiAgICBsZXQgbWVzc2FnZUVudGVyID0gbWVzc2FnZS5lbnRlcigpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBmcmFuY3ktYWxlcnQgYWxlcnQtJHtkLnR5cGV9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykudGV4dChkID0+IGQudGl0bGUpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS50ZXh0KGQgPT4gZC50ZXh0KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoJ3gnKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=