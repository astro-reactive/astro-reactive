export type HookType = "onSubmit" | "onControlBlur" | "all";

export type ValidatorRules =
  | string[]
  | { validator: string; category?: string }[];

export type ValidationResult = true | ValidationError;

export type ValidationError = {
  error: string;
  value: string;
  limit?: number;
  category?: string;
};
