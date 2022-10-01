import { FormControl, IFormControl } from './form-control';

export class FormGroup {
	controls: FormControl[];
	name?: string;

	constructor(controls: IFormControl[], name: string = '') {
		this.name = name;
		this.controls = controls.map((control) => new FormControl(control));
	}

	get(name: string): FormControl | undefined {
		return this.controls.find(control => control.name === name);
	}
}
