import Base from './base';
import RequiredArgsModal from './modal-required';

export default class CallbackHandler extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  execute(config) {
    if (Object.keys(config.callback.requiredArgs).length) {
      return new RequiredArgsModal(this.options).render(config);
    }
    else {
      return this.options.callbackHandler(config.callback);
    }
  }
}
