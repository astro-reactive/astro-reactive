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

export interface IFormControl {
	name: string;
	type?: FormControlType;
	value?: string | number | string[];
	label?: string;
	labelPosition?: 'right' | 'left';
}


export class FormControl {
	private _name: string = '';
	private _type?: FormControlType | undefined = 'text';
	private _value?: string | number | null | string[];
	private _label?: string;
	private _labelPosition?: 'right' | 'left' = 'left';

	constructor(config: IFormControl | Checkbox | Radio | Submit | Button) {
		const { name, type, value, label, labelPosition } = config;
		this._name = name;
		this._type = type || 'text';
		this._value = value || null;
		this._label = label || '';
		this._labelPosition = labelPosition || 'left';
	}

	get name() {
		return this._name;
	}

	get type() {
		return this._type;
	}

	get value() {
		return this._value;
	}

	get label() {
		return this._label;
	}

	get labelPosition() {
		return this._labelPosition;
	}

	setValue(value: string) {
		this._value = value;
	}

}

/**
 * TODO: Create classes for each control type
 */

export interface Checkbox extends IFormControl {
	type: 'checkbox';
	checked: boolean;
}

export interface Radio extends IFormControl {
	type: 'checkbox';
	checked: boolean;
}

export interface Submit extends IFormControl {
	type: 'submit';
	callBack: () => void;
}

export interface Button extends IFormControl {
	type: 'button';
	callBack: () => void;
}

