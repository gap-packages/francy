import Renderer from './renderer';

/* global d3 */

export default class Message extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.alerts = this.SVGParent.select('foreignObject.francy-alerts-holder');
    // check if the window is already present
    if (!this.alerts.node()) {
      this.alerts = this.SVGParent.append('foreignObject').attr('class', 'francy-alerts-holder')
        .attr('transform', 'translate(10,55)').append('xhtml:div').attr('class', 'francy-alerts');
    }
    else {
      this.alerts = this.alerts.select('div.francy-alerts');
    }
  }

  render(messages) {

    // just ignore rendering if no messages are present
    if (!messages || !Object.values(messages).length) {
      //this.logger.debug('Nothing to render here... continuing...');
      return;
    }

    var self = this;

    Object.keys(messages).map(function(id) {
      // only render new ones
      if (!self.alerts.select(`div#${id}`).node()) {
        var row = self.alerts.append('div').attr('id', id)
          .attr('class', `francy-alert alert-${messages[id].type}`).on('click', function() {
            d3.select(this).style('display', 'none');
          });
        row.append('span').attr('class', 'strong').text(messages[id].title);
        row.append('span').text(messages[id].text);
        row.append('span').attr('class', 'strong').style('display', 'none').text("x");
      }
    });

    this.alerts.style('display', 'block');
  }

  unrender() {}
}
