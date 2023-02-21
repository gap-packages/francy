import './vendor';
import { CLASS_NAME, MIME_TYPE_FRANCY, MIME_TYPE_TEXT } from './utils';
import { FrancyApp, Logger } from 'francy';
import { D3Renderer } from 'francy-renderer-d3';
import { GraphvizRenderer } from 'francy-renderer-graphviz';
import { VisRenderer } from 'francy-renderer-vis';
//import { ILatexTypesetter as ignore } from '@jupyterlab/rendermime'; // required to load mathjax into JLab!
//import { OutputArea } from '@jupyterlab/outputarea';
import { Widget } from '@phosphor/widgets';

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
    this.Francy  = new FrancyApp({
      callbackHandler: function (cmd) {
        // NOTE it should be implemented like this:
        // at this point we know the element exists and the OutputArea is 2 levels up: this.parent.parent
        // OutputArea.execute(cmd, self.parent.parent, self._session);
        // NOTE but francy holds state in the DOM (d3 behaviour), so we need to reuse it:
        let future = self._session.kernel.requestExecute({ code: cmd });
        future.onIOPub = function (msg) {
          if (msg.content && msg.content.data) {
            if (msg.content.data[MIME_TYPE_FRANCY]) {
              // This will update an existing canvas by its ID!
              self.Francy.load(msg.content.data[MIME_TYPE_FRANCY]);
            } else if (msg.content.data[MIME_TYPE_TEXT]) {
              // This will add an output div!
              self.Francy.load(msg.content.data[MIME_TYPE_TEXT]);
            }
            self.Francy.render().catch(error => Logger.error(error));
          }
        };
      }
    });
    // register available renderers
    this.Francy.RenderingManager.register(new D3Renderer());
    this.Francy.RenderingManager.register(new GraphvizRenderer());
    this.Francy.RenderingManager.register(new VisRenderer());
    // try to initialize MathJax just in case - hack
    this.Francy.Components.MathJax.tryInitialize();
  }

  /**
   * Render 'application/vnd.francy+json' into this widget's node.
   */
  renderModel(model) {
    this.Francy.load(model.data[this._mimeType]).render()
      .catch(error => Logger.error(error))
      .then(element => this.node.appendChild(element));
    return Promise.resolve(true);
  }

}

/**
 * A mime renderer factory for 'application/vnd.francy+json' data.
 */
export const rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE_FRANCY],
  createRenderer: options => new OutputWidget(options)
};


const extension = {
  name: 'francy',
  rendererFactory,
  rank: 0,
  dataType: 'json',
};

export default extension;
