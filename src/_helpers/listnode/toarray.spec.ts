import { expect } from 'chai';
import listNodeToArray from './toarray';
import ListNode from '.';

describe('List Node / To Array', () => {
  it('should create  [1,2,3] array from  1 -> 2 -> 3 -> null list', () => {
    const root = new ListNode(1);
    root.next = new ListNode(2);
    root.next.next = new ListNode(3);

    expect(listNodeToArray(root)).to.be.eql([1, 2, 3]);
  });
});
