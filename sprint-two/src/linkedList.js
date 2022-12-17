var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target, node = list.head) {
    //BASE CASE
    if (node.value === target) {
      return true;
    }

    if (node.next === null) {
      return false;
    }

    //RECURSIVE CASE
    return list.contains(target, node.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/**
 * addToTail
 * best: O(1)
 * worst: O(1)
 *
 *
 * removeHead
 * best: O(1)
 * worst: O(1)
 *
 * contains
 * best: O(1)
 * worst: O(n)
 */
