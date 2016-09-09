///////////////////////

var Graph = function () {
  this.storage = {}, 
  this.nodes = []
}

var Node = function(styleId, styleFamily) {
  this.styleId = styleId;
  this.styleFamily = styleFamily;
  this.moreIBU;
  this.lessIBU;
  this.moreSRM;
  this.lessSRM;

}

Graph.prototype.addNode = function(styleId, styleFamily) {
  var newNode = new Node(styleId, styleFamily); 
  this.nodes.push(newNode); 
  this.storage[styleId] = newNode; 
}; 

Graph.prototype.setNode = function(styleId, moreIBU, lessIBU, moreSRM, lessSRM) {
  this.storage[styleId].moreIBU = this.storage[moreIBU]; 
  this.storage[styleId].lessIBU = this.storage[lessIBU]; 
  this.storage[styleId].moreSRM = this.storage[moreSRM]; 
  this.storage[styleId].lessSRM = this.storage[lessSRM]; 
}; 

Graph.prototype.isAdjacent = function(node) {
  var edges = [this.moreIBU, this.lessIBU, this.moreSRM, this.lessSRM];
  var check = false;
  for (var i = 0; i < edges.length; i++) {
    if (edges[i].styleId === node.styleId) {
      return true;
    }
  }
};

Graph.prototype.allAdjacent = function() {
  return [this.moreIBU.styleId, this.lessIBU.styleId,
   this.moreSRM.styleId, this.lessSRM.styleId];

}

Graph.prototype.isOneOff = function(node) {
  var edges = [this.moreIBU, this.lessIBU, this.moreSRM, this.lessSRM];
  var check = false;
  for (var i = 0; i < edges.length; i++) {
    if (edges[i].isAdjacent(node)){ //could be undefined
      return check = true;
    }
  }
}

lagerGraph = new Graph();
lagerGraph.addNode(94, [93, 94, 97]);
lagerGraph.addNode(75, [75, 76, 98]);
lagerGraph.addNode(80, [80, 81, 101, 102, 85, 82]);
lagerGraph.addNode(103, [103, 83]);
lagerGraph.addNode(88, [88, 89, 90]);

lagerGraph.setNode(94, 103, null, null, null);
lagerGraph.setNode(75, null, 80, null, null);
lagerGraph.setNode(80, 75, 103, null, null);
lagerGraph.setNode(103, 88, 94, null, null);
lagerGraph.setNode(88, 75, 103, null, null);

aleGraph = new Graph()
aleGraph.addNode(1, [1, 3, 4, 5, 10]);
aleGraph.addNode(22, [7, 8, 9, 22]);
aleGraph.addNode(25, [25, 29, 32, 33, 37]);
aleGraph.addNode(11, [11, 12]);
aleGraph.addNode(19, [18, 19, 104, 158]);
aleGraph.addNode(23, [16, 20, 21, 23, 24, 42]);
aleGraph.addNode(30, [2, 30, 31, 164]);
aleGraph.addNode(49, [48, 49, 50, 52, 53, 118]);
aleGraph.addNode(65, [27, 70, 71, 72, 65]);

aleGraph.setNode(1, 30, 22, 22, null);
aleGraph.setNode(22, 1, 11, 11, 1);
aleGraph.setNode(25, 30, 1, null, 22);  
aleGraph.setNode(11, null, null, 19, 22); //moreIBU can be porter or redAle so we defaulted to null
aleGraph.setNode(19, 23, 11, 23, 11);
aleGraph.setNode(23, null, 19, null, 19);
aleGraph.setNode(30, null, 25, null, null);
aleGraph.setNode(49, 1, 65, 1, 65);
aleGraph.setNode(65, 49, null, 49, null);

module.exports.aleGraph = aleGraph; 
module.exports.lagerGraph = lagerGraph; 
