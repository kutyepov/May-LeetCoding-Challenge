class StockSpanner {
  stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  next(price: number): number {
    let count: number = 1;
    const stack = this.stack;

    while (stack.length > 0 && stack[stack.length - 1][0] <= price) {
      count += stack.pop()![1];
    }

    stack.push([price, count]);
    return count;
  }
}

export default StockSpanner;
