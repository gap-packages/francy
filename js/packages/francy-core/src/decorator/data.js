import {Exception} from '../util/exception';
import {Utilities} from '../util/utilities';

/**
 * This {Decorator} class is used to check whether a property is present in the data before executing a method.
 */
export default class DataDecorator {

  /**
   * This function can be used as a decorator to intercept a method and, based on {this.data},
   * whether to execute it or not.
   *
   * @example @Decorators.Data.notEmpty()
   * @public
   */
  static notEmpty() {
    return function decorator(target, name, descriptor) {
      let oldValue = descriptor.value;

      descriptor.value = function () {
        if (Utilities.isObjectEmpty(this.data)) {
          return Promise.reject(new Exception('No data here, nothing to render!'));
        }
        return oldValue.apply(this, arguments);
      };

      return descriptor;
    };
  }

  /**
   * This function can be used as a decorator to intercept a method and, based on {this.data},
   * whether to execute it or not.
   *
   * @example @Decorators.Data.requires('canvas.graph')
   * @param {string} properties - the properties separated by a dot, e.g. 'data.property'
   * @public
   */
  static requires(properties) {
    return function decorator(target, name, descriptor) {
      let oldValue = descriptor.value;

      descriptor.value = function () {
        if (!DataDecorator._hasData(DataDecorator._getProperty(this.data, properties))) {
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
   * @param {string} properties - the properties separated by a dot, e.g. 'data.property'
   * @public
   */
  static enabled(properties) {
    return function decorator(target, name, descriptor) {
      let oldValue = descriptor.value;

      descriptor.value = function () {
        if (!DataDecorator._getProperty(this.data, properties)) {
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
   * @param {string} propertyPath - property separated by dot
   * @private
   */
  static _getProperty(obj, propertyPath) {

    let tmp = obj;

    if (tmp && propertyPath) {
      let properties = propertyPath.split('.');

      for (let property of properties) {
        if (!Object.prototype.hasOwnProperty.call(tmp, property)) {
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
  static _hasData(obj) {
    return obj && ((typeof obj === 'string' && obj) || (obj instanceof Array && obj.length) || (obj instanceof Object && Object.values(obj).length));
  }
}
