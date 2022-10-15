import type { ValidationError } from './validator.types';
import { Validators } from './validators';

export function validate(event: FocusEvent) {
	// NOTE: event target attribute names are converted to lowercase
	const element = event.target as HTMLInputElement;
	const attributeNames = element?.getAttributeNames() || [];
	const validatorAttirbutes = attributeNames.filter((attribute) =>
		attribute.includes('data-validator-')
	);
	const value = element.value;

	const validityArray: any[] = validatorAttirbutes
		.map((validator) => validator.replace('data-', ''))
		.map((validator) => {
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

			if (validator === Validators.minLength()) {
				const limit = parseInt(element.getAttribute('data-validator-minlength') || '0', 10);
				return validateMinLength(value, limit);
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
function validateMinLength(value: string, limit: number): true | ValidationError {
	const isValid = value.length >= limit;

	if (!isValid) {
		return {
			error: 'minLength',
			limit: limit,
		};
	}
	return true;
}

function validateMin(value: string, limit: number): true | ValidationError {
	const isValid = parseInt(value, 10) >= limit;

	if (!isValid) {
		return {
			error: 'min',
			limit: limit,
		};
	}
	return true;
}

function validateMax(value: string, limit: number): true | ValidationError {
	const isValid = parseInt(value, 10) <= limit;

	if (!isValid) {
		return {
			error: 'max',
			limit: limit,
		};
	}
	return true;
}

function validateRequired(value: string): true | ValidationError {
	const isValid = !!value;
	if (!isValid) {
		return {
			error: 'required',
		};
	}
	return true;
}

function validateRequiredChecked(value: string): true | ValidationError {
	const isValid = value === 'checked';
	if (!isValid) {
		return {
			error: 'requiredChecked',
		};
	}
	return true;
}
