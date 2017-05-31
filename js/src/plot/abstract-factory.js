

export default class AbstractPlotFactory {

  constructor() {
    if (new.target === AbstractPlotFactory) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
  }

  static build(json, {verbose = false} = {}) {
    let object = undefined;
    switch (json.type) {
      case 'bar':
        object = null;
        break;
      case 'line':
        object = null;
        break;
      default:
        throw new TypeError('Oops, couldn\'t create an object for the specified type... Cannot proceed.');
        break;
    }
    return object;
  }

}
