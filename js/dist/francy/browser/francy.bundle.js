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
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    if (!callbackHandler) {
      throw new Error("Missing Callback Handler!");
    }
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
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, AbstractCanvas);

    this.options = {
      verbose: verbose,
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
      $('#' + self.windowId).append(new _menu2.default(this.options).getMenuHtml(json));
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

  function Draw(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Draw);

    return _possibleConstructorReturn(this, (Draw.__proto__ || Object.getPrototypeOf(Draw)).call(this, { verbose: verbose, callbackHandler: callbackHandler }));
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
  function MenuUtils(_ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MenuUtils);

    this.options = {
      verbose: verbose,
      callbackHandler: callbackHandler
    };
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
  function Modal(config, _ref) {
    var _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        callbackHandler = _ref.callbackHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FsbGJhY2suanMiLCJzcmMvaGFuZGxlci9jYW52YXMuanMiLCJzcmMvaGFuZGxlci9kcmF3LmpzIiwic3JjL2hhbmRsZXIvbWVudS5qcyIsInNyYy90cmFja2VyL2NoYW5nZS5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyIsInNyYy91dGlsL2xvZ2dlci5qcyIsInNyYy91dGlsL21vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSx3QkFBa0Q7QUFBQSw0QkFBcEMsT0FBb0M7QUFBQSxRQUFwQyxPQUFvQyxnQ0FBMUIsS0FBMEI7QUFBQSxRQUFuQixlQUFtQixRQUFuQixlQUFtQjs7QUFBQTs7QUFDaEQsUUFBSSxDQUFDLGVBQUwsRUFBc0I7QUFDcEIsWUFBTSxJQUFJLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0Q7QUFDRCxTQUFLLE9BQUwsR0FBZTtBQUNiLGVBQVMsT0FESTtBQUViLHVCQUFpQjtBQUZKLEtBQWY7QUFJQSxRQUFJLENBQUMsRUFBTCxFQUFTO0FBQ1AsWUFBTSxJQUFJLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7MkJBSU8sSyxFQUFPO0FBQ1osVUFBSSxPQUFPLG9CQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBWDtBQUNBLFVBQUksSUFBSixFQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsZUFBTyxtQkFBUyxLQUFLLE9BQWQsRUFBdUIsTUFBdkIsQ0FBOEIsSUFBOUIsQ0FBUDtBQUNEO0FBQ0Y7Ozs7OztBQUdILFFBQVEsTUFBUixHQUFpQixPQUFPLE1BQVAsR0FBZ0IsTUFBakM7Ozs7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aUJBQVM7QUFDUCxjQUFJLGNBQVc7QUFDYjtBQUNBLGlCQUFLLE9BQUwsQ0FBYSxlQUFiLENBQTZCLEtBQUssTUFBbEM7QUFDQSxjQUFFLElBQUYsRUFBUSxNQUFSLENBQWUsT0FBZjtBQUNELFdBTE07QUFNUCxrQkFBUSxrQkFBVztBQUNqQixjQUFFLElBQUYsRUFBUSxNQUFSLENBQWUsT0FBZjtBQUNEO0FBUk07QUFOb0IsT0FBL0I7QUFpQkQ7Ozs7OztrQkEzRGtCLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBEcmF3IGZyb20gXCIuL2hhbmRsZXIvZHJhd1wiO1xuaW1wb3J0IFRyYWNrZXIgZnJvbSBcIi4vdHJhY2tlci9jaGFuZ2VcIjtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gbWVudUFjdGlvbkhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqIEBwYXJhbSBjaGFuZ2VUcmFja2VySGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBkZXRlY3RlZCBieSB0aGUgQ2hhbmdlVHJhY2tlciwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQ2FsbGJhY2sgSGFuZGxlciFcIik7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCB0byBnZXQgZHJhd25cbiAgICovXG4gIGhhbmRsZShpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHJldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZShqc29uKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vdXRpbC9tb2RhbCc7XG5cbi8vIEZJWE1FIGh0dHA6Ly9sb3JlZGFuYWNpcnN0ZWEuZ2l0aHViLmlvL2VzNi1kZXNpZ24tcGF0dGVybnMvXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChjb25maWcuY2FsbGJhY2ssIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICB9XG59XG4iLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICB3aWR0aDoganNvbi5jYW52YXMudyxcbiAgICAgICAgaGVpZ2h0OiBqc29uLmNhbnZhcy5oXG4gICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xuICAgICAgLy8gdXBkYXRlIGVsZW1lbnRcbiAgICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3NlbGYud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXG4gICAgJChgIyR7c2VsZi53aW5kb3dJZH1gKS5kaWFsb2coe1xuICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gYnVpbGQgbWVudVxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKG5ldyBNZW51VXRpbHModGhpcy5vcHRpb25zKS5nZXRNZW51SHRtbChqc29uKSk7XG4gICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcblxuICAgIC8vIGJ1aWxkIGNhbnZhc1xuICAgIHNlbGYuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7c2VsZi5jYW52YXNJZH1gKTtcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtzZWxmLmNhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBkaXYjJHtzZWxmLndpbmRvd0lkfWApLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgc2VsZi5jYW52YXNJZCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7c2VsZi5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcbiAgICBzZWxmLmNhbnZhc1xuICAgICAgLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMudylcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgc3VwZXIoeyB2ZXJib3NlOiB2ZXJib3NlLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIGhhbmRsZShqc29uKSB7XG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKGpzb24pO1xuICAgIHRoaXMuYWRkKGpzb24pO1xuICB9XG5cbiAgYWRkKGpzb24pIHtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgY2FudmFzTGlua3MgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmxpbmtzKTtcblxuICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcyxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIHN2ZyA9IHN2Zy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIHpvb21lZCkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICB9XG5cbiAgICBzdmcuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEoY2FudmFzTGlua3MpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBDYW52YXMuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW1wb3J0IENhbGxiYWNrIGZyb20gJy4vY2FsbGJhY2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gIH1cblxuICBnZXRNZW51SHRtbChqc29uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciAkaHRtbCA9ICQoJzxkaXY+JywgeyBjbGFzczogJ21lbnUnIH0pO1xuICAgIHNlbGYuX2J1aWxkRGVmYXVsdE1lbnUoKS5hcHBlbmRUbygkaHRtbCk7XG4gICAgZm9yIChsZXQgbWVudSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgJG1lbnUgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KS5hcHBlbmRUbygkaHRtbCk7XG4gICAgICBpZiAobWVudS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnUubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwobWVudS50aXRsZSArIFwiJm5ic3A7JiM5NjYwO1wiKS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIHZhciAkc3VibWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayhzdWJtZW51LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KHN1Ym1lbnUudGl0bGUpLmFwcGVuZFRvKCRzdWJtZW51KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KG1lbnUudGl0bGUpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICRodG1sO1xuICB9XG5cbiAgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgdmFyICRkaXYgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KVxuICAgIHZhciAkY29udGVudCA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwoJ0ZpbGUmbmJzcDsmIzk2NjA7JykuYXBwZW5kVG8oJGRpdik7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIlNhdmUgdG8gUE5HXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQWJvdXRcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJDbG9zZVwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJGNvbnRlbnQuYXBwZW5kVG8oJGRpdik7XG4gICAgcmV0dXJuICRkaXY7XG4gIH1cblxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGRlZmF1bHQgbWV0aG9kcyB0byBoYW5kbGUgY2hhbmdlcyBvbiBhIG1vZGVsIG9iamVjdC5cbiAqIEl0IHdvcmtzIGJ5IHRoZSBtZWFucyBvZiBhIFByb3h5IHRvIHRyYWNrIGNoYW5nZXMgYW5kIGVuc3VyZXMgc3Vic2NyaWJlcnNcbiAqIGFyZSBub3RpZmllZCBvZiB0aGVzZSBjaGFuZ2VzIG9uIGEgdGltZSBiYXNpcyAoMSBzZWNvbmQgZGVmYXVsdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGluc3RhbmNlIG9mIE1vZGVsVHJhY2tlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIHRoZSBvYmplY3Qgb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlcy5cbiAgICogQHBhcmFtIHZlcmJvc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgeyB2ZXJib3NlID0gZmFsc2UsIHRocm90dGxlID0gMTAwMCB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBsaXN0IG9mIGNoYW5nZSBzdWJzY3JpYmVycy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBwcm94eSB0aGF0IGhhbmRsZXMgYSBkaXJ0eSBmbGFnIHdoZW4gb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge1Byb3h5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gZmxhZyB3aGVuIHRoZSBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3luYyBsaXN0ZW5lcnMgZXZlcnkgc2Vjb25kLCBpZiBkYXRhIGlzIGRpcnR5XG4gICAgICogQHR5cGUge3NldEludGVydmFsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgcmVjZWl2ZXJbcHJvcGVydHldICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0ID8gdGFyZ2V0W2tleV0gOiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHRvIHN5bmMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB1bnJlZ2lzdGVyIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZCBwcmV2aW91c2x5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB1bnN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZm4gPyBpdGVtIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGV4cGxpY2l0bHkgc3luYyB0aGUgbW9kdWxlIHdpdGggYWxsIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgc3luYygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jYWxsKHRoaXMsIHRoaXMub2JqZWN0KSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cbiAgXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICgkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5sZW5ndGgpIHtcbiAgICAgICQoYCMke3NlbGYuY29uZmlnLmlkfWApLnNob3coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJCgnPGRpdj4nLCB7XG4gICAgICBpZDogc2VsZi5jb25maWcuaWQsXG4gICAgICB0aXRsZTogJ1JlcXVpcmVkIEFyZ3VtZW50cycsXG4gICAgICBjbGFzczogJ3JlcXVpcmVkQXJncydcbiAgICB9KS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXMoc2VsZi5jb25maWcucmVxdWlyZWRBcmdzKSkge1xuICAgICAgJCgnPGxhYmVsPicsIHtcbiAgICAgICAgZm9yOiBhcmcuaWRcbiAgICAgIH0pLnRleHQoYXJnLnRpdGxlKS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8aW5wdXQ+Jywge1xuICAgICAgICBpZDogYXJnLmlkLFxuICAgICAgICBuYW1lOiBhcmcuaWQsXG4gICAgICAgIHR5cGU6IGFyZy50eXBlLFxuICAgICAgICB2YWx1ZTogYXJnLnZhbHVlLFxuICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuY29uZmlnLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB0aGlzLmNoYW5nZSxcbiAgICAgICAga2V5dXA6IHRoaXMuY2hhbmdlLFxuICAgICAgICBwYXN0ZTogdGhpcy5jaGFuZ2VcbiAgICAgIH0pLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgIH1cblxuICAgICQoYCMke3NlbGYuY29uZmlnLmlkfWApLmRpYWxvZyh7XG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyBtb2RhbCBmb3IgY2FsbGJhY2sgWyR7c2VsZi5jb25maWcuaWR9XS4uLmApO1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAgIH0sXG4gICAgICBidXR0b25zOiB7XG4gICAgICAgIE9rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBGSVhNRSByZXF1aXJlcyB2YWxpZGF0aW9uIVxuICAgICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH0sXG4gICAgICAgIENhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5kaWFsb2coXCJjbG9zZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
