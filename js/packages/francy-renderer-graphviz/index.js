import { RenderingConfiguration } from 'francy-core';
import Canvas from './src/canvas';

export default class GraphizRenderer extends RenderingConfiguration {
    
  constructor() {
    super(Canvas, 'GraphViz-Renderer', false);
  }
}
