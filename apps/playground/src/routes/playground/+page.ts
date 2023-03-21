import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
	throw redirect(307, '/playground/welcome-to-arl');
}) satisfies PageLoad;
