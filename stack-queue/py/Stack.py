
class Node:
    def __init__(self,val = None ,next = None):
        self.val = val
        self.next = next


class Stack:
    def __init__(self,val= None):
        self.head = self.tail = Node(val) if val is not None else None
        self.len = 1 if val is not None else 0


    def push(self,val):

        node = Node(val)
        
        if self.head is None:
           self.head = self.tail = node
        else:
           self.tail.next = node
           self.tail = node

        self.len += 1


    def pop(self):
     
        if self.head is None:
            print("Stack is empty")
            return
        
        if self.len == 1:
            self.head = self.tail = None
            self.len = 0
            return
        
        previous_node = self.find_node(self.len - 1)
        self.tail = previous_node
        self.tail.next = None
        self.len -= 1 


    def find_node(self,index):
        
        if index < 1 or index > self.len:
          print("index is out of range")
          return
        
        data = self.head
        num = 1

        while data:
           
           if num == index:
              break
           
           num += 1
           data = data.next

        return data
     
     


my_stack = Stack()
my_stack.push(10)
my_stack.push(20)
my_stack.pop()
my_stack.pop()
my_stack.pop()
print("head",my_stack.head)
print("tail",my_stack.tail)
print("len",my_stack.len)