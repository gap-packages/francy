import Renderer from './renderer';

/* global d3 */

export default class Modal extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var self = this;

    var overlay = d3.select(this.options.appendTo).append('div').attr('class', 'francy overlay');
    var modal = d3.select(this.options.appendTo).append('div')
      .attr('id', json.callback.id)
      .attr('class', 'modal');

    var form = modal.append('form');

    var header = form.append('div').attr('class', 'header');

    header.append('span').html('Required arguments for&nbsp;').append('span').attr('style', 'font-weight: bold;').text(json.title);

    var content = form.append('div').attr('class', 'content');

    for (var arg of Object.values(json.callback.requiredArgs)) {
      content.append('label').attr('for', arg.id).text(arg.title);
      content.append('input').attr('id', arg.id)
        .attr('required', '')
        .attr('name', arg.id)
        .attr('type', arg.type)
        .attr('value', arg.value)
        .on('change', function() {
          json.callback.requiredArgs[this.id].value = this.value;
        })
        .on('input', this.onchange)
        .on('keyup', this.onchange)
        .on('paste', this.onchange);
      content.append('span').attr('class', 'validity');
      content.append('br');
    }

    var footer = form.append('div').attr('class', 'footer');

    footer.append('button').text('Ok').on('click', function() {
      if (form.node().checkValidity()) {
        self.options.callbackHandler(json);
        overlay.remove();
        modal.remove();
      }
    });
    footer.append('button').text('Cancel').on('click', function() {
      overlay.remove();
      modal.remove();
    });

    return modal;
  }
}
