// Array traverse

let arr = [10, 20, 30, 40, 50];

function arrayTraverse(arr, index) {
  if (index === arr.length) {
    return;
  }

  console.log(arr[index]);
  arrayTraverse(arr, index + 1);
}

// console.log(arrayTraverse(arr, 0));

// Reverse array

function arrayReverse(arr, forwardIndex, backwardIndex) {
  if (forwardIndex > backwardIndex) {
    return;
  }

  let temp = arr[forwardIndex];
  arr[forwardIndex] = arr[backwardIndex];
  arr[backwardIndex] = temp;
  arrayReverse(arr, forwardIndex + 1, backwardIndex - 1);

  return arr;
}

// console.log(arrayReverse(arr, 0, arr.length - 1));

// Palindrome

let str = "madam";

function isPalindrome(str, forwardIndex, backwardIndex) {
  if (forwardIndex >= backwardIndex) {
    return true;
  }

  if (str[forwardIndex] !== str[backwardIndex]) {
    return false;
  }

  return isPalindrome(str, forwardIndex + 1, backwardIndex - 1);
}

console.log(isPalindrome(str, 0, str.length - 1));
