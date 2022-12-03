<script lang="ts">
	export let values: string[];
</script>

<div class="flex">
	{#each values as v, i}
		<div class="flex items-center p-2 m-1 dark:bg-slate-900">
			{v}
		</div>
	{/each}
</div>
