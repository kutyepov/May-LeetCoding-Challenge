import { expect } from 'chai';
import ListNode from './index';
describe('List Node', function () {
  it('should create a node with value 5 and null as next node', () => {
    const node = new ListNode(5);
    expect(node.val).to.equal(5);
    expect(node.next).to.equal(null);
  });
});
