import Modal from './modal';
import { RegisterJupyterKeyboardEvents, syntaxHighlight } from '../util/component';
import { initialize } from '../util/initialize-decorator';

/* global d3 */

export default class AboutModal extends Modal {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @initialize()
  render() {

    let modalId = 'AboutModalWindow';

    this.logger.debug(`Creating About Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    let header = form.append('div').attr('class', 'francy-modal-header');

    header.append('span').html(`About Francy v${this.data.version || 'N/A'}`);

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    content.append('span').text('Loaded Object:');
    content.append('pre').attr('class', 'francy').html(syntaxHighlight(JSON.stringify(this.data.canvas, null, 2)));
    content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

    let footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', () => { 
      d3.event.preventDefault(); 
      this.unrender.call(this); 
    });

    // disable keyboard shortcuts when using this modal in Jupyter
    RegisterJupyterKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

    this.logger.debug(`Callback About updated [${modalId}]...`);

    return this;
  }

}
