import { FormControl } from './form-control';

export class FormGroup {
	controls: FormControl[];
	name?: string;

	constructor(controls: FormControl[], name?: string) {
		this.name = name || null;
		this.controls = controls.map((control) => ({
			...control,
			labelPosition: control.labelPosition || 'left',
		}));
	}
}
