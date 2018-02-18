import Base from './base';
import RequiredArgsModal from './modal-required';
import { requires } from '../util/data-decorator';

export default class CallbackHandler extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.callback = callbackHandler;
  }

  @requires('callback')
  execute() {
    if (Object.keys(this.data.callback.requiredArgs).length) {
      let options = this.options;
      options.callbackHandler = (callbackObj) => this._execute.call(this, callbackObj);
      return new RequiredArgsModal(options).load(this.data, true).render();
    }
    
    // Trigger is the expected command on GAP for this events!
    this._execute(this.data.callback);
    
  }

  _execute(calbackObj) {
    this.callback(`Trigger(${JSON.stringify(JSON.stringify(calbackObj))});`);
  }
}
