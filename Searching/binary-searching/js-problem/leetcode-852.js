// 852. Peak Index in a Mountain Array

// You are given an integer mountain array arr of length n where the values
// increase to a peak element and then decrease.
// Return the index of the peak element.
// Your task is to solve it in O(log(n)) time complexity.

let arr = [0, 10, 5, 2];

function binarySearchingLeetCode852(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[mid - 1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

console.log(binarySearchingLeetCode852(arr));
