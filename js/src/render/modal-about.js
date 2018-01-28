import Renderer from './renderer';
import { RegisterJupyterKeyboardEvents } from '../util/component';

/* global d3 */

export default class AboutModal extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {
    let self = this;

    let modalId = 'AboutModalWindow';

    this.logger.debug(`Creating About Modal [${modalId}]...`);

    // we want to overlay everything, hence 'body' must be used
    let overlay = d3.select('body').append('div')
      .attr('class', 'francy-overlay');
    let holder = d3.select('body').append('div')
      .attr('class', 'francy');
    this.element = holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    let header = form.append('div').attr('class', 'francy-modal-header');

    header.append('span').html(`About Francy v${this.data.version || 'N/A'}`);

    let content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

    content.append('span').text('Loaded Object:');
    content.append('pre').attr('class', 'francy').html(AboutModal.syntaxHighlight(JSON.stringify(this.data.canvas, null, 2)));
    content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

    let footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', () => {
      overlay.remove();
      self.element.remove();
      holder.remove();
      d3.event.preventDefault();
      return false;
    });

    // disable keyboard shortcuts when using this modal in Jupyter
    RegisterJupyterKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);

    this.logger.debug(`Callback About updated [${modalId}]...`);

    return this;
  }

  unrender() {}

  // credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
  static syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(match) {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        }
        else {
          cls = 'string';
        }
      }
      else if (/true|false/.test(match)) {
        cls = 'boolean';
      }
      else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }
}
