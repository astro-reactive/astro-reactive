import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils/index.js';

describe('FieldSet.astro test', () => {
	let component;

	const control = {
		name: 'test',
		label: 'Test',
		type: 'text',
	};

	beforeEach(() => {
		component = undefined;
	});

	it('Should render fieldset tag', async () => {
		// arrange
		const expectedName = 'TestFieldSet';
		const props = {
			group: {
				name: expectedName,
				controls: [control],
			},
			showValidationHints: false,
		};

		// act
		component = await getComponentOutput('./components/FieldSet.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain('<fieldset', 'fieldset tag not found');
		expect(actualResult).to.contain(`<legend>${expectedName}</legend>`);
	});
});
