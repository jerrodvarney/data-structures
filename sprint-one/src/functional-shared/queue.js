var Queue = function() {
  var someInstance = {
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length + 1] = value;
};

queueMethods.dequeue = function() {
  var temp = this.storage[1];

  for (var key in this.storage) {

    if (key - 1 === 0) {
      delete this.storage[key];
      continue;
    }

    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }

  return temp;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
