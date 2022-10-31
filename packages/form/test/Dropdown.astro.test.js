import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { getComponentOutput } from 'astro-component-tester';
import { cleanString } from './utils/index.js';

describe('Dropdown.astro test', () => {
	let component;

	beforeEach(() => {
		component = undefined;
	});

	it('Should render all dropdown string[] options', async () => {
		// arrange
		const expectedOptions = 3;
		const element = /<option/g;
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				options: ['one', 'two', 'three'],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);
		const matches = actualResult.match(element) || [];

		// assert
		expect(matches.length).to.equal(expectedOptions);
	});

	it('Should render all dropdown ControlOption[] options', async () => {
		// arrange
		const expectedOptions = 3;
		const element = /<option/g;
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				options: [
					{
						label: 'one',
						value: 'one',
					},
					{
						label: 'two',
						value: 'two',
					},
					{
						label: 'three',
						value: 'three',
					},
				],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);
		const matches = actualResult.match(element) || [];

		// assert
		expect(matches.length).to.equal(expectedOptions);
	});

	it('Should render a dropdown with placeholder', async () => {
		// arrange
		const expectedResult = '<optionvalue=""disabledselected="true">TEST</option>';
		const expectedOptions = 4;
		const element = /<option/g;
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				placeholder: 'TEST',
				options: ['one', 'two', 'three'],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);
		const matches = actualResult.match(element) || [];

		// assert
		expect(matches.length).to.equal(expectedOptions);
		expect(actualResult).to.contain(expectedResult);
	});

	it('Should select a selected dropdown option from string[] correctly', async () => {
		const expectedResult = '<optionvalue="two"selected="true">';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				value: 'two',
				options: ['one', 'two', 'three'],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedResult);
	});

	it('Should select a selected dropdown option from ControlOption[] correctly', async () => {
		const expectedResult = '<optionvalue="three"selected="true">';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				value: 'three',
				options: [
					{
						value: 'one',
						label: '1',
					},
					{
						value: 'two',
						label: '2',
					},
					{
						value: 'three',
						label: '3',
					},
				],
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedResult);
	});

	it('Should render readonly flag', async () => {
		// arrange
		const expectedOptions = 1;
		const element = /readonly/g;
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'FAKE NAME',
				type: 'dropdown',
				options: ['one', 'two', 'three'],
			},
			readOnly: true,
		};

		// act
		component = await getComponentOutput('./components/controls/Dropdown.astro', props);
		const actualResult = cleanString(component.html);
		const matches = actualResult.match(element) || [];

		// assert
		expect(matches.length).to.equal(expectedOptions);
	});
});
