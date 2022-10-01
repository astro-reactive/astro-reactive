/**
 * FormControlType - determines the type of form control
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
type FormControlType =
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

export class FormControl {
	name: string = '';
	type?: FormControlType = 'text';
	value?: string | number | null | string[];
	label?: string;
	labelPosition?: 'right' | 'left' = 'left';
}

/**
 * TODO: Create classes for each control type
 */

export interface Checkbox extends FormControl {
	type: 'checkbox';
	checked: boolean;
}

export interface Radio extends FormControl {
	type: 'checkbox';
	checked: boolean;
}

export interface Submit extends FormControl {
	type: 'submit';
	callBack: () => void;
}
