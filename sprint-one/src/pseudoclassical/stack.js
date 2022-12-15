var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
};

Stack.prototype.pop = function() {
  var temp = this.storage[Object.keys(this.storage).length];

  delete this.storage[Object.keys(this.storage).length];

  return temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
