import { ZodFirstPartyTypeKind, ZodTypeAny } from "zod";
import type { ResolvedField, ResolvedValidator } from "@astro-reactive/common";

export function zodResolver(
  schema: Record<string, ZodTypeAny>
): ResolvedField[] {
  // const schemaObject = schema._def.shape();
  const formGroup = [];

  for (let field in schema) {
    const definition = schema[field]!._def;
    const isOptional =
      definition.typeName === ZodFirstPartyTypeKind.ZodOptional;
    const fieldDefinition = isOptional ? definition.innerType._def : definition;

    const validators: ResolvedValidator[] = [];

    if (!isOptional) validators.push({ kind: "required" });

    fieldDefinition.checks.forEach((validation: any) => {
      validators.push(validation);
    });

    formGroup.push({ _dev: schema[field], name: field, validators });
  }
  return formGroup;
}

export const withZod = (validationSchema: ZodTypeAny): ResolvedValidator[] => {
  const definition = validationSchema._def;
  const isOptional = definition.typeName === ZodFirstPartyTypeKind.ZodOptional;
  const fieldDefinition = isOptional ? definition.innerType._def : definition;

  const validators: ResolvedValidator[] = [];

  if (!isOptional) validators.push({ kind: "required" });

  fieldDefinition.checks.forEach((validation: any) => {
    validators.push(validation);
  });

  return validators;
};
