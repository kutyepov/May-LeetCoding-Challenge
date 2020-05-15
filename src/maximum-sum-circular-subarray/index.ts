/*
  Credit: https://leetcode.com/articles/maximum-sub-circular-subarray/
*/

function subarrayMaxSum(
  array: number[],
  start: number,
  end: number,
  multiplier: number
): number {
  /* implementation of Kadane's algorithm
   * https://en.wikipedia.org/wiki/Maximum_subarray_problem#Kadane's_algorithm
   */
  let max: number = Number.MIN_SAFE_INTEGER;
  let currentMax: number = max;

  for (let i = start; i < end; i++) {
    currentMax = multiplier * array[i] + Math.max(0, currentMax);
    max = Math.max(currentMax, max);
  }

  return max;
}

export default function maxSubarraySumCircular(A: number[]): number {
  let sum = 0;
  for (const num of A) {
    sum += num;
  }

  return Math.max(
    subarrayMaxSum(A, 0, A.length, 1),
    sum + subarrayMaxSum(A, 1, A.length, -1),
    sum + subarrayMaxSum(A, 0, A.length - 1, -1)
  );
}
