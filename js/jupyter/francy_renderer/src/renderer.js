import '../../../css/style.css';
import * as d3 from '../../../node_modules/d3/build/d3';
import * as francy from '../../../dist/francy/amd/francy.bundle';

var MIME_TYPE = 'application/vnd.francy+json';
var CLASS_NAME = 'francy-view';

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
function handleClearOutput(event, { cell: { output_area } }) {
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]);
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
function handleAddOutput(event, { output, output_area }) {
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]);
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
export function register_renderer(notebook) {
  /* Get an instance of output_area from a CodeCell instance */
  const { output_area } = notebook
    .get_cells()
    .reduce((result, cell) => cell.output_area ? cell : result, {});

  /* A function to render output of 'application/vnd.francy+json' mime type */
  const append_mime = function(data, metadata, element) {
    /* Create a DOM node to render to */
    const toinsert = this.create_output_subarea(
      metadata,
      CLASS_NAME,
      MIME_TYPE
    );
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    const props = { data, metadata: metadata[MIME_TYPE] };
    render(props, toinsert[0]);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /**
   * Register the mime type and append_mim function with output_area
   */
  output_area.register_mime_type(MIME_TYPE, append_mime, {
    /* Is output safe? */
    safe: true,
    /* Index of renderer in `output_area.display_order` */
    index: 0
  });
}

/**
 * Re-render cells with output data of 'application/vnd.francy+json' mime type
 */
export function render_cells(notebook) {
  /* Get all cells in notebook */
  notebook.get_cells().forEach(cell => {
    /* If a cell has output data of 'application/vnd.francy+json' mime type */
    if (
      cell.output_area &&
      cell.output_area.outputs.find(
        output => output.data && output.data[MIME_TYPE]
      )
    ) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}
