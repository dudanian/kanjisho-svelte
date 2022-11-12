<script lang="ts">
	let text = "";
	let promise: any;

	$: {
		let chars = [...text];
		if (chars.length > 1) {
			let char = chars[0];
			promise = fetch("/kanjidic/" + char)
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
</script>

<svelte:head>
	<title>Kanji</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this app</h1>
	<input bind:value={text} />

	{#await promise}
		<p>...waiting</p>
	{:then kanji}
		<p>{JSON.stringify(kanji)}</p>
	{/await}
</div>
