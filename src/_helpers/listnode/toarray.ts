// eslint-disable-next-line no-unused-vars
import ListNode from '.';

export default function listNodeToArray(root: ListNode | null): number[] {
  const result = [];

  let current: ListNode | null = root;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
