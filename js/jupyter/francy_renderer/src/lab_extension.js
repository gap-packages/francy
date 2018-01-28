import {Widget} from '@phosphor/widgets';
import {Kernel} from '@jupyterlab/services';
import './style.css';
import * as d3 from './d3.min';
import * as FrancyBundle from './francy.bundle.min';

const MIME_TYPE = 'application/vnd.francy+json';
const CLASS_NAME = 'francy-view';

window.d3 = d3;

/**
 * A widget for rendering vnd.francy.
 */
export class OutputWidget extends Widget {
  /**
   * Construct a new output widget.
   */
  constructor(options) {
    super();
    this._mimeType = options.mimeType;
    this.addClass(CLASS_NAME);
  }

  /**
   * Render vnd.francy into this widget's node.
   */
  renderModel(model) {
    Kernel.connectTo({name: 'gap-wrapper'}).then(function (kernel) {
      console.log('Francy - GAP kernel attached:', kernel);
      kernel.requestKernelInfo().then(function (reply) {
        let content = reply.content;
        console.log('Kernel info:', content);
      });

      // Start Francy
      const Francy = FrancyBundle.settings({
        verbose: true,
        appendTo: '#francy-drawing-div',
        callbackHandler: function (command) {

          let future = kernel.requestExecute({code: command});

          // record each IOPub message
          future.onIOPub = function (msg) {
            console.log('Got IOPub:', msg);
            if (msg.content && msg.content.data && msg.content.data[MIME_TYPE]) {
              // This will update an existing canvas by its ID!
              Francy.load(msg.content.data[MIME_TYPE]).render();
            }
          };

          future.onReply = function (reply) {
            console.log('Got execute reply', reply);
          };

          future.done.then(function () {
            console.log('Future is fulfilled');
          });
        }
      });

      let francyObject = Francy.load(model.data[this._mimeType]).render();
      this.node.append(francyObject);

    });
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
  name: 'FrancyJSON',
  rendererFactory,
  rank: 0,
  dataType: 'json',
};

export default extension;
