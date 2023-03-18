import { z } from "zod";
import type { ResolvedField, ResolvedValidator } from "@astro-reactive/common";
import { transformToValidatorRules } from "@astro-reactive/validator/core";

/**
 * @param schema zod schema to resolve
 * @returns map of field name to its ValidatorRules
 */
export function zodResolver<T extends z.ZodType<object, z.ZodObjectDef>>(
  schema: T
): ResolvedField {
  const resolvedMap: ResolvedField = new Map();

  // get schema 'shape' or object representation;
  const schemaDefinition = schema._def.shape();

  for (const field in schemaDefinition) {
    // get a field's definition
    const definition = schemaDefinition[field]?._def;
    if (!definition) continue;

    const isOptional =
      definition.typeName === z.ZodFirstPartyTypeKind.ZodOptional;
    const isAny = definition.typeName === z.ZodFirstPartyTypeKind.ZodAny;

    const fieldDefinition = isOptional ? definition.innerType._def : definition;

    const validators: ResolvedValidator[] = [];

    if (isAny) continue;
    if (!isOptional) validators.push({ kind: "required" });

    fieldDefinition.checks.length &&
      fieldDefinition.checks.forEach((zodValidation: any) => {
        validators.push(zodValidation); // ResolvedValidator have similar type to zod's check definition
      });

    resolvedMap.set(field, transformToValidatorRules(validators));
  }

  return resolvedMap;
}
