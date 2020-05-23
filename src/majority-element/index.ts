export default function majorityElement(nums: Array<number>): number {
  /* 
  Frequency Map - key/value pair where 
    key is an element in `nums` array and
    value - how many times an element appears in `nums`
  */
  const frequencyMap: { [key: string]: number } = {};

  // build frequency map
  for (let n of nums) {
    // ~~ -> is used to cast `undefined` to `0`
    frequencyMap[n] = ~~frequencyMap[n] + 1;
  }

  const threshold = Math.floor(nums.length / 2);

  // iterate through the frequency map and return
  // an element that appears more than |_(n / 2)_| times.
  for (let key in frequencyMap) {
    if (frequencyMap[key] > threshold) {
      return Number(key);
    }
  }

  return 0;
}
