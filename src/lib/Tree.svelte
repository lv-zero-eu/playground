<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import TreeView from "./TreeView.svelte";
  import { Node, parseToTree } from "./tree";

  let treeText = `home
  lv0
   Download
   Video
   Document
  Public
mnt`;

  let tree: Node = undefined;

  onMount(() => {
    tree = parseToTree(treeText);
  });

  afterUpdate(() => {
    tree = parseToTree(treeText);
  });
</script>

<div>
  <h1>Folder Structure</h1>
  <textarea bind:value={treeText} placeholder="Enter indented text" />
  {#if tree && tree.children.length > 0}
    <TreeView bind:tree />
  {/if}
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
