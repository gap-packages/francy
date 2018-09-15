import D3Component from './d3';
import MathJaxComponent from './mathjax';
import JupyterComponent from './jupyter';

/**
 * {Components} is a singleton and runs before everything else starting each component
 * 
 * @example Components.D3.isAvailable
 * @example Components.Jupyter.isAvailable
 * @example Components.MathJax.isAvailable
 * @typedef {Object} Components
 * @property {D3Component} D3 {Component} instance
 * @property {MathJaxComponent} MathJax {Component} instance
 * @property {JupyterComponent} Jupyter {Component} instance
 * @public
 */
export const Components = {
  D3: new D3Component(true, true),
  MathJax: new MathJaxComponent(false, true),
  Jupyter: new JupyterComponent(false, false)
};
