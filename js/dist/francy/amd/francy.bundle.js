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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
    return _this;
  }

  _createClass(Renderer, [{
    key: 'HTMLParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toUpperCase() === 'SVG' ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element;
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.options.appendTo.element.node().tagName.toUpperCase() === 'DIV' ? this.options.appendTo.element.select('svg') : this.options.appendTo.element;
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
exports.dontExecuteIfNoData = dontExecuteIfNoData;
function dontExecuteIfNoData(props) {
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
  if (obj && (obj instanceof Array && obj.length || obj instanceof Object && Object.values(obj).length)) {
    return true;
  }
  return false;
}

/***/ }),
/* 2 */
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

var Tooltip = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function (_Renderer) {
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

      var pos = d3.mouse(this.SVGParent.node());

      // TODO fix always visible tooltip, fine until someone complains about :P
      this.element.style('left', pos[0] + 'px').style('top', pos[1] + 'px');

      // check if it exists already
      if (this.element.selectAll('*').node()) {
        return;
      }

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

var _chartBar = __webpack_require__(16);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(17);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(18);

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

var Chart = (_dec = (0, _data.dontExecuteIfNoData)('canvas.chart'), (_class = function (_Renderer) {
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

      var element = undefined;
      switch (this.data.canvas.chart.type) {
        case "bar":
          element = new _chartBar2.default(this.options).load(this.data).render();
          break;
        case "line":
          element = new _chartLine2.default(this.options).load(this.data).render();
          break;
        case "scatter":
          element = new _chartScatter2.default(this.options).load(this.data).render();
          break;
      }

      return element;
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

var _logger = __webpack_require__(10);

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = __webpack_require__(11);

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

var _callback = __webpack_require__(7);

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
/* 7 */
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

var _modalRequired = __webpack_require__(15);

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

var CallbackHandler = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function (_Base) {
  _inherits(CallbackHandler, _Base);

  function CallbackHandler(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    return _possibleConstructorReturn(this, (CallbackHandler.__proto__ || Object.getPrototypeOf(CallbackHandler)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute() {
      if (Object.keys(this.data.callback.requiredArgs).length) {
        return new _modalRequired2.default(this.options).load(this.data, true).render();
      } else {
        // Trigger is the expected command on GAP for this events!
        return this.options.callbackHandler('Trigger(' + JSON.stringify(JSON.stringify(this.data.callback)) + ');');
      }
    }
  }]);

  return CallbackHandler;
}(_base2.default), (_applyDecoratedDescriptor(_class.prototype, 'execute', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'execute'), _class.prototype)), _class));
exports.default = CallbackHandler;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _frame = __webpack_require__(9);

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
      ALL_CANVAS[this.data.canvas.id] = frame.canvas;
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
    Object.values(ALL_CANVAS).forEach(function (canvas) {
      canvas.zoomToFit();
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
/* 9 */
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

var _canvas = __webpack_require__(12);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(19);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = __webpack_require__(22);

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

var Frame = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function (_Composite) {
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
    _this.element = undefined;
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var parent = d3.select(this.options.appendTo);

      var frameId = 'F' + this.data.canvas.id;
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
/* 10 */
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
/* 11 */
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
      if (!input) {
        return;
      }
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

var _graph = __webpack_require__(13);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(3);

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

var Canvas = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function (_Composite) {
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

      var canvasId = this.data.canvas.id;
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
        this.element.call(zoom).on("dblclick.zoom", null);
      }

      this.element.on("click", stopped, true);

      var self = this;
      this.element.zoomToFit = this.zoomToFit = function () {
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

          var scale = 0.75 / Math.max(width / fullWidth, height / fullHeight);
          var translateX = fullWidth / 2 - scale * midX,
              translateY = fullHeight / 2 - scale * midY;

          content.transition().duration(2000).attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ',' + scale + ')').on('end', function () {
            return updateZoom(translateX, translateY, scale);
          });
        }
      };

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

      this.logger.debug('Canvas updated [' + canvasId + ']...');

      this.renderChildren();

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
/* 13 */
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

var _menuContext = __webpack_require__(14);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(7);

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

var Graph = (_dec = (0, _data.dontExecuteIfNoData)('canvas.graph'), (_class = function (_Renderer) {
  _inherits(Graph, _Renderer);

  _createClass(Graph, null, [{
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

      var parent = this.options.appendTo.element;

      var dataChanged = false;
      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
          canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

      this.element = parent.select('g.francy-content');

      var width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      var link = linkGroup.selectAll('line.francy-link').data(canvasLinks);

      if (link.enter().data().length > 0 || link.enter().data().length > 0) {
        dataChanged = true;
      }

      link.exit().remove();

      link = link.enter().append('line').attr('class', 'francy-link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).attr('x1', function (d) {
        return d.source.x;
      }).attr('y1', function (d) {
        return d.source.y;
      }).attr('x2', function (d) {
        return d.target.x;
      }).attr('y2', function (d) {
        return d.target.y;
      }).merge(link);

      if (this.data.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      var node = nodeGroup.selectAll('path.francy-node').data(canvasNodes);

      if (node.exit().data().length > 0 || node.enter().data().length > 0) {
        dataChanged = true;
      }

      node.exit().remove();

      node = node.enter().append('path').merge(node).attr('d', d3.symbol().type(function (d) {
        return Graph.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')';
      }).style('fill', function (d) {
        return Graph.colors(d.layer * 5);
      }).attr('class', function (d) {
        return 'francy-node' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : '');
      }).attr('id', function (d) {
        return d.id;
      });

      if (this.data.canvas.graph.drag) {
        node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
      }

      node.on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.load(d, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on("mouseenter", function (d) {
        // default, show tooltip
        tooltip.load(d.messages, true).render();
      }).on("mouseleave", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      var labelGroup = this.element.selectAll('.francy-labels');

      if (!labelGroup.node()) {
        labelGroup = this.element.append('g').attr('class', 'francy-labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().remove();

      label = label.enter().append('text').merge(label).attr('class', 'francy-label').text(function (d) {
        return d.title;
      }).attr('x', function (d) {
        return d.x - d.title.length - Math.sqrt(d.size * d.title.length * 2);
      }).attr('y', function (d) {
        return d.y - Math.sqrt(d.size * 2);
      });

      label.on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.load(d, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      }).on('click', function (d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      }).on('dblclick', function (d) {
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      }).on("mouseover", function (d) {
        // default, show tooltip
        tooltip.load(d.messages, true).render();
      }).on("mouseout", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      if (this.data.canvas.graph.simulation && dataChanged) {
        // Canvas Forces
        var centerForce = d3.forceCenter().x(width / 2).y(height / 2);
        var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 30);
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
          forceX = d3.forceX(width / 2).strength(0.5);
          //Strong y positioning based on layer to simulate the hasse diagram
          forceY = d3.forceY(function (d) {
            return d.layer * 50;
          }).strength(5);
        }

        var simulation = d3.forceSimulation(canvasNodes).force("charge", manyForce).force("link", linkForce).force("center", centerForce).force("x", forceX).force("y", forceY).force("collide", collideForce).on('tick', ticked).on("end", function () {
          // zoom to fit when simulation is over
          parent.zoomToFit();
        });

        //force simulation restart
        simulation.restart();
      } else {
        // well, simulation is off, zoom to fit now
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

        label.attr('x', function (d) {
          return d.x - d.title.length - Math.sqrt(d.size * d.title.length * 2);
        }).attr('y', function (d) {
          return d.y - Math.sqrt(d.size * 2);
        });

        node.each(collide(1));
      }

      // COLLISION
      var padding = 10; // separation between circles;

      function collide(alpha) {
        var quadTree = d3.quadtree(canvasNodes);
        return function (d) {
          var rb = 100 * d.size + padding,
              nx1 = d.x - rb,
              nx2 = d.x + rb,
              ny1 = d.y - rb,
              ny2 = d.y + rb;
          quadTree.visit(function (quad, x1, y1, x2, y2) {
            if (quad.point && quad.point !== d) {
              var x = d.x - quad.point.x,
                  y = d.y - quad.point.y,
                  l = Math.sqrt(x * x + y * y);
              if (l < rb) {
                l = (l - rb) / l * alpha;
                d.x -= x *= l;
                d.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
        };
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
        if (!d3.event.active) {
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
        if (!d3.event.active) {
          simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      }

      function executeCallback(data, event) {
        if (data.callbacks) {
          Object.values(data.callbacks).forEach(function (cb) {
            // execute the ones that match the event!
            cb.trigger === event && callback.load({ callback: cb }).execute();
          });
        }
      }

      return this;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Graph;
}(_renderer2.default), (_applyDecoratedDescriptor(_class.prototype, 'render', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'render'), _class.prototype)), _class));
exports.default = Graph;

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

var _menu = __webpack_require__(6);

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

var ContextMenu = (_dec = (0, _data.dontExecuteIfNoData)('menus'), (_class = function (_Menu) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 Jupyter */

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
      try {
        Jupyter.keyboard_manager.register_events('.francy');
        Jupyter.keyboard_manager.register_events('.francy-arg');
        Jupyter.keyboard_manager.register_events('.francy-overlay');
        Jupyter.keyboard_manager.register_events('.francy-modal');
      } catch (e) {
        if (e.name == 'ReferenceError') {
          self.logger.debug('It seems we\'re not running on Jupyter...', e);
        }
      }

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

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

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
        var bar = barsGroup.selectAll('.francy-bar' + index).data(datasets[key]);

        bar.exit().remove();

        // append the rectangles for the bar chart
        bar.enter().append('rect').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-bar' + index).attr('x', function (d, i) {
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

        bar.merge(bar);
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

      parent.zoomToFit();

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

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

        var line = linesGroup.selectAll('.line' + index).data([datasets[key]]);

        line.exit().remove();

        // append the rectangles for the bar chart
        line.enter().append('path').style('stroke', function () {
          return _chart2.default.colors(index * 5);
        }).style('stroke-width', '5px').attr('class', 'francy-line' + index).attr('d', valueLine).on("mouseenter", function (d) {
          d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
          tooltip.load(_chart2.default.tooltip(key, d), true).render();
        }).on("mouseleave", function () {
          d3.select(this).transition().duration(250).style("stroke-opacity", 1).style('stroke-width', '5px');
          tooltip.unrender();
        });

        line.merge(line);
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

      parent.zoomToFit();

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

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = __webpack_require__(3);

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
        var scatter = scatterGroup.selectAll('.scatter' + index).data(datasets[key]);

        scatter.exit().remove();

        // append the rectangles for the bar chart
        scatter.enter().append('circle').style('fill', function () {
          return _chart2.default.colors(index * 5);
        }).attr('class', 'francy-scatter' + index).attr("r", 5).attr("cx", function (d, i) {
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

        scatter.merge(scatter);
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

      parent.zoomToFit();

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(6);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(20);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _saveSvgAsPng = __webpack_require__(21);

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
      if (this.data.canvas.zoomToFit) {
        content.append('li').append('a').on('click', function () {
          return _this2.options.appendTo.canvas.zoomToFit();
        }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      }
      content.append('li').append('a').on('click', function () {
        return SvgToPng.saveSvgAsPng(document.getElementById(_this2.data.canvas.id), "diagram.png");
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 Jupyter */

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
        this.element.remove();
        holder.remove();
        overlay.remove();
        event.preventDefault();
        return false;
      });

      // disable keyboard shortcuts when using this modal in Jupyter
      try {
        Jupyter.keyboard_manager.register_events('.francy');
        Jupyter.keyboard_manager.register_events('.francy-arg');
        Jupyter.keyboard_manager.register_events('.francy-overlay');
        Jupyter.keyboard_manager.register_events('.francy-modal');
      } catch (e) {
        if (e.name == 'ReferenceError') {
          self.logger.debug('It seems we\'re not running on Jupyter...', e);
        }
      }

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
/* 21 */
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

var Message = (_dec = (0, _data.dontExecuteIfNoData)('canvas.messages'), (_class = function (_Renderer) {
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
      // check if the window is already present
      if (!this.element.node()) {
        this.element = parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
      }

      var self = this;
      messages.map(function (d) {
        // only render new ones
        if (!self.element.select('div#' + d.id).node()) {
          var row = self.element.append('div').attr('id', d.id).attr('class', 'francy-alert alert-' + d.type).on('click', function () {
            d3.select(this).style('display', 'none');
          });
          row.append('span').attr('class', 'strong').text(d.title);
          row.append('span').text(d.text);
          row.append('span').attr('class', 'strong').style('display', 'none').text("x");
        }
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFjMWI0YTQ4ODQwOTJlZTQwMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci90b29sdGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJSZW5kZXJlciIsInZlcmJvc2UiLCJhcHBlbmRUbyIsImNhbGxiYWNrSGFuZGxlciIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInJlbmRlciIsInVuZGVmaW5lZCIsInVucmVuZGVyIiwibG9nZ2VyIiwiZGVidWciLCJlbGVtZW50Iiwib3B0aW9ucyIsIm5vZGUiLCJ0YWdOYW1lIiwidG9VcHBlckNhc2UiLCJkMyIsInNlbGVjdCIsInBhcmVudE5vZGUiLCJkb250RXhlY3V0ZUlmTm9EYXRhIiwicHJvcHMiLCJkZWNvcmF0b3IiLCJuYW1lIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwidmFsdWUiLCJoYXNEYXRhIiwiZ2V0UHJvcGVydHkiLCJkYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJvYmoiLCJwcm9wZXJ0eVBhdGgiLCJ0bXAiLCJwcm9wZXJ0aWVzIiwic3BsaXQiLCJwcm9wZXJ0eSIsImhhc093blByb3BlcnR5IiwiQXJyYXkiLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsImFwcGVuZCIsImF0dHIiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInN0eWxlIiwic2VsZWN0QWxsIiwidGFibGUiLCJzZWxmIiwia2V5cyIsIm1hcCIsImtleSIsInJvdyIsInRleHQiLCJ0aXRsZSIsInJlbW92ZSIsIkNoYXJ0IiwiY2FudmFzIiwiY2hhcnQiLCJ0eXBlIiwibG9hZCIsImRhdGFzZXQiLCJtYXgiLCJmcm9tIiwiXyIsImkiLCJ4Iiwic2NhbGVTZXF1ZW50aWFsIiwiZG9tYWluIiwiaW50ZXJwb2xhdG9yIiwiaW50ZXJwb2xhdGVSYWluYm93IiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwic2V0dGluZ3MiLCJCYXNlIiwibG9nIiwiRXJyb3IiLCJqc29uIiwicGFydGlhbCIsInBhcnNlIiwiTWVudSIsIm1lbnVzSXRlcmF0b3IiLCJoYXNOZXh0IiwibWVudUl0ZW0iLCJuZXh0IiwiZW50cnkiLCJhY3Rpb24iLCJlbnRlciIsImh0bWwiLCJjYWxsYmFjayIsIm9uIiwiZCIsImV4ZWN1dGUiLCJtZW51cyIsImNvbnRlbnQiLCJzdWJNZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJ0cmF2ZXJzZSIsImFycmF5IiwibmV4dEluZGV4IiwiQ2FsbGJhY2tIYW5kbGVyIiwicmVxdWlyZWRBcmdzIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJmcmFtZSIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsIm9ucmVzaXplIiwiZm9yRWFjaCIsInpvb21Ub0ZpdCIsImUiLCJGcmFtZSIsIm1lbnUiLCJtZXNzYWdlcyIsImFkZCIsInBhcmVudCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiSnNvblV0aWxzIiwiaW5wdXQiLCJyZXBsYWNlIiwianNvblJlZ2V4IiwibWF0Y2giLCJleGVjIiwibWltZSIsIk1JTUUiLCJDYW52YXMiLCJncmFwaCIsImNhbnZhc0lkIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJib3VuZHMiLCJnZXRCQm94IiwiY2xpZW50Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZnVsbFdpZHRoIiwicmlnaHQiLCJsZWZ0IiwiZnVsbEhlaWdodCIsImJvdHRvbSIsInRvcCIsIm1pZFgiLCJtaWRZIiwieSIsInNjYWxlIiwiTWF0aCIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidXBkYXRlWm9vbSIsInRyYW5zZm9ybSIsInpvb21JZGVudGl0eSIsInRyYW5zbGF0ZSIsImV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsIkdyYXBoIiwic3ltYm9sQ2lyY2xlIiwic3ltYm9sQ3Jvc3MiLCJzeW1ib2xEaWFtb25kIiwic3ltYm9sU3F1YXJlIiwic3ltYm9sVHJpYW5nbGUiLCJzeW1ib2xTdGFyIiwic3ltYm9sV3llIiwiZGF0YUNoYW5nZWQiLCJ0b29sdGlwIiwiY29udGV4dE1lbnUiLCJjYW52YXNOb2RlcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsImxpbmtHcm91cCIsImxpbmsiLCJleGl0Iiwic291cmNlIiwibWVyZ2UiLCJub2RlR3JvdXAiLCJzeW1ib2wiLCJnZXRTeW1ib2wiLCJzaXplIiwiY29sb3JzIiwibGF5ZXIiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiZXhlY3V0ZUNhbGxiYWNrIiwiY29ubmVjdGVkTm9kZXMiLCJsYWJlbEdyb3VwIiwibGFiZWwiLCJzcXJ0Iiwic2ltdWxhdGlvbiIsImNlbnRlckZvcmNlIiwiZm9yY2VDZW50ZXIiLCJtYW55Rm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJsaW5rRm9yY2UiLCJmb3JjZUxpbmsiLCJkaXN0YW5jZSIsImNvbGxpZGVGb3JjZSIsImZvcmNlQ29sbGlkZSIsImZvcmNlWCIsImZvcmNlWSIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwidGlja2VkIiwicmVzdGFydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwicHJldmVudERlZmF1bHQiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsImZ4IiwiZnkiLCJjYWxsYmFja3MiLCJjYiIsInRyaWdnZXIiLCJDb250ZXh0TWVudSIsIlJlcXVpcmVkQXJnc01vZGFsIiwibW9kYWxJZCIsIm92ZXJsYXkiLCJob2xkZXIiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJmb290ZXIiLCJjaGVja1ZhbGlkaXR5IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJmb2N1cyIsIkJhckNoYXJ0IiwiYXhpcyIsImRhdGFzZXRzIiwiZGF0YXNldE5hbWVzIiwibWFyZ2luIiwic2NhbGVCYW5kIiwicmFuZ2UiLCJzY2FsZUxpbmVhciIsImNvbmNhdCIsImRvbWFpblJhbmdlIiwiYmFyc0dyb3VwIiwiYmFyIiwiYmFuZHdpZHRoIiwieEF4aXNHcm91cCIsImF4aXNCb3R0b20iLCJ5QXhpc0dyb3VwIiwiYXhpc0xlZnQiLCJsZWdlbmRHcm91cCIsImxlZ2VuZCIsInNsaWNlIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIiwiU3ZnVG9QbmciLCJNYWluTWVudSIsImFib3V0TW9kYWwiLCJtZW51SWQiLCJzYXZlU3ZnQXNQbmciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0Iiwib3V0JCIsImRvY3R5cGUiLCJpc0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJyZXF1aXJlRG9tTm9kZSIsImVsIiwiaXNFeHRlcm5hbCIsInVybCIsImxhc3RJbmRleE9mIiwibG9jYXRpb24iLCJob3N0IiwiaW5saW5lSW1hZ2VzIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrRG9uZSIsImltYWdlIiwiaHJlZiIsImdldEF0dHJpYnV0ZU5TIiwid2FybiIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiaW1nIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsImdldEF0dHJpYnV0ZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNldEF0dHJpYnV0ZU5TIiwidG9EYXRhVVJMIiwib25lcnJvciIsInN0eWxlcyIsImNzc0xvYWRlZENhbGxiYWNrIiwic2VsZWN0b3JSZW1hcCIsIm1vZGlmeVN0eWxlIiwiY3NzIiwiZm9udHNRdWV1ZSIsInNoZWV0cyIsInN0eWxlU2hlZXRzIiwicnVsZXMiLCJjc3NSdWxlcyIsImoiLCJydWxlIiwic2VsZWN0b3JUZXh0IiwiZXJyIiwicXVlcnlTZWxlY3RvciIsInNlbGVjdG9yIiwiY3NzVGV4dCIsImZvbnRVcmxSZWdleHAiLCJmb250VXJsTWF0Y2giLCJleHRlcm5hbEZvbnRVcmwiLCJmb250VXJsSXNEYXRhVVJJIiwic3RhcnRzV2l0aCIsImZvcm1hdCIsImdldEZvbnRNaW1lVHlwZUZyb21VcmwiLCJwcm9jZXNzRm9udFF1ZXVlIiwiZm9udFVybCIsInN1cHBvcnRlZEZvcm1hdHMiLCJleHRlbnNpb25zIiwiZXh0ZW5zaW9uIiwiaW5kZXhPZiIsInF1ZXVlIiwiZm9udCIsInBvcCIsInByb2Nlc3NOZXh0Iiwib1JlcSIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvbnRMb2FkZWQiLCJ0cmFuc2ZlckZhaWxlZCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJzZW5kIiwiZm9udEJpdHMiLCJyZXNwb25zZSIsImZvbnRJbkJhc2U2NCIsImFycmF5QnVmZmVyVG9CYXNlNjQiLCJ1cGRhdGVGb250U3R5bGUiLCJkYXRhVXJsIiwic2V0VGltZW91dCIsImJ1ZmZlciIsImJpbmFyeSIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJ5dGVMZW5ndGgiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJidG9hIiwiZ2V0RGltZW5zaW9uIiwiY2xvbmUiLCJkaW0iLCJ2Iiwidmlld0JveCIsImJhc2VWYWwiLCJwYXJzZUludCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwicmVFbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwMSIsImMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwcmVwYXJlU3ZnIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJzIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3ZnIiwiZGVmaW5lIiwiTWVzc2FnZSIsImFsZXJ0c0lkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFD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Q3BFaEYsZUFBR0MsTUFBSCxDQUFVLElBQVYsRUFBZ0JnQyxLQUFoQixDQUFzQixTQUF0QixFQUFpQyxNQUFqQztBQUNELFdBSE8sQ0FBVjtBQUlBTyxjQUFJWixNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsUUFBakMsRUFBMkNZLElBQTNDLENBQWdEd0MsRUFBRXZDLEtBQWxEO0FBQ0FGLGNBQUlaLE1BQUosQ0FBVyxNQUFYLEVBQW1CYSxJQUFuQixDQUF3QndDLEVBQUV4QyxJQUExQjtBQUNBRCxjQUFJWixNQUFKLENBQVcsTUFBWCxFQUFtQkMsSUFBbkIsQ0FBd0IsT0FBeEIsRUFBaUMsUUFBakMsRUFBMkNJLEtBQTNDLENBQWlELFNBQWpELEVBQTRELE1BQTVELEVBQW9FUSxJQUFwRSxDQUF5RSxHQUF6RTtBQUNEO0FBQ0YsT0FYRDs7QUFhQSxXQUFLOUMsT0FBTCxDQUFhc0MsS0FBYixDQUFtQixTQUFuQixFQUE4QixPQUE5Qjs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVVLENBQUU7Ozs7O2tCQTdDTTBiLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUxYzFiNGE0ODg0MDkyZWU0MDM3IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU1ZHJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdESVYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJleHBvcnQgZnVuY3Rpb24gZG9udEV4ZWN1dGVJZk5vRGF0YShwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWhhc0RhdGEoZ2V0UHJvcGVydHkodGhpcy5kYXRhLCBwcm9wcykpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBObyBkYXRhIGhlcmUgWyR7cHJvcHN9XSwgbm90aGluZyB0byByZW5kZXIuLi4gY29udGludWluZy4uLmApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gb2xkVmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgcHJvcGVydHlQYXRoKSB7XG5cbiAgdmFyIHRtcCA9IG9iajtcblxuICBpZiAodG1wICYmIHByb3BlcnR5UGF0aCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gcHJvcGVydHlQYXRoLnNwbGl0KCcuJyk7XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoIXRtcC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgdG1wID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0bXAgPSB0bXBbcHJvcGVydHldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bXA7XG59XG5cbmZ1bmN0aW9uIGhhc0RhdGEob2JqKSB7XG4gIGlmIChvYmogJiYgKChvYmogaW5zdGFuY2VvZiBBcnJheSAmJiBvYmoubGVuZ3RoKSB8fCAob2JqIGluc3RhbmNlb2YgT2JqZWN0ICYmIE9iamVjdC52YWx1ZXMob2JqKS5sZW5ndGgpKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZWNvcmF0b3IvZGF0YS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAZG9udEV4ZWN1dGVJZk5vRGF0YSgpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyAncHgnKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAZG9udEV4ZWN1dGVJZk5vRGF0YSgnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICBlbGVtZW50ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2NhdHRlclwiOlxuICAgICAgICBlbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmxvYWQoZCwgdHJ1ZSkuZXhlY3V0ZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICB2YXIgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS5qcyIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgUmVxdWlyZWRBcmdzTW9kYWwgZnJvbSAnLi9tb2RhbC1yZXF1aXJlZCc7XG5pbXBvcnQgeyBkb250RXhlY3V0ZUlmTm9EYXRhIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGRvbnRFeGVjdXRlSWZOb0RhdGEoKVxuICBleGVjdXRlKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gVHJpZ2dlciBpcyB0aGUgZXhwZWN0ZWQgY29tbWFuZCBvbiBHQVAgZm9yIHRoaXMgZXZlbnRzIVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuY2FsbGJhY2spKX0pO2ApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jYWxsYmFjay5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuXG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lLmNhbnZhcztcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIHZhciBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lc3NhZ2VzKS5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBmcmFtZUlkID0gYEYke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBjYW52YXNJZCA9IHRoaXMuZGF0YS5jYW52YXMuaWQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTtcblxuICAgIHZhciBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgdmFyIGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIHZhciBzY2FsZSA9IDAuNzUgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgc2VsZi5lbGVtZW50LmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGRvbnRFeGVjdXRlSWZOb0RhdGEoJ2NhbnZhcy5ncmFwaCcpXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBkYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubGlua3MpIDogW107XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmtzJyk7XG5cbiAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICB9XG5cbiAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2xpbmUuZnJhbmN5LWxpbmsnKS5kYXRhKGNhbnZhc0xpbmtzKTtcblxuICAgIGlmIChsaW5rLmVudGVyKCkuZGF0YSgpLmxlbmd0aCA+IDAgfHwgbGluay5lbnRlcigpLmRhdGEoKS5sZW5ndGggPiAwKSB7XG4gICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGluay5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KVxuICAgICAgLm1lcmdlKGxpbmspO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBpZiAobm9kZS5leGl0KCkuZGF0YSgpLmxlbmd0aCA+IDAgfHwgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPiAwKSB7XG4gICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZS5lbnRlcigpLmFwcGVuZCgncGF0aCcpLm1lcmdlKG5vZGUpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1ub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5kcmFnKSB7XG4gICAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKTtcbiAgICB9XG5cbiAgICBub2RlLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgYnVpbGQgY29udGV4dCBtZW51XG4gICAgICAgIGNvbnRleHRNZW51LmxvYWQoZCwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBkID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlkZSB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVscycpO1xuXG4gICAgaWYgKCFsYWJlbEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGFiZWxHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWxzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxhYmVsID0gbGFiZWxHcm91cC5zZWxlY3RBbGwoJ3RleHQnKS5kYXRhKGNhbnZhc05vZGVzKTtcblxuICAgIGxhYmVsLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxhYmVsID0gbGFiZWwuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKS5tZXJnZShsYWJlbClcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIGQudGl0bGUubGVuZ3RoICogMikpXG4gICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIDIpKTtcblxuICAgIGxhYmVsXG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnZGJsY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZCA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLmxvYWQoZC5tZXNzYWdlcywgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uICYmIGRhdGFDaGFuZ2VkKSB7XG4gICAgICAvLyBDYW52YXMgRm9yY2VzXG4gICAgICB2YXIgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngod2lkdGggLyAyKS55KGhlaWdodCAvIDIpO1xuICAgICAgdmFyIG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogMzApO1xuICAgICAgdmFyIGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICB2YXIgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplICogMik7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuNSk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCg1KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oY2FudmFzTm9kZXMpXG4gICAgICAgIC5mb3JjZShcImNoYXJnZVwiLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZShcImxpbmtcIiwgbGlua0ZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJjZW50ZXJcIiwgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24ucmVzdGFydCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIHdlbGwsIHNpbXVsYXRpb24gaXMgb2ZmLCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUgKiBkLnRpdGxlLmxlbmd0aCAqIDIpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIDIpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMTA7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMTAwICogZC5zaXplICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHtcbiAgICAgICAgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjAxKS5yZXN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0pLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9ncmFwaC5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBkb250RXhlY3V0ZUlmTm9EYXRhIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGRvbnRFeGVjdXRlSWZOb0RhdGEoJ21lbnVzJylcbiAgcmVuZGVyKCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG5cbiAgICB2YXIgcG9zID0gZDMubW91c2UodGhpcy5TVkdQYXJlbnQubm9kZSgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArIDUgKyAncHgnKS5zdHlsZSgndG9wJywgcG9zWzFdICsgNSArICdweCcpO1xuXG4gICAgLy8gc2hvdyB0aGUgY29udGV4dCBtZW51XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXModGhpcy5kYXRhLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIHZhciBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICB2YXIgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgdmFyIGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7IH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIHRyeSB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5Jyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LWFyZycpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeS1vdmVybGF5Jyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW1vZGFsJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKS5mb2N1cygpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyLm1lcmdlKGJhcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5lcycpO1xuXG4gICAgaWYgKCFsaW5lc0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluZXMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgdmFsdWVMaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xuXG4gICAgICB2YXIgbGluZSA9IGxpbmVzR3JvdXAuc2VsZWN0QWxsKGAubGluZSR7aW5kZXh9YCkuZGF0YShbZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZUxpbmUpXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxMHB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBsaW5lLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIHBhcmVudC56b29tVG9GaXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLnNjYXR0ZXIke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMTApO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgNSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgc2NhdHRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICBwYXJlbnQuem9vbVRvRml0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtc2NhdHRlci5qcyIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0JztcbmltcG9ydCAqIGFzIFN2Z1RvUG5nIGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gT3RoZXJ3aXNlIGNsYXNoZXMgd2l0aCB0aGUgY2FudmFzIGl0c2VsZiFcbiAgICB2YXIgbWVudUlkID0gYE1haW5NZW51LSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBGb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCd1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwodGhpcy5kYXRhLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKTtcbiAgICBlbnRyeS5hcHBlbmQoJ2EnKS5odG1sKCdGcmFuY3knKTtcbiAgICB2YXIgY29udGVudCA9IGVudHJ5LmFwcGVuZCgndWwnKTtcbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy56b29tVG9GaXQpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMub3B0aW9ucy5hcHBlbmRUby5jYW52YXMuem9vbVRvRml0KCkpLmF0dHIoJ3RpdGxlJywgJ1pvb20gdG8gRml0JykuaHRtbCgnWm9vbSB0byBGaXQnKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jYW52YXMuaWQpLCBcImRpYWdyYW0ucG5nXCIpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwodGhpcy5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3knKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbiAgc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xuICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ251bGwnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCkgfHwgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZSB1cmwgaWYgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLi4vJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYmxvYiA9IHVyaVRvQmxvYih1cmkpO1xuICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgc2F2ZUxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCBVUkxzLiBGYWxsaW5nIGJhY2sgdG8gc3RyaW5nIFVSTC4nKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbWVzc2FnZXMubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgIC8vIG9ubHkgcmVuZGVyIG5ldyBvbmVzXG4gICAgICBpZiAoIXNlbGYuZWxlbWVudC5zZWxlY3QoYGRpdiMke2QuaWR9YCkubm9kZSgpKSB7XG4gICAgICAgIHZhciByb3cgPSBzZWxmLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQuaWQpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQudGl0bGUpO1xuICAgICAgICByb3cuYXBwZW5kKCdzcGFuJykudGV4dChkLnRleHQpO1xuICAgICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoXCJ4XCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=