import type { ValidationResult } from './validator.types';
import { Validators } from './validators';

export function validate(event: FocusEvent) {
	// NOTE: event target attribute names are converted to lowercase
	const element = event.target as HTMLInputElement;
	const attributeNames = element?.getAttributeNames() || [];
	const validatorAttirbutes = attributeNames.filter((attribute) =>
		attribute.includes('data-validator-')
	);
	const value = element.value;

	const validityArray: ValidationResult[] = validatorAttirbutes
		.map((validator) => validator.replace('data-', ''))
		.map((validator): ValidationResult => {
			// insert logic for each validator
			// TODO: implement a map of functions,validator

			if (validator === Validators.min()) {
				const limit = parseInt(element.getAttribute('data-validator-min') || '0', 10);
				return validateMin(value, limit);
			}

			if (validator === Validators.max()) {
				const limit = parseInt(element.getAttribute('data-validator-min') || '0', 10);
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
				const limit = parseInt(element.getAttribute('data-validator-minlength') || '0', 10);
				return validateMinLength(value, limit);
			}

			if (validator === Validators.maxLength()) {
				const limit = parseInt(element.getAttribute('data-validator-maxlength') || '0', 10);
				return validateMaxLength(value, limit);
			}

			return true;
		});

	const errors = validityArray.filter((result) => result !== true);

	// set element hasErrors
	if (errors.length) {
		element.parentElement?.setAttribute('data-validator-haserrors', 'true');
		element.setAttribute('data-validator-haserrors', 'true');
		// TODO: display error messages
	}
}

export function clearErrors(event: Event) {
	const element = event.target as HTMLInputElement;
	element.parentElement?.setAttribute('data-validator-haserrors', 'false');
	element.setAttribute('data-validator-haserrors', 'false');
}

function validateMin(value: string, limit: number): ValidationResult {
	const isValid = parseInt(value, 10) >= limit;

	if (!isValid) {
		return {
			error: 'min',
			limit: limit,
		};
	}
	return true;
}

function validateMax(value: string, limit: number): ValidationResult {
	const isValid = parseInt(value, 10) <= limit;

	if (!isValid) {
		return {
			error: 'max',
			limit: limit,
		};
	}
	return true;
}

function validateRequired(value: string): ValidationResult {
	const isValid = !!value;
	if (!isValid) {
		return {
			error: 'required',
		};
	}
	return true;
}

function validateRequiredChecked(value: string): ValidationResult {
	const isValid = value === 'checked';
	if (!isValid) {
		return {
			error: 'requiredChecked',
		};
	}
	return true;
}

// TODO: review regexp vulnerability
function validateEmail(value: string): ValidationResult {
	const isValid = String(value)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);

	if (!isValid) {
		return {
			error: 'email',
		};
	}
	return true;
}

function validateMinLength(value: string, limit: number): ValidationResult {
	const isValid = value.length >= limit;

	if (!isValid) {
		return {
			error: 'minLength',
			limit: limit,
		};
	}
	return true;
}

function validateMaxLength(value: string, limit: number): ValidationResult {
	const isValid = value.length <= limit;

	if (!isValid) {
		return {
			error: 'minLength',
			limit: limit,
		};
	}
	return true;
}
