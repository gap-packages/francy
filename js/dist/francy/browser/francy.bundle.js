(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Francy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = require("./util/json-utils");

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _window = require("./render/window");

var _window2 = _interopRequireDefault(_window);

var _canvas = require("./render/canvas");

var _canvas2 = _interopRequireDefault(_canvas);

var _menu = require("./render/menu");

var _menu2 = _interopRequireDefault(_menu);

var _shape = require("./render/shape");

var _shape2 = _interopRequireDefault(_shape);

var _chartBar = require("./render/chart-bar");

var _chartBar2 = _interopRequireDefault(_chartBar);

var _chartLine = require("./render/chart-line");

var _chartLine2 = _interopRequireDefault(_chartLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Tracker from "./tracker/change";

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
var Francy = exports.Francy = function () {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose prints extra log information to console.log, default false
   * @param appendTo where the generated html/svg components will be attached to, default body
   * @param callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  function Francy(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    if (!callbackHandler) {
      throw new Error("A Callback Handler must be provided! This will be used to trigger events from the graphics produced...");
    }
    if (!appendTo) {
      throw new Error("Missing an element or id to append the graphics to...!");
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object render
   */


  _createClass(Francy, [{
    key: "render",
    value: function render(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        var menu = new _menu2.default(this.options);
        var shapes = new _shape2.default(this.options);
        //var lineChart = new LineChart(this.options);
        //var barChart = new BarChart(this.options);
        var canvas = new _canvas2.default(this.options);
        canvas.add(shapes);
        //canvas.add(lineChart);
        //canvas.add(barChart);
        var window = new _window2.default(this.options);
        window.add(menu);
        window.add(canvas);
        var element = window.render(json);
        return element.node();
      }
    }
  }]);

  return Francy;
}();

exports.Francy = window.Francy = Francy;

},{"./render/canvas":4,"./render/chart-bar":5,"./render/chart-line":6,"./render/menu":8,"./render/shape":11,"./render/window":12,"./util/json-utils":14}],2:[function(require,module,exports){
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

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
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

},{"../util/logger":15}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

var CallbackHandler = function () {
  function CallbackHandler(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new _logger2.default({ verbose: verbose });
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute(config) {
      return new _modal2.default(this.options).render(config);
    }
  }]);

  return CallbackHandler;
}();

exports.default = CallbackHandler;

},{"../util/logger":15,"./modal":9}],4:[function(require,module,exports){
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
      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = d3.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = d3.select(this.options.appendTo).append('svg').attr('id', canvasId).attr('class', 'canvas');
      }
      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);

      canvas = canvas.call(d3.zoom().on('zoom', function () {
        canvas.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
      })).append('g').attr('class', 'draw');

      canvas.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
        return d;
      }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');

      this.logger.debug('Canvas ready: ' + canvas);

      this.renderChildren(canvas, json);

      return canvas;
    }
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

},{"../util/id-utils":13,"./composite":7}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BarChart = function BarChart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, BarChart);

  this.width = 500;
  this.height = 300;
  this.barPadding = 1;
  this.fillColor = 'coral';
  this.data = [];
}

/*
  chart(selection) {
    selection.each(function() {

      var barSpacing = height / data.length;
      var barHeight = barSpacing - barPadding;
      var maxValue = d3.max(data);
      var widthScale = width / maxValue;

      var dom = d3.select(this);
      var svg = dom.append('svg')
        .attr('class', 'bar-chart')
        .attr('height', height)
        .attr('width', width)
        .style('fill', fillColor);

      var bars = svg.selectAll('rect.display-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'display-bar')
        .attr('y', function(d, i) { return i * barSpacing; })
        .attr('height', barHeight)
        .attr('x', 0)
        .attr('width', function(d) { return d * widthScale; });


      // update functions
      updateWidth = function() {
        widthScale = width / maxValue;
        bars.transition().duration(1000).attr('width', function(d) { return d * widthScale; });
        svg.transition().duration(1000).attr('width', width);
      };

      updateHeight = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        bars.transition().duration(1000).attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight);
        svg.transition().duration(1000).attr('height', height);

      };

      updateFillColor = function() {
        svg.transition().duration(1000).style('fill', fillColor);
      };

      updateData = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        maxValue = d3.max(data);
        widthScale = width / maxValue;

        var update = svg.selectAll('rect.display-bar')
          .data(data);

        update
          .transition()
          .duration(1000)
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', function(d) { return d * widthScale; });

        update.enter()
          .append('rect')
          .attr('class', 'display-bar')
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', 0)
          .style('opacity', 0)
          .transition()
          .duration(1000)
          .delay(function(d, i) { return (data.length - i) * 40; })
          .attr('width', function(d) { return d * widthScale; })
          .style('opacity', 1);

        update.exit()
          .transition()
          .duration(650)
          .delay(function(d, i) { return (data.length - i) * 20; })
          .style('opacity', 0)
          .attr('height', 0)
          .attr('x', 0)
          .attr('width', 0)
          .remove();
      }

    });
  }

  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    if (typeof updateWidth === 'function') updateWidth();
    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    if (typeof updateHeight === 'function') updateHeight();
    return chart;
  };

  chart.fillColor = function(value) {
    if (!arguments.length) return fillColor;
    fillColor = value;
    if (typeof updateFillColor === 'function') updateFillColor();
    return chart;
  };

  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    if (typeof updateData === 'function') updateData();
    return chart;
  };
  */

