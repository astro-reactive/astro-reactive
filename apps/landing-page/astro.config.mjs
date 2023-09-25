import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://astro-reactive.dev',
	integrations: [tailwind()],
	output: 'server',
	adapter: netlify(),
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
