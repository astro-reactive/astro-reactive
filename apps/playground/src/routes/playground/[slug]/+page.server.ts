import { getCommmon, getContent } from '$lib/server/playground-content';
import type { FileSystemTree } from '@webcontainer/api';

export const load = async ({ params }) => {
	const [content, commonFiles] = await Promise.all([getContent(params.slug), getCommmon()]);

	const fileTree: FileSystemTree = {};
	// This logic is simple because currently there are no nested files/directory
	for (const [fileName, fileContent] of commonFiles) {
		Object.assign(fileTree, { [fileName]: { file: { contents: fileContent } } });
	}

	return {
		content,
		commonFiles: fileTree
	};
};
