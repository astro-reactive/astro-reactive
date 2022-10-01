import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Form.astro test', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	describe('INPUT: formGroups', () => {
		it('Should handle undefined formGroups prop', async () => {
			// arrange
			const expectedResult = '<form></form>'
			const props = { formGroups: undefined };
			component = await getComponentOutput('./Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});

		it('Should handle empty formGroups prop', async () => {
			// arrange
			const expectedResult = '<form></form>'
			const props = { formGroups: [] };
			component = await getComponentOutput('./Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});

		it('Should render a fieldset for each form group', async () => {
			// arrange
			const expectedCount = 3;
			const element = /<fieldset>/g;
			const fakeFormGroup = {
				controls: [{
					type: 'checkbox',
					name: 'fake-checkbox',
					label: 'FAKE CHECKBOX'
				}]
			}
			const props = { formGroups: Array(expectedCount).fill(fakeFormGroup) };
			component = await getComponentOutput('./Form.astro', props);

			// act
			const actualResult = cleanString(component.html);
			const matches = actualResult.match(element) || [];

			// assert
			expect(matches.length).to.equal(expectedCount);
		})
	});
});

function cleanString(str) {
	return str.replace(/\s/g, '');
}
