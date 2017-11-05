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
  function Francy() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$callbackHandler = _ref.callbackHandler,
        callbackHandler = _ref$callbackHandler === undefined ? console.log : _ref$callbackHandler;

    _classCallCheck(this, Francy);

    this.options = {
      verbose: verbose,
      callbackHandler: callbackHandler
    };
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */


  _createClass(Francy, [{
    key: "handle",
    value: function handle(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
        return new _draw2.default(this.options).handle(json);
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
  function CallbackHandler(config) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$callbackHandler = _ref.callbackHandler,
        callbackHandler = _ref$callbackHandler === undefined ? console.log : _ref$callbackHandler;

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

  function AbstractCanvas() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, AbstractCanvas);

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
          width: json.canvas.w,
          height: json.canvas.h
        }).appendTo('body');
        // update element
        self.window = d3.select('#' + self.windowId);
      }
      // cannot continue if window is not present
      if (!self.window.node()) {
        throw new Error('Oops, could not create window with id ' + self.windowId + '... Cannot proceed.');
      }
      // this will force the dialog to open
      $('#' + self.windowId).dialog({
        close: function close(event, ui) {
          self.logger.debug('Closing window [' + self.windowId + ']...');
          return $(this).dialog('destroy').remove();
        }
      });
      self.logger.debug('Creating Window Menus [' + self.windowId + ']...');
      // build menu
      $('#' + self.windowId).append(new _menu2.default().getMenuHtml(json));
      $('<br/>').appendTo('#' + self.windowId);

      // build canvas
      self.canvasId = _idUtils2.default.getCanvasId(json.canvas.id);
      self.canvas = d3.select('svg#' + self.canvasId);
      if (!self.canvas.node()) {
        self.logger.debug('Creating Canvas [' + self.canvasId + ']...');
        self.canvas = d3.select('div#' + self.windowId).append('svg').attr('id', self.canvasId);
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

  function Draw() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Draw);

    return _possibleConstructorReturn(this, (Draw.__proto__ || Object.getPrototypeOf(Draw)).call(this, { verbose: verbose }));
  }

  _createClass(Draw, [{
    key: 'handle',
    value: function handle(json) {
      this._renderCanvas(json);
      this.add(json);
    }
  }, {
    key: 'add',
    value: function add(json) {

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
  function MenuUtils() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$callbackHandler = _ref.callbackHandler,
        callbackHandler = _ref$callbackHandler === undefined ? console.log : _ref$callbackHandler;

    _classCallCheck(this, MenuUtils);

    this.callbackHandler = callbackHandler;
  }

  _createClass(MenuUtils, [{
    key: 'getMenuHtml',
    value: function getMenuHtml(json) {
      var self = this;
      var $html = $('<div>', { class: 'menu' });
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

      return $html;
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
  function Modal(config) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$callbackHandler = _ref.callbackHandler,
        callbackHandler = _ref$callbackHandler === undefined ? console.log : _ref$callbackHandler;

    _classCallCheck(this, Modal);

    this.options = {
      verbose: verbose,
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
      }).appendTo('body');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FsbGJhY2suanMiLCJzcmMvaGFuZGxlci9jYW52YXMuanMiLCJzcmMvaGFuZGxlci9kcmF3LmpzIiwic3JjL2hhbmRsZXIvbWVudS5qcyIsInNyYy90cmFja2VyL2NoYW5nZS5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyIsInNyYy91dGlsL2xvZ2dlci5qcyIsInNyYy91dGlsL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSxvQkFBcUU7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQXZELE9BQXVEO0FBQUEsUUFBdkQsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsb0NBQXRDLGVBQXNDO0FBQUEsUUFBdEMsZUFBc0Msd0NBQXBCLFFBQVEsR0FBWTs7QUFBQTs7QUFDbkUsU0FBSyxPQUFMLEdBQWU7QUFDYixlQUFTLE9BREk7QUFFYix1QkFBaUI7QUFGSixLQUFmO0FBSUEsUUFBSSxDQUFDLEVBQUwsRUFBUztBQUNQLFlBQU0sSUFBSSxLQUFKLENBQVUsNEVBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OzJCQUlPLEssRUFBTztBQUNaLFVBQUksT0FBTyxvQkFBVSxLQUFWLENBQWdCLEtBQWhCLENBQVg7QUFDQSxVQUFJLElBQUosRUFBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBLGVBQU8sbUJBQVMsS0FBSyxPQUFkLEVBQXVCLE1BQXZCLENBQThCLElBQTlCLENBQVA7QUFDRDtBQUNGOzs7Ozs7QUFHSCxRQUFRLE1BQVIsR0FBaUIsT0FBTyxNQUFQLEdBQWdCLE1BQWpDOzs7Ozs7Ozs7OztBQzFDQTs7OztBQUNBOzs7Ozs7OztB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SyxNQUFsQztBQUNBLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0QsV0FMTTtBQU1QLGtCQUFRLGtCQUFXO0FBQ2pCLGNBQUUsSUFBRixFQUFRLE1BQVIsQ0FBZSxPQUFmO0FBQ0Q7QUFSTTtBQU5vQixPQUEvQjtBQWlCRDs7Ozs7O2tCQTNEa0IsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICogQHBhcmFtIGNoYW5nZVRyYWNrZXJIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGRldGVjdGVkIGJ5IHRoZSBDaGFuZ2VUcmFja2VyLCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyID0gY29uc29sZS5sb2cgfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHRvIGdldCBkcmF3blxuICAgKi9cbiAgaGFuZGxlKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG4iLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi91dGlsL21vZGFsJztcblxuLy8gRklYTUUgaHR0cDovL2xvcmVkYW5hY2lyc3RlYS5naXRodWIuaW8vZXM2LWRlc2lnbi1wYXR0ZXJucy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgPSBjb25zb2xlLmxvZyB9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChjb25maWcuY2FsbGJhY2ssIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICB9XG59XG4iLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgX3JlbmRlckNhbnZhcyhqc29uKSB7XG4gICAgaWYgKCFqc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04gb2JqZWN0IHRvIHJlbmRlciBpcyBlbXB0eSEnKTtcbiAgICB9XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIC8vIGJ1aWxkIHRoZSBkaWFsb2cgd2luZG93XG4gICAgc2VsZi53aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgaWQ6IHNlbGYud2luZG93SWQsXG4gICAgICAgIHRpdGxlOiBqc29uLmNhbnZhcy50aXRsZSxcbiAgICAgICAgd2lkdGg6IGpzb24uY2FudmFzLncsXG4gICAgICAgIGhlaWdodDoganNvbi5jYW52YXMuaFxuICAgICAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgIC8vIHVwZGF0ZSBlbGVtZW50XG4gICAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgJHtzZWxmLndpbmRvd0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBkaWFsb2cgdG8gb3BlblxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAgIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3Npbmcgd2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IE1lbnVzIFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgIC8vIGJ1aWxkIG1lbnVcbiAgICAkKGAjJHtzZWxmLndpbmRvd0lkfWApLmFwcGVuZChuZXcgTWVudVV0aWxzKCkuZ2V0TWVudUh0bWwoanNvbikpO1xuICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYud2luZG93SWR9YCk7XG5cbiAgICAvLyBidWlsZCBjYW52YXNcbiAgICBzZWxmLmNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3NlbGYuY2FudmFzSWR9YCk7XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7c2VsZi5jYW52YXNJZH1dLi4uYCk7XG4gICAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgZGl2IyR7c2VsZi53aW5kb3dJZH1gKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIHNlbGYuY2FudmFzSWQpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCAke3NlbGYuY2FudmFzSWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaWYgbmVlZGVkXG4gICAgc2VsZi5jYW52YXNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpXG4gICAgICAuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgaGFuZGxlKGpzb24pIHtcbiAgICB0aGlzLl9yZW5kZXJDYW52YXMoanNvbik7XG4gICAgdGhpcy5hZGQoanNvbik7XG4gIH1cblxuICBhZGQoanNvbikge1xuICAgIFxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgICBjYW52YXNMaW5rcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubGlua3MpO1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShjYW52YXNMaW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBDYW52YXMuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWxzJylcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xuICAgICAgfSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoY2FudmFzTm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhjYW52YXNMaW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggLSBNYXRoLnNxcnQoZC5zaXplKSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC41KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxLCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlc1xuICAgICAgcmFkaXVzID0gMjA7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShjYW52YXNOb2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uIChxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cbiIsImltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVV0aWxzIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyID0gY29uc29sZS5sb2cgfSA9IHt9KSB7XG4gICAgdGhpcy5jYWxsYmFja0hhbmRsZXIgPSBjYWxsYmFja0hhbmRsZXI7XG4gIH1cblxuICBnZXRNZW51SHRtbChqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciAkaHRtbCA9ICQoJzxkaXY+JywgeyBjbGFzczogJ21lbnUnIH0pO1xuICAgIHNlbGYuX2J1aWxkRGVmYXVsdE1lbnUoKS5hcHBlbmRUbygkaHRtbCk7XG4gICAgZm9yIChsZXQgbWVudSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgJG1lbnUgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KS5hcHBlbmRUbygkaHRtbCk7XG4gICAgICBpZiAobWVudS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnUubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwobWVudS50aXRsZSArIFwiJm5ic3A7JiM5NjYwO1wiKS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIHZhciAkc3VibWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayhzdWJtZW51LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KHN1Ym1lbnUudGl0bGUpLmFwcGVuZFRvKCRzdWJtZW51KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KG1lbnUudGl0bGUpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICRodG1sO1xuICB9XG5cbiAgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgdmFyICRkaXYgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KVxuICAgIHZhciAkY29udGVudCA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwoJ0ZpbGUmbmJzcDsmIzk2NjA7JykuYXBwZW5kVG8oJGRpdik7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIlNhdmUgdG8gUE5HXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQWJvdXRcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJDbG9zZVwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJGNvbnRlbnQuYXBwZW5kVG8oJGRpdik7XG4gICAgcmV0dXJuICRkaXY7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGRlZmF1bHQgbWV0aG9kcyB0byBoYW5kbGUgY2hhbmdlcyBvbiBhIG1vZGVsIG9iamVjdC5cbiAqIEl0IHdvcmtzIGJ5IHRoZSBtZWFucyBvZiBhIFByb3h5IHRvIHRyYWNrIGNoYW5nZXMgYW5kIGVuc3VyZXMgc3Vic2NyaWJlcnNcbiAqIGFyZSBub3RpZmllZCBvZiB0aGVzZSBjaGFuZ2VzIG9uIGEgdGltZSBiYXNpcyAoMSBzZWNvbmQgZGVmYXVsdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGluc3RhbmNlIG9mIE1vZGVsVHJhY2tlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIHRoZSBvYmplY3Qgb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlcy5cbiAgICogQHBhcmFtIHZlcmJvc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgeyB2ZXJib3NlID0gZmFsc2UsIHRocm90dGxlID0gMTAwMCB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBsaXN0IG9mIGNoYW5nZSBzdWJzY3JpYmVycy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBwcm94eSB0aGF0IGhhbmRsZXMgYSBkaXJ0eSBmbGFnIHdoZW4gb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge1Byb3h5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gZmxhZyB3aGVuIHRoZSBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3luYyBsaXN0ZW5lcnMgZXZlcnkgc2Vjb25kLCBpZiBkYXRhIGlzIGRpcnR5XG4gICAgICogQHR5cGUge3NldEludGVydmFsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgcmVjZWl2ZXJbcHJvcGVydHldICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0ID8gdGFyZ2V0W2tleV0gOiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHRvIHN5bmMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB1bnJlZ2lzdGVyIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZCBwcmV2aW91c2x5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB1bnN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZm4gPyBpdGVtIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGV4cGxpY2l0bHkgc3luYyB0aGUgbW9kdWxlIHdpdGggYWxsIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgc3luYygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jYWxsKHRoaXMsIHRoaXMub2JqZWN0KSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cbiAgXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgPSBjb25zb2xlLmxvZyB9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoJChgIyR7c2VsZi5jb25maWcuaWR9YCkubGVuZ3RoKSB7XG4gICAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQoJzxkaXY+Jywge1xuICAgICAgaWQ6IHNlbGYuY29uZmlnLmlkLFxuICAgICAgdGl0bGU6ICdSZXF1aXJlZCBBcmd1bWVudHMnLFxuICAgICAgY2xhc3M6ICdyZXF1aXJlZEFyZ3MnXG4gICAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHNlbGYuY29uZmlnLnJlcXVpcmVkQXJncykpIHtcbiAgICAgICQoJzxsYWJlbD4nLCB7XG4gICAgICAgIGZvcjogYXJnLmlkXG4gICAgICB9KS50ZXh0KGFyZy50aXRsZSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgaWQ6IGFyZy5pZCxcbiAgICAgICAgbmFtZTogYXJnLmlkLFxuICAgICAgICB0eXBlOiBhcmcudHlwZSxcbiAgICAgICAgdmFsdWU6IGFyZy52YWx1ZSxcbiAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIGtleXVwOiB0aGlzLmNoYW5nZSxcbiAgICAgICAgcGFzdGU6IHRoaXMuY2hhbmdlXG4gICAgICB9KS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICB9XG5cbiAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5kaWFsb2coe1xuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3NpbmcgbW9kYWwgZm9yIGNhbGxiYWNrIFske3NlbGYuY29uZmlnLmlkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9LFxuICAgICAgYnV0dG9uczoge1xuICAgICAgICBPazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRklYTUUgcmVxdWlyZXMgdmFsaWRhdGlvbiFcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBDYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
