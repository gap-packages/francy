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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(4);

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
      throw new TypeError('Must override [render(json)] method!');
    }
    if (_this.unrender === undefined) {
      _this.logger.debug('No [unrender()] method specified...');
    }
    return _this;
  }

  _createClass(Renderer, [{
    key: 'HTMLParent',
    get: function get() {
      return d3.select(this.options.appendTo.node().parentNode);
    }
  }, {
    key: 'SVGParent',
    get: function get() {
      return this.options.appendTo;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'Francy[Window|Canvas|Object|Menu]-*hex uuid*'
 */
var IDUtils = function () {
  function IDUtils() {
    _classCallCheck(this, IDUtils);
  }

  _createClass(IDUtils, null, [{
    key: "getWindowId",


    /**
     * Returns the id for a window based on a canvas id.
     * @param canvasId - the canvas id
     * @returns {string} the window element id.
     */
    value: function getWindowId(canvasId) {
      return "FrancyWindow-" + canvasId;
    }

    /**
     * Returns the id for a canvas based on a canvas id.
     * @param canvasId - the canvas id
     * @returns {string} the canvas element id.
     */

  }, {
    key: "getCanvasId",
    value: function getCanvasId(canvasId) {
      return "FrancyCanvas-" + canvasId;
    }

    /**
     * Returns the id for an object based on a object id.
     * @param objectId - the object id
     * @returns {string} the element object id.
     */

  }, {
    key: "getObjectId",
    value: function getObjectId(objectId) {
      return "FrancyObject-" + objectId;
    }

    /**
     * Returns the id for an object based on a object id.
     * @param menuId - the menu id
     * @returns {string} the element object id.
     */

  }, {
    key: "getMenuId",
    value: function getMenuId(menuId) {
      return "FrancyMenu-" + menuId;
    }
  }]);

  return IDUtils;
}();

exports.default = IDUtils;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Tooltip = function (_Renderer) {
  _inherits(Tooltip, _Renderer);

  function Tooltip(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.tooltip = _this.SVGParent.select('foreignObject.francy-tooltip-holder');
    // check if the window is already present
    if (!_this.tooltip.node()) {
      _this.tooltip = _this.SVGParent.append('foreignObject').attr('class', 'francy-tooltip-holder');
    }
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render(object) {

      // just ignore rendering if no info are present
      if (!object || !Object.values(object).length) {
        //this.logger.debug('Nothing to render here... continuing...');
        return;
      }

      // TODO fix always visible tooltip, fine until someone complains about :P
      this.tooltip.attr('transform', 'translate(' + (d3.event.offsetX + 5) + ',' + (d3.event.offsetY + 5) + ')');

      // check if it exists already
      if (this.tooltip.selectAll('*').node()) {
        return;
      }

      var table = this.tooltip.append('xhtml:div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
      Object.keys(object).map(function (key) {
        var row = table.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').text(key);
        row.append('div').attr('class', 'francy-table-cell').text(object[key]);
      });

      // show tooltip
      this.tooltip.style('display', 'block');
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.tooltip.selectAll('*').remove();
      this.tooltip.style('display', null);
    }
  }]);

  return Tooltip;
}(_renderer2.default);

exports.default = Tooltip;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = __webpack_require__(17);

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = __webpack_require__(18);

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = __webpack_require__(19);

var _chartScatter2 = _interopRequireDefault(_chartScatter);

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

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render(json) {

      if (!json.canvas.chart) {
        return;
      }

      var element = undefined;
      switch (json.canvas.chart.type) {
        case "bar":
          element = new _chartBar2.default(this.options).render(json);
          break;
        case "line":
          element = new _chartLine2.default(this.options).render(json);
          break;
        case "scatter":
          element = new _chartScatter2.default(this.options).render(json);
          break;
      }

      return element;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }], [{
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(11);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Base);

    /**
     * @type {Object}
     */
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    /**
     * @type {Logger}
     */
    this.logger = new _logger2.default(this.options);
  }

  _createClass(Base, [{
    key: 'update',
    value: function update(_ref2) {
      var _ref2$verbose = _ref2.verbose,
          verbose = _ref2$verbose === undefined ? false : _ref2$verbose,
          appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler;

      this.options = {
        verbose: verbose,
        appendTo: appendTo,
        callbackHandler: callbackHandler
      };
      return this;
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = __webpack_require__(6);

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
            return new _callback2.default(_this2.options).execute(d);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(4);

var _base2 = _interopRequireDefault(_base);

var _modalRequired = __webpack_require__(13);

var _modalRequired2 = _interopRequireDefault(_modalRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CallbackHandler = function (_Base) {
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
    value: function execute(config) {
      if (Object.keys(config.callback.requiredArgs).length) {
        return new _modalRequired2.default(this.options).render(config);
      } else {
        return this.options.callbackHandler(config.callback);
      }
    }
  }]);

  return CallbackHandler;
}(_base2.default);

exports.default = CallbackHandler;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(8);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _canvas = __webpack_require__(9);

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = __webpack_require__(12);

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = __webpack_require__(15);

var _graph2 = _interopRequireDefault(_graph);

var _chart = __webpack_require__(3);

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 * francy.render(json);
 */

var Francy = function () {

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

    if (!callbackHandler) {
      throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
    }
    if (!appendTo) {
      throw new Error('Missing an element or id to append the graphics to...!');
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling render passing a json representation string will 
   * trigger the drawing of a json object.
   * @param {String} input a json string/object render
   * @returns {Object} the element created
   */


  _createClass(Francy, [{
    key: 'render',
    value: function render(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        var canvas = new _canvas2.default(this.options);
        var menu = new _menuMain2.default(this.options);
        var graph = new _graph2.default(this.options);
        var chart = new _chart2.default(this.options);
        canvas.add(menu);
        canvas.add(graph);
        canvas.add(chart);
        var element = canvas.render(json);
        ALL_CANVAS[_idUtils2.default.getCanvasId(json.canvas.id)] = element;
        return element.node();
      }
    }
  }, {
    key: 'unrender',
    value: function unrender(id) {
      delete ALL_CANVAS[id];
    }
  }]);

  return Francy;
}();

exports.default = Francy;


try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  window.onresize = function () {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function (canvas) {
      canvas.zoomToFit();
    });
    // adjust top menus on resize
    d3.selectAll('foreignObject.francy-main-menu-holder').attr('width', '100%');
  };
} catch (e) {
  exports.Francy = Francy;
}

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
    value: function parse(input) {
      input = typeof input !== "string" ? JSON.stringify(input) : input;
      input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        try {
          var json = JSON.parse(input);
          return json.mime === 'application/vnd.francy+json' ? json : undefined;
        } catch (e) {
          /* eslint-disable no-console */
          console.error(e);
          /* eslint-enable no-console */
        }
      }
      return undefined;
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _composite = __webpack_require__(10);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Canvas = function (_Composite) {
  _inherits(Canvas, _Composite);

  function Canvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Canvas, [{
    key: 'render',
    value: function render(json) {
      var parent = d3.select(this.options.appendTo);

      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = parent.append('svg').attr('id', canvasId).attr('class', 'francy francy-canvas');
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

      var zoom = d3.zoom();

      var content = canvas.select('g.francy-content');

      if (!content.node()) {
        content = canvas.append('g').attr('class', 'francy-content');
        zoom.on("zoom", zoomed);
        canvas.call(zoom).on("dblclick.zoom", null); //.transform, d3.zoomIdentity);
      }

      canvas.on("click", stopped, true);

      canvas.zoomToFit = function () {
        var bounds = content.node().getBBox();

        var fullWidth = canvas.node().clientWidth,
            fullHeight = canvas.node().clientHeight + 45; //well, the menu is part of the canvas +-40px

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
      };

      function updateZoom(translateX, translateY, scale) {
        canvas.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
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

      this.renderChildren(canvas, json);

      return canvas;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(parent, json) {
      // update children rendering with a new parent if required!
      var childrenOptions = this.options;
      if (parent) {
        childrenOptions.appendTo = parent;
      }
      // render other components
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.renderers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var renderer = _step.value;

          renderer.update(childrenOptions).render(json);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var singleton = null;

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

    if (!singleton) {
      this.verbose = verbose;
      this.console = console;
      singleton = this;
    } else {
      return singleton;
    }
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = __webpack_require__(14);

var _modalAbout2 = _interopRequireDefault(_modalAbout);

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

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
    value: function render(json) {
      var _this2 = this;

      var parent = this.options.appendTo;

      var aboutModal = new _modalAbout2.default(this.options);

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = d3.select('#' + menuId);

      // Check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        menu = parent.append('foreignObject').attr('transform', 'translate(0,0)').attr('class', 'francy-main-menu-holder').attr('id', menuId);
      }

      // Force rebuild menu again
      menu.selectAll('*').remove();

      menu = menu.append('xhtml:ul').attr('class', 'francy-main-menu');

      if (json.canvas.title) {
        menu.append('li').attr('class', 'francy-title').append('a').html(json.canvas.title);
      }

      var entry = menu.append('li');
      entry.append('a').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').on('click', function () {
        return parent.zoomToFit();
      }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
      content.append('li').append('a').on('click', function () {
        return _this2.logger.info('Save to PNG pressed... Not Implemented!');
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').on('click', function () {
        return aboutModal.render(json);
      }).attr('title', 'About').html('About');

      // Traverse all menus and flatten them!
      var menusIterator = this.iterator(Object.values(json.canvas.menus));
      this.traverse(menu, menusIterator);

      this.logger.debug('Main Menu updated [' + menuId + ']...');

      return menu;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return MainMenu;
}(_menu2.default);

exports.default = MainMenu;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(1);

var _idUtils2 = _interopRequireDefault(_idUtils);

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
    value: function render(json) {
      var self = this;

      var modalId = _idUtils2.default.getWindowId(json.callback.id);

      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      // we want to overlay everything, hence 'body' must be used
      var overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      var headerTitle = header.append('span').html('Required arguments&nbsp;');
      if (json.title) {
        headerTitle.append('span').attr('style', 'font-weight: bold;').text('for ' + json.title);
      }

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          var row = content.append('div').attr('class', 'francy-table-row');
          row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
          var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            json.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          // wait, if it is boolean we create a checkbox
          if (arg.type === 'boolean') {
            // well, a checkbox works this way so we need to initialize 
            // the value to false and update the value based on the checked 
            // property that triggers the onchange event
            arg.value = arg.value || false;
            input.attr('type', 'checkbox').attr('required', null).attr('value', arg.value).on('change', function () {
              json.callback.requiredArgs[this.id].value = this.value = this.checked;
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
          self.options.callbackHandler(json.callback);
          overlay.remove();
          modal.remove();
          holder.remove();
          event.preventDefault();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        event.preventDefault();
        overlay.remove();
        modal.remove();
        holder.remove();
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

      return modal;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return RequiredArgsModal;
}(_renderer2.default);

exports.default = RequiredArgsModal;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    value: function render(json) {
      var modalId = 'AboutModalWindow';

      this.logger.debug('Creating About Modal [' + modalId + ']...');

      // we want to overlay everything, hence 'body' must be used
      var overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', modalId).attr('class', 'francy-modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'francy-modal-header');

      header.append('span').html('About Francy v' + json.version);

      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      content.append('span').text('Loaded Object:');
      content.append('pre').attr('class', 'francy').html(this.syntaxHighlight(JSON.stringify(json.canvas, null, 2)));
      content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

      var footer = form.append('div').attr('class', 'francy-modal-footer');

      footer.append('button').text('Ok').on('click', function () {
        modal.remove();
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

      return modal;
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = __webpack_require__(0);

var _renderer2 = _interopRequireDefault(_renderer);

var _menuContext = __webpack_require__(16);

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = __webpack_require__(6);

var _callback2 = _interopRequireDefault(_callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Graph = function (_Renderer) {
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
    value: function render(json) {

      // just ignore rendering if no graph is present
      if (!json.canvas.graph) {
        this.logger.debug('No Graph to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);
      var contextMenu = new _menuContext2.default(this.options);
      var callback = new _callback2.default(this.options);

      var parent = this.options.appendTo;

      var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
          canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

      var svg = parent.select('g.francy-content'),
          width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
          height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

      //Generic gravity for the X position
      var forceX = d3.forceX(-500).strength(0.35);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      var forceY = d3.forceY(500).strength(0.35);

      if (json.canvas.graph.type === 'hasse') {
        //Strong y positioning based on layer to simulate the hasse diagram
        forceY = d3.forceY(function (d) {
          return d.layer * (d.size * 5);
        }).strength(1);
      }

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      }).strength(0.001)).force('charge', d3.forceManyBody().strength(-250)).force('collide', d3.forceCollide(function (d) {
        return d.size;
      })).force('x', forceX).force('y', forceY).force('center', d3.forceCenter(width / 2, height / 2)).on("end", function () {
        // zoom to fit when simulation is over
        parent.zoomToFit();
      });

      var linkGroup = svg.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'francy-links');
      }

      var link = linkGroup.selectAll('line.francy-link').data(canvasLinks);

      link.exit().remove();

      link = link.enter().append('line').attr('class', 'francy-link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).merge(link);

      if (json.canvas.graph.type === 'directed') {
        // this means we need arrows, so we append the marker
        parent.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'francy-arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
        // update the style of the link
        link.style('marker-end', 'url(#arrow)');
      }

      var nodeGroup = svg.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = svg.append('g').attr('class', 'francy-nodes');
      }

      var node = nodeGroup.selectAll('path.francy-node').data(canvasNodes);

      node.exit().remove();

      node = node.enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Graph.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'francy-node' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : '');
      }).attr('id', function (d) {
        return d.id;
      }).merge(node);

      node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)).on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.render(d);
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
        tooltip.render(d.info);
      }).on("mouseout", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      var labelGroup = svg.selectAll('.francy-labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'francy-labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes);

      label.exit().remove();

      label = label.enter().append('text').attr('class', 'francy-label').text(function (d) {
        return d.title;
      }).merge(label);

      label.on('contextmenu', function (d) {
        // default, build context menu
        contextMenu.render(d);
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
        tooltip.render(d.info);
      }).on("mouseout", function () {
        // default, hide tooltip
        tooltip.unrender();
      });

      var legendGroup = parent.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = parent.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values().sort(function (a, b) {
        return a.layer > b.layer;
      }), function (d) {
        return d.id;
      });

      legend.exit().remove();

      legend = legend.enter().append('g').attr('id', function (d) {
        return 'legendLayer' + d.id;
      }).attr('transform', function (d, i) {
        return 'translate(' + 10 + ',' + (i + 5) * 12 + ')';
      }).merge(legend);

      legend.append('rect').attr('width', 10).attr('height', 8).style('fill', function (d) {
        return Graph.colors(d.layer * 6);
      }).style('stroke', function (d) {
        return Graph.colors(d.layer * 6);
      });

      legend.append('text').attr('style', 'font-size: 10px;').attr('x', 10 + 5).attr('y', 10 - 2).text(function (d) {
        return 'Index ' + d.layer;
      });

      simulation.nodes(canvasNodes).on('tick', ticked);
      simulation.force('link').links(canvasLinks);

      //force simulation restart
      simulation.alpha(1).restart();

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

        node.style('fill', function (d) {
          return Graph.colors(d.layer * 5);
        }).attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });

        label.attr('x', function (d) {
          return d.x - d.title.length - Math.sqrt(d.size * d.title.length * 2);
        }).attr('y', function (d) {
          return d.y - Math.sqrt(d.size * 2);
        });

        node.each(collide(0.9));
      }

      // COLLISION
      var padding = 1; // separation between circles;

      function collide(alpha) {
        var quadTree = d3.quadtree(canvasNodes);
        return function (d) {
          var rb = 2 * d.size + padding,
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
            cb.trigger === event && callback.execute({ callback: cb });
          });
        }
      }

      return svg;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return Graph;
}(_renderer2.default);

