export default function frequencySort(s: string) {
  const frequencies = <{ string: number }>{};

  for (const ch of s) {
    frequencies[ch] = ~~frequencies[ch] + 1;
  }

  return Object.entries(frequencies)
    .sort(([, f1], [, f2]) => f2 - f1)
    .reduce((str, [ch, freq]) => str + ch.repeat(freq), '');
}
