import {Decorators} from '../../decorator/factory';
import {Logger} from '../../util/logger';
import Modal from './base';

/**
 * Implements a Confirmation Modal window.
 *
 * The modal window takes a callback and based on the callback configuration will
 * display a message to the user prior to the execution of the callback.
 *
 * @extends {Modal}
 */
export default class ConfirmModal extends Modal {

  /**
   * Base constructor
   *
   * @typedef {Object} options
   * @property {String} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @property {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
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

    Logger.debug(`(${this.context.instanceId}) Creating Confirm Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    this._buildHeader(form);

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    let row = content.append('div').attr('class', 'francy-table-row');
    row.append('div').attr('class', 'francy-table-cell').append('label');
    row.append('div').attr('class', 'francy-table-cell').append('span').attr('id', `Confirm-${this.data.callback.id}`).text(this.data.callback.confirm);

    this._buildFooter(form);

    Logger.debug(`(${this.context.instanceId}) Confirm Modal updated [${modalId}]...`);

    return this;
  }

}