exports.default = Graph;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = __webpack_require__(5);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var ContextMenu = function (_Menu) {
  _inherits(ContextMenu, _Menu);

  function ContextMenu(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));

    _this.contextMenu = _this.SVGParent.select('foreignObject.francy-context-menu-holder');
    // check if the window is already present
    if (!_this.contextMenu.node()) {
      _this.contextMenu = _this.SVGParent.append('foreignObject').attr('class', 'francy-context-menu-holder');
    }
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'render',
    value: function render(object) {
      var _this2 = this;

      d3.event.preventDefault();

      // just ignore rendering if no menus are present
      if (!object.menus || !Object.values(object.menus).length) {
        this.logger.debug('No ContextMenu to render here... continuing...');
        return;
      }

      this.contextMenu.transition().duration(1000).attr('transform', 'translate(' + (d3.event.offsetX + 5) + ',' + (d3.event.offsetY + 5) + ')');

      // show the context menu
      this.contextMenu.style('display', 'block');

      // check if it exists already
      if (this.contextMenu.selectAll('*').node()) {
        return;
      }

      // destroy menu
      d3.select('body').on('click.francy-context-menu', function () {
        return _this2.unrender();
      });

      // this gets executed when a contextmenu event occurs
      var menu = this.contextMenu.append('xhtml:div').append('div').attr('class', 'francy-context-menu').append('ul');
      var menusIterator = this.iterator(Object.values(object.menus));
      this.traverse(menu, menusIterator);

      return this.contextMenu;
    }
  }, {
    key: 'unrender',
    value: function unrender() {
      this.contextMenu.selectAll('*').remove();
      this.contextMenu.style('display', null);
    }
  }]);

  return ContextMenu;
}(_menu2.default);

