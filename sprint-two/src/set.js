var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    return;
  }
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  for (var index in this._storage) {
    if (this._storage[index] === item) { return true; }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage.indexOf(item) !== -1) {
    delete this._storage[this._storage.indexOf(item)];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * add
 * best: O(1) - empty array
 * worst: O(2n)
 *
 * contains
 * best: O(1) - empty array
 * worst: O(2n)
 *
 * remove
 * best: O(1) - empty array
 * worst: O(2n)
 */