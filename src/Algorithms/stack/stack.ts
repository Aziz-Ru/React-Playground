class Stack {
  stack: number[];
  constructor() {
    this.stack = [];
  }
  push(value: number) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  print() {
    return this.stack;
  }
}
export default Stack;
