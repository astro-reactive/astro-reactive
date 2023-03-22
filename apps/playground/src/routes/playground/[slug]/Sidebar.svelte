<script lang="ts">
    export let fileNames : string[]
</script>

<div class="sidebar">
    <ul>
        {#each fileNames as link}
            <li><a href={`/playground/${link}`}>{link}</a></li>
        {/each}
    </ul>
</div>

<style>
  .sidebar{
     height: 100%; 
    background-color: #24282f;
  }
  ul {
    margin: 0;
  }
</style>