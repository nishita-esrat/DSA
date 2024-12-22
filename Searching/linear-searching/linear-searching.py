
arr = [23, 45, 67, 45, 676, 34, 34, 56, 73, 78];
target = 6;


def linear_searching(arr,target):
 for index,item in enumerate(arr):
  if item == target:
    return f"{target} founded index on {index}"
 return "not founded"
 
print(linear_searching(arr,target))


