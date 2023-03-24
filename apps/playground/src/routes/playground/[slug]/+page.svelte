<script lang="ts">
	import Editor from './Editor.svelte';
	import Sidebar from './Sidebar.svelte';

	export let data;
</script>

<div class="container">
	<section class="sidebar">
		<Sidebar fileNames={data.contentTitles} />
	</section>
	<section class="editor">
		<Editor commonFiles={data.commonFiles} selectedFile={data.content} />
	</section>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 4fr;
		width: 100vw;
		height: 100%;
		overflow: hidden;
	}
	.editor {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 100%;
	}	
	.sidebar {
		height: 100%;
	}
</style>
