<script>
	import { CldImage } from 'svelte-cloudinary';
	export let gallery = [];
</script>

<div class="flex flex-col items-center justify-center space-y-12">
	<div class="carousel carousel-center w-full p-4 space-x-4 bg-primary rounded-box">
		{#each gallery as picture}
			<div class="carousel-item" key={picture._key}>
				<CldImage
					src={picture.public_id}
					width="300"
					height="500"
					class="rounded-lg hover:transform hover:scale-105 transition duration-300 ease-in-out"
				/>
			</div>
		{/each}
	</div>
</div>
