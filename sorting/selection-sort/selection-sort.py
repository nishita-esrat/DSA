
list = [7, 5, 8, 12, 2, 9, 10];

def selection_sorting(list):
 for i in range(len(list)-1):
  min_index = i
  for j in range(i+1,len(list)):
   if list[min_index] > list[j]:
     min_index = j

  list[min_index] ,list[i] = list[i],list[min_index]
  return list
 

selection_sorting(list)

# new arr [ 2, 5, 7, 8, 9, 10, 12 ]

print(selection_sorting(list))