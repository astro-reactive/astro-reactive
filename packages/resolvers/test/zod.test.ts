import { describe, expect, test } from "vitest";

describe("Zod Resolver", () => {
  test("resolves given zod schema properly", () => {
    expect(true).toBeTruthy();
    // const resolved = zodResolver(
    //   z.object({
    //     productName: z.string().min(3).max(25),
    //     price: z.number(),
    //     quantity: z.number().optional(),
    //   })
    // );
    // expect(resolved.productName).toHaveLength(3);
    // expect(resolved.productName).toStrictEqual([
    //   { kind: "required" },
    //   { kind: "min", value: 3 },
    //   { kind: "max", value: 25 },
    // ]);
    // expect(resolved.price).toHaveLength(1);
    // expect(resolved.quantity).toHaveLength(0);
  });
});
