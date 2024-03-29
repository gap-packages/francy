import {expect} from 'chai';
import {Components} from '../component/factory';
import * as d3 from "d3";

describe('Components', () => {

  window.d3 = global.d3 = d3;

  it('should return an object', () => {
    expect(Components).to.be.an('object');
  });

  it('availability should be false', () => {
    expect(Components.Jupyter).to.be.an('object');
    expect(Components.Jupyter.isAvailable).to.be.equals(false);
  });

});
