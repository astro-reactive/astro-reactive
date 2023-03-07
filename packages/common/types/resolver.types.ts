export interface ResolvedField {
  name: string;
  type?: string;
  validators: ResolvedValidator[];
}

export type Kind = "max" | "min" | "required" | "email";

export interface ResolvedValidator {
  kind: Kind;
  value?: string | number;
  message?: string;
}
