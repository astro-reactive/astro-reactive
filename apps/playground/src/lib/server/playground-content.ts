import fs from 'fs';
import glob from 'tiny-glob';

export async function getContent(contentDir: string) {
	return fs.readFileSync(`content/examples/${contentDir}/index.astro`, 'utf-8');
}

export async function getCommmon() {
	const files = await glob('content/common/**/*', { filesOnly: true });
	const fileTree = new Map();

	files.forEach((file) => {
		fileTree.set(file.split('/').slice(2), fs.readFileSync(file, 'utf-8'));
	});

	return fileTree;
}

export async function getContentTitles() {
	return fs.readdirSync('content/examples');
}
