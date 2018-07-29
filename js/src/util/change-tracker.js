import Observable from './observable';

/**
 * This class holds default methods to handle changes on a model object.
 * It works by the means of a Proxy to track changes and ensures subscribers
 * are notified of these changes on a time basis (1 second default).
 */
export default class Tracker extends Observable {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param verbose
   * @param throttle
   */
  constructor(object, { verbose = false, throttle = 1000 } = {}) {
    super();
    this.verbose = verbose;
    /**
     * This is property holds a proxy that handles a dirty flag when object changes.
     * @type {Proxy}
     * @private
     */
    this._proxy = new Proxy(object, this);
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */
    this._dirty = false;
    /**
     * Sync listeners every second, if data is dirty
     * @type {setInterval}
     * @private
     */
    setInterval(() => {
      if (this._dirty) {
        this._dirty = false;
        return this.sync();
      }
    }, throttle);
  }

  /**
   * This method is used by the proxy to set a property when a change occurs, plus it sets the current object to dirty.
   * @param {object} receiver - the object being tracked
   * @param {object} property - the property changed
   * @param {object} value - the new value
   */
  set(receiver, property, value) {
    if (!(value[property] instanceof Object) && receiver[property] !== value) {
      if (this.verbose) {
        //console.debug(`Object ID ${this.object.id} property ${property} changed from ${receiver[property]} to ${value}.`);
      }
      receiver[property] = value;
      this._dirty = true;
    }
    return true;
  }

  /**
   * This method is used by the proxy to get the object being tracked
   * @param {object} target - the object being tracked
   * @param {object} key the the object property
   * @returns {object} returns the object being tracked
   */
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {
      return new Proxy(target[key], this);
    }
    return key in target ? target[key] : target;
  }

  /**
   * Returns the object being tracked
   * @returns {object} the object properties
   */
  get object() {
    return this._proxy;
  }
  
  /**
   * This method is used register a function that is invoked to sync the object
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {object}
   */
  subscribe(fn) {
    super.subscribe('all', fn);
  }

  /**
   * This method is used unregister a function registered previously
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {object}
   */
  unsubscribe(fn) {
    super.unsubscribe('all', fn);
  }

  /**
   * This method is used to explicitly sync the module with all the subscribers
   */
  sync() {
    this.notify('all', this.object);
  }
}
