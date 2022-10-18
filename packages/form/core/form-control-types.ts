/**
 * ControlType - determines the type of form control
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export type ControlType =
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

export type ControlConfig = ControlBase | Checkbox | Radio | Submit | Button;

export interface ControlBase {
	name: string;
	id?: string;
	type?: ControlType;
	value?: string | number | string[];
	label?: string;
	labelPosition?: 'right' | 'left';
	placeholder?: string;
	validators?: string[]; // TODO: implement validator type
}

export interface Checkbox extends ControlBase {
	type: 'checkbox';
	checked: boolean;
}

export interface Radio extends Omit<ControlBase, 'value'> {
	type: 'radio';
	value: string[] | RadioOption[];
}

export interface RadioOption extends Omit<ControlBase, 'name'> {
	label: string;
	value: string;
	checked?: boolean;
}

export interface Submit extends ControlBase {
	type: 'submit';
	callBack?: () => void;
}

export interface Button extends ControlBase {
	type: 'button';
	callBack?: () => void;
}
