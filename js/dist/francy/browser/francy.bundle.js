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

var _graph = require("./render/graph");

var _graph2 = _interopRequireDefault(_graph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import Chart from "./render/chart";
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
        var graph = new _graph2.default(this.options);
        //var chart = new Chart(this.options);
        var canvas = new _canvas2.default(this.options);
        canvas.add(graph);
        //canvas.add(chart);
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

},{"./render/canvas":4,"./render/graph":6,"./render/menu":7,"./render/window":10,"./util/json-utils":12}],2:[function(require,module,exports){
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

},{"../util/logger":13}],3:[function(require,module,exports){
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

},{"../util/logger":13,"./modal":8}],4:[function(require,module,exports){
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
      var parent = this.options.appendTo;

      var canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      var canvas = parent.select('svg#' + canvasId);
      // check if the canvas is already present
      if (!canvas.node()) {
        // create a svg element detached from the DOM!
        this.logger.debug('Creating Canvas [' + canvasId + ']...');
        canvas = parent.append('svg').attr('id', canvasId).attr('class', 'canvas');
        canvas.call(d3.zoom().on('zoom', function () {
          canvas.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
        }));

        canvas.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
          return d;
        }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
      }

      // cannot continue if canvas is not present
      if (!canvas.node()) {
        throw new Error('Oops, could not create canvas with id [' + canvasId + ']... Cannot proceed.');
      }

      canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);

      var draw = canvas.select('.draw');

      if (!draw.node()) {
        canvas = canvas.append('g').attr('class', 'draw');
      } else {
        canvas = draw;
      }

      this.logger.debug('Canvas ready: ' + canvas);

      this.renderChildren(canvas, json);

      return canvas;
    }
  }]);

  return Canvas;
}(_composite2.default);

exports.default = Canvas;

},{"../util/id-utils":11,"./composite":5}],5:[function(require,module,exports){
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

},{"./renderer":9}],6:[function(require,module,exports){
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
      var parent = this.options.appendTo;

      var canvasNodes = Object.values(json.canvas.graph.nodes),
          canvasLinks = Object.values(json.canvas.graph.links);

      var svg = parent,
          width = +svg.attr('width'),
          height = +svg.attr('height');

      var t = d3.transition().duration(250);

      //Generic gravity for the X position
      var forceX = d3.forceX(function (d) {
        return 250;
      }).strength(0.1);

      //Strong y positioning based on layer
      //var forceY = d3.forceY(d => d.layer * 50).strength(0.5);
      var forceY = d3.forceY(function (d) {
        return 250;
      }).strength(0.5);

      var simulation = d3.forceSimulation().force('link', d3.forceLink().id(function (d) {
        return d.id;
      })).force('charge', d3.forceManyBody().strength(-400)).force("x", forceX).force("y", forceY).force('center', d3.forceCenter(width / 2, height / 2));

      var linkGroup = svg.selectAll('g.links');

      if (!linkGroup.node()) {
        linkGroup = svg.append('g').attr('class', 'links');
      }

      var link = linkGroup.selectAll('line.link').data(canvasLinks);

      link.exit().transition(t).remove();

      link = link.enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      });
      //.style('marker-end', 'url(#arrow)');

      var nodeGroup = svg.selectAll('g.nodes');

      if (!nodeGroup.node()) {
        nodeGroup = svg.append('g').attr('class', 'nodes');
      }

      var node = nodeGroup.selectAll('path.node').data(canvasNodes);

      node.exit().transition(t).remove();

      node = node.enter().append('path').attr('d', d3.symbol().type(function (d) {
        return Graph.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 100;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'node' + (d.highlight ? ' highlight' : '');
      }).attr('id', function (d) {
        return d.id;
      });

      node.call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);

      node.append('title').text(function (d) {
        return 'ID:\t' + d.id + '\nLayer:\t' + d.layer;
      });

      var labelGroup = svg.selectAll('.labels');

      if (!labelGroup.node()) {
        labelGroup = svg.append('g').attr('class', 'labels');
      }

      var label = labelGroup.selectAll('text').data(canvasNodes).enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      });

      var legendGroup = svg.selectAll('.legend');

      if (!legendGroup.node()) {
        legendGroup = svg.append('g').attr('class', 'legend');
      }

      /*var legend = legendGroup.selectAll('g')
        .data(d3.map(canvasNodes, d => d.layer).values(), d => d.id)
        .enter()
        .append('g')
        .attr('id', d => `legendLayer${d.layer}`)
        .attr('transform', function(d, i) {
          let x = 0;
          let y = i * 11;
          return `translate(${x},${y})`;
        });
       legend.append('rect')
        .attr('width', 10)
        .attr('height', 8)
        .style('fill', d => Graph.colors(d.layer * 6))
        .style('stroke', d => Graph.colors(d.layer * 6));
       legend.append('text')
        .attr('style', 'font-size: 10px;')
        .attr('x', 10 + 5)
        .attr('y', 10 - 2)
        .text(d => `Index ${d.layer}`);*/

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
          return Graph.colors(d.layer * 6);
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

  return Graph;
}(_renderer2.default);

