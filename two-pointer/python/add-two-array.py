

list1 = [1, 1, 2, 3, 4, 5, 10];
list2 = [1, 1, 1, 2, 2, 3, 4];


def add_two_arry_two_pointer_algo(list1,list2):
 start = 0
 end = 0
 new_list = []

 while start < len(list1) and end < len(list2):
   
   if list1[start] <= list2[end]:
    new_list.append(list1[start])
    start += 1
   else:
    new_list.append(list2[end])
    end += 1
 
 while start < len(list1):
    new_list.append(list1[start])
    start += 1

 while end < len(list2):
    new_list.append(list2[end])
    end += 1

 return new_list


print(add_two_arry_two_pointer_algo(list1,list2))