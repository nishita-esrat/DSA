// 653. Two Sum IV - Input is a BST

function BSTLeetCode653(root, k) {
  const arr = [];

  DFSInOrderTree(root, arr);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

function DFSInOrderTree(node, arr) {
  if (!node) {
    return;
  }

  DFSInOrderTree(node.left, arr);
  arr.push(node.val);
  DFSInOrderTree(node.right, arr);
}
