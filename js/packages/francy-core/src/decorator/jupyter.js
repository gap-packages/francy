import {Logger} from '../util/logger';

/* global Jupyter */

/**
 * This {Decorator} class is used to handle Jupyter functions.
 */
export default class JupyterDecorator {

  /**
   * Default constructor
   * @example Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
   */
  constructor() {
  }
  
  /**
   * This method register a class or classes on Jupyter keyboard_manager events
   * 
   * @param {string[]} classes - an Array of css classes to add on Jupyter keyboard_manager events
   * @public
   */
  registerKeyboardEvents(classes) {
    // disable keyboard shortcuts in Jupyter for specific css classed elements
    if (!classes) return;
    try {
      classes.map((c) => {
        Jupyter.keyboard_manager.register_events(c);
      });
    } catch (e) {
      if (e.name === 'ReferenceError') {
        Logger.info('It seems we\'re not running on Jupyter, cannot register events... continuing...');
      } else {
        Logger.warn(`We can't do anything about this! An error occurred: [${e}]`);
      }
    }
  }

}