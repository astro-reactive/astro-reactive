<script lang="ts">
	import Editor from '$lib/webcontainers/editor.svelte';
	import { onMount } from 'svelte';

	export let data;

	let editorView: Editor;

	$: selectedFile = data.content;
	$: {
		console.log(data.content)
		if (editorView) {
			editorView.$set({ selectedFile: data.content });
		}
	}

	onMount(() => {
		editorView = new Editor({
			target: document.querySelector('main') as HTMLElement,
			props: { selectedFile }
		});
	});
</script>
