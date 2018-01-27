import { Widget } from '@phosphor/widgets';
import '../../../css/style.css';
import '../../../dist/francy/amd/francy.bundle';

var MIME_TYPE = 'application/vnd.francy+json';
var CLASS_NAME = 'francy-view';

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
    this.node.textContent = model.data[this._mimeType];
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