// All options that should be accessible to caller
;

},{}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LineChart = function LineChart() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, LineChart);

  this.width = 500;
  this.height = 300;
  this.barPadding = 1;
  this.fillColor = 'coral';
  this.data = [];
}

/*
  chart(selection) {
    selection.each(function() {
       var barSpacing = height / data.length;
      var barHeight = barSpacing - barPadding;
      var maxValue = d3.max(data);
      var widthScale = width / maxValue;
       var dom = d3.select(this);
      var svg = dom.append('svg')
        .attr('class', 'bar-chart')
        .attr('height', height)
        .attr('width', width)
        .style('fill', fillColor);
       var bars = svg.selectAll('rect.display-bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'display-bar')
        .attr('y', function(d, i) { return i * barSpacing; })
        .attr('height', barHeight)
        .attr('x', 0)
        .attr('width', function(d) { return d * widthScale; });
        // update functions
      updateWidth = function() {
        widthScale = width / maxValue;
        bars.transition().duration(1000).attr('width', function(d) { return d * widthScale; });
        svg.transition().duration(1000).attr('width', width);
      };
       updateHeight = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        bars.transition().duration(1000).attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight);
        svg.transition().duration(1000).attr('height', height);
       };
       updateFillColor = function() {
        svg.transition().duration(1000).style('fill', fillColor);
      };
       updateData = function() {
        barSpacing = height / data.length;
        barHeight = barSpacing - barPadding;
        maxValue = d3.max(data);
        widthScale = width / maxValue;
         var update = svg.selectAll('rect.display-bar')
          .data(data);
         update
          .transition()
          .duration(1000)
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', function(d) { return d * widthScale; });
         update.enter()
          .append('rect')
          .attr('class', 'display-bar')
          .attr('y', function(d, i) { return i * barSpacing; })
          .attr('height', barHeight)
          .attr('x', 0)
          .attr('width', 0)
          .style('opacity', 0)
          .transition()
          .duration(1000)
          .delay(function(d, i) { return (data.length - i) * 40; })
          .attr('width', function(d) { return d * widthScale; })
          .style('opacity', 1);
         update.exit()
          .transition()
          .duration(650)
          .delay(function(d, i) { return (data.length - i) * 20; })
          .style('opacity', 0)
          .attr('height', 0)
          .attr('x', 0)
          .attr('width', 0)
          .remove();
      }
     });
  }
   chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    if (typeof updateWidth === 'function') updateWidth();
    return chart;
  };
   chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    if (typeof updateHeight === 'function') updateHeight();
    return chart;
  };
   chart.fillColor = function(value) {
    if (!arguments.length) return fillColor;
    fillColor = value;
    if (typeof updateFillColor === 'function') updateFillColor();
    return chart;
  };
   chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    if (typeof updateData === 'function') updateData();
    return chart;
  };
*/


