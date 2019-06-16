import { Utilities } from '../util/utilities';

/* global d3 */

/**
 * This {Decorator} class is used to show / hide a loader on {Francy}.
 */
export default class LoaderDecorator {

  /**
   * Default Constructor
   * Decorators.Loader.withContext(this).show(); Decorators.Loader.withContext(this).hide();
   */
  constructor() {
    /**
     * Stores the loader ID
     * @type {string}
     */
    this.id = Utilities.generateId();
    /**
     * Stores the loader context
     * @type {Object}
     */
    this.context = undefined;
    /**
     * Stores the loader element
     * @type {Object}
     */
    this.element = undefined;
  }

  /**
   * This method stores the context where the loader will run.
   * 
   * @public
   * @param {Object} ctx - the context where this function will run
   * @return {this} instance
   */
  withContext(ctx) {
    this.context = ctx;
    var loader = d3.select(`a.loader#Loader-${ctx.data ? ctx.data.canvas ? ctx.data.canvas.id : ctx.options.appendTo.id : ''}`);
    if (loader.node()) {
      this.element = loader;
    }
    return this;
  }

  /**
  * This method shows the loader on the screen.
  * 
  * @public
  */
  show() {
    if (this.element && this.element.data()[0]) {
      this.element.data()[0][this.id] = true;
      this.element.style('visibility', 'visible');
    }
    return this;
  }

  /**
  * This method hides the loader on the screen.
  * 
  * @public
  */
  hide() {
    if (this.element && this.element.data()[0]) {
      delete this.element.data()[0][this.id];
      // hide only if no more loaders present
      if (Object.values(this.element.data()[0]).length === 0) {
        this.element.style('visibility', 'hidden');
      }
    }
    return this;
  }
}
