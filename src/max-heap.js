const Node = require("./node");

class MaxHeap {
  constructor() {
    this.root = null;
    this.parentNodes = [];
    this.sizeNumber = 0;
  }

  push(data, priority) {
    const node = new Node(data, priority);
    this.insertNode(node);
    this.shiftNodeUp(node);
    this.sizeNumber++;
  }

  pop() {
    if (!this.root) {
      return false;
    }
  }

  detachRoot() {
    let position = this.parentNodes.indexOf(this.root);
    if (position !== -1) this.parentNodes.splice(position, 1);
    const detachRoot = this.root;
    this.root = null;
    return detachRoot;
  }

  restoreRootFromLastInsertedNode(detached) {}

  size() {
    return this.sizeNumber;
  }

  isEmpty() {
    if (this.root === null) {
      return true;
    }

    return false;
  }

  clear() {
    this.root = null;
    this.parentNodes = [];
    this.sizeNumber = 0;
  }

  insertNode(node) {
    this.parentNodes.push(node);
    if (this.root == null) {
      this.root = node;
    } else {
      let firstParent = this.parentNodes[0];
      firstParent.appendChild(node);
      if (firstParent.right !== null) {
        this.parentNodes.shift();
      }
    }
  }

  shiftNodeUp(node) {}

  shiftNodeDown(node) {}
}

module.exports = MaxHeap;
