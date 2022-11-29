import { beforeEach, describe, it, expect } from 'vitest';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils';

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
		const expectedResult = 'data-validator-error="true"';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'username',
				validators: ['validator-required'],
				errors: [
					{
						error: 'required',
						category: 'error',
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

	it('Should render correct validation attribute based on category prop', async () => {
		// arrange
		const categories = ['error', 'warn', 'info'];
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'username',
				validators: ['validator-required'],
				errors: [
					{
						error: 'required',
						category: 'error',
					},
				],
				value: '',
			},
			showValidationHints: true,
		};

		// act
		const results = await Promise.all(
			categories.map(async (category) => {
				props.control.errors = [{ error: 'required', category }];
				component = await getComponentOutput('./components/Field.astro', props);
				const actualResult = cleanString(component.html);
				return actualResult;
			})
		);

		// assert
		categories.forEach((category, index) => {
			expect(results[index]).to.contain(`data-validator-${category}="true"`);
		});
	});
});
