import { expect } from 'chai';
import canConstruct from './index';

describe('firstBadVersion', () => {
  it('should fail to build ransom note', () => {
    const input = [
      ['a', ''],
      ['a', 'b'],
      ['aa', 'ab'],
      ['a', ''],
    ];

    input.forEach(([ransomNote, magazine]) => {
      expect(canConstruct(ransomNote, magazine)).to.be.equal(false);
    });
  });
  it('should succeed to build ransom note', () => {
    const input = [
      ['', ''],
      ['aa', 'aab'],
      ['azz', 'zzaa'],
      ['ransom note', 'no random ste'],
    ];

    input.forEach(([ransomNote, magazine]) => {
      expect(canConstruct(ransomNote, magazine)).to.be.equal(true);
    });
  });
});
