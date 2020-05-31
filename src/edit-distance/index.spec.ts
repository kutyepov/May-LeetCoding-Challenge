import { expect } from 'chai';
import minDistance from './index';

describe('minDistance', () => {
  it('should take 3 operations to convert "horse" into "ros"', () => {
    expect(minDistance('horse', 'ros')).to.be.equal(3);
  });
  it('should take 5 operations to convert "intention" into "intention"', () => {
    expect(minDistance('intention', 'execution')).to.be.equal(5);
  });
});
