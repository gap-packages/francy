import {Logger} from '../util/logger';

/* global Jupyter */

/**
 * This {Decorator} class is used to handle Jupyter functions.
 */
export default class JupyterDecorator {

  /**
   * This method registers elements on Jupyter keyboard_manager events
   *
   * @example Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
   *
   * @param {object[]} elements - an Array of elements to add on Jupyter keyboard_manager events
   * @public
   */
  static registerKeyboardEvents(elements) {
    // TODO check if this still works on JupyterLab
    // disable keyboard shortcuts in Jupyter for specific css classed elements
    if (!elements) return;
    try {
      elements.map(element => {
        Jupyter.keyboard_manager.register_events(element);
      });
    } catch (e) {
      if (e.name === 'ReferenceError') {
        Logger.info('It seems we\'re not running on Jupyter, cannot register events... continuing...');
      } else {
        Logger.warn(`We can't do anything about this! An error occurred [${e}]`);
      }
    }
  }

}