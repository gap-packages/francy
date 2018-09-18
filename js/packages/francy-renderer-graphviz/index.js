import Canvas from './src/canvas';

/* global Francy */

const name = 'GraphViz-Renderer';

// we're expecting Francy to be loaded already!
Francy.RenderingManager.register({name: name, renderer: Canvas});
