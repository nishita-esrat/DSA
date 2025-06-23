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
  }
}

const gp = new Graph();
gp.add(1, 2);
gp.add(1, 3);
gp.add(1, 5);
gp.add(2, 3);
gp.add(1, 6);
gp.BFSTraverse(3);
console.log(gp);
