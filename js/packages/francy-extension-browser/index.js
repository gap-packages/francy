import { FrancyApp, ConfigurationHandler, DefaultConfiguration } from 'francy';
import D3Renderer from 'francy-renderer-d3';
import GraphizRenderer from 'francy-renderer-graphviz';

/* eslint-disable no-console */
// instantiate Francy

window.Francy = new FrancyApp({ appendTo: 'body', callbackHandler: console.log, configuration: new ConfigurationHandler({configuration: DefaultConfiguration}) });
// register available renderers
window.Francy.RenderingManager.register(new D3Renderer().getConfiguration());
window.Francy.RenderingManager.register(new GraphizRenderer().getConfiguration());
/* eslint-enable no-console */