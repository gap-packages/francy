import IDUtils from '../util/id-utils';
import Renderer from './renderer';

/* global d3, Jupyter */

export default class RequiredArgsModal extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var self = this;

    var modalId = IDUtils.getWindowId(json.callback.id);

    this.logger.debug(`Creating Callback Modal [${modalId}]...`);

    // we want to overlay everything, hence 'body' must be used
    var overlay = d3.select('body').append('div')
      .attr('class', 'francy-overlay');
    var holder = d3.select('body').append('div')
      .attr('class', 'francy');
    var modal = holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    var form = modal.append('form');

    var header = form.append('div').attr('class', 'francy-modal-header');

    var headerTitle = header.append('span').html('Required arguments&nbsp;');
    if (json.title) {
      headerTitle.append('span').attr('style', 'font-weight: bold;').text(`for ${json.title}`);
    }

    var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

    for (var arg of Object.values(json.callback.requiredArgs)) {
      var row = content.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
      var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg')
        .attr('required', '')
        .attr('name', arg.id)
        .attr('type', arg.type)
        .attr('value', arg.value)
        .on('change', function() { json.callback.requiredArgs[this.id].value = this.value; })
        .on('input', this.onchange)
        .on('keyup', this.onchange)
        .on('paste', this.onchange);
      if (arg.type === 'checkbox') {
        // well, a checkbox works this way so we need to initialize 
        // the value to false and update the value based on the checked 
        // property that triggers the onchange event
        arg.value = arg.value || false;
        input.attr('required', null)
          .attr('value', arg.value)
          .on('change', function() { json.callback.requiredArgs[this.id].value = this.value = this.checked; });
      }
      row.append('span').attr('class', 'validity');
    }

    var footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', function() {
      if (form.node().checkValidity()) {
        self.options.callbackHandler(json.callback);
        overlay.remove();
        modal.remove();
        holder.remove();
        event.preventDefault();
      }
      return false;
    });
    footer.append('button').text('Cancel').on('click', () => {
      event.preventDefault();
      overlay.remove();
      modal.remove();
      holder.remove();
      return false;
    });

    // disable keyboard shortcuts when using this modal in Jupyter
    try {
      Jupyter.keyboard_manager.register_events('.francy');
      Jupyter.keyboard_manager.register_events('.francy-arg');
      Jupyter.keyboard_manager.register_events('.francy-overlay');
      Jupyter.keyboard_manager.register_events('.francy-modal');
    }
    catch (e) {
      if (e.name == 'ReferenceError') {
        self.logger.debug('It seems we\'re not running on Jupyter...', e);
      }
    }

    content.selectAll('.francy-arg').node().focus();

    this.logger.debug(`Callback Modal updated [${modalId}]...`);

    return modal;
  }

  unrender() {}
}
