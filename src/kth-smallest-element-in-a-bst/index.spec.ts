import { expect } from 'chai';
import kthSmallest from './index';
import TreeNode from '../_helpers/treenode';

describe('kthSmallest', () => {
  it('should find correct kth element in BST', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(4);
    root.left.left.left = new TreeNode(1);

    expect(kthSmallest(root, 1)).to.be.equal(1);
    expect(kthSmallest(root, 2)).to.be.equal(2);
    expect(kthSmallest(root, 3)).to.be.equal(3);
    expect(kthSmallest(root, 4)).to.be.equal(4);
    expect(kthSmallest(root, 5)).to.be.equal(5);
    expect(kthSmallest(root, 6)).to.be.equal(6);
  });

  it('should return -1 for empty tree', () => {
    expect(kthSmallest(null, 0)).to.be.equal(-1);
  });
});
