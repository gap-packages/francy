import Renderer from './renderer';

/* global d3 */

export default class Message extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = this.options.appendTo;
    var messages = json.canvas.messages;

    // just ignore rendering if no messages are present
    if (!messages || !Object.values(messages).length) {
      //this.logger.debug('Nothing to render here... continuing...');
      return;
    }

    messages = Object.keys(json.canvas.messages).map((d) => { return { id: d, type: messages[d].type, title: messages[d].title, text: messages[d].text }; });

    var alertsId = `A${json.canvas.id}`;
    var alerts = parent.select(`div.francy-alerts#${alertsId}`);
    // check if the window is already present
    if (!alerts.node()) {
      alerts = parent.append('div').attr('class', 'francy-alerts').attr('id', alertsId);
    }

    messages.map(function(d) {
      // only render new ones
      if (!alerts.select(`div#${d.id}`).node()) {
        var row = alerts.append('div').attr('id', d.id)
          .attr('class', `francy-alert alert-${d.type}`).on('click', function() {
            d3.select(this).style('display', 'none');
          });
        row.append('span').attr('class', 'strong').text(d.title);
        row.append('span').text(d.text);
        row.append('span').attr('class', 'strong').style('display', 'none').text("x");
      }
    });

    alerts.style('display', 'block');

    return alerts;
  }

  unrender() {}
}
