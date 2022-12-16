var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) === undefined ? [] : this._storage.get(index);
  var tuple = [k, v];

  //Reassignment if key alreadyexists t = tuple
  bucket.forEach((t) => {
    if (t[0] === k) {
      t[1] = v;
      this._storage.set(index, bucket);
      return;
    }
  });

  //Otherwise it pushes new tuple into bucket
  bucket.push(tuple);
  this._storage.set(index, bucket);
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var tuple in bucket) {
    if ((bucket[tuple].indexOf(k) === 0)) {
      return bucket[tuple][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  //If a tuple in this bucket contains the key, delete that tuple array
  for (var i in bucket) {
    if (bucket[i][0] === k) {
      delete bucket[i];
    }
    //How to remove bucket if it has no tuples???
    if (bucket.length === 0) {
      this._storage.set(index, undefined);
      return;
    }
  }
  this._storage.set(index, bucket);
};art




/*
 * Complexity: What is the time complexity of the above functions?
 */


