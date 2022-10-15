export class Validators {
	static min(min: number): string {
		return `validator-min:${min}`;
	}

	static max(max: number): string {
		return `validator-max:${max}`;
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

	static minLength(minLength: number): string {
		return `validator-minlength:${minLength}`;
	}

	static maxLength(maxLength: number): string {
		return `validator-maxlength:${maxLength}`;
	}

	static pattern(pattern: string | RegExp): string {
		return `validator-pattern:${pattern}`;
	}
}
