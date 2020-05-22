export default function frequencySort(s: string) {
  return Object.entries(
    s.split('').reduce((frequencies, ch) => {
      frequencies[ch] = ~~frequencies[ch] + 1;
      return frequencies;
    }, <{ string: number }>{})
  )
    .sort(([, f1], [, f2]) => f2 - f1)
    .reduce((str, [ch, freq]) => str + new Array(freq).fill(ch).join(''), '');
}
