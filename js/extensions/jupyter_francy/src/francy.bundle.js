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
        var radius = 0;
        node.each(function () {
          var bound = this.getBBox();
          if (radius < bound.width) {
            radius = bound.width;
          }
        });
        // Canvas Forces
        var centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide().radius(radius / 2).iterations(3);

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
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzdhOWM1NGFhNGRmYjNiMTMyNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2ZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsInBhcmVudCIsImF0dHIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYXJnaW4iLCJoZWlnaHQiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5pdGlhbGl6ZSIsImtleSIsIl9pbml0aWFsaXplIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzeW50YXhIaWdobGlnaHQiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsInRleDJqYXgiLCJqYXgiLCJpbmxpbmVNYXRoIiwiZGlzcGxheU1hdGgiLCJwcm9jZXNzRXNjYXBlcyIsIlJlZ2lzdGVyIiwiU3RhcnR1cEhvb2siLCJzZWxlY3RBbGwiLCJlYWNoIiwic2VsZiIsIm1hdGhKYXgiLCJhcHBlbmQiLCJyZW1vdmUiLCJRdWV1ZSIsIkNvbmZpZ3VyZWQiLCJlIiwiaW5mbyIsImNsYXNzZXMiLCJtYXAiLCJjbCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwianNvbiIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJDaGFydCIsImF4aXMiLCJ5U2NhbGUiLCJ4U2NhbGUiLCJkYXRhc2V0cyIsImRhdGFzZXROYW1lcyIsInRvb2x0aXAiLCJjYW52YXMiLCJjaGFydCIsImtleXMiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiZG9tYWluIiwieCIsInkiLCJhbGxWYWx1ZXMiLCJmb3JFYWNoIiwiY29uY2F0IiwibWF4IiwiZCIsInhBeGlzR3JvdXAiLCJjYWxsIiwiYXhpc0JvdHRvbSIsInN0eWxlIiwidGV4dCIsInRpdGxlIiwieUF4aXNHcm91cCIsImF4aXNMZWZ0Iiwic2hvd0xlZ2VuZCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwic2xpY2UiLCJleGl0IiwiZW50ZXIiLCJpIiwibWVyZ2UiLCJjb2xvcnMiLCJkYXRhc2V0IiwiZnJvbSIsIl8iLCJzY2FsZVNlcXVlbnRpYWwiLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJzZXR0aW5ncyIsImxvYWQiLCJCYXNlIiwibG9nIiwiRXJyb3IiLCJwYXJ0aWFsIiwicGFyc2UiLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiR3JhcGgiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwib24iLCJleGVjdXRlQ2FsbGJhY2siLCJtZXNzYWdlcyIsImV2ZW50IiwiY2FsbGJhY2tzIiwiY2IiLCJ0cmlnZ2VyIiwiZXhlY3V0ZSIsInR5cGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzeW1ib2xDaXJjbGUiLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsbGJhY2tPYmoiLCJfZXhlY3V0ZSIsImNhbGJhY2tPYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiTW9kYWwiLCJvdmVybGF5IiwiaG9sZGVyIiwiVG9vbHRpcCIsIkhUTUxQYXJlbnQiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInRhYmxlIiwicm93IiwiQUxMX0NBTlZBUyIsIkZyYW5jeSIsImZyYW1lIiwiaWQiLCJleHBvcnRzIiwid2luZG93Iiwib2xkUmVzaXplIiwib25yZXNpemUiLCJ6b29tVG9GaXQiLCJGcmFtZSIsIm1lbnUiLCJhZGQiLCJmcmFtZUlkIiwicmVuZGVyQ2hpbGRyZW4iLCJKc29uVXRpbHMiLCJpbnB1dCIsImpzb25SZWdleCIsImV4ZWMiLCJtaW1lIiwiTUlNRSIsIkNhbnZhcyIsImdyYXBoIiwiY2hhcnRGYWN0b3J5Iiwiem9vbSIsInVwZGF0ZVpvb20iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZnVsbFdpZHRoIiwiZnVsbEhlaWdodCIsIm1pZFgiLCJtaWRZIiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJkZXB0aCIsImxpbmtHcm91cCIsImxpbmsiLCJsaW5rRW50ZXIiLCJvIiwiZGlhZ29uYWwiLCJzIiwibm9kZUdyb3VwIiwibm9kZUVudGVyIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwiYm91bmQiLCJub2RlVXBkYXRlIiwibGF5ZXIiLCJfYXBwbHlFdmVudHMiLCJub2RlT25DbGljayIsImNsaWNrIiwiY2FudmFzTm9kZXMiLCJkYXRhTWFwIiwicmVkdWNlIiwiQ29udGV4dE1lbnUiLCJwcmV2ZW50RGVmYXVsdCIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsImZvcm0iLCJoZWFkZXIiLCJoZWFkZXJUaXRsZSIsImFyZyIsIm9uY2hhbmdlIiwiY2hlY2tlZCIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsIkdlbmVyaWNHcmFwaCIsInNpbXVsYXRpb25BY3RpdmUiLCJzaW11bGF0aW9uIiwiY2FudmFzTGlua3MiLCJsaW5rc1RvQWRkIiwiX2ZpbHRlck5ld0VsZW1lbnRzIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJyYWRpdXMiLCJjZW50ZXJGb3JjZSIsImZvcmNlQ2VudGVyIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJpdGVyYXRpb25zIiwiZm9yY2VYIiwiZm9yY2VZIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYW52YXNPYmplY3RzIiwiZDNFbGVtZW50IiwibmV3RWxlbWVudHMiLCJmaW5kIiwiQ2hhcnRGYWN0b3J5IiwiQmFyQ2hhcnQiLCJzY2FsZUJhbmQiLCJwYWRkaW5nIiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsIl9yZW5kZXJBeGlzIiwiX3JlbmRlckxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJvdXQkIiwiZG9jdHlwZSIsImlzRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiU1ZHRWxlbWVudCIsInJlcXVpcmVEb21Ob2RlIiwiZWwiLCJpc0V4dGVybmFsIiwidXJsIiwibGFzdEluZGV4T2YiLCJsb2NhdGlvbiIsImhvc3QiLCJpbmxpbmVJbWFnZXMiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tEb25lIiwiaW1hZ2UiLCJocmVmIiwiZ2V0QXR0cmlidXRlTlMiLCJ3YXJuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJzdHlsZXMiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJmb3JtYXQiLCJnZXRGb250TWltZVR5cGVGcm9tVXJsIiwicHJvY2Vzc0ZvbnRRdWV1ZSIsImZvbnRVcmwiLCJzdXBwb3J0ZWRGb3JtYXRzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4T2YiLCJxdWV1ZSIsImZvbnQiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcmVwYXJlU3ZnIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJpbm5lckhUTUwiLCJkZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm91dEh0bWwiLCJzdmdBc0RhdGFVcmkiLCJ1cmkiLCJzdmdBc1BuZ1VyaSIsImVuY29kZXJUeXBlIiwiZW5jb2Rlck9wdGlvbnMiLCJjb252ZXJ0VG9QbmciLCJ3IiwiaCIsImNvbnRleHQiLCJjYW52ZyIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicG5nIiwiU2VjdXJpdHlFcnJvciIsImF0b2IiLCJkb3dubG9hZCIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJ1cmlUb0Jsb2IiLCJzYXZlTGluayIsImRvd25sb2FkU3VwcG9ydGVkIiwiZGlzcGxheSIsImJvZHkiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25jbGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3ZnIiwiZGVmaW5lIiwiTWVzc2FnZSIsImFsZXJ0c0lkIiwibWVzc2FnZUVudGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUNDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG9IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJBQWlCQSxlQUF6RCxFQURvRDs7QUFFMUQsUUFBSUMsSUFBSUMsTUFBSixLQUFlTCxRQUFuQixFQUE2QjtBQUMzQixZQUFNLElBQUlNLFNBQUosQ0FBYyxpREFBZCxDQUFOO0FBQ0Q7QUFDRCxRQUFJLE1BQUtDLE1BQUwsS0FBZ0JDLFNBQWhCLElBQTZCLE9BQU8sTUFBS0QsTUFBWixLQUF1QixVQUF4RCxFQUFvRTtBQUNsRSxZQUFNLElBQUlELFNBQUosQ0FB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LGVBQUtMLEVBQUVNLEtBQVA7QUFBQSxPQUF6RDtBQUNBaWIsbUJBQWEzZCxNQUFiLENBQW9CLE1BQXBCLEVBQTRCeUMsSUFBNUIsQ0FBaUM7QUFBQSxlQUFLTCxFQUFFSyxJQUFQO0FBQUEsT0FBakM7QUFDQWtiLG1CQUFhM2QsTUFBYixDQUFvQixNQUFwQixFQUE0QmhELElBQTVCLENBQWlDLE9BQWpDLEVBQTBDLFFBQTFDLEVBQW9Ed0YsS0FBcEQsQ0FBMEQsU0FBMUQsRUFBcUUsTUFBckUsRUFBNkVDLElBQTdFLENBQWtGLEdBQWxGOztBQUVBa2IsbUJBQWF2YSxLQUFiLENBQW1CcUIsT0FBbkI7O0FBRUFBLGNBQVF4QixJQUFSLEdBQWVoRCxNQUFmOztBQUVBLFdBQUtoRSxPQUFMLENBQWF1RyxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBM0NNaWIsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc3YTljNTRhYTRkZmIzYjEzMjZmIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDc1MDsgLy9tc1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHt9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RpdicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cbiAgXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG4gIFxuICBnZXQgbWFyZ2luKCkge1xuICAgIHJldHVybiB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcbiAgfVxuICBcbiAgZ2V0IHdpZHRoKCkge1xuICAgIGxldCB3aWR0aCA9ICt0aGlzLnBhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gd2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQ7XG4gIH1cbiAgXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgbGV0IGhlaWdodCA9ICt0aGlzLnBhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIHJldHVybiBoZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHlQYXRoKSB7XG5cbiAgdmFyIHRtcCA9IG9iajtcblxuICBpZiAodG1wICYmIHByb3BlcnR5UGF0aCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIXRtcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgdG1wID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RhdGEtZGVjb3JhdG9yLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pbml0aWFsaXplLWRlY29yYXRvci5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGpheDogWydpbnB1dC9UZVgnLCAnb3V0cHV0L1NWRyddLFxuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgJ1xcXFwpJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpc3BsYXlNYXRoOiBbXG4gICAgICAgICAgICBbJyQkJywgJyQkJ10sXG4gICAgICAgICAgICBbJ1xcXFxbJywgJ1xcXFxdJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb2Nlc3NFc2NhcGVzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgZWxlbWVudC5ub2RlKCldKTtcblxuICAgICAgTWF0aEpheC5IdWIuQ29uZmlndXJlZCgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgTWF0aEpheCBpcyBub3QgbG9hZGVkLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbmV4cG9ydCBmdW5jdGlvbiBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfVxuICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgY2xzID0gJ251bGwnO1xuICAgIH1cbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuYXhpcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnlTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnhTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFzZXRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGF0YXNldE5hbWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgdGhpcy50b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgICBcbiAgICB0aGlzLmF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXM7XG4gICAgdGhpcy5kYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YTtcbiAgICB0aGlzLmRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YXNldHMpO1xuXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB0aGlzLndpZHRoXSkuZG9tYWluKHRoaXMuYXhpcy54LmRvbWFpbik7XG4gICAgdGhpcy55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pLmRvbWFpbih0aGlzLmF4aXMueS5kb21haW4pO1xuICAgIFxuICAgIHRoaXMuYWxsVmFsdWVzID0gW107XG4gICAgdGhpcy5kYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdGhpcy5hbGxWYWx1ZXMgPSB0aGlzLmFsbFZhbHVlcy5jb25jYXQodGhpcy5kYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIXRoaXMuYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHRoaXMueVNjYWxlLmRvbWFpbihbMCwgZDMubWF4KHRoaXMuYWxsVmFsdWVzLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB0aGlzLnhTY2FsZS5kb21haW4oWzAsIHRoaXMuYWxsVmFsdWVzLmxlbmd0aCAvIHRoaXMuZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cbiAgfVxuICBcbiAgX3JlbmRlckF4aXMoKSB7XG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHt0aGlzLmhlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20odGhpcy54U2NhbGUpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHRoaXMud2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KHRoaXMuYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh0aGlzLnlTY2FsZSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dCh0aGlzLmF4aXMueS50aXRsZSk7XG4gIH1cbiAgXG4gIF9yZW5kZXJMZWdlbmQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEodGhpcy5kYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHRoaXMud2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB0aGlzLndpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b29sdGlwKGRhdGFzZXQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHsgJ0EnOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sICdCJzogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKGxldCByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciAmJiAhY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hcHBlbmRUbyAmJiAhYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogTG9nZ2VyIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKExvZ2dlci5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKExvZ2dlci5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IoTG9nZ2VyLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbGV2ZWwgdGhlIGxvZyBsZXZlbFxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgc3RhdGljIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4vbWVudS1jb250ZXh0JztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG4gIFxuICBfaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIF9hcHBseUV2ZW50cyhlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICBsZXQgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNvbnRleHRNZW51ID0gbmV3IENvbnRleHRNZW51KHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjcm9zcyc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkaWFtb25kJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xEaWFtb25kO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3F1YXJlJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTcXVhcmU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdGFyJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xTdGFyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd3llJzpcbiAgICAgIGVsZW1lbnQgPSBkMy5zeW1ib2xXeWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICBsZXQgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGxldCBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIGxldCBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIGxldCBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrSGFuZGxlcjtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FsbGJhY2snKVxuICBleGVjdXRlKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgb3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSAoY2FsbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gVHJpZ2dlciBpcyB0aGUgZXhwZWN0ZWQgY29tbWFuZCBvbiBHQVAgZm9yIHRoaXMgZXZlbnRzIVxuICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICBcbiAgfVxuXG4gIF9leGVjdXRlKGNhbGJhY2tPYmopIHtcbiAgICB0aGlzLmNhbGxiYWNrKGBUcmlnZ2VyKCR7SlNPTi5zdHJpbmdpZnkoSlNPTi5zdHJpbmdpZnkoY2FsYmFja09iaikpfSk7YCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMub3ZlcmxheSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhvbGRlciA9IHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgX2luaXRpYWxpemUoKSB7XG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB0aGlzLm92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdGhpcy5ob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICB9XG4gIFxuICB1bnJlbmRlcigpIHtcbiAgICB0aGlzLm92ZXJsYXkucmVtb3ZlKCk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuaG9sZGVyLnJlbW92ZSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIC8vIFRPRE8gZml4IGFsd2F5cyB2aXNpYmxlIHRvb2x0aXAsIGZpbmUgdW50aWwgc29tZW9uZSBjb21wbGFpbnMgYWJvdXQgOlBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCAocG9zWzBdICsgNSkgKyAncHgnKS5zdHlsZSgndG9wJywgKHBvc1sxXSAtIDUpICsgJ3B4Jyk7XG5cbiAgICBsZXQgdGFibGUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICBsZXQgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmxvYWR9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiAgXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGZyYW1lID0gbmV3IEZyYW1lKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIEFMTF9DQU5WQVNbdGhpcy5kYXRhLmNhbnZhcy5pZF0gPSBmcmFtZTtcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICBzdGF0aWMgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICBsZXQgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lc3NhZ2VzKS5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgY29uc3QgZnJhbWVJZCA9IGBGcmFtZS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEBwYXJhbSBwYXJ0aWFsIC0gaWYgdGhlIGlucHV0IGlzIG5vdCBhIGNvbXBsZXRlIEZyYW5jeSBKU09OIE9iamVjdCwgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwgPSBmYWxzZSkge1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RhdGljIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIG1pbWUgdHlwZSBzdXBwb3J0ZWQgYnkgdGhpcyBwYWNrYWdlXG4gICAqL1xuICBzdGF0aWMgZ2V0IE1JTUUoKSB7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGhGYWN0b3J5IGZyb20gJy4vZ3JhcGgtZmFjdG9yeSc7XG5pbXBvcnQgQ2hhcnRGYWN0b3J5IGZyb20gJy4vY2hhcnQtZmFjdG9yeSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuZ3JhcGggPSBuZXcgR3JhcGhGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydEZhY3RvcnkgPSBuZXcgQ2hhcnRGYWN0b3J5KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5ncmFwaCkuYWRkKHRoaXMuY2hhcnRGYWN0b3J5KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb250ZW50O1xuICAgIGxldCB6b29tID0gZDMuem9vbSgpO1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpIHtcbiAgICAgIHNlbGYuZWxlbWVudC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpLnNjYWxlKHNjYWxlLCBzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIGNvbnRlbnQuYXR0cigndHJhbnNmb3JtJywgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICBsZXQgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIGxldCBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICBsZXQgd2lkdGggPSArYm91bmRzLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9ICtib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gMCB8fCBoZWlnaHQgPT09IDApIHJldHVybjtcblxuICAgICAgICBsZXQgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICAgIG1pZFkgPSBib3VuZHMueSArIGhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IHNjYWxlID0gMC45IC8gTWF0aC5tYXgod2lkdGggLyBmdWxsV2lkdGgsIGhlaWdodCAvIGZ1bGxIZWlnaHQpO1xuICAgICAgICBsZXQgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IGZ1bGxIZWlnaHQgLyAyIC0gc2NhbGUgKiBtaWRZO1xuXG4gICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHNlbGYudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jYW52YXMnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oJ3pvb20nLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oJ2RibGNsaWNrLnpvb20nLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSB6b29tVG9GaXQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b29tVG9GaXQoKTtcbiAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVHJlZUdyYXBoIGZyb20gJy4vZ3JhcGgtdHJlZSc7XG5pbXBvcnQgR2VuZXJpY0dyYXBoIGZyb20gJy4vZ3JhcGgtZ2VuZXJpYyc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgIGNhc2UgJ3RyZWUnOlxuICAgICAgZWxlbWVudCA9IG5ldyBUcmVlR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZWxlbWVudCA9IG5ldyBHZW5lcmljR3JhcGgodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZmFjdG9yeS5qcyIsImltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVHcmFwaCBleHRlbmRzIEdyYXBoIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBjb21wdXRlIGhlaWdodCBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIGdyYXBoXG4gICAgbGV0IGxldmVsV2lkdGggPSBbMV07XG4gICAgbGV0IGNoaWxkQ291bnQgPSBmdW5jdGlvbiAobGV2ZWwsIG4pIHtcblxuICAgICAgaWYgKG4uY2hpbGRyZW4gJiYgbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChsZXZlbFdpZHRoLmxlbmd0aCA8PSBsZXZlbCArIDEpIGxldmVsV2lkdGgucHVzaCgwKTtcblxuICAgICAgICBsZXZlbFdpZHRoW2xldmVsICsgMV0gKz0gbi5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICBsZXQgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHRoaXMud2lkdGhdKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIGxldCB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIGxldCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxODApO1xuXG4gICAgICBsZXQgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICBsZXQgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54MCwgeTogc291cmNlLnkwfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICBsZXQgbyA9IHt4OiBzb3VyY2UueCwgeTogc291cmNlLnl9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpXG4gICAgICAgIC5hdHRyKCd4JywgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICAgIHJldHVybiAtKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICAgIH0pXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbGV0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgXG4gICAgICBpZiAobm9kZS5ub2RlKCkpIHtcbiAgICAgICAgdGhpcy5fYXBwbHlFdmVudHMobm9kZSk7XG5cbiAgICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgbGV0IGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIGxldCB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgbGV0IHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICBsZXQgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5ob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIGxldCBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgbGV0IGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKGxldCBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgbGV0IHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIGxldCBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgbGV0IGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcih0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICB0aGlzLnVucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgbGV0IGlucHV0RWxlbWVudCA9IGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKTtcbiAgICBpZiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL3V0aWwvaW5pdGlhbGl6ZS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgR3JhcGgge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAaW5pdGlhbGl6ZSgpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgXG4gICAgbGV0IHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICBsZXQgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gdGhpcy5fZmlsdGVyTmV3RWxlbWVudHMoY2FudmFzTGlua3MsIGxpbmtzKTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IHRoaXMuX2ZpbHRlck5ld0VsZW1lbnRzKGNhbnZhc05vZGVzLCBub2Rlcyk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBzZWxmLnBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIGxldCBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSlcbiAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBib3VuZCA9IHRoaXMuZ2V0QkJveCgpO1xuICAgICAgICByZXR1cm4gLShib3VuZC53aWR0aCAvIDIpO1xuICAgICAgfSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIHRoaXMuX2FwcGx5RXZlbnRzKG5vZGUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSBkYXRhIGFuZCByZWNhbGN1bGF0ZSBpdHMgc2l6ZVxuICAgICAgbGV0IHJhZGl1cyA9IDA7XG4gICAgICBub2RlLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGJvdW5kID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICAgIGlmIChyYWRpdXMgPCBib3VuZC53aWR0aCkge1xuICAgICAgICAgIHJhZGl1cyA9IGJvdW5kLndpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIGxldCBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh0aGlzLndpZHRoIC8gMikueSh0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgbGV0IG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgbGV0IGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICBsZXQgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKCkucmFkaXVzKHJhZGl1cy8yKS5pdGVyYXRpb25zKDMpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgIGxldCBmb3JjZVggPSBkMy5mb3JjZVgodGhpcy53aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIGxldCBmb3JjZVkgPSBkMy5mb3JjZVkodGhpcy5oZWlnaHQgLyAyKS5zdHJlbmd0aCgwLjI1KTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgICAgZm9yY2VYID0gZDMuZm9yY2VYKHRoaXMud2lkdGggLyAyKS5zdHJlbmd0aCgwLjMpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMC43KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKS5ub2Rlcyhub2Rlc1RvQWRkKVxuICAgICAgICAuZm9yY2UoJ2NoYXJnZScsIG1hbnlGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdsaW5rJywgbGlua0ZvcmNlKVxuICAgICAgICAuZm9yY2UoJ2NlbnRlcicsIGNlbnRlckZvcmNlKVxuICAgICAgICAuZm9yY2UoJ3gnLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZSgneScsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKCdjb2xsaWRlJywgY29sbGlkZUZvcmNlKVxuICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgIC5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgICBzZWxmLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgICBzaW11bGF0aW9uLmFscGhhKDAuNSkucmVzdGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIHdlbGwsIHNpbXVsYXRpb24gaXMgb2ZmLCBhcHBseSBmaXhlZCBwb3NpdGlvbnMgYW5kIHpvb20gdG8gZml0IG5vd1xuICAgICAgdGlja2VkKCk7XG4gICAgICBzZWxmLnBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIGxldCB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIGxldCBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbiAgXG4gIF9maWx0ZXJOZXdFbGVtZW50cyhjYW52YXNPYmplY3RzLCBkM0VsZW1lbnQpIHtcbiAgICBsZXQgbmV3RWxlbWVudHMgPSBbXTtcbiAgICBjYW52YXNPYmplY3RzLmZvckVhY2gobyA9PiB7XG4gICAgICBsZXQgbGluayA9IGQzRWxlbWVudC5maW5kKGQgPT4gZC5pZCA9PT0gby5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBuZXdFbGVtZW50cy5wdXNoKGxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnRzLnB1c2gobyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnRzO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vY2hhcnQtbGluZSc7XG5pbXBvcnQgU2NhdHRlckNoYXJ0IGZyb20gJy4vY2hhcnQtc2NhdHRlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydEZhY3RvcnkgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgY2FzZSAnYmFyJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIGVsZW1lbnQgPSBuZXcgTGluZUNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2NhdHRlcic6XG4gICAgICBlbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWZhY3RvcnkuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgdGhpcy54U2NhbGUgPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgdGhpcy53aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4odGhpcy5heGlzLnguZG9tYWluKTtcblxuICAgIGlmICghdGhpcy5heGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgdGhpcy5heGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodGhpcy5hbGxWYWx1ZXMubGVuZ3RoIC8gdGhpcy5kYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHRoaXMueFNjYWxlLmRvbWFpbih0aGlzLmF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIGxldCBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoc2VsZi5kYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKHNlbGYuYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIChzZWxmLnhTY2FsZS5iYW5kd2lkdGgoKSAvIHNlbGYuZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaGVpZ2h0IC0gc2VsZi55U2NhbGUoZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KTtcbiAgICAgICAgICBzZWxmLnRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gc2VsZi54U2NhbGUoc2VsZi5heGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHNlbGYueFNjYWxlLmJhbmR3aWR0aCgpIC8gc2VsZi5kYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gc2VsZi55U2NhbGUoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBzZWxmLmhlaWdodCAtIHNlbGYueVNjYWxlKGQpOyB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlckF4aXMoKTtcbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi4vdXRpbC9pbml0aWFsaXplLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBDaGFydCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIGxldCBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHRoaXMuZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKGkpO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KTtcblxuICAgICAgbGV0IGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1saW5lLSR7aW5kZXh9YCkuZGF0YShbc2VsZi5kYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBsaW5lRW50ZXIgPSBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZS0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5lRW50ZXIubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG4gICAgdGhpcy5fcmVuZGVyTGVnZW5kKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsImltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIENoYXJ0IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGluaXRpYWxpemUoKVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cbiAgICBcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIGxldCBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YCkuZGF0YShzZWxmLmRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgc2NhdHRlckVudGVyID0gc2NhdHRlclxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3InLCA1KVxuICAgICAgICAuYXR0cignY3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueFNjYWxlKGkpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYueVNjYWxlKGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgc2VsZi50b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyRW50ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZW5kZXJBeGlzKCk7XG5cbiAgICB0aGlzLl9yZW5kZXJMZWdlbmQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIGNvbnN0IG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5wYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgbGV0IGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSwgJ2RpYWdyYW0ucG5nJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMsIHN5bnRheEhpZ2hsaWdodCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuLi91dGlsL2luaXRpYWxpemUtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBpbml0aWFsaXplKClcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICBsZXQgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbChzeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4geyBcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgdGhpcy51bnJlbmRlci5jYWxsKHRoaXMpOyBcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCkgfHwgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZSB1cmwgaWYgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLi4vJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYmxvYiA9IHVyaVRvQmxvYih1cmkpO1xuICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgc2F2ZUxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCBVUkxzLiBGYWxsaW5nIGJhY2sgdG8gc3RyaW5nIFVSTC4nKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLm1lc3NhZ2VzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxldCBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgbGV0IG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKS50ZXh0KCd4Jyk7XG5cbiAgICBtZXNzYWdlRW50ZXIubWVyZ2UobWVzc2FnZSk7XG5cbiAgICBtZXNzYWdlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9