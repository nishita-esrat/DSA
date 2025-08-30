const mem = [];

function sum(n,v) {
  if (mem[n]) {
    console.log({v});
    return mem[n];
  } else {
    console.log({v});
    let sum = 0;

    for (let index = 0; index <= n; index++) {
      sum += index;
    }

    mem[n] = sum;
    return sum;
  }
}

console.log(sum(5,1))
console.log(sum(5,2))
