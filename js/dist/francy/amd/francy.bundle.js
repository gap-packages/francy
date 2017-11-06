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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGQzZWVmYjJlNzExM2U4Yjg5YjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJMb2dnZXIiLCJ2ZXJib3NlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwiRXJyb3IiLCJvcHRpb25zIiwiZDMiLCJkcmF3IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJyZW5kZXIiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsInVuZGVmaW5lZCIsImUiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsIl9yZW5kZXIiLCJjYW52YXNOb2RlcyIsIk9iamVjdCIsInZhbHVlcyIsImNhbnZhcyIsIm5vZGVzIiwiY2FudmFzTGlua3MiLCJsaW5rcyIsInN2ZyIsIndpZHRoIiwiYXR0ciIsImhlaWdodCIsImNhbGwiLCJ6b29tIiwib24iLCJ6b29tZWQiLCJhcHBlbmQiLCJldmVudCIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiaWQiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJsaW5rIiwic291cmNlIiwidGFyZ2V0Iiwic3R5bGUiLCJub2RlIiwic3ltYm9sIiwidHlwZSIsImdldFN5bWJvbCIsInNpemUiLCJoaWdobGlnaHQiLCJkcmFnIiwiZHJhZ3N0YXJ0ZWQiLCJkcmFnZ2VkIiwiZHJhZ2VuZGVkIiwiY29ubmVjdGVkTm9kZXMiLCJ0ZXh0IiwibGFiZWwiLCJ0aXRsZSIsImxlZ2VuZCIsIm1hcCIsImkiLCJjb2xvcnMiLCJ0aWNrZWQiLCJsZW5ndGgiLCJNYXRoIiwic3FydCIsImVhY2giLCJjb2xsaWRlIiwicGFkZGluZyIsInJhZGl1cyIsImFscGhhIiwicXVhZFRyZWUiLCJxdWFkdHJlZSIsInJiIiwibngxIiwibngyIiwibnkxIiwibnkyIiwidmlzaXQiLCJxdWFkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJwb2ludCIsImwiLCJ0b2dnbGUiLCJsaW5rZWRCeUluZGV4IiwiZm9yRWFjaCIsImluZGV4IiwibmVpZ2hib3JpbmciLCJhIiwiYiIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0IiwiX19kYXRhX18iLCJvIiwiYWN0aXZlIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJmeSIsInNlbGYiLCJBYnN0cmFjdENhbnZhcyIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImxvZ2dlciIsIndpbmRvd0lkIiwiZ2V0V2luZG93SWQiLCIkIiwiY2xhc3MiLCJ2ZXJzaW9uIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiSURVdGlscyIsIm9iamVjdElkIiwiTWVudVV0aWxzIiwiYnVpbGQiLCIkaHRtbCIsIl9idWlsZERlZmF1bHRNZW51IiwibWVudXMiLCJtZW51IiwiY2FsbGJhY2siLCIkbWVudSIsImh0bWwiLCIkc3VibWVudSIsInN1Ym1lbnUiLCJjbGljayIsImV4ZWN1dGUiLCIkZGl2IiwiJGNvbnRlbnQiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJtb2RhbCIsInNob3ciLCJNb2RhbCIsInJlcXVpcmVkQXJncyIsImFyZyIsImZvciIsIm5hbWUiLCJ2YWx1ZSIsImNoYW5nZSIsImtleXVwIiwicGFzdGUiLCJkaWFsb2ciLCJyZXNpemFibGUiLCJjbG9zZSIsInVpIiwicmVtb3ZlIiwiYnV0dG9ucyIsIk9rIiwiQ2FuY2VsIiwiVHJhY2tlciIsIm9iamVjdCIsInRocm90dGxlIiwiX3N1YnNjcmliZXJzIiwiX3Byb3h5IiwiUHJveHkiLCJfZGlydHkiLCJzZXRJbnRlcnZhbCIsInN5bmMiLCJyZWNlaXZlciIsInByb3BlcnR5Iiwia2V5IiwiZm4iLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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QTdCO0FBQUEsT0FBekIsQ0FBcEI7QUFDRDs7QUFFRDs7Ozs7OzJCQUdPO0FBQUE7O0FBQ0wsV0FBS3VLLFlBQUwsQ0FBa0I5RSxPQUFsQixDQUEwQjtBQUFBLGVBQVEwRixLQUFLbkssSUFBTCxTQUFnQixPQUFLcUosTUFBckIsQ0FBUjtBQUFBLE9BQTFCO0FBQ0Q7Ozt3QkF6Qlk7QUFDWCxhQUFPLEtBQUtHLE1BQVo7QUFDRDs7Ozs7O2tCQTNFa0JKLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRkM2VlZmIyZTcxMTNlOGI4OWI4IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuICBcbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICogQHBhcmFtIGNoYW5nZVRyYWNrZXJIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGRldGVjdGVkIGJ5IHRoZSBDaGFuZ2VUcmFja2VyLCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgaWYgKCFjYWxsYmFja0hhbmRsZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQ2FsbGJhY2sgSGFuZGxlciFcIik7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHRvIGdldCBkcmF3blxuICAgKi9cbiAgaGFuZGxlKGlucHV0LCB7IGFwcGVuZFRvIH0gPSB7fSkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgLy92YXIgdHJhY2tlciA9IG5ldyBUcmFja2VyKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAvL3RyYWNrZXIuc3Vic2NyaWJlKGZ1bmN0aW9uKG9iaikgeyBjb25zb2xlLmxvZyhvYmopOyB9KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKHRyYWNrZXIub2JqZWN0KTtcbiAgICAgIHRoaXMub3B0aW9ucy5hcHBlbmRUbyA9IGFwcGVuZFRvID8gYXBwZW5kVG8gOiB0aGlzLm9wdGlvbnMuYXBwZW5kVG87XG4gICAgICByZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKGpzb24pO1xuICAgIHRoaXMuX3JlbmRlcihqc29uKTtcbiAgfVxuXG4gIF9yZW5kZXIoanNvbikge1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ub2RlcyksXG4gICAgICBjYW52YXNMaW5rcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubGlua3MpO1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShjYW52YXNMaW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBDYW52YXMuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYud2luZG93O1xuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvZHJhdy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICBjbGFzczogJ3dpbmRvdydcbiAgICAgIH0pLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxuICAgICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBmb3JjZSB0aGUgZGlhbG9nIHRvIG9wZW5cbiAgICAvLyQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAvLyAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIC8vICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAvLyAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAvLyAgfVxuICAgIC8vfSk7XG4gICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBNZW51cyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcblxuICAgIC8vIGJ1aWxkIG1lbnVcbiAgICBuZXcgTWVudVV0aWxzKGpzb24sIHsgdmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcmJvc2UsIGFwcGVuZFRvOiBzZWxmLndpbmRvdy5ub2RlKCksIGNhbGxiYWNrSGFuZGxlcjogdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuXG4gICAgLy8gYnVpbGQgY2FudmFzXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBzZWxmLmNhbnZhc0lkKS5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGlmIG5lZWRlZFxuICAgIHNlbGYuY2FudmFzXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVV0aWxzIHtcblxuICBjb25zdHJ1Y3Rvcihqc29uLCB7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmJ1aWxkKGpzb24pO1xuICB9XG5cbiAgYnVpbGQoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJGh0bWwgPSAkKCc8ZGl2PicsIHsgY2xhc3M6ICdtZW51JywgaWQ6IGpzb24uaWQgfSk7XG4gICAgc2VsZi5fYnVpbGREZWZhdWx0TWVudSgpLmFwcGVuZFRvKCRodG1sKTtcbiAgICBmb3IgKGxldCBtZW51IG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sobWVudSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciAkbWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93blwiIH0pLmFwcGVuZFRvKCRodG1sKTtcbiAgICAgIGlmIChtZW51Lm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6IFwiZHJvcGRvd24tYnV0dG9uXCIgfSkuaHRtbChtZW51LnRpdGxlICsgXCImbmJzcDsmIzk2NjA7XCIpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgICAgdmFyICRzdWJtZW51ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnRcIiB9KS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51Lm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHN1Ym1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQoc3VibWVudS50aXRsZSkuYXBwZW5kVG8oJHN1Ym1lbnUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQobWVudS50aXRsZSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgICAkaHRtbC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICB9XG5cbiAgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgdmFyICRkaXYgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KVxuICAgIHZhciAkY29udGVudCA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwoJ0ZpbGUmbmJzcDsmIzk2NjA7JykuYXBwZW5kVG8oJGRpdik7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIlNhdmUgdG8gUE5HXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQWJvdXRcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJDbG9zZVwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJGNvbnRlbnQuYXBwZW5kVG8oJGRpdik7XG4gICAgcmV0dXJuICRkaXY7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3V0aWwvbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoY29uZmlnLmNhbGxiYWNrLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgZXhlY3V0ZSgpIHtcbiAgICB0aGlzLm1vZGFsLnNob3coKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvY2FsbGJhY2suanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICgkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5sZW5ndGgpIHtcbiAgICAgICQoYCMke3NlbGYuY29uZmlnLmlkfWApLnNob3coKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJCgnPGRpdj4nLCB7XG4gICAgICBpZDogc2VsZi5jb25maWcuaWQsXG4gICAgICB0aXRsZTogJ1JlcXVpcmVkIEFyZ3VtZW50cycsXG4gICAgICBjbGFzczogJ3JlcXVpcmVkQXJncydcbiAgICB9KS5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuXG4gICAgZm9yICh2YXIgYXJnIG9mIE9iamVjdC52YWx1ZXMoc2VsZi5jb25maWcucmVxdWlyZWRBcmdzKSkge1xuICAgICAgJCgnPGxhYmVsPicsIHtcbiAgICAgICAgZm9yOiBhcmcuaWRcbiAgICAgIH0pLnRleHQoYXJnLnRpdGxlKS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8aW5wdXQ+Jywge1xuICAgICAgICBpZDogYXJnLmlkLFxuICAgICAgICBuYW1lOiBhcmcuaWQsXG4gICAgICAgIHR5cGU6IGFyZy50eXBlLFxuICAgICAgICB2YWx1ZTogYXJnLnZhbHVlLFxuICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNlbGYuY29uZmlnLnJlcXVpcmVkQXJnc1t0aGlzLmlkXS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB0aGlzLmNoYW5nZSxcbiAgICAgICAga2V5dXA6IHRoaXMuY2hhbmdlLFxuICAgICAgICBwYXN0ZTogdGhpcy5jaGFuZ2VcbiAgICAgIH0pLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgIH1cblxuICAgICQoYCMke3NlbGYuY29uZmlnLmlkfWApLmRpYWxvZyh7XG4gICAgICByZXNpemFibGU6IGZhbHNlLFxuICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyBtb2RhbCBmb3IgY2FsbGJhY2sgWyR7c2VsZi5jb25maWcuaWR9XS4uLmApO1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAgIH0sXG4gICAgICBidXR0b25zOiB7XG4gICAgICAgIE9rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBGSVhNRSByZXF1aXJlcyB2YWxpZGF0aW9uIVxuICAgICAgICAgIHNlbGYub3B0aW9ucy5jYWxsYmFja0hhbmRsZXIoc2VsZi5jb25maWcpO1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH0sXG4gICAgICAgIENhbmNlbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCh0aGlzKS5kaWFsb2coXCJjbG9zZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9tb2RhbC5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBob2xkcyBkZWZhdWx0IG1ldGhvZHMgdG8gaGFuZGxlIGNoYW5nZXMgb24gYSBtb2RlbCBvYmplY3QuXG4gKiBJdCB3b3JrcyBieSB0aGUgbWVhbnMgb2YgYSBQcm94eSB0byB0cmFjayBjaGFuZ2VzIGFuZCBlbnN1cmVzIHN1YnNjcmliZXJzXG4gKiBhcmUgbm90aWZpZWQgb2YgdGhlc2UgY2hhbmdlcyBvbiBhIHRpbWUgYmFzaXMgKDEgc2Vjb25kIGRlZmF1bHQpLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFja2VyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBpbnN0YW5jZSBvZiBNb2RlbFRyYWNrZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3QgLSB0aGUgb2JqZWN0IG9iamVjdCB0byBrZWVwIHRyYWNrIG9mIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB2ZXJib3NlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIHsgdmVyYm9zZSA9IGZhbHNlLCB0aHJvdHRsZSA9IDEwMDAgfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgbGlzdCBvZiBjaGFuZ2Ugc3Vic2NyaWJlcnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgcHJveHkgdGhhdCBoYW5kbGVzIGEgZGlydHkgZmxhZyB3aGVuIG9iamVjdCBjaGFuZ2VzLlxuICAgICAqIEB0eXBlIHtQcm94eX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb3h5ID0gbmV3IFByb3h5KG9iamVjdCwgdGhpcyk7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGZsYWcgd2hlbiB0aGUgb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFN5bmMgbGlzdGVuZXJzIGV2ZXJ5IHNlY29uZCwgaWYgZGF0YSBpcyBkaXJ0eVxuICAgICAqIEB0eXBlIHtzZXRJbnRlcnZhbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCk7XG4gICAgICB9XG4gICAgfSwgdGhyb3R0bGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIHNldCBhIHByb3BlcnR5IHdoZW4gYSBjaGFuZ2Ugb2NjdXJzLCBwbHVzIGl0IHNldHMgdGhlIGN1cnJlbnQgb2JqZWN0IHRvIGRpcnR5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gcmVjZWl2ZXIgLSB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnR5IC0gdGhlIHByb3BlcnR5IGNoYW5nZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlIC0gdGhlIG5ldyB2YWx1ZVxuICAgKi9cbiAgc2V0KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZVtwcm9wZXJ0eV0gaW5zdGFuY2VvZiBPYmplY3QpICYmIHJlY2VpdmVyW3Byb3BlcnR5XSAhPT0gdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKGBPYmplY3QgSUQgJHt0aGlzLm9iamVjdC5pZH0gcHJvcGVydHkgJHtwcm9wZXJ0eX0gY2hhbmdlZCBmcm9tICR7cmVjZWl2ZXJbcHJvcGVydHldfSB0byAke3ZhbHVlfS5gKTtcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVyW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGJ5IHRoZSBwcm94eSB0byBnZXQgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgLSB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGtleSB0aGUgdGhlIG9iamVjdCBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXR1cm5zIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKi9cbiAgZ2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSA9PT0gJ29iamVjdCcgJiYgdGFyZ2V0W2tleV0gIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0W2tleV0sIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5IGluIHRhcmdldCA/IHRhcmdldFtrZXldIDogdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHRoZSBvYmplY3QgcHJvcGVydGllc1xuICAgKi9cbiAgZ2V0IG9iamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJveHk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCByZWdpc3RlciBhIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB0byBzeW5jIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSAtIG11c3QgaGFuZGxlIG9uZSBhcmcsIHRoZSBvYmplY3QsIG9mIHR5cGUge29iamVjdH1cbiAgICovXG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdW5yZWdpc3RlciBhIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgcHJldmlvdXNseVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgdW5zdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGZuID8gaXRlbSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBleHBsaWNpdGx5IHN5bmMgdGhlIG1vZHVsZSB3aXRoIGFsbCB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIHN5bmMoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2FsbCh0aGlzLCB0aGlzLm9iamVjdCkpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhY2tlci9jaGFuZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9