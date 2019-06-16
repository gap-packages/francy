import { expect } from 'chai';
import JsonUtils from '../util/json';

describe('Json utils', () => {

  beforeEach(() => {});

  it('should return an object', () => {
    expect(JsonUtils).to.be.an('function');
    //expect(JsonUtils.parse(`{"mime": ${JsonUtils.MIME}, "canvas": {}}`)).to.be.an('object');
    expect(JsonUtils.parse({ 'mime': JsonUtils.MIME, 'canvas': {} })).to.be.an('object');
    expect(JsonUtils.parse('{"mime": "invalid", "canvas": {}}')).to.be.an('object');
    expect(JsonUtils.parse({ 'mime': 'invalid', 'canvas': {} })).to.be.an('object');
    expect(JsonUtils.parse('{"canvas": {}}')).to.be.an('object');
    expect(JsonUtils.parse({ 'canvas': {} })).to.be.an('object');
    expect(JsonUtils.parse('coutput sample')).to.be.an('object');
  });

  it('should return undefined', () => {
    expect(JsonUtils).to.be.an('function');
    expect(JsonUtils.parse(undefined)).to.be.an('undefined');
  });


  it('should return the MIME value', () => {
    expect(JsonUtils.MIME).to.equal('application/vnd.francy+json');
  });

});
