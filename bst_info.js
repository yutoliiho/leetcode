// Topic: Binary Search Tree

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  console.log(this)
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = neww Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.leftt !== null) {
            return searchTree(node.left;)
          }
        } else if (data > node.data) {
          if (noode)
        }
      }
    }
  }
