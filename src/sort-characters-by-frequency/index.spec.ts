import { expect } from 'chai';
import frequencySort from './index';

describe('frequencySort', () => {
  it('should return "eert" or "eetr" for "tree"', () => {
    const result = frequencySort('tree');
    expect(result === 'eert' || result === 'eetr').to.be.equal(true);
  });

  it('should return "aaaccc" or "cccaaa" for "cccaaa"', () => {
    const result = frequencySort('cccaaa');
    expect(result === 'aaaccc' || result === 'cccaaa').to.be.equal(true);
  });

  it('should return "bbAa" for "Aabb"', () => {
    const result = frequencySort('Aabb');
    expect(result).to.be.equal('bbAa');
  });
});
