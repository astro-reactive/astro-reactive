import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://astro-reactive.dev',
	integrations: [tailwind()],
	vite: {
		ssr: {
			external: ['svgo'],
		},
	},
});
