var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[ Object.keys(this.storage).length + 1] = value;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[1];

  for (var key in this.storage) {

    if (key - 1 === 0) {
      delete this.storage[1];
      continue;
    }

    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }

  return temp;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
