import Base from './base';
import RequiredArgsModal from './modal-required';
import { dontExecuteIfNoData } from '../decorator/data';

export default class CallbackHandler extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @dontExecuteIfNoData()
  execute() {
    if (Object.keys(this.data.callback.requiredArgs).length) {
      return new RequiredArgsModal(this.options).load(this.data, true).render();
    }
    else {
      // Trigger is the expected command on GAP for this events!
      return this.options.callbackHandler(`Trigger(${JSON.stringify(JSON.stringify(this.data.callback))});`);
    }
  }
}
