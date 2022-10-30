import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils/index.js';

describe('Field.astro test', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	it('Should render field with label', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
		const props = {
			control: {
				label: expectedLabel,
				name: 'username',
				labelPosition: 'left',
			},
			showValidationHints: false,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedLabel);
	});

	it('Should render required fields with data required attribute when showValidationHints is true', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
		const expectedAttribute = 'data-validator-required="true"';
		const props = {
			control: {
				label: expectedLabel,
				name: 'username',
				labelPosition: 'left',
				validators: ['validator-required'],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedLabel);
		expect(actualResult).to.contain(expectedAttribute);
	});

	it('Should server-render validation error attributes', async () => {
		// arrange
		const expectedResult = 'data-validator-haserrors="true"';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'username',
				labelPosition: 'left',
				validators: ['validator-required'],
				errors: [
					{
						error: 'required',
					},
				],
				value: '',
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedResult);
	});

	it('Should render field with readOnly attribute when readOnly is true', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
		const expectedAttribute = 'readonly';
		const props = {
			control: {
				label: expectedLabel,
				name: 'username',
				labelPosition: 'left',
				validators: ['validator-required'],
			},
			readOnly: true,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedLabel);
		expect(actualResult).to.contain(expectedAttribute);
	});
});
