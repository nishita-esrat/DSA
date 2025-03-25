



class Node {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
}



class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = this.tail = node;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value);
    this.head.pre = node;
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

    const node = new Node(value);
    const previousNode = this.findeNode(index - 1);
    const temp = previousNode.next;
    previousNode.next = node;
    node.pre = previousNode;
    node.next = temp;
    temp.pre = node;
    this.length++;
  }

  findeNode(index) {
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

      count++;
      data = data.next;
    }

    return data;
  }

  deleteNode(index) {
    if (index < 1 || index > this.length) {
      console.log("Invalid index");
      return;
    }

    if (index === 1) {
      this.head = this.head.next;
      this.head.pre = null;
      this.length--;
      if (this.length === 0) return (this.tail = null);
      return;
    }

    if (index === this.length) {
      this.tail = this.tail.pre;
      this.tail.next = null;
      this.length--;
      return;
    }

    const node = this.findeNode(index - 1);
    node.next.next.pre = node;
    node.next = node.next.next;
    this.length--;
  }

  updateNode(value, index) {
    if (index < 1 || index > this.length) {
      console.log("Invalid index");
      return;
    }

    const node = this.findeNode(index);
    node.value = value;
  }

  print() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }
}

const list = new DoublyLinkedList(10);
list.append(20);
list.prepend(30);
list.appendAtPosition(5, 2);
list.deleteNode(3);
list.updateNode(50, 2);
list.print()
console.log(list);
