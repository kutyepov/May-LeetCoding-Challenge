import { expect } from 'chai';
import areCousins from './index';
import TreeNode from '../_helpers/treenode';

describe('areCousins', () => {
  let tree: TreeNode | null = null;

  beforeEach(() => {
    tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
  });

  it('should return false for nodes located on different levels of the tree', () => {
    tree!.left!.left = new TreeNode(4);
    const result = areCousins(tree, 4, 3);
    expect(result).to.be.equal(false);
  });

  it('should return false for sibling nodes', () => {
    const result = areCousins(tree, 2, 3);
    expect(result).to.be.equal(false);
  });

  it('should return true for cousin nodes', () => {
    tree!.right!.right = new TreeNode(5);
    tree!.left!.left = new TreeNode(4);
    const result = areCousins(tree, 4, 5);
    const result2 = areCousins(tree, 5, 4);
    expect(result).to.be.equal(true);
    expect(result2).to.be.equal(true);
  });
});
