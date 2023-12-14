<script>
	import { CldImage } from 'svelte-cloudinary';

	export let gallery = [];
</script>

<div class="columns-1 md:columns-2 lg:columns-3 gap-4">
	{#each gallery as picture}
		<div class="w-full mb-4" key={picture._key}>
			<CldImage
				src={picture.public_id}
				width="600"
				aspectRatio="4:3"
				class="hover:transform hover:scale-105 transition duration-300 ease-in-out"
			/>
		</div>
	{/each}
</div>
