<script lang="ts">
	import TreeView from '$lib/Tree/TreeView.svelte';
	import { Node, parseToTree } from '$lib/Tree/tree';

	let treeText = `home
  lv0
   Download
   Video
   Document
  Public
mnt`;

	let tree: Node = parseToTree("");
	let newTree: string;

	$: tree = parseToTree(treeText);
	$: newTree = tree ? tree
		.clone()
		.format()
		.sortChildren((n1, n2) => n1.name.localeCompare(n2.name), true)
		.toString() : '';
</script>

<div>
	<h1>Folder Structure</h1>
	<textarea bind:value={treeText} placeholder="Enter indented text" />
	<div class="viewer">
		<TreeView bind:tree />
		<pre>{tree.toString()}</pre>
		<pre>{newTree}</pre>
	</div>
</div>

<style>
	.viewer {
		display: flex;
		gap: 50px;
	}
	div {
		padding: 0 5px;
	}
	pre {
		margin: 0;
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
