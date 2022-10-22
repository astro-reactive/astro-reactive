export type HookType = "onSubmit" | "onControlBlur" | "all";

export type ValidationResult = true | ValidationError;

export type ValidationError = {
  error: string;
  value: string;
  limit?: number;
};
