// Instantiate a new graph
var Graph = function() {
  this.data = {};
};

Graph.prototype.addNode = function(node) {
  this.data[node] = [];
};

Graph.prototype.contains = function(node) {
  return this.data[node] !== undefined;
};

Graph.prototype.removeNode = function(node) {

  if (this.data[node].length > 0) {
    this.data[node].forEach((edge) => {
      this.data[edge].splice(this.data[edge].indexOf(node), 1);
    });
  }

  delete this.data[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.data[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.data[fromNode].push(toNode);
  this.data[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.data[fromNode].splice(this.data[fromNode].indexOf(toNode, 1));
  this.data[toNode].splice(this.data[toNode].indexOf(fromNode), 1);
};

Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.data).forEach((val) => {
    cb(val);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * addNode
 * best: O(1)
 * worst: O(1)
 *
 * contains
 * best: O(1)
 * worst: O(1)
 *
 * removeNode
 * best: O(1)
 * worst: O(1 + x)
 *
 * hasEdge
 * best: O(1)
 * worst: O(1 + x)
 *
 * addEdge
 * best: O(1)
 * worst: O(1)
 *
 * removeEdge
 * best: O(1)
 * worst: O(1)
 *
 * forEachNode
 * best: O(1) - empty graph
 * worst: O(2n * cb)
 */

