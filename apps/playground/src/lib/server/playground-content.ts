import glob from 'tiny-glob';
import fs from 'fs';

export async function getContent(contentDir: string) {
	const files = await glob(`${contentDir}/**/*.{astro,md}`, {
		cwd: 'content/examples',
		filesOnly: true
	});
	return fs.readFileSync(`content/examples/${contentDir}/index.astro`, 'utf-8');
}
