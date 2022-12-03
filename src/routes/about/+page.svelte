<script lang="ts">
	const section = 'text-2xl mb-2';
	const header = 'text-xl link';
	const body = 'py-2';
	const link = 'text-sky-500 hover:text-sky-400 visited:text-sky-600';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1 class={section}>About this app</h1>

<p class={body}>This app heavily relies on a lot of publically available Japanese information.</p>

<h2 class={section}>Data Sources</h2>

<h3 class={header}>
	<a class={link} href="http://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project"
		>JMdict</a
	>
</h3>

<p class={body}>
	The primary data source was JMdict, not too different from any other free Japanese resource on the
	internet.
</p>

<h3 class={header}>
	<a class={link} href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project">KANJIDIC</a>
</h3>

<p class={body}>Kanji information was taken from the also very popular KANJIDIC2 project.</p>

<h3 class={header}>
	<a class={link} href="https://keystojapanese.com/klc/">Kodansha Kanji Learner's Course</a>
</h3>

<p class={body}>
	While all of the kanji/vocab information used in this site is taken from other sources, creating a
	resource to help study using the KLC without the physical book was one of the primary inspirations
	for this projects as a whole.
</p>

<h3 class={header}>
	<a class={link} href="http://www.tanos.co.uk/jlpt/">Jonathan Waller's JLPT Resources</a>
</h3>

<p class={body}>
	Although not used directly because the pages everyone seems to scrape from are (permanently?)
	down, the estimated modern JLPT rankings were taken from his site.
</p>
