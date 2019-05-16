import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export const RENDERER_NAME = 'Vis-Renderer';

export class VisRenderer extends RenderingConfiguration {
    
  constructor(isDefault = false) {
    super(Canvas, RENDERER_NAME, isDefault);
  }
}
