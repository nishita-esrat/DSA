
value = "madam"

def palindrome_two_pointer_algo(values):
 start = 0
 end = len(value)-1

 while start <= end:
   if value[start] != value[end]:
     return False 
   
   start += 1  
   end -= 1

 return True

print(palindrome_two_pointer_algo(value))