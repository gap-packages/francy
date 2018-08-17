import Observable from './observable';

class ConfigurationHandler extends Observable {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param verbose
   * @param throttle
   */
  constructor(object, { throttle = 1000 } = {}) {
    super();
    /**
     * This holds the actual configuration object
     * @type {object}
     * @private
     */
    let objectStored = window.sessionStorage.getItem('francy.settings');
    if (!objectStored || typeof objectStored !== 'object') {
      this._sync();
    } else {
      object = JSON.parse(objectStored);
    }
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */
    this._dirty = false;
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
      if (this._dirty) {
        this._dirty = false;
        return this._sync();
      }
    }, throttle);
  }

  /**
   * This method is used by the proxy to set a property when a change occurs, plus it sets the current object to dirty.
   * @param {object} receiver - the object being tracked
   * @param {object} property - the property changed
   * @param {object} value - the new value
   */
  set(object, property, value) {
    if (!(value[property] instanceof Object) && object[property] !== value) {
      object[property] = value;
      this.notify(property, value);
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
  get(target, property) {
    if (typeof target[property] === 'object' && target[property] !== null) {
      return new Proxy(target[property], this);
    }
    return property in target ? target[property] : target;
  }

  /**
   * Returns the object being tracked
   * @returns {object} the object properties
   */
  get object() {
    return this._proxy;
  }

  /**
   * This method is used to explicitly sync the module with all the subscribers
   */
  _sync() {
    window.sessionStorage.setItem('francy.settings', JSON.stringify(this.object));
  }
}

/* singleton */
export const Configuration = new ConfigurationHandler({
  showNeighbours: true,
  dragNodes: true,
  simulation: true,
  fixedRandomSeed: true,
  verbose: false,
  transitionDuration: 750 //ms
}, {
  throttle: 30000 
});