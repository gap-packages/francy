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
      // TODO https://www.google.co.uk/search?q=mthjaxhub+config+svg&oq=mthjaxhub+config+svg&aqs=chrome..69i57.7296j0j7&sourceid=chrome&ie=UTF-8
      // TODO http://docs.mathjax.org/en/latest/output.html
      // TODO http://docs.mathjax.org/en/latest/options/output-processors/SVG.html
      MathJax.Hub.Config({
        jax: ["input/TeX", "output/SVG"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGM1YWIwOGYyZDFmNDZjMThhZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLXRyZWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJyZXF1aXJlcyIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiUmVnaXN0ZXJNYXRoSmF4IiwiUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMiLCJzZXRUaW1lb3V0IiwiTWF0aEpheCIsIkh1YiIsIkNvbmZpZyIsImpheCIsIlJlZ2lzdGVyIiwiU3RhcnR1cEhvb2siLCJzZWxlY3RBbGwiLCJlYWNoIiwic2VsZiIsIm1hdGhKYXgiLCJhdHRyIiwiYXBwZW5kIiwicmVtb3ZlIiwiUXVldWUiLCJlIiwiaW5mbyIsImNsYXNzZXMiLCJtYXAiLCJjbCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwiVG9vbHRpcCIsIkhUTUxQYXJlbnQiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInN0eWxlIiwidGFibGUiLCJrZXlzIiwia2V5Iiwicm93IiwidGV4dCIsInRpdGxlIiwiQ2hhcnQiLCJjYW52YXMiLCJjaGFydCIsInR5cGUiLCJsb2FkIiwiZGF0YXNldCIsIm1heCIsImZyb20iLCJfIiwiaSIsIngiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJHcmFwaCIsImdyYXBoIiwidG9vbHRpcCIsImNvbnRleHRNZW51IiwiY2FsbGJhY2siLCJvbiIsImQiLCJleGVjdXRlQ2FsbGJhY2siLCJjYWxsIiwibWVzc2FnZXMiLCJldmVudCIsImNhbGxiYWNrcyIsImZvckVhY2giLCJjYiIsInRyaWdnZXIiLCJleGVjdXRlIiwic3ltYm9sQ2lyY2xlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwic2V0dGluZ3MiLCJCYXNlIiwibG9nIiwiRXJyb3IiLCJqc29uIiwicGFydGlhbCIsInBhcnNlIiwiTG9nZ2VyIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJfZm9ybWF0IiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIk1lbnUiLCJtZW51c0l0ZXJhdG9yIiwiaGFzTmV4dCIsIm1lbnVJdGVtIiwibmV4dCIsImVudHJ5IiwiYWN0aW9uIiwiZW50ZXIiLCJodG1sIiwibWVudXMiLCJjb250ZW50Iiwic3ViTWVudXNJdGVyYXRvciIsIml0ZXJhdG9yIiwidHJhdmVyc2UiLCJhcnJheSIsIm5leHRJbmRleCIsIkNhbGxiYWNrSGFuZGxlciIsInJlcXVpcmVkQXJncyIsImNhbGJhY2tPYmoiLCJfZXhlY3V0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiZnJhbWUiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbGRSZXNpemUiLCJvbnJlc2l6ZSIsInpvb21Ub0ZpdCIsIkZyYW1lIiwibWVudSIsImFkZCIsInBhcmVudCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkpzb25VdGlscyIsImlucHV0IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwidXBkYXRlWm9vbSIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwic2NhbGUiLCJ6b29tIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiem9vbWVkIiwic3RvcHBlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnVsbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwiZnVsbEhlaWdodCIsImJvdHRvbSIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5IiwiTWF0aCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNhbnZhc0lkIiwiVHJlZUdyYXBoIiwicm9vdCIsImhpZXJhcmNoeSIsInRyZWVEYXRhIiwiY2hpbGRyZW4iLCJ4MCIsInkwIiwibGV2ZWxXaWR0aCIsImNoaWxkQ291bnQiLCJuIiwibmV3SGVpZ2h0IiwidHJlZW1hcCIsInRyZWUiLCJzaXplIiwiY29sbGFwc2VkIiwiY29sbGFwc2UiLCJ1cGRhdGUiLCJfY2hpbGRyZW4iLCJzb3VyY2UiLCJub2RlcyIsImRlc2NlbmRhbnRzIiwibGlua3MiLCJzbGljZSIsImRlcHRoIiwibGlua0dyb3VwIiwibGluayIsImxpbmtFbnRlciIsIm8iLCJkaWFnb25hbCIsIm1lcmdlIiwiZXhpdCIsInMiLCJub2RlR3JvdXAiLCJub2RlRW50ZXIiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJub2RlVXBkYXRlIiwiY29sb3JzIiwibGF5ZXIiLCJhcHBseUV2ZW50cyIsIm5vZGVPbkNsaWNrIiwiY2xpY2siLCJjYW52YXNOb2RlcyIsImRhdGFNYXAiLCJyZWR1Y2UiLCJHZW5lcmljR3JhcGgiLCJzaW11bGF0aW9uQWN0aXZlIiwic2ltdWxhdGlvbiIsImNhbnZhc0xpbmtzIiwibGlua3NUb0FkZCIsImZpbmQiLCJsIiwibm9kZXNUb0FkZCIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbXB0eSIsInNob3dOZWlnaGJvdXJzIiwiY29ubmVjdGVkTm9kZXMiLCJjZW50ZXJGb3JjZSIsImZvcmNlQ2VudGVyIiwibWFueUZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwibGlua0ZvcmNlIiwiZm9yY2VMaW5rIiwiZGlzdGFuY2UiLCJjb2xsaWRlRm9yY2UiLCJmb3JjZUNvbGxpZGUiLCJmb3JjZVgiLCJmb3JjZVkiLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsInRpY2tlZCIsImFscGhhIiwicmVzdGFydCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsIl9fZGF0YV9fIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJmeCIsImZ5IiwiQ29udGV4dE1lbnUiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsImZvY3VzIiwiQmFyQ2hhcnQiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJzY2FsZUxpbmVhciIsImNvbmNhdCIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFyRW50ZXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNob3dMZWdlbmQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsIkxpbmVDaGFydCIsImxpbmVzR3JvdXAiLCJ2YWx1ZUxpbmUiLCJsaW5lIiwibGluZUVudGVyIiwiU2NhdHRlckNoYXJ0Iiwic2NhdHRlckdyb3VwIiwic2NhdHRlciIsInNjYXR0ZXJFbnRlciIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwic3ludGF4SGlnaGxpZ2h0IiwiY2xzIiwidGVzdCIsIk1lc3NhZ2UiLCJhbGVydHNJZCIsIm1lc3NhZ2VFbnRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRXFCQSxROzs7QUFFbkIsMEJBQTREO0FBQUEsNEJBQTlDQyxPQUE4QztBQUFBLFFBQTlDQSxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QkMsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsUUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQTs7QUFBQSxvSEFDcEQsRUFBRUYsU0FBU0EsT0FBWCxFQUFvQkMsVUFBVUEsUUFBOUIsRUFBd0NDLGlCQUFpQkEsZUFBekQsRUFEb0Q7O0FBRTFELFFBQUlD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QjtBQUFBLE9BREUsRUFDbUNpQixFQURuQyxDQUNzQyxPQUR0QyxFQUMrQyxZQUFXO0FBQ3pFbkYsV0FBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0J1RCxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELE9BSGdCLENBQW5CO0FBSUE4UixtQkFBYTlTLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEJELElBQTVCLENBQWlDLE9BQWpDLEVBQTBDLFFBQTFDLEVBQW9Ec0IsSUFBcEQsQ0FBeUQ7QUFBQSxlQUFLdUIsRUFBRXRCLEtBQVA7QUFBQSxPQUF6RDtBQUNBd1IsbUJBQWE5UyxNQUFiLENBQW9CLE1BQXBCLEVBQTRCcUIsSUFBNUIsQ0FBaUM7QUFBQSxlQUFLdUIsRUFBRXZCLElBQVA7QUFBQSxPQUFqQztBQUNBeVIsbUJBQWE5UyxNQUFiLENBQW9CLE1BQXBCLEVBQTRCRCxJQUE1QixDQUFpQyxPQUFqQyxFQUEwQyxRQUExQyxFQUFvRGlCLEtBQXBELENBQTBELFNBQTFELEVBQXFFLE1BQXJFLEVBQTZFSyxJQUE3RSxDQUFrRixHQUFsRjs7QUFFQXlSLG1CQUFhcEgsS0FBYixDQUFtQmhILE9BQW5COztBQUVBQSxjQUFRaUgsSUFBUixHQUFlMUwsTUFBZjs7QUFFQSxXQUFLL0MsT0FBTCxDQUFhOEQsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTVDTTRSLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYzVhYjA4ZjJkMWY0NmMxOGFkNSIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuLyogZ2xvYmFsIEp1cHl0ZXIsIE1hdGhKYXgsIGQzICovXG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlck1hdGhKYXgoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHJldHVybjtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRPRE8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvLnVrL3NlYXJjaD9xPW10aGpheGh1Yitjb25maWcrc3ZnJm9xPW10aGpheGh1Yitjb25maWcrc3ZnJmFxcz1jaHJvbWUuLjY5aTU3LjcyOTZqMGo3JnNvdXJjZWlkPWNocm9tZSZpZT1VVEYtOFxuICAgICAgLy8gVE9ETyBodHRwOi8vZG9jcy5tYXRoamF4Lm9yZy9lbi9sYXRlc3Qvb3V0cHV0Lmh0bWxcbiAgICAgIC8vIFRPRE8gaHR0cDovL2RvY3MubWF0aGpheC5vcmcvZW4vbGF0ZXN0L29wdGlvbnMvb3V0cHV0LXByb2Nlc3NvcnMvU1ZHLmh0bWxcbiAgICAgIE1hdGhKYXguSHViLkNvbmZpZyh7XG4gICAgICAgIGpheDogW1wiaW5wdXQvVGVYXCIsIFwib3V0cHV0L1NWR1wiXVxuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlJlZ2lzdGVyLlN0YXJ0dXBIb29rKCdFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGFiZWwnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSBkMy5zZWxlY3QodGhpcyksXG4gICAgICAgICAgICAgIG1hdGhKYXggPSBzZWxmLnNlbGVjdCgndGV4dD5zcGFuPnN2ZycpO1xuICAgICAgICAgICAgaWYgKG1hdGhKYXgubm9kZSgpKSB7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneCcsIHNlbGYuYXR0cigneCcpKTtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3knLCAtMTUpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChzZWxmLm5vZGUoKS5wYXJlbnROb2RlKS5hcHBlbmQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWF0aEpheC5ub2RlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyNTApO1xuICAgICAgfSk7XG5cbiAgICAgIE1hdGhKYXguSHViLlF1ZXVlKFsnVHlwZXNldCcsIE1hdGhKYXguSHViLCBlbGVtZW50Lm5vZGUoKV0pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyBNYXRoSmF4IGlzIG5vdCBsb2FkZWQuLi4nLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoY2xhc3Nlcykge1xuICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBpbiBKdXB5dGVyIGZvciBjbGFzc2VzXG4gIGlmICghY2xhc3NlcykgcmV0dXJuO1xuICB0cnkge1xuICAgIGNsYXNzZXMubWFwKChjbCkgPT4ge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cyhjbCk7XG4gICAgfSk7XG4gIH1cbiAgY2F0Y2ggKGUpIHtcbiAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgIG5ldyBMb2dnZXIoKS5pbmZvKCdJdCBzZWVtcyB3ZVxcJ3JlIG5vdCBydW5uaW5nIG9uIEp1cHl0ZXIuLi4nLCBlKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2NvbXBvbmVudC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKClcbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyA1KSArICdweCcpLnN0eWxlKCd0b3AnLCAocG9zWzFdIC0gNSkgKyAncHgnKTtcblxuICAgIHZhciB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50aXRsZSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvdG9vbHRpcC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vY2hhcnQtbGluZSc7XG5pbXBvcnQgU2NhdHRlckNoYXJ0IGZyb20gJy4vY2hhcnQtc2NhdHRlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcblxuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBuZXcgTGluZUNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzY2F0dGVyXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyBcIkFcIjogeyAndGl0bGUnOiAnRGF0YXNldCcsICd0ZXh0JzogZGF0YXNldCB9LCBcIkJcIjogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVHJlZUdyYXBoIGZyb20gJy4vZ3JhcGgtdHJlZSc7XG5pbXBvcnQgR2VuZXJpY0dyYXBoIGZyb20gJy4vZ3JhcGgtZ2VuZXJpYyc7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RyZWUnOlxuICAgICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICBzdGF0aWMgYXBwbHlFdmVudHMoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcChvcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUob3B0aW9ucyk7XG4gICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4ge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLmxvYWQoZC5tZXNzYWdlcywgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGguanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IVxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMuYXBwZW5kVG8gPSB0aGlzO1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfSB0aGUgbG9nZ2VyIGZvciB0aGlzIGNsYXNzXG4gICAgICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzZXR0aW5ncyh7IHZlcmJvc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmxvYWQoZCwgdHJ1ZSkuZXhlY3V0ZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICB2YXIgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgUmVxdWlyZWRBcmdzTW9kYWwgZnJvbSAnLi9tb2RhbC1yZXF1aXJlZCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxiYWNrT2JqKSA9PiB0aGlzLl9leGVjdXRlLmNhbGwodGhpcywgY2FsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgICB0aGlzLl9leGVjdXRlKHRoaXMuZGF0YS5jYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuXG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lO1xuICAgIHJldHVybiBmcmFtZS5lbGVtZW50Lm5vZGUoKTtcbiAgfVxuXG4gIHVucmVuZGVyKGlkKSB7XG4gICAgZGVsZXRlIEFMTF9DQU5WQVNbaWRdO1xuICB9XG59XG5cbnRyeSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiAgLy8gaGFuZGxlIGV2ZW50cyBvbiByZXNpemVcbiAgdmFyIG9sZFJlc2l6ZSA9IHdpbmRvdy5vbnJlc2l6ZTtcbiAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gem9vbSB0byBmaXQgYWxsIGNhbnZhcyBvbiByZXNpemVcbiAgICBPYmplY3QudmFsdWVzKEFMTF9DQU5WQVMpLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICAgIGZyYW1lLmNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBjYWxsIG9sZCByZXNpemUgZnVuY3Rpb24gaWYgYW55IVxuICAgIGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbGRSZXNpemUoKTtcbiAgICB9XG4gIH07XG59XG5jYXRjaCAoZSkge1xuICBleHBvcnRzLkZyYW5jeSA9IEZyYW5jeTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICB2YXIgZnJhbWVJZCA9IGBGcmFtZS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLmdyYXBoKS5hZGQodGhpcy5jaGFydCk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbVRvRml0KCkge1xuICAgICAgLy8gb25seSBleGVjdXRlIGlmIGVuYWJsZSwgb2YgY291cnNlXG4gICAgICBpZiAoc2VsZi5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgICB2YXIgY2xpZW50Qm91bmRzID0gc2VsZi5lbGVtZW50Lm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBmdWxsV2lkdGggPSBjbGllbnRCb3VuZHMucmlnaHQgLSBjbGllbnRCb3VuZHMubGVmdCxcbiAgICAgICAgICBmdWxsSGVpZ2h0ID0gY2xpZW50Qm91bmRzLmJvdHRvbSAtIGNsaWVudEJvdW5kcy50b3A7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHdpZHRoID09IDAgfHwgaGVpZ2h0ID09IDApIHJldHVybjtcblxuICAgICAgICB2YXIgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICAgIG1pZFkgPSBib3VuZHMueSArIGhlaWdodCAvIDI7XG5cbiAgICAgICAgdmFyIHNjYWxlID0gMC45IC8gTWF0aC5tYXgod2lkdGggLyBmdWxsV2lkdGgsIGhlaWdodCAvIGZ1bGxIZWlnaHQpO1xuICAgICAgICB2YXIgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IGZ1bGxIZWlnaHQgLyAyIC0gc2NhbGUgKiBtaWRZO1xuXG4gICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKHNlbGYudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjYW52YXNJZCA9IGBDYW52YXMtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTtcblxuICAgIHZhciBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIC8vIHJlbW92ZSB6b29tIG9uIGRvdWJsZSBjbGljayFcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHRoaXMuZWxlbWVudC56b29tVG9GaXQgPSB0aGlzLnpvb21Ub0ZpdCA9IHpvb21Ub0ZpdDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYW52YXMgdXBkYXRlZCBbJHtjYW52YXNJZH1dLi4uYCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHpvb21Ub0ZpdCgpO1xuICAgIH0sIHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHZhciBpID0gMCxcbiAgICAgIHJvb3Q7XG5cbiAgICByb290ID0gZDMuaGllcmFyY2h5KHRoaXMudHJlZURhdGEsIGQgPT4gZC5jaGlsZHJlbik7XG4gICAgcm9vdC54MCA9IGhlaWdodCAvIDI7XG4gICAgcm9vdC55MCA9IDA7XG5cbiAgICAvLyBjb21wdXRlIGhlaWdodCBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIGdyYXBoXG4gICAgdmFyIGxldmVsV2lkdGggPSBbMV07XG4gICAgdmFyIGNoaWxkQ291bnQgPSBmdW5jdGlvbihsZXZlbCwgbikge1xuXG4gICAgICBpZiAobi5jaGlsZHJlbiAmJiBuLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKGxldmVsV2lkdGgubGVuZ3RoIDw9IGxldmVsICsgMSkgbGV2ZWxXaWR0aC5wdXNoKDApO1xuXG4gICAgICAgIGxldmVsV2lkdGhbbGV2ZWwgKyAxXSArPSBuLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBjaGlsZENvdW50KGxldmVsICsgMSwgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRDb3VudCgwLCByb290KTtcbiAgICB2YXIgbmV3SGVpZ2h0ID0gZDMubWF4KGxldmVsV2lkdGgpICogMTAwO1xuXG4gICAgdmFyIHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbbmV3SGVpZ2h0LCB3aWR0aF0pO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguY29sbGFwc2VkKSB7XG4gICAgICByb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZS5jYWxsKHRoaXMsIHJvb3QpO1xuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuICAgICAgdmFyIHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgdmFyIG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4gZC55ID0gZC5kZXB0aCAqIDE4MCk7XG5cbiAgICAgIHZhciBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgdmFyIG8gPSB7IHg6IHNvdXJjZS54MCwgeTogc291cmNlLnkwIH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgdmFyIG8gPSB7IHg6IHNvdXJjZS54LCB5OiBzb3VyY2UueSB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC5kYXRhLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKVxuICAgICAgICAudGV4dChkID0+IGQuZGF0YS50aXRsZSk7XG5cbiAgICAgIHZhciBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIEdyYXBoLmFwcGx5RXZlbnRzKG5vZGUsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgIHZhciBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICBub2RlLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtcyBmbGF0IGRhdGEgaW50byB0cmVlIGRhdGEgYnkgYW5hbHlzaW5nIHRoZSBwYXJlbnRzIG9mIGVhY2ggbm9kZVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZGF0YSB0cmFuc2Zvcm1lZCBpbiB0cmVlIGRhdGFcbiAgICovXG4gIGdldCB0cmVlRGF0YSgpIHtcbiAgICB2YXIgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdO1xuICAgIHZhciBkYXRhTWFwID0gY2FudmFzTm9kZXMucmVkdWNlKGZ1bmN0aW9uKG1hcCwgbm9kZSkge1xuICAgICAgbWFwW25vZGUuaWRdID0gbm9kZTtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfSwge30pO1xuICAgIHZhciB0cmVlRGF0YSA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgdmFyIHBhcmVudCA9IGRhdGFNYXBbbm9kZS5wYXJlbnRdO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAocGFyZW50LmNoaWxkcmVuIHx8IChwYXJlbnQuY2hpbGRyZW4gPSBbXSkpLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdHJlZURhdGEucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZURhdGFbMF07XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VuZXJpY0dyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgc2ltdWxhdGlvbkFjdGl2ZSA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2ltdWxhdGlvbjtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICB2YXIgbGlua3MgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YSgpO1xuICAgIHZhciBsaW5rc1RvQWRkID0gW107XG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChsID0+IHtcbiAgICAgIHZhciBsaW5rID0gbGlua3MuZmluZChkID0+IGQuaWQgPT09IGwuaWQpO1xuICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgbGlua3NUb0FkZC5wdXNoKGxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxpbmtzVG9BZGQucHVzaChsKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEobGlua3NUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIHZhciBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVzID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEoKTtcbiAgICB2YXIgbm9kZXNUb0FkZCA9IFtdO1xuICAgIGNhbnZhc05vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVzLmZpbmQoZCA9PiBkLmlkID09PSBuLmlkKTtcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGVzVG9BZGQucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1RvQWRkLnB1c2gobik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKG5vZGVzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICBub2RlLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICBsaW5rLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA9PSAwICYmXG4gICAgICBsaW5rLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rJyk7XG5cbiAgICBsaW5rRW50ZXIuYXBwZW5kKCdsaW5lJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWVkZ2UnKTtcblxuICAgIGxpbmsuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsgbGluZS5mcmFuY3ktZWRnZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDUpKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LXN5bWJvbCcgKyAoZC5oaWdobGlnaHQgPyAnIGZyYW5jeS1oaWdobGlnaHQnIDogJycpICsgKE9iamVjdC52YWx1ZXMoZC5tZW51cykubGVuZ3RoID8gJyBmcmFuY3ktY29udGV4dCcgOiAnJykpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQudGl0bGUubGVuZ3RoICogMi41KSlcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAmJiAhbm9kZS5lbXB0eSgpKSB7XG5cbiAgICAgIEdyYXBoLmFwcGx5RXZlbnRzKG5vZGUsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNob3dOZWlnaGJvdXJzKSB7XG4gICAgICAgIHZhciBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgICBub2RlT25DbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgLy8gQ2FudmFzIEZvcmNlc1xuICAgICAgdmFyIGNlbnRlckZvcmNlID0gZDMuZm9yY2VDZW50ZXIoKS54KHdpZHRoIC8gMikueShoZWlnaHQgLyAyKTtcbiAgICAgIHZhciBtYW55Rm9yY2UgPSBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLWNhbnZhc05vZGVzLmxlbmd0aCAqIDUwKTtcbiAgICAgIHZhciBsaW5rRm9yY2UgPSBkMy5mb3JjZUxpbmsoY2FudmFzTGlua3MpLmlkKGQgPT4gZC5pZCkuZGlzdGFuY2UoNTApO1xuICAgICAgdmFyIGNvbGxpZGVGb3JjZSA9IGQzLmZvcmNlQ29sbGlkZShkID0+IGQuc2l6ZSAqIDIpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgod2lkdGggLyAyKS5zdHJlbmd0aCgwLjA1KTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGhlaWdodCAvIDIpLnN0cmVuZ3RoKDAuMjUpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnaGFzc2UnKSB7XG4gICAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgICBmb3JjZVggPSBkMy5mb3JjZVgod2lkdGggLyAyKS5zdHJlbmd0aCgwLjMpO1xuICAgICAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyIHRvIHNpbXVsYXRlIHRoZSBoYXNzZSBkaWFncmFtXG4gICAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA3NSkuc3RyZW5ndGgoMC43KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKS5ub2Rlcyhub2Rlc1RvQWRkKVxuICAgICAgICAuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJsaW5rXCIsIGxpbmtGb3JjZSlcbiAgICAgICAgLmZvcmNlKFwiY2VudGVyXCIsIGNlbnRlckZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAgIC5mb3JjZShcImNvbGxpZGVcIiwgY29sbGlkZUZvcmNlKVxuICAgICAgICAub24oJ3RpY2snLCB0aWNrZWQpXG4gICAgICAgIC5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vZm9yY2Ugc2ltdWxhdGlvbiByZXN0YXJ0XG4gICAgICBzaW11bGF0aW9uLmFscGhhKDAuNSkucmVzdGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIHdlbGwsIHNpbXVsYXRpb24gaXMgb2ZmLCBhcHBseSBmaXhlZCBwb3NpdGlvbnMgYW5kIHpvb20gdG8gZml0IG5vd1xuICAgICAgdGlja2VkKCk7XG4gICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlICYmIHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgUmVnaXN0ZXJNYXRoSmF4KHRoaXMuU1ZHUGFyZW50KTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZ3JhcGgtZ2VuZXJpYy5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVudXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIHZhciBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgdmFyIGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIHZhciByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICB2YXIgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpLmZvY3VzKCk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIGF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICB4LmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB9XG5cbiAgICB2YXIgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWJhcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1iYXItJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIGJhckVudGVyID0gYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KTtcblxuICAgICAgdmFyIGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1saW5lLSR7aW5kZXh9YCkuZGF0YShbZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHZhciBsaW5lRW50ZXIgPSBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZS0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuLy9pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgdmFyIG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIHZhciBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgfVxuICAgIC8vY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jYW52YXMuaWQpLCBcImRpYWdyYW0ucG5nXCIpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwodGhpcy5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG4gIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHZhciBjbHMgPSAnbnVtYmVyJztcbiAgICAgIGlmICgvXlwiLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ2Jvb2xlYW4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdudWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIHZhciBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dChcInhcIik7XG5cbiAgICBtZXNzYWdlRW50ZXIubWVyZ2UobWVzc2FnZSk7XG5cbiAgICBtZXNzYWdlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9