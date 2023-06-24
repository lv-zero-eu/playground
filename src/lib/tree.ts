export class Node {
  name: string;
  children: Node[] = []
  parent: Node | undefined = undefined;
  indent: number;
  expanded = true

  constructor(name: string, indent?: number) {
    this.name = name;
    this.indent = indent ? indent : 0
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

}

export const parseToTree = (s: string) => {

  let root = new Node(".", -1);
  let currentNode = root

  if (!s) return root

  s.split("\n").filter(s => s).forEach(line => {
    const indentation = line.search(/\S/); // Find the index of the first non-whitespace character
    if (indentation === -1) return;
    const nodeName = line.trim();
    const newNode = new Node(nodeName, indentation);


    if (indentation > currentNode.indent) {
      currentNode = currentNode.push(newNode);
    }
    else if (indentation === currentNode.indent) {
      currentNode = currentNode.parent.push(newNode)
    }
    else {
      while (indentation <= currentNode.indent)
        currentNode = currentNode.parent; // Move up the tree
      const newNode = new Node(nodeName, indentation)
      currentNode = currentNode.push(newNode);
    }

    return root;

  })

  return root;
}