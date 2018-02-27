import Logger from './logger';

/* global Jupyter, MathJax, d3 */

export function RegisterMathJax(element) {
  if (!element) {
    return;
  } else if (element.node().tagName.toLowerCase() === 'svg') {
    return _convertMathJaxOutputSVG(element);
  } else if (element.node().tagName.toLowerCase() === 'div') {
    return _convertMathJaxOutputHTML(element);
  }
}

function _convertMathJaxOutputHTML(element) {
  setTimeout(() => {
    try {
      MathJax.Hub.Config({
        showMathMenu: false,
        skipStartupTypeset: true,
        'HTML-CSS': { 
          font: 'STIX-Web', 
          linebreaks: { 
            automatic: true 
          }
        }
      });

      MathJax.Hub.Queue(
        ['setRenderer', MathJax.Hub, 'HTML-CSS'],
        ['Typeset', MathJax.Hub, element.node()]
      );
      
      MathJax.Hub.Configured();
    } catch (e) {
      if (e.name === 'ReferenceError') {
        new Logger().info('It seems MathJax is not loaded...', e);
      }
    }

  }, 10);
}

function _convertMathJaxOutputSVG(element) {
  setTimeout(() => {
    try {
      MathJax.Hub.Config({
        showMathMenu: false,
        skipStartupTypeset: true,
        SVG: { 
          font: 'STIX-Web', 
          linebreaks: { 
            automatic: true 
          }
        }
      });

      MathJax.Hub.Register.StartupHook('End', function() {
        setTimeout(() => {
          element.selectAll('.francy-label').each(function() {
            var self = d3.select(this),
              mathJax = self.select('text>span>svg');
            if (mathJax.node()) {
              setTimeout(() => {
                setTimeout(() => {
                  let bound = mathJax.node().getBoundingClientRect();
                  mathJax.attr('x', -bound.width / 2);
                  mathJax.attr('y', -15);
                }, 10);
                d3.select(self.node().parentNode).append(function() {
                  return mathJax.node();
                });
                self.selectAll('*').remove();
              }, 10);
            }
          });
        }, 250);
      });

      MathJax.Hub.Queue(
        ['setRenderer', MathJax.Hub, 'SVG'], 
        ['Typeset', MathJax.Hub, element.node()]
      );
      
      MathJax.Hub.Configured();
    } catch (e) {
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
  } catch (e) {
    if (e.name === 'ReferenceError') {
      new Logger().info('It seems we\'re not running on Jupyter...', e);
    }
  }
}

// credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
export function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(match) {
    let cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}