import findMaxLength from '.';
import { expect } from 'chai';

describe('findMaxLength', () => {
  it('should return "2" for "[0,1]" input', () => {
    expect(findMaxLength([0, 1])).to.be.equal(2);
  });
  it('should return "2" for "[0,1,0]" input', () => {
    expect(findMaxLength([0, 1, 0])).to.be.equal(2);
  });
  it('should return "6" for "[0,0,1,0,0,0,1,1]" input', () => {
    expect(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1])).to.be.equal(6);
  });
});
