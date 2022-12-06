/**
 * A class containing validation methods
 */
// improvement: implement min&max inclusive/exclusive
export class Validators {
	/**
	 * validate minimum value
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
	 * validate maximum value
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
	 * validate required field
	 */
	static get required(): string {
		return `validator-required`;
	}

	/**
	 * validate a field must be checked
	 */
	static get requiredChecked(): string {
		return `validator-required:checked`;
	}

	/**
	 * validate email format
	 */
	static get email(): string {
		return `validator-email`;
	}

	/**
	 * validate a string's minimum length
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
	 * validate a string's maximum length
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
