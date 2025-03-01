// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function binarySearchingLeetCode268(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let index = 0; index < nums.length; index++) {
    actualSum += nums[index];
  }

  return expectedSum - actualSum;
}

console.log(binarySearchingLeetCode268(nums));
