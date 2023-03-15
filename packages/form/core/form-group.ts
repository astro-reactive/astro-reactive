import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';
import type { ResolvedField } from '@astro-reactive/common';

/**
 * Generate `ControlConfig`s with typed name property.
 */
type TypedControlName<T> = Omit<ControlConfig, 'name'> & {
	name: Extract<keyof T, string>;
} & ControlConfig;

/**
 * FormGroup configuration
 */
interface FormConfig {
	name?: string;
	validationSchema?: ResolvedField;
}

/**
 *  Represents a group of controls that will be rendered as a fieldset element in a form.
 */
export class FormGroup<FormValues = Record<string, never>> {
	controls: FormControl[];
	name?: string;
	id?: string;

	/**
	 * Tracks the value and validity state of a group of `FormControl` instances.
	 * @param controls - an array of `FormControl` configuration
	 * @param name - optional form name
	 */
	constructor(controls: TypedControlName<FormValues>[], formConfig?: FormConfig) {
		const uid = new ShortUniqueId({ length: 9 });
		this.name = formConfig?.name ?? '';
		this.id = 'arl-' + uid();
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map((control) => {
				let formControlConfig = control;
				if (formConfig?.validationSchema)
					formControlConfig = {
						...formControlConfig,
						validators: formConfig.validationSchema.get(control.name) ?? [],
					};
				return new FormControl(formControlConfig);
			});
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
}
