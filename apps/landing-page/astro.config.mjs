import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [tailwind()],
	site: 'https://astro-reactive.dev',
});
