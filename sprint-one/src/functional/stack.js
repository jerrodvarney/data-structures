var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //add a key value pair to storage at the next number in sequence
    storage[Object.keys(storage).length + 1] = value;
  };

  someInstance.pop = function() {
    //store value to be delete so it can be returned
    var temp = storage[Object.keys(storage).length];
    delete storage[Object.keys(storage).length];

    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
