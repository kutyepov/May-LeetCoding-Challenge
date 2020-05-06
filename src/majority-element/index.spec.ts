import { expect } from 'chai';
import majorityElement from './index';

describe('majorityElement', () => {
  const values: [Array<number>, number][] = [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
    [[1], 1],
  ];
  values.forEach(([input, output]) => {
    it(`should find ${output} majority element in ${JSON.stringify(
      input
    )} array`, () => {
      expect(majorityElement(input)).to.be.equal(output);
    });
  });
});
