export function initialize() {
  return function (target, key, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
      this._initialize();
      return oldValue.apply(this, arguments);
    };
    return descriptor;
  };
}