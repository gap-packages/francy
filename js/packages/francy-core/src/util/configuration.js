import Observable from './observable';
import { Utilities } from './utilities';

/**
 * This class provides the application configuration.
 * It extends the {Observable} class providing methods to subscribe on changes.
 * 
 * @extends {Observable}
 */
export default class ConfigurationHandler extends Observable {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param {object} config
   * @param {number} config.throttle - the interval for storing dirty data
   */
  constructor(object, { throttle = 5000, backend = BACKEND.NONE } = {}) {
    super();
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */
    this._localDirty = false;
    /**
     * This is property is used to flag when the object changes in the store.
     * @type {boolean}
     * @private
     */
    this._storageDirty = false;
    /**
     * The interval time to check and store changes
     * @private
     */
    this._throttle = throttle;
    /**
     * The backend to be used
     * @private
     */
    this._backend = backend;
    // load configuration object
    this._load(object);
  }
  
  /**
   * This loads the configuration object
   * @type function
   * @private
   */
  _load(object) {
    if (this._backend) {
      let objectStored = this._backend.getItem(SETTINGS_KEY);
      if (!objectStored) {
        this._localDirty = true;
      } else {
        object = Object.assign(object, JSON.parse(objectStored));
      }
      /**
       * Sync listeners every second, if data is dirty
       * @type {setInterval}
       * @private
       */
      setInterval(() => {
        this._syncPull();
        this._syncPush();
        return;
      }, this._throttle);
    }
    /**
     * This is property holds a proxy that handles a dirty flag when object changes.
     * @type {Proxy}
     * @private
     */
    this._proxy = new Proxy(object, this);
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
      this._localDirty = true;
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
      this._localDirty = true;
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
  _syncPush() {
    if (this._localDirty && !this._storageDirty) {
      this._backend.setItem(SETTINGS_KEY, JSON.stringify(this.object));
    }
  }
  
  /**
   * This method is used to explicitly sync the current object from the storage
   * @private
   */
  _syncPull() {
    if (!this._localDirty) {
    // check for changes and load them
      let item = this._backend.getItem(SETTINGS_KEY);
      if (item) {
        let obj = Object.assign({}, JSON.parse(item));
        let diffs = Utilities.getDifferences(obj, this.object);
        if (diffs.length > 0) {
          this._storageDirty = true;
          diffs.forEach((key) => {
            this.object[key] = obj[key];
          });
          this._localDirty = false;
          this._storageDirty = false;
        }
      }
    }
  }
}

/**
 * Settings key to be stored in the local/session storage
 * @private
 */
const SETTINGS_KEY = 'francy.settings';

/**
 * The minimal default {Configuration} object singleton
 * @public
 */
export const DefaultConfiguration = {
  showNeighbours: true,
  dragNodes: true,
  simulation: true
};

/**
 * The list of backends supported
 * @public
 */
export const BACKEND = {
  SESSION: window.sessionStorage,
  LOCAL: window.localStorage,
  NONE: undefined
};

/**
 * The global {Configuration} singleton
 * @public
 */
export const GlobalConfiguration = new ConfigurationHandler({
  verbose: false,
  transitionDuration: 750, //ms
  fixedRandomSeed: true,
}, {
  throttle: 5000,
  backend: BACKEND.LOCAL
});
