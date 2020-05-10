import { expect } from 'chai';
import findJudge from './index';

describe('findJudge', () => {
  const tests = [
    {
      N: 2,
      trust: [[1, 2]],
      expected: 2,
    },
    {
      N: 3,
      trust: [
        [1, 3],
        [2, 3],
      ],
      expected: 3,
    },
    {
      N: 3,
      trust: [
        [1, 3],
        [2, 3],
        [3, 1],
      ],
      expected: -1,
    },
    {
      N: 3,
      trust: [
        [1, 2],
        [2, 3],
      ],
      expected: -1,
    },
    {
      N: 4,
      trust: [
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [4, 3],
      ],
      expected: 3,
    },
  ];
  tests.forEach(({ N, trust, expected }) => {
    it(`should return ${expected} for N=${N}; trust=${JSON.stringify(
      trust
    )}`, () => {
      const result = findJudge(N, trust);
      expect(result).to.be.equal(expected);
    });
  });
});
