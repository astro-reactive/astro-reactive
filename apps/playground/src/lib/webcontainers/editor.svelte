<script lang="ts">
	import type { WebContainer } from '@webcontainer/api';
	import { files } from '$lib/files';
	import { onMount } from 'svelte';

	export let selectedFile: string;

	let iframeEl: HTMLIFrameElement | null;

	let textareaEl: HTMLTextAreaElement | null;

	let webcontainerInstance: WebContainer;

	
	$: {
		if (webcontainerInstance) {
			textareaEl!.value = selectedFile;
			writeIndexJS(selectedFile);
		}
	}
	
	onMount(async () => {
		const { WebContainer } = await import('@webcontainer/api');
		
		async function loadHandler() {
			let entry = files['src'].directory.pages.directory['index.astro'].file;
			entry.contents = selectedFile;
			textareaEl!.value = entry.contents;

			webcontainerInstance = await WebContainer.boot();
			await webcontainerInstance.mount(files);

			const exitCode = await installDependencies();
			if (exitCode !== 0) {
				throw new Error('Installation failed');
			}

			startDevServer();
		}

		webcontainerInstance?.teardown();

		await loadHandler();
		return () => webcontainerInstance?.teardown();
	});

	async function installDependencies() {
		const installProcess = await webcontainerInstance!.spawn('pnpm', ['install']);

		installProcess.output.pipeTo(
			new WritableStream({
				write(data) {
					console.log(data);
				}
			})
		);

		return installProcess.exit;
	}

	async function startDevServer() {
		await webcontainerInstance!.spawn('pnpm', ['run', 'start']);

		webcontainerInstance!.on('server-ready', (_, url) => {
			iframeEl!.src = url;
		});
	}

	async function writeIndexJS(content: string) {
		await webcontainerInstance!.fs.writeFile('src/pages/index.astro', content);
	}
</script>

<div class="container">
	<div class="editor">
		<textarea
			bind:this={textareaEl}
			on:input={async (e) => {
				await writeIndexJS(e.currentTarget.value);
			}}>I am a textarea</textarea
		>
	</div>
	<div class="preview">
		<iframe bind:this={iframeEl} src="" title="code result" />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		height: 100%;
		width: 100%;
	}

	textarea {
		width: 100%;
		height: 20rem;
		resize: none;
		border-radius: 0.5rem;
		background: black;
		color: white;
		padding: 0.5rem 1rem;
	}

	.preview {
		min-height: 50vh;
	}
	iframe {
		height: 100%;
		width: 100%;
		border-radius: 0.5rem;
	}
</style>
