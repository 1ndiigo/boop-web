<script>
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="pt-64" />
	<div class="px-16">
		{#if visible}
			<div class="w-full">
				<h1
					transition:fade={{ delay: 0, duration: 700 }}
					class="font-sans text-2xl sm:text-3xl md:text-4xl w-full text-center pb-16"
				>
					A developer who cares
				</h1>
				<p class="font-sans text-base md:text-lg px-0 md:px-48 lg:px-64">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores adipisci rerum ab eaque
					enim tempora ut odio optio tempore officia! Officia doloremque at sint labore atque quod!
					Commodi, at nobis.
				</p>
				<div class="pt-96"></div>
			</div>
		{/if}
	</div>
</section>
