class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
    if (this.left === null) {
      this.left = node;
      node.parent = this;
    } else if (this.left !== null && this.right === null) {
      this.right = node;
      node.parent = this;
    }
  }

  removeChild(node) {
    if (node.data === this.left.data && node.priority === this.left.priority) {
      this.left.parent = null;
      this.left = null;
      return;
    } else if (
      node.data === this.right.data &&
      node.priority === this.right.priority
    ) {
      this.right.parent = null;
      this.right = null;
      return;
    }

    throw new Error("not a child");
  }

  remove() {
    if (this.parent !== null) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent !== null) {
      let childParent = null;

      let positionRight = false;
      if (this.parent.left === this) {
        childParent = this.parent.right;
        positionRight = false;
      } else if (this.parent.right === this) {
        childParent = this.parent.left;
        positionRight = true;
      }

      let overNode = this.parent.parent;

      if (overNode !== null) {
        if (overNode.left === this.parent) {
          overNode.left = this;
        } else if (overNode.right === this.parent) {
          overNode.right = this;
        }
      }

      this.parent.left = this.left;
      this.parent.right = this.right;
      this.parent.parent = this;
      if (this.left !== null) {
        this.left.parent = this.parent;
      }
      if (this.right !== null) {
        this.right.parent = this.parent;
      }

      if (positionRight) {
        this.right = this.parent;
        this.left = childParent;
      } else {
        this.left = this.parent;
        this.right = childParent;
      }

      if (childParent !== null) {
        childParent.parent = this;
      }

      this.parent = overNode;
    }
  }
}

module.exports = Node;
