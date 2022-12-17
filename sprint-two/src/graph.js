// Instantiate a new graph
var Graph = function() {
  this.data = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.data[node] = [];
  console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.data[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (this.data[node].length > 0) {
    this.data[node].forEach((edge) => {
      this.data[edge].splice(this.data[edge].indexOf(node), 1);
    });
  }

  delete this.data[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.data[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.data[fromNode].push(toNode);
  this.data[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.data[fromNode].splice(this.data[fromNode].indexOf(toNode, 1));
  this.data[toNode].splice(this.data[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.data).forEach((val) => {
    cb(val);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


