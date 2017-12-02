(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = require('./util/json-utils');

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _idUtils = require('./util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

var _canvas = require('./render/canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _menuMain = require('./render/menu-main');

var _menuMain2 = _interopRequireDefault(_menuMain);

var _graph = require('./render/graph');

var _graph2 = _interopRequireDefault(_graph);

var _chart = require('./render/chart');

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

},{"./render/canvas":4,"./render/chart":8,"./render/graph":10,"./render/menu-main":12,"./util/id-utils":17,"./util/json-utils":18}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

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

},{"../util/logger":19}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _modalRequired = require('./modal-required');

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

},{"./base":2,"./modal-required":14}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

var _composite = require('./composite');

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

},{"../util/id-utils":17,"./composite":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./chart":8,"./renderer":15,"./tooltip":16}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./chart":8,"./renderer":15,"./tooltip":16}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./chart":8,"./renderer":15,"./tooltip":16}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _chartBar = require('./chart-bar');

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = require('./chart-line');

var _chartLine2 = _interopRequireDefault(_chartLine);

var _chartScatter = require('./chart-scatter');

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
        default:
          throw new TypeError('The chart type [' + json.canvas.chart.type + '] is not implemented!');
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

},{"./chart-bar":5,"./chart-line":6,"./chart-scatter":7,"./renderer":15}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./renderer":15}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _menuContext = require('./menu-context');

var _menuContext2 = _interopRequireDefault(_menuContext);

