<script type="ts">
	import type { Kanji } from 'src/lib/kanji';
	import Chips from './Chips.svelte';
	import Value from './Value.svelte';
	export let kanji: Kanji;

	let kun_readings = kanji.kun_readings;
	let on_readings = kanji.on_readings;
	let meanings = kanji.meanings;

	console.log(kun_readings, on_readings, meanings);
</script>

<section class="flex">
	<div>
		<h1 class="text-[8rem]">{kanji.literal}</h1>
	</div>
	<div>
		{#if meanings}
			<Chips values={meanings} />
		{/if}
		{#if kun_readings}
			<Value label="Kun" value={kun_readings} />
		{/if}
		{#if on_readings}
			<Value label="On" value={on_readings} />
		{/if}
	</div>
	<div>
		<Value label="Stroke" value={kanji.info.stroke_count} />
		{#if kanji.info.grade}
			<Value label="Grade (old)" value={kanji.info.grade} />
		{/if}
		{#if kanji.info.freq}
			<Value label="Frequency" value={kanji.info.freq} />
		{/if}
		{#if kanji.info.jlptn}
			<Value label="JLPT" value={'N' + kanji.info.jlptn} />
		{/if}
		{#if kanji.info.jlpt}
			<Value label="Old JLPT" value={'N' + kanji.info.jlpt} />
		{/if}
	</div>
</section>

<!-- TODO how to render this -->
<!-- {#if kanji.radical}
	<h2 class="text-lg">Radical</h2>
	{#each kanji.radical as radical}
		<div>{radical.source} {radical.value}</div>
	{/each}
{/if} -->

{#if kanji.nanoris}
	<Value label="Nanori" value={kanji.nanoris} />
{/if}

<h2 class="text-lg peer">Raw</h2>
<div class="hidden peer-hover:block hover:block border border-black bg-white dark:bg-slate-900">
	{JSON.stringify(kanji)}
</div>
