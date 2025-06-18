
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

   def search(self,val):
       node = self.root

       if node is None:
         print("there is no val in BST")
         return
       
       while node:
         if node.val == val:
           return f"{val} is found"
         
         if node.val > val:
           if node.left is None:
             return f"{val} not found"
           node = node.left

         if node.val < val:
           if node.right is None:
             return f"{val} not found"
           node = node.right

   def BFS(self):
     
     node = self.root
     arr = [node]

     if node is None:
       return "there is no val in BTS"
     
     while len(arr) != 0:
        first_node = arr.pop(0)
        print(first_node.val)

        if first_node.left is not None:
          arr.append(first_node.left)
        
        if first_node.right is not None:
          arr.append(first_node.right)

   def DFS_in_order_tree(self,node):
     if node is None:
       return
     
     self.DFS_in_order_tree(node.left)
     print(node.val)
     self.DFS_in_order_tree(node.right)
  
   def DFS_pre_order_tree(self,node):
     
     if node is None:
       return
     
     print(node.val)
     self.DFS_pre_order_tree(node.left)
     self.DFS_pre_order_tree(node.right)

   def DFS_post_order_tree(self,node):
     
     if node is None:
       return
     
     self.DFS_post_order_tree(node.left)
     self.DFS_post_order_tree(node.right)
     print(node.val)

   def predessor(self,root):
    node = root.left

    while True:
      if node.right is None:
        print(node.val)
        break

      node = node.right

   def successor(self,root):
    node = root.right

    while True:
      if node.left is None:
        print(node.val)
        break

      node = node.left

   def is_valid_bst(self,node = None , minimum=float('-inf'), maximum=float('inf')):
    if node is None:
      return True
    
    if node.val < minimum or node.val > maximum:
      return False
    
    return (
        self.is_valid_bst(node.left, minimum, node.val) and
        self.is_valid_bst(node.right, node.val, maximum)
    )
     
         


bst = BST()
bst.insert(10)
bst.insert(9)
bst.insert(11)
bst.insert(20)
bst.insert(12)
bst.predessor(bst.root)
bst.successor(bst.root)
print(bst.is_valid_bst(bst.root))
# bst.BFS()
# print(bst.search(42))
# bst.DFS_in_order_tree(bst.root)
# bst.DFS_pre_order_tree(bst.root)
# bst.DFS_post_order_tree(bst.root)


