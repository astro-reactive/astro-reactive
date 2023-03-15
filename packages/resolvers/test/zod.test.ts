import { describe, expect, test } from "vitest";
import { z } from "zod";
import { zodResolver } from "../zod";

describe("Zod Resolver", () => {
  test("resolves given zod schema properly", () => {
    const schema = z.object({
      productName: z.string().min(3).max(25),
      price: z.number(),
      quantity: z.number().optional(),
    });

    const resolvedFields = zodResolver(schema);

    expect(resolvedFields.get("productName")).toHaveLength(3);
    expect(resolvedFields.get("productName")).toStrictEqual([
      "validator-required",
      "validator-min:3",
      "validator-max:25",
    ]);
    expect(resolvedFields.get("price")).toHaveLength(1);
    expect(resolvedFields.get("quantity")).toHaveLength(0);
  });
});
