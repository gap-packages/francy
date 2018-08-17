import {default as FrancyApp} from './src/francy';

export const Francy = new FrancyApp({ appendTo: 'body', callbackHandler: console.log });

if (window) {
  if (!window.Francy) {
    window.Francy = Francy;
  }
}
