import { MIME_TYPE, CLASS_NAME } from './utils';
import { Widget } from '@phosphor/widgets';
//import { OutputArea } from '@jupyterlab/outputarea';
import './d3_wrapper';
import 'francy';
import 'francy-renderer-d3';

/* global Francy */

/* eslint-disable no-console */

/**
 * A widget for rendering 'application/vnd.francy+json'
 */
export class OutputWidget extends Widget {
  /**
   * Construct a new output widget.
   */
  constructor(options) {
    super(options);
    this._session = options.resolver._session;
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
    var self = this;
    // update the callback handler with the session kernel
    Francy.settings({
      callbackHandler: function(cmd) {
        // NOTE it should be implemented like this:
        // at this point we know the element exists and the OutputArea is 2 levels up: this.parent.parent
        // OutputArea.execute(cmd, self.parent.parent, self._session);
        // NOTE but francy holds state in the DOM (d3 behaviour), so we need to reuse it:
        let future = self._session.kernel.requestExecute({ code: cmd });
        future.onIOPub = function(msg) {
          if (msg.content && msg.content.data && msg.content.data[MIME_TYPE]) {
            // This will update an existing canvas by its ID!
            Francy.load(msg.content.data[MIME_TYPE]).render()
              .catch(error => console.error(error))
              .then(element => console.log('Interactive trigger result: ', element));
          }
        };
      }
    });
  }

  /**
   * Render 'application/vnd.francy+json' into this widget's node.
   */
  renderModel(model) {
    Francy.load(model.data[this._mimeType]).render()
      .catch(error => console.error(error))
      .then(element => this.node.appendChild(element));
  }

}

/**
 * A mime renderer factory for 'application/vnd.francy+json' data.
 */
export const rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: options => new OutputWidget(options)
};


const extension = {
  name: 'francy',
  rendererFactory,
  rank: 0,
  dataType: 'json',
};

export default extension;

/* eslint-enable no-console */