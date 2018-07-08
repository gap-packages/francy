import * as d3 from 'd3';
import { expect } from 'chai';
import json1 from './data/json1.json';
import RequiredArgsModal from '../src/render/modal-required';
import AboutModal from '../src/render/modal-about';

describe('Modal Windows', () => {
  
  var options = { verbose: false, appendTo: 'body', callbackHandler: console.log };
  window.d3 = global.d3 = d3;
  window.about = new AboutModal(options);
  window.required = new RequiredArgsModal(options);

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', function() {
    expect(RequiredArgsModal).to.be.an('function');
    expect(window.required).to.be.an('object');
    expect(AboutModal).to.be.an('function');
    expect(window.about).to.be.an('object');
  });

  it('should build an about modal', function(done) {
    window.about.load(json1).render()
      .catch(error => done(error))
      .then(object => {
        setTimeout(function() {
          expect(object.element.node()).to.be.a('htmldivelement');
          done();
        });
      });
  });

  it('should build a required arguments modal', function(done) {
    window.required.load({callback: {type: 'server', id: 'F1', trigger: 'click', knownArgs: [], requiredArgs: {}}}, true)
      .render().catch(error => done(error))
      .then(object => {
        setTimeout(function() {
          expect(object.element.node()).to.be.a('htmldivelement');
          done();
        });
      });
  });

});
