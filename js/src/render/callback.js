import BaseRenderer from './base';
import RequiredArgsModal from './modal-required';
import ConfirmModal from './modal-confirm';
import { Decorators } from '../decorator/factory';

export default class CallbackHandler extends BaseRenderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
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
  
  _requiredArgsRender() {
    
  }

  _execute(calbackObj) {
    // oh well, Trigger(<json>); is the entrypoint back to GAP 
    // while we don't support comms on the kernel
    this.callback(`Trigger(${JSON.stringify(JSON.stringify(calbackObj))});`);
  }
}
