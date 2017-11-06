define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Francy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(2);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _draw = __webpack_require__(3);

var _draw2 = _interopRequireDefault(_draw);

var _change = __webpack_require__(9);

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(4);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(5);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _menu = __webpack_require__(6);

var _menu2 = _interopRequireDefault(_menu);

var _logger = __webpack_require__(0);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _callback = __webpack_require__(7);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

var _logger2 = _interopRequireDefault(_logger);

var _modal = __webpack_require__(8);

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(0);

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTljYjZmZjIxNzYzMWRmNDc5MzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJMb2dnZXIiLCJ2ZXJib3NlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwiRXJyb3IiLCJvcHRpb25zIiwiZDMiLCJkcmF3IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJyZW5kZXIiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsInVuZGVmaW5lZCIsImUiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsIl9yZW5kZXIiLCJjYW52YXNOb2RlcyIsIk9iamVjdCIsInZhbHVlcyIsImNhbnZhcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsIndpZHRoIiwiYXR0ciIsImhlaWdodCIsImNhbGwiLCJ6b29tIiwib24iLCJ6b29tZWQiLCJhcHBlbmQiLCJldmVudCIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiaWQiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0Iiwic3R5bGUiLCJub2RlIiwic3ltYm9sIiwidHlwZSIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJ0ZXh0IiwibGFiZWwiLCJ0aXRsZSIsImxlZ2VuZCIsIm1hcCIsImkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJsZW5ndGgiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInJhZGl1cyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0IiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJmeSIsInNlbGYiLCJBYnN0cmFjdENhbnZhcyIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImxvZ2dlciIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCIkIiwiY2xhc3MiLCJ2ZXJzaW9uIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiSURVdGlscyIsIm9iamVjdElkIiwiTWVudVV0aWxzIiwiYnVpbGQiLCIkaHRtbCIsIl9idWlsZERlZmF1bHRNZW51IiwibWVudXMiLCJtZW51IiwiY2FsbGJhY2siLCIkbWVudSIsImh0bWwiLCIkc3VibWVudSIsInN1Ym1lbnUiLCJjbGljayIsImV4ZWN1dGUiLCIkZGl2IiwiJGNvbnRlbnQiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJtb2RhbCIsInNob3ciLCJNb2RhbCIsInJlcXVpcmVkQXJncyIsImFyZyIsImZvciIsIm5hbWUiLCJ2YWx1ZSIsImNoYW5nZSIsImtleXVwIiwicGFzdGUiLCJkaWFsb2ciLCJyZXNpemFibGUiLCJjbG9zZSIsInVpIiwicmVtb3ZlIiwiYnV0dG9ucyIsIk9rIiwiQ2FuY2VsIiwiVHJhY2tlciIsIm9iamVjdCIsInRocm90dGxlIiwiX3N1YnNjcmliZXJzIiwiX3Byb3h5IiwiUHJveHkiLCJfZGlydHkiLCJzZXRJbnRlcnZhbCIsInN5bmMiLCJyZWNlaXZlciIsInByb3BlcnR5Iiwia2V5IiwiZm4iLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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Q0FBeUI7QUFBQSxlQUFRQyxTQUFTSCxFQUFULEdBQWNHLElBQWQsR0FBcUJuTCxTQUE3QjtBQUFBLE9BQXpCLENBQXBCO0FBQ0Q7O0FBRUQ7Ozs7OzsyQkFHTztBQUFBOztBQUNMLFdBQUt1SyxZQUFMLENBQWtCOUUsT0FBbEIsQ0FBMEI7QUFBQSxlQUFRMEYsS0FBS25LLElBQUwsU0FBZ0IsT0FBS3FKLE1BQXJCLENBQVI7QUFBQSxPQUExQjtBQUNEOzs7d0JBekJZO0FBQ1gsYUFBTyxLQUFLRyxNQUFaO0FBQ0Q7Ozs7OztrQkEzRWtCSixPIiwiZmlsZSI6ImZyYW5jeS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOWNiNmZmMjE3NjMxZGY0NzkzNSIsIi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHNpbmdsZXRvbiB0aGF0IHByb3ZpZGVzIGEgbG9nZ2VyIGZvciB0aGUgRnJhbmN5IGFwcGxpY2F0aW9uLlxuICovXG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIGlmICghc2luZ2xldG9uKSB7XG4gICAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgICAgdGhpcy5jb25zb2xlID0gY29uc29sZTtcbiAgICAgIHNpbmdsZXRvbiA9IHRoaXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gICAgXG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgdGhpcy5jb25zb2xlLmRlYnVnKHRoaXMuX2Zvcm1hdCgnREVCVUcnLCBtZXNzYWdlKSk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jb25zb2xlLmluZm8odGhpcy5fZm9ybWF0KCdJTkZPJywgbWVzc2FnZSkpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB0aGlzLmNvbnNvbGUuZXJyb3IodGhpcy5fZm9ybWF0KCdFUlJPUicsIG1lc3NhZ2UpLCBlcnJvcik7XG4gIH1cbiAgXG4gIF9mb3JtYXQobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gYFske2xldmVsfV0gLSAke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0gLSAke21lc3NhZ2V9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBEcmF3IGZyb20gXCIuL2hhbmRsZXIvZHJhd1wiO1xuaW1wb3J0IFRyYWNrZXIgZnJvbSBcIi4vdHJhY2tlci9jaGFuZ2VcIjtcblxuLyoqXG4gKiBGcmFuY3kgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoZSB3aG9sZSBmcmFtZXdvcmsuIEJ5IHBhc3NpbmcgYW4gaW5wdXQgc3RyaW5nL29iamVjdCB0byB0aGUge0ZyYW5jeS5oYW5kbGV9IGZ1bmN0aW9uLFxuICogRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBjcmVhdGlvbiBvZiB0aGF0IGpzb24gYXMgbG9uZyBpdCBpcyBhIHZhbGlkIGFuZCB1bmRlcnN0YW5kYWJsZSBqc29uIG9iamVjdCB0byBGcmFuY3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFuY3kge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZyYW5jeSB3aXRoIHRoZSBmb2xsb3dpbmcgb3B0aW9uczpcbiAgICogQHBhcmFtIHZlcmJvc2UgcHJpbnRzIGV4dHJhIGxvZyBpbmZvcm1hdGlvbiB0byBjb25zb2xlLmxvZywgZGVmYXVsdCBmYWxzZVxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxuICAgKiBAcGFyYW0gbWVudUFjdGlvbkhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byBpbnZva2UgYWN0aW9ucyBmcm9tIHRoZSBtZW51LCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqIEBwYXJhbSBjaGFuZ2VUcmFja2VySGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIHJlcG9ydCBhbnkgY2hhbmdlcyBkZXRlY3RlZCBieSB0aGUgQ2hhbmdlVHJhY2tlciwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIGlmICghY2FsbGJhY2tIYW5kbGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIENhbGxiYWNrIEhhbmRsZXIhXCIpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICAgIHRoaXMuZHJhdyA9IG5ldyBEcmF3KHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCB0byBnZXQgZHJhd25cbiAgICovXG4gIGhhbmRsZShpbnB1dCwgeyBhcHBlbmRUbyB9ID0ge30pIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICB0aGlzLm9wdGlvbnMuYXBwZW5kVG8gPSBhcHBlbmRUbyA/IGFwcGVuZFRvIDogdGhpcy5vcHRpb25zLmFwcGVuZFRvO1xuICAgICAgcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykucmVuZGVyKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vZnJhbmN5JyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBzdXBlcih7IHZlcmJvc2U6IHZlcmJvc2UsIGFwcGVuZFRvOiBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICByZW5kZXIoanNvbikge1xuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhqc29uKTtcbiAgICB0aGlzLl9yZW5kZXIoanNvbik7XG4gIH1cblxuICBfcmVuZGVyKGpzb24pIHtcblxuICAgIHZhciBjYW52YXNOb2RlcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubm9kZXMpLFxuICAgICAgY2FudmFzTGlua3MgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLmxpbmtzKTtcblxuICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcyxcbiAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpLFxuICAgICAgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcblxuICAgIHN2ZyA9IHN2Zy5jYWxsKGQzLnpvb20oKS5vbignem9vbScsIHpvb21lZCkpLmFwcGVuZCgnZycpLmF0dHIoJ2NsYXNzJywgJ2RyYXcnKTtcblxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcbiAgICAgIHN2Zy5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLnh9LCR7ZDMuZXZlbnQudHJhbnNmb3JtLnl9KSBzY2FsZSgke2QzLmV2ZW50LnRyYW5zZm9ybS5rfSlgKTtcbiAgICB9XG5cbiAgICBzdmcuYXBwZW5kKCdkZWZzJykuc2VsZWN0QWxsKCdtYXJrZXInKVxuICAgICAgLmRhdGEoWydhcnJvdyddKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Fycm93cycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQpXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcbiAgICAgIC5hdHRyKCdyZWZYJywgMjUpXG4gICAgICAuYXR0cigncmVmWScsIDApXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAxMClcbiAgICAgIC5hdHRyKCdvcmllbnQnLCAnYXV0bycpXG4gICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1IEwxMCwwIEwwLCAtNScpO1xuXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXG4gICAgdmFyIGZvcmNlWCA9IGQzLmZvcmNlWChkID0+IDI1MCkuc3RyZW5ndGgoMC4xKTtcblxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcbiAgICB2YXIgZm9yY2VZID0gZDMuZm9yY2VZKGQgPT4gZC5sYXllciAqIDUwKS5zdHJlbmd0aCgwLjUpO1xuXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuICAgICAgLmZvcmNlKCdsaW5rJywgZDMuZm9yY2VMaW5rKCkuaWQoZCA9PiBkLmlkKSlcbiAgICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKC00MDApKVxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXG4gICAgICAuZm9yY2UoXCJ5XCIsIGZvcmNlWSlcbiAgICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cbiAgICB2YXIgbGluayA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmtzJylcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxuICAgICAgLmRhdGEoY2FudmFzTGlua3MpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBgJHtkLnNvdXJjZX0sJHtkLnRhcmdldH1gKVxuICAgICAgLnN0eWxlKCdtYXJrZXItZW5kJywgJ3VybCgjYXJyb3cpJyk7XG5cbiAgICB2YXIgbm9kZSA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGVzJykuc2VsZWN0QWxsKCdnLm5vZGVzJylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWxzJylcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzZWxmLndpbmRvdztcblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICB9XG5cbiAgX3JlbmRlckNhbnZhcyhqc29uKSB7XG4gICAgaWYgKCFqc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04gb2JqZWN0IHRvIHJlbmRlciBpcyBlbXB0eSEnKTtcbiAgICB9XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIC8vIGJ1aWxkIHRoZSBkaWFsb2cgd2luZG93XG4gICAgc2VsZi53aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgaWQ6IHNlbGYud2luZG93SWQsXG4gICAgICAgIHRpdGxlOiBqc29uLmNhbnZhcy50aXRsZSxcbiAgICAgICAgY2xhc3M6ICd3aW5kb3cnXG4gICAgICB9KS5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICAgICAgLy8gdXBkYXRlIGVsZW1lbnRcbiAgICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3NlbGYud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXG4gICAgLy8kKGAjJHtzZWxmLndpbmRvd0lkfWApLmRpYWxvZyh7XG4gICAgLy8gIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAvLyAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgLy8gIH1cbiAgICAvL30pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG5cbiAgICAvLyBidWlsZCBtZW51XG4gICAgbmV3IE1lbnVVdGlscyhqc29uLCB7IHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJib3NlLCBhcHBlbmRUbzogc2VsZi53aW5kb3cubm9kZSgpLCBjYWxsYmFja0hhbmRsZXI6IHRoaXMub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIgfSk7XG4gICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcblxuICAgIC8vIGJ1aWxkIGNhbnZhc1xuICAgIHNlbGYuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7c2VsZi5jYW52YXNJZH1gKTtcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtzZWxmLmNhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBkaXYjJHtzZWxmLndpbmRvd0lkfWApLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgc2VsZi5jYW52YXNJZCkuYXR0cignY2xhc3MnLCAnY2FudmFzJyk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7c2VsZi5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcbiAgICBzZWxmLmNhbnZhc1xuICAgICAgLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMudylcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYW52YXMuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoanNvbiwgeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5idWlsZChqc29uKTtcbiAgfVxuXG4gIGJ1aWxkKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICRodG1sID0gJCgnPGRpdj4nLCB7IGNsYXNzOiAnbWVudScsIGlkOiBqc29uLmlkIH0pO1xuICAgIHNlbGYuX2J1aWxkRGVmYXVsdE1lbnUoKS5hcHBlbmRUbygkaHRtbCk7XG4gICAgZm9yIChsZXQgbWVudSBvZiBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm1lbnVzKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKG1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB2YXIgJG1lbnUgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KS5hcHBlbmRUbygkaHRtbCk7XG4gICAgICBpZiAobWVudS5tZW51cyAmJiBPYmplY3QudmFsdWVzKG1lbnUubWVudXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwobWVudS50aXRsZSArIFwiJm5ic3A7JiM5NjYwO1wiKS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIHZhciAkc3VibWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykpIHtcbiAgICAgICAgICBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayhzdWJtZW51LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KHN1Ym1lbnUudGl0bGUpLmFwcGVuZFRvKCRzdWJtZW51KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNhbGxiYWNrLmV4ZWN1dGUoKTsgfSB9KS50ZXh0KG1lbnUudGl0bGUpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgIH1cbiAgICB9XG4gICAgJGh0bWwuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcbiAgfVxuXG4gIF9idWlsZERlZmF1bHRNZW51KCkge1xuICAgIHZhciAkZGl2ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duXCIgfSlcbiAgICB2YXIgJGNvbnRlbnQgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd24tY29udGVudFwiIH0pO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogXCJkcm9wZG93bi1idXR0b25cIiB9KS5odG1sKCdGaWxlJm5ic3A7JiM5NjYwOycpLmFwcGVuZFRvKCRkaXYpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJTYXZlIHRvIFBOR1wiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIkFib3V0XCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQ2xvc2VcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICRjb250ZW50LmFwcGVuZFRvKCRkaXYpO1xuICAgIHJldHVybiAkZGl2O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi91dGlsL21vZGFsJztcblxuLy8gRklYTUUgaHR0cDovL2xvcmVkYW5hY2lyc3RlYS5naXRodWIuaW8vZXM2LWRlc2lnbi1wYXR0ZXJucy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChjb25maWcuY2FsbGJhY2ssIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYWxsYmFjay5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCQoYCMke3NlbGYuY29uZmlnLmlkfWApLmxlbmd0aCkge1xuICAgICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKCc8ZGl2PicsIHtcbiAgICAgIGlkOiBzZWxmLmNvbmZpZy5pZCxcbiAgICAgIHRpdGxlOiAnUmVxdWlyZWQgQXJndW1lbnRzJyxcbiAgICAgIGNsYXNzOiAncmVxdWlyZWRBcmdzJ1xuICAgIH0pLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICAkKCc8bGFiZWw+Jywge1xuICAgICAgICBmb3I6IGFyZy5pZFxuICAgICAgfSkudGV4dChhcmcudGl0bGUpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICAgICQoJzxpbnB1dD4nLCB7XG4gICAgICAgIGlkOiBhcmcuaWQsXG4gICAgICAgIG5hbWU6IGFyZy5pZCxcbiAgICAgICAgdHlwZTogYXJnLnR5cGUsXG4gICAgICAgIHZhbHVlOiBhcmcudmFsdWUsXG4gICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5jb25maWcucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHRoaXMuY2hhbmdlLFxuICAgICAgICBrZXl1cDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIHBhc3RlOiB0aGlzLmNoYW5nZVxuICAgICAgfSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgfVxuXG4gICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuZGlhbG9nKHtcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBjbG9zZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIG1vZGFsIGZvciBjYWxsYmFjayBbJHtzZWxmLmNvbmZpZy5pZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgT2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIEZJWE1FIHJlcXVpcmVzIHZhbGlkYXRpb24hXG4gICAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmNvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kaWFsb2coXCJjbG9zZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgQ2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21vZGFsLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGRlZmF1bHQgbWV0aG9kcyB0byBoYW5kbGUgY2hhbmdlcyBvbiBhIG1vZGVsIG9iamVjdC5cbiAqIEl0IHdvcmtzIGJ5IHRoZSBtZWFucyBvZiBhIFByb3h5IHRvIHRyYWNrIGNoYW5nZXMgYW5kIGVuc3VyZXMgc3Vic2NyaWJlcnNcbiAqIGFyZSBub3RpZmllZCBvZiB0aGVzZSBjaGFuZ2VzIG9uIGEgdGltZSBiYXNpcyAoMSBzZWNvbmQgZGVmYXVsdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGluc3RhbmNlIG9mIE1vZGVsVHJhY2tlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIHRoZSBvYmplY3Qgb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlcy5cbiAgICogQHBhcmFtIHZlcmJvc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgeyB2ZXJib3NlID0gZmFsc2UsIHRocm90dGxlID0gMTAwMCB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBsaXN0IG9mIGNoYW5nZSBzdWJzY3JpYmVycy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBwcm94eSB0aGF0IGhhbmRsZXMgYSBkaXJ0eSBmbGFnIHdoZW4gb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge1Byb3h5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gZmxhZyB3aGVuIHRoZSBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3luYyBsaXN0ZW5lcnMgZXZlcnkgc2Vjb25kLCBpZiBkYXRhIGlzIGRpcnR5XG4gICAgICogQHR5cGUge3NldEludGVydmFsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgcmVjZWl2ZXJbcHJvcGVydHldICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0ID8gdGFyZ2V0W2tleV0gOiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHRvIHN5bmMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB1bnJlZ2lzdGVyIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZCBwcmV2aW91c2x5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB1bnN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZm4gPyBpdGVtIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGV4cGxpY2l0bHkgc3luYyB0aGUgbW9kdWxlIHdpdGggYWxsIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgc3luYygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jYWxsKHRoaXMsIHRoaXMub2JqZWN0KSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=