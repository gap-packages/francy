/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'francy[Window|Canvas|Object]*numerical id*'
 */
export default class Logger {

  constructor({verbose = false} = {}) {
    this.verbose = verbose;
  }

  debug(message) {
    if (this.verbose) {
      console.debug(message);
    }
  }

  info(message) {
    console.info(message);
  }

  error(message, error) {
    console.error(message, error);
  }
}
