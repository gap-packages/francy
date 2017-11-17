import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Francy from '../src/francy';
import * as d3 from 'd3';

describe("A simple window", () => {
  let francy;

  // TODO this has to be done in a superclass!
  global.window = new JSDOM('<html><header><meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4"></header><body></body></html>');
  global.d3 = d3;

  beforeEach(() => {});

  it("should return an object", () => {
    francy = new Francy({ verbose: true, appendTo: '#francy', callbackHandler: console.log });
    expect(francy).to.be.an('object');
  });

});
