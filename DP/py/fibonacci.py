
memo = {}

def fibonacci(n):
 
 if n == 0 or n == 1:
   return n
 
 if n in memo:
   return memo[n]
 
 memo[n] = fibonacci(n-1)+fibonacci(n-2)
 return memo[n] 


print(fibonacci(5))
print(memo)



