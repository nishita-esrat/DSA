const arr = [7, 5, 8, 12, 2, 9, 10];

function QuickSorting(arr, start, end) {
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  QuickSorting(arr, start, index - 1);
  QuickSorting(arr, index + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left <= right) {
    if (pivot > arr[left]) {
      left++;
    } else if (pivot < arr[right]) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  [arr[start], arr[right]] = [arr[right], arr[start]];

  return right;
}

QuickSorting(arr, 0, arr.length - 1);
console.log(arr);
