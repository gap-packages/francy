/**
 * {Utilities} functions object.
 * 
 * @typedef {Object} Utilities
 * @property {function} generateId
 * @public
 */
export const Utilities = {
  /**
   * Generates an ID
   * 
   * @returns {string} a random id
   * @public
   */
  generateId: function(){
    // Math.random should be unique because of its seeding algorithm
    // Convert it to base 36 (numbers + letters), 
    // and grab the first 9 characters after the decimal
    return `L-${Math.random().toString(36).substr(2, 9)}`;
  }
};
