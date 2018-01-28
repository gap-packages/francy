import Renderer from './renderer';
import { requires } from '../decorator/data';

/* global d3 */

export default class Message extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.messages')
  render() {
    let parent = this.options.appendTo.element;

    let messages = Object.keys(this.data.canvas.messages).map((key) => {
      return {
        id: key,
        type: this.data.canvas.messages[key].type,
        title: this.data.canvas.messages[key].title,
        text: this.data.canvas.messages[key].text
      };
    });

    let alertsId = `Messages-${this.data.canvas.id}`;
    this.element = d3.select(`#${alertsId}`);
    // check if the div is already present
    if (!this.element.node()) {
      this.element = parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
    }

    let message = this.element.selectAll('div.francy-alert').data(messages, d => d.id);
    let messageEnter = message.enter().append('div').attr('id', d => d.id)
      .attr('class', d => `francy-alert alert-${d.type}`).on('click', function () {
        d3.select(this).style('display', 'none');
      });
    messageEnter.append('span').attr('class', 'strong').text(d => d.title);
    messageEnter.append('span').text(d => d.text);
    messageEnter.append('span').attr('class', 'strong').style('display', 'none').text("x");

    messageEnter.merge(message);

    message.exit().remove();

    this.element.style('display', 'block');

    return this;
  }

  unrender() {}
}