exports.default = ContextMenu;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No BarChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
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

      var barsGroup = svg.selectAll('g.francy-bars');

      if (!barsGroup.node()) {
        barsGroup = svg.append('g').attr('class', 'francy-bars');
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
        }).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5);
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1);
          tooltip.unrender();
        });

        bar.merge(bar).on('end', function () {
          return parent.zoomToFit();
        });
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
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

      return svg;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return BarChart;
}(_renderer2.default);

exports.default = BarChart;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No LineChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
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

      var linesGroup = svg.selectAll('g.francy-lines');

      if (!linesGroup.node()) {
        linesGroup = svg.append('g').attr('class', 'francy-lines');
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
        }).style('stroke-width', '5px').attr('class', 'francy-line' + index).attr('d', valueLine).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("stroke-opacity", 1).style('stroke-width', '5px');
          tooltip.unrender();
        });

        line.merge(line);
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
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

      return svg;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return LineChart;
}(_renderer2.default);

exports.default = LineChart;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
    value: function render(json) {

      // just ignore rendering if no chart is present
      if (!json.canvas.chart) {
        this.logger.debug('No ScatterChart to render here... continuing...');
        return;
      }

      var tooltip = new _tooltip2.default(this.options);

      var parent = this.options.appendTo;

      var axis = json.canvas.chart.axis,
          datasets = json.canvas.chart.data,
          datasetNames = Object.keys(datasets);

      var svg = parent.select('g.francy-content'),
          margin = { top: 50, right: 50, bottom: 50, left: 50 },
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

      var scatterGroup = svg.selectAll('g.francy-scatters');

      if (!scatterGroup.node()) {
        scatterGroup = svg.append('g').attr('class', 'francy-scatters');
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
        }).on("mouseover", function (d) {
          d3.select(this).transition().duration(250).style("fill-opacity", 0.5).attr('r', 10);
          tooltip.render({ 'Dataset': key, 'Value': d });
        }).on("mouseout", function () {
          d3.select(this).transition().duration(250).style("fill-opacity", 1).attr('r', 5);
          tooltip.unrender();
        });

        scatter.merge(scatter);
      });

      // force rebuild axis again
      var xAxisGroup = svg.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove();

      // add the x Axis
      xAxisGroup.attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x)).append('text').attr('dy', 50).attr('dx', width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.x.title);

      // force rebuild axis again
      var yAxisGroup = svg.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove();

      // add the y Axis
      yAxisGroup.call(d3.axisLeft(y)).append('text').attr('dx', -50).attr('dy', height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(axis.y.title);

      var legendGroup = svg.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'francy-legend');
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

      return svg;
    }
  }, {
    key: 'unrender',
    value: function unrender() {}
  }]);

  return ScatterChart;
}(_renderer2.default);

