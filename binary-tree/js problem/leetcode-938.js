// 938. Range Sum of BST

function BSTLeetCode938(root, low, high) {
  let sum = 0;

  const arr = [root];

  while (arr.length != 0) {
    let currentNode = arr.shift();

    if (currentNode.left) {
      arr.push(currentNode.left);
    }

    if (currentNode.right) {
      arr.push(currentNode.right);
    }

    if (low <= currentNode?.val && high >= currentNode?.val) {
      sum += currentNode.val;
    }
  }

  return sum;
}
