<script lang="ts">
	import { klc } from '$lib/klc';

	// CSS only supports one of 8/10
	const groupSize = 8;

	const groups = klc.reduce<string[][]>((groups, k, i) => {
		if (i % groupSize === 0) {
			groups.push([]);
		}
		groups[groups.length - 1].push(k);
		return groups;
	}, []);
</script>

<p class="mb-4 text-xl">
	Here are all the Kanji in the Kanji Learner's Course, grouped by 8 so lookup in the book is easier
	(each page has 4 entries).
</p>

<div class="grid grid-cols-auto-{groupSize} gap-y-2 gap-x-2">
	{#each groups as group, i}
		<div class="flex items-center justify-center text-lg">{`${i * groupSize + 1}`}</div>
		{#each group as k}
			{#if k === '〇'}
				<!-- kanjidic has no entry, so don't link to an non-existent page -->
				<span class="flex items-center justify-center text-2xl">{k}</span>
			{:else}
				<a class="flex items-center justify-center text-2xl" href="/kanjidic/{k}">{k}</a>
			{/if}
		{/each}
	{/each}
</div>
