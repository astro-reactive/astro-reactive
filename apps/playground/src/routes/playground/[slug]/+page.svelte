<script lang="ts">
	import Editor from './Editor.svelte';
	import Sidebar from './Sidebar.svelte';

	export let data;
</script>

<div class="container">	
	<Sidebar fileNames={data.contentTitles} />
	<Editor commonFiles={data.commonFiles} selectedFile={data.content} />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 4fr;
	}
</style>
