import * as d3 from 'd3';
import {expect} from 'chai';
import Callback from '../render/callback';
import {default as ConfigurationHandler, DefaultConfiguration} from '../util/configuration';
import {default as RenderingManagerHandler} from '../render/rendering-manager';

describe('Callbacks', () => {

  window.d3 = global.d3 = d3;
  var configuration = new ConfigurationHandler(DefaultConfiguration);
  var options = {appendTo: 'body', callbackHandler: console.log, configuration: configuration};
  var context = {
    configuration: configuration,
    renderingManager: new RenderingManagerHandler({configuration: configuration})
  };

  window.callback = new Callback(options, context);

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', () => {
    expect(Callback).to.be.an('function');
    expect(window.callback).to.be.an('object');
  });

  it('should return the execute Trigger command with required args', () => {
    window.callback.load({
      callback: {
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
        }
      }
    }).settings({callbackHandler: handler}).execute();

    function handler(result) {
      console.log(result);
      expect(result).to.have.string('Trigger(');
    }
  });

  it('should return the execute Trigger command without required args', () => {
    window.callback.load({
      callback: {
        type: 'server',
        id: 'F1111',
        trigger: 'click',
        knownArgs: [],
        requiredArgs: {}
      }
    }).settings({callbackHandler: handler}).execute();

    function handler(result) {
      console.log(result);
      expect(result).to.have.string('Trigger(');
    }
  });

  it('should return the confirmation message', () => {
    window.callback.load({
      callback: {
        type: 'server',
        id: 'F1111',
        trigger: 'click',
        knownArgs: [],
        requiredArgs: {},
        confirm: 'Confirm Message'
      }
    }).settings({callbackHandler: handler}).execute();

    function handler(result) {
      console.log(result);
      expect(result).to.have.string('Confirm Message');
    }
  });

});
