import type { PageServerLoad, Actions } from './$types';
import type { Cookies } from '@sveltejs/kit';

const keyName = 'history';
const maxEntries = 10;

export const load: PageServerLoad = ({ cookies }) => {
	return {
		history: parseCookie(cookies)
	};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const search = data.get('search');

		if (typeof search === 'string') {
			updateCookie(cookies, search);

			// XXX should I do my api request here instead?
		}
	}
};

function parseCookie(cookies: Cookies) {
	const val = cookies.get(keyName);
	return val?.split(',') ?? [];
}

function updateCookie(cookies: Cookies, formValue: string) {
	const previous = parseCookie(cookies);
	const next = [formValue, ...previous.filter((v) => v !== formValue)];

	if (next.length > maxEntries) {
		next.length = maxEntries;
	}

	cookies.set('history', next.join(','));
}
