import { getContentTitles } from '$lib/server/playground-content';

export const load = async () => {
	const contentTitles = await getContentTitles();
	return {
		contentTitles
	};
};
