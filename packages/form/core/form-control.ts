import type {
	Button,
	Checkbox,
	ControlBase,
	ControlType,
	Radio,
	Dropdown,
	ControlOption,
	Submit,
	ValidationError,
} from '@astro-reactive/common';

export type ControlConfig = ControlBase | Checkbox | Radio | Submit | Button | Dropdown;

export class FormControl {
	private _name = '';
	private _type: ControlType = 'text';
	private _value?: string | number | null | string[] | ControlOption[];
	private _label = '';
	private _labelPosition?: 'right' | 'left' = 'left';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder: string | null = null;
	private _validators: string[] = [];
	private _errors: ValidationError[] = [];
	private _options: string[] | ControlOption[] = [];

	private validate: (value: string, validators: string[]) => ValidationError[] = (
		value: string,
		validators: string[]
	) => {
		value;
		validators;
		return [];
	};

	constructor(private config: ControlConfig) {
		const {
			name,
			type = 'text',
			value = null,
			label = '',
			labelPosition = 'left',
			placeholder = null,
			validators = [],
			options = [],
		} = config;

		this._name = name;
		this._type = type;
		this._value = value;
		this._label = label;
		this._labelPosition = labelPosition;
		this._placeholder = placeholder;
		this._validators = validators;
		this._options = options;

		// TODO: implement independence
		// form should try to import validator,
		// but handle error when it's not installed
		import('@astro-reactive/validator').then((validator) => {
			if (validator) {
				this.validate = validator.validate;

				const valueStr: string = this._value?.toString() || '';
				this._errors = this.validate(valueStr, validators);
			} else {
				// if user did not install the validator, then errors should be empty
				this._errors = [];
			}
		});
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

	get isValid() {
		return this._isValid;
	}

	get validators() {
		return this._validators;
	}

	get errors() {
		return this._errors;
	}

	get options() {
		return this._options;
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
