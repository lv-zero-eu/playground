<script lang="ts">
  import type { Node } from "./tree";

  export let tree: Node;
</script>

<ul class="tree" style={`--node-children:${tree.children.length}`}>
  {#each tree.children as node}
    <li>
      <span>{node.name}</span>
      {#if node.children}
        <svelte:self tree={node} />
      {/if}
    </li>
  {/each}
</ul>

<style>
  .tree {
    font-family: "Roboto Mono", monospace;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 2px 0 0 10px;
  }
  ul {
    list-style: none;
  }
  span {
    font-style: italic;
    letter-spacing: 0.4px;
    padding-left: 5px;
  }
  li {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    padding-left: 10px;
  }
  li::before {
    position: absolute;
    top: calc(0.8rem / 1.5);
    left: 0;
    width: 10px;
    height: 2px;
    margin: auto;
    content: "";
    background-color: #666;
  }
  li::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    content: "";
    background-color: #666;
  }
  li:last-child::after {
    height: calc(0.8rem / 1.5);
  }
</style>
