# First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have `n` versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.

**Example:**

You are given an API `bool isBadVersion(version)` which will return whether `version` is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

```
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
```

## Solution

[index.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/first-bad-version/index.ts)

## Complexity

Time Complexity: O(log(n))

Space Complexity: O(1)

## Explanation

Algorithm uses slightly modified version of [Binary Search](https://en.wikipedia.org/wiki/Binary_search_algorithm). "Regular" binary search terminates when `target` element is found, while this modified version of the algorithm keeps looking for the first occurrence of the element in `input`.

## Tests

[index.spec.ts](https://github.com/kutyepov/May-LeetCoding-Challenge/blob/master/src/first-bad-version/index.spec.ts)
