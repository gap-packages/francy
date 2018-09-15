import InitializerDecorator from './initialize';
import LoaderDecorator from './loader';
import ErrorDecorator from './error';
import HighlightDecorator from './highlight';
import JupyterDecorator from './jupyter';
import DataDecorator from './data';

/**
 * {Decorators} is a singleton and runs before everything else
 * 
 * @example \@Decorators.Data.requires('canvas.graph')
 * @example Decorators.Loader.withContext(this).show(); Decorators.Loader.withContext(this).hide();
 * @example Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
 * @example Decorators.Highlight.syntax(JSON.stringify(this.data.canvas, null, 2));
 * @example \@Decorators.Initializer.initialize();
 * @example Decorators.Error.wrap(function(){}).withContext(this).onErrorThrow(false).onErrorExec(function(){}).handle()
 * 
 * @typedef {Object} Decorators
 * @property {DataDecorator} Data {Decorator} instance
 * @property {LoaderDecorator} Loader {Decorator} instance
 * @property {InitializerDecorator} Initializer {Decorator} instance
 * @property {ErrorDecorator} Error {Decorator} instance
 * @property {HighlightDecorator} Highlight {Decorator} instance
 * @property {JupyterDecorator} Jupyter {Decorator} instance
 * @public
 */
export const Decorators = {

  get Data() {
    return new DataDecorator();
  },
  
  get Loader() {
    return new LoaderDecorator();
  },
  
  get Initializer() {
    return new InitializerDecorator();
  },
  
  get Error() {
    return new ErrorDecorator();
  },
  
  get Highlight() {
    return new HighlightDecorator();
  },
  
  get Jupyter() {
    return new JupyterDecorator();
  }
  
};
