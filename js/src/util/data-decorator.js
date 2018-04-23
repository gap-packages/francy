import { Exception } from './exception';

export function requires(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      if (!hasData(getProperty(this.data, props))) {
        return Promise.reject(new Exception(`No data here [${props}], nothing to render... continuing...`));
      }
      return oldValue.apply(this, arguments);
    };

    return descriptor;
  };
}

export function enabled(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      if (!getProperty(this.data, props)) {
        return Promise.reject(new Exception(`Property disabled [${props}], skip execution... continuing...`));
      }
      return oldValue.apply(this, arguments);
    };

    return descriptor;
  };
}

function getProperty(obj, propertyPath) {

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

function hasData(obj) {
  return obj && ((obj instanceof Array && obj.length) || (obj instanceof Object && Object.values(obj).length));
}
