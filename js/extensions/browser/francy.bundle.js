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

var _jsonUtils = __webpack_require__(15);

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

var _menuContext = __webpack_require__(19);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(12);

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

var _modalRequired = __webpack_require__(20);

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

var _canvas = __webpack_require__(16);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(26);

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
/* 16 */
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

var _graphFactory = __webpack_require__(17);

var _graphFactory2 = _interopRequireDefault(_graphFactory);

var _chartFactory = __webpack_require__(22);

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
/* 17 */
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

var _graphTree = __webpack_require__(18);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(21);

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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
        var forceY = d3.forceY(-this.height / 2).strength(0.25);

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
/* 22 */
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

var _chartBar = __webpack_require__(23);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(24);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(25);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(27);

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
/* 27 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNGJkMzQ1NGEwMDNiOGJhMjBhYiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwicGFyZW50IiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsInJlcXVpcmVzIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbml0aWFsaXplIiwia2V5IiwiX2luaXRpYWxpemUiLCJSZWdpc3Rlck1hdGhKYXgiLCJSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyIsInN5bnRheEhpZ2hsaWdodCIsInNldFRpbWVvdXQiLCJNYXRoSmF4IiwiSHViIiwiQ29uZmlnIiwidGV4MmpheCIsImpheCIsImlubGluZU1hdGgiLCJkaXNwbGF5TWF0aCIsInByb2Nlc3NFc2NhcGVzIiwiUmVnaXN0ZXIiLCJTdGFydHVwSG9vayIsInNlbGVjdEFsbCIsImVhY2giLCJzZWxmIiwibWF0aEpheCIsImFwcGVuZCIsInJlbW92ZSIsIlF1ZXVlIiwiQ29uZmlndXJlZCIsImUiLCJpbmZvIiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJqc29uIiwicmVwbGFjZSIsIm1hdGNoIiwiY2xzIiwidGVzdCIsIkNoYXJ0IiwiYXhpcyIsInlTY2FsZSIsInhTY2FsZSIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwidG9vbHRpcCIsImNhbnZhcyIsImNoYXJ0Iiwia2V5cyIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJ4IiwieSIsImFsbFZhbHVlcyIsImZvckVhY2giLCJjb25jYXQiLCJtYXgiLCJkIiwieEF4aXNHcm91cCIsImNhbGwiLCJheGlzQm90dG9tIiwic3R5bGUiLCJ0ZXh0IiwidGl0bGUiLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJzaG93TGVnZW5kIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzbGljZSIsImV4aXQiLCJlbnRlciIsImkiLCJtZXJnZSIsImNvbG9ycyIsImRhdGFzZXQiLCJmcm9tIiwiXyIsInNjYWxlU2VxdWVudGlhbCIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwibG9hZCIsIkJhc2UiLCJsb2ciLCJFcnJvciIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJHcmFwaCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImV4ZWN1dGVDYWxsYmFjayIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwidHlwZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInN5bWJvbENpcmNsZSIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxsYmFja09iaiIsIl9leGVjdXRlIiwiY2FsYmFja09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJNb2RhbCIsIm92ZXJsYXkiLCJob2xkZXIiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50IiwidGFibGUiLCJyb3ciLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwianNvblJlZ2V4IiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiZ3JhcGgiLCJjaGFydEZhY3RvcnkiLCJ6b29tIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJmdWxsV2lkdGgiLCJmdWxsSGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJNYXRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FudmFzSWQiLCJUcmVlR3JhcGgiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJib3VuZCIsIm5vZGVVcGRhdGUiLCJsYXllciIsIl9hcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJDb250ZXh0TWVudSIsInByZXZlbnREZWZhdWx0IiwiUmVxdWlyZWRBcmdzTW9kYWwiLCJtb2RhbElkIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImlucHV0RWxlbWVudCIsImZvY3VzIiwiR2VuZXJpY0dyYXBoIiwic2ltdWxhdGlvbkFjdGl2ZSIsInNpbXVsYXRpb24iLCJjYW52YXNMaW5rcyIsImxpbmtzVG9BZGQiLCJfZmlsdGVyTmV3RWxlbWVudHMiLCJub2Rlc1RvQWRkIiwiaGlnaGxpZ2h0IiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVtcHR5Iiwic2hvd05laWdoYm91cnMiLCJjb25uZWN0ZWROb2RlcyIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0IiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiY2FudmFzT2JqZWN0cyIsImQzRWxlbWVudCIsIm5ld0VsZW1lbnRzIiwiZmluZCIsIkNoYXJ0RmFjdG9yeSIsIkJhckNoYXJ0Iiwic2NhbGVCYW5kIiwicGFkZGluZyIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJfcmVuZGVyQXhpcyIsIl9yZW5kZXJMZWdlbmQiLCJMaW5lQ2hhcnQiLCJsaW5lc0dyb3VwIiwidmFsdWVMaW5lIiwibGluZSIsImxpbmVFbnRlciIsIlNjYXR0ZXJDaGFydCIsInNjYXR0ZXJHcm91cCIsInNjYXR0ZXIiLCJzY2F0dGVyRW50ZXIiLCJTdmdUb1BuZyIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsInNhdmVTdmdBc1BuZyIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJpbmRleE9mIiwicXVldWUiLCJmb250IiwicG9wIiwicHJvY2Vzc05leHQiLCJvUmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9udExvYWRlZCIsInRyYW5zZmVyRmFpbGVkIiwib3BlbiIsInJlc3BvbnNlVHlwZSIsInNlbmQiLCJmb250Qml0cyIsInJlc3BvbnNlIiwiZm9udEluQmFzZTY0IiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInVwZGF0ZUZvbnRTdHlsZSIsImRhdGFVcmwiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsInJlc3BvbnNpdmUiLCJ4bWxucyIsIm91dGVyIiwiY2xvbmVOb2RlIiwiYm94Iiwic2V0QXR0cmlidXRlIiwic3ZnIiwiY3JlYXRlRWxlbWVudE5TIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJqb2luIiwiZm9zIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJyZW1vdmVDaGlsZCIsImJ5dGVTdHJpbmciLCJtaW1lU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJpbnRBcnJheSIsImNoYXJDb2RlQXQiLCJCbG9iIiwic2F2ZVN2ZyIsImRlZmluZSIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFBSU0sU0FBSixDQUFjLGlEQUFkLENBQU47QUFDRDtBQUNELFFBQUksTUFB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LE9BQWpDLEVBQTBDLFFBQTFDLEVBQW9EeUYsSUFBcEQsQ0FBeUQ7QUFBQSxlQUFLTCxFQUFFTSxLQUFQO0FBQUEsT0FBekQ7QUFDQSthLG1CQUFhemQsTUFBYixDQUFvQixNQUFwQixFQUE0QnlDLElBQTVCLENBQWlDO0FBQUEsZUFBS0wsRUFBRUssSUFBUDtBQUFBLE9BQWpDO0FBQ0FnYixtQkFBYXpkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJoRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRHdGLEtBQXBELENBQTBELFNBQTFELEVBQXFFLE1BQXJFLEVBQTZFQyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQWdiLG1CQUFhcmEsS0FBYixDQUFtQnFCLE9BQW5COztBQUVBQSxjQUFReEIsSUFBUixHQUFlaEQsTUFBZjs7QUFFQSxXQUFLaEUsT0FBTCxDQUFhdUcsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTNDTSthLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNGJkMzQ1NGEwMDNiOGJhMjBhYiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7fVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IG1hcmdpbigpIHtcbiAgICByZXR1cm4geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIH1cbiAgXG4gIGdldCB3aWR0aCgpIHtcbiAgICBsZXQgd2lkdGggPSArdGhpcy5wYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIHdpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuICB9XG4gIFxuICBnZXQgaGVpZ2h0KCkge1xuICAgIGxldCBoZWlnaHQgPSArdGhpcy5wYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICByZXR1cm4gaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3IuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIsIE1hdGhKYXgsIGQzICovXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlck1hdGhKYXgoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZyh7XG4gICAgICAgIHRleDJqYXg6IHtcbiAgICAgICAgICBqYXg6IFsnaW5wdXQvVGVYJywgJ291dHB1dC9TVkcnXSxcbiAgICAgICAgICBpbmxpbmVNYXRoOiBbXG4gICAgICAgICAgICBbJyQnLCAnJCddLFxuICAgICAgICAgICAgWydcXFxcKCcsICdcXFxcKSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkaXNwbGF5TWF0aDogW1xuICAgICAgICAgICAgWyckJCcsICckJCddLFxuICAgICAgICAgICAgWydcXFxcWycsICdcXFxcXSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuU3RhcnR1cEhvb2soJ0VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgbWF0aEpheCA9IHNlbGYuc2VsZWN0KCd0ZXh0PnNwYW4+c3ZnJyk7XG4gICAgICAgICAgICBpZiAobWF0aEpheC5ub2RlKCkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHNlbGYubm9kZSgpLnBhcmVudE5vZGUpLmFwcGVuZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRoSmF4Lm5vZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnQubm9kZSgpXSk7XG5cbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZ3VyZWQoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4nLCBlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG5leHBvcnQgZnVuY3Rpb24gc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgbGV0IGNscyA9ICdudW1iZXInO1xuICAgIGlmICgvXlwiLy50ZXN0KG1hdGNoKSkge1xuICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ2Jvb2xlYW4nO1xuICAgIH1cbiAgICBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmF4aXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy55U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy54U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvb2x0aXAgPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIHRoaXMudG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gICAgXG4gICAgdGhpcy5heGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzO1xuICAgIHRoaXMuZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGE7XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGFzZXRzKTtcblxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIHRoaXMueVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbdGhpcy5oZWlnaHQsIDBdKS5kb21haW4odGhpcy5heGlzLnkuZG9tYWluKTtcbiAgICBcbiAgICB0aGlzLmFsbFZhbHVlcyA9IFtdO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRoaXMuYWxsVmFsdWVzID0gdGhpcy5hbGxWYWx1ZXMuY29uY2F0KHRoaXMuZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnlTY2FsZS5kb21haW4oWzAsIGQzLm1heCh0aGlzLmFsbFZhbHVlcywgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKFswLCB0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG4gIH1cbiAgXG4gIF9yZW5kZXJBeGlzKCkge1xuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7dGhpcy5oZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHRoaXMueFNjYWxlKSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB0aGlzLndpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICBsZXQgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQodGhpcy55U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCB0aGlzLmhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQodGhpcy5heGlzLnkudGl0bGUpO1xuICB9XG4gIFxuICBfcmVuZGVyTGVnZW5kKCkge1xuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgbGV0IGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIGxldCBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKHRoaXMuZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4JywgdGhpcy53aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7ICdBJzogeyAndGl0bGUnOiAnRGF0YXNldCcsICd0ZXh0JzogZGF0YXNldCB9LCAnQic6IHsgJ3RpdGxlJzogJ1ZhbHVlJywgJ3RleHQnOiB2YWx1ZSB9IH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBkb21haW5SYW5nZShtYXgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgQXJyYXkobWF4KSwgKF8sIGkpID0+IGkpLm1hcCh4ID0+IHgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMuYXBwZW5kVG8gPSB0aGlzO1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbyA9ICdib2R5JywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfSB0aGUgbG9nZ2VyIGZvciB0aGlzIGNsYXNzXG4gICAgICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzZXR0aW5ncyh7IHZlcmJvc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgJiYgIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXBwZW5kVG8gJiYgIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gY2FsbGJhY2tIYW5kbGVyIHx8IHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2FkKGpzb24sIHBhcnRpYWwpIHtcbiAgICBsZXQgZGF0YSA9IEpzb25VdGlscy5wYXJzZShqc29uLCBwYXJ0aWFsKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgbG9nZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIExvZ2dlciBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1ZyhMb2dnZXIuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyhMb2dnZXIuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIGxldmVsIHRoZSBsb2cgbGV2ZWxcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIHN0YXRpYyBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG4gIH1cblxuICBfYXBwbHlFdmVudHMoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgbGV0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIGxldCBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuXG4gICAgZWxlbWVudFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4ge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLmxvYWQoZC5tZXNzYWdlcywgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY3Jvc3MnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENyb3NzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGlhbW9uZCc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NxdWFyZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3F1YXJlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3Rhcic6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sU3RhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3d5ZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sV3llO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgbGV0IG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICBsZXQgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICBsZXQgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmxvYWQoZCwgdHJ1ZSkuZXhlY3V0ZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBsZXQgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgbGV0IG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgUmVxdWlyZWRBcmdzTW9kYWwgZnJvbSAnLi9tb2RhbC1yZXF1aXJlZCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGxiYWNrT2JqKSA9PiB0aGlzLl9leGVjdXRlLmNhbGwodGhpcywgY2FsbGJhY2tPYmopO1xuICAgICAgcmV0dXJuIG5ldyBSZXF1aXJlZEFyZ3NNb2RhbChvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICB0aGlzLl9leGVjdXRlKHRoaXMuZGF0YS5jYWxsYmFjayk7XG4gICAgXG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLm92ZXJsYXkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ob2xkZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge1xuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdGhpcy5vdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHRoaXMuaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgfVxuICBcbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZSgpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLmhvbGRlci5yZW1vdmUoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgbGV0IHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgbGV0IHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgc3RhdGljIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgbGV0IG9sZFJlc2l6ZSA9IHdpbmRvdy5vbnJlc2l6ZTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59XG5jYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIGNvbnN0IGZyYW1lSWQgPSBgRnJhbWUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBkaXYjJHtmcmFtZUlkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgRnJhbWUgWyR7ZnJhbWVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5hdHRyKCdpZCcsIGZyYW1lSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBmcmFtZSB3aXRoIGlkIFske2ZyYW1lSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRnJhbWUgdXBkYXRlZCBbJHtmcmFtZUlkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcGFyYW0gcGFydGlhbCAtIGlmIHRoZSBpbnB1dCBpcyBub3QgYSBjb21wbGV0ZSBGcmFuY3kgSlNPTiBPYmplY3QsIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsID0gZmFsc2UpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0YXRpYyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBtaW1lIHR5cGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGFja2FnZVxuICAgKi9cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoRmFjdG9yeSBmcm9tICcuL2dyYXBoLWZhY3RvcnknO1xuaW1wb3J0IENoYXJ0RmFjdG9yeSBmcm9tICcuL2NoYXJ0LWZhY3RvcnknO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoRmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnRGYWN0b3J5ID0gbmV3IENoYXJ0RmFjdG9yeSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0RmFjdG9yeSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoJ3RyYW5zZm9ybScsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgbGV0IGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICBsZXQgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgbGV0IHdpZHRoID0gK2JvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSArYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT09IDAgfHwgaGVpZ2h0ID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgbGV0IHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKCd6b29tJywgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKCdkYmxjbGljay56b29tJywgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRyZWVHcmFwaCBmcm9tICcuL2dyYXBoLXRyZWUnO1xuaW1wb3J0IEdlbmVyaWNHcmFwaCBmcm9tICcuL2dyYXBoLWdlbmVyaWMnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICBjYXNlICd0cmVlJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJpbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBHcmFwaCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gdGhpcy5oZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB0aGlzLndpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICBsZXQgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICBsZXQgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngsIHk6IHNvdXJjZS55fTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKVxuICAgICAgICAuYXR0cigneCcsICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgICB9KVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIGxldCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIFxuICAgICAgaWYgKG5vZGUubm9kZSgpKSB7XG4gICAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICAgIGxldCBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBmbGF0IGRhdGEgaW50byB0cmVlIGRhdGEgYnkgYW5hbHlzaW5nIHRoZSBwYXJlbnRzIG9mIGVhY2ggbm9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZGF0YSB0cmFuc2Zvcm1lZCBpbiB0cmVlIGRhdGFcbiAgICovXG4gIGdldCB0cmVlRGF0YSgpIHtcbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdO1xuICAgIGxldCBkYXRhTWFwID0gY2FudmFzTm9kZXMucmVkdWNlKGZ1bmN0aW9uIChtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICBsZXQgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyZWVEYXRhLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWVEYXRhWzBdO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgbGV0IHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCBwb3NbMF0gKyA1ICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIHBvc1sxXSArIDUgKyAncHgnKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgbGV0IG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgbGV0IGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yIChsZXQgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGxldCByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBsZXQgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHsgXG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgIHRoaXMudW5yZW5kZXIuY2FsbCh0aGlzKTsgXG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIGxldCBpbnB1dEVsZW1lbnQgPSBjb250ZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1hcmcnKS5ub2RlKCk7XG4gICAgaWYgKGlucHV0RWxlbWVudCkge1xuICAgICAgaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIGxldCBzaW11bGF0aW9uQWN0aXZlID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uO1xuXG4gICAgbGV0IGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIGxldCBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgbGV0IGxpbmtzID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEoKTtcbiAgICBsZXQgbGlua3NUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc0xpbmtzLCBsaW5rcyk7XG5cbiAgICBsZXQgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKGxpbmtzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBsZXQgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgIH1cblxuICAgIGxldCBub2RlcyA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKCk7XG4gICAgbGV0IG5vZGVzVG9BZGQgPSB0aGlzLl9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNOb2Rlcywgbm9kZXMpO1xuXG4gICAgbGV0IG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YShub2Rlc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgaWYgKG5vZGUuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbGluay5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluayBsaW5lLmZyYW5jeS1lZGdlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgc2VsZi5wYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1zeW1ib2wnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpXG4gICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYm91bmQgPSB0aGlzLmdldEJCb3goKTtcbiAgICAgICAgcmV0dXJuIC0oYm91bmQud2lkdGggLyAyKTtcbiAgICAgIH0pO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICB0aGlzLl9hcHBseUV2ZW50cyhub2RlKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgZGF0YSBhbmQgcmVjYWxjdWxhdGUgaXRzIHNpemVcbiAgICAgIG5vZGUuZWFjaChmdW5jdGlvbihkKXtcbiAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgIHJldHVybiBkLnNpemUgPSBib3VuZC53aWR0aDtcbiAgICAgIH0pO1xuICAgICAgLy8gQ2FudmFzIEZvcmNlc1xuICAgICAgbGV0IGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHRoaXMud2lkdGggLyAyKS55KHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgIGxldCBmb3JjZVggPSBkMy5mb3JjZVgodGhpcy53aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIGxldCBmb3JjZVkgPSBkMy5mb3JjZVkoLXRoaXMuaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdjZW50ZXInLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAgIC5mb3JjZSgnY29sbGlkZScsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgICAgc2ltdWxhdGlvbi5hbHBoYSgwLjUpLnJlc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgc2VsZi5wYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICBsZXQgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICBsZXQgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG4gIFxuICBfZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzT2JqZWN0cywgZDNFbGVtZW50KSB7XG4gICAgbGV0IG5ld0VsZW1lbnRzID0gW107XG4gICAgY2FudmFzT2JqZWN0cy5mb3JFYWNoKG8gPT4ge1xuICAgICAgbGV0IGxpbmsgPSBkM0VsZW1lbnQuZmluZChkID0+IGQuaWQgPT09IG8uaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChsaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKG8pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdFbGVtZW50cztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnRGYWN0b3J5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQudHlwZSkge1xuICAgIGNhc2UgJ2Jhcic6XG4gICAgICBlbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1mYWN0b3J5LmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHRoaXMueFNjYWxlID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHRoaXMud2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcbiAgICB9XG5cbiAgICBsZXQgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWJhcnMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1iYXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGJhckVudGVyID0gYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYueVNjYWxlKGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTsgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBsZXQgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW3NlbGYuZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdyJywgNSlcbiAgICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnhTY2FsZShpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuXG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0JztcbmltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICBjb25zdCBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyh0aGlzLlNWR1BhcmVudC5ub2RlKCksICdkaWFncmFtLnBuZycpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzLCBzeW50YXhIaWdobGlnaHQgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwoc3ludGF4SGlnaGxpZ2h0KEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHsgXG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgIHRoaXMudW5yZW5kZXIuY2FsbCh0aGlzKTsgXG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsIihmdW5jdGlvbigpIHtcbiAgdmFyIG91dCQgPSB0eXBlb2YgZXhwb3J0cyAhPSAndW5kZWZpbmVkJyAmJiBleHBvcnRzIHx8IHR5cGVvZiBkZWZpbmUgIT0gJ3VuZGVmaW5lZCcgJiYge30gfHwgdGhpcztcblxuICB2YXIgZG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/PjwhRE9DVFlQRSBzdmcgUFVCTElDIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZFwiIFs8IUVOVElUWSBuYnNwIFwiJiMxNjA7XCI+XT4nO1xuXG4gIGZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgb2JqIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVpcmVEb21Ob2RlKGVsKSB7XG4gICAgaWYgKCFpc0VsZW1lbnQoZWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FuIEhUTUxFbGVtZW50IG9yIFNWR0VsZW1lbnQgaXMgcmVxdWlyZWQ7IGdvdCAnICsgZWwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXh0ZXJuYWwodXJsKSB7XG4gICAgcmV0dXJuIHVybCAmJiB1cmwubGFzdEluZGV4T2YoJ2h0dHAnLDApID09IDAgJiYgdXJsLmxhc3RJbmRleE9mKHdpbmRvdy5sb2NhdGlvbi5ob3N0KSA9PSAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlubGluZUltYWdlcyhlbCwgY2FsbGJhY2spIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICB2YXIgaW1hZ2VzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKSxcbiAgICAgICAgbGVmdCA9IGltYWdlcy5sZW5ndGgsXG4gICAgICAgIGNoZWNrRG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChsZWZ0ID09PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIGNoZWNrRG9uZSgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICAgICAgdmFyIGhyZWYgPSBpbWFnZS5nZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGlmIChpc0V4dGVybmFsKGhyZWYudmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDYW5ub3QgcmVuZGVyIGVtYmVkZGVkIGltYWdlcyBsaW5raW5nIHRvIGV4dGVybmFsIGhvc3RzOiBcIitocmVmLnZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI7XG4gICAgICAgIGhyZWYgPSBocmVmIHx8IGltYWdlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIGltZy5zcmMgPSBocmVmO1xuICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy53aWR0aDtcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiLCBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSk7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IGxvYWQgXCIraHJlZik7XG4gICAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9KShpbWFnZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZWN0b3JSZW1hcCA9IG9wdGlvbnMuc2VsZWN0b3JSZW1hcDtcbiAgICB2YXIgbW9kaWZ5U3R5bGUgPSBvcHRpb25zLm1vZGlmeVN0eWxlO1xuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIC8vIGVhY2ggZm9udCB0aGF0IGhhcyBleHRyYW5sIGxpbmsgaXMgc2F2ZWQgaW50byBxdWV1ZSwgYW5kIHByb2Nlc3NlZFxuICAgIC8vIGFzeW5jaHJvbm91c2x5XG4gICAgdmFyIGZvbnRzUXVldWUgPSBbXTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVzaGVldCBjb3VsZCBub3QgYmUgbG9hZGVkOiBcIitzaGVldHNbaV0uaHJlZik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocnVsZXMgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbWF0Y2g7IGogPCBydWxlcy5sZW5ndGg7IGorKywgbWF0Y2ggPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHJ1bGUgPSBydWxlc1tqXTtcbiAgICAgICAgICBpZiAodHlwZW9mKHJ1bGUuc3R5bGUpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvclRleHQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgZm9sbG93aW5nIENTUyBydWxlIGhhcyBhbiBpbnZhbGlkIHNlbGVjdG9yOiBcIicgKyBydWxlICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yVGV4dCkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWwucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpIHx8IGVsLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihzZWxlY3RvclRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgQ1NTIHNlbGVjdG9yIFwiJyArIHNlbGVjdG9yVGV4dCArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBzZWxlY3RvclJlbWFwID8gc2VsZWN0b3JSZW1hcChydWxlLnNlbGVjdG9yVGV4dCkgOiBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBtb2RpZnlTdHlsZSA/IG1vZGlmeVN0eWxlKHJ1bGUuc3R5bGUuY3NzVGV4dCkgOiBydWxlLnN0eWxlLmNzc1RleHQ7XG4gICAgICAgICAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHsgXCIgKyBjc3NUZXh0ICsgXCIgfVxcblwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHJ1bGUuY3NzVGV4dC5tYXRjaCgvXkBmb250LWZhY2UvKSkge1xuICAgICAgICAgICAgICAvLyBiZWxvdyB3ZSBhcmUgdHJ5aW5nIHRvIGZpbmQgbWF0Y2hlcyB0byBleHRlcm5hbCBsaW5rLiBFLmcuXG4gICAgICAgICAgICAgIC8vIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICAvLyAgIC8vIC4uLlxuICAgICAgICAgICAgICAvLyAgIHNyYzogbG9jYWwoJ0FiZWwnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9hYmVsL3Y2L1V6Ti1pZWpSMVZvWFUyT2MtN0xzYnZlc1pXMnhPUS14c05xTzQ3bTU1REEud29mZjIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIFRoaXMgcmVnZXggd2lsbCBzYXZlIGV4dHJuYWwgbGluayBpbnRvIGZpcnN0IGNhcHR1cmUgZ3JvdXBcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxSZWdleHAgPSAvdXJsXFwoW1wiJ10/KC4rPylbXCInXT9cXCkvO1xuICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGNoYW5nZWQgdG8gc3VwcG9ydCBtdWx0aXBsZSB1cmwgZGVjbGFyYXRpb25zIHBlciBmb250LlxuICAgICAgICAgICAgICB2YXIgZm9udFVybE1hdGNoID0gcnVsZS5jc3NUZXh0Lm1hdGNoKGZvbnRVcmxSZWdleHApO1xuXG4gICAgICAgICAgICAgIHZhciBleHRlcm5hbEZvbnRVcmwgPSAoZm9udFVybE1hdGNoICYmIGZvbnRVcmxNYXRjaFsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgIHZhciBmb250VXJsSXNEYXRhVVJJID0gZXh0ZXJuYWxGb250VXJsLm1hdGNoKC9eZGF0YTovKTtcbiAgICAgICAgICAgICAgaWYgKGZvbnRVcmxJc0RhdGFVUkkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgaWdub3JlIGRhdGEgdXJpIC0gdGhleSBhcmUgYWxyZWFkeSBlbWJlZGRlZFxuICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9ICcnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybCkge1xuICAgICAgICAgICAgICAgIC8vIG9rYXksIHdlIGFyZSBsdWNreS4gV2UgY2FuIGZldGNoIHRoaXMgZm9udCBsYXRlclxuXG4gICAgICAgICAgICAgICAgLy9oYW5kbGUgdXJsIGlmIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4uLycgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4dGVybmFsRm9udFVybC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLicgKyBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb250c1F1ZXVlLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGV4dDogcnVsZS5jc3NUZXh0LFxuICAgICAgICAgICAgICAgICAgLy8gUGFzcyB1cmwgcmVnZXgsIHNvIHRoYXQgb25jZSBmb250IGlzIGRvd25sYWRlZCwgd2UgY2FuIHJ1biBgcmVwbGFjZSgpYCBvbiBpdFxuICAgICAgICAgICAgICAgICAgZm9udFVybFJlZ2V4cDogZm9udFVybFJlZ2V4cCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChleHRlcm5hbEZvbnRVcmwpLFxuICAgICAgICAgICAgICAgICAgdXJsOiBleHRlcm5hbEZvbnRVcmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UsIHVzZSBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgIGNzcyArPSBydWxlLmNzc1RleHQgKyAnXFxuJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdyBhbGwgY3NzIGlzIHByb2Nlc3NlZCwgaXQncyB0aW1lIHRvIGhhbmRsZSBzY2hlZHVsZWQgZm9udHNcbiAgICBwcm9jZXNzRm9udFF1ZXVlKGZvbnRzUXVldWUpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Rm9udE1pbWVUeXBlRnJvbVVybChmb250VXJsKSB7XG4gICAgICB2YXIgc3VwcG9ydGVkRm9ybWF0cyA9IHtcbiAgICAgICAgJ3dvZmYyJzogJ2ZvbnQvd29mZjInLFxuICAgICAgICAnd29mZic6ICdmb250L3dvZmYnLFxuICAgICAgICAnb3RmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC1vcGVudHlwZScsXG4gICAgICAgICd0dGYnOiAnYXBwbGljYXRpb24veC1mb250LXR0ZicsXG4gICAgICAgICdlb3QnOiAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICAgICAnc2ZudCc6ICdhcHBsaWNhdGlvbi9mb250LXNmbnQnLFxuICAgICAgICAnc3ZnJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICB9O1xuICAgICAgdmFyIGV4dGVuc2lvbnMgPSBPYmplY3Qua2V5cyhzdXBwb3J0ZWRGb3JtYXRzKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tpXTtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgYnVsbGV0IHByb29mLCBpdCBuZWVkcyB0byBoYW5kbGUgZWRnZSBjYXNlcy4uLlxuICAgICAgICBpZiAoZm9udFVybC5pbmRleE9mKCcuJyArIGV4dGVuc2lvbikgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvcm1hdHNbZXh0ZW5zaW9uXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB5b3Ugc2VlIHRoaXMgZXJyb3IgbWVzc2FnZSwgeW91IHByb2JhYmx5IG5lZWQgdG8gdXBkYXRlIGNvZGUgYWJvdmUuXG4gICAgICBjb25zb2xlLmVycm9yKCdVbmtub3duIGZvbnQgZm9ybWF0IGZvciAnICsgZm9udFVybCsgJzsgRm9udHMgbWF5IG5vdCBiZSB3b3JraW5nIGNvcnJlY3RseScpO1xuICAgICAgcmV0dXJuICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb250UXVldWUocXVldWUpIHtcbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIGxvYWQgZm9udHMgb25lIGJ5IG9uZSB1bnRpbCB3ZSBoYXZlIGFueXRoaW5nIGluIHRoZSBxdWV1ZTpcbiAgICAgICAgdmFyIGZvbnQgPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgcHJvY2Vzc05leHQoZm9udCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBtb3JlIGZvbnRzIHRvIGxvYWQuXG4gICAgICAgIGNzc0xvYWRlZENhbGxiYWNrKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3NOZXh0KGZvbnQpIHtcbiAgICAgICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZW5lZml0IGZyb20gY2FjaGluZy5cbiAgICAgICAgdmFyIG9SZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZm9udExvYWRlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCB0cmFuc2ZlckZhaWxlZCk7XG4gICAgICAgIG9SZXEub3BlbignR0VUJywgZm9udC51cmwpO1xuICAgICAgICBvUmVxLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgIG9SZXEuc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGZvbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gVE9ETzogaXQgbWF5IGJlIGFsc28gd29ydGggdG8gd2FpdCB1bnRpbCBmb250cyBhcmUgZnVsbHkgbG9hZGVkIGJlZm9yZVxuICAgICAgICAgIC8vIGF0dGVtcHRpbmcgdG8gcmFzdGVyaXplIHRoZW0uIChlLmcuIHVzZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRm9udEZhY2VTZXQgKVxuICAgICAgICAgIHZhciBmb250Qml0cyA9IG9SZXEucmVzcG9uc2U7XG4gICAgICAgICAgdmFyIGZvbnRJbkJhc2U2NCA9IGFycmF5QnVmZmVyVG9CYXNlNjQoZm9udEJpdHMpO1xuICAgICAgICAgIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmZXJGYWlsZWQoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgZm9udCBmcm9tOiAnICsgZm9udC51cmwpO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKVxuICAgICAgICAgIGNzcyArPSBmb250LnRleHQgKyAnXFxuJztcbiAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KSB7XG4gICAgICAgICAgdmFyIGRhdGFVcmwgPSAndXJsKFwiZGF0YTonICsgZm9udC5mb3JtYXQgKyAnO2Jhc2U2NCwnICsgZm9udEluQmFzZTY0ICsgJ1wiKSc7XG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dC5yZXBsYWNlKGZvbnQuZm9udFVybFJlZ2V4cCwgZGF0YVVybCkgKyAnXFxuJztcblxuICAgICAgICAgIC8vIHNjaGVkdWxlIG5leHQgZm9udCBkb3dubG9hZCBvbiBuZXh0IHRpY2suXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHByb2Nlc3NGb250UXVldWUocXVldWUpXG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKSB7XG4gICAgICB2YXIgYmluYXJ5ID0gJyc7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgdmFyIGxlbiA9IGJ5dGVzLmJ5dGVMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3aW5kb3cuYnRvYShiaW5hcnkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCwgY2xvbmUsIGRpbSkge1xuICAgIHZhciB2ID0gKGVsLnZpZXdCb3ggJiYgZWwudmlld0JveC5iYXNlVmFsICYmIGVsLnZpZXdCb3guYmFzZVZhbFtkaW1dKSB8fFxuICAgICAgKGNsb25lLmdldEF0dHJpYnV0ZShkaW0pICE9PSBudWxsICYmICFjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKS5tYXRjaCgvJSQvKSAmJiBwYXJzZUludChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSkpIHx8XG4gICAgICBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1dIHx8XG4gICAgICBwYXJzZUludChjbG9uZS5zdHlsZVtkaW1dKSB8fFxuICAgICAgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoZGltKSk7XG4gICAgcmV0dXJuICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCB8fCBpc05hTihwYXJzZUZsb2F0KHYpKSkgPyAwIDogdjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlRW5jb2RlKGRhdGEpIHtcbiAgICBkYXRhID0gZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICAgIGRhdGEgPSBkYXRhLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uKG1hdGNoLCBwMSkge1xuICAgICAgdmFyIGMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCcweCcrcDEpO1xuICAgICAgcmV0dXJuIGMgPT09ICclJyA/ICclMjUnIDogYztcbiAgICB9KTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGRhdGEpO1xuICB9XG5cbiAgb3V0JC5wcmVwYXJlU3ZnID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5zY2FsZSA9IG9wdGlvbnMuc2NhbGUgfHwgMTtcbiAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgZmFsc2U7XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xuXG4gICAgaW5saW5lSW1hZ2VzKGVsLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB2YXIgd2lkdGgsIGhlaWdodDtcbiAgICAgIGlmKGVsLnRhZ05hbWUgPT0gJ3N2ZycpIHtcbiAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICd3aWR0aCcpO1xuICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnaGVpZ2h0Jyk7XG4gICAgICB9IGVsc2UgaWYoZWwuZ2V0QkJveCkge1xuICAgICAgICB2YXIgYm94ID0gZWwuZ2V0QkJveCgpO1xuICAgICAgICB3aWR0aCA9IGJveC54ICsgYm94LndpZHRoO1xuICAgICAgICBoZWlnaHQgPSBib3gueSArIGJveC5oZWlnaHQ7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgY2xvbmUuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2xhdGVcXCguKj9cXCkvLCAnJykpO1xuXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnc3ZnJylcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNsb25lKVxuICAgICAgICBjbG9uZSA9IHN2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F0dGVtcHRlZCB0byByZW5kZXIgbm9uLVNWRyBlbGVtZW50JywgZWwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIik7XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zOnhsaW5rJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zaXZlKSB7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCdwcmVzZXJ2ZUFzcGVjdFJhdGlvJywgJ3hNaW5ZTWluIG1lZXQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHdpZHRoICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBoZWlnaHQgKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBbXG4gICAgICAgIG9wdGlvbnMubGVmdCB8fCAwLFxuICAgICAgICBvcHRpb25zLnRvcCB8fCAwLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0XG4gICAgICBdLmpvaW4oXCIgXCIpKTtcblxuICAgICAgdmFyIGZvcyA9IGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZvcmVpZ25PYmplY3QgPiAqJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWZvc1tpXS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgICBmb3NbaV0uc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGNsb25lKTtcblxuICAgICAgLy8gSW4gY2FzZSBvZiBjdXN0b20gZm9udHMgd2UgbmVlZCB0byBmZXRjaCBmb250IGZpcnN0LCBhbmQgdGhlbiBpbmxpbmVcbiAgICAgIC8vIGl0cyB1cmwgaW50byBkYXRhLXVyaSBmb3JtYXQgKGVuY29kZSBhcyBiYXNlNjQpLiBUaGF0J3Mgd2h5IHN0eWxlXG4gICAgICAvLyBwcm9jZXNzaW5nIGlzIGRvbmUgYXN5bmNob25vdXNseS4gT25jZSBhbGwgaW5saW5pbmcgaXMgZmluc2hlZFxuICAgICAgLy8gY3NzTG9hZGVkQ2FsbGJhY2soKSBpcyBjYWxsZWQuXG4gICAgICBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKTtcblxuICAgICAgZnVuY3Rpb24gY3NzTG9hZGVkQ2FsbGJhY2soY3NzKSB7XG4gICAgICAgIC8vIGhlcmUgYWxsIGZvbnRzIGFyZSBpbmxpbmVkLCBzbyB0aGF0IHdlIGNhbiByZW5kZXIgdGhlbSBwcm9wZXJseS5cbiAgICAgICAgdmFyIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzLmlubmVySFRNTCA9IFwiPCFbQ0RBVEFbXFxuXCIgKyBjc3MgKyBcIlxcbl1dPlwiO1xuICAgICAgICB2YXIgZGVmcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RlZnMnKTtcbiAgICAgICAgZGVmcy5hcHBlbmRDaGlsZChzKTtcbiAgICAgICAgY2xvbmUuaW5zZXJ0QmVmb3JlKGRlZnMsIGNsb25lLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHZhciBvdXRIdG1sID0gb3V0ZXIuaW5uZXJIVE1MO1xuICAgICAgICAgIG91dEh0bWwgPSBvdXRIdG1sLnJlcGxhY2UoL05TXFxkKzpocmVmL2dpLCAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZicpO1xuICAgICAgICAgIGNiKG91dEh0bWwsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzRGF0YVVyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgZnVuY3Rpb24oc3ZnKSB7XG4gICAgICB2YXIgdXJpID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArIHdpbmRvdy5idG9hKHJlRW5jb2RlKGRvY3R5cGUgKyBzdmcpKTtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYih1cmkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc1BuZ1VyaSA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuZW5jb2RlclR5cGUgPSBvcHRpb25zLmVuY29kZXJUeXBlIHx8ICdpbWFnZS9wbmcnO1xuICAgIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgPSBvcHRpb25zLmVuY29kZXJPcHRpb25zIHx8IDAuODtcblxuICAgIHZhciBjb252ZXJ0VG9QbmcgPSBmdW5jdGlvbihzcmMsIHcsIGgpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSB3O1xuICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgICAgb3B0aW9ucy5jYW52ZyhjYW52YXMsIHNyYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzcmMsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLmJhY2tncm91bmRDb2xvcil7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW92ZXInO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwbmc7XG4gICAgICB0cnkge1xuICAgICAgICBwbmcgPSBjYW52YXMudG9EYXRhVVJMKG9wdGlvbnMuZW5jb2RlclR5cGUsIG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoKHR5cGVvZiBTZWN1cml0eUVycm9yICE9PSAndW5kZWZpbmVkJyAmJiBlIGluc3RhbmNlb2YgU2VjdXJpdHlFcnJvcikgfHwgZS5uYW1lID09IFwiU2VjdXJpdHlFcnJvclwiKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlbmRlcmVkIFNWRyBpbWFnZXMgY2Fubm90IGJlIGRvd25sb2FkZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2IocG5nKTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGNvbnZlcnRUb1BuZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29udmVydFRvUG5nKGltYWdlLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBkYXRhIFVSSSBhcyBhbiBpbWFnZSBvbiB0aGUgZm9sbG93aW5nIFNWR1xcbicsXG4gICAgICAgICAgICB3aW5kb3cuYXRvYih1cmkuc2xpY2UoMjYpKSwgJ1xcbicsXG4gICAgICAgICAgICBcIk9wZW4gdGhlIGZvbGxvd2luZyBsaW5rIHRvIHNlZSBicm93c2VyJ3MgZGlhZ25vc2lzXFxuXCIsXG4gICAgICAgICAgICB1cmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb3V0JC5kb3dubG9hZCA9IGZ1bmN0aW9uKG5hbWUsIHVyaSkge1xuICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xuICAgICAgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IodXJpVG9CbG9iKHVyaSksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2F2ZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgZG93bmxvYWRTdXBwb3J0ZWQgPSAnZG93bmxvYWQnIGluIHNhdmVMaW5rO1xuICAgICAgaWYgKGRvd25sb2FkU3VwcG9ydGVkKSB7XG4gICAgICAgIHNhdmVMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICAgICAgc2F2ZUxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzYXZlTGluayk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGJsb2IgPSB1cmlUb0Jsb2IodXJpKTtcbiAgICAgICAgICB2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJsO1xuICAgICAgICAgIHNhdmVMaW5rLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBvYmplY3QgVVJMcy4gRmFsbGluZyBiYWNrIHRvIHN0cmluZyBVUkwuJyk7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVyaTtcbiAgICAgICAgfVxuICAgICAgICBzYXZlTGluay5jbGljaygpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNhdmVMaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cub3Blbih1cmksICdfdGVtcCcsICdtZW51YmFyPW5vLHRvb2xiYXI9bm8sc3RhdHVzPW5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXJpVG9CbG9iKHVyaSkge1xuICAgIHZhciBieXRlU3RyaW5nID0gd2luZG93LmF0b2IodXJpLnNwbGl0KCcsJylbMV0pO1xuICAgIHZhciBtaW1lU3RyaW5nID0gdXJpLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihieXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgdmFyIGludEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGludEFycmF5W2ldID0gYnl0ZVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW2J1ZmZlcl0sIHt0eXBlOiBtaW1lU3RyaW5nfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNEYXRhVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2Z0FzUG5nID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzUG5nVXJpKGVsLCBvcHRpb25zLCBmdW5jdGlvbih1cmkpIHtcbiAgICAgIG91dCQuZG93bmxvYWQobmFtZSwgdXJpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGlmIGRlZmluZSBpcyBkZWZpbmVkIGNyZWF0ZSBhcyBhbiBBTUQgbW9kdWxlXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvdXQkO1xuICAgIH0pO1xuICB9XG5cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBtZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udHlwZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50aXRsZSxcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBsZXQgYWxlcnRzSWQgPSBgTWVzc2FnZXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHthbGVydHNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZGl2IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIGxldCBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dCgneCcpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==