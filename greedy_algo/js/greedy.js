const arr = [7, 5, 8, 12, 10, 2, 9, 10];

function mergeSorting(arr, start, end) {
  if (start >= end) return arr;

  let mid = Math.floor((start + end) / 2);
  mergeSorting(arr, start, mid);
  mergeSorting(arr, mid + 1, end);
  mergeArray(arr, start, mid, end);

  return arr;
}

function mergeArray(arr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  const merge = [];

  while (left <= mid && right <= end) {
    if (arr[left] < arr[right]) {
      merge.push(arr[left]);
      left++;
    } else {
      merge.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    merge.push(arr[left]);
    left++;
  }

  while (right <= end) {
    merge.push(arr[right]);
    right++;
  }

  for (let index = 0; index < merge.length; index++) {
    arr[start + index] = merge[index];
  }
}

function greedyAlgo(arr, start, end) {
  const sortedArr = mergeSorting(arr, start, end);

  let note = 100;
  let count = 0;

  for (let index = sortedArr.length - 1; index >= 0; index--) {
    if (note === 0) return;
    while (note >= sortedArr[index]) {
      note = note - sortedArr[index];
      count++;
    }
  }

  return count;
}

console.log(greedyAlgo(arr, 0, arr.length - 1));
