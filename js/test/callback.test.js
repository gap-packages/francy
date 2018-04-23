import * as d3 from 'd3';
import { expect } from 'chai';
import Callback from '../src/render/callback';

describe("Callbacks", () => {

  window.d3 = global.d3 = d3;

  beforeEach(() => {});

  it("should return an object", () => {
    expect(Callback).to.be.an('function');
    expect(new Callback({ verbose: false, appendTo: 'body', callbackHandler: console.log })).to.be.an('object');
  });
  
  it("should return the execute Trigger command with required args", () => {
    let callback = new Callback({ verbose: false, appendTo: 'body', callbackHandler: handler });
    callback.load({callback: {
              type: "server",
              id: "F1",
              trigger: "click",
              knownArgs: [],
              requiredArgs: {
                F2: {
                  type: "number",
                  id: "F2",
                  title: "How many Circles?",
                  value: "15"
                }
              }}}, true).execute();
    function handler(result) {
      expect(result).to.have.string('Trigger(');
    }
  });
  
  it("should return the execute Trigger command without required args", () => {
    let callback = new Callback({ verbose: false, appendTo: 'body', callbackHandler: handler });
    callback.load({callback: {
              type: "server",
              id: "F1",
              trigger: "click",
              knownArgs: [],
              requiredArgs: {}
              }}, true).execute();
    function handler(result) {
      expect(result).to.have.string('Trigger(');
    }
  });


});
