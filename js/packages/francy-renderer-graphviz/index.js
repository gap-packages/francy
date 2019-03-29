import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export class GraphvizRenderer extends RenderingConfiguration {
    
  constructor() {
    super(Canvas, 'GraphViz-Renderer', false);
  }
}
