import BaseRenderer from './base';
import RequiredArgsModal from './modal-required';
import { Decorators } from '../decorator/factory';

export default class CallbackHandler extends BaseRenderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.callback = callbackHandler;
  }

  @Decorators.Data.requires('callback')
  async execute() {
    if (Object.keys(this.data.callback.requiredArgs).length) {
      let options = this.options;
      options.callbackHandler = (callbackObj) => this._execute.call(this, callbackObj);
      let modal = new RequiredArgsModal(options);
      return await this.handlePromise(modal.load(this.data, true).render());
    }
    
    // Trigger is the expected command on GAP for this event!
    await this._execute(this.data.callback);
  }

  _execute(calbackObj) {
    this.callback(`Trigger(${JSON.stringify(JSON.stringify(calbackObj))});`);
  }
}
