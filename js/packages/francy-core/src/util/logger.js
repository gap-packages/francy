import { Configuration } from './configuration';

/**
 * This class provides a logger for the Francy application.
 */
class Log {

  /**
   * Logger constructor
   * @param verbose prints extra log information to console.log, defaults to false
   */
  constructor() {
    /**
     * Stores the browser console function
     * @type {function}
     */
    this.console = console;
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */
  debug(message) {
    if (Configuration.object.verbose) {
      this.console.debug(Log._format('D', message));
    }
  }

  /**
   * Creates an [INFO] entry in the console log
   * @param message the message to print
   */
  info(message) {
    this.console.info(Log._format('I', message));
  }

  /**
   * Creates an [ERROR] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  error(message, error) {
    if (error) {
      this.console.error(Log._format('E', message), error);
    } else {
      this.console.error(Log._format('E', message));
    }
  }

  /**
   * Creates a [WARN] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  warn(message, error) {
    if (error) {
      this.console.info(Log._format('W', message), error);
    } else {
      this.console.info(Log._format('W', message));
    }
  }

  /**
   * This is a private method that formats all log messages
   * @param level the log level
   * @param message the message to print
   * @return {string} the formatted strin
   */
  static _format(level, message) {
    return `[${level} ${new Date().toISOString()}] - ${message}`;
  }
}

/**
 * The {Logger} singleton
 * @public
 */
export const Logger = new Log();
