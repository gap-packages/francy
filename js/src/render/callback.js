import Logger from '../util/logger';
import Modal from './modal';

// FIXME http://loredanacirstea.github.io/es6-design-patterns/

export default class CallbackHandler {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger({ verbose: verbose });
  }

  execute(config) {
    return new Modal(this.options).render(config);
  }
}
