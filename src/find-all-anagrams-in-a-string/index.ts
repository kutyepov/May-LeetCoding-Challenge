export default function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];

  let strings: string[] = [];
  let n = p.length;

  for (let i = 0; i < s.length - (n - 1); i++) {
    strings.push(s.substr(i, n));
  }

  p = p.split('').sort().join('');

  for (let i = 0; i < strings.length; i++) {
    let str = strings[i].split('').sort().join('');
    if (str === p) {
      result.push(i);
    }
  }

  return result;
}
