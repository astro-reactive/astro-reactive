export type HookType = "onSubmit" | "onControlBlur" | "all";

export type CategoryType = "error" | "warn" | "info";

export type ValidatorRules =
  | string[]
  | { validator: string; category?: CategoryType }[];

export type ValidationResult = true | ValidationError;

export type ValidationError = {
  error: string;
  value: string;
  limit?: number;
  category?: string;
};
