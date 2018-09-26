import { expect } from 'chai';
import DOTLanguageHelper from '../util/dot-converter';
import graph from './data/json1.json';
import * as d3 from 'd3';

describe('Json utils', () => {

  window.d3 = global.d3 = d3;

  beforeEach(() => {});

  it('should return an object', () => {
    //expect(DOTLanguageHelper).to.be.an('function');
    let dotLanguageHelper = new DOTLanguageHelper();
    console.log(dotLanguageHelper.load(graph).convert());
  });

});
