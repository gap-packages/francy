import Renderer from './renderer';

/* global d3 */

export default class AboutModal extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var modalId = 'AboutModalWindow';

    this.logger.debug(`Creating About Modal [${modalId}]...`);

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

    header.append('span').html(`About Francy v${json.version}`);

    var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

    content.append('span').text('Loaded Object:');
    content.append('pre').attr('class', 'francy').html(this.syntaxHighlight(JSON.stringify(json.canvas, null, 2)));
    content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');

    var footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', function() {
      modal.remove();
      holder.remove();
      overlay.remove();
      event.preventDefault();
      return false;
    });

    this.logger.debug(`Callback About updated [${modalId}]...`);

    return modal;
  }

  unrender() {}

  // credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
  syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(match) {
      var cls = 'number';
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
