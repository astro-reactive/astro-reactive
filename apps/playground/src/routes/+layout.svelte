<script>
	import '../app.css';

</script>
<svelte:head>
	<title>Astro Reactive Playground</title>
</svelte:head>

<div class="app">
	<header>
		<nav><h1>Astro Reactive Playground</h1></nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	main {
		height: 100%;
	}

	header {
		padding: 1rem;
	}
	h1 {
		margin: 0;
	}	
</style>
