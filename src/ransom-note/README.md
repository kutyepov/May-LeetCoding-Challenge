# [Ransom Note](https://leetcode.com/problems/ransom-note/)

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

**Note**:
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## Solution

[index.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/ransom-note/index.ts)

## Complexity

Time Complexity: `O(n)`

Space Complexity: `O(1)`\*

\* space complexity is constant because `magazine` string consists of lower case characters only. Thus, the size of `map` will never exceed 26 keys.

## Explanation

Algorithms creates [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) to keep track of the amount of characters in `magazine`. For example, for `magazine = 'random ransom'`, a map would look like:

```
{
  'r': 2,
  'a': 2,
  'n': 2,
  'd': 1,
  'o': 2,
  'm': 2,
  's': 1
}
```

Then, algorithm iterates over every character in `ransomNote` string. If there is a character that doesn't exist in `map` or the amount of remaining characters in map is equal to `0`, it returns `false`. If character exists in `map` and its value greater than `0`, then it would "use" this character for ransom note (decrement the counter in `map`).

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/ransom-note/index.spec.ts)
