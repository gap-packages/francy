import {Utilities} from './utilities';

/**
 * This {Observable} class implements the Observer Pattern.
 */
export default class Observable {
  /**
   * Creates an instance of Observable.
   */
  constructor() {
    /**
     * This is property holds an object of change subscribers.
     * @type {object}
     * @private
     */
    this._subscribers = {};
  }

  /**
   * This method is used register a function that is invoked to sync the object
   * @param {string} property - the property to subscribe to
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {Object}
   * @param {string} id - the id of the subscriber
   * @public
   */
  subscribe(property, fn, id) {
    if (!id) {
      throw new Error('ID is mandatory');
    }
    this._subscribers[id] = {property: property, fn: fn};
  }

  /**
   * This method is used to unregister a function registered previously
   * @param {string} id - the id of the subscriber
   * @public
   */
  unsubscribe(id) {
    if (!id) {
      throw new Error('ID is mandatory');
    }
    delete this._subscribers[id];
  }

  /**
   * This method is used to unregister all functions registered previously
   * @public
   */
  unsubscribeAll() {
    this._subscribers = {};
  }

  /**
   * This method is used to notify all subscribers of a change
   * @param {string} property - the property to notify subscribers
   * @param {Object} value - the value that changed
   * @public
   */
  notify(property, value) {
    Object.values(this._subscribers).forEach(s =>
      Utilities.isEqual(s.property, property) && s.fn.call(this, value));
  }

}
