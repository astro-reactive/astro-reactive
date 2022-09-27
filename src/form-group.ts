import { FormControl } from './form-control';

export class FormGroup {
	controls: FormControl[];

	constructor(controls: FormControl[]) {
		this.controls = controls.map((control) => ({
			...control,
			labelPosition: control.labelPosition || 'left',
		}));
	}
}
