# [Cousins in Binary Tree](https://leetcode.com/problems/cousins-in-binary-tree/)

In a binary tree, the root node is at depth `0`, and children of each depth `k` node are at depth `k+1`.

Two nodes of a binary tree are cousins if they have the same depth, but have **different parents**.

We are given the root of a binary tree with unique values, and the values `x` and `y` of two different nodes in the tree.

Return `true` if and only if the nodes corresponding to the values `x` and `y` are cousins.

**Example 1:**

![graph](https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png)

```
Input: root = [1,2,3,4], x = 4, y = 3
Output: false
```

**Example 2:**

![graph](https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png)

```
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
```

**Example 3:**

![graph](https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png)

```
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
```

## Solution

- [index.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/cousins-in-binary-tree/index.ts)

## Complexity

Time Complexity: O(n)

Space Complexity: O(W), where W is breadths/width of the tree

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/cousins-in-binary-tree/index.spec.ts)
