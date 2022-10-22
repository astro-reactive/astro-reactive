import type { ControlConfig, ControlType, RadioOption, ValidationError } from 'common/types';

export class FormControl {
	private _name = '';
	private _id = '';
	private _type: ControlType = 'text';
	private _value?: string | number | null | string[] | RadioOption[];
	private _label?: string;
	private _labelPosition?: 'right' | 'left' = 'left';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder?: string;
	private _validators?: string[];
	private _errors: ValidationError[] = [];

	private validate: (value: string, validators: string[]) => ValidationError[] = (
		value: string,
		validators: string[]
	) => [];

	constructor(private config: ControlConfig) {
		const { name, id, type, value, label, labelPosition, placeholder, validators = [] } = config;
		this._name = name;
		this._id = id ?? name;
		this._type = type ?? 'text';
		this._value = value ?? null;
		this._label = label ?? '';
		this._labelPosition = labelPosition ?? 'left';
		this._placeholder = placeholder ?? '';
		this._validators = validators;

		// dynamic import of the validator package
		// if user did not install the validator, then errors should be empty
		import('@astro-reactive/validator').then((validator) => {
			if (validator) {
				this.validate = validator.validate;

				const valueStr: string = this._value?.toString() || '';
				this._errors = this.validate(valueStr, validators);
			} else {
				this._errors = [];
			}
		});
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
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

	get isValid() {
		return this._isValid;
	}

	get validators() {
		return this._validators;
	}

	get errors() {
		return this._errors;
	}

	setValue(value: string) {
		this._value = value;
		this._isPristine = false;
		this._errors = this.validate(this._value, this.config.validators || []);
	}

	clearErrors() {
		this._errors = [];
	}

	setError(error: ValidationError) {
		this._errors = [...(this._errors || []), error];
	}
}
