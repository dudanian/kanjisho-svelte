<script type="ts">
	import type { Kanji } from 'src/lib/kanji';
	import Value from './Value.svelte';
	export let kanji: Kanji;

	let [stroke_count, ...alternative_count] = kanji.stroke_count;

	let kun_readings = kanji.entries?.[0].readings
		?.filter((r) => r.lang === 'ja_kun')
		.map((r) => r.value);
	let on_readings = kanji.entries?.[0].readings
		?.filter((r) => r.lang === 'ja_on')
		.map((r) => r.value);
	let meanings = kanji.entries?.[0].meanings?.filter((m) => m.lang === 'en').map((m) => m.value);

	console.log(kun_readings, on_readings, meanings);
</script>

<section class="flex">
	<div>
		<h1 class="text-[8rem]">{kanji.literal}</h1>
	</div>
	<div>
		{#if meanings}
			<Value value={meanings} separator=", " />
		{/if}
		{#if kun_readings}
			<Value label="Kun" value={kun_readings} />
		{/if}
		{#if on_readings}
			<Value label="On" value={on_readings} />
		{/if}
	</div>
	<div>
		<Value label="Stroke" value={stroke_count} />
		{#if alternative_count.length}
			<Value label="Alternative Stroke Count" value={alternative_count} />
		{/if}
		{#if kanji.grade}
			<Value label="Grade (old)" value={kanji.grade} />
		{/if}
		{#if kanji.freq}
			<Value label="Frequency" value={kanji.freq} />
		{/if}
		{#if kanji.jlpt}
			<Value label="JLPT" value={'N' + kanji.jlpt} />
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

{#if kanji.nanori}
	<Value label="Nanori" value={kanji.nanori} />
{/if}

<h2 class="text-lg peer">Raw</h2>
<div class="hidden peer-hover:block hover:block border border-black bg-white">
	{JSON.stringify(kanji)}
</div>
