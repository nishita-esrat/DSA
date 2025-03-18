// 2108. Find First Palindromic String in the Array
// Given an array of strings words, return the first palindromic string in the array.
//  If there is no such string, return an empty string "".

const words = ["abc", "car", "ada", "racecar", "cool"];

// for checking palindrome
function palindromeTwoPointerAlgo(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] != str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

function twoPointerLeetCode2108(words) {

  for (let index = 0; index < words.length; index++) {
    const isPlindrome = palindromeTwoPointerAlgo(words[index]);
    if (isPlindrome) {
      return words[index];
    }
  }

  return "";
}

console.log(twoPointerLeetCode2108(words));
