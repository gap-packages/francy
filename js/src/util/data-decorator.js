export function requires(props) {
  return function decorator(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      if (!hasData(getProperty(this.data, props))) {
        this.logger.debug(`No data here [${props}], nothing to render... continuing...`);
        return;
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
      }
      else {
        tmp = tmp[property];
      }
    }
  }

  return tmp;
}

function hasData(obj) {
  return obj && ((obj instanceof Array && obj.length) || (obj instanceof Object && Object.values(obj).length));
}
