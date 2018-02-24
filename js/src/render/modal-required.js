import Modal from './modal';
import { RegisterJupyterKeyboardEvents } from '../util/component';
import { initialize } from '../util/initialize-decorator';

/* global d3 */

export default class RequiredArgsModal extends Modal {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @initialize()
  render() {
    let self = this;

    let modalId = this.data.callback.id;

    this.logger.debug(`Creating Callback Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    let header = form.append('div').attr('class', 'francy-modal-header');

    let headerTitle = header.append('span').html('Required arguments&nbsp;');
    if (this.data.title) {
      headerTitle.append('span').attr('style', 'font-weight: bold;').text(`for ${this.data.title}`);
    }

    let content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

    for (let arg of Object.values(this.data.callback.requiredArgs)) {
      let row = content.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);
      let input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('id', arg.id).attr('class', 'francy-arg')
        .attr('required', '')
        .attr('name', arg.id)
        .attr('type', arg.type)
        .attr('value', arg.value)
        .on('change', function () {
          self.data.callback.requiredArgs[this.id].value = this.value;
        })
        .on('input', this.onchange)
        .on('keyup', this.onchange)
        .on('paste', this.onchange);
      // wait, if it is boolean we create a checkbox
      if (arg.type === 'boolean') {
        // well, a checkbox works this way so we need to initialize 
        // the value to false and update the value based on the checked 
        // property that triggers the onchange event
        arg.value = arg.value || false;
        input.attr('type', 'checkbox').attr('required', null)
          .attr('value', arg.value)
          .on('change', function() { self.data.callback.requiredArgs[this.id].value = this.value = this.checked; });
      }
      row.append('span').attr('class', 'validity');
    }

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

    // disable keyboard shortcuts when using this modal in Jupyter
    RegisterJupyterKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

    let inputElement = content.selectAll('.francy-arg').node();
    if (inputElement) {
      inputElement.focus();
    }

    this.logger.debug(`Callback Modal updated [${modalId}]...`);

    return this;
  }
}
