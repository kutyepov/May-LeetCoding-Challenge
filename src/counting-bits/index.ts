export default function countBits(num: number): number[] {
  const result: number[] = new Array(num + 1).fill(0);
  let i = 0;

  while (i++ < num) {
    const half: number = result[~~(i / 2)];
    result[i] = i & 1 ? half + 1 : half;
  }

  return result;
}
