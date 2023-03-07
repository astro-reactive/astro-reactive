import { ZodFirstPartyTypeKind, ZodTypeAny } from "zod";
import type { ResolvedSchema, ResolvedValidator } from "@astro-reactive/common";

export default function zodResolver(schema: ZodTypeAny): ResolvedSchema[] {
  const obj = schema._def.shape();
  const formGroup = [];

  for (let i in obj) {
    const definition = obj[i]!._def;
    const isOptional =
      definition.typeName === ZodFirstPartyTypeKind.ZodOptional;
    const fieldDefinition = isOptional ? definition.innerType._def : definition;

    const validators: ResolvedValidator[] = [];

    if (!isOptional) validators.push({ kind: "required" });

    fieldDefinition.checks.forEach((validation: any) => {
      validators.push(validation);
    });

    formGroup.push({ _dev: obj[i], name: i, validators });
  }
  return formGroup;
}
