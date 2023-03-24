import type { ResolvedValidator, ValidatorRule } from "@astro-reactive/common";
import { Validators } from "@astro-reactive/validator/core";

/**
 * @param validators resolved validators from resolver function
 * @returns array of ValidatorRule
 */
export function transformToValidatorRules(
  validators: ResolvedValidator[]
): ValidatorRule[] {
  return validators.map((validator) => {
    // this means doesn't use resolver
    if (typeof validator === "string" || !("kind" in validator))
      return validator;

    if (validator.kind === "min")
      return Validators.min(Number(validator.value));
    if (validator.kind === "max")
      return Validators.max(Number(validator.value));
    if (validator.kind === "required") return Validators.required;
    if (validator.kind === "email") return Validators.email;

    return "";
  });
}
