import { expect } from 'chai';
import { Components } from '../component/factory';

describe('Components', () => {

  it('should return an object', () => {
    expect(Components).to.be.an('object');
  });

  it('availability should be false', () => {
    expect(Components.Jupyter).to.be.an('object');
    expect(Components.Jupyter.isAvailable).to.be.equals(false);
  });

});
