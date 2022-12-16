var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage.indexOf(item) !== -1) {
    return;
  }
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  for (var index in this.storage) {
    if (this.storage[index] === item) { return true; }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.indexOf(item) !== -1) {
    delete this.storage[this.storage.indexOf(item)];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
