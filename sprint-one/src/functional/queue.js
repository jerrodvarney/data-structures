var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[1];

    for (var key in storage) {

      if (key - 1 === 0) {
        delete storage[key];
        continue;
      }

      storage[key - 1] = storage[key];
      delete storage[key];

    }

    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
