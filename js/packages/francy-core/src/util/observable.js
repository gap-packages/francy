import isEqual from 'lodash.isequal';

/**
 * This {Observable} class contains the utility methods for implementing the Observer Pattern.
 */
export default class Observable {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param verbose
   * @param throttle
   */
  constructor() {
    /**
     * This is property holds a list of change subscribers.
     * @type {function}
     * @private
     */
    this._subscribers = [];
  }

  /**
   * This method is used register a function that is invoked to sync the object
   * @param {string} property - the property to subscribe to
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {Object}
   * @public
   */
  subscribe(property, fn) {
    this._subscribers.push({property: property, fn: fn});
  }

  /**
   * This method is used to unregister a function registered previously
   * @param {string} property - the property to unsubscribe to
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {Object}
   * @public
   */
  unsubscribe(property, fn) {
    this._subscribers = this._subscribers.filter(s => !isEqual(s.property, property) && !isEqual(s.fn, fn));
  }

  /**
   * This method is used to notify all subscribers of a change
   * @param {string} property - the property to notify subscribers subscribed to
   * @param {Object} value - the value that changed
   * @public
   */
  notify(property, value) {
    this._subscribers.forEach(s => isEqual(s.property, property) && s.fn.call(this, value));
  }

}