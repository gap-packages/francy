import Modal from './base';
import { Logger } from '../../util/logger';
import { Components } from '../../component/factory';
import { Decorators } from '../../decorator/factory';

/**
 * Implements a Confirmation Modal window.
 * 
 * The modal window takes a callback and based on the callback configuration will
 * display a message to the user.
 * 
 * @extends {Modal}
 */
export default class ConfirmModal extends Modal {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * Stores the element
     * @type {object}
     */
    this.element = undefined;
  }

  /**
   * This method is used to render this component
   * 
   * @public
   */
  @Decorators.Initializer.initialize()
  async render() {
    let modalId = this.data.callback.id;

    Logger.debug(`Creating Confirm Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    this._buildHeader(form, 'Confirm');

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    let row = content.append('div').attr('class', 'francy-table-row');
    row.append('div').attr('class', 'francy-table-cell').append('label');
    row.append('div').attr('class', 'francy-table-cell').append('span').attr('id', `Confirm-${this.data.callback.id}`).text(this.data.callback.confirm);

    this._buildFooter(form);

    // disable keyboard shortcuts when using this modal in Jupyter
    if (Components.Jupyter.isAvailable) {
      Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-overlay', '.francy-modal']);
    }

    Logger.debug(`Confirm Modal updated [${modalId}]...`);

    return this;
  }

}
