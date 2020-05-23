import { expect } from 'chai';
import intervalIntersection from './index';

describe('intervalIntersection', () => {
  it('should return intersection of two intervals', () => {
    expect(
      intervalIntersection(
        [
          [0, 2],
          [5, 10],
          [13, 23],
          [24, 25],
        ],
        [
          [1, 5],
          [8, 12],
          [15, 24],
          [25, 26],
        ]
      )
    ).to.be.eql([
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ]);
  });
});