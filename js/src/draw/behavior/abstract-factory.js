import DragBehavior from './drag'
import LinkBehavior from './link'

export default class AbstractBehaviorFactory {

  constructor() {
    if (new.target === AbstractBehaviorFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(json, {verbose = false} = {}) {
    let object = undefined;
    switch (json.object.type) {
      case 'drag':
        object = new DragBehavior(json, {verbose: verbose});
        break;
      case 'link':
        object = new LinkBehavior(json, {verbose: verbose});
        break;
      default:
        throw new TypeError('Oops, couldn\'t create the behavior for the specified type... Cannot proceed.');
        break;
    }
    switch (json.action) {
      case 'remove':
        object.remove();
        break;
      default:
        object.apply();
        break;
    }
    return object;
  }

}
