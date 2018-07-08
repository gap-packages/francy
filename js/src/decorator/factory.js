import InitializerDecorator from './initialize';
import LoaderDecorator from './loader';
import ErrorDecorator from './error';
import HighlightDecorator from './highlight';
import JupyterDecorator from './jupyter';
import DataDecorator from './data';

export var Decorators = {

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
