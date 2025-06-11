
class Node:
    def __init__(self, val = None, left = None , right = None):
      self.val = val
      self.left = left
      self.right = right

    


class BST:
   def __init__(self,val = None):
     self.root = Node(val) if val is not None else None
   


   def insert(self , val):
      node = self.root

      if node is None:
        self.root = Node(val)
        return 

     
      while True:
        if node.val > val:
          if node.left is None:
            node.left = Node(val)
            break
        
          node = node.left 
        else:
          if node.right is None:
            node.right = Node(val)
            break
        
          node = node.right


bst = BST()
bst.insert(11)
bst.insert(12)
bst.insert(42)

print(bst.root.right.right.val)

