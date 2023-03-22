<svelte:head>
	<title>Astro Reactive Playground</title>
</svelte:head>

<div class="app-container">
	<header>
		<nav><h1>Astro Reactive Playground</h1></nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style global>
	.app-container {
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	main {
		width: 100%;
		height: 100%;
		flex-basis: 100%;
	}
	header {
		padding: 1rem;
	}

	/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
	* {
		margin: 0;
	}
	:global(html, body) {
		height: 100%;
		margin: 0;
	}

	:global(body) {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
	}

	:global(img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}

	:global(input, button, textarea, select) {
		font: inherit;
	}
	:global(p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
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
		background-color: #161a21;
		color: white;
	}
</style>
