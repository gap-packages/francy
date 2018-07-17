import BaseRenderer from './base';
import RequiredArgsModal from './modal-required';
import ConfirmModal from './modal-confirm';
import { Decorators } from '../decorator/factory';

/**
 * CallbackHandler is responsible for handling Callbacks and display Modal windows accodingly.
 * Callbacks can have arguments, for which a Modal window will appear to request such input.
 * Callbacks can also show a confirmation message before arguments input / execution.
 * If a Callback does not require an argument and no confirmation message, 
 * then the Callback is executed immediatly.
 */
export default class CallbackHandler extends BaseRenderer {

  /**
   * CallbackHandler constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.callback = callbackHandler;
  }

  @Decorators.Data.requires('callback')
  async execute() {
    let self = this;
    let options = this.options;
    async function showRequiredModal() {
      options.callbackHandler = cb => self._execute.call(self, cb);
      let modal = new RequiredArgsModal(options);
      return await self.handlePromise(modal.load(self.data, true).render());
    }
    if (this.data.callback.confirm) {
      if (Object.keys(this.data.callback.requiredArgs).length) {
        options.callbackHandler = showRequiredModal;
      }
      let confirmModal = new ConfirmModal(options);
      return await this.handlePromise(confirmModal.load(this.data, true).render());
    }
    if (Object.keys(this.data.callback.requiredArgs).length) {
      return await this.handlePromise(showRequiredModal());
    }
    // Trigger is the expected command on GAP for this event!
    await this._execute(this.data.callback);
  }

  _execute(calbackObj) {
    // oh well, Trigger(<json>); is the entrypoint back to GAP 
    // while we don't support comms on the kernel
    this.callback(`Trigger(${JSON.stringify(JSON.stringify(calbackObj))});`);
  }
}
