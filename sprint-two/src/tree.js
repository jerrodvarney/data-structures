var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var contains = false;

  //BASE CASE
  if (this.value === target) {
    contains = true;
    return contains;
  }

  //RECURSIVE CASE
  if (this.children.length > 0) {

    for (var i = 0; i < this.children.length; i++) {
      if (contains) {
        break;
      }
      var child = this.children[i];
      contains = child.contains(target);
    }
  }

  return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * addChild
 * best: O(1)
 * worst: O(1)
 *
 * contains
 * best: O(1)
 * worst: O(n)
 */