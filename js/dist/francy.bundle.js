(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tracker = require('./tracker');

var _tracker2 = _interopRequireDefault(_tracker);

var _idUtils = require('./../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class contains the basics for the creation of an SVG object using d3 and modal window using jquery ui.
 * It handles the window and canvas creation.
 */
var AbstractBehavior =
/**
 * This class is abstract an hence cannot be instantiated without being extended and the subclass must implement a {render} method.
 * @param {object} json - the object.
 * @param verbose
 */
function AbstractBehavior(json) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$verbose = _ref.verbose,
      verbose = _ref$verbose === undefined ? false : _ref$verbose;

  _classCallCheck(this, AbstractBehavior);

  this.object = json.object;
};

exports.default = AbstractBehavior;

},{"./../util/id-utils":11,"./tracker":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tracker = require('./tracker');

var _tracker2 = _interopRequireDefault(_tracker);

var _idUtils = require('./../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class contains the basics for the creation of an SVG object using d3 and modal window using jquery ui.
 * It handles the window and canvas creation.
 */
var AbstractRenderer = function () {
  /**
   * This class is abstract an hence cannot be instantiated without being extended and the subclass must implement a {render} method.
   * @param {object} object - the object object.
   * @param verbose
   * @param appendTo
   * @param tag
   */
  function AbstractRenderer(object) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === undefined ? 'body' : _ref$appendTo,
        tag = _ref.tag;

    _classCallCheck(this, AbstractRenderer);

    if (new.target === AbstractRenderer) {
      throw new TypeError('Cannot construct Abstract instances directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      // or maybe test typeof this.method === "function"
      throw new TypeError('Must override \'render\' method!');
    }
    this.tag = tag;
    this.appendTo = appendTo;
    this._tracker = new _tracker2.default(object, { verbose: verbose });
    // initialise the canvas
    this.render_canvas();
    this.objectId = _idUtils2.default.getObjectId(this.tracker.object.id);
    this.groupObjectId = _idUtils2.default.getObjectId(this.tracker.object.id);
    this.groupSelector = '#' + this.groupObjectId;
    this.group = this.canvas.selectAll(this.groupSelector);
    if (!this.group.node()) {
      this.group = this.canvas.selectAll(this.groupSelector).data([this.tracker.object]).enter().append('g');
    }
    this.group.append('text').attr('dx', function (d) {
      return d.properties.x - d.properties.r;
    }).attr('dy', function (d) {
      return d.properties.y;
    }).text(function (d) {
      return d.attributes.name;
    });
    this.selector = this.tag + '#' + this.objectId;
    this.object = this.group.selectAll(this.selector).data([this.tracker.object]).enter().append(this.tag).attr('stroke', 'black').attr('stroke-width', '2');
    // render the object
    this.render();
  }

  /**
   * This method handles the canvas creation if needed.
   */


  _createClass(AbstractRenderer, [{
    key: 'render_canvas',
    value: function render_canvas() {
      // build the dialog window
      this.windowId = _idUtils2.default.getWindowId(this.tracker.object.canvas.id);
      this.window = d3.select('#' + this.windowId);
      // check if the window is already present
      if (!this.window.node()) {
        $('<div>', {
          id: this.windowId,
          title: this.tracker.object.canvas.attributes.name,
          width: this.tracker.object.canvas.width,
          height: this.tracker.object.canvas.height
        }).appendTo(this.appendTo);
        // update element
        this.window = d3.select('#' + this.windowId);
      }
      // cannot continue if window is not present
      if (!this.window.node()) {
        throw new Error('Oops, could not create window with id ' + this.windowId + '... Cannot proceed.');
      }
      // this will force the dialog to open
      $('#' + this.windowId).dialog();
      // build canvas
      this.canvasId = _idUtils2.default.getCanvasId(this.tracker.object.canvas.id);
      this.canvas = d3.select('svg#' + this.canvasId);
      if (!this.canvas.node()) {
        this.canvas = d3.select('div#' + this.windowId).append('svg').attr('id', this.canvasId);
      }
      // cannot continue if canvas is not present
      if (!this.canvas.node()) {
        throw new Error('Oops, could not create canvas with id ' + this.canvasId + '... Cannot proceed.');
      }
      // update if needed
      this.canvas.attr('width', this.tracker.object.canvas.properties.width).attr('height', this.tracker.object.canvas.properties.height);
    }

    /**
     * Returns the ModelTracker
     * @returns {Tracker} the object tracker.
     */

  }, {
    key: 'tracker',
    get: function get() {
      return this._tracker;
    }
  }]);

  return AbstractRenderer;
}();

exports.default = AbstractRenderer;

},{"./../util/id-utils":11,"./tracker":3}],3:[function(require,module,exports){
'use strict';

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
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

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
    }, 1000);
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
      if (receiver[property] !== value) {
        if (this.verbose) {
          console.debug('Object ID ' + this.object.id + ' property ' + property + ' changed from ' + receiver[property] + ' to ' + value + '.');
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _drag = require('./drag');

var _drag2 = _interopRequireDefault(_drag);

var _link = require('./link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractBehaviorFactory = function () {
  function AbstractBehaviorFactory() {
    _classCallCheck(this, AbstractBehaviorFactory);

    if (new.target === AbstractBehaviorFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  _createClass(AbstractBehaviorFactory, null, [{
    key: 'build',
    value: function build(json) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$verbose = _ref.verbose,
          verbose = _ref$verbose === undefined ? false : _ref$verbose;

      var object = undefined;
      switch (json.object.type) {
        case 'drag':
          object = new _drag2.default(json, { verbose: verbose });
          break;
        case 'link':
          object = new _link2.default(json, { verbose: verbose });
          break;
        default:
          throw new TypeError('Oops, couldn\'t create the behavior for the specified type... Cannot proceed.');
          break;
      }
      switch (json.action) {
        case 'remove':
          object.remove();
          break;
        default:
          object.apply();
          break;
      }
      return object;
    }
  }]);

  return AbstractBehaviorFactory;
}();

exports.default = AbstractBehaviorFactory;

},{"./drag":5,"./link":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractBehavior = require('./../../base/abstract-behavior');

var _abstractBehavior2 = _interopRequireDefault(_abstractBehavior);

var _idUtils = require('./../../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drag = function (_AbstractBehavior) {
  _inherits(Drag, _AbstractBehavior);

  function Drag(json) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Drag);

    var _this = _possibleConstructorReturn(this, (Drag.__proto__ || Object.getPrototypeOf(Drag)).call(this, json, { verbose: verbose }));

    _this.objectId = _idUtils2.default.getObjectId(_this.object.object.id);
    _this.canvasId = _idUtils2.default.getCanvasId(_this.object.object.canvas.id);
    _this.canvas = d3.select('svg#' + _this.canvasId);
    return _this;
  }

  _createClass(Drag, [{
    key: 'apply',
    value: function apply() {
      function onDrag() {
        var object = this.canvas.select('#' + this.objectId);
        var self = this;
        var x = d3.event.x;
        var y = d3.event.y;
        object.attr('cx', x).attr('cy', y).attr('x', x).attr('y', y);
        // explicitly update the object for the component
        object.data()[0].properties.x = x;
        object.data()[0].properties.cx = x;
        object.data()[0].properties.y = y;
        object.data()[0].properties.cy = y;
        // update connections between component if any
        this.canvas.selectAll('.link').each(function (d) {
          if (d.source.id === self.object.object.id) {
            var deltaX = d.target.properties.x - x,
                deltaY = d.target.properties.y - y,
                dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
                normX = deltaX / dist,
                normY = deltaY / dist,
                sourcePadding = d.source.properties.r,
                targetPadding = d.target.properties.r,
                sourceX = x + sourcePadding * normX,
                sourceY = y + sourcePadding * normY,
                targetX = d.target.properties.x - targetPadding * normX,
                targetY = d.target.properties.y - targetPadding * normY;
            d3.select(this).attr('x1', sourceX).attr('y1', sourceY).attr('x2', targetX).attr('y2', targetY);
            d3.select(this).data()[0].source.properties.x = x;
            d3.select(this).data()[0].source.properties.y = y;
          } else if (d.target.id === self.object.object.id) {
            var _deltaX = x - d.source.properties.x,
                _deltaY = y - d.source.properties.y,
                _dist = Math.sqrt(_deltaX * _deltaX + _deltaY * _deltaY),
                _normX = _deltaX / _dist,
                _normY = _deltaY / _dist,
                _sourcePadding = d.source.properties.r,
                _targetPadding = d.target.properties.r,
                _sourceX = d.source.properties.x + _sourcePadding * _normX,
                _sourceY = d.source.properties.y + _sourcePadding * _normY,
                _targetX = x - _targetPadding * _normX,
                _targetY = y - _targetPadding * _normY;
            d3.select(this).attr('x1', _sourceX).attr('y1', _sourceY).attr('x2', _targetX).attr('y2', _targetY);
            d3.select(this).data()[0].target.properties.x = x;
            d3.select(this).data()[0].target.properties.y = y;
          }
        });
      }

      return this.canvas.selectAll('#' + this.objectId).style('cursor', 'pointer').call(d3.drag().on('drag', onDrag.bind(this)));
    }
  }, {
    key: 'remove',
    value: function remove() {
      return this.canvas.selectAll('#' + this.objectId).style('cursor', '').on('mousedown.drag', null);
    }
  }]);

  return Drag;
}(_abstractBehavior2.default);

exports.default = Drag;

},{"./../../base/abstract-behavior":1,"./../../util/id-utils":11}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractBehavior = require('./../../base/abstract-behavior');

