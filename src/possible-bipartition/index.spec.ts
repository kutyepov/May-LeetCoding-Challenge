import { expect } from 'chai';
import possibleBipartition from './index';

describe('possibleBipartition', () => {
  it('should return "true" for N = 4, dislikes = [[1,2],[1,3],[2,4]]', () => {
    expect(
      possibleBipartition(4, [
        [1, 2],
        [1, 3],
        [2, 4],
      ])
    ).to.be.equal(true);
  });
  it('should return "false" for N = 3, dislikes = [[1,2],[1,3],[2,3]]', () => {
    expect(
      possibleBipartition(3, [
        [1, 2],
        [1, 3],
        [2, 3],
      ])
    ).to.be.equal(false);
  });
  it('should return "false" for N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]', () => {
    expect(
      possibleBipartition(5, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [1, 5],
      ])
    ).to.be.equal(false);
  });
});
