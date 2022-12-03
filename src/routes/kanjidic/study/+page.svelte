<script lang="ts">
	const types = [
		{
			id: 'jlpt',
			label: 'JLPT'
		},
		{
			id: 'freq',
			label: 'Frequency'
		},
		{
			id: 'klc',
			label: "Kanji Learner's Course"
		}
	];
</script>

<form action="" class="flex flex-col items-center">
	<div class="flex gap-2">
		{#each types as t, i}
			<div class="">
				<input
					type="radio"
					name="type"
					id={t.id}
					value={t.id}
					class="peer hidden"
					checked={i === 0}
				/>
				<!-- why does this need to be inline flex? -->
				<label
					for={t.id}
					class="block cursor-pointer px-8 border-b-2 border-blue-400 hover:border-blue-700 transition-colors box-border"
				>
					<div class="">{t.label}</div>
				</label>
			</div>
		{/each}
	</div>

	<button class=" px-12 py-4 bg-orange-900 rounded-md">Study</button>
</form>
