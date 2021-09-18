<script lang="ts">
	import Navigation from '$lib/nav/Navigation.svelte';
	import '../global.css';
</script>

<svelte:head>
	<script
		src="https://kit.fontawesome.com/8dc3f8478e.js"
		crossorigin="anonymous"
		rel="preconnect"></script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
</svelte:head>

<Navigation />

<main>
	<slot />
</main>
