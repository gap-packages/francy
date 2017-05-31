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

AbstractCanvas.colors = d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
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
        return d.name;
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
          return d.x - d.name.length * 2 - Math.sqrt(d.size);
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
      input = input.replace(/[\n\r\b\s\\]+|(gap>)/g, '');
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
        for (var _iterator = data.menu[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var menu = _step.value;

          html += '<div class="dropdown">';
          if (menu.submenu && menu.submenu.length > 0) {
            html += '<button class="dropdown-button">' + menu.label + '&nbsp;&#8595;</button><div class="dropdown-content">';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = menu.submenu[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var submenu = _step2.value;

                html += '<a href="#">' + submenu.label + '</a>';
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
            html += '<button class="dropdown-button">' + menu.label + '</button>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZnJhbmN5LmpzIiwic3JjL2hhbmRsZXIvY2FudmFzLmpzIiwic3JjL2hhbmRsZXIvZHJhdy5qcyIsInNyYy9oYW5kbGVyL3Bsb3QuanMiLCJzcmMvdXRpbC9pZC11dGlscy5qcyIsInNyYy91dGlsL2pzb24tdXRpbHMuanMiLCJzcmMvdXRpbC9sb2dnZXIuanMiLCJzcmMvdXRpbC9tZW51LXV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSWEsTSxXQUFBLE07O0FBRVg7Ozs7Ozs7QUFPQSxvQkFBNEg7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQS9HLE9BQStHO0FBQUEsUUFBL0csT0FBK0csZ0NBQXJHLEtBQXFHO0FBQUEsNkJBQTlGLFFBQThGO0FBQUEsUUFBOUYsUUFBOEYsaUNBQW5GLE1BQW1GO0FBQUEscUNBQTNFLGlCQUEyRTtBQUFBLFFBQTNFLGlCQUEyRSx5Q0FBdkQsUUFBUSxHQUErQztBQUFBLHFDQUExQyxvQkFBMEM7QUFBQSxRQUExQyxvQkFBMEMseUNBQW5CLFFBQVEsR0FBVzs7QUFBQTs7QUFDMUgsU0FBSyxPQUFMLEdBQWU7QUFDYixlQUFTLE9BREk7QUFFYixnQkFBVSxRQUZHO0FBR2IsNEJBQXNCLG9CQUhUO0FBSWIseUJBQW1CO0FBSk4sS0FBZjtBQU1BLFFBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxZQUFNLElBQUksS0FBSixDQUFVLHdGQUFWLENBQU47QUFDRDtBQUNELFFBQUksQ0FBQyxPQUFPLEVBQVosRUFBZ0I7QUFDZCxZQUFNLElBQUksS0FBSixDQUFVLDZGQUFWLENBQU47QUFDRDtBQUNELFFBQUksT0FBTyxDQUFQLEtBQWEsVUFBakIsRUFBNkI7QUFDM0IsWUFBTSxJQUFJLEtBQUosQ0FBVSxvR0FBVixDQUFOO0FBQ0Q7QUFDRCxRQUFJ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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSzNDLG9CQUFRLFFBQVI7QUFDRCxXQU5ELE1BTU87QUFDTCx5REFBMkMsS0FBSyxLQUFoRDtBQUNEO0FBQ0Qsa0JBQVEsUUFBUjtBQUNEO0FBZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0J2QixhQUFPLElBQVA7QUFDRDs7O3dDQUUwQjtBQUN6QixhQUFPLDhMQUFQO0FBQ0Q7Ozs7OztrQkF4QmtCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBEcmF3IGZyb20gXCIuL2hhbmRsZXIvZHJhd1wiO1xuaW1wb3J0IFBsb3QgZnJvbSBcIi4vaGFuZGxlci9wbG90XCI7XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBtZW51QWN0aW9uSGFuZGxlciA9IGNvbnNvbGUubG9nLCBjaGFuZ2VUcmFja2VySGFuZGxlciA9IGNvbnNvbGUubG9nfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNoYW5nZVRyYWNrZXJIYW5kbGVyOiBjaGFuZ2VUcmFja2VySGFuZGxlcixcbiAgICAgIG1lbnVBY3Rpb25IYW5kbGVyOiBtZW51QWN0aW9uSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFqUXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlF1ZXJ5IGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5IHYzLjEuMSsuJyk7XG4gICAgfVxuICAgIGlmICghalF1ZXJ5LnVpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pRdWVyeVVJIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5VUkgdjEuMTIuMSsuJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgXyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmRlcnNjb3JlSlMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBVbmRlcnNjb3JlSlMgdjEuOC4zKy4nKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnBsb3QgPSBuZXcgUGxvdCh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXG4gICAqL1xuICBoYW5kbGUoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgRnJhbmN5IHdpbGwgWyR7anNvbi5hZ2VudC5tZXRob2R9XSB0aGUgZm9sbG93aW5nIG9iamVjdDogYCwganNvbik7XG4gICAgICBzd2l0Y2ggKGpzb24uYWdlbnQubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ2RyYXcnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcuaGFuZGxlKGpzb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbG90JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wbG90LmhhbmRsZShqc29uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske2pzb24uYWdlbnQubWV0aG9kfV0gaXMgbm90IGEgdmFsaWQgbWV0aG9kIGZvciBGcmFuY3khIFZhbGlkIG1ldGhvZHMgYXJlOiBbZHJhdywgcGxvdF0uYCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcbiIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuLi91dGlsL21lbnUtdXRpbHMnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcblxuICBzdGF0aWMgY29sb3JzID0gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgX3JlbmRlckNhbnZhcyhqc29uKSB7XG4gICAgaWYgKCFqc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04gb2JqZWN0IHRvIHJlbmRlciBpcyBlbXB0eSEnKTtcbiAgICB9XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIC8vIGJ1aWxkIHRoZSBkaWFsb2cgd2luZG93XG4gICAgc2VsZi53aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgaWQ6IHNlbGYud2luZG93SWQsXG4gICAgICAgIHRpdGxlOiBqc29uLmNhbnZhcy50aXRsZSxcbiAgICAgICAgd2lkdGg6IGpzb24uY2FudmFzLncsXG4gICAgICAgIGhlaWdodDoganNvbi5jYW52YXMuaFxuICAgICAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgIC8vIHVwZGF0ZSBlbGVtZW50XG4gICAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgJHtzZWxmLndpbmRvd0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBkaWFsb2cgdG8gb3BlblxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBNZW51cyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAvLyBidWlsZCBtZW51XG4gICAgJChNZW51VXRpbHMuZ2V0TWVudUh0bWwoanNvbikpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYud2luZG93SWR9YCk7XG5cbiAgICAvLyBidWlsZCBjYW52YXNcbiAgICBzZWxmLmNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3NlbGYuY2FudmFzSWR9YCk7XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7c2VsZi5jYW52YXNJZH1dLi4uYCk7XG4gICAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgZGl2IyR7c2VsZi53aW5kb3dJZH1gKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIHNlbGYuY2FudmFzSWQpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCAke3NlbGYuY2FudmFzSWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaWYgbmVlZGVkXG4gICAgc2VsZi5jYW52YXNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpXG4gICAgICAuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaClcbiAgfVxuXG59IiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgaGFuZGxlKGpzb24pIHtcbiAgICB0aGlzLl9yZW5kZXJDYW52YXMoanNvbik7XG4gICAgdGhpcy5hZGQoanNvbik7XG4gIH1cblxuICBhZGQoanNvbikge1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShqc29uLmxpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YCk7XG4gICAgLy8uc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGpzb24ubm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLm5hbWUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoanNvbi5ub2RlcywgZCA9PiBkLmxheWVyKS52YWx1ZXMoKSwgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgbGVnZW5kTGF5ZXIke2QubGF5ZXJ9YClcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGpzb24ubm9kZXMpLm9uKCd0aWNrJywgdGlja2VkKTtcblxuICAgIHNpbXVsYXRpb24uZm9yY2UoJ2xpbmsnKS5saW5rcyhqc29uLmxpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQueCAtIGQubmFtZS5sZW5ndGggKiAyIC0gTWF0aC5zcXJ0KGQuc2l6ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoanNvbi5ub2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uIChxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGpzb24ubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbG90IHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG5cbiAgfVxuXG59IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeVdpbmRvdyR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lDYW52YXMke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeU9iamVjdCR7b2JqZWN0SWR9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB3ZSB3YW50IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXHNcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAganNvbi5hZ2VudCA9IF8ub2JqZWN0KFsnbmFtZScsICdtZXRob2QnLCAndHlwZSddLCBqc29uLmFnZW50LnNwbGl0KCcuJykpO1xuICAgICAgICByZXR1cm4ganNvbi5hZ2VudC5uYW1lID09PSAnZnJhbmN5JyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgLy8gVE9ETyBoYW5kbGUgYWN0aW9uc1xuICBzdGF0aWMgZ2V0TWVudUh0bWwoZGF0YSkge1xuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJtZW51XCI+JztcbiAgICBodG1sICs9IE1lbnVVdGlscy5fYnVpbGREZWZhdWx0TWVudSgpO1xuICAgIGZvciAobGV0IG1lbnUgb2YgZGF0YS5tZW51KSB7XG4gICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj4nO1xuICAgICAgaWYgKG1lbnUuc3VibWVudSAmJiBtZW51LnN1Ym1lbnUubGVuZ3RoID4gMCkge1xuICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+JHttZW51LmxhYmVsfSZuYnNwOyYjODU5NTs8L2J1dHRvbj48ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPmA7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgbWVudS5zdWJtZW51KSB7XG4gICAgICAgICAgaHRtbCArPSBgPGEgaHJlZj1cIiNcIj4ke3N1Ym1lbnUubGFiZWx9PC9hPmA7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPiR7bWVudS5sYWJlbH08L2J1dHRvbj5gO1xuICAgICAgfVxuICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBfYnVpbGREZWZhdWx0TWVudSgpIHtcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj5GaWxlJm5ic3A7JiM4NTk1OzwvYnV0dG9uPjxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+PGEgaHJlZj1cIiNcIj5TYXZlIFBORzwvYT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjxhIGhyZWY9XCIjXCI+Q2xvc2U8L2E+PC9kaXY+PC9kaXY+JztcbiAgfVxuXG59XG4iXX0=
