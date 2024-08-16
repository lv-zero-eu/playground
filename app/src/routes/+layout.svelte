<script>
	import { fly } from 'svelte/transition';
	import DropDown from '$lib/nav/DropDown.svelte';
	import TopNav from '$lib/nav/TopNav.svelte';

  import "./app.css"

	const features = [
		{
			name: 'Chart',
			url: '/chart',
			icon: '🏠',
			headline: 'Visualize your data'
		},
		{
			name: 'Formating',
			url: '/formating',
			icon: '🏦',
			headline: 'Format your data'
		},
		{
			name: 'Input',
			url: '/input',
			icon: '🧬 ',
			headline: 'Various input types'
		},
    {
			name: 'Progress',
			url: '/progress',
			icon: '🧬 ',
			headline: 'Show progress with style'
		}
	];
	const show = false;
</script>

<TopNav>
	<h1>lv[zero]</h1>
	<DropDown {show}>
		<span slot="header">Features</span>
		<div slot="body" class="body" transition:fly={{ duration: 300 }}>
			{#each features as feature}
				<a href={feature.url} class="feature">
					<div><i>{feature.icon}</i> {feature.name}</div>
					<p>{feature.headline}</p>
				</a>
			{/each}
		</div>
	</DropDown>
</TopNav>
<slot />

<style>
	.body {
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid hsla(0, 0%, 18%, 1);
		padding: 6px;
		border-radius: 8px;
	}
	.feature {
		padding: 12px;
		border-radius: 8px;
		min-width: max-content;
		transition: 0.2s;
		text-decoration: none;
		color: inherit;
	}
	.feature:hover {
		background-color: rgba(126, 126, 126, 0.15);
	}
	.feature i {
		font-size: 18px;
	}
	.feature p {
		color: rgb(161, 161, 161);
		font-size: 14px;
		margin: 8px 0 0 0;
	}
</style>
