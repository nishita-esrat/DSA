const arr = [7, 5, 8, 12, 2, 9, 10];

function selectionSorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

selectionSorting(arr);

// new arr [ 2, 5, 7, 8, 9, 10, 12 ]

console.log(selectionSorting(arr));
