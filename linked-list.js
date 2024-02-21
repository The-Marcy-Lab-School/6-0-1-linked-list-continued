class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  #length = 0

  constructor(){
    this.head = null;
    this.tail = null;
  }

  removeFromTail() {
    if(!this.head) return

    this.#length--;

    if (this.head === this.tail) {
      // Only one node in the list
      const data = this.head.data;
      this.head = null;
      this.tail = null;
    return data;


  }

  }

}