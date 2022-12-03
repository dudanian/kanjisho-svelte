<script>
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<div class="max-w-4xl mx-auto ">
	<Header />

	<main>
		<slot />
	</main>
</div>
