import type { z } from "zod";

export default function zodResolver(schema: ReturnType<typeof z.object>) {
  const obj = schema._def.shape();
  for (let i in obj) {
    console.log(i);
  }
}
