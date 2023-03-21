import { getContent } from '$lib/server/playground-content';

export const load = async ({ params }) => {
	const content = await getContent(params.slug);
	return {
		content
	};
};
