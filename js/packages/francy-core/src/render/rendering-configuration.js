/**
 * This class shall be extended by every {Renderer} entrypoint.
 * It provides a configuration to be registered withi {RenderingManager}.
 * 
 * @public
 */
export default class RenderingConfiguration {
  /**
   * Creates the configuration for this renderer
   * 
   * @param {class} renderer.renderer - this is renderer class.
   * @param {string} renderer.name - this is renderer name.
   * @param {boolean} renderer.enable - this is property to specify whether the renderer is active or not.
   * @public
   */
  constructor(renderer, name, enable = false) {
    /** 
    * The renderer configuration object
    * 
    * @typedef {Object} configuration
    * @property {Renderer} renderer a {Renderer} instance
    * @property {string} name a name for the renderer
    * @property {boolean} enable if this renderer is enabled by default
    */
    this.configuration = {
      renderer: renderer,
      name: name,
      enable: enable
    };
  }
}
