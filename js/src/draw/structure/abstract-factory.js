import Group from './group'
import Canvas from './canvas'

export default class AbstractStructureFactory {

  constructor() {
    if (new.target === AbstractStructureFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(json, {verbose = false} = {}) {
    let object = undefined;
    switch (json.object.type) {
      case 'group':
        object = new Group(json, {verbose: verbose});
        break;
      case 'canvas':
        object = new Canvas(json, {verbose: verbose});
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
