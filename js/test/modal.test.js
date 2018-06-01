import * as d3 from 'd3';
import { expect } from 'chai';
import json1 from './data/json1.json';
import RequiredArgsModal  from '../src/render/modal-required';
import AboutModal  from '../src/render/modal-about';

describe("Modal Windows", () => {

  window.d3 = global.d3 = d3;

  beforeEach(() => {});

  it("should return an object", () => {
    expect(RequiredArgsModal).to.be.an('function');
    expect(new RequiredArgsModal({ verbose: false, appendTo: 'body', callbackHandler: console.log })).to.be.an('object');
    expect(AboutModal).to.be.an('function');
    expect(new AboutModal({ verbose: false, appendTo: 'body', callbackHandler: console.log })).to.be.an('object');
  });
  
  it("should build the about modal", () => {
    let about = new AboutModal({ verbose: false, appendTo: 'body', callbackHandler: console.log });
    let object = about.load(json1).render();
    //expect(object.element.node()).to.be.a('htmldivelement');
  });
  
  it("should build a required args modal", () => {
    let required = new RequiredArgsModal({ verbose: false, appendTo: 'body', callbackHandler: console.log });
    let object = required.load({callback: {
              type: "server",
              id: "F11",
              trigger: "click",
              knownArgs: [],
              requiredArgs: {}
              }}, true).render();
    // FIXME because is async at this momnt theres no SVG
    //expect(object.element.node()).to.be.a('htmldivelement');
  });


});
