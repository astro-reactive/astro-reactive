import { describe, beforeEach, it, expect } from 'vitest';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils';

describe('TextArea.astro test', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	it('Should render a textarea', async () => {
		// arrange
		const expectedHTML = '<textarea';
		const props = {
			control: {
				name: 'FAKE NAME',
				type: 'textarea',
			},
		};

		// act
		component = await getComponentOutput('./components/controls/TextArea.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedHTML);
	});

	it('Should render a textarea with label', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
		const props = {
			control: {
				label: 'TestLabel',
				name: 'FAKE NAME',
				type: 'textarea',
			},
		};

		// act
		component = await getComponentOutput('./components/controls/TextArea.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedLabel);
	});

	it('Should render a textarea with placeholder', async () => {
		// arrange
		const expectedAttribute = 'placeholder="test"';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'textarea',
				placeholder: 'test',
			},
		};

		// act
		component = await getComponentOutput('./components/controls/TextArea.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedAttribute);
	});

	it('Should render a textarea with initial value', async () => {
		// arrange
		const expectedText = 'hello,world!';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'textarea',
				placeholder: 'test',
				value: 'hello,world!',
			},
		};

		// act
		component = await getComponentOutput('./components/controls/TextArea.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedText);
	});

	it('Should render a required textarea with data required attribute when showValidationHints is true', async () => {
		// arrange
		const expectedAttribute = 'data-validator-required="true"';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'textarea',
				validators: ['validator-required'],
			},
		};

		// act
		component = await getComponentOutput('./components/controls/TextArea.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedAttribute);
	});
});
