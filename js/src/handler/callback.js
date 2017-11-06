import Logger from '../util/logger';
import Modal from '../util/modal';

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

export default class CallbackHandler {

  constructor(config, { verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger({ verbose: verbose });
    this.modal = new Modal(config.callback, this.options);
  }

  execute() {
    this.modal.show();
  }
}
