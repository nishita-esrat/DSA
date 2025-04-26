
class Hash_Table:


    def __init__(self,val):
        self.hash_table = [None]*val
        self.size = val


    def __str__(self):
        return f'{self.hash_table}'
    

    def hash_fun(self,val):
        convert_str = str(val)
        total = 0

        for x in range(0,len(convert_str)): 
          total += ord(convert_str[x])

        return total%self.size
    

    def set(self,val):
        index = self.hash_fun(val)

        if self.hash_table[index] == None:
          self.hash_table[index] = [val]
        else:
          self.hash_table[index].append(val)

    
    def get(self,val):
        index = self.hash_fun(val)
        indexed_arr = self.hash_table[index] if self.hash_table[index] is not None else []

        for x in range(0,len(indexed_arr)):
           if indexed_arr[x] == val:
             return f'{val} is found'
           
        return f'{val} not found'
    
    
    def print(self):
       
       for i in range(0,len(self.hash_table)):
          
          if self.hash_table[i] is not None:

            for x in range(0,len(self.hash_table[i])):
               print(self.hash_table[i][x])
             
            
          

my_hash_table = Hash_Table(5)
print(my_hash_table.hash_fun(10))
print(my_hash_table.set(23))
print(my_hash_table.set(23000))
print(my_hash_table.set(600))
print(my_hash_table.get(600))
print(my_hash_table.print())
print(my_hash_table)