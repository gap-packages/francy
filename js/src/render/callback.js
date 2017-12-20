import Base from './base';
import RequiredArgsModal from './modal-required';
import { dontExecuteIfNoData } from '../decorator/data';

export default class CallbackHandler extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.callback = callbackHandler;
  }

  @dontExecuteIfNoData()
  execute() {
    if (Object.keys(this.data.callback.requiredArgs).length) {
      var options = this.options;
      options.callbackHandler = (calbackObj) => this._execute.call(this, calbackObj);
      return new RequiredArgsModal(options).load(this.data, true).render();
    }
    else {
      // Trigger is the expected command on GAP for this events!
      this._execute(this.data.callback);
    }
  }

  _execute(calbackObj) {
    this.callback(`Trigger(${JSON.stringify(JSON.stringify(calbackObj))});`);
  }
}
