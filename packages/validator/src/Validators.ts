export class Validators {
	static min(min: number): string {
		return `validator-min:${min}`;
	}

	static max(max: number): string {
		return `validator-max:${max}`;
	}

	static required(): string {
		return `validator-required`;
	}

	static requiredChecked(): string {
		return `validator-required:checked`;
	}

	static email(): string {
		return `validator-email`;
	}

	static minLength(minLength: number): string {
		return `validator-minLength:${minLength}`;
	}

	static maxLength(maxLength: number): string {
		return `validator-maxLength:${maxLength}`;
	}

	static pattern(pattern: string | RegExp): string {
		return `validator-pattern:${pattern}`;
	}
}
