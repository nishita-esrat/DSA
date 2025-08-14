
class Graph:
    def __init__(self):
        self.graph = {}
        self.visited = {}
        self.parents = {}
        self.stack = []

    def add_gp(self, a, b, is_directed=False):
        # Ensure both nodes exist in the graph dictionary
        if a not in self.graph:
            self.graph[a] = []
        if b not in self.graph:
            self.graph[b] = []

       # Initialize visited and parents
        if a not in self.visited:
           self.visited[a] = False
        if b not in self.visited:
           self.visited[b] = False
        if a not in self.parents:
           self.parents[a] = None
        if b not in self.parents:
           self.parents[b] = None

        # Add the edge
        self.graph[a].append(b)
        if not is_directed:
           self.graph[b].append(a)

    def BFS_traverse(self,src):
     self.visited[src] = True
     queue = [src]

     while queue:
      val = queue.pop(0)
      print(val)

      for neighbor in self.graph[val]:
         if not self.visited[neighbor]:
          self.visited[neighbor] = True
          queue.append(neighbor)
        

gp = Graph()
gp.add_gp(0,1)
gp.add_gp(1,2)
gp.add_gp(1,7)
gp.add_gp(2,3)
gp.add_gp(3,4)
gp.add_gp(4,5)
gp.add_gp(5,6)
gp.add_gp(6,7)


print(gp.graph)
gp.BFS_traverse(0)
   

    
        
        

       
