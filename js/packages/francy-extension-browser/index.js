const d3 = await Promise.all([
  import('d3-selection'),
  import('d3-shape'),
  import('d3-zoom'),
  import('d3-path'),
  import('d3-color'),
  import('d3-scale'),
  import('d3-scale-chromatic'),
  import('d3-interpolate'),
  import('d3-drag'),
  import('d3-array'),
  import('d3-force'),
  import('d3-hierarchy'),
  import('d3-axis'),
  import('d3-transition'),
  import('d3-graphviz')
]).then(d3 => Object.assign({}, ...d3));

import * as vis from 'vis-network/standalone';
import {Graphviz} from '@hpcc-js/wasm/graphviz'

import {FrancyApp} from 'francy';
import {D3Renderer} from 'francy-renderer-d3';
import {GraphvizRenderer} from 'francy-renderer-graphviz';
import {VisRenderer} from 'francy-renderer-vis';

window.d3 = d3
window.vis = vis;
window.graphviz = Graphviz
