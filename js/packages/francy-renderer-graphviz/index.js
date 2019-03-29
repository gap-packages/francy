import { RenderingConfiguration } from 'francy-core';
import Canvas from './src/canvas';

export class GraphvizRenderer extends RenderingConfiguration {
    
  constructor() {
    super(Canvas, 'GraphViz-Renderer', false);
  }
}
