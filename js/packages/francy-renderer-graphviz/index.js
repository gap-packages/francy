import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export const RENDERER_NAME = 'GraphViz-Renderer';

export class GraphvizRenderer extends RenderingConfiguration {
    
  constructor(isDefault = false) {
    super(Canvas, RENDERER_NAME, isDefault);
  }
}
