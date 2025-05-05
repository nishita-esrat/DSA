

# list traverse

my_list = [10, 20, 30, 40, 50]

def list_traverse(arr,index):
     
    if index == len(arr):
       return 
     
    print(arr[index])
    list_traverse(arr,index+1)

print(list_traverse(my_list,0))


# list Reverse 

def list_reverse(arr,forward_index,backward_index):
    
    if forward_index > backward_index:
      return
    
    arr[forward_index],arr[backward_index] = arr[backward_index] , arr[forward_index]
    list_reverse(arr,forward_index+1,backward_index-1)

    return my_list

print(list_reverse(my_list,0,len(my_list)-1))


# Palindrome

my_palindrome = 'madam'

def is_palindrome(palindrome_str,forward_index,backward_index):
    
    if forward_index >= backward_index:
      return True;

    if palindrome_str[forward_index] != palindrome_str[backward_index] :
       return False
    
    return is_palindrome(palindrome_str,forward_index+1,backward_index-1)

print(is_palindrome(my_palindrome,0,len(my_palindrome)-1))
      
