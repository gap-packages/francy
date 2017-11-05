/**
 * This class is a singleton that provides a logger for the Francy application.
 */

let singleton = null;

export default class Logger {

  constructor({ verbose = false } = {}) {
    if (!singleton) {
      this.verbose = verbose;
      this.console = console;
      singleton = this;
    }
    else {
      return singleton;
    }
    
  }

  debug(message) {
    if (this.verbose) {
      this.console.debug(this._format('DEBUG', message));
    }
  }

  info(message) {
    this.console.info(this._format('INFO', message));
  }

  error(message, error) {
    this.console.error(this._format('ERROR', message), error);
  }
  
  _format(level, message) {
    return `[${level}] - ${new Date().toISOString()} - ${message}`;
  }
}
