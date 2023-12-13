<script>
	import { CldImage } from 'svelte-cloudinary';
	import MasonryLayout from '../components/MasonryLayout.svelte';
	import GridLayout from '../components/GridLayout.svelte';
	import CarouselLayout from '../components/CarouselLayout.svelte';

	export let data;

	let layout = 'grid';

	const layoutTypes = [
		{ name: 'masonry', component: MasonryLayout },
		{ name: 'grid', component: GridLayout },
		{ name: 'carousel', component: CarouselLayout }
	];
</script>

<svelte:head>
	<title>Gallery</title>
</svelte:head>

<section class="py-4">
	{#if data}
		<div role="tablist" class="tabs tabs-boxed my-4 max-w-xs mx-auto">
			{#each layoutTypes as layoutType}
				<button
					role="tab"
					class="tab {layout === layoutType.name ? 'tab-active' : ''}"
					on:click={() => (layout = layoutType.name)}
				>
					{layoutType.name.charAt(0).toUpperCase() + layoutType.name.slice(1)}
				</button>
			{/each}
		</div>

		{#each layoutTypes as layoutType}
			{#if layout === layoutType.name}
				<svelte:component this={layoutType.component} gallery={data.images} />
			{/if}
		{/each}
	{/if}
</section>
