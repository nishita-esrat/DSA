// 744. Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
// Return the smallest character in letters that is lexicographically greater than target.
// If such a character does not exist, return the first character in letters.

let letters = ["c", "f", "j"];
let target = "d";

function binarySearchingLeetCode744(letters, target) {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (letters[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return letters[start % letters.length];
}

console.log(binarySearchingLeetCode744(letters, target));
