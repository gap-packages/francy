import D3Component from './d3';
import JupyterComponent from './jupyter';
import MathJaxComponent from './mathjax';

/**
 * {Components} is a singleton and runs before everything else starting each component
 * 
 * @example Components.D3.isAvailable
 * @example Components.Jupyter.isAvailable
 * @example Components.MathJax.isAvailable
 * @typedef {Object} Components
 * @property {D3Component} D3 {Component} instance
 * @property {JupyterComponent} Jupyter {Component} instance
 * @property {MathJaxComponent} MathJax {Component} instance
 * @public
 */
export const Components = {
  D3: new D3Component(false, false, 3),
  Jupyter: new JupyterComponent(false, false, 1),
  MathJax: new MathJaxComponent(false, false, 5)
};
