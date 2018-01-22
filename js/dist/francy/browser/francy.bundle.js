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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZGVjb3JhdG9yL2RhdGEuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL3JlbmRlci9iYXNlLmpzIiwic3JjL3JlbmRlci9jYWxsYmFjay5qcyIsInNyYy9yZW5kZXIvY2FudmFzLmpzIiwic3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LmpzIiwic3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJzcmMvcmVuZGVyL2ZyYW1lLmpzIiwic3JjL3JlbmRlci9ncmFwaC1nZW5lcmljLmpzIiwic3JjL3JlbmRlci9ncmFwaC10cmVlLmpzIiwic3JjL3JlbmRlci9ncmFwaC5qcyIsInNyYy9yZW5kZXIvbWVudS1jb250ZXh0LmpzIiwic3JjL3JlbmRlci9tZW51LW1haW4uanMiLCJzcmMvcmVuZGVyL21lbnUuanMiLCJzcmMvcmVuZGVyL21lc3NhZ2UuanMiLCJzcmMvcmVuZGVyL21vZGFsLWFib3V0LmpzIiwic3JjL3JlbmRlci9tb2RhbC1yZXF1aXJlZC5qcyIsInNyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJzcmMvcmVuZGVyL3Rvb2x0aXAuanMiLCJzcmMvdXRpbC9jb21wb25lbnQuanMiLCJzcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwic3JjL3V0aWwvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsUSxHQUFBLFE7QUFBVCxTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxTQUFTLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsVUFBakMsRUFBNkM7QUFDbEQsUUFBSSxXQUFXLFdBQVcsS0FBMUI7O0FBRUEsZUFBVyxLQUFYLEdBQW1CLFlBQVc7QUFDNUIsVUFBSSxDQUFDLFFB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O0FBQ0Q7Ozs7OztrQkF2RGtCLE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghaGFzRGF0YShnZXRQcm9wZXJ0eSh0aGlzLmRhdGEsIHByb3BzKSkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYE5vIGRhdGEgaGVyZSBbJHtwcm9wc31dLCBub3RoaW5nIHRvIHJlbmRlci4uLiBjb250aW51aW5nLi4uYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBwcm9wZXJ0eVBhdGgpIHtcblxuICB2YXIgdG1wID0gb2JqO1xuXG4gIGlmICh0bXAgJiYgcHJvcGVydHlQYXRoKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBwcm9wZXJ0eVBhdGguc3BsaXQoJy4nKTtcblxuICAgIGZvciAodmFyIHByb3BlcnR5IG9mIHByb3BlcnRpZXMpIHtcbiAgICAgIGlmICghdG1wLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICB0bXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRtcCA9IHRtcFtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRtcDtcbn1cblxuZnVuY3Rpb24gaGFzRGF0YShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiAoKG9iaiBpbnN0YW5jZW9mIEFycmF5ICYmIG9iai5sZW5ndGgpIHx8IChvYmogaW5zdGFuY2VvZiBPYmplY3QgJiYgT2JqZWN0LnZhbHVlcyhvYmopLmxlbmd0aCkpO1xufVxuIiwiaW1wb3J0IEZyYW1lIGZyb20gJy4vcmVuZGVyL2ZyYW1lJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlci9yZW5kZXJlcic7XG5cbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSAnLi90cmFja2VyL2NoYW5nZSc7XG5cbmxldCBBTExfQ0FOVkFTID0ge307XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBcbiAqIEB2ZXJzaW9uIDAuNS4wXG4gKiBcbiAqIEBleGFtcGxlXG4gKiBsZXQgZnJhbmN5ID0gbmV3IEZyYW5jeSh7dmVyYm9zZTogdHJ1ZSwgYXBwZW5kVG86ICcjZGl2LWlkJywgY2FsbGJhY2tIYW5kbGVyOiBjb25zb2xlLmxvZ30pO1xuICogZnJhbmN5LmxvYWQoanNvbikucmVuZGVyKCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHByb3BlcnR5IHtCb29sZWFufSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyByZW5kZXIgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgXG4gICAqIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGh0bWwgZWxlbWVudCBjcmVhdGVkXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgIHZhciBmcmFtZSA9IG5ldyBGcmFtZSh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICBBTExfQ0FOVkFTW3RoaXMuZGF0YS5jYW52YXMuaWRdID0gZnJhbWU7XG4gICAgcmV0dXJuIGZyYW1lLmVsZW1lbnQubm9kZSgpO1xuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB2YXIgb2xkUmVzaXplID0gd2luZG93Lm9ucmVzaXplO1xuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgICAgZnJhbWUuY2FudmFzLnpvb21Ub0ZpdCgpO1xuICAgIH0pO1xuICAgIC8vIGNhbGwgb2xkIHJlc2l6ZSBmdW5jdGlvbiBpZiBhbnkhXG4gICAgaWYgKHR5cGVvZiBvbGRSZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9sZFJlc2l6ZSgpO1xuICAgIH1cbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgSnNvblV0aWxzIGZyb20gJy4uL3V0aWwvanNvbi11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLnNldHRpbmdzKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TG9nZ2VyfSB0aGUgbG9nZ2VyIGZvciB0aGlzIGNsYXNzXG4gICAgICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTG9nZ2VyKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzZXR0aW5ncyh7IHZlcmJvc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgQ2FsbGJhY2sgSGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkISBUaGlzIHdpbGwgYmUgdXNlZCB0byB0cmlnZ2VyIGV2ZW50cyBmcm9tIHRoZSBncmFwaGljcyBwcm9kdWNlZC4uLicpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIScpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAgICogQHByb3BlcnR5IHtCb29sZWFufSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAgICovXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5vcHRpb25zLnZlcmJvc2UgPSB2ZXJib3NlIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvIHx8IHRoaXMub3B0aW9ucy52ZXJib3NlO1xuICAgIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXIgfHwgdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxvYWQoanNvbiwgcGFydGlhbCkge1xuICAgIGxldCBkYXRhID0gSnNvblV0aWxzLnBhcnNlKGpzb24sIHBhcnRpYWwpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBsb2dnZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9nO1xuICB9XG5cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgUmVxdWlyZWRBcmdzTW9kYWwgZnJvbSAnLi9tb2RhbC1yZXF1aXJlZCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYWxsYmFjaycpXG4gIGV4ZWN1dGUoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3MpLmxlbmd0aCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBvcHRpb25zLmNhbGxiYWNrSGFuZGxlciA9IChjYWxiYWNrT2JqKSA9PiB0aGlzLl9leGVjdXRlLmNhbGwodGhpcywgY2FsYmFja09iaik7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKG9wdGlvbnMpLmxvYWQodGhpcy5kYXRhLCB0cnVlKS5yZW5kZXIoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUcmlnZ2VyIGlzIHRoZSBleHBlY3RlZCBjb21tYW5kIG9uIEdBUCBmb3IgdGhpcyBldmVudHMhXG4gICAgICB0aGlzLl9leGVjdXRlKHRoaXMuZGF0YS5jYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgX2V4ZWN1dGUoY2FsYmFja09iaikge1xuICAgIHRoaXMuY2FsbGJhY2soYFRyaWdnZXIoJHtKU09OLnN0cmluZ2lmeShKU09OLnN0cmluZ2lmeShjYWxiYWNrT2JqKSl9KTtgKTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmdyYXBoID0gbmV3IEdyYXBoKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkKHRoaXMuZ3JhcGgpLmFkZCh0aGlzLmNoYXJ0KTtcbiAgfVxuXG4gIEByZXF1aXJlcygnY2FudmFzJylcbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBzZWxmLmVsZW1lbnQuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tVG9GaXQoKSB7XG4gICAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgZW5hYmxlLCBvZiBjb3Vyc2VcbiAgICAgIGlmIChzZWxmLmRhdGEuY2FudmFzLnpvb21Ub0ZpdCkge1xuICAgICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICAgIHZhciBjbGllbnRCb3VuZHMgPSBzZWxmLmVsZW1lbnQubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IGNsaWVudEJvdW5kcy5yaWdodCAtIGNsaWVudEJvdW5kcy5sZWZ0LFxuICAgICAgICAgIGZ1bGxIZWlnaHQgPSBjbGllbnRCb3VuZHMuYm90dG9tIC0gY2xpZW50Qm91bmRzLnRvcDtcblxuICAgICAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRzLmhlaWdodDtcblxuICAgICAgICBpZiAod2lkdGggPT0gMCB8fCBoZWlnaHQgPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgICAgbWlkWSA9IGJvdW5kcy55ICsgaGVpZ2h0IC8gMjtcblxuICAgICAgICB2YXIgc2NhbGUgPSAwLjkgLyBNYXRoLm1heCh3aWR0aCAvIGZ1bGxXaWR0aCwgaGVpZ2h0IC8gZnVsbEhlaWdodCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gZnVsbEhlaWdodCAvIDIgLSBzY2FsZSAqIG1pZFk7XG5cbiAgICAgICAgY29udGVudC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oc2VsZi50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgICAgLm9uKCdlbmQnLCAoKSA9PiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhc0lkID0gYENhbnZhcy0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktY2FudmFzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgY2FudmFzSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCBbJHtjYW52YXNJZH1dLi4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5hdHRyKCd3aWR0aCcsIHRoaXMuZGF0YS5jYW52YXMud2lkdGgpLmF0dHIoJ2hlaWdodCcsIHRoaXMuZGF0YS5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgLy8gcmVtb3ZlIHpvb20gb24gZG91YmxlIGNsaWNrIVxuICAgICAgdGhpcy5lbGVtZW50LmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5vbihcImNsaWNrXCIsIHN0b3BwZWQsIHRydWUpO1xuXG4gICAgdGhpcy5lbGVtZW50Lnpvb21Ub0ZpdCA9IHRoaXMuem9vbVRvRml0ID0gem9vbVRvRml0O1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyB1cGRhdGVkIFske2NhbnZhc0lkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgem9vbVRvRml0KCk7XG4gICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4vdG9vbHRpcCc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9jaGFydCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVCYW5kKCkucmFuZ2UoWzAsIHdpZHRoXSkucGFkZGluZygwLjEpLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIGF4aXMueC5kb21haW4gPSBDaGFydC5kb21haW5SYW5nZSh0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7XG4gICAgICB4LmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB9XG5cbiAgICB2YXIgYmFyc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktYmFycycpO1xuXG4gICAgaWYgKCFiYXJzR3JvdXAubm9kZSgpKSB7XG4gICAgICBiYXJzR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWJhcnMnKTtcbiAgICB9XG5cbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChmdW5jdGlvbihrZXksIGluZGV4KSB7XG4gICAgICB2YXIgYmFyID0gYmFyc0dyb3VwLnNlbGVjdEFsbChgLmZyYW5jeS1iYXItJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApXG4gICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KVxuICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxuICAgICAgdmFyIGJhckVudGVyID0gYmFyLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWJhci0ke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDAuNSk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMSk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgYmFyRW50ZXIubWVyZ2UoYmFyKVxuICAgICAgICAuYXR0cigneCcsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIHgoYXhpcy54LmRvbWFpbltpXSkgKyBpbmRleCAqICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCk7IH0pXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsICh4LmJhbmR3aWR0aCgpIC8gZGF0YXNldE5hbWVzLmxlbmd0aCkgLSAxKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuXG4gICAgdmFyIGF4aXMgPSB0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgbGluZXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSk7XG5cbiAgICAgIHZhciBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktbGluZS0ke2luZGV4fWApLmRhdGEoW2RhdGFzZXRzW2tleV1dKTtcblxuICAgICAgbGluZS5leGl0KCkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MClcbiAgICAgICAgLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIsIDFlLTYpXG4gICAgICAgIC5yZW1vdmUoKTtcblxuICAgICAgLy8gYXBwZW5kIHRoZSByZWN0YW5nbGVzIGZvciB0aGUgYmFyIGNoYXJ0XG4gICAgICB2YXIgbGluZUVudGVyID0gbGluZS5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICc1cHgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LWxpbmUtJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIsIDAuNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzEwcHgnKTtcbiAgICAgICAgICB0b29sdGlwLmxvYWQoQ2hhcnQudG9vbHRpcChrZXksIGQpLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgJzVweCcpO1xuICAgICAgICAgIHRvb2x0aXAudW5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmVFbnRlci5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuc2hvd0xlZ2VuZCkge1xuXG4gICAgICB2YXIgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgICBpZiAoIWxlZ2VuZEdyb3VwLm5vZGUoKSkge1xuICAgICAgICBsZWdlbmRHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZvcmNlIHJlYnVpbGQgbGVnZW5kIGFnYWluXG4gICAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgICBsZWdlbmQuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdnJylcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKDAsJHtpICogMjB9KWApXG4gICAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDIwKVxuICAgICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoZCwgaSkgPT4gQ2hhcnQuY29sb3JzKGkgKiA1KSk7XG5cbiAgICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAgIC5hdHRyKCd5JywgOSlcbiAgICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgICAudGV4dChkID0+IGQpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENoYXJ0IGZyb20gJy4vY2hhcnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhdHRlckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKHRoaXMub3B0aW9ucyk7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXhpcyA9IHRoaXMuZGF0YS5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0gdGhpcy5kYXRhLmNhbnZhcy5jaGFydC5kYXRhLFxuICAgICAgZGF0YXNldE5hbWVzID0gT2JqZWN0LmtleXMoZGF0YXNldHMpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpO1xuXG4gICAgdmFyIG1hcmdpbiA9IHsgdG9wOiA1MCwgcmlnaHQ6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCB9LFxuICAgICAgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBjaGFydFxuICAgIHdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgICBoZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcblxuICAgIC8vIHNldCB0aGUgcmFuZ2VzXG4gICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pLmRvbWFpbihheGlzLnguZG9tYWluKTtcbiAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pLmRvbWFpbihheGlzLnkuZG9tYWluKTtcblxuICAgIHZhciB0bXAgPSBbXTtcbiAgICBkYXRhc2V0TmFtZXMuZm9yRWFjaChrZXkgPT4gdG1wID0gdG1wLmNvbmNhdChkYXRhc2V0c1trZXldKSk7XG5cbiAgICBpZiAoIWF4aXMueS5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB5LmRvbWFpbihbMCwgZDMubWF4KHRtcCwgZCA9PiBkKV0pO1xuICAgIH1cblxuICAgIGlmICghYXhpcy54LmRvbWFpbi5sZW5ndGgpIHtcbiAgICAgIHguZG9tYWluKFswLCB0bXAubGVuZ3RoIC8gZGF0YXNldE5hbWVzLmxlbmd0aF0pO1xuICAgIH1cblxuICAgIHZhciBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCdnLmZyYW5jeS1zY2F0dGVycycpO1xuXG4gICAgaWYgKCFzY2F0dGVyR3JvdXAubm9kZSgpKSB7XG4gICAgICBzY2F0dGVyR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXNjYXR0ZXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIHNjYXR0ZXIgPSBzY2F0dGVyR3JvdXAuc2VsZWN0QWxsKGAuZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBzY2F0dGVyLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKVxuICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMWUtNilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHZhciBzY2F0dGVyRW50ZXIgPSBzY2F0dGVyXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IENoYXJ0LmNvbG9ycyhpbmRleCAqIDUpKVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgZnJhbmN5LXNjYXR0ZXItJHtpbmRleH1gKVxuICAgICAgICAuYXR0cihcInJcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiB4KGkpOyB9KVxuICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5sb2FkKENoYXJ0LnRvb2x0aXAoa2V5LCBkKSwgdHJ1ZSkucmVuZGVyKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyRW50ZXIubWVyZ2Uoc2NhdHRlcik7XG4gICAgfSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXgtYXhpcycpO1xuXG4gICAgaWYgKCF4QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeEF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteC1heGlzJyk7XG4gICAgfVxuXG4gICAgeEF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeCBBeGlzXG4gICAgeEF4aXNHcm91cFxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeScsIDUwKVxuICAgICAgLmF0dHIoJ2R4Jywgd2lkdGggLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueC50aXRsZSk7XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGF4aXMgYWdhaW5cbiAgICB2YXIgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LXktYXhpcycpO1xuXG4gICAgaWYgKCF5QXhpc0dyb3VwLm5vZGUoKSkge1xuICAgICAgeUF4aXNHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3kteS1heGlzJyk7XG4gICAgfVxuXG4gICAgeUF4aXNHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIC8vIGFkZCB0aGUgeSBBeGlzXG4gICAgeUF4aXNHcm91cFxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdkeCcsIC01MClcbiAgICAgIC5hdHRyKCdkeScsIGhlaWdodCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy55LnRpdGxlKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmNoYXJ0LnNob3dMZWdlbmQpIHtcblxuICAgICAgdmFyIGxlZ2VuZEdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgICAgbGVnZW5kR3JvdXAgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxlZ2VuZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgICAgbGVnZW5kR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgICAgbGVnZW5kID0gbGVnZW5kLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgMTkpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgICAuYXR0cigneScsIDkpXG4gICAgICAgIC5hdHRyKCdkeScsICcuMzVlbScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgICAgLnRleHQoZCA9PiBkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBCYXJDaGFydCBmcm9tICcuL2NoYXJ0LWJhcic7XG5pbXBvcnQgTGluZUNoYXJ0IGZyb20gJy4vY2hhcnQtbGluZSc7XG5pbXBvcnQgU2NhdHRlckNoYXJ0IGZyb20gJy4vY2hhcnQtc2NhdHRlcic7XG5pbXBvcnQgeyByZXF1aXJlcyB9IGZyb20gJy4uL2RlY29yYXRvci9kYXRhJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5jaGFydCcpXG4gIHJlbmRlcigpIHtcblxuICAgIHN3aXRjaCAodGhpcy5kYXRhLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBCYXJDaGFydCh0aGlzLm9wdGlvbnMpLmxvYWQodGhpcy5kYXRhKS5yZW5kZXIoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBuZXcgTGluZUNoYXJ0KHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzY2F0dGVyXCI6XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIHRvb2x0aXAoZGF0YXNldCwgdmFsdWUpIHtcbiAgICByZXR1cm4geyBcIkFcIjogeyAndGl0bGUnOiAnRGF0YXNldCcsICd0ZXh0JzogZGF0YXNldCB9LCBcIkJcIjogeyAndGl0bGUnOiAnVmFsdWUnLCAndGV4dCc6IHZhbHVlIH0gfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQhXG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgb3B0aW9ucy5hcHBlbmRUbyA9IHRoaXM7XG4gICAgLy8gcmVuZGVyIG90aGVyIGNvbXBvbmVudHNcbiAgICBmb3IgKHZhciByZW5kZXJlciBvZiB0aGlzLnJlbmRlcmVycykge1xuICAgICAgcmVuZGVyZXIuc2V0dGluZ3Mob3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL21lbnUtbWFpbic7XG5pbXBvcnQgTWVzc2FnZSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lbnUgPSBuZXcgTWFpbk1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gbmV3IE1lc3NhZ2UodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmFkZCh0aGlzLm1lc3NhZ2VzKS5hZGQodGhpcy5tZW51KS5hZGQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMnKVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHBhcmVudCA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgdmFyIGZyYW1lSWQgPSBgRnJhbWUtJHt0aGlzLmRhdGEuY2FudmFzLmlkfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZDMuc2VsZWN0KGBkaXYjJHtmcmFtZUlkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgRnJhbWUgWyR7ZnJhbWVJZH1dLi4uYCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3knKS5hdHRyKCdpZCcsIGZyYW1lSWQpO1xuICAgIH1cblxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBmcmFtZSB3aXRoIGlkIFske2ZyYW1lSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRnJhbWUgdXBkYXRlZCBbJHtmcmFtZUlkfV0uLi5gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi9ncmFwaCc7XG5pbXBvcnQgeyBSZWdpc3Rlck1hdGhKYXggfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBzaW11bGF0aW9uQWN0aXZlID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5zaW11bGF0aW9uO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXSxcbiAgICAgIGNhbnZhc0xpbmtzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5zZWxlY3QoJ2cuZnJhbmN5LWNvbnRlbnQnKTtcblxuICAgIHZhciB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgIGlmICghbGlua0dyb3VwLm5vZGUoKSkge1xuICAgICAgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5rcycpO1xuICAgIH1cblxuICAgIHZhciBsaW5rcyA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmsnKS5kYXRhKCk7XG4gICAgdmFyIGxpbmtzVG9BZGQgPSBbXTtcbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgdmFyIGxpbmsgPSBsaW5rcy5maW5kKGQgPT4gZC5pZCA9PT0gbC5pZCk7XG4gICAgICBpZiAobGluaykge1xuICAgICAgICBsaW5rc1RvQWRkLnB1c2gobGluayk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGlua3NUb0FkZC5wdXNoKGwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rJykuZGF0YShsaW5rc1RvQWRkLCBkID0+IGQuaWQpO1xuXG4gICAgdmFyIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICB9XG5cbiAgICB2YXIgbm9kZXMgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJykuZGF0YSgpO1xuICAgIHZhciBub2Rlc1RvQWRkID0gW107XG4gICAgY2FudmFzTm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIHZhciBub2RlID0gbm9kZXMuZmluZChkID0+IGQuaWQgPT09IG4uaWQpO1xuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZXNUb0FkZC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGVzVG9BZGQucHVzaChuKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZScpLmRhdGEobm9kZXNUb0FkZCwgZCA9PiBkLmlkKTtcblxuICAgIGlmIChub2RlLmV4aXQoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIG5vZGUuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZW50ZXIoKS5kYXRhKCkubGVuZ3RoID09IDAgJiZcbiAgICAgIGxpbmsuZXhpdCgpLmRhdGEoKS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmsnKTtcblxuICAgIGxpbmtFbnRlci5hcHBlbmQoJ2xpbmUnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpO1xuXG4gICAgbGluay5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsaW5rID0gbGlua0dyb3VwLnNlbGVjdEFsbCgnZy5mcmFuY3ktbGluayBsaW5lLmZyYW5jeS1lZGdlJyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy5ncmFwaC50eXBlID09PSAnZGlyZWN0ZWQnKSB7XG4gICAgICAvLyB0aGlzIG1lYW5zIHdlIG5lZWQgYXJyb3dzLCBzbyB3ZSBhcHBlbmQgdGhlIG1hcmtlclxuICAgICAgcGFyZW50LmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJyb3dzJylcbiAgICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHN0eWxlIG9mIHRoZSBsaW5rXG4gICAgICBsaW5rLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1ub2RlJykuYXR0cignaWQnLCBkID0+IGQuaWQpO1xuXG4gICAgbm9kZUVudGVyLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDEwMCkpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdmcmFuY3ktc3ltYm9sJyArIChkLmhpZ2hsaWdodCA/ICcgZnJhbmN5LWhpZ2hsaWdodCcgOiAnJykgKyAoT2JqZWN0LnZhbHVlcyhkLm1lbnVzKS5sZW5ndGggPyAnIGZyYW5jeS1jb250ZXh0JyA6ICcnKSk7XG5cbiAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLmF0dHIoJ3gnLCBkID0+IC0oZC50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIG5vZGUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGVHcm91cC5zZWxlY3RBbGwoJ2cuZnJhbmN5LW5vZGUnKTtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmRyYWcpIHtcbiAgICAgIG5vZGUuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpO1xuICAgIH1cblxuICAgIGlmIChub2RlICYmICFub2RlLmVtcHR5KCkpIHtcblxuICAgICAgR3JhcGguYXBwbHlFdmVudHMobm9kZSwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGguc2hvd05laWdoYm91cnMpIHtcbiAgICAgICAgdmFyIG5vZGVPbkNsaWNrID0gbm9kZS5vbignY2xpY2snKTtcbiAgICAgICAgbm9kZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICAgIGNvbm5lY3RlZE5vZGVzLmNhbGwodGhpcyk7XG4gICAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaW11bGF0aW9uQWN0aXZlKSB7XG4gICAgICAvLyBDYW52YXMgRm9yY2VzXG4gICAgICB2YXIgY2VudGVyRm9yY2UgPSBkMy5mb3JjZUNlbnRlcigpLngod2lkdGggLyAyKS55KGhlaWdodCAvIDIpO1xuICAgICAgdmFyIG1hbnlGb3JjZSA9IGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtY2FudmFzTm9kZXMubGVuZ3RoICogNTApO1xuICAgICAgdmFyIGxpbmtGb3JjZSA9IGQzLmZvcmNlTGluayhjYW52YXNMaW5rcykuaWQoZCA9PiBkLmlkKS5kaXN0YW5jZSg1MCk7XG4gICAgICB2YXIgY29sbGlkZUZvcmNlID0gZDMuZm9yY2VDb2xsaWRlKGQgPT4gZC5zaXplICogMik7XG5cbiAgICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMDUpO1xuXG4gICAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFkgcG9zaXRpb24gLSB1bmRpcmVjdGVkL2RpcmVjdGVkIGdyYXBocyBmYWxsIGhlcmVcbiAgICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoaGVpZ2h0IC8gMikuc3RyZW5ndGgoMC4yNSk7XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgICAgIGZvcmNlWCA9IGQzLmZvcmNlWCh3aWR0aCAvIDIpLnN0cmVuZ3RoKDAuMyk7XG4gICAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgICAgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDc1KS5zdHJlbmd0aCgwLjcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpLm5vZGVzKG5vZGVzVG9BZGQpXG4gICAgICAgIC5mb3JjZShcImNoYXJnZVwiLCBtYW55Rm9yY2UpXG4gICAgICAgIC5mb3JjZShcImxpbmtcIiwgbGlua0ZvcmNlKVxuICAgICAgICAuZm9yY2UoXCJjZW50ZXJcIiwgY2VudGVyRm9yY2UpXG4gICAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgICAgLmZvcmNlKFwiY29sbGlkZVwiLCBjb2xsaWRlRm9yY2UpXG4gICAgICAgIC5vbigndGljaycsIHRpY2tlZClcbiAgICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHpvb20gdG8gZml0IHdoZW4gc2ltdWxhdGlvbiBpcyBvdmVyXG4gICAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICAgIHNpbXVsYXRpb24uYWxwaGEoMC41KS5yZXN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gd2VsbCwgc2ltdWxhdGlvbiBpcyBvZmYsIGFwcGx5IGZpeGVkIHBvc2l0aW9ucyBhbmQgem9vbSB0byBmaXQgbm93XG4gICAgICB0aWNrZWQoKTtcbiAgICAgIHBhcmVudC56b29tVG9GaXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGUuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICAgIH1cbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMDEpLnJlc3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUgJiYgc2ltdWxhdGlvbkFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vZ3JhcGgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJNYXRoSmF4IH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZUdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICB2YXIgd2lkdGggPSArcGFyZW50LmF0dHIoJ3dpZHRoJykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gK3BhcmVudC5hdHRyKCdoZWlnaHQnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdmFyIGkgPSAwLFxuICAgICAgcm9vdDtcblxuICAgIHZhciB0cmVlbWFwID0gZDMudHJlZSgpLnNpemUoW2hlaWdodCwgd2lkdGhdKTtcblxuICAgIHJvb3QgPSBkMy5oaWVyYXJjaHkodGhpcy50cmVlRGF0YSwgZCA9PiBkLmNoaWxkcmVuKTtcbiAgICByb290LngwID0gaGVpZ2h0IC8gMjtcbiAgICByb290LnkwID0gMDtcblxuICAgIGlmICh0aGlzLmRhdGEuY2FudmFzLmdyYXBoLmNvbGxhcHNlZCkge1xuICAgICAgcm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICB9XG5cbiAgICB1cGRhdGUuY2FsbCh0aGlzLCByb290KTtcblxuICAgIGZ1bmN0aW9uIGNvbGxhcHNlKGQpIHtcbiAgICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5fY2hpbGRyZW4uZm9yRWFjaChjb2xsYXBzZSk7XG4gICAgICAgIGQuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShzb3VyY2UpIHtcbiAgICAgIHZhciB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgICAgIGxpbmtzID0gdHJlZURhdGEuZGVzY2VuZGFudHMoKS5zbGljZSgxKTtcblxuICAgICAgbm9kZXMuZm9yRWFjaChkID0+IGQueSA9IGQuZGVwdGggKiAxNTApO1xuXG4gICAgICB2YXIgbGlua0dyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbGlua3MnKTtcblxuICAgICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIGxpbmtHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGlua3MnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLmRhdGEobGlua3MsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICB2YXIgbGlua0VudGVyID0gbGluay5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktZWRnZScpXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIHZhciBvID0geyB4OiBzb3VyY2UueDAsIHk6IHNvdXJjZS55MCB9O1xuICAgICAgICAgIHJldHVybiBkaWFnb25hbChvLCBvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGxpbmtFbnRlci5tZXJnZShsaW5rKVxuICAgICAgICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKS5hdHRyKCdkJywgZCA9PiBkaWFnb25hbChkLCBkLnBhcmVudCkpO1xuXG4gICAgICBsaW5rLmV4aXQoKS50cmFuc2l0aW9uKCkuZHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgIC5hdHRyKCdkJywgKCkgPT4ge1xuICAgICAgICAgIHZhciBvID0geyB4OiBzb3VyY2UueCwgeTogc291cmNlLnkgfTtcbiAgICAgICAgICByZXR1cm4gZGlhZ29uYWwobywgbyk7XG4gICAgICAgIH0pLnJlbW92ZSgpO1xuXG4gICAgICBsaW5rR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1lZGdlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICcjY2NjJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMXB4Jyk7XG5cbiAgICAgIG5vZGVzLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgZC54MCA9IGQueDtcbiAgICAgICAgZC55MCA9IGQueTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgICAgIHJldHVybiBgTSAke3MueX0gJHtzLnh9XG4gICAgICAgICAgICBDICR7KHMueSArIGQueSkgLyAyfSAke3MueH0sXG4gICAgICAgICAgICAgICR7KHMueSArIGQueSkgLyAyfSAke2QueH0sXG4gICAgICAgICAgICAgICR7ZC55fSAke2QueH1gO1xuICAgICAgfVxuXG4gICAgICB2YXIgbm9kZUdyb3VwID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZy5mcmFuY3ktbm9kZXMnKTtcblxuICAgICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICAgIG5vZGVHcm91cCA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZXMnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJylcbiAgICAgICAgLmRhdGEobm9kZXMsIGQgPT4gZC5pZCB8fCAoZC5pZCA9ICsraSkpO1xuXG4gICAgICB2YXIgbm9kZUVudGVyID0gbm9kZS5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbm9kZScpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoKSA9PiBgdHJhbnNsYXRlKCR7c291cmNlLnkwfSwke3NvdXJjZS54MH0pYCk7XG5cbiAgICAgIG5vZGVFbnRlci5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBHcmFwaC5nZXRTeW1ib2woZC5kYXRhLnR5cGUpKS5zaXplKGQgPT4gZC5kYXRhLnNpemUgKiAxMDApKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LXN5bWJvbCcpO1xuXG4gICAgICBub2RlRW50ZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sYWJlbCcpXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiAtKGQuZGF0YS50aXRsZS5sZW5ndGggKiAyLjUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0JylcbiAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudGl0bGUpO1xuXG4gICAgICB2YXIgbm9kZVVwZGF0ZSA9IG5vZGVFbnRlci5tZXJnZShub2RlKTtcblxuICAgICAgbm9kZVVwZGF0ZS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgIG5vZGUuZXhpdCgpLnRyYW5zaXRpb24oKS5kdXJhdGlvbih0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICgpID0+IGB0cmFuc2xhdGUoJHtzb3VyY2UueX0sJHtzb3VyY2UueH0pYClcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1zeW1ib2wnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW4gPyAnbGlnaHRzdGVlbGJsdWUnIDogR3JhcGguY29sb3JzKGQuZGF0YS5sYXllciAqIDUpKVxuICAgICAgICAuc3R5bGUoJ2N1cnNvcicsIGQgPT4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/ICdwb2ludGVyJyA6ICdkZWZhdWx0Jyk7XG5cbiAgICAgIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlJyk7XG4gICAgICBHcmFwaC5hcHBseUV2ZW50cyhub2RlLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICB2YXIgbm9kZU9uQ2xpY2sgPSBub2RlLm9uKCdjbGljaycpO1xuICAgICAgbm9kZS5vbignY2xpY2snLCAoZCkgPT4ge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIG5vZGVPbkNsaWNrLmNhbGwodGhpcywgZC5kYXRhKTtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjbGljay5jYWxsKHRoaXMsIGQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBjaGlsZHJlbiBvbiBjbGljay5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gY2xpY2soZCkge1xuICAgICAgICBpZiAoZC5jaGlsZHJlbikge1xuICAgICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkLmNoaWxkcmVuID0gZC5fY2hpbGRyZW47XG4gICAgICAgICAgZC5fY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZS5jYWxsKHNlbGYsIGQpO1xuICAgICAgfVxuXG4gICAgICBSZWdpc3Rlck1hdGhKYXgodGhpcy5TVkdQYXJlbnQpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcGFyZW50Lnpvb21Ub0ZpdCgpO1xuICAgICAgfSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgZmxhdCBkYXRhIGludG8gdHJlZSBkYXRhIGJ5IGFuYWx5c2luZyB0aGUgcGFyZW50cyBvZiBlYWNoIG5vZGVcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGRhdGEgdHJhbnNmb3JtZWQgaW4gdHJlZSBkYXRhXG4gICAqL1xuICBnZXQgdHJlZURhdGEoKSB7XG4gICAgdmFyIGNhbnZhc05vZGVzID0gdGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbnZhcy5ncmFwaC5ub2RlcykgOiBbXTtcbiAgICB2YXIgZGF0YU1hcCA9IGNhbnZhc05vZGVzLnJlZHVjZShmdW5jdGlvbihtYXAsIG5vZGUpIHtcbiAgICAgIG1hcFtub2RlLmlkXSA9IG5vZGU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbiAgICB2YXIgdHJlZURhdGEgPSBbXTtcbiAgICBjYW52YXNOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBkYXRhTWFwW25vZGUucGFyZW50XTtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyZWVEYXRhLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWVEYXRhWzBdO1xuICB9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBUcmVlR3JhcGggZnJvbSAnLi9ncmFwaC10cmVlJztcbmltcG9ydCBHZW5lcmljR3JhcGggZnJvbSAnLi9ncmFwaC1nZW5lcmljJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdjYW52YXMuZ3JhcGgnKVxuICByZW5kZXIoKSB7XG5cbiAgICB2YXIgZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHRoaXMuZGF0YS5jYW52YXMuZ3JhcGgudHlwZSkge1xuICAgICAgY2FzZSAndHJlZSc6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgVHJlZUdyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgR2VuZXJpY0dyYXBoKHRoaXMub3B0aW9ucykubG9hZCh0aGlzLmRhdGEpLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG4gIHN0YXRpYyBhcHBseUV2ZW50cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG5cbiAgICB2YXIgdG9vbHRpcCA9IG5ldyBUb29sdGlwKG9wdGlvbnMpO1xuICAgIHZhciBjb250ZXh0TWVudSA9IG5ldyBDb250ZXh0TWVudShvcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sob3B0aW9ucyk7XG5cbiAgICBlbGVtZW50XG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5sb2FkKGQsIHRydWUpLnJlbmRlcigpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICBkID0gZC5kYXRhIHx8IGQ7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZWVudGVyJywgZCA9PiB7XG4gICAgICAgIGQgPSBkLmRhdGEgfHwgZDtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAubG9hZChkLm1lc3NhZ2VzLCB0cnVlKS5yZW5kZXIoKTtcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVDYWxsYmFjayhkYXRhLCBldmVudCkge1xuICAgICAgaWYgKGRhdGEuY2FsbGJhY2tzKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YS5jYWxsYmFja3MpLmZvckVhY2goKGNiKSA9PiB7XG4gICAgICAgICAgLy8gZXhlY3V0ZSB0aGUgb25lcyB0aGF0IG1hdGNoIHRoZSBldmVudCFcbiAgICAgICAgICBjYi50cmlnZ2VyID09PSBldmVudCAmJiBjYWxsYmFjay5sb2FkKHsgY2FsbGJhY2s6IGNiIH0sIHRydWUpLmV4ZWN1dGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlcXVpcmVzIH0gZnJvbSAnLi4vZGVjb3JhdG9yL2RhdGEnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgQHJlcXVpcmVzKCdtZW51cycpXG4gIHJlbmRlcigpIHtcblxuICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5IVE1MUGFyZW50LmFwcGVuZCgnZGl2JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUtaG9sZGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUoJ2xlZnQnLCBwb3NbMF0gKyA1ICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIHBvc1sxXSArIDUgKyAncHgnKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRlc3Ryb3kgbWVudVxuICAgIGQzLnNlbGVjdCgnYm9keScpLm9uKCdjbGljay5mcmFuY3ktY29udGV4dC1tZW51JywgKCkgPT4gdGhpcy51bnJlbmRlcigpKTtcblxuICAgIC8vIHRoaXMgZ2V0cyBleGVjdXRlZCB3aGVuIGEgY29udGV4dG1lbnUgZXZlbnQgb2NjdXJzXG4gICAgdmFyIG1lbnUgPSB0aGlzLmVsZW1lbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktY29udGV4dC1tZW51JykuYXBwZW5kKCd1bCcpO1xuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5tZW51cykpO1xuICAgIHRoaXMudHJhdmVyc2UobWVudSwgbWVudXNJdGVyYXRvcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBBYm91dE1vZGFsIGZyb20gJy4vbW9kYWwtYWJvdXQnO1xuLy9pbXBvcnQgKiBhcyBTdmdUb1BuZyBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvc2F2ZS1zdmctYXMtcG5nL3NhdmVTdmdBc1BuZyc7XG5cbi8qIGdsb2JhbCBkMyB3aW5kb3cgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudDtcblxuICAgIHZhciBhYm91dE1vZGFsID0gbmV3IEFib3V0TW9kYWwodGhpcy5vcHRpb25zKTtcblxuICAgIC8vIE90aGVyd2lzZSBjbGFzaGVzIHdpdGggdGhlIGNhbnZhcyBpdHNlbGYhXG4gICAgdmFyIG1lbnVJZCA9IGBNYWluTWVudS0ke3RoaXMuZGF0YS5jYW52YXMuaWR9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBkMy5zZWxlY3QoYCMke21lbnVJZH1gKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBtZW51IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5lbGVtZW50Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1haW4gTWVudSBbJHttZW51SWR9XS4uLmApO1xuICAgICAgdGhpcy5lbGVtZW50ID0gcGFyZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1haW4tbWVudS1ob2xkZXInKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50LmFwcGVuZCgndWwnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51Jyk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmNhbnZhcy50aXRsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgnbGknKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGl0bGUnKS5hcHBlbmQoJ2EnKS5odG1sKHRoaXMuZGF0YS5jYW52YXMudGl0bGUpO1xuICAgIH1cblxuICAgIHZhciBlbnRyeSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgaWYgKHRoaXMuZGF0YS5jYW52YXMuem9vbVRvRml0KSB7XG4gICAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uY2FudmFzLnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgfVxuICAgIC8vY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gU3ZnVG9Qbmcuc2F2ZVN2Z0FzUG5nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGF0YS5jYW52YXMuaWQpLCBcImRpYWdyYW0ucG5nXCIpKS5hdHRyKCd0aXRsZScsICdTYXZlIHRvIFBORycpLmh0bWwoJ1NhdmUgdG8gUE5HJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gYWJvdXRNb2RhbC5sb2FkKHRoaXMuZGF0YSkucmVuZGVyKCkpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKHRoaXMuZGF0YS5jYW52YXMubWVudXMpKTtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMuZWxlbWVudCwgbWVudXNJdGVyYXRvcik7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgTWFpbiBNZW51IHVwZGF0ZWQgWyR7bWVudUlkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKGFwcGVuZFRvLCBtZW51c0l0ZXJhdG9yKSB7XG4gICAgd2hpbGUgKG1lbnVzSXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICB2YXIgbWVudUl0ZW0gPSBtZW51c0l0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHZhciBlbnRyeSA9IGFwcGVuZFRvLmFwcGVuZCgnbGknKTtcbiAgICAgIHZhciBhY3Rpb24gPSBlbnRyeS5zZWxlY3RBbGwoJ2EnKS5kYXRhKFttZW51SXRlbV0pLmVudGVyKCkuYXBwZW5kKCdhJykuYXR0cigndGl0bGUnLCBtZW51SXRlbS50aXRsZSkuaHRtbChtZW51SXRlbS50aXRsZSk7XG4gICAgICBpZiAobWVudUl0ZW0uY2FsbGJhY2sgJiYgT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5jYWxsYmFjaykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGlvbi5vbignY2xpY2snLCAoZCkgPT4gbmV3IENhbGxiYWNrKHRoaXMub3B0aW9ucykubG9hZChkLCB0cnVlKS5leGVjdXRlKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG1lbnVJdGVtLm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgICAgIHZhciBzdWJNZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKSk7XG4gICAgICAgIHRoaXMudHJhdmVyc2UoY29udGVudCwgc3ViTWVudXNJdGVyYXRvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXRlcmF0b3IoYXJyYXkpIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc05leHQoKSA/IGFycmF5W25leHRJbmRleCsrXSA6IHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBoYXNOZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IGFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoJ2NhbnZhcy5tZXNzYWdlcycpXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgdHlwZTogdGhpcy5kYXRhLmNhbnZhcy5tZXNzYWdlc1trZXldLnR5cGUsXG4gICAgICAgIHRpdGxlOiB0aGlzLmRhdGEuY2FudmFzLm1lc3NhZ2VzW2tleV0udGl0bGUsXG4gICAgICAgIHRleHQ6IHRoaXMuZGF0YS5jYW52YXMubWVzc2FnZXNba2V5XS50ZXh0XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgdmFyIGFsZXJ0c0lkID0gYE1lc3NhZ2VzLSR7dGhpcy5kYXRhLmNhbnZhcy5pZH1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGQzLnNlbGVjdChgIyR7YWxlcnRzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGRpdiBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHBhcmVudC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tZXNzYWdlLWhvbGRlcicpLmF0dHIoJ2lkJywgYWxlcnRzSWQpO1xuICAgIH1cblxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5lbGVtZW50LnNlbGVjdEFsbCgnZGl2LmZyYW5jeS1hbGVydCcpLmRhdGEobWVzc2FnZXMsIGQgPT4gZC5pZCk7XG4gICAgdmFyIG1lc3NhZ2VFbnRlciA9IG1lc3NhZ2UuZW50ZXIoKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiBgZnJhbmN5LWFsZXJ0IGFsZXJ0LSR7ZC50eXBlfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkMy5zZWxlY3QodGhpcykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfSk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnRleHQoZCA9PiBkLnRpdGxlKTtcbiAgICBtZXNzYWdlRW50ZXIuYXBwZW5kKCdzcGFuJykudGV4dChkID0+IGQudGV4dCk7XG4gICAgbWVzc2FnZUVudGVyLmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3N0cm9uZycpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKS50ZXh0KFwieFwiKTtcblxuICAgIG1lc3NhZ2VFbnRlci5tZXJnZShtZXNzYWdlKTtcblxuICAgIG1lc3NhZ2UuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzIH0gZnJvbSAnLi4vdXRpbC9jb21wb25lbnQnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gJ0Fib3V0TW9kYWxXaW5kb3cnO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIEFib3V0IE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoYEFib3V0IEZyYW5jeSB2JHt0aGlzLmRhdGEudmVyc2lvbiB8fCAnTi9BJ31gKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1jb250ZW50JykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLnRleHQoJ0xvYWRlZCBPYmplY3Q6Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ3ByZScpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpLmh0bWwodGhpcy5zeW50YXhIaWdobGlnaHQoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmNhbnZhcywgbnVsbCwgMikpKTtcbiAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL21jbWFydGlucy9mcmFuY3knKS50ZXh0KCdGcmFuY3kgb24gR2l0aHViJyk7XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgIHNlbGYuZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBkaXNhYmxlIGtleWJvYXJkIHNob3J0Y3V0cyB3aGVuIHVzaW5nIHRoaXMgbW9kYWwgaW4gSnVweXRlclxuICAgIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKFsnLmZyYW5jeScsICcuZnJhbmN5LWFyZycsICcuZnJhbmN5LW92ZXJsYXknLCAnLmZyYW5jeS1tb2RhbCddKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBBYm91dCB1cGRhdGVkIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbiAgLy8gY3JlZGl0cyBoZXJlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODEwODQxL2hvdy1jYW4taS1wcmV0dHktcHJpbnQtanNvbi11c2luZy1qYXZhc2NyaXB0I2Fuc3dlci03MjIwNTEwXG4gIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIHJldHVybiBqc29uLnJlcGxhY2UoLyhcIihcXFxcdVthLXpBLVowLTldezR9fFxcXFxbXnVdfFteXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bKy1dP1xcZCspPykvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgIHZhciBjbHMgPSAnbnVtYmVyJztcbiAgICAgIGlmICgvXlwiLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgIGNscyA9ICdrZXknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgY2xzID0gJ2Jvb2xlYW4nO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoL251bGwvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgIGNscyA9ICdudWxsJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMgfSBmcm9tICcuLi91dGlsL2NvbXBvbmVudCc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1aXJlZEFyZ3NNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBtb2RhbElkID0gdGhpcy5kYXRhLmNhbGxiYWNrLmlkO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdGhpcy5lbGVtZW50ID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IHRoaXMuZWxlbWVudC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWhlYWRlcicpO1xuXG4gICAgdmFyIGhlYWRlclRpdGxlID0gaGVhZGVyLmFwcGVuZCgnc3BhbicpLmh0bWwoJ1JlcXVpcmVkIGFyZ3VtZW50cyZuYnNwOycpO1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke3RoaXMuZGF0YS50aXRsZX1gKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtY29udGVudCcpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtYm9keScpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXModGhpcy5kYXRhLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIHZhciByb3cgPSBjb250ZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICB2YXIgaW5wdXQgPSByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZCkuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkgeyBzZWxmLmRhdGEuY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICAvLyB3YWl0LCBpZiBpdCBpcyBib29sZWFuIHdlIGNyZWF0ZSBhIGNoZWNrYm94XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAvLyB3ZWxsLCBhIGNoZWNrYm94IHdvcmtzIHRoaXMgd2F5IHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSBcbiAgICAgICAgLy8gdGhlIHZhbHVlIHRvIGZhbHNlIGFuZCB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkIG9uIHRoZSBjaGVja2VkIFxuICAgICAgICAvLyBwcm9wZXJ0eSB0aGF0IHRyaWdnZXJzIHRoZSBvbmNoYW5nZSBldmVudFxuICAgICAgICBhcmcudmFsdWUgPSBhcmcudmFsdWUgfHwgZmFsc2U7XG4gICAgICAgIGlucHV0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKS5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IHNlbGYuZGF0YS5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlID0gdGhpcy5jaGVja2VkOyB9KTtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmQoJ3NwYW4nKS5hdHRyKCdjbGFzcycsICd2YWxpZGl0eScpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWZvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmRhdGEuY2FsbGJhY2spO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBzZWxmLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgc2VsZi5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgaG9sZGVyLnJlbW92ZSgpO1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgUmVnaXN0ZXJKdXB5dGVyS2V5Ym9hcmRFdmVudHMoWycuZnJhbmN5JywgJy5mcmFuY3ktYXJnJywgJy5mcmFuY3ktb3ZlcmxheScsICcuZnJhbmN5LW1vZGFsJ10pO1xuXG4gICAgY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpLmZvY3VzKCk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gUmVuZGVyZXIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb25zdHJ1Y3QgW1JlbmRlcmVyXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBbcmVuZGVyKCldIG1ldGhvZCEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudW5yZW5kZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFt1bnJlbmRlcigpXSBtZXRob2Qgc3BlY2lmaWVkLi4uJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiA9IDc1MDsgLy9tc1xuICB9XG5cbiAgZ2V0IEhUTUxQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnID8gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50Lm5vZGUoKS5wYXJlbnROb2RlKSA6IHRoaXMub3B0aW9ucy5hcHBlbmRUby5lbGVtZW50O1xuICB9XG5cbiAgZ2V0IFNWR1BhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQubm9kZSgpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2RpdicgPyB0aGlzLm9wdGlvbnMuYXBwZW5kVG8uZWxlbWVudC5zZWxlY3QoJ3N2ZycpIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvLmVsZW1lbnQ7XG4gIH1cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcmVxdWlyZXMgfSBmcm9tICcuLi9kZWNvcmF0b3IvZGF0YSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBAcmVxdWlyZXMoKVxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLkhUTUxQYXJlbnQuc2VsZWN0KCdkaXYuZnJhbmN5LXRvb2x0aXAtaG9sZGVyJyk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5ub2RlKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuSFRNTFBhcmVudC5hcHBlbmQoJ2RpdicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBpdCBleGlzdHMgYWxyZWFkeVxuICAgIGlmICh0aGlzLmVsZW1lbnQuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcyA9IGQzLm1vdXNlKHRoaXMuU1ZHUGFyZW50Lm5vZGUoKSk7XG5cbiAgICAvLyBUT0RPIGZpeCBhbHdheXMgdmlzaWJsZSB0b29sdGlwLCBmaW5lIHVudGlsIHNvbWVvbmUgY29tcGxhaW5zIGFib3V0IDpQXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlKCdsZWZ0JywgKHBvc1swXSArIDUpICsgJ3B4Jykuc3R5bGUoJ3RvcCcsIChwb3NbMV0gLSA1KSArICdweCcpO1xuXG4gICAgdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRvb2x0aXAnKVxuICAgICAgLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1ib2R5Jyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIHJvdyA9IHRhYmxlLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLXJvdycpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KHNlbGYuZGF0YVtrZXldLnRpdGxlKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChzZWxmLmRhdGFba2V5XS50ZXh0KTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgdGhpcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbi8qIGdsb2JhbCBKdXB5dGVyLCBNYXRoSmF4LCBkMyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gUmVnaXN0ZXJNYXRoSmF4KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBNYXRoSmF4Lkh1Yi5Db25maWcoe1xuICAgICAgICB0ZXgyamF4OiB7XG4gICAgICAgICAgYXZhaWxhYmxlRm9udHM6IFtcIlRlWFwiXSxcbiAgICAgICAgICBwcmVmZXJyZWRGb250OiBcIlRlWFwiLFxuICAgICAgICAgIGlubGluZU1hdGg6IFtcbiAgICAgICAgICAgIFsnJCcsICckJ10sXG4gICAgICAgICAgICBbJ1xcXFwoJywgJ1xcXFwpJ11cbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb2Nlc3NFc2NhcGVzOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5SZWdpc3Rlci5TdGFydHVwSG9vaygnRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxhYmVsJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gZDMuc2VsZWN0KHRoaXMpLFxuICAgICAgICAgICAgICBtYXRoSmF4ID0gc2VsZi5zZWxlY3QoJ3RleHQ+c3Bhbj5zdmcnKTtcbiAgICAgICAgICAgIGlmIChtYXRoSmF4Lm5vZGUoKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtYXRoSmF4LmF0dHIoJ3gnLCBzZWxmLmF0dHIoJ3gnKSk7XG4gICAgICAgICAgICAgICAgbWF0aEpheC5hdHRyKCd5JywgLTE1KTtcbiAgICAgICAgICAgICAgICBkMy5zZWxlY3Qoc2VsZi5ub2RlKCkucGFyZW50Tm9kZSkuYXBwZW5kKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGhKYXgubm9kZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH0pO1xuXG4gICAgICBNYXRoSmF4Lkh1Yi5RdWV1ZShbJ1R5cGVzZXQnLCBNYXRoSmF4Lkh1YiwgZWxlbWVudC5ub2RlKCldKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgTWF0aEpheCBpcyBub3QgbG9hZGVkLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZ2lzdGVySnVweXRlcktleWJvYXJkRXZlbnRzKGNsYXNzZXMpIHtcbiAgLy8gZGlzYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgaW4gSnVweXRlciBmb3IgY2xhc3Nlc1xuICBpZiAoIWNsYXNzZXMpIHJldHVybjtcbiAgdHJ5IHtcbiAgICBjbGFzc2VzLm1hcCgoY2wpID0+IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoY2wpO1xuICAgIH0pO1xuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgaWYgKGUubmFtZSA9PSAnUmVmZXJlbmNlRXJyb3InKSB7XG4gICAgICBuZXcgTG9nZ2VyKCkuaW5mbygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0LCBwYXJ0aWFsKSB7XG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLm1pbWUgPT09IEpzb25VdGlscy5NSU1FIHx8IHBhcnRpYWwgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGljIGdldCBNSU1FKCkge1xuICAgIHJldHVybiAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJztcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0RFQlVHXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtJTkZPXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0VSUk9SXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW1dBUk5dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIHdhcm4obWVzc2FnZSwgZXJyb3IpIHtcbiAgICBlcnJvciA9IGVycm9yIHx8IHt9O1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ1dBUk4nLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBwcml2YXRlIG1ldGhvZCB0aGF0IGZvcm1hdHMgYWxsIGxvZyBtZXNzYWdlc1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG4iXX0=

//# sourceMappingURL=maps/francy.bundle.js.map
