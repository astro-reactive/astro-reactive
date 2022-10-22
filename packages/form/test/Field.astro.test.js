import { expect } from 'chai';
import { beforeEach, describe, it } from 'mocha';
import { getComponentOutput } from 'astro-component-tester';

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

	it('Should render only label', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
		const props = {
			control: {
				label: expectedLabel,
				name: 'username',
				labelPosition: 'left',
			},
			showValidationHints: false,
			showOnlyLabel: true,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedLabel);
		expect(actualResult).to.not.contain('input');
	});

	it('Should render required fields with asterisk in label when showValidationHints is true', async () => {
		// arrange
		const expectedLabel = 'TestLabel';
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
		expect(actualResult).to.contain('*');
	});

	it('Should server-render validation error attributes', async () => {
		// arrange
		const expectedAttribute = 'data-validator-haserrors';
		const props = {
			control: {
				label: 'FAKE LABEL',
				name: 'username',
				labelPosition: 'left',
				validators: ['validator-required'],
				value: '',
			},
			showValidationHints: true,
		};

		// act
		component = await getComponentOutput('./components/Field.astro', props);
		const actualResult = cleanString(component.html);

		// assert
		expect(actualResult).to.contain(expectedAttribute);
	});
});

function cleanString(str) {
	return str.replace(/\s/g, '');
}
