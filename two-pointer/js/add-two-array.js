const arr1 = [1, 1, 2, 3, 4, 5, 11];
const arr2 = [1, 1, 1, 2, 2, 3, 5, 10];

function addTwoArrayTwoPointerAlgo(arr1, arr2) {
  let start = 0;
  let end = 0;
  let newArr = [];

  while (start < arr1.length && end < arr2.length) {
    if (arr1[start] <= arr2[end]) {
      newArr.push(arr1[start]);
      start++;
    } else {
      newArr.push(arr2[end]);
      end++;
    }
  }

  while (start < arr1.length) {
    newArr.push(arr1[start]);
    start++;
  }

  while (end < arr2.length) {
    newArr.push(arr2[end]);
    end++;
  }

  return newArr;
}

console.log(addTwoArrayTwoPointerAlgo(arr1, arr2));
