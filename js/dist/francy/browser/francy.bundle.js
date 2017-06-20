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

var _plot = require("./handler/plot");

var _plot2 = _interopRequireDefault(_plot);

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
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === undefined ? 'body' : _ref$appendTo,
        _ref$menuActionHandle = _ref.menuActionHandler,
        menuActionHandler = _ref$menuActionHandle === undefined ? console.log : _ref$menuActionHandle,
        _ref$changeTrackerHan = _ref.changeTrackerHandler,
        changeTrackerHandler = _ref$changeTrackerHan === undefined ? console.log : _ref$changeTrackerHan;

    _classCallCheck(this, Francy);

    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      changeTrackerHandler: changeTrackerHandler,
      menuActionHandler: menuActionHandler
    };
    if (!jQuery) {
      throw new Error('JQuery is not imported! Francy won\'t work without it... please import JQuery v3.1.1+.');
    }
    if (!jQuery.ui) {
      throw new Error('JQueryUI is not imported! Francy won\'t work without it... please import JQueryUI v1.12.1+.');
    }
    if (typeof _ !== 'function') {
      throw new Error('UnderscoreJS is not imported! Francy won\'t work without it... please import UnderscoreJS v1.8.3+.');
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.draw = new _draw2.default(this.options);
    this.plot = new _plot2.default(this.options);
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
        console.info("Francy will [" + json.agent.method + "] the following object: ", json);
        switch (json.agent.method) {
          case 'draw':
            return this.draw.handle(json);
            break;
          case 'plot':
            return this.plot.handle(json);
            break;
          default:
            throw new Error("[" + json.agent.method + "] is not a valid method for Francy! Valid methods are: [draw, plot].");
            break;
        }
      }
    }
  }]);

  return Francy;
}();

exports.Francy = window.Francy = Francy;

},{"./handler/draw":3,"./handler/plot":4,"./util/json-utils":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = require('../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

var _menuUtils = require('../util/menu-utils');

var _menuUtils2 = _interopRequireDefault(_menuUtils);

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
      $(_menuUtils2.default.getMenuHtml(json)).appendTo('#' + self.windowId);
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

},{"../util/id-utils":5,"../util/logger":7,"../util/menu-utils":8}],3:[function(require,module,exports){
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

      var link = svg.append('g').attr('class', 'links').selectAll('line').data(json.links).enter().append('line').attr('class', 'link').attr('id', function (d) {
        return d.source + ',' + d.target;
      });
      //.style('marker-end', 'url(#arrow)');


      var node = svg.append('g').attr('class', 'nodes').selectAll('g.nodes').data(json.nodes, function (d) {
        return d.id;
      }).enter().append('path').attr('d', d3.symbol().type(function (d) {
        return _canvas2.default.getSymbol(d.type);
      }).size(function (d) {
        return d.size * 90;
      })).attr('transform', 'translate(0,0)').attr('class', function (d) {
        return 'node' + (d.highlight ? ' highlight' : '');
      }).attr('id', function (d) {
        return d.id;
      }).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
      //.on('contextmenu', connectedNodes) //rightclick
      ).on('click', connectedNodes);

      node.append('title').text(function (d) {
        return 'ID:\t' + d.id + '\nLayer:\t' + d.layer;
      });

      var label = svg.append('g').attr('class', 'labels').selectAll('text').data(json.nodes, function (d) {
        return d.id;
      }).enter().append('text').attr('class', 'label').text(function (d) {
        return d.title;
      });

      var legend = this.canvas.append('g').attr('class', 'legend').selectAll('g').data(d3.map(json.nodes, function (d) {
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

      simulation.nodes(json.nodes).on('tick', ticked);

      simulation.force('link').links(json.links);

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
          return d.x - d.title.length * 2 - Math.sqrt(d.size);
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
        var quadTree = d3.quadtree(json.nodes);
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

      for (var i = 0; i < json.nodes.length; i++) {
        linkedByIndex[i + ',' + i] = 1;
      }

      json.links.forEach(function (d) {
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

},{"./canvas":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plot = function Plot() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, Plot);
};

exports.default = Plot;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'francy[Window|Canvas|Object]*numerical id*'
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
      return "francyWindow" + canvasId;
    }

    /**
     * Returns the id for a canvas based on a canvas id.
     * @param canvasId - the canvas id
     * @returns {string} the canvas element id.
     */

  }, {
    key: "getCanvasId",
    value: function getCanvasId(canvasId) {
      return "francyCanvas" + canvasId;
    }

    /**
     * Returns the id for an object based on a object id.
     * @param objectId - the object id
     * @returns {string} the element object id.
     */

  }, {
    key: "getObjectId",
    value: function getObjectId(objectId) {
      return "francyObject" + objectId;
    }
  }]);

  return IDUtils;
}();

