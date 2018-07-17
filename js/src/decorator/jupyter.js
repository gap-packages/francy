import Logger from '../util/logger';

/* global Jupyter */

export default class JupyterDecorator {

  constructor() {
    this.logger = new Logger();
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
        this.logger.info('It seems we\'re not running on Jupyter, cannot register events... continuing...');
      } else {
        this.logger.warn(`We can't do anything about this! An error occurred: [${e}]`);
      }
    }
  }

}