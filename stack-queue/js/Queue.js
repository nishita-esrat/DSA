class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(value) {
    this.head = this.tail = value ? new Node(value) : null;
    this.length = value ? 1 : 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      console.log("Queue is empty");
      return;
    }

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);
