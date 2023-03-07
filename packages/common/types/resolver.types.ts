export interface ResolvedSchema {
  name: string;
  validators: ResolvedValidator[];
}

export type Kind = "max" | "min" | "required" | "email";

export interface ResolvedValidator {
  kind: Kind;
  value?: string | number;
}
