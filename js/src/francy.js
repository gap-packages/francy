import JsonUtils from './util/json-utils.js';
import AbstractShapeFactory from './draw/shape/abstract-factory';
import AbstractBehaviorFactory from './draw/behavior/abstract-factory';

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class Francy {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose
   * @param appendTo
   */
  constructor({verbose = false, appendTo = 'body'} = {}) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo
    };
    this.nodes = new Set();
  }

  test(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.info('Francy will handle the following object: ', json);

      this.nodes.add(json.object);

      var simulation = d3.forceSimulation()
        //.force("collide", d3.forceCollide(d => d.properties.r + 8).iterations(16))
        .force("center", d3.forceCenter(100, 100))
        .force("charge", d3.forceManyBody())
        .force("x", d3.forceX(0.02))
        .force("y", d3.forceY(0.02));

      var node = d3.select('svg').append('g').selectAll('circle').data(Array.from(this.nodes))
        .enter().append('circle').attr('r', d => d.properties.r).call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      function ticked() {
        node.attr('cx', d => d.properties.x);
        node.attr('cy', d => d.properties.y);
      }

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.properties.x;
        d.fy = d.properties.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      simulation.nodes(Array.from(this.nodes)).on("tick", ticked).force('node');
    }
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */
  handle(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.info('Francy will handle the following object: ', json);
      let object;
      switch (json.type) {
        case 'shape':
          object = AbstractShapeFactory.build(json, this.options);
          break;
        case 'behavior':
          object = AbstractBehaviorFactory.build(json, this.options);
          break;
        case 'structure':
          throw new Error('No implemented!');
          break;
        default:
          throw new Error('No implemented!');
          break;
      }
      return object;
    }
  }

  plot(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.info('Francy will handle the following object: ', json);
      let object;
      switch (json.type) {
        case 'shape':
          object = AbstractShapeFactory.build(json, this.options);
          break;
        case 'behavior':
          object = AbstractBehaviorFactory.build(json, this.options);
          break;
        case 'structure':
          throw new Error('No implemented!');
          break;
        default:
          throw new Error('No implemented!');
          break;
      }
      return object;
    }
  }

  draw(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.info('Francy will handle the following object: ', json);
      let object;
      switch (json.type) {
        case 'shape':
          object = AbstractShapeFactory.build(json, this.options);
          break;
        case 'behavior':
          object = AbstractBehaviorFactory.build(json, this.options);
          break;
        case 'structure':
          throw new Error('No implemented!');
          break;
        default:
          throw new Error('No implemented!');
          break;
      }
      return object;
    }
  }
}

exports.Francy = Francy;

window.Francy = Francy;
