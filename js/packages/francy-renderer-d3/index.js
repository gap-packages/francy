import Canvas from './src/canvas';
import { RenderingConfiguration } from 'francy-core';

export const RENDERER_NAME = 'D3-Renderer';

export class D3Renderer extends RenderingConfiguration {

  constructor(isDefault = true) {
    super(Canvas, RENDERER_NAME, isDefault);
  }
}
