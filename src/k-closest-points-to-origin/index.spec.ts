import { expect } from 'chai';
import kClosest from './index';

describe('kClosest', () => {
  it('should return [[-2,2]] for points = [[1,3],[-2,2]], K = 1', () => {
    expect(
      kClosest(
        [
          [1, 3],
          [-2, 2],
        ],
        1
      )
    ).to.be.eql([[-2, 2]]);
  });
  it('should return [[3,3],[-2,4]] for points = [[3,3],[5,-1],[-2,4]], K = 2', () => {
    expect(
      kClosest(
        [
          [-2, 4],
          [3, 3],
        ],
        2
      )
    ).to.be.eql([
      [3, 3],
      [-2, 4],
    ]);
  });
});
