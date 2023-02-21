import DataDecorator from './data';
import ErrorDecorator from './error';
import HighlightDecorator from './highlight';
import InitializerDecorator from './initialize';
import LoaderDecorator from './loader';

/**
 * {Decorators} is a singleton and runs before everything else
 *
 * @example
 * // @Decorators.Data.requires('canvas.graph')
 * @example
 * // Decorators.Loader.withContext(this).show(); Decorators.Loader.withContext(this).hide();
 * @example
 * // Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
 * @example
 * // Decorators.Highlight.syntax(JSON.stringify(this.data.canvas, null, 2));
 * @example
 * // @Decorators.Initializer.initialize();
 * @example
 * // Decorators.Error.wrap(function(){}).withContext(this).onErrorThrow(false).onErrorExec(function(){}).handle()
 *
 * @typedef {Object} Decorators
 * @property {DataDecorator} Data {Decorator} instance
 * @property {LoaderDecorator} Loader {Decorator} instance
 * @property {InitializerDecorator} Initializer {Decorator} instance
 * @property {ErrorDecorator} Error {Decorator} instance
 * @property {HighlightDecorator} Highlight {Decorator} instance
 * @public
 */
export const Decorators = {

  get Loader() {
    return new LoaderDecorator();
  },

  get Error() {
    return new ErrorDecorator();
  },

  Data: DataDecorator,

  Initializer: InitializerDecorator,

  Highlight: HighlightDecorator

};
