// eslint-disable-next-line no-unused-vars
import TreeNode from '../_helpers/treenode';

function traverse(node: TreeNode, memo: number[]): void {
  if (node === null) {
    return;
  }

  traverse(node.left, memo);
  memo.push(node.val);
  traverse(node.right, memo);
}

export default function kthSmallest(root: TreeNode, k: number): number {
  const memo = [];
  traverse(root, memo);
  return memo[k - 1];
}
