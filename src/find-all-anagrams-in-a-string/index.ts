const ASCII_OFFSET = 'a'.charCodeAt(0);

function buildFrequencyMap(str: string): number[] {
  const frequencyMap = new Array(26).fill(0);

  for (const ch of str) {
    frequencyMap[ch.charCodeAt(0) - ASCII_OFFSET]++;
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
  const sLen = s.length;

  if (pLen > sLen) {
    return [];
  }

  const pFreq = buildFrequencyMap(p);
  const sFreq = buildFrequencyMap(s.substr(0, pLen));

  if (compareFrequencies(sFreq, pFreq)) {
    result.push(0);
  }

  for (let i = pLen; i < sLen; i++) {
    sFreq[s.charCodeAt(i - pLen) - ASCII_OFFSET]--;
    sFreq[s.charCodeAt(i) - ASCII_OFFSET]++;
    if (compareFrequencies(pFreq, sFreq)) {
      result.push(i - pLen + 1);
    }
  }

  return result;
}
