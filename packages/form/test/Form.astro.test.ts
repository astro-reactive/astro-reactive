import { describe, beforeEach, it, expect } from 'vitest';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils';

describe('Form.astro test', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	describe('INPUT: formGroups', () => {
		it('Should handle undefined formGroups prop', async () => {
			// arrange
			const expectedCount = 0;
			const element = /<fieldset>/g;
			const props = { formGroups: undefined };
			component = await getComponentOutput('./components/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		});

		it('Should handle empty formGroups prop', async () => {
			// arrange
			const expectedCount = 0;
			const element = /<fieldset>/g;
			const props = { formGroups: [] };
			component = await getComponentOutput('./components/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		});

		it('Should render a fieldset for each form group', async () => {
			// arrange
			const expectedCount = 3;
			const element = /<fieldset>/g;
			const fakeFormGroup = {
				controls: [
					{
						type: 'checkbox',
						name: 'fake-checkbox',
						label: 'FAKE CHECKBOX',
					},
				],
			};
			const props = { formGroups: Array(expectedCount).fill(fakeFormGroup) };
			component = await getComponentOutput('./components/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		});

		it('Should not render a fieldset for a single form group', async () => {
			// arrange
			const expectedCount = 0;
			const element = /<fieldset>/g;
			const fakeFormGroup = {
				controls: [
					{
						type: 'checkbox',
						name: 'fake-checkbox',
						label: 'FAKE CHECKBOX',
					},
				],
			};
			const props = { formGroups: fakeFormGroup };
			component = await getComponentOutput('./components/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		});
		it('Should render readOnly fields if the flag is passed as true', async () => {
			// arrange
			const expectedCount = 3;
			const element = /readonly/g;
			const fakeFormGroup = {
				controls: [
					{
						type: 'text',
						name: 'fake-checkbox',
						label: 'FAKE CHECKBOX',
					},
				],
			};
			const props = { formGroups: Array(expectedCount).fill(fakeFormGroup), readOnly: true };
			component = await getComponentOutput('./components/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		});
	});
});
