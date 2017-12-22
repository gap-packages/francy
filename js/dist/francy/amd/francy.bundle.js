define(function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          /******/
          configurable: false,
          /******/
          enumerable: true,
          /******/
          get: getter
          /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() { return module['default']; } :
        /******/
        function getModuleExports() { return module; };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 6);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _base = __webpack_require__(5);

      var _base2 = _interopRequireDefault(_base);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 */

      var Renderer = function(_Base) {
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

      /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.dontExecuteIfNoData = dontExecuteIfNoData;

      function dontExecuteIfNoData(props) {
        return function decorator(target, name, descriptor) {
          var oldValue = descriptor.value;

          descriptor.value = function() {
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
              }
              else {
                tmp = tmp[property];
              }
            }
          }
          catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          }
          finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            }
            finally {
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

      /***/
    }),
    /* 2 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _dec, _desc, _value, _class;

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _chartBar = __webpack_require__(12);

      var _chartBar2 = _interopRequireDefault(_chartBar);

      var _chartLine = __webpack_require__(13);

      var _chartLine2 = _interopRequireDefault(_chartLine);

      var _chartScatter = __webpack_require__(14);

      var _chartScatter2 = _interopRequireDefault(_chartScatter);

      var _data = __webpack_require__(1);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var Chart = (_dec = (0, _data.dontExecuteIfNoData)('canvas.chart'), (_class = function(_Renderer) {
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

            this.options.appendTo.element.zoomToFit();

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
            return Array.from(new Array(max), function(_, i) {
              return i;
            }).map(function(x) {
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

      /***/
    }),
    /* 3 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var Tooltip = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function(_Renderer) {
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
            Object.keys(this.data).map(function(key) {
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

      /***/
    }),
    /* 4 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      var Composite = function(_Renderer) {
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
            }
            catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            }
            finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              }
              finally {
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

      /***/
    }),
    /* 5 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _logger = __webpack_require__(8);

      var _logger2 = _interopRequireDefault(_logger);

      var _jsonUtils = __webpack_require__(9);

      var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      var Base = function() {
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

      /***/
    }),
    /* 6 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _frame = __webpack_require__(7);

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

      var Francy = function(_Renderer) {
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
        window.onresize = function() {
          // zoom to fit all canvas on resize
          Object.values(ALL_CANVAS).forEach(function(canvas) {
            canvas.zoomToFit();
          });
          // call old resize function if any!
          if (typeof oldResize === 'function') {
            oldResize();
          }
        };
      }
      catch (e) {
        exports.Francy = Francy;
      }

      /***/
    }),
    /* 7 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _dec, _desc, _value, _class;

      var _composite = __webpack_require__(4);

      var _composite2 = _interopRequireDefault(_composite);

      var _canvas = __webpack_require__(10);

      var _canvas2 = _interopRequireDefault(_canvas);

      var _menuMain = __webpack_require__(15);

      var _menuMain2 = _interopRequireDefault(_menuMain);

      var _message = __webpack_require__(21);

      var _message2 = _interopRequireDefault(_message);

      var _data = __webpack_require__(1);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var Frame = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function(_Composite) {
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

      /***/
    }),
    /* 8 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      /**
       * This class is a singleton that provides a logger for the Francy application.
       */
      var Logger = function() {

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

      /***/
    }),
    /* 9 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      /**
       * This class contains methods to deal with JSON.
       */
      var JsonUtils = function() {
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
              }
              catch (e) {
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

      /***/
    }),
    /* 10 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _dec, _desc, _value, _class;

      var _composite = __webpack_require__(4);

      var _composite2 = _interopRequireDefault(_composite);

      var _graph = __webpack_require__(11);

      var _graph2 = _interopRequireDefault(_graph);

      var _chart = __webpack_require__(2);

      var _chart2 = _interopRequireDefault(_chart);

      var _data = __webpack_require__(1);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var Canvas = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function(_Composite) {
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
            this.element.zoomToFit = this.zoomToFit = function() {
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

                content.transition().duration(1000).attr('transform', 'translate(' + translateX + ',' + translateY + ')scale(' + scale + ',' + scale + ')').on('end', function() {
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

      /***/
    }),
    /* 11 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      /***/
    }),
    /* 12 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _tooltip = __webpack_require__(3);

      var _tooltip2 = _interopRequireDefault(_tooltip);

      var _chart = __webpack_require__(2);

      var _chart2 = _interopRequireDefault(_chart);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 */

      var BarChart = function(_Renderer) {
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
            datasetNames.forEach(function(key) {
              return tmp = tmp.concat(datasets[key]);
            });

            if (!axis.y.domain.length) {
              y.domain([0, d3.max(tmp, function(d) {
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

            datasetNames.forEach(function(key, index) {
              var bar = barsGroup.selectAll('.francy-bar' + index).data(datasets[key]);

              bar.exit().remove();

              // append the rectangles for the bar chart
              bar.enter().append('rect').style('fill', function() {
                return _chart2.default.colors(index * 5);
              }).attr('class', 'francy-bar' + index).attr('x', function(d, i) {
                return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length);
              }).attr('width', x.bandwidth() / datasetNames.length - 1).attr('y', function(d) {
                return y(d);
              }).attr('height', function(d) {
                return height - y(d);
              }).on("mouseenter", function(d) {
                d3.select(this).transition().duration(250).style("fill-opacity", 0.5);
                tooltip.load(_chart2.default.tooltip(key, d), true).render();
              }).on("mouseleave", function() {
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

            legend = legend.enter().append('g').attr('transform', function(d, i) {
              return 'translate(0,' + i * 20 + ')';
            }).merge(legend);

            legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function(d, i) {
              return _chart2.default.colors(i * 5);
            });

            legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function(d) {
              return d;
            });

            return this;
          }
        }, {
          key: 'unrender',
          value: function unrender() {}
        }]);

        return BarChart;
      }(_renderer2.default);

      exports.default = BarChart;

      /***/
    }),
    /* 13 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _tooltip = __webpack_require__(3);

      var _tooltip2 = _interopRequireDefault(_tooltip);

      var _chart = __webpack_require__(2);

      var _chart2 = _interopRequireDefault(_chart);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 */

      var LineChart = function(_Renderer) {
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
            datasetNames.forEach(function(key) {
              return tmp = tmp.concat(datasets[key]);
            });

            if (!axis.y.domain.length) {
              y.domain([0, d3.max(tmp, function(d) {
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

            datasetNames.forEach(function(key, index) {
              var valueLine = d3.line().x(function(d, i) {
                return x(i);
              }).y(function(d) {
                return y(d);
              });

              var line = linesGroup.selectAll('.line' + index).data([datasets[key]]);

              line.exit().remove();

              // append the rectangles for the bar chart
              line.enter().append('path').style('stroke', function() {
                return _chart2.default.colors(index * 5);
              }).style('stroke-width', '5px').attr('class', 'francy-line' + index).attr('d', valueLine).on("mouseenter", function(d) {
                d3.select(this).transition().duration(250).style("stroke-opacity", 0.5).style('stroke-width', '10px');
                tooltip.load(_chart2.default.tooltip(key, d), true).render();
              }).on("mouseleave", function() {
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

            legend = legend.enter().append('g').attr('transform', function(d, i) {
              return 'translate(0,' + i * 20 + ')';
            }).merge(legend);

            legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function(d, i) {
              return _chart2.default.colors(i * 5);
            });

            legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function(d) {
              return d;
            });

            return this;
          }
        }, {
          key: 'unrender',
          value: function unrender() {}
        }]);

        return LineChart;
      }(_renderer2.default);

      exports.default = LineChart;

      /***/
    }),
    /* 14 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _tooltip = __webpack_require__(3);

      var _tooltip2 = _interopRequireDefault(_tooltip);

      var _chart = __webpack_require__(2);

      var _chart2 = _interopRequireDefault(_chart);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 */

      var ScatterChart = function(_Renderer) {
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
            datasetNames.forEach(function(key) {
              return tmp = tmp.concat(datasets[key]);
            });

            if (!axis.y.domain.length) {
              y.domain([0, d3.max(tmp, function(d) {
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

            datasetNames.forEach(function(key, index) {
              var scatter = scatterGroup.selectAll('.scatter' + index).data(datasets[key]);

              scatter.exit().remove();

              // append the rectangles for the bar chart
              scatter.enter().append('circle').style('fill', function() {
                return _chart2.default.colors(index * 5);
              }).attr('class', 'francy-scatter' + index).attr("r", 5).attr("cx", function(d, i) {
                return x(i);
              }).attr("cy", function(d) {
                return y(d);
              }).on("mouseenter", function(d) {
                d3.select(this).transition().duration(250).style("fill-opacity", 0.5).attr('r', 10);
                tooltip.load(_chart2.default.tooltip(key, d), true).render();
              }).on("mouseleave", function() {
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

            legend = legend.enter().append('g').attr('transform', function(d, i) {
              return 'translate(0,' + i * 20 + ')';
            }).merge(legend);

            legend.append('rect').attr('x', width + 20).attr('width', 19).attr('height', 19).style('fill', function(d, i) {
              return _chart2.default.colors(i * 5);
            });

            legend.append('text').attr('x', width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function(d) {
              return d;
            });

            return this;
          }
        }, {
          key: 'unrender',
          value: function unrender() {}
        }]);

        return ScatterChart;
      }(_renderer2.default);

      exports.default = ScatterChart;

      /***/
    }),
    /* 15 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _menu = __webpack_require__(16);

      var _menu2 = _interopRequireDefault(_menu);

      var _modalAbout = __webpack_require__(19);

      var _modalAbout2 = _interopRequireDefault(_modalAbout);

      var _saveSvgAsPng = __webpack_require__(20);

      var SvgToPng = _interopRequireWildcard(_saveSvgAsPng);

      function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 window */

      var MainMenu = function(_Menu) {
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
              content.append('li').append('a').on('click', function() {
                return _this2.options.appendTo.canvas.zoomToFit();
              }).attr('title', 'Zoom to Fit').html('Zoom to Fit');
            }
            content.append('li').append('a').on('click', function() {
              return SvgToPng.saveSvgAsPng(document.getElementById(_this2.data.canvas.id), "diagram.png");
            }).attr('title', 'Save to PNG').html('Save to PNG');
            content.append('li').append('a').on('click', function() {
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

      /***/
    }),
    /* 16 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      var _callback = __webpack_require__(17);

      var _callback2 = _interopRequireDefault(_callback);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      var Menu = function(_Renderer) {
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
                action.on('click', function(d) {
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

      /***/
    }),
    /* 17 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _dec, _desc, _value, _class;

      var _base = __webpack_require__(5);

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
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var CallbackHandler = (_dec = (0, _data.dontExecuteIfNoData)(), (_class = function(_Base) {
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
              options.callbackHandler = function(calbackObj) {
                return _this2._execute.call(_this2, calbackObj);
              };
              return new _modalRequired2.default(options).load(this.data, true).render();
            }
            else {
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

      /***/
    }),
    /* 18 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 Jupyter */

      var RequiredArgsModal = function(_Renderer) {
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
                var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function() {
                  self.data.callback.requiredArgs[this.id].value = this.value;
                }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
                // wait, if it is boolean we create a checkbox
                if (arg.type === 'boolean') {
                  // well, a checkbox works this way so we need to initialize 
                  // the value to false and update the value based on the checked 
                  // property that triggers the onchange event
                  arg.value = arg.value || false;
                  input.attr('type', 'checkbox').attr('required', null).attr('value', arg.value).on('change', function() {
                    self.data.callback.requiredArgs[this.id].value = this.value = this.checked;
                  });
                }
                row.append('span').attr('class', 'validity');
              }
            }
            catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            }
            finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              }
              finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            var footer = form.append('div').attr('class', 'francy-modal-footer');

            footer.append('button').text('Ok').on('click', function() {
              if (form.node().checkValidity()) {
                d3.event.preventDefault();
                self.options.callbackHandler(self.data.callback);
                overlay.remove();
                self.element.remove();
                holder.remove();
              }
              return false;
            });
            footer.append('button').text('Cancel').on('click', function() {
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
            }
            catch (e) {
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

      /***/
    }),
    /* 19 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

      var _renderer = __webpack_require__(0);

      var _renderer2 = _interopRequireDefault(_renderer);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

      function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

      function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

      /* global d3 Jupyter */

      var AboutModal = function(_Renderer) {
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

            footer.append('button').text('Ok').on('click', function() {
              this.element.remove();
              holder.remove();
              overlay.remove();
              d3.event.preventDefault();
              return false;
            });

            // disable keyboard shortcuts when using this modal in Jupyter
            try {
              Jupyter.keyboard_manager.register_events('.francy');
              Jupyter.keyboard_manager.register_events('.francy-arg');
              Jupyter.keyboard_manager.register_events('.francy-overlay');
              Jupyter.keyboard_manager.register_events('.francy-modal');
            }
            catch (e) {
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
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(match) {
              var cls = 'number';
              if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                  cls = 'key';
                }
                else {
                  cls = 'string';
                }
              }
              else if (/true|false/.test(match)) {
                cls = 'boolean';
              }
              else if (/null/.test(match)) {
                cls = 'null';
              }
              return '<span class="' + cls + '">' + match + '</span>';
            });
          }
        }]);

        return AboutModal;
      }(_renderer2.default);

      exports.default = AboutModal;

      /***/
    }),
    /* 20 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";
      var __WEBPACK_AMD_DEFINE_RESULT__;

      (function() {
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
            (function(image) {
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
                img.onload = function() {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  ctx.drawImage(img, 0, 0);
                  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
                  left--;
                  checkDone();
                };
                img.onerror = function() {
                  console.log("Could not load " + href);
                  left--;
                  checkDone();
                };
              }
              else {
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
            }
            catch (e) {
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
                  }
                  catch (err) {
                    console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
                  }

                  try {
                    if (selectorText) {
                      match = el.querySelector(selectorText) || el.parentNode.querySelector(selectorText);
                    }
                  }
                  catch (err) {
                    console.warn('Invalid CSS selector "' + selectorText + '"', err);
                  }

                  if (match) {
                    var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
                    var cssText = modifyStyle ? modifyStyle(rule.style.cssText) : rule.style.cssText;
                    css += selector + " { " + cssText + " }\n";
                  }
                  else if (rule.cssText.match(/^@font-face/)) {
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
                      }
                      else if (externalFontUrl.startsWith('./')) {
                        externalFontUrl = sheets[i].href + '/.' + externalFontUrl;
                      }

                      fontsQueue.push({
                        text: rule.cssText,
                        // Pass url regex, so that once font is downladed, we can run `replace()` on it
                        fontUrlRegexp: fontUrlRegexp,
                        format: getFontMimeTypeFromUrl(externalFontUrl),
                        url: externalFontUrl
                      });
                    }
                    else {
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
            }
            else {
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
                setTimeout(function() {
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
          data = data.replace(/%([0-9A-F]{2})/g, function(match, p1) {
            var c = String.fromCharCode('0x' + p1);
            return c === '%' ? '%25' : c;
          });
          return decodeURIComponent(data);
        }

        out$.prepareSvg = function(el, options, cb) {
          requireDomNode(el);

          options = options || {};
          options.scale = options.scale || 1;
          options.responsive = options.responsive || false;
          var xmlns = "http://www.w3.org/2000/xmlns/";

          inlineImages(el, function() {
            var outer = document.createElement("div");
            var clone = el.cloneNode(true);
            var width, height;
            if (el.tagName == 'svg') {
              width = options.width || getDimension(el, clone, 'width');
              height = options.height || getDimension(el, clone, 'height');
            }
            else if (el.getBBox) {
              var box = el.getBBox();
              width = box.x + box.width;
              height = box.y + box.height;
              clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

              var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
              svg.appendChild(clone);
              clone = svg;
            }
            else {
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
            }
            else {
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

        out$.svgAsDataUri = function(el, options, cb) {
          out$.prepareSvg(el, options, function(svg) {
            var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + svg));
            if (cb) {
              cb(uri);
            }
          });
        };

        out$.svgAsPngUri = function(el, options, cb) {
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
            }
            else {
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
            }
            catch (e) {
              if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name == "SecurityError") {
                console.error("Rendered SVG images cannot be downloaded in this browser.");
                return;
              }
              else {
                throw e;
              }
            }
            cb(png);
          };

          if (options.canvg) {
            out$.prepareSvg(el, options, convertToPng);
          }
          else {
            out$.svgAsDataUri(el, options, function(uri) {
              var image = new Image();

              image.onload = function() {
                convertToPng(image, image.width, image.height);
              };

              image.onerror = function() {
                console.error('There was an error loading the data URI as an image on the following SVG\n', window.atob(uri.slice(26)), '\n', "Open the following link to see browser's diagnosis\n", uri);
              };

              image.src = uri;
            });
          }
        };

        out$.download = function(name, uri) {
          if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(uriToBlob(uri), name);
          }
          else {
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
                saveLink.onclick = function() {
                  requestAnimationFrame(function() {
                    URL.revokeObjectURL(url);
                  });
                };
              }
              catch (e) {
                console.warn('This browser does not support object URLs. Falling back to string URL.');
                saveLink.href = uri;
              }
              saveLink.click();
              document.body.removeChild(saveLink);
            }
            else {
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

        out$.saveSvg = function(el, name, options) {
          requireDomNode(el);

          options = options || {};
          out$.svgAsDataUri(el, options, function(uri) {
            out$.download(name, uri);
          });
        };

        out$.saveSvgAsPng = function(el, name, options) {
          requireDomNode(el);

          options = options || {};
          out$.svgAsPngUri(el, options, function(uri) {
            out$.download(name, uri);
          });
        };

        // if define is defined create as an AMD module
        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
              return out$;
            }).call(exports, __webpack_require__, exports, module),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      })();

      /***/
    }),
    /* 21 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = undefined;

      var _createClass = function() {
        function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor); } } return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
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

      var Message = (_dec = (0, _data.dontExecuteIfNoData)('canvas.messages'), (_class = function(_Renderer) {
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

            var messages = Object.keys(this.data.canvas.messages).map(function(key) {
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
            messages.map(function(d) {
              // only render new ones
              if (!self.element.select('div#' + d.id).node()) {
                var row = self.element.append('div').attr('id', d.id).attr('class', 'francy-alert alert-' + d.type).on('click', function() {
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

      /***/
    })
    /******/
  ])
});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg1ODAzODRhMDQyNTM4NjMzYjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jaGFydC1zY2F0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS1tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9tb2RhbC1hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL21lc3NhZ2UuanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJ2ZXJib3NlIiwiYXBwZW5kVG8iLCJjYWxsYmFja0hhbmRsZXIiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJyZW5kZXIiLCJ1bmRlZmluZWQiLCJ1bnJlbmRlciIsImxvZ2dlciIsImRlYnVnIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJub2RlIiwidGFnTmFtZSIsInRvVXBwZXJDYXNlIiwiZDMiLCJzZWxlY3QiLCJwYXJlbnROb2RlIiwiZG9udEV4ZWN1dGVJZk5vRGF0YSIsInByb3BzIiwiZGVjb3JhdG9yIiwibmFtZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsInZhbHVlIiwiaGFzRGF0YSIsImdldFByb3BlcnR5IiwiZGF0YSIsImFwcGx5IiwiYXJndW1lbnRzIiwib2JqIiwicHJvcGVydHlQYXRoIiwidG1wIiwicHJvcGVydGllcyIsInNwbGl0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIkFycmF5IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiQ2hhcnQiLCJjYW52YXMiLCJjaGFydCIsInR5cGUiLCJsb2FkIiwiem9vbVRvRml0IiwiZGF0YXNldCIsIm1heCIsImZyb20iLCJfIiwiaSIsIm1hcCIsIngiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJUb29sdGlwIiwiSFRNTFBhcmVudCIsImFwcGVuZCIsImF0dHIiLCJwb3MiLCJtb3VzZSIsIlNWR1BhcmVudCIsInN0eWxlIiwic2VsZWN0QWxsIiwidGFibGUiLCJzZWxmIiwia2V5cyIsImtleSIsInJvdyIsInRleHQiLCJ0aXRsZSIsInJlbW92ZSIsIkNvbXBvc2l0ZSIsInJlbmRlcmVycyIsInJlbmRlcmVyIiwicHVzaCIsInNldHRpbmdzIiwiQmFzZSIsImxvZyIsIkVycm9yIiwianNvbiIsInBhcnRpYWwiLCJwYXJzZSIsIkFMTF9DQU5WQVMiLCJGcmFuY3kiLCJmcmFtZSIsImlkIiwiZXhwb3J0cyIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsIm9ucmVzaXplIiwiZm9yRWFjaCIsImUiLCJGcmFtZSIsIm1lbnUiLCJtZXNzYWdlcyIsImFkZCIsInBhcmVudCIsImZyYW1lSWQiLCJyZW5kZXJDaGlsZHJlbiIsIkxvZ2dlciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiX2Zvcm1hdCIsImluZm8iLCJlcnJvciIsImxldmVsIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiSnNvblV0aWxzIiwiaW5wdXQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImpzb25SZWdleCIsIm1hdGNoIiwiZXhlYyIsIm1pbWUiLCJNSU1FIiwiQ2FudmFzIiwiZ3JhcGgiLCJjYW52YXNJZCIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbSIsImNvbnRlbnQiLCJvbiIsInpvb21lZCIsImNhbGwiLCJzdG9wcGVkIiwiYm91bmRzIiwiZ2V0QkJveCIsImNsaWVudEJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZ1bGxXaWR0aCIsInJpZ2h0IiwibGVmdCIsImZ1bGxIZWlnaHQiLCJib3R0b20iLCJ0b3AiLCJtaWRYIiwibWlkWSIsInkiLCJzY2FsZSIsIk1hdGgiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInVwZGF0ZVpvb20iLCJ0cmFuc2Zvcm0iLCJ6b29tSWRlbnRpdHkiLCJ0cmFuc2xhdGUiLCJldmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJCYXJDaGFydCIsInRvb2x0aXAiLCJheGlzIiwiZGF0YXNldHMiLCJkYXRhc2V0TmFtZXMiLCJtYXJnaW4iLCJzY2FsZUJhbmQiLCJyYW5nZSIsInBhZGRpbmciLCJzY2FsZUxpbmVhciIsImNvbmNhdCIsImQiLCJkb21haW5SYW5nZSIsImJhcnNHcm91cCIsImluZGV4IiwiYmFyIiwiZXhpdCIsImVudGVyIiwiY29sb3JzIiwiYmFuZHdpZHRoIiwibWVyZ2UiLCJ4QXhpc0dyb3VwIiwiYXhpc0JvdHRvbSIsInlBeGlzR3JvdXAiLCJheGlzTGVmdCIsImxlZ2VuZEdyb3VwIiwibGVnZW5kIiwic2xpY2UiLCJMaW5lQ2hhcnQiLCJsaW5lc0dyb3VwIiwidmFsdWVMaW5lIiwibGluZSIsIlNjYXR0ZXJDaGFydCIsInNjYXR0ZXJHcm91cCIsInNjYXR0ZXIiLCJTdmdUb1BuZyIsIk1haW5NZW51IiwiYWJvdXRNb2RhbCIsIm1lbnVJZCIsImh0bWwiLCJlbnRyeSIsInNhdmVTdmdBc1BuZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51c0l0ZXJhdG9yIiwiaXRlcmF0b3IiLCJtZW51cyIsInRyYXZlcnNlIiwiTWVudSIsImhhc05leHQiLCJtZW51SXRlbSIsIm5leHQiLCJhY3Rpb24iLCJjYWxsYmFjayIsImV4ZWN1dGUiLCJzdWJNZW51c0l0ZXJhdG9yIiwiYXJyYXkiLCJuZXh0SW5kZXgiLCJDYWxsYmFja0hhbmRsZXIiLCJyZXF1aXJlZEFyZ3MiLCJjYWxiYWNrT2JqIiwiX2V4ZWN1dGUiLCJSZXF1aXJlZEFyZ3NNb2RhbCIsIm1vZGFsSWQiLCJvdmVybGF5IiwiaG9sZGVyIiwiZm9ybSIsImhlYWRlciIsImhlYWRlclRpdGxlIiwiYXJnIiwib25jaGFuZ2UiLCJjaGVja2VkIiwiZm9vdGVyIiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0IiwiSnVweXRlciIsImtleWJvYXJkX21hbmFnZXIiLCJyZWdpc3Rlcl9ldmVudHMiLCJmb2N1cyIsIkFib3V0TW9kYWwiLCJ2ZXJzaW9uIiwic3ludGF4SGlnaGxpZ2h0IiwiY2xzIiwidGVzdCIsIm91dCQiLCJkb2N0eXBlIiwiaXNFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTVkdFbGVtZW50IiwicmVxdWlyZURvbU5vZGUiLCJlbCIsImlzRXh0ZXJuYWwiLCJ1cmwiLCJsYXN0SW5kZXhPZiIsImxvY2F0aW9uIiwiaG9zdCIsImlubGluZUltYWdlcyIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja0RvbmUiLCJpbWFnZSIsImhyZWYiLCJnZXRBdHRyaWJ1dGVOUyIsIndhcm4iLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJnZXRBdHRyaWJ1dGUiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzZXRBdHRyaWJ1dGVOUyIsInRvRGF0YVVSTCIsIm9uZXJyb3IiLCJzdHlsZXMiLCJjc3NMb2FkZWRDYWxsYmFjayIsInNlbGVjdG9yUmVtYXAiLCJtb2RpZnlTdHlsZSIsImNzcyIsImZvbnRzUXVldWUiLCJzaGVldHMiLCJzdHlsZVNoZWV0cyIsInJ1bGVzIiwiY3NzUnVsZXMiLCJqIiwicnVsZSIsInNlbGVjdG9yVGV4dCIsImVyciIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvciIsImNzc1RleHQiLCJmb250VXJsUmVnZXhwIiwiZm9udFVybE1hdGNoIiwiZXh0ZXJuYWxGb250VXJsIiwiZm9udFVybElzRGF0YVVSSSIsInN0YXJ0c1dpdGgiLCJmb3JtYXQiLCJnZXRGb250TWltZVR5cGVGcm9tVXJsIiwicHJvY2Vzc0ZvbnRRdWV1ZSIsImZvbnRVcmwiLCJzdXBwb3J0ZWRGb3JtYXRzIiwiZXh0ZW5zaW9ucyIsImV4dGVuc2lvbiIsImluZGV4T2YiLCJxdWV1ZSIsImZvbnQiLCJwb3AiLCJwcm9jZXNzTmV4dCIsIm9SZXEiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb250TG9hZGVkIiwidHJhbnNmZXJGYWlsZWQiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwic2VuZCIsImZvbnRCaXRzIiwicmVzcG9uc2UiLCJmb250SW5CYXNlNjQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwidXBkYXRlRm9udFN0eWxlIiwiZGF0YVVybCIsInNldFRpbWVvdXQiLCJidWZmZXIiLCJiaW5hcnkiLCJieXRlcyIsIlVpbnQ4QXJyYXkiLCJsZW4iLCJieXRlTGVuZ3RoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYnRvYSIsImdldERpbWVuc2lvbiIsImNsb25lIiwiZGltIiwidiIsInZpZXdCb3giLCJiYXNlVmFsIiwicGFyc2VJbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImlzTmFOIiwicGFyc2VGbG9hdCIsInJlRW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicDEiLCJjIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicHJlcGFyZVN2ZyIsImNiIiwicmVzcG9uc2l2ZSIsInhtbG5zIiwib3V0ZXIiLCJjbG9uZU5vZGUiLCJib3giLCJzZXRBdHRyaWJ1dGUiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUF0dHJpYnV0ZSIsImpvaW4iLCJmb3MiLCJzIiwiaW5uZXJIVE1MIiwiZGVmcyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJvdXRIdG1sIiwic3ZnQXNEYXRhVXJpIiwidXJpIiwic3ZnQXNQbmdVcmkiLCJlbmNvZGVyVHlwZSIsImVuY29kZXJPcHRpb25zIiwiY29udmVydFRvUG5nIiwidyIsImgiLCJjb250ZXh0IiwiY2FudmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInBuZyIsIlNlY3VyaXR5RXJyb3IiLCJhdG9iIiwiZG93bmxvYWQiLCJuYXZpZ2F0b3IiLCJtc1NhdmVPck9wZW5CbG9iIiwidXJpVG9CbG9iIiwic2F2ZUxpbmsiLCJkb3dubG9hZFN1cHBvcnRlZCIsImRpc3BsYXkiLCJib2R5IiwiYmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9uY2xpY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXZva2VPYmplY3RVUkwiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiYnl0ZVN0cmluZyIsIm1pbWVTdHJpbmciLCJBcnJheUJ1ZmZlciIsImludEFycmF5IiwiY2hhckNvZGVBdCIsIkJsb2IiLCJzYXZlU3ZnIiwiZGVmaW5lIiwiTWVzc2FnZSIsImFsZXJ0c0lkIl0sIm1hcHBpbmdzIjoi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QUFFakYsRUFBN0IsRUFBbUM3RSxJQUFuQyxFQUFMLEVBQWdEO0FBQzlDLGNBQUkyRCxNQUFNSCxLQUFLMUQsT0FBTCxDQUFha0QsTUFBYixDQUFvQixLQUFwQixFQUEyQkMsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0M2RyxFQUFFakYsRUFBeEMsRUFDUDVCLElBRE8sQ0FDRixPQURFLDBCQUM2QjZHLEVBQUU5SCxJQUQvQixFQUN1Q3FGLEVBRHZDLENBQzBDLE9BRDFDLEVBQ21ELFlBQVc7QUFDcEVsSCxlQUFHQyxNQUFILENBQVUsSUFBVixFQUFnQmlELEtBQWhCLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDO0FBQ0QsV0FITyxDQUFWO0FBSUFNLGNBQUlYLE1BQUosQ0FBVyxNQUFYLEVBQW1CQyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxRQUFqQyxFQUEyQ1csSUFBM0MsQ0FBZ0RrRyxFQUFFakcsS0FBbEQ7QUFDQUYsY0FBSVgsTUFBSixDQUFXLE1BQVgsRUFBbUJZLElBQW5CLENBQXdCa0csRUFBRWxHLElBQTFCO0FBQ0FELGNBQUlYLE1BQUosQ0FBVyxNQUFYLEVBQW1CQyxJQUFuQixDQUF3QixPQUF4QixFQUFpQyxRQUFqQyxFQUEyQ0ksS0FBM0MsQ0FBaUQsU0FBakQsRUFBNEQsTUFBNUQsRUFBb0VPLElBQXBFLENBQXlFLEdBQXpFO0FBQ0Q7QUFDRixPQVhEOztBQWFBLFdBQUs5RCxPQUFMLENBQWF1RCxLQUFiLENBQW1CLFNBQW5CLEVBQThCLE9BQTlCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVUsQ0FBRTs7Ozs7a0JBN0NNMFYsTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzg1ODAzODRhMDQyNTM4NjMzYjYiLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTVkcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ0RJVicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9yZW5kZXJlci5qcyIsImV4cG9ydCBmdW5jdGlvbiBkb250RXhlY3V0ZUlmTm9EYXRhKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBwcm9wZXJ0eVBhdGgpIHtcblxuICB2YXIgdG1wID0gb2JqO1xuXG4gIGlmICh0bXAgJiYgcHJvcGVydHlQYXRoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICghdG1wLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB0bXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRtcCA9IHRtcFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcDtcbn1cblxuZnVuY3Rpb24gaGFzRGF0YShvYmopIHtcbiAgaWYgKG9iaiAmJiAoKG9iaiBpbnN0YW5jZW9mIEFycmF5ICYmIG9iai5sZW5ndGgpIHx8IChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgT2JqZWN0LnZhbHVlcyhvYmopLmxlbmd0aCkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlY29yYXRvci9kYXRhLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQGRvbnRFeGVjdXRlSWZOb0RhdGEoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBlbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lnpvb21Ub0ZpdCgpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAZG9udEV4ZWN1dGVJZk5vRGF0YSgpXG4gIHJlbmRlcigpIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5zZWxlY3QoJ2Rpdi5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIHBvc1swXSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyAncHgnKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcCcpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcm93ID0gdGFibGUuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGl0bGUpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRleHQpO1xuICAgIH0pO1xuXG4gICAgLy8gc2hvdyB0b29sdGlwXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBDb21wb3NpdGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW0NvbXBvc2l0ZV0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVycyA9IFtdO1xuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IVxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIG9wdGlvbnMuYXBwZW5kVG8gPSB0aGlzO1xuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnNldHRpbmdzKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY29tcG9zaXRlLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfSB0aGUgbG9nZ2VyIGZvciB0aGlzIGNsYXNzXG4gICAgICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzZXR0aW5ncyh7IHZlcmJvc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvYmFzZS5qcyIsImltcG9ydCBGcmFtZSBmcm9tICcuL3JlbmRlci9mcmFtZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXIvcmVuZGVyZXInO1xuXG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5sb2FkKGpzb24pLnJlbmRlcigpO1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFuY3kgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBodG1sIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgQUxMX0NBTlZBU1t0aGlzLmRhdGEuY2FudmFzLmlkXSA9IGZyYW1lLmNhbnZhcztcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIHZhciBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGNhbnZhcykge1xuICAgICAgY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5pbXBvcnQgTWFpbk1lbnUgZnJvbSAnLi9tZW51LW1haW4nO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lc3NhZ2VzKS5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpO1xuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBmcmFtZUlkID0gYEYke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvZnJhbWUuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICAvKipcbiAgICogU2luZ2xldG9uOiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBsb2dnZXIgYW5kIHdpbGwgcmV0dXJuZWQgdGhhdCBpbnN0YW5jZSxcbiAgICogZXZlcnl0aW1lIGEgbmV3IGluc3RhbmNlIGlzIHJlcXVlc3RlZC5cbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQsIHBhcnRpYWwpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKClcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBjYW52YXNJZCA9IHRoaXMuZGF0YS5jYW52YXMuaWQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNhbnZhcycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuYXR0cignd2lkdGgnLCB0aGlzLmRhdGEuY2FudmFzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmRhdGEuY2FudmFzLmhlaWdodCk7XG5cbiAgICB2YXIgem9vbSA9IGQzLnpvb20oKTtcblxuICAgIHZhciBjb250ZW50ID0gdGhpcy5lbGVtZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgaWYgKCFjb250ZW50Lm5vZGUoKSkge1xuICAgICAgY29udGVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGVudCcpO1xuICAgICAgem9vbS5vbihcInpvb21cIiwgem9vbWVkKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jYWxsKHpvb20pLm9uKFwiZGJsY2xpY2suem9vbVwiLCBudWxsKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQub24oXCJjbGlja1wiLCBzdG9wcGVkLCB0cnVlKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgdmFyIGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIHZhciBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDAwKVxuICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH0sJHt0cmFuc2xhdGVZfSlzY2FsZSgke3NjYWxlfSwke3NjYWxlfSlgKVxuICAgICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2FudmFzLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhciR7aW5kZXh9YCkuZGF0YShkYXRhc2V0c1trZXldKTtcblxuICAgICAgYmFyLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyJHtpbmRleH1gKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGJhci5tZXJnZShiYXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KTtcblxuICAgICAgdmFyIGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmxpbmUke2luZGV4fWApLmRhdGEoW2RhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZS5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvY2hhcnQtbGluZS5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5zY2F0dGVyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IEFib3V0TW9kYWwgZnJvbSAnLi9tb2RhbC1hYm91dCc7XG5pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgdmFyIG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIHZhciBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY2FudmFzLmlkKSwgXCJkaWFncmFtLnBuZ1wiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tZW51LmpzIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IGRvbnRFeGVjdXRlSWZOb0RhdGEgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrSGFuZGxlcjtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKClcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgSnVweXRlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgdmFyIGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIHZhciByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICB2YXIgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3knKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpLmZvY3VzKCk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyogZ2xvYmFsIGQzIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwodGhpcy5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3knKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIEFib3V0IHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICAvLyBjcmVkaXRzIGhlcmU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTA4NDEvaG93LWNhbi1pLXByZXR0eS1wcmludC1qc29uLXVzaW5nLWphdmFzY3JpcHQjYW5zd2VyLTcyMjA1MTBcbiAgc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAgICBqc29uID0ganNvbi5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gICAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrLV0/XFxkKyk/KS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xuICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGlmICgvOiQvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC90cnVlfGZhbHNlLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ251bGwnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgb3V0JCA9IHR5cGVvZiBleHBvcnRzICE9ICd1bmRlZmluZWQnICYmIGV4cG9ydHMgfHwgdHlwZW9mIGRlZmluZSAhPSAndW5kZWZpbmVkJyAmJiB7fSB8fCB0aGlzO1xuXG4gIHZhciBkb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgXCItLy9XM0MvL0RURCBTVkcgMS4xLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIgWzwhRU5USVRZIG5ic3AgXCImIzE2MDtcIj5dPic7XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBvYmogaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWlyZURvbU5vZGUoZWwpIHtcbiAgICBpZiAoIWlzRWxlbWVudChlbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRNTEVsZW1lbnQgb3IgU1ZHRWxlbWVudCBpcyByZXF1aXJlZDsgZ290ICcgKyBlbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNFeHRlcm5hbCh1cmwpIHtcbiAgICByZXR1cm4gdXJsICYmIHVybC5sYXN0SW5kZXhPZignaHR0cCcsMCkgPT0gMCAmJiB1cmwubGFzdEluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3QpID09IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5saW5lSW1hZ2VzKGVsLCBjYWxsYmFjaykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIHZhciBpbWFnZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpbWFnZScpLFxuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCxcbiAgICAgICAgY2hlY2tEb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGxlZnQgPT09IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgY2hlY2tEb25lKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbWFnZSkge1xuICAgICAgICB2YXIgaHJlZiA9IGltYWdlLmdldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCBcImhyZWZcIik7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaWYgKGlzRXh0ZXJuYWwoaHJlZi52YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkNhbm5vdCByZW5kZXIgZW1iZWRkZWQgaW1hZ2VzIGxpbmtpbmcgdG8gZXh0ZXJuYWwgaG9zdHM6IFwiK2hyZWYudmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIjtcbiAgICAgICAgaHJlZiA9IGhyZWYgfHwgaW1hZ2UuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IGhyZWY7XG4gICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJocmVmXCIsIGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZCBub3QgbG9hZCBcIitocmVmKTtcbiAgICAgICAgICAgIGxlZnQtLTtcbiAgICAgICAgICAgIGNoZWNrRG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0LS07XG4gICAgICAgICAgY2hlY2tEb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pKGltYWdlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVzKGVsLCBvcHRpb25zLCBjc3NMb2FkZWRDYWxsYmFjaykge1xuICAgIHZhciBzZWxlY3RvclJlbWFwID0gb3B0aW9ucy5zZWxlY3RvclJlbWFwO1xuICAgIHZhciBtb2RpZnlTdHlsZSA9IG9wdGlvbnMubW9kaWZ5U3R5bGU7XG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgLy8gZWFjaCBmb250IHRoYXQgaGFzIGV4dHJhbmwgbGluayBpcyBzYXZlZCBpbnRvIHF1ZXVlLCBhbmQgcHJvY2Vzc2VkXG4gICAgLy8gYXN5bmNocm9ub3VzbHlcbiAgICB2YXIgZm9udHNRdWV1ZSA9IFtdO1xuICAgIHZhciBzaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gc2hlZXRzW2ldLmNzc1J1bGVzO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZXNoZWV0IGNvdWxkIG5vdCBiZSBsb2FkZWQ6IFwiK3NoZWV0c1tpXS5ocmVmKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChydWxlcyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtYXRjaDsgaiA8IHJ1bGVzLmxlbmd0aDsgaisrLCBtYXRjaCA9IG51bGwpIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2pdO1xuICAgICAgICAgIGlmICh0eXBlb2YocnVsZS5zdHlsZSkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGV4dDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JUZXh0ID0gcnVsZS5zZWxlY3RvclRleHQ7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgaGFzIGFuIGludmFsaWQgc2VsZWN0b3I6IFwiJyArIHJ1bGUgKyAnXCInLCBlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAoc2VsZWN0b3JUZXh0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBlbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCkgfHwgZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBDU1Mgc2VsZWN0b3IgXCInICsgc2VsZWN0b3JUZXh0ICsgJ1wiJywgZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yUmVtYXAgPyBzZWxlY3RvclJlbWFwKHJ1bGUuc2VsZWN0b3JUZXh0KSA6IHJ1bGUuc2VsZWN0b3JUZXh0O1xuICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IG1vZGlmeVN0eWxlID8gbW9kaWZ5U3R5bGUocnVsZS5zdHlsZS5jc3NUZXh0KSA6IHJ1bGUuc3R5bGUuY3NzVGV4dDtcbiAgICAgICAgICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIgeyBcIiArIGNzc1RleHQgKyBcIiB9XFxuXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYocnVsZS5jc3NUZXh0Lm1hdGNoKC9eQGZvbnQtZmFjZS8pKSB7XG4gICAgICAgICAgICAgIC8vIGJlbG93IHdlIGFyZSB0cnlpbmcgdG8gZmluZCBtYXRjaGVzIHRvIGV4dGVybmFsIGxpbmsuIEUuZy5cbiAgICAgICAgICAgICAgLy8gQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIC8vICAgLy8gLi4uXG4gICAgICAgICAgICAgIC8vICAgc3JjOiBsb2NhbCgnQWJlbCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL2FiZWwvdjYvVXpOLWllalIxVm9YVTJPYy03THNidmVzWlcyeE9RLXhzTnFPNDdtNTVEQS53b2ZmMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgLy8gVGhpcyByZWdleCB3aWxsIHNhdmUgZXh0cm5hbCBsaW5rIGludG8gZmlyc3QgY2FwdHVyZSBncm91cFxuICAgICAgICAgICAgICB2YXIgZm9udFVybFJlZ2V4cCA9IC91cmxcXChbXCInXT8oLis/KVtcIiddP1xcKS87XG4gICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgY2hhbmdlZCB0byBzdXBwb3J0IG11bHRpcGxlIHVybCBkZWNsYXJhdGlvbnMgcGVyIGZvbnQuXG4gICAgICAgICAgICAgIHZhciBmb250VXJsTWF0Y2ggPSBydWxlLmNzc1RleHQubWF0Y2goZm9udFVybFJlZ2V4cCk7XG5cbiAgICAgICAgICAgICAgdmFyIGV4dGVybmFsRm9udFVybCA9IChmb250VXJsTWF0Y2ggJiYgZm9udFVybE1hdGNoWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgdmFyIGZvbnRVcmxJc0RhdGFVUkkgPSBleHRlcm5hbEZvbnRVcmwubWF0Y2goL15kYXRhOi8pO1xuICAgICAgICAgICAgICBpZiAoZm9udFVybElzRGF0YVVSSSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBpZ25vcmUgZGF0YSB1cmkgLSB0aGV5IGFyZSBhbHJlYWR5IGVtYmVkZGVkXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxGb250VXJsID0gJyc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gb2theSwgd2UgYXJlIGx1Y2t5LiBXZSBjYW4gZmV0Y2ggdGhpcyBmb250IGxhdGVyXG5cbiAgICAgICAgICAgICAgICAvL2hhbmRsZSB1cmwgaWYgcmVsYXRpdmVcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4uLycpKSB7XG4gICAgICAgICAgICAgICAgICBleHRlcm5hbEZvbnRVcmwgPSBzaGVldHNbaV0uaHJlZiArICcvLi4vJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXh0ZXJuYWxGb250VXJsLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgICAgICAgIGV4dGVybmFsRm9udFVybCA9IHNoZWV0c1tpXS5ocmVmICsgJy8uJyArIGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvbnRzUXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBydWxlLmNzc1RleHQsXG4gICAgICAgICAgICAgICAgICAvLyBQYXNzIHVybCByZWdleCwgc28gdGhhdCBvbmNlIGZvbnQgaXMgZG93bmxhZGVkLCB3ZSBjYW4gcnVuIGByZXBsYWNlKClgIG9uIGl0XG4gICAgICAgICAgICAgICAgICBmb250VXJsUmVnZXhwOiBmb250VXJsUmVnZXhwLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGV4dGVybmFsRm9udFVybCksXG4gICAgICAgICAgICAgICAgICB1cmw6IGV4dGVybmFsRm9udFVybFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSwgdXNlIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgY3NzICs9IHJ1bGUuY3NzVGV4dCArICdcXG4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm93IGFsbCBjc3MgaXMgcHJvY2Vzc2VkLCBpdCdzIHRpbWUgdG8gaGFuZGxlIHNjaGVkdWxlZCBmb250c1xuICAgIHByb2Nlc3NGb250UXVldWUoZm9udHNRdWV1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRGb250TWltZVR5cGVGcm9tVXJsKGZvbnRVcmwpIHtcbiAgICAgIHZhciBzdXBwb3J0ZWRGb3JtYXRzID0ge1xuICAgICAgICAnd29mZjInOiAnZm9udC93b2ZmMicsXG4gICAgICAgICd3b2ZmJzogJ2ZvbnQvd29mZicsXG4gICAgICAgICdvdGYnOiAnYXBwbGljYXRpb24veC1mb250LW9wZW50eXBlJyxcbiAgICAgICAgJ3R0Zic6ICdhcHBsaWNhdGlvbi94LWZvbnQtdHRmJyxcbiAgICAgICAgJ2VvdCc6ICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCcsXG4gICAgICAgICdzZm50JzogJ2FwcGxpY2F0aW9uL2ZvbnQtc2ZudCcsXG4gICAgICAgICdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCdcbiAgICAgIH07XG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IE9iamVjdC5rZXlzKHN1cHBvcnRlZEZvcm1hdHMpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBleHRlbnNpb24gPSBleHRlbnNpb25zW2ldO1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIG5vdCBidWxsZXQgcHJvb2YsIGl0IG5lZWRzIHRvIGhhbmRsZSBlZGdlIGNhc2VzLi4uXG4gICAgICAgIGlmIChmb250VXJsLmluZGV4T2YoJy4nICsgZXh0ZW5zaW9uKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9ybWF0c1tleHRlbnNpb25dO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHlvdSBzZWUgdGhpcyBlcnJvciBtZXNzYWdlLCB5b3UgcHJvYmFibHkgbmVlZCB0byB1cGRhdGUgY29kZSBhYm92ZS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Vua25vd24gZm9udCBmb3JtYXQgZm9yICcgKyBmb250VXJsKyAnOyBGb250cyBtYXkgbm90IGJlIHdvcmtpbmcgY29ycmVjdGx5Jyk7XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSkge1xuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gbG9hZCBmb250cyBvbmUgYnkgb25lIHVudGlsIHdlIGhhdmUgYW55dGhpbmcgaW4gdGhlIHF1ZXVlOlxuICAgICAgICB2YXIgZm9udCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICBwcm9jZXNzTmV4dChmb250KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG1vcmUgZm9udHMgdG8gbG9hZC5cbiAgICAgICAgY3NzTG9hZGVkQ2FsbGJhY2soY3NzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcHJvY2Vzc05leHQoZm9udCkge1xuICAgICAgICAvLyBUT0RPOiBUaGlzIGNvdWxkIGJlbmVmaXQgZnJvbSBjYWNoaW5nLlxuICAgICAgICB2YXIgb1JlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBvUmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmb250TG9hZGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIHRyYW5zZmVyRmFpbGVkKTtcbiAgICAgICAgb1JlcS5vcGVuKCdHRVQnLCBmb250LnVybCk7XG4gICAgICAgIG9SZXEucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgb1JlcS5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZm9udExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBUT0RPOiBpdCBtYXkgYmUgYWxzbyB3b3J0aCB0byB3YWl0IHVudGlsIGZvbnRzIGFyZSBmdWxseSBsb2FkZWQgYmVmb3JlXG4gICAgICAgICAgLy8gYXR0ZW1wdGluZyB0byByYXN0ZXJpemUgdGhlbS4gKGUuZy4gdXNlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Gb250RmFjZVNldCApXG4gICAgICAgICAgdmFyIGZvbnRCaXRzID0gb1JlcS5yZXNwb25zZTtcbiAgICAgICAgICB2YXIgZm9udEluQmFzZTY0ID0gYXJyYXlCdWZmZXJUb0Jhc2U2NChmb250Qml0cyk7XG4gICAgICAgICAgdXBkYXRlRm9udFN0eWxlKGZvbnQsIGZvbnRJbkJhc2U2NCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0cmFuc2ZlckZhaWxlZChlKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgdG8gbG9hZCBmb250IGZyb206ICcgKyBmb250LnVybCk7XG4gICAgICAgICAgY29uc29sZS53YXJuKGUpXG4gICAgICAgICAgY3NzICs9IGZvbnQudGV4dCArICdcXG4nO1xuICAgICAgICAgIHByb2Nlc3NGb250UXVldWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZvbnRTdHlsZShmb250LCBmb250SW5CYXNlNjQpIHtcbiAgICAgICAgICB2YXIgZGF0YVVybCA9ICd1cmwoXCJkYXRhOicgKyBmb250LmZvcm1hdCArICc7YmFzZTY0LCcgKyBmb250SW5CYXNlNjQgKyAnXCIpJztcbiAgICAgICAgICBjc3MgKz0gZm9udC50ZXh0LnJlcGxhY2UoZm9udC5mb250VXJsUmVnZXhwLCBkYXRhVXJsKSArICdcXG4nO1xuXG4gICAgICAgICAgLy8gc2NoZWR1bGUgbmV4dCBmb250IGRvd25sb2FkIG9uIG5leHQgdGljay5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcHJvY2Vzc0ZvbnRRdWV1ZShxdWV1ZSlcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpIHtcbiAgICAgIHZhciBiaW5hcnkgPSAnJztcbiAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICB2YXIgbGVuID0gYnl0ZXMuYnl0ZUxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGJpbmFyeSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgZGltKSB7XG4gICAgdmFyIHYgPSAoZWwudmlld0JveCAmJiBlbC52aWV3Qm94LmJhc2VWYWwgJiYgZWwudmlld0JveC5iYXNlVmFsW2RpbV0pIHx8XG4gICAgICAoY2xvbmUuZ2V0QXR0cmlidXRlKGRpbSkgIT09IG51bGwgJiYgIWNsb25lLmdldEF0dHJpYnV0ZShkaW0pLm1hdGNoKC8lJC8pICYmIHBhcnNlSW50KGNsb25lLmdldEF0dHJpYnV0ZShkaW0pKSkgfHxcbiAgICAgIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbV0gfHxcbiAgICAgIHBhcnNlSW50KGNsb25lLnN0eWxlW2RpbV0pIHx8XG4gICAgICBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShkaW0pKTtcbiAgICByZXR1cm4gKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IGlzTmFOKHBhcnNlRmxvYXQodikpKSA/IDAgOiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVFbmNvZGUoZGF0YSkge1xuICAgIGRhdGEgPSBlbmNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gICAgZGF0YSA9IGRhdGEucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZywgZnVuY3Rpb24obWF0Y2gsIHAxKSB7XG4gICAgICB2YXIgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JytwMSk7XG4gICAgICByZXR1cm4gYyA9PT0gJyUnID8gJyUyNScgOiBjO1xuICAgIH0pO1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZGF0YSk7XG4gIH1cblxuICBvdXQkLnByZXBhcmVTdmcgPSBmdW5jdGlvbihlbCwgb3B0aW9ucywgY2IpIHtcbiAgICByZXF1aXJlRG9tTm9kZShlbCk7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnNjYWxlID0gb3B0aW9ucy5zY2FsZSB8fCAxO1xuICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBmYWxzZTtcbiAgICB2YXIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XG5cbiAgICBpbmxpbmVJbWFnZXMoZWwsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHZhciBjbG9uZSA9IGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgICAgaWYoZWwudGFnTmFtZSA9PSAnc3ZnJykge1xuICAgICAgICB3aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgZ2V0RGltZW5zaW9uKGVsLCBjbG9uZSwgJ3dpZHRoJyk7XG4gICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IGdldERpbWVuc2lvbihlbCwgY2xvbmUsICdoZWlnaHQnKTtcbiAgICAgIH0gZWxzZSBpZihlbC5nZXRCQm94KSB7XG4gICAgICAgIHZhciBib3ggPSBlbC5nZXRCQm94KCk7XG4gICAgICAgIHdpZHRoID0gYm94LnggKyBib3gud2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGJveC55ICsgYm94LmhlaWdodDtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBjbG9uZS5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpLnJlcGxhY2UoL3RyYW5zbGF0ZVxcKC4qP1xcKS8sICcnKSk7XG5cbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdzdmcnKVxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2xvbmUpXG4gICAgICAgIGNsb25lID0gc3ZnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0ZW1wdGVkIHRvIHJlbmRlciBub24tU1ZHIGVsZW1lbnQnLCBlbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwidmVyc2lvblwiLCBcIjEuMVwiKTtcbiAgICAgIGlmICghY2xvbmUuZ2V0QXR0cmlidXRlKCd4bWxucycpKSB7XG4gICAgICAgIGNsb25lLnNldEF0dHJpYnV0ZU5TKHhtbG5zLCBcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICB9XG4gICAgICBpZiAoIWNsb25lLmdldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnKSkge1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgY2xvbmUucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICBjbG9uZS5yZW1vdmVBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ3ByZXNlcnZlQXNwZWN0UmF0aW8nLCAneE1pbllNaW4gbWVldCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2lkdGggKiBvcHRpb25zLnNjYWxlKTtcbiAgICAgICAgY2xvbmUuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGhlaWdodCAqIG9wdGlvbnMuc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFtcbiAgICAgICAgb3B0aW9ucy5sZWZ0IHx8IDAsXG4gICAgICAgIG9wdGlvbnMudG9wIHx8IDAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHRcbiAgICAgIF0uam9pbihcIiBcIikpO1xuXG4gICAgICB2YXIgZm9zID0gY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnZm9yZWlnbk9iamVjdCA+IConKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghZm9zW2ldLmdldEF0dHJpYnV0ZSgneG1sbnMnKSkge1xuICAgICAgICAgIGZvc1tpXS5zZXRBdHRyaWJ1dGVOUyh4bWxucywgXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBmb250cyB3ZSBuZWVkIHRvIGZldGNoIGZvbnQgZmlyc3QsIGFuZCB0aGVuIGlubGluZVxuICAgICAgLy8gaXRzIHVybCBpbnRvIGRhdGEtdXJpIGZvcm1hdCAoZW5jb2RlIGFzIGJhc2U2NCkuIFRoYXQncyB3aHkgc3R5bGVcbiAgICAgIC8vIHByb2Nlc3NpbmcgaXMgZG9uZSBhc3luY2hvbm91c2x5LiBPbmNlIGFsbCBpbmxpbmluZyBpcyBmaW5zaGVkXG4gICAgICAvLyBjc3NMb2FkZWRDYWxsYmFjaygpIGlzIGNhbGxlZC5cbiAgICAgIHN0eWxlcyhlbCwgb3B0aW9ucywgY3NzTG9hZGVkQ2FsbGJhY2spO1xuXG4gICAgICBmdW5jdGlvbiBjc3NMb2FkZWRDYWxsYmFjayhjc3MpIHtcbiAgICAgICAgLy8gaGVyZSBhbGwgZm9udHMgYXJlIGlubGluZWQsIHNvIHRoYXQgd2UgY2FuIHJlbmRlciB0aGVtIHByb3Blcmx5LlxuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHMuaW5uZXJIVE1MID0gXCI8IVtDREFUQVtcXG5cIiArIGNzcyArIFwiXFxuXV0+XCI7XG4gICAgICAgIHZhciBkZWZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGVmcycpO1xuICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHMpO1xuICAgICAgICBjbG9uZS5pbnNlcnRCZWZvcmUoZGVmcywgY2xvbmUuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgdmFyIG91dEh0bWwgPSBvdXRlci5pbm5lckhUTUw7XG4gICAgICAgICAgb3V0SHRtbCA9IG91dEh0bWwucmVwbGFjZSgvTlNcXGQrOmhyZWYvZ2ksICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmJyk7XG4gICAgICAgICAgY2Iob3V0SHRtbCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG91dCQuc3ZnQXNEYXRhVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgb3V0JC5wcmVwYXJlU3ZnKGVsLCBvcHRpb25zLCBmdW5jdGlvbihzdmcpIHtcbiAgICAgIHZhciB1cmkgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2EocmVFbmNvZGUoZG9jdHlwZSArIHN2ZykpO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKHVyaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvdXQkLnN2Z0FzUG5nVXJpID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMsIGNiKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5lbmNvZGVyVHlwZSA9IG9wdGlvbnMuZW5jb2RlclR5cGUgfHwgJ2ltYWdlL3BuZyc7XG4gICAgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyA9IG9wdGlvbnMuZW5jb2Rlck9wdGlvbnMgfHwgMC44O1xuXG4gICAgdmFyIGNvbnZlcnRUb1BuZyA9IGZ1bmN0aW9uKHNyYywgdywgaCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgICAgaWYob3B0aW9ucy5jYW52Zykge1xuICAgICAgICBvcHRpb25zLmNhbnZnKGNhbnZhcywgc3JjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNyYywgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKXtcbiAgICAgICAgY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3Zlcic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBuZztcbiAgICAgIHRyeSB7XG4gICAgICAgIHBuZyA9IGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5lbmNvZGVyVHlwZSwgb3B0aW9ucy5lbmNvZGVyT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICgodHlwZW9mIFNlY3VyaXR5RXJyb3IgIT09ICd1bmRlZmluZWQnICYmIGUgaW5zdGFuY2VvZiBTZWN1cml0eUVycm9yKSB8fCBlLm5hbWUgPT0gXCJTZWN1cml0eUVycm9yXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUmVuZGVyZWQgU1ZHIGltYWdlcyBjYW5ub3QgYmUgZG93bmxvYWRlZCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYihwbmcpO1xuICAgIH1cblxuICAgIGlmKG9wdGlvbnMuY2FudmcpIHtcbiAgICAgIG91dCQucHJlcGFyZVN2ZyhlbCwgb3B0aW9ucywgY29udmVydFRvUG5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjb252ZXJ0VG9QbmcoaW1hZ2UsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIGRhdGEgVVJJIGFzIGFuIGltYWdlIG9uIHRoZSBmb2xsb3dpbmcgU1ZHXFxuJyxcbiAgICAgICAgICAgIHdpbmRvdy5hdG9iKHVyaS5zbGljZSgyNikpLCAnXFxuJyxcbiAgICAgICAgICAgIFwiT3BlbiB0aGUgZm9sbG93aW5nIGxpbmsgdG8gc2VlIGJyb3dzZXIncyBkaWFnbm9zaXNcXG5cIixcbiAgICAgICAgICAgIHVyaSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZS5zcmMgPSB1cmk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvdXQkLmRvd25sb2FkID0gZnVuY3Rpb24obmFtZSwgdXJpKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG4gICAgICBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYih1cmlUb0Jsb2IodXJpKSwgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzYXZlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBkb3dubG9hZFN1cHBvcnRlZCA9ICdkb3dubG9hZCcgaW4gc2F2ZUxpbms7XG4gICAgICBpZiAoZG93bmxvYWRTdXBwb3J0ZWQpIHtcbiAgICAgICAgc2F2ZUxpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgICAgICBzYXZlTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNhdmVMaW5rKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgYmxvYiA9IHVyaVRvQmxvYih1cmkpO1xuICAgICAgICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIHNhdmVMaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgc2F2ZUxpbmsub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCBVUkxzLiBGYWxsaW5nIGJhY2sgdG8gc3RyaW5nIFVSTC4nKTtcbiAgICAgICAgICBzYXZlTGluay5ocmVmID0gdXJpO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMaW5rLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2F2ZUxpbmspO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVyaSwgJ190ZW1wJywgJ21lbnViYXI9bm8sdG9vbGJhcj1ubyxzdGF0dXM9bm8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cmlUb0Jsb2IodXJpKSB7XG4gICAgdmFyIGJ5dGVTdHJpbmcgPSB3aW5kb3cuYXRvYih1cmkuc3BsaXQoJywnKVsxXSk7XG4gICAgdmFyIG1pbWVTdHJpbmcgPSB1cmkuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc7JylbMF1cbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICB2YXIgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnVmZmVyXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuXG4gIG91dCQuc2F2ZVN2ZyA9IGZ1bmN0aW9uKGVsLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgcmVxdWlyZURvbU5vZGUoZWwpO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3V0JC5zdmdBc0RhdGFVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgb3V0JC5zYXZlU3ZnQXNQbmcgPSBmdW5jdGlvbihlbCwgbmFtZSwgb3B0aW9ucykge1xuICAgIHJlcXVpcmVEb21Ob2RlKGVsKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG91dCQuc3ZnQXNQbmdVcmkoZWwsIG9wdGlvbnMsIGZ1bmN0aW9uKHVyaSkge1xuICAgICAgb3V0JC5kb3dubG9hZChuYW1lLCB1cmkpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaWYgZGVmaW5lIGlzIGRlZmluZWQgY3JlYXRlIGFzIGFuIEFNRCBtb2R1bGVcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG91dCQ7XG4gICAgfSk7XG4gIH1cblxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9zYXZlLXN2Zy1hcy1wbmcvc2F2ZVN2Z0FzUG5nLmpzIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgZG9udEV4ZWN1dGVJZk5vRGF0YSB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEBkb250RXhlY3V0ZUlmTm9EYXRhKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgbWVzc2FnZXMubWFwKGZ1bmN0aW9uKGQpIHtcbiAgICAgIC8vIG9ubHkgcmVuZGVyIG5ldyBvbmVzXG4gICAgICBpZiAoIXNlbGYuZWxlbWVudC5zZWxlY3QoYGRpdiMke2QuaWR9YCkubm9kZSgpKSB7XG4gICAgICAgIHZhciByb3cgPSBzZWxmLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQuaWQpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQudGl0bGUpO1xuICAgICAgICByb3cuYXBwZW5kKCdzcGFuJykudGV4dChkLnRleHQpO1xuICAgICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAnc3Ryb25nJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpLnRleHQoXCJ4XCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIvbWVzc2FnZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
