// 237. Delete Node in a Linked List

function singleLinkedListLeetCode237(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
