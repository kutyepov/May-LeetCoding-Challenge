import { expect } from 'chai';
import checkInclusion from './index';

describe('checkInclusion', () => {
  it('should find a permutation of "ab" in "bachelor" string', () => {
    expect(checkInclusion('ab', 'bachelor')).to.be.equal(true);
  });
  it('should find a permutation of "ab" in "eidbaooo" string', () => {
    expect(checkInclusion('ab', 'eidbaooo')).to.be.equal(true);
  });
  it('should find a permutation of "debitcard" in "tttbadcreditzzz" string', () => {
    expect(checkInclusion('debitcard', 'tttbadcreditzzz')).to.be.equal(true);
  });
  it('should not find a permutation of "ab" in "eidboaooo" string', () => {
    expect(checkInclusion('ab', 'eidboaooo')).to.be.equal(false);
  });
  it('should not find a permutation of "abab" in "ab" string', () => {
    expect(checkInclusion('abab', 'ab')).to.be.equal(false);
  });
});
