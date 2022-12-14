var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[Object.keys(this.storage).length];

  delete this.storage[Object.keys(this.storage).length];

  return temp;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
