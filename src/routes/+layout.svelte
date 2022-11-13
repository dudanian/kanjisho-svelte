<script>
	import '../app.postcss';
</script>

<div class="max-w-4xl mx-auto">
	<header class="text-4xl">
		<a href="/">Kanjisho</a>
	</header>

	<nav class="text-lg">
		<a class="p-4" href="/kanjidic">Kanjidic</a>
	</nav>

	<main>
		<slot />
	</main>
</div>
