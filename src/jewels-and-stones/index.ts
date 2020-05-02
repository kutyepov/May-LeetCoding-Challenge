export default function numJewelsInStones(J: string, S: string): number {
  let jewels: number = 0;
  const set: Set<string> = new Set(J);
  for (let ch of S) {
    if (set.has(ch)) {
      jewels++;
    }
  }
  return jewels;
}
