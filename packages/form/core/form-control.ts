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
	ValidatorRules,
	ValidationHooks,
} from '@astro-reactive/common';
import ShortUniqueId from 'short-unique-id';

/**
 * Type of form controls
 */
export type ControlConfig = ControlBase | Checkbox | Radio | Submit | Button | Dropdown | TextArea;

/**
 * Represents an individual control that will be rendered as an input element.
 */
export class FormControl {
	private _id = '';
	private _name = '';
	private _type: ControlType = 'text';
	private _value?: string | number | null | string[] | ControlOption[];
	private _label = '';
	private _isValid = true;
	private _isPristine = true;
	private _placeholder: string | null = null;
	private _validators: ValidatorRules = [];
	private _triggerValidationOn: ValidationHooks;
	private _errors: ValidationError[] = [];
	private _options: string[] | ControlOption[] = [];
	private _rows: number | null = null;
	private _cols: number | null = null;

	private validate: (value: string, validators: ValidatorRules) => ValidationError[] = (
		value: string,
		validators: ValidatorRules
	) => {
		value;
		validators;
		return [];
	};

	/**
	 * Tracks the value and validation status of an individual form control.
	 * @param config - interface of a `FormControl`'s configuration.
	 * @param validateOnLoad - determines if a control will be validated before rendering on the server. Defaults to `false`
	 */
	constructor(private config: ControlConfig, validateOnLoad = false) {
		const {
			name,
			type = 'text',
			value = null,
			label = '',
			placeholder = null,
			validators = [],
			triggerValidationOn = 'blur',
		} = config;

		const uid = new ShortUniqueId({ length: 9 });
		this._id = 'arl-' + uid();
		this._name = name;
		this._type = type;
		this._value = value;
		this._label = label;
		this._placeholder = placeholder;
		this._validators = validators;
		this._triggerValidationOn = triggerValidationOn;

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
		this.setValidateOnLoad(validateOnLoad);
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

	get triggerValidationOn() {
		return this._triggerValidationOn;
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

	/**
	 * Sets the form control value dynamically
	 * @param value - new value to set
	 */
	setValue(value: string) {
		this._value = value;
		this._isPristine = false;
		this._errors = this.validate(value, this.config.validators || []);
	}

	/**
	 * Sets validators dynamically for the form control
	 * @param validators - array of `Validators` return value
	 */
	setValidators(validators: string[]) {
		this._validators = validators;
		const valueStr: string = this._value?.toString() || '';
		this._errors = this.validate(valueStr, this._validators || []);
	}

	/**
	 * Sets the property that determines if control will be validated before rendering on the server
	 */
	setValidateOnLoad(validateOnLoad: boolean) {
		if (validateOnLoad) {
			import('@astro-reactive/validator').then((validator) => {
				if (validator) {
					this.validate = validator.validate;

					const valueStr: string = this._value?.toString() || '';
					this._errors = this.validate(valueStr, this._validators);
				} else {
					// if user did not install the validator, then errors should be empty
					this._errors = [];
				}
			});
		} else {
			// don't do validate for server-render error messages, also set errors to empty
			this._errors = [];
		}
	}

	/**
	 * Clears all errors from a form contol
	 */
	clearErrors() {
		this._errors = [];
	}

	/**
	 * Sets an error dynamically
	 * @param error - A `ValidationError` object
	 */
	setError(error: ValidationError) {
		this._errors = [...(this._errors || []), error];
	}
}
