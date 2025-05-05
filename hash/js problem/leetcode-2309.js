// 2309. Greatest English Letter in Upper and Lower Case



function hashTableLeetCode2309(str) {

  const letters = {};
  
  for (let i = 97; i <= 122; i++) {
    const ch = String.fromCharCode(i); 
    letters[ch] = { lower: 0, upper: 0 };
  }

  for (const ch of str) {
    const lowerCh = ch.toLowerCase();
    if (!letters[lowerCh]) continue;

    if (ch === ch.toLowerCase()) {
      letters[lowerCh].lower++;
    } else {
      letters[lowerCh].upper++;
    }
  }


  const sortedKeys = Object.keys(letters).sort().reverse();
  for (const key of sortedKeys) {
    if (letters[key].lower > 0 && letters[key].upper > 0) {
      return key.toUpperCase();
    }
  }

  return "";
}

console.log(hashTableLeetCode2309("arRAzFif"));
