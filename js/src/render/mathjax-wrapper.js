import Base from './base';
import { enabled } from '../util/data-decorator';
import { initialize } from '../util/initialize-decorator';

/* global MathJax, d3 */

let initialized = false;

export default class MathJaxWrapper extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }
  
  _initialize() {
    if (initialized) return;
    MathJax.Hub.Config({
      showMathMenu: false,
      skipStartupTypeset: true,
      tex2jax: {
        inlineMath: [ ['$','$'], ['\\(','\\)'] ],
        displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
        processEscapes: true,
        processEnvironments: true
      },
      MathML: {
        extensions: ['content-mathml.js']
      },
      displayAlign: 'center',
      'HTML-CSS': {
        availableFonts: [],
        imageFont: null,
        preferredFont: null,
        font: 'STIX-Web', 
        webFont: 'STIX-Web',
        styles: {'.MathJax_Display': {'margin': 0}},
        linebreaks: { 
          automatic: true 
        }
      },
      'SVG': {
        availableFonts: [],
        imageFont: null,
        preferredFont: null,
        font: 'STIX-Web', 
        webFont: 'STIX-Web',
        styles: {'.MathJax_Display': {'margin': 0}},
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
              let width = svgMathJaxElement.node().width.baseVal.value;
              svgMathJaxElement.attr('x', -width / 2);
              svgMathJaxElement.attr('y', -15);
            }, 50);
            d3.select(mathJaxElement.node().parentNode.parentNode).append(function() {
              return svgMathJaxElement.node();
            });
          }, 50);
        }
      }
    });

    MathJax.Hub.Configured();

    initialized = true;
  }

  @initialize()
  @enabled('canvas.texTypesetting')
  renderSVG() {
    // if no element here just return...
    if (!this.parent || !this.parent.node()) return;
    MathJax.Hub.Queue(
      ['setRenderer', MathJax.Hub, 'SVG'],
      ['Typeset', MathJax.Hub, this.parent.node()]
    );
  }
  
  @initialize()
  @enabled('canvas.texTypesetting')
  renderHTML() {
    // if no element here just return...
    if (!this.parent || !this.parent.node()) return;
    MathJax.Hub.Queue(
      ['setRenderer', MathJax.Hub, 'HTML-CSS'],
      ['Typeset', MathJax.Hub, this.parent.node()],
    );
  }

}
