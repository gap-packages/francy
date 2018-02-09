'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rendererFactory = exports.OutputWidget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _widgets = require('@phosphor/widgets');

require('./style.css');

var _d = require('./d3.min');

var d3 = _interopRequireWildcard(_d);

var _francyBundle = require('./francy.bundle.min');

var FrancyBundle = _interopRequireWildcard(_francyBundle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { OutputArea } from '@jupyterlab/outputarea';


window.d3 = d3;
var francy = new FrancyBundle.Francy({ verbose: true, appendTo: _constants.APPEND_ID, callbackHandler: console.log });

// Create a 'display: none;' div for drawing
// TODO move this to it's own class and reuse in nbextension
d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

/**
 * A widget for rendering 'application/vnd.francy+json'
 */

var OutputWidget = exports.OutputWidget = function (_Widget) {
  _inherits(OutputWidget, _Widget);

  /**
   * Construct a new output widget.
   */
  function OutputWidget(options) {
    _classCallCheck(this, OutputWidget);

    var _this = _possibleConstructorReturn(this, (OutputWidget.__proto__ || Object.getPrototypeOf(OutputWidget)).call(this, options));

    _this._session = options.resolver._session;
    _this._mimeType = options.mimeType;
    _this.addClass('jp-OutputWidget-Francy');
    var self = _this;
    // update the callback handler with the session kernel
    francy.settings({
      callbackHandler: function callbackHandler(cmd) {
        // NOTE it should be implemented like this:
        // OutputArea.execute(cmd, self.parent.parent, self._session); // at this point we know the element exists and the OutputArea is 2 levels up: this.parent.parent
        // NOTE but francy holds state in the DOM (d3 behaviour), so we need to reuse it:
        var future = self._session.kernel.requestExecute({ code: cmd });
        future.onIOPub = function (msg) {
          if (msg.content && msg.content.data && msg.content.data[_constants.MIME_TYPE]) {
            // This will update an existing canvas by its ID!
            francy.load(msg.content.data[_constants.MIME_TYPE]).render();
          }
        };
      }
    });
    return _this;
  }

  /**
   * Render 'application/vnd.francy+json' into this widget's node.
   */


  _createClass(OutputWidget, [{
    key: 'renderModel',
    value: function renderModel(model) {
      var francyObject = francy.load(model.data[this._mimeType]).render();
      this.node.appendChild(francyObject);
    }
  }]);

  return OutputWidget;
}(_widgets.Widget);

/**
 * A mime renderer factory for 'application/vnd.francy+json' data.
 */


var rendererFactory = exports.rendererFactory = {
  safe: true,
  mimeTypes: [_constants.MIME_TYPE],
  createRenderer: function createRenderer(options) {
    return new OutputWidget(options);
  }
};

var extension = {
  name: _constants.MIME_TYPE,
  rendererFactory: rendererFactory,
  rank: 0,
  dataType: 'json'
};

exports.default = extension;