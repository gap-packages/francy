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
      }).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGZyYW5jeS5qcyIsInNyY1xcaGFuZGxlclxcY2FudmFzLmpzIiwic3JjXFxoYW5kbGVyXFxkcmF3LmpzIiwic3JjXFxoYW5kbGVyXFxwbG90LmpzIiwic3JjXFx1dGlsXFxpZC11dGlscy5qcyIsInNyY1xcdXRpbFxcanNvbi11dGlscy5qcyIsInNyY1xcdXRpbFxcbG9nZ2VyLmpzIiwic3JjXFx1dGlsXFxtZW51LXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSxvQkFBNEg7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQS9HLE9BQStHO0FBQUEsUUFBL0csT0FBK0csZ0NBQXJHLEtBQXFHO0FBQUEsNkJBQTlGLFFBQThGO0FBQUEsUUFBOUYsUUFBOEYsaUNBQW5GLE1BQW1GO0FBQUEscUNBQTNFLGlCQUEyRTtBQUFBLFFBQTNFLGlCQUEyRSx5Q0FBdkQsUUFBUSxHQUErQztBQUFBLHFDQUExQyxvQkFBMEM7QUFBQSxRQUExQyxvQkFBMEMseUNBQW5CLFFBQVEsR0FBVzs7QUFBQTs7QUFDMUgsU0FBSyxPQUFMLEdBQWU7QUFDYixlQUFTLE9BREk7QUFFYixnQkFBVSxRQUZHO0FBR2IsNEJBQXNCLG9CQUhUO0FBSWIseUJBQW1CO0FBSk4sS0FBZjtBQU1BLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLHdGQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxPQUFPLEVBQVosRUFBZ0I7QUFDZCxZQUFNLElBQUksS0FBSixDQUFVLDZGQUFWLENBQU47QUFDRDtBQUNELFFBQUksT0FBTyxDQUFQLEtBQWEsVUFBakIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJLEtBQUosQ0FBVSxvR0FBVixDQUFO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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLdkMsb0JBQVEsUUFBUjtBQUNELFdBTkQsTUFNTztBQUNMLHlEQUEyQyxLQUFLLEtBQWhEO0FBQ0Q7QUFDRCxrQkFBUSxRQUFSO0FBQ0Q7QUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQnZCLGFBQU8sSUFBUDtBQUNEOzs7d0NBRTBCO0FBQ3pCLGFBQU8sOExBQVA7QUFDRDs7Ozs7O2tCQXhCa0IsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xyXG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9oYW5kbGVyL2RyYXdcIjtcclxuaW1wb3J0IFBsb3QgZnJvbSBcIi4vaGFuZGxlci9wbG90XCI7XHJcblxyXG4vKipcclxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcclxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XHJcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxyXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XHJcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xyXG4gICAqIEBwYXJhbSBjaGFuZ2VUcmFja2VySGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBkZXRlY3RlZCBieSB0aGUgQ2hhbmdlVHJhY2tlciwgZGVmYXVsdCBjb25zb2xlLmxvZ1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBtZW51QWN0aW9uSGFuZGxlciA9IGNvbnNvbGUubG9nLCBjaGFuZ2VUcmFja2VySGFuZGxlciA9IGNvbnNvbGUubG9nfSA9IHt9KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXHJcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcclxuICAgICAgY2hhbmdlVHJhY2tlckhhbmRsZXI6IGNoYW5nZVRyYWNrZXJIYW5kbGVyLFxyXG4gICAgICBtZW51QWN0aW9uSGFuZGxlcjogbWVudUFjdGlvbkhhbmRsZXJcclxuICAgIH07XHJcbiAgICBpZiAoIWpRdWVyeSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pRdWVyeSBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEpRdWVyeSB2My4xLjErLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFqUXVlcnkudWkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKUXVlcnlVSSBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEpRdWVyeVVJIHYxLjEyLjErLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBfICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5kZXJzY29yZUpTIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgVW5kZXJzY29yZUpTIHYxLjguMysuJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWQzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmRyYXcgPSBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5wbG90ID0gbmV3IFBsb3QodGhpcy5vcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cclxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCB0byBnZXQgZHJhd25cclxuICAgKi9cclxuICBoYW5kbGUoaW5wdXQpIHtcclxuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcclxuICAgIGlmIChqc29uKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhgRnJhbmN5IHdpbGwgWyR7anNvbi5hZ2VudC5tZXRob2R9XSB0aGUgZm9sbG93aW5nIG9iamVjdDogYCwganNvbik7XHJcbiAgICAgIHN3aXRjaCAoanNvbi5hZ2VudC5tZXRob2QpIHtcclxuICAgICAgICBjYXNlICdkcmF3JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcuaGFuZGxlKGpzb24pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncGxvdCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5wbG90LmhhbmRsZShqc29uKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske2pzb24uYWdlbnQubWV0aG9kfV0gaXMgbm90IGEgdmFsaWQgbWV0aG9kIGZvciBGcmFuY3khIFZhbGlkIG1ldGhvZHMgYXJlOiBbZHJhdywgcGxvdF0uYCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0cy5GcmFuY3kgPSB3aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xyXG4iLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcclxuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuLi91dGlsL21lbnUtdXRpbHMnO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcclxuXHJcbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XHJcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xyXG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcclxuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcclxuICAgICAgcmV0dXJuIGQzLnN5bWJvbERpYW1vbmQ7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcclxuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcclxuICAgICAgcmV0dXJuIGQzLnN5bWJvbFN0YXI7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHt2ZXJib3NlOiB2ZXJib3NlfSk7XHJcbiAgfVxyXG5cclxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcclxuICAgIGlmICghanNvbikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04gb2JqZWN0IHRvIHJlbmRlciBpcyBlbXB0eSEnKTtcclxuICAgIH1cclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIC8vIGJ1aWxkIHRoZSBkaWFsb2cgd2luZG93XHJcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XHJcbiAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcclxuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XHJcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xyXG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xyXG4gICAgICAkKCc8ZGl2PicsIHtcclxuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcclxuICAgICAgICB0aXRsZToganNvbi5jYW52YXMudGl0bGUsXHJcbiAgICAgICAgd2lkdGg6IGpzb24uY2FudmFzLncsXHJcbiAgICAgICAgaGVpZ2h0OiBqc29uLmNhbnZhcy5oXHJcbiAgICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XHJcbiAgICAgIC8vIHVwZGF0ZSBlbGVtZW50XHJcbiAgICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xyXG4gICAgfVxyXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxyXG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XHJcbiAgICB9XHJcbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXHJcbiAgICAkKGAjJHtzZWxmLndpbmRvd0lkfWApLmRpYWxvZyh7XHJcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3Npbmcgd2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xyXG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XHJcbiAgICAvLyBidWlsZCBtZW51XHJcbiAgICAkKE1lbnVVdGlscy5nZXRNZW51SHRtbChqc29uKSkuYXBwZW5kVG8oYCMke3NlbGYud2luZG93SWR9YCk7XHJcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xyXG5cclxuICAgIC8vIGJ1aWxkIGNhbnZhc1xyXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xyXG4gICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3NlbGYuY2FudmFzSWR9YCk7XHJcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xyXG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xyXG4gICAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgZGl2IyR7c2VsZi53aW5kb3dJZH1gKS5hcHBlbmQoJ3N2ZycpXHJcbiAgICAgICAgLmF0dHIoJ2lkJywgc2VsZi5jYW52YXNJZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XHJcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcclxuICAgIHNlbGYuY2FudmFzXHJcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKVxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XHJcbiAgICBzdXBlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlKGpzb24pIHtcclxuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhqc29uKTtcclxuICAgIHRoaXMuYWRkKGpzb24pO1xyXG4gIH1cclxuXHJcbiAgYWRkKGpzb24pIHtcclxuXHJcbiAgICB2YXIgc3ZnID0gdGhpcy5jYW52YXMsXHJcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxyXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xyXG5cclxuICAgIHN2ZyA9IHN2Zy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIHpvb21lZCkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcclxuXHJcbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XHJcbiAgICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxyXG4gICAgICAuZGF0YShbJ2Fycm93J10pXHJcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXHJcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcclxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXHJcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXHJcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcclxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXHJcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcclxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcclxuICAgICAgLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xyXG5cclxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxyXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcclxuXHJcbiAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyXHJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xyXG5cclxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcclxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcclxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXHJcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxyXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcclxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcclxuXHJcbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxyXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lJylcclxuICAgICAgLmRhdGEoanNvbi5saW5rcylcclxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxyXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApO1xyXG4gICAgLy8uc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcclxuXHJcblxyXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGVzJykuc2VsZWN0QWxsKCdnLm5vZGVzJylcclxuICAgICAgLmRhdGEoanNvbi5ub2RlcywgZCA9PiBkLmlkKVxyXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxyXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBDYW52YXMuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXHJcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcclxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxyXG4gICAgICAuY2FsbChkMy5kcmFnKClcclxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXHJcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcclxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXHJcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcclxuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcclxuXHJcbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxyXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcclxuICAgICAgLmRhdGEoanNvbi5ub2RlcywgZCA9PiBkLmlkKVxyXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxyXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xyXG5cclxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xyXG4gICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xlZ2VuZCcpXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxyXG4gICAgICAuZGF0YShkMy5tYXAoanNvbi5ub2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKSwgZCA9PiBkLmlkKVxyXG4gICAgICAuZW50ZXIoKVxyXG4gICAgICAuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2QubGF5ZXJ9YClcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uIChkLCBpKSB7XHJcbiAgICAgICAgbGV0IHggPSAwO1xyXG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xyXG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7eH0sJHt5fSlgO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZWdlbmQuYXBwZW5kKCdyZWN0JylcclxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXHJcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxyXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxyXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xyXG5cclxuICAgIGxlZ2VuZC5hcHBlbmQoJ3RleHQnKVxyXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXHJcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxyXG4gICAgICAuYXR0cigneScsIDEwIC0gMilcclxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xyXG5cclxuICAgIHNpbXVsYXRpb24ubm9kZXMoanNvbi5ub2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xyXG5cclxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhqc29uLmxpbmtzKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XHJcbiAgICAgIGxpbmtcclxuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXHJcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxyXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcclxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xyXG5cclxuICAgICAgbm9kZVxyXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXHJcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xyXG5cclxuICAgICAgbGFiZWxcclxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggKiAyIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXHJcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUpKTtcclxuXHJcbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENPTExJU0lPTlxyXG4gICAgdmFyIHBhZGRpbmcgPSAxLCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlc1xyXG4gICAgICByYWRpdXMgPSAyMDtcclxuXHJcbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XHJcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGpzb24ubm9kZXMpO1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBsZXQgcmIgPSAyICogcmFkaXVzICsgcGFkZGluZyxcclxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxyXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXHJcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcclxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xyXG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uIChxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZC54IC0gcXVhZC5wb2ludC54LFxyXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXHJcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgICAgICAgICAgaWYgKGwgPCByYikge1xyXG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcclxuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xyXG4gICAgICAgICAgICAgIGQueSAtPSB5ICo9IGw7XHJcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XHJcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBISUdITElHSFRcclxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cclxuICAgIHZhciB0b2dnbGUgPSAwO1xyXG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XHJcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAganNvbi5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXHJcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XHJcbiAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcclxuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xyXG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xyXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcclxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xyXG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XHJcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXHJcbiAgICAgICAgdG9nZ2xlID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXHJcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICB0b2dnbGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xyXG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcclxuICAgICAgZC5meCA9IGQueDtcclxuICAgICAgZC5meSA9IGQueTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcclxuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XHJcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XHJcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xyXG4gICAgICBkLmZ4ID0gbnVsbDtcclxuICAgICAgZC5meSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxvdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcclxuXHJcbiAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxyXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnZnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XSpudW1lcmljYWwgaWQqJ1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cclxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xyXG4gICAgcmV0dXJuIGBmcmFuY3lXaW5kb3cke2NhbnZhc0lkfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXHJcbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0Q2FudmFzSWQoY2FudmFzSWQpIHtcclxuICAgIHJldHVybiBgZnJhbmN5Q2FudmFzJHtjYW52YXNJZH1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cclxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xyXG4gICAgcmV0dXJuIGBmcmFuY3lPYmplY3Qke29iamVjdElkfWA7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB3ZSB3YW50IHRvIHBhcnNlXHJcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XHJcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XHJcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcclxuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAganNvbi5hZ2VudCA9IF8ub2JqZWN0KFsnbmFtZScsICdtZXRob2QnLCAndHlwZSddLCBqc29uLmFnZW50LnNwbGl0KCcuJykpO1xyXG4gICAgICAgIHJldHVybiBqc29uLmFnZW50Lm5hbWUgPT09ICdmcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXHJcbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdmcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdKm51bWVyaWNhbCBpZConXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XHJcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xyXG4gIH1cclxuXHJcbiAgZGVidWcobWVzc2FnZSkge1xyXG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xyXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5mbyhtZXNzYWdlKSB7XHJcbiAgICBjb25zb2xlLmluZm8obWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XHJcblxyXG4gIC8vIFRPRE8gaGFuZGxlIGFjdGlvbnNcclxuICBzdGF0aWMgZ2V0TWVudUh0bWwoZGF0YSkge1xyXG4gICAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cIm1lbnVcIj4nO1xyXG4gICAgaHRtbCArPSBNZW51VXRpbHMuX2J1aWxkRGVmYXVsdE1lbnUoKTtcclxuICAgIGZvciAobGV0IG1lbnUgb2YgZGF0YS5tZW51cykge1xyXG4gICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj4nO1xyXG4gICAgICBpZiAobWVudS5tZW51cyAmJiBtZW51Lm1lbnVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+JHttZW51LnRpdGxlfSZuYnNwOyYjODU5NTs8L2J1dHRvbj48ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPmA7XHJcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBtZW51Lm1lbnVzKSB7XHJcbiAgICAgICAgICBodG1sICs9IGA8YSBocmVmPVwiI1wiPiR7c3VibWVudS50aXRsZX08L2E+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCArPSAnPC9kaXY+J1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGh0bWwgKz0gYDxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj4ke21lbnUudGl0bGV9PC9idXR0b24+YDtcclxuICAgICAgfVxyXG4gICAgICBodG1sICs9ICc8L2Rpdj4nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfYnVpbGREZWZhdWx0TWVudSgpIHtcclxuICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPkZpbGUmbmJzcDsmIzg1OTU7PC9idXR0b24+PGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj48YSBocmVmPVwiI1wiPlNhdmUgUE5HPC9hPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PGEgaHJlZj1cIiNcIj5DbG9zZTwvYT48L2Rpdj48L2Rpdj4nO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
