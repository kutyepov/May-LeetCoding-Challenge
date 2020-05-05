export default function firstUniqChar(str: string): number {
  /*
    Build a map, where character is a `key` 
    and value is its position in a string.
    If value is `null`, then character was
    encountered more than once.
  */
  const map: Map<string, number> = new Map();

  for (let i: number = 0; i < str.length; i++) {
    const character = str[i];
    if (map.has(character)) {
      // Found a duplicate character in a string
      map.set(character, null);
    } else {
      // Presumably unique character.
      // Saving its position in string
      map.set(character, i);
    }
  }

  let pos: number = null;

  /*
    Iterate over all values in map and find
    an element with lowest index
   */

  for (let [_, index] of map) {
    if (pos === null && index !== null) {
      pos = index;
    }

    if (pos !== null && index !== null) {
      pos = Math.min(index, pos);
    }
  }

  return pos === null ? -1 : pos;
}
