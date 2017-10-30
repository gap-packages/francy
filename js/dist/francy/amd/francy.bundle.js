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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Francy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = __webpack_require__(1);

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _draw = __webpack_require__(2);

var _draw2 = _interopRequireDefault(_draw);

var _plot = __webpack_require__(7);

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

/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(3);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _idUtils = __webpack_require__(4);

var _idUtils2 = _interopRequireDefault(_idUtils);

var _menuUtils = __webpack_require__(5);

var _menuUtils2 = _interopRequireDefault(_menuUtils);

var _logger = __webpack_require__(6);

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ })
/******/ ])});;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRjMGUzMjAwMDllMzkwMWVmMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21lbnUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL3Bsb3QuanMiXSwibmFtZXMiOlsiRnJhbmN5IiwidmVyYm9zZSIsImFwcGVuZFRvIiwibWVudUFjdGlvbkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVHJhY2tlckhhbmRsZXIiLCJvcHRpb25zIiwialF1ZXJ5IiwiRXJyb3IiLCJ1aSIsIl8iLCJkMyIsImRyYXciLCJwbG90IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJpbmZvIiwiYWdlbnQiLCJtZXRob2QiLCJoYW5kbGUiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJvYmplY3QiLCJzcGxpdCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlIiwiZXJyb3IiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsImFkZCIsInN2ZyIsImNhbnZhcyIsIndpZHRoIiwiYXR0ciIsImhlaWdodCIsImNhbGwiLCJ6b29tIiwib24iLCJ6b29tZWQiLCJhcHBlbmQiLCJldmVudCIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiaWQiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJsaW5rIiwibGlua3MiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub2RlIiwibm9kZXMiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwidmFsdWVzIiwiaSIsInN0eWxlIiwiY29sb3JzIiwidGlja2VkIiwibGVuZ3RoIiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJyYWRpdXMiLCJhbHBoYSIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdCIsIl9fZGF0YV9fIiwibyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwiZnkiLCJBYnN0cmFjdENhbnZhcyIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImxvZ2dlciIsInNlbGYiLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiZGVidWciLCIkIiwidyIsImgiLCJkaWFsb2ciLCJjbG9zZSIsInJlbW92ZSIsImdldE1lbnVIdG1sIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsIklEVXRpbHMiLCJvYmplY3RJZCIsIk1lbnVVdGlscyIsImh0bWwiLCJfYnVpbGREZWZhdWx0TWVudSIsIm1lbnVzIiwibWVudSIsInN1Ym1lbnUiLCJMb2dnZXIiLCJtZXNzYWdlIiwiUGxvdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7SUFJYUEsTSxXQUFBQSxNOztBQUVYOzs7Ozs7O0FBT0Esb0JBQTRIO0FBQUEsbUZBQUosRUFBSTtBQUFBLDRCQUEvR0MsT0FBK0c7QUFBQSxRQUEvR0EsT0FBK0csZ0NBQXJHLEtBQXFHO0FBQUEsNkJBQTlGQyxRQUE4RjtBQUFBLFFBQTlGQSxRQUE4RixpQ0FBbkYsTUFBbUY7QUFBQSxxQ0FBM0VDLGlCQUEyRTtBQUFBLFFBQTNFQSxpQkFBMkUseUNBQXZEQyxRQUFRQyxHQUErQztBQUFBLHFDQUExQ0Msb0JBQTBDO0FBQUEsUUFBMUNBLG9CQUEwQyx5Q0FBbkJGLFFBQVFDLEdBQVc7O0FBQUE7O0FBQzFILFNBQUtFLE9BQUwsR0FBZTtBQUNiTixlQUFTQSxPQURJO0FBRWJDLGdCQUFVQSxRQUZHO0FBR2JJLDRCQUFzQkEsb0JBSFQ7QUFJYkgs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLdkM0RSxvQkFBUSxRQUFSO0FBQ0QsV0FORCxNQU1PO0FBQ0xBLHlEQUEyQ0csS0FBSy9FLEtBQWhEO0FBQ0Q7QUFDRDRFLGtCQUFRLFFBQVI7QUFDRDtBQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCdkIsYUFBT0EsSUFBUDtBQUNEOzs7d0NBRTBCO0FBQ3pCLGFBQU8sOExBQVA7QUFDRDs7Ozs7O2tCQXhCa0JELFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCOzs7O0lBSXFCTSxNO0FBRW5CLG9CQUFvQztBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBdkJ4SyxPQUF1QjtBQUFBLFFBQXZCQSxPQUF1QixnQ0FBYixLQUFhOztBQUFBOztBQUNsQyxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7OzswQkFFS3lLLE8sRUFBUztBQUNiLFVBQUksS0FBS3pLLE9BQVQsRUFBa0I7QUFDaEJHLGdCQUFRbUosS0FBUixDQUFjbUIsT0FBZDtBQUNEO0FBQ0Y7Ozt5QkFFSUEsTyxFQUFTO0FBQ1p0SyxjQUFRYyxJQUFSLENBQWF3SixPQUFiO0FBQ0Q7OzswQkFFS0EsTyxFQUFTdEksTSxFQUFPO0FBQ3BCaEMsY0FBUWdDLEtBQVIsQ0FBY3NJLE9BQWQsRUFBdUJ0SSxNQUF2QjtBQUNEOzs7Ozs7a0JBbEJrQnFJLE07Ozs7Ozs7Ozs7Ozs7OztJQ0pBRSxJLEdBRW5CLGdCQUFvQztBQUFBLGlGQUFKLEVBQUk7QUFBQSwwQkFBdkIxSyxPQUF1QjtBQUFBLE1BQXZCQSxPQUF1QixnQ0FBYixLQUFhOztBQUFBO0FBRW5DLEM7O2tCQUprQjBLLEkiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkYzBlMzIwMDA5ZTM5MDFlZjEzIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBEcmF3IGZyb20gXCIuL2hhbmRsZXIvZHJhd1wiO1xuaW1wb3J0IFBsb3QgZnJvbSBcIi4vaGFuZGxlci9wbG90XCI7XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBtZW51QWN0aW9uSGFuZGxlciA9IGNvbnNvbGUubG9nLCBjaGFuZ2VUcmFja2VySGFuZGxlciA9IGNvbnNvbGUubG9nfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNoYW5nZVRyYWNrZXJIYW5kbGVyOiBjaGFuZ2VUcmFja2VySGFuZGxlcixcbiAgICAgIG1lbnVBY3Rpb25IYW5kbGVyOiBtZW51QWN0aW9uSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFqUXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlF1ZXJ5IGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5IHYzLjEuMSsuJyk7XG4gICAgfVxuICAgIGlmICghalF1ZXJ5LnVpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pRdWVyeVVJIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5VUkgdjEuMTIuMSsuJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgXyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmRlcnNjb3JlSlMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBVbmRlcnNjb3JlSlMgdjEuOC4zKy4nKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnBsb3QgPSBuZXcgUGxvdCh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXG4gICAqL1xuICBoYW5kbGUoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgRnJhbmN5IHdpbGwgWyR7anNvbi5hZ2VudC5tZXRob2R9XSB0aGUgZm9sbG93aW5nIG9iamVjdDogYCwganNvbik7XG4gICAgICBzd2l0Y2ggKGpzb24uYWdlbnQubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ2RyYXcnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcuaGFuZGxlKGpzb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbG90JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wbG90LmhhbmRsZShqc29uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske2pzb24uYWdlbnQubWV0aG9kfV0gaXMgbm90IGEgdmFsaWQgbWV0aG9kIGZvciBGcmFuY3khIFZhbGlkIG1ldGhvZHMgYXJlOiBbZHJhdywgcGxvdF0uYCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHdlIHdhbnQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICBqc29uLmFnZW50ID0gXy5vYmplY3QoWyduYW1lJywgJ21ldGhvZCcsICd0eXBlJ10sIGpzb24uYWdlbnQuc3BsaXQoJy4nKSk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50Lm5hbWUgPT09ICdmcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgaGFuZGxlKGpzb24pIHtcbiAgICB0aGlzLl9yZW5kZXJDYW52YXMoanNvbik7XG4gICAgdGhpcy5hZGQoanNvbik7XG4gIH1cblxuICBhZGQoanNvbikge1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShqc29uLmxpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YCk7XG4gICAgLy8uc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGpzb24ubm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGpzb24ubm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2Rlcyhqc29uLm5vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoanNvbi5saW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4gZC54IC0gZC50aXRsZS5sZW5ndGggKiAyIC0gTWF0aC5zcXJ0KGQuc2l6ZSkpXG4gICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnkgLSBNYXRoLnNxcnQoZC5zaXplKSk7XG5cbiAgICAgIG5vZGUuZWFjaChjb2xsaWRlKDAuNSkpO1xuICAgIH1cblxuICAgIC8vIENPTExJU0lPTlxuICAgIHZhciBwYWRkaW5nID0gMSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIGNpcmNsZXNcbiAgICAgIHJhZGl1cyA9IDIwO1xuXG4gICAgZnVuY3Rpb24gY29sbGlkZShhbHBoYSkge1xuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoanNvbi5ub2Rlcyk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgbGV0IHJiID0gMiAqIHJhZGl1cyArIHBhZGRpbmcsXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXG4gICAgICAgICAgbngyID0gZC54ICsgcmIsXG4gICAgICAgICAgbnkxID0gZC55IC0gcmIsXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XG4gICAgICAgIHF1YWRUcmVlLnZpc2l0KGZ1bmN0aW9uIChxdWFkLCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgIGlmIChxdWFkLnBvaW50ICYmIChxdWFkLnBvaW50ICE9PSBkKSkge1xuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXG4gICAgICAgICAgICAgIHkgPSBkLnkgLSBxdWFkLnBvaW50LnksXG4gICAgICAgICAgICAgIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XG4gICAgICAgICAgICAgIGwgPSAobCAtIHJiKSAvIGwgKiBhbHBoYTtcbiAgICAgICAgICAgICAgZC54IC09IHggKj0gbDtcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC54ICs9IHg7XG4gICAgICAgICAgICAgIHF1YWQucG9pbnQueSArPSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geDEgPiBueDIgfHwgeDIgPCBueDEgfHwgeTEgPiBueTIgfHwgeTIgPCBueTE7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBISUdITElHSFRcbiAgICAvL1RvZ2dsZSBzdG9yZXMgd2hldGhlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIG9uXG4gICAgdmFyIHRvZ2dsZSA9IDA7XG4gICAgLy9DcmVhdGUgYW4gYXJyYXkgbG9nZ2luZyB3aGF0IGlzIGNvbm5lY3RlZCB0byB3aGF0XG4gICAgdmFyIGxpbmtlZEJ5SW5kZXggPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtpfSwke2l9YF0gPSAxO1xuICAgIH1cblxuICAgIGpzb24ubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XG4gICAgfSk7XG5cbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcbiAgICBmdW5jdGlvbiBuZWlnaGJvcmluZyhhLCBiKSB7XG4gICAgICByZXR1cm4gbGlua2VkQnlJbmRleFtgJHthLmluZGV4fSwke2IuaW5kZXh9YF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29ubmVjdGVkTm9kZXMoKSB7XG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRvZ2dsZSA9PT0gMCkge1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BhY2l0eSBvZiBhbGwgYnV0IHRoZSBuZWlnaGJvdXJpbmcgbm9kZXNcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBuZWlnaGJvcmluZyhkLCBvKSB8fCBuZWlnaGJvcmluZyhvLCBkKSA/IDEgOiAwLjEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgbyA9PiBkLmluZGV4ID09PSBvLnNvdXJjZS5pbmRleCB8fCBkLmluZGV4ID09PSBvLnRhcmdldC5pbmRleCA/IDEgOiAwLjEpO1xuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcbiAgICAgICAgdG9nZ2xlID0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcbiAgICAgICAgbm9kZS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICBsaW5rLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIHRvZ2dsZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG4gICAgICBkLmZ4ID0gZC54O1xuICAgICAgZC5meSA9IGQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcbiAgICAgIGQuZnggPSBkMy5ldmVudC54O1xuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgZC5meCA9IG51bGw7XG4gICAgICBkLmZ5ID0gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XG5pbXBvcnQgTWVudVV0aWxzIGZyb20gJy4uL3V0aWwvbWVudS11dGlscyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RDYW52YXMge1xuXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xuICAgIHJldHVybiBkMy5zY2FsZVNlcXVlbnRpYWwoKS5kb21haW4oWzAsIDEwMF0pLmludGVycG9sYXRvcihkMy5pbnRlcnBvbGF0ZVJhaW5ib3cpO1xuICB9XG5cbiAgc3RhdGljIGdldFN5bWJvbCh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Nyb3NzJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbENyb3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sRGlhbW9uZDtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzcXVhcmUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RyaWFuZ2xlJykge1xuICAgICAgcmV0dXJuIGQzLnN5bWJvbFRyaWFuZ2xlO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3RhcjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd3eWUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBMb2dnZXIoe3ZlcmJvc2U6IHZlcmJvc2V9KTtcbiAgfVxuXG4gIF9yZW5kZXJDYW52YXMoanNvbikge1xuICAgIGlmICghanNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OIG9iamVjdCB0byByZW5kZXIgaXMgZW1wdHkhJyk7XG4gICAgfVxuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAvLyBidWlsZCB0aGUgZGlhbG9nIHdpbmRvd1xuICAgIHNlbGYud2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKGpzb24uY2FudmFzLmlkKTtcbiAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IFske3NlbGYud2luZG93SWR9XS4uLmApO1xuICAgICAgJCgnPGRpdj4nLCB7XG4gICAgICAgIGlkOiBzZWxmLndpbmRvd0lkLFxuICAgICAgICB0aXRsZToganNvbi5jYW52YXMudGl0bGUsXG4gICAgICAgIHdpZHRoOiBqc29uLmNhbnZhcy53LFxuICAgICAgICBoZWlnaHQ6IGpzb24uY2FudmFzLmhcbiAgICAgIH0pLmFwcGVuZFRvKCdib2R5Jyk7XG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxuICAgICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXNlbGYud2luZG93Lm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIHdpbmRvdyB3aXRoIGlkICR7c2VsZi53aW5kb3dJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBmb3JjZSB0aGUgZGlhbG9nIHRvIG9wZW5cbiAgICAkKGAjJHtzZWxmLndpbmRvd0lkfWApLmRpYWxvZyh7XG4gICAgICBjbG9zZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xuICAgICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ2xvc2luZyB3aW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgTWVudXMgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgLy8gYnVpbGQgbWVudVxuICAgICQoTWVudVV0aWxzLmdldE1lbnVIdG1sKGpzb24pKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICAkKCc8YnIvPicpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuXG4gICAgLy8gYnVpbGQgY2FudmFzXG4gICAgc2VsZi5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgQ2FudmFzIFske3NlbGYuY2FudmFzSWR9XS4uLmApO1xuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignaWQnLCBzZWxmLmNhbnZhc0lkKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi5jYW52YXMubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgY2FudmFzIHdpdGggaWQgJHtzZWxmLmNhbnZhc0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIGlmIG5lZWRlZFxuICAgIHNlbGYuY2FudmFzXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGpzb24uY2FudmFzLmgpXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2NhbnZhcy5qcyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdmcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdKm51bWVyaWNhbCBpZConXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElEVXRpbHMge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSB3aW5kb3cgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHdpbmRvdyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lXaW5kb3cke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgY2FudmFzIGJhc2VkIG9uIGEgY2FudmFzIGlkLlxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBjYW52YXMgZWxlbWVudCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xuICAgIHJldHVybiBgZnJhbmN5Q2FudmFzJHtjYW52YXNJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhbiBvYmplY3QgYmFzZWQgb24gYSBvYmplY3QgaWQuXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGVsZW1lbnQgb2JqZWN0IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lPYmplY3Qke29iamVjdElkfWA7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVV0aWxzIHtcblxuICAvLyBUT0RPIGhhbmRsZSBhY3Rpb25zXG4gIHN0YXRpYyBnZXRNZW51SHRtbChkYXRhKSB7XG4gICAgbGV0IGh0bWwgPSAnPGRpdiBjbGFzcz1cIm1lbnVcIj4nO1xuICAgIGh0bWwgKz0gTWVudVV0aWxzLl9idWlsZERlZmF1bHRNZW51KCk7XG4gICAgZm9yIChsZXQgbWVudSBvZiBkYXRhLm1lbnVzKSB7XG4gICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj4nO1xuICAgICAgaWYgKG1lbnUubWVudXMgJiYgbWVudS5tZW51cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGh0bWwgKz0gYDxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj4ke21lbnUudGl0bGV9Jm5ic3A7JiM4NTk1OzwvYnV0dG9uPjxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+YDtcbiAgICAgICAgZm9yIChsZXQgc3VibWVudSBvZiBtZW51Lm1lbnVzKSB7XG4gICAgICAgICAgaHRtbCArPSBgPGEgaHJlZj1cIiNcIj4ke3N1Ym1lbnUudGl0bGV9PC9hPmA7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPiR7bWVudS50aXRsZX08L2J1dHRvbj5gO1xuICAgICAgfVxuICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgIH1cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBfYnVpbGREZWZhdWx0TWVudSgpIHtcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj5GaWxlJm5ic3A7JiM4NTk1OzwvYnV0dG9uPjxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+PGEgaHJlZj1cIiNcIj5TYXZlIFBORzwvYT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjxhIGhyZWY9XCIjXCI+Q2xvc2U8L2E+PC9kaXY+PC9kaXY+JztcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9tZW51LXV0aWxzLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcblxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsb3Qge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9wbG90LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==