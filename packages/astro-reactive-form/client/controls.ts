import { FormControl, FormGroup } from "../core";
import type { FormControlType } from '../core/form-control-types';

export const getFormGroup = (formName: string) => {
  const fieldSetEl = document.getElementById(formName) as HTMLFieldSetElement || null;
	if(fieldSetEl === null) {
		console.error(`Formgroup with name: '${formName}' doesn't exist!`);
		return undefined;
	}
  
  const formGroup = new FormGroup([], formName);

  fieldSetEl.querySelectorAll("input").forEach(field => {
		const formControl = getFormControl(field.name);
		if(!formControl) return;
		formGroup.controls.push(formControl)
	});

  return formGroup;
}

const getFormControl = (name : string) => {
	const inputEl = document.getElementById(name) as HTMLInputElement | null;
	if(inputEl === null){
		console.error(`Input with name: ${name} doesn't exist!`);
		return undefined
	} 

	const formControl = new FormControl(
		{
			name : inputEl.name, 
			value : inputEl.value, 
			type: inputEl.type as FormControlType,
			label : inputEl.dataset.label as string,
			labelPosition : inputEl.dataset.labelPosition as "right" | "left"
		}
		);
 
	inputEl.addEventListener('change', (e) => {
		if(!(e.target instanceof HTMLInputElement)) return;
		let value = e.target.value;
		if(formControl.type === "checkbox") {
			value = formControl.value === "checked" ? "" : "checked"
		}
		formControl.setValue(value); 
		formControl.setIsPristine(false);
	})
	return formControl;
};
