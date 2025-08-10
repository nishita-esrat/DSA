
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

gp = Graph()
gp.add_gp(1,2)
print(gp.graph)
   

    
        
        

       
