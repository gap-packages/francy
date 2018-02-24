import * as d3 from './d3.min';

export const MIME_TYPE = 'application/vnd.francy+json';
export const CLASS_NAME = 'jp-OutputWidget-Francy';
export const APPEND_ID = 'francy-drawing-div';

// this will execute always!
(function createHiddenDrawingDiv() {
  // Create a 'display: none;' div for drawings
  // well, better putting this as visibility hidden in order to get sizes as visibility prevent this
  // the workaround would be setTimeout(()=>{francy.render}, 10) :/
  if (!d3.select('body').select(`div#${APPEND_ID}`).node()) {
    d3.select('body').append('div').attr('id', APPEND_ID).attr('style', 'visibility: false;');
  }
})();