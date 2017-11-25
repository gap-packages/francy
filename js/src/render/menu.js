import Renderer from './renderer';
import Callback from './callback';

export default class Menu extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  traverse(appendTo, menusIterator) {
    while (menusIterator.hasNext()) {
      var menuItem = menusIterator.next();
      var callback = new Callback(this.options);
      var entry = appendTo.append('li');
      var action = entry.append('a').attr('title', menuItem.title).html(menuItem.title);
      if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
        var content = entry.append('ul');
        var subMenusIterator = this.iterator(Object.values(menuItem.menus));
        this.traverse(content, subMenusIterator);
      }
      if (menuItem.callback && Object.values(menuItem.callback).length) {
        action.on('click', () => callback.execute(menuItem));
      }
    }
  }

  iterator(array) {
    var nextIndex = 0;
    return {
      next: function() {
        return this.hasNext() ? array[nextIndex++] : undefined;
      },
      hasNext: function() {
        return nextIndex < array.length;
      }
    };
  }
}
