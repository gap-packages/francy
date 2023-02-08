import { expect } from 'chai';
import { FrancyApp } from 'francy';
import { Logger } from 'francy-core';
import { GraphvizRenderer } from '../../index';
import * as d3 from 'd3';

import undirected from '../../../francy-core/src/__test__/data/json1.json';
import Graphviz from '@hpcc-js/wasm/graphviz'

describe('Render Graph', () => {

  window.d3 = global.d3 = d3;

  var Francy = new FrancyApp({ appendTo: 'body', callbackHandler: Logger.info });
  Francy.RenderingManager.register(new GraphvizRenderer());

  beforeEach(() => {});

  it('should render an undirected graph', (done) => {
    Francy.load(undirected).render()
     .catch(error => done(error))
     .then(object => {
      expect(object).to.be.a('htmldivelement');
      done();
    });
  });

});
