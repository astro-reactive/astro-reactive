import type { ValidationType } from "./validator.types";

export interface ResolvedField {
  [x: string]: ResolvedValidator[];
}

export interface ResolvedValidator {
  kind: ValidationType;
  value?: string | number;
  message?: string;
}
