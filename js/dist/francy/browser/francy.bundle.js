(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _frame = require('./render/frame');

var _frame2 = _interopRequireDefault(_frame);

var _renderer = require('./render/renderer');

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

},{"./render/frame":11,"./render/renderer":21}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

var _jsonUtils = require('../util/json-utils');

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

},{"../util/json-utils":24,"../util/logger":25}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _modalRequired = require('./modal-required');

var _modalRequired2 = _interopRequireDefault(_modalRequired);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./base":3,"./modal-required":20}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = require('./composite');

var _composite2 = _interopRequireDefault(_composite);

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

var _chart = require('./chart');

var _chart2 = _interopRequireDefault(_chart);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./chart":9,"./composite":10,"./graph":14}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = require('./chart');

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

},{"./chart":9,"./renderer":21,"./tooltip":22}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = require('./chart');

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

},{"./chart":9,"./renderer":21,"./tooltip":22}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _chart = require('./chart');

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

},{"./chart":9,"./renderer":21,"./tooltip":22}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = require('./chart-bar');

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = require('./chart-line');

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = require('./chart-scatter');

var _chartScatter2 = _interopRequireDefault(_chartScatter);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./chart-bar":6,"./chart-line":7,"./chart-scatter":8,"./renderer":21}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

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

},{"./renderer":21}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _composite = require('./composite');

var _composite2 = _interopRequireDefault(_composite);

var _canvas = require('./canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = require('./menu-main');

var _menuMain2 = _interopRequireDefault(_menuMain);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./canvas":5,"./composite":10,"./menu-main":16,"./message":18}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

var _component = require('../util/component');

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

},{"../util/component":23,"./graph":14,"./renderer":21}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _graph = require('./graph');

var _graph2 = _interopRequireDefault(_graph);

var _component = require('../util/component');

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

        parent.zoomToFit();
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

},{"../util/component":23,"./graph":14,"./renderer":21}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _graphTree = require('./graph-tree');

var _graphTree2 = _interopRequireDefault(_graphTree);

var _graphGeneric = require('./graph-generic');

var _graphGeneric2 = _interopRequireDefault(_graphGeneric);

var _menuContext = require('./menu-context');

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = require('./callback');

var _callback2 = _interopRequireDefault(_callback);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./callback":4,"./graph-generic":12,"./graph-tree":13,"./menu-context":15,"./renderer":21,"./tooltip":22}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./menu":17}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _modalAbout = require('./modal-about');

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

},{"./menu":17,"./modal-about":19}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = require('./callback');

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

},{"./callback":4,"./renderer":21}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./renderer":21}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _component = require('../util/component');

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

},{"../util/component":23,"./renderer":21}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _component = require('../util/component');

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

},{"../util/component":23,"./renderer":21}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

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

},{"./base":3}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _data = require('../decorator/data');

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

},{"../decorator/data":1,"./renderer":21}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterMathJax = RegisterMathJax;
exports.RegisterJupyterKeyboardEvents = RegisterJupyterKeyboardEvents;

