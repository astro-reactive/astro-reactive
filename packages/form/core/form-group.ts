import { ControlConfig, FormControl } from './form-control';
import ShortUniqueId from 'short-unique-id';

export interface FormConfig {
	name?: string;
	validateOnLoad?: boolean;
}

export class FormGroup {
	controls: FormControl[];
	name?: string;
	id?: string;

	constructor(controls: ControlConfig[], formConfig: FormConfig = {}) {
		const uid = new ShortUniqueId({ length: 9 });
		const { name = '', validateOnLoad = false } = formConfig;
		this.name = name;
		this.id = 'arl-' + uid();
		this.controls = controls
			.filter((control) => control.type !== 'submit')
			.map((control) => new FormControl(control, validateOnLoad));
	}

	get(name: string): FormControl | undefined {
		return this.controls.find((control) => control.name === name);
	}

	setValue(values: object) {
		Object.keys(values).forEach((name) => this.get(name)?.setValue(values[name as keyof object]));
	}

	setValidateOnLoad(validateOnLoad: boolean) {
		this.controls.forEach((control) => control.setValidateOnLoad(validateOnLoad));
	}
}
