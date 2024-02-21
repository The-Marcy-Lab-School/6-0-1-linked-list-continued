class Node {
  constructor(data = null) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {

  #length = 0;

  constructor() {
      this.head = null;
      this.tail = null;
  }

  appendToTail(data) {
      // add new Node with data to tail
      const newNode = new Node(data);
      this.#length++;
      // 0 values
      if (!this.head && !this.tail) {
          this.head = newNode;
      }
      else {
          this.tail.next = newNode;
      }
      this.tail = newNode;
  }

  prependToHead(data) {
      // add new Node with data to head   
      const newNode = new Node(data);
      this.#length++;

      // 0 values
      if (!this.head && !this.tail) {
          this.tail = newNode;
      }
      else {
          newNode.next = this.head;
      }

      this.head = newNode
  }

  removeHead() {
    if (!this.head)  return

    this.#length--;

    if (this.head === this.tail) {
        // Only one node in the list
        const data = this.head.data;
        this.head = null;
        this.tail = null;
        return data;
    }
  }
  removeFromTail() {
    if (!this.head)  return

    this.#length--;

    if (this.head === this.tail) {
        // Only one node in the list
        const data = this.head.data;
        this.head = null;
        this.tail = null;
        return data;
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
    }

    const data = this.tail.data;
    currentNode.next = null;
    this.tail = currentNode;
    return data;
    }

  contains(data) {
      // returns true is any Node in the LinkedList contains the value data, false otherwise
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
      //returns the length of the LinkedList as an integer value
      /*
      let currentNode = this.head;
      let count = 0;
      while(currentNode){ 
          count++;
          currentNode = currentNode.next;
      }
      return count;
      */
      return this.#length;
  }

}

const makeCopyLL = (head) => {

    const newLinkedList = new LinkedList();
    curr = head;
    next = head.next;
    while (!head.tail){
        
        newLinkedList.appendToTail(curr.data);
        

    }

}