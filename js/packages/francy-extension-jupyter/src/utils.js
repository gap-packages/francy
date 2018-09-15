export const MIME_TYPE = 'application/vnd.francy+json';
export const CLASS_NAME = 'jp-OutputWidget-Francy';
export const APPEND_ID = 'francy-drawing-div';

// this will execute always!
(function createHiddenDrawingDiv() {
  // Create a 'display: none;' div for drawings
  // well, better putting this as 'visibility: hidden;' in order to get sizes 
  // the workaround would be setTimeout(()=>{francy.render}, 10) :/
  if (!window.document.getElementById(`div#${APPEND_ID}`)) {
    let div = window.document.createElement('div');
    div.setAttribute('id', APPEND_ID);
    div.setAttribute('style', 'visibility: false;');
    window.document.body.appendChild(div);
  }
})();
