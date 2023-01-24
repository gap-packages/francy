import {GlobalConfiguration} from './configuration';

/**
 * This class provides a logger for the Francy application.
 */
class Log {

  /**
   * Logger constructor
   */
  constructor() {
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   * @param object and object to print along with the message
   */
  debug(message, object) {
    if (GlobalConfiguration.object.verbose) {
      if (object) {
        window.console.debug(Log._format('D', message), object);
      } else {
        window.console.debug(Log._format('D', message));
      }
    }
  }

  /**
   * Creates an [INFO] entry in the console log
   * @param message the message to print
   * @param object and object to print along with the message
   */
  info(message, object) {
    if (object) {
      window.console.info(Log._format('I', message), object);
    } else {
      window.console.info(Log._format('I', message));
    }
  }

  /**
   * Creates an [ERROR] entry in the console log
   * @param message the message to print
   * @param object and object to print along with the message
   */
  error(message, object) {
    if (object) {
      window.console.error(Log._format('E', message), object);
    } else {
      window.console.error(Log._format('E', message));
    }
  }

  /**
   * Creates a [WARN] entry in the console log
   * @param message the message to print
   * @param object and object to print along with the message
   */
  warn(message, object) {
    if (object) {
      window.console.info(Log._format('W', message), object);
    } else {
      window.console.info(Log._format('W', message));
    }
  }

  /**
   * This is a private method that formats all log messages
   * @param level the log level
   * @param message the message to print
   * @return {string} the formatted string
   * @private
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
