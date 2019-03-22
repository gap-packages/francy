import Renderer from '../renderer';
import CallbackHandler from '../callback';

/**
 * This class contains helper functions to handle the creation of menus
 */
export default class Menu extends Renderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  /**
   * This method traverses an iterator and creates the menu entries.
   * 
   * @param {object} appendTo - the object to append the menu to
   * @param {object} menusIterator - the iterator from {Menu#iterator}
   * @public
   */
  traverse(appendTo, menusIterator) {
    while (menusIterator.hasNext()) {
      let menuItem = menusIterator.next();
      let entry = appendTo.append('li');
      let action = entry.selectAll('a').data([menuItem]).enter().append('a').attr('title', menuItem.title).html(menuItem.title);
      if (menuItem.callback && Object.values(menuItem.callback).length) {
        action.on('click', d => new CallbackHandler(this.options).load(d, true).execute());
      }
      if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
        action.append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
        let content = entry.append('ul');
        let subMenusIterator = this.iterator(Object.values(menuItem.menus));
        this.traverse(content, subMenusIterator);
      }
    }
  }

  /**
   * Creates an iterator from an array
   * 
   * @returns {object} the iterator
   * @public
   */
  iterator(array) {
    let nextIndex = 0;
    return {
      next: function () {
        return this.hasNext() ? array[nextIndex++] : undefined;
      },
      hasNext: function () {
        return nextIndex < array.length;
      }
    };
  }
}
