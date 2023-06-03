import * as d3 from 'd3';
import {expect} from 'chai';
import {FrancyApp} from 'francy';
import {Logger} from 'francy-core';
import {GraphvizRenderer} from '../../index';
import {Graphviz} from '@hpcc-js/wasm/graphviz'

import undirected from '../../../francy-core/src/__test__/data/json1.json';

describe('Render Graph', () => {

  window.d3 = global.d3 = d3;
  window.graphviz = global.graphviz = Graphviz;

  var Francy = new FrancyApp({appendTo: 'body', callbackHandler: Logger.info});
  Francy.RenderingManager.register(new GraphvizRenderer());

  beforeEach(() => {
  });

  it('should render an undirected graph', (done) => {
    Francy.load(undirected).render()
      .catch(error => done(error))
      .then(object => {
        expect(object).to.be.a('htmldivelement');
        done();
      });
  });

});
