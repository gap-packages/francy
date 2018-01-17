import Renderer from './renderer';
import { requires } from '../decorator/data';

/* global d3 */

export default class Message extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.messages')
  render() {
    var parent = this.options.appendTo.element;
    var self = this;

    var messages = Object.keys(this.data.canvas.messages).map((key) => {
      return {
        id: key,
        type: this.data.canvas.messages[key].type,
        title: this.data.canvas.messages[key].title,
        text: this.data.canvas.messages[key].text
      };
    });

    var alertsId = `Messages-${this.data.canvas.id}`;
    this.element = d3.select(`#${alertsId}`);
    // check if the div is already present
    if (!this.element.node()) {
      this.element = parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
    }

    // FIXME this shall use the update pattern!
    messages.map(function(d) {
      // only render new ones
      if (!self.element.select(`div#${d.id}`).node()) {
        var row = self.element.append('div').attr('id', d.id)
          .attr('class', `francy-alert alert-${d.type}`).on('click', function() {
            d3.select(this).style('display', 'none');
          });
        row.append('span').attr('class', 'strong').text(d.title);
        row.append('span').text(d.text);
        row.append('span').attr('class', 'strong').style('display', 'none').text("x");
      }
    });

    this.element.style('display', 'block');

    return this;
  }

  unrender() {}
}
