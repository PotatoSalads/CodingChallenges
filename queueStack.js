/* Instructions: Queue Stack

Write a stack class. Once you're done, implement a queue using two stacks.
Here's how you can check if your code works:

const queue = new Queue();


queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log(val1, val2, val3);

*/

class Stack {
  constructor() {
    this.arr = [];
  }
  get size() {
    return this.arr.length;
  }
  push(pancake) {
    this.arr.push(pancake);
  }
  pop() {
    if (this.arr.length === 0) return null;
    return this.arr.pop();
  }
}

class Queue {
  constructor() {
    this.in = new Stack();
    this.out = new Stack();
  }
  enqueue(pancake) {
    this.in.push(pancake);
  }
  dequeue() {
    if (this.out.size === 0) {
      while (this.in.size) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log(val1, val2, val3);