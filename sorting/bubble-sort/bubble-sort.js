const arr = [7, 5, 8, 12, 2, 9, 10];

function bubbleSorting(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

bubbleSorting(arr);

// new arr [ 2, 5, 7, 8, 9, 10, 12 ]

console.log(bubbleSorting(arr));
