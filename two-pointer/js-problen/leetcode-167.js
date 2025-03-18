// 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.

const numbers = [2, 7, 11, 15];
const target = 9;

function twoPointerLeetCode167(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] === target) {
      return [start + 1, end + 1];
    } else if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }
}

console.log(twoPointerLeetCode167(numbers, target));
