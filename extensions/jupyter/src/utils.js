import * as d3 from 'francy-js/lib/d3.min.js';

export const MIME_TYPE = 'application/vnd.francy+json';
export const CLASS_NAME = 'jp-OutputWidget-Francy';
export const APPEND_ID = 'francy-drawing-div';

// this will execute always!
(function createHiddenDrawingDiv() {
  // Create a 'display: none;' div for drawings
  // well, better putting this as visibility hidden in order to get sizes as visibility prevent this
  // the workaround would be setTimeout(()=>{francy.render}, 10) :/
  let body = d3.select('body');
  if (!body.select(`div#${APPEND_ID}`).node()) {
    body.append('div').attr('id', APPEND_ID).attr('style', 'visibility: false;');
  }
})();