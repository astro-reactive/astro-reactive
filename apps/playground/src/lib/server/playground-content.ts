import fs from 'fs';
import glob from 'tiny-glob';

export async function getContent(contentDir: string) {
	return fs.readFileSync(`content/examples/${contentDir}/index.astro`, 'utf-8');
}

export async function getContentTitles() {
	return fs.readdirSync('content/examples');
}
