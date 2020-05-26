import { expect } from 'chai';
import bstFromPreorder from '.';
// eslint-disable-next-line no-unused-vars
import TreeNode from '../_helpers/treenode';

function preorderTraversal(root: TreeNode | null): Array<number> {
  const result = [];

  (function traverse(node: TreeNode | null) {
    if (node === null) {
      return null;
    }
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  })(root);

  return result;
}

describe('BST From Preorder Traversal', function () {
  it('should return null for empty traversal', () => {
    expect(bstFromPreorder([])).to.equal(null);
  });

  it('input should match traversed (preorder) output', () => {
    const inputs = [[15, 13, 12, 18], [15], [1, 2, 3], [8, 5, 1, 7, 10, 12]];
    inputs.forEach((input) => {
      const root: TreeNode | null = bstFromPreorder(input);
      expect(preorderTraversal(root)).to.deep.equal(input);
    });
  });
});
