import * as d3 from 'd3';
import { expect } from 'chai';
import { FrancyApp } from '../../index';
import { Logger } from 'francy-core';
import undirected from '../../../francy-core/src/__test__/data/json1.json';

describe('Francy Renderer Object', function () {

  window.d3 = global.d3 = d3;
  var Francy = new FrancyApp({ appendTo: 'body', callbackHandler: Logger.info });

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', function (done) {
    expect(FrancyApp).to.be.an('function');
    done();
  });

  it('should reject the promise if no data is present', function (done) {
    Francy.render().catch(error => {
      expect(error).to.be.a('Error');
      //expect(error.message).to.equal('Nothing to render...');
      done();
    });
  });

  it('should fail to produce an undirected graph', function (done) {
    Francy.load(undirected).render().catch(error => {
      expect(error).to.be.a('Error');
      expect(error.message).to.equal('No renderers registered!');
      done();
    });
  });

});
