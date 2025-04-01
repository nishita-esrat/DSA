
class Node:
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next


    def __repr__(self):  # Or  __str__
        return f"Node(val={self.val})"


class Single_linked_list:
    def __init__(self, val=None):
        self.head = self.tail = Node(val) if val is not None else None
        self.len = 1 if val is not None else 0

    def append(self, val):
        node = Node(val)
        if self.head is None:  
            self.head = self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.len += 1 

    def prepend(self,val):
        node = Node(val)
        if self.head is None:
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head = node

        self.len += 1





list = Single_linked_list()
list.append(10)
list.append(20)
list.prepend(5)
print("head",list.head)
print("tail",list.tail)
print("len",list.len)

