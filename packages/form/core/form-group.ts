import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';

export class FormGroup {
	controls: FormControl[];
	name?: string;
	id?: string;

	constructor(controls: ControlConfig[], name = '') {
		const uid = new ShortUniqueId({ length: 9 });
		this.name = name;
		this.id = 'arl-' + uid();
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map((control) => new FormControl(control));
	}

	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}
}
