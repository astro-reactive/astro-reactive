import type { ControlConfig, ControlType } from './form-control-types';

export class FormControl {
	private _name = '';
	private _type: ControlType = 'text';
	private _value?: string | number | null | string[];
	private _label?: string;
	private _labelPosition?: 'right' | 'left' = 'left';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder?: string;
	private _validators?: string[];

	constructor(config: ControlConfig) {
		const { name, type, value, label, labelPosition, placeholder, validators } = config;
		this._name = name;
		this._type = type ?? 'text';
		this._value = value ?? null;
		this._label = label ?? '';
		this._labelPosition = labelPosition ?? 'left';
		this._placeholder = placeholder ?? '';
		this._validators = validators ?? [];
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

	get validators() {
		return this._validators;
	}

	setValue(value: string) {
		this._value = value;
		this._isPristine = false;
	}

	setIsPristine(value: boolean) {
		this._isPristine = value;
	}
}
