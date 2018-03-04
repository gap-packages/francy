import Renderer from './renderer';
import { enabled } from '../util/data-decorator';

/* global MathJax, d3 */

export default class MathJaxWrapper extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @enabled('canvas.texTypesetting')
  render() {
    this.element = this.options.appendTo.element;
    try {
      MathJax.Hub.Config({
        showMathMenu: false,
        skipStartupTypeset: true,
        tex2jax: {
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          processEscapes: true
        },
        'HTML-CSS': {
          font: 'STIX-Web', 
          linebreaks: { 
            automatic: true 
          }
        },
        'SVG': {
          font: 'STIX-Web', 
          linebreaks: { 
            automatic: true 
          }
        }
      });

      MathJax.Hub.Register.MessageHook('New Math', function(id) {
        if (id && id.length > 1) {
          var mathJaxElement = d3.select(`#${id[1]}-Frame`);
          var svgMathJaxElement = mathJaxElement.select('svg');
          if (svgMathJaxElement.node()) {
            setTimeout(() => {
              setTimeout(() => {
                let bound = svgMathJaxElement.select('g').node().getBoundingClientRect();
                svgMathJaxElement.attr('x', -bound.width / 2);
                svgMathJaxElement.attr('y', -15);
              }, 50);
              d3.select(mathJaxElement.node().parentNode.parentNode).append(function() {
                return svgMathJaxElement.node();
              });
            }, 25);
          }
        }
      });
      
      var svgElement = this.element.select('svg');
      if (svgElement.node()) {
        MathJax.Hub.Queue(
          ['setRenderer', MathJax.Hub, 'SVG'],
          ['Typeset', MathJax.Hub, svgElement.node()],
          ['setRenderer', MathJax.Hub, 'HTML-CSS'],
          ['Typeset', MathJax.Hub, this.element.node()],
        );
      } else {
        MathJax.Hub.Queue(
          ['setRenderer', MathJax.Hub, 'HTML-CSS'],
          ['Typeset', MathJax.Hub, this.element.node()],
        );
      }

      MathJax.Hub.Configured();
    } catch (e) {
      if (e.name === 'ReferenceError') {
        this.logger.warn('It seems MathJax is not loaded...', e);
      } else {
        this.logger.error('Not sure what happened :/', e);
      }
    }

  }

}
