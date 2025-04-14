// 225. Implement Stack using Queues


class Stack_Queue_leetcode_225 {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(value) {
    this.q1.enqueue(value);
  }

  pop() {
    // Move all except last from q1 to q2
    while (this.q1.size() > 1) {
      this.q2.enqueue(this.q1.dequeue());
    }

    const lastValue = this.q1.dequeue(); // the "top" of the stack

    // Swap q1 and q2
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return lastValue;
  }

  top() {
    // Move all except last from q1 to q2
    while (this.q1.size() > 1) {
      this.q2.enqueue(this.q1.dequeue());
    }

    const lastValue = this.q1.dequeue();
    this.q2.enqueue(lastValue); // put it back

    // Swap q1 and q2
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return lastValue;
  }

  empty() {
    return this.q1.isEmpty();
  }
}
