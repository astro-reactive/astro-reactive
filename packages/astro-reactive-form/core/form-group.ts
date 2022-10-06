import type { FormControlBase } from '../types';
import { FormControl } from './form-control';

export class FormGroup {
	controls: FormControl[];
	name?: string;

	constructor(controls: FormControlBase[], name = '') {
		this.name = name;
		this.controls = controls.map((control) => new FormControl(control));
	}

	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}
}
