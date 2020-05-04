export default function findComplement(num: number): number {
  if (num === 0) {
    return 1;
  }
  let numberOfSignificantBits: number = 0;
  let n: number = num;

  while (n !== 0) {
    n = n >> 1;
    numberOfSignificantBits = numberOfSignificantBits + 1;
  }

  let mask = (2 ** 32 - 1) >>> (32 - numberOfSignificantBits);

  return num ^ mask;
}
