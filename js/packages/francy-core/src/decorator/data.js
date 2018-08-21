import {Exception} from '../util/exception';

export default class DataDecorator {

  constructor() {
  }

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

  _hasData(obj) {
    return obj && ((obj instanceof Array && obj.length) || (obj instanceof Object && Object.values(obj).length));
  }
}