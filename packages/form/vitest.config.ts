import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		testTimeout: 30000,
		threads: !process.env.CI,
		coverage: {
			provider: 'istanbul',
		},
	},
});
