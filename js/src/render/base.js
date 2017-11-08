import Logger from '../util/logger';

export default class Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger(this.options);
  }

  update({ verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    return this;
  }

}
