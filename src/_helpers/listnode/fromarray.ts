import ListNode from '.';

export default function listNodeFromArray(values: number[]): ListNode {
  const root = new ListNode(values[0]);

  let current = root;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return root;
}
