import * as d3 from 'd3';
import { expect } from 'chai';
import Callback from '../render/callback';

describe('Callbacks', () => {

  var options = { appendTo: 'body', callbackHandler: console.log };
  window.d3 = global.d3 = d3;
  
  window.callback = new Callback(options);
  
  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });
  
  it('should return an object', () => {
    expect(Callback).to.be.an('function');
    expect(window.callback).to.be.an('object');
  });
  
  it('should return the execute Trigger command with required args', () => {
    window.callback.load({callback: {
              type: 'server',
              id: 'F1',
              trigger: 'click',
              knownArgs: [],
              requiredArgs: {
                F2: {
                  type: 'number',
                  id: 'F2',
                  title: 'How many Circles?',
                  value: '15'
                }
              }}}, true).settings({callbackHandler: handler}).execute();
    function handler(result) {
      expect(result).to.have.string('Trigger(');
    }
  });
  
  it('should return the execute Trigger command without required args', () => {
    window.callback.load({callback: {
              type: 'server',
              id: 'F1111',
              trigger: 'click',
              knownArgs: [],
              requiredArgs: {}
              }}, true).settings({callbackHandler: handler}).execute();
    function handler(result) {
      expect(result).to.have.string('Trigger(');
    }
  });

});
