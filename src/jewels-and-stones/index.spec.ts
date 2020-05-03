import { expect } from 'chai';
import numJewelsInStones from './index';

describe('numJewelsInStones', () => {
  it('should find three jewels', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).to.be.equal(3);
  });
  it('should find zero jewels', () => {
    expect(numJewelsInStones('z', 'ZZ')).to.be.equal(0);
    expect(numJewelsInStones('z', '')).to.be.equal(0);
    expect(numJewelsInStones('', 'AA')).to.be.equal(0);
  });
});
