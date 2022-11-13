<script lang="ts">
	import type { PageData } from './$types';

	let text = '';
	let promise: any;

	$: {
		let chars = [...text];
		if (chars.length > 1) {
			let char = chars[0];
			promise = fetch('/kanjidic/' + char)
				.then((d) => {
					console.log(d);
					return d.json();
				})
				.then((d) => {
					console.log(d);
					return d;
				})
				.catch((e) => console.log(e));
		}
	}

	export let data: PageData;
</script>

<svelte:head>
	<title>Kanji</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<form method="POST">
		<input name="search" type="text" />
	</form>

	{#if data.history.length}
		<div>Previous searches</div>
		<div>
			{#each data.history as entry}
				<a class="p-1" href={'/kanjidic/' + encodeURIComponent(entry)}>{entry}</a>
			{/each}
		</div>
	{/if}

	{#await promise}
		<p>...waiting</p>
	{:then kanji}
		<p>{JSON.stringify(kanji)}</p>
	{/await}
</div>
