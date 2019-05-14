import chai, { expect } from 'chai';
chai.use(require('chai-string'));

import DOTLanguageHelper from '../util/dot-converter';
import graph from '../../node_modules/francy-core/src/__test__/data/json1.json';
import { ConfigurationHandler, DefaultConfiguration } from 'francy-core';
import * as d3 from 'd3';

describe('DOT Language utils', () => {

  window.d3 = global.d3 = d3;
  var configuration = new ConfigurationHandler({configuration: DefaultConfiguration});
  configuration.addProperty('graphvizRankdir', 'TB');

  beforeEach(() => {});

  it('should convert json to dot', () => {
    //expect(DOTLanguageHelper).to.be.an('function');
    
    let dotLanguageHelper = new DOTLanguageHelper({ configuration:configuration });
    let dot = dotLanguageHelper.load(graph).convert();
    chai.use(require('chai-string'));
    expect(dot).to.equalIgnoreSpaces('graph "Example undirected graph" {  graph [ rankdir="TB" ]\
        "F148" [ id="F148" style="filled" label="G" shape="circle" fillcolor="#963db3" ];\
        "F149" [ id="F149" style="filled" label="1" shape="circle" fillcolor="#bf3caf" ];\
        "F148" -- "F149" [ id="F150" ];\
    }');
  });

});
