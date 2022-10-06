import type {
	FormControlType,
	Button,
	Checkbox,
	FormControlBase,
	Radio,
	Submit,
} from './form-control-types';

export class FormControl {
	private _name = '';
	private _type: FormControlType = 'text';
	private _value?: string | number | null | string[];
	private _label?: string;
	private _labelPosition?: 'right' | 'left' = 'left';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder?;

	constructor(config: FormControlBase | Checkbox | Radio | Submit | Button) {
		const { name, type, value, label, labelPosition, placeholder } = config;
		this._name = name;
		this._type = type || 'text';
		this._value = value || null;
		this._label = label || '';
		this._labelPosition = labelPosition || 'left';
		this._placeholder = placeholder || '';
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

	get placeholder() {
		return this._placeholder;
	}

	get isPristine() {
		return this._isPristine;
	}

	set isPristine(value: boolean) {
		this._isPristine = value;
	}

	get isValid() {
		return this._isValid;
	}

	setValue(value: string) {
		this._value = value;
	}
}
