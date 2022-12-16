var BinarySearchTree = function(value) {
  var newTree = {};
  _.extend(newTree, methods);
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  return newTree;
};

var methods = {};

methods.insert = function(node) {

  //LEFT SIDE CHECK
  if (this.value > node) {

    //BASE CASE
    if (this.left === null) {
      this.left = BinarySearchTree(node);
      return;
    }

    //RECURSIVE CASE
    this.left.insert(node);
    return;
  }

  //RIGHT SIDE - BASE CASE
  if (this.right === null) {
    this.right = BinarySearchTree(node);
    return;
  }

  //RECURSIVE CASE
  this.right.insert(node);
};

methods.contains = function(node) {

  //BASE CASE
  if (this.value === node) {
    return true;
  }

  //RECURSIVE CASE
  if (this.left && this.value > node) {
    return this.left.contains(node);
  }

  if (this.right && this.value < node) {
    return this.right.contains(node);
  }

  return false;
};

methods.depthFirstLog = function(cb) {

  //BASE CASE
  cb(this.value);

  //RECURSIVE CASE
  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
