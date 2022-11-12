import type { RequestEvent, RequestHandler } from './$types';

import { KANJISHO_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
    const resp = await fetch(KANJISHO_URL + params.kanji);
    const text = await resp.text();
    return new Response(text, {
        headers: { 'Content-Type': 'application/json' }
    });

}