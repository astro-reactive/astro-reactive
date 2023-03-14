import { ZodFirstPartyTypeKind, ZodObject } from "zod";
import type { ResolvedField, ResolvedValidator } from "@astro-reactive/common";

export function zodResolver(schema: ZodObject<any>): ResolvedField {
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

    resolvedMap.set(field, validators);
  }
  return Object.fromEntries(resolvedMap.entries());
}
