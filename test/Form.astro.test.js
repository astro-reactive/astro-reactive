import { expect } from 'chai';
import { getComponentOutput } from 'astro-component-tester';

describe('Form.astro test', async () => {
	let component;

	describe('Input: formGroup is empty', () => {
		it('Should handle empty formGroup prop', async () => {
			// arrange
			const expectedResult = `<form></form>`;
			const props = { formGroup: undefined };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});

		it('Should handle empty controls', async () => {
			// arrange
			const expectedResult = `<form></form>`;
			const props = { formGroup: { controls: [] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
	});

	describe('Label tests', () => {
		it('Should display text input with value and label positioned to the left', async () => {
			// arrange
			const name = 'fake-control';
			const value = 'fake-value';
			const label = 'fake-label';
			const labelPosition = 'left';
			const fakeControl = { name, value, label, labelPosition };
			const expectedResult = `<form><div><labelfor="${name}">${label}</label><inputname="${name}"id="${name}"value="${value}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display text input with value and label positioned to the right', async () => {
			// arrange
			const name = 'fake-control';
			const value = 'fake-value';
			const label = 'fake-label';
			const labelPosition = 'right';
			const fakeControl = { name, value, label, labelPosition };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"value="${value}"><labelfor="${name}">${label}</label></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
	});

	describe('Text Control tests', () => {
		it('Should display text input by default', async () => {
			// arrange
			const name = 'fake-control';
			const fakeControl = { name };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display text input with value', async () => {
			// arrange
			const name = 'fake-control';
			const value = 'fake-value';
			const fakeControl = { name, value };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"value="${value}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display text input with value and label', async () => {
			// arrange
			const name = 'fake-control';
			const value = 'fake-value';
			const label = 'fake-label';
			const fakeControl = { name, value, label };
			const expectedResult = `<form><div><labelfor="${name}">${label}</label><inputname="${name}"id="${name}"value="${value}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
	});

	describe('Checkbox Control tests', () => {
		it('Should display a checkbox', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'checkbox';
			const fakeControl = { name, type };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"type="${type}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display a checkbox with value checked', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'checkbox';
			const value = 'checked';
			const fakeControl = { name, type, value };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"type="${type}"value="${value}"checked="true"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display a checkbox with value checked and label', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'checkbox';
			const value = 'checked';
			const label = 'fake-label';
			const fakeControl = { name, type, value, label };
			const expectedResult = `<form><div><labelfor="fake-control">fake-label</label><inputname="${name}"id="${name}"type="${type}"value="${value}"checked="true"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
	});

	describe('Radio button tests', () => {
		it('Should display a radio button', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'radio';
			const fakeControl = { name, type };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"type="${type}"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display a radio button with value checked', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'radio';
			const value = 'checked';
			const fakeControl = { name, type, value };
			const expectedResult = `<form><div><inputname="${name}"id="${name}"type="${type}"value="${value}"checked="true"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
		it('Should display a radio button with value checked and label', async () => {
			// arrange
			const name = 'fake-control';
			const type = 'radio';
			const value = 'checked';
			const label = 'fake-label';
			const fakeControl = { name, type, value, label };
			const expectedResult = `<form><div><labelfor="fake-control">fake-label</label><inputname="${name}"id="${name}"type="${type}"value="${value}"checked="true"></div></form>`;
			const props = { formGroup: { controls: [fakeControl] } };
			component = await getComponentOutput('./src/Form.astro', props);

			// act
			const actualResult = cleanString(component.html);

			// assert
			expect(actualResult).to.contain(expectedResult);
		});
	});
});

function cleanString(str) {
	return str.replace(/\s/g, '');
}
