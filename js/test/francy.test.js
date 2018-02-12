import 'jsdom-global/register';
import * as d3 from 'd3';
import { expect } from 'chai';
import Francy from '../src/francy';
import json1 from './data/json1.json';
import json2 from './data/json2.json';
import json3 from './data/json3.json';
import json4 from './data/json4.json';
import json5 from './data/json5.json';
import json6 from './data/json6.json';
import json7 from './data/json7.json';
import json8 from './data/json8.json';
import json9 from './data/json9.json';
import json10 from './data/json10.json';
import json11 from './data/json11.json';

describe("A simple window", () => {
  
  window.d3 = global.d3 = d3;

  window.francy = new Francy({ verbose: true, callbackHandler: console.log, appendTo: 'body' });

  beforeEach(() => {});

  it("should return an object", () => {
    expect(window.francy).to.be.an('object');
  });
  
  it("should return undefined if no data is present", () => {
    // TODO this should be a test for each type and the content dhould be tested!
    expect(window.francy.render()).to.be.an('undefined');
  });
  
  it("should load a json", () => {
    // TODO this should be a test for each type and the content should be tested!
    // FIXME JSDOM does not support SVG, so cannot count number of nodes etc :/
    let object = window.francy.load(json1).render();
    expect(object).to.be.a('htmldivelement');
    //expect(window.d3.select(object).selectAll('.francy-node').size()).to.be.equals(6);
    expect(window.d3.select(object).selectAll('svg').size()).to.be.equals(1);
    expect(window.francy.load(json2).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json3).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json4).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json5).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json6).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json7).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json8).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json9).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json10).render()).to.be.a('htmldivelement');
    expect(window.francy.load(json11).render()).to.be.a('htmldivelement');
  });

});
