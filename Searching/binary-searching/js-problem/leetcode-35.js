//  Search Insert Position
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

let nums = [1, 3];
let target = 2;

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

  if (nums[0] > target) {
    return 0;
  } else if (nums[mid] > target) {
    return mid;
  } else {
    return mid + 1;
  }
}

console.log(binarySearchingLeetCode35(nums, target));
