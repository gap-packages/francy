import Logger from '../util/logger';

/* global d3 */

export default class LoaderDecorator {
  
  constructor() {
    this.logger = new Logger();
    this.id = LoaderDecorator._generateId();
    this.context = undefined;
  }
  
  withContext(ctx) {
    this.context = ctx;
    try {
      this.element = d3.select(`a.loader#Loader-${ctx.data.canvas ? ctx.data.canvas.id : ctx.options.appendTo.data.canvas.id}`);
    } catch(e) {
      this.logger.info(`We can't do anything about this! An error occurred: ${e}`);
    }
    return this;
  }
  
  show() {
    if (this.element) {
      this.element.data()[0][this.id] = true;
      this.element.style('visibility', 'visible');
    }
    return this;
  }
  
  hide() {
    if (this.element) {
      delete this.element.data()[0][this.id];
      // hide only if no more loaders present
      if (Object.values(this.element.data()[0]).length == 0) {
        this.element.style('visibility', 'hidden');
      }
    }
    return this;
  }

  static _generateId(){
    // Math.random should be unique because of its seeding algorithm
    // Convert it to base 36 (numbers + letters), 
    // and grab the first 9 characters after the decimal
    return `L-${Math.random().toString(36).substr(2, 9)}`;
  }
}
