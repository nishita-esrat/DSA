class Graph {
  constructor() {
    this.graph = {};
    this.visited = {};
    this.parents = {};
    this.stack = [];
  }

  add(a, b, isDirected = false) {
    // Always make sure nodes exist in graph
    if (!this.graph[a]) this.graph[a] = [];
    if (!this.graph[b]) this.graph[b] = [];

    // Initialize visited & parents for new nodes
    if (!(a in this.visited)) this.visited[a] = false;
    if (!(b in this.visited)) this.visited[b] = false;
    if (!(a in this.parents)) this.parents[a] = null;
    if (!(b in this.parents)) this.parents[b] = null;

    // Add the edge
    this.graph[a].push(b);
    if (!isDirected) {
      this.graph[b].push(a);
    }
  }

  BFSTraverse(src) {
    let queue = [src];
    this.visited[src] = true;

    if (!this.graph[src]) {
      console.log("Data not exist");
      return;
    }

    while (queue.length != 0) {
      const value = queue.shift();
      console.log(value);

      let arr = this.graph[value];

      for (let i = 0; i < arr.length; i++) {
        if (!this.visited[arr[i]]) {
          queue.push(arr[i]);
          this.visited[arr[i]] = true;
        }
      }
    }

    this.resetVisited();
  }

  DFSTraverse(src) {
    this.visited[src] = true;
    console.log(src);
    let arr = this.graph[src];
    for (let i = 0; i < arr.length; i++) {
      if (!this.visited[arr[i]]) {
        this.DFSTraverse(arr[i]);
      }
    }
  }

  resetVisited() {
    for (let node in this.visited) {
      this.visited[node] = false;
    }
  }

  resetParents() {
    for (let node in this.parents) {
      this.parents[node] = null;
    }
  }

  cycleDetectionBFS(src) {
    this.visited[src] = true;
    this.parents[src] = null;
    const queue = [src];

    while (queue.length != 0) {
      const value = queue.shift();
      const arr = this.graph[value];

      for (let index = 0; index < arr.length; index++) {
        if (!this.visited[arr[index]]) {
          this.visited[arr[index]] = true;
          this.parents[arr[index]] = value;
          queue.push(arr[index]);
        } else if (this.parents[value] != arr[index]) {
          return "cycle detect";
        }
      }
    }

    this.resetParents();
    this.resetVisited();

    return "can't detect cycle";
  }

  shortestPathAlgoBFS(source, destination) {
    const queue = [source];
    this.visited[source] = true;
    this.parents[source] = null;

    while (queue.length != 0) {
      const value = queue.shift();
      const arr = this.graph[value];

      for (let index = 0; index < arr.length; index++) {
        if (!this.visited[arr[index]]) {
          queue.push(arr[index]);
          this.visited[arr[index]] = true;
          this.parents[arr[index]] = value;
        }
      }
    }

    // Reconstruct path
    const path = [destination];
    while (path[path.length - 1] !== source) {
      const parent = this.parents[path[path.length - 1]];
      if (parent === null || parent === undefined) {
        console.log("No path found.");
        return;
      }
      path.push(parent);
    }

    path.reverse();
    console.log("Path:", path.join(" -> "));
    this.resetVisited();
    this.resetParents();
  }

  bipartiteAlgoBFS(src, color1, color2) {
    const queue = [src];
    const color = {};
    this.visited[src] = true;
    color[src] = color1;

    while (queue.length != 0) {
      const value = queue.shift();
      const arr = this.graph[value];

      for (let node of arr) {
        if (!this.visited[node]) {
          color[node] = color[value] === color1 ? color2 : color1;
          this.visited[node] = true;
          queue.push(node);
        } else if (color[value] === color[node]) {
          this.resetVisited();
          return "Graph is NOT bipartite";
        }
      }
    }
    this.resetVisited();
    return "Graph is  bipartite";
  }

  topologySortingDFS(src) {
    this.visited[src] = true;
    let arr = this.graph[src];
    
    for (let i = 0; i < arr.length; i++) {
      if (!this.visited[arr[i]]) {
        this.topologySortingDFS(arr[i]);
      }
    }

    this.stack.push(src);
  }
}

const gp = new Graph();
gp.add(0, 1, true);
gp.add(1, 2, true);
gp.add(3, 2, true);
gp.add(2, 4, true);
gp.add(4, 5, true);
gp.add(6, 5, true);
// gp.add(6, 3);
// gp.BFSTraverse(3);
// gp.DFSTraverse(3);
// gp.resetVisited();
// console.log(gp.cycleDetectionBFS(0));
// console.log(gp)
// gp.shortestPathAlgoBFS(6, 5);
// console.log(gp.bipartiteAlgoBFS(0, "red", "green"));

for (const node in gp.visited) {
  if (!gp.visited[node]) {
    gp.topologySortingDFS(node);
  }
}

console.log(gp.stack.reverse().join("->"));
gp.resetVisited();
