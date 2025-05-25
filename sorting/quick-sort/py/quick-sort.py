

arr = [7, 5, 8, 12, 2, 9, 10];

def quick_sorting(arr,start,end):
    
    if start >= end:
      return
    
    index = partition(arr,start,end)

    quick_sorting(arr , start , index-1)
    quick_sorting(arr,index+1,end)


def partition(arr,start,end):
 
   pivot = arr[start]
   left = start + 1
   right = end


   while left <= right:
       
       if pivot >= arr[left]:
         left+=1
       elif pivot < arr[right]:
         right-=1
       else:
         arr[right], arr[left] = arr[left],arr[right]
         left+=1
         right-=1

   
   arr[start],arr[right] = arr[right] , arr[start]

   return right



quick_sorting(arr,0,len(arr)-1)
print(arr)


