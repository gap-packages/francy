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
        appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FsbGJhY2suanMiLCJzcmMvaGFuZGxlci9jYW52YXMuanMiLCJzcmMvaGFuZGxlci9kcmF3LmpzIiwic3JjL2hhbmRsZXIvbWVudS5qcyIsInNyYy90cmFja2VyL2NoYW5nZS5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyIsInNyYy91dGlsL2xvZ2dlci5qcyIsInNyYy91dGlsL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSx3QkFBNEQ7QUFBQSw0QkFBOUMsT0FBOEM7QUFBQSxRQUE5QyxPQUE4QyxnQ0FBcEMsS0FBb0M7QUFBQSxRQUE3QixRQUE2QixRQUE3QixRQUE2QjtBQUFBLFFBQW5CLGVBQW1CLFFBQW5CLGVBQW1COztBQUFBOztBQUMxRCxRQUFJLENBQUMsZUFBTCxFQUFzQjtBQUNwQixZQUFNLElBQUksS0FBSixDQUFVLDJCQUFWLENBQU47QUFDRDtBQUNELFNBQUssT0FBTCxHQUFlO0FBQ2IsZUFBUyxPQURJO0FBRWIsZ0JBQVUsUUFGRztBQUdiLHVCQUFpQjtBQUhKLEtBQWY7QUFLQSxRQUFJLENBQUMsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRCxTQUFLLElBQUwsR0FBWSxtQkFBUyxLQUFLLE9BQWQsQ0FBWjtBQUNEOztBQUVEOzs7Ozs7OzsyQkFJTyxLLEVBQTBCO0FBQUEsc0ZBQUosRUFBSTtBQUFBLFVBQWpCLFFBQWlCLFNBQWpCLFFBQWlCOztBQUMvQixVQUFJLE9BQU8sb0JBQVUsS0FBVixDQUFnQixLQUFoQixDQUFYO0FBQ0EsVUFBSSxJQUFKLEVB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QUFVWCxtQkFBTyxLQUFLO0FBVkQsV0FBYixFQVdHLFFBWEgsT0FXZ0IsS0FBSyxNQUFMLENBQVksRUFYNUI7QUFZQSxZQUFFLE9BQUYsRUFBVyxRQUFYLE9BQXdCLEtBQUssTUFBTCxDQUFZLEVBQXBDO0FBQ0Q7QUE3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUErQkwsY0FBTSxLQUFLLE1BQUwsQ0FBWSxFQUFsQixFQUF3QixNQUF4QixDQUErQjtBQUM3QixtQkFBVyxLQURrQjtBQUU3QixlQUFPLGVBQVMsS0FBVCxFQUFnQixFQUFoQixFQUFvQjtBQUN6QixlQUFLLE1BQUwsQ0FBWSxLQUFaLGtDQUFpRCxLQUFLLE1BQUwsQ0FBWSxFQUE3RDtBQUNBLGlCQUFPLEVBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLE1BQTFCLEVBQVA7QUFDRCxTQUw0QjtBQU03QixpQkFBUztBQUNQLGNBQUksY0FBVztBQUNiO0FBQ0EsaUJBQUssT0FBTCxDQUFhLGVBQWIsQ0FBNkIsS0FBSyxNQUFsQztBQUNBLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0QsV0FMTTtBQU1QLGtCQUFRLGtCQUFXO0FBQ2pCLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0Q7QUFSTTtBQU5vQixPQUEvQjtBQWlCRDs7Ozs7O2tCQTVEa0IsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICogQHBhcmFtIGNoYW5nZVRyYWNrZXJIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGRldGVjdGVkIGJ5IHRoZSBDaGFuZ2VUcmFja2VyLCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQ2FsbGJhY2sgSGFuZGxlciFcIik7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHRvIGdldCBkcmF3blxuICAgKi9cbiAgaGFuZGxlKGlucHV0LCB7IGFwcGVuZFRvIH0gPSB7fSkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvID8gYXBwZW5kVG8gOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgICByZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3V0aWwvbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKGNvbmZpZy5jYWxsYmFjaywgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5tb2RhbC5zaG93KCk7XG4gIH1cbn1cbiIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICBjbGFzczogJ3dpbmRvdydcbiAgICAgIH0pLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxuICAgICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBmb3JjZSB0aGUgZGlhbG9nIHRvIG9wZW5cbiAgICAvLyQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAvLyAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIC8vICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAvLyAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAvLyAgfVxuICAgIC8vfSk7XG4gICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBNZW51cyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcblxuICAgIC8vIGJ1aWxkIG1lbnVcbiAgICBuZXcgTWVudVV0aWxzKGpzb24sIHsgdmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcmJvc2UsIGFwcGVuZFRvOiBzZWxmLndpbmRvdy5ub2RlKCksIGNhbGxiYWNrSGFuZGxlcjogdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuXG4gICAgLy8gYnVpbGQgY2FudmFzXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBzZWxmLmNhbnZhc0lkKS5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGlmIG5lZWRlZFxuICAgIHNlbGYuY2FudmFzXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpO1xuICB9XG5cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgQ2FudmFzIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBhcHBlbmRUbzogYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyIH0pO1xuICB9XG5cbiAgcmVuZGVyKGpzb24pIHtcbiAgICB0aGlzLl9yZW5kZXJDYW52YXMoanNvbik7XG4gICAgdGhpcy5fcmVuZGVyKGpzb24pO1xuICB9XG5cbiAgX3JlbmRlcihqc29uKSB7XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm5vZGVzKSxcbiAgICAgIGNhbnZhc0xpbmtzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5saW5rcyk7XG5cbiAgICB2YXIgc3ZnID0gdGhpcy5jYW52YXMsXG4gICAgICB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKSxcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbiAgICBzdmcgPSBzdmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCB6b29tZWQpKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBzdmcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgfVxuXG4gICAgc3ZnLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZCA9PiAyNTApLnN0cmVuZ3RoKDAuMSk7XG5cbiAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA1MCkuc3RyZW5ndGgoMC41KTtcblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmsgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rcycpXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgIC5kYXRhKGNhbnZhc0xpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YClcbiAgICAgIC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IENhbnZhcy5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kID0gdGhpcy5jYW52YXNcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGQzLm1hcChjYW52YXNOb2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKSwgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2QubGF5ZXJ9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xuICAgICAgfSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC41KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxLCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlc1xuICAgICAgcmFkaXVzID0gMjA7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogcmFkaXVzICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24ocXVhZCwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxuICAgICAgICAgICAgICB5ID0gZC55IC0gcXVhZC5wb2ludC55LFxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgICAgICAgICAgaWYgKGwgPCByYikge1xuICAgICAgICAgICAgICBsID0gKGwgLSByYikgLyBsICogYWxwaGE7XG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueCArPSB4O1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSElHSExJR0hUXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxuICAgIHZhciB0b2dnbGUgPSAwO1xuICAgIC8vQ3JlYXRlIGFuIGFycmF5IGxvZ2dpbmcgd2hhdCBpcyBjb25uZWN0ZWQgdG8gd2hhdFxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbnZhc05vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAgY2FudmFzTGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi53aW5kb3c7XG5cbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoanNvbiwgeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5idWlsZChqc29uKTtcbiAgfVxuXG4gIGJ1aWxkKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICRodG1sID0gJCgnPGRpdj4nLCB7IGNsYXNzOiAnbWVudScsIGlkOiBqc29uLmlkIH0pO1xuICAgIHNlbGYuX2J1aWxkRGVmYXVsdE1lbnUoKS5hcHBlbmRUbygkaHRtbCk7XG4gICAgZm9yIChsZXQgbWVudSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgJG1lbnUgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KS5hcHBlbmRUbygkaHRtbCk7XG4gICAgICBpZiAobWVudS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnUubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwobWVudS50aXRsZSArIFwiJm5ic3A7JiM5NjYwO1wiKS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIHZhciAkc3VibWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayhzdWJtZW51LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KHN1Ym1lbnUudGl0bGUpLmFwcGVuZFRvKCRzdWJtZW51KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KG1lbnUudGl0bGUpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgIH1cbiAgICB9XG4gICAgJGh0bWwuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcbiAgfVxuXG4gIF9idWlsZERlZmF1bHRNZW51KCkge1xuICAgIHZhciAkZGl2ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duXCIgfSlcbiAgICB2YXIgJGNvbnRlbnQgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd24tY29udGVudFwiIH0pO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogXCJkcm9wZG93bi1idXR0b25cIiB9KS5odG1sKCdGaWxlJm5ic3A7JiM5NjYwOycpLmFwcGVuZFRvKCRkaXYpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJTYXZlIHRvIFBOR1wiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIkFib3V0XCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQ2xvc2VcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICRjb250ZW50LmFwcGVuZFRvKCRkaXYpO1xuICAgIHJldHVybiAkZGl2O1xuICB9XG5cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBob2xkcyBkZWZhdWx0IG1ldGhvZHMgdG8gaGFuZGxlIGNoYW5nZXMgb24gYSBtb2RlbCBvYmplY3QuXG4gKiBJdCB3b3JrcyBieSB0aGUgbWVhbnMgb2YgYSBQcm94eSB0byB0cmFjayBjaGFuZ2VzIGFuZCBlbnN1cmVzIHN1YnNjcmliZXJzXG4gKiBhcmUgbm90aWZpZWQgb2YgdGhlc2UgY2hhbmdlcyBvbiBhIHRpbWUgYmFzaXMgKDEgc2Vjb25kIGRlZmF1bHQpLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBpbnN0YW5jZSBvZiBNb2RlbFRyYWNrZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSB0aGUgb2JqZWN0IG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB2ZXJib3NlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIHsgdmVyYm9zZSA9IGZhbHNlLCB0aHJvdHRsZSA9IDEwMDAgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgbGlzdCBvZiBjaGFuZ2Ugc3Vic2NyaWJlcnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgcHJveHkgdGhhdCBoYW5kbGVzIGEgZGlydHkgZmxhZyB3aGVuIG9iamVjdCBjaGFuZ2VzLlxuICAgICAqIEB0eXBlIHtQcm94eX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb3h5ID0gbmV3IFByb3h5KG9iamVjdCwgdGhpcyk7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGZsYWcgd2hlbiB0aGUgb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFN5bmMgbGlzdGVuZXJzIGV2ZXJ5IHNlY29uZCwgaWYgZGF0YSBpcyBkaXJ0eVxuICAgICAqIEB0eXBlIHtzZXRJbnRlcnZhbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCk7XG4gICAgICB9XG4gICAgfSwgdGhyb3R0bGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIHNldCBhIHByb3BlcnR5IHdoZW4gYSBjaGFuZ2Ugb2NjdXJzLCBwbHVzIGl0IHNldHMgdGhlIGN1cnJlbnQgb2JqZWN0IHRvIGRpcnR5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVjZWl2ZXIgLSB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnR5IC0gdGhlIHByb3BlcnR5IGNoYW5nZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gdGhlIG5ldyB2YWx1ZVxuICAgKi9cbiAgc2V0KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBPYmplY3QpICYmIHJlY2VpdmVyW3Byb3BlcnR5XSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKGBPYmplY3QgSUQgJHt0aGlzLm9iamVjdC5pZH0gcHJvcGVydHkgJHtwcm9wZXJ0eX0gY2hhbmdlZCBmcm9tICR7cmVjZWl2ZXJbcHJvcGVydHldfSB0byAke3ZhbHVlfS5gKTtcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGJ5IHRoZSBwcm94eSB0byBnZXQgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGtleSB0aGUgdGhlIG9iamVjdCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXR1cm5zIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKi9cbiAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0W2tleV0sIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5IGluIHRhcmdldCA/IHRhcmdldFtrZXldIDogdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBvYmplY3QgcHJvcGVydGllc1xuICAgKi9cbiAgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJveHk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCByZWdpc3RlciBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB0byBzeW5jIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSAtIG11c3QgaGFuZGxlIG9uZSBhcmcsIHRoZSBvYmplY3QsIG9mIHR5cGUge29iamVjdH1cbiAgICovXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdW5yZWdpc3RlciBhIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgcHJldmlvdXNseVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGZuID8gaXRlbSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBleHBsaWNpdGx5IHN5bmMgdGhlIG1vZHVsZSB3aXRoIGFsbCB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIHN5bmMoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2FsbCh0aGlzLCB0aGlzLm9iamVjdCkpO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vZnJhbmN5JyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG4gIFxuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cbiIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCQoYCMke3NlbGYuY29uZmlnLmlkfWApLmxlbmd0aCkge1xuICAgICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKCc8ZGl2PicsIHtcbiAgICAgIGlkOiBzZWxmLmNvbmZpZy5pZCxcbiAgICAgIHRpdGxlOiAnUmVxdWlyZWQgQXJndW1lbnRzJyxcbiAgICAgIGNsYXNzOiAncmVxdWlyZWRBcmdzJ1xuICAgIH0pLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICAkKCc8bGFiZWw+Jywge1xuICAgICAgICBmb3I6IGFyZy5pZFxuICAgICAgfSkudGV4dChhcmcudGl0bGUpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICAgICQoJzxpbnB1dD4nLCB7XG4gICAgICAgIGlkOiBhcmcuaWQsXG4gICAgICAgIG5hbWU6IGFyZy5pZCxcbiAgICAgICAgdHlwZTogYXJnLnR5cGUsXG4gICAgICAgIHZhbHVlOiBhcmcudmFsdWUsXG4gICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5jb25maWcucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHRoaXMuY2hhbmdlLFxuICAgICAgICBrZXl1cDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIHBhc3RlOiB0aGlzLmNoYW5nZVxuICAgICAgfSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgfVxuXG4gICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuZGlhbG9nKHtcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBjbG9zZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIG1vZGFsIGZvciBjYWxsYmFjayBbJHtzZWxmLmNvbmZpZy5pZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgT2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIEZJWE1FIHJlcXVpcmVzIHZhbGlkYXRpb24hXG4gICAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmNvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kaWFsb2coXCJjbG9zZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgQ2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
