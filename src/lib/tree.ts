type NodeObject = {
  name: string;
  indent?: number;
  parent?: Node | null | undefined;
  expanded?: boolean;
  children?: Node[];
};


export class Node {
  name: string;
  children: Node[];
  parent: Node | null;
  indent: number;
  expanded: boolean;

  constructor({ name, indent = 0, parent = null, expanded = true, children = [] }: NodeObject) {
    this.name = name;
    this.indent = indent
    this.parent = parent
    this.expanded = expanded
    this.children = children
  }

  push(n: Node) {
    this.children.push(n);
    n.parent = this;
    return n
  }

  toggleNode() {
    this.expanded = !this.expanded
    return this;
  }

  toString(): string {
    if (this.indent < 0) return this.children.map(n => n.toString()).join("")
    return (
      " ".repeat(this.indent) + // add indentation
      this.name +
      "\n" + // add breakline for the children
      this.children.map(n => n.toString()).join("") // add children
    )
  }

  format(indent = 2) {
    if (this.parent) {
      this.indent = this.indent % indent != 0 ? this.indent - 1 : this.indent;
      // Remove unnecessary indent
      this.indent = this.parent.indent + indent < this.indent ? this.parent.indent + indent : this.indent
      // Make sure that child has more indent
      this.indent = this.parent.indent >= this.indent ? this.indent += indent : this.indent
    }
    this.children = this.children.map(n => n.format())
    return this
  }

  clone(): Node {
    const clonedChildren = this.children.map(child => {
      const clonedChild = child.clone();
      clonedChild.parent = this; // Set parent reference for the cloned child
      return clonedChild;
    });
    return new Node({ ...this, children: clonedChildren });
  }
}

export const parseToTree = (s: string) => {

  let root = new Node({ name: ".", indent: -1 });
  let currentNode = root

  if (!s) return root

  s.split("\n").filter(s => s).forEach(line => {
    const indent = line.search(/\S/); // Find the index of the first non-whitespace character
    if (indent === -1) return;
    const name = line.trim();
    const newNode = new Node({ name, indent });


    if (indent > currentNode.indent) {
      currentNode = currentNode.push(newNode);
    }
    else if (indent === currentNode.indent) {
      currentNode = currentNode.parent.push(newNode)
    }
    else {
      while (indent <= currentNode.indent)
        currentNode = currentNode.parent; // Move up the tree
      const newNode = new Node({ name, indent })
      currentNode = currentNode.push(newNode);
    }

    return root;

  })

  return root;
}