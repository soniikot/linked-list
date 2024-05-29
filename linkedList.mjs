import { Node } from "./node.mjs";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
  atIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
  }
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }
      currentNode = currentNode.next;
      count++;
    }
    return null;
  }

  toString() {
    let result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    result.push("null");
    console.log(result.join(" -> "));
  }
  insertAt(value, index) {
    if (index < 0) {
      throw new Error("Index must be a non-negative integer");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
      return;
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode && count < index - 1) {
      currentNode = currentNode.next;
      count++;
    }

    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;

      if (!newNode.next) {
        this.tail = newNode;
      }
    } else {
      throw new Error("Index out of bounds");
    }
  }

  removeAt(index) {
    if (index < 0) {
      throw new Error("Index must be a non-negative integer");
    }

    if (index >= this.size()) {
      throw new Error("No item with this index");
    }

    if (index === 0) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      let count = 0;

      while (count < index - 1) {
        currentNode = currentNode.next;
        count++;
      }

      currentNode.next = currentNode.next.next;

      if (!currentNode.next) {
        this.tail = currentNode;
      }
    }
  }
}

const linkedList2 = new LinkedList();

linkedList2.append("cat");
linkedList2.append("dog");
linkedList2.append("cow");
linkedList2.insertAt("duck", 3);
linkedList2.toString();
linkedList2.removeAt(1);
linkedList2.toString();
console.log(linkedList2.size());
