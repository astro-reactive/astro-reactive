<script lang="ts">
	export let fileNames: string[];
</script>

<div class="sidebar">
	<ul>
		{#each fileNames as link}
			<li><a href={`/playground/${link}`}>{link}</a></li>
		{/each}
	</ul>
</div>

<style>
	.sidebar {
		height: 100%;
		background-color: #24282f;
	}
	ul {
    list-style: none;
		margin: 0;
    padding: 0;

    display: flex;
    gap: 1.25rem;
    padding: 1rem 2rem;
    flex-direction: column;
	}
  li {
    width: 100%;
  }
  a {
    display: inline-block;
    width: 100%;
    text-decoration: none;
    color:  white;

    font-size: 1.5rem;
    font-weight: 500;

    padding: .75rem;
    border: 1px solid white;
    border-radius: 5px;
  }
</style>