exports.default = Graph;

},{"../util/id-utils":11,"./renderer":9}],7:[function(require,module,exports){
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

      var parent = this.options.appendTo;

      var menuId = _idUtils2.default.getMenuId(json.canvas.id);
      var menu = parent.select('#' + menuId);

      // check if the menu is already present
      if (!menu.node()) {
        // create a div element detached from the DOM!
        this.logger.debug('Creating Menu [' + menuId + ']...');
        menu = parent.append('ul').attr('class', 'nav').attr('id', menuId);
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

},{"../util/id-utils":11,"./callback":3,"./renderer":9}],8:[function(require,module,exports){
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

      var modalId = _idUtils2.default.getWindowId(json.callback.id);
      this.logger.debug('Creating Callback Modal [' + modalId + ']...');

      var overlay = d3.select('body').append('div').attr('class', 'francy overlay');
      var holder = d3.select('body').append('div').attr('class', 'francy');
      var modal = holder.append('div').attr('id', json.callback.id).attr('class', 'francy modal');

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
          content.append('input').attr('id', arg.id).attr('class', 'arg').attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
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
          self.options.callbackHandler(json.callback);
          overlay.remove();
          modal.remove();
          holder.remove();
          event.preventDefault();
        }
        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        overlay.remove();
        modal.remove();
        holder.remove();
        return false;
      });

      try {
        Jupyter.keyboard_manager.register_events('.arg');
      } catch (e) {
        if (e.name == "ReferenceError") {
          self.logger.debug('It seems we\'re not running on Jupyter... Skipping...', e);
        }
      }

      this.logger.debug('Callback Modal ready: ' + modal);

      return modal;
    }
  }]);

  return Modal;
}(_renderer2.default);

