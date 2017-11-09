let singleton = null;

/**
 * This class is a singleton that provides a logger for the Francy application.
 */
export default class Logger {

  /**
   * Singleton: Creates an instance of the logger and will returned that instance,
   * everytime a new instance is requested.
   * @param verbose prints extra log information to console.log, default false
   */
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

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */
  debug(message) {
    if (this.verbose) {
      this.console.debug(this._format('DEBUG', message));
    }
  }

  /**
   * Creates a [INFO] entry in the console log
   * @param message the message to print
   */
  info(message) {
    this.console.info(this._format('INFO', message));
  }

  /**
   * Creates a [ERROR] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  error(message, error) {
    this.console.error(this._format('ERROR', message), error);
  }

  /**
   * Creates a [WARN] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  error(message, error) {
    this.console.error(this._format('WARN', message), error);
  }

  /**
   * This is a private method that formats all log messages
   * @param message the message to print
   */
  _format(level, message) {
    return `[${level}] - ${new Date().toISOString()} - ${message}`;
  }
}
