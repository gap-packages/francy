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
        extensions: ['tex2jax.js'],
        jax: ['input/TeX', 'output/SVG'],
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
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

      MathJax.Hub.Queue(['setRenderer', MathJax.Hub, 'SVG'], ['Typeset', MathJax.Hub, element.node()]);

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

var Chart = (_dec = (0, _dataDecorator.requires)('canvas.chart'), (_class = function (_Renderer) {
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
        case 'bar':
          this.element = new _chartBar2.default(this.options).load(this.data).render();
          break;
        case 'line':
          this.element = new _chartLine2.default(this.options).load(this.data).render();
          break;
        case 'scatter':
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
      }
      return d3.symbolCircle;
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
/* 8 */
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

var _frame = __webpack_require__(12);

var _frame2 = _interopRequireDefault(_frame);

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var _message = __webpack_require__(25);

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

var _composite = __webpack_require__(6);

var _composite2 = _interopRequireDefault(_composite);

var _graph = __webpack_require__(5);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(4);

var _chart2 = _interopRequireDefault(_chart);

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

    _this.graph = new _graph2.default(_this.options);
    _this.chart = new _chart2.default(_this.options);
    _this.add(_this.graph).add(_this.chart);
    return _this;
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render() {
      var content = void 0;
      var zoom = d3.zoom();
      var parent = this.options.appendTo.element;
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
        this.element = parent.append('svg').attr('class', 'francy-canvas').attr('id', canvasId);
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
          root = void 0;

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

      if (node.exit().data().length === 0 && node.enter().data().length === 0 && link.enter().data().length === 0 && link.exit().data().length === 0) {
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

        var simulation = d3.forceSimulation().nodes(nodesToAdd).force('charge', manyForce).force('link', linkForce).force('center', centerForce).force('x', forceX).force('y', forceY).force('collide', collideForce).on('tick', ticked).on('end', function () {
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

        bar.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var barEnter = bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar-' + index).attr('x', function (d, i) {
          return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
        }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function (d) {
          return y(d);
        }).attr('height', function (d) {
          return height - y(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5);
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1);
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

        line.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var lineEnter = line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line-' + index).attr('d', valueLine).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('stroke-opacity', 0.5).style('stroke-width', '10px');
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('stroke-opacity', 1).style('stroke-width', '5px');
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

        scatter.exit().transition().duration(750).style('fill-opacity', 1e-6).remove();

        // append the rectangles for the bar chart
        var scatterEnter = scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter-' + index).attr('r', 5).attr('cx', function (d, i) {
          return x(i);
        }).attr('cy', function (d) {
          return y(d);
        }).on('mouseenter', function (d) {
          d3.select(this).transition().duration(250).style('fill-opacity', 0.5).attr('r', 10);
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on('mouseleave', function () {
          d3.select(this).transition().duration(250).style('fill-opacity', 1).attr('r', 5);
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

var _saveSvgAsPng = __webpack_require__(24);

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
/* 24 */
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
/* 25 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWY0ZWJjZDg5OTJmMTc2Y2M0ZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJvcHRpb25zIiwibm9kZSIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsImQzIiwic2VsZWN0IiwicGFyZW50Tm9kZSIsInJlcXVpcmVzIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJSZWdpc3Rlck1hdGhKYXgiLCJSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyIsInNldFRpbWVvdXQiLCJNYXRoSmF4IiwiSHViIiwiQ29uZmlnIiwiZXh0ZW5zaW9ucyIsImpheCIsInRleDJqYXgiLCJpbmxpbmVNYXRoIiwiZGlzcGxheU1hdGgiLCJwcm9jZXNzRXNjYXBlcyIsInNraXBTdGFydHVwVHlwZXNldCIsIlJlZ2lzdGVyIiwiU3RhcnR1cEhvb2siLCJzZWxlY3RBbGwiLCJlYWNoIiwic2VsZiIsIm1hdGhKYXgiLCJhdHRyIiwiYXBwZW5kIiwicmVtb3ZlIiwiUXVldWUiLCJDb25maWd1cmVkIiwiZSIsImluZm8iLCJjbGFzc2VzIiwibWFwIiwiY2wiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIlRvb2x0aXAiLCJIVE1MUGFyZW50IiwicG9zIiwibW91c2UiLCJTVkdQYXJlbnQiLCJzdHlsZSIsInRhYmxlIiwia2V5cyIsImtleSIsInJvdyIsInRleHQiLCJ0aXRsZSIsIkNoYXJ0IiwiY2FudmFzIiwiY2hhcnQiLCJ0eXBlIiwibG9hZCIsImRhdGFzZXQiLCJtYXgiLCJmcm9tIiwiXyIsImkiLCJ4Iiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiR3JhcGgiLCJncmFwaCIsInRvb2x0aXAiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZUNhbGxiYWNrIiwiY2FsbCIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJmb3JFYWNoIiwiY2IiLCJ0cmlnZ2VyIiwiZXhlY3V0ZSIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwiQmFzZSIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImVudGVyIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxsYmFja09iaiIsIl9leGVjdXRlIiwiY2FsYmFja09iaiIsIkpTT04iLCJzdHJpbmdpZnkiLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsInBhcmVudCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiem9vbSIsInVwZGF0ZVpvb20iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnVsbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwiZnVsbEhlaWdodCIsImJvdHRvbSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5IiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJzbGljZSIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsIm1lcmdlIiwiZXhpdCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwiY29sb3JzIiwibGF5ZXIiLCJhcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsImZpbmQiLCJsIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJjZW50ZXJGb3JjZSIsImZvcmNlQ2VudGVyIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZVgiLCJmb3JjZVkiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImZvY3VzIiwiQmFyQ2hhcnQiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJzY2FsZUxpbmVhciIsImNvbmNhdCIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNob3dMZWdlbmQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIlN2Z1RvUG5nIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwic2F2ZVN2Z0FzUG5nIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0Iiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImdldENvbnRleHQiLCJpbWciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwiZ2V0QXR0cmlidXRlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwic2V0QXR0cmlidXRlTlMiLCJ0b0RhdGFVUkwiLCJvbmVycm9yIiwic3R5bGVzIiwiY3NzTG9hZGVkQ2FsbGJhY2siLCJzZWxlY3RvclJlbWFwIiwibW9kaWZ5U3R5bGUiLCJjc3MiLCJmb250c1F1ZXVlIiwic2hlZXRzIiwic3R5bGVTaGVldHMiLCJydWxlcyIsImNzc1J1bGVzIiwiaiIsInJ1bGUiLCJzZWxlY3RvclRleHQiLCJlcnIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3IiLCJjc3NUZXh0IiwiZm9udFVybFJlZ2V4cCIsImZvbnRVcmxNYXRjaCIsImV4dGVybmFsRm9udFVybCIsImZvbnRVcmxJc0RhdGFVUkkiLCJzdGFydHNXaXRoIiwiZm9ybWF0IiwiZ2V0Rm9udE1pbWVUeXBlRnJvbVVybCIsInByb2Nlc3NGb250UXVldWUiLCJmb250VXJsIiwic3VwcG9ydGVkRm9ybWF0cyIsImV4dGVuc2lvbiIsImluZGV4T2YiLCJxdWV1ZSIsImZvbnQiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcmVwYXJlU3ZnIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJpbm5lckhUTUwiLCJkZWZzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsIm91dEh0bWwiLCJzdmdBc0RhdGFVcmkiLCJ1cmkiLCJzdmdBc1BuZ1VyaSIsImVuY29kZXJUeXBlIiwiZW5jb2Rlck9wdGlvbnMiLCJjb252ZXJ0VG9QbmciLCJ3IiwiaCIsImNvbnRleHQiLCJjYW52ZyIsImJhY2tncm91bmRDb2xvciIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicG5nIiwiU2VjdXJpdHlFcnJvciIsImF0b2IiLCJkb3dubG9hZCIsIm5hdmlnYXRvciIsIm1zU2F2ZU9yT3BlbkJsb2IiLCJ1cmlUb0Jsb2IiLCJzYXZlTGluayIsImRvd25sb2FkU3VwcG9ydGVkIiwiZGlzcGxheSIsImJvZHkiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib25jbGljayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJldm9rZU9iamVjdFVSTCIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3ZnIiwiZGVmaW5lIiwiTWVzc2FnZSIsImFsZXJ0c0lkIiwibWVzc2FnZUVudGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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R0MsTUFBSCxDQUFVLElBQVYsRUFBZ0I4RCxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELE9BSGdCLENBQW5CO0FBSUFxYyxtQkFBYXRkLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJELElBQTVCLENBQWlDLE9BQWpDLEVBQTBDLFFBQTFDLEVBQW9EdUIsSUFBcEQsQ0FBeUQ7QUFBQSxlQUFLdUIsRUFBRXRCLEtBQVA7QUFBQSxPQUF6RDtBQUNBK2IsbUJBQWF0ZCxNQUFiLENBQW9CLE1BQXBCLEVBQTRCc0IsSUFBNUIsQ0FBaUM7QUFBQSxlQUFLdUIsRUFBRXZCLElBQVA7QUFBQSxPQUFqQztBQUNBZ2MsbUJBQWF0ZCxNQUFiLENBQW9CLE1BQXBCLEVBQTRCRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRGtCLEtBQXBELENBQTBELFNBQTFELEVBQXFFLE1BQXJFLEVBQTZFSyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQWdjLG1CQUFhMVIsS0FBYixDQUFtQmpILE9BQW5COztBQUVBQSxjQUFRa0gsSUFBUixHQUFlNUwsTUFBZjs7QUFFQSxXQUFLckQsT0FBTCxDQUFhcUUsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTVDTW1jLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZjRlYmNkODk5MmYxNzZjYzRlNCIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kYXRhLWRlY29yYXRvci5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgZXh0ZW5zaW9uczogWyd0ZXgyamF4LmpzJ10sXG4gICAgICAgIGpheDogWydpbnB1dC9UZVgnLCAnb3V0cHV0L1NWRyddLFxuICAgICAgICB0ZXgyamF4OiB7XG4gICAgICAgICAgaW5saW5lTWF0aDogW1xuICAgICAgICAgICAgWyckJywgJyQnXSxcbiAgICAgICAgICAgIFsnXFxcXCgnLCAnXFxcXCknXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZGlzcGxheU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCQnLCAnJCQnXSxcbiAgICAgICAgICAgIFsnXFxcXFsnLCAnXFxcXF0nXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgcHJvY2Vzc0VzY2FwZXM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2tpcFN0YXJ0dXBUeXBlc2V0OiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuU3RhcnR1cEhvb2soJ0VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgbWF0aEpheCA9IHNlbGYuc2VsZWN0KCd0ZXh0PnNwYW4+c3ZnJyk7XG4gICAgICAgICAgICBpZiAobWF0aEpheC5ub2RlKCkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHNlbGYubm9kZSgpLnBhcmVudE5vZGUpLmFwcGVuZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRoSmF4Lm5vZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydzZXRSZW5kZXJlcicsIE1hdGhKYXguSHViLCAnU1ZHJ10sIFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50Lm5vZGUoKV0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWd1cmVkKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyBNYXRoSmF4IGlzIG5vdCBsb2FkZWQuLi4nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoY2xhc3Nlcykge1xuICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBpbiBKdXB5dGVyIGZvciBjbGFzc2VzXG4gIGlmICghY2xhc3NlcykgcmV0dXJuO1xuICB0cnkge1xuICAgIGNsYXNzZXMubWFwKChjbCkgPT4ge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cyhjbCk7XG4gICAgfSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKClcbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyA1KSArICdweCcpLnN0eWxlKCd0b3AnLCAocG9zWzFdIC0gNSkgKyAncHgnKTtcblxuICAgIGxldCB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGxldCByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50aXRsZSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcblxuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgY2FzZSAnYmFyJzpcbiAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NjYXR0ZXInOlxuICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyAnQSc6IHsgJ3RpdGxlJzogJ0RhdGFzZXQnLCAndGV4dCc6IGRhdGFzZXQgfSwgJ0InOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5ncmFwaCcpXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlKSB7XG4gICAgY2FzZSAndHJlZSc6XG4gICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICBzdGF0aWMgYXBwbHlFdmVudHMoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgbGV0IHRvb2x0aXAgPSBuZXcgVG9vbHRpcChvcHRpb25zKTtcbiAgICBsZXQgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUob3B0aW9ucyk7XG4gICAgbGV0IGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4ge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLmxvYWQoZC5tZXNzYWdlcywgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IVxuICAgIGxldCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMuYXBwZW5kVG8gPSB0aGlzO1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yIChsZXQgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbyA9ICdib2R5JywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfSB0aGUgbG9nZ2VyIGZvciB0aGlzIGNsYXNzXG4gICAgICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzZXR0aW5ncyh7IHZlcmJvc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgJiYgIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXBwZW5kVG8gJiYgIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gY2FsbGJhY2tIYW5kbGVyIHx8IHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsb2FkKGpzb24sIHBhcnRpYWwpIHtcbiAgICBsZXQgZGF0YSA9IEpzb25VdGlscy5wYXJzZShqc29uLCBwYXJ0aWFsKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgbG9nZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmxvZztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIExvZ2dlciBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1ZyhMb2dnZXIuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyhMb2dnZXIuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcihMb2dnZXIuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKExvZ2dlci5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIGxldmVsIHRoZSBsb2cgbGV2ZWxcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIHN0YXRpYyBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIGxldCBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgbGV0IGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgbGV0IGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5sb2FkKGQsIHRydWUpLmV4ZWN1dGUoKSk7XG4gICAgICB9XG4gICAgICBpZiAobWVudUl0ZW0ubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICAgICAgbGV0IHN1Yk1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZShjb250ZW50LCBzdWJNZW51c0l0ZXJhdG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpdGVyYXRvcihhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzTmV4dCgpID8gYXJyYXlbbmV4dEluZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIGhhc05leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUuanMiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxsYmFja09iaikgPT4gdGhpcy5fZXhlY3V0ZS5jYWxsKHRoaXMsIGNhbGxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgdGhpcy5fZXhlY3V0ZSh0aGlzLmRhdGEuY2FsbGJhY2spO1xuICAgIFxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5sb2FkfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogIFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIGxldCBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnUtbWFpbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi91dGlsL2RhdGEtZGVjb3JhdG9yJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICBjb25zdCBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHBhcmFtIHBhcnRpYWwgLSBpZiB0aGUgaW5wdXQgaXMgbm90IGEgY29tcGxldGUgRnJhbmN5IEpTT04gT2JqZWN0LCBkZWZhdWx0cyB0byBmYWxzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCA9IGZhbHNlKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdGF0aWMgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWltZSB0eXBlIHN1cHBvcnRlZCBieSB0aGlzIHBhY2thZ2VcbiAgICovXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLmdyYXBoKS5hZGQodGhpcy5jaGFydCk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgem9vbSA9IGQzLnpvb20oKTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21Ub0ZpdCgpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIGxldCBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgbGV0IGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIGxldCB3aWR0aCA9ICtib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gK2JvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID09PSAwIHx8IGhlaWdodCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIGxldCB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FudmFzSWQgPSBgQ2FudmFzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jYW52YXMnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oJ3pvb20nLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oJ2RibGNsaWNrLnpvb20nLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSB6b29tVG9GaXQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b29tVG9GaXQoKTtcbiAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYW52YXMuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGxldCB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICBsZXQgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgLy8gY29tcHV0ZSBoZWlnaHQgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBncmFwaFxuICAgIGxldCBsZXZlbFdpZHRoID0gWzFdO1xuICAgIGxldCBjaGlsZENvdW50ID0gZnVuY3Rpb24gKGxldmVsLCBuKSB7XG5cbiAgICAgIGlmIChuLmNoaWxkcmVuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobGV2ZWxXaWR0aC5sZW5ndGggPD0gbGV2ZWwgKyAxKSBsZXZlbFdpZHRoLnB1c2goMCk7XG5cbiAgICAgICAgbGV2ZWxXaWR0aFtsZXZlbCArIDFdICs9IG4uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICBuLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgbGV0IHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB3aWR0aF0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguY29sbGFwc2VkKSB7XG4gICAgICByb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZS5jYWxsKHRoaXMsIHJvb3QpO1xuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuICAgICAgbGV0IHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgbGV0IG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4gZC55ID0gZC5kZXB0aCAqIDE4MCk7XG5cbiAgICAgIGxldCBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIGxldCBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgbGV0IG8gPSB7eDogc291cmNlLngwLCB5OiBzb3VyY2UueTB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmtFbnRlci5tZXJnZShsaW5rKVxuICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKS5hdHRyKCdkJywgZCA9PiBkaWFnb25hbChkLCBkLnBhcmVudCkpO1xuXG4gICAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIGxldCBvID0ge3g6IHNvdXJjZS54LCB5OiBzb3VyY2UueX07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KS5yZW1vdmUoKTtcblxuICAgICAgbGlua0dyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktZWRnZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2NjYycpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzFweCcpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKChkKSA9PiB7XG4gICAgICAgIGQueDAgPSBkLng7XG4gICAgICAgIGQueTAgPSBkLnk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gZGlhZ29uYWwocywgZCkge1xuICAgICAgICByZXR1cm4gYE0gJHtzLnl9ICR7cy54fVxuICAgICAgICAgICAgQyAkeyhzLnkgKyBkLnkpIC8gMn0gJHtzLnh9LFxuICAgICAgICAgICAgICAkeyhzLnkgKyBkLnkpIC8gMn0gJHtkLnh9LFxuICAgICAgICAgICAgICAke2QueX0gJHtkLnh9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpXG4gICAgICAgIC5kYXRhKG5vZGVzLCBkID0+IGQuaWQgfHwgKGQuaWQgPSArK2kpKTtcblxuICAgICAgbGV0IG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55MH0sJHtzb3VyY2UueDB9KWApO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQuZGF0YS50eXBlKSkuc2l6ZShkID0+IGQuZGF0YS5zaXplICogMTAwKSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zeW1ib2wnKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgICAuYXR0cigneCcsIGQgPT4gLShkLmRhdGEudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnRpdGxlKTtcblxuICAgICAgbGV0IG5vZGVVcGRhdGUgPSBub2RlRW50ZXIubWVyZ2Uobm9kZSk7XG5cbiAgICAgIG5vZGVVcGRhdGUudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueX0sJHtkLnh9KWApO1xuXG4gICAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnl9LCR7c291cmNlLnh9KWApXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5mcmFuY3ktc3ltYm9sJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ2xpZ2h0c3RlZWxibHVlJyA6IEdyYXBoLmNvbG9ycyhkLmRhdGEubGF5ZXIgKiA1KSlcbiAgICAgICAgLnN0eWxlKCdjdXJzb3InLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAncG9pbnRlcicgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgbGV0IG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgIG5vZGUub24oJ2NsaWNrJywgKGQpID0+IHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQuZGF0YSk7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNsaWNrKGQpIHtcbiAgICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IGQuY2hpbGRyZW47XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGUuY2FsbChzZWxmLCBkKTtcbiAgICAgIH1cblxuICAgICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgbGV0IGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24gKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIGxldCB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgbGV0IHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICBsZXQgc2ltdWxhdGlvbkFjdGl2ZSA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2ltdWxhdGlvbjtcblxuICAgIGxldCBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBsZXQgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgbGV0IGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICBsZXQgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIGxldCBsaW5rc1RvQWRkID0gW107XG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChsID0+IHtcbiAgICAgIGxldCBsaW5rID0gbGlua3MuZmluZChkID0+IGQuaWQgPT09IGwuaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbGlua3NUb0FkZC5wdXNoKGxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxpbmtzVG9BZGQucHVzaChsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGxldCBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICBsZXQgbm9kZXNUb0FkZCA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzLmZpbmQoZCA9PiBkLmlkID09PSBuLmlkKTtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGVzVG9BZGQucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1RvQWRkLnB1c2gobik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1zeW1ib2wnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGQgPT4gLShkLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICBHcmFwaC5hcHBseUV2ZW50cyhub2RlLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICBsZXQgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIGxldCBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh3aWR0aCAvIDIpLnkoaGVpZ2h0IC8gMik7XG4gICAgICBsZXQgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICBsZXQgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIGxldCBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUgKiAyKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICBsZXQgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4wNSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgbGV0IGZvcmNlWSA9IGQzLmZvcmNlWShoZWlnaHQgLyAyKS5zdHJlbmd0aCgwLjI1KTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgICAgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZSgnbGluaycsIGxpbmtGb3JjZSlcbiAgICAgICAgLmZvcmNlKCdjZW50ZXInLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoJ3knLCBmb3JjZVkpXG4gICAgICAgIC5mb3JjZSgnY29sbGlkZScsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oJ2VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIGxldCB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIGxldCBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vdXRpbC9kYXRhLWRlY29yYXRvcic7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICBsZXQgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgbGV0IG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBsZXQgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgbGV0IG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICBsZXQgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgbGV0IGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAobGV0IGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICBsZXQgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgbGV0IGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKS5mb2N1cygpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIGxldCBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICBsZXQgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgbGV0IHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICBsZXQgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgbGV0IGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsZXQgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4geShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gaGVpZ2h0IC0geShkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAwLjUpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICBsZXQgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICBsZXQgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgbGV0IG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgbGV0IHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICBsZXQgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIGxldCB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIGxldCBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgbGV0IHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIHgoaSk7XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4geShkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxldCBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW2RhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKCdmaWxsLW9wYWNpdHknLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGV0IGxpbmVFbnRlciA9IGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utb3BhY2l0eScsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLW9wYWNpdHknLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgbGV0IHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIGxldCBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICBsZXQgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIGxldCBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIGxldCBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICBsZXQgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgbGV0IHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICBsZXQgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxldCBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigncicsIDUpXG4gICAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4geChpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIHJldHVybiB5KGQpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwtb3BhY2l0eScsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIGxldCB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICBsZXQgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgbGV0IGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICBsZXQgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIGNvbnN0IG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIGxldCBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgbGV0IGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyh0aGlzLlNWR1BhcmVudC5ub2RlKCksICdkaWFncmFtLnBuZycpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIGxldCBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGxldCBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICBsZXQgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIGxldCBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICBsZXQgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIGxldCBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIGxldCBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwoQWJvdXRNb2RhbC5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICBsZXQgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG4gIHN0YXRpYyBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnbnVsbCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBvdXQkID0gdHlwZW9mIGV4cG9ydHMgIT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0cyB8fCB0eXBlb2YgZGVmaW5lICE9ICd1bmRlZmluZWQnICYmIHt9IHx8IHRoaXM7XG5cbiAgdmFyIGRvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIiBbPCFFTlRJVFkgbmJzcCBcIiYjMTYwO1wiPl0+JztcblxuICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IG9iaiBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1aXJlRG9tTm9kZShlbCkge1xuICAgIGlmICghaXNFbGVtZW50KGVsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhbiBIVE1MRWxlbWVudCBvciBTVkdFbGVtZW50IGlzIHJlcXVpcmVkOyBnb3QgJyArIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc0V4dGVybmFsKHVybCkge1xuICAgIHJldHVybiB1cmwgJiYgdXJsLmxhc3RJbmRleE9mKCdodHRwJywwKSA9PSAwICYmIHVybC5sYXN0SW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdCkgPT0gLTE7XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVJbWFnZXMoZWwsIGNhbGxiYWNrKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgdmFyIGltYWdlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltYWdlJyksXG4gICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoLFxuICAgICAgICBjaGVja0RvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICBjaGVja0RvbmUoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgICAgIHZhciBocmVmID0gaW1hZ2UuZ2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwiaHJlZlwiKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpZiAoaXNFeHRlcm5hbChocmVmLnZhbHVlKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQ2Fubm90IHJlbmRlciBlbWJlZGRlZCBpbWFnZXMgbGlua2luZyB0byBleHRlcm5hbCBob3N0czogXCIraHJlZi52YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5jcm9zc09yaWdpbj1cImFub255bW91c1wiO1xuICAgICAgICBocmVmID0gaHJlZiB8fCBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICBpbWcuc3JjID0gaHJlZjtcbiAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAgICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIiwgY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBsb2FkIFwiK2hyZWYpO1xuICAgICAgICAgICAgbGVmdC0tO1xuICAgICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICBjaGVja0RvbmUoKTtcbiAgICAgICAgfVxuICAgICAgfSkoaW1hZ2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZXMoZWwsIG9wdGlvbnMsIGNzc0xvYWRlZENhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGVjdG9yUmVtYXAgPSBvcHRpb25zLnNlbGVjdG9yUmVtYXA7XG4gICAgdmFyIG1vZGlmeVN0eWxlID0gb3B0aW9ucy5tb2RpZnlTdHlsZTtcbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICAvLyBlYWNoIGZvbnQgdGhhdCBoYXMgZXh0cmFubCBsaW5rIGlzIHNhdmVkIGludG8gcXVldWUsIGFuZCBwcm9jZXNzZWRcbiAgICAvLyBhc3luY2hyb25vdXNseVxuICAgIHZhciBmb250c1F1ZXVlID0gW107XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlc2hlZXQgY291bGQgbm90IGJlIGxvYWRlZDogXCIrc2hlZXRzW2ldLmhyZWYpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJ1bGVzICE9IG51bGwpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG1hdGNoOyBqIDwgcnVsZXMubGVuZ3RoOyBqKyssIG1hdGNoID0gbnVsbCkge1xuICAgICAgICAgIHZhciBydWxlID0gcnVsZXNbal07XG4gICAgICAgICAgaWYgKHR5cGVvZihydWxlLnN0eWxlKSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3JUZXh0O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBzZWxlY3RvclRleHQgPSBydWxlLnNlbGVjdG9yVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGhlIGZvbGxvd2luZyBDU1MgcnVsZSBoYXMgYW4gaW52YWxpZCBzZWxlY3RvcjogXCInICsgcnVsZSArICdcIicsIGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChzZWxlY3RvclRleHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KSB8fCBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIENTUyBzZWxlY3RvciBcIicgKyBzZWxlY3RvclRleHQgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gc2VsZWN0b3JSZW1hcCA/IHNlbGVjdG9yUmVtYXAocnVsZS5zZWxlY3RvclRleHQpIDogcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICAgIHZhciBjc3NUZXh0ID0gbW9kaWZ5U3R5bGUgPyBtb2RpZnlTdHlsZShydWxlLnN0eWxlLmNzc1RleHQpIDogcnVsZS5zdHlsZS5jc3NUZXh0O1xuICAgICAgICAgICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7IFwiICsgY3NzVGV4dCArIFwiIH1cXG5cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZihydWxlLmNzc1RleHQubWF0Y2goL15AZm9udC1mYWNlLykpIHtcbiAgICAgICAgICAgICAgLy8gYmVsb3cgd2UgYXJlIHRyeWluZyB0byBmaW5kIG1hdGNoZXMgdG8gZXh0ZXJuYWwgbGluay4gRS5nLlxuICAgICAgICAgICAgICAvLyBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgLy8gICAvLyAuLi5cbiAgICAgICAgICAgICAgLy8gICBzcmM6IGxvY2FsKCdBYmVsJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYWJlbC92Ni9Vek4taWVqUjFWb1hVMk9jLTdMc2J2ZXNaVzJ4T1EteHNOcU80N201NURBLndvZmYyKTtcbiAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAvLyBUaGlzIHJlZ2V4IHdpbGwgc2F2ZSBleHRybmFsIGxpbmsgaW50byBmaXJzdCBjYXB0dXJlIGdyb3VwXG4gICAgICAgICAgICAgIHZhciBmb250VXJsUmVnZXhwID0gL3VybFxcKFtcIiddPyguKz8pW1wiJ10/XFwpLztcbiAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBuZWVkcyB0byBiZSBjaGFuZ2VkIHRvIHN1cHBvcnQgbXVsdGlwbGUgdXJsIGRlY2xhcmF0aW9ucyBwZXIgZm9udC5cbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxNYXRjaCA9IHJ1bGUuY3NzVGV4dC5tYXRjaChmb250VXJsUmVnZXhwKTtcblxuICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxGb250VXJsID0gKGZvbnRVcmxNYXRjaCAmJiBmb250VXJsTWF0Y2hbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICB2YXIgZm9udFVybElzRGF0YVVSSSA9IGV4dGVybmFsRm9udFVybC5tYXRjaCgvXmRhdGE6Lyk7XG4gICAgICAgICAgICAgIGlmIChmb250VXJsSXNEYXRhVVJJKSB7XG4gICAgICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGlnbm9yZSBkYXRhIHVyaSAtIHRoZXkgYXJlIGFscmVhZHkgZW1iZWRkZWRcbiAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSAnJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBva2F5LCB3ZSBhcmUgbHVja3kuIFdlIGNhbiBmZXRjaCB0aGlzIGZvbnQgbGF0ZXJcblxuICAgICAgICAgICAgICAgIC8vaGFuZGxlIHVybCBpZiByZWxhdGl2ZVxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uLi8nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlcm5hbEZvbnRVcmwuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gc2hlZXRzW2ldLmhyZWYgKyAnLy4nICsgZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9udHNRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IHJ1bGUuY3NzVGV4dCxcbiAgICAgICAgICAgICAgICAgIC8vIFBhc3MgdXJsIHJlZ2V4LCBzbyB0aGF0IG9uY2UgZm9udCBpcyBkb3dubGFkZWQsIHdlIGNhbiBydW4gYHJlcGxhY2UoKWAgb24gaXRcbiAgICAgICAgICAgICAgICAgIGZvbnRVcmxSZWdleHA6IGZvbnRVcmxSZWdleHAsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZXh0ZXJuYWxGb250VXJsKSxcbiAgICAgICAgICAgICAgICAgIHVybDogZXh0ZXJuYWxGb250VXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlLCB1c2UgcHJldmlvdXMgbG9naWNcbiAgICAgICAgICAgICAgICBjc3MgKz0gcnVsZS5jc3NUZXh0ICsgJ1xcbic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3cgYWxsIGNzcyBpcyBwcm9jZXNzZWQsIGl0J3MgdGltZSB0byBoYW5kbGUgc2NoZWR1bGVkIGZvbnRzXG4gICAgcHJvY2Vzc0ZvbnRRdWV1ZShmb250c1F1ZXVlKTtcblxuICAgIGZ1bmN0aW9uIGdldEZvbnRNaW1lVHlwZUZyb21VcmwoZm9udFVybCkge1xuICAgICAgdmFyIHN1cHBvcnRlZEZvcm1hdHMgPSB7XG4gICAgICAgICd3b2ZmMic6ICdmb250L3dvZmYyJyxcbiAgICAgICAgJ3dvZmYnOiAnZm9udC93b2ZmJyxcbiAgICAgICAgJ290Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtb3BlbnR5cGUnLFxuICAgICAgICAndHRmJzogJ2FwcGxpY2F0aW9uL3gtZm9udC10dGYnLFxuICAgICAgICAnZW90JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAgICAgJ3NmbnQnOiAnYXBwbGljYXRpb24vZm9udC1zZm50JyxcbiAgICAgICAgJ3N2Zyc6ICdpbWFnZS9zdmcreG1sJ1xuICAgICAgfTtcbiAgICAgIHZhciBleHRlbnNpb25zID0gT2JqZWN0LmtleXMoc3VwcG9ydGVkRm9ybWF0cyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dGVuc2lvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dGVuc2lvbnNbaV07XG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgbm90IGJ1bGxldCBwcm9vZiwgaXQgbmVlZHMgdG8gaGFuZGxlIGVkZ2UgY2FzZXMuLi5cbiAgICAgICAgaWYgKGZvbnRVcmwuaW5kZXhPZignLicgKyBleHRlbnNpb24pID4gMCkge1xuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb3JtYXRzW2V4dGVuc2lvbl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgeW91IHNlZSB0aGlzIGVycm9yIG1lc3NhZ2UsIHlvdSBwcm9iYWJseSBuZWVkIHRvIHVwZGF0ZSBjb2RlIGFib3ZlLlxuICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biBmb250IGZvcm1hdCBmb3IgJyArIGZvbnRVcmwrICc7IEZvbnRzIG1heSBub3QgYmUgd29ya2luZyBjb3JyZWN0bHknKTtcbiAgICAgIHJldHVybiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKSB7XG4gICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBsb2FkIGZvbnRzIG9uZSBieSBvbmUgdW50aWwgd2UgaGF2ZSBhbnl0aGluZyBpbiB0aGUgcXVldWU6XG4gICAgICAgIHZhciBmb250ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHByb2Nlc3NOZXh0KGZvbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbW9yZSBmb250cyB0byBsb2FkLlxuICAgICAgICBjc3NMb2FkZWRDYWxsYmFjayhjc3MpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzTmV4dChmb250KSB7XG4gICAgICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmVuZWZpdCBmcm9tIGNhY2hpbmcuXG4gICAgICAgIHZhciBvUmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIG9SZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZvbnRMb2FkZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgdHJhbnNmZXJGYWlsZWQpO1xuICAgICAgICBvUmVxLm9wZW4oJ0dFVCcsIGZvbnQudXJsKTtcbiAgICAgICAgb1JlcS5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICBvUmVxLnNlbmQoKTtcblxuICAgICAgICBmdW5jdGlvbiBmb250TG9hZGVkKCkge1xuICAgICAgICAgIC8vIFRPRE86IGl0IG1heSBiZSBhbHNvIHdvcnRoIHRvIHdhaXQgdW50aWwgZm9udHMgYXJlIGZ1bGx5IGxvYWRlZCBiZWZvcmVcbiAgICAgICAgICAvLyBhdHRlbXB0aW5nIHRvIHJhc3Rlcml6ZSB0aGVtLiAoZS5nLiB1c2UgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZvbnRGYWNlU2V0IClcbiAgICAgICAgICB2YXIgZm9udEJpdHMgPSBvUmVxLnJlc3BvbnNlO1xuICAgICAgICAgIHZhciBmb250SW5CYXNlNjQgPSBhcnJheUJ1ZmZlclRvQmFzZTY0KGZvbnRCaXRzKTtcbiAgICAgICAgICB1cGRhdGVGb250U3R5bGUoZm9udCwgZm9udEluQmFzZTY0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZmVyRmFpbGVkKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIGZvbnQgZnJvbTogJyArIGZvbnQudXJsKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSlcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0ICsgJ1xcbic7XG4gICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCkge1xuICAgICAgICAgIHZhciBkYXRhVXJsID0gJ3VybChcImRhdGE6JyArIGZvbnQuZm9ybWF0ICsgJztiYXNlNjQsJyArIGZvbnRJbkJhc2U2NCArICdcIiknO1xuICAgICAgICAgIGNzcyArPSBmb250LnRleHQucmVwbGFjZShmb250LmZvbnRVcmxSZWdleHAsIGRhdGFVcmwpICsgJ1xcbic7XG5cbiAgICAgICAgICAvLyBzY2hlZHVsZSBuZXh0IGZvbnQgZG93bmxvYWQgb24gbmV4dCB0aWNrLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwcm9jZXNzRm9udFF1ZXVlKHF1ZXVlKVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUJ1ZmZlclRvQmFzZTY0KGJ1ZmZlcikge1xuICAgICAgdmFyIGJpbmFyeSA9ICcnO1xuICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIHZhciBsZW4gPSBieXRlcy5ieXRlTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWwsIGNsb25lLCBkaW0pIHtcbiAgICB2YXIgdiA9IChlbC52aWV3Qm94ICYmIGVsLnZpZXdCb3guYmFzZVZhbCAmJiBlbC52aWV3Qm94LmJhc2VWYWxbZGltXSkgfHxcbiAgICAgIChjbG9uZS5nZXRBdHRyaWJ1dGUoZGltKSAhPT0gbnVsbCAmJiAhY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkubWF0Y2goLyUkLykgJiYgcGFyc2VJbnQoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkpKSB8fFxuICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltXSB8fFxuICAgICAgcGFyc2VJbnQoY2xvbmUuc3R5bGVbZGltXSkgfHxcbiAgICAgIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKGRpbSkpO1xuICAgIHJldHVybiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgaXNOYU4ocGFyc2VGbG9hdCh2KSkpID8gMCA6IHY7XG4gIH1cblxuICBmdW5jdGlvbiByZUVuY29kZShkYXRhKSB7XG4gICAgZGF0YSA9IGVuY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgICBkYXRhID0gZGF0YS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbihtYXRjaCwgcDEpIHtcbiAgICAgIHZhciBjID0gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnK3AxKTtcbiAgICAgIHJldHVybiBjID09PSAnJScgPyAnJTI1JyA6IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChkYXRhKTtcbiAgfVxuXG4gIG91dCQucHJlcGFyZVN2ZyA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zLCBjYikge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDE7XG4gICAgb3B0aW9ucy5yZXNwb25zaXZlID0gb3B0aW9ucy5yZXNwb25zaXZlIHx8IGZhbHNlO1xuICAgIHZhciB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcblxuICAgIGlubGluZUltYWdlcyhlbCwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdmFyIHdpZHRoLCBoZWlnaHQ7XG4gICAgICBpZihlbC50YWdOYW1lID09ICdzdmcnKSB7XG4gICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBnZXREaW1lbnNpb24oZWwsIGNsb25lLCAnd2lkdGgnKTtcbiAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ2hlaWdodCcpO1xuICAgICAgfSBlbHNlIGlmKGVsLmdldEJCb3gpIHtcbiAgICAgICAgdmFyIGJveCA9IGVsLmdldEJCb3goKTtcbiAgICAgICAgd2lkdGggPSBib3gueCArIGJveC53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gYm94LnkgKyBib3guaGVpZ2h0O1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGNsb25lLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNsYXRlXFwoLio/XFwpLywgJycpKTtcblxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsJ3N2ZycpXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjbG9uZSlcbiAgICAgICAgY2xvbmUgPSBzdmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBdHRlbXB0ZWQgdG8gcmVuZGVyIG5vbi1TVkcgZWxlbWVudCcsIGVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2ZXJzaW9uXCIsIFwiMS4xXCIpO1xuICAgICAgaWYgKCFjbG9uZS5nZXRBdHRyaWJ1dGUoJ3htbG5zJykpIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlTlMoeG1sbnMsIFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICAgIH1cbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMucmVzcG9uc2l2ZSkge1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNsb25lLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZSgncHJlc2VydmVBc3BlY3RSYXRpbycsICd4TWluWU1pbiBtZWV0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aWR0aCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgaGVpZ2h0ICogb3B0aW9ucy5zY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIGNsb25lLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgW1xuICAgICAgICBvcHRpb25zLmxlZnQgfHwgMCxcbiAgICAgICAgb3B0aW9ucy50b3AgfHwgMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgXS5qb2luKFwiIFwiKSk7XG5cbiAgICAgIHZhciBmb3MgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCdmb3JlaWduT2JqZWN0ID4gKicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFmb3NbaV0uZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgICAgZm9zW2ldLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvdXRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG5cbiAgICAgIC8vIEluIGNhc2Ugb2YgY3VzdG9tIGZvbnRzIHdlIG5lZWQgdG8gZmV0Y2ggZm9udCBmaXJzdCwgYW5kIHRoZW4gaW5saW5lXG4gICAgICAvLyBpdHMgdXJsIGludG8gZGF0YS11cmkgZm9ybWF0IChlbmNvZGUgYXMgYmFzZTY0KS4gVGhhdCdzIHdoeSBzdHlsZVxuICAgICAgLy8gcHJvY2Vzc2luZyBpcyBkb25lIGFzeW5jaG9ub3VzbHkuIE9uY2UgYWxsIGlubGluaW5nIGlzIGZpbnNoZWRcbiAgICAgIC8vIGNzc0xvYWRlZENhbGxiYWNrKCkgaXMgY2FsbGVkLlxuICAgICAgc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjayk7XG5cbiAgICAgIGZ1bmN0aW9uIGNzc0xvYWRlZENhbGxiYWNrKGNzcykge1xuICAgICAgICAvLyBoZXJlIGFsbCBmb250cyBhcmUgaW5saW5lZCwgc28gdGhhdCB3ZSBjYW4gcmVuZGVyIHRoZW0gcHJvcGVybHkuXG4gICAgICAgIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgcy5pbm5lckhUTUwgPSBcIjwhW0NEQVRBW1xcblwiICsgY3NzICsgXCJcXG5dXT5cIjtcbiAgICAgICAgdmFyIGRlZnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZWZzJyk7XG4gICAgICAgIGRlZnMuYXBwZW5kQ2hpbGQocyk7XG4gICAgICAgIGNsb25lLmluc2VydEJlZm9yZShkZWZzLCBjbG9uZS5maXJzdENoaWxkKTtcblxuICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICB2YXIgb3V0SHRtbCA9IG91dGVyLmlubmVySFRNTDtcbiAgICAgICAgICBvdXRIdG1sID0gb3V0SHRtbC5yZXBsYWNlKC9OU1xcZCs6aHJlZi9naSwgJ3htbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWYnKTtcbiAgICAgICAgICBjYihvdXRIdG1sLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zdmdBc0RhdGFVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICBvdXQkLnByZXBhcmVTdmcoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHN2Zykge1xuICAgICAgdmFyIHVyaSA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShyZUVuY29kZShkb2N0eXBlICsgc3ZnKSk7XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgY2IodXJpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNQbmdVcmkgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLmVuY29kZXJUeXBlID0gb3B0aW9ucy5lbmNvZGVyVHlwZSB8fCAnaW1hZ2UvcG5nJztcbiAgICBvcHRpb25zLmVuY29kZXJPcHRpb25zID0gb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyB8fCAwLjg7XG5cbiAgICB2YXIgY29udmVydFRvUG5nID0gZnVuY3Rpb24oc3JjLCB3LCBoKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgICBpZihvcHRpb25zLmNhbnZnKSB7XG4gICAgICAgIG9wdGlvbnMuY2FudmcoY2FudmFzLCBzcmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc3JjLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3Ipe1xuICAgICAgICBjb250ZXh0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdmVyJztcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG5nO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcG5nID0gY2FudmFzLnRvRGF0YVVSTChvcHRpb25zLmVuY29kZXJUeXBlLCBvcHRpb25zLmVuY29kZXJPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgU2VjdXJpdHlFcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgZSBpbnN0YW5jZW9mIFNlY3VyaXR5RXJyb3IpIHx8IGUubmFtZSA9PSBcIlNlY3VyaXR5RXJyb3JcIikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZW5kZXJlZCBTVkcgaW1hZ2VzIGNhbm5vdCBiZSBkb3dubG9hZGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNiKHBuZyk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBjb252ZXJ0VG9QbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnZlcnRUb1BuZyhpbWFnZSwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUgZGF0YSBVUkkgYXMgYW4gaW1hZ2Ugb24gdGhlIGZvbGxvd2luZyBTVkdcXG4nLFxuICAgICAgICAgICAgd2luZG93LmF0b2IodXJpLnNsaWNlKDI2KSksICdcXG4nLFxuICAgICAgICAgICAgXCJPcGVuIHRoZSBmb2xsb3dpbmcgbGluayB0byBzZWUgYnJvd3NlcidzIGRpYWdub3Npc1xcblwiLFxuICAgICAgICAgICAgdXJpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlLnNyYyA9IHVyaTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG91dCQuZG93bmxvYWQgPSBmdW5jdGlvbihuYW1lLCB1cmkpIHtcbiAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKHVyaVRvQmxvYih1cmkpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNhdmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIGRvd25sb2FkU3VwcG9ydGVkID0gJ2Rvd25sb2FkJyBpbiBzYXZlTGluaztcbiAgICAgIGlmIChkb3dubG9hZFN1cHBvcnRlZCkge1xuICAgICAgICBzYXZlTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgICAgIHNhdmVMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBibG9iID0gdXJpVG9CbG9iKHVyaSk7XG4gICAgICAgICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgc2F2ZUxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBzYXZlTGluay5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0IFVSTHMuIEZhbGxpbmcgYmFjayB0byBzdHJpbmcgVVJMLicpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmk7XG4gICAgICAgIH1cbiAgICAgICAgc2F2ZUxpbmsuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzYXZlTGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJpLCAnX3RlbXAnLCAnbWVudWJhcj1ubyx0b29sYmFyPW5vLHN0YXR1cz1ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVyaVRvQmxvYih1cmkpIHtcbiAgICB2YXIgYnl0ZVN0cmluZyA9IHdpbmRvdy5hdG9iKHVyaS5zcGxpdCgnLCcpWzFdKTtcbiAgICB2YXIgbWltZVN0cmluZyA9IHVyaS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXVxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnl0ZVN0cmluZy5sZW5ndGgpO1xuICAgIHZhciBpbnRBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnRBcnJheVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtidWZmZXJdLCB7dHlwZTogbWltZVN0cmluZ30pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnID0gZnVuY3Rpb24oZWwsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvdXQkLnN2Z0FzRGF0YVVyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnNhdmVTdmdBc1BuZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc1BuZ1VyaShlbCwgb3B0aW9ucywgZnVuY3Rpb24odXJpKSB7XG4gICAgICBvdXQkLmRvd25sb2FkKG5hbWUsIHVyaSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBpZiBkZWZpbmUgaXMgZGVmaW5lZCBjcmVhdGUgYXMgYW4gQU1EIG1vZHVsZVxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3V0JDtcbiAgICB9KTtcbiAgfVxuXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL3V0aWwvZGF0YS1kZWNvcmF0b3InO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGxldCBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIGxldCBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dCgneCcpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==