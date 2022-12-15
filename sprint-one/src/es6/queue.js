class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    this.storage[Object.keys(this.storage).length + 1] = value;
  }

  dequeue() {
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
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var test = new Queue();
