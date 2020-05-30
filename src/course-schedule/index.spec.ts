import { expect } from 'chai';
import canFinish from './index';

describe('canFinish', () => {
  it('should return true for numCourses = 2, prerequisites = [[1,0]]', () => {
    expect(canFinish(2, [[1, 0]])).to.be.equal(true);
  });
  it('should return false for numCourses = 2, prerequisites = [[1,0], [0,1]]', () => {
    expect(
      canFinish(2, [
        [1, 0],
        [0, 1],
      ])
    ).to.be.equal(false);
  });
});
