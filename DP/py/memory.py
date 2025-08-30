

memo = {}

def sum_n(n):
 
 if n in memo:
   print("second")
   return memo[n]
 else:
   print("first")
   sum = 0
   for i in range(n+1):
     sum += i
   memo[n] = sum

 return sum


print(sum_n(5))
print(sum_n(5))
   
    