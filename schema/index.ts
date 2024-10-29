import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({
    message: "Por favor ingresar un correo valido",
  }),
  percent: z.coerce.number().gte(0).lte(100, "Ingresar un valor valido de descuento"),
});
