import Circle from './circle'
import Rectangle from './rect'

export default class AbstractShapeFactory {

  constructor() {
    if (new.target === AbstractShapeFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(input, {verbose = false} = {}) {
    let object = undefined;
    switch (input.object.type) {
      case 'circle':
        object = new Circle(input.object, {verbose: verbose});
        break;
      case 'rect':
        object = new Rectangle(input.object, {verbose: verbose});
        break;
      default:
        throw new TypeError('Oops, couldn\'t create an object for the specified type... Cannot proceed.');
        break;
    }
    return object;
  }

}
