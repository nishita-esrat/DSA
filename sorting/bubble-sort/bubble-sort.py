
list = [7, 5, 8, 12, 2, 9, 10]

def bubble_sorting(list):
  
  for i in range(len(list)):

    for j in range(i,len(list)):
      
      if list[i] > list[j]:
       list[i],list[j] = list[j],list[i]
  return list
  
bubble_sorting(list)

# new list [ 2, 5, 7, 8, 9, 10, 12]

print(bubble_sorting(list))