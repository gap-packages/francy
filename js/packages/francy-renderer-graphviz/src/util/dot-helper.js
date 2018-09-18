import { DataHandler, Decorators } from 'francy-core';

export default class DOTLanguageHelper extends DataHandler {

  constructor() {
    super();
    this.dotString = '';
  }

  // TODO https://www.graphviz.org/doc/info/lang.html
  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  build() {
    this.dotString += this.directed ? 'digraph ' : 'graph ';
    this.dotString += '"' + this.data.canvas.title + '" {\n';
    this._iterateNodes();
    if (this.tree) {
      this._createTree();
    } else {
      this._iterateLinks();
    }
    this.dotString += '\n}';
    return this.dotString;
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
    let dotLink = '\t' + node.id;
    dotLink += this.directed ? ' -> ' : ' -- ';
    dotLink += '{ ' + this.treeLinks[node.id].join(' ') + ' }';
    dotLink += '\n';
    return dotLink;
  }

  _createNode(node) {
    let dotNode = '\t' + node.id;
    dotNode += ' [';
    dotNode += ' label="' + node.title + '"';
    dotNode += ' shape="' + node.type + '"';
    dotNode += node.color ? ' fillcolor="' + node.color + '"' : '';
    dotNode += ' ];\n';
    return dotNode;
  }

  _iterateLinks() {
    Object.values(this.data.canvas.graph.links).forEach(link => {
      this.dotString += this._createLink(link);
    });
  }

  _createLink(link) {
    let dotLink = '\t' + link.source;
    dotLink += this.directed ? ' -> ' : ' -- ';
    dotLink += link.target;
    if (link.title || link.type || link.color) {
      dotLink += ' [';
      dotLink += link.title ? ' label="' + link.title + '"' : '';
      dotLink += link.type ? ' shape="' + link.type + '"' : '';
      dotLink += link.color ? ' color="' + link.color + '"' : '';
      dotLink += ' ];';
    }
    dotLink += '\n';
    return dotLink;
  }

}
