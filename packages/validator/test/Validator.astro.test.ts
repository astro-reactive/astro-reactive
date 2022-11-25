import { describe, beforeEach, it, expect } from 'vitest';
import { getComponentOutput } from 'astro-component-tester';

describe('Example Tests', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	describe('Component test', async () => {
		it(
			'example component should not be empty',
			async () => {
				component = await getComponentOutput('./Validator.astro');
				expect(component.html).not.to.equal('\n');
			},
			{ timeout: 10000, retry: 3 }
		);
	});
});
