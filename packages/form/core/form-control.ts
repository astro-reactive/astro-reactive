import type {
	Button,
	Checkbox,
	ControlType,
	Radio,
	Dropdown,
	ControlOption,
	Submit,
	ValidationError,
	TextArea,
	ControlBase,
} from '@astro-reactive/common';
import ShortUniqueId from 'short-unique-id';

export type ControlConfig = ControlBase | Checkbox | Radio | Submit | Button | Dropdown | TextArea;

export class FormControl {
	private _id = '';
	private _name = '';
	private _type: ControlType = 'text';
	private _value?: string | number | null | string[] | ControlOption[];
	private _label = '';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder: string | null = null;
	private _validators: string[] = [];
	private _errors: ValidationError[] = [];
	private _options: string[] | ControlOption[] = [];
	private _rows: number | null = null;
	private _cols: number | null = null;

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
			placeholder = null,
			validators = [],
		} = config;

		const uid = new ShortUniqueId({ length: 9 });
		this._id = 'arl-' + uid();
		this._name = name;
		this._type = type;
		this._value = value;
		this._label = label;
		this._placeholder = placeholder;
		this._validators = validators;

		if (type === 'radio' || type === 'dropdown') {
			const { options = [] } = config as Radio | Dropdown;
			this._options = options;
		}

		if (config.type === 'textarea') {
			const { rows = null, cols = null } = config as TextArea;
			this._rows = rows;
			this._cols = cols;
		}

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

	get id() {
		return this._id;
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

	get rows() {
		return this._rows;
	}

	get cols() {
		return this._cols;
	}

	setValue(value: string) {
		this._value = value;
		this._isPristine = false;
		this._errors = this.validate(value, this.config.validators || []);
	}

	setValidators(validators: string[]) {
		this._validators = validators;
		const valueStr: string = this._value?.toString() || '';
		this._errors = this.validate(valueStr, this._validators || []);
	}

	clearErrors() {
		this._errors = [];
	}

	setError(error: ValidationError) {
		this._errors = [...(this._errors || []), error];
	}
}
