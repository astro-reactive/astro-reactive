import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const response = await resolve(event);

	response.headers.set('cross-origin-opener-policy', 'same-origin');
	response.headers.set('cross-origin-embedder-policy', 'require-corp');
	response.headers.set('cross-origin-resource-policy', 'cross-origin');

	return response;
}) satisfies Handle;
