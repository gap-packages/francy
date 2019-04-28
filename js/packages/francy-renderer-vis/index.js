import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export class VisRenderer extends RenderingConfiguration {
    
  constructor(isDefault = false) {
    super(Canvas, 'Vis-Renderer', isDefault);
  }
}
