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
