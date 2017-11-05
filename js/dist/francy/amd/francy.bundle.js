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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGVjMmFmZWY2YzkzYjJkNWI5Y2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJMb2dnZXIiLCJ2ZXJib3NlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsImNhbGxiYWNrSGFuZGxlciIsIkVycm9yIiwib3B0aW9ucyIsImQzIiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJoYW5kbGUiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsInVuZGVmaW5lZCIsImUiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsImFkZCIsImNhbnZhc05vZGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2FudmFzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwid2lkdGgiLCJhdHRyIiwiaGVpZ2h0IiwiY2FsbCIsInpvb20iLCJvbiIsInpvb21lZCIsImFwcGVuZCIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJpZCIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNlbnRlciIsImxpbmsiLCJzb3VyY2UiLCJ0YXJnZXQiLCJzdHlsZSIsIm5vZGUiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwiaSIsImNvbG9ycyIsInRpY2tlZCIsImxlbmd0aCIsIk1hdGgiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicmFkaXVzIiwiYWxwaGEiLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3QiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQWJzdHJhY3RDYW52YXMiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJsb2dnZXIiLCJzZWxmIiwid2luZG93SWQiLCJnZXRXaW5kb3dJZCIsIiQiLCJ3IiwiaCIsImFwcGVuZFRvIiwiZGlhbG9nIiwiY2xvc2UiLCJ1aSIsInJlbW92ZSIsImdldE1lbnVIdG1sIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsIklEVXRpbHMiLCJvYmplY3RJZCIsIk1lbnVVdGlscyIsIiRodG1sIiwiY2xhc3MiLCJfYnVpbGREZWZhdWx0TWVudSIsIm1lbnVzIiwibWVudSIsImNhbGxiYWNrIiwiJG1lbnUiLCJodG1sIiwiJHN1Ym1lbnUiLCJzdWJtZW51IiwiY2xpY2siLCJleGVjdXRlIiwiJGRpdiIsIiRjb250ZW50IiwiQ2FsbGJhY2tIYW5kbGVyIiwiY29uZmlnIiwibW9kYWwiLCJzaG93IiwiTW9kYWwiLCJyZXF1aXJlZEFyZ3MiLCJhcmciLCJmb3IiLCJuYW1lIiwidmFsdWUiLCJjaGFuZ2UiLCJrZXl1cCIsInBhc3RlIiwicmVzaXphYmxlIiwiYnV0dG9ucyIsIk9rIiwiQ2FuY2VsIiwiVHJhY2tlciIsIm9iamVjdCIsInRocm90dGxlIiwiX3N1YnNjcmliZXJzIiwiX3Byb3h5IiwiUHJveHkiLCJfZGlydHkiLCJzZXRJbnRlcnZhbCIsInN5bmMiLCJyZWNlaXZlciIsInByb3BlcnR5Iiwia2V5IiwiZm4iLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtE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LE0sRUFBUW9JLEcsRUFBSztBQUNmLFVBQUksUUFBT3BJLE9BQU9vSSxHQUFQLENBQVAsTUFBdUIsUUFBdkIsSUFBbUNwSSxPQUFPb0ksR0FBUCxNQUFnQixJQUF2RCxFQUE2RDtBQUMzRCxlQUFPLElBQUlOLEtBQUosQ0FBVTlILE9BQU9vSSxHQUFQLENBQVYsRUFBdUIsSUFBdkIsQ0FBUDtBQUNEO0FBQ0QsYUFBT0EsT0FBT3BJLE1BQVAsR0FBZ0JBLE9BQU9vSSxHQUFQLENBQWhCLEdBQThCcEksTUFBckM7QUFDRDs7QUFFRDs7Ozs7Ozs7O0FBUUE7Ozs7OEJBSVVxSSxFLEVBQUk7QUFDWixXQUFLVCxZQUFMLENBQWtCVSxJQUFsQixDQUF1QkQsRUFBdkI7QUFDRDs7QUFFRDs7Ozs7OztnQ0FJWUEsRSxFQUFJO0FBQ2QsV0FBS1QsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCVyxNQUFsQixDQUF5QjtBQUFBLGVBQVFDLFNBQVNILEVBQVQsR0FBY0csSUFBZCxHQUFxQm5MLFNBQTdCO0FBQUEsT0FBekIsQ0FBcEI7QUFDRDs7QUFFRDs7Ozs7OzJCQUdPO0FBQUE7O0FBQ0wsV0FBS3VLLFlBQUwsQ0FBa0I5RSxPQUFsQixDQUEwQjtBQUFBLGVBQVEwRixLQUFLbkssSUFBTCxTQUFnQixPQUFLcUosTUFBckIsQ0FBUjtBQUFBLE9BQTFCO0FBQ0Q7Ozt3QkF6Qlk7QUFDWCxhQUFPLEtBQUtHLE1BQVo7QUFDRDs7Ozs7O2tCQTNFa0JKLE8iLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRlYzJhZmVmNmM5M2IyZDViOWNkIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgc2luZ2xldG9uIHRoYXQgcHJvdmlkZXMgYSBsb2dnZXIgZm9yIHRoZSBGcmFuY3kgYXBwbGljYXRpb24uXG4gKi9cblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgaWYgKCFzaW5nbGV0b24pIHtcbiAgICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgICB0aGlzLmNvbnNvbGUgPSBjb25zb2xlO1xuICAgICAgc2luZ2xldG9uID0gdGhpcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uO1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICB0aGlzLmNvbnNvbGUuZGVidWcodGhpcy5fZm9ybWF0KCdERUJVRycsIG1lc3NhZ2UpKTtcbiAgICB9XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGUuaW5mbyh0aGlzLl9mb3JtYXQoJ0lORk8nLCBtZXNzYWdlKSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBlcnJvcikge1xuICAgIHRoaXMuY29uc29sZS5lcnJvcih0aGlzLl9mb3JtYXQoJ0VSUk9SJywgbWVzc2FnZSksIGVycm9yKTtcbiAgfVxuICBcbiAgX2Zvcm1hdChsZXZlbCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBgWyR7bGV2ZWx9XSAtICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfSAtICR7bWVzc2FnZX1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gXCIuL3V0aWwvanNvbi11dGlsc1wiO1xuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XG5pbXBvcnQgVHJhY2tlciBmcm9tIFwiLi90cmFja2VyL2NoYW5nZVwiO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZSBwcmludHMgZXh0cmEgbG9nIGluZm9ybWF0aW9uIHRvIGNvbnNvbGUubG9nLCBkZWZhdWx0IGZhbHNlXG4gICAqIEBwYXJhbSBhcHBlbmRUbyB3aGVyZSB0aGUgZ2VuZXJhdGVkIGh0bWwvc3ZnIGNvbXBvbmVudHMgd2lsbCBiZSBhdHRhY2hlZCB0bywgZGVmYXVsdCBib2R5XG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICogQHBhcmFtIGNoYW5nZVRyYWNrZXJIYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gcmVwb3J0IGFueSBjaGFuZ2VzIGRldGVjdGVkIGJ5IHRoZSBDaGFuZ2VUcmFja2VyLCBkZWZhdWx0IGNvbnNvbGUubG9nXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBDYWxsYmFjayBIYW5kbGVyIVwiKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIGEganNvbiBzdHJpbmcvb2JqZWN0IHRvIGdldCBkcmF3blxuICAgKi9cbiAgaGFuZGxlKGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICAvL3ZhciB0cmFja2VyID0gbmV3IFRyYWNrZXIoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgIC8vdHJhY2tlci5zdWJzY3JpYmUoZnVuY3Rpb24ob2JqKSB7IGNvbnNvbGUubG9nKG9iaik7IH0pO1xuICAgICAgLy9yZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5oYW5kbGUodHJhY2tlci5vYmplY3QpO1xuICAgICAgcmV0dXJuIG5ldyBEcmF3KHRoaXMub3B0aW9ucykuaGFuZGxlKGpzb24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLkZyYW5jeSA9IHdpbmRvdy5GcmFuY3kgPSBGcmFuY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZnJhbmN5LmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB0byBwYXJzZVxuICAgKiBAcmV0dXJucyB7anNvbn0gLSBpZiB0aGUgaW5wdXQgaXMgYSB2YWxpZCBKU09OIG9iamVjdCwgb3RoZXJ3aXNlIHJldHVybnMge3VuZGVmaW5lZH1cbiAgICovXG4gIHN0YXRpYyBwYXJzZShpbnB1dCkge1xuICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoaW5wdXQpIDogaW5wdXQ7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XG4gICAgbGV0IGpzb25SZWdleCA9IC97KD86W15dKSp9L2c7XG4gICAgbGV0IG1hdGNoID0ganNvblJlZ2V4LmV4ZWMoaW5wdXQpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgaW5wdXQgPSBtYXRjaFswXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50ID09PSAnYXBwbGljYXRpb24vZnJhbmN5JyA/IGpzb24gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXIgfSk7XG4gIH1cblxuICBoYW5kbGUoanNvbikge1xuICAgIHRoaXMuX3JlbmRlckNhbnZhcyhqc29uKTtcbiAgICB0aGlzLmFkZChqc29uKTtcbiAgfVxuXG4gIGFkZChqc29uKSB7XG5cbiAgICB2YXIgY2FudmFzTm9kZXMgPSBPYmplY3QudmFsdWVzKGpzb24uY2FudmFzLm5vZGVzKSxcbiAgICAgIGNhbnZhc0xpbmtzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5saW5rcyk7XG5cbiAgICB2YXIgc3ZnID0gdGhpcy5jYW52YXMsXG4gICAgICB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKSxcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbiAgICBzdmcgPSBzdmcuY2FsbChkMy56b29tKCkub24oJ3pvb20nLCB6b29tZWQpKS5hcHBlbmQoJ2cnKS5hdHRyKCdjbGFzcycsICdkcmF3Jyk7XG5cbiAgICBmdW5jdGlvbiB6b29tZWQoKSB7XG4gICAgICBzdmcuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2QzLmV2ZW50LnRyYW5zZm9ybS54fSwke2QzLmV2ZW50LnRyYW5zZm9ybS55fSkgc2NhbGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ua30pYCk7XG4gICAgfVxuXG4gICAgc3ZnLmFwcGVuZCgnZGVmcycpLnNlbGVjdEFsbCgnbWFya2VyJylcbiAgICAgIC5kYXRhKFsnYXJyb3cnXSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbWFya2VyJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdhcnJvd3MnKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxuICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCAnMCAtNSAxMCAxMCcpXG4gICAgICAuYXR0cigncmVmWCcsIDI1KVxuICAgICAgLmF0dHIoJ3JlZlknLCAwKVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMTApXG4gICAgICAuYXR0cignbWFya2VySGVpZ2h0JywgMTApXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxuICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsICdNMCwtNUwxMCwwTDAsNSBMMTAsMCBMMCwgLTUnKTtcblxuICAgIC8vR2VuZXJpYyBncmF2aXR5IGZvciB0aGUgWCBwb3NpdGlvblxuICAgIHZhciBmb3JjZVggPSBkMy5mb3JjZVgoZCA9PiAyNTApLnN0cmVuZ3RoKDAuMSk7XG5cbiAgICAvL1N0cm9uZyB5IHBvc2l0aW9uaW5nIGJhc2VkIG9uIGxheWVyXG4gICAgdmFyIGZvcmNlWSA9IGQzLmZvcmNlWShkID0+IGQubGF5ZXIgKiA1MCkuc3RyZW5ndGgoMC41KTtcblxuICAgIHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcbiAgICAgIC5mb3JjZSgnbGluaycsIGQzLmZvcmNlTGluaygpLmlkKGQgPT4gZC5pZCkpXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcbiAgICAgIC5mb3JjZShcInhcIiwgZm9yY2VYKVxuICAgICAgLmZvcmNlKFwieVwiLCBmb3JjZVkpXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXG4gICAgdmFyIGxpbmsgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rcycpXG4gICAgICAuc2VsZWN0QWxsKCdsaW5lJylcbiAgICAgIC5kYXRhKGNhbnZhc0xpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YClcbiAgICAgIC5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xuXG5cbiAgICB2YXIgbm9kZSA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ25vZGVzJykuc2VsZWN0QWxsKCdnLm5vZGVzJylcbiAgICAgIC5kYXRhKGNhbnZhc05vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBgSUQ6XFx0JHtkLmlkfVxcbkxheWVyOlxcdCR7ZC5sYXllcn1gO1xuICAgIH0pO1xuXG4gICAgdmFyIGxhYmVsID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWxzJylcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGNhbnZhc05vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2RlcyhjYW52YXNOb2Rlcykub24oJ3RpY2snLCB0aWNrZWQpO1xuXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGNhbnZhc0xpbmtzKTtcblxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAgIGxpbmtcbiAgICAgICAgLmF0dHIoJ3gxJywgZCA9PiBkLnNvdXJjZS54KVxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXG4gICAgICAgIC5hdHRyKCd4MicsIGQgPT4gZC50YXJnZXQueClcbiAgICAgICAgLmF0dHIoJ3kyJywgZCA9PiBkLnRhcmdldC55KTtcblxuICAgICAgbm9kZVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IENhbnZhcy5jb2xvcnMoZC5sYXllciAqIDYpKVxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgIGxhYmVsXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAtIE1hdGguc3FydChkLnNpemUpKVxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xuXG4gICAgICBub2RlLmVhY2goY29sbGlkZSgwLjUpKTtcbiAgICB9XG5cbiAgICAvLyBDT0xMSVNJT05cbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXG4gICAgICByYWRpdXMgPSAyMDtcblxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcbiAgICAgIGxldCBxdWFkVHJlZSA9IGQzLnF1YWR0cmVlKGNhbnZhc05vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxuICAgICAgICAgIG54MSA9IGQueCAtIHJiLFxuICAgICAgICAgIG54MiA9IGQueCArIHJiLFxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxuICAgICAgICAgIG55MiA9IGQueSArIHJiO1xuICAgICAgICBxdWFkVHJlZS52aXNpdChmdW5jdGlvbihxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcbiAgICB9XG5cbiAgICBjYW52YXNMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7ZC5zb3VyY2UuaW5kZXh9LCR7ZC50YXJnZXQuaW5kZXh9YF0gPSAxO1xuICAgIH0pO1xuXG4gICAgLy9UaGlzIGZ1bmN0aW9uIGxvb2tzIHVwIHdoZXRoZXIgYSBwYWlyIGFyZSBuZWlnaGJvdXJzXG4gICAgZnVuY3Rpb24gbmVpZ2hib3JpbmcoYSwgYikge1xuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xuICAgICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0b2dnbGUgPT09IDApIHtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXG4gICAgICAgIGxldCBkID0gZDMuc2VsZWN0KHRoaXMpLm5vZGUoKS5fX2RhdGFfXztcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIG8gPT4gbmVpZ2hib3JpbmcoZCwgbykgfHwgbmVpZ2hib3JpbmcobywgZCkgPyAxIDogMC4xKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wXG4gICAgICAgIHRvZ2dsZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi9tZW51JztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdjcm9zcycpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0cmlhbmdsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICB3aWR0aDoganNvbi5jYW52YXMudyxcbiAgICAgICAgaGVpZ2h0OiBqc29uLmNhbnZhcy5oXG4gICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xuICAgICAgLy8gdXBkYXRlIGVsZW1lbnRcbiAgICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3NlbGYud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXG4gICAgJChgIyR7c2VsZi53aW5kb3dJZH1gKS5kaWFsb2coe1xuICAgICAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gYnVpbGQgbWVudVxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKG5ldyBNZW51VXRpbHModGhpcy5vcHRpb25zKS5nZXRNZW51SHRtbChqc29uKSk7XG4gICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcblxuICAgIC8vIGJ1aWxkIGNhbnZhc1xuICAgIHNlbGYuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgc3ZnIyR7c2VsZi5jYW52YXNJZH1gKTtcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtzZWxmLmNhbnZhc0lkfV0uLi5gKTtcbiAgICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBkaXYjJHtzZWxmLndpbmRvd0lkfWApLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgc2VsZi5jYW52YXNJZCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYuY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7c2VsZi5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcbiAgICBzZWxmLmNhbnZhc1xuICAgICAgLmF0dHIoJ3dpZHRoJywganNvbi5jYW52YXMudylcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBqc29uLmNhbnZhcy5oKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYW52YXMuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnRnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XS0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYEZyYW5jeVdpbmRvdy0ke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5Q2FudmFzLSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RJZChvYmplY3RJZCkge1xuICAgIHJldHVybiBgRnJhbmN5T2JqZWN0LSR7b2JqZWN0SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJpbXBvcnQgQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgfVxuXG4gIGdldE1lbnVIdG1sKGpzb24pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICRodG1sID0gJCgnPGRpdj4nLCB7IGNsYXNzOiAnbWVudScgfSk7XG4gICAgc2VsZi5fYnVpbGREZWZhdWx0TWVudSgpLmFwcGVuZFRvKCRodG1sKTtcbiAgICBmb3IgKGxldCBtZW51IG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sobWVudSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciAkbWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93blwiIH0pLmFwcGVuZFRvKCRodG1sKTtcbiAgICAgIGlmIChtZW51Lm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6IFwiZHJvcGRvd24tYnV0dG9uXCIgfSkuaHRtbChtZW51LnRpdGxlICsgXCImbmJzcDsmIzk2NjA7XCIpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgICAgdmFyICRzdWJtZW51ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnRcIiB9KS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51Lm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHN1Ym1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQoc3VibWVudS50aXRsZSkuYXBwZW5kVG8oJHN1Ym1lbnUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQobWVudS50aXRsZSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJGh0bWw7XG4gIH1cblxuICBfYnVpbGREZWZhdWx0TWVudSgpIHtcbiAgICB2YXIgJGRpdiA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93blwiIH0pXG4gICAgdmFyICRjb250ZW50ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnRcIiB9KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6IFwiZHJvcGRvd24tYnV0dG9uXCIgfSkuaHRtbCgnRmlsZSZuYnNwOyYjOTY2MDsnKS5hcHBlbmRUbygkZGl2KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiU2F2ZSB0byBQTkdcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJBYm91dFwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIkNsb3NlXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkY29udGVudC5hcHBlbmRUbygkZGl2KTtcbiAgICByZXR1cm4gJGRpdjtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9tZW51LmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vdXRpbC9tb2RhbCc7XG5cbi8vIEZJWE1FIGh0dHA6Ly9sb3JlZGFuYWNpcnN0ZWEuZ2l0aHViLmlvL2VzNi1kZXNpZ24tcGF0dGVybnMvXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbChjb25maWcuY2FsbGJhY2ssIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBleGVjdXRlKCkge1xuICAgIHRoaXMubW9kYWwuc2hvdygpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9jYWxsYmFjay5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnLCB7IHZlcmJvc2UgPSBmYWxzZSwgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoJChgIyR7c2VsZi5jb25maWcuaWR9YCkubGVuZ3RoKSB7XG4gICAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQoJzxkaXY+Jywge1xuICAgICAgaWQ6IHNlbGYuY29uZmlnLmlkLFxuICAgICAgdGl0bGU6ICdSZXF1aXJlZCBBcmd1bWVudHMnLFxuICAgICAgY2xhc3M6ICdyZXF1aXJlZEFyZ3MnXG4gICAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHNlbGYuY29uZmlnLnJlcXVpcmVkQXJncykpIHtcbiAgICAgICQoJzxsYWJlbD4nLCB7XG4gICAgICAgIGZvcjogYXJnLmlkXG4gICAgICB9KS50ZXh0KGFyZy50aXRsZSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgaWQ6IGFyZy5pZCxcbiAgICAgICAgbmFtZTogYXJnLmlkLFxuICAgICAgICB0eXBlOiBhcmcudHlwZSxcbiAgICAgICAgdmFsdWU6IGFyZy52YWx1ZSxcbiAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIGtleXVwOiB0aGlzLmNoYW5nZSxcbiAgICAgICAgcGFzdGU6IHRoaXMuY2hhbmdlXG4gICAgICB9KS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICB9XG5cbiAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5kaWFsb2coe1xuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3NpbmcgbW9kYWwgZm9yIGNhbGxiYWNrIFske3NlbGYuY29uZmlnLmlkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9LFxuICAgICAgYnV0dG9uczoge1xuICAgICAgICBPazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRklYTUUgcmVxdWlyZXMgdmFsaWRhdGlvbiFcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBDYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbW9kYWwuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgaG9sZHMgZGVmYXVsdCBtZXRob2RzIHRvIGhhbmRsZSBjaGFuZ2VzIG9uIGEgbW9kZWwgb2JqZWN0LlxuICogSXQgd29ya3MgYnkgdGhlIG1lYW5zIG9mIGEgUHJveHkgdG8gdHJhY2sgY2hhbmdlcyBhbmQgZW5zdXJlcyBzdWJzY3JpYmVyc1xuICogYXJlIG5vdGlmaWVkIG9mIHRoZXNlIGNoYW5nZXMgb24gYSB0aW1lIGJhc2lzICgxIHNlY29uZCBkZWZhdWx0KS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgaW5zdGFuY2Ugb2YgTW9kZWxUcmFja2VyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gdGhlIG9iamVjdCBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gdmVyYm9zZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob2JqZWN0LCB7IHZlcmJvc2UgPSBmYWxzZSwgdGhyb3R0bGUgPSAxMDAwIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBob2xkcyBhIGxpc3Qgb2YgY2hhbmdlIHN1YnNjcmliZXJzLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBob2xkcyBhIHByb3h5IHRoYXQgaGFuZGxlcyBhIGRpcnR5IGZsYWcgd2hlbiBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7UHJveHl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm94eSA9IG5ldyBQcm94eShvYmplY3QsIHRoaXMpO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaXMgdXNlZCB0byBmbGFnIHdoZW4gdGhlIG9iamVjdCBjaGFuZ2VzLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTeW5jIGxpc3RlbmVycyBldmVyeSBzZWNvbmQsIGlmIGRhdGEgaXMgZGlydHlcbiAgICAgKiBAdHlwZSB7c2V0SW50ZXJ2YWx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3luYygpO1xuICAgICAgfVxuICAgIH0sIHRocm90dGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGJ5IHRoZSBwcm94eSB0byBzZXQgYSBwcm9wZXJ0eSB3aGVuIGEgY2hhbmdlIG9jY3VycywgcGx1cyBpdCBzZXRzIHRoZSBjdXJyZW50IG9iamVjdCB0byBkaXJ0eS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHJlY2VpdmVyIC0gdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eSAtIHRoZSBwcm9wZXJ0eSBjaGFuZ2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIHRoZSBuZXcgdmFsdWVcbiAgICovXG4gIHNldChyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKCEodmFsdWVbcHJvcGVydHldIGluc3RhbmNlb2YgT2JqZWN0KSAmJiByZWNlaXZlcltwcm9wZXJ0eV0gIT09IHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhgT2JqZWN0IElEICR7dGhpcy5vYmplY3QuaWR9IHByb3BlcnR5ICR7cHJvcGVydHl9IGNoYW5nZWQgZnJvbSAke3JlY2VpdmVyW3Byb3BlcnR5XX0gdG8gJHt2YWx1ZX0uYCk7XG4gICAgICB9XG4gICAgICByZWNlaXZlcltwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gZ2V0IHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHRoZSBvYmplY3QgcHJvcGVydHlcbiAgICogQHJldHVybnMge29iamVjdH0gcmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICovXG4gIGdldCh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnICYmIHRhcmdldFtrZXldICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldFtrZXldLCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleSBpbiB0YXJnZXQgPyB0YXJnZXRba2V5XSA6IHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgb2JqZWN0IHByb3BlcnRpZXNcbiAgICovXG4gIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgcmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgdG8gc3luYyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHVucmVnaXN0ZXIgYSBmdW5jdGlvbiByZWdpc3RlcmVkIHByZXZpb3VzbHlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSAtIG11c3QgaGFuZGxlIG9uZSBhcmcsIHRoZSBvYmplY3QsIG9mIHR5cGUge29iamVjdH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBmbiA/IGl0ZW0gOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZXhwbGljaXRseSBzeW5jIHRoZSBtb2R1bGUgd2l0aCBhbGwgdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBzeW5jKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNhbGwodGhpcywgdGhpcy5vYmplY3QpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrZXIvY2hhbmdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==