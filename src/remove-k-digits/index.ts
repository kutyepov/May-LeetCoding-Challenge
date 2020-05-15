export default function removeKdigits(num: string, k: number): string {
  if (num.length === k) {
    return '0';
  }

  const numArr: string[] = num.split('');

  while (k > 0 && numArr.length > 0) {
    for (let i = 1; i < numArr.length; i++) {
      if (numArr[i - 1] > numArr[i]) {
        numArr.splice(i - 1, 1);
        k--;
        break;
      } else if (i === numArr.length - 1) {
        numArr.splice(i, 1);
        k--;
        break;
      }
    }
  }

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== '0') {
      break;
    }
    numArr.splice(0, 1);
    i--;
  }

  return numArr.length === 0 ? '0' : numArr.join('');
}
