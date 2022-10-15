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
			if (validator === Validators.required) {
				const isValid = !!value;
				if (!isValid) {
					return {
						error: 'required',
					};
				}
			}

			if (validator === Validators.minLength()) {
				const limit = parseInt(element.getAttribute('data-validator-minlength') || '0', 10);
				const isValid = value.length >= limit;

				if (!isValid) {
					return {
						error: 'minLength',
						limit: limit,
					};
				}
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
