import BaseComponent from './base';
import { Logger} from '../util/logger';
import { Decorators } from '../decorator/factory';

/* global MathJax d3 */

export default class MathJaxComponent extends BaseComponent {

  constructor(mandatory = false, delay = false) {
    super(mandatory, delay);
  }

  initialize() {
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

    let safeOnNewMathElement = Decorators.Error.wrap(onNewMathElement).withContext(this).onErrorThrow(false);
    MathJax.Hub.Register.MessageHook('New Math', id => safeOnNewMathElement.handle(id));

    function onNewMathElement(id) {
      if (id && id.length > 1) {
        let mathJaxElement = d3.select(`#${id[1]}-Frame`);
        let svgMathJaxElement = mathJaxElement.select('svg');
        let g = d3.select(mathJaxElement.node().parentNode.parentNode);
        if (svgMathJaxElement.node()) {
          // set same font-size
          svgMathJaxElement.style('font-size', g.select('text.francy-label').style('font-size'));
          // re-center component
          let width = svgMathJaxElement.node().width.baseVal.value;
          let height = svgMathJaxElement.node().height.baseVal.value;
          svgMathJaxElement.attr('x', -width / 2);
          svgMathJaxElement.attr('y', -height / 2);
          g.append(() => svgMathJaxElement.node());
        }
      }
    }

    MathJax.Hub.Configured();
    
    Logger.debug('MathJax is available...');
  }
}