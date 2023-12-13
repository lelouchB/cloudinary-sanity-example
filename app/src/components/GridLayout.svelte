<script>
	import { CldImage } from 'svelte-cloudinary';
	export let gallery = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each gallery as picture}
		<div class="mx-auto">
			<CldImage
				src={picture.public_id}
				height="400"
				width="600"
				crop="fill"
				class="rounded hover:transform hover:scale-105 transition duration-300 ease-in-out"
			/>
		</div>
	{/each}
</div>
