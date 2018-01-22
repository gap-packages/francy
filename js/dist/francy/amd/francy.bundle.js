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
        tex2jax: {
          availableFonts: ["TeX"],
          preferredFont: "TeX",
          inlineMath: [['$', '$'], ['\\(', '\\)']],
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

      var treemap = d3.tree().size([height, width]);

      root = d3.hierarchy(this.treeData, function (d) {
        return d.children;
      });
      root.x0 = height / 2;
      root.y0 = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWEzNGNlZmFiOGFjODdjOGJjMzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsInRleDJqYXgiLCJhdmFpbGFibGVGb250cyIsInByZWZlcnJlZEZvbnQiLCJpbmxpbmVNYXRoIiwicHJvY2Vzc0VzY2FwZXMiLCJSZWdpc3RlciIsIlN0YXJ0dXBIb29rIiwic2VsZWN0QWxsIiwiZWFjaCIsInNlbGYiLCJtYXRoSmF4IiwiYXR0ciIsImFwcGVuZCIsInJlbW92ZSIsIlF1ZXVlIiwiZSIsImluZm8iLCJjbGFzc2VzIiwibWFwIiwiY2wiLCJKdXB5dGVyIiwia2V5Ym9hcmRfbWFuYWdlciIsInJlZ2lzdGVyX2V2ZW50cyIsIlRvb2x0aXAiLCJIVE1MUGFyZW50IiwicG9zIiwibW91c2UiLCJTVkdQYXJlbnQiLCJzdHlsZSIsInRhYmxlIiwia2V5cyIsImtleSIsInJvdyIsInRleHQiLCJ0aXRsZSIsIkNoYXJ0IiwiY2FudmFzIiwiY2hhcnQiLCJ0eXBlIiwibG9hZCIsImRhdGFzZXQiLCJtYXgiLCJmcm9tIiwiXyIsImkiLCJ4Iiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiR3JhcGgiLCJncmFwaCIsInRvb2x0aXAiLCJjb250ZXh0TWVudSIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZUNhbGxiYWNrIiwiY2FsbCIsIm1lc3NhZ2VzIiwiZXZlbnQiLCJjYWxsYmFja3MiLCJmb3JFYWNoIiwiY2IiLCJ0cmlnZ2VyIiwiZXhlY3V0ZSIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwiQmFzZSIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImVycm9yIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImVudGVyIiwiaHRtbCIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxiYWNrT2JqIiwiX2V4ZWN1dGUiLCJKU09OIiwic3RyaW5naWZ5IiwiQUxMX0NBTlZBUyIsIkZyYW5jeSIsImZyYW1lIiwiaWQiLCJleHBvcnRzIiwid2luZG93Iiwib2xkUmVzaXplIiwib25yZXNpemUiLCJ6b29tVG9GaXQiLCJGcmFtZSIsIm1lbnUiLCJhZGQiLCJwYXJlbnQiLCJmcmFtZUlkIiwicmVuZGVyQ2hpbGRyZW4iLCJKc29uVXRpbHMiLCJpbnB1dCIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJtaW1lIiwiTUlNRSIsIkNhbnZhcyIsInVwZGF0ZVpvb20iLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwiem9vbSIsInRyYW5zZm9ybSIsInpvb21JZGVudGl0eSIsInRyYW5zbGF0ZSIsInpvb21lZCIsInN0b3BwZWQiLCJkZWZhdWx0UHJldmVudGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiYm91bmRzIiwiZ2V0QkJveCIsImNsaWVudEJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZ1bGxXaWR0aCIsInJpZ2h0IiwibGVmdCIsImZ1bGxIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsIm1pZFgiLCJtaWRZIiwieSIsIk1hdGgiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJjYW52YXNJZCIsIlRyZWVHcmFwaCIsInJvb3QiLCJ0cmVlbWFwIiwidHJlZSIsInNpemUiLCJoaWVyYXJjaHkiLCJ0cmVlRGF0YSIsImNoaWxkcmVuIiwieDAiLCJ5MCIsImNvbGxhcHNlZCIsImNvbGxhcHNlIiwidXBkYXRlIiwiX2NoaWxkcmVuIiwic291cmNlIiwibm9kZXMiLCJkZXNjZW5kYW50cyIsImxpbmtzIiwic2xpY2UiLCJkZXB0aCIsImxpbmtHcm91cCIsImxpbmsiLCJsaW5rRW50ZXIiLCJvIiwiZGlhZ29uYWwiLCJtZXJnZSIsImV4aXQiLCJzIiwibm9kZUdyb3VwIiwibm9kZUVudGVyIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwibm9kZVVwZGF0ZSIsImNvbG9ycyIsImxheWVyIiwiYXBwbHlFdmVudHMiLCJub2RlT25DbGljayIsImNsaWNrIiwiY2FudmFzTm9kZXMiLCJkYXRhTWFwIiwicmVkdWNlIiwiR2VuZXJpY0dyYXBoIiwic2ltdWxhdGlvbkFjdGl2ZSIsInNpbXVsYXRpb24iLCJjYW52YXNMaW5rcyIsImxpbmtzVG9BZGQiLCJmaW5kIiwibCIsIm5vZGVzVG9BZGQiLCJuIiwiaGlnaGxpZ2h0IiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVtcHR5Iiwic2hvd05laWdoYm91cnMiLCJjb25uZWN0ZWROb2RlcyIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwiYWxwaGEiLCJyZXN0YXJ0IiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0IiwiX19kYXRhX18iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJDb250ZXh0TWVudSIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsIm92ZXJsYXkiLCJob2xkZXIiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiZm9jdXMiLCJCYXJDaGFydCIsImF4aXMiLCJkYXRhc2V0cyIsImRhdGFzZXROYW1lcyIsIm1hcmdpbiIsInNjYWxlQmFuZCIsInJhbmdlIiwicGFkZGluZyIsInNjYWxlTGluZWFyIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYXJFbnRlciIsImJhbmR3aWR0aCIsInhBeGlzR3JvdXAiLCJheGlzQm90dG9tIiwieUF4aXNHcm91cCIsImF4aXNMZWZ0Iiwic2hvd0xlZ2VuZCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJsaW5lRW50ZXIiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIiwic2NhdHRlckVudGVyIiwiTWFpbk1lbnUiLCJhYm91dE1vZGFsIiwibWVudUlkIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0IiwiTWVzc2FnZSIsImFsZXJ0c0lkIiwibWVzc2FnZUVudGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7Ozs7QUFFQTs7SUFFcUJBLFE7OztBQUVuQiwwQkFBNEQ7QUFBQSw0QkFBOUNDLE9BQThDO0FBQUEsUUFBOUNBLE9BQThDLGdDQUFwQyxLQUFvQztBQUFBLFFBQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxRQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1COztBQUFBOztBQUFBLG9IQUNwRCxFQUFFRixTQUFTQSxPQUFYLEVBQW9CQyxVQUFVQSxRQUE5QixFQUF3Q0MsaUJB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MUQsRUFBcUUsTUFBckUsRUFBNkVLLElBQTdFLENBQWtGLEdBQWxGOztBQUVBc1IsbUJBQWFySCxLQUFiLENBQW1CNUcsT0FBbkI7O0FBRUFBLGNBQVE2RyxJQUFSLEdBQWV0TCxNQUFmOztBQUVBLFdBQUtuRCxPQUFMLENBQWFrRSxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBNUNNeVIsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFhMzRjZWZhYjhhYzg3YzhiYzMzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDc1MDsgLy9tc1xuICB9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RpdicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlcyhwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHlQYXRoKSB7XG5cbiAgdmFyIHRtcCA9IG9iajtcblxuICBpZiAodG1wICYmIHByb3BlcnR5UGF0aCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIXRtcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgdG1wID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIHJldHVybiBvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3IvZGF0YS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGF2YWlsYWJsZUZvbnRzOiBbXCJUZVhcIl0sXG4gICAgICAgICAgcHJlZmVycmVkRm9udDogXCJUZVhcIixcbiAgICAgICAgICBpbmxpbmVNYXRoOiBbXG4gICAgICAgICAgICBbJyQnLCAnJCddLFxuICAgICAgICAgICAgWydcXFxcKCcsICdcXFxcKSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuU3RhcnR1cEhvb2soJ0VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgbWF0aEpheCA9IHNlbGYuc2VsZWN0KCd0ZXh0PnNwYW4+c3ZnJyk7XG4gICAgICAgICAgICBpZiAobWF0aEpheC5ub2RlKCkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHNlbGYubm9kZSgpLnBhcmVudE5vZGUpLmFwcGVuZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRoSmF4Lm5vZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnQubm9kZSgpXSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgICAgY2FzZSAndHJlZSc6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIHN0YXRpYyBhcHBseUV2ZW50cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKG9wdGlvbnMpO1xuICAgIHZhciBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudShvcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sob3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5cbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB2YXIgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWUgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5tZXNzYWdlcyA9IG5ldyBNZXNzYWdlKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5tZXNzYWdlcykuYWRkKHRoaXMubWVudSkuYWRkKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBmcmFtZUlkID0gYEZyYW1lLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgZGl2IyR7ZnJhbWVJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEZyYW1lIFske2ZyYW1lSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5JykuYXR0cignaWQnLCBmcmFtZUlkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgZnJhbWUgd2l0aCBpZCBbJHtmcmFtZUlkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEZyYW1lIHVwZGF0ZWQgWyR7ZnJhbWVJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwpIHtcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24ubWltZSA9PT0gSnNvblV0aWxzLk1JTUUgfHwgcGFydGlhbCA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0aWMgZ2V0IE1JTUUoKSB7XG4gICAgcmV0dXJuICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIHZhciBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICB2YXIgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHZhciB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIHZhciB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxNTApO1xuXG4gICAgICB2YXIgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICB2YXIgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIHZhciBvID0geyB4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MCB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmtFbnRlci5tZXJnZShsaW5rKVxuICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKS5hdHRyKCdkJywgZCA9PiBkaWFnb25hbChkLCBkLnBhcmVudCkpO1xuXG4gICAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIHZhciBvID0geyB4OiBzb3VyY2UueCwgeTogc291cmNlLnkgfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICB2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQuZGF0YS50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpO1xuXG4gICAgICB2YXIgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sJHtzb3VyY2UueH0pYClcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1zeW1ib2wnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogR3JhcGguY29sb3JzKGQuZGF0YS5sYXllciAqIDUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG4gICAgICBHcmFwaC5hcHBseUV2ZW50cyhub2RlLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICB2YXIgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgZmxhdCBkYXRhIGludG8gdHJlZSBkYXRhIGJ5IGFuYWx5c2luZyB0aGUgcGFyZW50cyBvZiBlYWNoIG5vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGRhdGEgdHJhbnNmb3JtZWQgaW4gdHJlZSBkYXRhXG4gICAqL1xuICBnZXQgdHJlZURhdGEoKSB7XG4gICAgdmFyIGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXTtcbiAgICB2YXIgZGF0YU1hcCA9IGNhbnZhc05vZGVzLnJlZHVjZShmdW5jdGlvbihtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyZWVEYXRhLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWVEYXRhWzBdO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtdHJlZS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHZhciBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmtzID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEoKTtcbiAgICB2YXIgbGlua3NUb0FkZCA9IFtdO1xuICAgIGNhbnZhc0xpbmtzLmZvckVhY2gobCA9PiB7XG4gICAgICB2YXIgbGluayA9IGxpbmtzLmZpbmQoZCA9PiBkLmlkID09PSBsLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIGxpbmtzVG9BZGQucHVzaChsaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsaW5rc1RvQWRkLnB1c2gobCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKGxpbmtzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICB2YXIgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgIH1cblxuICAgIHZhciBub2RlcyA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKCk7XG4gICAgdmFyIG5vZGVzVG9BZGQgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlcy5maW5kKGQgPT4gZC5pZCA9PT0gbi5pZCk7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBub2Rlc1RvQWRkLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZXNUb0FkZC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YShub2Rlc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgaWYgKG5vZGUuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbGluay5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbGluay5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1zeW1ib2wnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGQgPT4gLShkLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICBHcmFwaC5hcHBseUV2ZW50cyhub2RlLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICB2YXIgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIHZhciBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh3aWR0aCAvIDIpLnkoaGVpZ2h0IC8gMik7XG4gICAgICB2YXIgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICB2YXIgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIHZhciBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUgKiAyKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4wNSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShoZWlnaHQgLyAyKS5zdHJlbmd0aCgwLjI1KTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgICAgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKFwiY2hhcmdlXCIsIG1hbnlGb3JjZSlcbiAgICAgICAgLmZvcmNlKFwibGlua1wiLCBsaW5rRm9yY2UpXG4gICAgICAgIC5mb3JjZShcImNlbnRlclwiLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgICAgc2ltdWxhdGlvbi5hbHBoYSgwLjUpLnJlc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLWdlbmVyaWMuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICB2YXIgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIHZhciBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICB2YXIgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgdmFyIGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7IH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKS5mb2N1cygpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyLSR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHZhciBiYXJFbnRlciA9IGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhckVudGVyLm1lcmdlKGJhcilcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSk7XG5cbiAgICAgIHZhciBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW2RhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHZhciBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cihcInJcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyRW50ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0Jztcbi8vaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIHZhciBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIH1cbiAgICAvL2NvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY2FudmFzLmlkKSwgXCJkaWFncmFtLnBuZ1wiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9ICdBYm91dE1vZGFsV2luZG93JztcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBBYm91dCBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS50ZXh0KCdMb2FkZWQgT2JqZWN0OicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdwcmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5odG1sKHRoaXMuc3ludGF4SGlnaGxpZ2h0KEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgQWJvdXQgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8vIGNyZWRpdHMgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxMDg0MS9ob3ctY2FuLWktcHJldHR5LXByaW50LWpzb24tdXNpbmctamF2YXNjcmlwdCNhbnN3ZXItNzIyMDUxMFxuICBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICB2YXIgY2xzID0gJ251bWJlcic7XG4gICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnbnVsbCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLm1lc3NhZ2VzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBtZXNzYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDoga2V5LFxuICAgICAgICB0eXBlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udHlwZSxcbiAgICAgICAgdGl0bGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50aXRsZSxcbiAgICAgICAgdGV4dDogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICB2YXIgYWxlcnRzSWQgPSBgTWVzc2FnZXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHthbGVydHNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgZGl2IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1lc3NhZ2UtaG9sZGVyJykuYXR0cignaWQnLCBhbGVydHNJZCk7XG4gICAgfVxuXG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdkaXYuZnJhbmN5LWFsZXJ0JykuZGF0YShtZXNzYWdlcywgZCA9PiBkLmlkKTtcbiAgICB2YXIgbWVzc2FnZUVudGVyID0gbWVzc2FnZS5lbnRlcigpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+IGBmcmFuY3ktYWxlcnQgYWxlcnQtJHtkLnR5cGV9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykudGV4dChkID0+IGQudGl0bGUpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS50ZXh0KGQgPT4gZC50ZXh0KTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoXCJ4XCIpO1xuXG4gICAgbWVzc2FnZUVudGVyLm1lcmdlKG1lc3NhZ2UpO1xuXG4gICAgbWVzc2FnZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==