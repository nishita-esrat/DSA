// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

function hashTableLeetCode2351(str) {


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

    if (letters[str[index]] > 1) {
      return str[index];
    }

  }
}


console.log(hashTableLeetCode2351("abcdd"))
