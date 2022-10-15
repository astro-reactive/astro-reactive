export function validate(event: FocusEvent) {
	// NOTE: event target attribute names are converted to lowercase
	const element = event.target as HTMLInputElement;
	const attributeNames = element?.getAttributeNames() || [];
	const validatorAttirbutes = attributeNames.filter((attribute) =>
		attribute.includes('data-label-validator')
	);
	const value = element.value;

	const validityArray: any[] = validatorAttirbutes.map((validatorName) => {
		const validator = validatorName.replace('data-label-validator-', '');

		// insert logic for each validator
		if (validator === 'required') {
			const isValid = !!value;
			if (!isValid) {
				return {
					error: 'required',
				};
			}
		}

		if (validator === 'minlength') {
			const limit = parseInt(element.getAttribute('data-label-validator-minlength') || '0', 10);
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
		element.setAttribute('data-label-hasErrors', 'true');
		// TODO: display error messages
	}
}

export function clearErrors(event: Event) {
	const element = event.target as HTMLInputElement;
	element.setAttribute('data-label-haserrors', 'false');
}
