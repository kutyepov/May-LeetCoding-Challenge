import { expect } from 'chai';
import maxSubarraySumCircular from './index';

describe('maxSubarraySumCircular', () => {
  const inputs: { input: number[]; output: number }[] = [
    {
      input: [1, -2, 3, -2],
      output: 3,
    },
    {
      input: [5, -3, 5],
      output: 10,
    },
    {
      input: [3, -1, 2, -1],
      output: 4,
    },
    {
      input: [3, -2, 2, -3],
      output: 3,
    },
    {
      input: [-2, -3, -1],
      output: -1,
    },
  ];

  inputs.forEach(({ input, output }) => {
    it(`should have maximum sum of ${output} for array ${JSON.stringify(
      input
    )}`, () => {
      expect(maxSubarraySumCircular(input)).to.be.equal(output);
    });
  });
});
