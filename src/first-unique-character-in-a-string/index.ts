export default function firstUniqChar(str: string): number {
  /*
    Since the problem states:
      > Note: You may assume the string contain only lowercase letters.
    An array with 26 elements will suffice to track
    how many different letters are used in the string. 
  */
  const charactersFreq = new Array(26).fill(0);
  /*
    ASCII codes for:

    'a' is 97
    'b' is 98
    ...
    'z' is 122

    Since, indexes of charactersFreq go from 0 to 25,
    an offset is needed to prevent out of boundary errors.
  */
  const offset = 'a'.charCodeAt(0);

  /*
    A loop to build a frequency table.
    For example, for string = "test", the table will look like:
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0]
             e                           s t
    which means that 'e' and 's' are used once,
    and 't' is twice.
  */
  for (let ch of str) {
    charactersFreq[ch.charCodeAt(0) - offset]++;
  }

  /*
    Iterate over the string again and check whether
    any given character is present in frequency table
    and is used once. Once such character is found,
    return its index.
  */
  for (let i = 0; i < str.length; i++) {
    if (charactersFreq[str.charCodeAt(i) - offset] === 1) {
      return i;
    }
  }
  return -1;
}
