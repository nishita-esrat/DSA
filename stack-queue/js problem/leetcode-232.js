// 232. Implement Queue using Stacks

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }


  pop() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  peek() {
    return this.head ? this.head.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

class Stack_Queue_leetcode_232 {
  constructor() {
    this.s1 = new Stack(); // input stack
    this.s2 = new Stack(); // output stack
  }

  push(value) {
    this.s1.push(value);
  }

  pop() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  peek() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.peek();
  }

  empty() {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }
}
