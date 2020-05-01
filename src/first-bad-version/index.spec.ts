import { expect } from 'chai';
import firstBadVersion from './index';

describe('firstBadVersion', () => {
  it('should find correct bad versions', () => {
    const inputs = [
      [5, 4],
      [5, 5],
      [100, 5],
    ];

    inputs.forEach(([latestVersion, badVersion]) => {
      expect(
        firstBadVersion((n) => n >= badVersion)(latestVersion)
      ).to.be.equal(badVersion);
    });
  });
});
