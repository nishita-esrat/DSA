

const arr1 = [1, 1, 2, 3, 4, 5];
const arr2 = [1, 1, 1, 2, 2, 3, 5];

function addTwoArrayTwoPointerAlgo(arr1, arr2) {
  let start = 0;
  let end = 0;
  let newArr = [];

  while (end <= arr2.length - 1) {
    if (arr1[start] <= arr2[end]) {
      newArr.push(arr1[start]);
      start++;
    } else {
      newArr.push(arr2[end]);
      end++;
    }
  }

  if (start <= arr1.length - 1) {
    for (let i = start; i < arr1.length; i++) {
      newArr.push(arr1[i]);
    }
  }

  return newArr;
}

console.log(addTwoArrayTwoPointerAlgo(arr1, arr2));
