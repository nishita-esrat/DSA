// ascending order
let arrAscendingOrder = [1, 2, 3, 5, 8, 9, 10];
let target = 8;

function binarySearchingAscendingOrder(arrAscendingOrder, target) {
  let start = 0;
  let end = arrAscendingOrder.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arrAscendingOrder[mid] == target) {
      return `${target} is founded at index ${mid}`;
    } else if (arrAscendingOrder[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return "not founded";
}
console.log(binarySearchingAscendingOrder(arrAscendingOrder, target));

// descending order
let arrDescendingOrder = [10, 9, 8, 5, 3, 2, 1];

function binarySearchingDescendingOrder(arrDescendingOrder, target) {
  let start = 0;
  let end = arrDescendingOrder.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arrDescendingOrder[mid] == target) {
      return `${target} is founded at index ${mid} `;
    } else if (arrDescendingOrder[mid] > target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "not founded";
}

console.log(binarySearchingDescendingOrder(arrDescendingOrder, target));

// order agnostic binary search

function orderAgnosticBinarySearching(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[0] < arr[arr.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
      return `${target} is founded at index ${mid} `;
    } else if (isAscending) {
      if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return "not founded";
}

console.log(orderAgnosticBinarySearching(arrDescendingOrder, target));