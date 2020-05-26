import TreeNode from '../_helpers/treenode';

export default function bstFromPreorder(
  preorder: Array<number>
): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  let current = 0;

  function helper(boundary: number): TreeNode | null {
    if (current === preorder.length || preorder[current] > boundary) {
      return null;
    }
    const node: TreeNode = new TreeNode(preorder[current]);
    current = current + 1;
    node.left = helper(node.val);
    node.right = helper(boundary);
    return node;
  }

  return helper(Number.MAX_VALUE);
}
