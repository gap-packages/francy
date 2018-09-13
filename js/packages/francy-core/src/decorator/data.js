import {Exception} from '../util/exception';

/**
 * This {Decorator} class is used to check whether a property is present in the data before executing a method.
 */
export default class DataDecorator {

  /**
   * Default constructor
   */
  constructor() {
  }

  /**
   * This function can be used as a decorator to intercept a method and, based on {this.data},
   * whether to execute it or not.
   * 
   * @example @Decorators.Data.requires('canvas.graph')
   * @param {string} properties - the properties separateed by a dot, e.g. 'data.property'
   * @public
   */
  requires(properties) {
    var self = this;
    return function decorator(target, name, descriptor) {
      var oldValue = descriptor.value;

      descriptor.value = function () {
        if (!self._hasData(self._getProperty(this.data, properties))) {
          return Promise.reject(new Exception(`No data here [${properties}], nothing to render... continuing...`));
        }
        return oldValue.apply(this, arguments);
      };

      return descriptor;
    };
  }

  /**
   * This function can be used as a decorator to intercept a method and, based on {this.data},
   * execute it if the property is set to true otherwise rejects the promise.
   * 
   * @example @Decorators.Data.enabled('canvas.texTypesetting')
   * @param {string} properties - the properties separateed by a dot, e.g. 'data.property'
   * @public
   */
  enabled(properties) {
    var self = this;
    return function decorator(target, name, descriptor) {
      var oldValue = descriptor.value;

      descriptor.value = function () {
        if (!self._getProperty(this.data, properties)) {
          return Promise.reject(new Exception(`Property disabled [${properties}], skip execution... continuing...`));
        }
        return oldValue.apply(this, arguments);
      };

      return descriptor;
    };
  }

  /**
   * Helper method to iterate over an object
   * @param {Object} obj - the object to search the property for
   * @param {strin} propertyPath - property separated by dot
   * @private
   */
  _getProperty(obj, propertyPath) {

    var tmp = obj;

    if (tmp && propertyPath) {
      var properties = propertyPath.split('.');

      for (var property of properties) {
        if (!tmp.hasOwnProperty(property)) {
          tmp = undefined;
          break;
        } else {
          tmp = tmp[property];
        }
      }
    }

    return tmp;
  }

  /**
   * Helper method to check whether a property has data
   * @param {Object} obj - the object to check
   * @private
   */
  _hasData(obj) {
    return obj && ((obj instanceof Array && obj.length) || (obj instanceof Object && Object.values(obj).length));
  }
}