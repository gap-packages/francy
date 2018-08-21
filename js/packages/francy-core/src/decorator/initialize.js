export default class InitializerDecorator {

  constructor() {
  }
  
  initialize() {
    return function (target, key, descriptor) {
      let oldValue = descriptor.value;
  
      descriptor.value = function() {
        this.initialize();
        return oldValue.apply(this, arguments);
      };
      return descriptor;
    };
  }
}
