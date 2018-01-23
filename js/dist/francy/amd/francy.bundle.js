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
        SVG: { availableFonts: ["TeX"] }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGY3MDZkMWU5MzVhNzM4MDNhYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsImV4dGVuc2lvbnMiLCJqYXgiLCJ0ZXgyamF4IiwiaW5saW5lTWF0aCIsImRpc3BsYXlNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJTVkciLCJhdmFpbGFibGVGb250cyIsIlJlZ2lzdGVyIiwiU3RhcnR1cEhvb2siLCJzZWxlY3RBbGwiLCJlYWNoIiwic2VsZiIsIm1hdGhKYXgiLCJhdHRyIiwiYXBwZW5kIiwicmVtb3ZlIiwiUXVldWUiLCJlIiwiaW5mbyIsImNsYXNzZXMiLCJtYXAiLCJjbCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwiVG9vbHRpcCIsIkhUTUxQYXJlbnQiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInN0eWxlIiwidGFibGUiLCJrZXlzIiwia2V5Iiwicm93IiwidGV4dCIsInRpdGxlIiwiQ2hhcnQiLCJjYW52YXMiLCJjaGFydCIsInR5cGUiLCJsb2FkIiwiZGF0YXNldCIsIm1heCIsImZyb20iLCJfIiwiaSIsIngiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJHcmFwaCIsImdyYXBoIiwidG9vbHRpcCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImQiLCJleGVjdXRlQ2FsbGJhY2siLCJjYWxsIiwibWVzc2FnZXMiLCJldmVudCIsImNhbGxiYWNrcyIsImZvckVhY2giLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwic3ltYm9sQ2lyY2xlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwic2V0dGluZ3MiLCJCYXNlIiwibG9nIiwiRXJyb3IiLCJqc29uIiwicGFydGlhbCIsInBhcnNlIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiZW50ZXIiLCJodG1sIiwibWVudXMiLCJjb250ZW50Iiwic3ViTWVudXNJdGVyYXRvciIsIml0ZXJhdG9yIiwidHJhdmVyc2UiLCJhcnJheSIsIm5leHRJbmRleCIsIkNhbGxiYWNrSGFuZGxlciIsInJlcXVpcmVkQXJncyIsImNhbGJhY2tPYmoiLCJfZXhlY3V0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsInBhcmVudCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ6b29tIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnVsbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwiZnVsbEhlaWdodCIsImJvdHRvbSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5IiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJzbGljZSIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsIm1lcmdlIiwiZXhpdCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwiY29sb3JzIiwibGF5ZXIiLCJhcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsImZpbmQiLCJsIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJjZW50ZXJGb3JjZSIsImZvcmNlQ2VudGVyIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZVgiLCJmb3JjZVkiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImZvY3VzIiwiQmFyQ2hhcnQiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJzY2FsZUxpbmVhciIsImNvbmNhdCIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNob3dMZWdlbmQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwic3ludGF4SGlnaGxpZ2h0IiwiY2xzIiwidGVzdCIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDQyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFB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QmhILE9BQW5COztBQUVBQSxjQUFRaUgsSUFBUixHQUFlMUwsTUFBZjs7QUFFQSxXQUFLdEQsT0FBTCxDQUFhcUUsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTVDTTRSLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZjcwNmQxZTkzNWE3MzgwM2FiZiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIsIE1hdGhKYXgsIGQzICovXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlck1hdGhKYXgoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZyh7XG4gICAgICAgIGV4dGVuc2lvbnM6IFtcInRleDJqYXguanNcIl0sXG4gICAgICAgIGpheDogW1wiaW5wdXQvVGVYXCIsIFwib3V0cHV0L1NWR1wiXSxcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbXCJcXFxcKFwiLCBcIlxcXFwpXCJdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBkaXNwbGF5TWF0aDogW1xuICAgICAgICAgICAgWyckJCcsICckJCddLFxuICAgICAgICAgICAgW1wiXFxcXFtcIiwgXCJcXFxcXVwiXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2Vzc0VzY2FwZXM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgU1ZHOiB7IGF2YWlsYWJsZUZvbnRzOiBbXCJUZVhcIl0gfVxuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlJlZ2lzdGVyLlN0YXJ0dXBIb29rKCdFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGFiZWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgICAgICAgIG1hdGhKYXggPSBzZWxmLnNlbGVjdCgndGV4dD5zcGFuPnN2ZycpO1xuICAgICAgICAgICAgaWYgKG1hdGhKYXgubm9kZSgpKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneCcsIHNlbGYuYXR0cigneCcpKTtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3knLCAtMTUpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChzZWxmLm5vZGUoKS5wYXJlbnROb2RlKS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWF0aEpheC5ub2RlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFtcInNldFJlbmRlcmVyXCIsIE1hdGhKYXguSHViLCBcIlNWR1wiXSwgWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnQubm9kZSgpXSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgICAgY2FzZSAndHJlZSc6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIHN0YXRpYyBhcHBseUV2ZW50cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKG9wdGlvbnMpO1xuICAgIHZhciBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudShvcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sob3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5cbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB2YXIgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0aWMgZ2V0IE1JTUUoKSB7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIHZhciBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICB2YXIgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIC8vIGNvbXB1dGUgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgZ3JhcGhcbiAgICB2YXIgbGV2ZWxXaWR0aCA9IFsxXTtcbiAgICB2YXIgY2hpbGRDb3VudCA9IGZ1bmN0aW9uKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGNoaWxkQ291bnQobGV2ZWwgKyAxLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjaGlsZENvdW50KDAsIHJvb3QpO1xuICAgIHZhciBuZXdIZWlnaHQgPSBkMy5tYXgobGV2ZWxXaWR0aCkgKiAxMDA7XG5cbiAgICB2YXIgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtuZXdIZWlnaHQsIHdpZHRoXSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5jb2xsYXBzZWQpIHtcbiAgICAgIHJvb3QuY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlLmNhbGwodGhpcywgcm9vdCk7XG5cbiAgICBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgIGQuX2NoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gICAgICB2YXIgdHJlZURhdGEgPSB0cmVlbWFwKHJvb3QpO1xuXG4gICAgICB2YXIgbm9kZXMgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLFxuICAgICAgICBsaW5rcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCkuc2xpY2UoMSk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goZCA9PiBkLnkgPSBkLmRlcHRoICogMTgwKTtcblxuICAgICAgdmFyIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5kYXRhKGxpbmtzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICB2YXIgbyA9IHsgeDogc291cmNlLngwLCB5OiBzb3VyY2UueTAgfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5rRW50ZXIubWVyZ2UobGluaylcbiAgICAgICAgLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbikuYXR0cignZCcsIGQgPT4gZGlhZ29uYWwoZCwgZC5wYXJlbnQpKTtcblxuICAgICAgbGluay5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cignZCcsICgpID0+IHtcbiAgICAgICAgICB2YXIgbyA9IHsgeDogc291cmNlLngsIHk6IHNvdXJjZS55IH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KS5yZW1vdmUoKTtcblxuICAgICAgbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2NjYycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzFweCcpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fVxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpXG4gICAgICAgIC5kYXRhKG5vZGVzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sJHtzb3VyY2UueDB9KWApO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQuZGF0YS50eXBlKSkuc2l6ZShkID0+IGQuZGF0YS5zaXplICogMTAwKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zeW1ib2wnKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gLShkLmRhdGEudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKTtcblxuICAgICAgdmFyIG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgdmFyIG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIHZhciBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgdmFyIGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgdmFyIHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBzaW11bGF0aW9uQWN0aXZlID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgdmFyIGxpbmtzVG9BZGQgPSBbXTtcbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgdmFyIGxpbmsgPSBsaW5rcy5maW5kKGQgPT4gZC5pZCA9PT0gbC5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rc1RvQWRkLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGlua3NUb0FkZC5wdXNoKGwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgdmFyIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIHZhciBub2Rlc1RvQWRkID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIHZhciBub2RlID0gbm9kZXMuZmluZChkID0+IGQuaWQgPT09IG4uaWQpO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZXNUb0FkZC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGVzVG9BZGQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGlmIChub2RlLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluayBsaW5lLmZyYW5jeS1lZGdlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJykuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktc3ltYm9sJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgdmFyIG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvLyBDYW52YXMgRm9yY2VzXG4gICAgICB2YXIgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngod2lkdGggLyAyKS55KGhlaWdodCAvIDIpO1xuICAgICAgdmFyIG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgdmFyIGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICB2YXIgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplICogMik7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMyk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDc1KS5zdHJlbmd0aCgwLjcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpLm5vZGVzKG5vZGVzVG9BZGQpXG4gICAgICAgIC5mb3JjZShcImNoYXJnZVwiLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZShcImxpbmtcIiwgbGlua0ZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJjZW50ZXJcIiwgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCBwb3NbMF0gKyA1ICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIHBvc1sxXSArIDUgKyAncHgnKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSB0aGlzLmRhdGEuY2FsbGJhY2suaWQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FsbGJhY2sgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdmFyIGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIHZhciBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICB2YXIgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSkge1xuICAgICAgaGVhZGVyVGl0bGUuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChgZm9yICR7dGhpcy5kYXRhLnRpdGxlfWApO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHZhciBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlOyB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIC8vIHdhaXQsIGlmIGl0IGlzIGJvb2xlYW4gd2UgY3JlYXRlIGEgY2hlY2tib3hcbiAgICAgIGlmIChhcmcudHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIC8vIHdlbGwsIGEgY2hlY2tib3ggd29ya3MgdGhpcyB3YXkgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIFxuICAgICAgICAvLyB0aGUgdmFsdWUgdG8gZmFsc2UgYW5kIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gdGhlIGNoZWNrZWQgXG4gICAgICAgIC8vIHByb3BlcnR5IHRoYXQgdHJpZ2dlcnMgdGhlIG9uY2hhbmdlIGV2ZW50XG4gICAgICAgIGFyZy52YWx1ZSA9IGFyZy52YWx1ZSB8fCBmYWxzZTtcbiAgICAgICAgaW5wdXQuYXR0cigndHlwZScsICdjaGVja2JveCcpLmF0dHIoJ3JlcXVpcmVkJywgbnVsbClcbiAgICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuZGF0YS5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICBjb250ZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1hcmcnKS5ub2RlKCkuZm9jdXMoKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xuXG4gICAgICB2YXIgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWxpbmUtJHtpbmRleH1gKS5kYXRhKFtkYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5lRW50ZXIubWVyZ2UobGluZSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgc2NhdHRlci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgc2NhdHRlckVudGVyID0gc2NhdHRlclxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1zY2F0dGVyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlckVudGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG4vL2ltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICB2YXIgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICB9XG4gICAgLy9jb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBTdmdUb1BuZy5zYXZlU3ZnQXNQbmcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kYXRhLmNhbnZhcy5pZCksIFwiZGlhZ3JhbS5wbmdcIikpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiBhYm91dE1vZGFsLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKSkuYXR0cigndGl0bGUnLCAnQWJvdXQnKS5odG1sKCdBYm91dCcpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG1lbnVzIGFuZCBmbGF0dGVuIHRoZW0hXG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5lbGVtZW50LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSAnQWJvdXRNb2RhbFdpbmRvdyc7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQWJvdXQgTW9kYWwgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICAvLyB3ZSB3YW50IHRvIG92ZXJsYXkgZXZlcnl0aGluZywgaGVuY2UgJ2JvZHknIG11c3QgYmUgdXNlZFxuICAgIHZhciBvdmVybGF5ID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1vdmVybGF5Jyk7XG4gICAgdmFyIGhvbGRlciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3knKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBob2xkZXIuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2lkJywgbW9kYWxJZClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwnKTtcblxuICAgIHZhciBmb3JtID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke3RoaXMuZGF0YS52ZXJzaW9uIHx8ICdOL0EnfWApO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykudGV4dCgnTG9hZGVkIE9iamVjdDonKTtcbiAgICBjb250ZW50LmFwcGVuZCgncHJlJykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuaHRtbCh0aGlzLnN5bnRheEhpZ2hsaWdodChKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FudmFzLCBudWxsLCAyKSkpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vbWNtYXJ0aW5zL2ZyYW5jeScpLnRleHQoJ0ZyYW5jeSBvbiBHaXRodWInKTtcblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbiAgc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xuICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ251bGwnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdmFyIGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgdmFyIG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKS50ZXh0KFwieFwiKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=