import AbstractShapeFactory from './shape/abstract-factory'
import AbstractBehaviorFactory from './behavior/abstract-factory'
import AbstractStructureFactory from './structure/abstract-factory'

export default class AbstractDrawFactory {

  constructor() {
    if (new.target === AbstractDrawFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(json, {verbose = false} = {}) {
    let object = undefined;
    switch (json.type) {
      case 'shape':
        object = AbstractShapeFactory(json.object, {verbose: verbose});
        break;
      case 'behavior':
        object = new AbstractBehaviorFactory(json.object, {verbose: verbose});
        break;
      case 'structure':
        object = new AbstractStructureFactory(json.object, {verbose: verbose});
        break;
      default:
        throw new TypeError('Oops, couldn\'t create an object for the specified type... Cannot proceed.');
        break;
    }
    return object;
  }

}