var _tooltip = require('./tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _callback = require('./callback');

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
        return 'legendLayer' + d;
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

},{"./callback":3,"./menu-context":11,"./renderer":15,"./tooltip":16}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = require('./menu');

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

},{"./menu":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _idUtils = require('../util/id-utils');

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

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = d3.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Main Menu [' + menuId + ']...');
        menu = parent.append('foreignObject').attr('transform', 'translate(0,0)').attr('class', 'francy-main-menu-holder').attr('id', menuId);
      }

      // force rebuild menu again
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
        return _this2.logger.info('About Francy pressed... Not Implemented!');
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

},{"../util/id-utils":17,"./menu":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./callback":3,"./renderer":15}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3, Jupyter */

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
          if (arg.type === 'checkbox') {
            // well, a checkbox works this way so we need to initialize 
            // the value to false and update the value based on the checked 
            // property that triggers the onchange event
            arg.value = arg.value || false;
            input.attr('required', null).attr('value', arg.value).on('change', function () {
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

},{"../util/id-utils":17,"./renderer":15}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./base":2}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

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

},{"./renderer":15}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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
    value: function parse(input) {
      input = typeof input !== "string" ? JSON.stringify(input) : input;
      input = input.replace(/[\n\r\b\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        try {
          var json = JSON.parse(input);
          return json.agent === 'application/vnd.francy+json' ? json : undefined;
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

},{}],19:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL3JlbmRlci9iYXNlLmpzIiwic3JjL3JlbmRlci9jYWxsYmFjay5qcyIsInNyYy9yZW5kZXIvY2FudmFzLmpzIiwic3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LXNjYXR0ZXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LmpzIiwic3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJzcmMvcmVuZGVyL2dyYXBoLmpzIiwic3JjL3JlbmRlci9tZW51LWNvbnRleHQuanMiLCJzcmMvcmVuZGVyL21lbnUtbWFpbi5qcyIsInNyYy9yZW5kZXIvbWVudS5qcyIsInNyYy9yZW5kZXIvbW9kYWwtcmVxdWlyZWQuanMiLCJzcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwic3JjL3JlbmRlci90b29sdGlwLmpzIiwic3JjL3V0aWwvaWQtdXRpbHMuanMiLCJzcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwic3JjL3V0aWwvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBRUEsSUFBSSxhQUFhLEVBQWpCOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFXcUIsTTs7QUFFbkI7Ozs7Ozs7QUFPQSx3QkFBNEQ7QUFBQSw0QkFBOUMsT0FBOEM7QUFBQSxRQUE5QyxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QixRQUE2QixRQUE3QixRQUE2QjtBQUFBLFFBQW5CLGVBQW1CLFFBQW5CLGVBQW1COztBQUFBOztBQUMxRCxRQUFJLENBQUMsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUksS0FBSixDQUFVLHdHQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxRQUFM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Q0FBYSxJQUFiLENBQWtCLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsT0FBckIsQ0FBbEI7QUFDRDs7QUFFRDs7Ozs7Ozs7MEJBS00sTyxFQUFTLE0sRUFBTztBQUNwQixXQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEtBQUssT0FBTCxDQUFhLE9BQWIsRUFBc0IsT0FBdEIsQ0FBbkIsRUFBbUQsTUFBbkQ7QUFDRDs7QUFFRDs7Ozs7Ozs7eUJBS0ssTyxFQUFTLEssRUFBTztBQUNuQixjQUFRLFNBQVMsRUFBakI7QUFDQSxXQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsT0FBckIsQ0FBbkIsRUFBa0QsS0FBbEQ7QUFDRDs7QUFFRDs7Ozs7Ozs0QkFJUSxLLEVBQU8sTyxFQUFTO0FBQ3RCLG1CQUFXLEtBQVgsWUFBdUIsSUFBSSxJQUFKLEdBQVcsV0FBWCxFQUF2QixXQUFxRCxPQUFyRDtBQUNEOzs7Ozs7a0JBN0RrQixNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBKc29uVXRpbHMgZnJvbSAnLi91dGlsL2pzb24tdXRpbHMnO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9yZW5kZXIvY2FudmFzJztcbmltcG9ydCBNYWluTWVudSBmcm9tICcuL3JlbmRlci9tZW51LW1haW4nO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vcmVuZGVyL2dyYXBoJztcbmltcG9ydCBDaGFydCBmcm9tICcuL3JlbmRlci9jaGFydCc7XG4vL2ltcG9ydCBUcmFja2VyIGZyb20gJy4vdHJhY2tlci9jaGFuZ2UnO1xuXG5sZXQgQUxMX0NBTlZBUyA9IHt9O1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogXG4gKiBAdmVyc2lvbiAwLjUuMFxuICogXG4gKiBAZXhhbXBsZVxuICogbGV0IGZyYW5jeSA9IG5ldyBGcmFuY3koe3ZlcmJvc2U6IHRydWUsIGFwcGVuZFRvOiAnI2Rpdi1pZCcsIGNhbGxiYWNrSGFuZGxlcjogY29uc29sZS5sb2d9KTtcbiAqIGZyYW5jeS5yZW5kZXIoanNvbik7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBjYWxsYmFja0hhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uJyk7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhbiBlbGVtZW50IG9yIGlkIHRvIGFwcGVuZCB0aGUgZ3JhcGhpY3MgdG8uLi4hJyk7XG4gICAgfVxuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAgICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICAgKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgcmVuZGVyIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIFxuICAgKiB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICogQHJldHVybnMge09iamVjdH0gdGhlIGVsZW1lbnQgY3JlYXRlZFxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIGNhbnZhcyA9IG5ldyBDYW52YXModGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1haW5NZW51KHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgZ3JhcGggPSBuZXcgR3JhcGgodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgY2FudmFzLmFkZChtZW51KTtcbiAgICAgIGNhbnZhcy5hZGQoZ3JhcGgpO1xuICAgICAgY2FudmFzLmFkZChjaGFydCk7XG4gICAgICB2YXIgZWxlbWVudCA9IGNhbnZhcy5yZW5kZXIoanNvbik7XG4gICAgICBBTExfQ0FOVkFTW0lEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpXSA9IGVsZW1lbnQ7XG4gICAgICByZXR1cm4gZWxlbWVudC5ub2RlKCk7XG4gICAgfVxuICB9XG5cbiAgdW5yZW5kZXIoaWQpIHtcbiAgICBkZWxldGUgQUxMX0NBTlZBU1tpZF07XG4gIH1cbn1cblxudHJ5IHtcbiAgZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuICAvLyBoYW5kbGUgZXZlbnRzIG9uIHJlc2l6ZVxuICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB6b29tIHRvIGZpdCBhbGwgY2FudmFzIG9uIHJlc2l6ZVxuICAgIE9iamVjdC52YWx1ZXMoQUxMX0NBTlZBUykuZm9yRWFjaChmdW5jdGlvbihjYW52YXMpIHtcbiAgICAgIGNhbnZhcy56b29tVG9GaXQoKTtcbiAgICB9KTtcbiAgICAvLyBhZGp1c3QgdG9wIG1lbnVzIG9uIHJlc2l6ZVxuICAgIGQzLnNlbGVjdEFsbCgnZm9yZWlnbk9iamVjdC5mcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ3dpZHRoJywgJzEwMCUnKTtcbiAgfTtcbn1cbmNhdGNoIChlKSB7XG4gIGV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHR5cGUge0xvZ2dlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHVwZGF0ZSh7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IFJlcXVpcmVkQXJnc01vZGFsIGZyb20gJy4vbW9kYWwtcmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgZXhlY3V0ZShjb25maWcpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZmlnLmNhbGxiYWNrLnJlcXVpcmVkQXJncykubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IFJlcXVpcmVkQXJnc01vZGFsKHRoaXMub3B0aW9ucykucmVuZGVyKGNvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoY29uZmlnLmNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IENvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb3NpdGUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke2NhbnZhc0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSBjYW52YXMgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBzdmcgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske2NhbnZhc0lkfV0uLi5gKTtcbiAgICAgIGNhbnZhcyA9IHBhcmVudC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGNhbnZhc0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IGZyYW5jeS1jYW52YXMnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53aWR0aCkuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHZhciB6b29tID0gZDMuem9vbSgpO1xuXG4gICAgdmFyIGNvbnRlbnQgPSBjYW52YXMuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50Jyk7XG5cbiAgICBpZiAoIWNvbnRlbnQubm9kZSgpKSB7XG4gICAgICBjb250ZW50ID0gY2FudmFzLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZW50Jyk7XG4gICAgICB6b29tLm9uKFwiem9vbVwiLCB6b29tZWQpO1xuICAgICAgY2FudmFzLmNhbGwoem9vbSkub24oXCJkYmxjbGljay56b29tXCIsIG51bGwpOyAvLy50cmFuc2Zvcm0sIGQzLnpvb21JZGVudGl0eSk7XG4gICAgfVxuXG4gICAgY2FudmFzLm9uKFwiY2xpY2tcIiwgc3RvcHBlZCwgdHJ1ZSk7XG5cbiAgICBjYW52YXMuem9vbVRvRml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYm91bmRzID0gY29udGVudC5ub2RlKCkuZ2V0QkJveCgpO1xuXG4gICAgICB2YXIgZnVsbFdpZHRoID0gY2FudmFzLm5vZGUoKS5jbGllbnRXaWR0aCxcbiAgICAgICAgZnVsbEhlaWdodCA9IGNhbnZhcy5ub2RlKCkuY2xpZW50SGVpZ2h0ICsgNDU7IC8vd2VsbCwgdGhlIG1lbnUgaXMgcGFydCBvZiB0aGUgY2FudmFzICstNDBweFxuXG4gICAgICB2YXIgd2lkdGggPSBib3VuZHMud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IGJvdW5kcy5oZWlnaHQ7XG5cbiAgICAgIGlmICh3aWR0aCA9PSAwIHx8IGhlaWdodCA9PSAwKSByZXR1cm47XG5cbiAgICAgIHZhciBtaWRYID0gYm91bmRzLnggKyB3aWR0aCAvIDIsXG4gICAgICAgIG1pZFkgPSBib3VuZHMueSArIGhlaWdodCAvIDI7XG5cbiAgICAgIHZhciBzY2FsZSA9ICgwLjc1KSAvIE1hdGgubWF4KHdpZHRoIC8gZnVsbFdpZHRoLCBoZWlnaHQgLyBmdWxsSGVpZ2h0KTtcbiAgICAgIHZhciB0cmFuc2xhdGVYID0gZnVsbFdpZHRoIC8gMiAtIHNjYWxlICogbWlkWCxcbiAgICAgICAgdHJhbnNsYXRlWSA9IGZ1bGxIZWlnaHQgLyAyIC0gc2NhbGUgKiBtaWRZO1xuXG4gICAgICBjb250ZW50LnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMjAwMClcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0cmFuc2xhdGVYfSwke3RyYW5zbGF0ZVl9KXNjYWxlKCR7c2NhbGV9LCR7c2NhbGV9KWApXG4gICAgICAgIC5vbignZW5kJywgKCkgPT4gdXBkYXRlWm9vbSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSkpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVab29tKHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHNjYWxlKSB7XG4gICAgICBjYW52YXMuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5LnRyYW5zbGF0ZSh0cmFuc2xhdGVYLCB0cmFuc2xhdGVZKS5zY2FsZShzY2FsZSwgc2NhbGUpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBjb250ZW50LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZDMuZXZlbnQudHJhbnNmb3JtKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgICAgaWYgKGQzLmV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHsgZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IH1cbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHVwZGF0ZWQgWyR7Y2FudmFzSWR9XS4uLmApO1xuXG4gICAgdGhpcy5yZW5kZXJDaGlsZHJlbihjYW52YXMsIGpzb24pO1xuXG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhckNoYXJ0IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGNoYXJ0IGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gQmFyQ2hhcnQgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgYXhpcyA9IGpzb24uY2FudmFzLmNoYXJ0LmF4aXMsXG4gICAgICBkYXRhc2V0cyA9IGpzb24uY2FudmFzLmNoYXJ0LmRhdGEsXG4gICAgICBkYXRhc2V0TmFtZXMgPSBPYmplY3Qua2V5cyhkYXRhc2V0cyk7XG5cbiAgICB2YXIgc3ZnID0gcGFyZW50LnNlbGVjdCgnZy5mcmFuY3ktY29udGVudCcpLFxuICAgICAgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH0sXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGNoYXJ0XG4gICAgd2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gc2V0IHRoZSByYW5nZXNcbiAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpLnJhbmdlKFswLCB3aWR0aF0pLnBhZGRpbmcoMC4xKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICBheGlzLnguZG9tYWluID0gQ2hhcnQuZG9tYWluUmFuZ2UodG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGgpO1xuICAgICAgeC5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgfVxuXG4gICAgdmFyIGJhcnNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWJhcnMnKTtcblxuICAgIGlmICghYmFyc0dyb3VwLm5vZGUoKSkge1xuICAgICAgYmFyc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1iYXJzJyk7XG4gICAgfVxuXG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goZnVuY3Rpb24oa2V5LCBpbmRleCkge1xuICAgICAgdmFyIGJhciA9IGJhcnNHcm91cC5zZWxlY3RBbGwoYC5mcmFuY3ktYmFyJHtpbmRleH1gKS5kYXRhKGRhdGFzZXRzW2tleV0pO1xuXG4gICAgICBiYXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGJhci5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1iYXIke2luZGV4fWApXG4gICAgICAgIC5hdHRyKCd4JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChheGlzLnguZG9tYWluW2ldKSArIGluZGV4ICogKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKTsgfSlcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgKHguYmFuZHdpZHRoKCkgLyBkYXRhc2V0TmFtZXMubGVuZ3RoKSAtIDEpXG4gICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSlcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZCk7IH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MCkuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KTtcbiAgICAgICAgICB0b29sdGlwLnJlbmRlcih7ICdEYXRhc2V0Jzoga2V5LCAnVmFsdWUnOiBkIH0pO1xuICAgICAgICB9KVxuICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBiYXIubWVyZ2UoYmFyKS5vbignZW5kJywgKCkgPT4gcGFyZW50Lnpvb21Ub0ZpdCgpKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICBwYXJlbnQuem9vbVRvRml0KCk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIExpbmVDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgbGluZXNHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJ2cuZnJhbmN5LWxpbmVzJyk7XG5cbiAgICBpZiAoIWxpbmVzR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5lc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1saW5lcycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkKTsgfSk7XG5cbiAgICAgIHZhciBsaW5lID0gbGluZXNHcm91cC5zZWxlY3RBbGwoYC5saW5lJHtpbmRleH1gKS5kYXRhKFtkYXRhc2V0c1trZXldXSk7XG5cbiAgICAgIGxpbmUuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIGxpbmUuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAoKSA9PiBDaGFydC5jb2xvcnMoaW5kZXggKiA1KSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGZyYW5jeS1saW5lJHtpbmRleH1gKVxuICAgICAgICAuYXR0cignZCcsIHZhbHVlTGluZSlcbiAgICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oMjUwKVxuICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnMTBweCcpO1xuICAgICAgICAgIHRvb2x0aXAucmVuZGVyKHsgJ0RhdGFzZXQnOiBrZXksICdWYWx1ZSc6IGQgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAnNXB4Jyk7XG4gICAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgbGluZS5tZXJnZShsaW5lKTtcbiAgICB9KTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB4QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteC1heGlzJyk7XG5cbiAgICBpZiAoIXhBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB4QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS14LWF4aXMnKTtcbiAgICB9XG5cbiAgICB4QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB4IEF4aXNcbiAgICB4QXhpc0dyb3VwXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCR7aGVpZ2h0fSlgKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R5JywgNTApXG4gICAgICAuYXR0cignZHgnLCB3aWR0aCAvIDIpXG4gICAgICAuYXR0cignZmlsbCcsICdibGFjaycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWF4aXMnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoYXhpcy54LnRpdGxlKTtcblxuICAgIC8vIGZvcmNlIHJlYnVpbGQgYXhpcyBhZ2FpblxuICAgIHZhciB5QXhpc0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3kteS1heGlzJyk7XG5cbiAgICBpZiAoIXlBeGlzR3JvdXAubm9kZSgpKSB7XG4gICAgICB5QXhpc0dyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS15LWF4aXMnKTtcbiAgICB9XG5cbiAgICB5QXhpc0dyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgLy8gYWRkIHRoZSB5IEF4aXNcbiAgICB5QXhpc0dyb3VwXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2R4JywgLTUwKVxuICAgICAgLmF0dHIoJ2R5JywgaGVpZ2h0IC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLnkudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGVnZW5kJyk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBsZWdlbmQgYWdhaW5cbiAgICBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcblxuICAgIHZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKS5kYXRhKGRhdGFzZXROYW1lcy5zbGljZSgpKTtcblxuICAgIGxlZ2VuZC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsZWdlbmQgPSBsZWdlbmQuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoMCwke2kgKiAyMH0pYClcbiAgICAgIC5tZXJnZShsZWdlbmQpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgMjApXG4gICAgICAuYXR0cignd2lkdGgnLCAxOSlcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCAxOSlcbiAgICAgIC5zdHlsZSgnZmlsbCcsIChkLCBpKSA9PiBDaGFydC5jb2xvcnMoaSAqIDUpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3gnLCB3aWR0aCArIDgwKVxuICAgICAgLmF0dHIoJ3knLCA5KVxuICAgICAgLmF0dHIoJ2R5JywgJy4zNWVtJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGQgPT4gZCk7XG5cbiAgICBwYXJlbnQuem9vbVRvRml0KCk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi90b29sdGlwJztcbmltcG9ydCBDaGFydCBmcm9tICcuL2NoYXJ0JztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJDaGFydCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBjaGFydCBpcyBwcmVzZW50XG4gICAgaWYgKCFqc29uLmNhbnZhcy5jaGFydCkge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoJ05vIFNjYXR0ZXJDaGFydCB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvb2x0aXAgPSBuZXcgVG9vbHRpcCh0aGlzLm9wdGlvbnMpO1xuXG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBheGlzID0ganNvbi5jYW52YXMuY2hhcnQuYXhpcyxcbiAgICAgIGRhdGFzZXRzID0ganNvbi5jYW52YXMuY2hhcnQuZGF0YSxcbiAgICAgIGRhdGFzZXROYW1lcyA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfSxcbiAgICAgIHdpZHRoID0gK3BhcmVudC5hdHRyKCd3aWR0aCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxcbiAgICAgIGhlaWdodCA9ICtwYXJlbnQuYXR0cignaGVpZ2h0JykgfHwgZDMuc2VsZWN0KCdib2R5Jykubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgY2hhcnRcbiAgICB3aWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgaGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBzZXQgdGhlIHJhbmdlc1xuICAgIHZhciB4ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgd2lkdGhdKS5kb21haW4oYXhpcy54LmRvbWFpbik7XG4gICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtoZWlnaHQsIDBdKS5kb21haW4oYXhpcy55LmRvbWFpbik7XG5cbiAgICB2YXIgdG1wID0gW107XG4gICAgZGF0YXNldE5hbWVzLmZvckVhY2goa2V5ID0+IHRtcCA9IHRtcC5jb25jYXQoZGF0YXNldHNba2V5XSkpO1xuXG4gICAgaWYgKCFheGlzLnkuZG9tYWluLmxlbmd0aCkge1xuICAgICAgeS5kb21haW4oWzAsIGQzLm1heCh0bXAsIGQgPT4gZCldKTtcbiAgICB9XG5cbiAgICBpZiAoIWF4aXMueC5kb21haW4ubGVuZ3RoKSB7XG4gICAgICB4LmRvbWFpbihbMCwgdG1wLmxlbmd0aCAvIGRhdGFzZXROYW1lcy5sZW5ndGhdKTtcbiAgICB9XG5cbiAgICB2YXIgc2NhdHRlckdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5mcmFuY3ktc2NhdHRlcnMnKTtcblxuICAgIGlmICghc2NhdHRlckdyb3VwLm5vZGUoKSkge1xuICAgICAgc2NhdHRlckdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1zY2F0dGVycycpO1xuICAgIH1cblxuICAgIGRhdGFzZXROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKGtleSwgaW5kZXgpIHtcbiAgICAgIHZhciBzY2F0dGVyID0gc2NhdHRlckdyb3VwLnNlbGVjdEFsbChgLnNjYXR0ZXIke2luZGV4fWApLmRhdGEoZGF0YXNldHNba2V5XSk7XG5cbiAgICAgIHNjYXR0ZXIuZXhpdCgpLnJlbW92ZSgpO1xuXG4gICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcbiAgICAgIHNjYXR0ZXJcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4gQ2hhcnQuY29sb3JzKGluZGV4ICogNSkpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsIGBmcmFuY3ktc2NhdHRlciR7aW5kZXh9YClcbiAgICAgICAgLmF0dHIoXCJyXCIsIDUpXG4gICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4geChpKTsgfSlcbiAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQpOyB9KVxuICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAgIC5kdXJhdGlvbigyNTApXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIiwgMC41KVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxMCk7XG4gICAgICAgICAgdG9vbHRpcC5yZW5kZXIoeyAnRGF0YXNldCc6IGtleSwgJ1ZhbHVlJzogZCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDI1MClcbiAgICAgICAgICAgIC5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCA1KTtcbiAgICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBzY2F0dGVyLm1lcmdlKHNjYXR0ZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHhBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS14LWF4aXMnKTtcblxuICAgIGlmICgheEF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHhBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXgtYXhpcycpO1xuICAgIH1cblxuICAgIHhBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHggQXhpc1xuICAgIHhBeGlzR3JvdXBcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHknLCA1MClcbiAgICAgIC5hdHRyKCdkeCcsIHdpZHRoIC8gMilcbiAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXhpcycpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpXG4gICAgICAudGV4dChheGlzLngudGl0bGUpO1xuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBheGlzIGFnYWluXG4gICAgdmFyIHlBeGlzR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS15LWF4aXMnKTtcblxuICAgIGlmICgheUF4aXNHcm91cC5ub2RlKCkpIHtcbiAgICAgIHlBeGlzR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXktYXhpcycpO1xuICAgIH1cblxuICAgIHlBeGlzR3JvdXAuc2VsZWN0QWxsKCcqJykucmVtb3ZlKCk7XG5cbiAgICAvLyBhZGQgdGhlIHkgQXhpc1xuICAgIHlBeGlzR3JvdXBcbiAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKVxuICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCAtNTApXG4gICAgICAuYXR0cignZHknLCBoZWlnaHQgLyAyKVxuICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1heGlzJylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnZW5kJylcbiAgICAgIC50ZXh0KGF4aXMueS50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gc3ZnLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpLmRhdGEoZGF0YXNldE5hbWVzLnNsaWNlKCkpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAoZCwgaSkgPT4gYHRyYW5zbGF0ZSgwLCR7aSAqIDIwfSlgKVxuICAgICAgLm1lcmdlKGxlZ2VuZCk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd4Jywgd2lkdGggKyAyMClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDE5KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDE5KVxuICAgICAgLnN0eWxlKCdmaWxsJywgKGQsIGkpID0+IENoYXJ0LmNvbG9ycyhpICogNSkpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cigneCcsIHdpZHRoICsgODApXG4gICAgICAuYXR0cigneScsIDkpXG4gICAgICAuYXR0cignZHknLCAnLjM1ZW0nKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuICAgICAgLnRleHQoZCA9PiBkKTtcblxuICAgIHBhcmVudC56b29tVG9GaXQoKTtcblxuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSAnLi9jaGFydC1iYXInO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tICcuL2NoYXJ0LWxpbmUnO1xuaW1wb3J0IFNjYXR0ZXJDaGFydCBmcm9tICcuL2NoYXJ0LXNjYXR0ZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG5cbiAgICBpZiAoIWpzb24uY2FudmFzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLmNhbnZhcy5jaGFydC50eXBlKSB7XG4gICAgICBjYXNlIFwiYmFyXCI6XG4gICAgICAgIGVsZW1lbnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBMaW5lQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNjYXR0ZXJcIjpcbiAgICAgICAgZWxlbWVudCA9IG5ldyBTY2F0dGVyQ2hhcnQodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIGNoYXJ0IHR5cGUgWyR7anNvbi5jYW52YXMuY2hhcnQudHlwZX1dIGlzIG5vdCBpbXBsZW1lbnRlZCFgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGRvbWFpblJhbmdlKG1heCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBBcnJheShtYXgpLCAoXywgaSkgPT4gaSkubWFwKHggPT4geCk7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXJzID0gW107XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIHJlbmRlciBvdGhlciBjb21wb25lbnRzXG4gICAgZm9yICh2YXIgcmVuZGVyZXIgb2YgdGhpcy5yZW5kZXJlcnMpIHtcbiAgICAgIHJlbmRlcmVyLnVwZGF0ZShjaGlsZHJlbk9wdGlvbnMpLnJlbmRlcihqc29uKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL21lbnUtY29udGV4dCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggZXh0ZW5kcyBSZW5kZXJlciB7XG5cblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIGdyYXBoIGlzIHByZXNlbnRcbiAgICBpZiAoIWpzb24uY2FudmFzLmdyYXBoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gR3JhcGggdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b29sdGlwID0gbmV3IFRvb2x0aXAodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY29udGV4dE1lbnUgPSBuZXcgQ29udGV4dE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyA/IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubm9kZXMpIDogW10sXG4gICAgICBjYW52YXNMaW5rcyA9IGpzb24uY2FudmFzLmdyYXBoLmxpbmtzID8gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5saW5rcykgOiBbXTtcblxuICAgIHZhciBzdmcgPSBwYXJlbnQuc2VsZWN0KCdnLmZyYW5jeS1jb250ZW50JyksXG4gICAgICB3aWR0aCA9ICtwYXJlbnQuYXR0cignd2lkdGgnKSB8fCBkMy5zZWxlY3QoJ2JvZHknKS5ub2RlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICBoZWlnaHQgPSArcGFyZW50LmF0dHIoJ2hlaWdodCcpIHx8IGQzLnNlbGVjdCgnYm9keScpLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKC01MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBZIHBvc2l0aW9uIC0gdW5kaXJlY3RlZC9kaXJlY3RlZCBncmFwaHMgZmFsbCBoZXJlXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWSg1MDApLnN0cmVuZ3RoKDAuMzUpO1xuXG4gICAgaWYgKGpzb24uY2FudmFzLmdyYXBoLnR5cGUgPT09ICdoYXNzZScpIHtcbiAgICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXIgdG8gc2ltdWxhdGUgdGhlIGhhc3NlIGRpYWdyYW1cbiAgICAgIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiAoZC5zaXplICogNSkpLnN0cmVuZ3RoKDEpO1xuICAgIH1cblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkuc3RyZW5ndGgoMC4wMDEpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTI1MCkpXG4gICAgICAuZm9yY2UoJ2NvbGxpZGUnLCBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnNpemUpKVxuICAgICAgLmZvcmNlKCd4JywgZm9yY2VYKVxuICAgICAgLmZvcmNlKCd5JywgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKVxuICAgICAgLm9uKFwiZW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB6b29tIHRvIGZpdCB3aGVuIHNpbXVsYXRpb24gaXMgb3ZlclxuICAgICAgICBwYXJlbnQuem9vbVRvRml0KCk7XG4gICAgICB9KTtcblxuICAgIHZhciBsaW5rR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxpbmtzJyk7XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBsaW5rR3JvdXAuc2VsZWN0QWxsKCdsaW5lLmZyYW5jeS1saW5rJykuZGF0YShjYW52YXNMaW5rcyk7XG5cbiAgICBsaW5rLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAubWVyZ2UobGluayk7XG5cbiAgICBpZiAoanNvbi5jYW52YXMuZ3JhcGgudHlwZSA9PT0gJ2RpcmVjdGVkJykge1xuICAgICAgLy8gdGhpcyBtZWFucyB3ZSBuZWVkIGFycm93cywgc28gd2UgYXBwZW5kIHRoZSBtYXJrZXJcbiAgICAgIHBhcmVudC5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWFycm93cycpXG4gICAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuICAgICAgLy8gdXBkYXRlIHRoZSBzdHlsZSBvZiB0aGUgbGlua1xuICAgICAgbGluay5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuICAgIH1cblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLmZyYW5jeS1ub2RlcycpO1xuXG4gICAgaWYgKCFub2RlR3JvdXAubm9kZSgpKSB7XG4gICAgICBub2RlR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW5vZGVzJyk7XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSBub2RlR3JvdXAuc2VsZWN0QWxsKCdwYXRoLmZyYW5jeS1ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIG5vZGUgPSBub2RlLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IEdyYXBoLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogMTAwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnZnJhbmN5LW5vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBmcmFuY3ktaGlnaGxpZ2h0JyA6ICcnKSArIChPYmplY3QudmFsdWVzKGQubWVudXMpLmxlbmd0aCA/ICcgZnJhbmN5LWNvbnRleHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLm1lcmdlKG5vZGUpO1xuXG4gICAgbm9kZS5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC5vbignY29udGV4dG1lbnUnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGJ1aWxkIGNvbnRleHQgbWVudVxuICAgICAgICBjb250ZXh0TWVudS5yZW5kZXIoZCk7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2NvbnRleHRtZW51Jyk7XG4gICAgICB9KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgLy8gZGVmYXVsdCwgaGlnaGxpZ2h0IGNvbm5lY3RlZCBub2Rlc1xuICAgICAgICBjb25uZWN0ZWROb2Rlcy5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbignZGJsY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGFueSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGhlcmVcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrLmNhbGwodGhpcywgZCwgJ2RibGNsaWNrJyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGQgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBzaG93IHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5yZW5kZXIoZC5pbmZvKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZGUgdG9vbHRpcFxuICAgICAgICB0b29sdGlwLnVucmVuZGVyKCk7XG4gICAgICB9KTtcblxuICAgIHZhciBsYWJlbEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmZyYW5jeS1sYWJlbHMnKTtcblxuICAgIGlmICghbGFiZWxHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxhYmVsR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LWxhYmVscycpO1xuICAgIH1cblxuICAgIHZhciBsYWJlbCA9IGxhYmVsR3JvdXAuc2VsZWN0QWxsKCd0ZXh0JykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBsYWJlbC5leGl0KCkucmVtb3ZlKCk7XG5cbiAgICBsYWJlbCA9IGxhYmVsLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKVxuICAgICAgLm1lcmdlKGxhYmVsKTtcblxuICAgIGxhYmVsXG4gICAgICAub24oJ2NvbnRleHRtZW51JywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBkZWZhdWx0LCBidWlsZCBjb250ZXh0IG1lbnVcbiAgICAgICAgY29udGV4dE1lbnUucmVuZGVyKGQpO1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdjb250ZXh0bWVudScpO1xuICAgICAgfSlcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIC8vIGRlZmF1bHQsIGhpZ2hsaWdodCBjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgY29ubmVjdGVkTm9kZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgLy8gYW55IGNhbGxiYWNrcyB3aWxsIGJlIGhhbmRsZWQgaGVyZVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2suY2FsbCh0aGlzLCBkLCAnY2xpY2snKTtcbiAgICAgIH0pXG4gICAgICAub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZCkge1xuICAgICAgICAvLyBhbnkgY2FsbGJhY2tzIHdpbGwgYmUgaGFuZGxlZCBoZXJlXG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjay5jYWxsKHRoaXMsIGQsICdkYmxjbGljaycpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBkID0+IHtcbiAgICAgICAgLy8gZGVmYXVsdCwgc2hvdyB0b29sdGlwXG4gICAgICAgIHRvb2x0aXAucmVuZGVyKGQuaW5mbyk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyBkZWZhdWx0LCBoaWRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC51bnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICB2YXIgbGVnZW5kR3JvdXAgPSBwYXJlbnQuc2VsZWN0QWxsKCcuZnJhbmN5LWxlZ2VuZCcpO1xuXG4gICAgaWYgKCFsZWdlbmRHcm91cC5ub2RlKCkpIHtcbiAgICAgIGxlZ2VuZEdyb3VwID0gcGFyZW50LmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1sZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIGxlZ2VuZCBhZ2FpblxuICAgIGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IGxlZ2VuZEdyb3VwLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCkuc29ydCgoYSwgYikgPT4gYS5sYXllciA+IGIubGF5ZXIpLCBkID0+IGQuaWQpO1xuXG4gICAgbGVnZW5kLmV4aXQoKS5yZW1vdmUoKTtcblxuICAgIGxlZ2VuZCA9IGxlZ2VuZC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgKGQsIGkpID0+IGB0cmFuc2xhdGUoJHsxMH0sJHsoaSArIDUpICogMTJ9KWApXG4gICAgICAubWVyZ2UobGVnZW5kKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgLy9mb3JjZSBzaW11bGF0aW9uIHJlc3RhcnRcbiAgICBzaW11bGF0aW9uLmFscGhhKDEpLnJlc3RhcnQoKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNSkpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSAqIGQudGl0bGUubGVuZ3RoICogMikpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplICogMikpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjkpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDE7IC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIGQuc2l6ZSArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgICB9XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSB7XG4gICAgICAgIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4wMSkucmVzdGFydCgpO1xuICAgICAgfVxuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkge1xuICAgICAgICBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgfVxuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2soZGF0YSwgZXZlbnQpIHtcbiAgICAgIGlmIChkYXRhLmNhbGxiYWNrcykge1xuICAgICAgICBPYmplY3QudmFsdWVzKGRhdGEuY2FsbGJhY2tzKS5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICAgIC8vIGV4ZWN1dGUgdGhlIG9uZXMgdGhhdCBtYXRjaCB0aGUgZXZlbnQhXG4gICAgICAgICAgY2IudHJpZ2dlciA9PT0gZXZlbnQgJiYgY2FsbGJhY2suZXhlY3V0ZSh7IGNhbGxiYWNrOiBjYiB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN2ZztcblxuICB9XG5cbiAgdW5yZW5kZXIoKSB7fVxuXG59XG4iLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBNZW51IHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5zZWxlY3QoJ2ZvcmVpZ25PYmplY3QuZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy5jb250ZXh0TWVudS5ub2RlKCkpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnUgPSB0aGlzLlNWR1BhcmVudC5hcHBlbmQoJ2ZvcmVpZ25PYmplY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LWNvbnRleHQtbWVudS1ob2xkZXInKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIob2JqZWN0KSB7XG5cbiAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8ganVzdCBpZ25vcmUgcmVuZGVyaW5nIGlmIG5vIG1lbnVzIGFyZSBwcmVzZW50XG4gICAgaWYgKCFvYmplY3QubWVudXMgfHwgIU9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdObyBDb250ZXh0TWVudSB0byByZW5kZXIgaGVyZS4uLiBjb250aW51aW5nLi4uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0TWVudVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50Lm9mZnNldFggKyA1fSwke2QzLmV2ZW50Lm9mZnNldFkgKyA1fSlgKTtcblxuICAgIC8vIHNob3cgdGhlIGNvbnRleHQgbWVudVxuICAgIHRoaXMuY29udGV4dE1lbnUuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0cyBhbHJlYWR5XG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnUuc2VsZWN0QWxsKCcqJykubm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZGVzdHJveSBtZW51XG4gICAgZDMuc2VsZWN0KCdib2R5Jykub24oJ2NsaWNrLmZyYW5jeS1jb250ZXh0LW1lbnUnLCAoKSA9PiB0aGlzLnVucmVuZGVyKCkpO1xuXG4gICAgLy8gdGhpcyBnZXRzIGV4ZWN1dGVkIHdoZW4gYSBjb250ZXh0bWVudSBldmVudCBvY2N1cnNcbiAgICB2YXIgbWVudSA9IHRoaXMuY29udGV4dE1lbnUuYXBwZW5kKCd4aHRtbDpkaXYnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1jb250ZXh0LW1lbnUnKS5hcHBlbmQoJ3VsJyk7XG4gICAgdmFyIG1lbnVzSXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yKE9iamVjdC52YWx1ZXMob2JqZWN0Lm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51O1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy5jb250ZXh0TWVudS5zZWxlY3RBbGwoJyonKS5yZW1vdmUoKTtcbiAgICB0aGlzLmNvbnRleHRNZW51LnN0eWxlKCdkaXNwbGF5JywgbnVsbCk7XG4gIH1cbn1cbiIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzIHdpbmRvdyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIE1lbnUge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gZDMuc2VsZWN0KGAjJHttZW51SWR9YCk7XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgbWVudSBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIW1lbnUubm9kZSgpKSB7XG4gICAgICAvLyBjcmVhdGUgYSBkaXYgZWxlbWVudCBkZXRhY2hlZCBmcm9tIHRoZSBET00hXG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgTWFpbiBNZW51IFske21lbnVJZH1dLi4uYCk7XG4gICAgICBtZW51ID0gcGFyZW50LmFwcGVuZCgnZm9yZWlnbk9iamVjdCcpLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwwKWApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktbWFpbi1tZW51LWhvbGRlcicpLmF0dHIoJ2lkJywgbWVudUlkKTtcbiAgICB9XG5cbiAgICAvLyBmb3JjZSByZWJ1aWxkIG1lbnUgYWdhaW5cbiAgICBtZW51LnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuXG4gICAgbWVudSA9IG1lbnUuYXBwZW5kKCd4aHRtbDp1bCcpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tYWluLW1lbnUnKTtcblxuICAgIGlmIChqc29uLmNhbnZhcy50aXRsZSkge1xuICAgICAgbWVudS5hcHBlbmQoJ2xpJykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRpdGxlJykuYXBwZW5kKCdhJykuaHRtbChqc29uLmNhbnZhcy50aXRsZSk7XG4gICAgfVxuXG4gICAgdmFyIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gcGFyZW50Lnpvb21Ub0ZpdCgpKS5hdHRyKCd0aXRsZScsICdab29tIHRvIEZpdCcpLmh0bWwoJ1pvb20gdG8gRml0Jyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5sb2dnZXIuaW5mbygnU2F2ZSB0byBQTkcgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhJykpLmF0dHIoJ3RpdGxlJywgJ1NhdmUgdG8gUE5HJykuaHRtbCgnU2F2ZSB0byBQTkcnKTtcbiAgICBjb250ZW50LmFwcGVuZCgnbGknKS5hcHBlbmQoJ2EnKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLmxvZ2dlci5pbmZvKCdBYm91dCBGcmFuY3kgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhJykpLmF0dHIoJ3RpdGxlJywgJ0Fib3V0JykuaHRtbCgnQWJvdXQnKTtcblxuICAgIC8vIFRyYXZlcnNlIGFsbCBtZW51cyBhbmQgZmxhdHRlbiB0aGVtIVxuICAgIHZhciBtZW51c0l0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcihPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSk7XG4gICAgdGhpcy50cmF2ZXJzZShtZW51LCBtZW51c0l0ZXJhdG9yKTtcblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNYWluIE1lbnUgdXBkYXRlZCBbJHttZW51SWR9XS4uLmApO1xuXG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxuICB1bnJlbmRlcigpIHt9XG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgdHJhdmVyc2UoYXBwZW5kVG8sIG1lbnVzSXRlcmF0b3IpIHtcbiAgICB3aGlsZSAobWVudXNJdGVyYXRvci5oYXNOZXh0KCkpIHtcbiAgICAgIHZhciBtZW51SXRlbSA9IG1lbnVzSXRlcmF0b3IubmV4dCgpO1xuICAgICAgdmFyIGVudHJ5ID0gYXBwZW5kVG8uYXBwZW5kKCdsaScpO1xuICAgICAgdmFyIGFjdGlvbiA9IGVudHJ5LnNlbGVjdEFsbCgnYScpLmRhdGEoW21lbnVJdGVtXSkuZW50ZXIoKS5hcHBlbmQoJ2EnKS5hdHRyKCd0aXRsZScsIG1lbnVJdGVtLnRpdGxlKS5odG1sKG1lbnVJdGVtLnRpdGxlKTtcbiAgICAgIGlmIChtZW51SXRlbS5jYWxsYmFjayAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLmNhbGxiYWNrKS5sZW5ndGgpIHtcbiAgICAgICAgYWN0aW9uLm9uKCdjbGljaycsIChkKSA9PiBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKS5leGVjdXRlKGQpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICB2YXIgc3ViTWVudXNJdGVyYXRvciA9IHRoaXMuaXRlcmF0b3IoT2JqZWN0LnZhbHVlcyhtZW51SXRlbS5tZW51cykpO1xuICAgICAgICB0aGlzLnRyYXZlcnNlKGNvbnRlbnQsIHN1Yk1lbnVzSXRlcmF0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZXJhdG9yKGFycmF5KSB7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNOZXh0KCkgPyBhcnJheVtuZXh0SW5kZXgrK10gOiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgaGFzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMsIEp1cHl0ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWlyZWRBcmdzTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG1vZGFsSWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FsbGJhY2suaWQpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgLy8gd2Ugd2FudCB0byBvdmVybGF5IGV2ZXJ5dGhpbmcsIGhlbmNlICdib2R5JyBtdXN0IGJlIHVzZWRcbiAgICB2YXIgb3ZlcmxheSA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdmcmFuY3ktb3ZlcmxheScpO1xuICAgIHZhciBob2xkZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5Jyk7XG4gICAgdmFyIG1vZGFsID0gaG9sZGVyLmFwcGVuZCgnZGl2JylcbiAgICAgIC5hdHRyKCdpZCcsIG1vZGFsSWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktbW9kYWwtaGVhZGVyJyk7XG5cbiAgICB2YXIgaGVhZGVyVGl0bGUgPSBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzJm5ic3A7Jyk7XG4gICAgaWYgKGpzb24udGl0bGUpIHtcbiAgICAgIGhlYWRlclRpdGxlLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoYGZvciAke2pzb24udGl0bGV9YCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRlbnQgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LW1vZGFsLWNvbnRlbnQnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgdmFyIHJvdyA9IGNvbnRlbnQuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtcm93Jyk7XG4gICAgICByb3cuYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktdGFibGUtY2VsbCcpLmFwcGVuZCgnbGFiZWwnKS5hdHRyKCdmb3InLCBhcmcuaWQpLnRleHQoYXJnLnRpdGxlKTtcbiAgICAgIHZhciBpbnB1dCA9IHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykuYXBwZW5kKCdpbnB1dCcpLmF0dHIoJ2lkJywgYXJnLmlkKS5hdHRyKCdjbGFzcycsICdmcmFuY3ktYXJnJylcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTsgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICBpZiAoYXJnLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgLy8gd2VsbCwgYSBjaGVja2JveCB3b3JrcyB0aGlzIHdheSBzbyB3ZSBuZWVkIHRvIGluaXRpYWxpemUgXG4gICAgICAgIC8vIHRoZSB2YWx1ZSB0byBmYWxzZSBhbmQgdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiB0aGUgY2hlY2tlZCBcbiAgICAgICAgLy8gcHJvcGVydHkgdGhhdCB0cmlnZ2VycyB0aGUgb25jaGFuZ2UgZXZlbnRcbiAgICAgICAgYXJnLnZhbHVlID0gYXJnLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgICBpbnB1dC5hdHRyKCdyZXF1aXJlZCcsIG51bGwpXG4gICAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7IGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZSA9IHRoaXMuY2hlY2tlZDsgfSk7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS1tb2RhbC1mb290ZXInKTtcblxuICAgIGZvb3Rlci5hcHBlbmQoJ2J1dHRvbicpLnRleHQoJ09rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZm9ybS5ub2RlKCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoanNvbi5jYWxsYmFjayk7XG4gICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnQ2FuY2VsJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gdXNpbmcgdGhpcyBtb2RhbCBpbiBKdXB5dGVyXG4gICAgdHJ5IHtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3knKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktYXJnJyk7XG4gICAgICBKdXB5dGVyLmtleWJvYXJkX21hbmFnZXIucmVnaXN0ZXJfZXZlbnRzKCcuZnJhbmN5LW92ZXJsYXknKTtcbiAgICAgIEp1cHl0ZXIua2V5Ym9hcmRfbWFuYWdlci5yZWdpc3Rlcl9ldmVudHMoJy5mcmFuY3ktbW9kYWwnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgPT0gJ1JlZmVyZW5jZUVycm9yJykge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZygnSXQgc2VlbXMgd2VcXCdyZSBub3QgcnVubmluZyBvbiBKdXB5dGVyLi4uJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGVudC5zZWxlY3RBbGwoJy5mcmFuY3ktYXJnJykubm9kZSgpLmZvY3VzKCk7XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FsbGJhY2sgTW9kYWwgdXBkYXRlZCBbJHttb2RhbElkfV0uLi5gKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG4gIHVucmVuZGVyKCkge31cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciBleHRlbmRzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IFJlbmRlcmVyKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtSZW5kZXJlcl0gaW5zdGFuY2VzIGRpcmVjdGx5IScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZW5kZXIgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdGhpcy5yZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3Qgb3ZlcnJpZGUgW3JlbmRlcihqc29uKV0gbWV0aG9kIScpO1xuICAgIH1cbiAgICBpZiAodGhpcy51bnJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZygnTm8gW3VucmVuZGVyKCldIG1ldGhvZCBzcGVjaWZpZWQuLi4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgSFRNTFBhcmVudCgpIHtcbiAgICByZXR1cm4gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUby5ub2RlKCkucGFyZW50Tm9kZSk7XG4gIH1cblxuICBnZXQgU1ZHUGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gIH1cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuU1ZHUGFyZW50LnNlbGVjdCgnZm9yZWlnbk9iamVjdC5mcmFuY3ktdG9vbHRpcC1ob2xkZXInKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy50b29sdGlwLm5vZGUoKSkge1xuICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5TVkdQYXJlbnQuYXBwZW5kKCdmb3JlaWduT2JqZWN0JylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwLWhvbGRlcicpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihvYmplY3QpIHtcblxuICAgIC8vIGp1c3QgaWdub3JlIHJlbmRlcmluZyBpZiBubyBpbmZvIGFyZSBwcmVzZW50XG4gICAgaWYgKCFvYmplY3QgfHwgIU9iamVjdC52YWx1ZXMob2JqZWN0KS5sZW5ndGgpIHtcbiAgICAgIC8vdGhpcy5sb2dnZXIuZGVidWcoJ05vdGhpbmcgdG8gcmVuZGVyIGhlcmUuLi4gY29udGludWluZy4uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9vbHRpcC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQub2Zmc2V0WCArIDV9LCR7ZDMuZXZlbnQub2Zmc2V0WSArIDV9KWApO1xuXG4gICAgLy8gY2hlY2sgaWYgaXQgZXhpc3RzIGFscmVhZHlcbiAgICBpZiAodGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLm5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0YWJsZSA9IHRoaXMudG9vbHRpcC5hcHBlbmQoJ3hodG1sOmRpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10b29sdGlwJylcbiAgICAgIC5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZScpLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWJvZHknKTtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciByb3cgPSB0YWJsZS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1yb3cnKTtcbiAgICAgIHJvdy5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeS10YWJsZS1jZWxsJykudGV4dChrZXkpO1xuICAgICAgcm93LmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZnJhbmN5LXRhYmxlLWNlbGwnKS50ZXh0KG9iamVjdFtrZXldKTtcbiAgICB9KTtcblxuICAgIC8vIHNob3cgdG9vbHRpcFxuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuICB9XG5cbiAgdW5yZW5kZXIoKSB7XG4gICAgdGhpcy50b29sdGlwLnNlbGVjdEFsbCgnKicpLnJlbW92ZSgpO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZSgnZGlzcGxheScsIG51bGwpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0fE1lbnVdLSpoZXggdXVpZConXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEVXRpbHMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSB3aW5kb3cgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lXaW5kb3ctJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIGNhbnZhcyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY2FudmFzIGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0Q2FudmFzSWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeUNhbnZhcy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU9iamVjdC0ke29iamVjdElkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG1lbnVJZCAtIHRoZSBtZW51IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRNZW51SWQobWVudUlkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lNZW51LSR7bWVudUlkfWA7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtXQVJOXSBlbnRyeSBpbiB0aGUgY29uc29sZSBsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICogQHBhcmFtIGVycm9yIHRoZSBlcnJvciBPYmplY3QgdG8gYXR0YWNoIHRvIHRoZSBtZXNzYWdlXG4gICAqL1xuICB3YXJuKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgZXJyb3IgPSBlcnJvciB8fCB7fTtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdXQVJOJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgcHJpdmF0ZSBtZXRob2QgdGhhdCBmb3JtYXRzIGFsbCBsb2cgbWVzc2FnZXNcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gcHJpbnRcbiAgICovXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuIl19
