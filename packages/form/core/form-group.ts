import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';
import type { ResolvedField, ResolvedValidator } from '@astro-reactive/common';

type TypedControlName<T> = Omit<ControlConfig, 'name'> & {
	name: Extract<keyof T, string>;
} & ControlConfig;

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
	constructor(
		controls: TypedControlName<FormValues>[],
		formConfig?: { name?: string; resolver?: ResolvedField }
	) {
		const uid = new ShortUniqueId({ length: 9 });
		this.name = formConfig?.name ?? '';
		this.id = 'arl-' + uid();
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map(
				(control) =>
					new FormControl({
						...control,
						validators:
							formConfig?.resolver && formConfig.resolver[control.name]
								? formConfig.resolver[control.name] ?? ([] as ResolvedValidator[])
								: [],
					})
			);
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
