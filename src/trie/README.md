# [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)

Implement a trie with `insert`, `search`, and `startsWith` methods.

**Example**:

```
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
```

**Note**:

- You may assume that all inputs are consist of lowercase letters `a-z`.
- All inputs are guaranteed to be non-empty strings.

## Solution

[index.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/trie/index.ts)

## Complexity

- Insert:
  - Time: O(word.length)
  - Space: O(word.length)
- Search:
  - Time: O(word.length)
  - Space: O(1)
- Starts With:
  - Time: O(prefix.length)
  - Space: O(1)

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/trie/index.spec.ts)
