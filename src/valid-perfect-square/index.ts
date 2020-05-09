export default function isPerfectSquare(num: number): boolean {
  if (num === 1) {
    return true;
  }

  let x: number = num;
  let y: number = 1;
  let precision: number = 0.99;

  // Babylonian method of computing square root
  // https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
  // in this case, it uses low precision, since it is not needed for perfect squares
  while (x - y > precision) {
    x = (x + y) / 2;
    y = num / x;
  }

  // cast x to int
  x = ~~x;

  return x * x === num;
}
