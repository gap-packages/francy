/**
 * This class shall be extended by every {Renderer} entrypoint.
 * It provides a configuration to be registered withi {RenderingManager}.
 * 
 * @public
 */
export default class RenderingConfiguration {
    
  constructor(renderer, name, enable = false) {
    this.configuration = {
      renderer: renderer,
      name: name,
      enable: enable
    };
  }
  
  /**
   * Return the configuration for this renderer
   * 
   * @returns {object} configuration
   * @property {Renderer} renderer a {Renderer} instance
   * @property {string} name a name for the renderer
   * @property {boolean} enable if this renderer is enabled by default
   * @public
   */
  getConfiguration(){
    return this.configuration;
  }
}