var _abstractBehavior2 = _interopRequireDefault(_abstractBehavior);

var _idUtils = require('./../../util/id-utils');

var _idUtils2 = _interopRequireDefault(_idUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_AbstractBehavior) {
  _inherits(Link, _AbstractBehavior);

  function Link(json) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, json, { verbose: verbose }));

    _this.objectId = _idUtils2.default.getObjectId(_this.object.id);
    _this.canvasId = _idUtils2.default.getCanvasId(_this.object.object1.canvas.id);
    _this.canvas = d3.select('svg#' + _this.canvasId);
    // define arrow markers for graph links
    _this.canvas.append('svg:defs').append('svg:marker').attr('id', 'end-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 6).attr('markerWidth', 3).attr('markerHeight', 3).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#000').append('svg:defs').append('svg:marker').attr('id', 'start-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 4).attr('markerWidth', 3).attr('markerHeight', 3).attr('orient', 'auto').append('svg:path').attr('d', 'M10,-5L0,0L10,5').attr('fill', '#000');
    return _this;
  }

  _createClass(Link, [{
    key: 'apply',
    value: function apply() {
      return this.canvas.selectAll('line#' + this.objectId).data([{ 'source': this.object.object1, 'target': this.object.object2 }]).enter().append('line').attr('class', 'link').style('marker-start', '').style('marker-end', 'url(#end-arrow)').each(function (d) {
        var deltaX = d.target.properties.x - d.source.properties.x,
            deltaY = d.target.properties.y - d.source.properties.y,
            dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            normX = deltaX / dist,
            normY = deltaY / dist,
            sourcePadding = d.source.properties.r,
            targetPadding = d.target.properties.r,
            sourceX = d.source.properties.x + sourcePadding * normX,
            sourceY = d.source.properties.y + sourcePadding * normY,
            targetX = d.target.properties.x - targetPadding * normX,
            targetY = d.target.properties.y - targetPadding * normY;
        d3.select(this).attr('x1', sourceX).attr('y1', sourceY).attr('x2', targetX).attr('y2', targetY);
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      return this.canvas.selectAll('line#' + this.objectId).style('stroke', 'none').style('fill', 'none').data([{ 'source': this.object.object1, 'target': this.object.object2 }]).removeAll();
    }
  }]);

  return Link;
}(_abstractBehavior2.default);

exports.default = Link;

},{"./../../base/abstract-behavior":1,"./../../util/id-utils":11}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _circle = require('./circle');

var _circle2 = _interopRequireDefault(_circle);

var _rect = require('./rect');

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractShapeFactory = function () {
  function AbstractShapeFactory() {
    _classCallCheck(this, AbstractShapeFactory);

    if (new.target === AbstractShapeFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  _createClass(AbstractShapeFactory, null, [{
    key: 'build',
    value: function build(json) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$verbose = _ref.verbose,
          verbose = _ref$verbose === undefined ? false : _ref$verbose;

      var object = undefined;
      switch (json.object.type) {
        case 'circle':
          object = new _circle2.default(json.object, { verbose: verbose });
          break;
        case 'rect':
          object = new _rect2.default(json.object, { verbose: verbose });
          break;
        default:
          throw new TypeError('Oops, couldn\'t create an object for the specified type... Cannot proceed.');
          break;
      }
      return object;
    }
  }]);

  return AbstractShapeFactory;
}();

exports.default = AbstractShapeFactory;

},{"./circle":8,"./rect":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractRenderer = require('./../../base/abstract-renderer');

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_AbstractRenderer) {
  _inherits(Circle, _AbstractRenderer);

  function Circle(object) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, object, { verbose: verbose, tag: object.type }));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      // add attributes to object
      this.object.attr('id', this.objectId).attr('cx', function (d) {
        return d.properties.x;
      }).attr('cy', function (d) {
        return d.properties.y;
      }).attr('r', function (d) {
        return d.properties.r;
      }).style('fill', function (d) {
        return d.attributes.color;
      });
    }
  }]);

  return Circle;
}(_abstractRenderer2.default);

exports.default = Circle;

},{"./../../base/abstract-renderer":2}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _abstractRenderer = require('./../../base/abstract-renderer');

var _abstractRenderer2 = _interopRequireDefault(_abstractRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = function (_AbstractRenderer) {
  _inherits(Rectangle, _AbstractRenderer);

  function Rectangle(object) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, object, { verbose: verbose, tag: object.type }));
  }

  _createClass(Rectangle, [{
    key: 'render',
    value: function render() {
      // add attributes to object
      this.object.attr('id', this.objectId).attr('x', function (d) {
        return d.properties.x;
      }).attr('y', function (d) {
        return d.properties.y;
      }).attr('width', function (d) {
        return d.properties.width;
      }).attr('height', function (d) {
        return d.properties.height;
      }).style("fill", function (d) {
        return d.attributes.color;
      });
    }
  }]);

  return Rectangle;
}(_abstractRenderer2.default);

exports.default = Rectangle;

},{"./../../base/abstract-renderer":2}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Francy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsonUtils = require('./util/json-utils.js');

var _jsonUtils2 = _interopRequireDefault(_jsonUtils);

var _abstractFactory = require('./draw/shape/abstract-factory');

var _abstractFactory2 = _interopRequireDefault(_abstractFactory);

var _abstractFactory3 = require('./draw/behavior/abstract-factory');

var _abstractFactory4 = _interopRequireDefault(_abstractFactory3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
var Francy = exports.Francy = function () {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose
   * @param appendTo
   */
  function Francy() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose,
        _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === undefined ? 'body' : _ref$appendTo;

    _classCallCheck(this, Francy);

    this.options = {
      verbose: verbose,
      appendTo: appendTo
    };
    this.nodes = new Set();
  }

  _createClass(Francy, [{
    key: 'test',
    value: function test(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        var ticked = function ticked() {
          node.attr('cx', function (d) {
            return d.properties.x;
          });
          node.attr('cy', function (d) {
            return d.properties.y;
          });
        };

        var dragstarted = function dragstarted(d) {
          if (!d3.event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.properties.x;
          d.fy = d.properties.y;
        };

        var dragged = function dragged(d) {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        };

        var dragended = function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        };

        console.info('Francy will handle the following object: ', json);

        this.nodes.add(json.object);

        var simulation = d3.forceSimulation()
        //.force("collide", d3.forceCollide(d => d.properties.r + 8).iterations(16))
        .force("center", d3.forceCenter(100, 100)).force("charge", d3.forceManyBody()).force("x", d3.forceX(0.02)).force("y", d3.forceY(0.02));

        var node = d3.select('svg').append('g').selectAll('circle').data(Array.from(this.nodes)).enter().append('circle').attr('r', function (d) {
          return d.properties.r;
        }).call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));

        simulation.nodes(Array.from(this.nodes)).on("tick", ticked).force('node');
      }
    }

    /**
     * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
     * @param input - a json string/object to get drawn
     */

  }, {
    key: 'handle',
    value: function handle(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        console.info('Francy will handle the following object: ', json);
        var object = void 0;
        switch (json.type) {
          case 'shape':
            object = _abstractFactory2.default.build(json, this.options);
            break;
          case 'behavior':
            object = _abstractFactory4.default.build(json, this.options);
            break;
          case 'structure':
            throw new Error('No implemented!');
            break;
          default:
            throw new Error('No implemented!');
            break;
        }
        return object;
      }
    }
  }, {
    key: 'plot',
    value: function plot(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        console.info('Francy will handle the following object: ', json);
        var object = void 0;
        switch (json.type) {
          case 'shape':
            object = _abstractFactory2.default.build(json, this.options);
            break;
          case 'behavior':
            object = _abstractFactory4.default.build(json, this.options);
            break;
          case 'structure':
            throw new Error('No implemented!');
            break;
          default:
            throw new Error('No implemented!');
            break;
        }
        return object;
      }
    }
  }, {
    key: 'draw',
    value: function draw(input) {
      var json = _jsonUtils2.default.parse(input);
      if (json) {
        console.info('Francy will handle the following object: ', json);
        var object = void 0;
        switch (json.type) {
          case 'shape':
            object = _abstractFactory2.default.build(json, this.options);
            break;
          case 'behavior':
            object = _abstractFactory4.default.build(json, this.options);
            break;
          case 'structure':
            throw new Error('No implemented!');
            break;
          default:
            throw new Error('No implemented!');
            break;
        }
        return object;
      }
    }
  }]);

  return Francy;
}();

