import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export class D3Renderer extends RenderingConfiguration {

  constructor(isDefault = true) {
    super(Canvas, 'D3-Renderer', isDefault);
  }
}
