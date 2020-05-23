function firstBadVersion(
  isBadVersion: (n: number) => boolean
): (n: number) => number {
  return function (n: number): number {
    let high: number = n;
    let low: number = 0;
    while (high > low) {
      let mid: number = Math.floor((high + low) / 2);
      let current: boolean = isBadVersion(mid);

      if (current === true) {
        if (isBadVersion(mid - 1) === false) {
          return mid;
        } else {
          high = mid - 1;
        }
      } else {
        if (isBadVersion(mid + 1) === true) {
          return mid + 1;
        } else {
          low = Math.max(low, mid + 1);
        }
      }
    }
    return 0;
  };
}

export default firstBadVersion;
