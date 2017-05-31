import JsonUtils from "./util/json-utils";
import Draw from "./handler/draw";
import Plot from "./handler/plot";

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class Francy {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose prints extra log information to console.log, default false
   * @param appendTo where the generated html/svg components will be attached to, default body
   * @param menuActionHandler this handler will be used to invoke actions from the menu, default console.log
   * @param changeTrackerHandler this handler will be used to report any changes detected by the ChangeTracker, default console.log
   */
  constructor({verbose = false, appendTo = 'body', menuActionHandler = console.log, changeTrackerHandler = console.log} = {}) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      changeTrackerHandler: changeTrackerHandler,
      menuActionHandler: menuActionHandler
    };
    if (!jQuery) {
      throw new Error('JQuery is not imported! Francy won\'t work without it... please import JQuery v3.1.1+.');
    }
    if (!jQuery.ui) {
      throw new Error('JQueryUI is not imported! Francy won\'t work without it... please import JQueryUI v1.12.1+.');
    }
    if (typeof _ !== 'function') {
      throw new Error('UnderscoreJS is not imported! Francy won\'t work without it... please import UnderscoreJS v1.8.3+.');
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.draw = new Draw(this.options);
    this.plot = new Plot(this.options);
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */
  handle(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.info(`Francy will [${json.agent.method}] the following object: `, json);
      switch (json.agent.method) {
        case 'draw':
          return this.draw.handle(json);
          break;
        case 'plot':
          return this.plot.handle(json);
          break;
        default:
          throw new Error(`[${json.agent.method}] is not a valid method for Francy! Valid methods are: [draw, plot].`);
          break;
      }
    }
  }
}

exports.Francy = window.Francy = Francy;
