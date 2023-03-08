export interface ResolvedField {
  [x: string]: ResolvedValidator[];
}

export type Kind = "max" | "min" | "required" | "email";

export interface ResolvedValidator {
  kind: Kind;
  value?: string | number;
  message?: string;
}
