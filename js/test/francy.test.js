import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import * as Francy from '../src/francy';
import * as d3 from 'd3';

describe("A simple window", () => {

  // TODO this has to be done in a superclass!
  global.window = new JSDOM('<html><header><meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4"></header><body><div id="francy"></div></body></html>');
  global.d3 = d3;

  beforeEach(() => {});

  it("should return an object", () => {
    expect(Francy).to.be.an('object');
  });

});
