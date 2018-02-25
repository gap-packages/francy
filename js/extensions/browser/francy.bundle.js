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
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true
        },
        SVG: {
          availableFonts: [],
          imageFont: null,
          preferredFont: null,
          webFont: "STIX-Web",
          linebreaks: { automatic: true }
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
        var radius = 0;
        node.each(function () {
          var bound = this.getBBox();
          if (radius < bound.width) {
            radius = bound.width;
          }
        });
        // Canvas Forces
        //let centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide().radius(radius / 2).iterations(3);

        //Generic gravity for the X position
        var forceX = d3.forceX(this.width).strength(0.05);

        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(-this.height).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(this.width).strength(0.3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YjVmNjVjYWZhODYxNGJhNjQ0NiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwicGFyZW50IiwiYXR0ciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1hcmdpbiIsImhlaWdodCIsInJlcXVpcmVzIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpbml0aWFsaXplIiwia2V5IiwiX2luaXRpYWxpemUiLCJSZWdpc3Rlck1hdGhKYXgiLCJSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyIsInN5bnRheEhpZ2hsaWdodCIsInNldFRpbWVvdXQiLCJNYXRoSmF4IiwiSHViIiwiQ29uZmlnIiwidGV4MmpheCIsImlubGluZU1hdGgiLCJkaXNwbGF5TWF0aCIsInByb2Nlc3NFc2NhcGVzIiwiU1ZHIiwiYXZhaWxhYmxlRm9udHMiLCJpbWFnZUZvbnQiLCJwcmVmZXJyZWRGb250Iiwid2ViRm9udCIsImxpbmVicmVha3MiLCJhdXRvbWF0aWMiLCJSZWdpc3RlciIsIlN0YXJ0dXBIb29rIiwic2VsZWN0QWxsIiwiZWFjaCIsInNlbGYiLCJtYXRoSmF4IiwiYXBwZW5kIiwicmVtb3ZlIiwiUXVldWUiLCJDb25maWd1cmVkIiwiZSIsImluZm8iLCJjbGFzc2VzIiwibWFwIiwiY2wiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsImpzb24iLCJyZXBsYWNlIiwibWF0Y2giLCJjbHMiLCJ0ZXN0IiwiQ2hhcnQiLCJheGlzIiwieVNjYWxlIiwieFNjYWxlIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJ0b29sdGlwIiwiY2FudmFzIiwiY2hhcnQiLCJrZXlzIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsImRvbWFpbiIsIngiLCJ5IiwiYWxsVmFsdWVzIiwiZm9yRWFjaCIsImNvbmNhdCIsIm1heCIsImQiLCJ4QXhpc0dyb3VwIiwiY2FsbCIsImF4aXNCb3R0b20iLCJzdHlsZSIsInRleHQiLCJ0aXRsZSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNob3dMZWdlbmQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNsaWNlIiwiZXhpdCIsImVudGVyIiwiaSIsIm1lcmdlIiwiY29sb3JzIiwiZGF0YXNldCIsImZyb20iLCJfIiwic2NhbGVTZXF1ZW50aWFsIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwic2V0dGluZ3MiLCJsb2FkIiwiQmFzZSIsImxvZyIsIkVycm9yIiwicGFydGlhbCIsInBhcnNlIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkdyYXBoIiwiY29udGV4dE1lbnUiLCJjYWxsYmFjayIsIm9uIiwiZXhlY3V0ZUNhbGxiYWNrIiwibWVzc2FnZXMiLCJldmVudCIsImNhbGxiYWNrcyIsImNiIiwidHJpZ2dlciIsImV4ZWN1dGUiLCJ0eXBlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwic3ltYm9sQ2lyY2xlIiwiTWVudSIsIm1lbnVzSXRlcmF0b3IiLCJoYXNOZXh0IiwibWVudUl0ZW0iLCJuZXh0IiwiZW50cnkiLCJhY3Rpb24iLCJodG1sIiwibWVudXMiLCJjb250ZW50Iiwic3ViTWVudXNJdGVyYXRvciIsIml0ZXJhdG9yIiwidHJhdmVyc2UiLCJhcnJheSIsIm5leHRJbmRleCIsIkNhbGxiYWNrSGFuZGxlciIsInJlcXVpcmVkQXJncyIsImNhbGxiYWNrT2JqIiwiX2V4ZWN1dGUiLCJjYWxiYWNrT2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1vZGFsIiwib3ZlcmxheSIsImhvbGRlciIsIlRvb2x0aXAiLCJIVE1MUGFyZW50IiwicG9zIiwibW91c2UiLCJTVkdQYXJlbnQiLCJ0YWJsZSIsInJvdyIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJmcmFtZSIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsIm9ucmVzaXplIiwiem9vbVRvRml0IiwiRnJhbWUiLCJtZW51IiwiYWRkIiwiZnJhbWVJZCIsInJlbmRlckNoaWxkcmVuIiwiSnNvblV0aWxzIiwiaW5wdXQiLCJqc29uUmVnZXgiLCJleGVjIiwibWltZSIsIk1JTUUiLCJDYW52YXMiLCJncmFwaCIsImNoYXJ0RmFjdG9yeSIsInpvb20iLCJ1cGRhdGVab29tIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzY2FsZSIsInRyYW5zZm9ybSIsInpvb21JZGVudGl0eSIsInRyYW5zbGF0ZSIsInpvb21lZCIsInN0b3BwZWQiLCJkZWZhdWx0UHJldmVudGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiYm91bmRzIiwiZ2V0QkJveCIsImNsaWVudEJvdW5kcyIsImZ1bGxXaWR0aCIsImZ1bGxIZWlnaHQiLCJtaWRYIiwibWlkWSIsIk1hdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYW52YXNJZCIsIlRyZWVHcmFwaCIsInJvb3QiLCJoaWVyYXJjaHkiLCJ0cmVlRGF0YSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsImxldmVsV2lkdGgiLCJjaGlsZENvdW50IiwibiIsIm5ld0hlaWdodCIsInRyZWVtYXAiLCJ0cmVlIiwic2l6ZSIsImNvbGxhcHNlZCIsImNvbGxhcHNlIiwidXBkYXRlIiwiX2NoaWxkcmVuIiwic291cmNlIiwibm9kZXMiLCJkZXNjZW5kYW50cyIsImxpbmtzIiwiZGVwdGgiLCJsaW5rR3JvdXAiLCJsaW5rIiwibGlua0VudGVyIiwibyIsImRpYWdvbmFsIiwicyIsIm5vZGVHcm91cCIsIm5vZGVFbnRlciIsInN5bWJvbCIsImdldFN5bWJvbCIsImJvdW5kIiwibm9kZVVwZGF0ZSIsImxheWVyIiwiX2FwcGx5RXZlbnRzIiwibm9kZU9uQ2xpY2siLCJjbGljayIsImNhbnZhc05vZGVzIiwiZGF0YU1hcCIsInJlZHVjZSIsIkNvbnRleHRNZW51IiwicHJldmVudERlZmF1bHQiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsIl9maWx0ZXJOZXdFbGVtZW50cyIsIm5vZGVzVG9BZGQiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZW1wdHkiLCJzaG93TmVpZ2hib3VycyIsImNvbm5lY3RlZE5vZGVzIiwicmFkaXVzIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJpdGVyYXRpb25zIiwiZm9yY2VYIiwiZm9yY2VZIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJ3YXJuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJzdHlsZXMiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJmb3JtYXQiLCJnZXRGb250TWltZVR5cGVGcm9tVXJsIiwicHJvY2Vzc0ZvbnRRdWV1ZSIsImZvbnRVcmwiLCJzdXBwb3J0ZWRGb3JtYXRzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4T2YiLCJxdWV1ZSIsImZvbnQiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcmVwYXJlU3ZnIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJpbm5lckhUTUwiLCJkZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm91dEh0bWwiLCJzdmdBc0RhdGFVcmkiLCJ1cmkiLCJzdmdBc1BuZ1VyaSIsImVuY29kZXJUeXBlIiwiZW5jb2Rlck9wdGlvbnMiLCJjb252ZXJ0VG9QbmciLCJ3IiwiaCIsImNvbnRleHQiLCJjYW52ZyIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicG5nIiwiU2VjdXJpdHlFcnJvciIsImF0b2IiLCJkb3dubG9hZCIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJ1cmlUb0Jsb2IiLCJzYXZlTGluayIsImRvd25sb2FkU3VwcG9ydGVkIiwiZGlzcGxheSIsImJvZHkiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25jbGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3ZnIiwiZGVmaW5lIiwiTWVzc2FnZSIsImFsZXJ0c0lkIiwibWVzc2FnZUVudGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDQyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxvSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlDLElBQUlDLE1BQUosS0FBZUwsUUFBbkIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJTSxTQUFKLENBQWMsaURBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLQyxNQUFMLEtBQWdCQyxTQUFoQixJQUE2QixPQUFPLE1BQUtELE1BQVosS0FBdUIsVUFBeEQsRUFBb0U7QUFDbEUsWUFBTSxJQUFJRCxTQUFKLENBQWMsa0NBQWQsQ0FBTjtBQUNEO0FBQ0QsUUFBSSxNQUFLRyxRQUFMLEtBQWtCRCxTQUF0QixFQUFpQztBQUMvQixZQUFLRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IscUNBQWxCO0FBQ0Q7QUFDRCxVQUFLQyxPQUFMLEdBQWVKLFNBQWY7QUFDQSxVQUFLSyxrQkFBTCxHQUEwQixHQUExQixDQVowRCxDQVkzQjtBQVoyQjtBQWEzRDs7OztrQ0FFYSxDQUFFOzs7d0JBRUM7QUFDZixhQUFPLEtBQUtDLE9BQUwsQ0FBYVosUUFBYixDQUFzQlUsT0FBdEIsQ0FBOEJHLElBQTlCLEdBQXFDQyxPQUFyQyxDQUE2Q0MsV0FBN0MsT0FBK0QsS0FBL0QsR0FBdUVDLEdBQUdDLE1BQUgsQ0FBVSxLQUFLTCxPQUFMLENBQWFaLFFBQWIsQ0FBc0JVLE9BQXRCLENBQThCRyxJQUE5QixHQUFxQ0ssVUFBL0MsQ0FBdkUsR0FBb0ksS0FBS04sT0FBTCxDQUFhWixRQUFiLENBQXNCVSxPQUFqSztBQUNEOzs7d0JBRWU7QUFDZCxhQUFPLEtBQUtFLE9BQUwsQ0FBYVosUUFBYixDQUFzQlUsT0FBdEIsQ0FBOEJHLElBQTlCLEdBQXFDQyxPQUFyQyxDQUE2Q0MsV0FBN0MsT0FBK0QsS0FBL0QsR0FBdUUsS0FBS0gsT0FBTCxDQUFhWixRQUFiLENBQXNCVSxPQUF0QixDQUE4Qk8sTUFBOUIsQ0FBcUMsS0FBckMsQ0FBdkUsR0FBcUgsS0FBS0wsT0FBTCxDQUFhWixRQUFiLENBQXNCVSxPQUFsSjtBQUNEOzs7d0JBRVk7QUFDWCxhQUFPLEtBQUtFLE9BQUwsQ0FBYVosUUFBYixDQUFzQlUsT0FBN0I7QUFDRDs7O3dCQUVZO0FBQ1gsYUFBTyxFQUFFUyxLQUFLLEVBQVAsRUFBV0MsT0FBTyxFQUFsQixFQUFzQkMsUUFBUSxFQUE5QixFQUFrQ0MsTUFBTSxFQUF4QyxFQUFQO0FBQ0Q7Ozt3QkFFVztBQUNWLFVBQUlDLFFBQVEsQ0FBQyxLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsT0FBakIsQ0FBRCxJQUE4QlQsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0JKLElBQWxCLEdBQXlCYSxxQkFBekIsR0FBaURILEtBQTNGO0FBQ0EsYUFBT0EsUUFBUSxLQUFLSSxNQUFMLENBQVlMLElBQXBCLEdBQTJCLEtBQUtLLE1BQUwsQ0FBWVAsS0FBOUM7QUFDRDs7O3dCQUVZO0FBQ1gsVUFBSVEsU0FBUyxDQUFDLEtBQUtKLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixRQUFqQixDQUFELElBQStCVCxHQUFHQyxNQUFILENBQVUsTUFBVixFQUFrQkosSUFBbEIsR0FBeUJhLHFCQUF6QixHQUFpREUsTUFBN0Y7QUFDQSxhQUFPQSxTQUFTLEtBQUtELE1BQUwsQ0FBWVIsR0FBckIsR0FBMkIsS0FBS1EsTUFBTCxDQUFZTixNQUE5QztBQUNEOzs7Ozs7a0JBM0NrQnZCLFE7Ozs7Ozs7Ozs7OztRQ0pMK0IsUSxHQUFBQSxRO0FBQVQsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxTQUFTQyxTQUFULENBQW1CNUIsTUFBbkIsRUFBMkI2QixJQUEzQixFQUFpQ0MsVUFBakMsRUFBNkM7QUFDbEQsUUFBSUMsV0FBV0QsV0FBV0UsS0FBMUI7O0FBRUFGLGVBQVdFLEtBQVgsR0FBbUIsWUFBVztBQUM1QixVQUFJLENBQUNDLFFBQVFDLFlBQVksS0FBS0MsSUFBakIsRUFBdUJSLEtBQXZCLENBQVIsQ0FBTCxFQUE2QztBQUMzQyxhQUFLdEIsTUFBTCxDQUFZQyxLQUFaLG9CQUFtQ3FCLEtBQW5DO0FBQ0E7QUFDRDtBQUNELGFBQU9JLFNBQVNLLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQixDQUFQO0FBQ0QsS0FORDs7QUFRQSxXQUFPUCxVQUFQO0FBQ0QsR0FaRDtBQWFEOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJJLEdBQXJCLEVBQTBCQyxZQUExQixFQUF3Qzs7QUFFdEMsTUFBSUMsTUFBTUYsR0FBVjs7QUFFQSxNQUFJRSxPQUFPRCxZQUFYLEVBQXlCO0FBQ3ZCLFFBQUlFLGFBQWFGLGFBQWFHLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBakI7O0FBRHVCO0FBQUE7QUFBQTs7QUFBQTtBQUd2QiwyQkFBcUJELFVBQXJCLDhIQUFpQztBQUFBLFlBQXhCRSxRQUF3Qjs7QUFDL0IsWUFBSSxDQUFDSCxJQUFJSSxjQUFKLENBQW1CRCxRQUFuQixDQUFMLEVBQW1DO0FBQ2pDSCxnQkFBTXJDLFNBQU47QUFDQTtBQUNELFNBSEQsTUFJSztBQUNIcUMsZ0JBQU1BLElBQUlHLFFBQUosQ0FBTjtBQUNEO0FBQ0Y7QUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVl4Qjs7QUFFRCxTQUFPSCxHQUFQO0FBQ0Q7O0FBRUQsU0FBU1AsT0FBVCxDQUFpQkssR0FBakIsRUFBc0I7QUFDcEIsU0FBT0EsUUFBU0EsZUFBZU8sS0FBZixJQUF3QlAsSUFBSVEsTUFBN0IsSUFBeUNSLGVBQWVTLE1BQWYsSUFBeUJBLE9BQU9DLE1BQVAsQ0FBY1YsR0FBZCxFQUFtQlEsTUFBN0YsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztRQ3ZDZUcsVSxHQUFBQSxVO0FBQVQsU0FBU0EsVUFBVCxHQUFzQjtBQUMzQixTQUFPLFVBQVVqRCxNQUFWLEVBQWtCa0QsR0FBbEIsRUFBdUJwQixVQUF2QixFQUFtQztBQUN4QyxRQUFJQyxXQUFXRCxXQUFXRSxLQUExQjs7QUFFQUYsZUFBV0UsS0FBWCxHQUFtQixZQUFXO0FBQzVCLFdBQUttQixXQUFMO0FBQ0EsYUFBT3BCLFNBQVNLLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQixDQUFQO0FBQ0QsS0FIRDtBQUlBLFdBQU9QLFVBQVA7QUFDRCxHQVJEO0FBU0QsQzs7Ozs7Ozs7Ozs7O1FDTmVzQixlLEdBQUFBLGU7UUF5REFDLDZCLEdBQUFBLDZCO1FBZ0JBQyxlLEdBQUFBLGU7O0FBN0VoQjs7Ozs7O0FBRUE7O0FBRU8sU0FBU0YsZUFBVCxDQUF5QjdDLE9BQXpCLEVBQWtDO0FBQ3ZDLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ2RnRCxhQUFXLFlBQU07QUFDZixRQUFJO0FBQ0ZDLGNBQVFDLEdBQVIsQ0FBWUMsTUFBWixDQUFtQjtBQUNqQkMsaUJBQVM7QUFDUEMsc0JBQVksQ0FDVixDQUFDLEdBQUQsRUFBTSxHQUFOLENBRFUsRUFFVixDQUFDLEtBQUQsRUFBUSxLQUFSLENBRlUsQ0FETDtBQUtQQyx1QkFBYSxDQUNYLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FEVyxFQUVYLENBQUMsS0FBRCxFQUFRLEtBQVIsQ0FGVyxDQUxOO0FBU1BDLDBCQUFnQjtBQVRULFNBRFE7QUFZakJDLGFBQUs7QUFDSEMsMEJBQWdCLEVBRGI7QUFFSEMscUJBQVcsSUFGUjtBQUdIQyx5QkFBZSxJQUhaO0FBSUhDLG1CQUFTLFVBSk47QUFLSEMsc0JBQVksRUFBRUMsV0FBVyxJQUFiO0FBTFQ7QUFaWSxPQUFuQjs7QUFxQkFiLGNBQVFDLEdBQVIsQ0FBWWEsUUFBWixDQUFxQkMsV0FBckIsQ0FBaUMsS0FBakMsRUFBd0MsWUFBVztBQUNqRGhCLG1CQUFXLFlBQU07QUFDZmhELGtCQUFRaUUsU0FBUixDQUFrQixlQUFsQixFQUFtQ0MsSUFBbkMsQ0FBd0MsWUFBVztBQUNqRCxnQkFBSUMsT0FBTzdELEdBQUdDLE1BQUgsQ0FBVSxJQUFWLENBQVg7QUFBQSxnQkFDRTZELFVBQVVELEtBQUs1RCxNQUFMLENBQVksZUFBWixDQURaO0FBRUEsZ0JBQUk2RCxRQUFRakUsSUFBUixFQUFKLEVBQW9CO0FBQ2xCNkMseUJBQVcsWUFBTTtBQUNmb0Isd0JBQVFyRCxJQUFSLENBQWEsR0FBYixFQUFrQm9ELEtBQUtwRCxJQUFMLENBQVUsR0FBVixDQUFsQjtBQUNBcUQsd0JBQVFyRCxJQUFSLENBQWEsR0FBYixFQUFrQixDQUFDLEVBQW5CO0FBQ0FULG1CQUFHQyxNQUFILENBQVU0RCxLQUFLaEUsSUFBTCxHQUFZSyxVQUF0QixFQUFrQzZELE1BQWxDLENBQXlDLFlBQVc7QUFDbEQseUJBQU9ELFFBQVFqRSxJQUFSLEVBQVA7QUFDRCxpQkFGRDtBQUdBZ0UscUJBQUtGLFNBQUwsQ0FBZSxHQUFmLEVBQW9CSyxNQUFwQjtBQUNELGVBUEQsRUFPRyxFQVBIO0FBUUQ7QUFDRixXQWJEO0FBY0QsU0FmRCxFQWVHLEdBZkg7QUFnQkQsT0FqQkQ7O0FBbUJBckIsY0FBUUMsR0FBUixDQUFZcUIsS0FBWixDQUFrQixDQUFDLFNBQUQsRUFBWXRCLFFBQVFDLEdBQXBCLEVBQXlCbEQsUUFBUUcsSUFBUixFQUF6QixDQUFsQjs7QUFFQThDLGNBQVFDLEdBQVIsQ0FBWXNCLFVBQVo7QUFDRCxLQTVDRCxDQTZDQSxPQUFPQyxDQUFQLEVBQVU7QUFDUixVQUFJQSxFQUFFbkQsSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQy9CLCtCQUFhb0QsSUFBYixDQUFrQixtQ0FBbEIsRUFBdURELENBQXZEO0FBQ0Q7QUFDRjtBQUVGLEdBcERELEVBb0RHLEVBcERIO0FBcUREOztBQUVNLFNBQVMzQiw2QkFBVCxDQUF1QzZCLE9BQXZDLEVBQWdEO0FBQ3JEO0FBQ0EsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDZCxNQUFJO0FBQ0ZBLFlBQVFDLEdBQVIsQ0FBWSxVQUFDQyxFQUFELEVBQVE7QUFDbEJDLGNBQVFDLGdCQUFSLENBQXlCQyxlQUF6QixDQUF5Q0gsRUFBekM7QUFDRCxLQUZEO0FBR0QsR0FKRCxDQUtBLE9BQU9KLENBQVAsRUFBVTtBQUNSLFFBQUlBLEVBQUVuRCxJQUFGLEtBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsNkJBQWFvRCxJQUFiLENBQWtCLDJDQUFsQixFQUErREQsQ0FBL0Q7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDTyxTQUFTMUIsZUFBVCxDQUF5QmtDLElBQXpCLEVBQStCO0FBQ3BDQSxTQUFPQSxLQUFLQyxPQUFMLENBQWEsSUFBYixFQUFtQixPQUFuQixFQUE0QkEsT0FBNUIsQ0FBb0MsSUFBcEMsRUFBMEMsTUFBMUMsRUFBa0RBLE9BQWxELENBQTBELElBQTFELEVBQWdFLE1BQWhFLENBQVA7QUFDQSxTQUFPRCxLQUFLQyxPQUFMLENBQWEscUdBQWIsRUFBb0gsVUFBU0MsS0FBVCxFQUFnQjtBQUN6SSxRQUFJQyxNQUFNLFFBQVY7QUFDQSxRQUFJLEtBQUtDLElBQUwsQ0FBVUYsS0FBVixDQUFKLEVBQXNCO0FBQ3BCLFVBQUksS0FBS0UsSUFBTCxDQUFVRixLQUFWLENBQUosRUFBc0I7QUFDcEJDLGNBQU0sS0FBTjtBQUNELE9BRkQsTUFHSztBQUNIQSxjQUFNLFFBQU47QUFDRDtBQUNGLEtBUEQsTUFRSyxJQUFJLGFBQWFDLElBQWIsQ0FBa0JGLEtBQWxCLENBQUosRUFBOEI7QUFDakNDLFlBQU0sU0FBTjtBQUNELEtBRkksTUFHQSxJQUFJLE9BQU9DLElBQVAsQ0FBWUYsS0FBWixDQUFKLEVBQXdCO0FBQzNCQyxZQUFNLE1BQU47QUFDRDtBQUNELFdBQU8sa0JBQWtCQSxHQUFsQixHQUF3QixJQUF4QixHQUErQkQsS0FBL0IsR0FBdUMsU0FBOUM7QUFDRCxHQWpCTSxDQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0Q7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCRyxLOzs7QUFFbkIsdUJBQTREO0FBQUEsNEJBQTlDakcsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsOEdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxVQUFLZ0csSUFBTCxHQUFZM0YsU0FBWjtBQUNBLFVBQUs0RixNQUFMLEdBQWM1RixTQUFkO0FBQ0EsVUFBSzZGLE1BQUwsR0FBYzdGLFNBQWQ7QUFDQSxVQUFLOEYsUUFBTCxHQUFnQjlGLFNBQWhCO0FBQ0EsVUFBSytGLFlBQUwsR0FBb0IvRixTQUFwQjtBQUNBLFVBQUtnRyxPQUFMLEdBQWVoRyxTQUFmO0FBUDBEO0FBUTNEOzs7O2tDQUVhO0FBQUE7O0FBQ1osV0FBS2dHLE9BQUwsR0FBZSxzQkFBWSxLQUFLMUYsT0FBakIsQ0FBZjs7QUFFQSxXQUFLRixPQUFMLEdBQWUsS0FBS2MsTUFBTCxDQUFZUCxNQUFaLENBQW1CLGtCQUFuQixDQUFmOztBQUVBLFdBQUtnRixJQUFMLEdBQVksS0FBSzNELElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCUCxJQUFuQztBQUNBLFdBQUtHLFFBQUwsR0FBZ0IsS0FBSzlELElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCbEUsSUFBdkM7QUFDQSxXQUFLK0QsWUFBTCxHQUFvQm5ELE9BQU91RCxJQUFQLENBQVksS0FBS0wsUUFBakIsQ0FBcEI7O0FBRUEsV0FBS0QsTUFBTCxHQUFjbkYsR0FBRzBGLFdBQUgsR0FBaUJDLEtBQWpCLENBQXVCLENBQUMsQ0FBRCxFQUFJLEtBQUtwRixLQUFULENBQXZCLEVBQXdDcUYsTUFBeEMsQ0FBK0MsS0FBS1gsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQTNELENBQWQ7QUFDQSxXQUFLVixNQUFMLEdBQWNsRixHQUFHMEYsV0FBSCxHQUFpQkMsS0FBakIsQ0FBdUIsQ0FBQyxLQUFLL0UsTUFBTixFQUFjLENBQWQsQ0FBdkIsRUFBeUNnRixNQUF6QyxDQUFnRCxLQUFLWCxJQUFMLENBQVVhLENBQVYsQ0FBWUYsTUFBNUQsQ0FBZDs7QUFFQSxXQUFLRyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsV0FBS1YsWUFBTCxDQUFrQlcsT0FBbEIsQ0FBMEI7QUFBQSxlQUFPLE9BQUtELFNBQUwsR0FBaUIsT0FBS0EsU0FBTCxDQUFlRSxNQUFmLENBQXNCLE9BQUtiLFFBQUwsQ0FBYy9DLEdBQWQsQ0FBdEIsQ0FBeEI7QUFBQSxPQUExQjs7QUFFQSxVQUFJLENBQUMsS0FBSzRDLElBQUwsQ0FBVWEsQ0FBVixDQUFZRixNQUFaLENBQW1CM0QsTUFBeEIsRUFBZ0M7QUFDOUIsYUFBS2lELE1BQUwsQ0FBWVUsTUFBWixDQUFtQixDQUFDLENBQUQsRUFBSTVGLEdBQUdrRyxHQUFILENBQU8sS0FBS0gsU0FBWixFQUF1QjtBQUFBLGlCQUFLSSxDQUFMO0FBQUEsU0FBdkIsQ0FBSixDQUFuQjtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLbEIsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQVosQ0FBbUIzRCxNQUF4QixFQUFnQztBQUM5QixhQUFLa0QsTUFBTCxDQUFZUyxNQUFaLENBQW1CLENBQUMsQ0FBRCxFQUFJLEtBQUtHLFNBQUwsQ0FBZTlELE1BQWYsR0FBd0IsS0FBS29ELFlBQUwsQ0FBa0JwRCxNQUE5QyxDQUFuQjtBQUNEO0FBQ0Y7OztrQ0FFYTtBQUNaO0FBQ0EsVUFBSW1FLGFBQWEsS0FBSzFHLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsaUJBQXZCLENBQWpCOztBQUVBLFVBQUksQ0FBQ3lDLFdBQVd2RyxJQUFYLEVBQUwsRUFBd0I7QUFDdEJ1RyxxQkFBYSxLQUFLMUcsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWI7QUFDRDs7QUFFRDJGLGlCQUFXekMsU0FBWCxDQUFxQixHQUFyQixFQUEwQkssTUFBMUI7O0FBRUE7QUFDQW9DLGlCQUNHM0YsSUFESCxDQUNRLFdBRFIsbUJBQ29DLEtBQUtHLE1BRHpDLFFBRUd5RixJQUZILENBRVFyRyxHQUFHc0csVUFBSCxDQUFjLEtBQUtuQixNQUFuQixDQUZSLEVBR0dwQixNQUhILENBR1UsTUFIVixFQUlHdEQsSUFKSCxDQUlRLElBSlIsRUFJYyxFQUpkLEVBS0dBLElBTEgsQ0FLUSxJQUxSLEVBS2MsS0FBS0YsS0FBTCxHQUFhLENBTDNCLEVBTUdFLElBTkgsQ0FNUSxNQU5SLEVBTWdCLE9BTmhCLEVBT0dBLElBUEgsQ0FPUSxPQVBSLEVBT2lCLGFBUGpCLEVBUUc4RixLQVJILENBUVMsYUFSVCxFQVF3QixLQVJ4QixFQVNHQyxJQVRILENBU1EsS0FBS3ZCLElBQUwsQ0FBVVksQ0FBVixDQUFZWSxLQVRwQjs7QUFXQTtBQUNBLFVBQUlDLGFBQWEsS0FBS2hILE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsaUJBQXZCLENBQWpCOztBQUVBLFVBQUksQ0FBQytDLFdBQVc3RyxJQUFYLEVBQUwsRUFBd0I7QUFDdEI2RyxxQkFBYSxLQUFLaEgsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWI7QUFDRDs7QUFFRGlHLGlCQUFXL0MsU0FBWCxDQUFxQixHQUFyQixFQUEwQkssTUFBMUI7O0FBRUE7QUFDQTBDLGlCQUNHTCxJQURILENBQ1FyRyxHQUFHMkcsUUFBSCxDQUFZLEtBQUt6QixNQUFqQixDQURSLEVBRUduQixNQUZILENBRVUsTUFGVixFQUdHdEQsSUFISCxDQUdRLElBSFIsRUFHYyxDQUFDLEVBSGYsRUFJR0EsSUFKSCxDQUlRLElBSlIsRUFJYyxLQUFLRyxNQUFMLEdBQWMsQ0FKNUIsRUFLR0gsSUFMSCxDQUtRLE1BTFIsRUFLZ0IsT0FMaEIsRUFNR0EsSUFOSCxDQU1RLE9BTlIsRUFNaUIsYUFOakIsRUFPRzhGLEtBUEgsQ0FPUyxhQVBULEVBT3dCLEtBUHhCLEVBUUdDLElBUkgsQ0FRUSxLQUFLdkIsSUFBTCxDQUFVYSxDQUFWLENBQVlXLEtBUnBCO0FBU0Q7OztvQ0FFZTtBQUNkLFVBQUksS0FBS25GLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCb0IsVUFBM0IsRUFBdUM7O0FBRXJDLFlBQUlDLGNBQWMsS0FBS25ILE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWxCOztBQUVBLFlBQUksQ0FBQ2tELFlBQVloSCxJQUFaLEVBQUwsRUFBeUI7QUFDdkJnSCx3QkFBYyxLQUFLbkgsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGVBQXZDLENBQWQ7QUFDRDs7QUFFRDtBQUNBb0csb0JBQVlsRCxTQUFaLENBQXNCLEdBQXRCLEVBQTJCSyxNQUEzQjs7QUFFQSxZQUFJOEMsU0FBU0QsWUFBWWxELFNBQVosQ0FBc0IsR0FBdEIsRUFBMkJyQyxJQUEzQixDQUFnQyxLQUFLK0QsWUFBTCxDQUFrQjBCLEtBQWxCLEVBQWhDLENBQWI7O0FBRUFELGVBQU9FLElBQVAsR0FBY2hELE1BQWQ7O0FBRUE4QyxpQkFBU0EsT0FBT0csS0FBUCxHQUNObEQsTUFETSxDQUNDLEdBREQsRUFFTnRELElBRk0sQ0FFRCxXQUZDLEVBRVksVUFBQzBGLENBQUQsRUFBSWUsQ0FBSjtBQUFBLGtDQUF5QkEsSUFBSSxFQUE3QjtBQUFBLFNBRlosRUFHTkMsS0FITSxDQUdBTCxNQUhBLENBQVQ7O0FBS0FBLGVBQU8vQyxNQUFQLENBQWMsTUFBZCxFQUNHdEQsSUFESCxDQUNRLEdBRFIsRUFDYSxLQUFLRixLQUFMLEdBQWEsRUFEMUIsRUFFR0UsSUFGSCxDQUVRLE9BRlIsRUFFaUIsRUFGakIsRUFHR0EsSUFISCxDQUdRLFFBSFIsRUFHa0IsRUFIbEIsRUFJRzhGLEtBSkgsQ0FJUyxNQUpULEVBSWlCLFVBQUNKLENBQUQsRUFBSWUsQ0FBSjtBQUFBLGlCQUFVbEMsTUFBTW9DLE1BQU4sQ0FBYUYsSUFBSSxDQUFqQixDQUFWO0FBQUEsU0FKakI7O0FBTUFKLGVBQU8vQyxNQUFQLENBQWMsTUFBZCxFQUNHdEQsSUFESCxDQUNRLEdBRFIsRUFDYSxLQUFLRixLQUFMLEdBQWEsRUFEMUIsRUFFR0UsSUFGSCxDQUVRLEdBRlIsRUFFYSxDQUZiLEVBR0dBLElBSEgsQ0FHUSxJQUhSLEVBR2MsT0FIZCxFQUlHOEYsS0FKSCxDQUlTLGFBSlQsRUFJd0IsS0FKeEIsRUFLR0MsSUFMSCxDQUtRO0FBQUEsaUJBQUtMLENBQUw7QUFBQSxTQUxSO0FBTUQ7QUFDRjs7OzRCQUVja0IsTyxFQUFTbEcsSyxFQUFPO0FBQzdCLGFBQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxTQUFYLEVBQXNCLFFBQVFrRyxPQUE5QixFQUFQLEVBQWdELEtBQUssRUFBRSxTQUFTLE9BQVgsRUFBb0IsUUFBUWxHLEtBQTVCLEVBQXJELEVBQVA7QUFDRDs7O2dDQU1rQitFLEcsRUFBSztBQUN0QixhQUFPbEUsTUFBTXNGLElBQU4sQ0FBVyxJQUFJdEYsS0FBSixDQUFVa0UsR0FBVixDQUFYLEVBQTJCLFVBQUNxQixDQUFELEVBQUlMLENBQUo7QUFBQSxlQUFVQSxDQUFWO0FBQUEsT0FBM0IsRUFBd0M1QyxHQUF4QyxDQUE0QztBQUFBLGVBQUt1QixDQUFMO0FBQUEsT0FBNUMsQ0FBUDtBQUNEOzs7d0JBTm1CO0FBQ2xCLGFBQU83RixHQUFHd0gsZUFBSCxHQUFxQjVCLE1BQXJCLENBQTRCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBNUIsRUFBc0M2QixZQUF0QyxDQUFtRHpILEdBQUcwSCxrQkFBdEQsQ0FBUDtBQUNEOzs7Ozs7a0JBekhrQjFDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7Ozs7Ozs7OztJQUVxQjJDLFM7OztBQUVuQiwyQkFBNEQ7QUFBQSw0QkFBOUM1SSxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxzSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlDLElBQUlDLE1BQUosS0FBZXdJLFNBQW5CLEVBQThCO0FBQzVCLFlBQU0sSUFBSXZJLFNBQUosQ0FBYyxrREFBZCxDQUFOO0FBQ0Q7QUFDRCxVQUFLd0ksU0FBTCxHQUFpQixFQUFqQjtBQUwwRDtBQU0zRDs7Ozt3QkFFR0MsUSxFQUFVO0FBQ1osV0FBS0QsU0FBTCxDQUFlRSxJQUFmLENBQW9CRCxRQUFwQjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7cUNBRWdCO0FBQ2Y7QUFDQSxVQUFJakksVUFBVSxLQUFLQSxPQUFuQjtBQUNBQSxjQUFRWixRQUFSLEdBQW1CLElBQW5CO0FBQ0E7QUFKZTtBQUFBO0FBQUE7O0FBQUE7QUFLZiw2QkFBcUIsS0FBSzRJLFNBQTFCLDhIQUFxQztBQUFBLGNBQTVCQyxRQUE0Qjs7QUFDbkNBLG1CQUFTRSxRQUFULENBQWtCbkksT0FBbEIsRUFBMkJvSSxJQUEzQixDQUFnQyxLQUFLMUcsSUFBckMsRUFBMkNqQyxNQUEzQztBQUNEO0FBUGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFoQjs7Ozs7O2tCQXZCa0JzSSxTOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCTSxJO0FBRW5CLHNCQUFxRTtBQUFBLDRCQUF2RGxKLE9BQXVEO0FBQUEsUUFBdkRBLE9BQXVELGdDQUE3QyxLQUE2QztBQUFBLDZCQUF0Q0MsUUFBc0M7QUFBQSxRQUF0Q0EsUUFBc0MsaUNBQTNCLE1BQTJCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFDbkUsU0FBSzhJLFFBQUwsQ0FBYyxFQUFFaEosU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFBZDtBQUNBOzs7QUFHQSxTQUFLaUosR0FBTCxHQUFXLHFCQUFXLEtBQUt0SSxPQUFoQixDQUFYO0FBQ0Q7Ozs7b0NBRWdEO0FBQUEsVUFBdENiLE9BQXNDLFNBQXRDQSxPQUFzQztBQUFBLFVBQTdCQyxRQUE2QixTQUE3QkEsUUFBNkI7QUFBQSxVQUFuQkMsZUFBbUIsU0FBbkJBLGVBQW1COztBQUMvQyxXQUFLVyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxJQUFnQixFQUEvQjtBQUNBLFVBQUksQ0FBQyxLQUFLQSxPQUFMLENBQWFYLGVBQWQsSUFBaUMsQ0FBQ0EsZUFBdEMsRUFBdUQ7QUFDckQsY0FBTSxJQUFJa0osS0FBSixDQUFVLHdHQUFWLENBQU47QUFDRDtBQUNELFVBQUksQ0FBQyxLQUFLdkksT0FBTCxDQUFhWixRQUFkLElBQTBCLENBQUNBLFFBQS9CLEVBQXlDO0FBQ3ZDLGNBQU0sSUFBSW1KLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0Q7QUFDRDs7Ozs7O0FBTUEsV0FBS3ZJLE9BQUwsQ0FBYWIsT0FBYixHQUF1QkEsV0FBVyxLQUFLYSxPQUFMLENBQWFiLE9BQS9DO0FBQ0EsV0FBS2EsT0FBTCxDQUFhWixRQUFiLEdBQXdCQSxZQUFZLEtBQUtZLE9BQUwsQ0FBYVosUUFBakQ7QUFDQSxXQUFLWSxPQUFMLENBQWFYLGVBQWIsR0FBK0JBLG1CQUFtQixLQUFLVyxPQUFMLENBQWFYLGVBQS9EO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozt5QkFFSTBGLEksRUFBTXlELE8sRUFBUztBQUNsQixVQUFJOUcsT0FBTyxvQkFBVStHLEtBQVYsQ0FBZ0IxRCxJQUFoQixFQUFzQnlELE9BQXRCLENBQVg7QUFDQSxVQUFJOUcsSUFBSixFQUFVO0FBQ1IsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7O3dCQUVZO0FBQ1gsYUFBTyxLQUFLNEcsR0FBWjtBQUNEOzs7Ozs7a0JBeENrQkQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7OztJQUdxQkssTTs7QUFFbkI7Ozs7QUFJQSxvQkFBc0M7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQXhCdkosT0FBd0I7QUFBQSxRQUF4QkEsT0FBd0IsZ0NBQWQsS0FBYzs7QUFBQTs7QUFDcEMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3dKLE9BQUwsR0FBZUEsT0FBZjtBQUNEOztBQUVEOzs7Ozs7OzswQkFJTUMsTyxFQUFTO0FBQ2IsVUFBSSxLQUFLekosT0FBVCxFQUFrQjtBQUNoQixhQUFLd0osT0FBTCxDQUFhOUksS0FBYixDQUFtQjZJLE9BQU9HLE9BQVAsQ0FBZSxPQUFmLEVBQXdCRCxPQUF4QixDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7eUJBSUtBLE8sRUFBUztBQUNaLFdBQUtELE9BQUwsQ0FBYW5FLElBQWIsQ0FBa0JrRSxPQUFPRyxPQUFQLENBQWUsTUFBZixFQUF1QkQsT0FBdkIsQ0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBS01BLE8sRUFBU0UsTSxFQUFPO0FBQ3BCLFdBQUtILE9BQUwsQ0FBYUcsS0FBYixDQUFtQkosT0FBT0csT0FBUCxDQUFlLE9BQWYsRUFBd0JELE9BQXhCLENBQW5CLEVBQXFERSxNQUFyRDtBQUNEOztBQUVEOzs7Ozs7Ozt5QkFLS0YsTyxFQUFTRSxLLEVBQU87QUFDbkJBLGNBQVFBLFNBQVMsRUFBakI7QUFDQSxXQUFLSCxPQUFMLENBQWFHLEtBQWIsQ0FBbUJKLE9BQU9HLE9BQVAsQ0FBZSxNQUFmLEVBQXVCRCxPQUF2QixDQUFuQixFQUFvREUsS0FBcEQ7QUFDRDs7QUFFRDs7Ozs7Ozs7NEJBS2VDLEssRUFBT0gsTyxFQUFTO0FBQzdCLG1CQUFXRyxLQUFYLFlBQXVCLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUF2QixXQUFxREwsT0FBckQ7QUFDRDs7Ozs7O2tCQXZEa0JGLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQlEsSzs7O0FBRW5CLHVCQUE0RDtBQUFBLDRCQUE5Qy9KLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHlHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7OztrQ0FFYTtBQUNaLFdBQUtTLE9BQUwsR0FBZSxLQUFLYyxNQUFMLENBQVlQLE1BQVosQ0FBbUIsa0JBQW5CLENBQWY7QUFDRDs7O2lDQUVZUCxPLEVBQVM7QUFDcEIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7O0FBRWQsVUFBSTRGLFVBQVUsc0JBQVksS0FBSzFGLE9BQWpCLENBQWQ7QUFDQSxVQUFJbUosY0FBYywwQkFBZ0IsS0FBS25KLE9BQXJCLENBQWxCO0FBQ0EsVUFBSW9KLFdBQVcsdUJBQWEsS0FBS3BKLE9BQWxCLENBQWY7O0FBRUFGLGNBQ0d1SixFQURILENBQ00sYUFETixFQUNxQixVQUFTOUMsQ0FBVCxFQUFZO0FBQzdCQSxZQUFJQSxFQUFFN0UsSUFBRixJQUFVNkUsQ0FBZDtBQUNBO0FBQ0E0QyxvQkFBWWYsSUFBWixDQUFpQjdCLENBQWpCLEVBQW9CLElBQXBCLEVBQTBCOUcsTUFBMUI7QUFDQTtBQUNBNkosd0JBQWdCN0MsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkJGLENBQTNCLEVBQThCLGFBQTlCO0FBQ0QsT0FQSCxFQVFHOEMsRUFSSCxDQVFNLE9BUk4sRUFRZSxVQUFTOUMsQ0FBVCxFQUFZO0FBQ3ZCQSxZQUFJQSxFQUFFN0UsSUFBRixJQUFVNkUsQ0FBZDtBQUNBO0FBQ0ErQyx3QkFBZ0I3QyxJQUFoQixDQUFxQixJQUFyQixFQUEyQkYsQ0FBM0IsRUFBOEIsT0FBOUI7QUFDRCxPQVpILEVBYUc4QyxFQWJILENBYU0sVUFiTixFQWFrQixVQUFTOUMsQ0FBVCxFQUFZO0FBQzFCQSxZQUFJQSxFQUFFN0UsSUFBRixJQUFVNkUsQ0FBZDtBQUNBO0FBQ0ErQyx3QkFBZ0I3QyxJQUFoQixDQUFxQixJQUFyQixFQUEyQkYsQ0FBM0IsRUFBOEIsVUFBOUI7QUFDRCxPQWpCSCxFQWtCRzhDLEVBbEJILENBa0JNLFlBbEJOLEVBa0JvQixhQUFLO0FBQ3JCOUMsWUFBSUEsRUFBRTdFLElBQUYsSUFBVTZFLENBQWQ7QUFDQTtBQUNBYixnQkFBUTBDLElBQVIsQ0FBYTdCLEVBQUVnRCxRQUFmLEVBQXlCLElBQXpCLEVBQStCOUosTUFBL0I7QUFDRCxPQXRCSCxFQXVCRzRKLEVBdkJILENBdUJNLFlBdkJOLEVBdUJvQixZQUFNO0FBQ3RCO0FBQ0EzRCxnQkFBUS9GLFFBQVI7QUFDRCxPQTFCSDs7QUE0QkEsZUFBUzJKLGVBQVQsQ0FBeUI1SCxJQUF6QixFQUErQjhILEtBQS9CLEVBQXNDO0FBQ3BDLFlBQUk5SCxLQUFLK0gsU0FBVCxFQUFvQjtBQUNsQm5ILGlCQUFPQyxNQUFQLENBQWNiLEtBQUsrSCxTQUFuQixFQUE4QnJELE9BQTlCLENBQXNDLFVBQUNzRCxFQUFELEVBQVE7QUFDNUM7QUFDQUEsZUFBR0MsT0FBSCxLQUFlSCxLQUFmLElBQXdCSixTQUFTaEIsSUFBVCxDQUFjLEVBQUVnQixVQUFVTSxFQUFaLEVBQWQsRUFBZ0MsSUFBaEMsRUFBc0NFLE9BQXRDLEVBQXhCO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7QUFDRjs7OzhCQU1nQkMsSSxFQUFNOztBQUVyQixVQUFJL0osVUFBVUosU0FBZDtBQUNBLGNBQVFtSyxJQUFSO0FBQ0EsYUFBSyxPQUFMO0FBQ0UvSixvQkFBVU0sR0FBRzBKLFdBQWI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFaEssb0JBQVVNLEdBQUcySixhQUFiO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRWpLLG9CQUFVTSxHQUFHNEosWUFBYjtBQUNBO0FBQ0YsYUFBSyxVQUFMO0FBQ0VsSyxvQkFBVU0sR0FBRzZKLGNBQWI7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFbkssb0JBQVVNLEdBQUc4SixVQUFiO0FBQ0E7QUFDRixhQUFLLEtBQUw7QUFDRXBLLG9CQUFVTSxHQUFHK0osU0FBYjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0E7QUFDRXJLLG9CQUFVTSxHQUFHZ0ssWUFBYjtBQXJCRjs7QUF3QkEsYUFBT3RLLE9BQVA7QUFDRDs7O3dCQWhDbUI7QUFDbEIsYUFBT00sR0FBR3dILGVBQUgsR0FBcUI1QixNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDNkIsWUFBdEMsQ0FBbUR6SCxHQUFHMEgsa0JBQXRELENBQVA7QUFDRDs7Ozs7O2tCQXpEa0JvQixLOzs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQm1CLEk7OztBQUVuQixzQkFBNEQ7QUFBQSw0QkFBOUNsTCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSx1R0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBRVFELFEsRUFBVWtMLGEsRUFBZTtBQUFBOztBQUNoQyxhQUFPQSxjQUFjQyxPQUFkLEVBQVAsRUFBZ0M7QUFDOUIsWUFBSUMsV0FBV0YsY0FBY0csSUFBZCxFQUFmO0FBQ0EsWUFBSUMsUUFBUXRMLFNBQVMrRSxNQUFULENBQWdCLElBQWhCLENBQVo7QUFDQSxZQUFJd0csU0FBU0QsTUFBTTNHLFNBQU4sQ0FBZ0IsR0FBaEIsRUFBcUJyQyxJQUFyQixDQUEwQixDQUFDOEksUUFBRCxDQUExQixFQUFzQ25ELEtBQXRDLEdBQThDbEQsTUFBOUMsQ0FBcUQsR0FBckQsRUFBMER0RCxJQUExRCxDQUErRCxPQUEvRCxFQUF3RTJKLFNBQVMzRCxLQUFqRixFQUF3RitELElBQXhGLENBQTZGSixTQUFTM0QsS0FBdEcsQ0FBYjtBQUNBLFlBQUkyRCxTQUFTcEIsUUFBVCxJQUFxQjlHLE9BQU9DLE1BQVAsQ0FBY2lJLFNBQVNwQixRQUF2QixFQUFpQy9HLE1BQTFELEVBQWtFO0FBQ2hFc0ksaUJBQU90QixFQUFQLENBQVUsT0FBVixFQUFtQixVQUFDOUMsQ0FBRDtBQUFBLG1CQUFPLHVCQUFhLE9BQUt2RyxPQUFsQixFQUEyQm9JLElBQTNCLENBQWdDN0IsQ0FBaEMsRUFBbUMsSUFBbkMsRUFBeUNxRCxPQUF6QyxFQUFQO0FBQUEsV0FBbkI7QUFDRDtBQUNELFlBQUlZLFNBQVNLLEtBQVQsSUFBa0J2SSxPQUFPQyxNQUFQLENBQWNpSSxTQUFTSyxLQUF2QixFQUE4QnhJLE1BQTlCLEdBQXVDLENBQTdELEVBQWdFO0FBQzlELGNBQUl5SSxVQUFVSixNQUFNdkcsTUFBTixDQUFhLElBQWIsQ0FBZDtBQUNBLGNBQUk0RyxtQkFBbUIsS0FBS0MsUUFBTCxDQUFjMUksT0FBT0MsTUFBUCxDQUFjaUksU0FBU0ssS0FBdkIsQ0FBZCxDQUF2QjtBQUNBLGVBQUtJLFFBQUwsQ0FBY0gsT0FBZCxFQUF1QkMsZ0JBQXZCO0FBQ0Q7QUFDRjtBQUNGOzs7NkJBRVFHLEssRUFBTztBQUNkLFVBQUlDLFlBQVksQ0FBaEI7QUFDQSxhQUFPO0FBQ0xWLGNBQU0sZ0JBQVc7QUFDZixpQkFBTyxLQUFLRixPQUFMLEtBQWlCVyxNQUFNQyxXQUFOLENBQWpCLEdBQXNDekwsU0FBN0M7QUFDRCxTQUhJO0FBSUw2SyxpQkFBUyxtQkFBVztBQUNsQixpQkFBT1ksWUFBWUQsTUFBTTdJLE1BQXpCO0FBQ0Q7QUFOSSxPQUFQO0FBUUQ7OzsrQkFFVSxDQUFFOzs7Ozs7a0JBbENNZ0ksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCZSxlLFdBT2xCLDZCQUFTLFVBQVQsQzs7O0FBTEQsaUNBQTREO0FBQUEsNEJBQTlDak0sT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsa0lBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxVQUFLK0osUUFBTCxHQUFnQi9KLGVBQWhCO0FBRjBEO0FBRzNEOzs7OzhCQUdTO0FBQUE7O0FBQ1IsVUFBSWlELE9BQU91RCxJQUFQLENBQVksS0FBS25FLElBQUwsQ0FBVTBILFFBQVYsQ0FBbUJpQyxZQUEvQixFQUE2Q2hKLE1BQWpELEVBQXlEO0FBQ3ZELFlBQUlyQyxVQUFVLEtBQUtBLE9BQW5CO0FBQ0FBLGdCQUFRWCxlQUFSLEdBQTBCLFVBQUNpTSxXQUFEO0FBQUEsaUJBQWlCLE9BQUtDLFFBQUwsQ0FBYzlFLElBQWQsU0FBeUI2RSxXQUF6QixDQUFqQjtBQUFBLFNBQTFCO0FBQ0EsZUFBTyw0QkFBc0J0TCxPQUF0QixFQUErQm9JLElBQS9CLENBQW9DLEtBQUsxRyxJQUF6QyxFQUErQyxJQUEvQyxFQUFxRGpDLE1BQXJELEVBQVA7QUFDRDs7QUFFRDtBQUNBLFdBQUs4TCxRQUFMLENBQWMsS0FBSzdKLElBQUwsQ0FBVTBILFFBQXhCO0FBRUQ7Ozs2QkFFUW9DLFUsRUFBWTtBQUNuQixXQUFLcEMsUUFBTCxjQUF5QnFDLEtBQUtDLFNBQUwsQ0FBZUQsS0FBS0MsU0FBTCxDQUFlRixVQUFmLENBQWYsQ0FBekI7QUFDRDs7Ozs7a0JBdEJrQkosZTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCTyxLOzs7QUFFbkIsdUJBQTREO0FBQUEsNEJBQTlDeE0sT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsOEdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxVQUFLdU0sT0FBTCxHQUFlbE0sU0FBZjtBQUNBLFVBQUttTSxNQUFMLEdBQWNuTSxTQUFkO0FBSDBEO0FBSTNEOzs7O2tDQUVhO0FBQ1o7QUFDQSxXQUFLa00sT0FBTCxHQUFleEwsR0FBR0MsTUFBSCxDQUFVLE1BQVYsRUFBa0I4RCxNQUFsQixDQUF5QixLQUF6QixFQUFnQ3RELElBQWhDLENBQXFDLE9BQXJDLEVBQThDLGdCQUE5QyxDQUFmO0FBQ0EsV0FBS2dMLE1BQUwsR0FBY3pMLEdBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCOEQsTUFBbEIsQ0FBeUIsS0FBekIsRUFBZ0N0RCxJQUFoQyxDQUFxQyxPQUFyQyxFQUE4QyxRQUE5QyxDQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUsrSyxPQUFMLENBQWF4SCxNQUFiO0FBQ0EsV0FBS3RFLE9BQUwsQ0FBYXNFLE1BQWI7QUFDQSxXQUFLeUgsTUFBTCxDQUFZekgsTUFBWjtBQUNBLGFBQU8sS0FBUDtBQUNEOzs7Ozs7a0JBbkJrQnVILEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJHLE8sV0FNbEIsOEI7OztBQUpELHlCQUE0RDtBQUFBLDRCQUE5QzNNLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxXQUFLUyxPQUFMLEdBQWUsS0FBS2lNLFVBQUwsQ0FBZ0IxTCxNQUFoQixDQUF1QiwyQkFBdkIsQ0FBZjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtQLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGFBQUtILE9BQUwsR0FBZSxLQUFLaU0sVUFBTCxDQUFnQjVILE1BQWhCLENBQXVCLEtBQXZCLEVBQ1p0RCxJQURZLENBQ1AsT0FETyxFQUNFLHVCQURGLENBQWY7QUFFRDs7QUFFRDtBQUNBLFVBQUksS0FBS2YsT0FBTCxDQUFhaUUsU0FBYixDQUF1QixHQUF2QixFQUE0QjlELElBQTVCLEVBQUosRUFBd0M7QUFDdEM7QUFDRDs7QUFFRCxVQUFJK0wsTUFBTTVMLEdBQUc2TCxLQUFILENBQVMsS0FBS0MsU0FBTCxDQUFlak0sSUFBZixFQUFULENBQVY7O0FBRUE7QUFDQSxXQUFLSCxPQUFMLENBQWE2RyxLQUFiLENBQW1CLE1BQW5CLEVBQTRCcUYsSUFBSSxDQUFKLElBQVMsQ0FBVixHQUFlLElBQTFDLEVBQWdEckYsS0FBaEQsQ0FBc0QsS0FBdEQsRUFBOERxRixJQUFJLENBQUosSUFBUyxDQUFWLEdBQWUsSUFBNUU7O0FBRUEsVUFBSUcsUUFBUSxLQUFLck0sT0FBTCxDQUFhcUUsTUFBYixDQUFvQixLQUFwQixFQUEyQnRELElBQTNCLENBQWdDLE9BQWhDLEVBQXlDLGdCQUF6QyxFQUNUc0QsTUFEUyxDQUNGLEtBREUsRUFDS3RELElBREwsQ0FDVSxPQURWLEVBQ21CLGNBRG5CLEVBRVRzRCxNQUZTLENBRUYsS0FGRSxFQUVLdEQsSUFGTCxDQUVVLE9BRlYsRUFFbUIsbUJBRm5CLENBQVo7QUFHQSxVQUFJb0QsT0FBTyxJQUFYO0FBQ0EzQixhQUFPdUQsSUFBUCxDQUFZLEtBQUtuRSxJQUFqQixFQUF1QmdELEdBQXZCLENBQTJCLFVBQVNqQyxHQUFULEVBQWM7QUFDdkMsWUFBSTJKLE1BQU1ELE1BQU1oSSxNQUFOLENBQWEsS0FBYixFQUFvQnRELElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLGtCQUFsQyxDQUFWO0FBQ0F1TCxZQUFJakksTUFBSixDQUFXLEtBQVgsRUFBa0J0RCxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcUQrRixJQUFyRCxDQUEwRDNDLEtBQUt2QyxJQUFMLENBQVVlLEdBQVYsRUFBZW9FLEtBQXpFO0FBQ0F1RixZQUFJakksTUFBSixDQUFXLEtBQVgsRUFBa0J0RCxJQUFsQixDQUF1QixPQUF2QixFQUFnQyxtQkFBaEMsRUFBcUQrRixJQUFyRCxDQUEwRDNDLEtBQUt2QyxJQUFMLENBQVVlLEdBQVYsRUFBZW1FLElBQXpFO0FBQ0QsT0FKRDs7QUFNQTtBQUNBLFdBQUs5RyxPQUFMLENBQWE2RyxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJLEtBQUs3RyxPQUFULEVBQWtCO0FBQ2hCLGFBQUtBLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJLLE1BQTVCO0FBQ0EsYUFBS3RFLE9BQUwsQ0FBYTZHLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsSUFBOUI7QUFDRDtBQUNGOzs7OztrQkEvQ2tCbUYsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUEsSUFBSU8sYUFBYSxFQUFqQjs7QUFFQTs7Ozs7Ozs7Ozs7O0lBWXFCQyxNLFdBcUJsQiw2QkFBUyxRQUFULEM7OztBQW5CRDs7Ozs7OztBQU9BLHdCQUE0RDtBQUFBLDRCQUE5Q25OLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLGdIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSSxDQUFDZSxFQUFMLEVBQVM7QUFDUCxZQUFNLElBQUltSSxLQUFKLENBQVUsNEVBQVYsQ0FBTjtBQUNEO0FBSnlEO0FBSzNEOztBQUVEOzs7Ozs7Ozs7NkJBTVM7QUFDUCxVQUFJZ0UsUUFBUSxvQkFBVSxLQUFLdk0sT0FBZixFQUF3Qm9JLElBQXhCLENBQTZCLEtBQUsxRyxJQUFsQyxFQUF3Q2pDLE1BQXhDLEVBQVo7QUFDQTRNLGlCQUFXLEtBQUszSyxJQUFMLENBQVVpRSxNQUFWLENBQWlCNkcsRUFBNUIsSUFBa0NELEtBQWxDO0FBQ0EsYUFBT0EsTUFBTXpNLE9BQU4sQ0FBY0csSUFBZCxFQUFQO0FBQ0Q7Ozs2QkFFZXVNLEUsRUFBSTtBQUNsQixhQUFPSCxXQUFXRyxFQUFYLENBQVA7QUFDRDs7Ozs7a0JBOUJrQkYsTTs7O0FBaUNyQixJQUFJO0FBQ0ZHLFVBQVFILE1BQVIsR0FBaUJJLE9BQU9KLE1BQVAsR0FBZ0JBLE1BQWpDO0FBQ0E7QUFDQSxNQUFJSyxZQUFZRCxPQUFPRSxRQUF2QjtBQUNBRixTQUFPRSxRQUFQLEdBQWtCLFlBQVc7QUFDM0I7QUFDQXRLLFdBQU9DLE1BQVAsQ0FBYzhKLFVBQWQsRUFBMEJqRyxPQUExQixDQUFrQyxVQUFTbUcsS0FBVCxFQUFnQjtBQUNoREEsWUFBTTVHLE1BQU4sQ0FBYWtILFNBQWI7QUFDRCxLQUZEO0FBR0E7QUFDQSxRQUFJLE9BQU9GLFNBQVAsS0FBcUIsVUFBekIsRUFBcUM7QUFDbkNBO0FBQ0Q7QUFDRixHQVREO0FBVUQsQ0FkRCxDQWVBLE9BQU9wSSxDQUFQLEVBQVU7QUFDUmtJLFVBQVFILE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQlEsSyxXQVVsQiw2QkFBUyxRQUFULEM7OztBQVJELHVCQUE0RDtBQUFBLDRCQUE5QzNOLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDhHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsVUFBS3NHLE1BQUwsR0FBYyxxQkFBVyxNQUFLM0YsT0FBaEIsQ0FBZDtBQUNBLFVBQUsrTSxJQUFMLEdBQVksdUJBQWEsTUFBSy9NLE9BQWxCLENBQVo7QUFDQSxVQUFLdUosUUFBTCxHQUFnQixzQkFBWSxNQUFLdkosT0FBakIsQ0FBaEI7QUFDQSxVQUFLZ04sR0FBTCxDQUFTLE1BQUt6RCxRQUFkLEVBQXdCeUQsR0FBeEIsQ0FBNEIsTUFBS0QsSUFBakMsRUFBdUNDLEdBQXZDLENBQTJDLE1BQUtySCxNQUFoRDtBQUwwRDtBQU0zRDs7Ozs2QkFHUTtBQUNQLFVBQUkvRSxTQUFTUixHQUFHQyxNQUFILENBQVUsS0FBS0wsT0FBTCxDQUFhWixRQUF2QixDQUFiOztBQUVBLFVBQU02TixxQkFBbUIsS0FBS3ZMLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUI2RyxFQUExQztBQUNBLFdBQUsxTSxPQUFMLEdBQWVNLEdBQUdDLE1BQUgsVUFBaUI0TSxPQUFqQixDQUFmO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBS25OLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCO0FBQ0EsYUFBS0wsTUFBTCxDQUFZQyxLQUFaLHNCQUFxQ29OLE9BQXJDO0FBQ0EsYUFBS25OLE9BQUwsR0FBZWMsT0FBT3VELE1BQVAsQ0FBYyxLQUFkLEVBQXFCdEQsSUFBckIsQ0FBMEIsT0FBMUIsRUFBbUMsUUFBbkMsRUFBNkNBLElBQTdDLENBQWtELElBQWxELEVBQXdEb00sT0FBeEQsQ0FBZjtBQUNEOztBQUVEO0FBQ0EsVUFBSSxDQUFDLEtBQUtuTixPQUFMLENBQWFHLElBQWIsRUFBTCxFQUEwQjtBQUN4QixjQUFNLElBQUlzSSxLQUFKLDRDQUFtRDBFLE9BQW5ELDBCQUFOO0FBQ0Q7O0FBRUQsV0FBS3JOLE1BQUwsQ0FBWUMsS0FBWixxQkFBb0NvTixPQUFwQzs7QUFFQSxXQUFLQyxjQUFMOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBbkNNSixLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjs7O0lBR3FCSyxTOzs7Ozs7Ozs7QUFFbkI7Ozs7OzswQkFNYUMsSyxFQUF3QjtBQUFBLFVBQWpCNUUsT0FBaUIsdUVBQVAsS0FBTzs7QUFDbkMsVUFBSSxDQUFDNEUsS0FBTCxFQUFZO0FBQ1pBLGNBQVEsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixHQUE0QjNCLEtBQUtDLFNBQUwsQ0FBZTBCLEtBQWYsQ0FBNUIsR0FBb0RBLEtBQTVEO0FBQ0FBLGNBQVFBLE1BQU1wSSxPQUFOLENBQWMscUJBQWQsRUFBcUMsRUFBckMsQ0FBUjtBQUNBLFVBQUlxSSxZQUFZLGFBQWhCO0FBQ0EsVUFBSXBJLFFBQVFvSSxVQUFVQyxJQUFWLENBQWVGLEtBQWYsQ0FBWjtBQUNBLFVBQUluSSxLQUFKLEVBQVc7QUFDVG1JLGdCQUFRbkksTUFBTSxDQUFOLENBQVI7QUFDQSxZQUFJO0FBQ0YsY0FBSUYsT0FBTzBHLEtBQUtoRCxLQUFMLENBQVcyRSxLQUFYLENBQVg7QUFDQSxpQkFBT3JJLEtBQUt3SSxJQUFMLEtBQWNKLFVBQVVLLElBQXhCLElBQWdDaEYsT0FBaEMsR0FBMEN6RCxJQUExQyxHQUFpRHJGLFNBQXhEO0FBQ0QsU0FIRCxDQUlBLE9BQU82RSxDQUFQLEVBQVU7QUFDUjtBQUNBb0Usa0JBQVFHLEtBQVIsQ0FBY3ZFLENBQWQ7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDs7Ozs7O3dCQUdrQjtBQUNoQixhQUFPLDZCQUFQO0FBQ0Q7Ozs7OztrQkFqQ2tCNEksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJNLE0sV0FTbEIsNkJBQVMsUUFBVCxDOzs7QUFQRCx3QkFBNEQ7QUFBQSw0QkFBOUN0TyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxnSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFVBQUtxTyxLQUFMLEdBQWEsMkJBQWlCLE1BQUsxTixPQUF0QixDQUFiO0FBQ0EsVUFBSzJOLFlBQUwsR0FBb0IsMkJBQWlCLE1BQUszTixPQUF0QixDQUFwQjtBQUNBLFVBQUtnTixHQUFMLENBQVMsTUFBS1UsS0FBZCxFQUFxQlYsR0FBckIsQ0FBeUIsTUFBS1csWUFBOUI7QUFKMEQ7QUFLM0Q7Ozs7NkJBR1E7QUFDUCxVQUFJN0MsZ0JBQUo7QUFDQSxVQUFJOEMsT0FBT3hOLEdBQUd3TixJQUFILEVBQVg7QUFDQSxVQUFJM0osT0FBTyxJQUFYOztBQUVBLGVBQVM0SixVQUFULENBQW9CQyxVQUFwQixFQUFnQ0MsVUFBaEMsRUFBNENDLEtBQTVDLEVBQW1EO0FBQ2pEL0osYUFBS25FLE9BQUwsQ0FBYTJHLElBQWIsQ0FBa0JtSCxLQUFLSyxTQUF2QixFQUFrQzdOLEdBQUc4TixZQUFILENBQWdCQyxTQUFoQixDQUEwQkwsVUFBMUIsRUFBc0NDLFVBQXRDLEVBQWtEQyxLQUFsRCxDQUF3REEsS0FBeEQsRUFBK0RBLEtBQS9ELENBQWxDO0FBQ0Q7O0FBRUQsZUFBU0ksTUFBVCxHQUFrQjtBQUNoQnRELGdCQUFRakssSUFBUixDQUFhLFdBQWIsRUFBMEJULEdBQUdvSixLQUFILENBQVN5RSxTQUFuQztBQUNEOztBQUVELGVBQVNJLE9BQVQsR0FBbUI7QUFDakIsWUFBSWpPLEdBQUdvSixLQUFILENBQVM4RSxnQkFBYixFQUErQjtBQUFFbE8sYUFBR29KLEtBQUgsQ0FBUytFLGVBQVQ7QUFBNkI7QUFDL0Q7O0FBRUQsZUFBUzFCLFNBQVQsR0FBcUI7QUFDbkI7QUFDQSxZQUFJNUksS0FBS3ZDLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUJrSCxTQUFyQixFQUFnQztBQUM5QixjQUFJMkIsU0FBUzFELFFBQVE3SyxJQUFSLEdBQWV3TyxPQUFmLEVBQWI7O0FBRUEsY0FBSUMsZUFBZXpLLEtBQUtuRSxPQUFMLENBQWFHLElBQWIsR0FBb0JhLHFCQUFwQixFQUFuQjtBQUFBLGNBQ0U2TixZQUFZRCxhQUFhbE8sS0FBYixHQUFxQmtPLGFBQWFoTyxJQURoRDtBQUFBLGNBRUVrTyxhQUFhRixhQUFhak8sTUFBYixHQUFzQmlPLGFBQWFuTyxHQUZsRDs7QUFJQSxjQUFJSSxRQUFRLENBQUM2TixPQUFPN04sS0FBcEI7QUFBQSxjQUNFSyxTQUFTLENBQUN3TixPQUFPeE4sTUFEbkI7O0FBR0EsY0FBSUwsVUFBVSxDQUFWLElBQWVLLFdBQVcsQ0FBOUIsRUFBaUM7O0FBRWpDLGNBQUk2TixPQUFPTCxPQUFPdkksQ0FBUCxHQUFXdEYsUUFBUSxDQUE5QjtBQUFBLGNBQ0VtTyxPQUFPTixPQUFPdEksQ0FBUCxHQUFXbEYsU0FBUyxDQUQ3Qjs7QUFHQSxjQUFJZ04sUUFBUSxNQUFNZSxLQUFLekksR0FBTCxDQUFTM0YsUUFBUWdPLFNBQWpCLEVBQTRCM04sU0FBUzROLFVBQXJDLENBQWxCO0FBQ0EsY0FBSWQsYUFBYWEsWUFBWSxDQUFaLEdBQWdCWCxRQUFRYSxJQUF6QztBQUFBLGNBQ0VkLGFBQWFhLGFBQWEsQ0FBYixHQUFpQlosUUFBUWMsSUFEeEM7O0FBR0FoRSxrQkFBUWtFLFVBQVIsR0FDR0MsUUFESCxDQUNZaEwsS0FBS2xFLGtCQURqQixFQUVHYyxJQUZILENBRVEsV0FGUixpQkFFa0NpTixVQUZsQyxTQUVnREMsVUFGaEQsZUFFb0VDLEtBRnBFLFNBRTZFQSxLQUY3RSxRQUdHM0UsRUFISCxDQUdNLEtBSE4sRUFHYTtBQUFBLG1CQUFNd0UsV0FBV0MsVUFBWCxFQUF1QkMsVUFBdkIsRUFBbUNDLEtBQW5DLENBQU47QUFBQSxXQUhiO0FBSUQ7QUFDRjs7QUFFRCxVQUFNa0IsdUJBQXFCLEtBQUt4TixJQUFMLENBQVVpRSxNQUFWLENBQWlCNkcsRUFBNUM7QUFDQSxXQUFLMU0sT0FBTCxHQUFlTSxHQUFHQyxNQUFILFVBQWlCNk8sUUFBakIsQ0FBZjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtwUCxPQUFMLENBQWFHLElBQWIsRUFBTCxFQUEwQjtBQUN4QjtBQUNBLGFBQUtMLE1BQUwsQ0FBWUMsS0FBWix1QkFBc0NxUCxRQUF0QztBQUNBLGFBQUtwUCxPQUFMLEdBQWUsS0FBS2MsTUFBTCxDQUFZdUQsTUFBWixDQUFtQixLQUFuQixFQUNadEQsSUFEWSxDQUNQLE9BRE8sRUFDRSxlQURGLEVBRVpBLElBRlksQ0FFUCxJQUZPLEVBRURxTyxRQUZDLENBQWY7QUFHRDs7QUFFRDtBQUNBLFVBQUksQ0FBQyxLQUFLcFAsT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEIsY0FBTSxJQUFJc0ksS0FBSiw2Q0FBb0QyRyxRQUFwRCwwQkFBTjtBQUNEOztBQUVELFdBQUtwUCxPQUFMLENBQWFlLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsS0FBS2EsSUFBTCxDQUFVaUUsTUFBVixDQUFpQmhGLEtBQTVDLEVBQW1ERSxJQUFuRCxDQUF3RCxRQUF4RCxFQUFrRSxLQUFLYSxJQUFMLENBQVVpRSxNQUFWLENBQWlCM0UsTUFBbkY7O0FBRUE4SixnQkFBVSxLQUFLaEwsT0FBTCxDQUFhTyxNQUFiLENBQW9CLGtCQUFwQixDQUFWOztBQUVBLFVBQUksQ0FBQ3lLLFFBQVE3SyxJQUFSLEVBQUwsRUFBcUI7QUFDbkI2SyxrQkFBVSxLQUFLaEwsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGdCQUF2QyxDQUFWO0FBQ0ErTSxhQUFLdkUsRUFBTCxDQUFRLE1BQVIsRUFBZ0IrRSxNQUFoQjtBQUNBO0FBQ0EsYUFBS3RPLE9BQUwsQ0FBYTJHLElBQWIsQ0FBa0JtSCxJQUFsQixFQUF3QnZFLEVBQXhCLENBQTJCLGVBQTNCLEVBQTRDLElBQTVDO0FBQ0Q7O0FBRUQsV0FBS3ZKLE9BQUwsQ0FBYXVKLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUJnRixPQUF6QixFQUFrQyxJQUFsQzs7QUFFQSxXQUFLdk8sT0FBTCxDQUFhK00sU0FBYixHQUF5QixLQUFLQSxTQUFMLEdBQWlCQSxTQUExQzs7QUFFQSxXQUFLak4sTUFBTCxDQUFZQyxLQUFaLHNCQUFxQ3FQLFFBQXJDOztBQUVBLFdBQUtoQyxjQUFMOztBQUVBcEssaUJBQVcsWUFBTTtBQUNmK0o7QUFDRCxPQUZELEVBRUcsS0FBSzlNLGtCQUZSOztBQUlBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBakdNME4sTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHJCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJ2RSxLLFdBTWxCLDZCQUFTLGNBQVQsQzs7O0FBSkQsdUJBQTREO0FBQUEsNEJBQTlDL0osT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEseUdBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFVBQUlTLFVBQVVKLFNBQWQ7QUFDQSxjQUFRLEtBQUtnQyxJQUFMLENBQVVpRSxNQUFWLENBQWlCK0gsS0FBakIsQ0FBdUI3RCxJQUEvQjtBQUNBLGFBQUssTUFBTDtBQUNFL0osb0JBQVUsd0JBQWMsS0FBS0UsT0FBbkIsRUFBNEJvSSxJQUE1QixDQUFpQyxLQUFLMUcsSUFBdEMsRUFBNENqQyxNQUE1QyxFQUFWO0FBQ0E7QUFDRjtBQUNFSyxvQkFBVSwyQkFBaUIsS0FBS0UsT0FBdEIsRUFBK0JvSSxJQUEvQixDQUFvQyxLQUFLMUcsSUFBekMsRUFBK0NqQyxNQUEvQyxFQUFWO0FBTEY7O0FBUUEsYUFBT0ssT0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBckJNb0osSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQmlHLFMsV0FNbEIsc0M7OztBQUpELDJCQUE0RDtBQUFBLDRCQUE5Q2hRLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLGlIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxVQUFJaUksSUFBSSxDQUFSO0FBQUEsVUFDRThILGFBREY7O0FBR0FBLGFBQU9oUCxHQUFHaVAsU0FBSCxDQUFhLEtBQUtDLFFBQWxCLEVBQTRCO0FBQUEsZUFBSy9JLEVBQUVnSixRQUFQO0FBQUEsT0FBNUIsQ0FBUDtBQUNBSCxXQUFLSSxFQUFMLEdBQVUsS0FBS3hPLE1BQUwsR0FBYyxDQUF4QjtBQUNBb08sV0FBS0ssRUFBTCxHQUFVLENBQVY7O0FBRUE7QUFDQSxVQUFJQyxhQUFhLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFVBQUlDLGFBQWEsU0FBYkEsVUFBYSxDQUFVNUcsS0FBVixFQUFpQjZHLENBQWpCLEVBQW9COztBQUVuQyxZQUFJQSxFQUFFTCxRQUFGLElBQWNLLEVBQUVMLFFBQUYsQ0FBV2xOLE1BQVgsR0FBb0IsQ0FBdEMsRUFBeUM7QUFDdkMsY0FBSXFOLFdBQVdyTixNQUFYLElBQXFCMEcsUUFBUSxDQUFqQyxFQUFvQzJHLFdBQVd4SCxJQUFYLENBQWdCLENBQWhCOztBQUVwQ3dILHFCQUFXM0csUUFBUSxDQUFuQixLQUF5QjZHLEVBQUVMLFFBQUYsQ0FBV2xOLE1BQXBDO0FBQ0F1TixZQUFFTCxRQUFGLENBQVduSixPQUFYLENBQW1CLFVBQVVHLENBQVYsRUFBYTtBQUM5Qm9KLHVCQUFXNUcsUUFBUSxDQUFuQixFQUFzQnhDLENBQXRCO0FBQ0QsV0FGRDtBQUdEO0FBQ0YsT0FWRDtBQVdBb0osaUJBQVcsQ0FBWCxFQUFjUCxJQUFkO0FBQ0EsVUFBSVMsWUFBWXpQLEdBQUdrRyxHQUFILENBQU9vSixVQUFQLElBQXFCLEdBQXJDOztBQUVBLFVBQUlJLFVBQVUxUCxHQUFHMlAsSUFBSCxHQUFVQyxJQUFWLENBQWUsQ0FBQ0gsU0FBRCxFQUFZLEtBQUtsUCxLQUFqQixDQUFmLENBQWQ7O0FBRUEsVUFBSSxLQUFLZSxJQUFMLENBQVVpRSxNQUFWLENBQWlCK0gsS0FBakIsQ0FBdUJ1QyxTQUEzQixFQUFzQztBQUNwQ2IsYUFBS0csUUFBTCxDQUFjbkosT0FBZCxDQUFzQjhKLFFBQXRCO0FBQ0Q7O0FBRURDLGFBQU8xSixJQUFQLENBQVksSUFBWixFQUFrQjJJLElBQWxCOztBQUVBLGVBQVNjLFFBQVQsQ0FBa0IzSixDQUFsQixFQUFxQjtBQUNuQixZQUFJQSxFQUFFZ0osUUFBTixFQUFnQjtBQUNkaEosWUFBRTZKLFNBQUYsR0FBYzdKLEVBQUVnSixRQUFoQjtBQUNBaEosWUFBRTZKLFNBQUYsQ0FBWWhLLE9BQVosQ0FBb0I4SixRQUFwQjtBQUNBM0osWUFBRWdKLFFBQUYsR0FBYSxJQUFiO0FBQ0Q7QUFDRjs7QUFFRCxlQUFTWSxNQUFULENBQWdCRSxNQUFoQixFQUF3QjtBQUFBOztBQUN0QixZQUFJZixXQUFXUSxRQUFRVixJQUFSLENBQWY7O0FBRUEsWUFBSWtCLFFBQVFoQixTQUFTaUIsV0FBVCxFQUFaO0FBQUEsWUFDRUMsUUFBUWxCLFNBQVNpQixXQUFULEdBQXVCcEosS0FBdkIsQ0FBNkIsQ0FBN0IsQ0FEVjs7QUFHQW1KLGNBQU1sSyxPQUFOLENBQWM7QUFBQSxpQkFBS0csRUFBRUwsQ0FBRixHQUFNSyxFQUFFa0ssS0FBRixHQUFVLEdBQXJCO0FBQUEsU0FBZDs7QUFFQSxZQUFJQyxZQUFZLEtBQUs1USxPQUFMLENBQWFpRSxTQUFiLENBQXVCLGdCQUF2QixDQUFoQjs7QUFFQSxZQUFJLENBQUMyTSxVQUFVelEsSUFBVixFQUFMLEVBQXVCO0FBQ3JCeVEsc0JBQVksS0FBSzVRLE9BQUwsQ0FBYXFFLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJ0RCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxjQUF2QyxDQUFaO0FBQ0Q7O0FBRUQsWUFBSThQLE9BQU9ELFVBQVUzTSxTQUFWLENBQW9CLGtCQUFwQixFQUNSckMsSUFEUSxDQUNIOE8sS0FERyxFQUNJO0FBQUEsaUJBQUtqSyxFQUFFaUcsRUFBRixLQUFTakcsRUFBRWlHLEVBQUYsR0FBTyxFQUFFbEYsQ0FBbEIsQ0FBTDtBQUFBLFNBREosQ0FBWDs7QUFHQSxZQUFJc0osWUFBWUQsS0FBS3RKLEtBQUwsR0FDYmxELE1BRGEsQ0FDTixNQURNLEVBQ0V0RCxJQURGLENBQ08sT0FEUCxFQUNnQixhQURoQixFQUViQSxJQUZhLENBRVIsR0FGUSxFQUVILFlBQU07QUFDZixjQUFJZ1EsSUFBSSxFQUFDNUssR0FBR29LLE9BQU9iLEVBQVgsRUFBZXRKLEdBQUdtSyxPQUFPWixFQUF6QixFQUFSO0FBQ0EsaUJBQU9xQixTQUFTRCxDQUFULEVBQVlBLENBQVosQ0FBUDtBQUNELFNBTGEsQ0FBaEI7O0FBT0FELGtCQUFVckosS0FBVixDQUFnQm9KLElBQWhCLEVBQ0czQixVQURILEdBQ2dCQyxRQURoQixDQUN5QixLQUFLbFAsa0JBRDlCLEVBQ2tEYyxJQURsRCxDQUN1RCxHQUR2RCxFQUM0RDtBQUFBLGlCQUFLaVEsU0FBU3ZLLENBQVQsRUFBWUEsRUFBRTNGLE1BQWQsQ0FBTDtBQUFBLFNBRDVEOztBQUdBK1AsYUFBS3ZKLElBQUwsR0FBWTRILFVBQVosR0FBeUJDLFFBQXpCLENBQWtDLEtBQUtsUCxrQkFBdkMsRUFDR2MsSUFESCxDQUNRLEdBRFIsRUFDYSxZQUFNO0FBQ2YsY0FBSWdRLElBQUksRUFBQzVLLEdBQUdvSyxPQUFPcEssQ0FBWCxFQUFjQyxHQUFHbUssT0FBT25LLENBQXhCLEVBQVI7QUFDQSxpQkFBTzRLLFNBQVNELENBQVQsRUFBWUEsQ0FBWixDQUFQO0FBQ0QsU0FKSCxFQUlLek0sTUFKTDs7QUFNQXNNLGtCQUFVM00sU0FBVixDQUFvQixrQkFBcEIsRUFDRzRDLEtBREgsQ0FDUyxNQURULEVBQ2lCLE1BRGpCLEVBRUdBLEtBRkgsQ0FFUyxRQUZULEVBRW1CLE1BRm5CLEVBR0dBLEtBSEgsQ0FHUyxjQUhULEVBR3lCLEtBSHpCOztBQUtBMkosY0FBTWxLLE9BQU4sQ0FBYyxVQUFDRyxDQUFELEVBQU87QUFDbkJBLFlBQUVpSixFQUFGLEdBQU9qSixFQUFFTixDQUFUO0FBQ0FNLFlBQUVrSixFQUFGLEdBQU9sSixFQUFFTCxDQUFUO0FBQ0QsU0FIRDs7QUFLQSxpQkFBUzRLLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCeEssQ0FBckIsRUFBd0I7QUFDdEIsd0JBQVl3SyxFQUFFN0ssQ0FBZCxTQUFtQjZLLEVBQUU5SyxDQUFyQix3QkFDUSxDQUFDOEssRUFBRTdLLENBQUYsR0FBTUssRUFBRUwsQ0FBVCxJQUFjLENBRHRCLFNBQzJCNkssRUFBRTlLLENBRDdCLHlCQUVRLENBQUM4SyxFQUFFN0ssQ0FBRixHQUFNSyxFQUFFTCxDQUFULElBQWMsQ0FGdEIsU0FFMkJLLEVBQUVOLENBRjdCLHlCQUdRTSxFQUFFTCxDQUhWLFNBR2VLLEVBQUVOLENBSGpCO0FBSUQ7O0FBRUQsWUFBSStLLFlBQVksS0FBS2xSLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFlBQUksQ0FBQ2lOLFVBQVUvUSxJQUFWLEVBQUwsRUFBdUI7QUFDckIrUSxzQkFBWSxLQUFLbFIsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQVo7QUFDRDs7QUFFRCxZQUFJWixPQUFPK1EsVUFBVWpOLFNBQVYsQ0FBb0IsZUFBcEIsRUFDUnJDLElBRFEsQ0FDSDRPLEtBREcsRUFDSTtBQUFBLGlCQUFLL0osRUFBRWlHLEVBQUYsS0FBU2pHLEVBQUVpRyxFQUFGLEdBQU8sRUFBRWxGLENBQWxCLENBQUw7QUFBQSxTQURKLENBQVg7O0FBR0EsWUFBSTJKLFlBQVloUixLQUFLb0gsS0FBTCxHQUFhbEQsTUFBYixDQUFvQixHQUFwQixFQUNidEQsSUFEYSxDQUNSLE9BRFEsRUFDQyxhQURELEVBRWJBLElBRmEsQ0FFUixXQUZRLEVBRUs7QUFBQSxnQ0FBbUJ3UCxPQUFPWixFQUExQixTQUFnQ1ksT0FBT2IsRUFBdkM7QUFBQSxTQUZMLENBQWhCOztBQUlBeUIsa0JBQVU5TSxNQUFWLENBQWlCLE1BQWpCLEVBQ0d0RCxJQURILENBQ1EsR0FEUixFQUNhVCxHQUFHOFEsTUFBSCxHQUFZckgsSUFBWixDQUFpQjtBQUFBLGlCQUFLLGdCQUFNc0gsU0FBTixDQUFnQjVLLEVBQUU3RSxJQUFGLENBQU9tSSxJQUF2QixDQUFMO0FBQUEsU0FBakIsRUFBb0RtRyxJQUFwRCxDQUF5RDtBQUFBLGlCQUFLekosRUFBRTdFLElBQUYsQ0FBT3NPLElBQVAsR0FBYyxHQUFuQjtBQUFBLFNBQXpELENBRGIsRUFFR25QLElBRkgsQ0FFUSxPQUZSLEVBRWlCLGVBRmpCOztBQUlBb1Esa0JBQVU5TSxNQUFWLENBQWlCLE1BQWpCLEVBQ0d0RCxJQURILENBQ1EsT0FEUixFQUNpQixjQURqQixFQUVHK0YsSUFGSCxDQUVRO0FBQUEsaUJBQUtMLEVBQUU3RSxJQUFGLENBQU9tRixLQUFaO0FBQUEsU0FGUixFQUdHaEcsSUFISCxDQUdRLEdBSFIsRUFHYyxZQUFXO0FBQ3JCLGNBQUl1USxRQUFRLEtBQUszQyxPQUFMLEVBQVo7QUFDQSxpQkFBTyxFQUFFMkMsTUFBTXpRLEtBQU4sR0FBYyxDQUFoQixDQUFQO0FBQ0QsU0FOSCxFQU9HZ0csS0FQSCxDQU9TLFFBUFQsRUFPbUI7QUFBQSxpQkFBS0osRUFBRWdKLFFBQUYsSUFBY2hKLEVBQUU2SixTQUFoQixHQUE0QixTQUE1QixHQUF3QyxTQUE3QztBQUFBLFNBUG5COztBQVNBLFlBQUlpQixhQUFhSixVQUFVMUosS0FBVixDQUFnQnRILElBQWhCLENBQWpCOztBQUVBb1IsbUJBQVdyQyxVQUFYLEdBQ0dDLFFBREgsQ0FDWSxLQUFLbFAsa0JBRGpCLEVBRUdjLElBRkgsQ0FFUSxXQUZSLEVBRXFCO0FBQUEsZ0NBQWtCMEYsRUFBRUwsQ0FBcEIsU0FBeUJLLEVBQUVOLENBQTNCO0FBQUEsU0FGckI7O0FBSUFoRyxhQUFLbUgsSUFBTCxHQUFZNEgsVUFBWixHQUF5QkMsUUFBekIsQ0FBa0MsS0FBS2xQLGtCQUF2QyxFQUNHYyxJQURILENBQ1EsV0FEUixFQUNxQjtBQUFBLGdDQUFtQndQLE9BQU9uSyxDQUExQixTQUErQm1LLE9BQU9wSyxDQUF0QztBQUFBLFNBRHJCLEVBRUc3QixNQUZIOztBQUlBNE0sa0JBQVVqTixTQUFWLENBQW9CLG9CQUFwQixFQUNHNEMsS0FESCxDQUNTLE1BRFQsRUFDaUI7QUFBQSxpQkFBS0osRUFBRWdKLFFBQUYsSUFBY2hKLEVBQUU2SixTQUFoQixHQUE0QixnQkFBNUIsR0FBK0MsZ0JBQU01SSxNQUFOLENBQWFqQixFQUFFN0UsSUFBRixDQUFPNFAsS0FBUCxHQUFlLENBQTVCLENBQXBEO0FBQUEsU0FEakIsRUFFRzNLLEtBRkgsQ0FFUyxRQUZULEVBRW1CO0FBQUEsaUJBQUtKLEVBQUVnSixRQUFGLElBQWNoSixFQUFFNkosU0FBaEIsR0FBNEIsU0FBNUIsR0FBd0MsU0FBN0M7QUFBQSxTQUZuQjs7QUFJQW5RLGVBQU8rUSxVQUFVak4sU0FBVixDQUFvQixlQUFwQixDQUFQOztBQUVBLFlBQUk5RCxLQUFLQSxJQUFMLEVBQUosRUFBaUI7QUFDZixlQUFLc1IsWUFBTCxDQUFrQnRSLElBQWxCOztBQUVBLGNBQUl1UixjQUFjdlIsS0FBS29KLEVBQUwsQ0FBUSxPQUFSLENBQWxCO0FBQ0FwSixlQUFLb0osRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBQzlDLENBQUQsRUFBTztBQUN4QjtBQUNFaUwsd0JBQVkvSyxJQUFaLFNBQXVCRixFQUFFN0UsSUFBekI7QUFDQTtBQUNBK1Asa0JBQU1oTCxJQUFOLFNBQWlCRixDQUFqQjtBQUNELFdBTEQ7QUFNRDs7QUFFRDtBQUNBLFlBQUl0QyxPQUFPLElBQVg7O0FBRUEsaUJBQVN3TixLQUFULENBQWVsTCxDQUFmLEVBQWtCO0FBQ2hCLGNBQUlBLEVBQUVnSixRQUFOLEVBQWdCO0FBQ2RoSixjQUFFNkosU0FBRixHQUFjN0osRUFBRWdKLFFBQWhCO0FBQ0FoSixjQUFFZ0osUUFBRixHQUFhLElBQWI7QUFDRCxXQUhELE1BSUs7QUFDSGhKLGNBQUVnSixRQUFGLEdBQWFoSixFQUFFNkosU0FBZjtBQUNBN0osY0FBRTZKLFNBQUYsR0FBYyxJQUFkO0FBQ0Q7QUFDREQsaUJBQU8xSixJQUFQLENBQVl4QyxJQUFaLEVBQWtCc0MsQ0FBbEI7QUFDRDs7QUFFRCx3Q0FBZ0IsS0FBSzJGLFNBQXJCOztBQUVBcEosbUJBQVcsWUFBTTtBQUNmLGlCQUFLbEMsTUFBTCxDQUFZaU0sU0FBWjtBQUNELFNBRkQsRUFFRyxLQUFLOU0sa0JBRlI7QUFHRDs7QUFFRCxhQUFPLElBQVA7QUFFRDs7OytCQUVVLENBQUU7O0FBRWI7Ozs7Ozs7d0JBSWU7QUFDYixVQUFJMlIsY0FBYyxLQUFLaFEsSUFBTCxDQUFVaUUsTUFBVixDQUFpQitILEtBQWpCLENBQXVCNEMsS0FBdkIsR0FBK0JoTyxPQUFPQyxNQUFQLENBQWMsS0FBS2IsSUFBTCxDQUFVaUUsTUFBVixDQUFpQitILEtBQWpCLENBQXVCNEMsS0FBckMsQ0FBL0IsR0FBNkUsRUFBL0Y7QUFDQSxVQUFJcUIsVUFBVUQsWUFBWUUsTUFBWixDQUFtQixVQUFVbE4sR0FBVixFQUFlekUsSUFBZixFQUFxQjtBQUNwRHlFLFlBQUl6RSxLQUFLdU0sRUFBVCxJQUFldk0sSUFBZjtBQUNBLGVBQU95RSxHQUFQO0FBQ0QsT0FIYSxFQUdYLEVBSFcsQ0FBZDtBQUlBLFVBQUk0SyxXQUFXLEVBQWY7QUFDQW9DLGtCQUFZdEwsT0FBWixDQUFvQixVQUFTbkcsSUFBVCxFQUFlO0FBQ2pDLFlBQUlXLFNBQVMrUSxRQUFRMVIsS0FBS1csTUFBYixDQUFiO0FBQ0EsWUFBSUEsTUFBSixFQUFZO0FBQ1YsV0FBQ0EsT0FBTzJPLFFBQVAsS0FBb0IzTyxPQUFPMk8sUUFBUCxHQUFrQixFQUF0QyxDQUFELEVBQTRDckgsSUFBNUMsQ0FBaURqSSxJQUFqRDtBQUNELFNBRkQsTUFHSztBQUNIcVAsbUJBQVNwSCxJQUFULENBQWNqSSxJQUFkO0FBQ0Q7QUFDRixPQVJEO0FBU0EsYUFBT3FQLFNBQVMsQ0FBVCxDQUFQO0FBQ0Q7Ozs7O2tCQXpNa0JILFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUIwQyxXLFdBTWxCLDZCQUFTLE9BQVQsQzs7O0FBSkQsNkJBQTREO0FBQUEsNEJBQTlDMVMsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEscUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdRO0FBQUE7O0FBRVBlLFNBQUdvSixLQUFILENBQVNzSSxjQUFUOztBQUVBLFdBQUtoUyxPQUFMLEdBQWUsS0FBS2lNLFVBQUwsQ0FBZ0IxTCxNQUFoQixDQUF1QixnQ0FBdkIsQ0FBZjtBQUNBO0FBQ0EsVUFBSSxDQUFDLEtBQUtQLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGFBQUtILE9BQUwsR0FBZSxLQUFLaU0sVUFBTCxDQUFnQjVILE1BQWhCLENBQXVCLEtBQXZCLEVBQ1p0RCxJQURZLENBQ1AsT0FETyxFQUNFLDRCQURGLENBQWY7QUFFRDs7QUFFRCxVQUFJbUwsTUFBTTVMLEdBQUc2TCxLQUFILENBQVMsS0FBS0MsU0FBTCxDQUFlak0sSUFBZixFQUFULENBQVY7O0FBRUEsV0FBS0gsT0FBTCxDQUFhNkcsS0FBYixDQUFtQixNQUFuQixFQUEyQnFGLElBQUksQ0FBSixJQUFTLENBQVQsR0FBYSxJQUF4QyxFQUE4Q3JGLEtBQTlDLENBQW9ELEtBQXBELEVBQTJEcUYsSUFBSSxDQUFKLElBQVMsQ0FBVCxHQUFhLElBQXhFOztBQUVBO0FBQ0EsV0FBS2xNLE9BQUwsQ0FBYTZHLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUI7O0FBRUE7QUFDQSxVQUFJLEtBQUs3RyxPQUFMLENBQWFpRSxTQUFiLENBQXVCLEdBQXZCLEVBQTRCOUQsSUFBNUIsRUFBSixFQUF3QztBQUN0QztBQUNEOztBQUVEO0FBQ0FHLFNBQUdDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCZ0osRUFBbEIsQ0FBcUIsMkJBQXJCLEVBQWtEO0FBQUEsZUFBTSxPQUFLMUosUUFBTCxFQUFOO0FBQUEsT0FBbEQ7O0FBRUE7QUFDQSxVQUFJb04sT0FBTyxLQUFLak4sT0FBTCxDQUFhcUUsTUFBYixDQUFvQixLQUFwQixFQUEyQnRELElBQTNCLENBQWdDLE9BQWhDLEVBQXlDLHFCQUF6QyxFQUFnRXNELE1BQWhFLENBQXVFLElBQXZFLENBQVg7QUFDQSxVQUFJbUcsZ0JBQWdCLEtBQUtVLFFBQUwsQ0FBYzFJLE9BQU9DLE1BQVAsQ0FBYyxLQUFLYixJQUFMLENBQVVtSixLQUF4QixDQUFkLENBQXBCO0FBQ0EsV0FBS0ksUUFBTCxDQUFjOEIsSUFBZCxFQUFvQnpDLGFBQXBCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJLEtBQUt4SyxPQUFULEVBQWtCO0FBQ2hCLGFBQUtBLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJLLE1BQTVCO0FBQ0EsYUFBS3RFLE9BQUwsQ0FBYTZHLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsSUFBOUI7QUFDRDtBQUNGOzs7OztrQkE5Q2tCa0wsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkUsaUIsV0FNbEIsc0M7OztBQUpELG1DQUE0RDtBQUFBLDRCQUE5QzVTLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLGlJQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUNQLFVBQUk0RSxPQUFPLElBQVg7O0FBRUEsVUFBSStOLFVBQVUsS0FBS3RRLElBQUwsQ0FBVTBILFFBQVYsQ0FBbUJvRCxFQUFqQzs7QUFFQSxXQUFLNU0sTUFBTCxDQUFZQyxLQUFaLCtCQUE4Q21TLE9BQTlDOztBQUVBLFdBQUtsUyxPQUFMLEdBQWUsS0FBSytMLE1BQUwsQ0FBWTFILE1BQVosQ0FBbUIsS0FBbkIsRUFDWnRELElBRFksQ0FDUCxJQURPLEVBQ0RtUixPQURDLEVBRVpuUixJQUZZLENBRVAsT0FGTyxFQUVFLGNBRkYsQ0FBZjs7QUFJQSxVQUFJb1IsT0FBTyxLQUFLblMsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixNQUFwQixDQUFYOztBQUVBLFVBQUkrTixTQUFTRCxLQUFLOU4sTUFBTCxDQUFZLEtBQVosRUFBbUJ0RCxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxxQkFBakMsQ0FBYjs7QUFFQSxVQUFJc1IsY0FBY0QsT0FBTy9OLE1BQVAsQ0FBYyxNQUFkLEVBQXNCeUcsSUFBdEIsQ0FBMkIsMEJBQTNCLENBQWxCO0FBQ0EsVUFBSSxLQUFLbEosSUFBTCxDQUFVbUYsS0FBZCxFQUFxQjtBQUNuQnNMLG9CQUFZaE8sTUFBWixDQUFtQixNQUFuQixFQUEyQnRELElBQTNCLENBQWdDLE9BQWhDLEVBQXlDLG9CQUF6QyxFQUErRCtGLElBQS9ELFVBQTJFLEtBQUtsRixJQUFMLENBQVVtRixLQUFyRjtBQUNEOztBQUVELFVBQUlpRSxVQUFVbUgsS0FBSzlOLE1BQUwsQ0FBWSxLQUFaLEVBQW1CdEQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsc0JBQWpDLEVBQXlEc0QsTUFBekQsQ0FBZ0UsS0FBaEUsRUFBdUV0RCxJQUF2RSxDQUE0RSxPQUE1RSxFQUFxRixjQUFyRixFQUFxR3NELE1BQXJHLENBQTRHLEtBQTVHLEVBQW1IdEQsSUFBbkgsQ0FBd0gsT0FBeEgsRUFBaUksbUJBQWpJLENBQWQ7O0FBcEJPO0FBQUE7QUFBQTs7QUFBQTtBQXNCUCw2QkFBZ0J5QixPQUFPQyxNQUFQLENBQWMsS0FBS2IsSUFBTCxDQUFVMEgsUUFBVixDQUFtQmlDLFlBQWpDLENBQWhCLDhIQUFnRTtBQUFBLGNBQXZEK0csR0FBdUQ7O0FBQzlELGNBQUloRyxNQUFNdEIsUUFBUTNHLE1BQVIsQ0FBZSxLQUFmLEVBQXNCdEQsSUFBdEIsQ0FBMkIsT0FBM0IsRUFBb0Msa0JBQXBDLENBQVY7QUFDQXVMLGNBQUlqSSxNQUFKLENBQVcsS0FBWCxFQUFrQnRELElBQWxCLENBQXVCLE9BQXZCLEVBQWdDLG1CQUFoQyxFQUFxRHNELE1BQXJELENBQTRELE9BQTVELEVBQXFFdEQsSUFBckUsQ0FBMEUsS0FBMUUsRUFBaUZ1UixJQUFJNUYsRUFBckYsRUFBeUY1RixJQUF6RixDQUE4RndMLElBQUl2TCxLQUFsRztBQUNBLGNBQUl1RyxRQUFRaEIsSUFBSWpJLE1BQUosQ0FBVyxLQUFYLEVBQWtCdEQsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsbUJBQWhDLEVBQXFEc0QsTUFBckQsQ0FBNEQsT0FBNUQsRUFBcUV0RCxJQUFyRSxDQUEwRSxJQUExRSxFQUFnRnVSLElBQUk1RixFQUFwRixFQUF3RjNMLElBQXhGLENBQTZGLE9BQTdGLEVBQXNHLFlBQXRHLEVBQ1RBLElBRFMsQ0FDSixVQURJLEVBQ1EsRUFEUixFQUVUQSxJQUZTLENBRUosTUFGSSxFQUVJdVIsSUFBSTVGLEVBRlIsRUFHVDNMLElBSFMsQ0FHSixNQUhJLEVBR0l1UixJQUFJdkksSUFIUixFQUlUaEosSUFKUyxDQUlKLE9BSkksRUFJS3VSLElBQUk3USxLQUpULEVBS1Q4SCxFQUxTLENBS04sUUFMTSxFQUtJLFlBQVk7QUFDeEJwRixpQkFBS3ZDLElBQUwsQ0FBVTBILFFBQVYsQ0FBbUJpQyxZQUFuQixDQUFnQyxLQUFLbUIsRUFBckMsRUFBeUNqTCxLQUF6QyxHQUFpRCxLQUFLQSxLQUF0RDtBQUNELFdBUFMsRUFRVDhILEVBUlMsQ0FRTixPQVJNLEVBUUcsS0FBS2dKLFFBUlIsRUFTVGhKLEVBVFMsQ0FTTixPQVRNLEVBU0csS0FBS2dKLFFBVFIsRUFVVGhKLEVBVlMsQ0FVTixPQVZNLEVBVUcsS0FBS2dKLFFBVlIsQ0FBWjtBQVdBO0FBQ0EsY0FBSUQsSUFBSXZJLElBQUosS0FBYSxTQUFqQixFQUE0QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQXVJLGdCQUFJN1EsS0FBSixHQUFZNlEsSUFBSTdRLEtBQUosSUFBYSxLQUF6QjtBQUNBNkwsa0JBQU12TSxJQUFOLENBQVcsTUFBWCxFQUFtQixVQUFuQixFQUErQkEsSUFBL0IsQ0FBb0MsVUFBcEMsRUFBZ0QsSUFBaEQsRUFDR0EsSUFESCxDQUNRLE9BRFIsRUFDaUJ1UixJQUFJN1EsS0FEckIsRUFFRzhILEVBRkgsQ0FFTSxRQUZOLEVBRWdCLFlBQVc7QUFBRXBGLG1CQUFLdkMsSUFBTCxDQUFVMEgsUUFBVixDQUFtQmlDLFlBQW5CLENBQWdDLEtBQUttQixFQUFyQyxFQUF5Q2pMLEtBQXpDLEdBQWlELEtBQUtBLEtBQUwsR0FBYSxLQUFLK1EsT0FBbkU7QUFBNkUsYUFGMUc7QUFHRDtBQUNEbEcsY0FBSWpJLE1BQUosQ0FBVyxNQUFYLEVBQW1CdEQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBakM7QUFDRDtBQS9DTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWlEUCxVQUFJMFIsU0FBU04sS0FBSzlOLE1BQUwsQ0FBWSxLQUFaLEVBQW1CdEQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUEwUixhQUFPcE8sTUFBUCxDQUFjLFFBQWQsRUFBd0J5QyxJQUF4QixDQUE2QixJQUE3QixFQUFtQ3lDLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkQsWUFBSTRJLEtBQUtoUyxJQUFMLEdBQVl1UyxhQUFaLEVBQUosRUFBaUM7QUFDL0JwUyxhQUFHb0osS0FBSCxDQUFTc0ksY0FBVDtBQUNBLGlCQUFLOVIsT0FBTCxDQUFhWCxlQUFiLENBQTZCLE9BQUtxQyxJQUFMLENBQVUwSCxRQUF2QztBQUNBLGlCQUFLekosUUFBTCxDQUFjOEcsSUFBZDtBQUNEO0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FQRDtBQVFBOEwsYUFBT3BPLE1BQVAsQ0FBYyxRQUFkLEVBQXdCeUMsSUFBeEIsQ0FBNkIsUUFBN0IsRUFBdUN5QyxFQUF2QyxDQUEwQyxPQUExQyxFQUFtRCxZQUFNO0FBQ3ZEakosV0FBR29KLEtBQUgsQ0FBU3NJLGNBQVQ7QUFDQSxlQUFLblMsUUFBTCxDQUFjOEcsSUFBZDtBQUNELE9BSEQ7O0FBS0E7QUFDQSxvREFBOEIsQ0FBQyxTQUFELEVBQVksYUFBWixFQUEyQixpQkFBM0IsRUFBOEMsZUFBOUMsQ0FBOUI7O0FBRUEsVUFBSWdNLGVBQWUzSCxRQUFRL0csU0FBUixDQUFrQixhQUFsQixFQUFpQzlELElBQWpDLEVBQW5CO0FBQ0EsVUFBSXdTLFlBQUosRUFBa0I7QUFDaEJBLHFCQUFhQyxLQUFiO0FBQ0Q7O0FBRUQsV0FBSzlTLE1BQUwsQ0FBWUMsS0FBWiw4QkFBNkNtUyxPQUE3Qzs7QUFFQSxhQUFPLElBQVA7QUFDRDs7Ozs7a0JBbEZrQkQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJZLFksV0FNbEIsc0M7OztBQUpELDhCQUE0RDtBQUFBLDRCQUE5Q3hULE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUNQLFVBQUk0RSxPQUFPLElBQVg7O0FBRUEsVUFBSTJPLG1CQUFtQixLQUFLbFIsSUFBTCxDQUFVaUUsTUFBVixDQUFpQitILEtBQWpCLENBQXVCbUYsVUFBOUM7O0FBRUEsVUFBSW5CLGNBQWMsS0FBS2hRLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUIrSCxLQUFqQixDQUF1QjRDLEtBQXZCLEdBQStCaE8sT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUIrSCxLQUFqQixDQUF1QjRDLEtBQXJDLENBQS9CLEdBQTZFLEVBQS9GO0FBQUEsVUFDRXdDLGNBQWMsS0FBS3BSLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUIrSCxLQUFqQixDQUF1QjhDLEtBQXZCLEdBQStCbE8sT0FBT0MsTUFBUCxDQUFjLEtBQUtiLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUIrSCxLQUFqQixDQUF1QjhDLEtBQXJDLENBQS9CLEdBQTZFLEVBRDdGOztBQUdBLFVBQUlFLFlBQVksS0FBSzVRLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWhCOztBQUVBLFVBQUksQ0FBQzJNLFVBQVV6USxJQUFWLEVBQUwsRUFBdUI7QUFDckJ5USxvQkFBWSxLQUFLNVEsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQVo7QUFDRDs7QUFFRCxVQUFJMlAsUUFBUUUsVUFBVTNNLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUNyQyxJQUFyQyxFQUFaO0FBQ0EsVUFBSXFSLGFBQWEsS0FBS0Msa0JBQUwsQ0FBd0JGLFdBQXhCLEVBQXFDdEMsS0FBckMsQ0FBakI7O0FBRUEsVUFBSUcsT0FBT0QsVUFBVTNNLFNBQVYsQ0FBb0IsZUFBcEIsRUFBcUNyQyxJQUFyQyxDQUEwQ3FSLFVBQTFDLEVBQXNEO0FBQUEsZUFBS3hNLEVBQUVpRyxFQUFQO0FBQUEsT0FBdEQsQ0FBWDs7QUFFQSxVQUFJd0UsWUFBWSxLQUFLbFIsT0FBTCxDQUFhaUUsU0FBYixDQUF1QixnQkFBdkIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDaU4sVUFBVS9RLElBQVYsRUFBTCxFQUF1QjtBQUNyQitRLG9CQUFZLEtBQUtsUixPQUFMLENBQWFxRSxNQUFiLENBQW9CLEdBQXBCLEVBQXlCdEQsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsY0FBdkMsQ0FBWjtBQUNEOztBQUVELFVBQUl5UCxRQUFRVSxVQUFVak4sU0FBVixDQUFvQixlQUFwQixFQUFxQ3JDLElBQXJDLEVBQVo7QUFDQSxVQUFJdVIsYUFBYSxLQUFLRCxrQkFBTCxDQUF3QnRCLFdBQXhCLEVBQXFDcEIsS0FBckMsQ0FBakI7O0FBRUEsVUFBSXJRLE9BQU8rUSxVQUFVak4sU0FBVixDQUFvQixlQUFwQixFQUFxQ3JDLElBQXJDLENBQTBDdVIsVUFBMUMsRUFBc0Q7QUFBQSxlQUFLMU0sRUFBRWlHLEVBQVA7QUFBQSxPQUF0RCxDQUFYOztBQUVBLFVBQUl2TSxLQUFLbUgsSUFBTCxHQUFZMUYsSUFBWixHQUFtQlcsTUFBbkIsS0FBOEIsQ0FBOUIsSUFDRnBDLEtBQUtvSCxLQUFMLEdBQWEzRixJQUFiLEdBQW9CVyxNQUFwQixLQUErQixDQUQ3QixJQUVGc08sS0FBS3RKLEtBQUwsR0FBYTNGLElBQWIsR0FBb0JXLE1BQXBCLEtBQStCLENBRjdCLElBR0ZzTyxLQUFLdkosSUFBTCxHQUFZMUYsSUFBWixHQUFtQlcsTUFBbkIsS0FBOEIsQ0FIaEMsRUFHbUM7QUFDakM7QUFDRDs7QUFFRCxVQUFJdU8sWUFBWUQsS0FBS3RKLEtBQUwsR0FBYWxELE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUJ0RCxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxhQUF2QyxDQUFoQjs7QUFFQStQLGdCQUFVek0sTUFBVixDQUFpQixNQUFqQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGFBQXZDOztBQUVBOFAsV0FBS3ZKLElBQUwsR0FBWWhELE1BQVo7O0FBRUF1TSxhQUFPRCxVQUFVM00sU0FBVixDQUFvQixnQ0FBcEIsQ0FBUDs7QUFFQSxVQUFJLEtBQUtyQyxJQUFMLENBQVVpRSxNQUFWLENBQWlCK0gsS0FBakIsQ0FBdUI3RCxJQUF2QixLQUFnQyxVQUFwQyxFQUFnRDtBQUM5QztBQUNBNUYsYUFBS3JELE1BQUwsQ0FBWXVELE1BQVosQ0FBbUIsTUFBbkIsRUFBMkJKLFNBQTNCLENBQXFDLFFBQXJDLEVBQ0dyQyxJQURILENBQ1EsQ0FBQyxPQUFELENBRFIsRUFFRzJGLEtBRkgsR0FFV2xELE1BRlgsQ0FFa0IsUUFGbEIsRUFHR3RELElBSEgsQ0FHUSxPQUhSLEVBR2lCLGVBSGpCLEVBSUdBLElBSkgsQ0FJUSxJQUpSLEVBSWM7QUFBQSxpQkFBSzBGLENBQUw7QUFBQSxTQUpkLEVBS0cxRixJQUxILENBS1EsU0FMUixFQUttQixZQUxuQixFQU1HQSxJQU5ILENBTVEsTUFOUixFQU1nQixFQU5oQixFQU9HQSxJQVBILENBT1EsTUFQUixFQU9nQixDQVBoQixFQVFHQSxJQVJILENBUVEsYUFSUixFQVF1QixFQVJ2QixFQVNHQSxJQVRILENBU1EsY0FUUixFQVN3QixFQVR4QixFQVVHQSxJQVZILENBVVEsUUFWUixFQVVrQixNQVZsQixFQVdHc0QsTUFYSCxDQVdVLE1BWFYsRUFZR3RELElBWkgsQ0FZUSxHQVpSLEVBWWEsNkJBWmI7QUFhQTtBQUNBOFAsYUFBS2hLLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLGFBQXpCO0FBQ0Q7O0FBRUQsVUFBSXNLLFlBQVloUixLQUFLb0gsS0FBTCxHQUFhbEQsTUFBYixDQUFvQixHQUFwQixFQUNidEQsSUFEYSxDQUNSLE9BRFEsRUFDQyxhQURELEVBQ2dCQSxJQURoQixDQUNxQixJQURyQixFQUMyQjtBQUFBLGVBQUswRixFQUFFaUcsRUFBUDtBQUFBLE9BRDNCLENBQWhCOztBQUdBeUUsZ0JBQVU5TSxNQUFWLENBQWlCLE1BQWpCLEVBQ0d0RCxJQURILENBQ1EsR0FEUixFQUNhVCxHQUFHOFEsTUFBSCxHQUFZckgsSUFBWixDQUFpQjtBQUFBLGVBQUssZ0JBQU1zSCxTQUFOLENBQWdCNUssRUFBRXNELElBQWxCLENBQUw7QUFBQSxPQUFqQixFQUErQ21HLElBQS9DLENBQW9EO0FBQUEsZUFBS3pKLEVBQUV5SixJQUFGLEdBQVMsR0FBZDtBQUFBLE9BQXBELENBRGIsRUFFR3JKLEtBRkgsQ0FFUyxNQUZULEVBRWlCO0FBQUEsZUFBSyxnQkFBTWEsTUFBTixDQUFhakIsRUFBRStLLEtBQUYsR0FBVSxDQUF2QixDQUFMO0FBQUEsT0FGakIsRUFHR3pRLElBSEgsQ0FHUSxPQUhSLEVBR2lCO0FBQUEsZUFBSyxtQkFBbUIwRixFQUFFMk0sU0FBRixHQUFjLG1CQUFkLEdBQW9DLEVBQXZELEtBQThENVEsT0FBT0MsTUFBUCxDQUFjZ0UsRUFBRXNFLEtBQWhCLEVBQXVCeEksTUFBdkIsR0FBZ0MsaUJBQWhDLEdBQW9ELEVBQWxILENBQUw7QUFBQSxPQUhqQjs7QUFLQTRPLGdCQUFVOU0sTUFBVixDQUFpQixNQUFqQixFQUNHdEQsSUFESCxDQUNRLE9BRFIsRUFDaUIsY0FEakIsRUFFRytGLElBRkgsQ0FFUTtBQUFBLGVBQUtMLEVBQUVNLEtBQVA7QUFBQSxPQUZSLEVBR0doRyxJQUhILENBR1EsR0FIUixFQUdhLFlBQVc7QUFDcEIsWUFBSXVRLFFBQVEsS0FBSzNDLE9BQUwsRUFBWjtBQUNBLGVBQU8sRUFBRTJDLE1BQU16USxLQUFOLEdBQWMsQ0FBaEIsQ0FBUDtBQUNELE9BTkg7O0FBUUFWLFdBQUttSCxJQUFMLEdBQVloRCxNQUFaOztBQUVBbkUsYUFBTytRLFVBQVVqTixTQUFWLENBQW9CLGVBQXBCLENBQVA7O0FBRUEsVUFBSSxLQUFLckMsSUFBTCxDQUFVaUUsTUFBVixDQUFpQitILEtBQWpCLENBQXVCeUYsSUFBM0IsRUFBaUM7QUFDL0JsVCxhQUFLd0csSUFBTCxDQUFVckcsR0FBRytTLElBQUgsR0FDUDlKLEVBRE8sQ0FDSixPQURJLEVBQ0srSixXQURMLEVBRVAvSixFQUZPLENBRUosTUFGSSxFQUVJZ0ssT0FGSixFQUdQaEssRUFITyxDQUdKLEtBSEksRUFHR2lLLFNBSEgsQ0FBVjtBQUlEOztBQUVELFVBQUlyVCxRQUFRLENBQUNBLEtBQUtzVCxLQUFMLEVBQWIsRUFBMkI7O0FBRXpCLGFBQUtoQyxZQUFMLENBQWtCdFIsSUFBbEI7O0FBRUEsWUFBSSxLQUFLeUIsSUFBTCxDQUFVaUUsTUFBVixDQUFpQitILEtBQWpCLENBQXVCOEYsY0FBM0IsRUFBMkM7QUFDekMsY0FBSWhDLGNBQWN2UixLQUFLb0osRUFBTCxDQUFRLE9BQVIsQ0FBbEI7QUFDQXBKLGVBQUtvSixFQUFMLENBQVEsT0FBUixFQUFpQixVQUFTOUMsQ0FBVCxFQUFZO0FBQzNCO0FBQ0FrTiwyQkFBZWhOLElBQWYsQ0FBb0IsSUFBcEI7QUFDQTtBQUNBK0ssd0JBQVkvSyxJQUFaLENBQWlCLElBQWpCLEVBQXVCRixDQUF2QjtBQUNELFdBTEQ7QUFNRDtBQUNGOztBQUVELFVBQUlxTSxnQkFBSixFQUFzQjtBQUNwQjtBQUNBLFlBQUljLFNBQVMsQ0FBYjtBQUNBelQsYUFBSytELElBQUwsQ0FBVSxZQUFVO0FBQ2xCLGNBQUlvTixRQUFRLEtBQUszQyxPQUFMLEVBQVo7QUFDQSxjQUFJaUYsU0FBU3RDLE1BQU16USxLQUFuQixFQUEwQjtBQUN4QitTLHFCQUFTdEMsTUFBTXpRLEtBQWY7QUFDRDtBQUNGLFNBTEQ7QUFNQTtBQUNBO0FBQ0EsWUFBSWdULFlBQVl2VCxHQUFHd1QsYUFBSCxHQUFtQkMsUUFBbkIsQ0FBNEIsQ0FBQ25DLFlBQVlyUCxNQUFiLEdBQXNCLEVBQWxELENBQWhCO0FBQ0EsWUFBSXlSLFlBQVkxVCxHQUFHMlQsU0FBSCxDQUFhakIsV0FBYixFQUEwQnRHLEVBQTFCLENBQTZCO0FBQUEsaUJBQUtqRyxFQUFFaUcsRUFBUDtBQUFBLFNBQTdCLEVBQXdDd0gsUUFBeEMsQ0FBaUQsRUFBakQsQ0FBaEI7QUFDQSxZQUFJQyxlQUFlN1QsR0FBRzhULFlBQUgsR0FBa0JSLE1BQWxCLENBQXlCQSxTQUFPLENBQWhDLEVBQW1DUyxVQUFuQyxDQUE4QyxDQUE5QyxDQUFuQjs7QUFFQTtBQUNBLFlBQUlDLFNBQVNoVSxHQUFHZ1UsTUFBSCxDQUFVLEtBQUt6VCxLQUFmLEVBQXNCa1QsUUFBdEIsQ0FBK0IsSUFBL0IsQ0FBYjs7QUFFQTtBQUNBLFlBQUlRLFNBQVNqVSxHQUFHaVUsTUFBSCxDQUFVLENBQUMsS0FBS3JULE1BQWhCLEVBQXdCNlMsUUFBeEIsQ0FBaUMsSUFBakMsQ0FBYjs7QUFFQSxZQUFJLEtBQUtuUyxJQUFMLENBQVVpRSxNQUFWLENBQWlCK0gsS0FBakIsQ0FBdUI3RCxJQUF2QixLQUFnQyxPQUFwQyxFQUE2QztBQUMzQztBQUNBdUssbUJBQVNoVSxHQUFHZ1UsTUFBSCxDQUFVLEtBQUt6VCxLQUFmLEVBQXNCa1QsUUFBdEIsQ0FBK0IsR0FBL0IsQ0FBVDtBQUNBO0FBQ0FRLG1CQUFTalUsR0FBR2lVLE1BQUgsQ0FBVTtBQUFBLG1CQUFLOU4sRUFBRStLLEtBQUYsR0FBVSxFQUFmO0FBQUEsV0FBVixFQUE2QnVDLFFBQTdCLENBQXNDLEdBQXRDLENBQVQ7QUFDRDs7QUFFRCxZQUFJaEIsYUFBYXpTLEdBQUdrVSxlQUFILEdBQXFCaEUsS0FBckIsQ0FBMkIyQyxVQUEzQixFQUNkc0IsS0FEYyxDQUNSLFFBRFEsRUFDRVosU0FERixFQUVkWSxLQUZjLENBRVIsTUFGUSxFQUVBVCxTQUZBO0FBR2Y7QUFIZSxTQUlkUyxLQUpjLENBSVIsR0FKUSxFQUlISCxNQUpHLEVBS2RHLEtBTGMsQ0FLUixHQUxRLEVBS0hGLE1BTEcsRUFNZEUsS0FOYyxDQU1SLFNBTlEsRUFNR04sWUFOSCxFQU9kNUssRUFQYyxDQU9YLE1BUFcsRUFPSG1MLE1BUEcsRUFRZG5MLEVBUmMsQ0FRWCxLQVJXLEVBUUosWUFBVztBQUNwQjtBQUNBcEYsZUFBS3JELE1BQUwsQ0FBWWlNLFNBQVo7QUFDRCxTQVhjLENBQWpCOztBQWFBO0FBQ0FnRyxtQkFBVzRCLEtBQVgsQ0FBaUIsR0FBakIsRUFBc0JDLE9BQXRCO0FBQ0QsT0EzQ0QsTUE0Q0s7QUFDSDtBQUNBRjtBQUNBdlEsYUFBS3JELE1BQUwsQ0FBWWlNLFNBQVo7QUFDRDs7QUFFRCxlQUFTMkgsTUFBVCxHQUFrQjtBQUNoQjdELGFBQ0c5UCxJQURILENBQ1EsSUFEUixFQUNjO0FBQUEsaUJBQUswRixFQUFFOEosTUFBRixDQUFTcEssQ0FBZDtBQUFBLFNBRGQsRUFFR3BGLElBRkgsQ0FFUSxJQUZSLEVBRWM7QUFBQSxpQkFBSzBGLEVBQUU4SixNQUFGLENBQVNuSyxDQUFkO0FBQUEsU0FGZCxFQUdHckYsSUFISCxDQUdRLElBSFIsRUFHYztBQUFBLGlCQUFLMEYsRUFBRWhILE1BQUYsQ0FBUzBHLENBQWQ7QUFBQSxTQUhkLEVBSUdwRixJQUpILENBSVEsSUFKUixFQUljO0FBQUEsaUJBQUswRixFQUFFaEgsTUFBRixDQUFTMkcsQ0FBZDtBQUFBLFNBSmQ7O0FBTUFqRyxhQUFLWSxJQUFMLENBQVUsV0FBVixFQUF1QjtBQUFBLGdDQUFrQjBGLEVBQUVOLENBQXBCLFNBQXlCTSxFQUFFTCxDQUEzQjtBQUFBLFNBQXZCO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUl5TyxTQUFTLENBQWI7QUFDQTtBQUNBLFVBQUlDLGdCQUFnQixFQUFwQjs7QUFFQSxXQUFLLElBQUl0TixJQUFJLENBQWIsRUFBZ0JBLElBQUlvSyxZQUFZclAsTUFBaEMsRUFBd0NpRixHQUF4QyxFQUE2QztBQUMzQ3NOLHNCQUFpQnROLENBQWpCLFNBQXNCQSxDQUF0QixJQUE2QixDQUE3QjtBQUNEOztBQUVEd0wsa0JBQVkxTSxPQUFaLENBQW9CLFVBQVNHLENBQVQsRUFBWTtBQUM5QnFPLHNCQUFpQnJPLEVBQUU4SixNQUFGLENBQVN3RSxLQUExQixTQUFtQ3RPLEVBQUVoSCxNQUFGLENBQVNzVixLQUE1QyxJQUF1RCxDQUF2RDtBQUNELE9BRkQ7O0FBSUEsZUFBU3BCLGNBQVQsR0FBMEI7QUFDeEI7QUFDQSxpQkFBU3FCLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQjtBQUN6QixpQkFBT0osY0FBaUJHLEVBQUVGLEtBQW5CLFNBQTRCRyxFQUFFSCxLQUE5QixDQUFQO0FBQ0Q7QUFDRHpVLFdBQUdvSixLQUFILENBQVNzSSxjQUFUO0FBQ0EsWUFBSTZDLFdBQVcsQ0FBZixFQUFrQjtBQUNoQjtBQUNBLGNBQUlwTyxJQUFJbkcsR0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JKLElBQWhCLEdBQXVCZ1YsUUFBL0I7QUFDQWhWLGVBQUswRyxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUFBLG1CQUFLbU8sWUFBWXZPLENBQVosRUFBZXNLLENBQWYsS0FBcUJpRSxZQUFZakUsQ0FBWixFQUFldEssQ0FBZixDQUFyQixHQUF5QyxDQUF6QyxHQUE2QyxHQUFsRDtBQUFBLFdBQXRCO0FBQ0FvSyxlQUFLaEssS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFBQSxtQkFBS0osRUFBRXNPLEtBQUYsS0FBWWhFLEVBQUVSLE1BQUYsQ0FBU3dFLEtBQXJCLElBQThCdE8sRUFBRXNPLEtBQUYsS0FBWWhFLEVBQUV0UixNQUFGLENBQVNzVixLQUFuRCxHQUEyRCxDQUEzRCxHQUErRCxHQUFwRTtBQUFBLFdBQXRCO0FBQ0E7QUFDQUYsbUJBQVMsQ0FBVDtBQUNELFNBUEQsTUFRSztBQUNIO0FBQ0ExVSxlQUFLMEcsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQWdLLGVBQUtoSyxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBZ08sbUJBQVMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsZUFBU3ZCLFdBQVQsQ0FBcUI3TSxDQUFyQixFQUF3QjtBQUN0QixZQUFJLENBQUNuRyxHQUFHb0osS0FBSCxDQUFTMEwsTUFBVixJQUFvQnRDLGdCQUF4QixFQUEwQztBQUN4Q0MscUJBQVdzQyxXQUFYLENBQXVCLElBQXZCLEVBQTZCVCxPQUE3QjtBQUNEO0FBQ0RuTyxVQUFFNk8sRUFBRixHQUFPN08sRUFBRU4sQ0FBVDtBQUNBTSxVQUFFOE8sRUFBRixHQUFPOU8sRUFBRUwsQ0FBVDtBQUNEOztBQUVELGVBQVNtTixPQUFULENBQWlCOU0sQ0FBakIsRUFBb0I7QUFDbEJBLFVBQUU2TyxFQUFGLEdBQU9oVixHQUFHb0osS0FBSCxDQUFTdkQsQ0FBaEI7QUFDQU0sVUFBRThPLEVBQUYsR0FBT2pWLEdBQUdvSixLQUFILENBQVN0RCxDQUFoQjtBQUNEOztBQUVELGVBQVNvTixTQUFULENBQW1CL00sQ0FBbkIsRUFBc0I7QUFDcEIsWUFBSSxDQUFDbkcsR0FBR29KLEtBQUgsQ0FBUzBMLE1BQVYsSUFBb0J0QyxnQkFBeEIsRUFBMEM7QUFDeENDLHFCQUFXc0MsV0FBWCxDQUF1QixDQUF2QjtBQUNEO0FBQ0Q1TyxVQUFFNk8sRUFBRixHQUFPLElBQVA7QUFDQTdPLFVBQUU4TyxFQUFGLEdBQU8sSUFBUDtBQUNEOztBQUVELHNDQUFnQixLQUFLbkosU0FBckI7O0FBRUEsYUFBTyxJQUFQO0FBRUQ7OzsrQkFFVSxDQUFFOzs7dUNBRU1vSixhLEVBQWVDLFMsRUFBVztBQUMzQyxVQUFJQyxjQUFjLEVBQWxCO0FBQ0FGLG9CQUFjbFAsT0FBZCxDQUFzQixhQUFLO0FBQ3pCLFlBQUl1SyxPQUFPNEUsVUFBVUUsSUFBVixDQUFlO0FBQUEsaUJBQUtsUCxFQUFFaUcsRUFBRixLQUFTcUUsRUFBRXJFLEVBQWhCO0FBQUEsU0FBZixDQUFYO0FBQ0EsWUFBSW1FLElBQUosRUFBVTtBQUNSNkUsc0JBQVl0TixJQUFaLENBQWlCeUksSUFBakI7QUFDRCxTQUZELE1BR0s7QUFDSDZFLHNCQUFZdE4sSUFBWixDQUFpQjJJLENBQWpCO0FBQ0Q7QUFDRixPQVJEO0FBU0EsYUFBTzJFLFdBQVA7QUFDRDs7Ozs7a0JBMVBrQjdDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIrQyxZLFdBTWxCLDZCQUFTLGNBQVQsQzs7O0FBSkQsOEJBQTREO0FBQUEsNEJBQTlDdlcsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsdUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdROztBQUVQLFVBQUlTLFVBQVVKLFNBQWQ7QUFDQSxjQUFRLEtBQUtnQyxJQUFMLENBQVVpRSxNQUFWLENBQWlCQyxLQUFqQixDQUF1QmlFLElBQS9CO0FBQ0EsYUFBSyxLQUFMO0FBQ0UvSixvQkFBVSx1QkFBYSxLQUFLRSxPQUFsQixFQUEyQm9JLElBQTNCLENBQWdDLEtBQUsxRyxJQUFyQyxFQUEyQ2pDLE1BQTNDLEVBQVY7QUFDQTtBQUNGLGFBQUssTUFBTDtBQUNFSyxvQkFBVSx3QkFBYyxLQUFLRSxPQUFuQixFQUE0Qm9JLElBQTVCLENBQWlDLEtBQUsxRyxJQUF0QyxFQUE0Q2pDLE1BQTVDLEVBQVY7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFSyxvQkFBVSwyQkFBaUIsS0FBS0UsT0FBdEIsRUFBK0JvSSxJQUEvQixDQUFvQyxLQUFLMUcsSUFBekMsRUFBK0NqQyxNQUEvQyxFQUFWO0FBQ0E7QUFURjs7QUFZQSxhQUFPSyxPQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkF6Qk00VixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQyxRLFdBTWxCLHNDOzs7QUFKRCwwQkFBNEQ7QUFBQSw0QkFBOUN4VyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSwrR0FDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsV0FBS2tHLE1BQUwsR0FBY25GLEdBQUd3VixTQUFILEdBQWU3UCxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJLEtBQUtwRixLQUFULENBQXJCLEVBQXNDa1YsT0FBdEMsQ0FBOEMsR0FBOUMsRUFBbUQ3UCxNQUFuRCxDQUEwRCxLQUFLWCxJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBdEUsQ0FBZDs7QUFFQSxVQUFJLENBQUMsS0FBS1gsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQVosQ0FBbUIzRCxNQUF4QixFQUFnQztBQUM5QixhQUFLZ0QsSUFBTCxDQUFVWSxDQUFWLENBQVlELE1BQVosR0FBcUIsZ0JBQU04UCxXQUFOLENBQWtCLEtBQUszUCxTQUFMLENBQWU5RCxNQUFmLEdBQXdCLEtBQUtvRCxZQUFMLENBQWtCcEQsTUFBNUQsQ0FBckI7QUFDQSxhQUFLa0QsTUFBTCxDQUFZUyxNQUFaLENBQW1CLEtBQUtYLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUEvQjtBQUNEOztBQUVELFVBQUkrUCxZQUFZLEtBQUtqVyxPQUFMLENBQWFpRSxTQUFiLENBQXVCLGVBQXZCLENBQWhCOztBQUVBLFVBQUksQ0FBQ2dTLFVBQVU5VixJQUFWLEVBQUwsRUFBdUI7QUFDckI4VixvQkFBWSxLQUFLalcsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGFBQXZDLENBQVo7QUFDRDs7QUFFRCxVQUFJb0QsT0FBTyxJQUFYOztBQUVBLFdBQUt3QixZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTM0QsR0FBVCxFQUFjb1MsS0FBZCxFQUFxQjtBQUM3QyxZQUFJbUIsTUFBTUQsVUFBVWhTLFNBQVYsa0JBQW1DOFEsS0FBbkMsRUFBNENuVCxJQUE1QyxDQUFpRHVDLEtBQUt1QixRQUFMLENBQWMvQyxHQUFkLENBQWpELENBQVY7O0FBRUF1VCxZQUFJNU8sSUFBSixHQUFXNEgsVUFBWCxHQUF3QkMsUUFBeEIsQ0FBaUMsR0FBakMsRUFDR3RJLEtBREgsQ0FDUyxjQURULEVBQ3lCLElBRHpCLEVBRUd2QyxNQUZIOztBQUlBO0FBQ0EsWUFBSTZSLFdBQVdELElBQUkzTyxLQUFKLEdBQ1psRCxNQURZLENBQ0wsTUFESyxFQUVad0MsS0FGWSxDQUVOLE1BRk0sRUFFRTtBQUFBLGlCQUFNLGdCQUFNYSxNQUFOLENBQWFxTixRQUFRLENBQXJCLENBQU47QUFBQSxTQUZGLEVBR1poVSxJQUhZLENBR1AsT0FITyxrQkFHZ0JnVSxLQUhoQixFQUlaaFUsSUFKWSxDQUlQLEdBSk8sRUFJRixVQUFTMEYsQ0FBVCxFQUFZZSxDQUFaLEVBQWU7QUFDeEIsaUJBQU9yRCxLQUFLc0IsTUFBTCxDQUFZdEIsS0FBS29CLElBQUwsQ0FBVVksQ0FBVixDQUFZRCxNQUFaLENBQW1Cc0IsQ0FBbkIsQ0FBWixJQUFxQ3VOLFNBQVM1USxLQUFLc0IsTUFBTCxDQUFZMlEsU0FBWixLQUEwQmpTLEtBQUt3QixZQUFMLENBQWtCcEQsTUFBckQsQ0FBNUM7QUFDRCxTQU5ZLEVBT1p4QixJQVBZLENBT1AsT0FQTyxFQU9Hb0QsS0FBS3NCLE1BQUwsQ0FBWTJRLFNBQVosS0FBMEJqUyxLQUFLd0IsWUFBTCxDQUFrQnBELE1BQTdDLEdBQXVELENBUHpELEVBUVp4QixJQVJZLENBUVAsR0FSTyxFQVFGLFVBQVMwRixDQUFULEVBQVk7QUFDckIsaUJBQU90QyxLQUFLcUIsTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQ0QsU0FWWSxFQVdaMUYsSUFYWSxDQVdQLFFBWE8sRUFXRyxVQUFTMEYsQ0FBVCxFQUFZO0FBQzFCLGlCQUFPdEMsS0FBS2pELE1BQUwsR0FBY2lELEtBQUtxQixNQUFMLENBQVlpQixDQUFaLENBQXJCO0FBQ0QsU0FiWSxFQWNaOEMsRUFkWSxDQWNULFlBZFMsRUFjSyxVQUFTOUMsQ0FBVCxFQUFZO0FBQzVCbkcsYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IyTyxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUNpQnRJLEtBRGpCLENBQ3VCLGNBRHZCLEVBQ3VDLEdBRHZDO0FBRUExQyxlQUFLeUIsT0FBTCxDQUFhMEMsSUFBYixDQUFrQixnQkFBTTFDLE9BQU4sQ0FBY2pELEdBQWQsRUFBbUI4RCxDQUFuQixDQUFsQixFQUF5QyxJQUF6QyxFQUErQzlHLE1BQS9DO0FBQ0QsU0FsQlksRUFtQlo0SixFQW5CWSxDQW1CVCxZQW5CUyxFQW1CSyxZQUFXO0FBQzNCakosYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IyTyxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUNpQnRJLEtBRGpCLENBQ3VCLGNBRHZCLEVBQ3VDLENBRHZDO0FBRUExQyxlQUFLeUIsT0FBTCxDQUFhL0YsUUFBYjtBQUNELFNBdkJZLENBQWY7O0FBeUJBc1csaUJBQVMxTyxLQUFULENBQWV5TyxHQUFmLEVBQ0duVixJQURILENBQ1EsR0FEUixFQUNhLFVBQVMwRixDQUFULEVBQVllLENBQVosRUFBZTtBQUFFLGlCQUFPckQsS0FBS3NCLE1BQUwsQ0FBWXRCLEtBQUtvQixJQUFMLENBQVVZLENBQVYsQ0FBWUQsTUFBWixDQUFtQnNCLENBQW5CLENBQVosSUFBcUN1TixTQUFTNVEsS0FBS3NCLE1BQUwsQ0FBWTJRLFNBQVosS0FBMEJqUyxLQUFLd0IsWUFBTCxDQUFrQnBELE1BQXJELENBQTVDO0FBQTJHLFNBRHpJLEVBRUd4QixJQUZILENBRVEsT0FGUixFQUVrQm9ELEtBQUtzQixNQUFMLENBQVkyUSxTQUFaLEtBQTBCalMsS0FBS3dCLFlBQUwsQ0FBa0JwRCxNQUE3QyxHQUF1RCxDQUZ4RSxFQUdHeEIsSUFISCxDQUdRLEdBSFIsRUFHYSxVQUFTMEYsQ0FBVCxFQUFZO0FBQUUsaUJBQU90QyxLQUFLcUIsTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQXdCLFNBSG5ELEVBSUcxRixJQUpILENBSVEsUUFKUixFQUlrQixVQUFTMEYsQ0FBVCxFQUFZO0FBQUUsaUJBQU90QyxLQUFLakQsTUFBTCxHQUFjaUQsS0FBS3FCLE1BQUwsQ0FBWWlCLENBQVosQ0FBckI7QUFBc0MsU0FKdEU7QUFLRCxPQXRDRDs7QUF3Q0EsV0FBSzRQLFdBQUw7QUFDQSxXQUFLQyxhQUFMOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBdEVNVCxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCVSxTLFdBTWxCLHNDOzs7QUFKRCwyQkFBNEQ7QUFBQSw0QkFBOUNsWCxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxpSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7QUFFM0Q7Ozs7NkJBR1E7O0FBRVAsVUFBSWlYLGFBQWEsS0FBS3hXLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsZ0JBQXZCLENBQWpCOztBQUVBLFVBQUksQ0FBQ3VTLFdBQVdyVyxJQUFYLEVBQUwsRUFBd0I7QUFDdEJxVyxxQkFBYSxLQUFLeFcsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixHQUFwQixFQUF5QnRELElBQXpCLENBQThCLE9BQTlCLEVBQXVDLGNBQXZDLENBQWI7QUFDRDs7QUFFRCxVQUFJb0QsT0FBTyxJQUFYOztBQUVBLFdBQUt3QixZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTM0QsR0FBVCxFQUFjb1MsS0FBZCxFQUFxQjtBQUM3QyxZQUFJMEIsWUFBWW5XLEdBQUdvVyxJQUFILEdBQ2J2USxDQURhLENBQ1gsVUFBU00sQ0FBVCxFQUFZZSxDQUFaLEVBQWU7QUFDaEIsaUJBQU9yRCxLQUFLc0IsTUFBTCxDQUFZK0IsQ0FBWixDQUFQO0FBQ0QsU0FIYSxFQUlicEIsQ0FKYSxDQUlYLFVBQVNLLENBQVQsRUFBWTtBQUNiLGlCQUFPdEMsS0FBS3FCLE1BQUwsQ0FBWWlCLENBQVosQ0FBUDtBQUNELFNBTmEsQ0FBaEI7O0FBUUEsWUFBSWlRLE9BQU9GLFdBQVd2UyxTQUFYLG1CQUFxQzhRLEtBQXJDLEVBQThDblQsSUFBOUMsQ0FBbUQsQ0FBQ3VDLEtBQUt1QixRQUFMLENBQWMvQyxHQUFkLENBQUQsQ0FBbkQsQ0FBWDs7QUFFQStULGFBQUtwUCxJQUFMLEdBQVk0SCxVQUFaLEdBQXlCQyxRQUF6QixDQUFrQyxHQUFsQyxFQUNHdEksS0FESCxDQUNTLGNBRFQsRUFDeUIsSUFEekIsRUFFR3ZDLE1BRkg7O0FBSUE7QUFDQSxZQUFJcVMsWUFBWUQsS0FBS25QLEtBQUwsR0FDYmxELE1BRGEsQ0FDTixNQURNLEVBRWJ3QyxLQUZhLENBRVAsUUFGTyxFQUVHO0FBQUEsaUJBQU0sZ0JBQU1hLE1BQU4sQ0FBYXFOLFFBQVEsQ0FBckIsQ0FBTjtBQUFBLFNBRkgsRUFHYmxPLEtBSGEsQ0FHUCxjQUhPLEVBR1MsS0FIVCxFQUliOUYsSUFKYSxDQUlSLE9BSlEsbUJBSWdCZ1UsS0FKaEIsRUFLYmhVLElBTGEsQ0FLUixHQUxRLEVBS0gwVixTQUxHLEVBTWJsTixFQU5hLENBTVYsWUFOVSxFQU1JLFVBQVM5QyxDQUFULEVBQVk7QUFDNUJuRyxhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjJPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUd0SSxLQUZILENBRVMsZ0JBRlQsRUFFMkIsR0FGM0IsRUFHR0EsS0FISCxDQUdTLGNBSFQsRUFHeUIsTUFIekI7QUFJQTFDLGVBQUt5QixPQUFMLENBQWEwQyxJQUFiLENBQWtCLGdCQUFNMUMsT0FBTixDQUFjakQsR0FBZCxFQUFtQjhELENBQW5CLENBQWxCLEVBQXlDLElBQXpDLEVBQStDOUcsTUFBL0M7QUFDRCxTQVphLEVBYWI0SixFQWJhLENBYVYsWUFiVSxFQWFJLFlBQVc7QUFDM0JqSixhQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQjJPLFVBQWhCLEdBQ0dDLFFBREgsQ0FDWSxHQURaLEVBRUd0SSxLQUZILENBRVMsZ0JBRlQsRUFFMkIsQ0FGM0IsRUFHR0EsS0FISCxDQUdTLGNBSFQsRUFHeUIsS0FIekI7QUFJQTFDLGVBQUt5QixPQUFMLENBQWEvRixRQUFiO0FBQ0QsU0FuQmEsQ0FBaEI7O0FBcUJBOFcsa0JBQVVsUCxLQUFWLENBQWdCaVAsSUFBaEI7QUFDRCxPQXRDRDs7QUF3Q0EsV0FBS0wsV0FBTDtBQUNBLFdBQUtDLGFBQUw7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkEvRE1DLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJLLFksV0FNbEIsc0M7OztBQUpELDhCQUE0RDtBQUFBLDRCQUE5Q3ZYLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLHVIQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTs7QUFFUCxVQUFJc1gsZUFBZSxLQUFLN1csT0FBTCxDQUFhaUUsU0FBYixDQUF1QixtQkFBdkIsQ0FBbkI7O0FBRUEsVUFBSSxDQUFDNFMsYUFBYTFXLElBQWIsRUFBTCxFQUEwQjtBQUN4QjBXLHVCQUFlLEtBQUs3VyxPQUFMLENBQWFxRSxNQUFiLENBQW9CLEdBQXBCLEVBQXlCdEQsSUFBekIsQ0FBOEIsT0FBOUIsRUFBdUMsaUJBQXZDLENBQWY7QUFDRDs7QUFFRCxVQUFJb0QsT0FBTyxJQUFYOztBQUVBLFdBQUt3QixZQUFMLENBQWtCVyxPQUFsQixDQUEwQixVQUFTM0QsR0FBVCxFQUFjb1MsS0FBZCxFQUFxQjtBQUM3QyxZQUFJK0IsVUFBVUQsYUFBYTVTLFNBQWIsc0JBQTBDOFEsS0FBMUMsRUFBbURuVCxJQUFuRCxDQUF3RHVDLEtBQUt1QixRQUFMLENBQWMvQyxHQUFkLENBQXhELENBQWQ7O0FBRUFtVSxnQkFBUXhQLElBQVIsR0FBZTRILFVBQWYsR0FBNEJDLFFBQTVCLENBQXFDLEdBQXJDLEVBQ0d0SSxLQURILENBQ1MsY0FEVCxFQUN5QixJQUR6QixFQUVHdkMsTUFGSDs7QUFJQTtBQUNBLFlBQUl5UyxlQUFlRCxRQUNoQnZQLEtBRGdCLEdBRWhCbEQsTUFGZ0IsQ0FFVCxRQUZTLEVBR2hCd0MsS0FIZ0IsQ0FHVixNQUhVLEVBR0Y7QUFBQSxpQkFBTSxnQkFBTWEsTUFBTixDQUFhcU4sUUFBUSxDQUFyQixDQUFOO0FBQUEsU0FIRSxFQUloQmhVLElBSmdCLENBSVgsT0FKVyxzQkFJZ0JnVSxLQUpoQixFQUtoQmhVLElBTGdCLENBS1gsR0FMVyxFQUtOLENBTE0sRUFNaEJBLElBTmdCLENBTVgsSUFOVyxFQU1MLFVBQVMwRixDQUFULEVBQVllLENBQVosRUFBZTtBQUN6QixpQkFBT3JELEtBQUtzQixNQUFMLENBQVkrQixDQUFaLENBQVA7QUFDRCxTQVJnQixFQVNoQnpHLElBVGdCLENBU1gsSUFUVyxFQVNMLFVBQVMwRixDQUFULEVBQVk7QUFDdEIsaUJBQU90QyxLQUFLcUIsTUFBTCxDQUFZaUIsQ0FBWixDQUFQO0FBQ0QsU0FYZ0IsRUFZaEI4QyxFQVpnQixDQVliLFlBWmEsRUFZQyxVQUFTOUMsQ0FBVCxFQUFZO0FBQzVCbkcsYUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0IyTyxVQUFoQixHQUNHQyxRQURILENBQ1ksR0FEWixFQUVHdEksS0FGSCxDQUVTLGNBRlQsRUFFeUIsR0FGekIsRUFHRzlGLElBSEgsQ0FHUSxHQUhSLEVBR2EsRUFIYjtBQUlBb0QsZUFBS3lCLE9BQUwsQ0FBYTBDLElBQWIsQ0FBa0IsZ0JBQU0xQyxPQUFOLENBQWNqRCxHQUFkLEVBQW1COEQsQ0FBbkIsQ0FBbEIsRUFBeUMsSUFBekMsRUFBK0M5RyxNQUEvQztBQUNELFNBbEJnQixFQW1CaEI0SixFQW5CZ0IsQ0FtQmIsWUFuQmEsRUFtQkMsWUFBVztBQUMzQmpKLGFBQUdDLE1BQUgsQ0FBVSxJQUFWLEVBQWdCMk8sVUFBaEIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFFR3RJLEtBRkgsQ0FFUyxjQUZULEVBRXlCLENBRnpCLEVBR0c5RixJQUhILENBR1EsR0FIUixFQUdhLENBSGI7QUFJQW9ELGVBQUt5QixPQUFMLENBQWEvRixRQUFiO0FBQ0QsU0F6QmdCLENBQW5COztBQTJCQWtYLHFCQUFhdFAsS0FBYixDQUFtQnFQLE9BQW5CO0FBQ0QsT0FwQ0Q7O0FBc0NBLFdBQUtULFdBQUw7O0FBRUEsV0FBS0MsYUFBTDs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTlETU0sWTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjs7OztBQUNBOzs7O0FBQ0E7O0lBQVlJLFE7Ozs7Ozs7Ozs7OztBQUVaOztJQUVxQkMsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5QzVYLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLCtHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQUkyWCxhQUFhLHlCQUFlLEtBQUtoWCxPQUFwQixDQUFqQjs7QUFFQTtBQUNBLFVBQU1pWCx1QkFBcUIsS0FBS3ZWLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUI2RyxFQUE1QztBQUNBLFdBQUsxTSxPQUFMLEdBQWVNLEdBQUdDLE1BQUgsT0FBYzRXLE1BQWQsQ0FBZjs7QUFFQTtBQUNBLFVBQUksQ0FBQyxLQUFLblgsT0FBTCxDQUFhRyxJQUFiLEVBQUwsRUFBMEI7QUFDeEI7QUFDQSxhQUFLTCxNQUFMLENBQVlDLEtBQVosMEJBQXlDb1gsTUFBekM7QUFDQSxhQUFLblgsT0FBTCxHQUFlLEtBQUtjLE1BQUwsQ0FBWXVELE1BQVosQ0FBbUIsS0FBbkIsRUFBMEJ0RCxJQUExQixDQUErQixPQUEvQixFQUF3Qyx5QkFBeEMsRUFBbUVBLElBQW5FLENBQXdFLElBQXhFLEVBQThFb1csTUFBOUUsQ0FBZjtBQUNEOztBQUVEO0FBQ0EsV0FBS25YLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJLLE1BQTVCOztBQUVBLFdBQUt0RSxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhcUUsTUFBYixDQUFvQixJQUFwQixFQUEwQnRELElBQTFCLENBQStCLE9BQS9CLEVBQXdDLGtCQUF4QyxDQUFmOztBQUVBLFVBQUksS0FBS2EsSUFBTCxDQUFVaUUsTUFBVixDQUFpQmtCLEtBQXJCLEVBQTRCO0FBQzFCLGFBQUsvRyxPQUFMLENBQWFxRSxNQUFiLENBQW9CLElBQXBCLEVBQTBCdEQsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0MsY0FBeEMsRUFBd0RzRCxNQUF4RCxDQUErRCxHQUEvRCxFQUFvRXlHLElBQXBFLENBQXlFLEtBQUtsSixJQUFMLENBQVVpRSxNQUFWLENBQWlCa0IsS0FBMUY7QUFDRDs7QUFFRCxVQUFJNkQsUUFBUSxLQUFLNUssT0FBTCxDQUFhcUUsTUFBYixDQUFvQixJQUFwQixDQUFaO0FBQ0F1RyxZQUFNdkcsTUFBTixDQUFhLEdBQWIsRUFBa0J5RyxJQUFsQixDQUF1QixRQUF2QjtBQUNBLFVBQUlFLFVBQVVKLE1BQU12RyxNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0EyRyxjQUFRM0csTUFBUixDQUFlLElBQWYsRUFBcUJBLE1BQXJCLENBQTRCLEdBQTVCLEVBQWlDa0YsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkM7QUFBQSxlQUFNLE9BQUtySixPQUFMLENBQWFaLFFBQWIsQ0FBc0J1RyxNQUF0QixDQUE2QmtILFNBQTdCLEVBQU47QUFBQSxPQUE3QyxFQUE2RmhNLElBQTdGLENBQWtHLE9BQWxHLEVBQTJHLGFBQTNHLEVBQTBIK0osSUFBMUgsQ0FBK0gsYUFBL0g7QUFDQUUsY0FBUTNHLE1BQVIsQ0FBZSxJQUFmLEVBQXFCQSxNQUFyQixDQUE0QixHQUE1QixFQUFpQ2tGLEVBQWpDLENBQW9DLE9BQXBDLEVBQTZDO0FBQUEsZUFBTXlOLFNBQVNJLFlBQVQsQ0FBc0IsT0FBS2hMLFNBQUwsQ0FBZWpNLElBQWYsRUFBdEIsRUFBNkMsYUFBN0MsQ0FBTjtBQUFBLE9BQTdDLEVBQWdIWSxJQUFoSCxDQUFxSCxPQUFySCxFQUE4SCxhQUE5SCxFQUE2SStKLElBQTdJLENBQWtKLGFBQWxKO0FBQ0FFLGNBQVEzRyxNQUFSLENBQWUsSUFBZixFQUFxQkEsTUFBckIsQ0FBNEIsR0FBNUIsRUFBaUNrRixFQUFqQyxDQUFvQyxPQUFwQyxFQUE2QztBQUFBLGVBQU0yTixXQUFXNU8sSUFBWCxDQUFnQixPQUFLMUcsSUFBckIsRUFBMkJqQyxNQUEzQixFQUFOO0FBQUEsT0FBN0MsRUFBd0ZvQixJQUF4RixDQUE2RixPQUE3RixFQUFzRyxPQUF0RyxFQUErRytKLElBQS9HLENBQW9ILE9BQXBIOztBQUVBO0FBQ0EsVUFBSU4sZ0JBQWdCLEtBQUtVLFFBQUwsQ0FBYzFJLE9BQU9DLE1BQVAsQ0FBYyxLQUFLYixJQUFMLENBQVVpRSxNQUFWLENBQWlCa0YsS0FBL0IsQ0FBZCxDQUFwQjtBQUNBLFdBQUtJLFFBQUwsQ0FBYyxLQUFLbkwsT0FBbkIsRUFBNEJ3SyxhQUE1Qjs7QUFFQSxXQUFLMUssTUFBTCxDQUFZQyxLQUFaLHlCQUF3Q29YLE1BQXhDOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7O2tCQTdDTUYsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkksVSxXQU1sQixzQzs7O0FBSkQsNEJBQTREO0FBQUEsNEJBQTlDaFksT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsbUhBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EO0FBRTNEOzs7OzZCQUdRO0FBQUE7O0FBRVAsVUFBSTJTLFVBQVUsa0JBQWQ7O0FBRUEsV0FBS3BTLE1BQUwsQ0FBWUMsS0FBWiw0QkFBMkNtUyxPQUEzQzs7QUFFQSxXQUFLbFMsT0FBTCxHQUFlLEtBQUsrTCxNQUFMLENBQVkxSCxNQUFaLENBQW1CLEtBQW5CLEVBQ1p0RCxJQURZLENBQ1AsSUFETyxFQUNEbVIsT0FEQyxFQUVablIsSUFGWSxDQUVQLE9BRk8sRUFFRSxjQUZGLENBQWY7O0FBSUEsVUFBSW9SLE9BQU8sS0FBS25TLE9BQUwsQ0FBYXFFLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBWDs7QUFFQSxVQUFJK04sU0FBU0QsS0FBSzlOLE1BQUwsQ0FBWSxLQUFaLEVBQW1CdEQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUFxUixhQUFPL04sTUFBUCxDQUFjLE1BQWQsRUFBc0J5RyxJQUF0QixxQkFBNEMsS0FBS2xKLElBQUwsQ0FBVTBWLE9BQVYsSUFBcUIsS0FBakU7O0FBRUEsVUFBSXRNLFVBQVVtSCxLQUFLOU4sTUFBTCxDQUFZLEtBQVosRUFBbUJ0RCxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxzQkFBakMsRUFDWHNELE1BRFcsQ0FDSixLQURJLEVBQ0d0RCxJQURILENBQ1EsT0FEUixFQUNpQixjQURqQixFQUVYc0QsTUFGVyxDQUVKLEtBRkksRUFFR3RELElBRkgsQ0FFUSxPQUZSLEVBRWlCLG1CQUZqQixDQUFkOztBQUlBaUssY0FBUTNHLE1BQVIsQ0FBZSxNQUFmLEVBQXVCeUMsSUFBdkIsQ0FBNEIsZ0JBQTVCO0FBQ0FrRSxjQUFRM0csTUFBUixDQUFlLEtBQWYsRUFBc0J0RCxJQUF0QixDQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4QytKLElBQTlDLENBQW1ELGdDQUFnQmEsS0FBS0MsU0FBTCxDQUFlLEtBQUtoSyxJQUFMLENBQVVpRSxNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxDQUF2QyxDQUFoQixDQUFuRDtBQUNBbUYsY0FBUTNHLE1BQVIsQ0FBZSxNQUFmLEVBQXVCQSxNQUF2QixDQUE4QixHQUE5QixFQUFtQ3RELElBQW5DLENBQXdDLE1BQXhDLEVBQWdELHFDQUFoRCxFQUF1RitGLElBQXZGLENBQTRGLGtCQUE1Rjs7QUFFQSxVQUFJMkwsU0FBU04sS0FBSzlOLE1BQUwsQ0FBWSxLQUFaLEVBQW1CdEQsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMscUJBQWpDLENBQWI7O0FBRUEwUixhQUFPcE8sTUFBUCxDQUFjLFFBQWQsRUFBd0J5QyxJQUF4QixDQUE2QixJQUE3QixFQUFtQ3lDLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLFlBQU07QUFDbkRqSixXQUFHb0osS0FBSCxDQUFTc0ksY0FBVDtBQUNBLGVBQUtuUyxRQUFMLENBQWM4RyxJQUFkO0FBQ0QsT0FIRDs7QUFLQTtBQUNBLG9EQUE4QixDQUFDLFNBQUQsRUFBWSxhQUFaLEVBQTJCLGlCQUEzQixFQUE4QyxlQUE5QyxDQUE5Qjs7QUFFQSxXQUFLN0csTUFBTCxDQUFZQyxLQUFaLDhCQUE2Q21TLE9BQTdDOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7OztrQkE1Q2tCbUYsVTs7Ozs7Ozs7O0FDTnJCLENBQUMsWUFBVztBQUNWLE1BQUlFLE9BQU8sT0FBTzVLLE9BQVAsSUFBa0IsV0FBbEIsSUFBaUNBLE9BQWpDLElBQTRDLGNBQWlCLFdBQWpCLElBQWdDLEVBQTVFLElBQWtGLElBQTdGOztBQUVBLE1BQUk2SyxVQUFVLG1LQUFkOztBQUVBLFdBQVNDLFNBQVQsQ0FBbUIxVixHQUFuQixFQUF3QjtBQUN0QixXQUFPQSxlQUFlMlYsV0FBZixJQUE4QjNWLGVBQWU0VixVQUFwRDtBQUNEOztBQUVELFdBQVNDLGNBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCO0FBQzFCLFFBQUksQ0FBQ0osVUFBVUksRUFBVixDQUFMLEVBQW9CO0FBQ2xCLFlBQU0sSUFBSXBQLEtBQUosQ0FBVSxtREFBbURvUCxFQUE3RCxDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTQyxVQUFULENBQW9CQyxHQUFwQixFQUF5QjtBQUN2QixXQUFPQSxPQUFPQSxJQUFJQyxXQUFKLENBQWdCLE1BQWhCLEVBQXVCLENBQXZCLEtBQTZCLENBQXBDLElBQXlDRCxJQUFJQyxXQUFKLENBQWdCcEwsT0FBT3FMLFFBQVAsQ0FBZ0JDLElBQWhDLEtBQXlDLENBQUMsQ0FBMUY7QUFDRDs7QUFFRCxXQUFTQyxZQUFULENBQXNCTixFQUF0QixFQUEwQnZPLFFBQTFCLEVBQW9DO0FBQ2xDc08sbUJBQWVDLEVBQWY7O0FBRUEsUUFBSU8sU0FBU1AsR0FBR1EsZ0JBQUgsQ0FBb0IsT0FBcEIsQ0FBYjtBQUFBLFFBQ0l6WCxPQUFPd1gsT0FBTzdWLE1BRGxCO0FBQUEsUUFFSStWLFlBQVksU0FBWkEsU0FBWSxHQUFXO0FBQ3JCLFVBQUkxWCxTQUFTLENBQWIsRUFBZ0I7QUFDZDBJO0FBQ0Q7QUFDRixLQU5MOztBQVFBZ1A7QUFDQSxTQUFLLElBQUk5USxJQUFJLENBQWIsRUFBZ0JBLElBQUk0USxPQUFPN1YsTUFBM0IsRUFBbUNpRixHQUFuQyxFQUF3QztBQUN0QyxPQUFDLFVBQVMrUSxLQUFULEVBQWdCO0FBQ2YsWUFBSUMsT0FBT0QsTUFBTUUsY0FBTixDQUFxQiw4QkFBckIsRUFBcUQsTUFBckQsQ0FBWDtBQUNBLFlBQUlELElBQUosRUFBVTtBQUNSLGNBQUlWLFdBQVdVLEtBQUsvVyxLQUFoQixDQUFKLEVBQTRCO0FBQzFCb0gsb0JBQVE2UCxJQUFSLENBQWEsOERBQTRERixLQUFLL1csS0FBOUU7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxZQUFJb0UsU0FBUzhTLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFlBQUlDLE1BQU1oVCxPQUFPaVQsVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0EsWUFBSUMsTUFBTSxJQUFJQyxLQUFKLEVBQVY7QUFDQUQsWUFBSUUsV0FBSixHQUFnQixXQUFoQjtBQUNBVCxlQUFPQSxRQUFRRCxNQUFNVyxZQUFOLENBQW1CLE1BQW5CLENBQWY7QUFDQSxZQUFJVixJQUFKLEVBQVU7QUFDUk8sY0FBSUksR0FBSixHQUFVWCxJQUFWO0FBQ0FPLGNBQUlLLE1BQUosR0FBYSxZQUFXO0FBQ3RCdlQsbUJBQU9oRixLQUFQLEdBQWVrWSxJQUFJbFksS0FBbkI7QUFDQWdGLG1CQUFPM0UsTUFBUCxHQUFnQjZYLElBQUk3WCxNQUFwQjtBQUNBMlgsZ0JBQUlRLFNBQUosQ0FBY04sR0FBZCxFQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNBUixrQkFBTWUsY0FBTixDQUFxQiw4QkFBckIsRUFBcUQsTUFBckQsRUFBNkR6VCxPQUFPMFQsU0FBUCxDQUFpQixXQUFqQixDQUE3RDtBQUNBM1k7QUFDQTBYO0FBQ0QsV0FQRDtBQVFBUyxjQUFJUyxPQUFKLEdBQWMsWUFBVztBQUN2QjNRLG9CQUFRTCxHQUFSLENBQVksb0JBQWtCZ1EsSUFBOUI7QUFDQTVYO0FBQ0EwWDtBQUNELFdBSkQ7QUFLRCxTQWZELE1BZU87QUFDTDFYO0FBQ0EwWDtBQUNEO0FBQ0YsT0FoQ0QsRUFnQ0dGLE9BQU81USxDQUFQLENBaENIO0FBaUNEO0FBQ0Y7O0FBRUQsV0FBU2lTLE1BQVQsQ0FBZ0I1QixFQUFoQixFQUFvQjNYLE9BQXBCLEVBQTZCd1osaUJBQTdCLEVBQWdEO0FBQzlDLFFBQUlDLGdCQUFnQnpaLFFBQVF5WixhQUE1QjtBQUNBLFFBQUlDLGNBQWMxWixRQUFRMFosV0FBMUI7QUFDQSxRQUFJQyxNQUFNLEVBQVY7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsYUFBYSxFQUFqQjtBQUNBLFFBQUlDLFNBQVNwQixTQUFTcUIsV0FBdEI7QUFDQSxTQUFLLElBQUl4UyxJQUFJLENBQWIsRUFBZ0JBLElBQUl1UyxPQUFPeFgsTUFBM0IsRUFBbUNpRixHQUFuQyxFQUF3QztBQUN0QyxVQUFJO0FBQ0YsWUFBSXlTLFFBQVFGLE9BQU92UyxDQUFQLEVBQVUwUyxRQUF0QjtBQUNELE9BRkQsQ0FFRSxPQUFPelYsQ0FBUCxFQUFVO0FBQ1ZvRSxnQkFBUTZQLElBQVIsQ0FBYSxxQ0FBbUNxQixPQUFPdlMsQ0FBUCxFQUFVZ1IsSUFBMUQ7QUFDQTtBQUNEOztBQUVELFVBQUl5QixTQUFTLElBQWIsRUFBbUI7QUFDakIsYUFBSyxJQUFJRSxJQUFJLENBQVIsRUFBV2hWLEtBQWhCLEVBQXVCZ1YsSUFBSUYsTUFBTTFYLE1BQWpDLEVBQXlDNFgsS0FBS2hWLFFBQVEsSUFBdEQsRUFBNEQ7QUFDMUQsY0FBSWlWLE9BQU9ILE1BQU1FLENBQU4sQ0FBWDtBQUNBLGNBQUksT0FBT0MsS0FBS3ZULEtBQVosSUFBc0IsV0FBMUIsRUFBdUM7QUFDckMsZ0JBQUl3VCxZQUFKOztBQUVBLGdCQUFJO0FBQ0ZBLDZCQUFlRCxLQUFLQyxZQUFwQjtBQUNELGFBRkQsQ0FFRSxPQUFNQyxHQUFOLEVBQVc7QUFDWHpSLHNCQUFRNlAsSUFBUixDQUFhLHNEQUFzRDBCLElBQXRELEdBQTZELEdBQTFFLEVBQStFRSxHQUEvRTtBQUNEOztBQUVELGdCQUFJO0FBQ0Ysa0JBQUlELFlBQUosRUFBa0I7QUFDaEJsVix3QkFBUTBTLEdBQUcwQyxhQUFILENBQWlCRixZQUFqQixLQUFrQ3hDLEdBQUdyWCxVQUFILENBQWMrWixhQUFkLENBQTRCRixZQUE1QixDQUExQztBQUNEO0FBQ0YsYUFKRCxDQUlFLE9BQU1DLEdBQU4sRUFBVztBQUNYelIsc0JBQVE2UCxJQUFSLENBQWEsMkJBQTJCMkIsWUFBM0IsR0FBMEMsR0FBdkQsRUFBNERDLEdBQTVEO0FBQ0Q7O0FBRUQsZ0JBQUluVixLQUFKLEVBQVc7QUFDVCxrQkFBSXFWLFdBQVdiLGdCQUFnQkEsY0FBY1MsS0FBS0MsWUFBbkIsQ0FBaEIsR0FBbURELEtBQUtDLFlBQXZFO0FBQ0Esa0JBQUlJLFVBQVViLGNBQWNBLFlBQVlRLEtBQUt2VCxLQUFMLENBQVc0VCxPQUF2QixDQUFkLEdBQWdETCxLQUFLdlQsS0FBTCxDQUFXNFQsT0FBekU7QUFDQVoscUJBQU9XLFdBQVcsS0FBWCxHQUFtQkMsT0FBbkIsR0FBNkIsTUFBcEM7QUFDRCxhQUpELE1BSU8sSUFBR0wsS0FBS0ssT0FBTCxDQUFhdFYsS0FBYixDQUFtQixhQUFuQixDQUFILEVBQXNDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQUl1VixnQkFBZ0Isd0JBQXBCO0FBQ0E7QUFDQSxrQkFBSUMsZUFBZVAsS0FBS0ssT0FBTCxDQUFhdFYsS0FBYixDQUFtQnVWLGFBQW5CLENBQW5COztBQUVBLGtCQUFJRSxrQkFBbUJELGdCQUFnQkEsYUFBYSxDQUFiLENBQWpCLElBQXFDLEVBQTNEO0FBQ0Esa0JBQUlFLG1CQUFtQkQsZ0JBQWdCelYsS0FBaEIsQ0FBc0IsUUFBdEIsQ0FBdkI7QUFDQSxrQkFBSTBWLGdCQUFKLEVBQXNCO0FBQ3BCO0FBQ0FELGtDQUFrQixFQUFsQjtBQUNEOztBQUVELGtCQUFJQSxlQUFKLEVBQXFCO0FBQ25COztBQUVBO0FBQ0Esb0JBQUlBLGdCQUFnQkUsVUFBaEIsQ0FBMkIsS0FBM0IsQ0FBSixFQUF1QztBQUNyQ0Ysb0NBQWtCYixPQUFPdlMsQ0FBUCxFQUFVZ1IsSUFBVixHQUFpQixNQUFqQixHQUEwQm9DLGVBQTVDO0FBQ0QsaUJBRkQsTUFFTyxJQUFJQSxnQkFBZ0JFLFVBQWhCLENBQTJCLElBQTNCLENBQUosRUFBc0M7QUFDM0NGLG9DQUFrQmIsT0FBT3ZTLENBQVAsRUFBVWdSLElBQVYsR0FBaUIsSUFBakIsR0FBd0JvQyxlQUExQztBQUNEOztBQUVEZCwyQkFBVzFSLElBQVgsQ0FBZ0I7QUFDZHRCLHdCQUFNc1QsS0FBS0ssT0FERztBQUVkO0FBQ0FDLGlDQUFlQSxhQUhEO0FBSWRLLDBCQUFRQyx1QkFBdUJKLGVBQXZCLENBSk07QUFLZDdDLHVCQUFLNkM7QUFMUyxpQkFBaEI7QUFPRCxlQWpCRCxNQWlCTztBQUNMO0FBQ0FmLHVCQUFPTyxLQUFLSyxPQUFMLEdBQWUsSUFBdEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQVEscUJBQWlCbkIsVUFBakI7O0FBRUEsYUFBU2tCLHNCQUFULENBQWdDRSxPQUFoQyxFQUF5QztBQUN2QyxVQUFJQyxtQkFBbUI7QUFDckIsaUJBQVMsWUFEWTtBQUVyQixnQkFBUSxXQUZhO0FBR3JCLGVBQU8sNkJBSGM7QUFJckIsZUFBTyx3QkFKYztBQUtyQixlQUFPLCtCQUxjO0FBTXJCLGdCQUFRLHVCQU5hO0FBT3JCLGVBQU87QUFQYyxPQUF2QjtBQVNBLFVBQUlDLGFBQWE1WSxPQUFPdUQsSUFBUCxDQUFZb1YsZ0JBQVosQ0FBakI7QUFDQSxXQUFLLElBQUkzVCxJQUFJLENBQWIsRUFBZ0JBLElBQUk0VCxXQUFXN1ksTUFBL0IsRUFBdUMsRUFBRWlGLENBQXpDLEVBQTRDO0FBQzFDLFlBQUk2VCxZQUFZRCxXQUFXNVQsQ0FBWCxDQUFoQjtBQUNBO0FBQ0EsWUFBSTBULFFBQVFJLE9BQVIsQ0FBZ0IsTUFBTUQsU0FBdEIsSUFBbUMsQ0FBdkMsRUFBMEM7QUFDeEMsaUJBQU9GLGlCQUFpQkUsU0FBakIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQXhTLGNBQVFHLEtBQVIsQ0FBYyw2QkFBNkJrUyxPQUE3QixHQUFzQyxzQ0FBcEQ7QUFDQSxhQUFPLDBCQUFQO0FBQ0Q7O0FBRUQsYUFBU0QsZ0JBQVQsQ0FBMEJNLEtBQTFCLEVBQWlDO0FBQy9CLFVBQUlBLE1BQU1oWixNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEI7QUFDQSxZQUFJaVosT0FBT0QsTUFBTUUsR0FBTixFQUFYO0FBQ0FDLG9CQUFZRixJQUFaO0FBQ0QsT0FKRCxNQUlPO0FBQ0w7QUFDQTlCLDBCQUFrQkcsR0FBbEI7QUFDRDs7QUFFRCxlQUFTNkIsV0FBVCxDQUFxQkYsSUFBckIsRUFBMkI7QUFDekI7QUFDQSxZQUFJRyxPQUFPLElBQUlDLGNBQUosRUFBWDtBQUNBRCxhQUFLRSxnQkFBTCxDQUFzQixNQUF0QixFQUE4QkMsVUFBOUI7QUFDQUgsYUFBS0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JFLGNBQS9CO0FBQ0FKLGFBQUtFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCRSxjQUEvQjtBQUNBSixhQUFLSyxJQUFMLENBQVUsS0FBVixFQUFpQlIsS0FBS3pELEdBQXRCO0FBQ0E0RCxhQUFLTSxZQUFMLEdBQW9CLGFBQXBCO0FBQ0FOLGFBQUtPLElBQUw7O0FBRUEsaUJBQVNKLFVBQVQsR0FBc0I7QUFDcEI7QUFDQTtBQUNBLGNBQUlLLFdBQVdSLEtBQUtTLFFBQXBCO0FBQ0EsY0FBSUMsZUFBZUMsb0JBQW9CSCxRQUFwQixDQUFuQjtBQUNBSSwwQkFBZ0JmLElBQWhCLEVBQXNCYSxZQUF0QjtBQUNEOztBQUVELGlCQUFTTixjQUFULENBQXdCdFgsQ0FBeEIsRUFBMkI7QUFDekJvRSxrQkFBUTZQLElBQVIsQ0FBYSwrQkFBK0I4QyxLQUFLekQsR0FBakQ7QUFDQWxQLGtCQUFRNlAsSUFBUixDQUFhalUsQ0FBYjtBQUNBb1YsaUJBQU8yQixLQUFLMVUsSUFBTCxHQUFZLElBQW5CO0FBQ0FtVTtBQUNEOztBQUVELGlCQUFTc0IsZUFBVCxDQUF5QmYsSUFBekIsRUFBK0JhLFlBQS9CLEVBQTZDO0FBQzNDLGNBQUlHLFVBQVUsZUFBZWhCLEtBQUtULE1BQXBCLEdBQTZCLFVBQTdCLEdBQTBDc0IsWUFBMUMsR0FBeUQsSUFBdkU7QUFDQXhDLGlCQUFPMkIsS0FBSzFVLElBQUwsQ0FBVTVCLE9BQVYsQ0FBa0JzVyxLQUFLZCxhQUF2QixFQUFzQzhCLE9BQXRDLElBQWlELElBQXhEOztBQUVBO0FBQ0F4WixxQkFBVyxZQUFXO0FBQ3BCaVksNkJBQWlCTSxLQUFqQjtBQUNELFdBRkQsRUFFRyxDQUZIO0FBR0Q7QUFFRjtBQUNGOztBQUVELGFBQVNlLG1CQUFULENBQTZCRyxNQUE3QixFQUFxQztBQUNuQyxVQUFJQyxTQUFTLEVBQWI7QUFDQSxVQUFJQyxRQUFRLElBQUlDLFVBQUosQ0FBZUgsTUFBZixDQUFaO0FBQ0EsVUFBSUksTUFBTUYsTUFBTUcsVUFBaEI7O0FBRUEsV0FBSyxJQUFJdFYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcVYsR0FBcEIsRUFBeUJyVixHQUF6QixFQUE4QjtBQUMxQmtWLGtCQUFVSyxPQUFPQyxZQUFQLENBQW9CTCxNQUFNblYsQ0FBTixDQUFwQixDQUFWO0FBQ0g7O0FBRUQsYUFBT29GLE9BQU9xUSxJQUFQLENBQVlQLE1BQVosQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU1EsWUFBVCxDQUFzQnJGLEVBQXRCLEVBQTBCc0YsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQUlDLElBQUt4RixHQUFHeUYsT0FBSCxJQUFjekYsR0FBR3lGLE9BQUgsQ0FBV0MsT0FBekIsSUFBb0MxRixHQUFHeUYsT0FBSCxDQUFXQyxPQUFYLENBQW1CSCxHQUFuQixDQUFyQyxJQUNMRCxNQUFNakUsWUFBTixDQUFtQmtFLEdBQW5CLE1BQTRCLElBQTVCLElBQW9DLENBQUNELE1BQU1qRSxZQUFOLENBQW1Ca0UsR0FBbkIsRUFBd0JqWSxLQUF4QixDQUE4QixJQUE5QixDQUFyQyxJQUE0RXFZLFNBQVNMLE1BQU1qRSxZQUFOLENBQW1Ca0UsR0FBbkIsQ0FBVCxDQUR2RSxJQUVOdkYsR0FBRzdXLHFCQUFILEdBQTJCb2MsR0FBM0IsQ0FGTSxJQUdOSSxTQUFTTCxNQUFNdFcsS0FBTixDQUFZdVcsR0FBWixDQUFULENBSE0sSUFJTkksU0FBUzVRLE9BQU82USxnQkFBUCxDQUF3QjVGLEVBQXhCLEVBQTRCNkYsZ0JBQTVCLENBQTZDTixHQUE3QyxDQUFULENBSkY7QUFLQSxXQUFRLE9BQU9DLENBQVAsS0FBYSxXQUFiLElBQTRCQSxNQUFNLElBQWxDLElBQTBDTSxNQUFNQyxXQUFXUCxDQUFYLENBQU4sQ0FBM0MsR0FBbUUsQ0FBbkUsR0FBdUVBLENBQTlFO0FBQ0Q7O0FBRUQsV0FBU1EsUUFBVCxDQUFrQmpjLElBQWxCLEVBQXdCO0FBQ3RCQSxXQUFPa2MsbUJBQW1CbGMsSUFBbkIsQ0FBUDtBQUNBQSxXQUFPQSxLQUFLc0QsT0FBTCxDQUFhLGlCQUFiLEVBQWdDLFVBQVNDLEtBQVQsRUFBZ0I0WSxFQUFoQixFQUFvQjtBQUN6RCxVQUFJQyxJQUFJakIsT0FBT0MsWUFBUCxDQUFvQixPQUFLZSxFQUF6QixDQUFSO0FBQ0EsYUFBT0MsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQkEsQ0FBM0I7QUFDRCxLQUhNLENBQVA7QUFJQSxXQUFPQyxtQkFBbUJyYyxJQUFuQixDQUFQO0FBQ0Q7O0FBRUQyVixPQUFLMkcsVUFBTCxHQUFrQixVQUFTckcsRUFBVCxFQUFhM1gsT0FBYixFQUFzQjBKLEVBQXRCLEVBQTBCO0FBQzFDZ08sbUJBQWVDLEVBQWY7O0FBRUEzWCxjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFnTyxLQUFSLEdBQWdCaE8sUUFBUWdPLEtBQVIsSUFBaUIsQ0FBakM7QUFDQWhPLFlBQVFpZSxVQUFSLEdBQXFCamUsUUFBUWllLFVBQVIsSUFBc0IsS0FBM0M7QUFDQSxRQUFJQyxRQUFRLCtCQUFaOztBQUVBakcsaUJBQWFOLEVBQWIsRUFBaUIsWUFBVztBQUMxQixVQUFJd0csUUFBUTFGLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFVBQUl1RSxRQUFRdEYsR0FBR3lHLFNBQUgsQ0FBYSxJQUFiLENBQVo7QUFDQSxVQUFJemQsS0FBSixFQUFXSyxNQUFYO0FBQ0EsVUFBRzJXLEdBQUd6WCxPQUFILElBQWMsS0FBakIsRUFBd0I7QUFDdEJTLGdCQUFRWCxRQUFRVyxLQUFSLElBQWlCcWMsYUFBYXJGLEVBQWIsRUFBaUJzRixLQUFqQixFQUF3QixPQUF4QixDQUF6QjtBQUNBamMsaUJBQVNoQixRQUFRZ0IsTUFBUixJQUFrQmdjLGFBQWFyRixFQUFiLEVBQWlCc0YsS0FBakIsRUFBd0IsUUFBeEIsQ0FBM0I7QUFDRCxPQUhELE1BR08sSUFBR3RGLEdBQUdsSixPQUFOLEVBQWU7QUFDcEIsWUFBSTRQLE1BQU0xRyxHQUFHbEosT0FBSCxFQUFWO0FBQ0E5TixnQkFBUTBkLElBQUlwWSxDQUFKLEdBQVFvWSxJQUFJMWQsS0FBcEI7QUFDQUssaUJBQVNxZCxJQUFJblksQ0FBSixHQUFRbVksSUFBSXJkLE1BQXJCO0FBQ0FpYyxjQUFNcUIsWUFBTixDQUFtQixXQUFuQixFQUFnQ3JCLE1BQU1qRSxZQUFOLENBQW1CLFdBQW5CLEVBQWdDaFUsT0FBaEMsQ0FBd0Msa0JBQXhDLEVBQTRELEVBQTVELENBQWhDOztBQUVBLFlBQUl1WixNQUFNOUYsU0FBUytGLGVBQVQsQ0FBeUIsNEJBQXpCLEVBQXNELEtBQXRELENBQVY7QUFDQUQsWUFBSUUsV0FBSixDQUFnQnhCLEtBQWhCO0FBQ0FBLGdCQUFRc0IsR0FBUjtBQUNELE9BVE0sTUFTQTtBQUNMNVYsZ0JBQVFHLEtBQVIsQ0FBYyxxQ0FBZCxFQUFxRDZPLEVBQXJEO0FBQ0E7QUFDRDs7QUFFRHNGLFlBQU1xQixZQUFOLENBQW1CLFNBQW5CLEVBQThCLEtBQTlCO0FBQ0EsVUFBSSxDQUFDckIsTUFBTWpFLFlBQU4sQ0FBbUIsT0FBbkIsQ0FBTCxFQUFrQztBQUNoQ2lFLGNBQU03RCxjQUFOLENBQXFCOEUsS0FBckIsRUFBNEIsT0FBNUIsRUFBcUMsNEJBQXJDO0FBQ0Q7QUFDRCxVQUFJLENBQUNqQixNQUFNakUsWUFBTixDQUFtQixhQUFuQixDQUFMLEVBQXdDO0FBQ3RDaUUsY0FBTTdELGNBQU4sQ0FBcUI4RSxLQUFyQixFQUE0QixhQUE1QixFQUEyQyw4QkFBM0M7QUFDRDs7QUFFRCxVQUFJbGUsUUFBUWllLFVBQVosRUFBd0I7QUFDdEJoQixjQUFNeUIsZUFBTixDQUFzQixPQUF0QjtBQUNBekIsY0FBTXlCLGVBQU4sQ0FBc0IsUUFBdEI7QUFDQXpCLGNBQU1xQixZQUFOLENBQW1CLHFCQUFuQixFQUEwQyxlQUExQztBQUNELE9BSkQsTUFJTztBQUNMckIsY0FBTXFCLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIzZCxRQUFRWCxRQUFRZ08sS0FBNUM7QUFDQWlQLGNBQU1xQixZQUFOLENBQW1CLFFBQW5CLEVBQTZCdGQsU0FBU2hCLFFBQVFnTyxLQUE5QztBQUNEOztBQUVEaVAsWUFBTXFCLFlBQU4sQ0FBbUIsU0FBbkIsRUFBOEIsQ0FDNUJ0ZSxRQUFRVSxJQUFSLElBQWdCLENBRFksRUFFNUJWLFFBQVFPLEdBQVIsSUFBZSxDQUZhLEVBRzVCSSxLQUg0QixFQUk1QkssTUFKNEIsRUFLNUIyZCxJQUw0QixDQUt2QixHQUx1QixDQUE5Qjs7QUFPQSxVQUFJQyxNQUFNM0IsTUFBTTlFLGdCQUFOLENBQXVCLG1CQUF2QixDQUFWO0FBQ0EsV0FBSyxJQUFJN1EsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc1gsSUFBSXZjLE1BQXhCLEVBQWdDaUYsR0FBaEMsRUFBcUM7QUFDbkMsWUFBSSxDQUFDc1gsSUFBSXRYLENBQUosRUFBTzBSLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBTCxFQUFtQztBQUNqQzRGLGNBQUl0WCxDQUFKLEVBQU84UixjQUFQLENBQXNCOEUsS0FBdEIsRUFBNkIsT0FBN0IsRUFBc0MsOEJBQXRDO0FBQ0Q7QUFDRjs7QUFFREMsWUFBTU0sV0FBTixDQUFrQnhCLEtBQWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ExRCxhQUFPNUIsRUFBUCxFQUFXM1gsT0FBWCxFQUFvQndaLGlCQUFwQjs7QUFFQSxlQUFTQSxpQkFBVCxDQUEyQkcsR0FBM0IsRUFBZ0M7QUFDOUI7QUFDQSxZQUFJNUksSUFBSTBILFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBM0gsVUFBRXVOLFlBQUYsQ0FBZSxNQUFmLEVBQXVCLFVBQXZCO0FBQ0F2TixVQUFFOE4sU0FBRixHQUFjLGdCQUFnQmxGLEdBQWhCLEdBQXNCLE9BQXBDO0FBQ0EsWUFBSW1GLE9BQU9yRyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQW9HLGFBQUtMLFdBQUwsQ0FBaUIxTixDQUFqQjtBQUNBa00sY0FBTThCLFlBQU4sQ0FBbUJELElBQW5CLEVBQXlCN0IsTUFBTStCLFVBQS9COztBQUVBLFlBQUl0VixFQUFKLEVBQVE7QUFDTixjQUFJdVYsVUFBVWQsTUFBTVUsU0FBcEI7QUFDQUksb0JBQVVBLFFBQVFqYSxPQUFSLENBQWdCLGNBQWhCLEVBQWdDLHVEQUFoQyxDQUFWO0FBQ0EwRSxhQUFHdVYsT0FBSCxFQUFZdGUsS0FBWixFQUFtQkssTUFBbkI7QUFDRDtBQUNGO0FBQ0YsS0EzRUQ7QUE0RUQsR0FwRkQ7O0FBc0ZBcVcsT0FBSzZILFlBQUwsR0FBb0IsVUFBU3ZILEVBQVQsRUFBYTNYLE9BQWIsRUFBc0IwSixFQUF0QixFQUEwQjtBQUM1QzJOLFNBQUsyRyxVQUFMLENBQWdCckcsRUFBaEIsRUFBb0IzWCxPQUFwQixFQUE2QixVQUFTdWUsR0FBVCxFQUFjO0FBQ3pDLFVBQUlZLE1BQU0sK0JBQStCelMsT0FBT3FRLElBQVAsQ0FBWVksU0FBU3JHLFVBQVVpSCxHQUFuQixDQUFaLENBQXpDO0FBQ0EsVUFBSTdVLEVBQUosRUFBUTtBQUNOQSxXQUFHeVYsR0FBSDtBQUNEO0FBQ0YsS0FMRDtBQU1ELEdBUEQ7O0FBU0E5SCxPQUFLK0gsV0FBTCxHQUFtQixVQUFTekgsRUFBVCxFQUFhM1gsT0FBYixFQUFzQjBKLEVBQXRCLEVBQTBCO0FBQzNDZ08sbUJBQWVDLEVBQWY7O0FBRUEzWCxjQUFVQSxXQUFXLEVBQXJCO0FBQ0FBLFlBQVFxZixXQUFSLEdBQXNCcmYsUUFBUXFmLFdBQVIsSUFBdUIsV0FBN0M7QUFDQXJmLFlBQVFzZixjQUFSLEdBQXlCdGYsUUFBUXNmLGNBQVIsSUFBMEIsR0FBbkQ7O0FBRUEsUUFBSUMsZUFBZSxTQUFmQSxZQUFlLENBQVN0RyxHQUFULEVBQWN1RyxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQjtBQUNyQyxVQUFJOVosU0FBUzhTLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFVBQUlnSCxVQUFVL1osT0FBT2lULFVBQVAsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNBalQsYUFBT2hGLEtBQVAsR0FBZTZlLENBQWY7QUFDQTdaLGFBQU8zRSxNQUFQLEdBQWdCeWUsQ0FBaEI7O0FBRUEsVUFBR3pmLFFBQVEyZixLQUFYLEVBQWtCO0FBQ2hCM2YsZ0JBQVEyZixLQUFSLENBQWNoYSxNQUFkLEVBQXNCc1QsR0FBdEI7QUFDRCxPQUZELE1BRU87QUFDTHlHLGdCQUFRdkcsU0FBUixDQUFrQkYsR0FBbEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUI7QUFDRDs7QUFFRCxVQUFHalosUUFBUTRmLGVBQVgsRUFBMkI7QUFDekJGLGdCQUFRRyx3QkFBUixHQUFtQyxrQkFBbkM7QUFDQUgsZ0JBQVFJLFNBQVIsR0FBb0I5ZixRQUFRNGYsZUFBNUI7QUFDQUYsZ0JBQVFLLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJwYSxPQUFPaEYsS0FBOUIsRUFBcUNnRixPQUFPM0UsTUFBNUM7QUFDRDs7QUFFRCxVQUFJZ2YsR0FBSjtBQUNBLFVBQUk7QUFDRkEsY0FBTXJhLE9BQU8wVCxTQUFQLENBQWlCclosUUFBUXFmLFdBQXpCLEVBQXNDcmYsUUFBUXNmLGNBQTlDLENBQU47QUFDRCxPQUZELENBRUUsT0FBTy9hLENBQVAsRUFBVTtBQUNWLFlBQUssT0FBTzBiLGFBQVAsS0FBeUIsV0FBekIsSUFBd0MxYixhQUFhMGIsYUFBdEQsSUFBd0UxYixFQUFFbkQsSUFBRixJQUFVLGVBQXRGLEVBQXVHO0FBQ3JHdUgsa0JBQVFHLEtBQVIsQ0FBYywyREFBZDtBQUNBO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZ0JBQU12RSxDQUFOO0FBQ0Q7QUFDRjtBQUNEbUYsU0FBR3NXLEdBQUg7QUFDRCxLQTlCRDs7QUFnQ0EsUUFBR2hnQixRQUFRMmYsS0FBWCxFQUFrQjtBQUNoQnRJLFdBQUsyRyxVQUFMLENBQWdCckcsRUFBaEIsRUFBb0IzWCxPQUFwQixFQUE2QnVmLFlBQTdCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xsSSxXQUFLNkgsWUFBTCxDQUFrQnZILEVBQWxCLEVBQXNCM1gsT0FBdEIsRUFBK0IsVUFBU21mLEdBQVQsRUFBYztBQUMzQyxZQUFJOUcsUUFBUSxJQUFJUyxLQUFKLEVBQVo7O0FBRUFULGNBQU1hLE1BQU4sR0FBZSxZQUFXO0FBQ3hCcUcsdUJBQWFsSCxLQUFiLEVBQW9CQSxNQUFNMVgsS0FBMUIsRUFBaUMwWCxNQUFNclgsTUFBdkM7QUFDRCxTQUZEOztBQUlBcVgsY0FBTWlCLE9BQU4sR0FBZ0IsWUFBVztBQUN6QjNRLGtCQUFRRyxLQUFSLENBQ0UsNEVBREYsRUFFRTRELE9BQU93VCxJQUFQLENBQVlmLElBQUloWSxLQUFKLENBQVUsRUFBVixDQUFaLENBRkYsRUFFOEIsSUFGOUIsRUFHRSxzREFIRixFQUlFZ1ksR0FKRjtBQUtELFNBTkQ7O0FBUUE5RyxjQUFNWSxHQUFOLEdBQVlrRyxHQUFaO0FBQ0QsT0FoQkQ7QUFpQkQ7QUFDRixHQTVERDs7QUE4REE5SCxPQUFLOEksUUFBTCxHQUFnQixVQUFTL2UsSUFBVCxFQUFlK2QsR0FBZixFQUFvQjtBQUNsQyxRQUFJaUIsVUFBVUMsZ0JBQWQsRUFBZ0M7QUFDOUJELGdCQUFVQyxnQkFBVixDQUEyQkMsVUFBVW5CLEdBQVYsQ0FBM0IsRUFBMkMvZCxJQUEzQztBQUNELEtBRkQsTUFFTztBQUNMLFVBQUltZixXQUFXOUgsU0FBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFmO0FBQ0EsVUFBSThILG9CQUFvQixjQUFjRCxRQUF0QztBQUNBLFVBQUlDLGlCQUFKLEVBQXVCO0FBQ3JCRCxpQkFBU0osUUFBVCxHQUFvQi9lLElBQXBCO0FBQ0FtZixpQkFBUzVaLEtBQVQsQ0FBZThaLE9BQWYsR0FBeUIsTUFBekI7QUFDQWhJLGlCQUFTaUksSUFBVCxDQUFjakMsV0FBZCxDQUEwQjhCLFFBQTFCO0FBQ0EsWUFBSTtBQUNGLGNBQUlJLE9BQU9MLFVBQVVuQixHQUFWLENBQVg7QUFDQSxjQUFJdEgsTUFBTStJLElBQUlDLGVBQUosQ0FBb0JGLElBQXBCLENBQVY7QUFDQUosbUJBQVNqSSxJQUFULEdBQWdCVCxHQUFoQjtBQUNBMEksbUJBQVNPLE9BQVQsR0FBbUIsWUFBVztBQUM1QkMsa0NBQXNCLFlBQVc7QUFDL0JILGtCQUFJSSxlQUFKLENBQW9CbkosR0FBcEI7QUFDRCxhQUZEO0FBR0QsV0FKRDtBQUtELFNBVEQsQ0FTRSxPQUFPdFQsQ0FBUCxFQUFVO0FBQ1ZvRSxrQkFBUTZQLElBQVIsQ0FBYSx3RUFBYjtBQUNBK0gsbUJBQVNqSSxJQUFULEdBQWdCNkcsR0FBaEI7QUFDRDtBQUNEb0IsaUJBQVM5TyxLQUFUO0FBQ0FnSCxpQkFBU2lJLElBQVQsQ0FBY08sV0FBZCxDQUEwQlYsUUFBMUI7QUFDRCxPQW5CRCxNQW9CSztBQUNIN1QsZUFBT29QLElBQVAsQ0FBWXFELEdBQVosRUFBaUIsT0FBakIsRUFBMEIsaUNBQTFCO0FBQ0Q7QUFDRjtBQUNGLEdBOUJEOztBQWdDQSxXQUFTbUIsU0FBVCxDQUFtQm5CLEdBQW5CLEVBQXdCO0FBQ3RCLFFBQUkrQixhQUFheFUsT0FBT3dULElBQVAsQ0FBWWYsSUFBSWxkLEtBQUosQ0FBVSxHQUFWLEVBQWUsQ0FBZixDQUFaLENBQWpCO0FBQ0EsUUFBSWtmLGFBQWFoQyxJQUFJbGQsS0FBSixDQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCQSxLQUFsQixDQUF3QixHQUF4QixFQUE2QixDQUE3QixFQUFnQ0EsS0FBaEMsQ0FBc0MsR0FBdEMsRUFBMkMsQ0FBM0MsQ0FBakI7QUFDQSxRQUFJc2EsU0FBUyxJQUFJNkUsV0FBSixDQUFnQkYsV0FBVzdlLE1BQTNCLENBQWI7QUFDQSxRQUFJZ2YsV0FBVyxJQUFJM0UsVUFBSixDQUFlSCxNQUFmLENBQWY7QUFDQSxTQUFLLElBQUlqVixJQUFJLENBQWIsRUFBZ0JBLElBQUk0WixXQUFXN2UsTUFBL0IsRUFBdUNpRixHQUF2QyxFQUE0QztBQUMxQytaLGVBQVMvWixDQUFULElBQWM0WixXQUFXSSxVQUFYLENBQXNCaGEsQ0FBdEIsQ0FBZDtBQUNEO0FBQ0QsV0FBTyxJQUFJaWEsSUFBSixDQUFTLENBQUNoRixNQUFELENBQVQsRUFBbUIsRUFBQzFTLE1BQU1zWCxVQUFQLEVBQW5CLENBQVA7QUFDRDs7QUFFRDlKLE9BQUttSyxPQUFMLEdBQWUsVUFBUzdKLEVBQVQsRUFBYXZXLElBQWIsRUFBbUJwQixPQUFuQixFQUE0QjtBQUN6QzBYLG1CQUFlQyxFQUFmOztBQUVBM1gsY0FBVUEsV0FBVyxFQUFyQjtBQUNBcVgsU0FBSzZILFlBQUwsQ0FBa0J2SCxFQUFsQixFQUFzQjNYLE9BQXRCLEVBQStCLFVBQVNtZixHQUFULEVBQWM7QUFDM0M5SCxXQUFLOEksUUFBTCxDQUFjL2UsSUFBZCxFQUFvQitkLEdBQXBCO0FBQ0QsS0FGRDtBQUdELEdBUEQ7O0FBU0E5SCxPQUFLSCxZQUFMLEdBQW9CLFVBQVNTLEVBQVQsRUFBYXZXLElBQWIsRUFBbUJwQixPQUFuQixFQUE0QjtBQUM5QzBYLG1CQUFlQyxFQUFmOztBQUVBM1gsY0FBVUEsV0FBVyxFQUFyQjtBQUNBcVgsU0FBSytILFdBQUwsQ0FBaUJ6SCxFQUFqQixFQUFxQjNYLE9BQXJCLEVBQThCLFVBQVNtZixHQUFULEVBQWM7QUFDMUM5SCxXQUFLOEksUUFBTCxDQUFjL2UsSUFBZCxFQUFvQitkLEdBQXBCO0FBQ0QsS0FGRDtBQUdELEdBUEQ7O0FBU0E7QUFDQSxNQUFJLElBQUosRUFBbUM7QUFDakNzQyxJQUFBLG1DQUFPLFlBQVc7QUFDaEIsYUFBT3BLLElBQVA7QUFDRCxLQUZEO0FBQUE7QUFHRDtBQUVGLENBcmVELEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQnFLLE8sV0FNbEIsNkJBQVMsaUJBQVQsQzs7O0FBSkQseUJBQTREO0FBQUEsNEJBQTlDdmlCLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLDZHQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDtBQUUzRDs7Ozs2QkFHUTtBQUFBOztBQUVQLFVBQUlrSyxXQUFXakgsT0FBT3VELElBQVAsQ0FBWSxLQUFLbkUsSUFBTCxDQUFVaUUsTUFBVixDQUFpQjRELFFBQTdCLEVBQXVDN0UsR0FBdkMsQ0FBMkMsVUFBQ2pDLEdBQUQsRUFBUztBQUNqRSxlQUFPO0FBQ0wrSixjQUFJL0osR0FEQztBQUVMb0gsZ0JBQU0sT0FBS25JLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUI0RCxRQUFqQixDQUEwQjlHLEdBQTFCLEVBQStCb0gsSUFGaEM7QUFHTGhELGlCQUFPLE9BQUtuRixJQUFMLENBQVVpRSxNQUFWLENBQWlCNEQsUUFBakIsQ0FBMEI5RyxHQUExQixFQUErQm9FLEtBSGpDO0FBSUxELGdCQUFNLE9BQUtsRixJQUFMLENBQVVpRSxNQUFWLENBQWlCNEQsUUFBakIsQ0FBMEI5RyxHQUExQixFQUErQm1FO0FBSmhDLFNBQVA7QUFNRCxPQVBjLENBQWY7O0FBU0EsVUFBSSthLHlCQUF1QixLQUFLamdCLElBQUwsQ0FBVWlFLE1BQVYsQ0FBaUI2RyxFQUE1QztBQUNBLFdBQUsxTSxPQUFMLEdBQWVNLEdBQUdDLE1BQUgsT0FBY3NoQixRQUFkLENBQWY7QUFDQTtBQUNBLFVBQUksQ0FBQyxLQUFLN2hCLE9BQUwsQ0FBYUcsSUFBYixFQUFMLEVBQTBCO0FBQ3hCLGFBQUtILE9BQUwsR0FBZSxLQUFLYyxNQUFMLENBQVl1RCxNQUFaLENBQW1CLEtBQW5CLEVBQTBCdEQsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0MsdUJBQXhDLEVBQWlFQSxJQUFqRSxDQUFzRSxJQUF0RSxFQUE0RThnQixRQUE1RSxDQUFmO0FBQ0Q7O0FBRUQsVUFBSS9ZLFVBQVUsS0FBSzlJLE9BQUwsQ0FBYWlFLFNBQWIsQ0FBdUIsa0JBQXZCLEVBQTJDckMsSUFBM0MsQ0FBZ0Q2SCxRQUFoRCxFQUEwRDtBQUFBLGVBQUtoRCxFQUFFaUcsRUFBUDtBQUFBLE9BQTFELENBQWQ7QUFDQSxVQUFJb1YsZUFBZWhaLFFBQVF2QixLQUFSLEdBQWdCbEQsTUFBaEIsQ0FBdUIsS0FBdkIsRUFBOEJ0RCxJQUE5QixDQUFtQyxJQUFuQyxFQUF5QztBQUFBLGVBQUswRixFQUFFaUcsRUFBUDtBQUFBLE9BQXpDLEVBQ2hCM0wsSUFEZ0IsQ0FDWCxPQURXLEVBQ0Y7QUFBQSx1Q0FBMkIwRixFQUFFc0QsSUFBN0I7QUFBQSxPQURFLEVBQ21DUixFQURuQyxDQUNzQyxPQUR0QyxFQUMrQyxZQUFXO0FBQ3pFakosV0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JzRyxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELE9BSGdCLENBQW5CO0FBSUFpYixtQkFBYXpkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJ0RCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRCtGLElBQXBELENBQXlEO0FBQUEsZUFBS0wsRUFBRU0sS0FBUDtBQUFBLE9BQXpEO0FBQ0ErYSxtQkFBYXpkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJ5QyxJQUE1QixDQUFpQztBQUFBLGVBQUtMLEVBQUVLLElBQVA7QUFBQSxPQUFqQztBQUNBZ2IsbUJBQWF6ZCxNQUFiLENBQW9CLE1BQXBCLEVBQTRCdEQsSUFBNUIsQ0FBaUMsT0FBakMsRUFBMEMsUUFBMUMsRUFBb0Q4RixLQUFwRCxDQUEwRCxTQUExRCxFQUFxRSxNQUFyRSxFQUE2RUMsSUFBN0UsQ0FBa0YsR0FBbEY7O0FBRUFnYixtQkFBYXJhLEtBQWIsQ0FBbUJxQixPQUFuQjs7QUFFQUEsY0FBUXhCLElBQVIsR0FBZWhELE1BQWY7O0FBRUEsV0FBS3RFLE9BQUwsQ0FBYTZHLEtBQWIsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7OzsrQkFFVSxDQUFFOzs7OztrQkEzQ00rYSxPIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWI1ZjY1Y2FmYTg2MTRiYTY0NDYiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uID0gNzUwOyAvL21zXG4gIH1cbiAgXG4gIF9pbml0aWFsaXplKCkge31cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycgPyBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnBhcmVudE5vZGUpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGl2JyA/IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50LnNlbGVjdCgnc3ZnJykgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuICBcbiAgZ2V0IHBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cbiAgXG4gIGdldCBtYXJnaW4oKSB7XG4gICAgcmV0dXJuIHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9O1xuICB9XG4gIFxuICBnZXQgd2lkdGgoKSB7XG4gICAgbGV0IHdpZHRoID0gK3RoaXMucGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHJldHVybiB3aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcbiAgfVxuICBcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICBsZXQgaGVpZ2h0ID0gK3RoaXMucGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgcmV0dXJuIGhlaWdodCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBwcm9wZXJ0eVBhdGgpIHtcblxuICB2YXIgdG1wID0gb2JqO1xuXG4gIGlmICh0bXAgJiYgcHJvcGVydHlQYXRoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICghdG1wLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB0bXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRtcCA9IHRtcFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcDtcbn1cblxuZnVuY3Rpb24gaGFzRGF0YShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAoKG9iaiBpbnN0YW5jZW9mIEFycmF5ICYmIG9iai5sZW5ndGgpIHx8IChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgT2JqZWN0LnZhbHVlcyhvYmopLmxlbmd0aCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGF0YS1kZWNvcmF0b3IuanMiLCJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbi8qIGdsb2JhbCBKdXB5dGVyLCBNYXRoSmF4LCBkMyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJNYXRoSmF4KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWcoe1xuICAgICAgICB0ZXgyamF4OiB7XG4gICAgICAgICAgaW5saW5lTWF0aDogW1xuICAgICAgICAgICAgWyckJywgJyQnXSxcbiAgICAgICAgICAgIFsnXFxcXCgnLCAnXFxcXCknXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGlzcGxheU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCQnLCAnJCQnXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCAnXFxcXF0nXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2Vzc0VzY2FwZXM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgU1ZHOiB7XG4gICAgICAgICAgYXZhaWxhYmxlRm9udHM6IFtdLFxuICAgICAgICAgIGltYWdlRm9udDogbnVsbCxcbiAgICAgICAgICBwcmVmZXJyZWRGb250OiBudWxsLFxuICAgICAgICAgIHdlYkZvbnQ6IFwiU1RJWC1XZWJcIixcbiAgICAgICAgICBsaW5lYnJlYWtzOiB7IGF1dG9tYXRpYzogdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgZWxlbWVudC5ub2RlKCldKTtcblxuICAgICAgTWF0aEpheC5IdWIuQ29uZmlndXJlZCgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgTWF0aEpheCBpcyBub3QgbG9hZGVkLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbmV4cG9ydCBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuYXhpcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnlTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnhTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgICBcbiAgICB0aGlzLmF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXM7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNldHMpO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pLmRvbWFpbih0aGlzLmF4aXMueS5kb21haW4pO1xuICAgIFxuICAgIHRoaXMuYWxsVmFsdWVzID0gW107XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5hbGxWYWx1ZXMgPSB0aGlzLmFsbFZhbHVlcy5jb25jYXQodGhpcy5kYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueVNjYWxlLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYWxsVmFsdWVzLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4oWzAsIHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cbiAgfVxuICBcbiAgX3JlbmRlckF4aXMoKSB7XG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHt0aGlzLmhlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHRoaXMud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueS50aXRsZSk7XG4gIH1cbiAgXG4gIF9yZW5kZXJMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEodGhpcy5kYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b29sdGlwKGRhdGFzZXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgJ0EnOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sICdCJzogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKGxldCByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciAmJiAhY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hcHBlbmRUbyAmJiAhYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9nZ2VyIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKExvZ2dlci5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKExvZ2dlci5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbGV2ZWwgdGhlIGxvZyBsZXZlbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgc3RhdGljIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIF9hcHBseUV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNvbnRleHRNZW51ID0gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjcm9zcyc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkaWFtb25kJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xEaWFtb25kO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTcXVhcmU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdGFyJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTdGFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd3llJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xXeWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGxldCBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIGxldCBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGxldCBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrSGFuZGxlcjtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FsbGJhY2snKVxuICBleGVjdXRlKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgb3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSAoY2FsbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVHJpZ2dlciBpcyB0aGUgZXhwZWN0ZWQgY29tbWFuZCBvbiBHQVAgZm9yIHRoaXMgZXZlbnRzIVxuICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICBcbiAgfVxuXG4gIF9leGVjdXRlKGNhbGJhY2tPYmopIHtcbiAgICB0aGlzLmNhbGxiYWNrKGBUcmlnZ2VyKCR7SlNPTi5zdHJpbmdpZnkoSlNPTi5zdHJpbmdpZnkoY2FsYmFja09iaikpfSk7YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMub3ZlcmxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvbGRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB0aGlzLm92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdGhpcy5ob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICB9XG4gIFxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIC8vIFRPRE8gZml4IGFsd2F5cyB2aXNpYmxlIHRvb2x0aXAsIGZpbmUgdW50aWwgc29tZW9uZSBjb21wbGFpbnMgYWJvdXQgOlBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCAocG9zWzBdICsgNSkgKyAncHgnKS5zdHlsZSgndG9wJywgKHBvc1sxXSAtIDUpICsgJ3B4Jyk7XG5cbiAgICBsZXQgdGFibGUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICBsZXQgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmxvYWR9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiAgXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGZyYW1lID0gbmV3IEZyYW1lKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIEFMTF9DQU5WQVNbdGhpcy5kYXRhLmNhbnZhcy5pZF0gPSBmcmFtZTtcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICBzdGF0aWMgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICBsZXQgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lc3NhZ2VzKS5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgY29uc3QgZnJhbWVJZCA9IGBGcmFtZS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSBwYXJ0aWFsIC0gaWYgdGhlIGlucHV0IGlzIG5vdCBhIGNvbXBsZXRlIEZyYW5jeSBKU09OIE9iamVjdCwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwgPSBmYWxzZSkge1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RhdGljIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1pbWUgdHlwZSBzdXBwb3J0ZWQgYnkgdGhpcyBwYWNrYWdlXG4gICAqL1xuICBzdGF0aWMgZ2V0IE1JTUUoKSB7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGhGYWN0b3J5IGZyb20gJy4vZ3JhcGgtZmFjdG9yeSc7XG5pbXBvcnQgQ2hhcnRGYWN0b3J5IGZyb20gJy4vY2hhcnQtZmFjdG9yeSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuZ3JhcGggPSBuZXcgR3JhcGhGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydEZhY3RvcnkgPSBuZXcgQ2hhcnRGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5ncmFwaCkuYWRkKHRoaXMuY2hhcnRGYWN0b3J5KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb250ZW50O1xuICAgIGxldCB6b29tID0gZDMuem9vbSgpO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpIHtcbiAgICAgIHNlbGYuZWxlbWVudC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpLnNjYWxlKHNjYWxlLCBzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIGNvbnRlbnQuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICBsZXQgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIGxldCBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICBsZXQgd2lkdGggPSArYm91bmRzLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9ICtib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICAgIG1pZFkgPSBib3VuZHMueSArIGhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IHNjYWxlID0gMC45IC8gTWF0aC5tYXgod2lkdGggLyBmdWxsV2lkdGgsIGhlaWdodCAvIGZ1bGxIZWlnaHQpO1xuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IGZ1bGxIZWlnaHQgLyAyIC0gc2NhbGUgKiBtaWRZO1xuXG4gICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHNlbGYudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jYW52YXMnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oJ3pvb20nLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oJ2RibGNsaWNrLnpvb20nLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSB6b29tVG9GaXQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b29tVG9GaXQoKTtcbiAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVHJlZUdyYXBoIGZyb20gJy4vZ3JhcGgtdHJlZSc7XG5pbXBvcnQgR2VuZXJpY0dyYXBoIGZyb20gJy4vZ3JhcGgtZ2VuZXJpYyc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgIGNhc2UgJ3RyZWUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBUcmVlR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IG5ldyBHZW5lcmljR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZmFjdG9yeS5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBjb21wdXRlIGhlaWdodCBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIGdyYXBoXG4gICAgbGV0IGxldmVsV2lkdGggPSBbMV07XG4gICAgbGV0IGNoaWxkQ291bnQgPSBmdW5jdGlvbiAobGV2ZWwsIG4pIHtcblxuICAgICAgaWYgKG4uY2hpbGRyZW4gJiYgbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChsZXZlbFdpZHRoLmxlbmd0aCA8PSBsZXZlbCArIDEpIGxldmVsV2lkdGgucHVzaCgwKTtcblxuICAgICAgICBsZXZlbFdpZHRoW2xldmVsICsgMV0gKz0gbi5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHRoaXMud2lkdGhdKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIGxldCB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIGxldCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxODApO1xuXG4gICAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpXG4gICAgICAgIC5hdHRyKCd4JywgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICAgIHJldHVybiAtKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbGV0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgXG4gICAgICBpZiAobm9kZS5ub2RlKCkpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgbGV0IGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIGxldCB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgbGV0IHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICBsZXQgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgbGV0IHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGxldCBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcih0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKTtcbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBzZWxmLnBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgfSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSBkYXRhIGFuZCByZWNhbGN1bGF0ZSBpdHMgc2l6ZVxuICAgICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgICBub2RlLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgIGlmIChyYWRpdXMgPCBib3VuZC53aWR0aCkge1xuICAgICAgICAgIHJhZGl1cyA9IGJvdW5kLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIC8vbGV0IGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHRoaXMud2lkdGggLyAyKS55KHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoKS5yYWRpdXMocmFkaXVzLzIpLml0ZXJhdGlvbnMoMyk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgbGV0IGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjA1KTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgICBsZXQgZm9yY2VZID0gZDMuZm9yY2VZKC10aGlzLmhlaWdodCkuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh0aGlzLndpZHRoKS5zdHJlbmd0aCgwLjMpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMC43KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKS5ub2Rlcyhub2Rlc1RvQWRkKVxuICAgICAgICAuZm9yY2UoJ2NoYXJnZScsIG1hbnlGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdsaW5rJywgbGlua0ZvcmNlKVxuICAgICAgICAvLy5mb3JjZSgnY2VudGVyJywgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZSgneCcsIGZvcmNlWClcbiAgICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHNlbGYucGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgbGV0IHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgbGV0IGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuICBcbiAgX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc09iamVjdHMsIGQzRWxlbWVudCkge1xuICAgIGxldCBuZXdFbGVtZW50cyA9IFtdO1xuICAgIGNhbnZhc09iamVjdHMuZm9yRWFjaChvID0+IHtcbiAgICAgIGxldCBsaW5rID0gZDNFbGVtZW50LmZpbmQoZCA9PiBkLmlkID09PSBvLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudHMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3RWxlbWVudHM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0RmFjdG9yeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuY2hhcnQnKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICBjYXNlICdiYXInOlxuICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY2F0dGVyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgU2NhdHRlckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtZmFjdG9yeS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICB0aGlzLnhTY2FsZSA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0aGlzLmFsbFZhbHVlcy5sZW5ndGggLyB0aGlzLmRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgdGhpcy54U2NhbGUuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi5oZWlnaHQgLSBzZWxmLnlTY2FsZShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHNlbGYudG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBzZWxmLnhTY2FsZShzZWxmLmF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoc2VsZi54U2NhbGUuYmFuZHdpZHRoKCkgLyBzZWxmLmRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLnlTY2FsZShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fcmVuZGVyQXhpcygpO1xuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgbGV0IGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtzZWxmLmRhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuICAgIFxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKHNlbGYuZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigncicsIDUpXG4gICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi54U2NhbGUoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcblxuICAgIHRoaXMuX3JlbmRlckxlZ2VuZCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG5pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgY29uc3QgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIGxldCBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBTdmdUb1BuZy5zYXZlU3ZnQXNQbmcodGhpcy5TVkdQYXJlbnQubm9kZSgpLCAnZGlhZ3JhbS5wbmcnKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICBsZXQgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cywgc3ludGF4SGlnaGxpZ2h0IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbW9kYWxJZCA9ICdBYm91dE1vZGFsV2luZG93JztcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBBYm91dCBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS50ZXh0KCdMb2FkZWQgT2JqZWN0OicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdwcmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5odG1sKHN5bnRheEhpZ2hsaWdodChKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FudmFzLCBudWxsLCAyKSkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWNtYXJ0aW5zL2ZyYW5jeScpLnRleHQoJ0ZyYW5jeSBvbiBHaXRodWInKTtcblxuICAgIGxldCBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7IFxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7IFxuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgQWJvdXQgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KSB8fCBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcblxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIHVybCBpZiByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uLi8nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0IFVSTHMuIEZhbGxpbmcgYmFjayB0byBzdHJpbmcgVVJMLicpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgbGV0IGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1lc3NhZ2UtaG9sZGVyJykuYXR0cignaWQnLCBhbGVydHNJZCk7XG4gICAgfVxuXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LWFsZXJ0JykuZGF0YShtZXNzYWdlcywgZCA9PiBkLmlkKTtcbiAgICBsZXQgbWVzc2FnZUVudGVyID0gbWVzc2FnZS5lbnRlcigpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBmcmFuY3ktYWxlcnQgYWxlcnQtJHtkLnR5cGV9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykudGV4dChkID0+IGQudGl0bGUpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS50ZXh0KGQgPT4gZC50ZXh0KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoJ3gnKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=