# 6-0-1-linked-list-continued

## Singly and Doubly Linked list

### Singly Linked list

A singly Linked list only contains a link (pointer) to the next node, which means that it can only be traversed in one direction from head to tail. This takes up less space in memory.

This is pretty much what we covered in the last lecture.

### Doubly Linked list

A doubly Linked list contains both a link to the next node and a link to the previous node. This means that it can be traversed in both directions, but takes up more space in memory.

```js
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

```

## tradeoffs

Doubly linked lists require more memory (they must store the data value, the next pointer, and the previous pointer)
Doubly linked lists can be traversed in reverse (singly linked lists can't)
Inserting into the middle of a doubly linked list can be done in constant time (assuming you have a pointer to where it should be inserted).
Singly linked lists should be used when memory is limited. Doubly linked lists should be used when memory is not limited and searching is required.

## Cycles

A cycle in a Linked list is a situation where the last node of the list points to one of the previous nodes, forming a loop. This means that there is no end to the list and traversing the list will continue indefinitely.

```js
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

// create a cycle by making the last node point to the first node
list.tail.next = list.head;
```

How how do we check to see if our Linked list 

[Visual examples](https://visualgo.net/en/list)