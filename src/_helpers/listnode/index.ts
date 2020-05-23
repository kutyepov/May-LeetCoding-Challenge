class ListNode {
  next: ListNode | null;
  val: number;
  constructor(value: number) {
    this.val = value;
    this.next = null;
  }
}

export default ListNode;
