class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BTS {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    let currentNode = this.root;

    while (true) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          let node = new Node(value);
          currentNode.right = node;
          break;
        }

        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          let node = new Node(value);
          currentNode.left = node;
          break;
        }

        currentNode = currentNode.left;
      }
    }
  }

  search(target) {
    let node = this.root;

    while (node) {
      if (node.value === target) {
        console.log(`${target} is found`);
        return `${target} is found`;
      }

      if (node.value < target) {
        if (!node.right) {
          return "Not Found";
        }
        node = node.right;
      }

      if (node.value > target) {
        if (!node.left) {
          return "Not Found";
        }
        node = node.left;
      }
    }
  }

  BFS() {
    const arr = [this.root];

    while (arr.length != 0) {
      let currentNode = arr.shift();
      console.log(currentNode.value);

      if (currentNode.left) {
        arr.push(currentNode.left);
      }

      if (currentNode.right) {
        arr.push(currentNode.right);
      }
    }
  }

  DFSInOrderTree(node) {
    if (!node) {
      return;
    }
    this.DFSInOrderTree(node.left);
    console.log(node.value);
    this.DFSInOrderTree(node.right);
  }

  DFSPreOrderTree(node) {
    if (!node) {
      return;
    }
    console.log(node.value);
    this.DFSPreOrderTree(node.left);
    this.DFSPreOrderTree(node.right);
  }

  DFSPostOrderTree(node) {
    if (!node) {
      return;
    }

    this.DFSPostOrderTree(node.left);
    this.DFSPostOrderTree(node.right);
    console.log(node.value);
  }
}

const bts = new BTS(10);
bts.insert(9);
bts.insert(11);
bts.insert(8);
bts.insert(12);
bts.search(1);
console.log(bts.search(1));
bts.BFS();
bts.DFSInOrderTree(bts.root);
bts.DFSPreOrderTree(bts.root);
bts.DFSPostOrderTree(bts.root);

console.log(bts);
