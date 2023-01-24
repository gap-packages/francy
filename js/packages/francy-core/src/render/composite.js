import Renderer from './renderer';

/**
 * This class is a composite of multiple renderers.
 * Being a {Renderer} class it provides a {Composite#add} method
 * that allows the addition of child {Renderer}s that will be rendered within this renderer, being this their parent.
 *
 * @extends {Renderer]
 */
export default class Composite extends Renderer {

  /**
   * Base constructor
   *
   * @typedef {Object} options
   * @property {String} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @property {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
    if (new.target === Composite) {
      throw new TypeError('Cannot instantiate [Composite] classes directly!');
    }
    /**
     * Stores renderers into this array
     * @type {Renderer[]}
     */
    this.renderers = [];
  }

  /**
   * This method adds a {Renderer} instance for rendering all children
   *
   * @param {Renderer} renderer - a child renderer
   * @returns {object} this instance
   * @public
   */
  addChild(renderer) {
    if (renderer) {
      this.renderers.push(renderer);
    }
    return this;
  }

  /**
   * This method removes all {Renderer} instances to be rendered.
   *
   * @returns {object} this instance
   * @public
   */
  removeChildren() {
    this.renderers = [];
    return this;
  }

  /**
   * This method must be called manually at some point on the {Renderer.render} method.
   */
  async renderChildren() {
    // render other components
    for (let renderer of this.renderers) {
      await this.handlePromise(renderer.settings({appendTo: this}).load(this.data).render());
    }
  }
}
