const memo = {};

function fibonacci(n) {

  if (n === 0 || n === 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }
  
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

console.log(fibonacci(5));
console.log(memo);
