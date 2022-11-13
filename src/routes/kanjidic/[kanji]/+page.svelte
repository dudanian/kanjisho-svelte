<script lang="ts">
	import type { PageData } from './$types';
	import Kanji from './Kanji.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Kanji</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div>
	<Kanji kanji={data.kanji} />
</div>
