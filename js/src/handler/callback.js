import Logger from '../util/logger';
import Modal from '../util/modal';

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

export default class CallbackHandler {

  constructor(config, { verbose = false, callbackHandler }) {
    this.options = {
      verbose: verbose,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger({ verbose: verbose });
    this.modal = new Modal(config.callback, this.options);
  }

  execute() {
    this.modal.show();
  }
}
