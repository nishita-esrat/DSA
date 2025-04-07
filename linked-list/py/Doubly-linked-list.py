
class Node:
    def __init__(self,val=None,next=None,pre=None):
        self.val = val
        self.next = next
        self.pre = pre


class Doubly_linked_list:
    def __init__(self, val=None):
      self.head = self.tail = Node(val) if val is not None else None
      self.len = 1 if val is not None else 0

    def append_value(self,val):
      node = Node(val)
      if self.head is None:
        self.head = self.tail = node
      else:
        self.tail.next = node
        node.pre = self.tail
        self.tail = node
      self.len += 1

    def prepend_value(self,val):
        node = Node(val)
        if self.head is None:
           self.head = self.tail = node
        else:
            self.head.pre = node
            node.next = self.head
            self.head = node
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

            num += 1
            data = data.next

        return data  
    
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
         node.pre = previous_node
         node.next = temp
         temp.pre = node
         self.len += 1

    def delete_value(self,index):
     
       if index < 1 or index > self.len:
          print("invalid index")
          return
     
       if index == 1:
          self.head = self.head.next
          self.head.pre = None
          self.len -= 1
          if self.len == 0:
             self.tail = None
          return
     
       if index == self.len:
          self.tail = self.tail.pre
          self.tail.next = None
          self.len -= 1
          return
     

       previous_node = self.find_node(index-1)
       previous_node.next.next.pre = previous_node
       previous_node.next = previous_node.next.next
       self.len -= 1

    def update_value(self,val,index):
        
        if index < 1 or index > self.len:
          print("invalid index")
          return
        
        node = self.find_node(index)
        node.val = val
       
    def print_list(self):
        data = self.head

        while data:
          print(data.val,end=" -> ")
          data = data.next

        print("None")


my_list = Doubly_linked_list()
my_list.append_value(1)
my_list.append_value(5)
my_list.prepend_value(0)
# print(my_list.find_node(2))
my_list.append_at_position(10,4)
my_list.append_at_position(100,4)
# my_list.delete_value(4)
my_list.update_value(10,4)
my_list.update_value(15,5)
my_list.print_list ()
print("head",my_list.head.val)
print("tail",my_list.tail.val)
print("tail pre",my_list.tail.pre.val)
print("len",my_list.len)
     