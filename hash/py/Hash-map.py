

class Hash_Map:

    def __init__(self):
        self.hash_map = {}


    def __str__(self):
        return f"{self.hash_map}"
    

    def set(self,key,val):
        self.hash_map[key] = val

    
    def get(self,key):

        if key in self.hash_map:
           return self.hash_map[key]
        
        return "not found"

    

my_hash_map = Hash_Map()
print(my_hash_map.set("name","dipty"))
print(my_hash_map.set("age",15))
print(my_hash_map.get("age"))
print(my_hash_map)