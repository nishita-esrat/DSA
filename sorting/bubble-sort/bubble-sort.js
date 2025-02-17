const arr = [7, 5, 8, 12, 2, 9, 10];

function bubbleSorting(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

bubbleSorting(arr);

// new arr [ 2, 5, 7, 8, 9, 10, 12 ]

console.log(bubbleSorting(arr));
