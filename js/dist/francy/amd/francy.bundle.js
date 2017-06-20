define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
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
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
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
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTU3MWNlNzBkOWZhZWNjYzEyMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21lbnUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL3Bsb3QuanMiXSwibmFtZXMiOlsiRnJhbmN5IiwidmVyYm9zZSIsImFwcGVuZFRvIiwibWVudUFjdGlvbkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVHJhY2tlckhhbmRsZXIiLCJvcHRpb25zIiwialF1ZXJ5IiwiRXJyb3IiLCJ1aSIsIl8iLCJkMyIsImRyYXciLCJwbG90IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJpbmZvIiwiYWdlbnQiLCJtZXRob2QiLCJoYW5kbGUiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJvYmplY3QiLCJzcGxpdCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlIiwiZXJyb3IiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsImFkZCIsInN2ZyIsImNhbnZhcyIsIndpZHRoIiwiYXR0ciIsImhlaWdodCIsImNhbGwiLCJ6b29tIiwib24iLCJ6b29tZWQiLCJhcHBlbmQiLCJldmVudCIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiaWQiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJsaW5rIiwibGlua3MiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub2RlIiwibm9kZXMiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwidmFsdWVzIiwiaSIsInN0eWxlIiwiY29sb3JzIiwidGlja2VkIiwibGVuZ3RoIiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJyYWRpdXMiLCJhbHBoYSIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdCIsIl9fZGF0YV9fIiwibyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwiZnkiLCJBYnN0cmFjdENhbnZhcyIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImxvZ2dlciIsInNlbGYiLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiZGVidWciLCIkIiwidyIsImgiLCJkaWFsb2ciLCJjbG9zZSIsInJlbW92ZSIsImdldE1lbnVIdG1sIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsIklEVXRpbHMiLCJvYmplY3RJZCIsIk1lbnVVdGlscyIsImh0bWwiLCJfYnVpbGREZWZhdWx0TWVudSIsIm1lbnVzIiwibWVudSIsInN1Ym1lbnUiLCJMb2dnZXIiLCJtZXNzYWdlIiwiUGxvdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0tBSWFBLE0sV0FBQUEsTTs7QUFFWDs7Ozs7OztBQU9BLHFCQUE0SDtBQUFBLG9GQUFKLEVBQUk7QUFBQSw2QkFBL0dDLE9BQStHO0FBQUEsU0FBL0dBLE9BQStHLGdDQUFyRyxLQUFxRztBQUFBLDhCQUE5RkMsUUFBOEY7QUFBQSxTQUE5RkEsUUFBOEYsaUNBQW5GLE1BQW1GO0FBQUEsc0NBQTNFQyxpQkFBMkU7QUFBQSxTQUEzRUEsaUJBQTJFLHlDQUF2REMsUUFBUUMsR0FBK0M7QUFBQSxzQ0FBMUNDLG9CQUEwQztBQUFBLFNBQTFDQSxvQkFBMEMseUNBQW5CRixRQUFRQyxHQUFXOztBQUFBOztBQUMxSCxVQUFLRSxPQUFMLEdBQWU7QUFDYk4sZ0JBQVNBLE9BREk7QUFFYkMsaUJBQVVBLFFBRkc7QUFHYkksNkJBQXNCQSxvQkFIVDtBQUliSCwwQkFBbUJBO0FBSk4sTUFBZjtBQU1BLFNBQUksQ0FBQ0ssTUFBTCxFQUFhO0FBQ1gsYUFBTSxJQUFJQyxLQUFKLENBQVUsd0ZBQVYsQ0FBTjtBQUNEO0FBQ0QsU0FBSSxDQUFDRCxPQUFPRSxFQUFaLEVBQWdCO0FBQ2QsYUFBTSxJQUFJRCxLQUFKLENBQVUsNkZBQVYsQ0FB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RDtBQUNENEUsbUJBQVEsUUFBUjtBQUNEO0FBZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0J2QixjQUFPQSxJQUFQO0FBQ0Q7Ozt5Q0FFMEI7QUFDekIsY0FBTyw4TEFBUDtBQUNEOzs7Ozs7bUJBeEJrQkQsUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7OztLQUlxQk0sTTtBQUVuQixxQkFBb0M7QUFBQSxvRkFBSixFQUFJO0FBQUEsNkJBQXZCeEssT0FBdUI7QUFBQSxTQUF2QkEsT0FBdUIsZ0NBQWIsS0FBYTs7QUFBQTs7QUFDbEMsVUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7MkJBRUt5SyxPLEVBQVM7QUFDYixXQUFJLEtBQUt6SyxPQUFULEVBQWtCO0FBQ2hCRyxpQkFBUW1KLEtBQVIsQ0FBY21CLE9BQWQ7QUFDRDtBQUNGOzs7MEJBRUlBLE8sRUFBUztBQUNadEssZUFBUWMsSUFBUixDQUFhd0osT0FBYjtBQUNEOzs7MkJBRUtBLE8sRUFBU3RJLE0sRUFBTztBQUNwQmhDLGVBQVFnQyxLQUFSLENBQWNzSSxPQUFkLEVBQXVCdEksTUFBdkI7QUFDRDs7Ozs7O21CQWxCa0JxSSxNOzs7Ozs7Ozs7Ozs7OztLQ0pBRSxJLEdBRW5CLGdCQUFvQztBQUFBLGtGQUFKLEVBQUk7QUFBQSwyQkFBdkIxSyxPQUF1QjtBQUFBLE9BQXZCQSxPQUF1QixnQ0FBYixLQUFhOztBQUFBO0FBRW5DLEU7O21CQUprQjBLLEkiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE1NzFjZTcwZDlmYWVjY2MxMjAxIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcbmltcG9ydCBEcmF3IGZyb20gXCIuL2hhbmRsZXIvZHJhd1wiO1xuaW1wb3J0IFBsb3QgZnJvbSBcIi4vaGFuZGxlci9wbG90XCI7XG5cbi8qKlxuICogRnJhbmN5IGlzIHRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgd2hvbGUgZnJhbWV3b3JrLiBCeSBwYXNzaW5nIGFuIGlucHV0IHN0cmluZy9vYmplY3QgdG8gdGhlIHtGcmFuY3kuaGFuZGxlfSBmdW5jdGlvbixcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbmN5IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBGcmFuY3kgd2l0aCB0aGUgZm9sbG93aW5nIG9wdGlvbnM6XG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcbiAgICogQHBhcmFtIGFwcGVuZFRvIHdoZXJlIHRoZSBnZW5lcmF0ZWQgaHRtbC9zdmcgY29tcG9uZW50cyB3aWxsIGJlIGF0dGFjaGVkIHRvLCBkZWZhdWx0IGJvZHlcbiAgICogQHBhcmFtIG1lbnVBY3Rpb25IYW5kbGVyIHRoaXMgaGFuZGxlciB3aWxsIGJlIHVzZWQgdG8gaW52b2tlIGFjdGlvbnMgZnJvbSB0aGUgbWVudSwgZGVmYXVsdCBjb25zb2xlLmxvZ1xuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcbiAgICovXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCBtZW51QWN0aW9uSGFuZGxlciA9IGNvbnNvbGUubG9nLCBjaGFuZ2VUcmFja2VySGFuZGxlciA9IGNvbnNvbGUubG9nfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUbyxcbiAgICAgIGNoYW5nZVRyYWNrZXJIYW5kbGVyOiBjaGFuZ2VUcmFja2VySGFuZGxlcixcbiAgICAgIG1lbnVBY3Rpb25IYW5kbGVyOiBtZW51QWN0aW9uSGFuZGxlclxuICAgIH07XG4gICAgaWYgKCFqUXVlcnkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlF1ZXJ5IGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5IHYzLjEuMSsuJyk7XG4gICAgfVxuICAgIGlmICghalF1ZXJ5LnVpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pRdWVyeVVJIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgSlF1ZXJ5VUkgdjEuMTIuMSsuJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgXyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmRlcnNjb3JlSlMgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBVbmRlcnNjb3JlSlMgdjEuOC4zKy4nKTtcbiAgICB9XG4gICAgaWYgKCFkMykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEMyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IEQzIHY0Ky4nKTtcbiAgICB9XG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLnBsb3QgPSBuZXcgUGxvdCh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW4gZW50cnkgcG9pbnQuIENhbGxpbmcgaGFuZGxlIHBhc3NpbmcgYSBqc29uIHJlcHJlc2VudGF0aW9uIHN0cmluZyB3aWxsIHRyaWdnZXIgdGhlIGRyYXdpbmcgb2YgYSBqc29uIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXG4gICAqL1xuICBoYW5kbGUoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGNvbnNvbGUuaW5mbyhgRnJhbmN5IHdpbGwgWyR7anNvbi5hZ2VudC5tZXRob2R9XSB0aGUgZm9sbG93aW5nIG9iamVjdDogYCwganNvbik7XG4gICAgICBzd2l0Y2ggKGpzb24uYWdlbnQubWV0aG9kKSB7XG4gICAgICAgIGNhc2UgJ2RyYXcnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcuaGFuZGxlKGpzb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbG90JzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5wbG90LmhhbmRsZShqc29uKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFske2pzb24uYWdlbnQubWV0aG9kfV0gaXMgbm90IGEgdmFsaWQgbWV0aG9kIGZvciBGcmFuY3khIFZhbGlkIG1ldGhvZHMgYXJlOiBbZHJhdywgcGxvdF0uYCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9mcmFuY3kuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0byBkZWFsIHdpdGggSlNPTi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblV0aWxzIHtcblxuICAvKipcbiAgICogUGFyc2VzIGFuIGlucHV0IG5kIGNoZWNrcyB3aGV0aGVyIHRoaXMgaW5wdXQgaXMgdmFsaWQgYW5kIHJldHVybnMgYSBKU09OIG9iamVjdC5cbiAgICogQHBhcmFtIGlucHV0IC0gdGhlIGlucHV0IHdlIHdhbnQgdG8gcGFyc2VcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAqL1xuICBzdGF0aWMgcGFyc2UoaW5wdXQpIHtcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW1xcblxcclxcYlxcXFxdK3woZ2FwPikvZywgJycpO1xuICAgIGxldCBqc29uUmVnZXggPSAveyg/OlteXSkqfS9nO1xuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGlucHV0ID0gbWF0Y2hbMF07XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UoaW5wdXQpO1xuICAgICAgICBqc29uLmFnZW50ID0gXy5vYmplY3QoWyduYW1lJywgJ21ldGhvZCcsICd0eXBlJ10sIGpzb24uYWdlbnQuc3BsaXQoJy4nKSk7XG4gICAgICAgIHJldHVybiBqc29uLmFnZW50Lm5hbWUgPT09ICdmcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL2NhbnZhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXcgZXh0ZW5kcyBDYW52YXMge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgaGFuZGxlKGpzb24pIHtcbiAgICB0aGlzLl9yZW5kZXJDYW52YXMoanNvbik7XG4gICAgdGhpcy5hZGQoanNvbik7XG4gIH1cblxuICBhZGQoanNvbikge1xuXG4gICAgdmFyIHN2ZyA9IHRoaXMuY2FudmFzLFxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXG4gICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoJ2hlaWdodCcpO1xuXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xuXG4gICAgZnVuY3Rpb24gem9vbWVkKCkge1xuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xuICAgIH1cblxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXG4gICAgICAuZGF0YShbJ2Fycm93J10pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ21hcmtlcicpXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZClcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcbiAgICAgIC5hdHRyKCdyZWZZJywgMClcbiAgICAgIC5hdHRyKCdtYXJrZXJXaWR0aCcsIDEwKVxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XG5cbiAgICAvL0dlbmVyaWMgZ3Jhdml0eSBmb3IgdGhlIFggcG9zaXRpb25cbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xuXG4gICAgLy9TdHJvbmcgeSBwb3NpdGlvbmluZyBiYXNlZCBvbiBsYXllclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XG5cbiAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxuICAgICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoLTQwMCkpXG4gICAgICAuZm9yY2UoXCJ4XCIsIGZvcmNlWClcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxuICAgICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGlua3MnKVxuICAgICAgLnNlbGVjdEFsbCgnbGluZScpXG4gICAgICAuZGF0YShqc29uLmxpbmtzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdsaW5lJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YCk7XG4gICAgLy8uc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNhcnJvdyknKTtcblxuXG4gICAgdmFyIG5vZGUgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdjbGFzcycsICdub2RlcycpLnNlbGVjdEFsbCgnZy5ub2RlcycpXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuICAgICAgLmF0dHIoJ2QnLCBkMy5zeW1ib2woKS50eXBlKGQgPT4gQ2FudmFzLmdldFN5bWJvbChkLnR5cGUpKS5zaXplKGQgPT4gZC5zaXplICogOTApKVxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXG4gICAgICAuYXR0cignY2xhc3MnLCBkID0+ICdub2RlJyArIChkLmhpZ2hsaWdodCA/ICcgaGlnaGxpZ2h0JyA6ICcnKSlcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gZC5pZClcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxuICAgICAgICAub24oJ3N0YXJ0JywgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgIC5vbignZHJhZycsIGRyYWdnZWQpXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcbiAgICAgIC8vLm9uKCdjb250ZXh0bWVudScsIGNvbm5lY3RlZE5vZGVzKSAvL3JpZ2h0Y2xpY2tcbiAgICAgIC5vbignY2xpY2snLCBjb25uZWN0ZWROb2Rlcyk7XG5cbiAgICBub2RlLmFwcGVuZCgndGl0bGUnKS50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gYElEOlxcdCR7ZC5pZH1cXG5MYXllcjpcXHQke2QubGF5ZXJ9YDtcbiAgICB9KTtcblxuICAgIHZhciBsYWJlbCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5kYXRhKGpzb24ubm9kZXMsIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGFiZWwnKVxuICAgICAgLnRleHQoZCA9PiBkLnRpdGxlKTtcblxuICAgIHZhciBsZWdlbmQgPSB0aGlzLmNhbnZhc1xuICAgICAgLmFwcGVuZCgnZycpXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcbiAgICAgIC5zZWxlY3RBbGwoJ2cnKVxuICAgICAgLmRhdGEoZDMubWFwKGpzb24ubm9kZXMsIGQgPT4gZC5sYXllcikudmFsdWVzKCksIGQgPT4gZC5pZClcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdnJylcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYGxlZ2VuZExheWVyJHtkLmxheWVyfWApXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgbGV0IHggPSAwO1xuICAgICAgICBsZXQgeSA9IGkgKiAxMTtcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XG4gICAgICB9KTtcblxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxuICAgICAgLmF0dHIoJ3dpZHRoJywgMTApXG4gICAgICAuYXR0cignaGVpZ2h0JywgOClcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpO1xuXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignc3R5bGUnLCAnZm9udC1zaXplOiAxMHB4OycpXG4gICAgICAuYXR0cigneCcsIDEwICsgNSlcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxuICAgICAgLnRleHQoZCA9PiBgSW5kZXggJHtkLmxheWVyfWApO1xuXG4gICAgc2ltdWxhdGlvbi5ub2Rlcyhqc29uLm5vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XG5cbiAgICBzaW11bGF0aW9uLmZvcmNlKCdsaW5rJykubGlua3MoanNvbi5saW5rcyk7XG5cbiAgICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgICBsaW5rXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcbiAgICAgICAgLmF0dHIoJ3kxJywgZCA9PiBkLnNvdXJjZS55KVxuICAgICAgICAuYXR0cigneDInLCBkID0+IGQudGFyZ2V0LngpXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XG5cbiAgICAgIG5vZGVcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcbiAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICBsYWJlbFxuICAgICAgICAuYXR0cigneCcsIGQgPT4ge1xuICAgICAgICAgIHJldHVybiBkLnggLSBkLnRpdGxlLmxlbmd0aCAqIDIgLSBNYXRoLnNxcnQoZC5zaXplKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQueSAtIE1hdGguc3FydChkLnNpemUpKTtcblxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC41KSk7XG4gICAgfVxuXG4gICAgLy8gQ09MTElTSU9OXG4gICAgdmFyIHBhZGRpbmcgPSAxLCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gY2lyY2xlc1xuICAgICAgcmFkaXVzID0gMjA7XG5cbiAgICBmdW5jdGlvbiBjb2xsaWRlKGFscGhhKSB7XG4gICAgICBsZXQgcXVhZFRyZWUgPSBkMy5xdWFkdHJlZShqc29uLm5vZGVzKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xuICAgICAgICBsZXQgcmIgPSAyICogcmFkaXVzICsgcGFkZGluZyxcbiAgICAgICAgICBueDEgPSBkLnggLSByYixcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcbiAgICAgICAgICBueTEgPSBkLnkgLSByYixcbiAgICAgICAgICBueTIgPSBkLnkgKyByYjtcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24gKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgICAgICAgaWYgKHF1YWQucG9pbnQgJiYgKHF1YWQucG9pbnQgIT09IGQpKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGQueCAtIHF1YWQucG9pbnQueCxcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcbiAgICAgICAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgICAgIGlmIChsIDwgcmIpIHtcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xuICAgICAgICAgICAgICBkLnggLT0geCAqPSBsO1xuICAgICAgICAgICAgICBkLnkgLT0geSAqPSBsO1xuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcbiAgICAgICAgICAgICAgcXVhZC5wb2ludC55ICs9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB4MSA+IG54MiB8fCB4MiA8IG54MSB8fCB5MSA+IG55MiB8fCB5MiA8IG55MTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhJR0hMSUdIVFxuICAgIC8vVG9nZ2xlIHN0b3JlcyB3aGV0aGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgb25cbiAgICB2YXIgdG9nZ2xlID0gMDtcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcbiAgICB2YXIgbGlua2VkQnlJbmRleCA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2l9LCR7aX1gXSA9IDE7XG4gICAgfVxuXG4gICAganNvbi5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICBsaW5rZWRCeUluZGV4W2Ake2Quc291cmNlLmluZGV4fSwke2QudGFyZ2V0LmluZGV4fWBdID0gMTtcbiAgICB9KTtcblxuICAgIC8vVGhpcyBmdW5jdGlvbiBsb29rcyB1cCB3aGV0aGVyIGEgcGFpciBhcmUgbmVpZ2hib3Vyc1xuICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcbiAgICAgIHJldHVybiBsaW5rZWRCeUluZGV4W2Ake2EuaW5kZXh9LCR7Yi5pbmRleH1gXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25uZWN0ZWROb2RlcygpIHtcbiAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcGFjaXR5IG9mIGFsbCBidXQgdGhlIG5laWdoYm91cmluZyBub2Rlc1xuICAgICAgICBsZXQgZCA9IGQzLnNlbGVjdCh0aGlzKS5ub2RlKCkuX19kYXRhX187XG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCBvID0+IGQuaW5kZXggPT09IG8uc291cmNlLmluZGV4IHx8IGQuaW5kZXggPT09IG8udGFyZ2V0LmluZGV4ID8gMSA6IDAuMSk7XG4gICAgICAgIC8vUmVkdWNlIHRoZSBvcFxuICAgICAgICB0b2dnbGUgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9QdXQgdGhlbSBiYWNrIHRvIG9wYWNpdHk9MVxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XG4gICAgICAgIGxpbmsuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgdG9nZ2xlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG4gICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgIGQuZnggPSBkLng7XG4gICAgICBkLmZ5ID0gZC55O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgZC5meCA9IGQzLmV2ZW50Lng7XG4gICAgICBkLmZ5ID0gZDMuZXZlbnQueTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XG4gICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgIGQuZnkgPSBudWxsO1xuICAgIH1cblxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJpbXBvcnQgSURVdGlscyBmcm9tICcuLi91dGlsL2lkLXV0aWxzJztcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi4vdXRpbC9tZW51LXV0aWxzJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbC9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XG5cbiAgc3RhdGljIGdldCBjb2xvcnMoKSB7XG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ3Jvc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGlhbW9uZCcpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NxdWFyZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTcXVhcmU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XG4gICAgICByZXR1cm4gZDMuc3ltYm9sVHJpYW5nbGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RhcicpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3d5ZScpIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xXeWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDaXJjbGU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xuICB9XG5cbiAgX3JlbmRlckNhbnZhcyhqc29uKSB7XG4gICAgaWYgKCFqc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04gb2JqZWN0IHRvIHJlbmRlciBpcyBlbXB0eSEnKTtcbiAgICB9XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIC8vIGJ1aWxkIHRoZSBkaWFsb2cgd2luZG93XG4gICAgc2VsZi53aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xuICAgIHNlbGYud2luZG93ID0gZDMuc2VsZWN0KGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3aW5kb3cgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBXaW5kb3cgWyR7c2VsZi53aW5kb3dJZH1dLi4uYCk7XG4gICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgaWQ6IHNlbGYud2luZG93SWQsXG4gICAgICAgIHRpdGxlOiBqc29uLmNhbnZhcy50aXRsZSxcbiAgICAgICAgd2lkdGg6IGpzb24uY2FudmFzLncsXG4gICAgICAgIGhlaWdodDoganNvbi5jYW52YXMuaFxuICAgICAgfSkuYXBwZW5kVG8oJ2JvZHknKTtcbiAgICAgIC8vIHVwZGF0ZSBlbGVtZW50XG4gICAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcbiAgICB9XG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIHdpbmRvdyBpcyBub3QgcHJlc2VudFxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9vcHMsIGNvdWxkIG5vdCBjcmVhdGUgd2luZG93IHdpdGggaWQgJHtzZWxmLndpbmRvd0lkfS4uLiBDYW5ub3QgcHJvY2VlZC5gKTtcbiAgICB9XG4gICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBkaWFsb2cgdG8gb3BlblxuICAgICQoYCMke3NlbGYud2luZG93SWR9YCkuZGlhbG9nKHtcbiAgICAgIGNsb3NlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAgICAgcmV0dXJuICQodGhpcykuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBNZW51cyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcbiAgICAvLyBidWlsZCBtZW51XG4gICAgJChNZW51VXRpbHMuZ2V0TWVudUh0bWwoanNvbikpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xuICAgICQoJzxici8+JykuYXBwZW5kVG8oYCMke3NlbGYud2luZG93SWR9YCk7XG5cbiAgICAvLyBidWlsZCBjYW52YXNcbiAgICBzZWxmLmNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZChqc29uLmNhbnZhcy5pZCk7XG4gICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3NlbGYuY2FudmFzSWR9YCk7XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDcmVhdGluZyBDYW52YXMgWyR7c2VsZi5jYW52YXNJZH1dLi4uYCk7XG4gICAgICBzZWxmLmNhbnZhcyA9IGQzLnNlbGVjdChgZGl2IyR7c2VsZi53aW5kb3dJZH1gKS5hcHBlbmQoJ3N2ZycpXG4gICAgICAgIC5hdHRyKCdpZCcsIHNlbGYuY2FudmFzSWQpO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgY2FudmFzIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSBjYW52YXMgd2l0aCBpZCAke3NlbGYuY2FudmFzSWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgaWYgbmVlZGVkXG4gICAgc2VsZi5jYW52YXNcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGpzb24uY2FudmFzLncpXG4gICAgICAuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaClcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvY2FudmFzLmpzIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeVdpbmRvdyR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lDYW52YXMke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeU9iamVjdCR7b2JqZWN0SWR9YDtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VXRpbHMge1xuXG4gIC8vIFRPRE8gaGFuZGxlIGFjdGlvbnNcbiAgc3RhdGljIGdldE1lbnVIdG1sKGRhdGEpIHtcbiAgICBsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwibWVudVwiPic7XG4gICAgaHRtbCArPSBNZW51VXRpbHMuX2J1aWxkRGVmYXVsdE1lbnUoKTtcbiAgICBmb3IgKGxldCBtZW51IG9mIGRhdGEubWVudXMpIHtcbiAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPic7XG4gICAgICBpZiAobWVudS5tZW51cyAmJiBtZW51Lm1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPiR7bWVudS50aXRsZX0mbmJzcDsmIzg1OTU7PC9idXR0b24+PGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5gO1xuICAgICAgICBmb3IgKGxldCBzdWJtZW51IG9mIG1lbnUubWVudXMpIHtcbiAgICAgICAgICBodG1sICs9IGA8YSBocmVmPVwiI1wiPiR7c3VibWVudS50aXRsZX08L2E+YDtcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9ICc8L2Rpdj4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+JHttZW51LnRpdGxlfTwvYnV0dG9uPmA7XG4gICAgICB9XG4gICAgICBodG1sICs9ICc8L2Rpdj4nXG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIF9idWlsZERlZmF1bHRNZW51KCkge1xuICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+PGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPkZpbGUmbmJzcDsmIzg1OTU7PC9idXR0b24+PGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj48YSBocmVmPVwiI1wiPlNhdmUgUE5HPC9hPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PGEgaHJlZj1cIiNcIj5DbG9zZTwvYT48L2Rpdj48L2Rpdj4nO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21lbnUtdXRpbHMuanMiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXG4gKiBUaGUgaWRzIG5hbWluZyBjb252ZW50aW9uIGlzOiAnZnJhbmN5W1dpbmRvd3xDYW52YXN8T2JqZWN0XSpudW1lcmljYWwgaWQqJ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICB0aGlzLnZlcmJvc2UgPSB2ZXJib3NlO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLnZlcmJvc2UpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7XG4gICAgY29uc29sZS5pbmZvKG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxvdCB7XG5cbiAgY29uc3RydWN0b3Ioe3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL3Bsb3QuanMiXSwic291cmNlUm9vdCI6IiJ9