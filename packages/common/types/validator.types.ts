export type HookType = "onSubmit" | "onControlBlur" | "all";

export type ValidationHooks = "" | "blur" | "keypress" | "click"; // More to be added

export type ValidationType = "max" | "min" | "required" | "email";

export type CategoryType = "error" | "warn" | "info";

export type ValidatorRule =
  | string
  | { validator: string; category?: CategoryType };

export type ValidationResult = true | ValidationError;

export type ValidationError = {
  error: string;
  value: string;
  limit?: number;
  category?: string;
};
