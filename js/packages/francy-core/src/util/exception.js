/**
 * This class provides a subclass of {Error} to provide functionality on recoverable errors.
 * 
 * @extends {Error}
 */
export class Exception extends Error {
  /**
   * Default Constructor
   */
  constructor(message) {
    super(message);
  }
}

/**
 * This class provides a subclass of {Error} to provide functionality on non recoverable errors.
 * 
 * @extends {Error}
 */
export class RuntimeException extends Error {
  /**
   * Default Constructor
   */
  constructor(message) {
    super(message);
  }
}
