//  Search Insert Position
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.


let nums = [1, 2, 4];
let target = 3;

function binarySearchingLeetCode35(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  if (nums[mid] < target) {
    return mid + 1;
  }
  if (nums[mid] > target) {
    return mid;
  }
}

console.log(binarySearchingLeetCode35(nums, target));