exports.default = Modal;

},{"../util/id-utils":11,"./renderer":9}],9:[function(require,module,exports){
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

},{"./base":2}],10:[function(require,module,exports){
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

},{"../util/id-utils":11,"./composite":5}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL3JlbmRlci9iYXNlLmpzIiwic3JjL3JlbmRlci9jYWxsYmFjay5qcyIsInNyYy9yZW5kZXIvY2FudmFzLmpzIiwic3JjL3JlbmRlci9jb21wb3NpdGUuanMiLCJzcmMvcmVuZGVyL2dyYXBoLmpzIiwic3JjL3JlbmRlci9tZW51LmpzIiwic3JjL3JlbmRlci9tb2RhbC5qcyIsInNyYy9yZW5kZXIvcmVuZGVyZXIuanMiLCJzcmMvcmVuZGVyL3dpbmRvdy5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyIsInNyYy91dGlsL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7OztJQUlhLE0sV0FBQSxNOztBQUVYOzs7Ozs7QUFNQSx3QkFBNEQ7QUFBQSw0QkFBOUMsT0FBOEM7QUFBQSxRQUE5QyxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QixRQUE2QixRQUE3QixRQUE2QjtBQUFBLFFBQW5CLGVBQW1CLFFBQW5CLGVBQW1COztBQUFBOztBQUMxRCxRQUFJLENBQUMsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUksS0FBSixDQUFVLHdHQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixZQUFNLElBQUksS0FBSixDQUFVLHdEQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxFQUFMLEVBQVM7QUFDUCxZQUFNLElBQUksS0FBSixDQUFVLDRFQUFWLENBQU47QUFDRDtBQUNELFNBQUssT0FBTCxHQUFlO0FBQ2IsZUFBUyxPQURJO0FBRWIsZ0JBQVUsUUFGRztBQUdiLHVCQUFpQjtBQUhKLEtBQWY7QUFLRDs7QUFFRDs7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TCxHQUFlLE9BQWY7QUFDQSxXQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0Esa0JBQVksSUFBWjtBQUNELEtBSkQsTUFLSztBQUNILGFBQU8sU0FBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzBCQUlNLE8sRUFBUztBQUNiLFVBQUksS0FBSyxPQUFULEVBQWtCO0FBQ2hCLGFBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsS0FBSyxPQUFMLENBQWEsT0FBYixFQUFzQixPQUF0QixDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7eUJBSUssTyxFQUFTO0FBQ1osV0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE9BQXJCLENBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzBCQUtNLE8sRUFBUyxNLEVBQU87QUFDcEIsV0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLENBQW5CLEVBQW1ELE1BQW5EO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3lCQUtLLE8sRUFBUyxLLEVBQU87QUFDbkIsY0FBUSxTQUFTLEVBQWpCO0FBQ0EsV0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE9BQXJCLENBQW5CLEVBQWtELEtBQWxEO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NEJBSVEsSyxFQUFPLE8sRUFBUztBQUN0QixtQkFBVyxLQUFYLFlBQXVCLElBQUksSUFBSixHQUFXLFdBQVgsRUFBdkIsV0FBcUQsT0FBckQ7QUFDRDs7Ozs7O2tCQTdEa0IsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9yZW5kZXIvd2luZG93XCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL3JlbmRlci9jYW52YXNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL3JlbmRlci9tZW51XCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vcmVuZGVyL2dyYXBoXCI7XG4vL2ltcG9ydCBDaGFydCBmcm9tIFwiLi9yZW5kZXIvY2hhcnRcIjtcbi8vaW1wb3J0IFRyYWNrZXIgZnJvbSBcIi4vdHJhY2tlci9jaGFuZ2VcIjtcblxuLyogZ2xvYmFsIGQzICovXG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIGNhbGxiYWNrSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBDYWxsYmFjayBIYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQhIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHRyaWdnZXIgZXZlbnRzIGZyb20gdGhlIGdyYXBoaWNzIHByb2R1Y2VkLi4uXCIpO1xuICAgIH1cbiAgICBpZiAoIWFwcGVuZFRvKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGFuIGVsZW1lbnQgb3IgaWQgdG8gYXBwZW5kIHRoZSBncmFwaGljcyB0by4uLiFcIik7XG4gICAgfVxuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCByZW5kZXJcbiAgICovXG4gIHJlbmRlcihpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHZhciBtZW51ID0gbmV3IE1lbnUodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBncmFwaCA9IG5ldyBHcmFwaCh0aGlzLm9wdGlvbnMpO1xuICAgICAgLy92YXIgY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMub3B0aW9ucyk7XG4gICAgICBjYW52YXMuYWRkKGdyYXBoKTtcbiAgICAgIC8vY2FudmFzLmFkZChjaGFydCk7XG4gICAgICB2YXIgd2luZG93ID0gbmV3IFdpbmRvdyh0aGlzLm9wdGlvbnMpO1xuICAgICAgd2luZG93LmFkZChtZW51KTtcbiAgICAgIHdpbmRvdy5hZGQoY2FudmFzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gd2luZG93LnJlbmRlcihqc29uKTtcbiAgICAgIHJldHVybiBlbGVtZW50Lm5vZGUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdXBkYXRlKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBleGVjdXRlKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgTW9kYWwodGhpcy5vcHRpb25zKS5yZW5kZXIoY29uZmlnKTtcbiAgfVxufVxuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMub3B0aW9ucy5hcHBlbmRUbztcblxuICAgIHZhciBjYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBjYW52YXMgPSBwYXJlbnQuc2VsZWN0KGBzdmcjJHtjYW52YXNJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgY2FudmFzIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghY2FudmFzLm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgc3ZnIGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtjYW52YXNJZH1dLi4uYCk7XG4gICAgICBjYW52YXMgPSBwYXJlbnQuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBjYW52YXNJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbnZhcy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICAgIH0pKTtcblxuICAgICAgY2FudmFzLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcbiAgICB9XG5cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFjYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgWyR7Y2FudmFzSWR9XS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG5cbiAgICBjYW52YXMuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KS5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcblxuICAgIHZhciBkcmF3ID0gY2FudmFzLnNlbGVjdCgnLmRyYXcnKTtcblxuICAgIGlmICghZHJhdy5ub2RlKCkpIHtcbiAgICAgIGNhbnZhcyA9IGNhbnZhcy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2FudmFzID0gZHJhdztcbiAgICB9XG5cbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgQ2FudmFzIHJlYWR5OiAke2NhbnZhc31gKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRyZW4oY2FudmFzLCBqc29uKTtcblxuICAgIHJldHVybiBjYW52YXM7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIHJlbmRlcmVycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgaWYgKG5ldy50YXJnZXQgPT09IENvbXBvc2l0ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbQ29tcG9zaXRlXSBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICB9XG5cbiAgYWRkKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5yZW5kZXJlcnMucHVzaChyZW5kZXJlcik7XG4gIH1cblxuICByZW5kZXJDaGlsZHJlbihwYXJlbnQsIGpzb24pIHtcbiAgICAvLyB1cGRhdGUgY2hpbGRyZW4gcmVuZGVyaW5nIHdpdGggYSBuZXcgcGFyZW50IGlmIHJlcXVpcmVkIVxuICAgIHZhciBjaGlsZHJlbk9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgY2hpbGRyZW5PcHRpb25zLmFwcGVuZFRvID0gcGFyZW50O1xuICAgIH1cbiAgICAvLyByZW5kZXIgb3RoZXIgY29tcG9uZW50c1xuICAgIGZvciAodmFyIHJlbmRlcmVyIG9mIHRoaXMucmVuZGVyZXJzKSB7XG4gICAgICByZW5kZXJlci51cGRhdGUoY2hpbGRyZW5PcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIGV4dGVuZHMgUmVuZGVyZXIge1xuXG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ncmFwaC5ub2RlcyksXG4gICAgICBjYW52YXNMaW5rcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMuZ3JhcGgubGlua3MpO1xuXG4gICAgdmFyIHN2ZyA9IHBhcmVudCxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIHZhciB0ID0gZDMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDI1MCk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIC8vdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA1MCkuc3RyZW5ndGgoMC41KTtcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGlua0dyb3VwID0gc3ZnLnNlbGVjdEFsbCgnZy5saW5rcycpO1xuXG4gICAgaWYgKCFsaW5rR3JvdXAubm9kZSgpKSB7XG4gICAgICBsaW5rR3JvdXAgPSBzdmcuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnbGlua3MnKTtcbiAgICB9XG5cbiAgICB2YXIgbGluayA9IGxpbmtHcm91cC5zZWxlY3RBbGwoJ2xpbmUubGluaycpLmRhdGEoY2FudmFzTGlua3MpO1xuXG4gICAgbGluay5leGl0KCkudHJhbnNpdGlvbih0KS5yZW1vdmUoKTtcblxuICAgIGxpbmsgPSBsaW5rLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YCk7XG4gICAgLy8uc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuICAgIHZhciBub2RlR3JvdXAgPSBzdmcuc2VsZWN0QWxsKCdnLm5vZGVzJyk7XG5cbiAgICBpZiAoIW5vZGVHcm91cC5ub2RlKCkpIHtcbiAgICAgIG5vZGVHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdub2RlcycpO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gbm9kZUdyb3VwLnNlbGVjdEFsbCgncGF0aC5ub2RlJykuZGF0YShjYW52YXNOb2Rlcyk7XG5cbiAgICBub2RlLmV4aXQoKS50cmFuc2l0aW9uKHQpLnJlbW92ZSgpO1xuXG4gICAgbm9kZSA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gR3JhcGguZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiAxMDApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZCk7XG5cbiAgICBub2RlLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZCA9PiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gKTtcblxuICAgIHZhciBsYWJlbEdyb3VwID0gc3ZnLnNlbGVjdEFsbCgnLmxhYmVscycpO1xuXG4gICAgaWYgKCFsYWJlbEdyb3VwLm5vZGUoKSkge1xuICAgICAgbGFiZWxHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsYWJlbHMnKTtcbiAgICB9XG5cbiAgICB2YXIgbGFiZWwgPSBsYWJlbEdyb3VwLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmRHcm91cCA9IHN2Zy5zZWxlY3RBbGwoJy5sZWdlbmQnKTtcblxuICAgIGlmICghbGVnZW5kR3JvdXAubm9kZSgpKSB7XG4gICAgICBsZWdlbmRHcm91cCA9IHN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdsZWdlbmQnKTtcbiAgICB9XG5cbiAgICAvKnZhciBsZWdlbmQgPSBsZWdlbmRHcm91cC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gR3JhcGguY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBHcmFwaC5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTsqL1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IEdyYXBoLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5cbi8qIGdsb2JhbCBkMyAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUmVuZGVyZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG5cbiAgICB2YXIgbWVudUlkID0gSURVdGlscy5nZXRNZW51SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHZhciBtZW51ID0gcGFyZW50LnNlbGVjdChgIyR7bWVudUlkfWApO1xuXG4gICAgLy8gY2hlY2sgaWYgdGhlIG1lbnUgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFtZW51Lm5vZGUoKSkge1xuICAgICAgLy8gY3JlYXRlIGEgZGl2IGVsZW1lbnQgZGV0YWNoZWQgZnJvbSB0aGUgRE9NIVxuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIE1lbnUgWyR7bWVudUlkfV0uLi5gKTtcbiAgICAgIG1lbnUgPSBwYXJlbnQuYXBwZW5kKCd1bCcpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICduYXYnKS5hdHRyKCdpZCcsIG1lbnVJZCk7XG4gICAgfVxuXG4gICAgLy8gZm9yY2UgcmVidWlsZCBtZW51IGFnYWluXG4gICAgbWVudS5zZWxlY3RBbGwoXCIqXCIpLnJlbW92ZSgpO1xuXG4gICAgdmFyIGVudHJ5ID0gbWVudS5hcHBlbmQoJ2xpJyk7XG4gICAgZW50cnkuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykuaHRtbCgnRnJhbmN5Jyk7XG4gICAgdmFyIGNvbnRlbnQgPSBlbnRyeS5hcHBlbmQoJ3VsJyk7XG4gICAgY29udGVudC5hcHBlbmQoJ2xpJykuYXBwZW5kKCdhJykuYXR0cignaHJlZicsICcjJykub24oXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcIlNhdmUgdG8gUE5HIHByZXNzZWQuLi4gTm90IEltcGxlbWVudGVkIVwiKSkuYXR0cigndGl0bGUnLCAnU2F2ZSB0byBQTkcnKS5odG1sKCdTYXZlIHRvIFBORycpO1xuICAgIGNvbnRlbnQuYXBwZW5kKCdsaScpLmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJBYm91dCBGcmFuY3kgcHJlc3NlZC4uLiBOb3QgSW1wbGVtZW50ZWQhXCIpKS5hdHRyKCd0aXRsZScsICdBYm91dCcpLmh0bWwoJ0Fib3V0Jyk7XG5cbiAgICAvLyBGSVhNRSB0aGUgbWVudSBkZXB0aCBpcyAnaW5maW5pdGUnLCBidXQgdGhpcyBpbXBsZW1lbnRhdGlvbnMgc3VwcG9ydHMgb25seSBkZXB0aCA9IDEhXG4gICAgZm9yIChsZXQgbWVudUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5tZW51cykpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayh0aGlzLm9wdGlvbnMpO1xuICAgICAgZW50cnkgPSBtZW51LmFwcGVuZCgnbGknKTtcbiAgICAgIGlmIChtZW51SXRlbS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnVJdGVtLm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgICBjb250ZW50ID0gZW50cnkuYXBwZW5kKCd1bCcpO1xuICAgICAgICBlbnRyeSA9IGNvbnRlbnQuYXBwZW5kKCdsaScpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudUl0ZW0ubWVudXMpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBlbnRyeS5hcHBlbmQoJ2EnKS5hdHRyKCdocmVmJywgJyMnKS5vbihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrLmV4ZWN1dGUoc3VibWVudSkpLmF0dHIoJ3RpdGxlJywgc3VibWVudS50aXRsZSkuaHRtbChzdWJtZW51LnRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVudHJ5LmFwcGVuZCgnYScpLmF0dHIoJ2hyZWYnLCAnIycpLm9uKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2suZXhlY3V0ZShtZW51SXRlbSkpLmF0dHIoJ3RpdGxlJywgbWVudUl0ZW0udGl0bGUpLmh0bWwobWVudUl0ZW0udGl0bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBNZW51IHJlYWR5OiAke21lbnV9YCk7XG5cbiAgICByZXR1cm4gbWVudTtcbiAgfVxufVxuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qIGdsb2JhbCBkMywgSnVweXRlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgbW9kYWxJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYWxsYmFjay5pZCk7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbGxiYWNrIE1vZGFsIFske21vZGFsSWR9XS4uLmApO1xuXG4gICAgdmFyIG92ZXJsYXkgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnZnJhbmN5IG92ZXJsYXknKTtcbiAgICB2YXIgaG9sZGVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdkaXYnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeScpO1xuICAgIHZhciBtb2RhbCA9IGhvbGRlci5hcHBlbmQoJ2RpdicpXG4gICAgICAuYXR0cignaWQnLCBqc29uLmNhbGxiYWNrLmlkKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSBtb2RhbCcpO1xuXG4gICAgdmFyIGZvcm0gPSBtb2RhbC5hcHBlbmQoJ2Zvcm0nKTtcblxuICAgIHZhciBoZWFkZXIgPSBmb3JtLmFwcGVuZCgnZGl2JykuYXR0cignY2xhc3MnLCAnaGVhZGVyJyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKCdzcGFuJykuaHRtbCgnUmVxdWlyZWQgYXJndW1lbnRzIGZvciZuYnNwOycpLmFwcGVuZCgnc3BhbicpLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycpLnRleHQoanNvbi50aXRsZSk7XG5cbiAgICB2YXIgY29udGVudCA9IGZvcm0uYXBwZW5kKCdkaXYnKS5hdHRyKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbGxiYWNrLnJlcXVpcmVkQXJncykpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kKCdsYWJlbCcpLmF0dHIoJ2ZvcicsIGFyZy5pZCkudGV4dChhcmcudGl0bGUpO1xuICAgICAgY29udGVudC5hcHBlbmQoJ2lucHV0JykuYXR0cignaWQnLCBhcmcuaWQpLmF0dHIoJ2NsYXNzJywgJ2FyZycpXG4gICAgICAgIC5hdHRyKCdyZXF1aXJlZCcsICcnKVxuICAgICAgICAuYXR0cignbmFtZScsIGFyZy5pZClcbiAgICAgICAgLmF0dHIoJ3R5cGUnLCBhcmcudHlwZSlcbiAgICAgICAgLmF0dHIoJ3ZhbHVlJywgYXJnLnZhbHVlKVxuICAgICAgICAub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGpzb24uY2FsbGJhY2sucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdpbnB1dCcsIHRoaXMub25jaGFuZ2UpXG4gICAgICAgIC5vbigna2V5dXAnLCB0aGlzLm9uY2hhbmdlKVxuICAgICAgICAub24oJ3Bhc3RlJywgdGhpcy5vbmNoYW5nZSk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnc3BhbicpLmF0dHIoJ2NsYXNzJywgJ3ZhbGlkaXR5Jyk7XG4gICAgICBjb250ZW50LmFwcGVuZCgnYnInKTtcbiAgICB9XG5cbiAgICB2YXIgZm9vdGVyID0gZm9ybS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2NsYXNzJywgJ2Zvb3RlcicpO1xuXG4gICAgZm9vdGVyLmFwcGVuZCgnYnV0dG9uJykudGV4dCgnT2snKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChmb3JtLm5vZGUoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihqc29uLmNhbGxiYWNrKTtcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIGhvbGRlci5yZW1vdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBmb290ZXIuYXBwZW5kKCdidXR0b24nKS50ZXh0KCdDYW5jZWwnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICBob2xkZXIucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgSnVweXRlci5rZXlib2FyZF9tYW5hZ2VyLnJlZ2lzdGVyX2V2ZW50cygnLmFyZycpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSA9PSBcIlJlZmVyZW5jZUVycm9yXCIpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoJ0l0IHNlZW1zIHdlXFwncmUgbm90IHJ1bm5pbmcgb24gSnVweXRlci4uLiBTa2lwcGluZy4uLicsIGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDYWxsYmFjayBNb2RhbCByZWFkeTogJHttb2RhbH1gKTtcblxuICAgIHJldHVybiBtb2RhbDtcbiAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIgZXh0ZW5kcyBCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBbUmVuZGVyZXJdIGluc3RhbmNlcyBkaXJlY3RseSEnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVuZGVyID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHRoaXMucmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IG92ZXJyaWRlIFtyZW5kZXIoanNvbildIG1ldGhvZCEnKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuLyogZ2xvYmFsIGQzICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvc2l0ZSB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdmFyIHdpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgdmFyIHdpbmRvdyA9IGQzLnNlbGVjdChgIyR7d2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXdpbmRvdy5ub2RlKCkpIHtcbiAgICAgIC8vIGNyZWF0ZSBhIGRpdiBlbGVtZW50IGRldGFjaGVkIGZyb20gdGhlIERPTSFcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7d2luZG93SWR9XS4uLmApO1xuICAgICAgd2luZG93ID0gZDMuc2VsZWN0KHRoaXMub3B0aW9ucy5hcHBlbmRUbykuYXBwZW5kKCdkaXYnKS5yZW1vdmUoKVxuICAgICAgICAuYXR0cignaWQnLCB3aW5kb3dJZClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZyYW5jeSB3aW5kb3cnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghd2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkIFske3dpbmRvd0lkfV0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYFdpbmRvdyByZWFkeTogJHt3aW5kb3d9YCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkcmVuKHdpbmRvdywganNvbik7XG5cbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpoZXggdXVpZConXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEVXRpbHMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSB3aW5kb3cgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lXaW5kb3ctJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIGNhbnZhcyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgY2FudmFzIGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0Q2FudmFzSWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeUNhbnZhcy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeU9iamVjdC0ke29iamVjdElkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG1lbnVJZCAtIHRoZSBtZW51IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRNZW51SWQobWVudUlkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lNZW51LSR7bWVudUlkfWA7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBjb250YWlucyBtZXRob2RzIHRvIGRlYWwgd2l0aCBKU09OLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSB0aGUgaW5wdXQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudCA9PT0gJ2FwcGxpY2F0aW9uL3ZuZC5mcmFuY3kranNvbicgPyBqc29uIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwibGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIC8qKlxuICAgKiBTaW5nbGV0b246IENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGxvZ2dlciBhbmQgd2lsbCByZXR1cm5lZCB0aGF0IGluc3RhbmNlLFxuICAgKiBldmVyeXRpbWUgYSBuZXcgaW5zdGFuY2UgaXMgcmVxdWVzdGVkLlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbREVCVUddIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgW0lORk9dIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKi9cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbRVJST1JdIGVudHJ5IGluIHRoZSBjb25zb2xlIGxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBwcmludFxuICAgKiBAcGFyYW0gZXJyb3IgdGhlIGVycm9yIE9iamVjdCB0byBhdHRhY2ggdG8gdGhlIG1lc3NhZ2VcbiAgICovXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBbV0FSTl0gZW50cnkgaW4gdGhlIGNvbnNvbGUgbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqIEBwYXJhbSBlcnJvciB0aGUgZXJyb3IgT2JqZWN0IHRvIGF0dGFjaCB0byB0aGUgbWVzc2FnZVxuICAgKi9cbiAgd2FybihtZXNzYWdlLCBlcnJvcikge1xuICAgIGVycm9yID0gZXJyb3IgfHwge307XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnV0FSTicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyBhIHByaXZhdGUgbWV0aG9kIHRoYXQgZm9ybWF0cyBhbGwgbG9nIG1lc3NhZ2VzXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHByaW50XG4gICAqL1xuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cbiJdfQ==
