// 876. Middle of the Linked List

function singleLinkedListLeetCode876(head) {
  if (!head || !head.next) {
    return head;
  }
  let slow = head;
  let fast = head;


  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
