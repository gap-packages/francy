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

var _base = __webpack_require__(7);

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

var _logger = __webpack_require__(8);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Jupyter, MathJax, d3 */

function RegisterMathJax(element) {
  if (!element) return;
  setTimeout(function () {
    try {
      MathJax.Hub.Config({
        extensions: ["tex2jax.js"],
        jax: ["input/TeX", "output/SVG"],
        tex2jax: {
          inlineMath: [['$', '$'], ["\\(", "\\)"]],
          displayMath: [['$$', '$$'], ["\\[", "\\]"]],
          processEscapes: true
        },
        skipStartupTypeset: true
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

      MathJax.Hub.Queue(["setRenderer", MathJax.Hub, "SVG"], ['Typeset', MathJax.Hub, element.node()]);

      MathJax.Hub.Configured();
    } catch (e) {
      if (e.name == 'ReferenceError') {
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
    if (e.name == 'ReferenceError') {
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

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _data = __webpack_require__(1);

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

var Tooltip = (_dec = (0, _data.requires)(), (_class = function (_Renderer) {
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

      this;
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
/* 4 */
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

var _chartBar = __webpack_require__(19);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(20);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(21);

var _chartScatter2 = _interopRequireDefault(_chartScatter);

var _data = __webpack_require__(1);

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

var Chart = (_dec = (0, _data.requires)('canvas.chart'), (_class = function (_Renderer) {
  _inherits(Chart, _Renderer);

  function Chart(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render() {

      switch (this.data.canvas.chart.type) {
        case "bar":
          this.element = new _chartBar2.default(this.options).load(this.data).render();
          break;
        case "line":
          this.element = new _chartLine2.default(this.options).load(this.data).render();
          break;
        case "scatter":
          this.element = new _chartScatter2.default(this.options).load(this.data).render();
          break;
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }], [{
    key: 'tooltip',
    value: function tooltip(dataset, value) {
      return { "A": { 'title': 'Dataset', 'text': dataset }, "B": { 'title': 'Value', 'text': value } };
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
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
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

var _dec, _desc, _value, _class;

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _graphTree = __webpack_require__(15);

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = __webpack_require__(16);

var _graphGeneric2 = _interopRequireDefault(_graphGeneric);

var _menuContext = __webpack_require__(17);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(3);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(10);

var _callback2 = _interopRequireDefault(_callback);

var _data = __webpack_require__(1);

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

var Graph = (_dec = (0, _data.requires)('canvas.graph'), (_class = function (_Renderer) {
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
  }], [{
    key: 'applyEvents',
    value: function applyEvents(element, options) {
      if (!element) return;

      var tooltip = new _tooltip2.default(options);
      var contextMenu = new _menuContext2.default(options);
      var callback = new _callback2.default(options);

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
  }, {
    key: 'getSymbol',
    value: function getSymbol(type) {
      if (type === 'circle') {
        return d3.symbolCircle;
      } else if (type === 'cross') {
        return d3.symbolCross;
      } else if (type === 'diamond') {
        return d3.symbolDiamond;
      } else if (type === 'square') {
        return d3.symbolSquare;
      } else if (type === 'triangle') {
        return d3.symbolTriangle;
      } else if (type === 'star') {
        return d3.symbolStar;
      } else if (type === 'wye') {
        return d3.symbolWye;
      } else {
        return d3.symbolCircle;
      }
    }
  }, {
    key: 'colors',
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Graph;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Graph;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(8);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(13);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
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

      if (!callbackHandler) {
        throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
      }
      if (!appendTo) {
        throw new Error('Missing an element or id to append the graphics to...!');
      }
      /**
       * @typedef {Object} Options
       * @property {Boolean} verbose prints extra log information to console.log, default false
       * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
       * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
       */
      this.options = {};
      this.options.verbose = verbose || this.options.verbose;
      this.options.appendTo = appendTo || this.options.verbose;
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class is a singleton that provides a logger for the Francy application.
 */
var Logger = function () {

  /**
   * Singleton: Creates an instance of the logger and will returned that instance,
   * everytime a new instance is requested.
   * @param verbose prints extra log information to console.log, default false
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
        this.console.debug(this._format('DEBUG', message));
      }
    }

    /**
     * Creates a [INFO] entry in the console log
     * @param message the message to print
     */

  }, {
    key: 'info',
    value: function info(message) {
      this.console.info(this._format('INFO', message));
    }

    /**
     * Creates a [ERROR] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: 'error',
    value: function error(message, _error) {
      this.console.error(this._format('ERROR', message), _error);
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
      this.console.error(this._format('WARN', message), error);
    }

    /**
     * This is a private method that formats all log messages
     * @param message the message to print
     */

  }, {
    key: '_format',
    value: function _format(level, message) {
      return '[' + level + '] - ' + new Date().toISOString() + ' - ' + message;
    }
  }]);

  return Logger;
}();

exports.default = Logger;

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

var _base = __webpack_require__(7);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(18);

var _modalRequired2 = _interopRequireDefault(_modalRequired);

var _data = __webpack_require__(1);

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

var CallbackHandler = (_dec = (0, _data.requires)('callback'), (_class = function (_Base) {
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
        options.callbackHandler = function (calbackObj) {
          return _this2._execute.call(_this2, calbackObj);
        };
        return new _modalRequired2.default(options).load(this.data, true).render();
      } else {
        // Trigger is the expected command on GAP for this events!
        this._execute(this.data.callback);
      }
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

var _frame = __webpack_require__(12);

var _frame2 = _interopRequireDefault(_frame);

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Tracker from './tracker/change';

var ALL_CANVAS = {};

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 * @access public
 * 
 * @version 0.5.0
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.load(json).render();
 */

var Francy = function (_Renderer) {
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
      //var tracker = new Tracker(json, this.options);
      //tracker.subscribe(function(obj) { console.log(obj); });
      //return new Draw(this.options).handle(tracker.object);
      var frame = new _frame2.default(this.options).load(this.data).render();
      ALL_CANVAS[this.data.canvas.id] = frame;
      return frame.element.node();
    }
  }, {
    key: 'unrender',
    value: function unrender(id) {
      delete ALL_CANVAS[id];
    }
  }]);

  return Francy;
}(_renderer2.default);

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

var _composite = __webpack_require__(6);

var _composite2 = _interopRequireDefault(_composite);

var _canvas = __webpack_require__(14);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(22);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(24);

var _message2 = _interopRequireDefault(_message);

var _data = __webpack_require__(1);

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

var Frame = (_dec = (0, _data.requires)('canvas'), (_class = function (_Composite) {
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
     * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
     */
    value: function parse(input, partial) {
      if (!input) return;
      input = typeof input !== "string" ? JSON.stringify(input) : input;
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
      return;
    }
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

var _composite = __webpack_require__(6);

var _composite2 = _interopRequireDefault(_composite);

var _graph = __webpack_require__(5);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

var _data = __webpack_require__(1);

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

var Canvas = (_dec = (0, _data.requires)('canvas'), (_class = function (_Composite) {
  _inherits(Canvas, _Composite);

  function Canvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.graph = new _graph2.default(_this.options);
    _this.chart = new _chart2.default(_this.options);
    _this.add(_this.graph).add(_this.chart);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var parent = this.options.appendTo.element;
      var self = this;

      function updateZoom(translateX, translateY, scale) {
        self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
      }

      function zoomed() {
        content.attr("transform", d3.event.transform);
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

          var width = bounds.width,
              height = bounds.height;

          if (width == 0 || height == 0) return;

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
        this.element = parent.append('svg').attr('class', 'francy-canvas').attr('id', canvasId);
      }

      // cannot continue if canvas is not present
      if (!this.element.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

      var zoom = d3.zoom();

      var content = this.element.select('g.francy-content');

      if (!content.node()) {
        content = this.element.append('g').attr('class', 'francy-content');
        zoom.on("zoom", zoomed);
        // remove zoom on double click!
        this.element.call(zoom).on("dblclick.zoom", null);
      }

      this.element.on("click", stopped, true);

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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _graph = __webpack_require__(5);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var TreeGraph = function (_Renderer) {
  _inherits(TreeGraph, _Renderer);

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

      var parent = this.options.appendTo.element;

      this.element = parent.select('g.francy-content');

      var width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      var i = 0,
          root;

      root = d3.hierarchy(this.treeData, function (d) {
        return d.children;
      });
      root.x0 = height / 2;
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

      var treemap = d3.tree().size([newHeight, width]);

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
        _graph2.default.applyEvents(node, this.options);

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
          parent.zoomToFit();
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
}(_renderer2.default);

exports.default = TreeGraph;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _graph = __webpack_require__(5);

var _graph2 = _interopRequireDefault(_graph);

var _component = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var GenericGraph = function (_Renderer) {
  _inherits(GenericGraph, _Renderer);

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

      var parent = this.options.appendTo.element;

      var simulationActive = this.data.canvas.graph.simulation;

      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
          canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

      this.element = parent.select('g.francy-content');

      var width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      var links = linkGroup.selectAll('g.francy-link').data();
      var linksToAdd = [];
      canvasLinks.forEach(function (l) {
        var link = links.find(function (d) {
          return d.id === l.id;
        });
        if (link) {
          linksToAdd.push(link);
        } else {
          linksToAdd.push(l);
        }
      });

      var link = linkGroup.selectAll('g.francy-link').data(linksToAdd, function (d) {
        return d.id;
      });

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      var nodes = nodeGroup.selectAll('g.francy-node').data();
      var nodesToAdd = [];
      canvasNodes.forEach(function (n) {
        var node = nodes.find(function (d) {
          return d.id === n.id;
        });
        if (node) {
          nodesToAdd.push(node);
        } else {
          nodesToAdd.push(n);
        }
      });

      var node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, function (d) {
        return d.id;
      });

      if (node.exit().data().length == 0 && node.enter().data().length == 0 && link.enter().data().length == 0 && link.exit().data().length == 0) {
        return;
      }

      var linkEnter = link.enter().append('g').attr('class', 'francy-link');

      linkEnter.append('line').attr('class', 'francy-edge');

      link.exit().remove();

      link = linkGroup.selectAll('g.francy-link line.francy-edge');

      if (this.data.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
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

        _graph2.default.applyEvents(node, this.options);

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
        var centerForce = d3.forceCenter().x(width / 2).y(height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
        var linkForce = d3.forceLink(canvasLinks).id(function (d) {
          return d.id;
        }).distance(50);
        var collideForce = d3.forceCollide(function (d) {
          return d.size * 2;
        });

        //Generic gravity for the X position
        var forceX = d3.forceX(width / 2).strength(0.05);

        //Generic gravity for the Y position - undirected/directed graphs fall here
        var forceY = d3.forceY(height / 2).strength(0.25);

        if (this.data.canvas.graph.type === 'hasse') {
          //Generic gravity for the X position
          forceX = d3.forceX(width / 2).strength(0.3);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 75;
          }).strength(0.7);
        }

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force("charge", manyForce).force("link", linkForce).force("center", centerForce).force("x", forceX).force("y", forceY).force("collide", collideForce).on('tick', ticked).on("end", function () {
          // zoom to fit when simulation is over
          parent.zoomToFit();
        });

        //force simulation restart
        simulation.alpha(0.5).restart();
      } else {
        // well, simulation is off, apply fixed positions and zoom to fit now
        ticked();
        parent.zoomToFit();
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
  }]);

  return GenericGraph;
}(_renderer2.default);

exports.default = GenericGraph;

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

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _data = __webpack_require__(1);

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

var ContextMenu = (_dec = (0, _data.requires)('menus'), (_class = function (_Menu) {
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

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(3);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var BarChart = function (_Renderer) {
  _inherits(BarChart, _Renderer);

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

      var parent = this.options.appendTo.element;

      var tooltip = new _tooltip2.default(this.options);

      var axis = this.data.canvas.chart.axis,
          datasets = this.data.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      this.element = parent.select('g.francy-content');

      var margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand().range([0, width]).padding(0.1).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        axis.x.domain = _chart2.default.domainRange(tmp.length / datasetNames.length);
        x.domain(axis.x.domain);
      }

      var barsGroup = this.element.selectAll('g.francy-bars');

      if (!barsGroup.node()) {
        barsGroup = this.element.append('g').attr('class', 'francy-bars');
      }

      datasetNames.forEach(function (key, index) {
        var bar = barsGroup.selectAll('.francy-bar-' + index).data(datasets[key]);

        bar.exit().transition().duration(750).style("fill-opacity", 1e-6).remove();

        // append the rectangles for the bar chart
        var barEnter = bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar-' + index).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        }).on("mouseenter", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5);
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on("mouseleave", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1);
          tooltip.unrender();
        });

        barEnter.merge(bar).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        });
      });

      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      if (this.data.canvas.chart.showLegend) {

        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        }

        // force rebuild legend again
        legendGroup.selectAll('*').remove();

        var legend = legendGroup.selectAll('g').data(datasetNames.slice());

        legend.exit().remove();

        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')';
        }).merge(legend);

        legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return _chart2.default.colors(i * 5);
        });

        legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return BarChart;
}(_renderer2.default);

exports.default = BarChart;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(3);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var LineChart = function (_Renderer) {
  _inherits(LineChart, _Renderer);

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

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo.element;

      var axis = this.data.canvas.chart.axis,
          datasets = this.data.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      this.element = parent.select('g.francy-content');

      var margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleLinear().range([0, width]).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        x.domain([0, tmp.length / datasetNames.length]);
      }

      var linesGroup = this.element.selectAll('g.francy-lines');

      if (!linesGroup.node()) {
        linesGroup = this.element.append('g').attr('class', 'francy-lines');
      }

      datasetNames.forEach(function (key, index) {
        var valueLine = d3.line().x(function (d, i) {
          return x(i);
        }).y(function (d) {
          return y(d);
        });

        var line = linesGroup.selectAll('.francy-line-' + index).data([datasets[key]]);

        line.exit().transition().duration(750).style("fill-opacity", 1e-6).remove();

        // append the rectangles for the bar chart
        var lineEnter = line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line-' + index).attr('d', valueLine).on("mouseenter", function (d) {
          d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on("mouseleave", function () {
          d3.select(this).transition().duration(250).style("stroke-opacity", 1).style('stroke-width', '5px');
          tooltip.unrender();
        });

        lineEnter.merge(line);
      });

      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      if (this.data.canvas.chart.showLegend) {

        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        }

        // force rebuild legend again
        legendGroup.selectAll('*').remove();

        var legend = legendGroup.selectAll('g').data(datasetNames.slice());

        legend.exit().remove();

        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')';
        }).merge(legend);

        legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return _chart2.default.colors(i * 5);
        });

        legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return LineChart;
}(_renderer2.default);

exports.default = LineChart;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(3);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var ScatterChart = function (_Renderer) {
  _inherits(ScatterChart, _Renderer);

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

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo.element;

      var axis = this.data.canvas.chart.axis,
          datasets = this.data.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      this.element = parent.select('g.francy-content');

      var margin = { top: 50, right: 50, bottom: 50, left: 50 },
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      // set the dimensions and margins of the chart
      width = width - margin.left - margin.right;
      height = height - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleLinear().range([0, width]).domain(axis.x.domain);
      var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

      var tmp = [];
      datasetNames.forEach(function (key) {
        return tmp = tmp.concat(datasets[key]);
      });

      if (!axis.y.domain.length) {
        y.domain([0, d3.max(tmp, function (d) {
          return d;
        })]);
      }

      if (!axis.x.domain.length) {
        x.domain([0, tmp.length / datasetNames.length]);
      }

      var scatterGroup = this.element.selectAll('g.francy-scatters');

      if (!scatterGroup.node()) {
        scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
      }

      datasetNames.forEach(function (key, index) {
        var scatter = scatterGroup.selectAll('.francy-scatter-' + index).data(datasets[key]);

        scatter.exit().transition().duration(750).style("fill-opacity", 1e-6).remove();

        // append the rectangles for the bar chart
        var scatterEnter = scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter-' + index).attr("r", 5).attr("cx", function (d, i) {
          return x(i);
        }).attr("cy", function (d) {
          return y(d);
        }).on("mouseenter", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5).attr('r', 10);
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on("mouseleave", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1).attr('r', 5);
          tooltip.unrender();
        });

        scatterEnter.merge(scatter);
      });

      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      if (this.data.canvas.chart.showLegend) {

        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        }

        // force rebuild legend again
        legendGroup.selectAll('*').remove();

        var legend = legendGroup.selectAll('g').data(datasetNames.slice());

        legend.exit().remove();

        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return 'translate(0,' + i * 20 + ')';
        }).merge(legend);

        legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return _chart2.default.colors(i * 5);
        });

        legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ScatterChart;
}(_renderer2.default);

exports.default = ScatterChart;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(9);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(23);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import * as SvgToPng from '../../node_modules/save-svg-as-png/saveSvgAsPng';

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

      var parent = this.options.appendTo.element;

      var aboutModal = new _modalAbout2.default(this.options);

      // Otherwise clashes with the canvas itself!
      var menuId = 'MainMenu-' + this.data.canvas.id;
      this.element = d3.select('#' + menuId);

      // Check if the menu is already present
      if (!this.element.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        this.element = parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
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
      if (this.data.canvas.zoomToFit) {
        content.append('li').append('a').on('click', function () {
          return _this2.options.appendTo.canvas.zoomToFit();
        }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      }
      //content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(document.getElementById(this.data.canvas.id), "diagram.png")).attr('title', 'Save to PNG').html('Save to PNG');
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
/* 23 */
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
      content.append('pre').attr('class', 'francy').html(this.syntaxHighlight(JSON.stringify(this.data.canvas, null, 2)));
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

  }, {
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
/* 24 */
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

var _data = __webpack_require__(1);

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

var Message = (_dec = (0, _data.requires)('canvas.messages'), (_class = function (_Renderer) {
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

      var parent = this.options.appendTo.element;

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
        this.element = parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
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
      messageEnter.append('span').attr('class', 'strong').style('display', 'none').text("x");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2M3NDUxMTNjNjQ0NTMwYzI0M2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsImV4dGVuc2lvbnMiLCJqYXgiLCJ0ZXgyamF4IiwiaW5saW5lTWF0aCIsImRpc3BsYXlNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJza2lwU3RhcnR1cFR5cGVzZXQiLCJSZWdpc3RlciIsIlN0YXJ0dXBIb29rIiwic2VsZWN0QWxsIiwiZWFjaCIsInNlbGYiLCJtYXRoSmF4IiwiYXR0ciIsImFwcGVuZCIsInJlbW92ZSIsIlF1ZXVlIiwiQ29uZmlndXJlZCIsImUiLCJpbmZvIiwiY2xhc3NlcyIsIm1hcCIsImNsIiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsInBvcyIsIm1vdXNlIiwiU1ZHUGFyZW50Iiwic3R5bGUiLCJ0YWJsZSIsImtleXMiLCJrZXkiLCJyb3ciLCJ0ZXh0IiwidGl0bGUiLCJDaGFydCIsImNhbnZhcyIsImNoYXJ0IiwidHlwZSIsImxvYWQiLCJkYXRhc2V0IiwibWF4IiwiZnJvbSIsIl8iLCJpIiwieCIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkdyYXBoIiwiZ3JhcGgiLCJ0b29sdGlwIiwiY29udGV4dE1lbnUiLCJjYWxsYmFjayIsIm9uIiwiZCIsImV4ZWN1dGVDYWxsYmFjayIsImNhbGwiLCJtZXNzYWdlcyIsImV2ZW50IiwiY2FsbGJhY2tzIiwiZm9yRWFjaCIsImNiIiwidHJpZ2dlciIsImV4ZWN1dGUiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJDb21wb3NpdGUiLCJyZW5kZXJlcnMiLCJyZW5kZXJlciIsInB1c2giLCJzZXR0aW5ncyIsIkJhc2UiLCJsb2ciLCJFcnJvciIsImpzb24iLCJwYXJ0aWFsIiwicGFyc2UiLCJMb2dnZXIiLCJjb25zb2xlIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiTWVudSIsIm1lbnVzSXRlcmF0b3IiLCJoYXNOZXh0IiwibWVudUl0ZW0iLCJuZXh0IiwiZW50cnkiLCJhY3Rpb24iLCJlbnRlciIsImh0bWwiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiY2FsYmFja09iaiIsIl9leGVjdXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJmcmFtZSIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsIm9ucmVzaXplIiwiem9vbVRvRml0IiwiRnJhbWUiLCJtZW51IiwiYWRkIiwicGFyZW50IiwiZnJhbWVJZCIsInJlbmRlckNoaWxkcmVuIiwiSnNvblV0aWxzIiwiaW5wdXQiLCJyZXBsYWNlIiwianNvblJlZ2V4IiwibWF0Y2giLCJleGVjIiwibWltZSIsIk1JTUUiLCJDYW52YXMiLCJ1cGRhdGVab29tIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJzY2FsZSIsInpvb20iLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJ6b29tZWQiLCJzdG9wcGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsImJvdW5kcyIsImdldEJCb3giLCJjbGllbnRCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmdWxsV2lkdGgiLCJyaWdodCIsImxlZnQiLCJmdWxsSGVpZ2h0IiwiYm90dG9tIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJtaWRYIiwibWlkWSIsInkiLCJNYXRoIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2FudmFzSWQiLCJUcmVlR3JhcGgiLCJyb290IiwiaGllcmFyY2h5IiwidHJlZURhdGEiLCJjaGlsZHJlbiIsIngwIiwieTAiLCJsZXZlbFdpZHRoIiwiY2hpbGRDb3VudCIsIm4iLCJuZXdIZWlnaHQiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJjb2xsYXBzZWQiLCJjb2xsYXBzZSIsInVwZGF0ZSIsIl9jaGlsZHJlbiIsInNvdXJjZSIsIm5vZGVzIiwiZGVzY2VuZGFudHMiLCJsaW5rcyIsInNsaWNlIiwiZGVwdGgiLCJsaW5rR3JvdXAiLCJsaW5rIiwibGlua0VudGVyIiwibyIsImRpYWdvbmFsIiwibWVyZ2UiLCJleGl0IiwicyIsIm5vZGVHcm91cCIsIm5vZGVFbnRlciIsInN5bWJvbCIsImdldFN5bWJvbCIsIm5vZGVVcGRhdGUiLCJjb2xvcnMiLCJsYXllciIsImFwcGx5RXZlbnRzIiwibm9kZU9uQ2xpY2siLCJjbGljayIsImNhbnZhc05vZGVzIiwiZGF0YU1hcCIsInJlZHVjZSIsIkdlbmVyaWNHcmFwaCIsInNpbXVsYXRpb25BY3RpdmUiLCJzaW11bGF0aW9uIiwiY2FudmFzTGlua3MiLCJsaW5rc1RvQWRkIiwiZmluZCIsImwiLCJub2Rlc1RvQWRkIiwiaGlnaGxpZ2h0IiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVtcHR5Iiwic2hvd05laWdoYm91cnMiLCJjb25uZWN0ZWROb2RlcyIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0IiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0IiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJDb250ZXh0TWVudSIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsIm92ZXJsYXkiLCJob2xkZXIiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiZm9jdXMiLCJCYXJDaGFydCIsImF4aXMiLCJkYXRhc2V0cyIsImRhdGFzZXROYW1lcyIsIm1hcmdpbiIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInNjYWxlTGluZWFyIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsInhBeGlzR3JvdXAiLCJheGlzQm90dG9tIiwieUF4aXNHcm91cCIsImF4aXNMZWZ0Iiwic2hvd0xlZ2VuZCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJsaW5lRW50ZXIiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIiwic2NhdHRlckVudGVyIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0IiwiTWVzc2FnZSIsImFsZXJ0c0lkIiwibWVzc2FnZUVudGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUNDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJB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bUJBQWFwSCxLQUFiLENBQW1CaEgsT0FBbkI7O0FBRUFBLGNBQVFpSCxJQUFSLEdBQWUzTCxNQUFmOztBQUVBLFdBQUtyRCxPQUFMLENBQWFxRSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBNUNNNFIsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdjNzQ1MTEzYzY0NDUzMGMyNDNlIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDc1MDsgLy9tc1xuICB9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RpdicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHlQYXRoKSB7XG5cbiAgdmFyIHRtcCA9IG9iajtcblxuICBpZiAodG1wICYmIHByb3BlcnR5UGF0aCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIXRtcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgdG1wID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3IvZGF0YS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgZXh0ZW5zaW9uczogW1widGV4MmpheC5qc1wiXSxcbiAgICAgICAgamF4OiBbXCJpbnB1dC9UZVhcIiwgXCJvdXRwdXQvU1ZHXCJdLFxuICAgICAgICB0ZXgyamF4OiB7XG4gICAgICAgICAgaW5saW5lTWF0aDogW1xuICAgICAgICAgICAgWyckJywgJyQnXSxcbiAgICAgICAgICAgIFtcIlxcXFwoXCIsIFwiXFxcXClcIl1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGRpc3BsYXlNYXRoOiBbXG4gICAgICAgICAgICBbJyQkJywgJyQkJ10sXG4gICAgICAgICAgICBbXCJcXFxcW1wiLCBcIlxcXFxdXCJdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBza2lwU3RhcnR1cFR5cGVzZXQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbXCJzZXRSZW5kZXJlclwiLCBNYXRoSmF4Lkh1YiwgXCJTVkdcIl0sIFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50Lm5vZGUoKV0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWd1cmVkKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgICAgY2FzZSAndHJlZSc6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIHN0YXRpYyBhcHBseUV2ZW50cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKG9wdGlvbnMpO1xuICAgIHZhciBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudShvcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sob3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5cbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB2YXIgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0aWMgZ2V0IE1JTUUoKSB7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIHZhciBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICB2YXIgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIC8vIGNvbXB1dGUgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgZ3JhcGhcbiAgICB2YXIgbGV2ZWxXaWR0aCA9IFsxXTtcbiAgICB2YXIgY2hpbGRDb3VudCA9IGZ1bmN0aW9uKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIHZhciBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICB2YXIgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHdpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICB2YXIgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICB2YXIgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgdmFyIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICB2YXIgbyA9IHsgeDogc291cmNlLngwLCB5OiBzb3VyY2UueTAgfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICB2YXIgbyA9IHsgeDogc291cmNlLngsIHk6IHNvdXJjZS55IH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KS5yZW1vdmUoKTtcblxuICAgICAgbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2NjYycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzFweCcpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fVxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpXG4gICAgICAgIC5kYXRhKG5vZGVzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sJHtzb3VyY2UueDB9KWApO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQuZGF0YS50eXBlKSkuc2l6ZShkID0+IGQuZGF0YS5zaXplICogMTAwKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zeW1ib2wnKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gLShkLmRhdGEudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKTtcblxuICAgICAgdmFyIG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgdmFyIG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIHZhciBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgdmFyIGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgdmFyIHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBzaW11bGF0aW9uQWN0aXZlID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgdmFyIGxpbmtzVG9BZGQgPSBbXTtcbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgdmFyIGxpbmsgPSBsaW5rcy5maW5kKGQgPT4gZC5pZCA9PT0gbC5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rc1RvQWRkLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGlua3NUb0FkZC5wdXNoKGwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgdmFyIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIHZhciBub2Rlc1RvQWRkID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIHZhciBub2RlID0gbm9kZXMuZmluZChkID0+IGQuaWQgPT09IG4uaWQpO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZXNUb0FkZC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGVzVG9BZGQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGlmIChub2RlLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluayBsaW5lLmZyYW5jeS1lZGdlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJykuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktc3ltYm9sJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgdmFyIG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvLyBDYW52YXMgRm9yY2VzXG4gICAgICB2YXIgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngod2lkdGggLyAyKS55KGhlaWdodCAvIDIpO1xuICAgICAgdmFyIG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgdmFyIGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICB2YXIgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplICogMik7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMyk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDc1KS5zdHJlbmd0aCgwLjcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpLm5vZGVzKG5vZGVzVG9BZGQpXG4gICAgICAgIC5mb3JjZShcImNoYXJnZVwiLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZShcImxpbmtcIiwgbGlua0ZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJjZW50ZXJcIiwgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCBwb3NbMF0gKyA1ICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIHBvc1sxXSArIDUgKyAncHgnKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdmFyIGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIHZhciBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICB2YXIgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHZhciBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlOyB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuZGF0YS5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICBjb250ZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1hcmcnKS5ub2RlKCkuZm9jdXMoKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xuXG4gICAgICB2YXIgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtkYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5lRW50ZXIubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgc2NhdHRlckVudGVyID0gc2NhdHRlclxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG4vL2ltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICB2YXIgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICB9XG4gICAgLy9jb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBTdmdUb1BuZy5zYXZlU3ZnQXNQbmcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNhbnZhcy5pZCksIFwiZGlhZ3JhbS5wbmdcIikpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdmFyIGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIHZhciBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbCh0aGlzLnN5bnRheEhpZ2hsaWdodChKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FudmFzLCBudWxsLCAyKSkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWNtYXJ0aW5zL2ZyYW5jeScpLnRleHQoJ0ZyYW5jeSBvbiBHaXRodWInKTtcblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbiAgc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xuICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ251bGwnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdmFyIGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgdmFyIG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKS50ZXh0KFwieFwiKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=