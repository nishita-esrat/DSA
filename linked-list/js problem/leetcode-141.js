// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following
// the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note
// that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

function singleLinkedListLeetCode141(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // Cycle detected
    }
  }

  return false;
}


console.log(singleLinkedListLeetCode141(head));


