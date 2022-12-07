/**
 * Provides a set of built-in validators that can be used by form controls.
 */
// improvement: implement min&max inclusive/exclusive
export class Validators {
	/**
	 * Validator that requires the value to be greater than or equal to the provided number.
	 * @param min - minimum number
	 */
	static min(min?: number): string {
		const label = 'validator-min';
		if (min !== undefined) {
			return `${label}:${min}`;
		}
		return label;
	}

	/**
	 * Validator that requires the value to be less than or equal to the provided number.
	 * @param max - maximum number
	 */
	static max(max?: number): string {
		const label = 'validator-max';
		if (max !== undefined) {
			return `${label}:${max}`;
		}
		return label;
	}

	/**
	 * Validator that requires a non-empty value.
	 */
	static get required(): string {
		return `validator-required`;
	}

	/**
	 * Validator that requires a field to be checked
	 */
	static get requiredChecked(): string {
		return `validator-required:checked`;
	}

	/**
	 * Validator that requires the value to be in a proper email format.
	 */
	static get email(): string {
		return `validator-email`;
	}

	/**
	 * Validator that requires the length of the value to be greater than or equal to the provided minimum length.
	 * @param minLength - minimum string length
	 */
	static minLength(minLength?: number): string {
		const label = 'validator-minlength';
		if (minLength !== undefined) {
			return `${label}:${minLength}`;
		}
		return label;
	}

	/**
	 * Validator that requires the length of the value to be less than or equal to the provided maximum length
	 * @param maxLength - maximum string length
	 */
	static maxLength(maxLength?: number): string {
		const label = 'validator-maxlength';
		if (maxLength !== undefined) {
			return `${label}:${maxLength}`;
		}
		return label;
	}

	// static pattern(pattern: string | RegExp): string {
	// 	return `validator-pattern:${pattern}`;
	// }
}
