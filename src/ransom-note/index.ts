export default function canConstruct(
  ransomNote: string,
  magazine: string
): boolean {
  const map: Map<string, number> = new Map();

  for (let character of magazine) {
    const count: number | undefined = map.get(character);
    if (count === undefined) {
      map.set(character, 1);
    } else {
      map.set(character, count + 1);
    }
  }

  for (let character of ransomNote) {
    const count: number | undefined = map.get(character);
    if (!count) {
      return false;
    }
    map.set(character, count - 1);
  }

  return true;
}
