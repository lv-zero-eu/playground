<script lang="ts">
  import TreeView from "./Tree/TreeView.svelte";
  import { Node, parseToTree } from "./Tree/tree";

  let treeText = `home
  lv0
   Download
   Video
   Document
  Public
mnt`;

  let tree: Node = undefined;
  let newTree: string;
  let xml;

  $: tree = parseToTree(treeText);
  $: newTree = tree
    .clone()
    .format()
    .sortChildren((n1, n2) => n1.name.localeCompare(n2.name), true)
    .toString();

  $: xml = console.log(tree.toXML());
</script>

<div>
  <h1>Folder Structure</h1>
  <textarea bind:value={treeText} placeholder="Enter indented text" />
  <TreeView bind:tree />
  <textarea name="" id="" cols="30" rows="10" bind:value={newTree} />
</div>

<style>
  div {
    padding: 0 5px;
  }

  h1 {
    font-size: 18px;
  }

  textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    font-size: 0.8rem;
  }
</style>
