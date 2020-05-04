# [Number Complement](https://leetcode.com/problems/number-complement/)

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

**Example 1:**

```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

**Note:**

- The given integer is guaranteed to fit within the range of a 32-bit signed integer.
- You could assume no leading zero bit in the integer’s binary representation.
- This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

## Solutions

- [naive](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/851005ea6e77e50c9eeec34c7e657585153ad7e4/src/number-complement/index.ts)

- [bitwise](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/number-complement/index.ts)

## Complexity

Time Complexity: `O(1)`\*

Space Complexity: `O(1)`

\* `while` loop will be executed at most 32 times because there are 32 bits in an integer

## Explanation

### [Naive](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/851005ea6e77e50c9eeec34c7e657585153ad7e4/src/number-complement/index.ts) algorithm works as follows:

- convert integer to its binary representation as string. For example, `5` -> `"101"`
- iterates over every character of the string:
  - casts character to integer
  - negates integer
  - casts it back to a string
  - appends negated character to resulting string

For example, for integer `5` and its binary representation `"101"`, negated string will be built as shown: `""` -> `"0"` -> `"01"` -> `"010"`.

Finally, negated string is converted back to the integer and result it returned.

### [Bitwise](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/number-complement/index.ts) solution is more appropriate solution of this problem and works as follows:

It counts how many bits are actually used to represent `num`, so we can build appropriate `mask` to [XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR) `num` with. The reason why there's a need in `mask` is that we cannot simply apply [~ (bitwise NOT)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT) operator to `num`, because it will negate all bits, including all zeros that go before the actual number. For example, "true" binary representation of `5` is `00000000000000000000000000000101`, so all `0`s before `101` will be negated as well and we would get the wrong answer. So, a `mask` is created with 32 `1`s: (2<sup>32</sup> - 1) -> '11111111111111111111111111111111', then it's [>>> (Zero-fill right shift)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Unsigned_right_shift)-ed `32 - number of actually used bits` times. For example, integer `5` has three bits that matter -> `101`, so the `mask` will be shifted 29 times and would look like: `00000000000000000000000000000111`. Finally, when the mask is ready, `num` is [XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)-ed with `mask` to get the final result.

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/number-complement/index.spec.ts)
