export default function findMaxLength(nums: number[]): number {
  const map: { [key: number]: number } = { 0: -1 };
  let count = 0;

  return nums.reduce((max, num, i) => {
    if (num === 0) {
      count--;
    } else {
      count++;
    }

    if (map[count] !== undefined) {
      max = Math.max(max, i - map[count]);
    } else {
      map[count] = i;
    }

    return max;
  }, 0);
}
