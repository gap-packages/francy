/**
 * This {Decorator} class is used to handle initialization methods before the execution of another method.
 */
export default class InitializerDecorator {

  /**
   * This function can be used as a decorator to intercept a method and execute the initialize method before.
   * 
   * @example \@Decorators.Initializer.initialize()
   * 
   * @public
   */
  static initialize() {
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
