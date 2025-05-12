

arr = [7, 5, 8, 12, 10, 2, 9, 10]


def merge_sorting(arr,start,end):
    
    if start >= end : return

    mid = (start+end)//2

    merge_sorting(arr,start,mid)
    merge_sorting(arr,mid+1,end)
    merge_array(arr,start,mid,end)


def merge_array(arr,start,mid,end):
    
    left = start
    right = mid+1
    merged = []

    while (left <= mid and right <= end):
          
          if arr[left] < arr[right]:
            merged.append(arr[left])
            left += 1
          else:
            merged.append(arr[right])
            right += 1

    
    while left <= mid:
      merged.append(arr[left])
      left += 1

    while right <= end:
      merged.append(arr[right])
      right += 1


    for i in range(0,len(merged)):
       arr[start+i] = merged[i]



merge_sorting(arr,0,len(arr)-1)
print(arr)
     


    
