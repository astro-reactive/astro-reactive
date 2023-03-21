<script>
	import { page } from '$app/stores';
</script>

<ul>
	{#each $page.data.contentTitles as link}
		<li><a href={`/playground/${link}`}>{link}</a></li>
	{/each}
</ul>
<slot />
