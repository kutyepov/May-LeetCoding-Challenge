// eslint-disable-next-line no-unused-vars
import TreeNode from '../_helpers/treenode';

export default function kthSmallest(root: TreeNode, k: number): number {
  const stack: TreeNode[] = [];
  let current = root;
  while (stack.length > 0 || current !== null) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();

    if (--k === 0) {
      return current.val;
    }

    current = current.right;
  }
  return -1;
}
