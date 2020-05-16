// eslint-disable-next-line no-unused-vars
import ListNode from '../_helpers/listnode';

export default function oddEvenList(head: ListNode) {
  if (head === null || head.next === null) {
    return head;
  }

  let odd = new ListNode(head.val);
  let even = new ListNode(head.next.val);
  let evenHead = even;
  let oddHead = odd;
  let i = 3;

  let current = head.next.next;

  while (current !== null) {
    if (i % 2 === 0) {
      //even
      even.next = new ListNode(current.val);
      even = even.next;
    } else {
      odd.next = new ListNode(current.val);
      odd = odd.next;
    }
    i++;
    current = current.next;
  }

  odd.next = evenHead;
  return oddHead;
}
