let arr = [23, 45, 67, 45, 676, 34, 34, 56, 73, 78];

let target = 4;

function linearSearching(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return `${target} founded index on ${index}`;
    }
  }

  return "not founded";
}

console.log(linearSearching(arr, target));