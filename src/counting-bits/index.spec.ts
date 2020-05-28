import { expect } from 'chai';
import countBits from './index';

describe('countBits', () => {
  const inputs = [
    {
      input: 2,
      output: [0, 1, 1],
    },
    {
      input: 5,
      output: [0, 1, 1, 2, 1, 2],
    },
  ];

  inputs.forEach(({ input, output }) => {
    it(`should return ${JSON.stringify(output)} for ${input}`, () => {
      expect(countBits(input)).to.be.eql(output);
    });
  });
});
