import { MIME_TYPE, CLASS_NAME, APPEND_ID } from './constants';
import { Widget } from '@phosphor/widgets';
import { OutputArea } from '@jupyterlab/outputarea';
import './style.css';
import * as d3 from './d3.min';
import * as FrancyBundle from './francy.bundle.min';

window.d3 = d3;

// Create a 'display: none;' div for drawing
d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

/**
 * A widget for rendering vnd.francy.
 */
export class OutputWidget extends Widget {
  /**
   * Construct a new output widget.
   */
  constructor(options) {
    super();
    console.log('Starting loading Module Francy Javascript...');
    this._mimeType = options.mimeType;
    this.addClass('jp-OutputWidget-francy');
    this.francy = new FrancyBundle.Francy({
      verbose: true,
      appendTo: APPEND_ID,
      callbackHandler: console.log
    });
    console.log('Finished loading Module Francy Javascript...');
  }

  /**
   * Render vnd.francy into this widget's node.
   */
  renderModel(model) {

    var self = this;

    // Ok, we're in a notebook now, so we can connect to the current kernel
    // in order to interact - francy <=> kernel
    self.francy.settings({
      callbackHandler: function(command) {
        let future = OutputArea.execute({ code: command });

        // record each IOPub message
        future.onIOPub = function(msg) {
          console.log('Got IOPub:', msg);
          if (msg.content && msg.content.data && msg.content.data[MIME_TYPE]) {
            // This will update an existing canvas by its ID!
            self.francy.load(msg.content.data[MIME_TYPE]).render();
          }
        };

        future.onReply = function(reply) {
          console.log('Got execute reply', reply);
        };

        future.done.then(function() {
          console.log('Future is fulfilled');
        });
      }
    });


    this.render(model);
  }

  render(model) {
    let francyObject = this.francy.load(model.data[this._mimeType]).render();
    this.node.appendChild(francyObject);
  }

  /**
   * A message handler invoked on an `'after-show'` message.
   */
  onAfterShow(msg) {
    this.update();
  }

  /**
   * A message handler invoked on a `'resize'` message.
   */
  onResize(msg) {
    this.update();
  }

  /**
   * A message handler invoked on an `'update-request'` message.
   */
  onUpdateRequest(msg) {
    this.update();
  }

}

/**
 * A mime renderer factory for vnd.francy data.
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