exports.default = IDUtils;

},{}],6:[function(require,module,exports){
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
     * @param input - the input we want to parse
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
          json.agent = _.object(['name', 'method', 'type'], json.agent.split('.'));
          return json.agent.name === 'francy' ? json : undefined;
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

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'francy[Window|Canvas|Object]*numerical id*'
 */
var Logger = function () {
  function Logger() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Logger);

    this.verbose = verbose;
  }

  _createClass(Logger, [{
    key: "debug",
    value: function debug(message) {
      if (this.verbose) {
        console.debug(message);
      }
    }
  }, {
    key: "info",
    value: function info(message) {
      console.info(message);
    }
  }, {
    key: "error",
    value: function error(message, _error) {
      console.error(message, _error);
    }
  }]);

  return Logger;
}();

exports.default = Logger;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuUtils = function () {
  function MenuUtils() {
    _classCallCheck(this, MenuUtils);
  }

  _createClass(MenuUtils, null, [{
    key: 'getMenuHtml',


    // TODO handle actions
    value: function getMenuHtml(data) {
      var html = '<div class="menu">';
      html += MenuUtils._buildDefaultMenu();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data.menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var menu = _step.value;

          html += '<div class="dropdown">';
          if (menu.menus && menu.menus.length > 0) {
            html += '<button class="dropdown-button">' + menu.title + '&nbsp;&#8595;</button><div class="dropdown-content">';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = menu.menus[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var submenu = _step2.value;

                html += '<a href="#">' + submenu.title + '</a>';
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

            html += '</div>';
          } else {
            html += '<button class="dropdown-button">' + menu.title + '</button>';
          }
          html += '</div>';
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

      return html;
    }
  }, {
    key: '_buildDefaultMenu',
    value: function _buildDefaultMenu() {
      return '<div class="dropdown"><button class="dropdown-button">File&nbsp;&#8595;</button><div class="dropdown-content"><a href="#">Save PNG</a><a href="#">About</a><a href="#">Close</a></div></div>';
    }
  }]);

  return MenuUtils;
}();

exports.default = MenuUtils;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FudmFzLmpzIiwic3JjL2hhbmRsZXIvZHJhdy5qcyIsInNyYy9oYW5kbGVyL3Bsb3QuanMiLCJzcmMvdXRpbC9pZC11dGlscy5qcyIsInNyYy91dGlsL2pzb24tdXRpbHMuanMiLCJzcmMvdXRpbC9sb2dnZXIuanMiLCJzcmMvdXRpbC9tZW51LXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSxvQkFBNEg7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQS9HLE9BQStHO0FBQUEsUUFBL0csT0FBK0csZ0NBQXJHLEtBQXFHO0FBQUEsNkJBQTlGLFFBQThGO0FBQUEsUUFBOUYsUUFBOEYsaUNBQW5GLE1BQW1GO0FBQUEscUNBQTNFLGlCQUEyRTtBQUFBLFFBQTNFLGlCQUEyRSx5Q0FBdkQsUUFBUSxHQUErQztBQUFBLHFDQUExQyxvQkFBMEM7QUFBQSxRQUExQyxvQkFBMEMseUNBQW5CLFFBQVEsR0FBVzs7QUFBQTs7QUFDMUgsU0FBSyxPQUFMLEdBQWU7QUFDYixlQUFTLE9BREk7QUFFYixnQkFBVSxRQUZHO0FBR2IsNEJBQXNCLG9CQUhUO0FBSWIseUJBQW1CO0FBSk4sS0FBZjtBQU1BLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLHdGQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxPQUFPLEVBQVosRUFBZ0I7QUFDZCxZQUFNLElBQUksS0FBSixDQUFVLDZGQUFWLENBQU47QUFDRDtBQUNELFFBQUksT0FBTyxDQUFQLEtBQWEsVUFBakIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJLEtBQUosQ0FBVSxvR0FBVixDQUFOO0FBQ0Q7QUFDRCxRQUFJ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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLdkMsb0JBQVEsUUFBUjtBQUNELFdBTkQsTUFNTztBQUNMLHlEQUEyQyxLQUFLLEtBQWhEO0FBQ0Q7QUFDRCxrQkFBUSxRQUFSO0FBQ0Q7QUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQnZCLGFBQU8sSUFBUDtBQUNEOzs7d0NBRTBCO0FBQ3pCLGFBQU8sOExBQVA7QUFDRDs7Ozs7O2tCQXhCa0IsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgUGxvdCBmcm9tIFwiLi9oYW5kbGVyL3Bsb3RcIjtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gbWVudUFjdGlvbkhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqIEBwYXJhbSBjaGFuZ2VUcmFja2VySGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBkZXRlY3RlZCBieSB0aGUgQ2hhbmdlVHJhY2tlciwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8gPSAnYm9keScsIG1lbnVBY3Rpb25IYW5kbGVyID0gY29uc29sZS5sb2csIGNoYW5nZVRyYWNrZXJIYW5kbGVyID0gY29uc29sZS5sb2d9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2hhbmdlVHJhY2tlckhhbmRsZXI6IGNoYW5nZVRyYWNrZXJIYW5kbGVyLFxuICAgICAgbWVudUFjdGlvbkhhbmRsZXI6IG1lbnVBY3Rpb25IYW5kbGVyXG4gICAgfTtcbiAgICBpZiAoIWpRdWVyeSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKUXVlcnkgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBKUXVlcnkgdjMuMS4xKy4nKTtcbiAgICB9XG4gICAgaWYgKCFqUXVlcnkudWkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlF1ZXJ5VUkgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBKUXVlcnlVSSB2MS4xMi4xKy4nKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBfICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZGVyc2NvcmVKUyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IFVuZGVyc2NvcmVKUyB2MS44LjMrLicpO1xuICAgIH1cbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICB0aGlzLmRyYXcgPSBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMucGxvdCA9IG5ldyBQbG90KHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCB0byBnZXQgZHJhd25cbiAgICovXG4gIGhhbmRsZShpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgY29uc29sZS5pbmZvKGBGcmFuY3kgd2lsbCBbJHtqc29uLmFnZW50Lm1ldGhvZH1dIHRoZSBmb2xsb3dpbmcgb2JqZWN0OiBgLCBqc29uKTtcbiAgICAgIHN3aXRjaCAoanNvbi5hZ2VudC5tZXRob2QpIHtcbiAgICAgICAgY2FzZSAnZHJhdyc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZHJhdy5oYW5kbGUoanNvbik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Bsb3QnOlxuICAgICAgICAgIHJldHVybiB0aGlzLnBsb3QuaGFuZGxlKGpzb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWyR7anNvbi5hZ2VudC5tZXRob2R9XSBpcyBub3QgYSB2YWxpZCBtZXRob2QgZm9yIEZyYW5jeSEgVmFsaWQgbWV0aG9kcyBhcmU6IFtkcmF3LCBwbG90XS5gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgTWVudVV0aWxzIGZyb20gJy4uL3V0aWwvbWVudS11dGlscyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RDYW52YXMge1xuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoe3ZlcmJvc2U6IHZlcmJvc2V9KTtcbiAgfVxuXG4gIF9yZW5kZXJDYW52YXMoanNvbikge1xuICAgIGlmICghanNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OIG9iamVjdCB0byByZW5kZXIgaXMgZW1wdHkhJyk7XG4gICAgfVxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvLyBidWlsZCB0aGUgZGlhbG9nIHdpbmRvd1xuICAgIHNlbGYud2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgICAgJCgnPGRpdj4nLCB7XG4gICAgICAgIGlkOiBzZWxmLndpbmRvd0lkLFxuICAgICAgICB0aXRsZToganNvbi5jYW52YXMudGl0bGUsXG4gICAgICAgIHdpZHRoOiBqc29uLmNhbnZhcy53LFxuICAgICAgICBoZWlnaHQ6IGpzb24uY2FudmFzLmhcbiAgICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxuICAgICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBmb3JjZSB0aGUgZGlhbG9nIHRvIG9wZW5cbiAgICAkKGAjJHtzZWxmLndpbmRvd0lkfWApLmRpYWxvZyh7XG4gICAgICBjbG9zZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gYnVpbGQgbWVudVxuICAgICQoTWVudVV0aWxzLmdldE1lbnVIdG1sKGpzb24pKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuXG4gICAgLy8gYnVpbGQgY2FudmFzXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBzZWxmLmNhbnZhc0lkKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGlmIG5lZWRlZFxuICAgIHNlbGYuY2FudmFzXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpXG4gIH1cblxufSIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IGV4dGVuZHMgQ2FudmFzIHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgc3VwZXIoe3ZlcmJvc2U6IHZlcmJvc2V9KTtcbiAgfVxuXG4gIGhhbmRsZShqc29uKSB7XG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKGpzb24pO1xuICAgIHRoaXMuYWRkKGpzb24pO1xuICB9XG5cbiAgYWRkKGpzb24pIHtcblxuICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcyxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIHN2ZyA9IHN2Zy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIHpvb21lZCkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICB9XG5cbiAgICBzdmcuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEoanNvbi5saW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApO1xuICAgIC8vLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoanNvbi5ub2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IENhbnZhcy5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVsJylcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XG5cbiAgICB2YXIgbGVnZW5kID0gdGhpcy5jYW52YXNcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXG4gICAgICAuc2VsZWN0QWxsKCdnJylcbiAgICAgIC5kYXRhKGQzLm1hcChqc29uLm5vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIGxldCB4ID0gMDtcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xuICAgICAgfSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcbiAgICAgIC5hdHRyKCd3aWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLmF0dHIoJ3N0eWxlJywgJ2ZvbnQtc2l6ZTogMTBweDsnKVxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcbiAgICAgIC50ZXh0KGQgPT4gYEluZGV4ICR7ZC5sYXllcn1gKTtcblxuICAgIHNpbXVsYXRpb24ubm9kZXMoanNvbi5ub2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGpzb24ubGlua3MpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IHtcbiAgICAgICAgICByZXR1cm4gZC54IC0gZC50aXRsZS5sZW5ndGggKiAyIC0gTWF0aC5zcXJ0KGQuc2l6ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoanNvbi5ub2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uIChxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGpzb24ubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbG90IHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG5cbiAgfVxuXG59IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeVdpbmRvdyR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lDYW52YXMke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeU9iamVjdCR7b2JqZWN0SWR9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB3ZSB3YW50IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAganNvbi5hZ2VudCA9IF8ub2JqZWN0KFsnbmFtZScsICdtZXRob2QnLCAndHlwZSddLCBqc29uLmFnZW50LnNwbGl0KCcuJykpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudC5uYW1lID09PSAnZnJhbmN5JyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgLy8gVE9ETyBoYW5kbGUgYWN0aW9uc1xuICBzdGF0aWMgZ2V0TWVudUh0bWwoZGF0YSkge1xuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJtZW51XCI+JztcbiAgICBodG1sICs9IE1lbnVVdGlscy5fYnVpbGREZWZhdWx0TWVudSgpO1xuICAgIGZvciAobGV0IG1lbnUgb2YgZGF0YS5tZW51cykge1xuICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+JztcbiAgICAgIGlmIChtZW51Lm1lbnVzICYmIG1lbnUubWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+JHttZW51LnRpdGxlfSZuYnNwOyYjODU5NTs8L2J1dHRvbj48ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPmA7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgbWVudS5tZW51cykge1xuICAgICAgICAgIGh0bWwgKz0gYDxhIGhyZWY9XCIjXCI+JHtzdWJtZW51LnRpdGxlfTwvYT5gO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gJzwvZGl2PidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0bWwgKz0gYDxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj4ke21lbnUudGl0bGV9PC9idXR0b24+YDtcbiAgICAgIH1cbiAgICAgIGh0bWwgKz0gJzwvZGl2PidcbiAgICB9XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj48YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+RmlsZSZuYnNwOyYjODU5NTs8L2J1dHRvbj48ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPjxhIGhyZWY9XCIjXCI+U2F2ZSBQTkc8L2E+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48YSBocmVmPVwiI1wiPkNsb3NlPC9hPjwvZGl2PjwvZGl2Pic7XG4gIH1cblxufVxuIl19
