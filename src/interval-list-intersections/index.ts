export default function intervalIntersection(
  A: number[][],
  B: number[][]
): number[][] {
  const result: number[][] = [];

  let a: number = 0;
  let b: number = 0;

  while (a < A.length && b < B.length) {
    const [a1, a2] = A[a];
    const [b1, b2] = B[b];

    let lower = Math.max(a1, b1);
    let upper = Math.min(a2, b2);

    upper - lower >= 0 && result.push([lower, upper]);

    upper === a2 ? a++ : b++;
  }

  return result;
}
