import * as defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'astro-sm': { max: '1000px' },
			'astro-md': { min: '640px', max: '1000px' },
			'astro-img': { min: '600px', max: '1000px' },
			'astro-lg': { min: '1000px' },
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
			textColor: {
				default: 'var(--color-text)',
				offset: 'var(--color-text-offset)',
			},
			backgroundColor: {
				default: 'var(--color-background)',
				offset: 'var(--color-background-offset)',
			},
			borderColor: {
				default: 'var(--color-border)',
			},
		},
	},
	corePlugins: {
		fontSize: false,
	},
	plugins: [require('tailwindcss-fluid-type')],
};
