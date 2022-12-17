var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;



  list.addToHead = function(value) {

    //if empty list instance
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;

    //otherwise
    } else {
      var temp = list.head;

      list.head = Node(value);
      list.head.next = temp;

      list.head.previous = list.head;
    }

  };


  list.addToTail = function(value) {
    //if empty list instance
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;

    //otherwise
    } else {
      var temp = list.tail;

      list.tail = Node(value);
      list.tail.previous = temp;

      list.tail.next = list.tail;
    }
  };


  list.removeHead = function() {
    var temp = list.head;

    //if list has single value
    if (!temp.next) {
      delete list.head;
      return temp.value;
    }

    list.head = list.head.next;
    list.head.previous = null;

    return temp.value;
  };


  list.removeTail = function() {
    var temp = list.tail;

    //if list has single value
    if (!temp.previous) {
      delete list.previous;
      return temp.value;
    }

    list.tail = temp.previous;
    list.tail.next = null;

    return temp.value;
  };


  list.contains = function(value) {
    var node = list.head;

    //helper to check nested nodes
    var check = function(node) {

      //BASE CASE
      if (node.value === value) {
        return true;
      }

      //RECURSIVE CASE
      if (node.next !== null) {
        node = node.next;
        return check(node);
      }

      return false;
    };

    return check(node);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.next = null;
  node.previous = null;
  node.value = value;

  return node;
};