// All options that should be accessible to caller
;

},{}],7:[function(require,module,exports){
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

    _this.renderers = [];

    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
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
        childrenOptions.appendTo = parent.node();
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

},{"./renderer":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _callback = require('./callback');

var _callback2 = _interopRequireDefault(_callback);

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

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
    key: 'render',
    value: function render(json) {
      var _this2 = this;

      var window = d3.select(this.options.appendTo);

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = d3.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Menu [' + menuId + ']...');
        menu = window.append('ul').attr('class', 'nav').attr('id', menuId);
      }

      // force rebuild menu again
      menu.selectAll("*").remove();

      var entry = menu.append('li');
      entry.append('a').attr('href', '#').html('Francy');
      var content = entry.append('ul');
      content.append('li').append('a').attr('href', '#').on("click", function () {
        return console.log("Save to PNG pressed... Not Implemented!");
      }).attr('title', 'Save to PNG').html('Save to PNG');
      content.append('li').append('a').attr('href', '#').on("click", function () {
        return console.log("About Francy pressed... Not Implemented!");
      }).attr('title', 'About').html('About');

      // FIXME the menu depth is 'infinite', but this implementations supports only depth = 1!

      var _loop = function _loop(menuItem) {
        callback = new _callback2.default(_this2.options);

        entry = menu.append('li');
        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          entry.append('a').attr('href', '#').html(menuItem.title);
          content = entry.append('ul');
          entry = content.append('li');

          var _loop2 = function _loop2(submenu) {
            callback = new _callback2.default(_this2.options);
            entry.append('a').attr('href', '#').on("click", function () {
              return callback.execute(submenu);
            }).attr('title', submenu.title).html(submenu.title);
          };

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = Object.values(menuItem.menus)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var submenu = _step2.value;

              _loop2(submenu);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        } else {
          entry.append('a').attr('href', '#').on("click", function () {
            return callback.execute(menuItem);
          }).attr('title', menuItem.title).html(menuItem.title);
        }
      };

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.canvas.menus)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var menuItem = _step.value;
          var callback;

          _loop(menuItem);
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

      this.logger.debug('Menu ready: ' + menu);

      return menu;
    }
  }]);

  return Menu;
}(_renderer2.default);

exports.default = Menu;

},{"../util/id-utils":13,"./callback":3,"./renderer":10}],9:[function(require,module,exports){
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

var Modal = function (_Renderer) {
  _inherits(Modal, _Renderer);

  function Modal(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render(json) {
      var self = this;

      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var modal = d3.select('body').append('div').attr('class', 'francy').append('div').attr('id', json.callback.id).attr('class', 'francy modal');

      var form = modal.append('form');

      var header = form.append('div').attr('class', 'header');

      header.append('span').html('Required arguments for&nbsp;').append('span').attr('style', 'font-weight: bold;').text(json.title);

      var content = form.append('div').attr('class', 'content');

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.callback.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          content.append('label').attr('for', arg.id).text(arg.title);
          content.append('input').attr('id', arg.id).attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            json.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
          content.append('span').attr('class', 'validity');
          content.append('br');
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

      var footer = form.append('div').attr('class', 'footer');

      footer.append('button').text('Ok').on('click', function () {
        if (form.node().checkValidity()) {
          self.options.callbackHandler(json);
          overlay.remove();
          modal.remove();
        }
      });
      footer.append('button').text('Cancel').on('click', function () {
        overlay.remove();
        modal.remove();
      });

      return modal;
    }
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

},{"./renderer":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    return _this;
  }

  return Renderer;
}(_base2.default);

exports.default = Renderer;

},{"./base":2}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _renderer = require('./renderer');

var _renderer2 = _interopRequireDefault(_renderer);

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global d3 */

var Shape = function (_Renderer) {
  _inherits(Shape, _Renderer);

  _createClass(Shape, null, [{
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

  function Shape(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Shape, [{
    key: 'render',
    value: function render(json) {
      var canvas = d3.select(this.options.appendTo);

      var canvasNodes = Object.values(json.canvas.nodes),
          canvasLinks = Object.values(json.canvas.links);

      var svg = canvas,
          width = +svg.attr('width'),
          height = +svg.attr('height');

      //Generic gravity for the X position
      var forceX = d3.forceX(function (d) {
        return 250;
      }).strength(0.1);

      //Strong y positioning based on layer
      var forceY = d3.forceY(function (d) {
        return d.layer * 50;
      }).strength(0.5);

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      })).force('charge', d3.forceManyBody().strength(-400)).force("x", forceX).force("y", forceY).force('center', d3.forceCenter(width / 2, height / 2));

      var link = svg.append('g').attr('class', 'links').selectAll('line').data(canvasLinks).enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      }).style('marker-end', 'url(#arrow)');

      var node = svg.append('g').attr('class', 'nodes').selectAll('g.nodes').data(canvasNodes, function (d) {
        return d.id;
      }).enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Shape.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 90;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'node' + (d.highlight ? ' highlight' : '');
      }).attr('id', function (d) {
        return d.id;
      }).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);

      node.append('title').text(function (d) {
        return 'ID:\t' + d.id + '\nLayer:\t' + d.layer;
      });

      var label = svg.append('g').attr('class', 'labels').selectAll('text').data(canvasNodes, function (d) {
        return d.id;
      }).enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      });

      var legend = svg.append('g').attr('class', 'legend').selectAll('g').data(d3.map(canvasNodes, function (d) {
        return d.layer;
      }).values(), function (d) {
        return d.id;
      }).enter().append('g').attr('id', function (d) {
        return 'legendLayer' + d.layer;
      }).attr('transform', function (d, i) {
        var x = 0;
        var y = i * 11;
        return 'translate(' + x + ',' + y + ')';
      });

      legend.append('rect').attr('width', 10).attr('height', 8).style('fill', function (d) {
        return Shape.colors(d.layer * 6);
      }).style('stroke', function (d) {
        return Shape.colors(d.layer * 6);
      });

      legend.append('text').attr('style', 'font-size: 10px;').attr('x', 10 + 5).attr('y', 10 - 2).text(function (d) {
        return 'Index ' + d.layer;
      });

      simulation.nodes(canvasNodes).on('tick', ticked);

      simulation.force('link').links(canvasLinks);

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
          return Shape.colors(d.layer * 6);
        }).attr('transform', function (d) {
          return 'translate(' + d.x + ',' + d.y + ')';
        });

        label.attr('x', function (d) {
          return d.x - d.title.length - Math.sqrt(d.size);
        }).attr('y', function (d) {
          return d.y - Math.sqrt(d.size);
        });

        node.each(collide(0.5));
      }

      // COLLISION
      var padding = 1,
          // separation between circles
      radius = 20;

      function collide(alpha) {
        var quadTree = d3.quadtree(canvasNodes);
        return function (d) {
          var rb = 2 * radius + padding,
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

      //This function looks up whether a pair are neighbours
      function neighboring(a, b) {
        return linkedByIndex[a.index + ',' + b.index];
      }

      function connectedNodes() {
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
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }
  }]);

  return Shape;
}(_renderer2.default);

