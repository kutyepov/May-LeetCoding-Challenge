// eslint-disable-next-line no-unused-vars
import ListNode from '../_helpers/listnode';

export default function oddEvenList(head: ListNode | null) {
  if (head === null || head.next === null) {
    return head;
  }

  let odd = head;
  let even: ListNode | null = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}
