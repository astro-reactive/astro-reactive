/**
 * FormControlType - determines the type of form control
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export type FormControlType =
	| 'text'
	| 'checkbox'
	| 'radio'
	| 'password'
	| 'button'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'range'
	| 'search'
	| 'submit'
	| 'tel'
	| 'time'
	| 'url'
	| 'week';

export interface FormControlBase {
	name: string;
	type?: FormControlType;
	value?: string | number | string[];
	label?: string;
	labelPosition?: 'right' | 'left';
}

export interface Checkbox extends FormControlBase {
	type: 'checkbox';
	checked: boolean;
}

export interface Radio extends FormControlBase {
	type: 'radio';
	checked: boolean;
}

export interface Submit extends FormControlBase {
	type: 'submit';
	callBack: () => void;
}

export interface Button extends FormControlBase {
	type: 'button';
	callBack: () => void;
}
	