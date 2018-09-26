import * as d3 from 'd3';
import { expect } from 'chai';
import './d3_wrapper';
import '../../index';
import undirected from './data/json1.json';

describe('Francy Renderer Object', function () {

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', function (done) {
    expect(window.Francy).to.be.an('object');
    done();
  });

  it('should reject the promise if no data is present', function (done) {
    window.Francy.render().catch(error => {
      expect(error).to.be.a('Error');
      expect(error.message).to.equal('No data here [canvas], nothing to render... continuing...');
      done();
    });
  });

  it('should fail to produce an undirected graph', function (done) {
    window.Francy.load(undirected).render().catch(error => {
      expect(error).to.be.a('Error');
      expect(error.message).to.equal('No renderers registered!');
      done();
    });
  });

});
