import BaseRenderer from './base';
import RequiredArgsModal from './modal/required';
import ConfirmModal from './modal/confirm';
import { Decorators } from '../decorator/factory';

/**
 * CallbackHandler is responsible for handling Callbacks and display Modal windows accodingly.
 * Callbacks can have arguments, for which a Modal window will appear to request such input.
 * Callbacks can also show a confirmation message before arguments input / execution.
 * If a Callback does not require an argument and no confirmation message, 
 * then the Callback is executed immediately.
 */
export default class CallbackHandler extends BaseRenderer {

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
     * Stores the callback to execute
     * @type {function}
     */
    this.callback = callbackHandler;
  }

  /**
   * Runs callback function. If this callback is configured to get input from the user,
   * this will be prompt before execution.
   * 
   * @returns {object} the output from the callback function
   * @public 
   */
  @Decorators.Data.requires('callback')
  async execute() {
    let options = this.options;
    if (this.data.callback.confirm) {
      if (Object.keys(this.data.callback.requiredArgs).length) {
        options.callbackHandler = () => this._showRequiredModal.call(this);
      }
      return await this.handlePromise(this._showConfirmModal());
    } else if (Object.keys(this.data.callback.requiredArgs).length) {
      return await this.handlePromise(this._showRequiredModal.call(this));
    }
    // Trigger is the expected command on GAP for this event!
    return await this._execute(this.data.callback);
  }

  /**
   * Builds and shows a {ConfirmModal}
   * 
   * @private
   */
  async _showConfirmModal() {
    let options = this.options;
    if (Object.keys(this.data.callback.requiredArgs).length) {
      options.callbackHandler = () => this._showRequiredModal.call(this);
    }
    let modal = new ConfirmModal(options);
    return await this.handlePromise(modal.load(this.data, true).render());
  }

  /**
   * Builds and shows a {RequiredArgsModal}
   * 
   * @private
   */
  async _showRequiredModal() {
    let options = this.options;
    options.callbackHandler = o => this._execute.call(this, o);
    let modal = new RequiredArgsModal(options);
    return await this.handlePromise(modal.load(this.data, true).render());
  }

  /**
   * This method executes the callback with the result from the {RequiredArgsModal} 
   * modal windows if required
   * 
   * @param {object} object - the object to stringify and pass to the callback
   * @private
   */
  _execute(object) {
    // oh well, Trigger(<json>); is the entrypoint back to GAP 
    // while we don't support comms on the kernel:
    return this.callback(`Trigger(${JSON.stringify(JSON.stringify(object))});`);
  }
}
