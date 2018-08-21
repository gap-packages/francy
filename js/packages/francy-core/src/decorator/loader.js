import {Logger} from '../util/logger';
import { Utilities } from '../util/utilities';

export default class LoaderDecorator {

  constructor() {
    this.id = Utilities.generateId();
    this.context = undefined;
  }

  withContext(ctx) {
    this.context = ctx;
    try {
      this.element = d3.select(`a.loader#Loader-${ctx.data.canvas ? ctx.data.canvas.id : ctx.options.appendTo.data.canvas.id}`);
    } catch(e) {
      Logger.info(`We can't do anything about this! An error occurred: ${e}`);
    }
    return this;
  }

  show() {
    if (this.element && this.element.data()[0]) {
      this.element.data()[0][this.id] = true;
      this.element.style('visibility', 'visible');
    }
    return this;
  }

  hide() {
    if (this.element && this.element.data()[0]) {
      delete this.element.data()[0][this.id];
      // hide only if no more loaders present
      if (Object.values(this.element.data()[0]).length === 0) {
        this.element.style('visibility', 'hidden');
      }
    }
    return this;
  }
}
