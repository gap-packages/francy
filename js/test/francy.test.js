import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Francy from '../src/francy';
import * as d3 from 'd3';

describe("A simple window", () => {

  global.window = new JSDOM('<html><header><meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4"></header><body><div id="francy"></div></body></html>');
  global.d3 = d3;
  global.francy = new Francy({ verbose: true, callbackHandler: console.log, appendTo: 'body' });

  beforeEach(() => {});

  it("should return an object", () => {
    expect(global.francy).to.be.an('object');
  });

});
