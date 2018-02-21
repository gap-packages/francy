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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

var _base = __webpack_require__(6);

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
exports.RegisterMathJax = RegisterMathJax;
exports.RegisterJupyterKeyboardEvents = RegisterJupyterKeyboardEvents;
exports.syntaxHighlight = syntaxHighlight;

var _logger = __webpack_require__(7);

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

var _tooltip = __webpack_require__(11);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(7);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(14);

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
/* 7 */
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

var _menuContext = __webpack_require__(18);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(11);

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

var _base = __webpack_require__(6);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(19);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _frame = __webpack_require__(13);

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
/* 13 */
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

var _canvas = __webpack_require__(15);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(25);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(29);

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
/* 14 */
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
/* 15 */
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

var _graphFactory = __webpack_require__(16);

var _graphFactory2 = _interopRequireDefault(_graphFactory);

var _chartFactory = __webpack_require__(21);

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
/* 16 */
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

var _graphTree = __webpack_require__(17);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(20);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _graph = __webpack_require__(8);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(3);

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
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = TreeGraph;

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
/* 19 */
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

var _component = __webpack_require__(3);

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

var RequiredArgsModal = (_dec = (0, _initializeDecorator.initialize)(), (_class = function (_Renderer) {
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
          self.options.callbackHandler(self.data.callback);
          self.unrender();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', this.unrender);

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
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = RequiredArgsModal;

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

var _graph = __webpack_require__(8);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(3);

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
        //iterate through the data and recalculate its size
        node.each(function (d) {
          var bound = this.getBBox();
          return d.size = bound.width;
        });
        // Canvas Forces
        var centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide(function (d) {
          return d.size;
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
}(_graph2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = GenericGraph;

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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(22);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(23);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(24);

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
/* 22 */
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
/* 23 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(26);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _saveSvgAsPng = __webpack_require__(28);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _modal = __webpack_require__(27);

var _modal2 = _interopRequireDefault(_modal);

var _component = __webpack_require__(3);

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

      footer.append('button').text('Ok').on('click', this.unrender);

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
/* 27 */
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
      d3.event.preventDefault();
      return false;
    }
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

/***/ }),
/* 28 */
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
/* 29 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmM2EyYzU3NzBmNTYyMzgwMTk5MSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwicGFyZW50IiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsInJlcXVpcmVzIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbml0aWFsaXplIiwia2V5IiwiX2luaXRpYWxpemUiLCJSZWdpc3Rlck1hdGhKYXgiLCJSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyIsInN5bnRheEhpZ2hsaWdodCIsInNldFRpbWVvdXQiLCJNYXRoSmF4IiwiSHViIiwiQ29uZmlnIiwidGV4MmpheCIsImpheCIsImlubGluZU1hdGgiLCJkaXNwbGF5TWF0aCIsInByb2Nlc3NFc2NhcGVzIiwiUmVnaXN0ZXIiLCJTdGFydHVwSG9vayIsInNlbGVjdEFsbCIsImVhY2giLCJzZWxmIiwibWF0aEpheCIsImFwcGVuZCIsInJlbW92ZSIsIlF1ZXVlIiwiQ29uZmlndXJlZCIsImUiLCJpbmZvIiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJqc29uIiwicmVwbGFjZSIsIm1hdGNoIiwiY2xzIiwidGVzdCIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJHcmFwaCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxsYmFja09iaiIsIl9leGVjdXRlIiwiY2FsYmFja09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwianNvblJlZ2V4IiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiZ3JhcGgiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJNYXRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FudmFzSWQiLCJUcmVlR3JhcGgiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwibGF5ZXIiLCJfYXBwbHlFdmVudHMiLCJub2RlT25DbGljayIsImNsaWNrIiwiY2FudmFzTm9kZXMiLCJkYXRhTWFwIiwicmVkdWNlIiwiQ29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsImhvbGRlciIsImZvcm0iLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImFyZyIsIm9uY2hhbmdlIiwiY2hlY2tlZCIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsIkdlbmVyaWNHcmFwaCIsInNpbXVsYXRpb25BY3RpdmUiLCJzaW11bGF0aW9uIiwiY2FudmFzTGlua3MiLCJsaW5rc1RvQWRkIiwiX2ZpbHRlck5ld0VsZW1lbnRzIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJib3VuZCIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0IiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiY2FudmFzT2JqZWN0cyIsImQzRWxlbWVudCIsIm5ld0VsZW1lbnRzIiwiZmluZCIsIkNoYXJ0RmFjdG9yeSIsIkJhckNoYXJ0Iiwic2NhbGVCYW5kIiwicGFkZGluZyIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJfcmVuZGVyQXhpcyIsIl9yZW5kZXJMZWdlbmQiLCJMaW5lQ2hhcnQiLCJsaW5lc0dyb3VwIiwidmFsdWVMaW5lIiwibGluZSIsImxpbmVFbnRlciIsIlNjYXR0ZXJDaGFydCIsInNjYXR0ZXJHcm91cCIsInNjYXR0ZXIiLCJzY2F0dGVyRW50ZXIiLCJTdmdUb1BuZyIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsInNhdmVTdmdBc1BuZyIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwiTW9kYWwiLCJvdmVybGF5Iiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJmb250IiwicG9wIiwicHJvY2Vzc05leHQiLCJvUmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9udExvYWRlZCIsInRyYW5zZmVyRmFpbGVkIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJmb250Qml0cyIsInJlc3BvbnNlIiwiZm9udEluQmFzZTY0IiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInVwZGF0ZUZvbnRTdHlsZSIsImRhdGFVcmwiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFB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ZCxNQUFiLENBQW9CLE1BQXBCLEVBQTRCaEQsSUFBNUIsQ0FBaUMsT0FBakMsRUFBMEMsUUFBMUMsRUFBb0R3RixLQUFwRCxDQUEwRCxTQUExRCxFQUFxRSxNQUFyRSxFQUE2RUMsSUFBN0UsQ0FBa0YsR0FBbEY7O0FBRUFnYixtQkFBYXJhLEtBQWIsQ0FBbUJxQixPQUFuQjs7QUFFQUEsY0FBUXhCLElBQVIsR0FBZWhELE1BQWY7O0FBRUEsV0FBS2hFLE9BQUwsQ0FBYXVHLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkEzQ00rYSxPIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjNhMmM1NzcwZjU2MjM4MDE5OTEiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNzUwOyAvL21zXG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge31cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgPyBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnBhcmVudE5vZGUpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGl2JyA/IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50LnNlbGVjdCgnc3ZnJykgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cbiAgXG4gIGdldCBtYXJnaW4oKSB7XG4gICAgcmV0dXJuIHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9O1xuICB9XG4gIFxuICBnZXQgd2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoID0gK3RoaXMucGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHJldHVybiB3aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgfVxuICBcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gK3RoaXMucGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgcmV0dXJuIGhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBwcm9wZXJ0eVBhdGgpIHtcblxuICB2YXIgdG1wID0gb2JqO1xuXG4gIGlmICh0bXAgJiYgcHJvcGVydHlQYXRoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICghdG1wLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB0bXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRtcCA9IHRtcFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcDtcbn1cblxuZnVuY3Rpb24gaGFzRGF0YShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAoKG9iaiBpbnN0YW5jZW9mIEFycmF5ICYmIG9iai5sZW5ndGgpIHx8IChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgT2JqZWN0LnZhbHVlcyhvYmopLmxlbmd0aCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGF0YS1kZWNvcmF0b3IuanMiLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbi8qIGdsb2JhbCBKdXB5dGVyLCBNYXRoSmF4LCBkMyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJNYXRoSmF4KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWcoe1xuICAgICAgICB0ZXgyamF4OiB7XG4gICAgICAgICAgamF4OiBbJ2lucHV0L1RlWCcsICdvdXRwdXQvU1ZHJ10sXG4gICAgICAgICAgaW5saW5lTWF0aDogW1xuICAgICAgICAgICAgWyckJywgJyQnXSxcbiAgICAgICAgICAgIFsnXFxcXCgnLCAnXFxcXCknXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGlzcGxheU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCQnLCAnJCQnXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCAnXFxcXF0nXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2Vzc0VzY2FwZXM6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlJlZ2lzdGVyLlN0YXJ0dXBIb29rKCdFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGFiZWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgICAgICAgIG1hdGhKYXggPSBzZWxmLnNlbGVjdCgndGV4dD5zcGFuPnN2ZycpO1xuICAgICAgICAgICAgaWYgKG1hdGhKYXgubm9kZSgpKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneCcsIHNlbGYuYXR0cigneCcpKTtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3knLCAtMTUpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChzZWxmLm5vZGUoKS5wYXJlbnROb2RlKS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWF0aEpheC5ub2RlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50Lm5vZGUoKV0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWd1cmVkKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyBNYXRoSmF4IGlzIG5vdCBsb2FkZWQuLi4nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoY2xhc3Nlcykge1xuICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBpbiBKdXB5dGVyIGZvciBjbGFzc2VzXG4gIGlmICghY2xhc3NlcykgcmV0dXJuO1xuICB0cnkge1xuICAgIGNsYXNzZXMubWFwKChjbCkgPT4ge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cyhjbCk7XG4gICAgfSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIGNyZWRpdHMgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxMDg0MS9ob3ctY2FuLWktcHJldHR5LXByaW50LWpzb24tdXNpbmctamF2YXNjcmlwdCNhbnN3ZXItNzIyMDUxMFxuZXhwb3J0IGZ1bmN0aW9uIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGxldCBjbHMgPSAnbnVtYmVyJztcbiAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICB9XG4gICAgZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnbnVsbCc7XG4gICAgfVxuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5heGlzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueVNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMueFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b29sdGlwID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLnRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICAgIFxuICAgIHRoaXMuYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcztcbiAgICB0aGlzLmRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5kYXRhc2V0cyk7XG5cbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB0aGlzLnlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSkuZG9tYWluKHRoaXMuYXhpcy55LmRvbWFpbik7XG4gICAgXG4gICAgdGhpcy5hbGxWYWx1ZXMgPSBbXTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0aGlzLmFsbFZhbHVlcyA9IHRoaXMuYWxsVmFsdWVzLmNvbmNhdCh0aGlzLmRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghdGhpcy5heGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy55U2NhbGUuZG9tYWluKFswLCBkMy5tYXgodGhpcy5hbGxWYWx1ZXMsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbihbMCwgdGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuICB9XG4gIFxuICBfcmVuZGVyQXhpcygpIHtcbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke3RoaXMuaGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4JywgdGhpcy53aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHRoaXMueVNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgdGhpcy5oZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy55LnRpdGxlKTtcbiAgfVxuICBcbiAgX3JlbmRlckxlZ2VuZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIGxldCBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICBsZXQgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YSh0aGlzLmRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyAnQSc6IHsgJ3RpdGxlJzogJ0RhdGFzZXQnLCAndGV4dCc6IGRhdGFzZXQgfSwgJ0InOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCFcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBvcHRpb25zLmFwcGVuZFRvID0gdGhpcztcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAobGV0IHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyhvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IEpzb25VdGlscyBmcm9tICcuLi91dGlsL2pzb24tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyh7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn0gdGhlIGxvZ2dlciBmb3IgdGhpcyBjbGFzc1xuICAgICAqL1xuICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc2V0dGluZ3MoeyB2ZXJib3NlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyICYmICFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5vcHRpb25zLmFwcGVuZFRvICYmICFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucy52ZXJib3NlID0gdmVyYm9zZSB8fCB0aGlzLm9wdGlvbnMudmVyYm9zZTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyB8fCB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBMb2dnZXIgY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcoTG9nZ2VyLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8oTG9nZ2VyLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBsZXZlbCB0aGUgbG9nIGxldmVsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBzdGF0aWMgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuICB9XG5cbiAgX2FwcGx5RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcblxuICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICBsZXQgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIGVsZW1lbnRcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LmxvYWQoZCwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlZW50ZXInLCBkID0+IHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5sb2FkKGQubWVzc2FnZXMsIHRydWUpLnJlbmRlcigpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKGRhdGEsIGV2ZW50KSB7XG4gICAgICBpZiAoZGF0YS5jYWxsYmFja3MpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhkYXRhLmNhbGxiYWNrcykuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgICAgICAvLyBleGVjdXRlIHRoZSBvbmVzIHRoYXQgbWF0Y2ggdGhlIGV2ZW50IVxuICAgICAgICAgIGNiLnRyaWdnZXIgPT09IGV2ZW50ICYmIGNhbGxiYWNrLmxvYWQoeyBjYWxsYmFjazogY2IgfSwgdHJ1ZSkuZXhlY3V0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Nyb3NzJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDcm9zcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RpYW1vbmQnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcXVhcmUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFNxdWFyZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N0YXInOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFN0YXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3eWUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFd5ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgc3RhdGljIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgbGV0IG9sZFJlc2l6ZSA9IHdpbmRvdy5vbnJlc2l6ZTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59XG5jYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIGNvbnN0IGZyYW1lSWQgPSBgRnJhbWUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBkaXYjJHtmcmFtZUlkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgRnJhbWUgWyR7ZnJhbWVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5hdHRyKCdpZCcsIGZyYW1lSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBmcmFtZSB3aXRoIGlkIFske2ZyYW1lSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRnJhbWUgdXBkYXRlZCBbJHtmcmFtZUlkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcGFyYW0gcGFydGlhbCAtIGlmIHRoZSBpbnB1dCBpcyBub3QgYSBjb21wbGV0ZSBGcmFuY3kgSlNPTiBPYmplY3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsID0gZmFsc2UpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0YXRpYyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtaW1lIHR5cGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGFja2FnZVxuICAgKi9cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoRmFjdG9yeSBmcm9tICcuL2dyYXBoLWZhY3RvcnknO1xuaW1wb3J0IENoYXJ0RmFjdG9yeSBmcm9tICcuL2NoYXJ0LWZhY3RvcnknO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoRmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRGYWN0b3J5ID0gbmV3IENoYXJ0RmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0RmFjdG9yeSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICBsZXQgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgbGV0IHdpZHRoID0gK2JvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSArYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKCd6b29tJywgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKCdkYmxjbGljay56b29tJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRyZWVHcmFwaCBmcm9tICcuL2dyYXBoLXRyZWUnO1xuaW1wb3J0IEdlbmVyaWNHcmFwaCBmcm9tICcuL2dyYXBoLWdlbmVyaWMnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICBjYXNlICd0cmVlJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB0aGlzLndpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQuZGF0YS50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpO1xuXG4gICAgICBsZXQgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sJHtzb3VyY2UueH0pYClcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1zeW1ib2wnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogR3JhcGguY29sb3JzKGQuZGF0YS5sYXllciAqIDUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG4gICAgICBcbiAgICAgIGlmIChub2RlLm5vZGUoKSkge1xuICAgICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgZmxhdCBkYXRhIGludG8gdHJlZSBkYXRhIGJ5IGFuYWx5c2luZyB0aGUgcGFyZW50cyBvZiBlYWNoIG5vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGRhdGEgdHJhbnNmb3JtZWQgaW4gdHJlZSBkYXRhXG4gICAqL1xuICBnZXQgdHJlZURhdGEoKSB7XG4gICAgbGV0IGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXTtcbiAgICBsZXQgZGF0YU1hcCA9IGNhbnZhc05vZGVzLnJlZHVjZShmdW5jdGlvbiAobWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgbGV0IHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICBsZXQgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVudXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIGxldCBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgbGV0IG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAobGV0IGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICBsZXQgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgbGV0IGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgc2VsZi51bnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsIHRoaXMudW5yZW5kZXIpO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpO1xuICAgIGlmIChpbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICBsZXQgc2ltdWxhdGlvbkFjdGl2ZSA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2ltdWxhdGlvbjtcblxuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIGxldCBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgbGV0IGxpbmtzVG9BZGQgPSB0aGlzLl9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNMaW5rcywgbGlua3MpO1xuXG4gICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIGxldCBub2Rlc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTm9kZXMsIG5vZGVzKTtcblxuICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGlmIChub2RlLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBub2RlLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbGluay5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rJyk7XG5cbiAgICBsaW5rRW50ZXIuYXBwZW5kKCdsaW5lJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKTtcblxuICAgIGxpbmsuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsgbGluZS5mcmFuY3ktZWRnZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHNlbGYucGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJykuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktc3ltYm9sJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNob3dOZWlnaGJvdXJzKSB7XG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgLy9pdGVyYXRlIHRocm91Z2ggdGhlIGRhdGEgYW5kIHJlY2FsY3VsYXRlIGl0cyBzaXplXG4gICAgICBub2RlLmVhY2goZnVuY3Rpb24oZCl7XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICByZXR1cm4gZC5zaXplID0gYm91bmQud2lkdGg7XG4gICAgICB9KTtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIGxldCBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh0aGlzLndpZHRoIC8gMikueSh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgbGV0IGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICBsZXQgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICBsZXQgZm9yY2VYID0gZDMuZm9yY2VYKHRoaXMud2lkdGggLyAyKS5zdHJlbmd0aCgwLjA1KTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgICBsZXQgZm9yY2VZID0gZDMuZm9yY2VZKHRoaXMuaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdjZW50ZXInLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAgIC5mb3JjZSgnY29sbGlkZScsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgICAgc2ltdWxhdGlvbi5hbHBoYSgwLjUpLnJlc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICBsZXQgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICBsZXQgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG4gIFxuICBfZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzT2JqZWN0cywgZDNFbGVtZW50KSB7XG4gICAgbGV0IG5ld0VsZW1lbnRzID0gW107XG4gICAgY2FudmFzT2JqZWN0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgbGV0IGxpbmsgPSBkM0VsZW1lbnQuZmluZChkID0+IGQuaWQgPT09IG8uaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChsaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKG8pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdFbGVtZW50cztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRGYWN0b3J5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQudHlwZSkge1xuICAgIGNhc2UgJ2Jhcic6XG4gICAgICBlbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1mYWN0b3J5LmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB9XG5cbiAgICBsZXQgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWJhcnMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1iYXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGJhckVudGVyID0gYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueVNjYWxlKGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTsgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW3NlbGYuZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdyJywgNSlcbiAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuXG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0JztcbmltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICBjb25zdCBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyh0aGlzLlNWR1BhcmVudC5ub2RlKCksICdkaWFncmFtLnBuZycpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzLCBzeW50YXhIaWdobGlnaHQgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbChzeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgdGhpcy51bnJlbmRlcik7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG9sZGVyID0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHRoaXMub3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB0aGlzLmhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gIH1cbiAgXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMub3ZlcmxheS5yZW1vdmUoKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5ob2xkZXIucmVtb3ZlKCk7XG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcgJiYge30gfHwgdGhpcztcblxuICB2YXIgZG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiIFs8IUVOVElUWSBuYnNwIFwiJiMxNjA7XCI+XT4nO1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVEb21Ob2RlKGVsKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIEhUTUxFbGVtZW50IG9yIFNWR0VsZW1lbnQgaXMgcmVxdWlyZWQ7IGdvdCAnICsgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLDApID09IDAgJiYgdXJsLmxhc3RJbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ob3N0KSA9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCwgY2FsbGJhY2spIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICB2YXIgaW1hZ2VzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKSxcbiAgICAgICAgbGVmdCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgIGNoZWNrRG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGNoZWNrRG9uZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBpbWFnZS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGlmIChpc0V4dGVybmFsKGhyZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVuZGVyIGVtYmVkZGVkIGltYWdlcyBsaW5raW5nIHRvIGV4dGVybmFsIGhvc3RzOiBcIitocmVmLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI7XG4gICAgICAgIGhyZWYgPSBocmVmIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGltZy5zcmMgPSBocmVmO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGxvYWQgXCIraHJlZik7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KShpbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZWN0b3JSZW1hcCA9IG9wdGlvbnMuc2VsZWN0b3JSZW1hcDtcbiAgICB2YXIgbW9kaWZ5U3R5bGUgPSBvcHRpb25zLm1vZGlmeVN0eWxlO1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIC8vIGVhY2ggZm9udCB0aGF0IGhhcyBleHRyYW5sIGxpbmsgaXMgc2F2ZWQgaW50byBxdWV1ZSwgYW5kIHByb2Nlc3NlZFxuICAgIC8vIGFzeW5jaHJvbm91c2x5XG4gICAgdmFyIGZvbnRzUXVldWUgPSBbXTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVzaGVldCBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIitzaGVldHNbaV0uaHJlZik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbWF0Y2g7IGogPCBydWxlcy5sZW5ndGg7IGorKywgbWF0Y2ggPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tqXTtcbiAgICAgICAgICBpZiAodHlwZW9mKHJ1bGUuc3R5bGUpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZm9sbG93aW5nIENTUyBydWxlIGhhcyBhbiBpbnZhbGlkIHNlbGVjdG9yOiBcIicgKyBydWxlICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yVGV4dCkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpIHx8IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgQ1NTIHNlbGVjdG9yIFwiJyArIHNlbGVjdG9yVGV4dCArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChydWxlLnNlbGVjdG9yVGV4dCkgOiBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBtb2RpZnlTdHlsZSA/IG1vZGlmeVN0eWxlKHJ1bGUuc3R5bGUuY3NzVGV4dCkgOiBydWxlLnN0eWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHsgXCIgKyBjc3NUZXh0ICsgXCIgfVxcblwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHJ1bGUuY3NzVGV4dC5tYXRjaCgvXkBmb250LWZhY2UvKSkge1xuICAgICAgICAgICAgICAvLyBiZWxvdyB3ZSBhcmUgdHJ5aW5nIHRvIGZpbmQgbWF0Y2hlcyB0byBleHRlcm5hbCBsaW5rLiBFLmcuXG4gICAgICAgICAgICAgIC8vIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAvLyAgIC8vIC4uLlxuICAgICAgICAgICAgICAvLyAgIHNyYzogbG9jYWwoJ0FiZWwnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9hYmVsL3Y2L1V6Ti1pZWpSMVZvWFUyT2MtN0xzYnZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZjIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFRoaXMgcmVnZXggd2lsbCBzYXZlIGV4dHJuYWwgbGluayBpbnRvIGZpcnN0IGNhcHR1cmUgZ3JvdXBcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxSZWdleHAgPSAvdXJsXFwoW1wiJ10/KC4rPylbXCInXT9cXCkvO1xuICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gc3VwcG9ydCBtdWx0aXBsZSB1cmwgZGVjbGFyYXRpb25zIHBlciBmb250LlxuICAgICAgICAgICAgICB2YXIgZm9udFVybE1hdGNoID0gcnVsZS5jc3NUZXh0Lm1hdGNoKGZvbnRVcmxSZWdleHApO1xuXG4gICAgICAgICAgICAgIHZhciBleHRlcm5hbEZvbnRVcmwgPSAoZm9udFVybE1hdGNoICYmIGZvbnRVcmxNYXRjaFsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgIHZhciBmb250VXJsSXNEYXRhVVJJID0gZXh0ZXJuYWxGb250VXJsLm1hdGNoKC9eZGF0YTovKTtcbiAgICAgICAgICAgICAgaWYgKGZvbnRVcmxJc0RhdGFVUkkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgaWdub3JlIGRhdGEgdXJpIC0gdGhleSBhcmUgYWxyZWFkeSBlbWJlZGRlZFxuICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9ICcnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybCkge1xuICAgICAgICAgICAgICAgIC8vIG9rYXksIHdlIGFyZSBsdWNreS4gV2UgY2FuIGZldGNoIHRoaXMgZm9udCBsYXRlclxuXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgdXJsIGlmIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4uLycgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLicgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb250c1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gUGFzcyB1cmwgcmVnZXgsIHNvIHRoYXQgb25jZSBmb250IGlzIGRvd25sYWRlZCwgd2UgY2FuIHJ1biBgcmVwbGFjZSgpYCBvbiBpdFxuICAgICAgICAgICAgICAgICAgZm9udFVybFJlZ2V4cDogZm9udFVybFJlZ2V4cCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChleHRlcm5hbEZvbnRVcmwpLFxuICAgICAgICAgICAgICAgICAgdXJsOiBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgIGNzcyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyBhbGwgY3NzIGlzIHByb2Nlc3NlZCwgaXQncyB0aW1lIHRvIGhhbmRsZSBzY2hlZHVsZWQgZm9udHNcbiAgICBwcm9jZXNzRm9udFF1ZXVlKGZvbnRzUXVldWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChmb250VXJsKSB7XG4gICAgICB2YXIgc3VwcG9ydGVkRm9ybWF0cyA9IHtcbiAgICAgICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxuICAgICAgICAnd29mZic6ICdmb250L3dvZmYnLFxuICAgICAgICAnb3RmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC1vcGVudHlwZScsXG4gICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24veC1mb250LXR0ZicsXG4gICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAnc2ZudCc6ICdhcHBsaWNhdGlvbi9mb250LXNmbnQnLFxuICAgICAgICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICB9O1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBPYmplY3Qua2V5cyhzdXBwb3J0ZWRGb3JtYXRzKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXTtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgYnVsbGV0IHByb29mLCBpdCBuZWVkcyB0byBoYW5kbGUgZWRnZSBjYXNlcy4uLlxuICAgICAgICBpZiAoZm9udFVybC5pbmRleE9mKCcuJyArIGV4dGVuc2lvbikgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvcm1hdHNbZXh0ZW5zaW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3Ugc2VlIHRoaXMgZXJyb3IgbWVzc2FnZSwgeW91IHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIGNvZGUgYWJvdmUuXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGZvbnQgZm9ybWF0IGZvciAnICsgZm9udFVybCsgJzsgRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseScpO1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb250UXVldWUocXVldWUpIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxvYWQgZm9udHMgb25lIGJ5IG9uZSB1bnRpbCB3ZSBoYXZlIGFueXRoaW5nIGluIHRoZSBxdWV1ZTpcbiAgICAgICAgdmFyIGZvbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgcHJvY2Vzc05leHQoZm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBtb3JlIGZvbnRzIHRvIGxvYWQuXG4gICAgICAgIGNzc0xvYWRlZENhbGxiYWNrKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0KGZvbnQpIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZW5lZml0IGZyb20gY2FjaGluZy5cbiAgICAgICAgdmFyIG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm9udExvYWRlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEub3BlbignR0VUJywgZm9udC51cmwpO1xuICAgICAgICBvUmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIG9SZXEuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGJlIGFsc28gd29ydGggdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQgKVxuICAgICAgICAgIHZhciBmb250Qml0cyA9IG9SZXEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoZm9udEJpdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXJGYWlsZWQoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tOiAnICsgZm9udC51cmwpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKVxuICAgICAgICAgIGNzcyArPSBmb250LnRleHQgKyAnXFxuJztcbiAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KSB7XG4gICAgICAgICAgdmFyIGRhdGFVcmwgPSAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKSc7XG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dC5yZXBsYWNlKGZvbnQuZm9udFVybFJlZ2V4cCwgZGF0YVVybCkgKyAnXFxuJztcblxuICAgICAgICAgIC8vIHNjaGVkdWxlIG5leHQgZm9udCBkb3dubG9hZCBvbiBuZXh0IHRpY2suXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb2Nlc3NGb250UXVldWUocXVldWUpXG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgdmFyIGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gKGVsLnZpZXdCb3ggJiYgZWwudmlld0JveC5iYXNlVmFsICYmIGVsLnZpZXdCb3guYmFzZVZhbFtkaW1dKSB8fFxuICAgICAgKGNsb25lLmdldEF0dHJpYnV0ZShkaW0pICE9PSBudWxsICYmICFjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKS5tYXRjaCgvJSQvKSAmJiBwYXJzZUludChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSkpIHx8XG4gICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8XG4gICAgICBwYXJzZUludChjbG9uZS5zdHlsZVtkaW1dKSB8fFxuICAgICAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoZGltKSk7XG4gICAgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSkgPyAwIDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcrcDEpO1xuICAgICAgcmV0dXJuIGMgPT09ICclJyA/ICclMjUnIDogYztcbiAgICB9KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICB9XG5cbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgMTtcbiAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgZmFsc2U7XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xuXG4gICAgaW5saW5lSW1hZ2VzKGVsLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICAgIGlmKGVsLnRhZ05hbWUgPT0gJ3N2ZycpIHtcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpO1xuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnaGVpZ2h0Jyk7XG4gICAgICB9IGVsc2UgaWYoZWwuZ2V0QkJveCkge1xuICAgICAgICB2YXIgYm94ID0gZWwuZ2V0QkJveCgpO1xuICAgICAgICB3aWR0aCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBib3gueSArIGJveC5oZWlnaHQ7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKVxuICAgICAgICBjbG9uZSA9IHN2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaW5ZTWluIG1lZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBbXG4gICAgICAgIG9wdGlvbnMubGVmdCB8fCAwLFxuICAgICAgICBvcHRpb25zLnRvcCB8fCAwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICBdLmpvaW4oXCIgXCIpKTtcblxuICAgICAgdmFyIGZvcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvcmVpZ25PYmplY3QgPiAqJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWZvc1tpXS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgICBmb3NbaV0uc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBjdXN0b20gZm9udHMgd2UgbmVlZCB0byBmZXRjaCBmb250IGZpcnN0LCBhbmQgdGhlbiBpbmxpbmVcbiAgICAgIC8vIGl0cyB1cmwgaW50byBkYXRhLXVyaSBmb3JtYXQgKGVuY29kZSBhcyBiYXNlNjQpLiBUaGF0J3Mgd2h5IHN0eWxlXG4gICAgICAvLyBwcm9jZXNzaW5nIGlzIGRvbmUgYXN5bmNob25vdXNseS4gT25jZSBhbGwgaW5saW5pbmcgaXMgZmluc2hlZFxuICAgICAgLy8gY3NzTG9hZGVkQ2FsbGJhY2soKSBpcyBjYWxsZWQuXG4gICAgICBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gY3NzTG9hZGVkQ2FsbGJhY2soY3NzKSB7XG4gICAgICAgIC8vIGhlcmUgYWxsIGZvbnRzIGFyZSBpbmxpbmVkLCBzbyB0aGF0IHdlIGNhbiByZW5kZXIgdGhlbSBwcm9wZXJseS5cbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzLmlubmVySFRNTCA9IFwiPCFbQ0RBVEFbXFxuXCIgKyBjc3MgKyBcIlxcbl1dPlwiO1xuICAgICAgICB2YXIgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGRlZnMsIGNsb25lLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHZhciBvdXRIdG1sID0gb3V0ZXIuaW5uZXJIVE1MO1xuICAgICAgICAgIG91dEh0bWwgPSBvdXRIdG1sLnJlcGxhY2UoL05TXFxkKzpocmVmL2dpLCAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZicpO1xuICAgICAgICAgIGNiKG91dEh0bWwsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzRGF0YVVyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgZnVuY3Rpb24oc3ZnKSB7XG4gICAgICB2YXIgdXJpID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzdmcpKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYih1cmkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc1BuZ1VyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZW5jb2RlclR5cGUgPSBvcHRpb25zLmVuY29kZXJUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICAgIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgPSBvcHRpb25zLmVuY29kZXJPcHRpb25zIHx8IDAuODtcblxuICAgIHZhciBjb252ZXJ0VG9QbmcgPSBmdW5jdGlvbihzcmMsIHcsIGgpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgICAgb3B0aW9ucy5jYW52ZyhjYW52YXMsIHNyYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcil7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbmc7XG4gICAgICB0cnkge1xuICAgICAgICBwbmcgPSBjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMuZW5jb2RlclR5cGUsIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvcikgfHwgZS5uYW1lID09IFwiU2VjdXJpdHlFcnJvclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IocG5nKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGNvbnZlcnRUb1BuZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udmVydFRvUG5nKGltYWdlLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBkYXRhIFVSSSBhcyBhbiBpbWFnZSBvbiB0aGUgZm9sbG93aW5nIFNWR1xcbicsXG4gICAgICAgICAgICB3aW5kb3cuYXRvYih1cmkuc2xpY2UoMjYpKSwgJ1xcbicsXG4gICAgICAgICAgICBcIk9wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyJ3MgZGlhZ25vc2lzXFxuXCIsXG4gICAgICAgICAgICB1cmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3V0JC5kb3dubG9hZCA9IGZ1bmN0aW9uKG5hbWUsIHVyaSkge1xuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodXJpVG9CbG9iKHVyaSksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgZG93bmxvYWRTdXBwb3J0ZWQgPSAnZG93bmxvYWQnIGluIHNhdmVMaW5rO1xuICAgICAgaWYgKGRvd25sb2FkU3VwcG9ydGVkKSB7XG4gICAgICAgIHNhdmVMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICAgICAgc2F2ZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYXZlTGluayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGJsb2IgPSB1cmlUb0Jsb2IodXJpKTtcbiAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJsO1xuICAgICAgICAgIHNhdmVMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBvYmplY3QgVVJMcy4gRmFsbGluZyBiYWNrIHRvIHN0cmluZyBVUkwuJyk7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub3Blbih1cmksICdfdGVtcCcsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8sc3RhdHVzPW5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBtaW1lU3RyaW5nfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2Z0FzUG5nID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzUG5nVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIGRlZmluZSBpcyBkZWZpbmVkIGNyZWF0ZSBhcyBhbiBBTUQgbW9kdWxlXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvdXQkO1xuICAgIH0pO1xuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udHlwZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50aXRsZSxcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgYWxlcnRzSWQgPSBgTWVzc2FnZXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHthbGVydHNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZGl2IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIGxldCBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dCgneCcpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==