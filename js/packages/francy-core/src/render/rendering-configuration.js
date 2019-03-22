export default class RenderingConfiguration {
    
  constructor(renderer, name, enable = false) {
    this.configuration = {
      renderer: renderer,
      name: name,
      enable: enable
    };
  }
  
  getConfiguration(){
    return this.configuration;
  }
}
