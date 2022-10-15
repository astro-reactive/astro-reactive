// improvement: implement min&max inclusive/exclusive
export class Validators {
	static min(min?: number): string {
		const label = 'validator-min';
		if (min !== undefined) {
			return `${label}:${min}`;
		}
		return label;
	}

	static max(max?: number): string {
		const label = 'validator-max';
		if (max !== undefined) {
			return `${label}:${max}`;
		}
		return label;
	}

	static get required(): string {
		return `validator-required`;
	}

	static get requiredChecked(): string {
		return `validator-required:checked`;
	}

	static get email(): string {
		return `validator-email`;
	}

	static minLength(minLength?: number): string {
		const label = 'validator-minlength';
		if (minLength) {
			return `${label}:${minLength}`;
		}
		return label;
	}

	static maxLength(maxLength: number): string {
		const label = 'validator-maxlength';
		return `${label}:${maxLength}`;
	}

	static pattern(pattern: string | RegExp): string {
		return `validator-pattern:${pattern}`;
	}
}
