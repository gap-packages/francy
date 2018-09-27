import chai, { expect } from 'chai';
chai.use(require('chai-string'));

import DOTLanguageHelper from '../util/dot-converter';
import graph from './data/json1.json';
//import * as d3 from 'd3';

describe('DOT Language utils', () => {

  //window.d3 = global.d3 = d3;

  beforeEach(() => {});

  it('should convert json to dot', () => {
    //expect(DOTLanguageHelper).to.be.an('function');
    let dotLanguageHelper = new DOTLanguageHelper();
    let dot = dotLanguageHelper.load(graph).convert();
    chai.use(require('chai-string'));
    expect(dot).to.equalIgnoreSpaces('graph "Example undirected graph" { "F148" [  id="F148" style="filled"  label="G" shape="circle" ]; "F149" [  id="F149"  style="filled" label="1" shape="circle" ];  "F148" -- "F149" [ id="F150" style="filled" fillcolor="red" color="red" ]; }');
  });

});
