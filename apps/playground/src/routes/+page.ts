import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export const load = (() => {
	throw redirect(307, '/playground');
}) satisfies PageLoad;
