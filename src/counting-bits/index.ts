export default function countBits(num: number): number[] {
  const result: number[] = [];
  while (num > 0) {
    result.unshift(
      Array.from(num.toString(2)).filter((bit) => bit === '1').length
    );
    num--;
  }
  result.unshift(0);
  return result;
}
