// eslint-disable-next-line no-unused-vars
import TreeNode from '../_helpers/treenode';

export default function areCousins(
  root: TreeNode,
  x: number,
  y: number
): boolean {
  const q = [root];

  let isXfound = false;
  let isYfound = false;

  let xLevel = 0;
  let yLevel = 0;

  let xParent = root;
  let yParent = root;

  let currentLevel = 0;

  // modified breadths first search
  // a.k.a. level order traversal
  while (q.length > 0) {
    let width = q.length;
    currentLevel++;
    while (width > 0) {
      const node = q.pop();
      if (node.left?.val === x || node.right?.val === x) {
        xParent = node;
        xLevel = currentLevel;
        isXfound = true;
      }
      if (node.left?.val === y || node.right?.val === y) {
        yParent = node;
        yLevel = currentLevel;
        isYfound = true;
      }

      if (isXfound && isYfound) {
        break;
      }

      node.left && q.unshift(node.left);
      node.right && q.unshift(node.right);
      width--;
    }

    // doesn't make sense to keep searching if either 'x' or 'y' was found
    // both values should have been found on the same level to be cousins
    if (isXfound || isYfound) {
      break;
    }
  }
  return isYfound && isXfound && xLevel === yLevel && xParent !== yParent;
}
