
class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next
 



class Single_linked_list:
    def __init__(self, val=None):
        self.head = self.tail = Node(val) if val is not None else None
        self.len = 1 if val is not None else 0


    def append_value(self, val):
        node = Node(val)
        if self.head is None:  
            self.head = self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.len += 1 


    def prepend_value(self,val):
        node = Node(val)
        if self.head is None:
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head = node

        self.len += 1


    def append_at_position(self,val,index):
        if index < 1 or index > self.len + 1:
          print("invalid index")
          return
        
        if index == 1:
          self.prepend_value(val)
          return 
        
        if index == self.len + 1:
          self.append_value(val)
          return
        
        node = Node(val)
        previous_node = self.find_node(index-1)
        temp = previous_node.next
        previous_node.next = node
        node.next = temp
        self.len += 1        


    def find_node(self,index):

        if index < 1 or index > self.len:
          print("index is out of range")
          return
        
        data = self.head
        num = 1

        while data:
          if num == index:
            break
          
          num +=1
          data = data.next
        
        return data
    

    def update_value(self,val,index):
     
      if index < 1 or index > self.len:
        print("index is out of range")
        return 
     
      node = self.find_node(index)
      node.val = val
    

    def print_list(self):
       node = self.head
       while node:
        print(node.val, end=" -> ")
        node = node.next
       print("None")






my_list = Single_linked_list()
my_list.append_value(10)
my_list.append_value(20)
my_list.prepend_value(5)
# print("find node",my_list.find_node(4))
my_list.append_at_position(1,1)
my_list.append_at_position(25,5)
my_list.append_at_position(15,4)
my_list.update_value(1555,4)
my_list.print_list()
print("head",my_list.head.val)
print("tail",my_list.tail.val)
print("len",my_list.len)

