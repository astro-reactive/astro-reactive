import type { ControlBase } from './form-control-types';
import { FormControl } from './form-control';

export class FormGroup {
	controls: FormControl[];
	name?: string;

	constructor(controls: ControlBase[], name = '') {
		this.name = name;
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map((control) => new FormControl(control));
	}

	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}
}
