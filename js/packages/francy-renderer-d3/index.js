import { RenderingConfiguration } from 'francy-core';
import Canvas from './src/canvas';

export default class D3Renderer extends RenderingConfiguration {

  constructor() {
    super(Canvas, 'D3-Renderer', true);
  }
}
