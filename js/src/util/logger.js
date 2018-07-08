/**
 * This class provides a logger for the Francy application.
 */
export default class Logger {

  /**
   * Logger constructor
   * @param verbose prints extra log information to console.log, defaults to false
   */
  constructor({ verbose = false } = {}) {
    this.verbose = verbose;
    this.console = console;
  }

  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */
  debug(message) {
    if (this.verbose) {
      this.console.debug(Logger._format('DEBUG', message));
    }
  }

  /**
   * Creates an [INFO] entry in the console log
   * @param message the message to print
   */
  info(message) {
    this.console.info(Logger._format('INFO', message));
  }

  /**
   * Creates an [ERROR] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  error(message, error) {
    error = error || {};
    this.console.error(Logger._format('ERROR', message), error);
  }

  /**
   * Creates a [WARN] entry in the console log
   * @param message the message to print
   * @param error the error Object to attach to the message
   */
  warn(message, error) {
    error = error || {};
    this.console.error(Logger._format('WARN', message), error);
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
