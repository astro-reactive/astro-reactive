<script lang="ts">
	import Editor from './Editor.svelte';
	import { onMount } from 'svelte';

	export let data;

	let editorView: Editor;

	$: {
		if (editorView) {
			editorView.$set({ selectedFile : data.content });
		}
	}

	onMount(() => {
		editorView = new Editor({
			target: document.querySelector('main') as HTMLElement,
			props: { selectedFile : data.content, commonFiles : data.commonFiles }
		}); 
	});
</script>
