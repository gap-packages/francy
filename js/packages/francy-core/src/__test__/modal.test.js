import * as d3 from 'd3';
import { expect } from 'chai';
import json1 from './data/json1.json';
import RequiredArgsModal from '../render/modal/required';
import AboutModal from '../render/modal/about';
import { default as ConfigurationHandler, DefaultConfiguration } from '../util/configuration';
import { default as RenderingManagerHandler, RENDERING_EVENTS } from '../render/manager';

describe('Modal Windows', () => {

  var configuration = new ConfigurationHandler(DefaultConfiguration);
  var options = { appendTo: 'body', callbackHandler: console.log, configuration: configuration};
  var context = { configuration: configuration, renderingManager: new RenderingManagerHandler({configuration: configuration})};
  window.d3 = global.d3 = d3;
  window.about = new AboutModal(options, context);
  window.required = new RequiredArgsModal(options, context);

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', function () {
    expect(RequiredArgsModal).to.be.an('function');
    expect(window.required).to.be.an('object');
    //expect(AboutModal).to.be.an('function');
    //expect(window.about).to.be.an('object');
  });

  it('should build an about modal', function (done) {
    window.about.load(json1).render()
      .catch(error => done(error))
      .then(object => {
        setTimeout(function () {
          expect(object.element.node()).to.be.a('htmldivelement');
          done();
        });
      });
  });

  it('should build a required arguments modal', function (done) {
    window.required.load({ callback: { type: 'server', id: 'F1', trigger: 'click', knownArgs: [], requiredArgs: {} } }, true)
      .render().catch(error => done(error))
      .then(object => {
        setTimeout(function () {
          expect(object.element.node()).to.be.a('htmldivelement');
          done();
        });
      });
  });

});
