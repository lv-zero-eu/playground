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

  removeChild(node: Node) {
    const index = this.children.indexOf(node);
    if (index !== -1) {
      const child = this.children.splice(index, 1)[0];
      return child;
    }
  }

  hasChildren(): boolean {
    return this.children.length > 0;
  }

  getByName(name: string, deepSearch = false): Node | null {
    if (this.name === name) {
      return this;
    }
    const searchInChildren = (nodes: Node[]): Node | null => {
      for (const child of nodes) {
        if (child.name === name) {
          return child;
        }
        if (deepSearch) {
          const foundNode = searchInChildren(child.children);
          if (foundNode) {
            return foundNode;
          }
        }
      }
      return null;
    };
    return searchInChildren(this.children);
  }

  sortChildren(compareFn: (a: Node, b: Node) => number, deepSort = false) {
    this.children.sort(compareFn);

    if (deepSort) {
      for (const child of this.children) {
        child.sortChildren(compareFn, true);
      }
    }
    return this
  }

  getDescendants(): Node[] {
    let descendants: Node[] = [];

    const traverse = (node: Node) => {
      descendants.push(node);
      node.children.forEach(child => traverse(child));
    };

    this.children.forEach(child => traverse(child));

    return descendants;
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

  path() {
    const pathSegments = [];
    let currentNode: Node = this;

    while (currentNode.parent) {
      pathSegments.unshift(currentNode.name);
      currentNode = currentNode.parent;
    }
    pathSegments.unshift("")

    return pathSegments.join("/");
  }

  format(indent = 2, level = 0) {
    if (this.parent)
      this.indent = level * indent - indent;
    this.children.forEach(child => child.format(indent, level + 1));
    return this;
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