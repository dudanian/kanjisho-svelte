<script lang="ts">
	export let label: string | undefined = undefined;
	export let value: number | string | string[] | number[];
	export let separator = '・';
</script>

<div class="flex">
	{#if label}
		<div class="text-lg mr-2 font-bold">{label}</div>
	{/if}
	<div class="flex items-center">
		{#if Array.isArray(value)}
			{#each value as v, i}
				{#if i !== 0}
					{separator + v}
				{:else}
					{v}
				{/if}
			{/each}
		{:else}
			<span>{value}</span>
		{/if}
	</div>
</div>
