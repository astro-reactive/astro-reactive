import { ZodFirstPartyTypeKind, ZodObject } from "zod";
import type { ResolvedValidator, ValidatorRule } from "@astro-reactive/common";
import { transformToValidatorRules } from "@astro-reactive/validator/core";

export function zodResolver(
  schema: ZodObject<any>
): Map<string, ValidatorRule[]> {
  const resolvedMap = new Map();
  const schemaDefinition = schema._def.shape();

  for (const field in schemaDefinition) {
    const definition = schemaDefinition[field]!._def;
    const isOptional =
      definition.typeName === ZodFirstPartyTypeKind.ZodOptional;
    const isAny = definition.typeName === ZodFirstPartyTypeKind.ZodAny;

    const fieldDefinition = isOptional ? definition.innerType._def : definition;

    const validators: ResolvedValidator[] = [];

    if (isAny) continue;
    if (!isOptional) validators.push({ kind: "required" });

    fieldDefinition.checks.length &&
      fieldDefinition.checks.forEach((validation: any) => {
        validators.push(validation);
      });

    resolvedMap.set(field, transformToValidatorRules(validators));
  }

  return resolvedMap;
}
