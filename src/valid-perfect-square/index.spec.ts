import { expect } from 'chai';
import isPerfectSquare from './index';

describe('isPerfectSquare', () => {
  it('should return true for perfect squares', () => {
    const perfectSquares: number[] = [1, 4, 9, 16, 25, 36, 49, 5625, 10000];

    perfectSquares.forEach((num) => {
      expect(isPerfectSquare(num)).to.be.equal(true);
    });
  });

  it('should return false for imperfect squares', () => {
    const imperfectSquares: number[] = [2, 3, 5, 200, 1001];

    imperfectSquares.forEach((num) => {
      expect(isPerfectSquare(num)).to.be.equal(false);
    });
  });
});
