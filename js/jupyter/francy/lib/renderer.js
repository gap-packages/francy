'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.register_renderer = register_renderer;
exports.render_cells = render_cells;

var _constants = require('./constants');

require('../lib/style.css');

/* global d3 */

var francy = undefined;

// Create a 'display: none;' div for drawing
d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

function init(Jupyter, d3, FrancyBundle) {

  console.log('Starting loading Module Francy Javascript...');

  // attach d3 to window
  window.d3 = d3;

  // start Francy
  francy = new FrancyBundle.Francy({
    verbose: true,
    appendTo: _constants.APPEND_ID,
    callbackHandler: function callbackHandler(command) {
      Jupyter.notebook.kernel.execute(command, {
        iopub: {
          output: function output(msg) {
            if (msg.content && msg.content.data && msg.content.data[_constants.MIME_TYPE]) {
              // This will update an existing canvas by its ID!
              francy.load(msg.content.data[_constants.MIME_TYPE]).render();
            }
          }
        }
      }, {});
    }
  });

  console.log('Finished loading Module Francy Javascript.');
}
/**
 * Render data to the DOM node
 */
function render(props, node) {
  var francyObject = francy.load(props.data).render();
  node.append(francyObject);
}

/**
 * Handle when an output is cleared or removed
 */
function handleClearOutput(event, _ref) {
  var output_area = _ref.cell.output_area;

  /* Get rendered DOM node */
  var toinsert = output_area.element.find(_constants.CLASS_NAME.split(' ')[0]);
  if (toinsert[0]) {
    // The svg might be gone to another cell (!?)
    // well, when Draw is invoked for a canvas inside another cell it moves the svg to another output cell!
    var svg = d3.select(toinsert[0]).select('svg');
    var id = svg ? svg.attr('id') : undefined;
    francy.unrender(id);
  }
}

/**
 * Handle when a new output is added
 */
function handleAddOutput(event, _ref2) {
  var output = _ref2.output,
      output_area = _ref2.output_area;

  /* Get rendered DOM node */
  var toinsert = output_area.element.find(_constants.CLASS_NAME.split(' ')[0]);
  /** e.g. Inject a static image representation into the mime bundle for
   *  endering on Github, etc.
   */
  // if (toinsert) {
  //   renderLibrary.toPng(toinsert[0]).then(url => {
  //     const data = url.split(',')[1];
  //     output_area.outputs
  //       .filter(output => output.data[MIME_TYPE])
  //       .forEach(output => {
  //         output.data['image/png'] = data;
  //       });
  //   });
  // }
}

/**
 * Register the mime type and append_mime function with the notebook's
 * output area
 */
function register_renderer(notebook) {
  /* Get an instance of output_area from a CodeCell instance */
  var _notebook$get_cells$r = notebook.get_cells().reduce(function (result, cell) {
    return cell.output_area ? cell : result;
  }, {}),
      output_area = _notebook$get_cells$r.output_area;

  /* A function to render output of 'application/vnd.francy+json' mime type */


  var append_mime = function append_mime(data, metadata, element) {
    /* Create a DOM node to render to */
    var toinsert = this.create_output_subarea(metadata, _constants.CLASS_NAME, _constants.MIME_TYPE);
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    var props = { data: data, metadata: metadata[_constants.MIME_TYPE] };
    render(props, toinsert[0]);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /* Register the mime type and append_mim function with output_area */
  output_area.register_mime_type(_constants.MIME_TYPE, append_mime, {
    /* Is output safe? */
    safe: true,
    /* Index of renderer in `output_area.display_order` */
    index: 0
  });
}

/**
 * Re-render cells with output data of 'application/vnd.francy+json' mime type
 */
function render_cells(notebook) {
  /* Get all cells in notebook */
  notebook.get_cells().forEach(function (cell) {
    /* If a cell has output data of 'application/vnd.francy+json' mime type */
    if (cell.output_area && cell.output_area.outputs.find(function (output) {
      return output.data && output.data[_constants.MIME_TYPE];
    })) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}