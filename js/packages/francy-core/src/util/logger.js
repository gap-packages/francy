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
    this.console = console;
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */
  debug(message) {
    if (Configuration.object.verbose) {
      this.console.debug(Log._format('DEBUG', message));
    }
  }

  /**
   * Creates an [INFO] entry in the console log
   * @param message the message to print
   */
  info(message) {
    this.console.info(Log._format('INFO', message));
  }

  /**
   * Creates an [ERROR] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  error(message, error) {
    error = error || {};
    this.console.error(Log._format('ERROR', message), error);
  }

  /**
   * Creates a [WARN] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  warn(message, error) {
    error = error || {};
    this.console.error(Log._format('WARN', message), error);
  }

  /**
   * This is a private method that formats all log messages
   * @param level the log level
   * @param message the message to print
   */
  static _format(level, message) {
    return `[${level}] - ${new Date().toISOString()} - ${message}`;
  }
}

export const Logger = new Log();
