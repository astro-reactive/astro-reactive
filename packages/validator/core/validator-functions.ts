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
				return validateMin(value, limit, category);
			}

			if (validator === Validators.max()) {
				return validateMax(value, limit, category);
			}

			if (validator === Validators.required) {
				return validateRequired(value, category);
			}

			if (validator === Validators.requiredChecked) {
				return validateRequiredChecked(value, category);
			}

			if (validator === Validators.email) {
				return validateEmail(value, category);
			}

			if (validator === Validators.minLength()) {
				return validateMinLength(value, limit, category);
			}

			if (validator === Validators.maxLength()) {
				return validateMaxLength(value, limit, category);
			}

			return null;
		})
		.filter((result) => result !== null) as ValidationError[];
}

/**
 * Clear all validation errors triggered by `Validator` component
 * @param event - A DOM event
 */
export function clearErrors(event: Event) {
	const categories = ['error', 'warn', 'info'];
	const element = event.target as HTMLInputElement;
	const parent = element.parentElement as HTMLElement;

	categories.forEach((category) => {
		parent.setAttribute(`data-validator-${category}`, 'false');
		element.setAttribute(`data-validator-${category}`, 'false');
	});
}

function validateMin(value: string, limit: number, category: string): ValidationError | null {
	const isValid = parseInt(value, 10) >= limit;

	if (!isValid) {
		return {
			value,
			error: 'min',
			limit: limit,
			category,
		};
	}

	return null;
}

function validateMax(value: string, limit: number, category: string): ValidationError | null {
	const isValid = parseInt(value, 10) <= limit;

	if (!isValid) {
		return {
			value,
			error: 'max',
			limit: limit,
			category,
		};
	}

	return null;
}

function validateRequired(value: string, category: string): ValidationError | null {
	const isValid = !!value;

	if (!isValid) {
		return {
			value,
			error: 'required',
			category,
		};
	}

	return null;
}

function validateRequiredChecked(value: string, category: string): ValidationError | null {
	const isValid = value === 'checked';

	if (!isValid) {
		return {
			value,
			error: 'requiredChecked',
			category,
		};
	}

	return null;
}

// TODO: review regexp vulnerability
function validateEmail(value: string, category: string): ValidationError | null {
	const isValid = String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (!isValid) {
		return {
			value,
			error: 'email',
			category,
		};
	}

	return null;
}

function validateMinLength(value: string, limit: number, category: string): ValidationError | null {
	const isValid = value.length >= limit;

	if (!isValid) {
		return {
			value,
			error: 'minLength',
			limit: limit,
			category,
		};
	}

	return null;
}

function validateMaxLength(value: string, limit: number, category: string): ValidationError | null {
	const isValid = value.length <= limit;

	if (!isValid) {
		return {
			value,
			error: 'minLength',
			limit: limit,
			category,
		};
	}

	return null;
}
