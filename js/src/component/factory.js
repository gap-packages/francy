import D3Component from './d3';
import MathJaxComponent from './mathjax';
import JupyterComponent from './jupyter';

/* singleton */
export const Components = {
  D3: new D3Component(true, true),
  MathJax: new MathJaxComponent(false, true),
  Jupyter: new JupyterComponent(false, false)
};
