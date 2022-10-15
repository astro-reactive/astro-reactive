export type HookType = 'onSubmit' | 'onControlBlur' | 'all';

export type ValidationResult = true | ValidationError;

export type ValidationError = {
	error: string;
	limit?: number;
};
