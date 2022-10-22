import type { ValidationError } from 'common/types';
import { Validators } from './validator-names';

/**
 * given the value and validators, `validate()` returns an array of errors
 * @param value - value to be validated
 * @param validators - names of validation logic to be applied
 * @returns errors - array of errors `ValidationError`
 */
export function validate(value: string, validators: string[]): ValidationError[] {
	return validators
		.map((validator) => validator.replace('data-', ''))
		.map((attribute): ValidationError | null => {
			// TODO: implement dynamic import of function depending on validators
			const split = attribute.split(':');
			const validator = split[0];
			const limitStr = split[1];
			const limit = parseInt(limitStr || '0', 10);

			if (validator === Validators.min()) {
				return validateMin(value, limit);
			}

			if (validator === Validators.max()) {
				return validateMax(value, limit);
			}

			if (validator === Validators.required) {
				return validateRequired(value);
			}

			if (validator === Validators.requiredChecked) {
				return validateRequiredChecked(value);
			}

			if (validator === Validators.email) {
				return validateEmail(value);
			}

			if (validator === Validators.minLength()) {
				return validateMinLength(value, limit);
			}

			if (validator === Validators.maxLength()) {
				return validateMaxLength(value, limit);
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
