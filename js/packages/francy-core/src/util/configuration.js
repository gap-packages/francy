import Observable from './observable';

/**
 * This class provides the application configuration.
 * It extends the {Observable} class providing methods to subscribe on changes.
 * 
 * @extends {Observable}
 */
class ConfigurationHandler extends Observable {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param {object} config
   * @param {number} config.throttle - the interval for storing dirty data
   */
  constructor(object, { throttle = 1000 } = {}) {
    super();
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */
    this._dirty = false;
    /**
     * This holds the actual configuration object
     * @type {object}
     * @private
     */
    let objectStored = window.sessionStorage.getItem('francy.settings');
    if (!objectStored) {
      this._dirty = true;
      setTimeout(()=>this._sync(), 0);
    } else {
      object = JSON.parse(objectStored);
    }
    /**
     * This is property holds a proxy that handles a dirty flag when object changes.
     * @type {Proxy}
     * @private
     */
    this._proxy = new Proxy(object, this);
    /**
     * Sync listeners every second, if data is dirty
     * @type {setInterval}
     * @private
     */
    setInterval(() => {
      return this._sync();
    }, throttle);
  }

  /**
   * This method is used by the proxy to set a property when a change occurs, plus it sets the current object to dirty.
   * @param {object} object - the object being tracked
   * @param {object} property - the property changed
   * @param {object} value - the new value
   * @public
   */
  set(object, property, value) {
    if (object[property] !== value) {
      object[property] = value;
      this.notify(property, value);
      this._dirty = true;
    }
    return true;
  }

  /**
   * This method is used by the proxy to get the object being tracked
   * @param {object} target - the object being tracked
   * @param {object} property - the object property
   * @returns {object} returns the object being tracked
   * @public
   */
  get(target, property) {
    if (typeof target[property] === 'object' && target[property] !== null) {
      return new Proxy(target[property], this);
    }
    return property in target ? target[property] : target;
  }
  
  /**
   * This method is used by the proxy to checkif the object has a property
   * @param {object} target - the object being tracked
   * @param {object} key - the object property
   * @returns {boolean} returns true if the property exists, otherwise false
   * @public
   */
  has(target, key) {
    if (key[0] === '_') {
      return false;
    }
    return key in target;
  }

  /**
   * Returns the object being tracked (proxy)
   * @returns {object} the object properties
   * @public
   */
  get object() {
    return this._proxy;
  }

  /**
  * Adds a new configuration property
  * 
  * @param {string} property - the configuration property name
  * @param {Object} value - the configuration property value
  * @returns {object} this instance
  * @public 
  */
  addProperty(property, value) {
    if (!this.hasProperty(property)) {
      Object.defineProperty(this.object, property, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
      });
      this._dirty = true;
    }
    return this;
  }
  
  /**
  * Checks if a configuration property exists. Returns true if it exists, otherwise false.
  * 
  * @param {string} name - the configuration property name
  * @returns {boolean} returns true if the property exists, otherwise false
  * @public 
   */
  hasProperty(name) {
    return name in this.object;
  }

  /**
   * This method is used to explicitly sync the module with all the subscribers
   * @private
   */
  _sync() {
    if (this._dirty) {
      window.sessionStorage.setItem('francy.settings', JSON.stringify(this.object));
    }
  }
}

/**
 * The {Configuration} singleton
 * @public
 */
export const Configuration = new ConfigurationHandler({
  showNeighbours: true,
  dragNodes: true,
  simulation: true,
  fixedRandomSeed: true,
  verbose: false,
  transitionDuration: 750 //ms
}, {
  throttle: 5000 
});
