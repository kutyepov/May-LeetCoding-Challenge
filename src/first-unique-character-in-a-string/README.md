# [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

**Examples:**

You are given an API `bool isBadVersion(version)` which will return whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```

## Solution

- [Using Array](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/first-unique-character-in-a-string/index.ts)
- [Using Hashmap](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/78847e174e124c1095da418a600e5beff137efb8/src/first-unique-character-in-a-string/index.ts)

## Complexity

Time Complexity: O(n)

Space Complexity: O(1)

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/first-unique-character-in-a-string/index.spec.ts)
