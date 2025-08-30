
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

    def traverse_BFS(self,src):
     self.visited[src] = True
     queue = [src]

     while queue:
      val = queue.pop(0)
      print(val)

      for neighbor in self.graph[val]:
         if not self.visited[neighbor]:
          self.visited[neighbor] = True
          queue.append(neighbor)

     self.reset_visited()

    def traverse_DFS(self,src):
       
       self.visited[src] = True
       print(src)

       for neighbor in self.graph[src]:
         if not self.visited[neighbor]:
           self.traverse_DFS(neighbor)

    def cycle_detection(self,src):
        self.visited[src] = True
        self.parents[src] = None
        queue = [src]

        while queue:
          val = queue.pop(0)

          for neighbor in self.graph[val]:
             if not self.visited[neighbor]:
               self.visited[neighbor] = True
               self.parents[neighbor] = val
               queue.append(neighbor)
             elif(self.parents[val] != neighbor):
               return "cycle detection"
             
        self.reset_parents()
        self.reset_visited()
             
        return "not found cycle"
    
    def shortest_path_BFS(self,source,destination):
     self.visited[source] = True
     self.parents[source] = None
     queue = [source]

     while queue:
       val = queue.pop(0)

       for neighbor in self.graph[val]:
          if not self.visited[neighbor]:
            self.visited[neighbor] = True
            self.parents[neighbor] = val
            queue.append(neighbor)

     path = [destination]

     while True:
      path.append(self.parents[path[-1]])
      if source == path[-1]:
        break
     
     self.reset_parents()
     self.reset_visited()

     path.reverse()
     actual_path = ">".join(map(str,path))
     return actual_path

    def reset_parents(self):
     for item in self.parents:
        self.parents[item] = None

    def reset_visited(self):
     for node in self.visited:
        self.visited[node] = False

    def bipartite_algo_BFS(self,src,color1,color2):
       self.visited[src] = True
       color = {}
       color[src] = color1
       queue = [src]


       while queue:
         val = queue.pop(0)

         for neighbor in self.graph[val]:
            if not self.visited[neighbor]:
              color[neighbor] = color1 if color[val] == color2 else color2
              self.visited[neighbor] = True
              queue.append(neighbor)
            elif color[val] == color[neighbor]:
              print("Graph is NOT bipartite")
              return

       self.reset_visited()

       print("Graph Is  bipartite")
       return
    
    def topology_sorting_DFS(self,src):
     self.visited[src] = True

     for neighbor in self.graph[src]:
       if not self.visited[neighbor]:
         self.topology_sorting_DFS(neighbor)

     self.stack.append(src)
      


gp = Graph()
gp.add_gp(0,1,True)
gp.add_gp(1,2,True)
gp.add_gp(1,7,True)
gp.add_gp(2,3,True)
gp.add_gp(3,4,True)
gp.add_gp(4,5,True)
gp.add_gp(5,6,True)
gp.add_gp(6,7,True)


print(gp.graph)
gp.traverse_BFS(0)
# gp.traverse_DFS(0)
# print(gp.visited)
print(gp.cycle_detection(0))
print(gp.shortest_path_BFS(1,4))
gp.bipartite_algo_BFS(0,"red","green")
# print(gp.parents)
gp.reset_parents()
gp.reset_visited()

for node in gp.visited:
  if not gp.visited[node]:
    gp.topology_sorting_DFS(node)

gp.stack.reverse()
actual_topology_sorting_path = ">".join(map(str,gp.stack))
print(actual_topology_sorting_path)
 

gp.reset_parents()
gp.reset_visited()
gp.traverse_DFS(0)


   

    
        
        

       
