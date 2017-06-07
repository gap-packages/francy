export default class MenuUtils {

  // TODO handle actions
  static getMenuHtml(data) {
    let html = '<div class="menu">';
    html += MenuUtils._buildDefaultMenu();
    for (let menu of data.menus) {
      html += '<div class="dropdown">';
      if (menu.menus && menu.menus.length > 0) {
        html += `<button class="dropdown-button">${menu.title}&nbsp;&#8595;</button><div class="dropdown-content">`;
        for (let submenu of menu.menus) {
          html += `<a href="#">${submenu.title}</a>`;
        }
        html += '</div>'
      } else {
        html += `<button class="dropdown-button">${menu.title}</button>`;
      }
      html += '</div>'
    }
    return html;
  }

  static _buildDefaultMenu() {
    return '<div class="dropdown"><button class="dropdown-button">File&nbsp;&#8595;</button><div class="dropdown-content"><a href="#">Save PNG</a><a href="#">About</a><a href="#">Close</a></div></div>';
  }

}
