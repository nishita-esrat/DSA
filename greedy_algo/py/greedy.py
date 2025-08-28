
arr = [7, 5, 8, 12, 10, 2, 9, 10];

def merge_sorting(arr,start,end):
 if start >= end:
   return arr
 
 mid = (start+end)//2

 merge_sorting(arr,start,mid)
 merge_sorting(arr,mid+1,end)
 merge_arr(arr,start,mid,end)

 return arr


def merge_arr(arr,start,mid,end):
 left = start
 right = mid + 1 
 merge = []

 while left <= mid and right <= end:
   if arr[left] < arr[right]:
     merge.append(arr[left])
     left += 1
   else:
     merge.append(arr[right])
     right += 1

 while left <= mid:
   merge.append(arr[left])
   left += 1

 while right <= end:
   merge.append(arr[right])
   right += 1

 for i in range(0,len(merge)):
   arr[start+i] = merge[i]


def greedy_algo(arr,start,end):
 
 sorted_arr = merge_sorting(arr,start,end)
 note = 100
 count = 0

 for i in range(len(sorted_arr)-1,-1,-1):
   
   if note == 0:
     break
   
   while note >= sorted_arr[i]:
     note -= sorted_arr[i]
     count += 1


 return count


print(greedy_algo(arr,0,len(arr)-1))

  
