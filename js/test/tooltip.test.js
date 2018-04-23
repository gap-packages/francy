import * as d3 from 'd3';
import { expect } from 'chai';
import Tooltip  from '../src/render/tooltip';

describe("Tooltips", () => {

  window.d3 = global.d3 = d3;
  
  const data = {
    messages: {
      A1: {
        type: "info",
        title: "info",
        text: "info"
      }
    }
  };

  beforeEach(() => {});

  it("should return an object", () => {
    expect(Tooltip).to.be.an('function');
    expect(new Tooltip({ verbose: false, appendTo: 'body', callbackHandler: console.log })).to.be.an('object');
  });
  
  it("should return build the about modal", () => {
    let tooltip = new Tooltip({ verbose: false, appendTo: 'body', callbackHandler: console.log });
    tooltip.load(data).render().catch(error => console.log(error)).then(object => expect(object.element.node()).to.be.a('htmldivelement'));
  });

});
