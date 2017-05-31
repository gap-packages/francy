import AbstractDrawFactory from './draw/abstract-factory';
import AbstractPlotFactory from './plot/abstract-factory';
/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class MainFactory {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose
   * @param appendTo
   */
  constructor({verbose = false, appendTo = 'body'} = {}) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo
    };
  }

  /**
   * Will check whether Francy should draw or plot the object
   * @param json - the whole json object
   */
  handle(json) {
    console.debug(`Francy will now [${json.type}]`);
    let object;
    switch (json.method) {
      case 'draw':
        object = AbstractDrawFactory.build(json, this.options);
        break;
      case 'plot':
        object = AbstractPlotFactory.build(json, this.options);
        break;
      default:
        throw new Error('No implemented!');
        break;
    }
    return object;
  }
}
