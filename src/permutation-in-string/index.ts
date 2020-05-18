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

export default function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Freq = buildFrequencyMap(s1);
  const s2Freq = buildFrequencyMap(s2.substr(0, s1.length));

  if (compareFrequencies(s1Freq, s2Freq)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    s2Freq[s2.charCodeAt(i - s1.length) - ASCII_OFFSET]--;
    s2Freq[s2.charCodeAt(i) - ASCII_OFFSET]++;
    if (compareFrequencies(s1Freq, s2Freq)) {
      return true;
    }
  }

  return false;
}
