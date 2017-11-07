import Callback from './callback';

export default class MenuUtils {

  constructor(json, { verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.build(json);
  }

  build(json) {
    var self = this;
    var $html = $('<div>', { class: 'menu', id: json.id });
    self._buildDefaultMenu().appendTo($html);
    for (let menu of Object.values(json.canvas.menus)) {
      var callback = new Callback(menu, this.options);
      var $menu = $('<div>', { class: "dropdown" }).appendTo($html);
      if (menu.menus && Object.values(menu.menus).length > 0) {
        $('<button>', { class: "dropdown-button" }).html(menu.title + "&nbsp;&#9660;").appendTo($menu);
        var $submenu = $('<div>', { class: "dropdown-content" }).appendTo($menu);
        for (let submenu of Object.values(menu.menus)) {
          callback = new Callback(submenu, this.options);
          $('<button>', { class: 'dropdown-button', click: function() { return callback.execute(); } }).text(submenu.title).appendTo($submenu);
        }
      }
      else {
        $('<button>', { class: 'dropdown-button', click: function() { return callback.execute(); } }).text(menu.title).appendTo($menu);
      }
    }
    $html.appendTo(this.options.appendTo);
  }

  _buildDefaultMenu() {
    var $div = $('<div>', { class: "dropdown" })
    var $content = $('<div>', { class: "dropdown-content" });
    $('<button>', { class: "dropdown-button" }).html('File&nbsp;&#9660;').appendTo($div);
    $('<button>', { class: 'dropdown-button', click: function() { return; } }).text("Save to PNG").appendTo($content);
    $('<button>', { class: 'dropdown-button', click: function() { return; } }).text("About").appendTo($content);
    $('<button>', { class: 'dropdown-button', click: function() { return; } }).text("Close").appendTo($content);
    $content.appendTo($div);
    return $div;
  }

}
