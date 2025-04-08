class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(value) {
    this.head = this.tail = value ? new Node(value) : null;
    this.length = value ? 1 : 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      console.log("Stack is empty");
      return;
    }

    if (this.length - 1 === 0) {
      this.head = this.tail = null;
      this.length = 0;
      return;
    }

    let previousNode = this.findNode(this.length - 1);
    this.tail = previousNode;
    this.tail.next = null;
    this.length--;
  }

  findNode(index) {
    if (index < 1 || index > this.length) {
      console.log("index out of bounds");
      return;
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
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.pop();
myStack.pop();

console.log(myStack);
