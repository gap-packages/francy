const d3 = await Promise.all([
  import('d3-selection'),
  import('d3-shape'),
  import('d3-zoom'),
  import('d3-path'),
  import('d3-color'),
  import('d3-scale'),
  import('d3-scale-chromatic'),
  import('d3-interpolate'),
  import('d3-drag'),
  import('d3-array'),
  import('d3-force'),
  import('d3-hierarchy'),
  import('d3-axis'),
  import('d3-transition'),
  import('d3-graphviz')
]).then(d3 => Object.assign({}, ...d3));

import * as vis from 'vis-network/standalone';
import '@hpcc-js/wasm';

import {FrancyApp} from 'francy';
import {Logger, MIME} from 'francy-core';
import {D3Renderer} from 'francy-renderer-d3';
import {GraphvizRenderer} from 'francy-renderer-graphviz';
import {VisRenderer} from 'francy-renderer-vis';

import {IRenderMimeRegistry, RenderedHTML} from '@jupyterlab/rendermime';
import {INotebookTracker} from '@jupyterlab/notebook';

import Graphviz from '@hpcc-js/wasm/graphviz'

window.d3 = d3
window.vis = vis;
window.graphviz = Graphviz

export const MIME_TYPE_TEXT = 'text/plain';
export const CLASS_NAME = 'jp-OutputWidget-Francy';
export const APPEND_ID = 'francy-drawing-div';

/**
 * A widget for rendering 'application/vnd.francy+json'
 */
export class FrancyWidget extends RenderedHTML {
  /**
   * Construct a new output widget.
   */
  constructor(options, sessionContext) {
    super(options);
    this._mimeType = MIME;
    this._sessionContext = sessionContext;

    this.addClass(CLASS_NAME);

    let self = this;
    // update the callback handler with the session kernel
    this.Francy = new FrancyApp({
      callbackHandler: function (cmd) {
        // NOTE it should be implemented like this:
        // at this point we know the element exists and the OutputArea is 2 levels up: this.parent.parent
        // OutputArea.execute(cmd, self.parent.parent, self._session);
        // NOTE but francy holds state in the DOM (d3 behaviour), so we need to reuse it:
        let future = self._sessionContext.session.kernel.requestExecute({code: cmd});
        future.onIOPub = function (msg) {
          if (msg.content && msg.content.data) {
            if (msg.content.data[MIME]) {
              // This will update an existing canvas by its ID!
              self.Francy.load(msg.content.data[MIME]);
            } else if (msg.content.data[MIME_TYPE_TEXT]) {
              // This will add an output div!
              self.Francy.load(msg.content.data[MIME_TYPE_TEXT]);
            }
            self.Francy.render()
              .then(element => self.node.appendChild(element))
              .catch(error => Logger.error(error));
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
  render(model) {
    this.Francy.load(model.data[this._mimeType]).render()
      .catch(error => Logger.error(error))
      .then(element => this.node.appendChild(element));
    return Promise.resolve(true);
  }

}

/**
 * This extension will configure a mime renderer factory for 'application/vnd.francy+json' data.
 */
const extension = {
  id: 'francy-extension-jupyterlab:factory',
  name: 'francy',
  dataType: 'json',
  autoStart: true,
  requires: [IRenderMimeRegistry, INotebookTracker],
  activate: (app, rendermime, notebook) => {
    rendermime.addFactory({
      safe: true,
      mimeTypes: [MIME],
      createRenderer: options => new FrancyWidget(options, notebook.currentWidget.sessionContext)
    }, 0);
  },
};

export default extension;
