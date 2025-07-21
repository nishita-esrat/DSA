class Graph {
  constructor() {
    this.graph = {};
    this.visited = {};
    this.parents = {};
  }

  add(a, b) {
    this.visited[a] = false;
    this.visited[b] = false;

    if (!this.graph[a]) {
      this.graph[a] = [b];
    } else {
      this.graph[a].push(b);
    }

    if (!this.graph[b]) {
      this.graph[b] = [a];
    } else {
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

  shortestPathAlgoBFS(src, source, destination) {
    const queue = [src];
    this.visited[src] = true;
    this.parents[src] = null;

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
  }
}

const gp = new Graph();
gp.add(0, 1);
gp.add(1, 2);
gp.add(1, 3);
gp.add(3, 4);
gp.add(4, 5);
gp.add(5, 6);
// gp.add(6, 3);
// gp.BFSTraverse(3);
// gp.DFSTraverse(3);
// gp.resetVisited();
// console.log(gp.cycleDetectionBFS(0));
// console.log(gp)
gp.shortestPathAlgoBFS(0, 4, 6);

console.log(gp);
