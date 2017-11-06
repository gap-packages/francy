(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Francy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = require("./util/json-utils");

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _draw = require("./handler/draw");

var _draw2 = _interopRequireDefault(_draw);

var _change = require("./tracker/change");

var _change2 = _interopRequireDefault(_change);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
var Francy = exports.Francy = function () {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose prints extra log information to console.log, default false
   * @param appendTo where the generated html/svg components will be attached to, default body
   * @param menuActionHandler this handler will be used to invoke actions from the menu, default console.log
   * @param changeTrackerHandler this handler will be used to report any changes detected by the ChangeTracker, default console.log
   */
  function Francy(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    if (!callbackHandler) {
      throw new Error("Missing Callback Handler!");
    }
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.draw = new _draw2.default(this.options);
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */


  _createClass(Francy, [{
    key: "handle",
    value: function handle(input) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          appendTo = _ref2.appendTo;

      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        this.options.appendTo = appendTo ? appendTo : this.options.appendTo;
        return new _draw2.default(this.options).render(json);
      }
    }
  }]);

  return Francy;
}();

exports.Francy = window.Francy = Francy;

},{"./handler/draw":4,"./tracker/change":6,"./util/json-utils":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

var _modal = require('../util/modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

var CallbackHandler = function () {
  function CallbackHandler(config, _ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    this.options = {
      verbose: verbose,
      callbackHandler: callbackHandler
    };
    this.logger = new _logger2.default({ verbose: verbose });
    this.modal = new _modal2.default(config.callback, this.options);
  }

  _createClass(CallbackHandler, [{
    key: 'execute',
    value: function execute() {
      this.modal.show();
    }
  }]);

  return CallbackHandler;
}();

exports.default = CallbackHandler;

},{"../util/logger":9,"../util/modal":10}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractCanvas = function () {
  _createClass(AbstractCanvas, null, [{
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

  function AbstractCanvas(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, AbstractCanvas);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new _logger2.default({ verbose: verbose });
  }

  _createClass(AbstractCanvas, [{
    key: '_renderCanvas',
    value: function _renderCanvas(json) {
      if (!json) {
        throw new Error('JSON object to render is empty!');
      }
      var self = this;
      // build the dialog window
      self.windowId = _idUtils2.default.getWindowId(json.canvas.id);
      self.window = d3.select('#' + self.windowId);
      // check if the window is already present
      if (!self.window.node()) {
        self.logger.debug('Creating Window [' + self.windowId + ']...');
        $('<div>', {
          id: self.windowId,
          title: json.canvas.title,
          class: 'window'
        }).appendTo(this.options.appendTo);
        // update element
        self.window = d3.select('#' + self.windowId);
      }
      // cannot continue if window is not present
      if (!self.window.node()) {
        throw new Error('Oops, could not create window with id ' + self.windowId + '... Cannot proceed.');
      }
      // this will force the dialog to open
      //$(`#${self.windowId}`).dialog({
      //  close: function(event, ui) {
      //    self.logger.debug(`Closing window [${self.windowId}]...`);
      //    return $(this).dialog('destroy').remove();
      //  }
      //});
      self.logger.debug('Creating Window Menus [' + self.windowId + ']...');

      // build menu
      new _menu2.default(json, { version: this.options.verbose, appendTo: self.window.node(), callbackHandler: this.options.callbackHandler });
      $('<br/>').appendTo('#' + self.windowId);

      // build canvas
      self.canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      self.canvas = d3.select('svg#' + self.canvasId);
      if (!self.canvas.node()) {
        self.logger.debug('Creating Canvas [' + self.canvasId + ']...');
        self.canvas = d3.select('div#' + self.windowId).append('svg').attr('id', self.canvasId).attr('class', 'canvas');
      }
      // cannot continue if canvas is not present
      if (!self.canvas.node()) {
        throw new Error('Oops, could not create canvas with id ' + self.canvasId + '... Cannot proceed.');
      }
      // update if needed
      self.canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);
    }
  }]);

  return AbstractCanvas;
}();

exports.default = AbstractCanvas;

},{"../util/id-utils":7,"../util/logger":9,"./menu":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = require('./canvas');

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Draw = function (_Canvas) {
  _inherits(Draw, _Canvas);

  function Draw(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Draw);

    return _possibleConstructorReturn(this, (Draw.__proto__ || Object.getPrototypeOf(Draw)).call(this, { verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler }));
  }

  _createClass(Draw, [{
    key: 'render',
    value: function render(json) {
      this._renderCanvas(json);
      this._render(json);
    }
  }, {
    key: '_render',
    value: function _render(json) {

      var canvasNodes = Object.values(json.canvas.nodes),
          canvasLinks = Object.values(json.canvas.links);

      var svg = this.canvas,
          width = +svg.attr('width'),
          height = +svg.attr('height');

      svg = svg.call(d3.zoom().on('zoom', zoomed)).append('g').attr('class', 'draw');

      function zoomed() {
        svg.attr('transform', 'translate(' + d3.event.transform.x + ',' + d3.event.transform.y + ') scale(' + d3.event.transform.k + ')');
      }

      svg.append('defs').selectAll('marker').data(['arrow']).enter().append('marker').attr('class', 'arrows').attr('id', function (d) {
        return d;
      }).attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 10).attr('markerHeight', 10).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');

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
        return _canvas2.default.getSymbol(d.type);
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

      var legend = this.canvas.append('g').attr('class', 'legend').selectAll('g').data(d3.map(canvasNodes, function (d) {
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
        return _canvas2.default.colors(d.layer * 6);
      }).style('stroke', function (d) {
        return _canvas2.default.colors(d.layer * 6);
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
          return _canvas2.default.colors(d.layer * 6);
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

      return self.window;
    }
  }]);

  return Draw;
}(_canvas2.default);

exports.default = Draw;

},{"./canvas":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _callback = require('./callback');

var _callback2 = _interopRequireDefault(_callback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuUtils = function () {
  function MenuUtils(json, _ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MenuUtils);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.build(json);
  }

  _createClass(MenuUtils, [{
    key: 'build',
    value: function build(json) {
      var self = this;
      var $html = $('<div>', { class: 'menu', id: json.id });
      self._buildDefaultMenu().appendTo($html);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(json.canvas.menus)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var menu = _step.value;

          var callback = new _callback2.default(menu, this.options);
          var $menu = $('<div>', { class: "dropdown" }).appendTo($html);
          if (menu.menus && Object.values(menu.menus).length > 0) {
            $('<button>', { class: "dropdown-button" }).html(menu.title + "&nbsp;&#9660;").appendTo($menu);
            var $submenu = $('<div>', { class: "dropdown-content" }).appendTo($menu);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = Object.values(menu.menus)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var submenu = _step2.value;

                callback = new _callback2.default(submenu, this.options);
                $('<button>', { class: 'dropdown-button', click: function click() {
                    return callback.execute();
                  } }).text(submenu.title).appendTo($submenu);
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
            $('<button>', { class: 'dropdown-button', click: function click() {
                return callback.execute();
              } }).text(menu.title).appendTo($menu);
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

      $html.appendTo(this.options.appendTo);
    }
  }, {
    key: '_buildDefaultMenu',
    value: function _buildDefaultMenu() {
      var $div = $('<div>', { class: "dropdown" });
      var $content = $('<div>', { class: "dropdown-content" });
      $('<button>', { class: "dropdown-button" }).html('File&nbsp;&#9660;').appendTo($div);
      $('<button>', { class: 'dropdown-button', click: function click() {
          return;
        } }).text("Save to PNG").appendTo($content);
      $('<button>', { class: 'dropdown-button', click: function click() {
          return;
        } }).text("About").appendTo($content);
      $('<button>', { class: 'dropdown-button', click: function click() {
          return;
        } }).text("Close").appendTo($content);
      $content.appendTo($div);
      return $div;
    }
  }]);

  return MenuUtils;
}();

exports.default = MenuUtils;

},{"./callback":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class holds default methods to handle changes on a model object.
 * It works by the means of a Proxy to track changes and ensures subscribers
 * are notified of these changes on a time basis (1 second default).
 */
var Tracker = function () {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param verbose
   */
  function Tracker(object) {
    var _this = this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$throttle = _ref.throttle,
        throttle = _ref$throttle === undefined ? 1000 : _ref$throttle;

    _classCallCheck(this, Tracker);

    this.verbose = verbose;
    /**
     * This is property holds a list of change subscribers.
     * @type {function}
     * @private
     */
    this._subscribers = [];
    /**
     * This is property holds a proxy that handles a dirty flag when object changes.
     * @type {Proxy}
     * @private
     */
    this._proxy = new Proxy(object, this);
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */
    this._dirty = false;
    /**
     * Sync listeners every second, if data is dirty
     * @type {setInterval}
     * @private
     */
    setInterval(function () {
      if (_this._dirty) {
        _this._dirty = false;
        return _this.sync();
      }
    }, throttle);
  }

  /**
   * This method is used by the proxy to set a property when a change occurs, plus it sets the current object to dirty.
   * @param {object} receiver - the object being tracked
   * @param {object} property - the property changed
   * @param {object} value - the new value
   */


  _createClass(Tracker, [{
    key: 'set',
    value: function set(receiver, property, value) {
      if (!(value[property] instanceof Object) && receiver[property] !== value) {
        if (this.verbose) {
          //console.debug(`Object ID ${this.object.id} property ${property} changed from ${receiver[property]} to ${value}.`);
        }
        receiver[property] = value;
        this._dirty = true;
      }
      return true;
    }

    /**
     * This method is used by the proxy to get the object being tracked
     * @param {object} target - the object being tracked
     * @param {object} key the the object property
     * @returns {object} returns the object being tracked
     */

  }, {
    key: 'get',
    value: function get(target, key) {
      if (_typeof(target[key]) === 'object' && target[key] !== null) {
        return new Proxy(target[key], this);
      }
      return key in target ? target[key] : target;
    }

    /**
     * Returns the object being tracked
     * @returns {object} the object properties
     */

  }, {
    key: 'subscribe',


    /**
     * This method is used register a function that is invoked to sync the object
     * @param {function} fn - the function to execute - must handle one arg, the object, of type {object}
     */
    value: function subscribe(fn) {
      this._subscribers.push(fn);
    }

    /**
     * This method is used unregister a function registered previously
     * @param {function} fn - the function to execute - must handle one arg, the object, of type {object}
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(fn) {
      this._subscribers = this._subscribers.filter(function (item) {
        return item !== fn ? item : undefined;
      });
    }

    /**
     * This method is used to explicitly sync the module with all the subscribers
     */

  }, {
    key: 'sync',
    value: function sync() {
      var _this2 = this;

      this._subscribers.forEach(function (item) {
        return item.call(_this2, _this2.object);
      });
    }
  }, {
    key: 'object',
    get: function get() {
      return this._proxy;
    }
  }]);

  return Tracker;
}();

exports.default = Tracker;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'Francy[Window|Canvas|Object]-*numerical id*'
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
  }]);

  return IDUtils;
}();

