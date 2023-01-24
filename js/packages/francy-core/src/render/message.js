import Renderer from './renderer';
import CallbackHandler from "./callback";

/**
 * The {Message} holds the messages for the current Graphics.
 *
 * @access private
 */
export default class Message extends Renderer {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  async render() {
    // Here we cannot use the decorator: @Decorators.Data.requires('canvas.messages')
    // otherwise we cannot get rid of the messages from the screen when they get all removed from the server
    let self = this;
    let messages = Object.keys(this.data.canvas.messages).map((key) => {
      return {
        id: key,
        type: this.data.canvas.messages[key].type,
        title: this.data.canvas.messages[key].title,
        text: this.data.canvas.messages[key].text,
        callback: this.data.canvas.messages[key].callback
      };
    });

    let alertsId = `Messages-${this.data.canvas.id}`;
    this.element = d3.select(`#${alertsId}`);
    // check if the div is already present
    if (!this.element.node()) {
      this.element = this.parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
    }

    let message = this.element.selectAll('div.francy-alert').data(messages, d => d.id);
    let messageEnter = message.enter().append('div').attr('id', d => d.id)
      .attr('class', d => `francy-alert alert-${d.type}`).on('click', function (e, d) {
        new CallbackHandler(self.options, self.context).load(d).execute();
        d3.select(this).remove();
      });
    messageEnter.append('span').attr('class', 'strong').text(d => d.title);
    messageEnter.append('span').text(d => d.text);
    messageEnter.append('span').attr('class', 'strong closeme').style('display', 'none').text('x');

    messageEnter.merge(message);

    message.exit().remove();

    this.element.style('display', 'block');

    // render mathTypesetting
    this.handlePromise(this.mathTypesetting(this.element.node()));

    return this;
  }
}
