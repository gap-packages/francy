import * as d3 from 'd3';

import * as vis from 'vis-network/standalone';
import * as graphviz from 'd3-graphviz'
import {Graphviz} from '@hpcc-js/wasm/graphviz'

import {FrancyApp} from 'francy';
import {D3Renderer} from 'francy-renderer-d3';
import {GraphvizRenderer} from 'francy-renderer-graphviz';
import {VisRenderer} from 'francy-renderer-vis';

window.d3 = d3;
window.vis = vis;
window.graphviz = graphviz;
window.FrancyApp = FrancyApp;
window.D3Renderer = D3Renderer;
window.GraphvizRenderer = GraphvizRenderer;
window.VisRenderer = VisRenderer;
