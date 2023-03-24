import type { ValidationType, ValidatorRule } from "./validator.types";

export type ResolvedField = Map<string, ValidatorRule[]>;

export interface ResolvedValidator {
  kind: ValidationType;
  value?: string | number;
  message?: string;
}
