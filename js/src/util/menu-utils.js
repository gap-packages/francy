export default class MenuUtils {

  // TODO handle actions
  static getMenuHtml(data) {
    let html = '<div class="menu">';
    html += MenuUtils._buildDefaultMenu();
    for (let menu of data.menu) {
      html += '<div class="dropdown">';
      if (menu.submenu && menu.submenu.length > 0) {
        html += `<button class="dropdown-button">${menu.label}&nbsp;&#8595;</button><div class="dropdown-content">`;
        for (let submenu of menu.submenu) {
          html += `<a href="#">${submenu.label}</a>`;
        }
        html += '</div>'
      } else {
        html += `<button class="dropdown-button">${menu.label}</button>`;
      }
      html += '</div>'
    }
    return html;
  }

  static _buildDefaultMenu() {
    return '<div class="dropdown"><button class="dropdown-button">File&nbsp;&#8595;</button><div class="dropdown-content"><a href="#">Save PNG</a><a href="#">About</a><a href="#">Close</a></div></div>';
  }

}
