import * as d3 from 'd3';
import { expect } from 'chai';
import Francy from '../src/francy';
import json1 from './data/json1.json';
import json3 from './data/json3.json';
import json10 from './data/json10.json';

describe("Francy Renderer Object", () => {
  
  window.d3 = global.d3 = d3;
  window.MathJax = {
      Hub: {
        Config: c=>c,
        Register: {
          MessageHook: c=>c
        },
        Configured: () => {},
        Queue: c=>c
      }
  };

  window.francy = new Francy({ verbose: true, callbackHandler: console.log, appendTo: 'body' });

  beforeEach(() => {});

  it("should return an object", () => {
    expect(window.francy).to.be.an('object');
  });
  
  it("should reject the promise if no data is present", async () => {
    await window.francy.render().catch(error => {
      expect(error).to.be.a('Error');
      expect(error.message).to.equal('No data here [canvas], nothing to render... continuing...');
    });
  });
  
  it("should produce an undirected graph", async () => {
    await window.francy.load(json1).render().then(object => {
      expect(object).to.be.a('htmldivelement');
      expect(window.d3.select(object).selectAll('svg').size()).to.be.equals(1);
      expect(window.d3.select(object).selectAll('.francy-node').size()).to.be.equals(3);
      expect(window.d3.select(object).selectAll('.francy-link').size()).to.be.equals(3);
    });
  });

  it("should produce a tree graph", async () => {
    await window.francy.load(json10).render().then(object => {
      expect(object).to.be.a('htmldivelement');
      expect(window.d3.select(object).selectAll('svg').size()).to.be.equals(1);
      expect(window.d3.select(object).selectAll('.francy-node').size()).to.be.equals(8);
      expect(window.d3.select(object).selectAll('.francy-link').size()).to.be.equals(0);
    });
  });

});