var _logger = require("../util/logger");

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

},{"../util/logger":25}],24:[function(require,module,exports){
'use strict';

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

},{}],25:[function(require,module,exports){
'use strict';

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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL3JlbmRlci9iYXNlLmpzIiwic3JjL3JlbmRlci9jYWxsYmFjay5qcyIsInNyYy9yZW5kZXIvY2FudmFzLmpzIiwic3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LmpzIiwic3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJzcmMvcmVuZGVyL2ZyYW1lLmpzIiwic3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwic3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwic3JjL3JlbmRlci9ncmFwaC5qcyIsInNyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwic3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJzcmMvcmVuZGVyL21lbnUuanMiLCJzcmMvcmVuZGVyL21lc3NhZ2UuanMiLCJzcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwic3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsInNyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJzcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJzcmMvdXRpbC9jb21wb25lbnQuanMiLCJzcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwic3JjL3V0aWwvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsUSxHQUFBLFE7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsVUFBakMsRUFBNkM7QUFDbEQsUUFBSSxXQUFXLFdBQVcsS0FBMUI7O0FBRUEsZUFBVyxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsVUFBSSxDQUFDLFFB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LCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZXMocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFoYXNEYXRhKGdldFByb3BlcnR5KHRoaXMuZGF0YSwgcHJvcHMpKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTm8gZGF0YSBoZXJlIFske3Byb3BzfV0sIG5vdGhpbmcgdG8gcmVuZGVyLi4uIGNvbnRpbnVpbmcuLi5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIHByb3BlcnR5UGF0aCkge1xuXG4gIHZhciB0bXAgPSBvYmo7XG5cbiAgaWYgKHRtcCAmJiBwcm9wZXJ0eVBhdGgpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpO1xuXG4gICAgZm9yICh2YXIgcHJvcGVydHkgb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKCF0bXAuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHRtcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG1wID0gdG1wW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG1wO1xufVxuXG5mdW5jdGlvbiBoYXNEYXRhKG9iaikge1xuICByZXR1cm4gb2JqICYmICgob2JqIGluc3RhbmNlb2YgQXJyYXkgJiYgb2JqLmxlbmd0aCkgfHwgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCAmJiBPYmplY3QudmFsdWVzKG9iaikubGVuZ3RoKSk7XG59XG4iLCJpbXBvcnQgRnJhbWUgZnJvbSAnLi9yZW5kZXIvZnJhbWUnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyL3JlbmRlcmVyJztcblxuLy9pbXBvcnQgVHJhY2tlciBmcm9tICcuL3RyYWNrZXIvY2hhbmdlJztcblxubGV0IEFMTF9DQU5WQVMgPSB7fTtcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICogQGFjY2VzcyBwdWJsaWNcbiAqIFxuICogQHZlcnNpb24gMC41LjBcbiAqIFxuICogQGV4YW1wbGVcbiAqIGxldCBmcmFuY3kgPSBuZXcgRnJhbmN5KHt2ZXJib3NlOiB0cnVlLCBhcHBlbmRUbzogJyNkaXYtaWQnLCBjYWxsYmFja0hhbmRsZXI6IGNvbnNvbGUubG9nfSk7XG4gKiBmcmFuY3kubG9hZChqc29uKS5yZW5kZXIoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbmN5IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIHJlbmRlciBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCBcbiAgICogdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0aGUgaHRtbCBlbGVtZW50IGNyZWF0ZWRcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgdmFyIGZyYW1lID0gbmV3IEZyYW1lKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIEFMTF9DQU5WQVNbdGhpcy5kYXRhLmNhbnZhcy5pZF0gPSBmcmFtZTtcbiAgICByZXR1cm4gZnJhbWUuZWxlbWVudC5ub2RlKCk7XG4gIH1cblxuICB1bnJlbmRlcihpZCkge1xuICAgIGRlbGV0ZSBBTExfQ0FOVkFTW2lkXTtcbiAgfVxufVxuXG50cnkge1xuICBleHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4gIC8vIGhhbmRsZSBldmVudHMgb24gcmVzaXplXG4gIHZhciBvbGRSZXNpemUgPSB3aW5kb3cub25yZXNpemU7XG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHpvb20gdG8gZml0IGFsbCBjYW52YXMgb24gcmVzaXplXG4gICAgT2JqZWN0LnZhbHVlcyhBTExfQ0FOVkFTKS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgICBmcmFtZS5jYW52YXMuem9vbVRvRml0KCk7XG4gICAgfSk7XG4gICAgLy8gY2FsbCBvbGQgcmVzaXplIGZ1bmN0aW9uIGlmIGFueSFcbiAgICBpZiAodHlwZW9mIG9sZFJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2xkUmVzaXplKCk7XG4gICAgfVxuICB9O1xufVxuY2F0Y2ggKGUpIHtcbiAgZXhwb3J0cy5GcmFuY3kgPSBGcmFuY3k7XG59XG4iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi4vdXRpbC9qc29uLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMuc2V0dGluZ3MoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHtMb2dnZXJ9IHRoZSBsb2dnZXIgZm9yIHRoaXMgY2xhc3NcbiAgICAgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHNldHRpbmdzKHsgdmVyYm9zZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLm9wdGlvbnMudmVyYm9zZSA9IHZlcmJvc2UgfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZFRvID0gYXBwZW5kVG8gfHwgdGhpcy5vcHRpb25zLnZlcmJvc2U7XG4gICAgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IGNhbGxiYWNrSGFuZGxlciB8fCB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbG9hZChqc29uLCBwYXJ0aWFsKSB7XG4gICAgbGV0IGRhdGEgPSBKc29uVXRpbHMucGFyc2UoanNvbiwgcGFydGlhbCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGxvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2c7XG4gIH1cblxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcbmltcG9ydCBSZXF1aXJlZEFyZ3NNb2RhbCBmcm9tICcuL21vZGFsLXJlcXVpcmVkJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbGxiYWNrJylcbiAgZXhlY3V0ZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIG9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyID0gKGNhbGJhY2tPYmopID0+IHRoaXMuX2V4ZWN1dGUuY2FsbCh0aGlzLCBjYWxiYWNrT2JqKTtcbiAgICAgIHJldHVybiBuZXcgUmVxdWlyZWRBcmdzTW9kYWwob3B0aW9ucykubG9hZCh0aGlzLmRhdGEsIHRydWUpLnJlbmRlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRyaWdnZXIgaXMgdGhlIGV4cGVjdGVkIGNvbW1hbmQgb24gR0FQIGZvciB0aGlzIGV2ZW50cyFcbiAgICAgIHRoaXMuX2V4ZWN1dGUodGhpcy5kYXRhLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZXhlY3V0ZShjYWxiYWNrT2JqKSB7XG4gICAgdGhpcy5jYWxsYmFjayhgVHJpZ2dlcigke0pTT04uc3RyaW5naWZ5KEpTT04uc3RyaW5naWZ5KGNhbGJhY2tPYmopKX0pO2ApO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hZGQodGhpcy5ncmFwaCkuYWRkKHRoaXMuY2hhcnQpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpIHtcbiAgICAgIHNlbGYuZWxlbWVudC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVkpLnNjYWxlKHNjYWxlLCBzY2FsZSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIGNvbnRlbnQuYXR0cihcInRyYW5zZm9ybVwiLCBkMy5ldmVudC50cmFuc2Zvcm0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BwZWQoKSB7XG4gICAgICBpZiAoZDMuZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgeyBkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHpvb21Ub0ZpdCgpIHtcbiAgICAgIC8vIG9ubHkgZXhlY3V0ZSBpZiBlbmFibGUsIG9mIGNvdXJzZVxuICAgICAgaWYgKHNlbGYuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBjb250ZW50Lm5vZGUoKS5nZXRCQm94KCk7XG5cbiAgICAgICAgdmFyIGNsaWVudEJvdW5kcyA9IHNlbGYuZWxlbWVudC5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgZnVsbFdpZHRoID0gY2xpZW50Qm91bmRzLnJpZ2h0IC0gY2xpZW50Qm91bmRzLmxlZnQsXG4gICAgICAgICAgZnVsbEhlaWdodCA9IGNsaWVudEJvdW5kcy5ib3R0b20gLSBjbGllbnRCb3VuZHMudG9wO1xuXG4gICAgICAgIHZhciB3aWR0aCA9IGJvdW5kcy53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBib3VuZHMuaGVpZ2h0O1xuXG4gICAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIG1pZFggPSBib3VuZHMueCArIHdpZHRoIC8gMixcbiAgICAgICAgICBtaWRZID0gYm91bmRzLnkgKyBoZWlnaHQgLyAyO1xuXG4gICAgICAgIHZhciBzY2FsZSA9IDAuOSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSBmdWxsV2lkdGggLyAyIC0gc2NhbGUgKiBtaWRYLFxuICAgICAgICAgIHRyYW5zbGF0ZVkgPSBmdWxsSGVpZ2h0IC8gMiAtIHNjYWxlICogbWlkWTtcblxuICAgICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbihzZWxmLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVh9LCR7dHJhbnNsYXRlWX0pc2NhbGUoJHtzY2FsZX0sJHtzY2FsZX0pYClcbiAgICAgICAgICAub24oJ2VuZCcsICgpID0+IHVwZGF0ZVpvb20odHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgc2NhbGUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2FudmFzSWQgPSBgQ2FudmFzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jYW52YXMnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkIFske2NhbnZhc0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmF0dHIoJ3dpZHRoJywgdGhpcy5kYXRhLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywgdGhpcy5kYXRhLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdmFyIHpvb20gPSBkMy56b29tKCk7XG5cbiAgICB2YXIgY29udGVudCA9IHRoaXMuZWxlbWVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIGlmICghY29udGVudC5ub2RlKCkpIHtcbiAgICAgIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRlbnQnKTtcbiAgICAgIHpvb20ub24oXCJ6b29tXCIsIHpvb21lZCk7XG4gICAgICAvLyByZW1vdmUgem9vbSBvbiBkb3VibGUgY2xpY2shXG4gICAgICB0aGlzLmVsZW1lbnQuY2FsbCh6b29tKS5vbihcImRibGNsaWNrLnpvb21cIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50Lm9uKFwiY2xpY2tcIiwgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuem9vbVRvRml0ID0gdGhpcy56b29tVG9GaXQgPSB6b29tVG9GaXQ7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB6b29tVG9GaXQoKTtcbiAgICB9LCB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKS5yYW5nZShbMCwgd2lkdGhdKS5wYWRkaW5nKDAuMSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgYXhpcy54LmRvbWFpbiA9IENoYXJ0LmRvbWFpblJhbmdlKHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTtcbiAgICAgIHguZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIH1cblxuICAgIHZhciBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1iYXJzJyk7XG5cbiAgICBpZiAoIWJhcnNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGJhcnNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYmFycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBiYXIgPSBiYXJzR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LWJhci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIGJhci5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgYmFyRW50ZXIgPSBiYXIuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktYmFyLSR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoJ3gnLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGF4aXMueC5kb21haW5baV0pICsgaW5kZXggKiAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpOyB9KVxuICAgICAgICAuYXR0cignd2lkdGgnLCAoeC5iYW5kd2lkdGgoKSAvIGRhdGFzZXROYW1lcy5sZW5ndGgpIC0gMSlcbiAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXJFbnRlci5tZXJnZShiYXIpXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZUNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluZXMnKTtcblxuICAgIGlmICghbGluZXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxpbmVzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmVzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHZhbHVlTGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KTtcblxuICAgICAgdmFyIGxpbmUgPSBsaW5lc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1saW5lLSR7aW5kZXh9YCkuZGF0YShbZGF0YXNldHNba2V5XV0pO1xuXG4gICAgICBsaW5lLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHZhciBsaW5lRW50ZXIgPSBsaW5lLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktbGluZS0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCdkJywgdmFsdWVMaW5lKVxuICAgICAgICAub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAubG9hZChDaGFydC50b29sdGlwKGtleSwgZCksIHRydWUpLnJlbmRlcigpO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZUVudGVyLm1lcmdlKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC5zaG93TGVnZW5kKSB7XG5cbiAgICAgIHZhciBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJy5mcmFuY3ktbGVnZW5kJyk7XG5cbiAgICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbGVnZW5kID0gbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCdnJykuZGF0YShkYXRhc2V0TmFtZXMuc2xpY2UoKSk7XG5cbiAgICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgMTkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyA4MClcbiAgICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2F0dGVyQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBheGlzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5heGlzLFxuICAgICAgZGF0YXNldHMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzAsIHdpZHRoXSkuZG9tYWluKGF4aXMueC5kb21haW4pO1xuICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSkuZG9tYWluKGF4aXMueS5kb21haW4pO1xuXG4gICAgdmFyIHRtcCA9IFtdO1xuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGtleSA9PiB0bXAgPSB0bXAuY29uY2F0KGRhdGFzZXRzW2tleV0pKTtcblxuICAgIGlmICghYXhpcy55LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodG1wLCBkID0+IGQpXSk7XG4gICAgfVxuXG4gICAgaWYgKCFheGlzLnguZG9tYWluLmxlbmd0aCkge1xuICAgICAgeC5kb21haW4oWzAsIHRtcC5sZW5ndGggLyBkYXRhc2V0TmFtZXMubGVuZ3RoXSk7XG4gICAgfVxuXG4gICAgdmFyIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXNjYXR0ZXJzJyk7XG5cbiAgICBpZiAoIXNjYXR0ZXJHcm91cC5ub2RlKCkpIHtcbiAgICAgIHNjYXR0ZXJHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktc2NhdHRlcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgc2NhdHRlciA9IHNjYXR0ZXJHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktc2NhdHRlci0ke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIHNjYXR0ZXJFbnRlciA9IHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKFwiclwiLCA1KVxuICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoaSk7IH0pXG4gICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAwLjUpXG4gICAgICAgICAgICAuYXR0cigncicsIDEwKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDEpXG4gICAgICAgICAgICAuYXR0cigncicsIDUpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIHNjYXR0ZXJFbnRlci5tZXJnZShzY2F0dGVyKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gJy4vY2hhcnQtYmFyJztcbmltcG9ydCBMaW5lQ2hhcnQgZnJvbSAnLi9jaGFydC1saW5lJztcbmltcG9ydCBTY2F0dGVyQ2hhcnQgZnJvbSAnLi9jaGFydC1zY2F0dGVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmNoYXJ0JylcbiAgcmVuZGVyKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJiYXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IEJhckNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbmV3IFNjYXR0ZXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgdG9vbHRpcChkYXRhc2V0LCB2YWx1ZSkge1xuICAgIHJldHVybiB7IFwiQVwiOiB7ICd0aXRsZSc6ICdEYXRhc2V0JywgJ3RleHQnOiBkYXRhc2V0IH0sIFwiQlwiOiB7ICd0aXRsZSc6ICdWYWx1ZScsICd0ZXh0JzogdmFsdWUgfSB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZG9tYWluUmFuZ2UobWF4KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IEFycmF5KG1heCksIChfLCBpKSA9PiBpKS5tYXAoeCA9PiB4KTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlcnMgPSBbXTtcbiAgfVxuXG4gIGFkZChyZW5kZXJlcikge1xuICAgIHRoaXMucmVuZGVyZXJzLnB1c2gocmVuZGVyZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4oKSB7XG4gICAgLy8gdXBkYXRlIGNoaWxkcmVuIHJlbmRlcmluZyB3aXRoIGEgbmV3IHBhcmVudCFcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBvcHRpb25zLmFwcGVuZFRvID0gdGhpcztcbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAodmFyIHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci5zZXR0aW5ncyhvcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IE1haW5NZW51IGZyb20gJy4vbWVudS1tYWluJztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lIGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVudSA9IG5ldyBNYWluTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgTWVzc2FnZSh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMubWVzc2FnZXMpLmFkZCh0aGlzLm1lbnUpLmFkZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICB2YXIgZnJhbWVJZCA9IGBGcmFtZS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYGRpdiMke2ZyYW1lSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBGcmFtZSBbJHtmcmFtZUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmF0dHIoJ2lkJywgZnJhbWVJZCk7XG4gICAgfVxuXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGZyYW1lIHdpdGggaWQgWyR7ZnJhbWVJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBGcmFtZSB1cGRhdGVkIFske2ZyYW1lSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbigpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL2dyYXBoJztcbmltcG9ydCB7IFJlZ2lzdGVyTWF0aEpheCB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbmVyaWNHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIHNpbXVsYXRpb25BY3RpdmUgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnNpbXVsYXRpb247XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLm5vZGVzKSA6IFtdLFxuICAgICAgY2FudmFzTGlua3MgPSB0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmxpbmtzKSA6IFtdO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHZhciBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmtzID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluaycpLmRhdGEoKTtcbiAgICB2YXIgbGlua3NUb0FkZCA9IFtdO1xuICAgIGNhbnZhc0xpbmtzLmZvckVhY2gobCA9PiB7XG4gICAgICB2YXIgbGluayA9IGxpbmtzLmZpbmQoZCA9PiBkLmlkID09PSBsLmlkKTtcbiAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgIGxpbmtzVG9BZGQucHVzaChsaW5rKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsaW5rc1RvQWRkLnB1c2gobCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKGxpbmtzVG9BZGQsIGQgPT4gZC5pZCk7XG5cbiAgICB2YXIgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgIGlmICghbm9kZUdyb3VwLm5vZGUoKSkge1xuICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgIH1cblxuICAgIHZhciBub2RlcyA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKS5kYXRhKCk7XG4gICAgdmFyIG5vZGVzVG9BZGQgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlcy5maW5kKGQgPT4gZC5pZCA9PT0gbi5pZCk7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICBub2Rlc1RvQWRkLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbm9kZXNUb0FkZC5wdXNoKG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YShub2Rlc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgaWYgKG5vZGUuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbm9kZS5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbGluay5lbnRlcigpLmRhdGEoKS5sZW5ndGggPT0gMCAmJlxuICAgICAgbGluay5leGl0KCkuZGF0YSgpLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpO1xuXG4gICAgbGlua0VudGVyLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rIGxpbmUuZnJhbmN5LWVkZ2UnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdkaXJlY3RlZCcpIHtcbiAgICAgIC8vIHRoaXMgbWVhbnMgd2UgbmVlZCBhcnJvd3MsIHNvIHdlIGFwcGVuZCB0aGUgbWFya2VyXG4gICAgICBwYXJlbnQuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgc3R5bGUgb2YgdGhlIGxpbmtcbiAgICAgIGxpbmsuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGUnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA1KSlcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ2ZyYW5jeS1zeW1ib2wnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKTtcblxuICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAuYXR0cigneCcsIGQgPT4gLShkLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgbm9kZS5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguZHJhZykge1xuICAgICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgIW5vZGUuZW1wdHkoKSkge1xuXG4gICAgICBHcmFwaC5hcHBseUV2ZW50cyhub2RlLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaG93TmVpZ2hib3Vycykge1xuICAgICAgICB2YXIgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpbXVsYXRpb25BY3RpdmUpIHtcbiAgICAgIC8vIENhbnZhcyBGb3JjZXNcbiAgICAgIHZhciBjZW50ZXJGb3JjZSA9IGQzLmZvcmNlQ2VudGVyKCkueCh3aWR0aCAvIDIpLnkoaGVpZ2h0IC8gMik7XG4gICAgICB2YXIgbWFueUZvcmNlID0gZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC1jYW52YXNOb2Rlcy5sZW5ndGggKiA1MCk7XG4gICAgICB2YXIgbGlua0ZvcmNlID0gZDMuZm9yY2VMaW5rKGNhbnZhc0xpbmtzKS5pZChkID0+IGQuaWQpLmRpc3RhbmNlKDUwKTtcbiAgICAgIHZhciBjb2xsaWRlRm9yY2UgPSBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUgKiAyKTtcblxuICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4wNSk7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWSBwb3NpdGlvbiAtIHVuZGlyZWN0ZWQvZGlyZWN0ZWQgZ3JhcGhzIGZhbGwgaGVyZVxuICAgICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShoZWlnaHQgLyAyKS5zdHJlbmd0aCgwLjI1KTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2hhc3NlJykge1xuICAgICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICAgICAgZm9yY2VYID0gZDMuZm9yY2VYKHdpZHRoIC8gMikuc3RyZW5ndGgoMC4zKTtcbiAgICAgICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllciB0byBzaW11bGF0ZSB0aGUgaGFzc2UgZGlhZ3JhbVxuICAgICAgICBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNzUpLnN0cmVuZ3RoKDAuNyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKCkubm9kZXMobm9kZXNUb0FkZClcbiAgICAgICAgLmZvcmNlKFwiY2hhcmdlXCIsIG1hbnlGb3JjZSlcbiAgICAgICAgLmZvcmNlKFwibGlua1wiLCBsaW5rRm9yY2UpXG4gICAgICAgIC5mb3JjZShcImNlbnRlclwiLCBjZW50ZXJGb3JjZSlcbiAgICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgICAuZm9yY2UoXCJjb2xsaWRlXCIsIGNvbGxpZGVGb3JjZSlcbiAgICAgICAgLm9uKCd0aWNrJywgdGlja2VkKVxuICAgICAgICAub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gem9vbSB0byBmaXQgd2hlbiBzaW11bGF0aW9uIGlzIG92ZXJcbiAgICAgICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvL2ZvcmNlIHNpbXVsYXRpb24gcmVzdGFydFxuICAgICAgc2ltdWxhdGlvbi5hbHBoYSgwLjUpLnJlc3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyB3ZWxsLCBzaW11bGF0aW9uIGlzIG9mZiwgYXBwbHkgZml4ZWQgcG9zaXRpb25zIGFuZCB6b29tIHRvIGZpdCBub3dcbiAgICAgIHRpY2tlZCgpO1xuICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZS5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgICAgfVxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSAmJiBzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICB9XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgaSA9IDAsXG4gICAgICByb290O1xuXG4gICAgdmFyIHRyZWVtYXAgPSBkMy50cmVlKCkuc2l6ZShbaGVpZ2h0LCB3aWR0aF0pO1xuXG4gICAgcm9vdCA9IGQzLmhpZXJhcmNoeSh0aGlzLnRyZWVEYXRhLCBkID0+IGQuY2hpbGRyZW4pO1xuICAgIHJvb3QueDAgPSBoZWlnaHQgLyAyO1xuICAgIHJvb3QueTAgPSAwO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguY29sbGFwc2VkKSB7XG4gICAgICByb290LmNoaWxkcmVuLmZvckVhY2goY29sbGFwc2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZS5jYWxsKHRoaXMsIHJvb3QpO1xuXG4gICAgZnVuY3Rpb24gY29sbGFwc2UoZCkge1xuICAgICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKHNvdXJjZSkge1xuICAgICAgdmFyIHRyZWVEYXRhID0gdHJlZW1hcChyb290KTtcblxuICAgICAgdmFyIG5vZGVzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKSxcbiAgICAgICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gICAgICBub2Rlcy5mb3JFYWNoKGQgPT4gZC55ID0gZC5kZXB0aCAqIDE1MCk7XG5cbiAgICAgIHZhciBsaW5rR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgICBpZiAoIWxpbmtHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuZGF0YShsaW5rcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1lZGdlJylcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgdmFyIG8gPSB7IHg6IHNvdXJjZS54MCwgeTogc291cmNlLnkwIH07XG4gICAgICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgICAgICB9KTtcblxuICAgICAgbGlua0VudGVyLm1lcmdlKGxpbmspXG4gICAgICAgIC50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pLmF0dHIoJ2QnLCBkID0+IGRpYWdvbmFsKGQsIGQucGFyZW50KSk7XG5cbiAgICAgIGxpbmsuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ2QnLCAoKSA9PiB7XG4gICAgICAgICAgdmFyIG8gPSB7IHg6IHNvdXJjZS54LCB5OiBzb3VyY2UueSB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSkucmVtb3ZlKCk7XG5cbiAgICAgIGxpbmtHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LWVkZ2UnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNjY2MnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBkLngwID0gZC54O1xuICAgICAgICBkLnkwID0gZC55O1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIGRpYWdvbmFsKHMsIGQpIHtcbiAgICAgICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlcycpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKVxuICAgICAgICAuZGF0YShub2RlcywgZCA9PiBkLmlkIHx8IChkLmlkID0gKytpKSk7XG5cbiAgICAgIHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueTB9LCR7c291cmNlLngwfSlgKTtcblxuICAgICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLmRhdGEudHlwZSkpLnNpemUoZCA9PiBkLmRhdGEuc2l6ZSAqIDEwMCkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktc3ltYm9sJyk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVsJylcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC5kYXRhLnRpdGxlLmxlbmd0aCAqIDIuNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKVxuICAgICAgICAudGV4dChkID0+IGQuZGF0YS50aXRsZSk7XG5cbiAgICAgIHZhciBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gICAgICBub2RlVXBkYXRlLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgbm9kZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgKCkgPT4gYHRyYW5zbGF0ZSgke3NvdXJjZS55fSwke3NvdXJjZS54fSlgKVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIG5vZGVHcm91cC5zZWxlY3RBbGwoJ3BhdGguZnJhbmN5LXN5bWJvbCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdsaWdodHN0ZWVsYmx1ZScgOiBHcmFwaC5jb2xvcnMoZC5kYXRhLmxheWVyICogNSkpXG4gICAgICAgIC5zdHlsZSgnY3Vyc29yJywgZCA9PiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnKTtcblxuICAgICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcbiAgICAgIEdyYXBoLmFwcGx5RXZlbnRzKG5vZGUsIHRoaXMub3B0aW9ucyk7XG5cbiAgICAgIHZhciBub2RlT25DbGljayA9IG5vZGUub24oJ2NsaWNrJyk7XG4gICAgICBub2RlLm9uKCdjbGljaycsIChkKSA9PiB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgbm9kZU9uQ2xpY2suY2FsbCh0aGlzLCBkLmRhdGEpO1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWdobGlnaHQgY29ubmVjdGVkIG5vZGVzXG4gICAgICAgIGNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIGNoaWxkcmVuIG9uIGNsaWNrLlxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmdW5jdGlvbiBjbGljayhkKSB7XG4gICAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQuY2hpbGRyZW4gPSBkLl9jaGlsZHJlbjtcbiAgICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlLmNhbGwoc2VsZiwgZCk7XG4gICAgICB9XG5cbiAgICAgIFJlZ2lzdGVyTWF0aEpheCh0aGlzLlNWR1BhcmVudCk7XG5cbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIGZsYXQgZGF0YSBpbnRvIHRyZWUgZGF0YSBieSBhbmFseXNpbmcgdGhlIHBhcmVudHMgb2YgZWFjaCBub2RlXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IHRoZSBkYXRhIHRyYW5zZm9ybWVkIGluIHRyZWUgZGF0YVxuICAgKi9cbiAgZ2V0IHRyZWVEYXRhKCkge1xuICAgIHZhciBjYW52YXNOb2RlcyA9IHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMgPyBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgubm9kZXMpIDogW107XG4gICAgdmFyIGRhdGFNYXAgPSBjYW52YXNOb2Rlcy5yZWR1Y2UoZnVuY3Rpb24obWFwLCBub2RlKSB7XG4gICAgICBtYXBbbm9kZS5pZF0gPSBub2RlO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCB7fSk7XG4gICAgdmFyIHRyZWVEYXRhID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gZGF0YU1hcFtub2RlLnBhcmVudF07XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIChwYXJlbnQuY2hpbGRyZW4gfHwgKHBhcmVudC5jaGlsZHJlbiA9IFtdKSkucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0cmVlRGF0YS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlRGF0YVswXTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVHJlZUdyYXBoIGZyb20gJy4vZ3JhcGgtdHJlZSc7XG5pbXBvcnQgR2VuZXJpY0dyYXBoIGZyb20gJy4vZ3JhcGgtZ2VuZXJpYyc7XG5pbXBvcnQgQ29udGV4dE1lbnUgZnJvbSAnLi9tZW51LWNvbnRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzLmdyYXBoJylcbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3RyZWUnOlxuICAgICAgICBlbGVtZW50ID0gbmV3IFRyZWVHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gbmV3IEdlbmVyaWNHcmFwaCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxuICBzdGF0aWMgYXBwbHlFdmVudHMoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcChvcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUob3B0aW9ucyk7XG4gICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudFxuICAgICAgLm9uKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUubG9hZChkLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY29udGV4dG1lbnUnKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgZCA9IGQuZGF0YSB8fCBkO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VlbnRlcicsIGQgPT4ge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIHNob3cgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLmxvYWQoZC5tZXNzYWdlcywgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2subG9hZCh7IGNhbGxiYWNrOiBjYiB9LCB0cnVlKS5leGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRNZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnbWVudXMnKVxuICByZW5kZXIoKSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51LWhvbGRlcicpO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgcG9zWzBdICsgNSArICdweCcpLnN0eWxlKCd0b3AnLCBwb3NbMV0gKyA1ICsgJ3B4Jyk7XG5cbiAgICAvLyBzaG93IHRoZSBjb250ZXh0IG1lbnVcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5ub2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkZXN0cm95IG1lbnVcbiAgICBkMy5zZWxlY3QoJ2JvZHknKS5vbignY2xpY2suZnJhbmN5LWNvbnRleHQtbWVudScsICgpID0+IHRoaXMudW5yZW5kZXIoKSk7XG5cbiAgICAvLyB0aGlzIGdldHMgZXhlY3V0ZWQgd2hlbiBhIGNvbnRleHRtZW51IGV2ZW50IG9jY3Vyc1xuICAgIHZhciBtZW51ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudScpLmFwcGVuZCgndWwnKTtcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKG1lbnUsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgQWJvdXRNb2RhbCBmcm9tICcuL21vZGFsLWFib3V0Jztcbi8vaW1wb3J0ICogYXMgU3ZnVG9QbmcgZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL3NhdmUtc3ZnLWFzLXBuZy9zYXZlU3ZnQXNQbmcnO1xuXG4vKiBnbG9iYWwgZDMgd2luZG93ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgTWVudSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYWJvdXRNb2RhbCA9IG5ldyBBYm91dE1vZGFsKHRoaXMub3B0aW9ucyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xhc2hlcyB3aXRoIHRoZSBjYW52YXMgaXRzZWxmIVxuICAgIHZhciBtZW51SWQgPSBgTWFpbk1lbnUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBNYWluIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUtaG9sZGVyJykuYXR0cignaWQnLCBtZW51SWQpO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIHJlYnVpbGQgbWVudSBhZ2FpblxuICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ3VsJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudScpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbCh0aGlzLmRhdGEuY2FudmFzLnRpdGxlKTtcbiAgICB9XG5cbiAgICB2YXIgZW50cnkgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdsaScpO1xuICAgIGVudHJ5LmFwcGVuZCgnYScpLmh0bWwoJ0ZyYW5jeScpO1xuICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmNhbnZhcy56b29tVG9GaXQoKSkuYXR0cigndGl0bGUnLCAnWm9vbSB0byBGaXQnKS5odG1sKCdab29tIHRvIEZpdCcpO1xuICAgIH1cbiAgICAvL2NvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IFN2Z1RvUG5nLnNhdmVTdmdBc1BuZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRhdGEuY2FudmFzLmlkKSwgXCJkaWFncmFtLnBuZ1wiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLm9uKCdjbGljaycsICgpID0+IGFib3V0TW9kYWwubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbWVudXMgYW5kIGZsYXR0ZW4gdGhlbSFcbiAgICB2YXIgbWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEuY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZSh0aGlzLmVsZW1lbnQsIG1lbnVzSXRlcmF0b3IpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYE1haW4gTWVudSB1cGRhdGVkIFske21lbnVJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShhcHBlbmRUbywgbWVudXNJdGVyYXRvcikge1xuICAgIHdoaWxlIChtZW51c0l0ZXJhdG9yLmhhc05leHQoKSkge1xuICAgICAgdmFyIG1lbnVJdGVtID0gbWVudXNJdGVyYXRvci5uZXh0KCk7XG4gICAgICB2YXIgZW50cnkgPSBhcHBlbmRUby5hcHBlbmQoJ2xpJyk7XG4gICAgICB2YXIgYWN0aW9uID0gZW50cnkuc2VsZWN0QWxsKCdhJykuZGF0YShbbWVudUl0ZW1dKS5lbnRlcigpLmFwcGVuZCgnYScpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgaWYgKG1lbnVJdGVtLmNhbGxiYWNrICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0uY2FsbGJhY2spLmxlbmd0aCkge1xuICAgICAgICBhY3Rpb24ub24oJ2NsaWNrJywgKGQpID0+IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpLmxvYWQoZCwgdHJ1ZSkuZXhlY3V0ZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICB2YXIgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMubWVzc2FnZXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlcykubWFwKChrZXkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50eXBlLFxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnRpdGxlLFxuICAgICAgICB0ZXh0OiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGV4dFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHZhciBhbGVydHNJZCA9IGBNZXNzYWdlcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke2FsZXJ0c0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBkaXYgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWVzc2FnZS1ob2xkZXInKS5hdHRyKCdpZCcsIGFsZXJ0c0lkKTtcbiAgICB9XG5cbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2Rpdi5mcmFuY3ktYWxlcnQnKS5kYXRhKG1lc3NhZ2VzLCBkID0+IGQuaWQpO1xuICAgIHZhciBtZXNzYWdlRW50ZXIgPSBtZXNzYWdlLmVudGVyKCkuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gYGZyYW5jeS1hbGVydCBhbGVydC0ke2QudHlwZX1gKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH0pO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS50ZXh0KGQgPT4gZC50aXRsZSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLnRleHQoZCA9PiBkLnRleHQpO1xuICAgIG1lc3NhZ2VFbnRlci5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICdzdHJvbmcnKS5zdHlsZSgnZGlzcGxheScsICdub25lJykudGV4dChcInhcIik7XG5cbiAgICBtZXNzYWdlRW50ZXIubWVyZ2UobWVzc2FnZSk7XG5cbiAgICBtZXNzYWdlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyB9IGZyb20gJy4uL3V0aWwvY29tcG9uZW50JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0TW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9ICdBYm91dE1vZGFsV2luZG93JztcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBBYm91dCBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKGBBYm91dCBGcmFuY3kgdiR7dGhpcy5kYXRhLnZlcnNpb24gfHwgJ04vQSd9YCk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS50ZXh0KCdMb2FkZWQgT2JqZWN0OicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdwcmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5odG1sKHRoaXMuc3ludGF4SGlnaGxpZ2h0KEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5jYW52YXMsIG51bGwsIDIpKSk7XG4gICAgY29udGVudC5hcHBlbmQoJ3NwYW4nKS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9tY21hcnRpbnMvZnJhbmN5JykudGV4dCgnRnJhbmN5IG9uIEdpdGh1YicpO1xuXG4gICAgdmFyIGZvb3RlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgd2hlbiB1c2luZyB0aGlzIG1vZGFsIGluIEp1cHl0ZXJcbiAgICBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhbJy5mcmFuY3knLCAnLmZyYW5jeS1hcmcnLCAnLmZyYW5jeS1vdmVybGF5JywgJy5mcmFuY3ktbW9kYWwnXSk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgQWJvdXQgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIC8vIGNyZWRpdHMgaGVyZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxMDg0MS9ob3ctY2FuLWktcHJldHR5LXByaW50LWpzb24tdXNpbmctamF2YXNjcmlwdCNhbnN3ZXItNzIyMDUxMFxuICBzeW50YXhIaWdobGlnaHQoanNvbikge1xuICAgIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlwiXSkqXCIoXFxzKjopP3xcXGIodHJ1ZXxmYWxzZXxudWxsKVxcYnwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWystXT9cXGQrKT8pL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICB2YXIgY2xzID0gJ251bWJlcic7XG4gICAgICBpZiAoL15cIi8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbHMgPSAnc3RyaW5nJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdib29sZWFuJztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAnbnVsbCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNscyArICdcIj4nICsgbWF0Y2ggKyAnPC9zcGFuPic7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IHRoaXMuZGF0YS5jYWxsYmFjay5pZDtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYWxsYmFjayBNb2RhbCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIC8vIHdlIHdhbnQgdG8gb3ZlcmxheSBldmVyeXRoaW5nLCBoZW5jZSAnYm9keScgbXVzdCBiZSB1c2VkXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHRoaXMuZWxlbWVudCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBtb2RhbElkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdmb3JtJyk7XG5cbiAgICB2YXIgaGVhZGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1oZWFkZXInKTtcblxuICAgIHZhciBoZWFkZXJUaXRsZSA9IGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMmbmJzcDsnKTtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlKSB7XG4gICAgICBoZWFkZXJUaXRsZS5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdzdHlsZScsICdmb250LXdlaWdodDogYm9sZDsnKS50ZXh0KGBmb3IgJHt0aGlzLmRhdGEudGl0bGV9YCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICB2YXIgcm93ID0gY29udGVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgdmFyIGlucHV0ID0gcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1hcmcnKVxuICAgICAgICAuYXR0cigncmVxdWlyZWQnLCAnJylcbiAgICAgICAgLmF0dHIoJ25hbWUnLCBhcmcuaWQpXG4gICAgICAgIC5hdHRyKCd0eXBlJywgYXJnLnR5cGUpXG4gICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHsgc2VsZi5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7IH0pXG4gICAgICAgIC5vbignaW5wdXQnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ2tleXVwJywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdwYXN0ZScsIHRoaXMub25jaGFuZ2UpO1xuICAgICAgLy8gd2FpdCwgaWYgaXQgaXMgYm9vbGVhbiB3ZSBjcmVhdGUgYSBjaGVja2JveFxuICAgICAgaWYgKGFyZy50eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JykuYXR0cigncmVxdWlyZWQnLCBudWxsKVxuICAgICAgICAgIC5hdHRyKCd2YWx1ZScsIGFyZy52YWx1ZSlcbiAgICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5kYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIGNvbnRlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWFyZycpLm5vZGUoKS5mb2N1cygpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbGxiYWNrIE1vZGFsIHVwZGF0ZWQgWyR7bW9kYWxJZH1dLi4uYCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcigpXSBtZXRob2QhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnVucmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBbdW5yZW5kZXIoKV0gbWV0aG9kIHNwZWNpZmllZC4uLicpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24gPSA3NTA7IC8vbXNcbiAgfVxuXG4gIGdldCBIVE1MUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJyA/IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5ub2RlKCkucGFyZW50Tm9kZSkgOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgfVxuXG4gIGdldCBTVkdQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdkaXYnID8gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQuc2VsZWN0KCdzdmcnKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKClcbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LnNlbGVjdCgnZGl2LmZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuYXBwZW5kKCdkaXYnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwb3MgPSBkMy5tb3VzZSh0aGlzLlNWR1BhcmVudC5ub2RlKCkpO1xuXG4gICAgLy8gVE9ETyBmaXggYWx3YXlzIHZpc2libGUgdG9vbHRpcCwgZmluZSB1bnRpbCBzb21lb25lIGNvbXBsYWlucyBhYm91dCA6UFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnbGVmdCcsIChwb3NbMF0gKyA1KSArICdweCcpLnN0eWxlKCd0b3AnLCAocG9zWzFdIC0gNSkgKyAncHgnKTtcblxuICAgIHZhciB0YWJsZSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50aXRsZSk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLnRleHQoc2VsZi5kYXRhW2tleV0udGV4dCk7XG4gICAgfSk7XG5cbiAgICAvLyBzaG93IHRvb2x0aXBcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2Rpc3BsYXknLCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG4vKiBnbG9iYWwgSnVweXRlciwgTWF0aEpheCwgZDMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVyTWF0aEpheChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgTWF0aEpheC5IdWIuQ29uZmlnKHtcbiAgICAgICAgdGV4MmpheDoge1xuICAgICAgICAgIGF2YWlsYWJsZUZvbnRzOiBbXCJUZVhcIl0sXG4gICAgICAgICAgcHJlZmVycmVkRm9udDogXCJUZVhcIixcbiAgICAgICAgICBpbmxpbmVNYXRoOiBbXG4gICAgICAgICAgICBbJyQnLCAnJCddLFxuICAgICAgICAgICAgWydcXFxcKCcsICdcXFxcKSddXG4gICAgICAgICAgXSxcbiAgICAgICAgICBwcm9jZXNzRXNjYXBlczogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUmVnaXN0ZXIuU3RhcnR1cEhvb2soJ0VuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IGQzLnNlbGVjdCh0aGlzKSxcbiAgICAgICAgICAgICAgbWF0aEpheCA9IHNlbGYuc2VsZWN0KCd0ZXh0PnNwYW4+c3ZnJyk7XG4gICAgICAgICAgICBpZiAobWF0aEpheC5ub2RlKCkpIHtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd4Jywgc2VsZi5hdHRyKCd4JykpO1xuICAgICAgICAgICAgICAgIG1hdGhKYXguYXR0cigneScsIC0xNSk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHNlbGYubm9kZSgpLnBhcmVudE5vZGUpLmFwcGVuZChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRoSmF4Lm5vZGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9KTtcblxuICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnQubm9kZSgpXSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBpZiAoZS5uYW1lID09ICdSZWZlcmVuY2VFcnJvcicpIHtcbiAgICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIE1hdGhKYXggaXMgbm90IGxvYWRlZC4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICB9LCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWdpc3Rlckp1cHl0ZXJLZXlib2FyZEV2ZW50cyhjbGFzc2VzKSB7XG4gIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGluIEp1cHl0ZXIgZm9yIGNsYXNzZXNcbiAgaWYgKCFjbGFzc2VzKSByZXR1cm47XG4gIHRyeSB7XG4gICAgY2xhc3Nlcy5tYXAoKGNsKSA9PiB7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKGNsKTtcbiAgICB9KTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgbmV3IExvZ2dlcigpLmluZm8oJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLicsIGUpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCwgcGFydGlhbCkge1xuICAgIGlmICghaW5wdXQpIHJldHVybjtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5taW1lID09PSBKc29uVXRpbHMuTUlNRSB8fCBwYXJ0aWFsID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTUlNRSgpIHtcbiAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbic7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuIl19

//# sourceMappingURL=maps/francy.bundle.js.map
