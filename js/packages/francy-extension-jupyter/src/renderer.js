import { APPEND_ID, CLASS_NAME, MIME_TYPE_FRANCY, MIME_TYPE_TEXT } from './utils';

export function init(Jupyter, { FrancyApp, Logger, Renderers = [] }) {
  // start Francy
  let Francy = new FrancyApp({
    appendTo: `#${APPEND_ID}`,
    callbackHandler: function (command) {
      Jupyter.notebook.kernel.execute(command, {
        iopub: {
          output: function (msg) {
            if (msg.content && msg.content.data) {
              if (msg.content.data[MIME_TYPE_FRANCY]) {
                // This will update an existing canvas by its ID!
                Francy.load(msg.content.data[MIME_TYPE_FRANCY]);
              } else if (msg.content.data[MIME_TYPE_TEXT]) {
                // This will add an output div!
                Francy.load(msg.content.data[MIME_TYPE_TEXT]);
              }
              Francy.render().catch(error => Logger.error(error));
            }
          }
        }
      }, {});
    }
  });
  
  // register available renderers
  Renderers.forEach(Renderer => Francy.RenderingManager.register(new Renderer()));
  // try to initialize MathJax just in case - hack
  Francy.Components.MathJax.tryInitialize();
  
  return Francy;
}

/**
 * Render data to the DOM node
 */
function render({ Francy, Logger }, props) {
  Francy.load(props.data).render()
    .catch(error => Logger.error(error));
}

/**
 * Handle when an output is cleared or removed
 */
function handleClearOutput(event, { cell: { output_area } }) { // eslint-disable-line no-unused-vars
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]); // eslint-disable-line no-unused-vars
  // nothing to do
}

/**
 * Handle when a new output is added
 */
function handleAddOutput(event, { output, output_area }) { // eslint-disable-line no-unused-vars
  /* Get rendered DOM node */
  const toinsert = output_area.element.find(CLASS_NAME.split(' ')[0]); // eslint-disable-line no-unused-vars
  /** e.g. Inject a static image representation into the mime bundle for
   *  rendering on Github, etc.
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
export function register_renderer(Jupyter, { FrancyApp, Logger, Renderers = [] }, notebook) {
  /* Get an instance of output_area from a CodeCell instance */
  const { output_area } = notebook
    .get_cells()
    .reduce((result, cell) => cell.output_area ? cell : result, {});

  /* A function to render output of 'application/vnd.francy+json' mime type */
  const append_mime = function (data, metadata, element) {
    /* Create a DOM node to render to */
    const toinsert = this.create_output_subarea(
      metadata,
      CLASS_NAME,
      MIME_TYPE_FRANCY
    );
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    const props = { data, metadata: metadata[MIME_TYPE_FRANCY] };
    let Francy = init(Jupyter, {
      FrancyApp: FrancyApp,
      Logger: Logger,
      Renderers: Renderers
    });
    Francy.settings({ appendTo: toinsert[0] });
    render({ Francy: Francy, Logger: Logger }, props);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /* Register the mime type and append_mim function with output_area */
  output_area.register_mime_type(MIME_TYPE_FRANCY, append_mime, {
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
        output => output.data && output.data[MIME_TYPE_FRANCY]
      )
    ) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}
