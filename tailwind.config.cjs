const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-8': 'auto repeat(8, minmax(0, 1fr))',
				'auto-10': 'auto repeat(10, minmax(0, 1fr))',
			}
		}
	},

	plugins: []
};

module.exports = config;
