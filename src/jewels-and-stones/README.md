# [Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have. Each character in S is a type of stone you have. You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

**Example1:**

```
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

**Example2:**

```
Input: J = "z", S = "ZZ"
Output: 0
```

Note:

    `S` and `J` will consist of letters and have length at most 50.
    The characters in `J` are distinct.

## Solution

[index.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/jewels-and-stones/index.ts)

## Complexity

Time Complexity: O(J+S)

Space Complexity: O(J)

## Explanation

Algorithms creates [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), where keys are characters from string `J`. Given `J = 'aA'`, set would look like:

```
{
  'a': undefined,
  'A': undefined,
}
```

There's a little trade off when creating a Set: space complexity of the algorithm goes up to `O(J)`, but time complexity goes down from quadratic to linear, because we can check if `key` exists in `O(1)` time, contrary to `O(n)` time when looking up for a character in a string. So, given that, in the next phase, the algorithms loops through every character of `S` and checks if there's a key in `Set` with such key. If there is, it increments jewels counter.

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/jewels-and-stones/index.spec.ts)
