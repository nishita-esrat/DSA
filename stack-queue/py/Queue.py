

class Node:
    def __init__(self,val = None ,next = None):
        self.val = val
        self.next = next


class Queue:
    def __init__(self,val= None):
        self.head = self.tail = Node(val) if val is not None else None
        self.len = 1 if val is not None else 0

    def enqueue(self,val):

        node = Node(val)
        
        if self.head is None:
           self.head = self.tail = node
        else:
           self.tail.next = node
           self.tail = node

        self.len += 1

    def dequeue(self):
     
        if self.head is None:
            print("Queue is empty")
            return
        
        self.head = self.head.next
        self.len -= 1

        if self.len == 0:
            self.tail = None

    def peek(self):
        return self.head.val if self.head.val else None;
  
    def is_empty(self): 
        return self.len == 0;
  
     
     

my_queue = Queue()
my_queue.enqueue(10)
my_queue.enqueue(20)
my_queue.dequeue()
my_queue.dequeue()
my_queue.dequeue()
print("head",my_queue.head)
print("tail",my_queue.tail)
print("len",my_queue.len)