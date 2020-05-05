import { expect } from 'chai';
import firstUniqChar from './index';

describe('firstUniqChar', () => {
  it('should return -1 for a string without unique characters', () => {
    expect(firstUniqChar('aabb')).to.be.equal(-1);
  });

  const values: [string, number][] = [
    ['test', 1],
    ['teest', 3],
    ['zest', 0],
    ['zzeesst', 6],
  ];

  values.forEach(([input, output]) => {
    it(`should return ${output} for "${input}" string`, () => {
      expect(firstUniqChar(input)).to.be.equal(output);
    });
  });
});
