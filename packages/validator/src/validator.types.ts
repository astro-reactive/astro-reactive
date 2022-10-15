export type HookType = 'onSubmit' | 'onControlBlur' | 'all';

export type ValidationError = {
	error: string;
	limit?: number;
};
