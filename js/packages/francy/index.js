import { default as FrancyApp } from './src/francy';
import { Logger } from 'francy-core';

/**
 * The {Francy} singleton
 * @public
 */
export const Francy = new FrancyApp({ appendTo: 'body', callbackHandler: Logger.info });

if (window) {
  if (!window.Francy) {
    Logger.debug('Attaching Francy instance to window object...');
    window.Francy = Francy;
  }
}

if (global) {
  if (!global.Francy) {
    Logger.debug('Attaching Francy instance to global object...');
    global.Francy = Francy;
  }
}
