import DragBehavior from './drag'
import LinkBehavior from './link'

export default class AbstractBehaviorFactory {

  constructor() {
    if (new.target === AbstractBehaviorFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(input, {verbose = false} = {}) {
    let object = undefined;
    switch (input.object.type) {
      case 'drag':
        object = new DragBehavior(input, {verbose: verbose});
        break;
      case 'link':
        object = new LinkBehavior(input, {verbose: verbose});
        break;
      default:
        throw new TypeError('Oops, couldn\'t create the behavior for the specified type... Cannot proceed.');
        break;
    }
    return object;
  }

}
