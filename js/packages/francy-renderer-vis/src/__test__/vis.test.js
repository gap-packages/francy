import { expect } from 'chai';
import { FrancyApp } from 'francy';
import { Logger } from 'francy-core';
import { VisRenderer } from '../../index';
import './d3_wrapper';

import undirected from '../../node_modules/francy-core/src/__test__/data/json1.json';
import * as vis from 'vis';

describe('Render Graph', () => {

  window.vis = global.vis = vis;
  var Francy = new FrancyApp({ appendTo: 'body', callbackHandler: Logger.info });
  Francy.RenderingManager.register(new VisRenderer());

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
