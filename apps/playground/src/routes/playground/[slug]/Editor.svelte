<script lang="ts">
	import type { FileSystemTree, WebContainer } from '@webcontainer/api';
	import { onMount } from 'svelte';
	import { EditorView } from '@codemirror/view';
	import { basicSetup } from 'codemirror';
	import { javascript } from '@codemirror/lang-javascript';
	import './codemirror.css';

	export let selectedFile: string;
	export let commonFiles: FileSystemTree;

	let iframeEl: HTMLIFrameElement | null;

	let webcontainerInstance: WebContainer;

	let editorContainer: HTMLElement;

	let editorView;

	$: {
		if (webcontainerInstance) {
			writeIndexJS(selectedFile);
		}
	}

	onMount(async () => {
		const { WebContainer } = await import('@webcontainer/api');

		const mountedFiles = commonFiles;
		Object.assign(mountedFiles, {
			src: {
				directory: {
					pages: { directory: { 'index.astro': { file: { contents: selectedFile } } } }
				}
			}
		});

		const entryFile =
			mountedFiles['src']['directory']['pages']['directory']['index.astro'].file.contents;

		async function loadHandler() {
			webcontainerInstance = await WebContainer.boot();
			await webcontainerInstance.mount(mountedFiles);

			const exitCode = await installDependencies();
			if (exitCode !== 0) {
				throw new Error('Installation failed');
			}

			startDevServer();
		}

		webcontainerInstance?.teardown();

		editorView = new EditorView({
			parent: editorContainer,
			doc: entryFile,
			extensions: [basicSetup, EditorView.lineWrapping, javascript()]
		});

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

<div class="editor" bind:this={editorContainer} />
<div class="preview">
	<iframe bind:this={iframeEl} src="" title="code result" />
</div>

<style>
	.editor {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.preview {
		width: 100%;
		height: 100%;
	}

	iframe {
		width: 100%;
		height: 100%;
		resize: none;
		margin: 0;
		padding: 0;
		border: none;
		box-sizing: border-box;
	}
</style>
