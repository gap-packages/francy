import Logger from './logger';

/* global Jupyter, MathJax, d3 */

export function RegisterMathJax(element) {
  if (!element) return;
  setTimeout(() => {
    try {
      MathJax.Hub.Config({
        tex2jax: {
          jax: ['input/TeX', 'output/SVG'],
          inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
          ],
          displayMath: [
            ['$$', '$$'],
            ['\\[', '\\]']
          ],
          processEscapes: true
        }
      });

      MathJax.Hub.Register.StartupHook('End', function() {
        setTimeout(() => {
          element.selectAll('.francy-label').each(function() {
            var self = d3.select(this),
              mathJax = self.select('text>span>svg');
            if (mathJax.node()) {
              setTimeout(() => {
                mathJax.attr('x', self.attr('x'));
                mathJax.attr('y', -15);
                d3.select(self.node().parentNode).append(function() {
                  return mathJax.node();
                });
                self.selectAll('*').remove();
              }, 10);
            }
          });
        }, 250);
      });

      MathJax.Hub.Queue(['Typeset', MathJax.Hub, element.node()]);

      MathJax.Hub.Configured();
    }
    catch (e) {
      if (e.name === 'ReferenceError') {
        new Logger().info('It seems MathJax is not loaded...', e);
      }
    }

  }, 10);
}

export function RegisterJupyterKeyboardEvents(classes) {
  // disable keyboard shortcuts in Jupyter for classes
  if (!classes) return;
  try {
    classes.map((cl) => {
      Jupyter.keyboard_manager.register_events(cl);
    });
  }
  catch (e) {
    if (e.name === 'ReferenceError') {
      new Logger().info('It seems we\'re not running on Jupyter...', e);
    }
  }
}
