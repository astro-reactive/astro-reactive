<svelte:head>
	<title>Astro Reactive Playground</title>
</svelte:head>

<header>
	<nav><h1>Astro Reactive Playground</h1></nav>
</header>
<main>
	<slot />
</main>
<footer>
	<p>This is a footer</p>
</footer>

<style>
	main {
		font-family: var(--font-default);
		width: 100%;
	}
	header {
		padding: 0.5rem;
	}
	footer {
		padding: 2rem 0.5rem;
	}
</style>
