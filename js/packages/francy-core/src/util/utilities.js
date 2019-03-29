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
    return `L-${this.aleaRandomGenerator().double().toString(36).substr(2, 9)}`;
  },

  isObject: function (a) {
    return typeof a === 'object' && a !== null;
  },

  isBoolean: function(a) {
    return typeof a === 'boolean';
  },
  
  isFunction: function(a) {
    return typeof a === 'function';
  },
  
  isEqual: function (a, b) {
    return _isEqual(a, b);
  },
  
  getDifferences: function(a, b) {
    return _reduce(a, (result, value, key) => _isEqual(value, b[key]) ? result : result.concat(key), []);
  },
  
  sanitize: function(a, b) {
    b = b ? b : '';
    return a.replace(/[^a-zA-Z0-9]/g, b);
  },

  isaPromise: function(a) {
    return a && typeof a.then === 'function';
  }
};
