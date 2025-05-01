// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram,or false otherwise.

function hashTableLeetCode1832(str) {

  const letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };



  for (let index = 0; index < str.length; index++) {
    letters[str[index]] = letters[str[index]] + 1;
  }


  for (const key in letters) {
    if (letters[key] === 0) {
      return false;
    }
  }


  return true;
}

console.log(hashTableLeetCode1832("thequickbrownfoxjumpsoverthelazydog"));
