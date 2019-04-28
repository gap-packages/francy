import chai from 'chai';
chai.use(require('chai-string'));

//import graph from './data/json1.json';
import * as vis from 'vis';

describe('DOT Language utils', () => {

  window.vis = global.vis = vis;

  beforeEach(() => {});

  it('should convert json to dot', () => {

  });

});
