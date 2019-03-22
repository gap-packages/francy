import { DataHandler, Decorators, Utilities, Graph } from 'francy-core';

/* global d3 */

/**
 * This class converts Francy Json into DOT Language required by Graphviz.
 * 
 * @see https://www.graphviz.org/doc/info/lang.html
 * @extends {DataHandler}
 */
export default class DOTLanguageConverterHelper extends DataHandler {

  constructor(context) {
    super();
    this.context = context;
    this.dotString = '';
  }

  initialize() {
    this.directed = this.data.canvas.graph.type === 'directed';
    this.tree = this.data.canvas.graph.type === 'tree';
    if (this.tree) {
      this.treeLinks = {};
      Object.values(this.data.canvas.graph.nodes).forEach(node => {
        if (!this.treeLinks[node.id]) {
          this.treeLinks[node.id] = [];
        }
        this.treeLinks[node.id].push(node.parent);
      });
    }
  }

  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  convert() {
    this.dotString += this.directed ? 'digraph ' : 'graph ';
    this.dotString += `"${this.data.canvas.title}" {`;
    this.dotString += `\t graph [ rankdir="${this.context.configuration.object.graphvizRankdir}" ]`;
    this._iterateNodes();
    if (this.tree) {
      this._createTree();
    } else {
      this._iterateLinks();
    }
    return this.dotString += '\n}';
  }

  _iterateNodes() {
    Object.values(this.data.canvas.graph.nodes).forEach(node => {
      this.dotString += this._createNode(node);
    });
  }

  _createTree() {
    Object.values(this.data.canvas.graph.nodes).forEach(node => {
      this.dotString += this._createLeaf(node);
    });
  }

  _createLeaf(node) {
    let dotLink = `\n\t"${node.id}"`;
    dotLink += this.directed ? ' -> ' : ' -- ';
    return dotLink += `{ ${this.treeLinks[node.id].join('" "')} }`;
  }

  _createNode(node) {
    let dotNode = `\n\t"${node.id}"`;
    dotNode += ' [';
    dotNode += ` id="${node.id}"`;
    dotNode += ' style="filled"';
    dotNode += ` label="${node.title.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}"`;
    dotNode += ` shape="${node.type}"`;
    dotNode += ` fillcolor="${node.conjugate ? d3.color(Graph.colors(node.conjugate * 5)).hex() : node.color ? node.color : d3.color(Graph.colors(node.layer * 5)).hex()}"`;
    return dotNode += ' ];';
  }

  _iterateLinks() {
    Object.values(this.data.canvas.graph.links).forEach(link => {
      this.dotString += this._createLink(link);
    });
  }

  _createLink(link) {
    let dotLink = `\n\t "${Utilities.isObject(link.source) ? link.source.id : link.source}"`;
    dotLink += this.directed ? ' -> ' : ' -- ';
    dotLink += `"${Utilities.isObject(link.target) ? link.target.id : link.target}"`;
    dotLink += ' [';
    dotLink += ` id="${link.id}"`;
    if (link.title || link.type || link.color) {
      dotLink += link.title ? ` label="${link.title.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')}"` : '';
      dotLink += link.type ? ` shape="${link.type}"` : '';
      dotLink += link.color ? ` fillcolor="${d3.color(link.color).hex()}" color="${d3.color(link.color).hex()}"` : '';
    }
    return dotLink += ' ];';
  }

}
