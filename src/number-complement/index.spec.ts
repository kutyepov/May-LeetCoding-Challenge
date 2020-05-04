import { expect } from 'chai';
import findComplement from './index';

describe('findComplement', () => {
  const values = [
    [5, 2],
    [1, 0],
    [0, 1],
    [7, 0],
    [2, 1],
  ];
  values.forEach(([input, output]) => {
    it(`complement of ${input} should be ${output}`, () => {
      expect(findComplement(input)).to.be.equal(output);
    });
  });
});
