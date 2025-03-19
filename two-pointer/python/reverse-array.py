
arr = [10, 20, 30, 40, 50, 100]

def reverse_array_two_pointer_algo(arr):
 start = 0
 end = len(arr)-1

 while start <= end:
   arr[start] ,arr[end] = arr[end],arr[start]
   start += 1  
   end -= 1

 return arr


print(reverse_array_two_pointer_algo(arr))