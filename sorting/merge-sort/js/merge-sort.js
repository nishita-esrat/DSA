const arr = [7, 5, 8, 12, 10, 2, 9, 10];

function mergeSorting(arr, start, end) {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);

  mergeSorting(arr, start, mid);
  mergeSorting(arr, mid + 1, end);
  mergeArray(arr, start, mid, end);
}

function mergeArray(arr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  let merged = [];

  while (left <= mid && right <= end) {
    if (arr[left] < arr[right]) {
      merged.push(arr[left]);
      left++;
    } else {
      merged.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    merged.push(arr[left]);
    left++;
  }

  while (right <= end) {
    merged.push(arr[right]);
    right++;
  }

  for (let i = 0; i < merged.length; i++) {
    arr[start + i] = merged[i];
  }
}

mergeSorting(arr, 0, arr.length - 1);
console.log(arr); // Output: [2, 5, 7, 8, 9, 10, 12]
