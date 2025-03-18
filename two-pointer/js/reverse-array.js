const arr = [10, 20, 30, 40, 50, 100];

function reverseArrayTwoPointerAlog(arr) {
  start = 0;
  end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

console.log(reverseArrayTwoPointerAlog(arr));
