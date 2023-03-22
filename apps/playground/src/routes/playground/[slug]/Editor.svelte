<script lang="ts">
	import type { FileSystemTree, WebContainer } from '@webcontainer/api';
	import { onMount } from 'svelte';

	export let selectedFile: string;
	export let commonFiles : FileSystemTree;

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
			const mountedFiles = commonFiles;
			Object.assign(mountedFiles, { src : { directory : { pages : { directory : { 'index.astro' : { file : { contents : selectedFile} } }} }} })
			
			let entry = mountedFiles['src']["directory"]["pages"]["directory"]['index.astro'].file;

			textareaEl!.value = entry.contents;

			webcontainerInstance = await WebContainer.boot();
			await webcontainerInstance.mount(mountedFiles);

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
		grid-template-columns: repeat(2, 1fr);
		height: 100%;
		width: 100%;
	}

	.editor {
		width: 100%;
	}

	textarea {
		font-family: var(--font-mono);
		width: 100%;
		height: 100%;
		resize: none;
		background: black;
		color: white;
	}

	.preview {
		width: 100%;
	}

	iframe {
		height: 100%;
		width: 100%;
		border: none;
		background-color: white;
	}
</style>
