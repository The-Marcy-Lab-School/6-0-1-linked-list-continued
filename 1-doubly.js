class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    this.prev = null; // Reference to the previous node
  }
}

class LinkedList {
  #length = 0;
  
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendToTail(data) {
    const newNode = new Node(data);
    this.#length++;
    
    if (!this.head && !this.tail) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }
    
    this.tail = newNode;
  }

  prependToHead(data) {
    const newNode = new Node(data);
    this.#length++;

    if (!this.head && !this.tail) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this.head = newNode;
  }

  removeHead() {
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.#length--;
    return data;
  }

  contains(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  length() {
    return this.#length;
  }
}
