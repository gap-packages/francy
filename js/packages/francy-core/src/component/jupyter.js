import { Logger } from '../util/logger';
import BaseComponent from './base';

/* global Jupyter */

export default class JupyterComponent extends BaseComponent {
  
  constructor(mandatory = false, delay = false) {
    super(mandatory, delay);
  }
  
  initialize() {
    if (!Jupyter) {
      throw new Error('This is not Jupyter is not imported and Francy won\'t work without it... please import D3 v5+ library.');
    }
    Logger.debug('Jupyter is available...');
  }
}
