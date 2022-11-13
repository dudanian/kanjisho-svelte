import type { PageServerLoad, Actions } from './$types';
import { KANJISHO_URL } from '$env/static/private';
import type { Kanji } from 'src/lib/kanji';

export const load: PageServerLoad = async ({ params, fetch, request }) => {
	const resp = await fetch(KANJISHO_URL + params.kanji);
	const kanji: Kanji = await resp.json();

	return {
		kanji
	};
};

export const actions: Actions = {};
