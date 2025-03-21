class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  appendAtPosition(value, index) {
    if (index < 1 || index > this.length + 1) {
      console.log("Invalid index");
      return;
    }

    if (index === 1) {
      this.prepend(value);
      return;
    }

    if (index === this.length + 1) {
      this.append(value);
      return;
    }

    let node = new Node(value);
    let previousNode = this.findNode(index - 1);
    const temp = previousNode.next;
    previousNode.next = node;
    node.next = temp;
    this.length++;
  }

  findNode(index) {
    if (index < 1 || index > this.length) {
      console.log("Index out of bounds");
      return null;
    }

    let data = this.head;
    let count = 1;

    while (data) {
      if (count === index) {
        break;
      }
      data = data.next;
      count++;
    }
    return data;
  }

  updateNode(value, index) {
    let previousNode = this.findNode(index);
    previousNode.value = value;
  }

  deleteNode(index) {
    if (index < 1 || index > this.length) {
      console.log("Invalid index");
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) this.tail = null;
      return;
    }

    let previousNode = this.findNode(index - 1);

    if (index === this.length) {
      this.tail = previousNode;
      this.tail.next = null;
    } else {
      previousNode.next = previousNode.next.next;
    }

    this.length--;
  }

  print() {
    let data = this.head;

    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
}

const list = new LinkedList(10);
list.append(20);
list.prepend(5);
list.updateNode(15, 2);
list.appendAtPosition(25, 4);
list.deleteNode(1);
list.deleteNode(3);
list.append(50);
list.deleteNode(2)
list.print();
console.log(list);