exports.default = IDUtils;

},{}],8:[function(require,module,exports){
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
          return json.agent === 'application/francy' ? json : undefined;
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

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class is a singleton that provides a logger for the Francy application.
 */

var singleton = null;

var Logger = function () {
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

  _createClass(Logger, [{
    key: 'debug',
    value: function debug(message) {
      if (this.verbose) {
        this.console.debug(this._format('DEBUG', message));
      }
    }
  }, {
    key: 'info',
    value: function info(message) {
      this.console.info(this._format('INFO', message));
    }
  }, {
    key: 'error',
    value: function error(message, _error) {
      this.console.error(this._format('ERROR', message), _error);
    }
  }, {
    key: '_format',
    value: function _format(level, message) {
      return '[' + level + '] - ' + new Date().toISOString() + ' - ' + message;
    }
  }]);

  return Logger;
}();

exports.default = Logger;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal(config, _ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Modal);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new _logger2.default({ verbose: verbose });
    this.config = config;
  }

  _createClass(Modal, [{
    key: 'show',
    value: function show() {
      var self = this;
      if ($('#' + self.config.id).length) {
        $('#' + self.config.id).show();
        return;
      }
      $('<div>', {
        id: self.config.id,
        title: 'Required Arguments',
        class: 'requiredArgs'
      }).appendTo(this.options.appendTo);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.values(self.config.requiredArgs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arg = _step.value;

          $('<label>', {
            for: arg.id
          }).text(arg.title).appendTo('#' + self.config.id);
          $('<input>', {
            id: arg.id,
            name: arg.id,
            type: arg.type,
            value: arg.value,
            change: function change() {
              self.config.requiredArgs[this.id].value = this.value;
            },
            input: this.change,
            keyup: this.change,
            paste: this.change
          }).appendTo('#' + self.config.id);
          $('<br/>').appendTo('#' + self.config.id);
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

      $('#' + self.config.id).dialog({
        resizable: false,
        close: function close(event, ui) {
          self.logger.debug('Closing modal for callback [' + self.config.id + ']...');
          return $(this).dialog('destroy').remove();
        },
        buttons: {
          Ok: function Ok() {
            // FIXME requires validation!
            self.options.callbackHandler(self.config);
            $(this).dialog("close");
          },
          Cancel: function Cancel() {
            $(this).dialog("close");
          }
        }
      });
    }
  }]);

  return Modal;
}();

exports.default = Modal;

},{"../util/logger":9}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FsbGJhY2suanMiLCJzcmMvaGFuZGxlci9jYW52YXMuanMiLCJzcmMvaGFuZGxlci9kcmF3LmpzIiwic3JjL2hhbmRsZXIvbWVudS5qcyIsInNyYy90cmFja2VyL2NoYW5nZS5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyIsInNyYy91dGlsL2xvZ2dlci5qcyIsInNyYy91dGlsL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSx3QkFBNEQ7QUFBQSw0QkFBOUMsT0FBOEM7QUFBQSxRQUE5QyxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QixRQUE2QixRQUE3QixRQUE2QjtBQUFBLFFBQW5CLGVBQW1CLFFBQW5CLGVBQW1COztBQUFBOztBQUMxRCxRQUFJLENBQUMsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUksS0FBSixDQUFVLDJCQUFWLENBQU47QUFDRDtBQUNELFNBQUssT0FBTCxHQUFlO0FBQ2IsZUFBUyxPQURJO0FBRWIsZ0JBQVUsUUFGRztBQUdiLHVCQUFpQjtBQUhKLEtBQWY7QUFLQSxRQUFJLENBQUMsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRCxTQUFLLElBQUwsR0FBWSxtQkFBUyxLQUFLLE9BQWQsQ0FBWjtBQUNEOztBQUVEOzs7Ozs7OzsyQkFJTyxLLEVBQTBCO0FBQUEsc0ZBQUosRUFBSTtBQUFBLFVBQWpCLFFBQWlCLFNBQWpCLFFBQWlCOztBQUMvQixVQUFJLE9BQU8sb0JBQVUsS0FBVixDQUFnQixLQUFoQixDQUFYO0FBQ0EsVUFBSSxJQUFKLEVB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SyxNQUFMLENBQVksRUFYNUI7QUFZQSxZQUFFLE9BQUYsRUFBVyxRQUFYLE9BQXdCLEtBQUssTUFBTCxDQUFZLEVBQXBDO0FBQ0Q7QUE3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUErQkwsY0FBTSxLQUFLLE1BQUwsQ0FBWSxFQUFsQixFQUF3QixNQUF4QixDQUErQjtBQUM3QixtQkFBVyxLQURrQjtBQUU3QixlQUFPLGVBQVMsS0FBVCxFQUFnQixFQUFoQixFQUFvQjtBQUN6QixlQUFLLE1BQUwsQ0FBWSxLQUFaLGtDQUFpRCxLQUFLLE1BQUwsQ0FBWSxFQUE3RDtBQUNBLGlCQUFPLEVBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLE1BQTFCLEVBQVA7QUFDRCxTQUw0QjtBQU03QixpQkFBUztBQUNQLGNBQUksY0FBVztBQUNiO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsS0FBSyxNQUFsQztBQUNBLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0QsV0FMTTtBQU1QLGtCQUFRLGtCQUFXO0FBQ2pCLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0Q7QUFSTTtBQU5vQixPQUEvQjtBQWlCRDs7Ozs7O2tCQTVEa0IsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICogQHBhcmFtIGNoYW5nZVRyYWNrZXJIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGRldGVjdGVkIGJ5IHRoZSBDaGFuZ2VUcmFja2VyLCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQ2FsbGJhY2sgSGFuZGxlciFcIik7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHRvIGdldCBkcmF3blxuICAgKi9cbiAgaGFuZGxlKGlucHV0LCB7IGFwcGVuZFRvIH0gPSB7fSkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvID8gYXBwZW5kVG8gOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgICByZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3V0aWwvbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoY29uZmlnLmNhbGxiYWNrLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLm1vZGFsLnNob3coKTtcbiAgfVxufVxuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgTWVudVV0aWxzIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RDYW52YXMge1xuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdkaWFtb25kJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzdGFyJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgfVxuXG4gIF9yZW5kZXJDYW52YXMoanNvbikge1xuICAgIGlmICghanNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OIG9iamVjdCB0byByZW5kZXIgaXMgZW1wdHkhJyk7XG4gICAgfVxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvLyBidWlsZCB0aGUgZGlhbG9nIHdpbmRvd1xuICAgIHNlbGYud2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgICAgJCgnPGRpdj4nLCB7XG4gICAgICAgIGlkOiBzZWxmLndpbmRvd0lkLFxuICAgICAgICB0aXRsZToganNvbi5jYW52YXMudGl0bGUsXG4gICAgICAgIGNsYXNzOiAnd2luZG93J1xuICAgICAgfSkuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcbiAgICAgIC8vIHVwZGF0ZSBlbGVtZW50XG4gICAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgJHtzZWxmLndpbmRvd0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBkaWFsb2cgdG8gb3BlblxuICAgIC8vJChgIyR7c2VsZi53aW5kb3dJZH1gKS5kaWFsb2coe1xuICAgIC8vICBjbG9zZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgLy8gICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3Npbmcgd2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgIC8vICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgIC8vICB9XG4gICAgLy99KTtcbiAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IE1lbnVzIFske3NlbGYud2luZG93SWR9XS4uLmApO1xuXG4gICAgLy8gYnVpbGQgbWVudVxuICAgIG5ldyBNZW51VXRpbHMoanNvbiwgeyB2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyYm9zZSwgYXBwZW5kVG86IHNlbGYud2luZG93Lm5vZGUoKSwgY2FsbGJhY2tIYW5kbGVyOiB0aGlzLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyIH0pO1xuICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYud2luZG93SWR9YCk7XG5cbiAgICAvLyBidWlsZCBjYW52YXNcbiAgICBzZWxmLmNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3NlbGYuY2FudmFzSWR9YCk7XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7c2VsZi5jYW52YXNJZH1dLi4uYCk7XG4gICAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgZGl2IyR7c2VsZi53aW5kb3dJZH1gKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIHNlbGYuY2FudmFzSWQpLmF0dHIoJ2NsYXNzJywgJ2NhbnZhcycpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCAke3NlbGYuY2FudmFzSWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaWYgbmVlZGVkXG4gICAgc2VsZi5jYW52YXNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpXG4gICAgICAuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhqc29uKTtcbiAgICB0aGlzLl9yZW5kZXIoanNvbik7XG4gIH1cblxuICBfcmVuZGVyKGpzb24pIHtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgY2FudmFzTGlua3MgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmxpbmtzKTtcblxuICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcyxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIHN2ZyA9IHN2Zy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIHpvb21lZCkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICB9XG5cbiAgICBzdmcuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEoY2FudmFzTGlua3MpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cbiAgICB2YXIgbm9kZSA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGVzJykuc2VsZWN0QWxsKCdnLm5vZGVzJylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWxzJylcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLndpbmRvdztcblxuICB9XG5cbn1cbiIsImltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVV0aWxzIHtcblxuICBjb25zdHJ1Y3Rvcihqc29uLCB7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmJ1aWxkKGpzb24pO1xuICB9XG5cbiAgYnVpbGQoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJGh0bWwgPSAkKCc8ZGl2PicsIHsgY2xhc3M6ICdtZW51JywgaWQ6IGpzb24uaWQgfSk7XG4gICAgc2VsZi5fYnVpbGREZWZhdWx0TWVudSgpLmFwcGVuZFRvKCRodG1sKTtcbiAgICBmb3IgKGxldCBtZW51IG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sobWVudSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciAkbWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93blwiIH0pLmFwcGVuZFRvKCRodG1sKTtcbiAgICAgIGlmIChtZW51Lm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6IFwiZHJvcGRvd24tYnV0dG9uXCIgfSkuaHRtbChtZW51LnRpdGxlICsgXCImbmJzcDsmIzk2NjA7XCIpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgICAgdmFyICRzdWJtZW51ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnRcIiB9KS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51Lm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHN1Ym1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQoc3VibWVudS50aXRsZSkuYXBwZW5kVG8oJHN1Ym1lbnUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQobWVudS50aXRsZSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgICAkaHRtbC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICB9XG5cbiAgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgdmFyICRkaXYgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KVxuICAgIHZhciAkY29udGVudCA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwoJ0ZpbGUmbmJzcDsmIzk2NjA7JykuYXBwZW5kVG8oJGRpdik7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIlNhdmUgdG8gUE5HXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQWJvdXRcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJDbG9zZVwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJGNvbnRlbnQuYXBwZW5kVG8oJGRpdik7XG4gICAgcmV0dXJuICRkaXY7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGRlZmF1bHQgbWV0aG9kcyB0byBoYW5kbGUgY2hhbmdlcyBvbiBhIG1vZGVsIG9iamVjdC5cbiAqIEl0IHdvcmtzIGJ5IHRoZSBtZWFucyBvZiBhIFByb3h5IHRvIHRyYWNrIGNoYW5nZXMgYW5kIGVuc3VyZXMgc3Vic2NyaWJlcnNcbiAqIGFyZSBub3RpZmllZCBvZiB0aGVzZSBjaGFuZ2VzIG9uIGEgdGltZSBiYXNpcyAoMSBzZWNvbmQgZGVmYXVsdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGluc3RhbmNlIG9mIE1vZGVsVHJhY2tlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIHRoZSBvYmplY3Qgb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlcy5cbiAgICogQHBhcmFtIHZlcmJvc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgeyB2ZXJib3NlID0gZmFsc2UsIHRocm90dGxlID0gMTAwMCB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBsaXN0IG9mIGNoYW5nZSBzdWJzY3JpYmVycy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBwcm94eSB0aGF0IGhhbmRsZXMgYSBkaXJ0eSBmbGFnIHdoZW4gb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge1Byb3h5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gZmxhZyB3aGVuIHRoZSBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3luYyBsaXN0ZW5lcnMgZXZlcnkgc2Vjb25kLCBpZiBkYXRhIGlzIGRpcnR5XG4gICAgICogQHR5cGUge3NldEludGVydmFsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgcmVjZWl2ZXJbcHJvcGVydHldICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0ID8gdGFyZ2V0W2tleV0gOiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHRvIHN5bmMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB1bnJlZ2lzdGVyIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZCBwcmV2aW91c2x5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB1bnN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZm4gPyBpdGVtIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGV4cGxpY2l0bHkgc3luYyB0aGUgbW9kdWxlIHdpdGggYWxsIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgc3luYygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jYWxsKHRoaXMsIHRoaXMub2JqZWN0KSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cbiAgXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoJChgIyR7c2VsZi5jb25maWcuaWR9YCkubGVuZ3RoKSB7XG4gICAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQoJzxkaXY+Jywge1xuICAgICAgaWQ6IHNlbGYuY29uZmlnLmlkLFxuICAgICAgdGl0bGU6ICdSZXF1aXJlZCBBcmd1bWVudHMnLFxuICAgICAgY2xhc3M6ICdyZXF1aXJlZEFyZ3MnXG4gICAgfSkuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHNlbGYuY29uZmlnLnJlcXVpcmVkQXJncykpIHtcbiAgICAgICQoJzxsYWJlbD4nLCB7XG4gICAgICAgIGZvcjogYXJnLmlkXG4gICAgICB9KS50ZXh0KGFyZy50aXRsZSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgaWQ6IGFyZy5pZCxcbiAgICAgICAgbmFtZTogYXJnLmlkLFxuICAgICAgICB0eXBlOiBhcmcudHlwZSxcbiAgICAgICAgdmFsdWU6IGFyZy52YWx1ZSxcbiAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIGtleXVwOiB0aGlzLmNoYW5nZSxcbiAgICAgICAgcGFzdGU6IHRoaXMuY2hhbmdlXG4gICAgICB9KS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICB9XG5cbiAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5kaWFsb2coe1xuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3NpbmcgbW9kYWwgZm9yIGNhbGxiYWNrIFske3NlbGYuY29uZmlnLmlkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9LFxuICAgICAgYnV0dG9uczoge1xuICAgICAgICBPazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRklYTUUgcmVxdWlyZXMgdmFsaWRhdGlvbiFcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBDYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
