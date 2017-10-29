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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDMzMjRiZDFjNGM3M2RiNjQ5NWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW5jeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL2RyYXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXIvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2lkLXV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21lbnUtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVyL3Bsb3QuanMiXSwibmFtZXMiOlsiRnJhbmN5IiwidmVyYm9zZSIsImFwcGVuZFRvIiwibWVudUFjdGlvbkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlVHJhY2tlckhhbmRsZXIiLCJvcHRpb25zIiwialF1ZXJ5IiwiRXJyb3IiLCJ1aSIsIl8iLCJkMyIsImRyYXciLCJwbG90IiwiaW5wdXQiLCJqc29uIiwicGFyc2UiLCJpbmZvIiwiYWdlbnQiLCJtZXRob2QiLCJoYW5kbGUiLCJleHBvcnRzIiwid2luZG93IiwiSnNvblV0aWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJqc29uUmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJvYmplY3QiLCJzcGxpdCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJlIiwiZXJyb3IiLCJEcmF3IiwiX3JlbmRlckNhbnZhcyIsImFkZCIsInN2ZyIsImNhbnZhcyIsIndpZHRoIiwiYXR0ciIsImhlaWdodCIsImNhbGwiLCJ6b29tIiwib24iLCJ6b29tZWQiLCJhcHBlbmQiLCJldmVudCIsInRyYW5zZm9ybSIsIngiLCJ5IiwiayIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImQiLCJmb3JjZVgiLCJzdHJlbmd0aCIsImZvcmNlWSIsImxheWVyIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VMaW5rIiwiaWQiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VDZW50ZXIiLCJsaW5rIiwibGlua3MiLCJzb3VyY2UiLCJ0YXJnZXQiLCJub2RlIiwibm9kZXMiLCJzeW1ib2wiLCJ0eXBlIiwiZ2V0U3ltYm9sIiwic2l6ZSIsImhpZ2hsaWdodCIsImRyYWciLCJkcmFnc3RhcnRlZCIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJjb25uZWN0ZWROb2RlcyIsInRleHQiLCJsYWJlbCIsInRpdGxlIiwibGVnZW5kIiwibWFwIiwidmFsdWVzIiwiaSIsInN0eWxlIiwiY29sb3JzIiwidGlja2VkIiwibGVuZ3RoIiwiTWF0aCIsInNxcnQiLCJlYWNoIiwiY29sbGlkZSIsInBhZGRpbmciLCJyYWRpdXMiLCJhbHBoYSIsInF1YWRUcmVlIiwicXVhZHRyZWUiLCJyYiIsIm54MSIsIm54MiIsIm55MSIsIm55MiIsInZpc2l0IiwicXVhZCIsIngxIiwieTEiLCJ4MiIsInkyIiwicG9pbnQiLCJsIiwidG9nZ2xlIiwibGlua2VkQnlJbmRleCIsImZvckVhY2giLCJpbmRleCIsIm5laWdoYm9yaW5nIiwiYSIsImIiLCJwcmV2ZW50RGVmYXVsdCIsInNlbGVjdCIsIl9fZGF0YV9fIiwibyIsImFjdGl2ZSIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwiZnkiLCJBYnN0cmFjdENhbnZhcyIsInN5bWJvbENpcmNsZSIsInN5bWJvbENyb3NzIiwic3ltYm9sRGlhbW9uZCIsInN5bWJvbFNxdWFyZSIsInN5bWJvbFRyaWFuZ2xlIiwic3ltYm9sU3RhciIsInN5bWJvbFd5ZSIsInNjYWxlU2VxdWVudGlhbCIsImRvbWFpbiIsImludGVycG9sYXRvciIsImludGVycG9sYXRlUmFpbmJvdyIsImxvZ2dlciIsInNlbGYiLCJ3aW5kb3dJZCIsImdldFdpbmRvd0lkIiwiZGVidWciLCIkIiwidyIsImgiLCJkaWFsb2ciLCJjbG9zZSIsInJlbW92ZSIsImdldE1lbnVIdG1sIiwiY2FudmFzSWQiLCJnZXRDYW52YXNJZCIsIklEVXRpbHMiLCJvYmplY3RJZCIsIk1lbnVVdGlscyIsImh0bWwiLCJfYnVpbGREZWZhdWx0TWVudSIsIm1lbnVzIiwibWVudSIsInN1Ym1lbnUiLCJMb2dnZXIiLCJtZXNzYWdlIiwiUGxvdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0tBSWFBLE0sV0FBQUEsTTs7QUFFWDs7Ozs7OztBQU9BLHFCQUE0SDtBQUFBLG9GQUFKLEVBQUk7QUFBQSw2QkFBL0dDLE9BQStHO0FBQUEsU0FBL0dBLE9BQStHLGdDQUFyRyxLQUFxRztBQUFBLDhCQUE5RkMsUUFBOEY7QUFBQSxTQUE5RkEsUUFBOEYsaUNBQW5GLE1BQW1GO0FBQUEsc0NBQTNFQyxpQkFBMkU7QUFBQSxTQUEzRUEsaUJBQTJFLHlDQUF2REMsUUFBUUMsR0FBK0M7QUFBQSxzQ0FBMUNDLG9CQUEwQztBQUFBLFNBQTFDQSxvQkFBMEMseUNBQW5CRixRQUFRQyxHQUFXOztBQUFBOztBQUMxSCxVQUFLRSxPQUFMLEdBQWU7QUFDYk4sZ0JBQVNBLE9BREk7QUFFYkMsaUJBQVVBLFFBRkc7QUFHYkksNkJBQXNCQSxvQkFIVDtBQUliSCwwQkFBbUJBO0FBSk4sTUFBZjtBQU1BLFNBQUksQ0FBQ0ssTUFBTCxFQUFhO0FBQ1gsYUFBTSxJQUFJQyxLQUFKLENBQVUsd0ZBQVYsQ0FBTjtBQUNEO0FBQ0QsU0FBSSxDQUFDRCxPQUFPRSxFQUFaLEVBQWdCO0FBQ2QsYUFBTSxJQUFJRCxLQUFKLENBQVUsNkZBQVYsQ0FB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RDtBQUNENEUsbUJBQVEsUUFBUjtBQUNEO0FBZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0J2QixjQUFPQSxJQUFQO0FBQ0Q7Ozt5Q0FFMEI7QUFDekIsY0FBTyw4TEFBUDtBQUNEOzs7Ozs7bUJBeEJrQkQsUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQjs7OztLQUlxQk0sTTtBQUVuQixxQkFBb0M7QUFBQSxvRkFBSixFQUFJO0FBQUEsNkJBQXZCeEssT0FBdUI7QUFBQSxTQUF2QkEsT0FBdUIsZ0NBQWIsS0FBYTs7QUFBQTs7QUFDbEMsVUFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7MkJBRUt5SyxPLEVBQVM7QUFDYixXQUFJLEtBQUt6SyxPQUFULEVBQWtCO0FBQ2hCRyxpQkFBUW1KLEtBQVIsQ0FBY21CLE9BQWQ7QUFDRDtBQUNGOzs7MEJBRUlBLE8sRUFBUztBQUNadEssZUFBUWMsSUFBUixDQUFhd0osT0FBYjtBQUNEOzs7MkJBRUtBLE8sRUFBU3RJLE0sRUFBTztBQUNwQmhDLGVBQVFnQyxLQUFSLENBQWNzSSxPQUFkLEVBQXVCdEksTUFBdkI7QUFDRDs7Ozs7O21CQWxCa0JxSSxNOzs7Ozs7Ozs7Ozs7OztLQ0pBRSxJLEdBRW5CLGdCQUFvQztBQUFBLGtGQUFKLEVBQUk7QUFBQSwyQkFBdkIxSyxPQUF1QjtBQUFBLE9BQXZCQSxPQUF1QixnQ0FBYixLQUFhOztBQUFBO0FBRW5DLEU7O21CQUprQjBLLEkiLCJmaWxlIjoiZnJhbmN5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQzMzI0YmQxYzRjNzNkYjY0OTVkIiwiaW1wb3J0IEpzb25VdGlscyBmcm9tIFwiLi91dGlsL2pzb24tdXRpbHNcIjtcclxuaW1wb3J0IERyYXcgZnJvbSBcIi4vaGFuZGxlci9kcmF3XCI7XHJcbmltcG9ydCBQbG90IGZyb20gXCIuL2hhbmRsZXIvcGxvdFwiO1xyXG5cclxuLyoqXHJcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXHJcbiAqIEZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgY3JlYXRpb24gb2YgdGhhdCBqc29uIGFzIGxvbmcgaXQgaXMgYSB2YWxpZCBhbmQgdW5kZXJzdGFuZGFibGUganNvbiBvYmplY3QgdG8gRnJhbmN5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxyXG4gICAqIEBwYXJhbSB2ZXJib3NlIHByaW50cyBleHRyYSBsb2cgaW5mb3JtYXRpb24gdG8gY29uc29sZS5sb2csIGRlZmF1bHQgZmFsc2VcclxuICAgKiBAcGFyYW0gYXBwZW5kVG8gd2hlcmUgdGhlIGdlbmVyYXRlZCBodG1sL3N2ZyBjb21wb25lbnRzIHdpbGwgYmUgYXR0YWNoZWQgdG8sIGRlZmF1bHQgYm9keVxyXG4gICAqIEBwYXJhbSBtZW51QWN0aW9uSGFuZGxlciB0aGlzIGhhbmRsZXIgd2lsbCBiZSB1c2VkIHRvIGludm9rZSBhY3Rpb25zIGZyb20gdGhlIG1lbnUsIGRlZmF1bHQgY29uc29sZS5sb2dcclxuICAgKiBAcGFyYW0gY2hhbmdlVHJhY2tlckhhbmRsZXIgdGhpcyBoYW5kbGVyIHdpbGwgYmUgdXNlZCB0byByZXBvcnQgYW55IGNoYW5nZXMgZGV0ZWN0ZWQgYnkgdGhlIENoYW5nZVRyYWNrZXIsIGRlZmF1bHQgY29uc29sZS5sb2dcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih7dmVyYm9zZSA9IGZhbHNlLCBhcHBlbmRUbyA9ICdib2R5JywgbWVudUFjdGlvbkhhbmRsZXIgPSBjb25zb2xlLmxvZywgY2hhbmdlVHJhY2tlckhhbmRsZXIgPSBjb25zb2xlLmxvZ30gPSB7fSkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICB2ZXJib3NlOiB2ZXJib3NlLFxyXG4gICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXHJcbiAgICAgIGNoYW5nZVRyYWNrZXJIYW5kbGVyOiBjaGFuZ2VUcmFja2VySGFuZGxlcixcclxuICAgICAgbWVudUFjdGlvbkhhbmRsZXI6IG1lbnVBY3Rpb25IYW5kbGVyXHJcbiAgICB9O1xyXG4gICAgaWYgKCFqUXVlcnkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKUXVlcnkgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBKUXVlcnkgdjMuMS4xKy4nKTtcclxuICAgIH1cclxuICAgIGlmICghalF1ZXJ5LnVpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSlF1ZXJ5VUkgaXMgbm90IGltcG9ydGVkISBGcmFuY3kgd29uXFwndCB3b3JrIHdpdGhvdXQgaXQuLi4gcGxlYXNlIGltcG9ydCBKUXVlcnlVSSB2MS4xMi4xKy4nKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgXyAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZGVyc2NvcmVKUyBpcyBub3QgaW1wb3J0ZWQhIEZyYW5jeSB3b25cXCd0IHdvcmsgd2l0aG91dCBpdC4uLiBwbGVhc2UgaW1wb3J0IFVuZGVyc2NvcmVKUyB2MS44LjMrLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFkMykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0QzIGlzIG5vdCBpbXBvcnRlZCEgRnJhbmN5IHdvblxcJ3Qgd29yayB3aXRob3V0IGl0Li4uIHBsZWFzZSBpbXBvcnQgRDMgdjQrLicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcmF3ID0gbmV3IERyYXcodGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMucGxvdCA9IG5ldyBQbG90KHRoaXMub3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYWluIGVudHJ5IHBvaW50LiBDYWxsaW5nIGhhbmRsZSBwYXNzaW5nIGEganNvbiByZXByZXNlbnRhdGlvbiBzdHJpbmcgd2lsbCB0cmlnZ2VyIHRoZSBkcmF3aW5nIG9mIGEganNvbiBvYmplY3QuXHJcbiAgICogQHBhcmFtIGlucHV0IC0gYSBqc29uIHN0cmluZy9vYmplY3QgdG8gZ2V0IGRyYXduXHJcbiAgICovXHJcbiAgaGFuZGxlKGlucHV0KSB7XHJcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XHJcbiAgICBpZiAoanNvbikge1xyXG4gICAgICBjb25zb2xlLmluZm8oYEZyYW5jeSB3aWxsIFske2pzb24uYWdlbnQubWV0aG9kfV0gdGhlIGZvbGxvd2luZyBvYmplY3Q6IGAsIGpzb24pO1xyXG4gICAgICBzd2l0Y2ggKGpzb24uYWdlbnQubWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnZHJhdyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kcmF3LmhhbmRsZShqc29uKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Bsb3QnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucGxvdC5oYW5kbGUoanNvbik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbJHtqc29uLmFnZW50Lm1ldGhvZH1dIGlzIG5vdCBhIHZhbGlkIG1ldGhvZCBmb3IgRnJhbmN5ISBWYWxpZCBtZXRob2RzIGFyZTogW2RyYXcsIHBsb3RdLmApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydHMuRnJhbmN5ID0gd2luZG93LkZyYW5jeSA9IEZyYW5jeTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ZyYW5jeS5qcyIsIi8qKlxyXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVXRpbHMge1xyXG5cclxuICAvKipcclxuICAgKiBQYXJzZXMgYW4gaW5wdXQgbmQgY2hlY2tzIHdoZXRoZXIgdGhpcyBpbnB1dCBpcyB2YWxpZCBhbmQgcmV0dXJucyBhIEpTT04gb2JqZWN0LlxyXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB3ZSB3YW50IHRvIHBhcnNlXHJcbiAgICogQHJldHVybnMge2pzb259IC0gaWYgdGhlIGlucHV0IGlzIGEgdmFsaWQgSlNPTiBvYmplY3QsIG90aGVyd2lzZSByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XHJcbiAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIiA/IEpTT04uc3RyaW5naWZ5KGlucHV0KSA6IGlucHV0O1xyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXFxuXFxyXFxiXFxcXF0rfChnYXA+KS9nLCAnJyk7XHJcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcclxuICAgIGxldCBtYXRjaCA9IGpzb25SZWdleC5leGVjKGlucHV0KTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShpbnB1dCk7XHJcbiAgICAgICAganNvbi5hZ2VudCA9IF8ub2JqZWN0KFsnbmFtZScsICdtZXRob2QnLCAndHlwZSddLCBqc29uLmFnZW50LnNwbGl0KCcuJykpO1xyXG4gICAgICAgIHJldHVybiBqc29uLmFnZW50Lm5hbWUgPT09ICdmcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvanNvbi11dGlscy5qcyIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhdyBleHRlbmRzIENhbnZhcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcclxuICAgIHN1cGVyKHt2ZXJib3NlOiB2ZXJib3NlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGUoanNvbikge1xyXG4gICAgdGhpcy5fcmVuZGVyQ2FudmFzKGpzb24pO1xyXG4gICAgdGhpcy5hZGQoanNvbik7XHJcbiAgfVxyXG5cclxuICBhZGQoanNvbikge1xyXG5cclxuICAgIHZhciBzdmcgPSB0aGlzLmNhbnZhcyxcclxuICAgICAgd2lkdGggPSArc3ZnLmF0dHIoJ3dpZHRoJyksXHJcbiAgICAgIGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XHJcblxyXG4gICAgc3ZnID0gc3ZnLmNhbGwoZDMuem9vbSgpLm9uKCd6b29tJywgem9vbWVkKSkuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAnZHJhdycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHpvb21lZCgpIHtcclxuICAgICAgc3ZnLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtkMy5ldmVudC50cmFuc2Zvcm0ueH0sJHtkMy5ldmVudC50cmFuc2Zvcm0ueX0pIHNjYWxlKCR7ZDMuZXZlbnQudHJhbnNmb3JtLmt9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmQoJ2RlZnMnKS5zZWxlY3RBbGwoJ21hcmtlcicpXHJcbiAgICAgIC5kYXRhKFsnYXJyb3cnXSlcclxuICAgICAgLmVudGVyKCkuYXBwZW5kKCdtYXJrZXInKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnYXJyb3dzJylcclxuICAgICAgLmF0dHIoJ2lkJywgZCA9PiBkKVxyXG4gICAgICAuYXR0cigndmlld0JveCcsICcwIC01IDEwIDEwJylcclxuICAgICAgLmF0dHIoJ3JlZlgnLCAyNSlcclxuICAgICAgLmF0dHIoJ3JlZlknLCAwKVxyXG4gICAgICAuYXR0cignbWFya2VyV2lkdGgnLCAxMClcclxuICAgICAgLmF0dHIoJ21hcmtlckhlaWdodCcsIDEwKVxyXG4gICAgICAuYXR0cignb3JpZW50JywgJ2F1dG8nKVxyXG4gICAgICAuYXBwZW5kKCdwYXRoJylcclxuICAgICAgLmF0dHIoJ2QnLCAnTTAsLTVMMTAsMEwwLDUgTDEwLDAgTDAsIC01Jyk7XHJcblxyXG4gICAgLy9HZW5lcmljIGdyYXZpdHkgZm9yIHRoZSBYIHBvc2l0aW9uXHJcbiAgICB2YXIgZm9yY2VYID0gZDMuZm9yY2VYKGQgPT4gMjUwKS5zdHJlbmd0aCgwLjEpO1xyXG5cclxuICAgIC8vU3Ryb25nIHkgcG9zaXRpb25pbmcgYmFzZWQgb24gbGF5ZXJcclxuICAgIHZhciBmb3JjZVkgPSBkMy5mb3JjZVkoZCA9PiBkLmxheWVyICogNTApLnN0cmVuZ3RoKDAuNSk7XHJcblxyXG4gICAgdmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxyXG4gICAgICAuZm9yY2UoJ2xpbmsnLCBkMy5mb3JjZUxpbmsoKS5pZChkID0+IGQuaWQpKVxyXG4gICAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtNDAwKSlcclxuICAgICAgLmZvcmNlKFwieFwiLCBmb3JjZVgpXHJcbiAgICAgIC5mb3JjZShcInlcIiwgZm9yY2VZKVxyXG4gICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xyXG5cclxuICAgIHZhciBsaW5rID0gc3ZnLmFwcGVuZCgnZycpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsaW5rcycpXHJcbiAgICAgIC5zZWxlY3RBbGwoJ2xpbmUnKVxyXG4gICAgICAuZGF0YShqc29uLmxpbmtzKVxyXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoJ2xpbmUnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGluaycpXHJcbiAgICAgIC5hdHRyKCdpZCcsIGQgPT4gYCR7ZC5zb3VyY2V9LCR7ZC50YXJnZXR9YCk7XHJcbiAgICAvLy5zdHlsZSgnbWFya2VyLWVuZCcsICd1cmwoI2Fycm93KScpO1xyXG5cclxuXHJcbiAgICB2YXIgbm9kZSA9IHN2Zy5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbm9kZXMnKS5zZWxlY3RBbGwoJ2cubm9kZXMnKVxyXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXHJcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgncGF0aCcpXHJcbiAgICAgIC5hdHRyKCdkJywgZDMuc3ltYm9sKCkudHlwZShkID0+IENhbnZhcy5nZXRTeW1ib2woZC50eXBlKSkuc2l6ZShkID0+IGQuc2l6ZSAqIDkwKSlcclxuICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwwKScpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsIGQgPT4gJ25vZGUnICsgKGQuaGlnaGxpZ2h0ID8gJyBoaWdobGlnaHQnIDogJycpKVxyXG4gICAgICAuYXR0cignaWQnLCBkID0+IGQuaWQpXHJcbiAgICAgIC5jYWxsKGQzLmRyYWcoKVxyXG4gICAgICAgIC5vbignc3RhcnQnLCBkcmFnc3RhcnRlZClcclxuICAgICAgICAub24oJ2RyYWcnLCBkcmFnZ2VkKVxyXG4gICAgICAgIC5vbignZW5kJywgZHJhZ2VuZGVkKSlcclxuICAgICAgLy8ub24oJ2NvbnRleHRtZW51JywgY29ubmVjdGVkTm9kZXMpIC8vcmlnaHRjbGlja1xyXG4gICAgICAub24oJ2NsaWNrJywgY29ubmVjdGVkTm9kZXMpO1xyXG5cclxuICAgIG5vZGUuYXBwZW5kKCd0aXRsZScpLnRleHQoZnVuY3Rpb24gKGQpIHtcclxuICAgICAgcmV0dXJuIGBJRDpcXHQke2QuaWR9XFxuTGF5ZXI6XFx0JHtkLmxheWVyfWA7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbGFiZWwgPSBzdmcuYXBwZW5kKCdnJylcclxuICAgICAgLmF0dHIoJ2NsYXNzJywgJ2xhYmVscycpXHJcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxyXG4gICAgICAuZGF0YShqc29uLm5vZGVzLCBkID0+IGQuaWQpXHJcbiAgICAgIC5lbnRlcigpLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdjbGFzcycsICdsYWJlbCcpXHJcbiAgICAgIC50ZXh0KGQgPT4gZC50aXRsZSk7XHJcblxyXG4gICAgdmFyIGxlZ2VuZCA9IHRoaXMuY2FudmFzXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignY2xhc3MnLCAnbGVnZW5kJylcclxuICAgICAgLnNlbGVjdEFsbCgnZycpXHJcbiAgICAgIC5kYXRhKGQzLm1hcChqc29uLm5vZGVzLCBkID0+IGQubGF5ZXIpLnZhbHVlcygpLCBkID0+IGQuaWQpXHJcbiAgICAgIC5lbnRlcigpXHJcbiAgICAgIC5hcHBlbmQoJ2cnKVxyXG4gICAgICAuYXR0cignaWQnLCBkID0+IGBsZWdlbmRMYXllciR7ZC5sYXllcn1gKVxyXG4gICAgICAuYXR0cigndHJhbnNmb3JtJywgZnVuY3Rpb24gKGQsIGkpIHtcclxuICAgICAgICBsZXQgeCA9IDA7XHJcbiAgICAgICAgbGV0IHkgPSBpICogMTE7XHJcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHt4fSwke3l9KWA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxlZ2VuZC5hcHBlbmQoJ3JlY3QnKVxyXG4gICAgICAuYXR0cignd2lkdGgnLCAxMClcclxuICAgICAgLmF0dHIoJ2hlaWdodCcsIDgpXHJcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gQ2FudmFzLmNvbG9ycyhkLmxheWVyICogNikpXHJcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSk7XHJcblxyXG4gICAgbGVnZW5kLmFwcGVuZCgndGV4dCcpXHJcbiAgICAgIC5hdHRyKCdzdHlsZScsICdmb250LXNpemU6IDEwcHg7JylcclxuICAgICAgLmF0dHIoJ3gnLCAxMCArIDUpXHJcbiAgICAgIC5hdHRyKCd5JywgMTAgLSAyKVxyXG4gICAgICAudGV4dChkID0+IGBJbmRleCAke2QubGF5ZXJ9YCk7XHJcblxyXG4gICAgc2ltdWxhdGlvbi5ub2Rlcyhqc29uLm5vZGVzKS5vbigndGljaycsIHRpY2tlZCk7XHJcblxyXG4gICAgc2ltdWxhdGlvbi5mb3JjZSgnbGluaycpLmxpbmtzKGpzb24ubGlua3MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcclxuICAgICAgbGlua1xyXG4gICAgICAgIC5hdHRyKCd4MScsIGQgPT4gZC5zb3VyY2UueClcclxuICAgICAgICAuYXR0cigneTEnLCBkID0+IGQuc291cmNlLnkpXHJcbiAgICAgICAgLmF0dHIoJ3gyJywgZCA9PiBkLnRhcmdldC54KVxyXG4gICAgICAgIC5hdHRyKCd5MicsIGQgPT4gZC50YXJnZXQueSk7XHJcblxyXG4gICAgICBub2RlXHJcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiBDYW52YXMuY29sb3JzKGQubGF5ZXIgKiA2KSlcclxuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XHJcblxyXG4gICAgICBsYWJlbFxyXG4gICAgICAgIC5hdHRyKCd4JywgZCA9PiBkLnggLSBkLnRpdGxlLmxlbmd0aCAqIDIgLSBNYXRoLnNxcnQoZC5zaXplKSlcclxuICAgICAgICAuYXR0cigneScsIGQgPT4gZC55IC0gTWF0aC5zcXJ0KGQuc2l6ZSkpO1xyXG5cclxuICAgICAgbm9kZS5lYWNoKGNvbGxpZGUoMC41KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ09MTElTSU9OXHJcbiAgICB2YXIgcGFkZGluZyA9IDEsIC8vIHNlcGFyYXRpb24gYmV0d2VlbiBjaXJjbGVzXHJcbiAgICAgIHJhZGl1cyA9IDIwO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbGxpZGUoYWxwaGEpIHtcclxuICAgICAgbGV0IHF1YWRUcmVlID0gZDMucXVhZHRyZWUoanNvbi5ub2Rlcyk7XHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIGxldCByYiA9IDIgKiByYWRpdXMgKyBwYWRkaW5nLFxyXG4gICAgICAgICAgbngxID0gZC54IC0gcmIsXHJcbiAgICAgICAgICBueDIgPSBkLnggKyByYixcclxuICAgICAgICAgIG55MSA9IGQueSAtIHJiLFxyXG4gICAgICAgICAgbnkyID0gZC55ICsgcmI7XHJcbiAgICAgICAgcXVhZFRyZWUudmlzaXQoZnVuY3Rpb24gKHF1YWQsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgICBpZiAocXVhZC5wb2ludCAmJiAocXVhZC5wb2ludCAhPT0gZCkpIHtcclxuICAgICAgICAgICAgbGV0IHggPSBkLnggLSBxdWFkLnBvaW50LngsXHJcbiAgICAgICAgICAgICAgeSA9IGQueSAtIHF1YWQucG9pbnQueSxcclxuICAgICAgICAgICAgICBsID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgICAgICAgICBpZiAobCA8IHJiKSB7XHJcbiAgICAgICAgICAgICAgbCA9IChsIC0gcmIpIC8gbCAqIGFscGhhO1xyXG4gICAgICAgICAgICAgIGQueCAtPSB4ICo9IGw7XHJcbiAgICAgICAgICAgICAgZC55IC09IHkgKj0gbDtcclxuICAgICAgICAgICAgICBxdWFkLnBvaW50LnggKz0geDtcclxuICAgICAgICAgICAgICBxdWFkLnBvaW50LnkgKz0geTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHgxID4gbngyIHx8IHgyIDwgbngxIHx8IHkxID4gbnkyIHx8IHkyIDwgbnkxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhJR0hMSUdIVFxyXG4gICAgLy9Ub2dnbGUgc3RvcmVzIHdoZXRoZXIgdGhlIGhpZ2hsaWdodGluZyBpcyBvblxyXG4gICAgdmFyIHRvZ2dsZSA9IDA7XHJcbiAgICAvL0NyZWF0ZSBhbiBhcnJheSBsb2dnaW5nIHdoYXQgaXMgY29ubmVjdGVkIHRvIHdoYXRcclxuICAgIHZhciBsaW5rZWRCeUluZGV4ID0ge307XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqc29uLm5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxpbmtlZEJ5SW5kZXhbYCR7aX0sJHtpfWBdID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBqc29uLmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgbGlua2VkQnlJbmRleFtgJHtkLnNvdXJjZS5pbmRleH0sJHtkLnRhcmdldC5pbmRleH1gXSA9IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1RoaXMgZnVuY3Rpb24gbG9va3MgdXAgd2hldGhlciBhIHBhaXIgYXJlIG5laWdoYm91cnNcclxuICAgIGZ1bmN0aW9uIG5laWdoYm9yaW5nKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGxpbmtlZEJ5SW5kZXhbYCR7YS5pbmRleH0sJHtiLmluZGV4fWBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbm5lY3RlZE5vZGVzKCkge1xyXG4gICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodG9nZ2xlID09PSAwKSB7XHJcbiAgICAgICAgLy9SZWR1Y2UgdGhlIG9wYWNpdHkgb2YgYWxsIGJ1dCB0aGUgbmVpZ2hib3VyaW5nIG5vZGVzXHJcbiAgICAgICAgbGV0IGQgPSBkMy5zZWxlY3QodGhpcykubm9kZSgpLl9fZGF0YV9fO1xyXG4gICAgICAgIG5vZGUuc3R5bGUoJ29wYWNpdHknLCBvID0+IG5laWdoYm9yaW5nKGQsIG8pIHx8IG5laWdoYm9yaW5nKG8sIGQpID8gMSA6IDAuMSk7XHJcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIG8gPT4gZC5pbmRleCA9PT0gby5zb3VyY2UuaW5kZXggfHwgZC5pbmRleCA9PT0gby50YXJnZXQuaW5kZXggPyAxIDogMC4xKTtcclxuICAgICAgICAvL1JlZHVjZSB0aGUgb3BcclxuICAgICAgICB0b2dnbGUgPSAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vUHV0IHRoZW0gYmFjayB0byBvcGFjaXR5PTFcclxuICAgICAgICBub2RlLnN0eWxlKCdvcGFjaXR5JywgMSk7XHJcbiAgICAgICAgbGluay5zdHlsZSgnb3BhY2l0eScsIDEpO1xyXG4gICAgICAgIHRvZ2dsZSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XHJcbiAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xyXG4gICAgICBkLmZ4ID0gZC54O1xyXG4gICAgICBkLmZ5ID0gZC55O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xyXG4gICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcclxuICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcclxuICAgICAgaWYgKCFkMy5ldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMCk7XHJcbiAgICAgIGQuZnggPSBudWxsO1xyXG4gICAgICBkLmZ5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGFuZGxlci9kcmF3LmpzIiwiaW1wb3J0IElEVXRpbHMgZnJvbSAnLi4vdXRpbC9pZC11dGlscyc7XHJcbmltcG9ydCBNZW51VXRpbHMgZnJvbSAnLi4vdXRpbC9tZW51LXV0aWxzJztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuLi91dGlsL2xvZ2dlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYnN0cmFjdENhbnZhcyB7XHJcblxyXG4gIHN0YXRpYyBnZXQgY29sb3JzKCkge1xyXG4gICAgcmV0dXJuIGQzLnNjYWxlU2VxdWVudGlhbCgpLmRvbWFpbihbMCwgMTAwXSkuaW50ZXJwb2xhdG9yKGQzLmludGVycG9sYXRlUmFpbmJvdyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0U3ltYm9sKHR5cGUpIHtcclxuICAgIGlmICh0eXBlID09PSAnY2lyY2xlJykge1xyXG4gICAgICByZXR1cm4gZDMuc3ltYm9sQ2lyY2xlO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY3Jvc3MnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xDcm9zcztcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RpYW1vbmQnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xEaWFtb25kO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc3F1YXJlJykge1xyXG4gICAgICByZXR1cm4gZDMuc3ltYm9sU3F1YXJlO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAndHJpYW5nbGUnKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xUcmlhbmdsZTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXInKSB7XHJcbiAgICAgIHJldHVybiBkMy5zeW1ib2xTdGFyO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnd3llJykge1xyXG4gICAgICByZXR1cm4gZDMuc3ltYm9sV3llO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGQzLnN5bWJvbENpcmNsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcclxuICAgIHRoaXMubG9nZ2VyID0gbmV3IExvZ2dlcih7dmVyYm9zZTogdmVyYm9zZX0pO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlckNhbnZhcyhqc29uKSB7XHJcbiAgICBpZiAoIWpzb24pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OIG9iamVjdCB0byByZW5kZXIgaXMgZW1wdHkhJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAvLyBidWlsZCB0aGUgZGlhbG9nIHdpbmRvd1xyXG4gICAgc2VsZi53aW5kb3dJZCA9IElEVXRpbHMuZ2V0V2luZG93SWQoanNvbi5jYW52YXMuaWQpO1xyXG4gICAgc2VsZi53aW5kb3cgPSBkMy5zZWxlY3QoYCMke3NlbGYud2luZG93SWR9YCk7XHJcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxyXG4gICAgaWYgKCFzZWxmLndpbmRvdy5ub2RlKCkpIHtcclxuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIFdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcclxuICAgICAgJCgnPGRpdj4nLCB7XHJcbiAgICAgICAgaWQ6IHNlbGYud2luZG93SWQsXHJcbiAgICAgICAgdGl0bGU6IGpzb24uY2FudmFzLnRpdGxlLFxyXG4gICAgICAgIHdpZHRoOiBqc29uLmNhbnZhcy53LFxyXG4gICAgICAgIGhlaWdodDoganNvbi5jYW52YXMuaFxyXG4gICAgICB9KS5hcHBlbmRUbygnYm9keScpO1xyXG4gICAgICAvLyB1cGRhdGUgZWxlbWVudFxyXG4gICAgICBzZWxmLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7c2VsZi53aW5kb3dJZH1gKTtcclxuICAgIH1cclxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiB3aW5kb3cgaXMgbm90IHByZXNlbnRcclxuICAgIGlmICghc2VsZi53aW5kb3cubm9kZSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3NlbGYud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xyXG4gICAgfVxyXG4gICAgLy8gdGhpcyB3aWxsIGZvcmNlIHRoZSBkaWFsb2cgdG8gb3BlblxyXG4gICAgJChgIyR7c2VsZi53aW5kb3dJZH1gKS5kaWFsb2coe1xyXG4gICAgICBjbG9zZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xyXG4gICAgICAgIHNlbGYubG9nZ2VyLmRlYnVnKGBDbG9zaW5nIHdpbmRvdyBbJHtzZWxmLndpbmRvd0lkfV0uLi5gKTtcclxuICAgICAgICByZXR1cm4gJCh0aGlzKS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZWxmLmxvZ2dlci5kZWJ1ZyhgQ3JlYXRpbmcgV2luZG93IE1lbnVzIFske3NlbGYud2luZG93SWR9XS4uLmApO1xyXG4gICAgLy8gYnVpbGQgbWVudVxyXG4gICAgJChNZW51VXRpbHMuZ2V0TWVudUh0bWwoanNvbikpLmFwcGVuZFRvKGAjJHtzZWxmLndpbmRvd0lkfWApO1xyXG4gICAgJCgnPGJyLz4nKS5hcHBlbmRUbyhgIyR7c2VsZi53aW5kb3dJZH1gKTtcclxuXHJcbiAgICAvLyBidWlsZCBjYW52YXNcclxuICAgIHNlbGYuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKGpzb24uY2FudmFzLmlkKTtcclxuICAgIHNlbGYuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHtzZWxmLmNhbnZhc0lkfWApO1xyXG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcclxuICAgICAgc2VsZi5sb2dnZXIuZGVidWcoYENyZWF0aW5nIENhbnZhcyBbJHtzZWxmLmNhbnZhc0lkfV0uLi5gKTtcclxuICAgICAgc2VsZi5jYW52YXMgPSBkMy5zZWxlY3QoYGRpdiMke3NlbGYud2luZG93SWR9YCkuYXBwZW5kKCdzdmcnKVxyXG4gICAgICAgIC5hdHRyKCdpZCcsIHNlbGYuY2FudmFzSWQpO1xyXG4gICAgfVxyXG4gICAgLy8gY2Fubm90IGNvbnRpbnVlIGlmIGNhbnZhcyBpcyBub3QgcHJlc2VudFxyXG4gICAgaWYgKCFzZWxmLmNhbnZhcy5ub2RlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7c2VsZi5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgaWYgbmVlZGVkXHJcbiAgICBzZWxmLmNhbnZhc1xyXG4gICAgICAuYXR0cignd2lkdGgnLCBqc29uLmNhbnZhcy53KVxyXG4gICAgICAuYXR0cignaGVpZ2h0JywganNvbi5jYW52YXMuaClcclxuICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hhbmRsZXIvY2FudmFzLmpzIiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgZ2VuZXJhdGVzIGlkcyBmb3IgdGhlIGh0bWwvc3ZnIGVsZW1lbnRzIGluIHRoZSBkb20uXHJcbiAqIFRoZSBpZHMgbmFtaW5nIGNvbnZlbnRpb24gaXM6ICdmcmFuY3lbV2luZG93fENhbnZhc3xPYmplY3RdKm51bWVyaWNhbCBpZConXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRFV0aWxzIHtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGEgd2luZG93IGJhc2VkIG9uIGEgY2FudmFzIGlkLlxyXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXHJcbiAgICovXHJcbiAgc3RhdGljIGdldFdpbmRvd0lkKGNhbnZhc0lkKSB7XHJcbiAgICByZXR1cm4gYGZyYW5jeVdpbmRvdyR7Y2FudmFzSWR9YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIGNhbnZhcyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cclxuICAgKiBAcGFyYW0gY2FudmFzSWQgLSB0aGUgY2FudmFzIGlkXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRDYW52YXNJZChjYW52YXNJZCkge1xyXG4gICAgcmV0dXJuIGBmcmFuY3lDYW52YXMke2NhbnZhc0lkfWA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxyXG4gICAqIEBwYXJhbSBvYmplY3RJZCAtIHRoZSBvYmplY3QgaWRcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXHJcbiAgICovXHJcbiAgc3RhdGljIGdldE9iamVjdElkKG9iamVjdElkKSB7XHJcbiAgICByZXR1cm4gYGZyYW5jeU9iamVjdCR7b2JqZWN0SWR9YDtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvaWQtdXRpbHMuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51VXRpbHMge1xyXG5cclxuICAvLyBUT0RPIGhhbmRsZSBhY3Rpb25zXHJcbiAgc3RhdGljIGdldE1lbnVIdG1sKGRhdGEpIHtcclxuICAgIGxldCBodG1sID0gJzxkaXYgY2xhc3M9XCJtZW51XCI+JztcclxuICAgIGh0bWwgKz0gTWVudVV0aWxzLl9idWlsZERlZmF1bHRNZW51KCk7XHJcbiAgICBmb3IgKGxldCBtZW51IG9mIGRhdGEubWVudXMpIHtcclxuICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImRyb3Bkb3duXCI+JztcclxuICAgICAgaWYgKG1lbnUubWVudXMgJiYgbWVudS5tZW51cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaHRtbCArPSBgPGJ1dHRvbiBjbGFzcz1cImRyb3Bkb3duLWJ1dHRvblwiPiR7bWVudS50aXRsZX0mbmJzcDsmIzg1OTU7PC9idXR0b24+PGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5gO1xyXG4gICAgICAgIGZvciAobGV0IHN1Ym1lbnUgb2YgbWVudS5tZW51cykge1xyXG4gICAgICAgICAgaHRtbCArPSBgPGEgaHJlZj1cIiNcIj4ke3N1Ym1lbnUudGl0bGV9PC9hPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgKz0gJzwvZGl2PidcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBodG1sICs9IGA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd24tYnV0dG9uXCI+JHttZW51LnRpdGxlfTwvYnV0dG9uPmA7XHJcbiAgICAgIH1cclxuICAgICAgaHRtbCArPSAnPC9kaXY+J1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2J1aWxkRGVmYXVsdE1lbnUoKSB7XHJcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJkcm9wZG93blwiPjxidXR0b24gY2xhc3M9XCJkcm9wZG93bi1idXR0b25cIj5GaWxlJm5ic3A7JiM4NTk1OzwvYnV0dG9uPjxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+PGEgaHJlZj1cIiNcIj5TYXZlIFBORzwvYT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjxhIGhyZWY9XCIjXCI+Q2xvc2U8L2E+PC9kaXY+PC9kaXY+JztcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21lbnUtdXRpbHMuanMiLCIvKipcclxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgaWRzIGZvciB0aGUgaHRtbC9zdmcgZWxlbWVudHMgaW4gdGhlIGRvbS5cclxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcclxuICAgIHRoaXMudmVyYm9zZSA9IHZlcmJvc2U7XHJcbiAgfVxyXG5cclxuICBkZWJ1ZyhtZXNzYWdlKSB7XHJcbiAgICBpZiAodGhpcy52ZXJib3NlKSB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmZvKG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUuaW5mbyhtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGVycm9yKG1lc3NhZ2UsIGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxvdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcclxuXHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oYW5kbGVyL3Bsb3QuanMiXSwic291cmNlUm9vdCI6IiJ9