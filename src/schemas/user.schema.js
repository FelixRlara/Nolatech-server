import { z } from "zod";

export const updateUserSchema = z.object({
  name: z
    .string({ required_error: "Se necesita el nombre" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }).optional(),

  lastname: z
    .string({ required_error: "El apellido es necesario" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }).optional(),

  username: z
    .string({ required_error: "El usuario es necesario" })
    .min(2, { message: "minimo 2 caracteres" })
    .max(20, { message: "maximo 20 caracteres" }).optional(),

  email: z
    .string({ required_error: "Se necesita el correo" })
    .email({ message: "correo invalido" }).optional(),

  password: z
    .string({ required_error: "contraseña invalida" })
    .min(6, { message: "la contraseña debe contener minimo 6 caracteres" }).optional(true),
});

export const getUserSchema = z.object({
  id: z.string({ required_error: "Se necesita el ID" })
});





