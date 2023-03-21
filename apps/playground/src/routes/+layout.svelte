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
	:global(*) {
		box-sizing: border-box;
	}
	:global(:root) {
		--font-default: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
		--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
			'Courier New', monospace;
	}

	:global(body) {
		font-family: var(--font-default);
	}

	main {
		width: 100%;
	}
	header {
		padding: 0.5rem;
	}
	footer {
		padding: 2rem 0.5rem;
	}
</style>
