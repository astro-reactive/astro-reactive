import type { ValidationError, ValidatorRules } from '@astro-reactive/common';
import { Validators } from './validator-names';

/**
 * given the value and validators, `validate()` returns an array of errors
 * @param value - value to be validated
 * @param validators - names of validation logic to be applied
 * @returns errors - array of errors `ValidationError`
 */
export function validate(value: string, validators: ValidatorRules): ValidationError[] {
	return validators
		.map((validator) => {
			if (typeof validator === 'string') {
				return { attribute: validator.replace('data-', ''), category: 'error' };
			}

			return {
				attribute: validator.validator.replace('data-', ''),
				category: validator.category || 'error',
			};
		})
		.map(({ attribute, category }): ValidationError | null => {
			// TODO: implement dynamic import of function depending on validators
			const split = attribute.split(':');
			const validator = split[0];
			const limitStr = split[1];
			const limit = parseInt(limitStr || '0', 10);

			if (validator === Validators.min()) {
				const val = validateMin(value, limit);
				if (val) {
					val.category = category;
				}
				return val;
			}

			if (validator === Validators.max()) {
				const val = validateMax(value, limit);
				if (val) {
					val.category = category;
				}
				return val;
			}

			if (validator === Validators.required) {
				const val = validateRequired(value);
				if (val) val.category = category;

				return val;
			}

			if (validator === Validators.requiredChecked) {
				const val = validateRequiredChecked(value);
				if (val) val.category = category;

				return val;
			}

			if (validator === Validators.email) {
				const val = validateEmail(value);
				if (val) val.category = category;

				return val;
			}

			if (validator === Validators.minLength()) {
				const val = validateMinLength(value, limit);
				if (val) val.category = category;

				return val;
			}

			if (validator === Validators.maxLength()) {
				const val = validateMaxLength(value, limit);
				if (val) val.category = category;

				return val;
			}

			return null;
		})
		.filter((result) => result !== null) as ValidationError[];
}

export function clearErrors(event: Event) {
	const element = event.target as HTMLInputElement;
	element.parentElement?.setAttribute('data-validator-haserrors', 'false');
	element.setAttribute('data-validator-haserrors', 'false');
}

function validateMin(value: string, limit: number): ValidationError | null {
	const isValid = parseInt(value, 10) >= limit;

	if (!isValid) {
		return {
			value,
			error: 'min',
			limit: limit,
		};
	}

	return null;
}

function validateMax(value: string, limit: number): ValidationError | null {
	const isValid = parseInt(value, 10) <= limit;

	if (!isValid) {
		return {
			value,
			error: 'max',
			limit: limit,
		};
	}

	return null;
}

function validateRequired(value: string): ValidationError | null {
	const isValid = !!value;

	if (!isValid) {
		return {
			value,
			error: 'required',
		};
	}

	return null;
}

function validateRequiredChecked(value: string): ValidationError | null {
	const isValid = value === 'checked';

	if (!isValid) {
		return {
			value,
			error: 'requiredChecked',
		};
	}

	return null;
}

// TODO: review regexp vulnerability
function validateEmail(value: string): ValidationError | null {
	const isValid = String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (!isValid) {
		return {
			value,
			error: 'email',
		};
	}

	return null;
}

function validateMinLength(value: string, limit: number): ValidationError | null {
	const isValid = value.length >= limit;

	if (!isValid) {
		return {
			value,
			error: 'minLength',
			limit: limit,
		};
	}

	return null;
}

function validateMaxLength(value: string, limit: number): ValidationError | null {
	const isValid = value.length <= limit;

	if (!isValid) {
		return {
			value,
			error: 'minLength',
			limit: limit,
		};
	}

	return null;
}
