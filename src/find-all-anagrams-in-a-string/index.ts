function buildFrequencyMap(str: string): number[] {
  const frequencyMap = new Array(26).fill(0);
  const offset = 'a'.charCodeAt(0);

  for (const ch of str) {
    frequencyMap[ch.charCodeAt(0) - offset]++;
  }

  return frequencyMap;
}

function compareFrequencies(a: number[], b: number[]) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

export default function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];

  const pLen = p.length;
  const pFreq = buildFrequencyMap(p);

  for (let i = 0; i < s.length - (pLen - 1); i++) {
    const sFreq = buildFrequencyMap(s.substr(i, pLen));
    if (compareFrequencies(pFreq, sFreq)) {
      result.push(i);
    }
  }

  return result;
}
