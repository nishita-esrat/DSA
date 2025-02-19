
list = [7, 5, 8, 12, 2, 9, 10]

def bubble_sorting(list):
  
  for i in range(len(list)):

    for j in range(0,len(list)-1-i):
      
      if list[j] > list[j+1]:
       list[j],list[j+1] = list[j+1],list[j]

  return list
  
bubble_sorting(list)

# new list [ 2, 5, 7, 8, 9, 10, 12]

print(bubble_sorting(list))