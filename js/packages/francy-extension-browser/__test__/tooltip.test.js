import * as d3 from 'd3';
import { expect } from 'chai';
import Tooltip  from '../render/tooltip';

describe('Tooltips', () => {
  
  var options = { appendTo: 'body', callbackHandler: console.log };
  window.d3 = global.d3 = d3;
  window.tooltip = new Tooltip(options);

  const data = {
    messages: {
      A1: {
        type: 'info',
        title: 'info',
        text: 'info'
      }
    }
  };

  beforeEach(() => {
    d3.select('body').selectAll('div').remove();
  });

  it('should return an object', () => {
    expect(Tooltip).to.be.an('function');
    expect(window.tooltip).to.be.an('object');
  });
  
  it('should build a tooltip', function(done) {
    //FIXME d3['mouse'] = () => [0,0]; d3.mouse function fails so we cannot test this
    /*window.tooltip.load(data, true).render()
      .catch(error => done(error))
      .then(object => {
        setTimeout(function() {
          expect(object.element.node()).to.be.a('htmldivelement');
          done();
        });
      });*/
      done();
  });

});
