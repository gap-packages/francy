import Renderer from '../renderer';

/* global d3 */

/**
 * Implements basic methods for handling Modal windows.
 * 
 * @extends {Renderer}
 */
export default class Modal extends Renderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    /**
     * Stores the element
     * @type {object}
     */
    this.element = undefined;
    /**
     * Stores the overlay div
     * @type {object}
     */
    this.overlay = undefined;
    /**
     * Stores the parent div
     * @type {object}
     */
    this.holder = undefined;
  }

  /**
   * @override
   */
  initialize() {
    // we want to overlay everything, hence 'body' must be used
    this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
    this.holder = d3.select('body').append('div').attr('class', 'francy');
  }
  
  /**
   * Handles component unrender
   * 
   * @public
   */
  unrender() {
    this.overlay.remove();
    this.element.remove();
    this.holder.remove();
  }
  
  /**
   * Utility method to create an header
   * 
   * @private
   */
  _buildHeader(form, title) {
    let header = form.append('div').attr('class', 'francy-modal-header');

    let headerTitle = header.append('span').html(title);
    if (this.data.title) {
      headerTitle.append('span').text(`${this.data.title}`);
    }
  }
  
  /**
   * Utility method to create an header
   * 
   * @private
   */
  _buildFooter(form) {
    let footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', () => {
      if (form.node().checkValidity()) {
        d3.event.preventDefault();
        this.options.callbackHandler(this.data.callback);
        this.unrender.call(this);
      }
      return false;
    });
    footer.append('button').text('Cancel').on('click', () => { 
      d3.event.preventDefault(); 
      this.unrender.call(this); 
    });
  }

}
