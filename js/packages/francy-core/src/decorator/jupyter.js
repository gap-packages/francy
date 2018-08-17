import {Logger} from '../util/logger';

/* global Jupyter */

export default class JupyterDecorator {

  constructor() {
  }
  
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