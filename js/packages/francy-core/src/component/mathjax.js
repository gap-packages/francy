import BaseComponent from './base';
import { Logger} from '../util/logger';
import { Decorators } from '../decorator/factory';

/* global MathJax d3 */

/**
 * This {Component} class is used to check whether MathJax is available or not.
 * MathJax is optional, as {Francy} can run without it.
 * 
 * @extends {BaseComponent}
 */
export default class MathJaxComponent extends BaseComponent {

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  constructor(mandatory = false, delay = false) {
    super(mandatory, delay);
  }

  /**
   * Handles MathJax initialization and checks whether the dependency is available or not.
   * @public
   */
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