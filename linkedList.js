/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  function newNode(val) {
    return {
      value: val,
      next: null
    }
  }

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(value) {
    let nodeToAdd = newNode(value);
    if (head === null) {
      head = nodeToAdd;
      tail = nodeToAdd;
      return nodeToAdd;
    }
    tail.next = nodeToAdd;
    tail = nodeToAdd;
    return nodeToAdd;
  }

  function remove(number) {
    let count = 0;
    let current = head;
    let previous = null;
    while (current !== null) {
      if (count === number) {
        if (current === head) {
          return head = current.next;
        }
        if (current === tail) {
          previous.next = null;
          return tail = previous;
        }
        return previous.next = current.next

      } else {
        count++
        previous = current;
        current = current.next
      }

    }
    return false;
  }

  function get(number) {
    let count = 0;
    let current = head;
    while (current !== null) {
      if (count === number) {
        return current;
      } else {
        count++;
        current = current.next
      }
    }
    return false;
  }

  function insert(value, index) {
    let nodePosition1 = get(index);
    let nodePosition0 = get(index - 1);
    let createNode = newNode(value);
    if (nodePosition1 === false) {
      return false;
    } else if (index === 0) {
      createNode.next = head;
      return head = createNode;
    } else {
      createNode.next = nodePosition1;
      return nodePosition0.next = createNode;
    }
  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}