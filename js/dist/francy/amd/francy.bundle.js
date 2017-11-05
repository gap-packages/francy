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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTNmYjA2YzM5ZDVkMzgwY2Y0N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJMb2dnZXIiLCJ2ZXJib3NlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsImNhbGxiYWNrSGFuZGxlciIsImxvZyIsIm9wdGlvbnMiLCJkMyIsIkVycm9yIiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJoYW5kbGUiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsInVuZGVmaW5lZCIsImUiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsImFkZCIsImNhbnZhc05vZGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2FudmFzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwid2lkdGgiLCJhdHRyIiwiaGVpZ2h0IiwiY2FsbCIsInpvb20iLCJvbiIsInpvb21lZCIsImFwcGVuZCIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJpZCIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNlbnRlciIsImxpbmsiLCJzb3VyY2UiLCJ0YXJnZXQiLCJzdHlsZSIsIm5vZGUiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwiaSIsImNvbG9ycyIsInRpY2tlZCIsImxlbmd0aCIsIk1hdGgiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicmFkaXVzIiwiYWxwaGEiLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3QiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQWJzdHJhY3RDYW52YXMiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJsb2dnZXIiLCJzZWxmIiwid2luZG93SWQiLCJnZXRXaW5kb3dJZCIsIiQiLCJ3IiwiaCIsImFwcGVuZFRvIiwiZGlhbG9nIiwiY2xvc2UiLCJ1aSIsInJlbW92ZSIsImdldE1lbnVIdG1sIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsIklEVXRpbHMiLCJvYmplY3RJZCIsIk1lbnVVdGlscyIsIiRodG1sIiwiY2xhc3MiLCJfYnVpbGREZWZhdWx0TWVudSIsIm1lbnVzIiwibWVudSIsImNhbGxiYWNrIiwiJG1lbnUiLCJodG1sIiwiJHN1Ym1lbnUiLCJzdWJtZW51IiwiY2xpY2siLCJleGVjdXRlIiwiJGRpdiIsIiRjb250ZW50IiwiQ2FsbGJhY2tIYW5kbGVyIiwiY29uZmlnIiwibW9kYWwiLCJzaG93IiwiTW9kYWwiLCJyZXF1aXJlZEFyZ3MiLCJhcmciLCJmb3IiLCJuYW1lIiwidmFsdWUiLCJjaGFuZ2UiLCJrZXl1cCIsInBhc3RlIiwicmVzaXphYmxlIiwiYnV0dG9ucyIsIk9rIiwiQ2FuY2VsIiwiVHJhY2tlciIsIm9iamVjdCIsInRocm90dGxlIiwiX3N1YnNjcmliZXJzIiwiX3Byb3h5IiwiUHJveHkiLCJfZGlydHkiLCJzZXRJbnRlcnZhbCIsInN5bmMiLCJyZWNlaXZlciIsInByb3BlcnR5Iiwia2V5IiwiZm4iLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFJQSxJQUFJQSxZQUFZLElBQWhCOztJQUVxQkMsTTtBQUVuQixvQkFBc0M7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQXhCQyxPQUF3QjtBQUFBLFFBQXhCQSxPQUF3QixnQ0FBZCxLQUFjOztBQUFBOztBQUNwQyxRQUFJLENBQUNGLFNBQUwsRUFBZ0I7QUFDZCxXQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQUgsa0JBQVksSUFBWjtBQUNELEtBSkQsTUFLSztBQUNILGFBQU9BLFNBQVA7QUFDRDtBQUVGOzs7OzBCQUVLSSxPLEVBQVM7QUFDYixVQUFJLEtBQUtGLE9BQVQsRUFBa0I7QUFDaEIsYUFBS0MsT0FBTCxDQUFhRSxLQUFiLENBQW1CLEtBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCRixPQUF0QixDQUFuQjtBQUNEO0FBQ0Y7Ozt5QkFFSUEsTyxFQUFTO0FBQ1osV0FBS0QsT0FBTCxDQUFhSSxJQUFiLENBQWtCLEtBQUtELE9BQUwsQ0FBYSxNQUFiLEVBQXFCRixPQUFyQixDQUFsQjtBQUNEOzs7MEJBRUtBLE8sRUFBU0ksTSxFQUFPO0FBQ3BCLFdBQUtMLE9BQUwsQ0FBYUssS0FBYixDQUFtQixLQUFLRixPQUFMLENBQWEsT0FBYixFQUFzQkYsT0FBdEIsQ0FBbkIsRUFBbURJLE1BQW5EO0FBQ0Q7Ozs0QkFFT0MsSyxFQUFPTCxPLEVBQVM7QUFDdEIsbUJBQVdLLEtBQVgsWUFBdUIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQXZCLFdBQXFEUCxPQUFyRDtBQUNEOzs7Ozs7a0JBOUJrQkgsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7SUFJYVcsTSxXQUFBQSxNOztBQUVYOzs7Ozs7O0FBT0Esb0JBQXFFO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUF2RFYsT0FBdUQ7QUFBQSxRQUF2REEsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsb0NBQXRDVyxlQUFzQztBQUFBLFFBQXRDQSxlQUFzQyx3Q0FBcEJWLFFBQVFXLEdBQVk7O0FBQUE7O0FBQ25FLFNBQUtDLE9BQUwsR0FBZTtBQUNiYixlQUFTQSxPQURJO0FBRWJXLHVCQUFpQkE7QUFGSixLQUFmO0FBSUEsUUFBSSxDQUFDRyxFQUFMLEVBQVM7QUFDUCxZQUFNLElBQUlDLEtBQUosQ0FBVSw0RUFBVixDQUFOO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7MkJBSU9DLEssRUFBTztBQUNaLFVBQUlDLE9BQU8sb0JBQVVDLEtBQVYsQ0FBZ0JGLEtBQWhCLENBQVg7QUFDQSxVQUFJQyxJQUFKLEVBQVU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxlQUFPLG1CQUFTLEtBQUtKLE9BQWQsRUFBdUJNLE1BQXZCLENBQThCRixJQUE5QixDQUFQO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hHLFFBQVFWLE1BQVIsR0FBaUJXLE9BQU9YLE1BQVAsR0FBZ0JBLE1BQWpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBOzs7SUFHcUJZLFM7Ozs7Ozs7OztBQUVuQjs7Ozs7MEJBS2FOLEssRUFBTztBQUNsQkEsY0FBUSxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCTyxLQUFLQyxTQUFMLENBQWVSLEtBQWYsQ0FBNUIsR0FBb0RBLEtBQTVEO0FBQ0FBLGNBQVFBLE1BQU1TLE9BQU4sQ0FBYyxxQkFBZCxFQUFxQyxFQUFyQyxDQUFSO0FBQ0EsVUFBSUMsWUFBWSxhQUFoQjtBQUNBLFVBQUlDLFFBQVFELFVBQVVFLElBQVYsQ0FBZVosS0FBZixDQUFaO0FBQ0EsVUFBSVcsS0FBSixFQUFXO0FBQ1RYLGdCQUFRVyxNQUFNLENBQU4sQ0FBUjtBQUNBLFlBQUk7QUFDRixjQUFJVixPQUFPTSxLQUFLTCxLQUFMLENBQVdGLEtBQVgsQ0FBWDtBQUNBLGlCQUFPQyxLQUFLWSxLQUFMLEtBQWUsb0JBQWYsR0FBc0NaLElBQXRDLEdBQTZDYSxTQUFwRDtBQUNELFNBSEQsQ0FJQSxPQUFPQyxDQUFQLEVBQVU7QUFDUjlCLGtCQUFRSyxLQUFSLENBQWN5QixDQUFkO0FBQ0Q7QUFDRjtBQUNELGFBQU9ELFNBQVA7QUFDRDs7Ozs7O2tCQXZCa0JSLFM7Ozs7Ozs7Ozs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Ozs7O0lBRXFCVSxJOzs7QUFFbkIsa0JBQW9DO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUF2QmhDLE9BQXVCO0FBQUEsUUFBdkJBLE9BQXVCLGdDQUFiLEtBQWE7O0FBQUE7O0FBQUEsdUdBQzVCLEVBQUNBLFNBQVNBLE9BQVYsRUFENEI7QUFFbkM7Ozs7MkJBRU1pQixJLEVBQU07QUFDWCxXQUFLZ0IsYUFBTCxDQUFtQmhCLElBQW5CO0FBQ0EsV0FBS2lCLEdBQUwsQ0FBU2pCLElBQVQ7QUFDRDs7O3dCQUVHQSxJLEVBQU07O0FBRVIsVUFBSWtCLGNBQWNDLE9BQU9DLE1BQVAsQ0FBY3BCLEtBQUtxQixNQUFMLENBQVlDLEtBQTFCLENBQWxCO0FBQUEsVUFDSUMsY0FBY0osT0FBT0MsTUFBUCxDQUFjcEIsS0FBS3FCLE1BQUwsQ0FBWUcsS0FBMUIsQ0FEbEI7O0FBR0EsVUFBSUMsTUFBTSxLQUFLSixNQUFmO0FBQUEsVUFDRUssUUFBUSxDQUFDRCxJQUFJRSxJQUFKLENBQVMsT0FBVCxDQURYO0FBQUEsVUFFRUMsU0FBUyxDQUFDSCxJQUFJRSxJQUFKLENBQVMsUUFBVCxDQUZaOztBQUlBRixZQUFNQSxJQUFJSSxJQUFKLENBQVNoQyxHQUFHaUMsSUFBSCxHQUFVQyxFQUFWLENBQWEsTUFBYixFQUFxQkMsTUFBckIsQ0FBVCxFQUF1Q0MsTUFBdkMsQ0FBOEMsR0FBOUMsRUFBbUROLElBQW5ELENBQXdELE9BQXhELEVBQWlFLE1BQWpFLENBQU47O0FBRUEsZUFBU0ssTUFBVCxHQUFrQjtBQUNoQlAsWUFBSUUsSUFBSixDQUFTLFdBQVQsaUJBQW1DOUIsR0FBR3FDLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQkMsQ0FBdEQsU0FBMkR2QyxHQUFHcUMsS0FBSCxDQUFTQyxTQUFULENBQW1CRSxDQUE5RSxnQkFBMEZ4QyxHQUFHcUMsS0FBSCxDQUFTQyxTQUFULENBQW1CRyxDQUE3RztBQUNEOztBQUVEYixVQUFJUSxNQUFKLENBQVcsTUFBWCxFQUFtQk0sU0FBbkIsQ0FBNkIsUUFBN0IsRUFDR0MsSUFESCxDQUNRLENBQUMsT0FBRCxDQURSLEVBRUdDLEtBRkgsR0FFV1IsTUFGWCxDQUVrQixRQUZsQixFQUdHTixJQUhILENBR1EsT0FIUixFQUdpQixRQUhqQixFQUlHQSxJQUpILENBSVEsSUFKUixFQUljO0FBQUEsZUFBS2UsQ0FBTDtBQUFBLE9BSmQsRUFLR2YsSUFMSCxDQUtRLFNBTFIsRUFLbUIsWUFMbkIsRUFNR0EsSUFOSCxDQU1RLE1BTlIsRUFNZ0IsRUFOaEIsRUFPR0EsSUFQSCxDQU9RLE1BUFIsRUFPZ0IsQ0FQaEIsRUFRR0EsSUFSSCxDQVFRLGFBUlIsRUFRdUIsRUFSdkIsRUFTR0EsSUFUSCxDQVNRLGNBVFIsRUFTd0IsRUFUeEIsRUFVR0EsSUFWSCxDQVVRLFFBVlIsRUFVa0IsTUFWbEIsRUFXR00sTUFYSCxDQVdVLE1BWFYsRUFZR04sSUFaSCxDQVlRLEdBWlIsRUFZYSw2QkFaYjs7QUFjQTtBQUNBLFVBQUlnQixTQUFTOUMsR0FBRzhDLE1BQUgsQ0FBVTtBQUFBLGVBQUssR0FBTDtBQUFBLE9BQVYsRUFBb0JDLFFBQXBCLENBQTZCLEdBQTdCLENBQWI7O0FBRUE7QUFDQSxVQUFJQyxTQUFTaEQsR0FBR2dELE1BQUgsQ0FBVTtBQUFBLGVBQUtILEVBQUVJLEtBQUYsR0FBVSxFQUFmO0FBQUEsT0FBVixFQUE2QkYsUUFBN0IsQ0FBc0MsR0FBdEMsQ0FBYjs7QUFFQSxVQUFJRyxhQUFhbEQsR0FBR21ELGVBQUgsR0FDZEMsS0FEYyxDQUNSLE1BRFEsRUFDQXBELEdBQUdxRCxTQUFILEdBQWVDLEVBQWYsQ0FBa0I7QUFBQSxlQUFLVCxFQUFFUyxFQUFQO0FBQUEsT0FBbEIsQ0FEQSxFQUVkRixLQUZjLENBRVIsUUFGUSxFQUVFcEQsR0FBR3VELGFBQUgsR0FBbUJSLFFBQW5CLENBQTRCLENBQUMsR0FBN0IsQ0FGRixFQUdkSyxLQUhjLENBR1IsR0FIUSxFQUdITixNQUhHLEVBSWRNLEtBSmMsQ0FJUixHQUpRLEVBSUhKLE1BSkcsRUFLZEksS0FMYyxDQUtSLFFBTFEsRUFLRXBELEdBQUd3RCxXQUFILENBQWUzQixRQUFRLENBQXZCLEVBQTBCRSxTQUFTLENBQW5DLENBTEYsQ0FBakI7O0FBT0EsVUFBSTBCLE9BQU83QixJQUFJUSxNQUFKLENBQVcsR0FBWCxFQUNSTixJQURRLENBQ0gsT0FERyxFQUNNLE9BRE4sRUFFUlksU0FGUSxDQUVFLE1BRkYsRUFHUkMsSUFIUSxDQUdIakIsV0FIRyxFQUlSa0IsS0FKUSxHQUlBUixNQUpBLENBSU8sTUFKUCxFQUtSTixJQUxRLENBS0gsT0FMRyxFQUtNLE1BTE4sRUFNUkEsSUFOUSxDQU1ILElBTkcsRUFNRztBQUFBLGVBQVFlLEVBQUVhLE1BQVYsU0FBb0JiLEVBQUVjLE1BQXRCO0FBQUEsT0FOSCxFQU9WQyxLQVBVLENBT0osWUFQSSxFQU9VLGFBUFYsQ0FBWDs7QUFVQSxVQUFJQyxPQUFPakMsSUFBSVEsTUFBSixDQUFXLEdBQVgsRUFDUk4sSUFEUSxDQUNILE9BREcsRUFDTSxPQUROLEVBQ2VZLFNBRGYsQ0FDeUIsU0FEekIsRUFFUkMsSUFGUSxDQUVIdEIsV0FGRyxFQUVVO0FBQUEsZUFBS3dCLEVBQUVTLEVBQVA7QUFBQSxPQUZWLEVBR1JWLEtBSFEsR0FHQVIsTUFIQSxDQUdPLE1BSFAsRUFJUk4sSUFKUSxDQUlILEdBSkcsRUFJRTlCLEdBQUc4RCxNQUFILEdBQVlDLElBQVosQ0FBaUI7QUFBQSxlQUFLLGlCQUFPQyxTQUFQLENBQWlCbkIsRUFBRWtCLElBQW5CLENBQUw7QUFBQSxPQUFqQixFQUFnREUsSUFBaEQsQ0FBcUQ7QUFBQSxlQUFLcEIsRUFBRW9CLElBQUYsR0FBUyxFQUFkO0FBQUEsT0FBckQsQ0FKRixFQUtSbkMsSUFMUSxDQUtILFdBTEcsRUFLVSxnQkFMVixFQU1SQSxJQU5RLENBTUgsT0FORyxFQU1NO0FBQUEsZUFBSyxVQUFVZSxFQUFFcUIsU0FBRixHQUFjLFlBQWQsR0FBNkIsRUFBdkMsQ0FBTDtBQUFBLE9BTk4sRUFPUnBDLElBUFEsQ0FPSCxJQVBHLEVBT0c7QUFBQSxlQUFLZSxFQUFFUyxFQUFQO0FBQUEsT0FQSCxFQVFSdEIsSUFSUSxDQVFIaEMsR0FBR21FLElBQUgsR0FDSGpDLEVBREcsQ0FDQSxPQURBLEVBQ1NrQyxXQURULEVBRUhsQyxFQUZHLENBRUEsTUFGQSxFQUVRbUMsT0FGUixFQUdIbkMsRUFIRyxDQUdBLEtBSEEsRUFHT29DLFNBSFAsQ0FSRztBQVlUO0FBWlMsT0FhUnBDLEVBYlEsQ0FhTCxPQWJLLEVBYUlxQyxjQWJKLENBQVg7O0FBZUFWLFdBQUt6QixNQUFMLENBQVksT0FBWixFQUFxQm9DLElBQXJCLENBQTBCLFVBQVUzQixDQUFWLEVBQWE7QUFDckMseUJBQWVBLEVBQUVTLEVBQWpCLGtCQUFnQ1QsRUFBRUksS0FBbEM7QUFDRCxPQUZEOztBQUlBLFVBQUl3QixRQUFRN0MsSUFBSVEsTUFBSixDQUFXLEdBQVgsRUFDVE4sSUFEUyxDQUNKLE9BREksRUFDSyxRQURMLEVBRVRZLFNBRlMsQ0FFQyxNQUZELEVBR1RDLElBSFMsQ0FHSnRCLFdBSEksRUFHUztBQUFBLGVBQUt3QixFQUFFUyxFQUFQO0FBQUEsT0FIVCxFQUlUVixLQUpTLEdBSURSLE1BSkMsQ0FJTSxNQUpOLEVBS1ROLElBTFMsQ0FLSixPQUxJLEVBS0ssT0FMTCxFQU1UMEMsSUFOUyxDQU1KO0FBQUEsZUFBSzNCLEVBQUU2QixLQUFQO0FBQUEsT0FOSSxDQUFaOztBQVFBLFVBQUlDLFNBQVMsS0FBS25ELE1BQUwsQ0FDVlksTUFEVSxDQUNILEdBREcsRUFFVk4sSUFGVSxDQUVMLE9BRkssRUFFSSxRQUZKLEVBR1ZZLFNBSFUsQ0FHQSxHQUhBLEVBSVZDLElBSlUsQ0FJTDNDLEdBQUc0RSxHQUFILENBQU92RCxXQUFQLEVBQW9CO0FBQUEsZUFBS3dCLEVBQUVJLEtBQVA7QUFBQSxPQUFwQixFQUFrQzFCLE1BQWxDLEVBSkssRUFJdUM7QUFBQSxlQUFLc0IsRUFBRVMsRUFBUDtBQUFBLE9BSnZDLEVBS1ZWLEtBTFUsR0FNVlIsTUFOVSxDQU1ILEdBTkcsRUFPVk4sSUFQVSxDQU9MLElBUEssRUFPQztBQUFBLCtCQUFtQmUsRUFBRUksS0FBckI7QUFBQSxPQVBELEVBUVZuQixJQVJVLENBUUwsV0FSSyxFQVFRLFVBQVVlLENBQVYsRUFBYWdDLENBQWIsRUFBZ0I7QUFDakMsWUFBSXRDLElBQUksQ0FBUjtBQUNBLFlBQUlDLElBQUlxQyxJQUFJLEVBQVo7QUFDQSw4QkFBb0J0QyxDQUFwQixTQUF5QkMsQ0FBekI7QUFDRCxPQVpVLENBQWI7O0FBY0FtQyxhQUFPdkMsTUFBUCxDQUFjLE1BQWQsRUFDR04sSUFESCxDQUNRLE9BRFIsRUFDaUIsRUFEakIsRUFFR0EsSUFGSCxDQUVRLFFBRlIsRUFFa0IsQ0FGbEIsRUFHRzhCLEtBSEgsQ0FHUyxNQUhULEVBR2lCO0FBQUEsZUFBSyxpQkFBT2tCLE1BQVAsQ0FBY2pDLEVBQUVJLEtBQUYsR0FBVSxDQUF4QixDQUFMO0FBQUEsT0FIakIsRUFJR1csS0FKSCxDQUlTLFFBSlQsRUFJbUI7QUFBQSxlQUFLLGlCQUFPa0IsTUFBUCxDQUFjakMsRUFBRUksS0FBRixHQUFVLENBQXhCLENBQUw7QUFBQSxPQUpuQjs7QUFNQTBCLGFBQU92QyxNQUFQLENBQWMsTUFBZCxFQUNHTixJQURILENBQ1EsT0FEUixFQUNpQixrQkFEakIsRUFFR0EsSUFGSCxDQUVRLEdBRlIsRUFFYSxLQUFLLENBRmxCLEVBR0dBLElBSEgsQ0FHUSxHQUhSLEVBR2EsS0FBSyxDQUhsQixFQUlHMEMsSUFKSCxDQUlRO0FBQUEsMEJBQWMzQixFQUFFSSxLQUFoQjtBQUFBLE9BSlI7O0FBTUFDLGlCQUFXekIsS0FBWCxDQUFpQkosV0FBakIsRUFBOEJhLEVBQTlCLENBQWlDLE1BQWpDLEVBQXlDNkMsTUFBekM7O0FBRUE3QixpQkFBV0UsS0FBWCxDQUFpQixNQUFqQixFQUF5QnpCLEtBQXpCLENBQStCRCxXQUEvQjs7QUFFQSxlQUFTcUQsTUFBVCxHQUFrQjtBQUNoQnRCLGFBQ0czQixJQURILENBQ1EsSUFEUixFQUNjO0FBQUEsaUJBQUtlLEVBQUVhLE1BQUYsQ0FBU25CLENBQWQ7QUFBQSxTQURkLEVBRUdULElBRkgsQ0FFUSxJQUZSLEVBRWM7QUFBQSxpQkFBS2UsRUFBRWEsTUFBRixDQUFTbEIsQ0FBZDtBQUFBLFNBRmQsRUFHR1YsSUFISCxDQUdRLElBSFIsRUFHYztBQUFBLGlCQUFLZSxFQUFFYyxNQUFGLENBQVNwQixDQUFkO0FBQUEsU0FIZCxFQUlHVCxJQUpILENBSVEsSUFKUixFQUljO0FBQUEsaUJBQUtlLEVBQUVjLE1BQUYsQ0FBU25CLENBQWQ7QUFBQSxTQUpkOztBQU1BcUIsYUFDR0QsS0FESCxDQUNTLE1BRFQsRUFDaUI7QUFBQSxpQkFBSyxpQkFBT2tCLE1BQVAsQ0FBY2pDLEVBQUVJLEtBQUYsR0FBVSxDQUF4QixDQUFMO0FBQUEsU0FEakIsRUFFR25CLElBRkgsQ0FFUSxXQUZSLEVBRXFCO0FBQUEsZ0NBQWtCZSxFQUFFTixDQUFwQixTQUF5Qk0sRUFBRUwsQ0FBM0I7QUFBQSxTQUZyQjs7QUFJQWlDLGNBQ0czQyxJQURILENBQ1EsR0FEUixFQUNhO0FBQUEsaUJBQUtlLEVBQUVOLENBQUYsR0FBTU0sRUFBRTZCLEtBQUYsQ0FBUU0sTUFBZCxHQUF1QkMsS0FBS0MsSUFBTCxDQUFVckMsRUFBRW9CLElBQVosQ0FBNUI7QUFBQSxTQURiLEVBRUduQyxJQUZILENBRVEsR0FGUixFQUVhO0FBQUEsaUJBQUtlLEVBQUVMLENBQUYsR0FBTXlDLEtBQUtDLElBQUwsQ0FBVXJDLEVBQUVvQixJQUFaLENBQVg7QUFBQSxTQUZiOztBQUlBSixhQUFLc0IsSUFBTCxDQUFVQyxRQUFRLEdBQVIsQ0FBVjtBQUNEOztBQUVEO0FBQ0EsVUFBSUMsVUFBVSxDQUFkO0FBQUEsVUFBaUI7QUFDZkMsZUFBUyxFQURYOztBQUdBLGVBQVNGLE9BQVQsQ0FBaUJHLEtBQWpCLEVBQXdCO0FBQ3RCLFlBQUlDLFdBQVd4RixHQUFHeUYsUUFBSCxDQUFZcEUsV0FBWixDQUFmO0FBQ0EsZUFBTyxVQUFVd0IsQ0FBVixFQUFhO0FBQ2xCLGNBQUk2QyxLQUFLLElBQUlKLE1BQUosR0FBYUQsT0FBdEI7QUFBQSxjQUNFTSxNQUFNOUMsRUFBRU4sQ0FBRixHQUFNbUQsRUFEZDtBQUFBLGNBRUVFLE1BQU0vQyxFQUFFTixDQUFGLEdBQU1tRCxFQUZkO0FBQUEsY0FHRUcsTUFBTWhELEVBQUVMLENBQUYsR0FBTWtELEVBSGQ7QUFBQSxjQUlFSSxNQUFNakQsRUFBRUwsQ0FBRixHQUFNa0QsRUFKZDtBQUtBRixtQkFBU08sS0FBVCxDQUFlLFVBQVVDLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDO0FBQzdDLGdCQUFJSixLQUFLSyxLQUFMLElBQWVMLEtBQUtLLEtBQUwsS0FBZXhELENBQWxDLEVBQXNDO0FBQ3BDLGtCQUFJTixJQUFJTSxFQUFFTixDQUFGLEdBQU15RCxLQUFLSyxLQUFMLENBQVc5RCxDQUF6QjtBQUFBLGtCQUNFQyxJQUFJSyxFQUFFTCxDQUFGLEdBQU13RCxLQUFLSyxLQUFMLENBQVc3RCxDQUR2QjtBQUFBLGtCQUVFOEQsSUFBSXJCLEtBQUtDLElBQUwsQ0FBVTNDLElBQUlBLENBQUosR0FBUUMsSUFBSUEsQ0FBdEIsQ0FGTjtBQUdBLGtCQUFJOEQsSUFBSVosRUFBUixFQUFZO0FBQ1ZZLG9CQUFJLENBQUNBLElBQUlaLEVBQUwsSUFBV1ksQ0FBWCxHQUFlZixLQUFuQjtBQUNBMUMsa0JBQUVOLENBQUYsSUFBT0EsS0FBSytELENBQVo7QUFDQXpELGtCQUFFTCxDQUFGLElBQU9BLEtBQUs4RCxDQUFaO0FBQ0FOLHFCQUFLSyxLQUFMLENBQVc5RCxDQUFYLElBQWdCQSxDQUFoQjtBQUNBeUQscUJBQUtLLEtBQUwsQ0FBVzdELENBQVgsSUFBZ0JBLENBQWhCO0FBQ0Q7QUFDRjtBQUNELG1CQUFPeUQsS0FBS0wsR0FBTCxJQUFZTyxLQUFLUixHQUFqQixJQUF3Qk8sS0FBS0osR0FBN0IsSUFBb0NNLEtBQUtQLEdBQWhEO0FBQ0QsV0FkRDtBQWVELFNBckJEO0FBc0JEOztBQUVEO0FBQ0E7QUFDQSxVQUFJVSxTQUFTLENBQWI7QUFDQTtBQUNBLFVBQUlDLGdCQUFnQixFQUFwQjs7QUFFQSxXQUFLLElBQUkzQixJQUFJLENBQWIsRUFBZ0JBLElBQUl4RCxZQUFZMkQsTUFBaEMsRUFBd0NILEdBQXhDLEVBQTZDO0FBQzNDMkIsc0JBQWlCM0IsQ0FBakIsU0FBc0JBLENBQXRCLElBQTZCLENBQTdCO0FBQ0Q7O0FBRURuRCxrQkFBWStFLE9BQVosQ0FBb0IsVUFBVTVELENBQVYsRUFBYTtBQUMvQjJELHNCQUFpQjNELEVBQUVhLE1BQUYsQ0FBU2dELEtBQTFCLFNBQW1DN0QsRUFBRWMsTUFBRixDQUFTK0MsS0FBNUMsSUFBdUQsQ0FBdkQ7QUFDRCxPQUZEOztBQUlBO0FBQ0EsZUFBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3pCLGVBQU9MLGNBQWlCSSxFQUFFRixLQUFuQixTQUE0QkcsRUFBRUgsS0FBOUIsQ0FBUDtBQUNEOztBQUVELGVBQVNuQyxjQUFULEdBQTBCO0FBQ3hCdkUsV0FBR3FDLEtBQUgsQ0FBU3lFLGNBQVQ7QUFDQSxZQUFJUCxXQUFXLENBQWYsRUFBa0I7QUFDaEI7QUFDQSxjQUFJMUQsSUFBSTdDLEdBQUcrRyxNQUFILENBQVUsSUFBVixFQUFnQmxELElBQWhCLEdBQXVCbUQsUUFBL0I7QUFDQW5ELGVBQUtELEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUsrQyxZQUFZOUQsQ0FBWixFQUFlb0UsQ0FBZixLQUFxQk4sWUFBWU0sQ0FBWixFQUFlcEUsQ0FBZixDQUFyQixHQUF5QyxDQUF6QyxHQUE2QyxHQUFsRDtBQUFBLFdBQXRCO0FBQ0FZLGVBQUtHLEtBQUwsQ0FBVyxTQUFYLEVBQXNCO0FBQUEsbUJBQUtmLEVBQUU2RCxLQUFGLEtBQVlPLEVBQUV2RCxNQUFGLENBQVNnRCxLQUFyQixJQUE4QjdELEVBQUU2RCxLQUFGLEtBQVlPLEVBQUV0RCxNQUFGLENBQVMrQyxLQUFuRCxHQUEyRCxDQUEzRCxHQUErRCxHQUFwRTtBQUFBLFdBQXRCO0FBQ0E7QUFDQUgsbUJBQVMsQ0FBVDtBQUNELFNBUEQsTUFPTztBQUNMO0FBQ0ExQyxlQUFLRCxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBSCxlQUFLRyxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBMkMsbUJBQVMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsZUFBU25DLFdBQVQsQ0FBcUJ2QixDQUFyQixFQUF3QjtBQUN0QixZQUFJLENBQUM3QyxHQUFHcUMsS0FBSCxDQUFTNkUsTUFBZCxFQUFzQmhFLFdBQVdpRSxXQUFYLENBQXVCLEdBQXZCLEVBQTRCQyxPQUE1QjtBQUN0QnZFLFVBQUV3RSxFQUFGLEdBQU94RSxFQUFFTixDQUFUO0FBQ0FNLFVBQUV5RSxFQUFGLEdBQU96RSxFQUFFTCxDQUFUO0FBQ0Q7O0FBRUQsZUFBUzZCLE9BQVQsQ0FBaUJ4QixDQUFqQixFQUFvQjtBQUNsQkEsVUFBRXdFLEVBQUYsR0FBT3JILEdBQUdxQyxLQUFILENBQVNFLENBQWhCO0FBQ0FNLFVBQUV5RSxFQUFGLEdBQU90SCxHQUFHcUMsS0FBSCxDQUFTRyxDQUFoQjtBQUNEOztBQUVELGVBQVM4QixTQUFULENBQW1CekIsQ0FBbkIsRUFBc0I7QUFDcEIsWUFBSSxDQUFDN0MsR0FBR3FDLEtBQUgsQ0FBUzZFLE1BQWQsRUFBc0JoRSxXQUFXaUUsV0FBWCxDQUF1QixDQUF2QjtBQUN0QnRFLFVBQUV3RSxFQUFGLEdBQU8sSUFBUDtBQUNBeEUsVUFBRXlFLEVBQUYsR0FBTyxJQUFQO0FBQ0Q7QUFFRjs7Ozs7O2tCQTdOa0JwRyxJOzs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQnFHLGM7Ozs4QkFNRnhELEksRUFBTTtBQUNyQixVQUFJQSxTQUFTLFFBQWIsRUFBdUI7QUFDckIsZUFBTy9ELEdBQUd3SCxZQUFWO0FBQ0QsT0FGRCxNQUdLLElBQUl6RCxTQUFTLE9BQWIsRUFBc0I7QUFDekIsZUFBTy9ELEdBQUd5SCxXQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUkxRCxTQUFTLFNBQWIsRUFBd0I7QUFDM0IsZUFBTy9ELEdBQUcwSCxhQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUkzRCxTQUFTLFFBQWIsRUFBdUI7QUFDMUIsZUFBTy9ELEdBQUcySCxZQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUk1RCxTQUFTLFVBQWIsRUFBeUI7QUFDNUIsZUFBTy9ELEdBQUc0SCxjQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUk3RCxTQUFTLE1BQWIsRUFBcUI7QUFDeEIsZUFBTy9ELEdBQUc2SCxVQUFWO0FBQ0QsT0FGSSxNQUdBLElBQUk5RCxTQUFTLEtBQWIsRUFBb0I7QUFDdkIsZUFBTy9ELEdBQUc4SCxTQUFWO0FBQ0QsT0FGSSxNQUdBO0FBQ0gsZUFBTzlILEdBQUd3SCxZQUFWO0FBQ0Q7QUFDRjs7O3dCQTdCbUI7QUFDbEIsYUFBT3hILEdBQUcrSCxlQUFILEdBQXFCQyxNQUFyQixDQUE0QixDQUFDLENBQUQsRUFBSSxHQUFKLENBQTVCLEVBQXNDQyxZQUF0QyxDQUFtRGpJLEdBQUdrSSxrQkFBdEQsQ0FBUDtBQUNEOzs7QUE2QkQsNEJBQXNDO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUF4QmhKLE9BQXdCO0FBQUEsUUFBeEJBLE9BQXdCLGdDQUFkLEtBQWM7O0FBQUE7O0FBQ3BDLFNBQUtpSixNQUFMLEdBQWMscUJBQVcsRUFBRWpKLFNBQVNBLE9BQVgsRUFBWCxDQUFkO0FBQ0Q7Ozs7a0NBRWFpQixJLEVBQU07QUFDbEIsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxjQUFNLElBQUlGLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7QUFDRCxVQUFJbUksT0FBTyxJQUFYO0FBQ0E7QUFDQUEsV0FBS0MsUUFBTCxHQUFnQixrQkFBUUMsV0FBUixDQUFvQm5JLEtBQUtxQixNQUFMLENBQVk4QixFQUFoQyxDQUFoQjtBQUNBOEUsV0FBSzdILE1BQUwsR0FBY1AsR0FBRytHLE1BQUgsT0FBY3FCLEtBQUtDLFFBQW5CLENBQWQ7QUFDQTtBQUNBLFVBQUksQ0FBQ0QsS0FBSzdILE1BQUwsQ0FBWXNELElBQVosRUFBTCxFQUF5QjtBQUN2QnVFLGFBQUtELE1BQUwsQ0FBWTlJLEtBQVosdUJBQXNDK0ksS0FBS0MsUUFBM0M7QUFDQUUsVUFBRSxPQUFGLEVBQVc7QUFDVGpGLGNBQUk4RSxLQUFLQyxRQURBO0FBRVQzRCxpQkFBT3ZFLEtBQUtxQixNQUFMLENBQVlrRCxLQUZWO0FBR1Q3QyxpQkFBTzFCLEtBQUtxQixNQUFMLENBQVlnSCxDQUhWO0FBSVR6RyxrQkFBUTVCLEtBQUtxQixNQUFMLENBQVlpSDtBQUpYLFNBQVgsRUFLR0MsUUFMSCxDQUtZLE1BTFo7QUFNQTtBQUNBTixhQUFLN0gsTUFBTCxHQUFjUCxHQUFHK0csTUFBSCxPQUFjcUIsS0FBS0MsUUFBbkIsQ0FBZDtBQUNEO0FBQ0Q7QUFDQSxVQUFJLENBQUNELEtBQUs3SCxNQUFMLENBQVlzRCxJQUFaLEVBQUwsRUFBeUI7QUFDdkIsY0FBTSxJQUFJNUQsS0FBSiw0Q0FBbURtSSxLQUFLQyxRQUF4RCx5QkFBTjtBQUNEO0FBQ0Q7QUFDQUUsY0FBTUgsS0FBS0MsUUFBWCxFQUF1Qk0sTUFBdkIsQ0FBOEI7QUFDNUJDLGVBQU8sZUFBU3ZHLEtBQVQsRUFBZ0J3RyxFQUFoQixFQUFvQjtBQUN6QlQsZUFBS0QsTUFBTCxDQUFZOUksS0FBWixzQkFBcUMrSSxLQUFLQyxRQUExQztBQUNBLGlCQUFPRSxFQUFFLElBQUYsRUFBUUksTUFBUixDQUFlLFNBQWYsRUFBMEJHLE1BQTFCLEVBQVA7QUFDRDtBQUoyQixPQUE5QjtBQU1BVixXQUFLRCxNQUFMLENBQVk5SSxLQUFaLDZCQUE0QytJLEtBQUtDLFFBQWpEO0FBQ0E7QUFDQUUsY0FBTUgsS0FBS0MsUUFBWCxFQUF1QmpHLE1BQXZCLENBQThCLHFCQUFnQjJHLFdBQWhCLENBQTRCNUksSUFBNUIsQ0FBOUI7QUFDQW9JLFFBQUUsT0FBRixFQUFXRyxRQUFYLE9BQXdCTixLQUFLQyxRQUE3Qjs7QUFFQTtBQUNBRCxXQUFLWSxRQUFMLEdBQWdCLGtCQUFRQyxXQUFSLENBQW9COUksS0FBS3FCLE1BQUwsQ0FBWThCLEVBQWhDLENBQWhCO0FBQ0E4RSxXQUFLNUcsTUFBTCxHQUFjeEIsR0FBRytHLE1BQUgsVUFBaUJxQixLQUFLWSxRQUF0QixDQUFkO0FBQ0EsVUFBSSxDQUFDWixLQUFLNUcsTUFBTCxDQUFZcUMsSUFBWixFQUFMLEVBQXlCO0FBQ3ZCdUUsYUFBS0QsTUFBTCxDQUFZOUksS0FBWix1QkFBc0MrSSxLQUFLWSxRQUEzQztBQUNBWixhQUFLNUcsTUFBTCxHQUFjeEIsR0FBRytHLE1BQUgsVUFBaUJxQixLQUFLQyxRQUF0QixFQUFrQ2pHLE1BQWxDLENBQXlDLEtBQXpDLEVBQ1hOLElBRFcsQ0FDTixJQURNLEVBQ0FzRyxLQUFLWSxRQURMLENBQWQ7QUFFRDtBQUNEO0FBQ0EsVUFBSSxDQUFDWixLQUFLNUcsTUFBTCxDQUFZcUMsSUFBWixFQUFMLEVBQXlCO0FBQ3ZCLGNBQU0sSUFBSTVELEtBQUosNENBQW1EbUksS0FBS1ksUUFBeEQseUJBQU47QUFDRDtBQUNEO0FBQ0FaLFdBQUs1RyxNQUFMLENBQ0dNLElBREgsQ0FDUSxPQURSLEVBQ2lCM0IsS0FBS3FCLE1BQUwsQ0FBWWdILENBRDdCLEVBRUcxRyxJQUZILENBRVEsUUFGUixFQUVrQjNCLEtBQUtxQixNQUFMLENBQVlpSCxDQUY5QjtBQUdEOzs7Ozs7a0JBekZrQmxCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0lBSXFCMkIsTzs7Ozs7Ozs7O0FBRW5COzs7OztnQ0FLbUJGLFEsRUFBVTtBQUMzQiwrQkFBdUJBLFFBQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O2dDQUttQkEsUSxFQUFVO0FBQzNCLCtCQUF1QkEsUUFBdkI7QUFDRDs7QUFFRDs7Ozs7Ozs7Z0NBS21CRyxRLEVBQVU7QUFDM0IsK0JBQXVCQSxRQUF2QjtBQUNEOzs7Ozs7a0JBM0JrQkQsTzs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7OztJQUVxQkUsUztBQUVuQix1QkFBcUU7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQXZEbEssT0FBdUQ7QUFBQSxRQUF2REEsT0FBdUQsZ0NBQTdDLEtBQTZDO0FBQUEsb0NBQXRDVyxlQUFzQztBQUFBLFFBQXRDQSxlQUFzQyx3Q0FBcEJWLFFBQVFXLEdBQVk7O0FBQUE7O0FBQ25FLFNBQUtELGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7Z0NBRVdNLEksRUFBTTtBQUNoQixVQUFJaUksT0FBTyxJQUFYO0FBQ0EsVUFBSWlCLFFBQVFkLEVBQUUsT0FBRixFQUFXLEVBQUVlLE9BQU8sTUFBVCxFQUFYLENBQVo7QUFDQWxCLFdBQUttQixpQkFBTCxHQUF5QmIsUUFBekIsQ0FBa0NXLEtBQWxDO0FBSGdCO0FBQUE7QUFBQTs7QUFBQTtBQUloQiw2QkFBaUIvSCxPQUFPQyxNQUFQLENBQWNwQixLQUFLcUIsTUFBTCxDQUFZZ0ksS0FBMUIsQ0FBakIsOEhBQW1EO0FBQUEsY0FBMUNDLElBQTBDOztBQUNqRCxjQUFJQyxXQUFXLHVCQUFhRCxJQUFiLEVBQW1CLEtBQUsxSixPQUF4QixDQUFmO0FBQ0EsY0FBSTRKLFFBQVFwQixFQUFFLE9BQUYsRUFBVyxFQUFFZSxPQUFPLFVBQVQsRUFBWCxFQUFrQ1osUUFBbEMsQ0FBMkNXLEtBQTNDLENBQVo7QUFDQSxjQUFJSSxLQUFLRCxLQUFMLElBQWNsSSxPQUFPQyxNQUFQLENBQWNrSSxLQUFLRCxLQUFuQixFQUEwQnhFLE1BQTFCLEdBQW1DLENBQXJELEVBQXdEO0FBQ3REdUQsY0FBRSxVQUFGLEVBQWMsRUFBRWUsT0FBTyxpQkFBVCxFQUFkLEVBQTRDTSxJQUE1QyxDQUFpREgsS0FBSy9FLEtBQUwsR0FBYSxlQUE5RCxFQUErRWdFLFFBQS9FLENBQXdGaUIsS0FBeEY7QUFDQSxnQkFBSUUsV0FBV3RCLEVBQUUsT0FBRixFQUFXLEVBQUVlLE9BQU8sa0JBQVQsRUFBWCxFQUEwQ1osUUFBMUMsQ0FBbURpQixLQUFuRCxDQUFmO0FBRnNEO0FBQUE7QUFBQTs7QUFBQTtBQUd0RCxvQ0FBb0JySSxPQUFPQyxNQUFQLENBQWNrSSxLQUFLRCxLQUFuQixDQUFwQixtSUFBK0M7QUFBQSxvQkFBdENNLE9BQXNDOztBQUM3Q0osMkJBQVcsdUJBQWFJLE9BQWIsRUFBc0IsS0FBSy9KLE9BQTNCLENBQVg7QUFDQXdJLGtCQUFFLFVBQUYsRUFBYyxFQUFFZSxPQUFPLGlCQUFULEVBQTRCUyxPQUFPLGlCQUFXO0FBQUUsMkJBQU9MLFNBQVNNLE9BQVQsRUFBUDtBQUE0QixtQkFBNUUsRUFBZCxFQUE4RnhGLElBQTlGLENBQW1Hc0YsUUFBUXBGLEtBQTNHLEVBQWtIZ0UsUUFBbEgsQ0FBMkhtQixRQUEzSDtBQUNEO0FBTnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPdkQsV0FQRCxNQVFLO0FBQ0h0QixjQUFFLFVBQUYsRUFBYyxFQUFFZSxPQUFPLGlCQUFULEVBQTRCUyxPQUFPLGlCQUFXO0FBQUUsdUJBQU9MLFNBQVNNLE9BQVQsRUFBUDtBQUE0QixlQUE1RSxFQUFkLEVBQThGeEYsSUFBOUYsQ0FBbUdpRixLQUFLL0UsS0FBeEcsRUFBK0dnRSxRQUEvRyxDQUF3SGlCLEtBQXhIO0FBQ0Q7QUFDRjtBQWxCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CaEIsYUFBT04sS0FBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQUlZLE9BQU8xQixFQUFFLE9BQUYsRUFBVyxFQUFFZSxPQUFPLFVBQVQsRUFBWCxDQUFYO0FBQ0EsVUFBSVksV0FBVzNCLEVBQUUsT0FBRixFQUFXLEVBQUVlLE9BQU8sa0JBQVQsRUFBWCxDQUFmO0FBQ0FmLFFBQUUsVUFBRixFQUFjLEVBQUVlLE9BQU8saUJBQVQsRUFBZCxFQUE0Q00sSUFBNUMsQ0FBaUQsbUJBQWpELEVBQXNFbEIsUUFBdEUsQ0FBK0V1QixJQUEvRTtBQUNBMUIsUUFBRSxVQUFGLEVBQWMsRUFBRWUsT0FBTyxpQkFBVCxFQUE0QlMsT0FBTyxpQkFBVztBQUFFO0FBQVMsU0FBekQsRUFBZCxFQUEyRXZGLElBQTNFLENBQWdGLGFBQWhGLEVBQStGa0UsUUFBL0YsQ0FBd0d3QixRQUF4RztBQUNBM0IsUUFBRSxVQUFGLEVBQWMsRUFBRWUsT0FBTyxpQkFBVCxFQUE0QlMsT0FBTyxpQkFBVztBQUFFO0FBQVMsU0FBekQsRUFBZCxFQUEyRXZGLElBQTNFLENBQWdGLE9BQWhGLEVBQXlGa0UsUUFBekYsQ0FBa0d3QixRQUFsRztBQUNBM0IsUUFBRSxVQUFGLEVBQWMsRUFBRWUsT0FBTyxpQkFBVCxFQUE0QlMsT0FBTyxpQkFBVztBQUFFO0FBQVMsU0FBekQsRUFBZCxFQUEyRXZGLElBQTNFLENBQWdGLE9BQWhGLEVBQXlGa0UsUUFBekYsQ0FBa0d3QixRQUFsRztBQUNBQSxlQUFTeEIsUUFBVCxDQUFrQnVCLElBQWxCO0FBQ0EsYUFBT0EsSUFBUDtBQUNEOzs7Ozs7a0JBckNrQmIsUzs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7O0lBRXFCZSxlO0FBRW5CLDJCQUFZQyxNQUFaLEVBQTZFO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUF2RGxMLE9BQXVEO0FBQUEsUUFBdkRBLE9BQXVELGdDQUE3QyxLQUE2QztBQUFBLG9DQUF0Q1csZUFBc0M7QUFBQSxRQUF0Q0EsZUFBc0Msd0NBQXBCVixRQUFRVyxHQUFZOztBQUFBOztBQUMzRSxTQUFLQyxPQUFMLEdBQWU7QUFDYmIsZUFBU0EsT0FESTtBQUViVyx1QkFBaUJBO0FBRkosS0FBZjtBQUlBLFNBQUtzSSxNQUFMLEdBQWMscUJBQVcsRUFBRWpKLFNBQVNBLE9BQVgsRUFBWCxDQUFkO0FBQ0EsU0FBS21MLEtBQUwsR0FBYSxvQkFBVUQsT0FBT1YsUUFBakIsRUFBMkIsS0FBSzNKLE9BQWhDLENBQWI7QUFDRDs7Ozs4QkFFUztBQUNSLFdBQUtzSyxLQUFMLENBQVdDLElBQVg7QUFDRDs7Ozs7O2tCQWJrQkgsZTs7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7Ozs7OztJQUVxQkksSztBQUVuQixpQkFBWUgsTUFBWixFQUE2RTtBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBdkRsTCxPQUF1RDtBQUFBLFFBQXZEQSxPQUF1RCxnQ0FBN0MsS0FBNkM7QUFBQSxvQ0FBdENXLGVBQXNDO0FBQUEsUUFBdENBLGVBQXNDLHdDQUFwQlYsUUFBUVcsR0FBWTs7QUFBQTs7QUFDM0UsU0FBS0MsT0FBTCxHQUFlO0FBQ2JiLGVBQVNBLE9BREk7QUFFYlcsdUJBQWlCQTtBQUZKLEtBQWY7QUFJQSxTQUFLc0ksTUFBTCxHQUFjLHFCQUFXLEVBQUVqSixTQUFTQSxPQUFYLEVBQVgsQ0FBZDtBQUNBLFNBQUtrTCxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OzsyQkFFTTtBQUNMLFVBQUloQyxPQUFPLElBQVg7QUFDQSxVQUFJRyxRQUFNSCxLQUFLZ0MsTUFBTCxDQUFZOUcsRUFBbEIsRUFBd0IwQixNQUE1QixFQUFvQztBQUNsQ3VELGdCQUFNSCxLQUFLZ0MsTUFBTCxDQUFZOUcsRUFBbEIsRUFBd0JnSCxJQUF4QjtBQUNBO0FBQ0Q7QUFDRC9CLFFBQUUsT0FBRixFQUFXO0FBQ1RqRixZQUFJOEUsS0FBS2dDLE1BQUwsQ0FBWTlHLEVBRFA7QUFFVG9CLGVBQU8sb0JBRkU7QUFHVDRFLGVBQU87QUFIRSxPQUFYLEVBSUdaLFFBSkgsQ0FJWSxNQUpaOztBQU5LO0FBQUE7QUFBQTs7QUFBQTtBQVlMLDZCQUFnQnBILE9BQU9DLE1BQVAsQ0FBYzZHLEtBQUtnQyxNQUFMLENBQVlJLFlBQTFCLENBQWhCLDhIQUF5RDtBQUFBLGNBQWhEQyxHQUFnRDs7QUFDdkRsQyxZQUFFLFNBQUYsRUFBYTtBQUNYbUMsaUJBQUtELElBQUluSDtBQURFLFdBQWIsRUFFR2tCLElBRkgsQ0FFUWlHLElBQUkvRixLQUZaLEVBRW1CZ0UsUUFGbkIsT0FFZ0NOLEtBQUtnQyxNQUFMLENBQVk5RyxFQUY1QztBQUdBaUYsWUFBRSxTQUFGLEVBQWE7QUFDWGpGLGdCQUFJbUgsSUFBSW5ILEVBREc7QUFFWHFILGtCQUFNRixJQUFJbkgsRUFGQztBQUdYUyxrQkFBTTBHLElBQUkxRyxJQUhDO0FBSVg2RyxtQkFBT0gsSUFBSUcsS0FKQTtBQUtYQyxvQkFBUSxrQkFBVztBQUNqQnpDLG1CQUFLZ0MsTUFBTCxDQUFZSSxZQUFaLENBQXlCLEtBQUtsSCxFQUE5QixFQUFrQ3NILEtBQWxDLEdBQTBDLEtBQUtBLEtBQS9DO0FBQ0QsYUFQVTtBQVFYMUssbUJBQU8sS0FBSzJLLE1BUkQ7QUFTWEMsbUJBQU8sS0FBS0QsTUFURDtBQVVYRSxtQkFBTyxLQUFLRjtBQVZELFdBQWIsRUFXR25DLFFBWEgsT0FXZ0JOLEtBQUtnQyxNQUFMLENBQVk5RyxFQVg1QjtBQVlBaUYsWUFBRSxPQUFGLEVBQVdHLFFBQVgsT0FBd0JOLEtBQUtnQyxNQUFMLENBQVk5RyxFQUFwQztBQUNEO0FBN0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBK0JMaUYsY0FBTUgsS0FBS2dDLE1BQUwsQ0FBWTlHLEVBQWxCLEVBQXdCcUYsTUFBeEIsQ0FBK0I7QUFDN0JxQyxtQkFBVyxLQURrQjtBQUU3QnBDLGVBQU8sZUFBU3ZHLEtBQVQsRUFBZ0J3RyxFQUFoQixFQUFvQjtBQUN6QlQsZUFBS0QsTUFBTCxDQUFZOUksS0FBWixrQ0FBaUQrSSxLQUFLZ0MsTUFBTCxDQUFZOUcsRUFBN0Q7QUFDQSxpQkFBT2lGLEVBQUUsSUFBRixFQUFRSSxNQUFSLENBQWUsU0FBZixFQUEwQkcsTUFBMUIsRUFBUDtBQUNELFNBTDRCO0FBTTdCbUMsaUJBQVM7QUFDUEMsY0FBSSxjQUFXO0FBQ2I7QUFDQTlDLGlCQUFLckksT0FBTCxDQUFhRixlQUFiLENBQTZCdUksS0FBS2dDLE1BQWxDO0FBQ0E3QixjQUFFLElBQUYsRUFBUUksTUFBUixDQUFlLE9BQWY7QUFDRCxXQUxNO0FBTVB3QyxrQkFBUSxrQkFBVztBQUNqQjVDLGNBQUUsSUFBRixFQUFRSSxNQUFSLENBQWUsT0FBZjtBQUNEO0FBUk07QUFOb0IsT0FBL0I7QUFpQkQ7Ozs7OztrQkEzRGtCNEIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7SUFLcUJhLE87QUFDbkI7Ozs7O0FBS0EsbUJBQVlDLE1BQVosRUFBK0Q7QUFBQTs7QUFBQSxtRkFBSixFQUFJO0FBQUEsNEJBQXpDbk0sT0FBeUM7QUFBQSxRQUF6Q0EsT0FBeUMsZ0NBQS9CLEtBQStCO0FBQUEsNkJBQXhCb00sUUFBd0I7QUFBQSxRQUF4QkEsUUFBd0IsaUNBQWIsSUFBYTs7QUFBQTs7QUFDN0QsU0FBS3BNLE9BQUwsR0FBZUEsT0FBZjtBQUNBOzs7OztBQUtBLFNBQUtxTSxZQUFMLEdBQW9CLEVBQXBCO0FBQ0E7Ozs7O0FBS0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosQ0FBVUosTUFBVixFQUFrQixJQUFsQixDQUFkO0FBQ0E7Ozs7O0FBS0EsU0FBS0ssTUFBTCxHQUFjLEtBQWQ7QUFDQTs7Ozs7QUFLQUMsZ0JBQVksWUFBTTtBQUNoQixVQUFJLE1BQUtELE1BQVQsRUFBaUI7QUFDZixjQUFLQSxNQUFMLEdBQWMsS0FBZDtBQUNBLGVBQU8sTUFBS0UsSUFBTCxFQUFQO0FBQ0Q7QUFDRixLQUxELEVBS0dOLFFBTEg7QUFNRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFNSU8sUSxFQUFVQyxRLEVBQVVsQixLLEVBQU87QUFDN0IsVUFBSSxFQUFFQSxNQUFNa0IsUUFBTixhQUEyQnhLLE1BQTdCLEtBQXdDdUssU0FBU0MsUUFBVCxNQUF1QmxCLEtBQW5FLEVBQTBFO0FBQ3hFLFlBQUksS0FBSzFMLE9BQVQsRUFBa0I7QUFDaEI7QUFDRDtBQUNEMk0saUJBQVNDLFFBQVQsSUFBcUJsQixLQUFyQjtBQUNBLGFBQUtjLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3dCQU1JL0gsTSxFQUFRb0ksRyxFQUFLO0FBQ2YsVUFBSSxRQUFPcEksT0FBT29JLEdBQVAsQ0FBUCxNQUF1QixRQUF2QixJQUFtQ3BJLE9BQU9vSSxHQUFQLE1BQWdCLElBQXZELEVBQTZEO0FBQzNELGVBQU8sSUFBSU4sS0FBSixDQUFVOUgsT0FBT29JLEdBQVAsQ0FBVixFQUF1QixJQUF2QixDQUFQO0FBQ0Q7QUFDRCxhQUFPQSxPQUFPcEksTUFBUCxHQUFnQkEsT0FBT29JLEdBQVAsQ0FBaEIsR0FBOEJwSSxNQUFyQztBQUNEOztBQUVEOzs7Ozs7Ozs7QUFRQTs7Ozs4QkFJVXFJLEUsRUFBSTtBQUNaLFdBQUtULFlBQUwsQ0FBa0JVLElBQWxCLENBQXVCRCxFQUF2QjtBQUNEOztBQUVEOzs7Ozs7O2dDQUlZQSxFLEVBQUk7QUFDZCxXQUFLVCxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JXLE1BQWxCLENBQXlCO0FBQUEsZUFBUUMsU0FBU0gsRUFBVCxHQUFjRyxJQUFkLEdBQXFCbkwsU0FBN0I7QUFBQSxPQUF6QixDQUFwQjtBQUNEOztBQUVEOzs7Ozs7MkJBR087QUFBQTs7QUFDTCxXQUFLdUssWUFBTCxDQUFrQjlFLE9BQWxCLENBQTBCO0FBQUEsZUFBUTBGLEtBQUtuSyxJQUFMLFNBQWdCLE9BQUtxSixNQUFyQixDQUFSO0FBQUEsT0FBMUI7QUFDRDs7O3dCQXpCWTtBQUNYLGFBQU8sS0FBS0csTUFBWjtBQUNEOzs7Ozs7a0JBM0VrQkosTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTNmYjA2YzM5ZDVkMzgwY2Y0N2IiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG4gIFxuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBKc29uVXRpbHMgZnJvbSBcIi4vdXRpbC9qc29uLXV0aWxzXCI7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9oYW5kbGVyL2RyYXdcIjtcbmltcG9ydCBUcmFja2VyIGZyb20gXCIuL3RyYWNrZXIvY2hhbmdlXCI7XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgPSBjb25zb2xlLmxvZyB9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIGlmICghZDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRDMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBEMyB2NCsuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXG4gICAqL1xuICBoYW5kbGUoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICByZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUoanNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIHN1cGVyKHt2ZXJib3NlOiB2ZXJib3NlfSk7XG4gIH1cblxuICBoYW5kbGUoanNvbikge1xuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhqc29uKTtcbiAgICB0aGlzLmFkZChqc29uKTtcbiAgfVxuXG4gIGFkZChqc29uKSB7XG4gICAgXG4gICAgdmFyIGNhbnZhc05vZGVzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ub2RlcyksXG4gICAgICAgIGNhbnZhc0xpbmtzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5saW5rcyk7XG5cbiAgICB2YXIgc3ZnID0gdGhpcy5jYW52YXMsXG4gICAgICB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKSxcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbiAgICBzdmcgPSBzdmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCB6b29tZWQpKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBzdmcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgfVxuXG4gICAgc3ZnLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZCA9PiAyNTApLnN0cmVuZ3RoKDAuMSk7XG5cbiAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA1MCkuc3RyZW5ndGgoMC41KTtcblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmsgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rcycpXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgIC5kYXRhKGNhbnZhc0xpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YClcbiAgICAuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IENhbnZhcy5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcbiAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsMCknKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgZCA9PiAnbm9kZScgKyAoZC5oaWdobGlnaHQgPyAnIGhpZ2hsaWdodCcgOiAnJykpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXG4gICAgICAuY2FsbChkMy5kcmFnKClcbiAgICAgICAgLm9uKCdzdGFydCcsIGRyYWdzdGFydGVkKVxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxuICAgICAgICAub24oJ2VuZCcsIGRyYWdlbmRlZCkpXG4gICAgICAvLy5vbignY29udGV4dG1lbnUnLCBjb25uZWN0ZWROb2RlcykgLy9yaWdodGNsaWNrXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xuXG4gICAgbm9kZS5hcHBlbmQoJ3RpdGxlJykudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogcmFkaXVzICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24gKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvZHJhdy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICB3aWR0aDoganNvbi5jYW52YXMudyxcbiAgICAgICAgaGVpZ2h0OiBqc29uLmNhbnZhcy5oXG4gICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xuICAgICAgLy8gdXBkYXRlIGVsZW1lbnRcbiAgICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3NlbGYud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXG4gICAgJChgIyR7c2VsZi53aW5kb3dJZH1gKS5kaWFsb2coe1xuICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gYnVpbGQgbWVudVxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKG5ldyBNZW51VXRpbHMoKS5nZXRNZW51SHRtbChqc29uKSk7XG4gICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcblxuICAgIC8vIGJ1aWxkIGNhbnZhc1xuICAgIHNlbGYuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7c2VsZi5jYW52YXNJZH1gKTtcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtzZWxmLmNhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBkaXYjJHtzZWxmLndpbmRvd0lkfWApLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgc2VsZi5jYW52YXNJZCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7c2VsZi5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcbiAgICBzZWxmLmNhbnZhc1xuICAgICAgLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMudylcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYW52YXMuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciA9IGNvbnNvbGUubG9nIH0gPSB7fSkge1xuICAgIHRoaXMuY2FsbGJhY2tIYW5kbGVyID0gY2FsbGJhY2tIYW5kbGVyO1xuICB9XG5cbiAgZ2V0TWVudUh0bWwoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJGh0bWwgPSAkKCc8ZGl2PicsIHsgY2xhc3M6ICdtZW51JyB9KTtcbiAgICBzZWxmLl9idWlsZERlZmF1bHRNZW51KCkuYXBwZW5kVG8oJGh0bWwpO1xuICAgIGZvciAobGV0IG1lbnUgb2YgT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5tZW51cykpIHtcbiAgICAgIHZhciBjYWxsYmFjayA9IG5ldyBDYWxsYmFjayhtZW51LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdmFyICRtZW51ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duXCIgfSkuYXBwZW5kVG8oJGh0bWwpO1xuICAgICAgaWYgKG1lbnUubWVudXMgJiYgT2JqZWN0LnZhbHVlcyhtZW51Lm1lbnVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJzxidXR0b24+JywgeyBjbGFzczogXCJkcm9wZG93bi1idXR0b25cIiB9KS5odG1sKG1lbnUudGl0bGUgKyBcIiZuYnNwOyYjOTY2MDtcIikuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgICB2YXIgJHN1Ym1lbnUgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd24tY29udGVudFwiIH0pLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBPYmplY3QudmFsdWVzKG1lbnUubWVudXMpKSB7XG4gICAgICAgICAgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2soc3VibWVudSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybiBjYWxsYmFjay5leGVjdXRlKCk7IH0gfSkudGV4dChzdWJtZW51LnRpdGxlKS5hcHBlbmRUbygkc3VibWVudSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybiBjYWxsYmFjay5leGVjdXRlKCk7IH0gfSkudGV4dChtZW51LnRpdGxlKS5hcHBlbmRUbygkbWVudSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAkaHRtbDtcbiAgfVxuXG4gIF9idWlsZERlZmF1bHRNZW51KCkge1xuICAgIHZhciAkZGl2ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duXCIgfSlcbiAgICB2YXIgJGNvbnRlbnQgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd24tY29udGVudFwiIH0pO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogXCJkcm9wZG93bi1idXR0b25cIiB9KS5odG1sKCdGaWxlJm5ic3A7JiM5NjYwOycpLmFwcGVuZFRvKCRkaXYpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJTYXZlIHRvIFBOR1wiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIkFib3V0XCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQ2xvc2VcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICRjb250ZW50LmFwcGVuZFRvKCRkaXYpO1xuICAgIHJldHVybiAkZGl2O1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL21lbnUuanMiLCJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi91dGlsL21vZGFsJztcblxuLy8gRklYTUUgaHR0cDovL2xvcmVkYW5hY2lyc3RlYS5naXRodWIuaW8vZXM2LWRlc2lnbi1wYXR0ZXJucy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbGJhY2tIYW5kbGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgPSBjb25zb2xlLmxvZyB9ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChjb25maWcuY2FsbGJhY2ssIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYWxsYmFjay5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyID0gY29uc29sZS5sb2cgfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoeyB2ZXJib3NlOiB2ZXJib3NlIH0pO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCQoYCMke3NlbGYuY29uZmlnLmlkfWApLmxlbmd0aCkge1xuICAgICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuc2hvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKCc8ZGl2PicsIHtcbiAgICAgIGlkOiBzZWxmLmNvbmZpZy5pZCxcbiAgICAgIHRpdGxlOiAnUmVxdWlyZWQgQXJndW1lbnRzJyxcbiAgICAgIGNsYXNzOiAncmVxdWlyZWRBcmdzJ1xuICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XG5cbiAgICBmb3IgKHZhciBhcmcgb2YgT2JqZWN0LnZhbHVlcyhzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3MpKSB7XG4gICAgICAkKCc8bGFiZWw+Jywge1xuICAgICAgICBmb3I6IGFyZy5pZFxuICAgICAgfSkudGV4dChhcmcudGl0bGUpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICAgICQoJzxpbnB1dD4nLCB7XG4gICAgICAgIGlkOiBhcmcuaWQsXG4gICAgICAgIG5hbWU6IGFyZy5pZCxcbiAgICAgICAgdHlwZTogYXJnLnR5cGUsXG4gICAgICAgIHZhbHVlOiBhcmcudmFsdWUsXG4gICAgICAgIGNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2VsZi5jb25maWcucmVxdWlyZWRBcmdzW3RoaXMuaWRdLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHRoaXMuY2hhbmdlLFxuICAgICAgICBrZXl1cDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIHBhc3RlOiB0aGlzLmNoYW5nZVxuICAgICAgfSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgfVxuXG4gICAgJChgIyR7c2VsZi5jb25maWcuaWR9YCkuZGlhbG9nKHtcbiAgICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgICBjbG9zZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIG1vZGFsIGZvciBjYWxsYmFjayBbJHtzZWxmLmNvbmZpZy5pZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfSxcbiAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgT2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIEZJWE1FIHJlcXVpcmVzIHZhbGlkYXRpb24hXG4gICAgICAgICAgc2VsZi5vcHRpb25zLmNhbGxiYWNrSGFuZGxlcihzZWxmLmNvbmZpZyk7XG4gICAgICAgICAgJCh0aGlzKS5kaWFsb2coXCJjbG9zZVwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgQ2FuY2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21vZGFsLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGhvbGRzIGRlZmF1bHQgbWV0aG9kcyB0byBoYW5kbGUgY2hhbmdlcyBvbiBhIG1vZGVsIG9iamVjdC5cbiAqIEl0IHdvcmtzIGJ5IHRoZSBtZWFucyBvZiBhIFByb3h5IHRvIHRyYWNrIGNoYW5nZXMgYW5kIGVuc3VyZXMgc3Vic2NyaWJlcnNcbiAqIGFyZSBub3RpZmllZCBvZiB0aGVzZSBjaGFuZ2VzIG9uIGEgdGltZSBiYXNpcyAoMSBzZWNvbmQgZGVmYXVsdCkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIGluc3RhbmNlIG9mIE1vZGVsVHJhY2tlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9iamVjdCAtIHRoZSBvYmplY3Qgb2JqZWN0IHRvIGtlZXAgdHJhY2sgb2YgY2hhbmdlcy5cbiAgICogQHBhcmFtIHZlcmJvc2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9iamVjdCwgeyB2ZXJib3NlID0gZmFsc2UsIHRocm90dGxlID0gMTAwMCB9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBsaXN0IG9mIGNoYW5nZSBzdWJzY3JpYmVycy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaG9sZHMgYSBwcm94eSB0aGF0IGhhbmRsZXMgYSBkaXJ0eSBmbGFnIHdoZW4gb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge1Byb3h5fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcHJveHkgPSBuZXcgUHJveHkob2JqZWN0LCB0aGlzKTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gZmxhZyB3aGVuIHRoZSBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogU3luYyBsaXN0ZW5lcnMgZXZlcnkgc2Vjb25kLCBpZiBkYXRhIGlzIGRpcnR5XG4gICAgICogQHR5cGUge3NldEludGVydmFsfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLnN5bmMoKTtcbiAgICAgIH1cbiAgICB9LCB0aHJvdHRsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlW3Byb3BlcnR5XSBpbnN0YW5jZW9mIE9iamVjdCkgJiYgcmVjZWl2ZXJbcHJvcGVydHldICE9PSB2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMudmVyYm9zZSkge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBrZXkgaW4gdGFyZ2V0ID8gdGFyZ2V0W2tleV0gOiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHJldHVybnMge29iamVjdH0gdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqL1xuICBnZXQgb2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm94eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHJlZ2lzdGVyIGEgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHRvIHN5bmMgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIHRoZSBmdW5jdGlvbiB0byBleGVjdXRlIC0gbXVzdCBoYW5kbGUgb25lIGFyZywgdGhlIG9iamVjdCwgb2YgdHlwZSB7b2JqZWN0fVxuICAgKi9cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMucHVzaChmbik7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB1bnJlZ2lzdGVyIGEgZnVuY3Rpb24gcmVnaXN0ZXJlZCBwcmV2aW91c2x5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB1bnN1YnNjcmliZShmbikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gZm4gPyBpdGVtIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGV4cGxpY2l0bHkgc3luYyB0aGUgbW9kdWxlIHdpdGggYWxsIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgc3luYygpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jYWxsKHRoaXMsIHRoaXMub2JqZWN0KSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=