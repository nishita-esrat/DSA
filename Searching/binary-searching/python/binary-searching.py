

target = 4

# ascending order 
arr_ascending_order = [1,2,3,4,5,7,9,10]

def binary_searching_ascending_order(arr_ascending_order,target):
 start = 0
 end = len(arr_ascending_order) - 1 
 while start <= end:
   mid = (start+end)//2
   if arr_ascending_order[mid] == target:
     return f"{target} is founded at index {mid}"
   elif arr_ascending_order[mid] > target:
     end = mid - 1
   else:
     start = mid + 1
 return "not founded"

print(binary_searching_ascending_order(arr_ascending_order,target))

# descending order
arr_descending_order = [10,9,7,5,4,3,2,1]

def binary_searching_desscending_order(arr_descending_order,target):
 start = 0
 end = len(arr_descending_order) - 1
 while start <= end:
   mid = (start + end)//2
   if arr_descending_order[mid] == target:
     return f"{target} is founded at index {mid}"
   elif arr_descending_order[mid] > target:
     start = mid + 1
   else:
     end = mid - 1
 return "not founded"

print(binary_searching_desscending_order(arr_descending_order,target))


# order agnostic binary search

def binary_searching_order_agnostic(arr,target):
 start = 0
 end = len(arr) - 1
 is_ascending = arr[0] < arr[len(arr) - 1]
 while start <= end:
   mid = (start+end)//2
   if arr[mid] == target:
     return f"{target} is founded at index {mid}"
   elif is_ascending:
     if arr[mid] > target:
       end = mid -1
     else:
       start = mid + 1
   else:
     if arr[mid] > target:
       start = mid + 1
     else:
       end = mid - 1
   
 return "not founded"

print(binary_searching_order_agnostic(arr_ascending_order,target))