import { expect } from 'chai';
import * as d3 from 'd3';
import { FrancyApp } from 'francy';
import { Logger } from 'francy-core';
import { D3Renderer } from '../../index';
import undirected from '../../../francy-core/src/__test__/data/json1.json';
import directed from '../../../francy-core/src/__test__/data/json2.json';
import tree from '../../../francy-core/src/__test__/data/json3.json';
import bar from '../../../francy-core/src/__test__/data/json4.json';
import line from '../../../francy-core/src/__test__/data/json5.json';
import scatter from '../../../francy-core/src/__test__/data/json6.json';


describe('Francy Renderer Object', function() {

  window.d3 = global.d3 = d3;
  var Francy = new FrancyApp({ appendTo: 'body', callbackHandler: Logger.info });
  Francy.RenderingManager.register(new D3Renderer());
  
  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should produce an undirected graph', function(done) {
     Francy.load(undirected).render()
     .catch(error => done(error))
     .then(object => {
        expect(object).to.be.a('htmldivelement');
        
        setTimeout(function() {
          expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
          expect(d3.select(object).selectAll('.francy-node').size()).to.be.equals(2);
          expect(d3.select(object).selectAll('.francy-link').size()).to.be.equals(1);
          done();
        }, 0);
      
    });
  });

  it('should produce a directed graph', function(done) {
     Francy.load(directed).render()
     .catch(error => done(error))
     .then(object => {
        expect(object).to.be.a('htmldivelement');
        
        setTimeout(function() {
          expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
          expect(d3.select(object).selectAll('.francy-node').size()).to.be.equals(2);
          expect(d3.select(object).selectAll('.francy-link').size()).to.be.equals(1);
          done();
        }, 0);
      
    });
  });
  
  it('should produce a tree graph', function(done) {
     Francy.load(tree).render()
     .catch(error => done(error))
     .then(object => {
      expect(object).to.be.a('htmldivelement');
      
      setTimeout(function() {
        expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-node').size()).to.be.equals(4);
        expect(d3.select(object).selectAll('.francy-edge').size()).to.be.equals(3);
        done();
      }, 0);
      
    });
  });
  
  it('should produce a bar chart', function(done) {
     Francy.load(bar).render()
     .catch(error => done(error))
     .then(object => {
      expect(object).to.be.a('htmldivelement');
      
      setTimeout(function() {
        expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-bars').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-bars').selectAll('rect').size()).to.be.equals(15);
        expect(d3.select(object).selectAll('.francy-legend').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-x-axis').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-y-axis').size()).to.be.equals(1);
        done();
      }, 0);
      
    });
  });


  it('should produce a line chart', function(done) {
     Francy.load(line).render()
     .catch(error => done(error))
     .then(object => {
      expect(object).to.be.a('htmldivelement');
      
      setTimeout(function() {
        expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-lines').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-lines').selectAll('path').size()).to.be.equals(3);
        expect(d3.select(object).selectAll('.francy-legend').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-x-axis').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-y-axis').size()).to.be.equals(1);
        done();
      }, 0);
      
    });
  });  
    
  it('should produce a scatter chart', function(done) {
     Francy.load(scatter).render()
     .catch(error => done(error))
     .then(object => {
      expect(object).to.be.a('htmldivelement');
      
      setTimeout(function() {
        expect(d3.select(object).selectAll('svg').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-scatters').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-scatters').selectAll('circle').size()).to.be.equals(15);
        expect(d3.select(object).selectAll('.francy-legend').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-x-axis').size()).to.be.equals(1);
        expect(d3.select(object).selectAll('.francy-y-axis').size()).to.be.equals(1);
        done();
      }, 0);
      
    });
  });

});
