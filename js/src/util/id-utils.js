/**
 * This class generates ids for the html/svg elements in the dom.
 * The ids naming convention is: 'francy[Window|Canvas|Object]*numerical id*'
 */
export default class IDUtils {

  /**
   * Returns the id for a window based on a canvas id.
   * @param canvasId - the canvas id
   * @returns {string} the window element id.
   */
  static getWindowId(canvasId) {
    return `francyWindow${canvasId}`;
  }

  /**
   * Returns the id for a canvas based on a canvas id.
   * @param canvasId - the canvas id
   * @returns {string} the canvas element id.
   */
  static getCanvasId(canvasId) {
    return `francyCanvas${canvasId}`;
  }

  /**
   * Returns the id for an object based on a object id.
   * @param objectId - the object id
   * @returns {string} the element object id.
   */
  static getObjectId(objectId) {
    return `francyObject${objectId}`;
  }

  /**
   * Returns the id for an object based on a object id.
   * @param objectId - the object id
   * @returns {string} the element object id.
   */
  static getGroupObjectId(objectId) {
    return `francyGroupObject${objectId}`;
  }
}
