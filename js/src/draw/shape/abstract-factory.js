import Circle from './circle'
import Rectangle from './rect'

export default class AbstractShapeFactory {

  constructor() {
    if (new.target === AbstractShapeFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(json, {verbose = false} = {}) {
    let object = undefined;
    switch (json.object.type) {
      case 'circle':
        object = new Circle(json.object, {verbose: verbose});
        break;
      case 'rect':
        object = new Rectangle(json.object, {verbose: verbose});
        break;
      default:
        throw new TypeError('Oops, couldn\'t create an object for the specified type... Cannot proceed.');
        break;
    }
    return object;
  }

}
