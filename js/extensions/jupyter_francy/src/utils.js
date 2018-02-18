import * as d3 from './d3.min';

export const MIME_TYPE = 'application/vnd.francy+json';
export const CLASS_NAME = 'jp-OutputWidget-Francy';
export const APPEND_ID = 'francy-drawing-div';

// this will execute always!
(function createHiddenDrawingDiv() {
  // Create a 'display: none;' div for drawings
  if (!d3.select('body').select(`div#${APPEND_ID}`).node()) {
    d3.select('body').append('div').attr('id', APPEND_ID).attr('style', 'display: none;');
  }
})();