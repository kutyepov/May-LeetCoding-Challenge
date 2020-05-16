// eslint-disable-next-line no-unused-vars
import ListNode from '.';

export default function listNodeToArray(root: ListNode): number[] {
  const result = [];

  let current = root;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
