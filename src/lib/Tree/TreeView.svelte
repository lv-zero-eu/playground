<script lang="ts">
  import type { Node } from "./tree";
  import { fly } from "svelte/transition";
  import { quadInOut } from "svelte/easing";

  export let tree: Node;
</script>

{#if tree.expanded && tree.hasChildren()}
  <ul
    class="tree"
    in:fly={{ x: 25, duration: 400, easing: quadInOut, opacity: 0.2 }}
  >
    {#each tree.children as node, i}
      <li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click|stopPropagation={() => (node = node.toggleNode())}>
          {node.name}
          {#if node.children.length}
            <span class="labracket" class:closed={!node.expanded}>></span>
          {/if}
        </span>
        <svelte:self tree={node} />
      </li>
    {/each}
  </ul>
{/if}

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
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    padding-left: 10px;
    width: fit-content;
  }
  li > span {
    cursor: default;
    position: relative;
    display: flex;
    align-items: baseline;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  li:has(.labracket) > span {
    cursor: pointer;
  }
  span.labracket {
    transition: transform 0.3s;
    transform: rotate(90deg);
    padding: 0 2px;
  }
  span.labracket.closed {
    transform: rotate(-90deg);
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
