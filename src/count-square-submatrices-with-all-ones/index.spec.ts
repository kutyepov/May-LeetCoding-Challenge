import { expect } from 'chai';
import countSquares from './index';

describe('countSquares', () => {
  it('should find 15 squares', () => {
    const matrix = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1],
    ];

    expect(countSquares(matrix)).to.be.equal(15);
  });
  it('should find 7 squares', () => {
    const matrix = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];

    expect(countSquares(matrix)).to.be.equal(7);
  });
});
