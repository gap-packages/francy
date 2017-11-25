/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'Francy[Window|Canvas|Object]-*hex uuid*'
 */
export default class IDUtils {

  /**
   * Returns the id for a window based on a canvas id.
   * @param canvasId - the canvas id
   * @returns {string} the window element id.
   */
  static getWindowId(canvasId) {
    return `FrancyWindow-${canvasId}`;
  }

  /**
   * Returns the id for a canvas based on a canvas id.
   * @param canvasId - the canvas id
   * @returns {string} the canvas element id.
   */
  static getCanvasId(canvasId) {
    return `FrancyCanvas-${canvasId}`;
  }

  /**
   * Returns the id for an object based on a object id.
   * @param objectId - the object id
   * @returns {string} the element object id.
   */
  static getObjectId(objectId) {
    return `FrancyObject-${objectId}`;
  }

  /**
   * Returns the id for an object based on a object id.
   * @param menuId - the menu id
   * @returns {string} the element object id.
   */
  static getMenuId(menuId) {
    return `FrancyMenu-${menuId}`;
  }

}
