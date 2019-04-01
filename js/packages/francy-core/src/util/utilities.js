import _isEqual from 'lodash.isequal';
import _reduce from 'lodash.reduce';
import alea from 'seedrandom';

/**
 * {Utilities} functions object.
 * 
 * @typedef {Object} Utilities
 * @property {function} generateId
 * @public
 */
export const Utilities = {
  /**
   * Returns a random generator function based on the alea algorithm
   * 
   * @returns {function} alea random generator algoritm
   * @public
   */
  aleaRandomGenerator: () => new alea(),
  /**
   * Generates an ID
   * 
   * @returns {string} a random id
   * @public
   */
  generateId: function () {
    // Math.random should be unique because of its seeding algorithm
    // Convert it to base 36 (numbers + letters), 
    // and grab the first 9 characters after the decimal
    return `A${this.aleaRandomGenerator().double().toString(36).substr(2, 9)}`;
  },
  /**
   * Checks whether an argument is an object
   * 
   * @returns {boolean} true if is an object, otherwise false
   * @public
   */
  isObject: function (a) {
    return typeof a === 'object' && a !== null;
  },
  /**
   * Checks whether an argument is a boolean
   * 
   * @returns {boolean} true if is a boolean, otherwise false
   * @public
   */
  isBoolean: function(a) {
    return typeof a === 'boolean';
  },
  /**
   * Checks whether an argument is a function
   * 
   * @returns {boolean} true if is a function, otherwise false
   * @public
   */
  isFunction: function(a) {
    return typeof a === 'function';
  },
  /**
   * Checks whether 2 objects are equal, deep check
   * 
   * @returns {boolean} true if the obejcts are equal, otherwise false
   * @public
   */
  isEqual: function (a, b) {
    return _isEqual(a, b);
  },
  /**
   * Checks whether 2 objects are equal and returns an array with the keys that are different
   * 
   * @returns {array} an array of keys
   * @public
   */
  getDifferences: function(a, b) {
    return _reduce(a, (result, value, key) => _isEqual(value, b[key]) ? result : result.concat(key), []);
  },
  /**
   * Sanitize a string by removing everything that is not alphanumeric replacing with empty string if second argument is not passed.
   * 
   * @returns {string} the string sanitized
   * @public
   */
  sanitize: function(a, b) {
    b = b ? b : '';
    return a.replace(/[^a-zA-Z0-9]/g, b);
  },
  /**
   * Checks whether an argument is a Promise or not, based on the existence of a 'then' function
   * 
   * @returns {boolean} true if is a Promise, otherwise false
   * @public
   */
  isaPromise: function(a) {
    return a && typeof a.then === 'function';
  }
};
