import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';
import { transformToValidatorRules } from '@astro-reactive/validator';
import type { ResolvedField } from '@astro-reactive/common';

/**
 *  Represents a group of controls that will be rendered as a fieldset element in a form.
 */
export class FormGroup {
	controls: FormControl[];
	name?: string;
	id?: string;

	/**
	 * Tracks the value and validity state of a group of `FormControl` instances.
	 * @param controls - an array of `FormControl` configuration
	 * @param name - optional form name
	 */
	constructor(controls: ControlConfig[], name = '') {
		const uid = new ShortUniqueId({ length: 9 });
		this.name = name;
		this.id = 'arl-' + uid();
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map((control) => new FormControl(control));
	}

	/**
	 * Gets a form control by its name
	 */
	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}

	/**
	 * Sets the `FormGroup`'s form controls value
	 */
	setValue(values: object) {
		Object.keys(values).forEach((name) => this.get(name)?.setValue(values[name as keyof object]));
	}

	static from(resolvedSchema: ResolvedField[]) {
		const controls: ControlConfig[] = [];

		for (const field of resolvedSchema) {
			const fieldName = field.name;
			const validators = field.validators;

			const transformedValidators = transformToValidatorRules(validators);

			const control: ControlConfig = {
				name: fieldName,
				label: fieldName,
				validators: transformedValidators,
			};

			controls.push(control);
		}

		return new FormGroup(controls);
	}
}