exports.default = ScatterChart;

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY3NzZiMWM2YzVlM2E4NGM0ZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwidmVyYm9zZSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwicmVuZGVyIiwidW5kZWZpbmVkIiwidW5yZW5kZXIiLCJsb2dnZXIiLCJkZWJ1ZyIsImQzIiwic2VsZWN0Iiwib3B0aW9ucyIsIm5vZGUiLCJwYXJlbnROb2RlIiwiSURVdGlscyIsImNhbnZhc0lkIiwib2JqZWN0SWQiLCJtZW51SWQiLCJUb29sdGlwIiwidG9vbHRpcCIsIlNWR1BhcmVudCIsImFwcGVuZCIsImF0dHIiLCJvYmplY3QiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2VsZWN0QWxsIiwidGFibGUiLCJrZXlzIiwibWFwIiwia2V5Iiwicm93IiwidGV4dCIsInN0eWxlIiwicmVtb3ZlIiwiQ2hhcnQiLCJqc29uIiwiY2FudmFzIiwiY2hhcnQiLCJlbGVtZW50IiwidHlwZSIsIm1heCIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwieCIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsIkJhc2UiLCJNZW51IiwibWVudXNJdGVyYXRvciIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJlbnRyeSIsImFjdGlvbiIsImRhdGEiLCJlbnRlciIsInRpdGxlIiwiaHRtbCIsImNhbGxiYWNrIiwib24iLCJkIiwiZXhlY3V0ZSIsIm1lbnVzIiwiY29udGVudCIsInN1Yk1lbnVzSXRlcmF0b3IiLCJpdGVyYXRvciIsInRyYXZlcnNlIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJyZXF1aXJlZEFyZ3MiLCJBTExfQ0FOVkFTIiwiRnJhbmN5IiwiRXJyb3IiLCJpbnB1dCIsInBhcnNlIiwibWVudSIsImdyYXBoIiwiYWRkIiwiZ2V0Q2FudmFzSWQiLCJpZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvckVhY2giLCJ6b29tVG9GaXQiLCJlIiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJtaW1lIiwiY29uc29sZSIsImVycm9yIiwiQ2FudmFzIiwicGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiem9vbWVkIiwiY2FsbCIsInN0b3BwZWQiLCJib3VuZHMiLCJnZXRCQm94IiwiZnVsbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJmdWxsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwibWlkWCIsIm1pZFkiLCJ5Iiwic2NhbGUiLCJNYXRoIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ1cGRhdGVab29tIiwidHJhbnNmb3JtIiwiem9vbUlkZW50aXR5IiwidHJhbnNsYXRlIiwiZGVmYXVsdFByZXZlbnRlZCIsInN0b3BQcm9wYWdhdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiQ29tcG9zaXRlIiwicmVuZGVyZXJzIiwicmVuZGVyZXIiLCJwdXNoIiwiY2hpbGRyZW5PcHRpb25zIiwidXBkYXRlIiwic2luZ2xldG9uIiwiTG9nZ2VyIiwibWVzc2FnZSIsIl9mb3JtYXQiLCJpbmZvIiwibGV2ZWwiLCJEYXRlIiwidG9JU09TdHJpbmciLCJNYWluTWVudSIsImFib3V0TW9kYWwiLCJnZXRNZW51SWQiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsInNlbGYiLCJtb2RhbElkIiwiZ2V0V2luZG93SWQiLCJvdmVybGF5IiwiaG9sZGVyIiwibW9kYWwiLCJmb3JtIiwiaGVhZGVyIiwiaGVhZGVyVGl0bGUiLCJhcmciLCJ2YWx1ZSIsIm9uY2hhbmdlIiwiY2hlY2tlZCIsImZvb3RlciIsImNoZWNrVmFsaWRpdHkiLCJwcmV2ZW50RGVmYXVsdCIsIkp1cHl0ZXIiLCJrZXlib2FyZF9tYW5hZ2VyIiwicmVnaXN0ZXJfZXZlbnRzIiwibmFtZSIsImZvY3VzIiwiQWJvdXRNb2RhbCIsInZlcnNpb24iLCJzeW50YXhIaWdobGlnaHQiLCJjbHMiLCJ0ZXN0IiwiR3JhcGgiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJjb250ZXh0TWVudSIsImNhbnZhc05vZGVzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZm9yY2VYIiwic3RyZW5ndGgiLCJmb3JjZVkiLCJsYXllciIsInNpemUiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDb2xsaWRlIiwiZm9yY2VDZW50ZXIiLCJsaW5rR3JvdXAiLCJsaW5rIiwiZXhpdCIsInNvdXJjZSIsIm1lcmdlIiwibm9kZUdyb3VwIiwic3ltYm9sIiwiZ2V0U3ltYm9sIiwiaGlnaGxpZ2h0IiwiZHJhZyIsImRyYWdzdGFydGVkIiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImV4ZWN1dGVDYWxsYmFjayIsImNvbm5lY3RlZE5vZGVzIiwibGFiZWxHcm91cCIsImxhYmVsIiwibGVnZW5kR3JvdXAiLCJsZWdlbmQiLCJzb3J0IiwiYSIsImIiLCJjb2xvcnMiLCJ0aWNrZWQiLCJhbHBoYSIsInJlc3RhcnQiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsIl9fZGF0YV9fIiwibyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwiZngiLCJmeSIsImNhbGxiYWNrcyIsImNiIiwidHJpZ2dlciIsIkNvbnRleHRNZW51IiwiQmFyQ2hhcnQiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJzY2FsZUJhbmQiLCJyYW5nZSIsInNjYWxlTGluZWFyIiwidG1wIiwiY29uY2F0IiwiZG9tYWluUmFuZ2UiLCJiYXJzR3JvdXAiLCJiYXIiLCJiYW5kd2lkdGgiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsInNsaWNlIiwiTGluZUNoYXJ0IiwibGluZXNHcm91cCIsInZhbHVlTGluZSIsImxpbmUiLCJTY2F0dGVyQ2hhcnQiLCJzY2F0dGVyR3JvdXAiLCJzY2F0dGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7OztBQUVBOztJQUVxQkEsUTs7O0FBRW5CLDBCQUE0RDtBQUFBLDRCQUE5Q0MsT0FBOEM7QUFBQSxRQUE5Q0EsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLFFBQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUE7O0FBQUEsb0hBQ3BELEVBQUVGLFNBQVNBLE9BQVgsRUFBb0JDLFVBQVVBLFFBQTlCLEVBQXdDQyxpQkFBaUJBLGVBQXpELEVBRG9EOztBQUUxRCxRQUFJQyxJQUFJQyxNQUFKLEtBQWVMLFFBQW5CLEVBQTZCO0FBQzNCLFlBQU0sSUFB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TUFBTixDQUFhckwsSUFBSSxDQUFqQixDQUFWO0FBQUEsT0FKakI7O0FBTUFpTCxhQUFPN00sTUFBUCxDQUFjLE1BQWQsRUFDR0MsSUFESCxDQUNRLEdBRFIsRUFDYXVGLFFBQVEsRUFEckIsRUFFR3ZGLElBRkgsQ0FFUSxHQUZSLEVBRWEsQ0FGYixFQUdHQSxJQUhILENBR1EsSUFIUixFQUdjLE9BSGQsRUFJR2UsS0FKSCxDQUlTLGFBSlQsRUFJd0IsS0FKeEIsRUFLR0QsSUFMSCxDQUtRO0FBQUEsZUFBS2lDLENBQUw7QUFBQSxPQUxSOztBQU9BdUMsYUFBT2IsU0FBUDs7QUFFQSxhQUFPbUcsR0FBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7O2tCQWpLTW9HLFkiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2Nzc2YjFjNmM1ZTNhODRjNGQwIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKGpzb24pXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvLm5vZGUoKS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUbztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdHxNZW51XS0qaGV4IHV1aWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBtZW51SWQgLSB0aGUgbWVudSBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0TWVudUlkKG1lbnVJZCkge1xuICAgIHJldHVybiBgRnJhbmN5TWVudS0ke21lbnVJZH1gO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LnNlbGVjdCgnZm9yZWlnbk9iamVjdC5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy50b29sdGlwLm5vZGUoKSkge1xuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBpbmZvIGFyZSBwcmVzZW50XG4gICAgaWYgKCFvYmplY3QgfHwgIU9iamVjdC52YWx1ZXMob2JqZWN0KS5sZW5ndGgpIHtcbiAgICAgIC8vdGhpcy5sb2dnZXIuZGVidWcoJ05vdGhpbmcgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRPRE8gZml4IGFsd2F5cyB2aXNpYmxlIHRvb2x0aXAsIGZpbmUgdW50aWwgc29tZW9uZSBjb21wbGFpbnMgYWJvdXQgOlBcbiAgICB0aGlzLnRvb2x0aXAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lm9mZnNldFggKyA1fSwke2QzLmV2ZW50Lm9mZnNldFkgKyA1fSlgKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMudG9vbHRpcC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLnRvb2x0aXAuYXBwZW5kKCd4aHRtbDpkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChrZXkpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KG9iamVjdFtrZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9XG4gICAgICovXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB1cGRhdGUoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9iYXNlLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmV4ZWN1dGUoZCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoY29uZmlnKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmZpZy5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBSZXF1aXJlZEFyZ3NNb2RhbCh0aGlzLm9wdGlvbnMpLnJlbmRlcihjb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGNvbmZpZy5jYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tICcuL3V0aWwvanNvbi11dGlscyc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL3JlbmRlci9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vcmVuZGVyL21lbnUtbWFpbic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9yZW5kZXIvZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vcmVuZGVyL2NoYXJ0Jztcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LnJlbmRlcihqc29uKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi4nKTtcbiAgICB9XG4gICAgaWYgKCFhcHBlbmRUbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiEnKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICB2YXIgY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKG1lbnUpO1xuICAgICAgY2FudmFzLmFkZChncmFwaCk7XG4gICAgICBjYW52YXMuYWRkKGNoYXJ0KTtcbiAgICAgIHZhciBlbGVtZW50ID0gY2FudmFzLnJlbmRlcihqc29uKTtcbiAgICAgIEFMTF9DQU5WQVNbSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCldID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cblxuICB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGFkanVzdCB0b3AgbWVudXMgb24gcmVzaXplXG4gICAgZDMuc2VsZWN0QWxsKCdmb3JlaWduT2JqZWN0LmZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignd2lkdGgnLCAnMTAwJScpO1xuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09ICdhcHBsaWNhdGlvbi92bmQuZnJhbmN5K2pzb24nID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICB2YXIgY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBmcmFuY3ktY2FudmFzJyk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgY2FudmFzLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTtcblxuICAgIHZhciBjb250ZW50ID0gY2FudmFzLnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIGNhbnZhcy5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTsgLy8udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGNhbnZhcy5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgY2FudmFzLnpvb21Ub0ZpdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJvdW5kcyA9IGNvbnRlbnQubm9kZSgpLmdldEJCb3goKTtcblxuICAgICAgdmFyIGZ1bGxXaWR0aCA9IGNhbnZhcy5ub2RlKCkuY2xpZW50V2lkdGgsXG4gICAgICAgIGZ1bGxIZWlnaHQgPSBjYW52YXMubm9kZSgpLmNsaWVudEhlaWdodCArIDQ1OyAvL3dlbGwsIHRoZSBtZW51IGlzIHBhcnQgb2YgdGhlIGNhbnZhcyArLTQwcHhcblxuICAgICAgdmFyIHdpZHRoID0gYm91bmRzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICB2YXIgbWlkWCA9IGJvdW5kcy54ICsgd2lkdGggLyAyLFxuICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICB2YXIgc2NhbGUgPSAoMC43NSkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICB2YXIgdHJhbnNsYXRlWCA9IGZ1bGxXaWR0aCAvIDIgLSBzY2FsZSAqIG1pZFgsXG4gICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkge1xuICAgICAgY2FudmFzLmNhbGwoem9vbS50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eS50cmFuc2xhdGUodHJhbnNsYXRlWCwgdHJhbnNsYXRlWSkuc2NhbGUoc2NhbGUsIHNjYWxlKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgY29udGVudC5hdHRyKFwidHJhbnNmb3JtXCIsIGQzLmV2ZW50LnRyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcHBlZCgpIHtcbiAgICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7IGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4ocGFyZW50LCBqc29uKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCBpZiByZXF1aXJlZCFcbiAgICB2YXIgY2hpbGRyZW5PcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGNoaWxkcmVuT3B0aW9ucy5hcHBlbmRUbyA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIudXBkYXRlKGNoaWxkcmVuT3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGFib3V0TW9kYWwgPSBuZXcgQWJvdXRNb2RhbCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIG1lbnVJZCA9IElEVXRpbHMuZ2V0TWVudUlkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgbWVudSA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFtZW51Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgbWVudSA9IHBhcmVudC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKS5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsMClgKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIG1lbnUgPSBtZW51LmFwcGVuZCgneGh0bWw6dWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMudGl0bGUpIHtcbiAgICAgIG1lbnUuYXBwZW5kKCdsaScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10aXRsZScpLmFwcGVuZCgnYScpLmh0bWwoanNvbi5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIHZhciBlbnRyeSA9IG1lbnUuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHBhcmVudC56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IHRoaXMubG9nZ2VyLmluZm8oJ1NhdmUgdG8gUE5HIHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIScpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5yZW5kZXIoanNvbikpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMyBKdXB5dGVyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVpcmVkQXJnc01vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbGxiYWNrLmlkKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgdmFyIGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmIChqc29uLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHtqc29uLnRpdGxlfWApO1xuICAgIH1cblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIHZhciByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICB2YXIgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7IH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWQ7IH0pO1xuICAgICAgfVxuICAgICAgcm93LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24uY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ0NhbmNlbCcpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIHRyeSB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5Jyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LWFyZycpO1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmZyYW5jeS1vdmVybGF5Jyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW1vZGFsJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKS5mb2N1cygpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLXJlcXVpcmVkLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgSnVweXRlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dE1vZGFsIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdmFyIG1vZGFsID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbChgQWJvdXQgRnJhbmN5IHYke2pzb24udmVyc2lvbn1gKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwodGhpcy5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkoanNvbi5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3knKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG4gIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHZhciBjbHMgPSAnbnVtYmVyJztcbiAgICAgIGlmICgvXlwiLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ2Jvb2xlYW4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdudWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGdyYXBoIGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmdyYXBoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gR3JhcGggdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKC01MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWSg1MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiAoZC5zaXplICogNSkpLnN0cmVuZ3RoKDEpO1xuICAgIH1cblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkuc3RyZW5ndGgoMC4wMDEpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTI1MCkpXG4gICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUpKVxuICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKVxuICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9KTtcblxuICAgIHZhciBsaW5rR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmZyYW5jeS1saW5rJykuZGF0YShjYW52YXNMaW5rcyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LW5vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLm1lcmdlKG5vZGUpO1xuXG4gICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5yZW5kZXIoZCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5yZW5kZXIoZC5pbmZvKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIHZhciBsYWJlbEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbHMnKTtcblxuICAgIGlmICghbGFiZWxHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxhYmVsR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsYWJlbCA9IGxhYmVsLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLm1lcmdlKGxhYmVsKTtcblxuICAgIGxhYmVsXG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUucmVuZGVyKGQpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAucmVuZGVyKGQuaW5mbyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gcGFyZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydCgoYSwgYikgPT4gYS5sYXllciA+IGIubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmlkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoJHsxMH0sJHsoaSArIDUpICogMTJ9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIGQudGl0bGUubGVuZ3RoICogMikpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplICogMikpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjkpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDE7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIGQuc2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2suZXhlY3V0ZSh7IGNhbGxiYWNrOiBjYiB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN2ZztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2dyYXBoLmpzIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNvbnRleHRNZW51ID0gdGhpcy5TVkdQYXJlbnQuc2VsZWN0KCdmb3JlaWduT2JqZWN0LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuY29udGV4dE1lbnUubm9kZSgpKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51ID0gdGhpcy5TVkdQYXJlbnQuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG9iamVjdCkge1xuXG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBtZW51cyBhcmUgcHJlc2VudFxuICAgIGlmICghb2JqZWN0Lm1lbnVzIHx8ICFPYmplY3QudmFsdWVzKG9iamVjdC5tZW51cykubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQ29udGV4dE1lbnUgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dE1lbnVcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC5vZmZzZXRYICsgNX0sJHtkMy5ldmVudC5vZmZzZXRZICsgNX0pYCk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmNvbnRleHRNZW51LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmNvbnRleHRNZW51LmFwcGVuZCgneGh0bWw6ZGl2JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG9iamVjdC5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21lbnUtY29udGV4dC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIEJhckNoYXJ0IHRvIHJlbmRlciBoZXJlLi4uIGNvbnRpbnVpbmcuLi4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGF4aXMgPSBqc29uLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSBqc29uLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKSxcbiAgICAgIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhciR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyLm1lcmdlKGJhcikub24oJ2VuZCcsICgpID0+IHBhcmVudC56b29tVG9GaXQoKSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuXG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtYmFyLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIExpbmVDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgbGluZXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSk7XG5cbiAgICAgIHZhciBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5saW5lJHtpbmRleH1gKS5kYXRhKFtkYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAucmVuZGVyKHsgJ0RhdGFzZXQnOiBrZXksICdWYWx1ZSc6IGQgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZS5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICBwYXJlbnQuem9vbVRvRml0KCk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1saW5lLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFNjYXR0ZXJDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLnNjYXR0ZXIke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIHBhcmVudC56b29tVG9GaXQoKTtcblxuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9