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
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        //var tracker = new Tracker(json, this.options);
        //tracker.subscribe(function(obj) { console.log(obj); });
        //return new Draw(this.options).handle(tracker.object);
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
      return this.windowId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTcwNjkyNjJhMTBkODA0YzcxOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFuY3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlci9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja2VyL2NoYW5nZS5qcyJdLCJuYW1lcyI6WyJzaW5nbGV0b24iLCJMb2dnZXIiLCJ2ZXJib3NlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsIl9mb3JtYXQiLCJpbmZvIiwiZXJyb3IiLCJsZXZlbCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIkZyYW5jeSIsImFwcGVuZFRvIiwiY2FsbGJhY2tIYW5kbGVyIiwiRXJyb3IiLCJvcHRpb25zIiwiZDMiLCJkcmF3IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJyZW5kZXIiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJhZ2VudCIsInVuZGVmaW5lZCIsImUiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsIl9yZW5kZXIiLCJ3aW5kb3dJZCIsImNhbnZhc05vZGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY2FudmFzIiwibm9kZXMiLCJjYW52YXNMaW5rcyIsImxpbmtzIiwic3ZnIiwid2lkdGgiLCJhdHRyIiwiaGVpZ2h0IiwiY2FsbCIsInpvb20iLCJvbiIsInpvb21lZCIsImFwcGVuZCIsImV2ZW50IiwidHJhbnNmb3JtIiwieCIsInkiLCJrIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiZCIsImZvcmNlWCIsInN0cmVuZ3RoIiwiZm9yY2VZIiwibGF5ZXIiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZUxpbmsiLCJpZCIsImZvcmNlTWFueUJvZHkiLCJmb3JjZUNlbnRlciIsImxpbmsiLCJzb3VyY2UiLCJ0YXJnZXQiLCJzdHlsZSIsIm5vZGUiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwiaSIsImNvbG9ycyIsInRpY2tlZCIsImxlbmd0aCIsIk1hdGgiLCJzcXJ0IiwiZWFjaCIsImNvbGxpZGUiLCJwYWRkaW5nIiwicmFkaXVzIiwiYWxwaGEiLCJxdWFkVHJlZSIsInF1YWR0cmVlIiwicmIiLCJueDEiLCJueDIiLCJueTEiLCJueTIiLCJ2aXNpdCIsInF1YWQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInBvaW50IiwibCIsInRvZ2dsZSIsImxpbmtlZEJ5SW5kZXgiLCJmb3JFYWNoIiwiaW5kZXgiLCJuZWlnaGJvcmluZyIsImEiLCJiIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3QiLCJfX2RhdGFfXyIsIm8iLCJhY3RpdmUiLCJhbHBoYVRhcmdldCIsInJlc3RhcnQiLCJmeCIsImZ5IiwiQWJzdHJhY3RDYW52YXMiLCJzeW1ib2xDaXJjbGUiLCJzeW1ib2xDcm9zcyIsInN5bWJvbERpYW1vbmQiLCJzeW1ib2xTcXVhcmUiLCJzeW1ib2xUcmlhbmdsZSIsInN5bWJvbFN0YXIiLCJzeW1ib2xXeWUiLCJzY2FsZVNlcXVlbnRpYWwiLCJkb21haW4iLCJpbnRlcnBvbGF0b3IiLCJpbnRlcnBvbGF0ZVJhaW5ib3ciLCJsb2dnZXIiLCJzZWxmIiwiZ2V0V2luZG93SWQiLCIkIiwiY2xhc3MiLCJ2ZXJzaW9uIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsInciLCJoIiwiSURVdGlscyIsIm9iamVjdElkIiwiTWVudVV0aWxzIiwiYnVpbGQiLCIkaHRtbCIsIl9idWlsZERlZmF1bHRNZW51IiwibWVudXMiLCJtZW51IiwiY2FsbGJhY2siLCIkbWVudSIsImh0bWwiLCIkc3VibWVudSIsInN1Ym1lbnUiLCJjbGljayIsImV4ZWN1dGUiLCIkZGl2IiwiJGNvbnRlbnQiLCJDYWxsYmFja0hhbmRsZXIiLCJjb25maWciLCJtb2RhbCIsInNob3ciLCJNb2RhbCIsInJlcXVpcmVkQXJncyIsImFyZyIsImZvciIsIm5hbWUiLCJ2YWx1ZSIsImNoYW5nZSIsImtleXVwIiwicGFzdGUiLCJkaWFsb2ciLCJyZXNpemFibGUiLCJjbG9zZSIsInVpIiwicmVtb3ZlIiwiYnV0dG9ucyIsIk9rIiwiQ2FuY2VsIiwiVHJhY2tlciIsIm9iamVjdCIsInRocm90dGxlIiwiX3N1YnNjcmliZXJzIiwiX3Byb3h5IiwiUHJveHkiLCJfZGlydHkiLCJzZXRJbnRlcnZhbCIsInN5bmMiLCJyZWNlaXZlciIsInByb3BlcnR5Iiwia2V5IiwiZm4iLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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QjdFLE9BQWxCLENBQTBCO0FBQUEsZUFBUXlGLEtBQUtsSyxJQUFMLFNBQWdCLE9BQUtvSixNQUFyQixDQUFSO0FBQUEsT0FBMUI7QUFDRDs7O3dCQXpCWTtBQUNYLGFBQU8sS0FBS0csTUFBWjtBQUNEOzs7Ozs7a0JBM0VrQkosTyIsImZpbGUiOiJmcmFuY3kuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTcwNjkyNjJhMTBkODA0YzcxOWYiLCIvKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzaW5nbGV0b24gdGhhdCBwcm92aWRlcyBhIGxvZ2dlciBmb3IgdGhlIEZyYW5jeSBhcHBsaWNhdGlvbi5cbiAqL1xuXG5sZXQgc2luZ2xldG9uID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7IHZlcmJvc2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAgIHRoaXMuY29uc29sZSA9IGNvbnNvbGU7XG4gICAgICBzaW5nbGV0b24gPSB0aGlzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICAgIFxuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIHRoaXMuY29uc29sZS5kZWJ1Zyh0aGlzLl9mb3JtYXQoJ0RFQlVHJywgbWVzc2FnZSkpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIHRoaXMuY29uc29sZS5pbmZvKHRoaXMuX2Zvcm1hdCgnSU5GTycsIG1lc3NhZ2UpKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdGhpcy5jb25zb2xlLmVycm9yKHRoaXMuX2Zvcm1hdCgnRVJST1InLCBtZXNzYWdlKSwgZXJyb3IpO1xuICB9XG4gIFxuICBfZm9ybWF0KGxldmVsLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBbJHtsZXZlbH1dIC0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9IC0gJHttZXNzYWdlfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImltcG9ydCBKc29uVXRpbHMgZnJvbSBcIi4vdXRpbC9qc29uLXV0aWxzXCI7XG5pbXBvcnQgRHJhdyBmcm9tIFwiLi9oYW5kbGVyL2RyYXdcIjtcbmltcG9ydCBUcmFja2VyIGZyb20gXCIuL3RyYWNrZXIvY2hhbmdlXCI7XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICBpZiAoIWNhbGxiYWNrSGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBDYWxsYmFjayBIYW5kbGVyIVwiKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICBpZiAoIWQzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xuICAgIH1cbiAgICB0aGlzLmRyYXcgPSBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXG4gICAqL1xuICBoYW5kbGUoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIC8vdmFyIHRyYWNrZXIgPSBuZXcgVHJhY2tlcihqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgLy90cmFja2VyLnN1YnNjcmliZShmdW5jdGlvbihvYmopIHsgY29uc29sZS5sb2cob2JqKTsgfSk7XG4gICAgICAvL3JldHVybiBuZXcgRHJhdyh0aGlzLm9wdGlvbnMpLmhhbmRsZSh0cmFja2VyLm9iamVjdCk7XG4gICAgICByZXR1cm4gbmV3IERyYXcodGhpcy5vcHRpb25zKS5yZW5kZXIoanNvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdhcHBsaWNhdGlvbi9mcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2pzb24tdXRpbHMuanMiLCJpbXBvcnQgQ2FudmFzIGZyb20gJy4vY2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIENhbnZhcyB7XG5cbiAgY29uc3RydWN0b3IoeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHN1cGVyKHsgdmVyYm9zZTogdmVyYm9zZSwgYXBwZW5kVG86IGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlciB9KTtcbiAgfVxuXG4gIHJlbmRlcihqc29uKSB7XG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKGpzb24pO1xuICAgIHRoaXMuX3JlbmRlcihqc29uKTtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dJZDtcbiAgfVxuXG4gIF9yZW5kZXIoanNvbikge1xuXG4gICAgdmFyIGNhbnZhc05vZGVzID0gT2JqZWN0LnZhbHVlcyhqc29uLmNhbnZhcy5ub2RlcyksXG4gICAgICBjYW52YXNMaW5rcyA9IE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubGlua3MpO1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShjYW52YXNMaW5rcylcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgnbGluZScpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXG4gICAgICAuYXR0cignaWQnLCBkID0+IGAke2Quc291cmNlfSwke2QudGFyZ2V0fWApXG4gICAgICAuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuICAgIHZhciBub2RlID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxuICAgICAgLmRhdGEoY2FudmFzTm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXG4gICAgICAuYXR0cignZCcsIGQzLnN5bWJvbCgpLnR5cGUoZCA9PiBDYW52YXMuZ2V0U3ltYm9sKGQudHlwZSkpLnNpemUoZCA9PiBkLnNpemUgKiA5MCkpXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgwLDApJylcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkLmlkKVxuICAgICAgLmNhbGwoZDMuZHJhZygpXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcbiAgICAgICAgLm9uKCdkcmFnJywgZHJhZ2dlZClcbiAgICAgICAgLm9uKCdlbmQnLCBkcmFnZW5kZWQpKVxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xuICAgICAgLm9uKCdjbGljaycsIGNvbm5lY3RlZE5vZGVzKTtcblxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbHMnKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuZGF0YShjYW52YXNOb2RlcywgZCA9PiBkLmlkKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXG4gICAgICAudGV4dChkID0+IGQudGl0bGUpO1xuXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgLnNlbGVjdEFsbCgnZycpXG4gICAgICAuZGF0YShkMy5tYXAoY2FudmFzTm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gaSAqIDExO1xuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke3h9LCR7eX0pYDtcbiAgICAgIH0pO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgncmVjdCcpXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCA4KVxuICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSk7XG5cbiAgICBsZWdlbmQuYXBwZW5kKCd0ZXh0JylcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcbiAgICAgIC5hdHRyKCd4JywgMTAgKyA1KVxuICAgICAgLmF0dHIoJ3knLCAxMCAtIDIpXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XG5cbiAgICBzaW11bGF0aW9uLm5vZGVzKGNhbnZhc05vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoY2FudmFzTGlua3MpO1xuXG4gICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgbGlua1xuICAgICAgICAuYXR0cigneDEnLCBkID0+IGQuc291cmNlLngpXG4gICAgICAgIC5hdHRyKCd5MScsIGQgPT4gZC5zb3VyY2UueSlcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxuICAgICAgICAuYXR0cigneTInLCBkID0+IGQudGFyZ2V0LnkpO1xuXG4gICAgICBub2RlXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnh9LCR7ZC55fSlgKTtcblxuICAgICAgbGFiZWxcbiAgICAgICAgLmF0dHIoJ3gnLCBkID0+IGQueCAtIGQudGl0bGUubGVuZ3RoIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoY2FudmFzTm9kZXMpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGNhbnZhc0xpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1B1dCB0aGVtIGJhY2sgdG8gb3BhY2l0eT0xXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICB0b2dnbGUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdzdGFydGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgZC5meCA9IGQueDtcbiAgICAgIGQuZnkgPSBkLnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2dlZChkKSB7XG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgIGQuZnkgPSBkMy5ldmVudC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIGQuZnggPSBudWxsO1xuICAgICAgZC5meSA9IG51bGw7XG4gICAgfVxuXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvZHJhdy5qcyIsImltcG9ydCBJRFV0aWxzIGZyb20gJy4uL3V0aWwvaWQtdXRpbHMnO1xuaW1wb3J0IE1lbnVVdGlscyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0Q2FudmFzIHtcblxuICBzdGF0aWMgZ2V0IGNvbG9ycygpIHtcbiAgICByZXR1cm4gZDMuc2NhbGVTZXF1ZW50aWFsKCkuZG9tYWluKFswLCAxMDBdKS5pbnRlcnBvbGF0b3IoZDMuaW50ZXJwb2xhdGVSYWluYm93KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTeW1ib2wodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFNxdWFyZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFd5ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gIH1cblxuICBfcmVuZGVyQ2FudmFzKGpzb24pIHtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTiBvYmplY3QgdG8gcmVuZGVyIGlzIGVtcHR5IScpO1xuICAgIH1cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgLy8gYnVpbGQgdGhlIGRpYWxvZyB3aW5kb3dcbiAgICBzZWxmLndpbmRvd0lkID0gSURVdGlscy5nZXRXaW5kb3dJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdpbmRvdyBpcyBhbHJlYWR5IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICQoJzxkaXY+Jywge1xuICAgICAgICBpZDogc2VsZi53aW5kb3dJZCxcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxuICAgICAgICBjbGFzczogJ3dpbmRvdydcbiAgICAgIH0pLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5hcHBlbmRUbyk7XG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxuICAgICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBmb3JjZSB0aGUgZGlhbG9nIHRvIG9wZW5cbiAgICAvLyQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAvLyAgY2xvc2U6IGZ1bmN0aW9uKGV2ZW50LCB1aSkge1xuICAgIC8vICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAvLyAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcbiAgICAvLyAgfVxuICAgIC8vfSk7XG4gICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBNZW51cyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcblxuICAgIC8vIGJ1aWxkIG1lbnVcbiAgICBuZXcgTWVudVV0aWxzKGpzb24sIHsgdmVyc2lvbjogdGhpcy5vcHRpb25zLnZlcmJvc2UsIGFwcGVuZFRvOiBzZWxmLndpbmRvdy5ub2RlKCksIGNhbGxiYWNrSGFuZGxlcjogdGhpcy5vcHRpb25zLmNhbGxiYWNrSGFuZGxlciB9KTtcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuXG4gICAgLy8gYnVpbGQgY2FudmFzXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBzZWxmLmNhbnZhc0lkKS5hdHRyKCdjbGFzcycsICdjYW52YXMnKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGlmIG5lZWRlZFxuICAgIHNlbGYuY2FudmFzXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdGcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdLSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSB3aW5kb3cgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRXaW5kb3dJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgRnJhbmN5V2luZG93LSR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lDYW52YXMtJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBGcmFuY3lPYmplY3QtJHtvYmplY3RJZH1gO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9pZC11dGlscy5qcyIsImltcG9ydCBDYWxsYmFjayBmcm9tICcuL2NhbGxiYWNrJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVV0aWxzIHtcblxuICBjb25zdHJ1Y3Rvcihqc29uLCB7IHZlcmJvc2UgPSBmYWxzZSwgYXBwZW5kVG8sIGNhbGxiYWNrSGFuZGxlciB9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNhbGxiYWNrSGFuZGxlcjogY2FsbGJhY2tIYW5kbGVyXG4gICAgfTtcbiAgICB0aGlzLmJ1aWxkKGpzb24pO1xuICB9XG5cbiAgYnVpbGQoanNvbikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgJGh0bWwgPSAkKCc8ZGl2PicsIHsgY2xhc3M6ICdtZW51JywgaWQ6IGpzb24uaWQgfSk7XG4gICAgc2VsZi5fYnVpbGREZWZhdWx0TWVudSgpLmFwcGVuZFRvKCRodG1sKTtcbiAgICBmb3IgKGxldCBtZW51IG9mIE9iamVjdC52YWx1ZXMoanNvbi5jYW52YXMubWVudXMpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBuZXcgQ2FsbGJhY2sobWVudSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIHZhciAkbWVudSA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93blwiIH0pLmFwcGVuZFRvKCRodG1sKTtcbiAgICAgIGlmIChtZW51Lm1lbnVzICYmIE9iamVjdC52YWx1ZXMobWVudS5tZW51cykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6IFwiZHJvcGRvd24tYnV0dG9uXCIgfSkuaHRtbChtZW51LnRpdGxlICsgXCImbmJzcDsmIzk2NjA7XCIpLmFwcGVuZFRvKCRtZW51KTtcbiAgICAgICAgdmFyICRzdWJtZW51ID0gJCgnPGRpdj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnRcIiB9KS5hcHBlbmRUbygkbWVudSk7XG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgT2JqZWN0LnZhbHVlcyhtZW51Lm1lbnVzKSkge1xuICAgICAgICAgIGNhbGxiYWNrID0gbmV3IENhbGxiYWNrKHN1Ym1lbnUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQoc3VibWVudS50aXRsZSkuYXBwZW5kVG8oJHN1Ym1lbnUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gY2FsbGJhY2suZXhlY3V0ZSgpOyB9IH0pLnRleHQobWVudS50aXRsZSkuYXBwZW5kVG8oJG1lbnUpO1xuICAgICAgfVxuICAgIH1cbiAgICAkaHRtbC5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuYXBwZW5kVG8pO1xuICB9XG5cbiAgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XG4gICAgdmFyICRkaXYgPSAkKCc8ZGl2PicsIHsgY2xhc3M6IFwiZHJvcGRvd25cIiB9KVxuICAgIHZhciAkY29udGVudCA9ICQoJzxkaXY+JywgeyBjbGFzczogXCJkcm9wZG93bi1jb250ZW50XCIgfSk7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiBcImRyb3Bkb3duLWJ1dHRvblwiIH0pLmh0bWwoJ0ZpbGUmbmJzcDsmIzk2NjA7JykuYXBwZW5kVG8oJGRpdik7XG4gICAgJCgnPGJ1dHRvbj4nLCB7IGNsYXNzOiAnZHJvcGRvd24tYnV0dG9uJywgY2xpY2s6IGZ1bmN0aW9uKCkgeyByZXR1cm47IH0gfSkudGV4dChcIlNhdmUgdG8gUE5HXCIpLmFwcGVuZFRvKCRjb250ZW50KTtcbiAgICAkKCc8YnV0dG9uPicsIHsgY2xhc3M6ICdkcm9wZG93bi1idXR0b24nLCBjbGljazogZnVuY3Rpb24oKSB7IHJldHVybjsgfSB9KS50ZXh0KFwiQWJvdXRcIikuYXBwZW5kVG8oJGNvbnRlbnQpO1xuICAgICQoJzxidXR0b24+JywgeyBjbGFzczogJ2Ryb3Bkb3duLWJ1dHRvbicsIGNsaWNrOiBmdW5jdGlvbigpIHsgcmV0dXJuOyB9IH0pLnRleHQoXCJDbG9zZVwiKS5hcHBlbmRUbygkY29udGVudCk7XG4gICAgJGNvbnRlbnQuYXBwZW5kVG8oJGRpdik7XG4gICAgcmV0dXJuICRkaXY7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvbWVudS5qcyIsImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3V0aWwvbW9kYWwnO1xuXG4vLyBGSVhNRSBodHRwOi8vbG9yZWRhbmFjaXJzdGVhLmdpdGh1Yi5pby9lczYtZGVzaWduLXBhdHRlcm5zL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsYmFja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgeyB2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvLCBjYWxsYmFja0hhbmRsZXIgfSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHZlcmJvc2U6IHZlcmJvc2UsXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXG4gICAgICBjYWxsYmFja0hhbmRsZXI6IGNhbGxiYWNrSGFuZGxlclxuICAgIH07XG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgTG9nZ2VyKHsgdmVyYm9zZTogdmVyYm9zZSB9KTtcbiAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKGNvbmZpZy5jYWxsYmFjaywgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIGV4ZWN1dGUoKSB7XG4gICAgdGhpcy5tb2RhbC5zaG93KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2NhbGxiYWNrLmpzIiwiaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWcsIHsgdmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbywgY2FsbGJhY2tIYW5kbGVyIH0pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxuICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxuICAgICAgY2FsbGJhY2tIYW5kbGVyOiBjYWxsYmFja0hhbmRsZXJcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7IHZlcmJvc2U6IHZlcmJvc2UgfSk7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoJChgIyR7c2VsZi5jb25maWcuaWR9YCkubGVuZ3RoKSB7XG4gICAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5zaG93KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICQoJzxkaXY+Jywge1xuICAgICAgaWQ6IHNlbGYuY29uZmlnLmlkLFxuICAgICAgdGl0bGU6ICdSZXF1aXJlZCBBcmd1bWVudHMnLFxuICAgICAgY2xhc3M6ICdyZXF1aXJlZEFyZ3MnXG4gICAgfSkuYXBwZW5kVG8odGhpcy5vcHRpb25zLmFwcGVuZFRvKTtcblxuICAgIGZvciAodmFyIGFyZyBvZiBPYmplY3QudmFsdWVzKHNlbGYuY29uZmlnLnJlcXVpcmVkQXJncykpIHtcbiAgICAgICQoJzxsYWJlbD4nLCB7XG4gICAgICAgIGZvcjogYXJnLmlkXG4gICAgICB9KS50ZXh0KGFyZy50aXRsZSkuYXBwZW5kVG8oYCMke3NlbGYuY29uZmlnLmlkfWApO1xuICAgICAgJCgnPGlucHV0PicsIHtcbiAgICAgICAgaWQ6IGFyZy5pZCxcbiAgICAgICAgbmFtZTogYXJnLmlkLFxuICAgICAgICB0eXBlOiBhcmcudHlwZSxcbiAgICAgICAgdmFsdWU6IGFyZy52YWx1ZSxcbiAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZWxmLmNvbmZpZy5yZXF1aXJlZEFyZ3NbdGhpcy5pZF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpbnB1dDogdGhpcy5jaGFuZ2UsXG4gICAgICAgIGtleXVwOiB0aGlzLmNoYW5nZSxcbiAgICAgICAgcGFzdGU6IHRoaXMuY2hhbmdlXG4gICAgICB9KS5hcHBlbmRUbyhgIyR7c2VsZi5jb25maWcuaWR9YCk7XG4gICAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLmNvbmZpZy5pZH1gKTtcbiAgICB9XG5cbiAgICAkKGAjJHtzZWxmLmNvbmZpZy5pZH1gKS5kaWFsb2coe1xuICAgICAgcmVzaXphYmxlOiBmYWxzZSxcbiAgICAgIGNsb3NlOiBmdW5jdGlvbihldmVudCwgdWkpIHtcbiAgICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENsb3NpbmcgbW9kYWwgZm9yIGNhbGxiYWNrIFske3NlbGYuY29uZmlnLmlkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9LFxuICAgICAgYnV0dG9uczoge1xuICAgICAgICBPazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gRklYTUUgcmVxdWlyZXMgdmFsaWRhdGlvbiFcbiAgICAgICAgICBzZWxmLm9wdGlvbnMuY2FsbGJhY2tIYW5kbGVyKHNlbGYuY29uZmlnKTtcbiAgICAgICAgICAkKHRoaXMpLmRpYWxvZyhcImNsb3NlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBDYW5jZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuZGlhbG9nKFwiY2xvc2VcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbW9kYWwuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgaG9sZHMgZGVmYXVsdCBtZXRob2RzIHRvIGhhbmRsZSBjaGFuZ2VzIG9uIGEgbW9kZWwgb2JqZWN0LlxuICogSXQgd29ya3MgYnkgdGhlIG1lYW5zIG9mIGEgUHJveHkgdG8gdHJhY2sgY2hhbmdlcyBhbmQgZW5zdXJlcyBzdWJzY3JpYmVyc1xuICogYXJlIG5vdGlmaWVkIG9mIHRoZXNlIGNoYW5nZXMgb24gYSB0aW1lIGJhc2lzICgxIHNlY29uZCBkZWZhdWx0KS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgaW5zdGFuY2Ugb2YgTW9kZWxUcmFja2VyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gdGhlIG9iamVjdCBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gdmVyYm9zZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob2JqZWN0LCB7IHZlcmJvc2UgPSBmYWxzZSwgdGhyb3R0bGUgPSAxMDAwIH0gPSB7fSkge1xuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBob2xkcyBhIGxpc3Qgb2YgY2hhbmdlIHN1YnNjcmliZXJzLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBob2xkcyBhIHByb3h5IHRoYXQgaGFuZGxlcyBhIGRpcnR5IGZsYWcgd2hlbiBvYmplY3QgY2hhbmdlcy5cbiAgICAgKiBAdHlwZSB7UHJveHl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm94eSA9IG5ldyBQcm94eShvYmplY3QsIHRoaXMpO1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcHJvcGVydHkgaXMgdXNlZCB0byBmbGFnIHdoZW4gdGhlIG9iamVjdCBjaGFuZ2VzLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTeW5jIGxpc3RlbmVycyBldmVyeSBzZWNvbmQsIGlmIGRhdGEgaXMgZGlydHlcbiAgICAgKiBAdHlwZSB7c2V0SW50ZXJ2YWx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGlydHkpIHtcbiAgICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3luYygpO1xuICAgICAgfVxuICAgIH0sIHRocm90dGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGJ5IHRoZSBwcm94eSB0byBzZXQgYSBwcm9wZXJ0eSB3aGVuIGEgY2hhbmdlIG9jY3VycywgcGx1cyBpdCBzZXRzIHRoZSBjdXJyZW50IG9iamVjdCB0byBkaXJ0eS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHJlY2VpdmVyIC0gdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0eSAtIHRoZSBwcm9wZXJ0eSBjaGFuZ2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIHRoZSBuZXcgdmFsdWVcbiAgICovXG4gIHNldChyZWNlaXZlciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgaWYgKCEodmFsdWVbcHJvcGVydHldIGluc3RhbmNlb2YgT2JqZWN0KSAmJiByZWNlaXZlcltwcm9wZXJ0eV0gIT09IHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICAgIC8vY29uc29sZS5kZWJ1ZyhgT2JqZWN0IElEICR7dGhpcy5vYmplY3QuaWR9IHByb3BlcnR5ICR7cHJvcGVydHl9IGNoYW5nZWQgZnJvbSAke3JlY2VpdmVyW3Byb3BlcnR5XX0gdG8gJHt2YWx1ZX0uYCk7XG4gICAgICB9XG4gICAgICByZWNlaXZlcltwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gZ2V0IHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IC0gdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBrZXkgdGhlIHRoZSBvYmplY3QgcHJvcGVydHlcbiAgICogQHJldHVybnMge29iamVjdH0gcmV0dXJucyB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICovXG4gIGdldCh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnICYmIHRhcmdldFtrZXldICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHRhcmdldFtrZXldLCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleSBpbiB0YXJnZXQgPyB0YXJnZXRba2V5XSA6IHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgb2JqZWN0IHByb3BlcnRpZXNcbiAgICovXG4gIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgcmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgdG8gc3luYyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHVucmVnaXN0ZXIgYSBmdW5jdGlvbiByZWdpc3RlcmVkIHByZXZpb3VzbHlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSAtIG11c3QgaGFuZGxlIG9uZSBhcmcsIHRoZSBvYmplY3QsIG9mIHR5cGUge29iamVjdH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBmbiA/IGl0ZW0gOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZXhwbGljaXRseSBzeW5jIHRoZSBtb2R1bGUgd2l0aCBhbGwgdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBzeW5jKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNhbGwodGhpcywgdGhpcy5vYmplY3QpKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrZXIvY2hhbmdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==