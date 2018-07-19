import Renderer from '../renderer';
import Callback from '../callback';

export default class Menu extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  traverse(appendTo, menusIterator) {
    while (menusIterator.hasNext()) {
      let menuItem = menusIterator.next();
      let entry = appendTo.append('li');
      let action = entry.selectAll('a').data([menuItem]).enter().append('a').attr('title', menuItem.title).html(menuItem.title);
      if (menuItem.callback && Object.values(menuItem.callback).length) {
        action.on('click', d => new Callback(this.options).load(d, true).execute());
      }
      if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
        let content = entry.append('ul');
        let subMenusIterator = this.iterator(Object.values(menuItem.menus));
        this.traverse(content, subMenusIterator);
      }
    }
  }

  iterator(array) {
    let nextIndex = 0;
    return {
      next: function() {
        return this.hasNext() ? array[nextIndex++] : undefined;
      },
      hasNext: function() {
        return nextIndex < array.length;
      }
    };
  }

  unrender() {}
}
