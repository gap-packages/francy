import { expect } from 'chai';
import { FrancyApp, Logger } from 'francy';
import { GraphvizRenderer } from '../../index';
import './d3_wrapper';

import undirected from './data/json1.json';
import * as viz_ignore from 'viz.js';

describe('Render Graph', () => {

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
