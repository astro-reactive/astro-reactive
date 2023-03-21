<script lang="ts">
	import Editor from '$lib/webcontainers/editor.svelte';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		new Editor({
			target: document.querySelector('main') as HTMLElement,
			props: { selectedFile: data.content }
		});
	});
</script>
