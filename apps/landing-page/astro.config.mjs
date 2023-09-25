import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';
import { defineConfig } from 'astro/config';

export default defineConfig({
	integrations: [tailwind(), netlify()],
	site: 'https://astro-reactive.dev',
});