exports.default = Shape;

},{"../util/id-utils":13,"./renderer":10}],12:[function(require,module,exports){
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

var Window = function (_Composite) {
  _inherits(Window, _Composite);

  function Window(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Window);

    return _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Window, [{
    key: 'render',
    value: function render(json) {
      var windowId = _idUtils2.default.getWindowId(json.canvas.id);
      var window = d3.select('#' + windowId);
      // check if the window is already present
      if (!window.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Window [' + windowId + ']...');
        window = d3.select(this.options.appendTo).append('div').remove().attr('id', windowId).attr('class', 'francy window');
      }
      // cannot continue if window is not present
      if (!window.node()) {
        throw new Error('Oops, could not create window with id [' + windowId + ']... Cannot proceed.');
      }

      this.logger.debug('Window ready: ' + window);

      this.renderChildren(window, json);

      return window;
    }
  }]);

  return Window;
}(_composite2.default);

exports.default = Window;

},{"../util/id-utils":13,"./composite":7}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'Francy[Window|Canvas|Object]-*hex uuid*'
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

},{}],14:[function(require,module,exports){
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
          console.error(e);
        }
      }
      return undefined;
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

},{}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL3JlbmRlci9iYXNlLmpzIiwic3JjL3JlbmRlci9jYWxsYmFjay5qcyIsInNyYy9yZW5kZXIvY2FudmFzLmpzIiwic3JjL3JlbmRlci9jaGFydC1iYXIuanMiLCJzcmMvcmVuZGVyL2NoYXJ0LWxpbmUuanMiLCJzcmMvcmVuZGVyL2NvbXBvc2l0ZS5qcyIsInNyYy9yZW5kZXIvbWVudS5qcyIsInNyYy9yZW5kZXIvbW9kYWwuanMiLCJzcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwic3JjL3JlbmRlci9zaGFwZS5qcyIsInNyYy9yZW5kZXIvd2luZG93LmpzIiwic3JjL3V0aWwvaWQtdXRpbHMuanMiLCJzcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwic3JjL3V0aWwvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7SUFJYSxNLFdBQUEsTTs7QUFFWDs7Ozs7O0FBTUEsd0JBQTREO0FBQUEsNEJBQTlDLE9BQThDO0FBQUEsUUFBOUMsT0FBOEMsZ0NBQXBDLEtBQW9DO0FBQUEsUUFBN0IsUUFBNkIsUUFBN0IsUUFBNkI7QUFBQSxRQUFuQixlQUFtQixRQUFuQixlQUFtQjs7QUFBQTs7QUFDMUQsUUFBSSxDQUFDLGVBQUwsRUFBc0I7QUFDcEIsWUFBTSxJQUFJLEtBQUosQ0FBVSx3R0FBVixDQUFOO0FBQ0Q7QUFDRCxRQUFJLENBQUMsUUFBTCxFQUFlO0FBQ2IsWUFBTSxJQUFJLEtBQUosQ0FBVSx3REFBVixDQUFOO0FBQ0Q7QUFDRCxRQUFJLENBQUMsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRCxTQUFLLE9BQUwsR0FBZTtB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UyxNLEVBQU87QUFDcEIsV0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLENBQW5CLEVBQW1ELE1BQW5EO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NEJBSVEsSyxFQUFPLE8sRUFBUztBQUN0QixtQkFBVyxLQUFYLFlBQXVCLElBQUksSUFBSixHQUFXLFdBQVgsRUFBdkIsV0FBcUQsT0FBckQ7QUFDRDs7Ozs7O2tCQW5Ea0IsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9yZW5kZXIvd2luZG93XCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3JlbmRlci9tZW51XCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vcmVuZGVyL3NoYXBlXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4vcmVuZGVyL2NoYXJ0LWJhclwiO1xuaW1wb3J0IExpbmVDaGFydCBmcm9tIFwiLi9yZW5kZXIvY2hhcnQtbGluZVwiO1xuLy9pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gY2FsbGJhY2tIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIENhbGxiYWNrIEhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCEgVGhpcyB3aWxsIGJlIHVzZWQgdG8gdHJpZ2dlciBldmVudHMgZnJvbSB0aGUgZ3JhcGhpY3MgcHJvZHVjZWQuLi5cIik7XG4gICAgfVxuICAgIGlmICghYXBwZW5kVG8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgYW4gZWxlbWVudCBvciBpZCB0byBhcHBlbmQgdGhlIGdyYXBoaWNzIHRvLi4uIVwiKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHJlbmRlclxuICAgKi9cbiAgcmVuZGVyKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgdmFyIG1lbnUgPSBuZXcgTWVudSh0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyIHNoYXBlcyA9IG5ldyBTaGFwZSh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgbGluZUNoYXJ0ID0gbmV3IExpbmVDaGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgYmFyQ2hhcnQgPSBuZXcgQmFyQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKHNoYXBlcyk7XG4gICAgICAvL2NhbnZhcy5hZGQobGluZUNoYXJ0KTtcbiAgICAgIC8vY2FudmFzLmFkZChiYXJDaGFydCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgTW9kYWwodGhpcy5vcHRpb25zKS5yZW5kZXIoY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIGNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIGNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7Y2FudmFzSWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIGNhbnZhcyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIWNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIHN2ZyBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7Y2FudmFzSWR9XS4uLmApO1xuICAgICAgY2FudmFzID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcblxuICAgIGNhbnZhcyA9IGNhbnZhcy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgY2FudmFzLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH0pKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG5cbiAgICBjYW52YXMuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENhbnZhcyByZWFkeTogJHtjYW52YXN9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKGNhbnZhcywganNvbik7XG5cbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG5cblxuXG59XG4iLCJjbGFzcyBCYXJDaGFydCB7XG5cbiAgLy8gQWxsIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgYWNjZXNzaWJsZSB0byBjYWxsZXJcbiAgd2lkdGggPSA1MDA7XG4gIGhlaWdodCA9IDMwMDtcbiAgYmFyUGFkZGluZyA9IDE7XG4gIGZpbGxDb2xvciA9ICdjb3JhbCc7XG4gIGRhdGEgPSBbXTtcblxuICB1cGRhdGVXaWR0aDtcbiAgdXBkYXRlSGVpZ2h0O1xuICB1cGRhdGVGaWxsQ29sb3I7XG4gIHVwZGF0ZURhdGE7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG5cbiAgfVxuXG4vKlxuICBjaGFydChzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIGJhclNwYWNpbmcgPSBoZWlnaHQgLyBkYXRhLmxlbmd0aDtcbiAgICAgIHZhciBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgIHZhciB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcblxuICAgICAgdmFyIGRvbSA9IGQzLnNlbGVjdCh0aGlzKTtcbiAgICAgIHZhciBzdmcgPSBkb20uYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnYmFyLWNoYXJ0JylcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGZpbGxDb2xvcik7XG5cbiAgICAgIHZhciBiYXJzID0gc3ZnLnNlbGVjdEFsbCgncmVjdC5kaXNwbGF5LWJhcicpXG4gICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuXG4gICAgICAvLyB1cGRhdGUgZnVuY3Rpb25zXG4gICAgICB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aWR0aFNjYWxlID0gd2lkdGggLyBtYXhWYWx1ZTtcbiAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG4gICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gICAgICB9O1xuXG4gICAgICB1cGRhdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgYmFycy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpO1xuICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ2hlaWdodCcsIGhlaWdodCk7XG5cbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZUZpbGxDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzdmcudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcbiAgICAgIH07XG5cbiAgICAgIHVwZGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICBiYXJIZWlnaHQgPSBiYXJTcGFjaW5nIC0gYmFyUGFkZGluZztcbiAgICAgICAgbWF4VmFsdWUgPSBkMy5tYXgoZGF0YSk7XG4gICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICAgIHZhciB1cGRhdGUgPSBzdmcuc2VsZWN0QWxsKCdyZWN0LmRpc3BsYXktYmFyJylcbiAgICAgICAgICAuZGF0YShkYXRhKTtcblxuICAgICAgICB1cGRhdGVcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgYmFySGVpZ2h0KVxuICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSk7XG5cbiAgICAgICAgdXBkYXRlLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwMClcbiAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiA0MDsgfSlcbiAgICAgICAgICAuYXR0cignd2lkdGgnLCBmdW5jdGlvbihkKSB7IHJldHVybiBkICogd2lkdGhTY2FsZTsgfSlcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuICAgICAgICB1cGRhdGUuZXhpdCgpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbig2NTApXG4gICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIChkYXRhLmxlbmd0aCAtIGkpICogMjA7IH0pXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAuYXR0cignaGVpZ2h0JywgMClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgMClcbiAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNoYXJ0LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB3aWR0aDtcbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlV2lkdGggPT09ICdmdW5jdGlvbicpIHVwZGF0ZVdpZHRoKCk7XG4gICAgcmV0dXJuIGNoYXJ0O1xuICB9O1xuXG4gIGNoYXJ0LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaGVpZ2h0O1xuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdXBkYXRlSGVpZ2h0ID09PSAnZnVuY3Rpb24nKSB1cGRhdGVIZWlnaHQoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG5cbiAgY2hhcnQuZmlsbENvbG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBmaWxsQ29sb3I7XG4gICAgZmlsbENvbG9yID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiB1cGRhdGVGaWxsQ29sb3IgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUZpbGxDb2xvcigpO1xuICAgIHJldHVybiBjaGFydDtcbiAgfTtcblxuICBjaGFydC5kYXRhID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBkYXRhO1xuICAgIGRhdGEgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcbiAgICByZXR1cm4gY2hhcnQ7XG4gIH07XG4gICovXG5cbn1cbiIsImNsYXNzIExpbmVDaGFydCB7XG5cbiAgLy8gQWxsIG9wdGlvbnMgdGhhdCBzaG91bGQgYmUgYWNjZXNzaWJsZSB0byBjYWxsZXJcbiAgd2lkdGggPSA1MDA7XG4gIGhlaWdodCA9IDMwMDtcbiAgYmFyUGFkZGluZyA9IDE7XG4gIGZpbGxDb2xvciA9ICdjb3JhbCc7XG4gIGRhdGEgPSBbXTtcblxuICB1cGRhdGVXaWR0aDtcbiAgdXBkYXRlSGVpZ2h0O1xuICB1cGRhdGVGaWxsQ29sb3I7XG4gIHVwZGF0ZURhdGE7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG5cbiAgfVxuXG4gIC8qXG4gICAgY2hhcnQoc2VsZWN0aW9uKSB7XG4gICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICB2YXIgYmFySGVpZ2h0ID0gYmFyU3BhY2luZyAtIGJhclBhZGRpbmc7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IGQzLm1heChkYXRhKTtcbiAgICAgICAgdmFyIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuXG4gICAgICAgIHZhciBkb20gPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgIHZhciBzdmcgPSBkb20uYXBwZW5kKCdzdmcnKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdiYXItY2hhcnQnKVxuICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgZmlsbENvbG9yKTtcblxuICAgICAgICB2YXIgYmFycyA9IHN2Zy5zZWxlY3RBbGwoJ3JlY3QuZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZGlzcGxheS1iYXInKVxuICAgICAgICAgIC5hdHRyKCd5JywgZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIGJhclNwYWNpbmc7IH0pXG4gICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodClcbiAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pO1xuXG5cbiAgICAgICAgLy8gdXBkYXRlIGZ1bmN0aW9uc1xuICAgICAgICB1cGRhdGVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHdpZHRoU2NhbGUgPSB3aWR0aCAvIG1heFZhbHVlO1xuICAgICAgICAgIGJhcnMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZCAqIHdpZHRoU2NhbGU7IH0pO1xuICAgICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdXBkYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyU3BhY2luZyA9IGhlaWdodCAvIGRhdGEubGVuZ3RoO1xuICAgICAgICAgIGJhckhlaWdodCA9IGJhclNwYWNpbmcgLSBiYXJQYWRkaW5nO1xuICAgICAgICAgIGJhcnMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDEwMDApLmF0dHIoJ3knLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogYmFyU3BhY2luZzsgfSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBiYXJIZWlnaHQpO1xuICAgICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZUZpbGxDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHN2Zy50cmFuc2l0aW9uKCkuZHVyYXRpb24oMTAwMCkuc3R5bGUoJ2ZpbGwnLCBmaWxsQ29sb3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHVwZGF0ZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBiYXJTcGFjaW5nID0gaGVpZ2h0IC8gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgYmFySGVpZ2h0ID0gYmFyU3BhY2luZyAtIGJhclBhZGRpbmc7XG4gICAgICAgICAgbWF4VmFsdWUgPSBkMy5tYXgoZGF0YSk7XG4gICAgICAgICAgd2lkdGhTY2FsZSA9IHdpZHRoIC8gbWF4VmFsdWU7XG5cbiAgICAgICAgICB2YXIgdXBkYXRlID0gc3ZnLnNlbGVjdEFsbCgncmVjdC5kaXNwbGF5LWJhcicpXG4gICAgICAgICAgICAuZGF0YShkYXRhKTtcblxuICAgICAgICAgIHVwZGF0ZVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KTtcblxuICAgICAgICAgIHVwZGF0ZS5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkaXNwbGF5LWJhcicpXG4gICAgICAgICAgICAuYXR0cigneScsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgKiBiYXJTcGFjaW5nOyB9KVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGJhckhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIDApXG4gICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgLmR1cmF0aW9uKDEwMDApXG4gICAgICAgICAgICAuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gKGRhdGEubGVuZ3RoIC0gaSkgKiA0MDsgfSlcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQgKiB3aWR0aFNjYWxlOyB9KVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cbiAgICAgICAgICB1cGRhdGUuZXhpdCgpXG4gICAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgICAuZHVyYXRpb24oNjUwKVxuICAgICAgICAgICAgLmRlbGF5KGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIChkYXRhLmxlbmd0aCAtIGkpICogMjA7IH0pXG4gICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIDApXG4gICAgICAgICAgICAuYXR0cigneCcsIDApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCAwKVxuICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYXJ0LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHdpZHRoO1xuICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlV2lkdGggPT09ICdmdW5jdGlvbicpIHVwZGF0ZVdpZHRoKCk7XG4gICAgICByZXR1cm4gY2hhcnQ7XG4gICAgfTtcblxuICAgIGNoYXJ0LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBoZWlnaHQ7XG4gICAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICAgIGlmICh0eXBlb2YgdXBkYXRlSGVpZ2h0ID09PSAnZnVuY3Rpb24nKSB1cGRhdGVIZWlnaHQoKTtcbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9O1xuXG4gICAgY2hhcnQuZmlsbENvbG9yID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGZpbGxDb2xvcjtcbiAgICAgIGZpbGxDb2xvciA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB1cGRhdGVGaWxsQ29sb3IgPT09ICdmdW5jdGlvbicpIHVwZGF0ZUZpbGxDb2xvcigpO1xuICAgICAgcmV0dXJuIGNoYXJ0O1xuICAgIH07XG5cbiAgICBjaGFydC5kYXRhID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRhdGE7XG4gICAgICBkYXRhID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcbiAgICAgIHJldHVybiBjaGFydDtcbiAgICB9O1xuICAqL1xufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgcmVuZGVyZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQ29tcG9zaXRlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29uc3RydWN0IFtDb21wb3NpdGVdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gIH1cblxuICBhZGQocmVuZGVyZXIpIHtcbiAgICB0aGlzLnJlbmRlcmVycy5wdXNoKHJlbmRlcmVyKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKHBhcmVudCwganNvbikge1xuICAgIC8vIHVwZGF0ZSBjaGlsZHJlbiByZW5kZXJpbmcgd2l0aCBhIG5ldyBwYXJlbnQgaWYgcmVxdWlyZWQhXG4gICAgdmFyIGNoaWxkcmVuT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjaGlsZHJlbk9wdGlvbnMuYXBwZW5kVG8gPSBwYXJlbnQubm9kZSgpO1xuICAgIH1cbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAodmFyIHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci51cGRhdGUoY2hpbGRyZW5PcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgdmFyIG1lbnVJZCA9IElEVXRpbHMuZ2V0TWVudUlkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgbWVudSA9IGQzLnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFtZW51Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSB3aW5kb3cuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICduYXYnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIlNhdmUgdG8gUE5HIHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIVwiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJBYm91dCBGcmFuY3kgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhXCIpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBGSVhNRSB0aGUgbWVudSBkZXB0aCBpcyAnaW5maW5pdGUnLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbnMgc3VwcG9ydHMgb25seSBkZXB0aCA9IDEhXG4gICAgZm9yIChsZXQgbWVudUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5tZW51cykpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgICBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBlbnRyeSA9IGNvbnRlbnQuYXBwZW5kKCdsaScpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUoc3VibWVudSkpLmF0dHIoJ3RpdGxlJywgc3VibWVudS50aXRsZSkuaHRtbChzdWJtZW51LnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShtZW51SXRlbSkpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNZW51IHJlYWR5OiAke21lbnV9YCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZW5kZXJlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBvdmVybGF5Jyk7XG4gICAgdmFyIG1vZGFsID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpXG4gICAgICAuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsIGpzb24uY2FsbGJhY2suaWQpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG1vZGFsJyk7XG5cbiAgICB2YXIgZm9ybSA9IG1vZGFsLmFwcGVuZCgnZm9ybScpO1xuXG4gICAgdmFyIGhlYWRlciA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdoZWFkZXInKTtcblxuICAgIGhlYWRlci5hcHBlbmQoJ3NwYW4nKS5odG1sKCdSZXF1aXJlZCBhcmd1bWVudHMgZm9yJm5ic3A7JykuYXBwZW5kKCdzcGFuJykuYXR0cignc3R5bGUnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JykudGV4dChqc29uLnRpdGxlKTtcblxuICAgIHZhciBjb250ZW50ID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzKSkge1xuICAgICAgY29udGVudC5hcHBlbmQoJ2xhYmVsJykuYXR0cignZm9yJywgYXJnLmlkKS50ZXh0KGFyZy50aXRsZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnaW5wdXQnKS5hdHRyKCdpZCcsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIC5hdHRyKCduYW1lJywgYXJnLmlkKVxuICAgICAgICAuYXR0cigndHlwZScsIGFyZy50eXBlKVxuICAgICAgICAuYXR0cigndmFsdWUnLCBhcmcudmFsdWUpXG4gICAgICAgIC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAganNvbi5jYWxsYmFjay5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2lucHV0JywgdGhpcy5vbmNoYW5nZSlcbiAgICAgICAgLm9uKCdrZXl1cCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigncGFzdGUnLCB0aGlzLm9uY2hhbmdlKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdzcGFuJykuYXR0cignY2xhc3MnLCAndmFsaWRpdHknKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdicicpO1xuICAgIH1cblxuICAgIHZhciBmb290ZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnZm9vdGVyJyk7XG5cbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdPaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGZvcm0ubm9kZSgpLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKGpzb24pO1xuICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoanNvbildIG1ldGhvZCEnKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIFJlbmRlcmVyIHtcblxuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIGNhbnZhcyA9IGQzLnNlbGVjdCh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ub2RlcyksXG4gICAgICBjYW52YXNMaW5rcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubGlua3MpO1xuXG4gICAgdmFyIHN2ZyA9IGNhbnZhcyxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZCA9PiAyNTApLnN0cmVuZ3RoKDAuMSk7XG5cbiAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA1MCkuc3RyZW5ndGgoMC41KTtcblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmsgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rcycpXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgIC5kYXRhKGNhbnZhc0xpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YClcbiAgICAgIC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IFNoYXBlLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWxzJylcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSBzdmdcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGQzLm1hcChjYW52YXNOb2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKSwgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2QubGF5ZXJ9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xuICAgICAgfSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IFNoYXBlLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gU2hhcGUuY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gU2hhcGUuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC41KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxLCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlc1xuICAgICAgcmFkaXVzID0gMjA7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogcmFkaXVzICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG4vKiBnbG9iYWwgZDMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9zaXRlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgd2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICB2YXIgd2luZG93ID0gZDMuc2VsZWN0KGAjJHt3aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHt3aW5kb3dJZH1dLi4uYCk7XG4gICAgICB3aW5kb3cgPSBkMy5zZWxlY3QodGhpcy5vcHRpb25zLmFwcGVuZFRvKS5hcHBlbmQoJ2RpdicpLnJlbW92ZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIHdpbmRvd0lkKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IHdpbmRvdycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF3aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgWyR7d2luZG93SWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgV2luZG93IHJlYWR5OiAke3dpbmRvd31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4od2luZG93LCBqc29uKTtcblxuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ0ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0tKmhleCB1dWlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gbWVudUlkIC0gdGhlIG1lbnUgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE1lbnVJZChtZW51SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU1lbnUtJHttZW51SWR9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vdm5kLmZyYW5jeStqc29uJyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJsZXQgc2luZ2xldG9uID0gbnVsbDtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgLyoqXG4gICAqIFNpbmdsZXRvbjogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgbG9nZ2VyIGFuZCB3aWxsIHJldHVybmVkIHRoYXQgaW5zdGFuY2UsXG4gICAqIGV2ZXJ5dGltZSBhIG5ldyBpbnN0YW5jZSBpcyByZXF1ZXN0ZWQuXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtERUJVR10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbSU5GT10gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFtFUlJPUl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cbiJdfQ==