exports.Francy = Francy;

window.Francy = Francy;

},{"./draw/behavior/abstract-factory":4,"./draw/shape/abstract-factory":7,"./util/json-utils.js":12}],11:[function(require,module,exports){
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

    /**
     * Returns the id for an object based on a object id.
     * @param objectId - the object id
     * @returns {string} the element object id.
     */

  }, {
    key: "getGroupObjectId",
    value: function getGroupObjectId(objectId) {
      return "francyGroupObject" + objectId;
    }
  }]);

  return IDUtils;
}();

exports.default = IDUtils;

},{}],12:[function(require,module,exports){
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
          return json.agent === 'francy' ? json : undefined;
        } catch (e) {
          // noop
        }
      }
      return undefined;
    }
  }]);

  return JsonUtils;
}();

exports.default = JsonUtils;

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFzZS9hYnN0cmFjdC1iZWhhdmlvci5qcyIsInNyYy9iYXNlL2Fic3RyYWN0LXJlbmRlcmVyLmpzIiwic3JjL2Jhc2UvdHJhY2tlci5qcyIsInNyYy9kcmF3L2JlaGF2aW9yL2Fic3RyYWN0LWZhY3RvcnkuanMiLCJzcmMvZHJhdy9iZWhhdmlvci9kcmFnLmpzIiwic3JjL2RyYXcvYmVoYXZpb3IvbGluay5qcyIsInNyYy9kcmF3L3NoYXBlL2Fic3RyYWN0LWZhY3RvcnkuanMiLCJzcmMvZHJhdy9zaGFwZS9jaXJjbGUuanMiLCJzcmMvZHJhdy9zaGFwZS9yZWN0LmpzIiwic3JjL2ZyYW5jeS5qcyIsInNyYy91dGlsL2lkLXV0aWxzLmpzIiwic3JjL3V0aWwvanNvbi11dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7SUFJcUIsZ0I7QUFDbkI7Ozs7O0FBS0EsMEJBQVksSUFBWixFQUEwQztBQUFBLGlGQUFKLEVBQUk7QUFBQSwwQkFBdkIsT0FBdUI7QUFBQSxNQUF2QixPQUF1QixnQ0FBYixLQUFhOztBQUFBOztBQUN4QyxPQUFLLE1BQUwsR0FBYyxLQUFLLE1BQW5CO0FBQ0QsQzs7a0JBUmtCLGdCOzs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBSXFCLGdCO0FBQ25COzs7Ozs7O0FBT0EsNEJBQVksTUFBWixFQUFvRTtBQUFBLG1GQUFKLEVBQUk7QUFBQSw0QkFBL0MsT0FBK0M7QUFBQSxRQUEvQyxPQUErQyxnQ0FBckMsS0FBcUM7QUFBQSw2QkFBOUIsUUFBOEI7QUFBQSxRQUE5QixRQUE4QixpQ0FBbkIsTUFBbUI7QUFBQSxRQUFYLEdBQVcsUUFBWCxHQUFXOztBQUFBOztBQUNsRSxRQUFJLElBQUksTUFBSixLQUFlLGdCQUFuQixFQUFxQztBQUNuQyxZQUFNLElB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VixDQUFOO0FBQ0E7QUFaSjtBQWNBLGVBQU8sTUFBUDtBQUNEO0FBQ0Y7Ozs7OztBQUdILFFBQVEsTUFBUixHQUFpQixNQUFqQjs7QUFFQSxPQUFPLE1BQVAsR0FBZ0IsTUFBaEI7Ozs7Ozs7Ozs7Ozs7QUNqSkE7Ozs7SUFJcUIsTzs7Ozs7Ozs7O0FBRW5COzs7OztnQ0FLbUIsUSxFQUFVO0FBQzNCLDhCQUFzQixRQUF0QjtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLbUIsUSxFQUFVO0FBQzNCLDhCQUFzQixRQUF0QjtBQUNEOztBQUVEOzs7Ozs7OztnQ0FLbUIsUSxFQUFVO0FBQzNCLDhCQUFzQixRQUF0QjtBQUNEOztBQUVEOzs7Ozs7OztxQ0FLd0IsUSxFQUFVO0FBQ2hDLG1DQUEyQixRQUEzQjtBQUNEOzs7Ozs7a0JBcENrQixPOzs7Ozs7Ozs7Ozs7O0FDSnJCOzs7SUFHcUIsUzs7Ozs7Ozs7O0FBRW5COzs7OzswQkFLYSxLLEVBQU87QUFDbEIsY0FBUSxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBSyxTQUFMLENBQWUsS0FBZixDQUE1QixHQUFvRCxLQUE1RDtBQUNBLGNBQVEsTUFBTSxPQUFOLENBQWMsdUJBQWQsRUFBdUMsRUFBdkMsQ0FBUjtBQUNBLFVBQUksWUFBWSxhQUFoQjtBQUNBLFVBQUksUUFBUSxVQUFVLElBQVYsQ0FBZSxLQUFmLENBQVo7QUFDQSxVQUFJLEtBQUosRUFBVztBQUNULGdCQUFRLE1BQU0sQ0FBTixDQUFSO0FBQ0EsWUFBSTtBQUNGLGNBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQVg7QUFDQSxpQkFBTyxLQUFLLEtBQUwsS0FBZSxRQUFmLEdBQTBCLElBQTFCLEdBQWlDLFNBQXhDO0FBQ0QsU0FIRCxDQUdFLE9BQU8sQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGO0FBQ0QsYUFBTyxTQUFQO0FBQ0Q7Ozs7OztrQkF0QmtCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE1vZGVsVHJhY2tlciBmcm9tICcuL3RyYWNrZXInO1xuaW1wb3J0IElEVXRpbHMgZnJvbSAnLi8uLi91dGlsL2lkLXV0aWxzJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIHRoZSBiYXNpY3MgZm9yIHRoZSBjcmVhdGlvbiBvZiBhbiBTVkcgb2JqZWN0IHVzaW5nIGQzIGFuZCBtb2RhbCB3aW5kb3cgdXNpbmcganF1ZXJ5IHVpLlxuICogSXQgaGFuZGxlcyB0aGUgd2luZG93IGFuZCBjYW52YXMgY3JlYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0QmVoYXZpb3Ige1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBpcyBhYnN0cmFjdCBhbiBoZW5jZSBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIHdpdGhvdXQgYmVpbmcgZXh0ZW5kZWQgYW5kIHRoZSBzdWJjbGFzcyBtdXN0IGltcGxlbWVudCBhIHtyZW5kZXJ9IG1ldGhvZC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGpzb24gLSB0aGUgb2JqZWN0LlxuICAgKiBAcGFyYW0gdmVyYm9zZVxuICAgKi9cbiAgY29uc3RydWN0b3IoanNvbiwge3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIHRoaXMub2JqZWN0ID0ganNvbi5vYmplY3Q7XG4gIH1cbn0iLCJpbXBvcnQgTW9kZWxUcmFja2VyIGZyb20gJy4vdHJhY2tlcic7XG5pbXBvcnQgSURVdGlscyBmcm9tICcuLy4uL3V0aWwvaWQtdXRpbHMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY29udGFpbnMgdGhlIGJhc2ljcyBmb3IgdGhlIGNyZWF0aW9uIG9mIGFuIFNWRyBvYmplY3QgdXNpbmcgZDMgYW5kIG1vZGFsIHdpbmRvdyB1c2luZyBqcXVlcnkgdWkuXG4gKiBJdCBoYW5kbGVzIHRoZSB3aW5kb3cgYW5kIGNhbnZhcyBjcmVhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZW5kZXJlciB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGlzIGFic3RyYWN0IGFuIGhlbmNlIGNhbm5vdCBiZSBpbnN0YW50aWF0ZWQgd2l0aG91dCBiZWluZyBleHRlbmRlZCBhbmQgdGhlIHN1YmNsYXNzIG11c3QgaW1wbGVtZW50IGEge3JlbmRlcn0gbWV0aG9kLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gdGhlIG9iamVjdCBvYmplY3QuXG4gICAqIEBwYXJhbSB2ZXJib3NlXG4gICAqIEBwYXJhbSBhcHBlbmRUb1xuICAgKiBAcGFyYW0gdGFnXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvYmplY3QsIHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknLCB0YWd9ID0ge30pIHtcbiAgICBpZiAobmV3LnRhcmdldCA9PT0gQWJzdHJhY3RSZW5kZXJlcikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnN0cnVjdCBBYnN0cmFjdCBpbnN0YW5jZXMgZGlyZWN0bHkhJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlbmRlciA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0aGlzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gb3IgbWF5YmUgdGVzdCB0eXBlb2YgdGhpcy5tZXRob2QgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBvdmVycmlkZSBcXCdyZW5kZXJcXCcgbWV0aG9kIScpO1xuICAgIH1cbiAgICB0aGlzLnRhZyA9IHRhZztcbiAgICB0aGlzLmFwcGVuZFRvID0gYXBwZW5kVG87XG4gICAgdGhpcy5fdHJhY2tlciA9IG5ldyBNb2RlbFRyYWNrZXIob2JqZWN0LCB7dmVyYm9zZTogdmVyYm9zZX0pO1xuICAgIC8vIGluaXRpYWxpc2UgdGhlIGNhbnZhc1xuICAgIHRoaXMucmVuZGVyX2NhbnZhcygpO1xuICAgIHRoaXMub2JqZWN0SWQgPSBJRFV0aWxzLmdldE9iamVjdElkKHRoaXMudHJhY2tlci5vYmplY3QuaWQpO1xuICAgIHRoaXMuZ3JvdXBPYmplY3RJZCA9IElEVXRpbHMuZ2V0T2JqZWN0SWQodGhpcy50cmFja2VyLm9iamVjdC5pZCk7XG4gICAgdGhpcy5ncm91cFNlbGVjdG9yID0gYCMke3RoaXMuZ3JvdXBPYmplY3RJZH1gO1xuICAgIHRoaXMuZ3JvdXAgPSB0aGlzLmNhbnZhcy5zZWxlY3RBbGwodGhpcy5ncm91cFNlbGVjdG9yKTtcbiAgICBpZiAoIXRoaXMuZ3JvdXAubm9kZSgpKSB7XG4gICAgICB0aGlzLmdyb3VwID0gdGhpcy5jYW52YXMuc2VsZWN0QWxsKHRoaXMuZ3JvdXBTZWxlY3RvcikuZGF0YShbdGhpcy50cmFja2VyLm9iamVjdF0pLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgnZycpO1xuICAgIH1cbiAgICB0aGlzLmdyb3VwLmFwcGVuZCgndGV4dCcpXG4gICAgICAuYXR0cignZHgnLCBkID0+IGQucHJvcGVydGllcy54IC0gZC5wcm9wZXJ0aWVzLnIpXG4gICAgICAuYXR0cignZHknLCBkID0+IGQucHJvcGVydGllcy55KVxuICAgICAgLnRleHQoZCA9PiBkLmF0dHJpYnV0ZXMubmFtZSk7XG4gICAgdGhpcy5zZWxlY3RvciA9IGAke3RoaXMudGFnfSMke3RoaXMub2JqZWN0SWR9YDtcbiAgICB0aGlzLm9iamVjdCA9IHRoaXMuZ3JvdXAuc2VsZWN0QWxsKHRoaXMuc2VsZWN0b3IpXG4gICAgICAuZGF0YShbdGhpcy50cmFja2VyLm9iamVjdF0pLmVudGVyKClcbiAgICAgIC5hcHBlbmQodGhpcy50YWcpXG4gICAgICAuYXR0cignc3Ryb2tlJywgJ2JsYWNrJylcbiAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAnMicpO1xuICAgIC8vIHJlbmRlciB0aGUgb2JqZWN0XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBoYW5kbGVzIHRoZSBjYW52YXMgY3JlYXRpb24gaWYgbmVlZGVkLlxuICAgKi9cbiAgcmVuZGVyX2NhbnZhcygpIHtcbiAgICAvLyBidWlsZCB0aGUgZGlhbG9nIHdpbmRvd1xuICAgIHRoaXMud2luZG93SWQgPSBJRFV0aWxzLmdldFdpbmRvd0lkKHRoaXMudHJhY2tlci5vYmplY3QuY2FudmFzLmlkKTtcbiAgICB0aGlzLndpbmRvdyA9IGQzLnNlbGVjdChgIyR7dGhpcy53aW5kb3dJZH1gKTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2luZG93IGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmICghdGhpcy53aW5kb3cubm9kZSgpKSB7XG4gICAgICAkKCc8ZGl2PicsIHtcbiAgICAgICAgaWQ6IHRoaXMud2luZG93SWQsXG4gICAgICAgIHRpdGxlOiB0aGlzLnRyYWNrZXIub2JqZWN0LmNhbnZhcy5hdHRyaWJ1dGVzLm5hbWUsXG4gICAgICAgIHdpZHRoOiB0aGlzLnRyYWNrZXIub2JqZWN0LmNhbnZhcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnRyYWNrZXIub2JqZWN0LmNhbnZhcy5oZWlnaHRcbiAgICAgIH0pLmFwcGVuZFRvKHRoaXMuYXBwZW5kVG8pO1xuICAgICAgLy8gdXBkYXRlIGVsZW1lbnRcbiAgICAgIHRoaXMud2luZG93ID0gZDMuc2VsZWN0KGAjJHt0aGlzLndpbmRvd0lkfWApO1xuICAgIH1cbiAgICAvLyBjYW5ub3QgY29udGludWUgaWYgd2luZG93IGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKCF0aGlzLndpbmRvdy5ub2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT29wcywgY291bGQgbm90IGNyZWF0ZSB3aW5kb3cgd2l0aCBpZCAke3RoaXMud2luZG93SWR9Li4uIENhbm5vdCBwcm9jZWVkLmApO1xuICAgIH1cbiAgICAvLyB0aGlzIHdpbGwgZm9yY2UgdGhlIGRpYWxvZyB0byBvcGVuXG4gICAgJChgIyR7dGhpcy53aW5kb3dJZH1gKS5kaWFsb2coKTtcbiAgICAvLyBidWlsZCBjYW52YXNcbiAgICB0aGlzLmNhbnZhc0lkID0gSURVdGlscy5nZXRDYW52YXNJZCh0aGlzLnRyYWNrZXIub2JqZWN0LmNhbnZhcy5pZCk7XG4gICAgdGhpcy5jYW52YXMgPSBkMy5zZWxlY3QoYHN2ZyMke3RoaXMuY2FudmFzSWR9YCk7XG4gICAgaWYgKCF0aGlzLmNhbnZhcy5ub2RlKCkpIHtcbiAgICAgIHRoaXMuY2FudmFzID0gZDMuc2VsZWN0KGBkaXYjJHt0aGlzLndpbmRvd0lkfWApLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ2lkJywgdGhpcy5jYW52YXNJZCk7XG4gICAgfVxuICAgIC8vIGNhbm5vdCBjb250aW51ZSBpZiBjYW52YXMgaXMgbm90IHByZXNlbnRcbiAgICBpZiAoIXRoaXMuY2FudmFzLm5vZGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPb3BzLCBjb3VsZCBub3QgY3JlYXRlIGNhbnZhcyB3aXRoIGlkICR7dGhpcy5jYW52YXNJZH0uLi4gQ2Fubm90IHByb2NlZWQuYCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBpZiBuZWVkZWRcbiAgICB0aGlzLmNhbnZhc1xuICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy50cmFja2VyLm9iamVjdC5jYW52YXMucHJvcGVydGllcy53aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLnRyYWNrZXIub2JqZWN0LmNhbnZhcy5wcm9wZXJ0aWVzLmhlaWdodClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBNb2RlbFRyYWNrZXJcbiAgICogQHJldHVybnMge1RyYWNrZXJ9IHRoZSBvYmplY3QgdHJhY2tlci5cbiAgICovXG4gIGdldCB0cmFja2VyKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFja2VyO1xuICB9XG5cbn0iLCIvKipcbiAqIFRoaXMgY2xhc3MgaG9sZHMgZGVmYXVsdCBtZXRob2RzIHRvIGhhbmRsZSBjaGFuZ2VzIG9uIGEgbW9kZWwgb2JqZWN0LlxuICogSXQgd29ya3MgYnkgdGhlIG1lYW5zIG9mIGEgUHJveHkgdG8gdHJhY2sgY2hhbmdlcyBhbmQgZW5zdXJlcyBzdWJzY3JpYmVyc1xuICogYXJlIG5vdGlmaWVkIG9mIHRoZXNlIGNoYW5nZXMgb24gYSB0aW1lIGJhc2lzICgxIHNlY29uZCBkZWZhdWx0KS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2tlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgaW5zdGFuY2Ugb2YgTW9kZWxUcmFja2VyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0IC0gdGhlIG9iamVjdCBvYmplY3QgdG8ga2VlcCB0cmFjayBvZiBjaGFuZ2VzLlxuICAgKiBAcGFyYW0gdmVyYm9zZVxuICAgKi9cbiAgY29uc3RydWN0b3Iob2JqZWN0LCB7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgdGhpcy52ZXJib3NlID0gdmVyYm9zZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgbGlzdCBvZiBjaGFuZ2Ugc3Vic2NyaWJlcnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHByb3BlcnR5IGhvbGRzIGEgcHJveHkgdGhhdCBoYW5kbGVzIGEgZGlydHkgZmxhZyB3aGVuIG9iamVjdCBjaGFuZ2VzLlxuICAgICAqIEB0eXBlIHtQcm94eX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb3h5ID0gbmV3IFByb3h5KG9iamVjdCwgdGhpcyk7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIGZsYWcgd2hlbiB0aGUgb2JqZWN0IGNoYW5nZXMuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFN5bmMgbGlzdGVuZXJzIGV2ZXJ5IHNlY29uZCwgaWYgZGF0YSBpcyBkaXJ0eVxuICAgICAqIEB0eXBlIHtzZXRJbnRlcnZhbH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5zeW5jKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBieSB0aGUgcHJveHkgdG8gc2V0IGEgcHJvcGVydHkgd2hlbiBhIGNoYW5nZSBvY2N1cnMsIHBsdXMgaXQgc2V0cyB0aGUgY3VycmVudCBvYmplY3QgdG8gZGlydHkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydHkgLSB0aGUgcHJvcGVydHkgY2hhbmdlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB0aGUgbmV3IHZhbHVlXG4gICAqL1xuICBzZXQocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmIChyZWNlaXZlcltwcm9wZXJ0eV0gIT09IHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy52ZXJib3NlKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYE9iamVjdCBJRCAke3RoaXMub2JqZWN0LmlkfSBwcm9wZXJ0eSAke3Byb3BlcnR5fSBjaGFuZ2VkIGZyb20gJHtyZWNlaXZlcltwcm9wZXJ0eV19IHRvICR7dmFsdWV9LmApO1xuICAgICAgfVxuICAgICAgcmVjZWl2ZXJbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgYnkgdGhlIHByb3h5IHRvIGdldCB0aGUgb2JqZWN0IGJlaW5nIHRyYWNrZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCAtIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcGFyYW0ge29iamVjdH0ga2V5IHRoZSB0aGUgb2JqZWN0IHByb3BlcnR5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IHJldHVybnMgdGhlIG9iamVjdCBiZWluZyB0cmFja2VkXG4gICAqL1xuICBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAnb2JqZWN0JyAmJiB0YXJnZXRba2V5XSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXRba2V5XSwgdGhpcylcbiAgICB9XG4gICAgcmV0dXJuIGtleSBpbiB0YXJnZXQgPyB0YXJnZXRba2V5XSA6IHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYmVpbmcgdHJhY2tlZFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSB0aGUgb2JqZWN0IHByb3BlcnRpZXNcbiAgICovXG4gIGdldCBvYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb3h5O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgcmVnaXN0ZXIgYSBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgdG8gc3luYyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgLSBtdXN0IGhhbmRsZSBvbmUgYXJnLCB0aGUgb2JqZWN0LCBvZiB0eXBlIHtvYmplY3R9XG4gICAqL1xuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHVucmVnaXN0ZXIgYSBmdW5jdGlvbiByZWdpc3RlcmVkIHByZXZpb3VzbHlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSAtIG11c3QgaGFuZGxlIG9uZSBhcmcsIHRoZSBvYmplY3QsIG9mIHR5cGUge29iamVjdH1cbiAgICovXG4gIHVuc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBmbiA/IGl0ZW0gOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gZXhwbGljaXRseSBzeW5jIHRoZSBtb2R1bGUgd2l0aCBhbGwgdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBzeW5jKCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNhbGwodGhpcywgdGhpcy5vYmplY3QpKTtcbiAgfVxufVxuIiwiaW1wb3J0IERyYWdCZWhhdmlvciBmcm9tICcuL2RyYWcnXG5pbXBvcnQgTGlua0JlaGF2aW9yIGZyb20gJy4vbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RCZWhhdmlvckZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBBYnN0cmFjdEJlaGF2aW9yRmFjdG9yeSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb25zdHJ1Y3QgQWJzdHJhY3QgaW5zdGFuY2VzIGRpcmVjdGx5IVwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYnVpbGQoanNvbiwge3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIGxldCBvYmplY3QgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLm9iamVjdC50eXBlKSB7XG4gICAgICBjYXNlICdkcmFnJzpcbiAgICAgICAgb2JqZWN0ID0gbmV3IERyYWdCZWhhdmlvcihqc29uLCB7dmVyYm9zZTogdmVyYm9zZX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICBvYmplY3QgPSBuZXcgTGlua0JlaGF2aW9yKGpzb24sIHt2ZXJib3NlOiB2ZXJib3NlfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT29wcywgY291bGRuXFwndCBjcmVhdGUgdGhlIGJlaGF2aW9yIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUuLi4gQ2Fubm90IHByb2NlZWQuJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKGpzb24uYWN0aW9uKSB7XG4gICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICBvYmplY3QucmVtb3ZlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb2JqZWN0LmFwcGx5KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbn1cbiIsImltcG9ydCBBYnN0cmFjdEJlaGF2aW9yIGZyb20gJy4vLi4vLi4vYmFzZS9hYnN0cmFjdC1iZWhhdmlvcic7XG5pbXBvcnQgSURVdGlscyBmcm9tIFwiLi8uLi8uLi91dGlsL2lkLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcgZXh0ZW5kcyBBYnN0cmFjdEJlaGF2aW9yIHtcblxuICBjb25zdHJ1Y3Rvcihqc29uLCB7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgc3VwZXIoanNvbiwge3ZlcmJvc2U6IHZlcmJvc2V9KTtcbiAgICB0aGlzLm9iamVjdElkID0gSURVdGlscy5nZXRPYmplY3RJZCh0aGlzLm9iamVjdC5vYmplY3QuaWQpO1xuICAgIHRoaXMuY2FudmFzSWQgPSBJRFV0aWxzLmdldENhbnZhc0lkKHRoaXMub2JqZWN0Lm9iamVjdC5jYW52YXMuaWQpO1xuICAgIHRoaXMuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHt0aGlzLmNhbnZhc0lkfWApO1xuICB9XG5cbiAgYXBwbHkoKSB7XG4gICAgZnVuY3Rpb24gb25EcmFnKCkge1xuICAgICAgbGV0IG9iamVjdCA9IHRoaXMuY2FudmFzLnNlbGVjdChgIyR7dGhpcy5vYmplY3RJZH1gKTtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciB4ID0gZDMuZXZlbnQueDtcbiAgICAgIHZhciB5ID0gZDMuZXZlbnQueTtcbiAgICAgIG9iamVjdC5hdHRyKCdjeCcsIHgpLmF0dHIoJ2N5JywgeSkuYXR0cigneCcsIHgpLmF0dHIoJ3knLCB5KTtcbiAgICAgIC8vIGV4cGxpY2l0bHkgdXBkYXRlIHRoZSBvYmplY3QgZm9yIHRoZSBjb21wb25lbnRcbiAgICAgIG9iamVjdC5kYXRhKClbMF0ucHJvcGVydGllcy54ID0geDtcbiAgICAgIG9iamVjdC5kYXRhKClbMF0ucHJvcGVydGllcy5jeCA9IHg7XG4gICAgICBvYmplY3QuZGF0YSgpWzBdLnByb3BlcnRpZXMueSA9IHk7XG4gICAgICBvYmplY3QuZGF0YSgpWzBdLnByb3BlcnRpZXMuY3kgPSB5O1xuICAgICAgLy8gdXBkYXRlIGNvbm5lY3Rpb25zIGJldHdlZW4gY29tcG9uZW50IGlmIGFueVxuICAgICAgdGhpcy5jYW52YXMuc2VsZWN0QWxsKCcubGluaycpLmVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQuc291cmNlLmlkID09PSBzZWxmLm9iamVjdC5vYmplY3QuaWQpIHtcbiAgICAgICAgICBsZXQgZGVsdGFYID0gZC50YXJnZXQucHJvcGVydGllcy54IC0geCxcbiAgICAgICAgICAgIGRlbHRhWSA9IGQudGFyZ2V0LnByb3BlcnRpZXMueSAtIHksXG4gICAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWSksXG4gICAgICAgICAgICBub3JtWCA9IGRlbHRhWCAvIGRpc3QsXG4gICAgICAgICAgICBub3JtWSA9IGRlbHRhWSAvIGRpc3QsXG4gICAgICAgICAgICBzb3VyY2VQYWRkaW5nID0gZC5zb3VyY2UucHJvcGVydGllcy5yLFxuICAgICAgICAgICAgdGFyZ2V0UGFkZGluZyA9IGQudGFyZ2V0LnByb3BlcnRpZXMucixcbiAgICAgICAgICAgIHNvdXJjZVggPSB4ICsgKHNvdXJjZVBhZGRpbmcgKiBub3JtWCksXG4gICAgICAgICAgICBzb3VyY2VZID0geSArIChzb3VyY2VQYWRkaW5nICogbm9ybVkpLFxuICAgICAgICAgICAgdGFyZ2V0WCA9IGQudGFyZ2V0LnByb3BlcnRpZXMueCAtICh0YXJnZXRQYWRkaW5nICogbm9ybVgpLFxuICAgICAgICAgICAgdGFyZ2V0WSA9IGQudGFyZ2V0LnByb3BlcnRpZXMueSAtICh0YXJnZXRQYWRkaW5nICogbm9ybVkpO1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCd4MScsIHNvdXJjZVgpLmF0dHIoJ3kxJywgc291cmNlWSkuYXR0cigneDInLCB0YXJnZXRYKS5hdHRyKCd5MicsIHRhcmdldFkpO1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5kYXRhKClbMF0uc291cmNlLnByb3BlcnRpZXMueCA9IHg7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmRhdGEoKVswXS5zb3VyY2UucHJvcGVydGllcy55ID0geTtcbiAgICAgICAgfSBlbHNlIGlmIChkLnRhcmdldC5pZCA9PT0gc2VsZi5vYmplY3Qub2JqZWN0LmlkKSB7XG4gICAgICAgICAgbGV0IGRlbHRhWCA9IHggLSBkLnNvdXJjZS5wcm9wZXJ0aWVzLngsXG4gICAgICAgICAgICBkZWx0YVkgPSB5IC0gZC5zb3VyY2UucHJvcGVydGllcy55LFxuICAgICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpLFxuICAgICAgICAgICAgbm9ybVggPSBkZWx0YVggLyBkaXN0LFxuICAgICAgICAgICAgbm9ybVkgPSBkZWx0YVkgLyBkaXN0LFxuICAgICAgICAgICAgc291cmNlUGFkZGluZyA9IGQuc291cmNlLnByb3BlcnRpZXMucixcbiAgICAgICAgICAgIHRhcmdldFBhZGRpbmcgPSBkLnRhcmdldC5wcm9wZXJ0aWVzLnIsXG4gICAgICAgICAgICBzb3VyY2VYID0gZC5zb3VyY2UucHJvcGVydGllcy54ICsgKHNvdXJjZVBhZGRpbmcgKiBub3JtWCksXG4gICAgICAgICAgICBzb3VyY2VZID0gZC5zb3VyY2UucHJvcGVydGllcy55ICsgKHNvdXJjZVBhZGRpbmcgKiBub3JtWSksXG4gICAgICAgICAgICB0YXJnZXRYID0geCAtICh0YXJnZXRQYWRkaW5nICogbm9ybVgpLFxuICAgICAgICAgICAgdGFyZ2V0WSA9IHkgLSAodGFyZ2V0UGFkZGluZyAqIG5vcm1ZKTtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXR0cigneDEnLCBzb3VyY2VYKS5hdHRyKCd5MScsIHNvdXJjZVkpLmF0dHIoJ3gyJywgdGFyZ2V0WCkuYXR0cigneTInLCB0YXJnZXRZKTtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZGF0YSgpWzBdLnRhcmdldC5wcm9wZXJ0aWVzLnggPSB4O1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5kYXRhKClbMF0udGFyZ2V0LnByb3BlcnRpZXMueSA9IHk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zZWxlY3RBbGwoYCMke3RoaXMub2JqZWN0SWR9YCkuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJykuY2FsbChkMy5kcmFnKCkub24oJ2RyYWcnLCBvbkRyYWcuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcy5zZWxlY3RBbGwoYCMke3RoaXMub2JqZWN0SWR9YCkuc3R5bGUoJ2N1cnNvcicsICcnKS5vbignbW91c2Vkb3duLmRyYWcnLCBudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0QmVoYXZpb3IgZnJvbSAnLi8uLi8uLi9iYXNlL2Fic3RyYWN0LWJlaGF2aW9yJztcbmltcG9ydCBJRFV0aWxzIGZyb20gJy4vLi4vLi4vdXRpbC9pZC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBBYnN0cmFjdEJlaGF2aW9yIHtcblxuICBjb25zdHJ1Y3Rvcihqc29uLCB7dmVyYm9zZSA9IGZhbHNlfSA9IHt9KSB7XG4gICAgc3VwZXIoanNvbiwge3ZlcmJvc2U6IHZlcmJvc2V9KTtcbiAgICB0aGlzLm9iamVjdElkID0gSURVdGlscy5nZXRPYmplY3RJZCh0aGlzLm9iamVjdC5pZCk7XG4gICAgdGhpcy5jYW52YXNJZCA9IElEVXRpbHMuZ2V0Q2FudmFzSWQodGhpcy5vYmplY3Qub2JqZWN0MS5jYW52YXMuaWQpO1xuICAgIHRoaXMuY2FudmFzID0gZDMuc2VsZWN0KGBzdmcjJHt0aGlzLmNhbnZhc0lkfWApO1xuICAgIC8vIGRlZmluZSBhcnJvdyBtYXJrZXJzIGZvciBncmFwaCBsaW5rc1xuICAgIHRoaXMuY2FudmFzXG4gICAgICAuYXBwZW5kKCdzdmc6ZGVmcycpLmFwcGVuZCgnc3ZnOm1hcmtlcicpXG4gICAgICAuYXR0cignaWQnLCAnZW5kLWFycm93JylcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCA2KVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMylcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAzKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3N2ZzpwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00wLC01TDEwLDBMMCw1JylcbiAgICAgIC5hdHRyKCdmaWxsJywgJyMwMDAnKVxuICAgICAgLmFwcGVuZCgnc3ZnOmRlZnMnKS5hcHBlbmQoJ3N2ZzptYXJrZXInKVxuICAgICAgLmF0dHIoJ2lkJywgJ3N0YXJ0LWFycm93JylcbiAgICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgLTUgMTAgMTAnKVxuICAgICAgLmF0dHIoJ3JlZlgnLCA0KVxuICAgICAgLmF0dHIoJ21hcmtlcldpZHRoJywgMylcbiAgICAgIC5hdHRyKCdtYXJrZXJIZWlnaHQnLCAzKVxuICAgICAgLmF0dHIoJ29yaWVudCcsICdhdXRvJylcbiAgICAgIC5hcHBlbmQoJ3N2ZzpwYXRoJylcbiAgICAgIC5hdHRyKCdkJywgJ00xMCwtNUwwLDBMMTAsNScpXG4gICAgICAuYXR0cignZmlsbCcsICcjMDAwJyk7XG4gIH1cblxuICBhcHBseSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXMuc2VsZWN0QWxsKGBsaW5lIyR7dGhpcy5vYmplY3RJZH1gKVxuICAgICAgLmRhdGEoW3snc291cmNlJzogdGhpcy5vYmplY3Qub2JqZWN0MSwgJ3RhcmdldCc6IHRoaXMub2JqZWN0Lm9iamVjdDJ9XSkuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnbGluZScpLmF0dHIoJ2NsYXNzJywgJ2xpbmsnKVxuICAgICAgLnN0eWxlKCdtYXJrZXItc3RhcnQnLCAnJykuc3R5bGUoJ21hcmtlci1lbmQnLCAndXJsKCNlbmQtYXJyb3cpJylcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGxldCBkZWx0YVggPSBkLnRhcmdldC5wcm9wZXJ0aWVzLnggLSBkLnNvdXJjZS5wcm9wZXJ0aWVzLngsXG4gICAgICAgICAgZGVsdGFZID0gZC50YXJnZXQucHJvcGVydGllcy55IC0gZC5zb3VyY2UucHJvcGVydGllcy55LFxuICAgICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZGVsdGFYICogZGVsdGFYICsgZGVsdGFZICogZGVsdGFZKSxcbiAgICAgICAgICBub3JtWCA9IGRlbHRhWCAvIGRpc3QsXG4gICAgICAgICAgbm9ybVkgPSBkZWx0YVkgLyBkaXN0LFxuICAgICAgICAgIHNvdXJjZVBhZGRpbmcgPSBkLnNvdXJjZS5wcm9wZXJ0aWVzLnIsXG4gICAgICAgICAgdGFyZ2V0UGFkZGluZyA9IGQudGFyZ2V0LnByb3BlcnRpZXMucixcbiAgICAgICAgICBzb3VyY2VYID0gZC5zb3VyY2UucHJvcGVydGllcy54ICsgKHNvdXJjZVBhZGRpbmcgKiBub3JtWCksXG4gICAgICAgICAgc291cmNlWSA9IGQuc291cmNlLnByb3BlcnRpZXMueSArIChzb3VyY2VQYWRkaW5nICogbm9ybVkpLFxuICAgICAgICAgIHRhcmdldFggPSBkLnRhcmdldC5wcm9wZXJ0aWVzLnggLSAodGFyZ2V0UGFkZGluZyAqIG5vcm1YKSxcbiAgICAgICAgICB0YXJnZXRZID0gZC50YXJnZXQucHJvcGVydGllcy55IC0gKHRhcmdldFBhZGRpbmcgKiBub3JtWSk7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC5hdHRyKCd4MScsIHNvdXJjZVgpLmF0dHIoJ3kxJywgc291cmNlWSlcbiAgICAgICAgICAuYXR0cigneDInLCB0YXJnZXRYKS5hdHRyKCd5MicsIHRhcmdldFkpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzLnNlbGVjdEFsbChgbGluZSMke3RoaXMub2JqZWN0SWR9YClcbiAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKS5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgIC5kYXRhKFt7J3NvdXJjZSc6IHRoaXMub2JqZWN0Lm9iamVjdDEsICd0YXJnZXQnOiB0aGlzLm9iamVjdC5vYmplY3QyfV0pLnJlbW92ZUFsbCgpO1xuICB9XG59XG5cbiIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9jaXJjbGUnXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vcmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RTaGFwZUZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChuZXcudGFyZ2V0ID09PSBBYnN0cmFjdFNoYXBlRmFjdG9yeSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjb25zdHJ1Y3QgQWJzdHJhY3QgaW5zdGFuY2VzIGRpcmVjdGx5IVwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYnVpbGQoanNvbiwge3ZlcmJvc2UgPSBmYWxzZX0gPSB7fSkge1xuICAgIGxldCBvYmplY3QgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChqc29uLm9iamVjdC50eXBlKSB7XG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICBvYmplY3QgPSBuZXcgQ2lyY2xlKGpzb24ub2JqZWN0LCB7dmVyYm9zZTogdmVyYm9zZX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgICBvYmplY3QgPSBuZXcgUmVjdGFuZ2xlKGpzb24ub2JqZWN0LCB7dmVyYm9zZTogdmVyYm9zZX0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09vcHMsIGNvdWxkblxcJ3QgY3JlYXRlIGFuIG9iamVjdCBmb3IgdGhlIHNwZWNpZmllZCB0eXBlLi4uIENhbm5vdCBwcm9jZWVkLicpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgQWJzdHJhY3RSZW5kZXJlciBmcm9tICcuLy4uLy4uL2Jhc2UvYWJzdHJhY3QtcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBBYnN0cmFjdFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3RvcihvYmplY3QsIHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcihvYmplY3QsIHt2ZXJib3NlOiB2ZXJib3NlLCB0YWc6IG9iamVjdC50eXBlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gYWRkIGF0dHJpYnV0ZXMgdG8gb2JqZWN0XG4gICAgdGhpcy5vYmplY3RcbiAgICAgIC5hdHRyKCdpZCcsIHRoaXMub2JqZWN0SWQpXG4gICAgICAuYXR0cignY3gnLCBkID0+IGQucHJvcGVydGllcy54KVxuICAgICAgLmF0dHIoJ2N5JywgZCA9PiBkLnByb3BlcnRpZXMueSlcbiAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnByb3BlcnRpZXMucilcbiAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gZC5hdHRyaWJ1dGVzLmNvbG9yKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgQWJzdHJhY3RSZW5kZXJlciBmcm9tICcuLy4uLy4uL2Jhc2UvYWJzdHJhY3QtcmVuZGVyZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBBYnN0cmFjdFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3RvcihvYmplY3QsIHt2ZXJib3NlID0gZmFsc2V9ID0ge30pIHtcbiAgICBzdXBlcihvYmplY3QsIHt2ZXJib3NlOiB2ZXJib3NlLCB0YWc6IG9iamVjdC50eXBlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gYWRkIGF0dHJpYnV0ZXMgdG8gb2JqZWN0XG4gICAgdGhpcy5vYmplY3RcbiAgICAgIC5hdHRyKCdpZCcsIHRoaXMub2JqZWN0SWQpXG4gICAgICAuYXR0cigneCcsIGQgPT4gZC5wcm9wZXJ0aWVzLngpXG4gICAgICAuYXR0cigneScsIGQgPT4gZC5wcm9wZXJ0aWVzLnkpXG4gICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQucHJvcGVydGllcy53aWR0aClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IGQucHJvcGVydGllcy5oZWlnaHQpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIGQgPT4gZC5hdHRyaWJ1dGVzLmNvbG9yKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgSnNvblV0aWxzIGZyb20gJy4vdXRpbC9qc29uLXV0aWxzLmpzJztcbmltcG9ydCBBYnN0cmFjdFNoYXBlRmFjdG9yeSBmcm9tICcuL2RyYXcvc2hhcGUvYWJzdHJhY3QtZmFjdG9yeSc7XG5pbXBvcnQgQWJzdHJhY3RCZWhhdmlvckZhY3RvcnkgZnJvbSAnLi9kcmF3L2JlaGF2aW9yL2Fic3RyYWN0LWZhY3RvcnknO1xuXG4vKipcbiAqIEZyYW5jeSBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIHdob2xlIGZyYW1ld29yay4gQnkgcGFzc2luZyBhbiBpbnB1dCBzdHJpbmcvb2JqZWN0IHRvIHRoZSB7RnJhbmN5LmhhbmRsZX0gZnVuY3Rpb24sXG4gKiBGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGNyZWF0aW9uIG9mIHRoYXQganNvbiBhcyBsb25nIGl0IGlzIGEgdmFsaWQgYW5kIHVuZGVyc3RhbmRhYmxlIGpzb24gb2JqZWN0IHRvIEZyYW5jeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyYW5jeSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRnJhbmN5IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25zOlxuICAgKiBAcGFyYW0gdmVyYm9zZVxuICAgKiBAcGFyYW0gYXBwZW5kVG9cbiAgICovXG4gIGNvbnN0cnVjdG9yKHt2ZXJib3NlID0gZmFsc2UsIGFwcGVuZFRvID0gJ2JvZHknfSA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgdmVyYm9zZTogdmVyYm9zZSxcbiAgICAgIGFwcGVuZFRvOiBhcHBlbmRUb1xuICAgIH07XG4gICAgdGhpcy5ub2RlcyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRlc3QoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBmb2xsb3dpbmcgb2JqZWN0OiAnLCBqc29uKTtcblxuICAgICAgdGhpcy5ub2Rlcy5hZGQoanNvbi5vYmplY3QpO1xuXG4gICAgICB2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG4gICAgICAgIC8vLmZvcmNlKFwiY29sbGlkZVwiLCBkMy5mb3JjZUNvbGxpZGUoZCA9PiBkLnByb3BlcnRpZXMuciArIDgpLml0ZXJhdGlvbnMoMTYpKVxuICAgICAgICAuZm9yY2UoXCJjZW50ZXJcIiwgZDMuZm9yY2VDZW50ZXIoMTAwLCAxMDApKVxuICAgICAgICAuZm9yY2UoXCJjaGFyZ2VcIiwgZDMuZm9yY2VNYW55Qm9keSgpKVxuICAgICAgICAuZm9yY2UoXCJ4XCIsIGQzLmZvcmNlWCgwLjAyKSlcbiAgICAgICAgLmZvcmNlKFwieVwiLCBkMy5mb3JjZVkoMC4wMikpO1xuXG4gICAgICB2YXIgbm9kZSA9IGQzLnNlbGVjdCgnc3ZnJykuYXBwZW5kKCdnJykuc2VsZWN0QWxsKCdjaXJjbGUnKS5kYXRhKEFycmF5LmZyb20odGhpcy5ub2RlcykpXG4gICAgICAgIC5lbnRlcigpLmFwcGVuZCgnY2lyY2xlJykuYXR0cigncicsIGQgPT4gZC5wcm9wZXJ0aWVzLnIpLmNhbGwoZDMuZHJhZygpXG4gICAgICAgICAgLm9uKFwic3RhcnRcIiwgZHJhZ3N0YXJ0ZWQpXG4gICAgICAgICAgLm9uKFwiZHJhZ1wiLCBkcmFnZ2VkKVxuICAgICAgICAgIC5vbihcImVuZFwiLCBkcmFnZW5kZWQpKTtcblxuICAgICAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgICAgICBub2RlLmF0dHIoJ2N4JywgZCA9PiBkLnByb3BlcnRpZXMueCk7XG4gICAgICAgIG5vZGUuYXR0cignY3knLCBkID0+IGQucHJvcGVydGllcy55KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuICAgICAgICBpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwLjMpLnJlc3RhcnQoKTtcbiAgICAgICAgZC5meCA9IGQucHJvcGVydGllcy54O1xuICAgICAgICBkLmZ5ID0gZC5wcm9wZXJ0aWVzLnk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuICAgICAgICBkLmZ4ID0gZDMuZXZlbnQueDtcbiAgICAgICAgZC5meSA9IGQzLmV2ZW50Lnk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGRyYWdlbmRlZChkKSB7XG4gICAgICAgIGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuICAgICAgICBkLmZ4ID0gbnVsbDtcbiAgICAgICAgZC5meSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHNpbXVsYXRpb24ubm9kZXMoQXJyYXkuZnJvbSh0aGlzLm5vZGVzKSkub24oXCJ0aWNrXCIsIHRpY2tlZCkuZm9yY2UoJ25vZGUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludC4gQ2FsbGluZyBoYW5kbGUgcGFzc2luZyBhIGpzb24gcmVwcmVzZW50YXRpb24gc3RyaW5nIHdpbGwgdHJpZ2dlciB0aGUgZHJhd2luZyBvZiBhIGpzb24gb2JqZWN0LlxuICAgKiBAcGFyYW0gaW5wdXQgLSBhIGpzb24gc3RyaW5nL29iamVjdCB0byBnZXQgZHJhd25cbiAgICovXG4gIGhhbmRsZShpbnB1dCkge1xuICAgIGxldCBqc29uID0gSnNvblV0aWxzLnBhcnNlKGlucHV0KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgY29uc29sZS5pbmZvKCdGcmFuY3kgd2lsbCBoYW5kbGUgdGhlIGZvbGxvd2luZyBvYmplY3Q6ICcsIGpzb24pO1xuICAgICAgbGV0IG9iamVjdDtcbiAgICAgIHN3aXRjaCAoanNvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3NoYXBlJzpcbiAgICAgICAgICBvYmplY3QgPSBBYnN0cmFjdFNoYXBlRmFjdG9yeS5idWlsZChqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdiZWhhdmlvcic6XG4gICAgICAgICAgb2JqZWN0ID0gQWJzdHJhY3RCZWhhdmlvckZhY3RvcnkuYnVpbGQoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RydWN0dXJlJzpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGltcGxlbWVudGVkIScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaW1wbGVtZW50ZWQhJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgfVxuXG4gIHBsb3QoaW5wdXQpIHtcbiAgICBsZXQganNvbiA9IEpzb25VdGlscy5wYXJzZShpbnB1dCk7XG4gICAgaWYgKGpzb24pIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnRnJhbmN5IHdpbGwgaGFuZGxlIHRoZSBmb2xsb3dpbmcgb2JqZWN0OiAnLCBqc29uKTtcbiAgICAgIGxldCBvYmplY3Q7XG4gICAgICBzd2l0Y2ggKGpzb24udHlwZSkge1xuICAgICAgICBjYXNlICdzaGFwZSc6XG4gICAgICAgICAgb2JqZWN0ID0gQWJzdHJhY3RTaGFwZUZhY3RvcnkuYnVpbGQoanNvbiwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYmVoYXZpb3InOlxuICAgICAgICAgIG9iamVjdCA9IEFic3RyYWN0QmVoYXZpb3JGYWN0b3J5LmJ1aWxkKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cnVjdHVyZSc6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRlZCEnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGltcGxlbWVudGVkIScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG4gIH1cblxuICBkcmF3KGlucHV0KSB7XG4gICAgbGV0IGpzb24gPSBKc29uVXRpbHMucGFyc2UoaW5wdXQpO1xuICAgIGlmIChqc29uKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0ZyYW5jeSB3aWxsIGhhbmRsZSB0aGUgZm9sbG93aW5nIG9iamVjdDogJywganNvbik7XG4gICAgICBsZXQgb2JqZWN0O1xuICAgICAgc3dpdGNoIChqc29uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2hhcGUnOlxuICAgICAgICAgIG9iamVjdCA9IEFic3RyYWN0U2hhcGVGYWN0b3J5LmJ1aWxkKGpzb24sIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2JlaGF2aW9yJzpcbiAgICAgICAgICBvYmplY3QgPSBBYnN0cmFjdEJlaGF2aW9yRmFjdG9yeS5idWlsZChqc29uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJ1Y3R1cmUnOlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaW1wbGVtZW50ZWQhJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbXBsZW1lbnRlZCEnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuRnJhbmN5ID0gRnJhbmN5O1xuXG53aW5kb3cuRnJhbmN5ID0gRnJhbmN5O1xuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdlbmVyYXRlcyBpZHMgZm9yIHRoZSBodG1sL3N2ZyBlbGVtZW50cyBpbiB0aGUgZG9tLlxuICogVGhlIGlkcyBuYW1pbmcgY29udmVudGlvbiBpczogJ2ZyYW5jeVtXaW5kb3d8Q2FudmFzfE9iamVjdF0qbnVtZXJpY2FsIGlkKidcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSURVdGlscyB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlkIGZvciBhIHdpbmRvdyBiYXNlZCBvbiBhIGNhbnZhcyBpZC5cbiAgICogQHBhcmFtIGNhbnZhc0lkIC0gdGhlIGNhbnZhcyBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgd2luZG93IGVsZW1lbnQgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0V2luZG93SWQoY2FudmFzSWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeVdpbmRvdyR7Y2FudmFzSWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYSBjYW52YXMgYmFzZWQgb24gYSBjYW52YXMgaWQuXG4gICAqIEBwYXJhbSBjYW52YXNJZCAtIHRoZSBjYW52YXMgaWRcbiAgICogQHJldHVybnMge3N0cmluZ30gdGhlIGNhbnZhcyBlbGVtZW50IGlkLlxuICAgKi9cbiAgc3RhdGljIGdldENhbnZhc0lkKGNhbnZhc0lkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lDYW52YXMke2NhbnZhc0lkfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaWQgZm9yIGFuIG9iamVjdCBiYXNlZCBvbiBhIG9iamVjdCBpZC5cbiAgICogQHBhcmFtIG9iamVjdElkIC0gdGhlIG9iamVjdCBpZFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgZWxlbWVudCBvYmplY3QgaWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0SWQob2JqZWN0SWQpIHtcbiAgICByZXR1cm4gYGZyYW5jeU9iamVjdCR7b2JqZWN0SWR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpZCBmb3IgYW4gb2JqZWN0IGJhc2VkIG9uIGEgb2JqZWN0IGlkLlxuICAgKiBAcGFyYW0gb2JqZWN0SWQgLSB0aGUgb2JqZWN0IGlkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBlbGVtZW50IG9iamVjdCBpZC5cbiAgICovXG4gIHN0YXRpYyBnZXRHcm91cE9iamVjdElkKG9iamVjdElkKSB7XG4gICAgcmV0dXJuIGBmcmFuY3lHcm91cE9iamVjdCR7b2JqZWN0SWR9YDtcbiAgfVxufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdG8gZGVhbCB3aXRoIEpTT04uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25VdGlscyB7XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBpbnB1dCBuZCBjaGVja3Mgd2hldGhlciB0aGlzIGlucHV0IGlzIHZhbGlkIGFuZCByZXR1cm5zIGEgSlNPTiBvYmplY3QuXG4gICAqIEBwYXJhbSBpbnB1dCAtIHRoZSBpbnB1dCB3ZSB3YW50IHRvIHBhcnNlXG4gICAqIEByZXR1cm5zIHtqc29ufSAtIGlmIHRoZSBpbnB1dCBpcyBhIHZhbGlkIEpTT04gb2JqZWN0LCBvdGhlcndpc2UgcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgKi9cbiAgc3RhdGljIHBhcnNlKGlucHV0KSB7XG4gICAgaW5wdXQgPSB0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIgPyBKU09OLnN0cmluZ2lmeShpbnB1dCkgOiBpbnB1dDtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1tcXG5cXHJcXGJcXHNcXFxcXSt8KGdhcD4pL2csICcnKTtcbiAgICBsZXQganNvblJlZ2V4ID0gL3soPzpbXl0pKn0vZztcbiAgICBsZXQgbWF0Y2ggPSBqc29uUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBpbnB1dCA9IG1hdGNoWzBdO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGpzb24uYWdlbnQgPT09ICdmcmFuY3knID8ganNvbiA6IHVuZGVmaW5lZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=
