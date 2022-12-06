import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';

export class FormGroup {
	controls: FormControl[];
	name?: string;
	id?: string;

	/**
	 * Create a form group that represents a `form` element for all controls
	 * @param controls - an array of `FormControl`
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
	 * Get a form control by its name
	 */
	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}

	/**
	 * Set the `FormGroup`'s form controls value
	 */
	setValue(values: object) {
		Object.keys(values).forEach((name) => this.get(name)?.setValue(values[name as keyof object]));
	}
}
