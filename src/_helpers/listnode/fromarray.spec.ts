import { expect } from 'chai';
import listNodeFromArray from './fromarray';

describe('List Node / From Array', () => {
  it('should create 1 -> 2 -> 3 -> null list from [1,2,3] array', () => {
    const root = listNodeFromArray([1, 2, 3]);

    expect(root.val).to.equal(1);
    expect(root.next.val).to.equal(2);
    expect(root.next.next.val).to.equal(3);
    expect(root.next.next.next).to.equal(null);
  });
});
