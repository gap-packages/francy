import Renderer from '../renderer';

/* global d3 */

export default class Modal extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.overlay = undefined;
    this.holder = undefined;
  }
  
  _initialize() {
    // we want to overlay everything, hence 'body' must be used
    this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
    this.holder = d3.select('body').append('div').attr('class', 'francy');
  }
  
  unrender() {
    this.overlay.remove();
    this.element.remove();
    this.holder.remove();
  }
  
  _buildHeader(form, title) {
    let header = form.append('div').attr('class', 'francy-modal-header');

    let headerTitle = header.append('span').html(title);
    if (this.data.title) {
      headerTitle.append('span').attr('style', 'font-weight: bold;').text(`for ${this.data.title}`);
    }
  }
  
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
